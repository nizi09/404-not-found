const https = require('https');

function getAISuggestion(results, callback) {
  const prompt = `You are PassPilot, an AI assistant helping a UK learner driver prepare for their theory test.

Here are their latest test results:
- Score: ${results.score}%
- Readiness: ${results.readiness}
- Weak areas: ${results.weak_areas.join(', ')}
- Total questions: ${results.total_questions}

Give them:
1. A short encouraging message (1-2 sentences)
2. Their top 2 weak areas to focus on with specific tips
3. One specific revision action for this week

Keep it friendly, concise and actionable. Max 100 words. UK spelling.`;

  const apiKey = process.env.GEMINI_API_KEY;
  const data = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }]
  });

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => { body += chunk; });
    res.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        console.log('Gemini raw response:', JSON.stringify(parsed));
        if (parsed.error) {
          callback(new Error(parsed.error.message), null);
          return;
        }
        const suggestion = parsed.candidates[0].content.parts[0].text;
        callback(null, suggestion);
      } catch(e) {
        callback(e, null);
      }
    });
  });

  req.on('error', (err) => {
    callback(err, null);
  });

  req.write(data);
  req.end();
}

module.exports = { getAISuggestion };