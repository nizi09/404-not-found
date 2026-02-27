require('dotenv').config();

const { calculateResults } = require('./backend/scoring.js');
const { logSession } = require('./backend/logger.js');
const { getAISuggestion } = require('./backend/ai.js');

const fakeQuestions = [
  { category: "road_signs", correct: 0 },
  { category: "road_signs", correct: 1 },
  { category: "hazard_perception", correct: 2 },
  { category: "road_rules", correct: 0 },
  { category: "road_rules", correct: 3 }
];

const fakeAnswers = [0, 0, 2, 0, 1];

const results = calculateResults(fakeAnswers, fakeQuestions);
console.log(results);

const entry = logSession(
  results,
  "Focus on road signs this week",
  "I'll focus on road rules instead"
);

console.log("\n--- LOG ENTRY ---");
console.log(entry);

getAISuggestion(results, function(err, suggestion) {
  if (err) {
    console.log('AI Error:', err);
  } else {
    console.log('\n--- AI SUGGESTION ---');
    console.log(suggestion);
  }
});