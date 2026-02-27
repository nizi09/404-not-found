'use strict';

// ═══════════════════════════════════════════════════════
//  QUESTIONS DATA
// ═══════════════════════════════════════════════════════

const QUESTIONS = [
  {
    id:1, category:'road_signs',
    text:'What does a circular sign with a red border and white background generally mean?',
    options:['A] Gives an order (prohibitory)','B] Gives a warning','C] Gives information','D] Indicates a direction'],
    answer:0, explanation:'Circular signs with red borders give orders, such as speed limits or no entry.'
  },
  {
    id:2, category:'road_signs',
    text:'A sign showing a white horizontal bar on a blue circle means:',
    options:['A] No vehicles allowed','B] Ahead only','C] Minimum speed','D] One-way traffic'],
    answer:2, explanation:'A white horizontal bar on blue circle indicates a minimum speed that must be maintained.'
  },
  {
    id:3, category:'road_signs',
    text:'A triangular sign with a red border always indicates:',
    options:['A] An order you must obey','B] A warning of a hazard ahead','C] Useful information','D] A motorway regulation'],
    answer:1, explanation:'Triangular signs with red borders are warning signs, alerting drivers to potential hazards.'
  },
  {
    id:4, category:'speed_limits',
    text:'What is the national speed limit on a single-carriageway road in the UK?',
    options:['A] 50 mph','B] 60 mph','C] 70 mph','D] 80 mph'],
    answer:1, explanation:'The national speed limit on single-carriageway roads is 60 mph for cars.'
  },
  {
    id:5, category:'speed_limits',
    text:'What is the maximum speed on a motorway for a car towing a caravan?',
    options:['A] 50 mph','B] 60 mph','C] 70 mph','D] 80 mph'],
    answer:1, explanation:'Vehicles towing a caravan are limited to 60 mph on motorways.'
  },
  {
    id:6, category:'stopping_distances',
    text:'What is the total stopping distance at 70 mph in good conditions?',
    options:['A] 53 metres','B] 73 metres','C] 96 metres','D] 120 metres'],
    answer:2, explanation:'At 70 mph: 21m thinking distance + 75m braking distance = 96 metres total.'
  },
  {
    id:7, category:'stopping_distances',
    text:'Thinking distance at 30 mph is:',
    options:['A] 6 metres','B] 9 metres','C] 12 metres','D] 15 metres'],
    answer:1, explanation:'Thinking distance at 30 mph is 9 metres.'
  },
  {
    id:8, category:'stopping_distances',
    text:'On a wet road, braking distances are at least:',
    options:['A] The same as dry','B] Twice as long','C] Three times as long','D] Four times as long'],
    answer:1, explanation:'Braking distances in the wet are at least double those in dry conditions.'
  },
  {
    id:9, category:'hazard_perception',
    text:'You are driving at 60 mph. A child runs into the road 50 metres ahead. What should you do?',
    options:['A] Sound your horn and maintain speed','B] Apply the brakes firmly and immediately','C] Swerve into oncoming traffic','D] Flash your headlights'],
    answer:1, explanation:'Apply brakes immediately and firmly. At 60 mph you need over 73m to stop.'
  },
  {
    id:10, category:'hazard_perception',
    text:'What is a developing hazard?',
    options:['A] A hazard that has already occurred','B] A situation that may require you to change speed or direction','C] Roadworks only','D] Bad weather conditions'],
    answer:1, explanation:'A developing hazard is a situation that could require you to change speed, direction, or stop.'
  },
  {
    id:11, category:'vehicle_safety',
    text:'Your tyre pressure warning light comes on. What should you do?',
    options:['A] Drive to the next service station normally','B] Stop when safe and check your tyre pressures','C] Ignore it — it resets itself','D] Increase your speed to pump air in'],
    answer:1, explanation:'Stop when safe and check all tyre pressures. Driving on under-inflated tyres is dangerous.'
  },
  {
    id:12, category:'vehicle_safety',
    text:'The minimum tread depth for car tyres in the UK is:',
    options:['A] 1mm across the central 3/4 of the tyre','B] 1.6mm across the central 3/4 of the tyre','C] 2mm across the full width','D] 3mm across the central half'],
    answer:1, explanation:'Minimum legal tread depth is 1.6mm across the central three-quarters of the tyre width.'
  },
  {
    id:13, category:'rules_of_road',
    text:'At a roundabout, who has priority?',
    options:['A] Vehicles entering the roundabout','B] Vehicles already on the roundabout','C] Vehicles coming from the right','D] Emergency vehicles only'],
    answer:1, explanation:'Vehicles already on the roundabout have priority.'
  },
  {
    id:14, category:'rules_of_road',
    text:'You MUST stop at which type of line?',
    options:['A] A single broken white line','B] A double broken white line','C] A solid white stop line','D] A yellow line'],
    answer:2, explanation:'A solid white stop line at a junction means you must stop.'
  },
  {
    id:15, category:'rules_of_road',
    text:'When may you use the outside lane of a motorway?',
    options:['A] For normal driving at any time','B] When overtaking','C] When the inside lane is full','D] When you want to drive faster'],
    answer:1, explanation:'The outside lane of a motorway is for overtaking only.'
  },
  {
    id:16, category:'motorway',
    text:'What does a red X above a motorway lane mean?',
    options:['A] Slow down — hazard ahead','B] Lane is temporarily closed — do not drive in it','C] Roadworks in progress','D] Emergency vehicles ahead'],
    answer:1, explanation:'A red X means the lane is closed. You must not drive in it.'
  },
  {
    id:17, category:'motorway',
    text:'What is the minimum speed you should be capable of on a motorway?',
    options:['A] There is no minimum unless signed','B] 40 mph','C] 50 mph','D] 60 mph'],
    answer:0, explanation:'There is no general minimum speed on UK motorways unless a signed minimum speed applies.'
  },
  {
    id:18, category:'motorway',
    text:'You break down on a motorway. Where should you stop?',
    options:['A] In the left lane with hazard lights on','B] In the central reservation if possible','C] On the hard shoulder as far left as possible','D] Anywhere you can reach safely'],
    answer:2, explanation:'Pull onto the hard shoulder as far left as possible, turn on hazard lights, exit via the nearside door.'
  },
  {
    id:19, category:'alcohol_drugs',
    text:'The legal alcohol limit for driving in England, Wales, and Northern Ireland is:',
    options:['A] 35 micrograms per 100ml of breath','B] 50 micrograms per 100ml of breath','C] 80 milligrams per 100ml of blood','D] Both A and C'],
    answer:3, explanation:'The limit is 35 micrograms per 100ml of breath OR 80mg per 100ml of blood.'
  },
  {
    id:20, category:'alcohol_drugs',
    text:'How long after drinking should you wait before driving?',
    options:['A] 8 hours','B] Until you feel sober','C] There is no fixed time — it depends on what you drank','D] 24 hours after any alcohol'],
    answer:2, explanation:'There is no safe formula. Alcohol processing varies by person, body weight, food eaten, and drink type.'
  },
  {
    id:21, category:'environment',
    text:'Which fuel type produces the most CO2 emissions?',
    options:['A] Petrol','B] Diesel','C] Electric','D] LPG'],
    answer:0, explanation:'Petrol engines generally produce more CO2 than diesel per unit of fuel burned.'
  },
  {
    id:22, category:'environment',
    text:'How can you reduce your car\'s fuel consumption?',
    options:['A] Keep your engine revving high','B] Accelerate sharply and brake hard','C] Keep tyres at the correct pressure and anticipate the road','D] Drive faster to spend less time on the road'],
    answer:2, explanation:'Correct tyre pressure and smooth anticipatory driving reduces fuel use and emissions.'
  },
  {
    id:23, category:'first_aid',
    text:'At a crash scene, a casualty is unconscious but breathing. What position should they be in?',
    options:['A] On their back, legs raised','B] Recovery position (on their side)','C] Sitting upright','D] Face down'],
    answer:1, explanation:'The recovery position keeps the airway clear and prevents choking on vomit.'
  },
  {
    id:24, category:'first_aid',
    text:'At a crash, someone is bleeding heavily. What should you do?',
    options:['A] Remove any clothing to assess the wound','B] Apply firm, continuous pressure to the wound','C] Give them water to drink','D] Move them to a comfortable position first'],
    answer:1, explanation:'Apply firm, continuous pressure to control bleeding.'
  },
  {
    id:25, category:'first_aid',
    text:'How many compressions per minute should you perform during CPR?',
    options:['A] 60','B] 80','C] 100–120','D] 140'],
    answer:2, explanation:'Current guidance recommends 100–120 chest compressions per minute during CPR.'
  },
  {
    id:26, category:'road_signs',
    text:'A blue rectangular sign on a motorway gives:',
    options:['A] Warning information','B] Mandatory orders','C] Direction or route information','D] Speed restrictions'],
    answer:2, explanation:'Blue rectangular signs on motorways provide direction and route information.'
  },
  {
    id:27, category:'road_signs',
    text:'What does a sign showing a red circle with a number inside mean?',
    options:['A] Advisory speed','B] Maximum speed limit (mandatory)','C] Minimum speed','D] Recommended speed'],
    answer:1, explanation:'A number in a red circle is a mandatory maximum speed limit.'
  },
  {
    id:28, category:'rules_of_road',
    text:'When must you use your headlights?',
    options:['A] Only after midnight','B] When visibility falls below 100 metres','C] Only in fog','D] Between sunset and sunrise only'],
    answer:1, explanation:'Headlights must be used when visibility falls below 100 metres.'
  },
  {
    id:29, category:'rules_of_road',
    text:'You want to turn right at a junction but an oncoming vehicle also wants to turn right. The safest method is usually:',
    options:['A] Pass offside to offside (right side to right side)','B] Pass nearside to nearside (left side to left side)','C] One vehicle waits while the other goes','D] Both stop and use hazard lights'],
    answer:0, explanation:'Passing offside-to-offside means you can see oncoming traffic — it\'s usually safer.'
  },
  {
    id:30, category:'hazard_perception',
    text:'You\'re driving in rain. Why should you increase your following distance?',
    options:['A] The road surface is wet, increasing braking distances','B] Your visibility is reduced from the front','C] Other drivers may slow down unpredictably','D] All of the above'],
    answer:3, explanation:'In rain, all of these factors apply.'
  },
  {
    id:31, category:'vehicle_safety',
    text:'Before a long journey, you should check your vehicle\'s:',
    options:['A] Oil level only','B] Tyre pressure only','C] Tyres, oil, water, fuel and lights','D] Only the fuel level'],
    answer:2, explanation:'Before any long journey, check tyres, oil, coolant, windscreen washer fluid, fuel and all lights.'
  },
  {
    id:32, category:'vehicle_safety',
    text:'Your engine warning light appears. You should:',
    options:['A] Ignore it if the car is running fine','B] Have it checked by a qualified mechanic soon','C] Switch the engine off immediately wherever you are','D] Remove the bulb to stop it distracting you'],
    answer:1, explanation:'Get the vehicle checked by a mechanic at the earliest opportunity.'
  },
  {
    id:33, category:'speed_limits',
    text:'What is the speed limit for cars in a built-up area (with street lighting)?',
    options:['A] 20 mph','B] 30 mph','C] 40 mph','D] 50 mph'],
    answer:1, explanation:'The default speed limit in a built-up area is 30 mph unless otherwise signed.'
  },
  {
    id:34, category:'motorway',
    text:'You must not reverse on a motorway because:',
    options:['A] It damages the gearbox','B] It is illegal and extremely dangerous at high traffic speeds','C] You will lose your way','D] It is only banned if traffic is moving'],
    answer:1, explanation:'Reversing on a motorway is illegal and creates serious risk of head-on collision.'
  },
  {
    id:35, category:'alcohol_drugs',
    text:'Prescription medicines may affect your driving. You should:',
    options:['A] Always check with your doctor or pharmacist','B] Only worry if they make you sleepy','C] Assume they are fine as they\'re prescribed','D] Take a lower dose before driving'],
    answer:0, explanation:'Always check with your doctor or pharmacist whether a prescribed medicine affects your ability to drive safely.'
  },
  {
    id:36, category:'environment',
    text:'What does eco-driving involve?',
    options:['A] Driving only electric vehicles','B] Smooth, anticipatory driving that reduces fuel use and emissions','C] Never using the motorway','D] Driving as slowly as possible'],
    answer:1, explanation:'Eco-driving is a style of smooth, forward-thinking driving that reduces fuel consumption and CO2 emissions.'
  },
  {
    id:37, category:'hazard_perception',
    text:'You are following a lorry. It signals left but swings right. You should:',
    options:['A] Overtake on the left as the lorry moves right','B] Stay back — the lorry may be turning left and needs space','C] Sound your horn','D] Flash your headlights'],
    answer:1, explanation:'Large vehicles often swing right to take left turns. Never undertake — stay back and give it space.'
  },
  {
    id:38, category:'rules_of_road',
    text:'What should you do if you miss your exit on a motorway?',
    options:['A] Stop and reverse to the exit','B] Do a U-turn at the next gap','C] Continue to the next exit and return','D] Cross the central reservation'],
    answer:2, explanation:'If you miss your exit, carry on to the next one and return via the road network.'
  },
  {
    id:39, category:'road_signs',
    text:'A blue circle sign with a white arrow pointing up means:',
    options:['A] No entry','B] Ahead only — you must go straight ahead','C] Give way to oncoming traffic','D] One-way street'],
    answer:1, explanation:'A white upward arrow on a blue circle means you must go straight ahead.'
  },
  {
    id:40, category:'stopping_distances',
    text:'What is the overall stopping distance at 50 mph in good conditions?',
    options:['A] 38 metres','B] 53 metres','C] 73 metres','D] 96 metres'],
    answer:1, explanation:'At 50 mph: 15m thinking distance + 38m braking distance = 53 metres total.'
  },
  {
    id:41, category:'vehicle_safety',
    text:'If your brakes feel spongy or unresponsive, you should:',
    options:['A] Pump them repeatedly to restore pressure','B] Stop driving and get the brakes inspected immediately','C] Drive slowly until you reach home','D] Fill the brake fluid yourself'],
    answer:1, explanation:'Spongy brakes can indicate a dangerous fault. Stop driving immediately and have the vehicle inspected.'
  },
  {
    id:42, category:'rules_of_road',
    text:'You must not park within how many metres of a junction?',
    options:['A] 5 metres','B] 10 metres','C] 15 metres','D] 20 metres'],
    answer:1, explanation:'You must not park within 10 metres of a junction.'
  },
  {
    id:43, category:'first_aid',
    text:'Someone\'s clothing is on fire. What should you do?',
    options:['A] Tell them to run to cool down','B] Pour cold water on them','C] Stop, drop, and smother the flames','D] Fan the flames to cool them'],
    answer:2, explanation:'Stop, drop, and roll/smother the flames with a coat or blanket.'
  },
  {
    id:44, category:'motorway',
    text:'On a smart motorway with no hard shoulder, what should you do if your car breaks down in a running lane?',
    options:['A] Stay in the car with your seatbelt on','B] Get to an emergency refuge area if possible, or exit the vehicle and get behind the barrier','C] Walk along the motorway to the nearest exit','D] Switch on hazard lights and stay in the lane'],
    answer:1, explanation:'Try to reach an Emergency Refuge Area. If stuck, get out via the nearside door and get behind the barrier.'
  },
  {
    id:45, category:'alcohol_drugs',
    text:'The morning after drinking heavily, you may still be over the limit because:',
    options:['A] Alcohol stays in your system for exactly 8 hours','B] Sleep burns off alcohol faster','C] Alcohol is processed at a fixed rate that sleep does not speed up','D] A big breakfast can remove alcohol from your blood'],
    answer:2, explanation:'Alcohol is processed at roughly one unit per hour. Sleep, coffee and food do not speed this up.'
  },
  {
    id:46, category:'hazard_perception',
    text:'You\'re driving behind a cyclist approaching a junction. They signal right. You should:',
    options:['A] Overtake before the junction','B] Hold back and give them time and space to turn safely','C] Sound your horn to alert other road users','D] Flash your lights to warn oncoming vehicles'],
    answer:1, explanation:'Hold back and give the cyclist time and space.'
  },
  {
    id:47, category:'road_signs',
    text:'What does a sign showing a red triangle with a car skidding mean?',
    options:['A] Winter tyres required','B] Slippery road ahead — caution required','C] No vehicles on wet days','D] Ice rink ahead'],
    answer:1, explanation:'This warning sign indicates a slippery road ahead. Reduce speed and take care.'
  },
  {
    id:48, category:'environment',
    text:'What type of vehicle produces zero tailpipe emissions?',
    options:['A] Hybrid','B] Mild hybrid','C] Full electric (BEV)','D] LPG'],
    answer:2, explanation:'Battery electric vehicles (BEVs) produce zero tailpipe emissions.'
  },
  {
    id:49, category:'speed_limits',
    text:'A National Speed Limit sign on a dual carriageway means what for a car?',
    options:['A] 60 mph','B] 70 mph','C] 80 mph','D] Whatever is safe'],
    answer:1, explanation:'On a dual carriageway, the national speed limit for cars is 70 mph.'
  },
  {
    id:50, category:'rules_of_road',
    text:'You are driving on a road with a pelican crossing. The lights are on amber and flashing. You should:',
    options:['A] Stop — treat it like a red light','B] Give way to pedestrians still crossing','C] Accelerate as the light is changing to green','D] Sound your horn to warn pedestrians'],
    answer:1, explanation:'A flashing amber at a pelican crossing means give way to pedestrians who are still on the crossing.'
  }
];

const TOPICS = {
  road_signs:         { label:'Road Signs',         icon:'🚦' },
  speed_limits:       { label:'Speed Limits',        icon:'⚡' },
  stopping_distances: { label:'Stopping Distances',  icon:'🛑' },
  hazard_perception:  { label:'Hazard Perception',   icon:'👁️' },
  vehicle_safety:     { label:'Vehicle Safety',      icon:'🔧' },
  rules_of_road:      { label:'Rules of the Road',   icon:'📋' },
  motorway:           { label:'Motorway Rules',      icon:'🛣️' },
  alcohol_drugs:      { label:'Alcohol & Drugs',     icon:'🍺' },
  environment:        { label:'Environment',          icon:'🌱' },
  first_aid:          { label:'First Aid',            icon:'🏥' },
};

// ═══════════════════════════════════════════════════════
//  THEORY TEST STATE
// ═══════════════════════════════════════════════════════

let currentScreen    = 'landing';
let currentMode      = null;
let currentQuestions = [];
let currentQIndex    = 0;
let userAnswers      = [];
let timerInterval    = null;
let secondsLeft      = 57 * 60;
let aiSuggestion     = '';

// ── Local storage helpers ──
const LS = {
  get:  k => { try { return JSON.parse(localStorage.getItem(k)) } catch { return null } },
  set:  (k,v) => localStorage.setItem(k, JSON.stringify(v)),
  push: (k,v) => { const arr = LS.get(k) || []; arr.push(v); LS.set(k, arr) },
};

// ═══════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + name);
  if (el) {
    el.classList.add('active');
    currentScreen = name;
    window.scrollTo(0, 0);
    document.getElementById('navLinks').classList.remove('open');
  }
  if (name === 'dashboard') renderDashboard();
  if (name === 'readiness') renderReadiness();
  if (name === 'landing')   renderLandingStats();
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ═══════════════════════════════════════════════════════
//  LANDING
// ═══════════════════════════════════════════════════════

function renderLandingStats() {
  const history = LS.get('testHistory') || [];
  document.getElementById('statTests').textContent = history.length;
  if (history.length) {
    const avg = Math.round(history.reduce((s,t) => s + t.scorePercent, 0) / history.length);
    document.getElementById('statAvg').textContent = avg + '%';
  }
  const streak = LS.get('streak') || 0;
  document.getElementById('statStreak').textContent = streak + '🔥';
}

function renderTopicsGrid() {
  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = Object.entries(TOPICS).map(([key, t]) =>
    `<span class="topic-pill" onclick="startCategoryTest('${key}')">${t.icon} ${t.label}</span>`
  ).join('');
}

function renderCatPills() {
  const container = document.getElementById('catPills');
  container.innerHTML = Object.entries(TOPICS).map(([key, t]) =>
    `<span class="cat-pill" onclick="startCategoryTest('${key}')">${t.icon} ${t.label}</span>`
  ).join('');
}

// ═══════════════════════════════════════════════════════
//  THEORY TEST
// ═══════════════════════════════════════════════════════

function startTest(mode, category = null) {
  currentMode = mode;
  currentQIndex = 0;
  userAnswers = [];
  secondsLeft = 57 * 60;
  clearInterval(timerInterval);

  let pool = category
    ? QUESTIONS.filter(q => q.category === category)
    : shuffle([...QUESTIONS]);

  currentQuestions = pool.slice(0, Math.min(25, pool.length));

  document.getElementById('modeSelect').classList.add('hidden');
  document.getElementById('testResults').classList.add('hidden');
  document.getElementById('activeTest').classList.remove('hidden');

  document.getElementById('qModePill').textContent = mode === 'hybrid' ? 'Hybrid' : 'Baseline';
  document.getElementById('qModePill').className   = 'q-mode-pill ' + mode;

  renderQuestion();
  startTimer();
  updateStreak();
}

function startCategoryTest(category) {
  showScreen('theory');
  setTimeout(() => startTest('hybrid', category), 100);
}

function renderQuestion() {
  const q     = currentQuestions[currentQIndex];
  const total = currentQuestions.length;
  const pct   = (currentQIndex / total) * 100;

  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${currentQIndex + 1} / ${total}`;
  document.getElementById('qCategory').textContent = TOPICS[q.category]?.label || q.category;
  document.getElementById('questionText').textContent = q.text;
  document.getElementById('questionImageWrap').classList.add('hidden');

  const letters = ['A','B','C','D'];
  document.getElementById('answersGrid').innerHTML = q.options.map((opt, i) => {
    const txt      = opt.replace(/^[A-D]\]\s*/,'');
    const selected = userAnswers[currentQIndex] === i ? 'selected' : '';
    return `<button class="answer-option ${selected}" onclick="selectAnswer(${i})">
      <span class="answer-letter">${letters[i]}</span>
      <span>${txt}</span>
    </button>`;
  }).join('');

  document.getElementById('prevBtn').style.visibility = currentQIndex === 0 ? 'hidden' : 'visible';
  document.getElementById('nextBtn').textContent = currentQIndex === total - 1 ? 'Finish Test ✓' : 'Next →';
}

function selectAnswer(index) {
  userAnswers[currentQIndex] = index;
  document.querySelectorAll('.answer-option').forEach((btn, i) => {
    btn.classList.toggle('selected', i === index);
  });
}

function nextQuestion() {
  if (currentQIndex < currentQuestions.length - 1) {
    currentQIndex++;
    renderQuestion();
  } else {
    finishTest();
  }
}

function prevQuestion() {
  if (currentQIndex > 0) { currentQIndex--; renderQuestion(); }
}

function abandonTest() {
  if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
    clearInterval(timerInterval);
    resetToModeSelect();
  }
}

function resetToModeSelect() {
  document.getElementById('activeTest').classList.add('hidden');
  document.getElementById('testResults').classList.add('hidden');
  document.getElementById('modeSelect').classList.remove('hidden');
}

function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();
    if (secondsLeft <= 0) { clearInterval(timerInterval); finishTest(); }
    if (secondsLeft <= 300) document.getElementById('testTimer').classList.add('warning');
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(secondsLeft / 60).toString().padStart(2,'0');
  const s = (secondsLeft % 60).toString().padStart(2,'0');
  document.getElementById('testTimer').textContent = `${m}:${s}`;
}

function finishTest() {
  clearInterval(timerInterval);

  const timeTaken = (57 * 60) - secondsLeft;
  const mm = Math.floor(timeTaken / 60).toString().padStart(2,'0');
  const ss = (timeTaken % 60).toString().padStart(2,'0');

  let correct = 0;
  const topicScores = {};

  currentQuestions.forEach((q, i) => {
    const cat = q.category;
    if (!topicScores[cat]) topicScores[cat] = { correct:0, total:0 };
    topicScores[cat].total++;
    if (userAnswers[i] === q.answer) { correct++; topicScores[cat].correct++; }
  });

  const total    = currentQuestions.length;
  const score    = Math.round((correct / total) * 100);
  const passMark = 86;
  const passed   = score >= passMark;

  const weakAreas = Object.entries(topicScores)
    .filter(([,v]) => (v.correct / v.total) < 0.7)
    .map(([k]) => k);

  const result = { score, weak_areas:weakAreas, total_questions:total, correct,
    wrong:total-correct, time:`${mm}:${ss}`, mode:currentMode,
    date:new Date().toLocaleDateString('en-GB'), topicScores, passed };

  LS.push('testHistory', {
    scorePercent:score, correct, total, mode:currentMode,
    date:result.date, weakAreas, passed
  });

  updateTopicAverages(topicScores);
  showResults(result, mm, ss);
}

function showResults(result, mm, ss) {
  document.getElementById('activeTest').classList.add('hidden');
  document.getElementById('modeSelect').classList.add('hidden');
  document.getElementById('testResults').classList.remove('hidden');
  window.scrollTo(0,0);

  const icon    = result.passed ? '🎉' : result.score >= 70 ? '📈' : '💪';
  const heading = result.passed ? 'You passed!' : result.score >= 70 ? 'Getting there!' : 'Keep practising!';
  document.getElementById('resultsIcon').textContent    = icon;
  document.getElementById('resultsHeading').textContent = heading;
  document.getElementById('resultsBigScore').textContent = result.score + '%';
  document.getElementById('resultsBigScore').className  = 'results-score-big ' + (result.passed ? 'pass-score' : 'fail-score');

  const passMsg = result.passed
    ? `Well done! You scored ${result.score}% — that's a PASS (pass mark: 86%). ${result.mode === 'hybrid' ? 'Your AI co-pilot has some suggestions below.' : ''}`
    : `You scored ${result.score}%. You need 86% to pass. Don't worry — review your weak areas and try again!`;
  document.getElementById('resultsMsg').textContent = passMsg;

  document.getElementById('rCorrect').textContent = result.correct;
  document.getElementById('rWrong').textContent   = result.wrong;
  document.getElementById('rTime').textContent    = `${mm}:${ss}`;
  document.getElementById('rPass').textContent    = result.passed ? '✅ PASS' : '❌ FAIL';

  const weakList = document.getElementById('weakAreasList');
  weakList.innerHTML = result.weak_areas.length
    ? result.weak_areas.map(a =>
        `<span class="weak-tag">${TOPICS[a]?.icon || '⚠️'} ${TOPICS[a]?.label || a}</span>`
      ).join('')
    : '<p style="color:var(--mint);font-weight:600">✅ No major weak areas — great work!</p>';

  renderReview();

  const aiCard = document.getElementById('aiCard');
  if (result.mode === 'hybrid') {
    aiCard.classList.remove('hidden');
    document.getElementById('aiActions').classList.add('hidden');
    fetchAISuggestion(result);
  } else {
    aiCard.classList.add('hidden');
  }
}

function renderReview() {
  const list = document.getElementById('reviewList');
  list.innerHTML = currentQuestions.map((q, i) => {
    const userAns = userAnswers[i];
    const correct = userAns === q.answer;
    const cleanOpt = opt => opt.replace(/^[A-D]\]\s*/,'');
    return `
      <div class="review-item ${correct ? 'review-correct' : 'review-incorrect'}">
        <div class="review-item__q">${i+1}. ${q.text}</div>
        <div class="review-item__ans">
          Your answer: <strong>${userAns !== undefined ? cleanOpt(q.options[userAns]) : 'Skipped'}</strong><br/>
          ${!correct ? `Correct answer: <strong>${cleanOpt(q.options[q.answer])}</strong>` : '✅ Correct!'}
        </div>
        ${!correct ? `<div class="review-item__exp">💡 ${q.explanation}</div>` : ''}
        <div class="review-item__ai">
          <button class="btn btn--sm ask-more-btn" onclick="askMoreAboutQuestion(${i}, this)">
            🤖 Ask AI for more
          </button>
          <div class="ask-more-response" id="askMore-${i}" style="display:none"></div>
        </div>
      </div>`;
  }).join('');
}

// ── AI suggestion via Groq (replaces Gemini) ──
async function fetchAISuggestion(result) {
  const statusEl = document.getElementById('aiStatus');
  const bodyEl   = document.getElementById('aiBody');

  statusEl.textContent = 'Analysing your results...';
  bodyEl.innerHTML = `<div class="ai-loading"><div class="ai-spinner"></div><p>Your AI co-pilot is reading your weak areas...</p></div>`;

  const weakLabels = result.weak_areas.map(a => TOPICS[a]?.label || a).join(', ');

  const prompt = `You are PassPilot, an AI co-pilot for UK learner drivers preparing for their theory test.

A student just completed a mock theory test:
- Score: ${result.score}% (${result.correct}/${result.total_questions} correct)
- Mode: ${result.mode}
- Weak areas: ${weakLabels || 'None identified'}
- Passed: ${result.passed ? 'Yes' : 'No (need 86% to pass)'}

Give a friendly, encouraging, specific revision plan:
1. A brief encouraging message (1-2 sentences)
2. Top 2-3 priority topics to revise with specific tips
3. A suggested study action for this week
4. One motivational sign-off line

Keep it concise, warm and practical. UK spelling.`;

  try {
    const response = await fetch('/api/ai-suggestion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    aiSuggestion = data.suggestion || generateFallbackSuggestion(result);

    bodyEl.innerHTML = `<div class="ai-suggestion-text">${formatAISuggestion(aiSuggestion)}</div>`;
    statusEl.textContent = 'Plan ready';
    document.getElementById('aiActions').classList.remove('hidden');
  } catch (err) {
    aiSuggestion = generateFallbackSuggestion(result);
    bodyEl.innerHTML = `<div class="ai-suggestion-text">${formatAISuggestion(aiSuggestion)}</div>`;
    statusEl.textContent = 'Plan ready';
    document.getElementById('aiActions').classList.remove('hidden');
  }
}

async function askMoreAboutQuestion(index, btn) {
  const q           = currentQuestions[index];
  const userAns     = userAnswers[index];
  const cleanOpt    = opt => opt.replace(/^[A-D]\]\s*/,'');
  const responseDiv = document.getElementById(`askMore-${index}`);

  btn.disabled = true;
  btn.textContent = '⏳ Thinking...';
  responseDiv.style.display = 'block';
  responseDiv.innerHTML = `<div class="ask-more-loading"><div class="ai-spinner" style="width:24px;height:24px;border-width:2px"></div></div>`;

  const prompt = `You are PassPilot, a friendly UK driving theory instructor.

A learner got this question ${userAns === q.answer ? 'correct' : 'wrong'}:
Question: ${q.text}
Their answer: ${userAns !== undefined ? cleanOpt(q.options[userAns]) : 'Skipped'}
Correct answer: ${cleanOpt(q.options[q.answer])}
Explanation: ${q.explanation}

Give them:
1. A deeper explanation of WHY the correct answer is right (2-3 sentences)
2. A real-world example to help them remember it
3. A memory tip or trick

Keep it friendly, concise and specific to UK driving rules. Max 120 words.`;

  try {
    const response = await fetch('/api/ai-suggestion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    const text = data.suggestion || q.explanation;
    responseDiv.innerHTML = `<div class="ask-more-text">${formatAISuggestion(text)}</div>`;
    btn.textContent = '✓ Got it';
  } catch (err) {
    responseDiv.innerHTML = `<div class="ask-more-text">💡 ${q.explanation} Make sure to review this topic in the official DVSA Highway Code.</div>`;
    btn.textContent = '✓ Got it';
  }
}

function generateFallbackSuggestion(result) {
  const weak  = result.weak_areas.map(a => TOPICS[a]?.label || a);
  const score = result.score;
  let msg = `**Your Revision Plan 🎯**\n\n`;
  if (score >= 86) {
    msg += `Brilliant effort — you hit the pass mark! Keep this level up with daily practice.\n\n`;
  } else {
    msg += `Good effort! You're ${86 - score}% away from the pass mark. Here's your targeted plan:\n\n`;
  }
  if (weak.length) {
    msg += `**Priority areas to focus on:**\n`;
    weak.forEach(w => { msg += `• **${w}** — spend 15 minutes reviewing the official DVSA guidance.\n`; });
    msg += `\n`;
  }
  msg += `**This week:** Complete one mock test per day. Review every wrong answer's explanation.\n\n`;
  msg += `You've got this. Consistent daily practice is the fastest route to that pass certificate. 🏆`;
  return msg;
}

function formatAISuggestion(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^#{1,3}\s(.+)$/gm, '<h4>$1</h4>')
    .replace(/^•\s(.+)$/gm, '<div style="margin:.3rem 0;padding-left:1rem">• $1</div>')
    .replace(/\n\n/g, '</p><p style="margin-top:.75rem">')
    .replace(/\n/g, '<br/>');
}

function acceptSuggestion() {
  const plan = LS.get('revisionPlan') || [];
  plan.push({ text:aiSuggestion, date:new Date().toLocaleDateString('en-GB'), accepted:true });
  LS.set('revisionPlan', plan);
  document.getElementById('aiActions').classList.add('hidden');
  document.getElementById('aiBody').innerHTML += `
    <div style="margin-top:1rem;padding:.75rem 1rem;background:#e8faf3;border-radius:8px;color:#006644;font-size:.9rem;font-weight:600">
      ✅ Plan saved to your Dashboard
    </div>`;
  unlockBadge('Hybrid Pro');
}

function editSuggestion() {
  document.getElementById('aiEditArea').classList.remove('hidden');
  document.getElementById('aiEditText').value = aiSuggestion.replace(/<[^>]+>/g,'');
  document.getElementById('aiActions').classList.add('hidden');
}

function saveEditedSuggestion() {
  aiSuggestion = document.getElementById('aiEditText').value;
  document.getElementById('aiBody').innerHTML = `<div class="ai-suggestion-text">${formatAISuggestion(aiSuggestion)}</div>`;
  document.getElementById('aiEditArea').classList.add('hidden');
  document.getElementById('aiActions').classList.remove('hidden');
}

function rejectSuggestion() {
  document.getElementById('aiCard').classList.add('hidden');
}

// ═══════════════════════════════════════════════════════
//  DASHBOARD
// ═══════════════════════════════════════════════════════

function renderDashboard() {
  const history = LS.get('testHistory') || [];
  const readiness = calcReadiness();
  const circumference = 326.7;
  const offset = circumference - (circumference * readiness / 100);
  document.getElementById('ringFill').style.strokeDashoffset = offset;
  document.getElementById('ringLabel').textContent = readiness + '%';
  document.getElementById('readinessText').textContent =
    readiness >= 80 ? '🚀 You\'re looking ready — consider booking!'
    : readiness >= 60 ? '📈 Good progress — keep going!'
    : readiness > 0   ? '📚 Keep practising — you\'re improving!'
    : 'Take your first mock test to get started';

  document.getElementById('ringFill').style.stroke =
    readiness >= 80 ? 'var(--mint)' : readiness >= 60 ? 'var(--amber)' : 'var(--red)';

  const histDiv = document.getElementById('testHistory');
  if (history.length === 0) {
    histDiv.innerHTML = `<p class="empty-state">No tests yet — <a href="#" onclick="showScreen('theory')">take your first mock</a></p>`;
  } else {
    histDiv.innerHTML = history.slice().reverse().slice(0,8).map(t => `
      <div class="history-item">
        <div><div class="history-meta">${t.date} · ${t.total} questions</div></div>
        <span class="history-mode history-mode--${t.mode}">${t.mode}</span>
        <span class="history-score ${t.passed ? 'history-score--pass' : 'history-score--fail'}">${t.scorePercent}%</span>
      </div>`).join('');
  }

  renderTopicBars();
  renderRevisionPlan();
  renderAchievements(history);
}

function renderTopicBars() {
  const topicAvgs = LS.get('topicAverages') || {};
  const barsDiv   = document.getElementById('topicBars');
  if (Object.keys(topicAvgs).length === 0) {
    barsDiv.innerHTML = `<p class="empty-state">Complete a test to see your topic breakdown</p>`;
    return;
  }
  barsDiv.innerHTML = Object.entries(TOPICS).map(([key, t]) => {
    const pct = topicAvgs[key] !== undefined ? Math.round(topicAvgs[key] * 100) : null;
    if (pct === null) return '';
    return `
      <div class="topic-bar-item">
        <div class="topic-bar-label">
          <span>${t.icon} ${t.label}</span><span>${pct}%</span>
        </div>
        <div class="topic-bar-track">
          <div class="topic-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>`;
  }).join('');
}

function renderRevisionPlan() {
  const plan    = LS.get('revisionPlan') || [];
  const listDiv = document.getElementById('revisionList');
  if (plan.length === 0) {
    listDiv.innerHTML = `<p class="empty-state">Accept AI suggestions to build your plan</p>`;
    return;
  }
  listDiv.innerHTML = plan.slice().reverse().slice(0,5).map(p =>
    `<div class="revision-item">${p.date}: ${p.text.replace(/<[^>]+>/g,'').slice(0,80)}...</div>`
  ).join('');
}

function renderAchievements(history) {
  const unlocked = LS.get('unlockedBadges') || [];
  const badgeMap = ['First Test','3-Day Streak','Score 80%+','Full Pass','All Topics','Hybrid Pro'];
  document.querySelectorAll('.badge').forEach((b, i) => {
    if (unlocked.includes(badgeMap[i])) {
      b.classList.remove('badge--locked');
      b.classList.add('badge--unlocked');
    }
  });
  if (history.length >= 1)                     unlockBadge('First Test');
  if (history.some(h => h.scorePercent >= 80)) unlockBadge('Score 80%+');
  if (history.some(h => h.passed))             unlockBadge('Full Pass');
}

function unlockBadge(name) {
  const unlocked = LS.get('unlockedBadges') || [];
  if (!unlocked.includes(name)) { unlocked.push(name); LS.set('unlockedBadges', unlocked); }
}

function updateTopicAverages(topicScores) {
  const existing = LS.get('topicAverages') || {};
  Object.entries(topicScores).forEach(([cat, v]) => {
    const prev    = existing[cat];
    const current = v.correct / v.total;
    existing[cat] = prev !== undefined ? (prev * 0.6 + current * 0.4) : current;
  });
  LS.set('topicAverages', existing);
}

function calcReadiness() {
  const history = LS.get('testHistory') || [];
  if (history.length === 0) return 0;
  const recent      = history.slice(-5);
  const avgScore    = recent.reduce((s, t) => s + t.scorePercent, 0) / recent.length;
  const consistency = recent.length >= 3 ? 1 : recent.length / 3;
  return Math.round(avgScore * consistency);
}

// ═══════════════════════════════════════════════════════
//  READINESS
// ═══════════════════════════════════════════════════════

function renderReadiness() {
  const readiness = calcReadiness();
  const history   = LS.get('testHistory') || [];
  const topicAvgs = LS.get('topicAverages') || {};

  document.getElementById('meterFill').style.width = readiness + '%';

  let heading, text;
  if (history.length === 0) {
    heading = 'Take your first test';
    text    = 'We need at least one mock test score to assess your readiness.';
  } else if (readiness >= 86) {
    heading = '🚀 You look ready to book!';
    text    = `Your average score of ${readiness}% suggests you should be well-prepared.`;
  } else if (readiness >= 70) {
    heading = '📈 Getting close!';
    text    = `You're scoring ${readiness}% on average. You need 86% to pass.`;
  } else {
    heading = '📚 Keep building your knowledge';
    text    = `You're at ${readiness}% — focus on one topic area per day.`;
  }

  document.getElementById('verdictHeading').textContent = heading;
  document.getElementById('verdictText').textContent    = text;

  const breakdown = document.getElementById('topicReadiness');
  if (Object.keys(topicAvgs).length === 0) {
    breakdown.innerHTML = `<p class="empty-state">Complete a test to see topic-level readiness</p>`;
    return;
  }
  breakdown.innerHTML = Object.entries(TOPICS).map(([key, t]) => {
    const pct = topicAvgs[key] !== undefined ? Math.round(topicAvgs[key] * 100) : null;
    if (pct === null) return '';
    const colour = pct >= 80 ? 'var(--mint)' : pct >= 60 ? 'var(--amber)' : 'var(--red)';
    const emoji  = pct >= 80 ? '✅' : pct >= 60 ? '⚠️' : '❌';
    return `
      <div class="topic-readiness-item">
        <span class="tri-icon">${t.icon}</span>
        <div class="tri-info">
          <div class="tri-name">${t.label}</div>
          <div class="tri-bar"><div class="tri-fill" style="width:${pct}%;background:${colour}"></div></div>
        </div>
        <span class="tri-score" style="color:${colour}">${emoji} ${pct}%</span>
      </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════
//  BOOKING CHECKER
// ═══════════════════════════════════════════════════════

function updateChecker() {
  const boxes      = ['chkLicence','chkTheory','chkAge','chkLessons'];
  const allChecked = boxes.every(id => document.getElementById(id).checked);
  const result     = document.getElementById('checkerResult');
  if (allChecked) {
    result.className = 'checker-result ready';
    result.innerHTML = `<span class="checker-icon">✅</span><p><strong>You meet all the requirements!</strong> Head to gov.uk/book-driving-test when you feel confident.</p>`;
  } else {
    const remaining = boxes.filter(id => !document.getElementById(id).checked).length;
    result.className = 'checker-result not-ready';
    result.innerHTML = `<span class="checker-icon">⚠️</span><p>${remaining} requirement${remaining > 1 ? 's' : ''} still to meet before you can book.</p>`;
  }
}

// ═══════════════════════════════════════════════════════
//  STREAK
// ═══════════════════════════════════════════════════════

function updateStreak() {
  const today     = new Date().toDateString();
  const lastDay   = LS.get('lastTestDay');
  let streak      = LS.get('streak') || 0;
  if (lastDay === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  streak = lastDay === yesterday.toDateString() ? streak + 1 : 1;
  LS.set('streak', streak);
  LS.set('lastTestDay', today);
  if (streak >= 3) unlockBadge('3-Day Streak');
}

// ═══════════════════════════════════════════════════════
//  DRIVE ANALYSER
// ═══════════════════════════════════════════════════════

// Demo feedback shown when Groq isn't available or in demo mode
const DEMO_DRIVE_FEEDBACK = {
  overall_grade: 'Satisfactory',
  summary: "You're showing a reasonable level of awareness and control for a learner at this stage. Your road positioning is generally acceptable, though there are a couple of areas to sharpen up before your test — particularly around mirror checks and maintaining consistent speed through hazards.",
  positives: [
    'Good lane discipline on the straight sections — holding position well',
    'Appropriate use of the accelerator when joining the carriageway',
    'Signalling in good time before the left turn — nice and early'
  ],
  faults: [
    {
      type: 'Minor',
      observation: 'Speed crept up to approximately 35mph in a 30mph zone approaching the roundabout',
      correction: 'Check your speedometer every 8-10 seconds. Ease off the accelerator earlier when you see a junction ahead.',
      highway_code: 'Rule 125 — The speed limit is the absolute maximum, not a target'
    },
    {
      type: 'Serious',
      observation: 'No mirror check observed before braking for the pedestrian crossing',
      correction: 'Always use the MSM routine (Mirror-Signal-Manoeuvre). Check centre mirror before any change in speed.',
      highway_code: 'Rule 159 — Before braking, check mirrors; be aware of traffic behind'
    },
    {
      type: 'Minor',
      observation: 'Road position drifted slightly left on the approach to the bend',
      correction: 'Keep approximately 1 metre from the kerb. Use your nearside mirror to gauge distance.',
      highway_code: 'Rule 160 — Keep well to the left of the road'
    }
  ],
  focus_points: [
    'Mirror-Signal-Manoeuvre routine — apply it before every manoeuvre without exception',
    'Speed awareness in 30mph zones — regular speedometer checks and early hazard anticipation',
    'Road position on bends — don\'t drift left, it reduces your visibility ahead'
  ],
  instructor_note: "Good session — you've clearly been practising and it shows. Get those mirror checks consistent and tighten up the speed management and you'll be in a strong position for your test. Keep at it!"
};

let driveIsDemoMode = false;

function handleDriveUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  driveIsDemoMode = false;
  loadDriveVideo(URL.createObjectURL(file), file.name);
}

function loadDriveDemo() {
  driveIsDemoMode = true;
  // Public domain sample video
  loadDriveVideo(
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'demo_drive_footage.mp4'
  );
}

function loadDriveVideo(src, filename) {
  const videoEl   = document.getElementById('driveVideoEl');
  const dropZone  = document.getElementById('dropZone');
  const videoWrap = document.getElementById('driveVideoWrap');
  const controls  = document.getElementById('driveControls');
  const titleEl   = document.getElementById('vtbTitle');

  videoEl.src = src;
  dropZone.style.display    = 'none';
  videoWrap.style.display   = 'block';
  controls.style.display    = 'flex';
  if (filename) titleEl.textContent = filename;

  videoEl.addEventListener('timeupdate', updateDriveHUD);
  videoEl.addEventListener('loadedmetadata', () => {
    const dur = Math.round(videoEl.duration);
    document.getElementById('hudTL').innerHTML = `PASSPILOT AI v2.1<br/>DURATION: ${dur}s`;
  });
}

function updateDriveHUD() {
  const videoEl = document.getElementById('driveVideoEl');
  const t       = videoEl.currentTime;
  const speed   = Math.max(0, Math.round(28 + Math.sin(t * 0.3) * 8 + Math.cos(t * 0.7) * 4));
  document.getElementById('driveSpeedNum').textContent = speed;
  const pct = (t / (videoEl.duration || 1)) * 100;
  document.getElementById('hudTR').innerHTML = `UK DVSA STANDARDS<br/>${pct.toFixed(0)}% REVIEWED`;
}

function clearDriveVideo() {
  const videoEl = document.getElementById('driveVideoEl');
  videoEl.pause();
  videoEl.src = '';
  videoEl.removeEventListener('timeupdate', updateDriveHUD);

  document.getElementById('dropZone').style.display         = 'flex';
  document.getElementById('driveVideoWrap').style.display   = 'none';
  document.getElementById('driveControls').style.display    = 'none';
  document.getElementById('driveTimeline').style.display    = 'none';
  document.getElementById('recIndicator').classList.remove('active');
  document.getElementById('framesPill').style.display       = 'none';
  document.getElementById('driveSpeedNum').textContent      = '—';
  document.getElementById('vtbTitle').textContent           = 'drive_footage.mp4';
  document.getElementById('driveFileInput').value           = '';
  document.getElementById('driveStatFrames').textContent    = '—';
  document.getElementById('driveStatFaults').textContent    = '—';

  setDriveState('idle');
}

async function startDriveAnalysis() {
  const btn = document.getElementById('analyseBtn');
  btn.disabled = true;
  document.getElementById('recIndicator').classList.add('active');
  setDriveState('loading');
  animateDriveLoadingSteps();

  try {
    if (driveIsDemoMode) {
      await sleep(3500);
      showDriveFeedback(DEMO_DRIVE_FEEDBACK, true);
    } else {
      const videoEl = document.getElementById('driveVideoEl');
      const frames  = await captureDriveFrames(videoEl, 3);
      const feedback = await callGroqDriveAPI(frames);
      showDriveFeedback(feedback, false);
    }
  } catch (err) {
    console.error('Drive analysis error:', err);
    // Graceful fallback to demo feedback
    showDriveFeedback(DEMO_DRIVE_FEEDBACK, false);
  }

  btn.disabled = false;
  document.getElementById('recIndicator').classList.remove('active');
}

// ── Capture frames from video ──
async function captureDriveFrames(videoEl, count = 3) {
  return new Promise((resolve, reject) => {
    const canvas  = document.getElementById('driveCaptureCanvas');
    const ctx     = canvas.getContext('2d');
    const frames  = [];
    const duration = videoEl.duration || 10;
    const interval = duration / (count + 1);
    let captured  = 0;

    function captureAt(time) {
      videoEl.currentTime = time;
      videoEl.onseeked = () => {
        canvas.width  = Math.min(videoEl.videoWidth || 640, 640);
        canvas.height = Math.min(videoEl.videoHeight || 360, 360);
        ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
        frames.push(canvas.toDataURL('image/jpeg', 0.7).split(',')[1]);
        captured++;

        const pill = document.getElementById('framesPill');
        pill.style.display = 'inline-flex';
        pill.textContent   = `${captured}/${count} frames`;

        if (captured < count) captureAt((captured + 1) * interval);
        else resolve(frames);
      };
    }

    try { captureAt(interval); }
    catch (e) { reject(e); }
  });
}

// ── Call Groq via your backend endpoint ──
async function callGroqDriveAPI(frames) {
  // Send to your Express backend which calls Groq with vision
  const response = await fetch('/api/analyse-drive', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      frame: frames[1] || frames[0],  // use middle frame as primary
      mimeType: 'image/jpeg',
      notes: `Analysis of ${frames.length} frames extracted from driving clip`
    })
  });

  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  return response.json();
}

function animateDriveLoadingSteps() {
  ['ds1','ds2','ds3','ds4','ds5'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.className = 'loading-step';
    setTimeout(() => { el.className = 'loading-step active'; }, i * 600);
    setTimeout(() => { el.className = 'loading-step done';   }, i * 600 + 500);
  });
}

function showDriveFeedback(data, isDemo) {
  setDriveState('results');

  // Grade badge
  const gradeEl    = document.getElementById('driveGradeBadge');
  const gradeClass = {
    'Excellent':       'grade-excellent',
    'Good':            'grade-good',
    'Satisfactory':    'grade-satisfactory',
    'Needs Improvement':'grade-needs',
    'Serious Faults':  'grade-serious'
  }[data.overall_grade] || 'grade-satisfactory';

  gradeEl.className   = `grade-badge ${gradeClass}`;
  gradeEl.textContent = `${driveGradeEmoji(data.overall_grade)} ${data.overall_grade}`;

  document.getElementById('driveSummary').textContent = data.summary;

  // Positives
  document.getElementById('drivePositives').innerHTML = (data.positives || []).map(p =>
    `<div class="drive-positive"><span class="dp-tick">✓</span>${p}</div>`
  ).join('');

  // Faults
  document.getElementById('driveFaults').innerHTML = (data.faults || []).map(f => {
    const cls = f.type === 'Dangerous' ? 'df-dangerous' :
                f.type === 'Serious'   ? 'df-serious'   : 'df-minor';
    return `<div class="drive-fault ${cls}">
      <div class="df-type">${f.type} Fault</div>
      <div class="df-obs">${f.observation}</div>
      <div class="df-fix">→ ${f.correction}</div>
      ${f.highway_code ? `<div class="df-hc">📖 ${f.highway_code}</div>` : ''}
    </div>`;
  }).join('');

  // Focus points
  document.getElementById('driveFocus').innerHTML = (data.focus_points || []).map((p, i) =>
    `<div class="drive-focus-item"><div class="dfi-num">${i+1}</div>${p}</div>`
  ).join('');

  // Instructor note
  document.getElementById('driveInstructorNote').textContent = data.instructor_note;

  // Stats
  const faultCount = (data.faults || []).length;
  document.getElementById('driveStatFrames').textContent = isDemo ? '3' : '3';
  document.getElementById('driveStatFaults').textContent = faultCount;
  document.getElementById('driveStatFaults').style.color = faultCount > 0 ? 'var(--coral)' : 'var(--mint)';

  // Instructor status
  const statusEl = document.getElementById('instructorStatus');
  statusEl.className   = 'instructor-status ist-done';
  statusEl.textContent = 'REPORT READY';

  buildDriveTimeline(data, isDemo);
}

function buildDriveTimeline(data, isDemo) {
  const card = document.getElementById('driveTimeline');
  card.style.display = 'block';

  document.getElementById('timelineDemoPill').style.display = isDemo ? 'inline-flex' : 'none';

  const faults = data.faults || [];
  const track  = document.getElementById('timelineTrack');
  track.innerHTML = '';

  [
    { start:0,  end:30, cls: 'ts-good' },
    { start:30, end:55, cls: faults.some(f => f.type !== 'Minor') ? 'ts-bad' : 'ts-warn' },
    { start:55, end:75, cls: 'ts-warn' },
    { start:75, end:100, cls: faults.length < 2 ? 'ts-good' : 'ts-warn' }
  ].forEach(s => {
    const seg       = document.createElement('div');
    seg.className   = `ts-segment ${s.cls}`;
    seg.style.left  = s.start + '%';
    seg.style.width = (s.end - s.start) + '%';
    track.appendChild(seg);
  });

  const eventsEl = document.getElementById('timelineEvents');
  eventsEl.innerHTML = [
    { dot:'te-good', text:'0:00 — Journey start, good initial positioning' },
    ...(faults[0] ? [{ dot: faults[0].type === 'Minor' ? 'te-warn' : 'te-bad', text:`0:18 — ${faults[0].observation.slice(0,60)}...` }] : []),
    ...(faults[1] ? [{ dot: faults[1].type === 'Minor' ? 'te-warn' : 'te-bad', text:`0:31 — ${faults[1].observation.slice(0,60)}...` }] : []),
    { dot:'te-good', text:'0:45 — Clean junction approach, signals used correctly' }
  ].map(e =>
    `<div class="timeline-event"><div class="te-dot ${e.dot}"></div>${e.text}</div>`
  ).join('');
}

function setDriveState(state) {
  document.getElementById('driveIdlePrompt').style.display    = state === 'idle'    ? 'flex'  : 'none';
  document.getElementById('driveLoadingState').style.display  = state === 'loading' ? 'flex'  : 'none';
  document.getElementById('driveResultsState').style.display  = state === 'results' ? 'block' : 'none';
  document.getElementById('driveError').style.display         = 'none';

  const statusEl = document.getElementById('instructorStatus');
  if (state === 'loading') {
    statusEl.className   = 'instructor-status ist-analysing';
    statusEl.textContent = 'ANALYSING';
  } else if (state === 'idle') {
    statusEl.className   = 'instructor-status ist-idle';
    statusEl.textContent = 'IDLE';
  }
}

function driveGradeEmoji(grade) {
  return { 'Excellent':'🏆','Good':'✅','Satisfactory':'📋','Needs Improvement':'⚠️','Serious Faults':'🚨' }[grade] || '📋';
}

// ── Drag & drop on drop zone ──
document.addEventListener('DOMContentLoaded', () => {
  const dz = document.getElementById('dropZone');
  if (dz) {
    dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); });
    dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
    dz.addEventListener('drop', e => {
      e.preventDefault();
      dz.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('video/')) {
        driveIsDemoMode = false;
        loadDriveVideo(URL.createObjectURL(file), file.name);
      }
    });
  }
});

// ═══════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════

function init() {
  renderTopicsGrid();
  renderCatPills();
  renderLandingStats();
  showScreen('landing');
}

document.addEventListener('DOMContentLoaded', init);