function calculateResults(userAnswers, questions) {
  let correct = 0;
  let categoryResults = {};

  questions.forEach(function(question, index) {
    const category = question.category;
    const isCorrect = userAnswers[index] === question.correct;

    if (!categoryResults[category]) {
      categoryResults[category] = { correct: 0, total: 0 };
    }

    categoryResults[category].total++;
    if (isCorrect) {
      correct++;
      categoryResults[category].correct++;
    }
  });

  const scorePercent = Math.round((correct / questions.length) * 100);
  const weakAreas = findWeakAreas(categoryResults);
  const readiness = calculateReadiness(scorePercent, weakAreas);

  return {
    score: scorePercent,
    correct: correct,
    total_questions: questions.length,
    weak_areas: weakAreas,
    category_breakdown: categoryResults,
    readiness: readiness
  };
}

function findWeakAreas(categoryResults) {
  let weakAreas = [];
  for (let category in categoryResults) {
    const result = categoryResults[category];
    const percent = (result.correct / result.total) * 100;
    if (percent < 70) {
      weakAreas.push(category);
    }
  }
  return weakAreas;
}

function calculateReadiness(score, weakAreas) {
  if (score >= 86 && weakAreas.length === 0) return "Ready";
  if (score >= 70 && weakAreas.length <= 1) return "Almost Ready";
  if (score >= 50) return "Needs Practice";
  return "Not Ready";
}

module.exports = { calculateResults };