'use strict';

const https = require('https');

/**
 * Register the POST /api/analyse-drive route on an Express app.
 * Sends a driving frame to Groq's vision model and returns structured feedback.
 * @param {import('express').Application} app
 */
function registerDriveAnalysisRoute(app) {
  app.post('/api/analyse-drive', (req, res) => {
    const { frame, mimeType = 'image/jpeg', notes = '' } = req.body;

    if (!frame) {
      return res.status(400).json({ error: 'No frame data provided' });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GROQ_API_KEY not set' });
    }

    const systemPrompt = `You are a qualified UK DVSA driving examiner and ADI (Approved Driving Instructor).
Analyse the provided driving footage frame and return ONLY a valid JSON object with this exact structure:
{
  "overall_grade": "Excellent|Good|Satisfactory|Needs Improvement|Serious Faults",
  "summary": "2-3 sentence overall assessment",
  "positives": ["positive observation 1", "positive observation 2", "positive observation 3"],
  "faults": [
    {
      "type": "Minor|Serious|Dangerous",
      "observation": "what was observed",
      "correction": "how to correct it",
      "highway_code": "Relevant Highway Code rule"
    }
  ],
  "focus_points": ["key focus point 1", "key focus point 2", "key focus point 3"],
  "instructor_note": "Encouraging closing note from the instructor"
}
Use UK driving standards and Highway Code references. Be specific and constructive. Return ONLY the JSON, no markdown or preamble.`;

    const body = JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: `data:${mimeType};base64,${frame}` },
            },
            {
              type: 'text',
              text: `Please analyse this driving footage frame. Additional context: ${notes}`,
            },
          ],
        },
      ],
      max_tokens: 1000,
      temperature: 0.3,
    });

    const options = {
      hostname: 'api.groq.com',
      path: '/openai/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const groqReq = https.request(options, (groqRes) => {
      let data = '';
      groqRes.on('data', (chunk) => { data += chunk; });
      groqRes.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) return res.status(500).json({ error: parsed.error.message });

          const content = parsed.choices[0].message.content;
          // Strip any accidental markdown fences before parsing
          const clean = content.replace(/```json|```/g, '').trim();
          const feedback = JSON.parse(clean);
          res.json(feedback);
        } catch (e) {
          console.error('[driveAnalysis] Parse error:', e.message);
          res.status(500).json({ error: 'Failed to parse drive analysis response' });
        }
      });
    });

    groqReq.on('error', (err) => {
      console.error('[driveAnalysis] Request error:', err.message);
      res.status(500).json({ error: err.message });
    });
    groqReq.write(body);
    groqReq.end();
  });
}

module.exports = { registerDriveAnalysisRoute };