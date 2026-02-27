'use strict';

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

  const apiKey = process.env.GROQ_API_KEY;

  const body = JSON.stringify({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: 'You are PassPilot, a friendly UK driving theory test coach.' },
      { role: 'user', content: prompt }
    ],
    max_tokens: 300,
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

  const req = https.request(options, (res) => {
    let responseBody = '';
    res.on('data', (chunk) => { responseBody += chunk; });
    res.on('end', () => {
      try {
        const parsed = JSON.parse(responseBody);
        console.log('Groq raw response:', JSON.stringify(parsed));

        if (parsed.error) {
          callback(new Error(parsed.error.message), null);
          return;
        }

        const suggestion = parsed.choices[0].message.content;
        callback(null, suggestion);
      } catch (e) {
        callback(e, null);
      }
    });
  });

  req.on('error', (err) => {
    callback(err, null);
  });

  req.write(body);
  req.end();
}

module.exports = { getAISuggestion };
