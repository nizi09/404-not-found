# 404-not-found
# PassPilot 🚗

> AI-powered UK theory test prep & practical test companion. Built at [Hackathon] by Team 404-Not-Found.

-
| File | Owner |
|------|-------|
| `index.html` | Frontend |
| `style.css` | Frontend |
| `app.js` | Frontend |
| `backend/scoring.js` | Backend |
| `backend/ai.js` | Backend |
| `backend/logger.js` | Backend |
| `data/questions.json` | Data |

---

## Quick start

1. Clone the repo
2. Open `index.html` in your browser — no server needed for the demo
3. The Claude API call in `app.js` will need a CORS proxy or backend relay in production
4. Questions are embedded in `app.js` for the demo — the data team should expand `data/questions.json`

---

## Question format (data/questions.json)

```json
{
  "id": 1,
  "category": "road_signs",
  "text": "Question text here?",
  "options": ["A] Option one", "B] Option two", "C] Option three", "D] Option four"],
  "answer": 0,
  "explanation": "Why this answer is correct."
}
```

### Valid categories:
- `road_signs`
- `speed_limits`
- `stopping_distances`
- `hazard_perception`
- `vehicle_safety`
- `rules_of_road`
- `motorway`
- `alcohol_drugs`
- `environment`
- `first_aid`

---

## Backend interface

When a test completes, `app.js` calls the AI using this shape:

```js
const result = {
  score: 72,                           // percentage
  weak_areas: ["road_signs"],          // category keys
  total_questions: 25,
  correct: 18,
  wrong: 7,
  mode: "hybrid",
  passed: false,
};
```

The backend team's `scoring.js` and `ai.js` can replace the inline logic in `finishTest()` — just make sure you return the same shape.

---

## Tech stack

- Plain HTML, CSS, JavaScript — no frameworks
- localStorage for all session/progress data
- Claude API (`claude-sonnet-4-20250514`) for AI suggestions

---

## Team

Team **404-Not-Found** · GitHub repo: `404-not-found/passpilot`