require('dotenv').config();

const express    = require('express');
const path       = require('path');
const https      = require('https');
const { registerDriveAnalysisRoute } = require('./backend/driveAnalysis');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──
app.use(express.json({ limit: '10mb' })); // large enough for base64 frames
app.use(express.static(path.join(__dirname)));

// ════════════════════════════════════════════════════
//  POST /api/ai-suggestion
//  Used by theory test hybrid mode & "Ask AI for more"
// ════════════════════════════════════════════════════
app.post('/api/ai-suggestion', (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GROQ_API_KEY not set' });

  const body = JSON.stringify({
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'system',
        content: 'You are PassPilot, a friendly and encouraging UK driving theory test coach. UK spelling throughout.'
      },
      { role: 'user', content: prompt }
    ],
    max_tokens: 400,
    temperature: 0.7
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

  const groqReq = https.request(options, groqRes => {
    let data = '';
    groqRes.on('data', chunk => { data += chunk; });
    groqRes.on('end', () => {
      try {
        const parsed     = JSON.parse(data);
        if (parsed.error) return res.status(500).json({ error: parsed.error.message });
        const suggestion = parsed.choices[0].message.content;
        res.json({ suggestion });
      } catch (e) {
        res.status(500).json({ error: 'Failed to parse Groq response' });
      }
    });
  });

  groqReq.on('error', err => res.status(500).json({ error: err.message }));
  groqReq.write(body);
  groqReq.end();
});

// ════════════════════════════════════════════════════
//  POST /api/analyse-drive
//  Used by the Drive Analyser — Groq vision model
// ════════════════════════════════════════════════════
registerDriveAnalysisRoute(app);

// ── Serve index.html for all other routes ──
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚗 PassPilot running at http://localhost:${PORT}`);
  console.log(`   Theory AI: POST /api/ai-suggestion`);
  console.log(`   Drive AI:  POST /api/analyse-drive\n`);
});