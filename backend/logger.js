const log = [];

function logSession(results, aiSuggestion, humanDecision) {
  const entry = {
    timestamp: new Date().toISOString(),
    score: results.score,
    weak_areas: results.weak_areas,
    readiness: results.readiness,
    ai_suggested: aiSuggestion,
    human_decided: humanDecision,
    overridden: aiSuggestion !== humanDecision
  };

  log.push(entry);
  return entry;
}

function getLog() {
  return log;
}

module.exports = { logSession, getLog };