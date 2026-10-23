window.UNIT = {
  slug: "i-want-to-be",
  number: 44,
  title: "I Want to Be…",
  level: "A1",
  minutes: 50,
  speakers: { "Grandpa": "m", "Sofía": "f", "Host": "f", "Kevin": "m", "Fernanda": "f", A: "f", B: "m" },
  focus: ["want to / would like to + verb", "What do you want to be?", "I'd like to work with…", "dreams and future jobs", "because + reason"],

  presentation: {
    scene: "🚀👩‍⚕️🎨💭",
    situation: "Sofía is sixteen. Her grandpa asks her about her plans and dreams for the future.",
    warmup: {
      prompt: "What do you want to do in the future? Choose all.",
      options: ["travel", "go to university", "learn languages", "have a family", "buy a house", "start a business", "help people", "be famous", "live abroad", "have a pet"],
      response: "Big dreams! In this unit you'll learn to talk about what you want and would like to do."
    },
    dialogueTitle: "Big dreams",
    dialogue: [
      { who: "Grandpa", line: "Sofía, *what do you want to be* in the future?" },
      { who: "Sofía", line: "*I want to be* a vet, Grandpa. *I'd like to work* with animals." },
      { who: "Grandpa", line: "A vet! *Why do you want to* be a vet?" },
      { who: "Sofía", line: "*Because* I love animals and I want to help them. *I'd like to study* at BUAP." },
      { who: "Grandpa", line: "Very good. *Do you want to* live in Puebla?" },
      { who: "Sofía", line: "*No, I don't*. *I'd like to live* near the sea, in Veracruz!" },
      { who: "Grandpa", line: "And *would you like to* travel?" },
      { who: "Sofía", line: "*Yes, I'd love to*! *I want to visit* Japan and Canada. And *I don't want to* stay in an office all day!" }
    ]
  },

  objectives: [
    "I can talk about my dreams and plans with *want to* and *would like to*.",
    "I can ask *What do you want to be?* and *Would you like to…?*",
    "I can give reasons with *because*.",
    "I can talk about jobs and the skills they need."
  ],

  explanation: {
    vocabTitle: "Dreams and future",
    vocab: [
      { word: "vet", icon: "🐾" }, { word: "pilot", icon: "✈️" }, { word: "scientist", icon: "🔬" },
      { word: "designer", icon: "🎨" }, { word: "programmer", icon: "💻" }, { word: "chef", icon: "👨‍🍳" },
      { word: "musician", icon: "🎸" }, { word: "astronaut", icon: "🚀" }, { word: "photographer", icon: "📷" },
      { word: "travel the world", icon: "🌍" }, { word: "start a business", icon: "💼" }, { word: "help people", icon: "🤲" },
      { word: "live abroad", icon: "🏡" }, { word: "learn a language", icon: "🗣️" }, { word: "dream", icon: "💭" }
    ],
    grammar: [
      {
        title: "Want to / would like to",
        head: ["", "want to", "would like to (more polite)"],
        rows: [
          ["affirmative", "I *want to be* a vet.", "I*'d like to work* with animals."],
          ["negative", "I *don't want to* work in an office.", "I *wouldn't like to* live alone."],
          ["question", "*Do* you *want to* travel?", "*Would* you *like to* travel?"],
          ["he / she", "She *wants to* study music.", "She*'d like to* be a singer."]
        ],
        note: "After *want* and *would like*, use *to* + verb: *I want to be* — never *I want be*."
      },
      {
        title: "Questions about the future",
        head: ["Question", "Answer"],
        rows: [
          ["*What do you want to be?*", "I want to be a pilot."],
          ["*What would you like to do?*", "I'd like to travel."],
          ["*Why?*", "*Because* I love planes."],
          ["*Would you like to* live abroad?", "*Yes, I'd love to.* / *No, I wouldn't.*"]
        ]
      },
      {
        title: "Talking about skills for a job",
        head: ["Structure", "Example"],
        rows: [
          ["*You need to* + verb", "To be a pilot, *you need to* study a lot."],
          ["*You have to be* + adjective", "A vet *has to be* patient."],
          ["*I'm good at* + noun / -ing", "*I'm good at* drawing."]
        ]
      }
    ],
    watchOut: [
      ["I want be a doctor.", "I want to be a doctor."],
      ["I would like travel.", "I would like to travel."],
      ["She want to be a chef.", "She wants to be a chef."],
      ["Would you like to travel? – Yes, I would like.", "Yes, I'd love to. / Yes, I would."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one or two words.",
      items: [
        "I want [[to]] be an engineer.",
        "My brother [[wants]] to study in Canada.",
        "I'd like [[to]] live near the sea.",
        "[[Would]] you like to visit Japan?",
        "I don't want [[to]] work on weekends."
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a school radio program, two students talk about their dream jobs. Listen.",
      title: "Dream jobs",
      script: [
        { who: "Host", line: "Today's question: what do you want to be? Kevin?" },
        { who: "Kevin", line: "I want to be a programmer. I'd like to make video games. I'm good at math and I love computers." },
        { who: "Host", line: "Would you like to work in Mexico?" },
        { who: "Kevin", line: "Yes, I would. I'd like to start my own business here, with my friends." },
        { who: "Host", line: "Great! Fernanda?" },
        { who: "Fernanda", line: "I'd like to be a photographer for a nature magazine. I want to travel to the Amazon and to Africa." },
        { who: "Host", line: "Wow! Why?" },
        { who: "Fernanda", line: "Because I love animals and nature. I don't want to work in an office. I want to be outside!" }
      ],
      activities: [
        {
          type: "sort", title: "Kevin or Fernanda?",
          prompt: "Sort the information.",
          bins: ["Kevin", "Fernanda"],
          items: [
            { text: "a programmer", bin: 0 }, { text: "make video games", bin: 0 }, { text: "good at math", bin: 0 }, { text: "start a business in Mexico", bin: 0 },
            { text: "a photographer", bin: 1 }, { text: "travel to Africa", bin: 1 }, { text: "doesn't want an office job", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Kevin wants to work in another country.", a: false },
            { s: "Kevin would like to work with his friends.", a: true },
            { s: "Fernanda wants to work for a nature magazine.", a: true },
            { s: "Fernanda wants to work in an office.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three letters for a \"Letter to my future self\" project.",
      title: "Dear future me…",
      text: [
        { author: "Andrés, 15", body: "Dear future me, I hope you're a chef now! I want to have my own restaurant with Mexican and Japanese food. I'd like to cook for famous people. Please don't forget Grandma's mole recipe!" },
        { author: "Paulina, 17", body: "Dear future me, I want to be a doctor and help people in small towns. I'd like to work in the Sierra Norte of Puebla, because there aren't many doctors there. I don't want to be rich — I want to be useful." },
        { author: "Joel, 16", body: "Dear future me, I don't know what I want to be! But I know what I want to do: I want to learn three languages, travel by train around Europe and have a big dog. I'd like to be happy." }
      ],
      activities: [
        {
          type: "match", title: "Who wants it?",
          prompt: "Match the person with the dream.",
          pairs: [
            ["Andrés", "his own restaurant"],
            ["Paulina", "to help people in small towns"],
            ["Joel", "to learn three languages"]
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers.",
          items: [
            { q: "What does Andrés want to be?", a: ["A chef.", "a chef", "He wants to be a chef."] },
            { q: "Where would Paulina like to work?", a: ["In the Sierra Norte of Puebla.", "In the Sierra Norte.", "the Sierra Norte of Puebla", "She'd like to work in the Sierra Norte of Puebla."] },
            { q: "Does Paulina want to be rich?", a: ["No, she doesn't.", "No, she does not."] },
            { q: "What pet does Joel want?", a: ["A big dog.", "a dog", "A dog.", "He wants a big dog."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *want to / would like to*, then write a letter to your future self.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What do you want to be?" },
            { a: "I'd like to work with children." },
            { a: "She wants to study in Canada." },
            { a: "Would you like to live abroad?" },
            { a: "I don't want to work in an office." }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "I want be a pilot.", a: ["I want to be a pilot."] },
            { q: "He want to travel.", a: ["He wants to travel."] },
            { q: "I'd like visit Paris.", a: ["I'd like to visit Paris.", "I would like to visit Paris."] },
            { q: "Do you would like to come?", a: ["Would you like to come?"] }
          ]
        },
        {
          type: "write", title: "Letter to my future self",
          prompt: "Write a letter to yourself in ten years. Say what you want to be, where you would like to live, what you want to do and one thing you don't want to do. Give reasons with *because*.",
          minWords: 45, maxWords: 90,
          model: "Dear future me, I hope you're happy! I want to be a graphic designer because I love drawing and computers. I'd like to live in Mexico City, in a small apartment with a cat. I want to travel to Peru and Argentina, and I'd like to speak English very well. I don't want to forget my friends from school. See you in ten years! Love, me",
          bank: ["Dear future me,", "I want to be…", "because…", "I'd like to live…", "I want to travel to…", "I don't want to…", "See you in ten years!"],
          checklist: [
            "I used *want to* and *would like to*.",
            "I wrote one negative: *don't want to*.",
            "I gave two reasons with *because*.",
            "I used *to* + verb after *want / would like*."
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
            "What do you want to be?",
            "I want to be a vet.",
            "I'd like to work with animals.",
            "Would you like to live abroad?",
            "She wants to study music.",
            "I don't want to work in an office."
          ]
        },
        {
          type: "speak", title: "My dreams",
          prompt: "Record yourself talking about three dreams for your future: a job, a place and an experience. Explain why.",
          language: ["I want to be…", "I'd like to live in…", "I'd love to…", "because…", "I don't want to…"],
          seconds: 60,
          checklist: ["talk about three dreams?", "use *to* + verb?", "give reasons?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *want to* and *would like to* + verb.", review: "Explanation: want to / would like to; Quick check" },
    { can: "I can ask *What do you want to be?*", review: "Explanation: questions about the future" },
    { can: "I can answer *Would you like to…?*", review: "Presentation dialogue" },
    { can: "I can give reasons with *because*.", review: "Listening; Speaking activity 1 (listen and repeat)" },
    { can: "I can talk about jobs and skills.", review: "Explanation: skills for a job" },
    { can: "I can write about my dreams for the future.", review: "Writing activity 3" }
  ]
};
