'use strict';

/**
 * Calculate test results from answers and questions.
 * @param {number[]} answers - Array of selected answer indices
 * @param {Object[]} questions - Array of question objects with `answer` and `category`
 * @returns {Object} results summary
 */
function calculateResults(answers, questions) {
  let correct = 0;
  const topicScores = {};

  questions.forEach((q, i) => {
    const cat = q.category;
    if (!topicScores[cat]) topicScores[cat] = { correct: 0, total: 0 };
    topicScores[cat].total++;
    if (answers[i] === q.answer) {
      correct++;
      topicScores[cat].correct++;
    }
  });

  const total = questions.length;
  const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 0;
  const passMark = 86;
  const passed = scorePercent >= passMark;

  const weakAreas = Object.entries(topicScores)
    .filter(([, v]) => v.total > 0 && (v.correct / v.total) < 0.7)
    .map(([k]) => k);

  return {
    score: scorePercent,
    scorePercent,
    correct,
    wrong: total - correct,
    total_questions: total,
    weak_areas: weakAreas,
    topicScores,
    passed,
    date: new Date().toLocaleDateString('en-GB'),
  };
}

module.exports = { calculateResults };