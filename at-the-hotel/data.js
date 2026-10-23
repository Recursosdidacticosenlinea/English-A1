window.UNIT = {
  slug: "at-the-hotel",
  number: 39,
  title: "At the Hotel",
  level: "A1",
  minutes: 50,
  speakers: { "Receptionist": "f", "Mr. Hughes": "m", "Guest": "f", "Hotel manager": "m", A: "f", B: "m" },
  focus: ["checking in and out", "Can I…? / Can you…? requests", "I have a reservation.", "hotel rooms and services", "Is there a…? What time is breakfast?"],

  presentation: {
    scene: "🏨🛎️🔑🛏️",
    situation: "Mr. Hughes arrives at a hotel in Oaxaca after a long trip. He goes to the reception desk.",
    warmup: {
      prompt: "What do you want in a hotel? Choose all.",
      options: ["Wi-Fi", "breakfast", "a pool", "a gym", "air conditioning", "a big bed", "parking", "room service", "a balcony", "a restaurant"],
      response: "Great! In this unit you'll learn to check in, ask for things and solve problems at a hotel."
    },
    dialogueTitle: "Checking in",
    dialogue: [
      { who: "Receptionist", line: "Good evening. Welcome to Hotel Casa Verde. *How can I help you*?" },
      { who: "Mr. Hughes", line: "Good evening. *I have a reservation*. My name is Robert Hughes." },
      { who: "Receptionist", line: "*Can you spell* your last name, please?" },
      { who: "Mr. Hughes", line: "H-U-G-H-E-S." },
      { who: "Receptionist", line: "Yes, a single room for three nights. *Can I see* your passport, please?" },
      { who: "Mr. Hughes", line: "Here you are. *What time is breakfast*?" },
      { who: "Receptionist", line: "From seven to ten, in the restaurant. *Here's your key*. You're in room 214, on the second floor." },
      { who: "Mr. Hughes", line: "Thank you. *Is there* Wi-Fi in the room?" },
      { who: "Receptionist", line: "Yes, there is. The password is on your key card. *Enjoy your stay*!" }
    ]
  },

  objectives: [
    "I can check in and check out of a hotel.",
    "I can make requests with *Can I…?* and *Can you…?*",
    "I can ask about hotel services and times.",
    "I can explain a simple problem in my room."
  ],

  explanation: {
    vocabTitle: "At the hotel",
    vocab: [
      { word: "reception", icon: "🛎️" }, { word: "reservation", icon: "📅" }, { word: "key / key card", icon: "🔑" },
      { word: "single room", icon: "🛏️" }, { word: "double room", icon: "🛌" }, { word: "check in", icon: "📥" },
      { word: "check out", icon: "📤" }, { word: "elevator", icon: "🛗" }, { word: "pool", icon: "🏊" },
      { word: "towel", icon: "🧻" }, { word: "air conditioning", icon: "❄️" }, { word: "shower", icon: "🚿" },
      { word: "room service", icon: "🍽️" }, { word: "guest", icon: "🧳" }, { word: "passport / ID", icon: "🛂" }
    ],
    grammar: [
      {
        title: "Requests with can",
        head: ["Asking for permission", "Asking someone to do something"],
        rows: [
          ["*Can I* see your passport?", "*Can you* spell your name, please?"],
          ["*Can I* have another towel, please?", "*Can you* call a taxi for me, please?"],
          ["*Can I* check out at 1 p.m.?", "*Can you* repeat that, please?"],
          ["*Could I* leave my bag here?", "*Could you* help me with my luggage?"]
        ],
        note: "*Could* is more polite than *can*. Answers: *Sure! / Of course. / Yes, no problem. / I'm sorry, you can't.*"
      },
      {
        title: "Asking about services",
        head: ["Question", "Answer"],
        rows: [
          ["*What time is* breakfast?", "*From* seven *to* ten."],
          ["*Is there* a pool?", "Yes, *there is*. It's on the roof."],
          ["*What time is* check-out?", "*At* twelve o'clock."],
          ["*Where's* the elevator?", "It's next to the reception."]
        ]
      },
      {
        title: "Problems in the room",
        head: ["Structure", "Example"],
        rows: [
          ["*The … doesn't work.*", "*The air conditioning doesn't work.*"],
          ["*There isn't any / There aren't any…*", "*There aren't any* towels."],
          ["*The room is too…*", "*The room is too* noisy."]
        ]
      }
    ],
    watchOut: [
      ["I have a reservation for my name.", "I have a reservation in my name. / under Hughes."],
      ["Can you give me other towel?", "Can I have another towel, please?"],
      ["The shower no works.", "The shower doesn't work."],
      ["What hour is breakfast?", "What time is breakfast?"]
    ],
    check: {
      type: "sort", title: "Quick check",
      prompt: "Who says it: the receptionist or the guest?",
      bins: ["Receptionist", "Guest"],
      items: [
        { text: "How can I help you?", bin: 0 }, { text: "Can I see your passport?", bin: 0 }, { text: "Here's your key.", bin: 0 }, { text: "Enjoy your stay!", bin: 0 },
        { text: "I have a reservation.", bin: 1 }, { text: "What time is breakfast?", bin: 1 }, { text: "Can I have another towel?", bin: 1 }, { text: "The shower doesn't work.", bin: 1 }
      ]
    }
  },

  skills: {
    listening: {
      intro: "A guest calls the reception from her room. Listen and answer.",
      title: "A call to reception",
      script: [
        { who: "Receptionist", line: "Reception, good morning." },
        { who: "Guest", line: "Hello. This is room 305. I've got a problem. The air conditioning doesn't work and it's very hot." },
        { who: "Receptionist", line: "I'm very sorry. Can I send someone to fix it?" },
        { who: "Guest", line: "Yes, please. And can I have two more towels? There's only one." },
        { who: "Receptionist", line: "Of course. Anything else?" },
        { who: "Guest", line: "Yes. Can you call a taxi for me at eleven? I want to go to the airport." },
        { who: "Receptionist", line: "No problem. And remember, check-out is at twelve." },
        { who: "Guest", line: "Can I leave my suitcase at the reception after check-out? My flight is at six." },
        { who: "Receptionist", line: "Sure, that's fine." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "The guest is in room 305.", a: true },
            { s: "The shower doesn't work.", a: false },
            { s: "There's only one towel in the room.", a: true },
            { s: "The guest wants a taxi at ten.", a: false },
            { s: "She can leave her suitcase at the reception.", a: true }
          ]
        },
        {
          type: "match", title: "Requests",
          prompt: "Match the request with the reason.",
          pairs: [
            ["fix the air conditioning", "It's very hot."],
            ["two more towels", "There's only one."],
            ["a taxi at eleven", "She wants to go to the airport."],
            ["leave her suitcase", "Her flight is at six."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read the hotel information card in the room.",
      title: "Welcome to Hotel Casa Verde",
      text: [
        { author: "Services", body: "Breakfast: 7:00–10:00 in the Jardín restaurant (included). Pool: 8:00–20:00, on the roof. Free Wi-Fi in all rooms. Parking: $100 per night. Room service: 24 hours — call 9." },
        { author: "Important", body: "Check-out time is 12:00. Late check-out until 14:00 costs $300. Please don't smoke in the rooms. Quiet hours: 23:00–7:00. Can we help you? Call reception: 0." }
      ],
      activities: [
        {
          type: "match", title: "Find the information",
          prompt: "Match the question with the answer.",
          pairs: [
            ["What time is breakfast?", "from seven to ten"],
            ["Where's the pool?", "on the roof"],
            ["How much is parking?", "a hundred pesos a night"],
            ["What time is check-out?", "at twelve o'clock"],
            ["What number is room service?", "nine"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Breakfast is free.", a: true },
            { s: "Wi-Fi costs extra.", a: false },
            { s: "Late check-out is free.", a: false },
            { s: "You can smoke in the rooms.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice requests, then write an email to a hotel.",
      activities: [
        {
          type: "rewrite", title: "Make a polite request",
          prompt: "Write a request with *Can I…?* or *Can you…?* and *please*.",
          items: [
            { q: "You want another pillow. (Can I…?)", a: ["Can I have another pillow, please?", "Can I have another pillow please?"] },
            { q: "You want the receptionist to call a taxi. (Can you…?)", a: ["Can you call a taxi, please?", "Can you call a taxi for me, please?"] },
            { q: "You want to check out late. (Can I…?)", a: ["Can I check out late, please?"] },
            { q: "You want the receptionist to repeat. (Can you…?)", a: ["Can you repeat that, please?", "Can you repeat, please?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I have a reservation for two nights." },
            { a: "What time is check-out?" },
            { a: "The air conditioning doesn't work." },
            { a: "Is there a gym in the hotel?" },
            { a: "Can I leave my bag here?" }
          ]
        },
        {
          type: "write", title: "An email to a hotel",
          prompt: "Write an email to a hotel before your trip. Say your name, the dates and the type of room. Ask two questions about services and make one request.",
          minWords: 45, maxWords: 90,
          model: "Dear Hotel Casa Verde, My name is Daniela Ruiz. I have a reservation for a double room from June 12th to June 15th. I have two questions: What time is breakfast? Is there parking at the hotel? Also, can I have a room with a balcony, please? My flight arrives at 11 p.m., so I can check in late. Thank you! Best regards, Daniela Ruiz",
          bank: ["Dear…,", "My name is…", "I have a reservation for…", "from … to…", "What time is…?", "Is there a…?", "Can I have…, please?", "Best regards,"],
          checklist: [
            "I wrote my name and the **dates**.",
            "I asked two questions.",
            "I made a polite request with *Can I…?*",
            "I started and ended like an email: *Dear… / Best regards*."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Then say it and check your pronunciation.",
          items: [
            "I have a reservation for two nights.",
            "Can I see your passport, please?",
            "What time is breakfast?",
            "Is there Wi-Fi in the room?",
            "The air conditioning doesn't work.",
            "Can I have another towel, please?"
          ]
        },
        {
          type: "speak", title: "Hotel review",
          prompt: "Record a short video or audio review of a hotel (real or imagined). Describe the room, the services and one problem.",
          language: ["The hotel is…", "My room is…", "There's / There isn't…", "Breakfast is…", "The … doesn't work.", "I recommend it / I don't recommend it."],
          seconds: 60,
          checklist: ["describe the room and services?", "mention a problem?", "give an opinion?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can check in and check out of a hotel.", review: "Presentation: checking in" },
    { can: "I can make requests with *Can I…? / Can you…?*", review: "Explanation: requests with can; Writing activity 1" },
    { can: "I can ask about services and times.", review: "Explanation: asking about services" },
    { can: "I can explain a problem in a hotel room.", review: "Explanation: problems in the room; Listening" },
    { can: "I can read hotel information.", review: "Reading: Hotel Casa Verde" },
    { can: "I can write an email to a hotel.", review: "Writing activity 3" }
  ]
};
