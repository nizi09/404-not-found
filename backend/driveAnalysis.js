'use strict';

const https = require('https');

/**
 * POST /api/analyse-drive
 * Body: { frame: <base64 string>, mimeType: 'image/jpeg', notes: '' }
 * Returns: JSON feedback object
 */
function registerDriveAnalysisRoute(app) {
  app.post('/api/analyse-drive', (req, res) => {
    const { frame, mimeType = 'image/jpeg', notes = '' } = req.body;

    if (!frame) {
      return res.status(400).json({ error: 'No frame data provided' });
    }

    analyseDrivingFrame(frame, mimeType, notes, (err, feedback) => {
      if (err) {
        console.error('Drive analysis error:', err.message);
        return res.status(500).json({ error: err.message });
      }
      res.json(feedback);
    });
  });
}

function analyseDrivingFrame(base64Frame, mimeType, notes, callback) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return callback(new Error('GROQ_API_KEY not set in environment'), null);
  }

  const systemPrompt = `You are Dave Thornton, an experienced DVSA-certified UK driving instructor with 20 years of experience.
You analyse driving footage frames and give structured, honest, constructive feedback exactly as you would during a real lesson.
You reference the UK Highway Code and DVSA standards throughout.
Always be encouraging but precise.
You MUST respond with valid JSON only — no markdown, no preamble, no explanation outside the JSON.`;

  const userPrompt = `Analyse this driving footage frame and give instructor-level feedback.
${notes ? `Driver notes: ${notes}` : ''}

Respond with ONLY this JSON structure:
{
  "overall_grade": "Excellent | Good | Satisfactory | Needs Improvement | Serious Faults",
  "summary": "2-3 sentence overall assessment as an instructor would say it",
  "positives": ["2-4 specific things done well"],
  "faults": [
    {
      "type": "Minor | Serious | Dangerous",
      "observation": "what was observed",
      "correction": "exactly what the driver should do instead",
      "highway_code": "relevant Highway Code rule"
    }
  ],
  "focus_points": ["2-3 top priority things to work on next lesson"],
  "instructor_note": "personal encouraging sign-off from instructor (1-2 sentences)"
}`;

  const body = JSON.stringify({
    model: 'meta-llama/llama-4-scout-17b-16e-instruct',
    messages: [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: {
              url: `data:${mimeType};base64,${base64Frame}`
            }
          },
          {
            type: 'text',
            text: userPrompt
          }
        ]
      }
    ],
    max_tokens: 1024,
    temperature: 0.4
  });

  const options = {
    hostname: 'api.groq.com',
    path: '/openai/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'Content-Length': Buffer.byteLength(body)
    }
  };

  const req = https.request(options, (groqRes) => {
    let data = '';
    groqRes.on('data', chunk => { data += chunk; });
    groqRes.on('end', () => {
      try {
        const parsed = JSON.parse(data);

        if (parsed.error) {
          return callback(new Error(`Groq error: ${parsed.error.message}`), null);
        }

        const rawText = parsed.choices[0].message.content;
        // Strip any accidental markdown fences
        const clean = rawText.replace(/```json|```/g, '').trim();
        const feedback = JSON.parse(clean);
        callback(null, feedback);
      } catch (e) {
        callback(new Error(`Failed to parse Groq response: ${e.message}`), null);
      }
    });
  });

  req.on('error', err => callback(new Error(`Network error: ${err.message}`), null));
  req.write(body);
  req.end();
}

module.exports = { registerDriveAnalysisRoute };