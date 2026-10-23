window.UNIT = {
  slug: "my-neighborhood",
  number: 14,
  title: "My Neighborhood",
  level: "A1",
  minutes: 50,
  speakers: { "Claire": "f", "Óscar": "m", "Woman": "f", "Man": "m", A: "f", B: "m" },
  focus: ["places in town: bank, pharmacy, park…", "There's a… near / next to / opposite…", "Where's the…? It's between…", "Is there a … near here?", "It's on … Street."],

  presentation: {
    scene: "🏘️🏦💊🌳",
    situation: "Claire is an exchange student from Canada. She is new in the neighborhood. Her neighbor Óscar tells her about the places near their building.",
    warmup: {
      prompt: "What places are there near your home? Choose all.",
      options: ["a park", "a supermarket", "a bank", "a pharmacy", "a school", "a church", "a gym", "a market", "a bus stop", "a hospital"],
      response: "Good! In this unit you'll learn to talk about the places in your neighborhood and say where they are."
    },
    dialogueTitle: "New in the neighborhood",
    dialogue: [
      { who: "Claire", line: "Hi, Óscar! *Is there a* supermarket *near here*?" },
      { who: "Óscar", line: "*Yes, there is*. *It's on* Reforma Street, *next to* the bank." },
      { who: "Claire", line: "Great. And *is there a* pharmacy?" },
      { who: "Óscar", line: "Yes, *there are two*. One is *opposite* the park and the other is *between* the café and the school." },
      { who: "Claire", line: "Perfect. *Where's* the bus stop?" },
      { who: "Óscar", line: "*It's on the corner*, *in front of* the church." },
      { who: "Claire", line: "*Is there a* gym?" },
      { who: "Óscar", line: "*No, there isn't*, sorry. But *there's a* big park. A lot of people run there in the morning." }
    ]
  },

  objectives: [
    "I can name places in a town or neighborhood.",
    "I can say where places are with *next to, opposite, between, near*.",
    "I can ask *Is there a … near here?* and *Where's the…?*",
    "I can describe my neighborhood."
  ],

  explanation: {
    vocabTitle: "Places in town",
    vocab: [
      { word: "bank", icon: "🏦" }, { word: "pharmacy", icon: "💊" }, { word: "supermarket", icon: "🛒" },
      { word: "market", icon: "🧺" }, { word: "park", icon: "🌳" }, { word: "church", icon: "⛪" },
      { word: "post office", icon: "📮" }, { word: "hospital", icon: "🏥" }, { word: "café", icon: "☕" },
      { word: "restaurant", icon: "🍴" }, { word: "gym", icon: "🏋️" }, { word: "movie theater", icon: "🎬" },
      { word: "bus stop", icon: "🚏" }, { word: "gas station", icon: "⛽" }, { word: "library", icon: "📚" }
    ],
    grammar: [
      {
        title: "Prepositions of place in town",
        head: ["Preposition", "Example"],
        rows: [
          ["*next to*", "The supermarket is *next to* the bank."],
          ["*opposite* (*across from*)", "The pharmacy is *opposite* the park."],
          ["*between* A *and* B", "The school is *between* the café *and* the library."],
          ["*in front of / behind*", "The bus stop is *in front of* the church."],
          ["*near / far from*", "My house is *near* the market."],
          ["*on* + street · *on the corner*", "It's *on* Reforma Street. / It's *on the corner*."]
        ]
      },
      {
        title: "Asking about places",
        head: ["Question", "Answer"],
        rows: [
          ["*Is there a* bank *near here*?", "Yes, there is. It's on 5th Street."],
          ["*Are there any* restaurants?", "Yes, there are a lot. / No, there aren't any."],
          ["*Where's* the post office?", "It's next to the hospital."],
          ["*Where are* the shops?", "They're near the bus station."]
        ],
        note: "*Where's* = *Where is*. For plural use *Where are…?*"
      }
    ],
    watchOut: [
      ["The bank is next the park.", "The bank is next to the park."],
      ["It's in Reforma Street.", "It's on Reforma Street."],
      ["Is there a bank near of here?", "Is there a bank near here?"],
      ["It's between the café or the school.", "It's between the café and the school."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      bank: ["next", "between", "on", "near", "front", "opposite"],
      items: [
        "The bus stop is in [[front]] of the church.",
        "The school is [[between]] the café and the library.",
        "The supermarket is [[next]] to the bank.",
        "The café is [[on]] Reforma Street.",
        "Is there a pharmacy [[near]] here?",
        "The pharmacy is [[opposite]] the park."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A woman asks a man in the street about places in the neighborhood. Listen.",
      title: "Excuse me…",
      script: [
        { who: "Woman", line: "Excuse me. Is there a post office near here?" },
        { who: "Man", line: "Yes, there is. It's on Hidalgo Street, opposite the movie theater." },
        { who: "Woman", line: "Thanks. And is there an ATM? I need money." },
        { who: "Man", line: "Yes, there's a bank next to the post office. There's an ATM in front of the bank." },
        { who: "Woman", line: "Great. Are there any good restaurants?" },
        { who: "Man", line: "Yes, there are a lot. My favorite is La Abuela. It's between the pharmacy and the gym, on the corner of Hidalgo and Morelos." },
        { who: "Woman", line: "And where's the library?" },
        { who: "Man", line: "Oh, the library is far from here. Take the bus. The bus stop is behind you!" }
      ],
      activities: [
        {
          type: "match", title: "Where is it?",
          prompt: "Match the place with its location.",
          pairs: [
            ["the post office", "opposite the movie theater"],
            ["the bank", "next to the post office"],
            ["the ATM", "in front of the bank"],
            ["La Abuela restaurant", "between the pharmacy and the gym"],
            ["the bus stop", "behind the woman"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The post office is on Morelos Street.", a: false },
            { s: "There aren't any good restaurants.", a: false },
            { s: "The library is near.", a: false },
            { s: "The woman needs money.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three people's opinions of their neighborhoods on a city forum.",
      title: "Puebla neighborhoods forum",
      text: [
        { author: "Carmen · Centro", body: "My neighborhood is very old and beautiful. There are a lot of churches, museums and cafés. There's a big market near my house. It's noisy at night, but I love it." },
        { author: "Rodrigo · Angelópolis", body: "My neighborhood is modern. There's a big shopping mall and there are a lot of restaurants. There aren't any markets, and there isn't a park near my apartment. You need a car here." },
        { author: "Majo · San Manuel", body: "My neighborhood is near BUAP, so there are a lot of students. There are cheap restaurants, copy shops and gyms. There's a park opposite my house. It's quiet in the morning." }
      ],
      activities: [
        {
          type: "sort", title: "Which neighborhood?",
          prompt: "Sort the information.",
          bins: ["Centro", "Angelópolis", "San Manuel"],
          items: [
            { text: "old and beautiful", bin: 0 }, { text: "museums", bin: 0 }, { text: "noisy at night", bin: 0 },
            { text: "a shopping mall", bin: 1 }, { text: "no markets", bin: 1 }, { text: "you need a car", bin: 1 },
            { text: "lots of students", bin: 2 }, { text: "copy shops", bin: 2 }, { text: "a park opposite the house", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with one word.",
          items: [
            "In Centro there's a big [[market]] near Carmen's house.",
            "Rodrigo's neighborhood is very [[modern]].",
            "There [[isn't]] a park near Rodrigo's apartment.",
            "Majo's neighborhood is near [[BUAP]].",
            "The park is [[opposite]] Majo's house."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice describing locations, then write a forum post about your neighborhood.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Is there a bank near here?" },
            { a: "The gym is next to the school." },
            { a: "Where's the bus stop?" },
            { a: "There aren't any cafés on my street." },
            { a: "It's between the park and the church." }
          ]
        },
        {
          type: "rewrite", title: "Make questions",
          prompt: "Write the question. Example: *a bank* → *Is there a bank near here?*",
          items: [
            { q: "a pharmacy", a: ["Is there a pharmacy near here?"] },
            { q: "any restaurants", a: ["Are there any restaurants near here?"] },
            { q: "a bus stop", a: ["Is there a bus stop near here?"] },
            { q: "any parks", a: ["Are there any parks near here?"] }
          ]
        },
        {
          type: "write", title: "My neighborhood",
          prompt: "Write a forum post about your neighborhood. Say where it is, what places there are and where they are. Say one good thing and one bad thing.",
          minWords: 40, maxWords: 80,
          model: "I live in La Paz, in Puebla. My neighborhood is quiet and green. There's a big park near my house and there are a lot of cafés. There's a supermarket on my street, next to a pharmacy. There isn't a movie theater, but there's one in the mall. The bad thing is that there aren't many buses.",
          bank: ["I live in…", "My neighborhood is…", "There's a … near my house.", "There are a lot of…", "It's next to / opposite…", "There isn't a…", "The bad thing is…"],
          checklist: [
            "I named at least **five** places.",
            "I used two prepositions: *next to, opposite, between…*",
            "I used *there is / there are* and a negative.",
            "I said a good thing and a bad thing."
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
            "Is there a pharmacy near here?",
            "Yes, there is. It's next to the bank.",
            "The café is opposite the park.",
            "The school is between the church and the library.",
            "Where's the bus stop?",
            "It's on the corner of my street."
          ]
        },
        {
          type: "speak", title: "Around my home",
          prompt: "Record yourself describing the places near your home. Talk about at least five places and say where they are.",
          language: ["Near my house there's…", "There are a lot of…", "It's next to / opposite / between…", "There isn't a…", "My favorite place is…"],
          seconds: 75,
          checklist: ["talk about five places?", "use prepositions of place?", "use *there is / there are*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name places in a town.", review: "Explanation: vocabulary" },
    { can: "I can use *next to, opposite, between, near*.", review: "Explanation: prepositions of place; Quick check" },
    { can: "I can ask *Is there a … near here?*", review: "Explanation: asking about places; Writing activity 2" },
    { can: "I can ask and answer *Where's the…?*", review: "Presentation; Listening" },
    { can: "I can understand people describing a neighborhood.", review: "Reading: neighborhoods forum" },
    { can: "I can describe my own neighborhood.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
