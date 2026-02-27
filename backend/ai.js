'use strict';

const https = require('https');

/**
 * Get an AI revision suggestion from Groq based on test results.
 * @param {Object} results - The results object from calculateResults()
 * @param {Function} callback - Node-style callback(err, suggestion)
 */
function getAISuggestion(results, callback) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return callback(new Error('GROQ_API_KEY is not set in environment'), null);
  }

  const weakLabels = (results.weak_areas || []).join(', ') || 'None identified';

  const prompt = `You are PassPilot, an AI co-pilot for UK learner drivers preparing for their theory test.

A student just completed a mock theory test:
- Score: ${results.scorePercent ?? results.score}% (${results.correct}/${results.total_questions} correct)
- Weak areas: ${weakLabels}
- Passed: ${results.passed ? 'Yes' : 'No (need 86% to pass)'}

Give a friendly, encouraging, specific revision plan:
1. A brief encouraging message (1-2 sentences)
2. Top 2-3 priority topics to revise with specific tips
3. A suggested study action for this week
4. One motivational sign-off line

Keep it concise, warm and practical. UK spelling.`;

  const body = JSON.stringify({
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'system',
        content: 'You are PassPilot, a friendly and encouraging UK driving theory test coach. UK spelling throughout.',
      },
      { role: 'user', content: prompt },
    ],
    max_tokens: 400,
    temperature: 0.7,
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

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      try {
        const parsed = JSON.parse(data);
        if (parsed.error) return callback(new Error(parsed.error.message), null);
        const suggestion = parsed.choices[0].message.content;
        callback(null, suggestion);
      } catch (e) {
        callback(new Error('Failed to parse Groq response: ' + e.message), null);
      }
    });
  });

  req.on('error', (err) => callback(err, null));
  req.write(body);
  req.end();
}

module.exports = { getAISuggestion };