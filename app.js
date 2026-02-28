'use strict';

// ═══════════════════════════════════════════════════════
//  QUESTIONS DATA
// ═══════════════════════════════════════════════════════

const QUESTIONS = [
  {
    id:1, category:'road_signs', diff:1,
    text:'What does a circular sign with a red border and white background generally mean?',
    options:['A] Gives an order (prohibitory)','B] Gives a warning','C] Gives information','D] Indicates a direction'],
    answer:0, explanation:'Circular signs with red borders give orders, such as speed limits or no entry.'
  },
  {
    id:2, category:'road_signs', diff:1,
    text:'A sign showing a white horizontal bar on a blue circle means:',
    options:['A] No vehicles allowed','B] Ahead only','C] Minimum speed','D] One-way traffic'],
    answer:2, explanation:'A white horizontal bar on blue circle indicates a minimum speed that must be maintained.'
  },
  {
    id:3, category:'road_signs', diff:1,
    text:'A triangular sign with a red border always indicates:',
    options:['A] An order you must obey','B] A warning of a hazard ahead','C] Useful information','D] A motorway regulation'],
    answer:1, explanation:'Triangular signs with red borders are warning signs, alerting drivers to potential hazards.'
  },
  {
    id:4, category:'speed_limits', diff:1,
    text:'What is the national speed limit on a single-carriageway road in the UK?',
    options:['A] 50 mph','B] 60 mph','C] 70 mph','D] 80 mph'],
    answer:1, explanation:'The national speed limit on single-carriageway roads is 60 mph for cars.'
  },
  {
    id:5, category:'speed_limits', diff:2,
    text:'What is the maximum speed on a motorway for a car towing a caravan?',
    options:['A] 50 mph','B] 60 mph','C] 70 mph','D] 80 mph'],
    answer:1, explanation:'Vehicles towing a caravan are limited to 60 mph on motorways.'
  },
  {
    id:6, category:'stopping_distances', diff:2,
    text:'What is the total stopping distance at 70 mph in good conditions?',
    options:['A] 53 metres','B] 73 metres','C] 96 metres','D] 120 metres'],
    answer:2, explanation:'At 70 mph: 21m thinking distance + 75m braking distance = 96 metres total.'
  },
  {
    id:7, category:'stopping_distances', diff:1,
    text:'Thinking distance at 30 mph is:',
    options:['A] 6 metres','B] 9 metres','C] 12 metres','D] 15 metres'],
    answer:1, explanation:'Thinking distance at 30 mph is 9 metres.'
  },
  {
    id:8, category:'stopping_distances', diff:1,
    text:'On a wet road, braking distances are at least:',
    options:['A] The same as dry','B] Twice as long','C] Three times as long','D] Four times as long'],
    answer:1, explanation:'Braking distances in the wet are at least double those in dry conditions.'
  },
  {
    id:9, category:'hazard_perception', diff:2,
    text:'You are driving at 60 mph. A child runs into the road 50 metres ahead. What should you do?',
    options:['A] Sound your horn and maintain speed','B] Apply the brakes firmly and immediately','C] Swerve into oncoming traffic','D] Flash your headlights'],
    answer:1, explanation:'Apply brakes immediately and firmly. At 60 mph you need over 73m to stop.'
  },
  {
    id:10, category:'hazard_perception', diff:1,
    text:'What is a developing hazard?',
    options:['A] A hazard that has already occurred','B] A situation that may require you to change speed or direction','C] Roadworks only','D] Bad weather conditions'],
    answer:1, explanation:'A developing hazard is a situation that could require you to change speed, direction, or stop.'
  },
  {
    id:11, category:'vehicle_safety', diff:1,
    text:'Your tyre pressure warning light comes on. What should you do?',
    options:['A] Drive to the next service station normally','B] Stop when safe and check your tyre pressures','C] Ignore it — it resets itself','D] Increase your speed to pump air in'],
    answer:1, explanation:'Stop when safe and check all tyre pressures. Driving on under-inflated tyres is dangerous.'
  },
  {
    id:12, category:'vehicle_safety', diff:2,
    text:'The minimum tread depth for car tyres in the UK is:',
    options:['A] 1mm across the central 3/4 of the tyre','B] 1.6mm across the central 3/4 of the tyre','C] 2mm across the full width','D] 3mm across the central half'],
    answer:1, explanation:'Minimum legal tread depth is 1.6mm across the central three-quarters of the tyre width.'
  },
  {
    id:13, category:'rules_of_road', diff:1,
    text:'At a roundabout, who has priority?',
    options:['A] Vehicles entering the roundabout','B] Vehicles already on the roundabout','C] Vehicles coming from the right','D] Emergency vehicles only'],
    answer:1, explanation:'Vehicles already on the roundabout have priority.'
  },
  {
    id:14, category:'rules_of_road', diff:1,
    text:'You MUST stop at which type of line?',
    options:['A] A single broken white line','B] A double broken white line','C] A solid white stop line','D] A yellow line'],
    answer:2, explanation:'A solid white stop line at a junction means you must stop.'
  },
  {
    id:15, category:'rules_of_road', diff:1,
    text:'When may you use the outside lane of a motorway?',
    options:['A] For normal driving at any time','B] When overtaking','C] When the inside lane is full','D] When you want to drive faster'],
    answer:1, explanation:'The outside lane of a motorway is for overtaking only.'
  },
  {
    id:16, category:'motorway', diff:1,
    text:'What does a red X above a motorway lane mean?',
    options:['A] Slow down — hazard ahead','B] Lane is temporarily closed — do not drive in it','C] Roadworks in progress','D] Emergency vehicles ahead'],
    answer:1, explanation:'A red X means the lane is closed. You must not drive in it.'
  },
  {
    id:17, category:'motorway', diff:2,
    text:'What is the minimum speed you should be capable of on a motorway?',
    options:['A] There is no minimum unless signed','B] 40 mph','C] 50 mph','D] 60 mph'],
    answer:0, explanation:'There is no general minimum speed on UK motorways unless a signed minimum speed applies.'
  },
  {
    id:18, category:'motorway', diff:1,
    text:'You break down on a motorway. Where should you stop?',
    options:['A] In the left lane with hazard lights on','B] In the central reservation if possible','C] On the hard shoulder as far left as possible','D] Anywhere you can reach safely'],
    answer:2, explanation:'Pull onto the hard shoulder as far left as possible, turn on hazard lights, exit via the nearside door.'
  },
  {
    id:19, category:'alcohol_drugs', diff:2,
    text:'The legal alcohol limit for driving in England, Wales, and Northern Ireland is:',
    options:['A] 35 micrograms per 100ml of breath','B] 50 micrograms per 100ml of breath','C] 80 milligrams per 100ml of blood','D] Both A and C'],
    answer:3, explanation:'The limit is 35 micrograms per 100ml of breath OR 80mg per 100ml of blood.'
  },
  {
    id:20, category:'alcohol_drugs', diff:1,
    text:'How long after drinking should you wait before driving?',
    options:['A] 8 hours','B] Until you feel sober','C] There is no fixed time — it depends on what you drank','D] 24 hours after any alcohol'],
    answer:2, explanation:'There is no safe formula. Alcohol processing varies by person, body weight, food eaten, and drink type.'
  },
  {
    id:21, category:'environment', diff:1,
    text:'Which fuel type produces the most CO2 emissions?',
    options:['A] Petrol','B] Diesel','C] Electric','D] LPG'],
    answer:0, explanation:'Petrol engines generally produce more CO2 than diesel per unit of fuel burned.'
  },
  {
    id:22, category:'environment', diff:1,
    text:'How can you reduce your car\'s fuel consumption?',
    options:['A] Keep your engine revving high','B] Accelerate sharply and brake hard','C] Keep tyres at the correct pressure and anticipate the road','D] Drive faster to spend less time on the road'],
    answer:2, explanation:'Correct tyre pressure and smooth anticipatory driving reduces fuel use and emissions.'
  },
  {
    id:23, category:'first_aid', diff:1,
    text:'At a crash scene, a casualty is unconscious but breathing. What position should they be in?',
    options:['A] On their back, legs raised','B] Recovery position (on their side)','C] Sitting upright','D] Face down'],
    answer:1, explanation:'The recovery position keeps the airway clear and prevents choking on vomit.'
  },
  {
    id:24, category:'first_aid', diff:1,
    text:'At a crash, someone is bleeding heavily. What should you do?',
    options:['A] Remove any clothing to assess the wound','B] Apply firm, continuous pressure to the wound','C] Give them water to drink','D] Move them to a comfortable position first'],
    answer:1, explanation:'Apply firm, continuous pressure to control bleeding.'
  },
  {
    id:25, category:'first_aid', diff:1,
    text:'How many compressions per minute should you perform during CPR?',
    options:['A] 60','B] 80','C] 100–120','D] 140'],
    answer:2, explanation:'Current guidance recommends 100–120 chest compressions per minute during CPR.'
  },
  {
    id:26, category:'road_signs', diff:1,
    text:'A blue rectangular sign on a motorway gives:',
    options:['A] Warning information','B] Mandatory orders','C] Direction or route information','D] Speed restrictions'],
    answer:2, explanation:'Blue rectangular signs on motorways provide direction and route information.'
  },
  {
    id:27, category:'road_signs', diff:1,
    text:'What does a sign showing a red circle with a number inside mean?',
    options:['A] Advisory speed','B] Maximum speed limit (mandatory)','C] Minimum speed','D] Recommended speed'],
    answer:1, explanation:'A number in a red circle is a mandatory maximum speed limit.'
  },
  {
    id:28, category:'rules_of_road', diff:1,
    text:'When must you use your headlights?',
    options:['A] Only after midnight','B] When visibility falls below 100 metres','C] Only in fog','D] Between sunset and sunrise only'],
    answer:1, explanation:'Headlights must be used when visibility falls below 100 metres.'
  },
  {
    id:29, category:'rules_of_road', diff:2,
    text:'You want to turn right at a junction but an oncoming vehicle also wants to turn right. The safest method is usually:',
    options:['A] Pass offside to offside (right side to right side)','B] Pass nearside to nearside (left side to left side)','C] One vehicle waits while the other goes','D] Both stop and use hazard lights'],
    answer:0, explanation:'Passing offside-to-offside means you can see oncoming traffic — it\'s usually safer.'
  },
  {
    id:30, category:'hazard_perception', diff:1,
    text:'You\'re driving in rain. Why should you increase your following distance?',
    options:['A] The road surface is wet, increasing braking distances','B] Your visibility is reduced from the front','C] Other drivers may slow down unpredictably','D] All of the above'],
    answer:3, explanation:'In rain, all of these factors apply.'
  },
  {
    id:31, category:'vehicle_safety', diff:1,
    text:'Before a long journey, you should check your vehicle\'s:',
    options:['A] Oil level only','B] Tyre pressure only','C] Tyres, oil, water, fuel and lights','D] Only the fuel level'],
    answer:2, explanation:'Before any long journey, check tyres, oil, coolant, windscreen washer fluid, fuel and all lights.'
  },
  {
    id:32, category:'vehicle_safety', diff:1,
    text:'Your engine warning light appears. You should:',
    options:['A] Ignore it if the car is running fine','B] Have it checked by a qualified mechanic soon','C] Switch the engine off immediately wherever you are','D] Remove the bulb to stop it distracting you'],
    answer:1, explanation:'Get the vehicle checked by a mechanic at the earliest opportunity.'
  },
  {
    id:33, category:'speed_limits', diff:1,
    text:'What is the speed limit for cars in a built-up area (with street lighting)?',
    options:['A] 20 mph','B] 30 mph','C] 40 mph','D] 50 mph'],
    answer:1, explanation:'The default speed limit in a built-up area is 30 mph unless otherwise signed.'
  },
  {
    id:34, category:'motorway', diff:1,
    text:'You must not reverse on a motorway because:',
    options:['A] It damages the gearbox','B] It is illegal and extremely dangerous at high traffic speeds','C] You will lose your way','D] It is only banned if traffic is moving'],
    answer:1, explanation:'Reversing on a motorway is illegal and creates serious risk of head-on collision.'
  },
  {
    id:35, category:'alcohol_drugs', diff:1,
    text:'Prescription medicines may affect your driving. You should:',
    options:['A] Always check with your doctor or pharmacist','B] Only worry if they make you sleepy','C] Assume they are fine as they\'re prescribed','D] Take a lower dose before driving'],
    answer:0, explanation:'Always check with your doctor or pharmacist whether a prescribed medicine affects your ability to drive safely.'
  },
  {
    id:36, category:'environment', diff:1,
    text:'What does eco-driving involve?',
    options:['A] Driving only electric vehicles','B] Smooth, anticipatory driving that reduces fuel use and emissions','C] Never using the motorway','D] Driving as slowly as possible'],
    answer:1, explanation:'Eco-driving is a style of smooth, forward-thinking driving that reduces fuel consumption and CO2 emissions.'
  },
  {
    id:37, category:'hazard_perception', diff:2,
    text:'You are following a lorry. It signals left but swings right. You should:',
    options:['A] Overtake on the left as the lorry moves right','B] Stay back — the lorry may be turning left and needs space','C] Sound your horn','D] Flash your headlights'],
    answer:1, explanation:'Large vehicles often swing right to take left turns. Never undertake — stay back and give it space.'
  },
  {
    id:38, category:'rules_of_road', diff:1,
    text:'What should you do if you miss your exit on a motorway?',
    options:['A] Stop and reverse to the exit','B] Do a U-turn at the next gap','C] Continue to the next exit and return','D] Cross the central reservation'],
    answer:2, explanation:'If you miss your exit, carry on to the next one and return via the road network.'
  },
  {
    id:39, category:'road_signs', diff:1,
    text:'A blue circle sign with a white arrow pointing up means:',
    options:['A] No entry','B] Ahead only — you must go straight ahead','C] Give way to oncoming traffic','D] One-way street'],
    answer:1, explanation:'A white upward arrow on a blue circle means you must go straight ahead.'
  },
  {
    id:40, category:'stopping_distances', diff:2,
    text:'What is the overall stopping distance at 50 mph in good conditions?',
    options:['A] 38 metres','B] 53 metres','C] 73 metres','D] 96 metres'],
    answer:1, explanation:'At 50 mph: 15m thinking distance + 38m braking distance = 53 metres total.'
  },
  {
    id:41, category:'vehicle_safety', diff:2,
    text:'If your brakes feel spongy or unresponsive, you should:',
    options:['A] Pump them repeatedly to restore pressure','B] Stop driving and get the brakes inspected immediately','C] Drive slowly until you reach home','D] Fill the brake fluid yourself'],
    answer:1, explanation:'Spongy brakes can indicate a dangerous fault. Stop driving immediately and have the vehicle inspected.'
  },
  {
    id:42, category:'rules_of_road', diff:2,
    text:'You must not park within how many metres of a junction?',
    options:['A] 5 metres','B] 10 metres','C] 15 metres','D] 20 metres'],
    answer:1, explanation:'You must not park within 10 metres of a junction.'
  },
  {
    id:43, category:'first_aid', diff:1,
    text:'Someone\'s clothing is on fire. What should you do?',
    options:['A] Tell them to run to cool down','B] Pour cold water on them','C] Stop, drop, and smother the flames','D] Fan the flames to cool them'],
    answer:2, explanation:'Stop, drop, and roll/smother the flames with a coat or blanket.'
  },
  {
    id:44, category:'motorway', diff:3,
    text:'On a smart motorway with no hard shoulder, what should you do if your car breaks down in a running lane?',
    options:['A] Stay in the car with your seatbelt on','B] Get to an emergency refuge area if possible, or exit the vehicle and get behind the barrier','C] Walk along the motorway to the nearest exit','D] Switch on hazard lights and stay in the lane'],
    answer:1, explanation:'Try to reach an Emergency Refuge Area. If stuck, get out via the nearside door and get behind the barrier.'
  },
  {
    id:45, category:'alcohol_drugs', diff:2,
    text:'The morning after drinking heavily, you may still be over the limit because:',
    options:['A] Alcohol stays in your system for exactly 8 hours','B] Sleep burns off alcohol faster','C] Alcohol is processed at a fixed rate that sleep does not speed up','D] A big breakfast can remove alcohol from your blood'],
    answer:2, explanation:'Alcohol is processed at roughly one unit per hour. Sleep, coffee and food do not speed this up.'
  },
  {
    id:46, category:'hazard_perception', diff:1,
    text:'You\'re driving behind a cyclist approaching a junction. They signal right. You should:',
    options:['A] Overtake before the junction','B] Hold back and give them time and space to turn safely','C] Sound your horn to alert other road users','D] Flash your lights to warn oncoming vehicles'],
    answer:1, explanation:'Hold back and give the cyclist time and space.'
  },
  {
    id:47, category:'road_signs', diff:1,
    text:'What does a sign showing a red triangle with a car skidding mean?',
    options:['A] Winter tyres required','B] Slippery road ahead — caution required','C] No vehicles on wet days','D] Ice rink ahead'],
    answer:1, explanation:'This warning sign indicates a slippery road ahead. Reduce speed and take care.'
  },
  {
    id:48, category:'environment', diff:1,
    text:'What type of vehicle produces zero tailpipe emissions?',
    options:['A] Hybrid','B] Mild hybrid','C] Full electric (BEV)','D] LPG'],
    answer:2, explanation:'Battery electric vehicles (BEVs) produce zero tailpipe emissions.'
  },
  {
    id:49, category:'speed_limits', diff:1,
    text:'A National Speed Limit sign on a dual carriageway means what for a car?',
    options:['A] 60 mph','B] 70 mph','C] 80 mph','D] Whatever is safe'],
    answer:1, explanation:'On a dual carriageway, the national speed limit for cars is 70 mph.'
  },
  {
    id:50, category:'rules_of_road', diff:2,
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

const REVISION_CONTENT = {
  road_signs: {
    subtitle: 'Understanding UK road sign shapes and colours',
    facts: [
      'Circular signs with red borders give orders (prohibitory) — e.g. speed limits, no entry.',
      'Triangular signs with red borders are warnings — they alert you to hazards ahead.',
      'Blue circular signs give positive instructions — e.g. "ahead only", "mini roundabout".',
      'Rectangular signs give information or directions. Blue on motorways, green on primary routes.',
      'Yellow/orange rectangular signs indicate temporary conditions such as roadworks.'
    ],
    traps: [
      'Confusing blue circles (instructions) with red circles (prohibitions).',
      'Missing that a number in a RED circle is a maximum limit, not advisory.',
      'Forgetting that a white circle with a diagonal red line means "national speed limit applies".'
    ]
  },
  speed_limits: {
    subtitle: 'Know the limits for every road type',
    facts: [
      'Built-up areas (street lighting): 30 mph default unless signed otherwise.',
      'Single carriageway outside built-up areas: 60 mph national limit.',
      'Dual carriageway and motorway: 70 mph national limit for cars.',
      'Towing a caravan/trailer: 50 mph single carriageway, 60 mph motorway.',
      'Some areas have 20 mph limits — always look for signs.'
    ],
    traps: [
      'Assuming 70 mph applies on all non-urban roads — single carriageways are 60.',
      'Forgetting that towing reduces your limit on every road type.',
      'Not spotting temporary lower limits in roadworks (often enforced by cameras).'
    ]
  },
  stopping_distances: {
    subtitle: 'The 2-second rule and key distances',
    facts: [
      'Stopping distance = thinking distance + braking distance.',
      '30 mph: 9m thinking + 14m braking = 23m total (about 6 car lengths).',
      '50 mph: 15m thinking + 38m braking = 53m total.',
      '70 mph: 21m thinking + 75m braking = 96m total (about 24 car lengths).',
      'In wet conditions, braking distances at least DOUBLE.',
      'In icy conditions, stopping distances can increase by up to TEN times.'
    ],
    traps: [
      'Confusing thinking distance with total stopping distance.',
      'Underestimating how dramatically wet/icy conditions increase distances.',
      'Forgetting that tiredness and drugs also increase thinking distance significantly.'
    ]
  },
  hazard_perception: {
    subtitle: 'Spotting and responding to developing hazards',
    facts: [
      'A developing hazard is any situation that could cause you to change speed or direction.',
      'The DVSA hazard perception test uses video clips — click as soon as you spot a developing hazard.',
      'Clicking too early or in a pattern (spam clicking) scores zero for that clip.',
      'Common hazards: pedestrians stepping out, junctions, cyclists, parked vehicles, bends.',
      'Use the commentary driving technique — narrate what you see to stay alert.'
    ],
    traps: [
      'Not looking far enough ahead — scan at least 12 seconds down the road.',
      'Focusing only on the vehicle ahead and missing hazards from the sides.',
      'Forgetting that pedestrians, especially children, can be unpredictable.'
    ]
  },
  vehicle_safety: {
    subtitle: 'Pre-drive checks and knowing your warning lights',
    facts: [
      'POWDERY checklist: Petrol, Oil, Water, Damage, Electrics, Rubber, Yourself.',
      'Legal minimum tyre tread depth: 1.6mm across the central ¾ of the tyre.',
      'Check tyre pressures when cold — heat from driving artificially inflates readings.',
      'Engine oil should be between MIN and MAX on the dipstick.',
      'Red warning lights = stop safely as soon as possible. Yellow = caution, investigate soon.'
    ],
    traps: [
      'Confusing tyre pressure (check cold) with tyre tread depth (measure when you like).',
      'Assuming a yellow warning light is less serious than it may be.',
      'Overlooking that worn wiper blades legally count as a vehicle defect.'
    ]
  },
  rules_of_road: {
    subtitle: 'Junctions, priority, and road markings',
    facts: [
      'Vehicles already ON a roundabout have priority over those entering.',
      'A solid white stop line = you MUST stop, even if the road seems clear.',
      'A broken white give-way line = give way, but you don\'t have to stop if it\'s clear.',
      'You must not park within 10 metres (32 feet) of a junction.',
      'On a pelican crossing, flashing amber = give way to pedestrians still on the crossing.',
      'The outside lane of a motorway is for overtaking only — return to the left when clear.'
    ],
    traps: [
      'Thinking you can park anywhere that isn\'t marked with yellow lines.',
      'Forgetting the MSM (Mirror-Signal-Manoeuvre) routine before every turn.',
      'Confusing flashing amber (give way) with red (stop) at pelican crossings.'
    ]
  },
  motorway: {
    subtitle: 'Motorway rules, smart motorways, and breakdowns',
    facts: [
      'Minimum age to drive on a motorway: 17 (learners permitted with approved instructor).',
      'Red X above a lane = lane closed. Do NOT drive in it — it\'s a legal requirement to comply.',
      'Hard shoulder on a smart motorway may be a running lane — check overhead signs.',
      'If you break down, reach an Emergency Refuge Area (ERA) or pull as far left as possible.',
      'Reversing, crossing the central reservation, and U-turns on motorways are illegal.',
      'National speed limit on motorways is 70 mph. Average speed cameras enforce this.'
    ],
    traps: [
      'Driving in the middle or right lane when the left is clear (lane hogging — an offence).',
      'Forgetting that you CANNOT stop on the hard shoulder on a smart motorway (unless emergency).',
      'Not adjusting speed for mandatory variable speed limits shown on overhead gantries.'
    ]
  },
  alcohol_drugs: {
    subtitle: 'Limits, effects, and the morning after',
    facts: [
      'England/Wales/NI breath limit: 35 micrograms per 100ml. Blood limit: 80mg per 100ml.',
      'Scotland has a lower limit: 22 micrograms per 100ml breath; 50mg per 100ml blood.',
      'Alcohol is processed at roughly 1 unit per hour — sleep, coffee and food don\'t speed it up.',
      'Drug driving is a separate offence with its own zero-tolerance limits for illegal drugs.',
      'Prescription medicines can also impair driving — always check with your doctor or pharmacist.'
    ],
    traps: [
      'Assuming you\'re fine to drive the morning after a heavy night without checking.',
      'Thinking "feeling sober" means you\'re within the legal limit.',
      'Forgetting that Scotland\'s limit is lower than the rest of the UK.'
    ]
  },
  environment: {
    subtitle: 'Fuel efficiency, emissions, and eco-driving',
    facts: [
      'Eco-driving involves smooth acceleration, early gear changes, and anticipating hazards.',
      'Keeping tyres at the correct pressure improves fuel economy by up to 3%.',
      'Removing unused roof racks and boxes reduces aerodynamic drag and fuel use.',
      'Battery electric vehicles (BEVs) produce zero tailpipe emissions.',
      'Hybrids use both a petrol/diesel engine and an electric motor to reduce emissions.',
      'Short journeys use disproportionately more fuel per mile — consider walking or cycling.'
    ],
    traps: [
      'Confusing "hybrid" (still has combustion engine) with "full electric" (zero tailpipe).',
      'Thinking air conditioning has no effect on fuel consumption (it does — use sparingly).',
      'Assuming driving faster on motorways is more efficient (drag increases exponentially with speed).'
    ]
  },
  first_aid: {
    subtitle: 'Emergency first aid at the roadside',
    facts: [
      'Unconscious but breathing → recovery position (on their side, airway clear).',
      'Not breathing → start CPR: 30 chest compressions then 2 rescue breaths.',
      'CPR rate: 100–120 compressions per minute (roughly 2 per second).',
      'Heavy bleeding → apply firm, continuous pressure to the wound.',
      'Don\'t remove a helmet unless the casualty\'s airway is at risk.',
      'Call 999 immediately at any serious accident scene.'
    ],
    traps: [
      'Confusing the recovery position (breathing) with CPR (not breathing).',
      'Giving water to an injured person — they may need surgery, so keep them nil by mouth.',
      'Moving a casualty unnecessarily — only move them if there\'s immediate danger (e.g. fire).'
    ]
  }
};

// ═══════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════

let currentScreen    = 'landing';
let currentMode      = null;
let currentQuestions = [];
let currentQIndex    = 0;
let userAnswers      = [];
let confidenceRatings = [];
let flaggedQuestions  = new Set();
let timerInterval    = null;
let secondsLeft      = 57 * 60;
let aiSuggestion     = '';

// Accessibility state
let voiceEnabled   = false;
let synth          = window.speechSynthesis || null;
let focusModeOn    = false;

// ── Local storage helpers ──
const LS = {
  get:   k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set:   (k,v) => localStorage.setItem(k, JSON.stringify(v)),
  push:  (k,v) => { const arr = LS.get(k) || []; arr.push(v); LS.set(k, arr); },
  clear: k => localStorage.removeItem(k),
};

// ═══════════════════════════════════════════════════════
//  ACCESSIBILITY HELPERS
// ═══════════════════════════════════════════════════════

function announce(msg, assertive = false) {
  const region = document.getElementById(assertive ? 'ariaAlert' : 'ariaLive');
  if (region) {
    region.textContent = '';
    requestAnimationFrame(() => { region.textContent = msg; });
  }
}

function showToast(msg, duration = 3000) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.style.cssText = `
      position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(100px);
      background:var(--ink,#1e2a3a);color:#fff;
      padding:.75rem 1.5rem;border-radius:50px;font-size:.9rem;font-weight:600;
      box-shadow:0 4px 20px rgba(0,0,0,.4);z-index:9999;
      transition:transform .3s ease;pointer-events:none;white-space:nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, duration);
}

// ─── Theme cycling ───
const THEMES = ['light', 'dark', 'contrast'];
let themeIndex = 0;

function cycleTheme() {
  themeIndex = (themeIndex + 1) % THEMES.length;
  const theme = THEMES[themeIndex];
  document.documentElement.setAttribute('data-theme', theme);
  LS.set('theme', theme);
  const labels = { dark: 'Dark theme', light: 'Light theme', contrast: 'High contrast theme' };
  showToast('Theme: ' + labels[theme]);
  announce(labels[theme] + ' activated');
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '⬛';
}

// ─── Dyslexia font ───
function toggleDyslexia() {
  const on = document.documentElement.getAttribute('data-dyslexia') === 'true';
  document.documentElement.setAttribute('data-dyslexia', String(!on));
  LS.set('dyslexia', !on);
  const btn = document.getElementById('dyslexiaBtn');
  if (btn) {
    btn.setAttribute('aria-pressed', String(!on));
    btn.style.opacity = !on ? '1' : '0.5';
  }
  showToast(!on ? 'Dyslexia font ON' : 'Dyslexia font OFF');
  announce('Dyslexia-friendly font ' + (!on ? 'enabled' : 'disabled'));
}

// ─── Font size ───
const FONT_SIZES = ['14px','16px','18px','21px'];
let fontSizeIndex = 1;

function changeFontSize(delta) {
  fontSizeIndex = Math.max(0, Math.min(FONT_SIZES.length - 1, fontSizeIndex + delta));
  document.documentElement.style.fontSize = FONT_SIZES[fontSizeIndex];
  LS.set('fontSize', fontSizeIndex);
  showToast('Text size: ' + FONT_SIZES[fontSizeIndex]);
}

// ─── Voice narration ───
function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  LS.set('voice', voiceEnabled);
  const btn = document.getElementById('voiceBtn');
  if (btn) {
    btn.setAttribute('aria-pressed', String(voiceEnabled));
    btn.textContent = voiceEnabled ? '🔊' : '🔇';
  }
  showToast(voiceEnabled ? 'Voice narration ON' : 'Voice narration OFF');
  if (voiceEnabled && currentScreen === 'theory') readQuestionAloud();
  if (voiceEnabled) injectVoiceMicBtn();
  else removeVoiceMicBtn();
}

function readQuestionAloud() {
  if (!voiceEnabled || !synth || !currentQuestions.length) return;
  synth.cancel();
  const q = currentQuestions[currentQIndex];
  const letters = ['A','B','C','D'];
  const text = `Question ${currentQIndex + 1} of ${currentQuestions.length}. ${q.text}. Options: ${
    q.options.map((o, i) => `${letters[i]}: ${o.replace(/^[A-D]\]\s*/,'')}`).join('. ')
  }`;
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-GB';
  utt.rate = 0.9;
  synth.speak(utt);
}

// ─── Focus mode ───
function toggleFocusMode() {
  focusModeOn = !focusModeOn;
  document.body.classList.toggle('focus-mode', focusModeOn);
  LS.set('focusMode', focusModeOn);
  const btn = document.getElementById('focusBtn');
  if (btn) btn.setAttribute('aria-pressed', String(focusModeOn));
  showToast(focusModeOn ? '🎯 Focus mode ON' : 'Focus mode OFF');
}

// ─── Keyboard shortcuts ───
document.addEventListener('keydown', e => {
  const tag = document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

  if (e.key === '?' || (e.key === '/' && e.shiftKey)) {
    e.preventDefault();
    toggleShortcutsPanel();
    return;
  }
  if (e.key === 'Escape') {
    closeAllModals();
    return;
  }

  if (currentScreen === 'theory' && !document.getElementById('activeTest')?.classList.contains('hidden')) {
    if (['a','b','c','d'].includes(e.key.toLowerCase())) {
      const idx = ['a','b','c','d'].indexOf(e.key.toLowerCase());
      selectAnswer(idx);
    }
    if (e.key === 'ArrowRight' || (e.key === 'Enter' && !e.shiftKey)) nextQuestion();
    if (e.key === 'ArrowLeft') prevQuestion();
    if (e.key.toLowerCase() === 'f') flagCurrentQuestion();
    if (e.key.toLowerCase() === 'r') readQuestionAloud();
    if (['1','2','3','4','5'].includes(e.key)) setConfidence(parseInt(e.key));
  }
});

function toggleShortcutsPanel() {
  const panel = document.getElementById('shortcutsPanel');
  if (!panel) { createShortcutsPanel(); return; }
  panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
}

function createShortcutsPanel() {
  const panel = document.createElement('div');
  panel.id = 'shortcutsPanel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Keyboard shortcuts');
  panel.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9998;
    display:flex;align-items:center;justify-content:center;
  `;
  panel.innerHTML = `
    <div style="background:var(--white,#fff);color:var(--ink,#111);border-radius:16px;padding:2rem;max-width:480px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.3);">
      <h2 style="margin:0 0 1.5rem;font-size:1.25rem">⌨️ Keyboard Shortcuts</h2>
      <div style="display:grid;grid-template-columns:auto 1fr;gap:.5rem .75rem;font-size:.9rem">
        ${[
          ['A / B / C / D','Select answer option'],
          ['→ / Enter','Next question'],
          ['←','Previous question'],
          ['F','Flag question for review'],
          ['R','Read question aloud'],
          ['1–5','Rate your confidence'],
          ['Esc','Close panels / modals'],
          ['?','Show / hide this panel'],
        ].map(([key, desc]) => `
          <kbd style="background:#f3f4f6;padding:.2rem .5rem;border-radius:4px;font-family:monospace;white-space:nowrap;text-align:center;border:1px solid #d1d5db">${key}</kbd>
          <span>${desc}</span>
        `).join('')}
      </div>
      <button onclick="document.getElementById('shortcutsPanel').style.display='none'"
        style="margin-top:1.5rem;padding:.6rem 1.5rem;background:var(--coral,#ff5f3f);color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:600">
        Close
      </button>
    </div>
  `;
  document.body.appendChild(panel);
}

function closeAllModals() {
  const panel = document.getElementById('shortcutsPanel');
  if (panel) panel.style.display = 'none';
  const exportModal = document.getElementById('exportModal');
  if (exportModal) exportModal.style.display = 'none';
  const centreModal = document.getElementById('centreFinderModal');
  if (centreModal) centreModal.style.display = 'none';
  const reminderModal = document.getElementById('reminderModal');
  if (reminderModal) reminderModal.style.display = 'none';
}

// ─── Accessibility toolbar ───
function injectA11yToolbar() {
  if (document.getElementById('a11yToolbar')) return;
  const toolbar = document.createElement('div');
  toolbar.id = 'a11yToolbar';
  toolbar.setAttribute('role', 'toolbar');
  toolbar.setAttribute('aria-label', 'Accessibility tools');
  toolbar.style.cssText = `
    position:fixed;right:1rem;top:50%;transform:translateY(-50%);
    display:flex;flex-direction:column;gap:.5rem;z-index:1000;
  `;
  const buttons = [
    { id:'themeBtn',    icon:'☀️',  label:'Toggle theme',          action:'cycleTheme()' },
    { id:'dyslexiaBtn', icon:'Aa',  label:'Toggle dyslexia font',  action:'toggleDyslexia()', pressed:false },
    { id:'fontUpBtn',   icon:'A+',  label:'Increase text size',    action:'changeFontSize(1)' },
    { id:'fontDnBtn',   icon:'A-',  label:'Decrease text size',    action:'changeFontSize(-1)' },
    { id:'voiceBtn',    icon:'🔇',  label:'Toggle voice narration', action:'toggleVoice()', pressed:false },
    { id:'focusBtn',    icon:'🎯',  label:'Toggle focus mode',     action:'toggleFocusMode()', pressed:false },
  ];
  toolbar.innerHTML = buttons.map(b => `
    <button id="${b.id}" onclick="${b.action}"
      aria-label="${b.label}"
      ${b.pressed !== undefined ? 'aria-pressed="false"' : ''}
      style="width:42px;height:42px;border-radius:50%;
        background:var(--white,#fff);
        border:2px solid var(--grey-100,#ede8e0);
        color:var(--ink,#111);font-size:1rem;cursor:pointer;
        display:flex;align-items:center;justify-content:center;
        transition:all .2s;font-weight:700;line-height:1;
        box-shadow:0 2px 8px rgba(0,0,0,.08);">
      ${b.icon}
    </button>
  `).join('') + `
    <button onclick="toggleShortcutsPanel()"
      aria-label="Show keyboard shortcuts"
      style="width:42px;height:42px;border-radius:50%;
        background:var(--white,#fff);
        border:2px solid var(--grey-100,#ede8e0);
        color:var(--ink,#111);font-size:1rem;cursor:pointer;
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 2px 8px rgba(0,0,0,.08);">
      ⌨️
    </button>
  `;
  document.body.appendChild(toolbar);
}

// ─── ARIA live regions ───
function injectAriaRegions() {
  if (!document.getElementById('ariaLive')) {
    const live = document.createElement('div');
    live.id = 'ariaLive';
    live.setAttribute('aria-live', 'polite');
    live.setAttribute('aria-atomic', 'true');
    live.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
    document.body.appendChild(live);
  }
  if (!document.getElementById('ariaAlert')) {
    const alert = document.createElement('div');
    alert.id = 'ariaAlert';
    alert.setAttribute('role', 'alert');
    alert.setAttribute('aria-live', 'assertive');
    alert.setAttribute('aria-atomic', 'true');
    alert.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
    document.body.appendChild(alert);
  }
}

// ─── Accessibility styles ───
// FIX: was broken — CSS was left as bare JS code after an incomplete function definition
function injectA11yStyles() {
  if (document.getElementById('a11yStyles')) return;
  const style = document.createElement('style');
  style.id = 'a11yStyles';
  style.textContent = `
    [data-theme="dark"] {
      --paper: #111827; --paper-warm: #1e2535; --white: #1e2a3a;
      --ink: #f1f5f9; --ink-mid: #cbd5e1; --ink-soft: #94a3b8;
      --grey-100: #334155; --grey-300: #475569; --grey-500: #94a3b8;
    }
    [data-theme="contrast"] {
      --paper: #000; --paper-warm: #0a0a0a; --white: #111;
      --ink: #fff; --ink-mid: #ffff00; --ink-soft: #ccc;
      --grey-100: #333; --grey-300: #666; --grey-500: #aaa;
      --coral: #ff6644; --gold: #ffcc00; --teal: #00ffaa;
    }
    [data-theme="contrast"] .answer-option:focus-visible,
    [data-theme="contrast"] button:focus-visible {
      outline: 4px solid #ffff00 !important;
    }
    [data-dyslexia="true"] {
      font-family: 'Comic Sans MS', 'Arial', sans-serif !important;
      line-height: 1.9 !important;
      letter-spacing: 0.05em !important;
      word-spacing: 0.15em !important;
    }
    :focus-visible {
      outline: 3px solid var(--coral, #ff5f3f) !important;
      outline-offset: 3px !important;
    }
    body.focus-mode nav,
    body.focus-mode footer,
    body.focus-mode #a11yToolbar {
      opacity: 0.1 !important;
      pointer-events: none !important;
      transition: opacity .3s;
    }
    body.focus-mode nav:hover,
    body.focus-mode #a11yToolbar:hover {
      opacity: 1 !important;
      pointer-events: auto !important;
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
    .skip-link {
      position: absolute; top: -100%; left: 1rem;
      background: var(--coral, #ff5f3f); color: #fff;
      padding: .5rem 1rem; border-radius: 0 0 8px 8px;
      font-weight: 700; z-index: 99999; text-decoration: none;
      transition: top .2s;
    }
    .skip-link:focus { top: 0; }
  `;
  document.head.appendChild(style);
}

// ─── Offline detection ───
function setupOfflineDetection() {
  function updateOnlineStatus() {
    let banner = document.getElementById('offlineBanner');
    if (!navigator.onLine) {
      if (!banner) {
        banner = document.createElement('div');
        banner.id = 'offlineBanner';
        banner.setAttribute('role', 'alert');
        banner.style.cssText = `
          position:fixed;top:0;left:0;right:0;z-index:9997;
          background:#d97706;color:#fff;text-align:center;
          padding:.6rem 1rem;font-weight:600;font-size:.9rem;
        `;
        banner.textContent = '⚠️ You are offline. AI features will use fallback responses.';
        document.body.appendChild(banner);
      }
      announce('You are offline. Some features may be limited.', true);
    } else if (banner) {
      banner.remove();
    }
  }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}

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
    document.getElementById('navLinks')?.classList.remove('open');
    const main = document.getElementById('mainContent') || el;
    main.focus?.();
  }
  if (name === 'dashboard') renderDashboard();
  if (name === 'readiness') renderReadiness();
  if (name === 'landing')   renderLandingStats();
  if (name === 'revision')  initRevisionHub();
  announce('Navigated to ' + name.charAt(0).toUpperCase() + name.slice(1));
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
  if (!grid) return;
  grid.innerHTML = Object.entries(TOPICS).map(([key, t]) =>
    `<span class="topic-pill" role="button" tabindex="0"
      onclick="startCategoryTest('${key}')"
      onkeydown="if(event.key==='Enter'||event.key===' ')startCategoryTest('${key}')"
      aria-label="Practice ${t.label}">${t.icon} ${t.label}</span>`
  ).join('');
}

function renderCatPills() {
  const container = document.getElementById('catPills');
  if (!container) return;
  container.innerHTML = Object.entries(TOPICS).map(([key, t]) =>
    `<span class="cat-pill" role="button" tabindex="0"
      onclick="startCategoryTest('${key}')"
      onkeydown="if(event.key==='Enter'||event.key===' ')startCategoryTest('${key}')"
      aria-label="Start ${t.label} test">${t.icon} ${t.label}</span>`
  ).join('');
}

// ═══════════════════════════════════════════════════════
//  THEORY TEST — SPACED REPETITION
// ═══════════════════════════════════════════════════════

function buildWeightedPool(questions) {
  const weights = LS.get('questionWeights') || {};
  const pool = [];
  questions.forEach(q => {
    const w = Math.round(weights[q.id] || 1);
    for (let i = 0; i < w; i++) pool.push(q);
  });
  return shuffle(pool);
}

function updateQuestionWeights(questions, answers) {
  const weights = LS.get('questionWeights') || {};
  questions.forEach((q, i) => {
    if (answers[i] !== q.answer) {
      weights[q.id] = Math.min((weights[q.id] || 1) + 1, 4);
    } else {
      weights[q.id] = Math.max((weights[q.id] || 1) - 0.5, 1);
    }
  });
  LS.set('questionWeights', weights);
}

// ═══════════════════════════════════════════════════════
//  THEORY TEST
// ═══════════════════════════════════════════════════════

function startTest(mode, category = null) {
  currentMode = mode;
  currentQIndex = 0;
  userAnswers = [];
  confidenceRatings = [];
  flaggedQuestions = new Set();
  secondsLeft = 57 * 60;
  clearInterval(timerInterval);

  let pool = category
    ? QUESTIONS.filter(q => q.category === category)
    : buildWeightedPool([...QUESTIONS]);

  currentQuestions = pool.slice(0, Math.min(25, pool.length));

  document.getElementById('modeSelect').classList.add('hidden');
  document.getElementById('testResults').classList.add('hidden');
  document.getElementById('activeTest').classList.remove('hidden');

  document.getElementById('qModePill').textContent = mode === 'hybrid' ? 'Hybrid' : 'Baseline';
  document.getElementById('qModePill').className   = 'q-mode-pill ' + mode;

  renderQuestion();
  startTimer();
  updateStreak();
  announce(`Test started. ${currentQuestions.length} questions. Mode: ${mode}.`);
  if (voiceEnabled) readQuestionAloud();
}

function startCategoryTest(category) {
  showScreen('theory');
  setTimeout(() => startTest('hybrid', category), 100);
}

function renderQuestion() {
  const q     = currentQuestions[currentQIndex];
  const total = currentQuestions.length;
  const pct   = (currentQIndex / total) * 100;
  const flagged = flaggedQuestions.has(currentQIndex);

  const progressFill = document.getElementById('progressFill');
  if (progressFill) {
    progressFill.style.width = pct + '%';
    progressFill.setAttribute('aria-valuenow', Math.round(pct));
  }
  document.getElementById('progressLabel').textContent = `${currentQIndex + 1} / ${total}`;
  document.getElementById('qCategory').textContent = TOPICS[q.category]?.label || q.category;
  document.getElementById('questionText').textContent = q.text;
  document.getElementById('questionText').setAttribute('aria-label', `Question ${currentQIndex + 1}: ${q.text}`);
  document.getElementById('questionImageWrap').classList.add('hidden');

  // Flag button
  let flagBtn = document.getElementById('flagBtn');
  if (!flagBtn) {
    flagBtn = document.createElement('button');
    flagBtn.id = 'flagBtn';
    flagBtn.style.cssText = 'background:none;border:none;font-size:1.4rem;cursor:pointer;margin-left:auto;padding:.25rem;';
    flagBtn.setAttribute('aria-label', 'Flag this question for review');
    const qHeader = document.querySelector('.question-meta');
    if (qHeader) qHeader.appendChild(flagBtn);
  }
  flagBtn.textContent = flagged ? '🚩' : '⚑';
  flagBtn.setAttribute('aria-pressed', String(flagged));
  flagBtn.onclick = flagCurrentQuestion;

  // Confidence rating (hybrid mode)
  let confDiv = document.getElementById('confidenceRating');
  if (currentMode === 'hybrid') {
    if (!confDiv) {
      confDiv = document.createElement('div');
      confDiv.id = 'confidenceRating';
      confDiv.setAttribute('role', 'group');
      confDiv.setAttribute('aria-label', 'Rate your confidence (1–5 stars)');
      confDiv.style.cssText = 'display:flex;align-items:center;gap:.5rem;margin:.75rem 0;font-size:.9rem;color:var(--grey-500,#aaa);';
      const answersGrid = document.getElementById('answersGrid');
      if (answersGrid?.parentNode) answersGrid.parentNode.insertBefore(confDiv, answersGrid);
    }
    const current = confidenceRatings[currentQIndex] || 0;
    confDiv.innerHTML = `<span>Confidence:</span>` +
      [1,2,3,4,5].map(n => `
        <button onclick="setConfidence(${n})" aria-label="${n} star"
          aria-pressed="${current >= n}"
          style="background:none;border:none;font-size:1.3rem;cursor:pointer;padding:.1rem;
            color:${current >= n ? '#f59e0b' : '#ccc'};">★</button>
      `).join('');
  } else if (confDiv) {
    confDiv.remove();
  }

  const letters = ['A','B','C','D'];
  document.getElementById('answersGrid').innerHTML = q.options.map((opt, i) => {
    const txt      = opt.replace(/^[A-D]\]\s*/,'');
    const selected = userAnswers[currentQIndex] === i ? 'selected' : '';
    return `<button class="answer-option ${selected}" onclick="selectAnswer(${i})"
      aria-label="${letters[i]}: ${txt}"
      ${userAnswers[currentQIndex] === i ? 'aria-pressed="true"' : 'aria-pressed="false"'}>
      <span class="answer-letter" aria-hidden="true">${letters[i]}</span>
      <span>${txt}</span>
    </button>`;
  }).join('');

  // Question map
  let mapEl = document.getElementById('questionMap');
  if (!mapEl) {
    const nav = document.querySelector('.question-nav');
    if (nav) {
      mapEl = document.createElement('div');
      mapEl.id = 'questionMap';
      mapEl.setAttribute('role', 'navigation');
      mapEl.setAttribute('aria-label', 'Question navigator');
      mapEl.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px;margin-bottom:1rem;justify-content:center;';
      nav.parentNode.insertBefore(mapEl, nav);
    }
  }
  if (mapEl) {
    mapEl.innerHTML = currentQuestions.map((_, i) => {
      const answered = userAnswers[i] !== undefined;
      const isCurrent = i === currentQIndex;
      const isFlagged = flaggedQuestions.has(i);
      const bg = isCurrent ? 'var(--coral)' : isFlagged ? '#f59e0b' : answered ? 'var(--teal)' : '#d1d5db';
      const border = isCurrent ? '2px solid var(--coral)' : '2px solid transparent';
      return `<button onclick="jumpToQuestion(${i})"
        aria-label="Question ${i+1}${answered?' (answered)':''}${isFlagged?' (flagged)':''}${isCurrent?' (current)':''}"
        ${isCurrent ? 'aria-current="true"' : ''}
        style="width:24px;height:24px;border-radius:50%;background:${bg};border:${border};
        cursor:pointer;font-size:.65rem;font-weight:700;color:${answered||isCurrent?'#fff':'#555'};
        box-shadow:${isCurrent?'0 0 0 2px rgba(255,95,63,.3)':'none'}">${i+1}</button>`;
    }).join('');
  }

  // Flagged count banner
  let flagBar = document.getElementById('flagBar');
  if (flaggedQuestions.size > 0) {
    if (!flagBar) {
      flagBar = document.createElement('div');
      flagBar.id = 'flagBar';
      flagBar.style.cssText = 'text-align:center;font-size:.85rem;color:#f59e0b;margin-bottom:.5rem;font-weight:600;';
      if (mapEl?.parentNode) mapEl.parentNode.insertBefore(flagBar, mapEl);
    }
    flagBar.textContent = `🚩 ${flaggedQuestions.size} question${flaggedQuestions.size > 1 ? 's' : ''} flagged for review`;
  } else if (flagBar) {
    flagBar.remove();
  }

  document.getElementById('prevBtn').style.visibility = currentQIndex === 0 ? 'hidden' : 'visible';
  document.getElementById('nextBtn').textContent = currentQIndex === total - 1 ? 'Finish Test ✓' : 'Next →';

  announce(`Question ${currentQIndex + 1} of ${total}: ${q.text}`);
}

function selectAnswer(index) {
  userAnswers[currentQIndex] = index;
  document.querySelectorAll('.answer-option').forEach((btn, i) => {
    btn.classList.toggle('selected', i === index);
    btn.setAttribute('aria-pressed', String(i === index));
  });
  const letter = ['A','B','C','D'][index];
  announce(`Selected answer ${letter}`);
}

function setConfidence(val) {
  confidenceRatings[currentQIndex] = val;
  const confDiv = document.getElementById('confidenceRating');
  if (confDiv) {
    confDiv.querySelectorAll('button').forEach((btn, i) => {
      btn.style.color = (i + 1) <= val ? '#f59e0b' : '#ccc';
      btn.setAttribute('aria-pressed', String((i + 1) <= val));
    });
  }
  announce(`Confidence set to ${val} out of 5`);
}

function flagCurrentQuestion() {
  if (flaggedQuestions.has(currentQIndex)) {
    flaggedQuestions.delete(currentQIndex);
    showToast('Flag removed');
    announce('Question unflagged');
  } else {
    flaggedQuestions.add(currentQIndex);
    showToast('🚩 Question flagged for review');
    announce('Question flagged for review');
  }
  renderQuestion();
}

function nextQuestion() {
  if (currentQIndex < currentQuestions.length - 1) {
    currentQIndex++;
    renderQuestion();
    if (voiceEnabled) readQuestionAloud();
  } else {
    const unanswered = currentQuestions.reduce((count, _, i) =>
      userAnswers[i] === undefined ? count + 1 : count, 0);
    if (unanswered > 0) {
      if (!confirm(`You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`)) return;
    }
    finishTest();
  }
}

function jumpToQuestion(index) {
  currentQIndex = index;
  renderQuestion();
  if (voiceEnabled) readQuestionAloud();
}

function prevQuestion() {
  if (currentQIndex > 0) { currentQIndex--; renderQuestion(); }
}

function abandonTest() {
  if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
    clearInterval(timerInterval);
    if (synth) synth.cancel();
    resetToModeSelect();
  }
}

function resetToModeSelect() {
  document.getElementById('activeTest').classList.add('hidden');
  document.getElementById('testResults').classList.add('hidden');
  document.getElementById('modeSelect').classList.remove('hidden');
  ['questionMap','flagBar','confidenceRating','flagBtn'].forEach(id => {
    document.getElementById(id)?.remove();
  });
}

function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();
    if (secondsLeft <= 0) { clearInterval(timerInterval); finishTest(); }
    if (secondsLeft === 300) announce('5 minutes remaining', true);
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
  if (synth) synth.cancel();

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
  const passed   = score >= 86;

  const weakAreas = Object.entries(topicScores)
    .filter(([,v]) => (v.correct / v.total) < 0.7)
    .map(([k]) => k);

  const result = {
    score, weak_areas: weakAreas, total_questions: total, correct,
    wrong: total - correct, time: `${mm}:${ss}`, mode: currentMode,
    date: new Date().toLocaleDateString('en-GB'), topicScores, passed,
    confidenceRatings: [...confidenceRatings],
    flaggedQuestions: [...flaggedQuestions]
  };

  LS.push('testHistory', {
    scorePercent: score, correct, total, mode: currentMode,
    date: result.date, weakAreas, passed
  });

  updateTopicAverages(topicScores);
  updateQuestionWeights(currentQuestions, userAnswers);
  showResults(result, mm, ss);
  announce(passed
    ? `Test complete! You passed with ${score}%.`
    : `Test complete. You scored ${score}%. Pass mark is 86%.`, true);
}

function showResults(result, mm, ss) {
  document.getElementById('activeTest').classList.add('hidden');
  document.getElementById('modeSelect').classList.add('hidden');
  document.getElementById('testResults').classList.remove('hidden');
  window.scrollTo(0, 0);

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

  // Confidence vs accuracy insight
  if (result.mode === 'hybrid' && result.confidenceRatings?.length) {
    const overconfident = currentQuestions.filter((q, i) =>
      (result.confidenceRatings[i] || 0) >= 4 && userAnswers[i] !== q.answer
    ).length;
    const underconfident = currentQuestions.filter((q, i) =>
      (result.confidenceRatings[i] || 0) <= 2 && userAnswers[i] === q.answer
    ).length;

    let existingInsight = document.getElementById('confidenceInsight');
    if (!existingInsight) {
      existingInsight = document.createElement('div');
      existingInsight.id = 'confidenceInsight';
      existingInsight.style.cssText = `
        background:var(--paper-warm,#f2ede4);border-radius:12px;padding:1rem 1.25rem;
        margin:1rem 0;border-left:4px solid #f59e0b;font-size:.95rem;
      `;
      const weakAreasList = document.getElementById('weakAreasList');
      if (weakAreasList?.parentNode) {
        weakAreasList.parentNode.insertBefore(existingInsight, weakAreasList);
      }
    }
    if (overconfident > 0 || underconfident > 0) {
      existingInsight.innerHTML = `
        <h3 style="margin:0 0 .5rem;font-size:1rem">⭐ Confidence Insight</h3>
        ${overconfident > 0 ? `<p style="margin:.25rem 0;color:#c53030">⚠️ <strong>${overconfident} question${overconfident>1?'s':''}</strong> where you were confident (4–5★) but got wrong.</p>` : ''}
        ${underconfident > 0 ? `<p style="margin:.25rem 0;color:var(--teal)">✅ <strong>${underconfident} question${underconfident>1?'s':''}</strong> where you doubted yourself but got right. Trust your knowledge more!</p>` : ''}
      `;
    } else {
      existingInsight.innerHTML = `<p style="margin:0;color:var(--teal)">✅ Your confidence ratings matched your accuracy well — great self-awareness!</p>`;
    }
  }

  const weakList = document.getElementById('weakAreasList');
  weakList.innerHTML = result.weak_areas.length
    ? result.weak_areas.map(a =>
        `<span class="weak-tag">${TOPICS[a]?.icon || '⚠️'} ${TOPICS[a]?.label || a}</span>`
      ).join('')
    : '<p style="color:var(--teal);font-weight:600">✅ No major weak areas — great work!</p>';

  // Flagged summary
  if (result.flaggedQuestions?.length) {
    let flagSummary = document.getElementById('flaggedSummary');
    if (!flagSummary) {
      flagSummary = document.createElement('div');
      flagSummary.id = 'flaggedSummary';
      flagSummary.style.cssText = 'background:var(--paper-warm,#f2ede4);border-radius:12px;padding:1rem 1.25rem;margin:1rem 0;border-left:4px solid #f59e0b;';
      if (weakList?.parentNode) weakList.parentNode.insertBefore(flagSummary, weakList);
    }
    flagSummary.innerHTML = `
      <h3 style="margin:0 0 .5rem;font-size:1rem">🚩 Flagged Questions (${result.flaggedQuestions.length})</h3>
      <p style="margin:0;font-size:.9rem;color:var(--grey-500,#aaa)">You flagged questions: ${result.flaggedQuestions.map(i => i + 1).join(', ')}. Review these in the list below.</p>
    `;
  }

  renderReview(result.flaggedQuestions || []);

  const aiCard = document.getElementById('aiCard');
  if (result.mode === 'hybrid') {
    aiCard.classList.remove('hidden');
    document.getElementById('aiActions').classList.add('hidden');
    fetchAISuggestion(result);
  } else {
    aiCard.classList.add('hidden');
  }

  // Export button
  let exportBtn = document.getElementById('exportResultsBtn');
  if (!exportBtn) {
    exportBtn = document.createElement('button');
    exportBtn.id = 'exportResultsBtn';
    exportBtn.className = 'btn btn--outline';
    exportBtn.style.marginTop = '1rem';
    exportBtn.textContent = '📥 Export Results';
    document.getElementById('testResults').appendChild(exportBtn);
  }
  exportBtn.onclick = () => openExportModal(result);
}

function renderReview(flaggedList = []) {
  const list = document.getElementById('reviewList');
  list.innerHTML = currentQuestions.map((q, i) => {
    const userAns = userAnswers[i];
    const correct = userAns === q.answer;
    const isFlagged = flaggedList.includes(i);
    const cleanOpt = opt => opt.replace(/^[A-D]\]\s*/,'');
    return `
      <div class="review-item ${correct ? 'review-correct' : 'review-incorrect'}"
        ${isFlagged ? 'style="outline:2px solid #f59e0b;outline-offset:2px;"' : ''}>
        <div class="review-item__q">${isFlagged ? '🚩 ' : ''}${i+1}. ${q.text}</div>
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

// ═══════════════════════════════════════════════════════
//  EXPORT MODAL
// ═══════════════════════════════════════════════════════

function openExportModal(result) {
  let modal = document.getElementById('exportModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'exportModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'exportModalTitle');
    modal.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9998;
      display:flex;align-items:center;justify-content:center;
    `;
    document.body.appendChild(modal);
  }

  const exportData = {
    exported: new Date().toISOString(),
    score: result.score,
    passed: result.passed,
    correct: result.correct,
    total: result.total_questions,
    time: result.time,
    mode: result.mode,
    weakAreas: result.weak_areas,
    topicScores: result.topicScores,
    questions: currentQuestions.map((q, i) => ({
      question: q.text,
      category: q.category,
      yourAnswer: userAnswers[i] !== undefined ? q.options[userAnswers[i]] : 'Skipped',
      correctAnswer: q.options[q.answer],
      correct: userAnswers[i] === q.answer,
      explanation: q.explanation,
      flagged: flaggedQuestions.has(i),
      confidence: confidenceRatings[i] || null
    }))
  };

  const json = JSON.stringify(exportData, null, 2);
  modal.innerHTML = `
    <div style="background:var(--white,#fff);border-radius:16px;padding:2rem;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.3);">
      <h2 id="exportModalTitle" style="margin:0 0 1rem;color:var(--ink)">📥 Export Results</h2>
      <p style="color:var(--grey-500);font-size:.9rem;margin-bottom:1rem">Download your full test results as JSON.</p>
      <pre style="background:var(--paper-warm,#f2ede4);padding:1rem;border-radius:8px;font-size:.75rem;overflow-x:auto;max-height:200px;overflow-y:auto;color:var(--ink);">${json.slice(0,500)}...</pre>
      <div style="display:flex;gap:1rem;margin-top:1.5rem;flex-wrap:wrap;">
        <button onclick="downloadExportJSON()" class="btn btn--primary" style="flex:1">💾 Download JSON</button>
        <button onclick="document.getElementById('exportModal').style.display='none'" class="btn btn--ghost" style="flex:1">Close</button>
      </div>
    </div>
  `;
  modal._data = exportData;
  modal.style.display = 'flex';
}

function downloadExportJSON() {
  const modal = document.getElementById('exportModal');
  const data = modal?._data;
  if (!data) return;
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `passpilot-results-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Results downloaded!');
}

// ═══════════════════════════════════════════════════════
//  AI — GROQ BACKEND
// ═══════════════════════════════════════════════════════

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
  responseDiv.innerHTML = `<div style="padding:.5rem;opacity:.6;font-size:.85rem">Loading...</div>`;

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
  const formatted = text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^#{1,3}\s(.+)$/gm, '<h4>$1</h4>')
    .replace(/^•\s(.+)$/gm, '<div style="margin:.3rem 0;padding-left:1rem">• $1</div>')
    .replace(/\n\n/g, '</p><p style="margin-top:.75rem">')
    .replace(/\n/g, '<br/>');
  return `<p>${formatted}</p>`;
}

function acceptSuggestion() {
  const plan = LS.get('revisionPlan') || [];
  plan.push({ text: aiSuggestion, date: new Date().toLocaleDateString('en-GB'), accepted: true });
  LS.set('revisionPlan', plan);
  document.getElementById('aiActions').classList.add('hidden');
  document.getElementById('aiBody').innerHTML += `
    <div style="margin-top:1rem;padding:.75rem 1rem;background:rgba(0,184,148,.1);border-radius:8px;color:var(--teal);font-size:.9rem;font-weight:600">
      ✅ Plan saved to your Dashboard
    </div>`;
  unlockBadge('Hybrid Pro');
  showToast('Revision plan saved!');
}

function editSuggestion() {
  document.getElementById('aiEditArea').classList.remove('hidden');
  document.getElementById('aiEditText').value = aiSuggestion;
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
    readiness >= 80 ? 'var(--teal)' : readiness >= 60 ? 'var(--gold)' : 'var(--coral)';

  const histDiv = document.getElementById('testHistory');
  if (history.length === 0) {
    histDiv.innerHTML = `<p class="empty-state">No tests yet — <a href="#" onclick="showScreen('theory')">take your first mock</a></p>`;
  } else {
    histDiv.innerHTML = history.slice().reverse().slice(0, 8).map(t => `
      <div class="history-item">
        <div><div class="history-meta">${t.date} · ${t.total} questions</div></div>
        <span class="history-mode history-mode--${t.mode}">${t.mode}</span>
        <span class="history-score ${t.passed ? 'history-score--pass' : 'history-score--fail'}">${t.scorePercent}%</span>
      </div>`).join('');
  }

  renderTopicBars();
  // FIX: defer canvas render until after layout paint so offsetWidth is non-zero
  requestAnimationFrame(() => renderScoreChart(history));
  renderRevisionPlan();
  renderAchievements(history);
}

function renderScoreChart(history) {
  const canvas = document.getElementById('scoreChart');
  if (!canvas || history.length < 2) return;
  const ctx = canvas.getContext('2d');

  // FIX: use clientWidth as fallback when offsetWidth is 0
  const W = canvas.clientWidth || canvas.parentElement?.clientWidth || 400;
  canvas.width  = W;
  canvas.height = 180;

  const H = 180;
  const PAD = { top:20, right:20, bottom:30, left:40 };
  const data = history.slice(-10).map(h => h.scorePercent);
  const xStep = (W - PAD.left - PAD.right) / Math.max(data.length - 1, 1);

  ctx.clearRect(0, 0, W, H);

  const toX = i => PAD.left + i * xStep;
  const toY = v => PAD.top + (H - PAD.top - PAD.bottom) * (1 - v / 100);

  // Gradient fill
  const grad = ctx.createLinearGradient(0, PAD.top, 0, H - PAD.bottom);
  grad.addColorStop(0, 'rgba(255,95,63,0.25)');
  grad.addColorStop(1, 'rgba(255,95,63,0)');
  ctx.beginPath();
  ctx.moveTo(toX(0), toY(data[0]));
  data.forEach((v, i) => { if (i) ctx.lineTo(toX(i), toY(v)); });
  ctx.lineTo(toX(data.length - 1), H - PAD.bottom);
  ctx.lineTo(toX(0), H - PAD.bottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Pass mark line at 86%
  const passY = toY(86);
  ctx.beginPath();
  ctx.setLineDash([6, 4]);
  ctx.strokeStyle = 'rgba(0,184,148,0.6)';
  ctx.lineWidth = 1.5;
  ctx.moveTo(PAD.left, passY);
  ctx.lineTo(W - PAD.right, passY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(0,184,148,0.8)';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('Pass 86%', W - PAD.right, passY - 4);

  // Line
  ctx.beginPath();
  ctx.strokeStyle = 'var(--coral, #ff5f3f)';
  ctx.lineWidth = 2.5;
  ctx.moveTo(toX(0), toY(data[0]));
  data.forEach((v, i) => { if (i) ctx.lineTo(toX(i), toY(v)); });
  ctx.stroke();

  // Dots
  data.forEach((v, i) => {
    ctx.beginPath();
    ctx.arc(toX(i), toY(v), 5, 0, Math.PI * 2);
    ctx.fillStyle = v >= 86 ? '#00b894' : v >= 70 ? '#f5b942' : '#ff5f3f';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // X-axis labels
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  data.forEach((_, i) => {
    ctx.fillText(`T${history.length - data.length + i + 1}`, toX(i), H - 8);
  });
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
        <div class="topic-bar-track" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${t.label}: ${pct}%">
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
  listDiv.innerHTML = plan.slice().reverse().slice(0, 5).map(p =>
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
  if (!unlocked.includes(name)) {
    unlocked.push(name);
    LS.set('unlockedBadges', unlocked);
    showToast(`🏆 Badge unlocked: ${name}!`);
  }
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
    const colour = pct >= 80 ? 'var(--teal)' : pct >= 60 ? 'var(--gold)' : 'var(--coral)';
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
//  REVISION HUB
// ═══════════════════════════════════════════════════════

function initRevisionHub() {
  const screen = document.getElementById('screen-revision');
  if (!screen) return;
  if (screen.querySelector('.revision-hub-inner')) return;

  screen.innerHTML = `
    <div class="page-header">
      <h1>📚 Revision Hub</h1>
      <p>Deep-dive into every topic before your test</p>
    </div>
    <div class="revision-hub-inner" style="display:flex;gap:1.5rem;flex-wrap:wrap;padding:0 1.5rem 2rem;max-width:1100px;margin:0 auto;">
      <aside style="width:220px;flex-shrink:0;">
        <nav id="revTopicNav" role="navigation" aria-label="Revision topics" style="display:flex;flex-direction:column;gap:.5rem;"></nav>
      </aside>
      <main id="revContent" style="flex:1;min-width:0;">
        <p style="color:var(--grey-500)">Select a topic on the left to start revising.</p>
      </main>
    </div>
  `;

  const nav = document.getElementById('revTopicNav');
  nav.innerHTML = Object.entries(TOPICS).map(([key, t]) => `
    <button onclick="showRevisionTopic('${key}')"
      id="revBtn-${key}"
      class="rev-topic-btn"
      style="text-align:left;padding:.6rem .9rem;background:var(--white,#fff);
        border:1px solid var(--grey-100,#ede8e0);border-radius:8px;cursor:pointer;
        color:var(--ink,#111);font-size:.9rem;transition:all .2s;font-family:var(--font-body);"
      aria-label="Revise ${t.label}">
      ${t.icon} ${t.label}
    </button>
  `).join('');
}

function showRevisionTopic(key) {
  const content = REVISION_CONTENT[key];
  const topic   = TOPICS[key];
  if (!content || !topic) return;

  // Highlight active button
  document.querySelectorAll('.rev-topic-btn').forEach(btn => {
    btn.style.background = 'var(--white,#fff)';
    btn.style.borderColor = 'var(--grey-100,#ede8e0)';
    btn.style.color = 'var(--ink,#111)';
  });
  const activeBtn = document.getElementById('revBtn-' + key);
  if (activeBtn) {
    activeBtn.style.background = 'var(--coral,#ff5f3f)';
    activeBtn.style.borderColor = 'var(--coral,#ff5f3f)';
    activeBtn.style.color = '#fff';
  }

  const revContent = document.getElementById('revContent');
  revContent.innerHTML = `
    <h2 style="margin:0 0 .25rem;font-family:var(--font-display);color:var(--ink)">${topic.icon} ${topic.label}</h2>
    <p style="color:var(--grey-500);margin:0 0 1.5rem;font-size:.95rem">${content.subtitle}</p>

    <section aria-label="Key facts">
      <h3 style="font-size:1rem;color:var(--teal);margin:0 0 .75rem;font-family:var(--font-display)">✅ Key Facts</h3>
      ${content.facts.map(f => `
        <div style="display:flex;gap:.75rem;margin-bottom:.75rem;padding:.75rem 1rem;
          background:var(--white,#fff);border-radius:8px;font-size:.9rem;line-height:1.5;
          border-left:3px solid var(--teal);box-shadow:var(--shadow-sm);">
          <span aria-hidden="true">💡</span>
          <span style="color:var(--ink-mid)">${f}</span>
        </div>
      `).join('')}
    </section>

    <section aria-label="Common traps" style="margin-top:1.5rem">
      <h3 style="font-size:1rem;color:var(--coral);margin:0 0 .75rem;font-family:var(--font-display)">⚠️ Common Traps</h3>
      ${content.traps.map(trap => `
        <div style="display:flex;gap:.75rem;margin-bottom:.75rem;padding:.75rem 1rem;
          background:var(--white,#fff);border-radius:8px;font-size:.9rem;line-height:1.5;
          border-left:3px solid var(--coral);box-shadow:var(--shadow-sm);">
          <span aria-hidden="true">🪤</span>
          <span style="color:var(--ink-mid)">${trap}</span>
        </div>
      `).join('')}
    </section>

    <div style="margin-top:2rem">
      <button onclick="startCategoryTest('${key}')" class="btn btn--primary">
        🧪 Practice ${topic.label} Questions
      </button>
    </div>
  `;

  announce(`Showing revision content for ${topic.label}`);
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
  if (streak >= 3) showToast(`🔥 ${streak}-day streak! Keep it up!`);
}

// ═══════════════════════════════════════════════════════
//  CLEAR DATA
// ═══════════════════════════════════════════════════════

function clearAllData() {
  if (!confirm('This will delete ALL your progress, test history, and badges. Are you sure?')) return;
  ['testHistory','topicAverages','revisionPlan','unlockedBadges','streak','lastTestDay',
   'questionWeights','voice','dyslexia','fontSize','theme','focusMode'].forEach(k => LS.clear(k));
  showToast('All data cleared.');
  announce('All progress data has been cleared.', true);
  showScreen('landing');
}

// ═══════════════════════════════════════════════════════
//  DRIVE ANALYSER
// ═══════════════════════════════════════════════════════

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
      showDriveFeedback(DEMO_DRIVE_FEEDBACK, true, 3);
    } else {
      const videoEl = document.getElementById('driveVideoEl');
      const frames  = await captureDriveFrames(videoEl, 3);
      const feedback = await callGroqDriveAPI(frames);
      showDriveFeedback(feedback, false, frames.length);
    }
  } catch (err) {
    console.error('Drive analysis error:', err);
    showDriveFeedback(DEMO_DRIVE_FEEDBACK, false, 0);
  }

  btn.disabled = false;
  document.getElementById('recIndicator').classList.remove('active');
}

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

async function callGroqDriveAPI(frames) {
  const response = await fetch('/api/analyse-drive', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      frame: frames[1] || frames[0],
      mimeType: 'image/jpeg',
      notes: `Analysis of ${frames.length} frames extracted from driving clip`
    })
  });
  if (!response.ok) throw new Error(`Server error: ${response.status}`);
  return response.json();
}

function animateDriveLoadingSteps() {
  ['ds1','ds2','ds3','ds4','ds5'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.className = 'loading-step';
    setTimeout(() => { el.className = 'loading-step active'; }, i * 600);
    setTimeout(() => { el.className = 'loading-step done';   }, i * 600 + 500);
  });
}

function showDriveFeedback(data, isDemo, frameCount) {
  setDriveState('results');

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

  document.getElementById('drivePositives').innerHTML = (data.positives || []).map(p =>
    `<div class="drive-positive"><span class="dp-tick">✓</span>${p}</div>`
  ).join('');

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

  document.getElementById('driveFocus').innerHTML = (data.focus_points || []).map((p, i) =>
    `<div class="drive-focus-item"><div class="dfi-num">${i+1}</div>${p}</div>`
  ).join('');

  document.getElementById('driveInstructorNote').textContent = data.instructor_note;

  const faultCount = (data.faults || []).length;
  document.getElementById('driveStatFrames').textContent = isDemo ? '3 (demo)' : (frameCount ?? 3);
  document.getElementById('driveStatFaults').textContent = faultCount;
  document.getElementById('driveStatFaults').style.color = faultCount > 0 ? 'var(--coral)' : 'var(--teal)';

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
//  TEST CENTRE FINDER
// ═══════════════════════════════════════════════════════

function openTestCentreFinder() {
  let modal = document.getElementById('centreFinderModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'centreFinderModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'centreFinderTitle');
    modal.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:9998;
      display:flex;align-items:center;justify-content:center;padding:1rem;
    `;
    document.body.appendChild(modal);
  }

  const saved = LS.get('studyReminder');
  modal.innerHTML = `
    <div style="background:var(--white,#fff);border-radius:16px;padding:2rem;
      max-width:520px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.3);">
      <h2 id="centreFinderTitle" style="margin:0 0 .5rem;color:var(--ink)">📍 Find Your Test Centre</h2>
      <p style="color:var(--grey-500);font-size:.9rem;margin:0 0 1.25rem">
        Enter your postcode to find nearby DVSA practical test centres.
      </p>
      <div style="display:flex;gap:.75rem;flex-wrap:wrap;">
        <input id="postcodeInput" type="text" placeholder="e.g. SW1A 1AA"
          maxlength="8"
          aria-label="Your postcode"
          style="flex:1;min-width:140px;padding:.65rem 1rem;border-radius:8px;
            border:2px solid var(--grey-100,#ede8e0);background:var(--paper,#faf8f4);
            color:var(--ink);font-size:1rem;outline:none;"
          onkeydown="if(event.key==='Enter')findTestCentres()">
        <button onclick="findTestCentres()" class="btn btn--primary" style="white-space:nowrap">
          🔍 Search
        </button>
      </div>
      <div id="centreResults" style="margin-top:1.25rem" aria-live="polite"></div>
      <button onclick="document.getElementById('centreFinderModal').style.display='none'"
        style="margin-top:1.5rem;padding:.5rem 1.25rem;background:transparent;
          border:1px solid var(--grey-100,#ede8e0);border-radius:8px;color:var(--grey-500);
          cursor:pointer;font-size:.9rem;">
        Close
      </button>
    </div>
  `;
  modal.style.display = 'flex';
  setTimeout(() => document.getElementById('postcodeInput')?.focus(), 100);
}

const DVSA_CENTRES = [
  { name:'Belsize Park (London)',      lat:51.5501, lng:-0.1653 },
  { name:'Bounds Green (London)',      lat:51.6009, lng:-0.1210 },
  { name:'Chiswick (London)',          lat:51.4927, lng:-0.2677 },
  { name:'Hammersmith (London)',       lat:51.4934, lng:-0.2241 },
  { name:'Henlys Corner (London)',     lat:51.5823, lng:-0.1871 },
  { name:'Tolworth (London)',          lat:51.3763, lng:-0.2812 },
  { name:'Birmingham (Kingstanding)',  lat:52.5360, lng:-1.8878 },
  { name:'Birmingham (Shirley)',       lat:52.4076, lng:-1.8244 },
  { name:'Coventry',                   lat:52.4085, lng:-1.5025 },
  { name:'Wolverhampton',              lat:52.5862, lng:-2.1307 },
  { name:'Manchester (Didsbury)',      lat:53.4072, lng:-2.2307 },
  { name:'Manchester (Salford)',       lat:53.4852, lng:-2.2881 },
  { name:'Liverpool (Walton)',         lat:53.4478, lng:-2.9570 },
  { name:'Leeds (Horsforth)',          lat:53.8445, lng:-1.6477 },
  { name:'Sheffield (Middlewood)',     lat:53.4064, lng:-1.4971 },
  { name:'Bradford',                   lat:53.7960, lng:-1.7594 },
  { name:'Bristol (Brislington)',      lat:51.4388, lng:-2.5522 },
  { name:'Bristol (Kingswood)',        lat:51.4601, lng:-2.5024 },
  { name:'Plymouth',                   lat:50.3747, lng:-4.1427 },
  { name:'Exeter',                     lat:50.7232, lng:-3.5275 },
  { name:'Edinburgh (Musselburgh)',    lat:55.9408, lng:-3.0654 },
  { name:'Glasgow (Anniesland)',       lat:55.8872, lng:-4.3290 },
  { name:'Cardiff (Whitchurch)',       lat:51.5251, lng:-3.2002 },
  { name:'Swansea',                    lat:51.6214, lng:-3.9436 },
  { name:'Newcastle (Gosforth)',       lat:55.0006, lng:-1.6162 },
  { name:'Sunderland',                 lat:54.9108, lng:-1.3844 },
  { name:'Nottingham (Chalfont)',      lat:52.9548, lng:-1.1581 },
  { name:'Leicester (Beaumont Leys)',  lat:52.6691, lng:-1.1753 },
  { name:'Norwich',                    lat:52.6310, lng:1.2980  },
  { name:'Cambridge',                  lat:52.2053, lng:0.1218  },
  { name:'Southampton (Millbrook)',    lat:50.9131, lng:-1.4303 },
  { name:'Brighton (Hollingbury)',     lat:50.8565, lng:-0.1347 },
  { name:'Maidstone',                  lat:51.2720, lng:0.5228  },
  { name:'Oxford',                     lat:51.7520, lng:-1.2577 },
];

function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 +
    Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

async function findTestCentres() {
  const input   = document.getElementById('postcodeInput');
  const results = document.getElementById('centreResults');
  const postcode = input?.value.trim().replace(/\s+/g, '').toUpperCase();

  if (!postcode || postcode.length < 4) {
    results.innerHTML = `<p style="color:var(--coral)">Please enter a valid UK postcode.</p>`;
    return;
  }

  results.innerHTML = `<p style="color:var(--grey-500);font-size:.9rem">🔍 Looking up your postcode...</p>`;

  try {
    const res  = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    const data = await res.json();

    if (data.status !== 200) {
      results.innerHTML = `<p style="color:var(--coral)">❌ Postcode not found. Please check and try again.</p>`;
      return;
    }

    const { latitude, longitude, admin_district } = data.result;
    const nearby = DVSA_CENTRES
      .map(c => ({ ...c, distance: haversineDistance(latitude, longitude, c.lat, c.lng) }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);

    results.innerHTML = `
      <p style="font-size:.85rem;color:var(--grey-500);margin-bottom:.75rem">
        Nearest centres to <strong>${admin_district || postcode}</strong>:
      </p>
      ${nearby.map((c, i) => `
        <div style="display:flex;align-items:center;gap:.75rem;padding:.7rem .9rem;
          background:var(--paper-warm,#f2ede4);border-radius:10px;margin-bottom:.5rem;
          border:1px solid var(--grey-100,#ede8e0);">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--coral,#ff5f3f);
            display:flex;align-items:center;justify-content:center;font-weight:700;
            font-size:.85rem;flex-shrink:0;color:#fff;">${i+1}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:600;font-size:.95rem;color:var(--ink)">${c.name}</div>
            <div style="font-size:.8rem;color:var(--grey-500)">${c.distance.toFixed(1)} km away</div>
          </div>
          <a href="https://www.gov.uk/book-driving-test" target="_blank" rel="noopener"
            style="font-size:.8rem;color:var(--coral);text-decoration:none;white-space:nowrap">
            Book →
          </a>
        </div>
      `).join('')}
      <p style="font-size:.75rem;color:var(--grey-500);margin-top:.75rem">
        ℹ️ Distances are approximate. Always confirm availability on gov.uk.
      </p>
    `;
    announce(`Found ${nearby.length} test centres near ${postcode}`);

  } catch (err) {
    results.innerHTML = `<p style="color:var(--coral)">❌ Could not fetch location data. Check your connection and try again.</p>`;
  }
}

// ═══════════════════════════════════════════════════════
//  STUDY REMINDERS
// ═══════════════════════════════════════════════════════

function openStudyReminders() {
  let modal = document.getElementById('reminderModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'reminderModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'reminderTitle');
    modal.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:9998;
      display:flex;align-items:center;justify-content:center;padding:1rem;
    `;
    document.body.appendChild(modal);
  }

  const saved      = LS.get('studyReminder');
  const permission = Notification.permission;

  modal.innerHTML = `
    <div style="background:var(--white,#fff);border-radius:16px;padding:2rem;
      max-width:420px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.3);">
      <h2 id="reminderTitle" style="margin:0 0 .5rem;color:var(--ink)">🔔 Study Reminders</h2>
      <p style="color:var(--grey-500);font-size:.9rem;margin:0 0 1.5rem">
        Set a daily reminder to keep your study streak going.
      </p>

      ${permission === 'denied' ? `
        <div style="padding:.75rem 1rem;background:rgba(255,95,63,.08);border-radius:8px;
          border-left:3px solid var(--coral);margin-bottom:1rem;font-size:.9rem;color:var(--coral)">
          ⚠️ Notifications are blocked in your browser settings.
        </div>
      ` : ''}

      <label style="display:block;margin-bottom:.5rem;font-weight:600;font-size:.9rem;color:var(--ink)">
        Reminder time
      </label>
      <input type="time" id="reminderTime" value="${saved?.time || '18:00'}"
        aria-label="Daily reminder time"
        style="width:100%;padding:.65rem 1rem;border-radius:8px;
          border:2px solid var(--grey-100,#ede8e0);background:var(--paper,#faf8f4);
          color:var(--ink);font-size:1rem;margin-bottom:1.25rem;box-sizing:border-box;">

      <label style="display:flex;align-items:center;gap:.75rem;cursor:pointer;margin-bottom:1.5rem;color:var(--ink)">
        <input type="checkbox" id="reminderEnabled" ${saved?.enabled ? 'checked' : ''}
          style="width:18px;height:18px;cursor:pointer;"
          aria-label="Enable daily reminders">
        <span style="font-size:.95rem">Enable daily reminders</span>
      </label>

      ${saved?.enabled ? `
        <div style="padding:.6rem .9rem;background:rgba(0,184,148,.08);border-radius:8px;
          border-left:3px solid var(--teal);font-size:.85rem;margin-bottom:1rem;color:var(--teal);">
          ✅ Reminder active at ${saved.time} every day
        </div>
      ` : ''}

      <div style="display:flex;gap:.75rem;flex-wrap:wrap;">
        <button onclick="saveStudyReminder()" class="btn btn--primary" style="flex:1">💾 Save</button>
        <button onclick="document.getElementById('reminderModal').style.display='none'"
          class="btn btn--ghost" style="flex:1">Cancel</button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}

async function saveStudyReminder() {
  const time    = document.getElementById('reminderTime')?.value || '18:00';
  const enabled = document.getElementById('reminderEnabled')?.checked || false;

  if (enabled) {
    if (Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        showToast('⚠️ Notifications permission denied');
        openStudyReminders();
        return;
      }
    }
    if (Notification.permission === 'denied') {
      showToast('⚠️ Notifications blocked — check browser settings');
      return;
    }
  }

  LS.set('studyReminder', { time, enabled });

  if (enabled) {
    scheduleStudyReminder(time);
    showToast(`🔔 Reminder set for ${time} daily`);
    announce(`Study reminder set for ${time} every day`);
  } else {
    clearStudyReminder();
    showToast('Reminder disabled');
    announce('Study reminder disabled');
  }

  document.getElementById('reminderModal').style.display = 'none';
}

function scheduleStudyReminder(timeStr) {
  clearStudyReminder();
  const [hours, minutes] = timeStr.split(':').map(Number);

  function checkAndFire() {
    const now = new Date();
    const lastFired = LS.get('reminderLastFired');
    const today = now.toDateString();
    if (now.getHours() === hours && now.getMinutes() === minutes && lastFired !== today) {
      LS.set('reminderLastFired', today);
      if (Notification.permission === 'granted') {
        new Notification('PassPilot 🚗', {
          body: "Time for your daily theory test practice! Keep that streak going 🔥",
          icon: '/icons/icon-192.png',
          tag: 'passpilot-daily'
        });
      }
    }
  }

  window._reminderInterval = setInterval(checkAndFire, 60000);
  checkAndFire();
}

function clearStudyReminder() {
  if (window._reminderInterval) {
    clearInterval(window._reminderInterval);
    window._reminderInterval = null;
  }
}

function initStudyReminder() {
  const saved = LS.get('studyReminder');
  if (saved?.enabled && Notification.permission === 'granted') {
    scheduleStudyReminder(saved.time);
  }
}

// ═══════════════════════════════════════════════════════
//  VOICE INPUT
// ═══════════════════════════════════════════════════════

let recognition      = null;
let voiceInputActive = false;

function initVoiceInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  recognition = new SpeechRecognition();
  recognition.lang = 'en-GB';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = e => {
    const transcript = e.results[0][0].transcript.toLowerCase().trim();
    handleVoiceAnswer(transcript);
  };
  recognition.onerror = () => { voiceInputActive = false; updateVoiceInputBtn(); };
  recognition.onend   = () => { voiceInputActive = false; updateVoiceInputBtn(); };
}

function handleVoiceAnswer(transcript) {
  const map = {
    'a':0,'ay':0,'option a':0,'answer a':0,'first':0,
    'b':1,'be':1,'bee':1,'option b':1,'answer b':1,'second':1,
    'c':2,'see':2,'sea':2,'option c':2,'answer c':2,'third':2,
    'd':3,'dee':3,'de':3,'option d':3,'answer d':3,'fourth':3,'four':3,
  };
  if (transcript.includes('next'))                              { nextQuestion(); return; }
  if (transcript.includes('previous') || transcript.includes('back')) { prevQuestion(); return; }
  if (transcript.includes('flag'))                              { flagCurrentQuestion(); return; }
  if (transcript.includes('read') || transcript.includes('again')) { readQuestionAloud(); return; }
  if (transcript.includes('finish') || transcript.includes('submit')) { nextQuestion(); return; }

  const index = map[transcript];
  if (index !== undefined) {
    selectAnswer(index);
    showToast(`🎙️ Heard: "${transcript.toUpperCase()}" → Selected ${['A','B','C','D'][index]}`);
    announce(`Voice answer: ${['A','B','C','D'][index]} selected`);
    setTimeout(() => nextQuestion(), 1500);
  } else {
    showToast('🎙️ Didn\'t catch that — say A, B, C or D');
    if (voiceEnabled) startVoiceListening();
  }
}

function startVoiceListening() {
  if (!recognition) return;
  try {
    voiceInputActive = true;
    recognition.start();
    updateVoiceInputBtn();
    announce('Listening for your answer. Say A, B, C or D.');
  } catch (e) { /* already running */ }
}

function stopVoiceListening() {
  if (!recognition) return;
  recognition.stop();
  voiceInputActive = false;
  updateVoiceInputBtn();
}

function updateVoiceInputBtn() {
  const btn = document.getElementById('voiceMicBtn');
  if (!btn) return;
  btn.textContent = voiceInputActive ? '🔴 Listening...' : '🎙️ Speak Answer';
  btn.style.background = voiceInputActive ? '#ef4444' : 'var(--coral,#ff5f3f)';
}

function injectVoiceMicBtn() {
  if (document.getElementById('voiceMicBtn')) return;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  const btn = document.createElement('button');
  btn.id = 'voiceMicBtn';
  btn.textContent = '🎙️ Speak Answer';
  btn.setAttribute('aria-label', 'Speak your answer');
  btn.style.cssText = `
    display:block;width:100%;margin-top:.75rem;padding:.65rem;
    background:var(--coral,#ff5f3f);color:#fff;border:none;border-radius:10px;
    font-size:.95rem;font-weight:600;cursor:pointer;transition:all .2s;
  `;
  btn.onclick = () => voiceInputActive ? stopVoiceListening() : startVoiceListening();

  const grid = document.getElementById('answersGrid');
  if (grid?.parentNode) grid.parentNode.insertBefore(btn, grid.nextSibling);
}

function removeVoiceMicBtn() {
  document.getElementById('voiceMicBtn')?.remove();
}

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
  injectAriaRegions();
  injectA11yStyles();   // FIX: now a proper function call — styles injected cleanly
  injectA11yToolbar();
  setupOfflineDetection();
  initStudyReminder();
  initVoiceInput();

  // Restore theme
  const savedTheme = LS.get('theme') || 'light';
  themeIndex = THEMES.indexOf(savedTheme);
  if (themeIndex < 0) themeIndex = 0;
  document.documentElement.setAttribute('data-theme', savedTheme);
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.textContent = savedTheme === 'dark' ? '🌙' : savedTheme === 'light' ? '☀️' : '⬛';

  // Restore dyslexia font
  const savedDyslexia = LS.get('dyslexia') || false;
  document.documentElement.setAttribute('data-dyslexia', String(savedDyslexia));
  const dyslexiaBtn = document.getElementById('dyslexiaBtn');
  if (dyslexiaBtn) {
    dyslexiaBtn.setAttribute('aria-pressed', String(savedDyslexia));
    dyslexiaBtn.style.opacity = savedDyslexia ? '1' : '0.5';
  }

  // Restore font size
  fontSizeIndex = LS.get('fontSize') ?? 1;
  document.documentElement.style.fontSize = FONT_SIZES[fontSizeIndex];

  // Restore voice
  voiceEnabled = LS.get('voice') || false;
  const voiceBtn = document.getElementById('voiceBtn');
  if (voiceBtn) {
    voiceBtn.setAttribute('aria-pressed', String(voiceEnabled));
    voiceBtn.textContent = voiceEnabled ? '🔊' : '🔇';
  }

  // Restore focus mode
  focusModeOn = LS.get('focusMode') || false;
  if (focusModeOn) document.body.classList.add('focus-mode');

  // Inject skip link
  if (!document.getElementById('skipToMain')) {
    const skip = document.createElement('a');
    skip.id = 'skipToMain';
    skip.href = '#mainContent';
    skip.className = 'skip-link';
    skip.textContent = 'Skip to main content';
    document.body.insertBefore(skip, document.body.firstChild);
  }

  // Ensure main has correct id and tabindex
  const main = document.querySelector('main') || document.getElementById('appRoot');
  if (main && !main.id) main.id = 'mainContent';
  if (main) main.setAttribute('tabindex', '-1');

  renderTopicsGrid();
  renderCatPills();
  renderLandingStats();
  showScreen('landing');
}

document.addEventListener('DOMContentLoaded', init);