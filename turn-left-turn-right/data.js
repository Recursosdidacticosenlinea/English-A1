window.UNIT = {
  slug: "turn-left-turn-right",
  number: 15,
  title: "Turn Left, Turn Right",
  level: "A1",
  minutes: 50,
  speakers: { "Lin": "f", "Police officer": "m", "Tourist": "f", "Joel": "m", A: "f", B: "m" },
  focus: ["imperatives: go, turn, cross, take", "turn left / turn right / go straight", "the first / second street", "How do I get to…?", "Don't + verb"],

  presentation: {
    scene: "🗺️⬅️➡️⬆️",
    situation: "Lin is a tourist from China in Puebla. She wants to go to the Rosary Chapel. She asks a police officer for directions.",
    warmup: {
      prompt: "Which direction words do you know? Choose all.",
      options: ["left", "right", "straight", "corner", "street", "block", "map", "cross", "traffic lights", "turn"],
      response: "Very good! In this unit you'll learn to ask for and give simple directions."
    },
    dialogueTitle: "Asking a police officer",
    dialogue: [
      { who: "Lin", line: "Excuse me. *How do I get to* the Rosary Chapel?" },
      { who: "Police officer", line: "It's not far. *Go straight* on this street for two blocks." },
      { who: "Lin", line: "Two blocks. OK." },
      { who: "Police officer", line: "Then *turn left* at the traffic lights. That's 5 de Mayo Street." },
      { who: "Lin", line: "*Turn left* at the traffic lights…" },
      { who: "Police officer", line: "Yes. *Walk* for one block. The chapel is in the Santo Domingo church, *on your right*." },
      { who: "Lin", line: "Thank you! Is it OK to take photos inside?" },
      { who: "Police officer", line: "Yes, but *don't use* the flash. Enjoy your visit!" }
    ]
  },

  objectives: [
    "I can understand and give simple directions.",
    "I can use imperatives: *go, turn, cross, take*.",
    "I can use *Don't…* for things people shouldn't do.",
    "I can ask *How do I get to…?* and *Where's the nearest…?*"
  ],

  explanation: {
    vocabTitle: "Directions",
    vocab: [
      { word: "go straight", icon: "⬆️" }, { word: "turn left", icon: "⬅️" }, { word: "turn right", icon: "➡️" },
      { word: "cross the street", icon: "🚸" }, { word: "traffic lights", icon: "🚦" }, { word: "corner", icon: "📐" },
      { word: "block", icon: "🏙️" }, { word: "on your left", icon: "👈" }, { word: "on your right", icon: "👉" },
      { word: "go past", icon: "🚶" }, { word: "map", icon: "🗺️" }, { word: "bridge", icon: "🌉" },
      { word: "square", icon: "⛲" }, { word: "first / second / third", icon: "🥇" }, { word: "at the end of the street", icon: "🛑" }
    ],
    grammar: [
      {
        title: "Imperatives",
        intro: "Use the base form of the verb to give directions and instructions. There is no subject.",
        head: ["Affirmative", "Negative"],
        rows: [
          ["*Go* straight.", "*Don't go* left."],
          ["*Turn* right at the corner.", "*Don't turn* here."],
          ["*Cross* the street.", "*Don't cross* here. It's dangerous."],
          ["*Take* the second street on the left.", "*Don't take* the bus. Walk!"]
        ],
        note: "Add *please* to be polite: *Please turn left.* / *Turn left, please.*"
      },
      {
        title: "Giving directions step by step",
        head: ["Step", "Example"],
        rows: [
          ["start", "*Go straight* for two blocks."],
          ["change direction", "*Turn left* at the traffic lights / at the corner."],
          ["which street", "*Take the first / second street* on the right."],
          ["arrive", "*It's on your left.* / *It's at the end of the street.*"],
          ["connect the steps", "*First…, then…, after that…*"]
        ]
      },
      {
        title: "Asking for directions",
        head: ["Question", "Answer"],
        rows: [
          ["*How do I get to* the zócalo?", "Go straight and turn right."],
          ["*Where's the nearest* ATM?", "There's one on the corner."],
          ["*Is it far?*", "No, it's about five minutes. / Yes, take a taxi."]
        ]
      }
    ],
    watchOut: [
      ["You turn left.", "Turn left."],
      ["No cross here.", "Don't cross here."],
      ["Turn to left.", "Turn left."],
      ["Take the street two.", "Take the second street."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the directions.",
      bank: ["Go", "Turn", "Cross", "Don't", "Take", "on"],
      items: [
        "[[Go]] straight for three blocks.",
        "[[Turn]] right at the traffic lights.",
        "[[Take]] the second street on the left.",
        "[[Cross]] the street at the corner.",
        "[[Don't]] walk in the park at night.",
        "The bank is [[on]] your right."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Joel works at a hotel reception. A tourist asks him for directions to three places. Listen.",
      title: "At the hotel reception",
      script: [
        { who: "Tourist", line: "Good morning. How do I get to the Amparo Museum?" },
        { who: "Joel", line: "Go out of the hotel and turn right. Go straight for three blocks. The museum is on your left." },
        { who: "Tourist", line: "Thank you. And where's the nearest pharmacy?" },
        { who: "Joel", line: "That's easy. Cross the street. The pharmacy is opposite the hotel, next to a café." },
        { who: "Tourist", line: "Great. And is the Artist's Quarter far?" },
        { who: "Joel", line: "No, it's about ten minutes. Turn left out of the hotel. Take the second street on the right and go straight to the end of the street. Don't take a taxi — it's a nice walk!" }
      ],
      activities: [
        {
          type: "match", title: "Directions to each place",
          prompt: "Match the place with the first direction.",
          pairs: [
            ["the Amparo Museum", "Turn right and go straight for three blocks."],
            ["the pharmacy", "Cross the street."],
            ["the Artist's Quarter", "Turn left and take the second street on the right."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The museum is on the right.", a: false },
            { s: "The pharmacy is next to a café.", a: true },
            { s: "The Artist's Quarter is about ten minutes away.", a: true },
            { s: "Joel says: take a taxi.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the instructions from a party invitation.",
      title: "How to get to my party",
      text: [
        { author: "Majo's message", body: "Hi everyone! My party is on Saturday at 7 p.m. Here are the directions from the university. Take the 32 bus and get off at Plaza Dorada. Cross the street at the traffic lights. Go past the supermarket and turn left on Juárez Street. Walk for one block. My house is number 15, on your right. It's a white house with a blue door. Don't ring the bell — the baby is sleeping! Send me a message and I can open the door." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the steps in order",
          prompt: "Put the words in order to make each step of the directions.",
          items: [
            { a: "Take the 32 bus." },
            { a: "Get off at Plaza Dorada." },
            { a: "Cross the street at the traffic lights." },
            { a: "Turn left on Juárez Street." },
            { a: "The house is on your right." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "The party is on Friday.", a: false },
            { s: "You go past a supermarket.", a: true },
            { s: "Majo's house is number 50.", a: false },
            { s: "The door is blue.", a: true },
            { s: "Majo wants you to ring the bell.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice imperatives, then write directions from your school to your home or a favorite place.",
      activities: [
        {
          type: "rewrite", title: "Make it negative",
          prompt: "Write the negative imperative.",
          items: [
            { q: "Turn left here.", a: ["Don't turn left here.", "Do not turn left here."] },
            { q: "Cross the street.", a: ["Don't cross the street.", "Do not cross the street."] },
            { q: "Take a taxi.", a: ["Don't take a taxi.", "Do not take a taxi."] },
            { q: "Use your phone in the museum.", a: ["Don't use your phone in the museum.", "Do not use your phone in the museum."] }
          ]
        },
        {
          type: "sort", title: "Ask or answer?",
          prompt: "Is it a question or an answer?",
          bins: ["Asking for directions", "Giving directions"],
          items: [
            { text: "How do I get to the bank?", bin: 0 }, { text: "Is it far?", bin: 0 }, { text: "Where's the nearest ATM?", bin: 0 }, { text: "Excuse me, is there a café near here?", bin: 0 },
            { text: "Go straight for two blocks.", bin: 1 }, { text: "It's on your left.", bin: 1 }, { text: "Take the first street on the right.", bin: 1 }, { text: "Don't cross here.", bin: 1 }
          ]
        },
        {
          type: "write", title: "How to get to…",
          prompt: "A new classmate wants to visit you or your favorite place (a café, a park…). Write directions from the school. Use at least four imperatives and one *Don't…*.",
          minWords: 40, maxWords: 80,
          model: "Hi Kenji! Here are the directions to the best café in the city. From the school, go straight on 14 Sur for two blocks. Turn right at the traffic lights. Then take the first street on the left. Go past a small park. The café is on your right, next to a bookstore. Don't go on Monday — it's closed!",
          bank: ["From the school, go straight…", "Turn left / right at…", "Take the first / second street…", "Go past…", "Cross…", "It's on your left / right.", "Don't…"],
          checklist: [
            "I used at least **four** imperatives.",
            "I used *Don't* + verb once.",
            "I used *first, second* or *then*.",
            "I said where the place is at the end."
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
            "Excuse me, how do I get to the museum?",
            "Go straight for two blocks.",
            "Turn left at the traffic lights.",
            "Take the second street on the right.",
            "It's on your left.",
            "Don't cross the street here."
          ]
        },
        {
          type: "speak", title: "From my home to…",
          prompt: "Record directions from your home to a place you like (a store, a park, a friend's house). Give clear steps.",
          language: ["Go out of my house and turn…", "Go straight for … blocks.", "Then…", "It's next to / opposite…", "It's on your…"],
          seconds: 60,
          checklist: ["give at least four steps?", "use *first / then*?", "use prepositions of place?", "speak clearly for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand simple directions.", review: "Listening: at the hotel reception" },
    { can: "I can use imperatives: *go, turn, cross, take*.", review: "Explanation: imperatives; Quick check" },
    { can: "I can use *Don't* + verb.", review: "Explanation: imperatives; Writing activity 1" },
    { can: "I can ask *How do I get to…?*", review: "Explanation: asking for directions" },
    { can: "I can give directions step by step.", review: "Explanation; Speaking activity 1 (listen and repeat)" },
    { can: "I can write directions to a place.", review: "Writing activity 3" }
  ]
};
