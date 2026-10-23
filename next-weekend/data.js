window.UNIT = {
  slug: "next-weekend",
  number: 49,
  title: "Next Weekend",
  level: "A1",
  minutes: 50,
  speakers: { "Mia": "f", "Gabriel": "m", "Host": "f", "Pedro": "m", "Tania": "f", A: "f", B: "m" },
  focus: ["be going to for plans", "I'm going to visit… / I'm not going to…", "What are you going to do?", "tomorrow, next week, this weekend", "Are you going to…? Yes, I am."],

  presentation: {
    scene: "🗓️🎒⛺🎶",
    situation: "It's Friday. Mia and Gabriel talk about their plans for the long weekend.",
    warmup: {
      prompt: "What are you going to do this weekend? Choose all.",
      options: ["sleep a lot", "see my friends", "visit my family", "study", "go shopping", "watch movies", "play sports", "work", "travel", "clean my house"],
      response: "Sounds like a plan! In this unit you'll learn to talk about future plans with *going to*."
    },
    dialogueTitle: "Plans for the long weekend",
    dialogue: [
      { who: "Gabriel", line: "Finally, it's Friday! *What are you going to do* this weekend?" },
      { who: "Mia", line: "*I'm going to go* camping in Zacatlán with my cousins." },
      { who: "Gabriel", line: "Camping! *Are you going to sleep* in a tent?" },
      { who: "Mia", line: "*Yes, I am*. *We're going to make* a fire and cook outside. What about you?" },
      { who: "Gabriel", line: "*I'm not going to travel*. *I'm going to stay* at home and study for my exam." },
      { who: "Mia", line: "Oh no! The whole weekend?" },
      { who: "Gabriel", line: "No, no. On Sunday *my friends and I are going to watch* the game at Omar's house." },
      { who: "Mia", line: "Nice! *It's going to be* a great weekend for both of us." }
    ]
  },

  objectives: [
    "I can talk about plans with *be going to*.",
    "I can make negatives: *I'm not going to…*",
    "I can ask *What are you going to do? Are you going to…?*",
    "I can use future time expressions: *tomorrow, next…, this…*"
  ],

  explanation: {
    vocabTitle: "Plans and future time",
    vocab: [
      { word: "tomorrow", icon: "🌅" }, { word: "tonight", icon: "🌃" }, { word: "this weekend", icon: "🗓️" },
      { word: "next week", icon: "➡️" }, { word: "next year", icon: "📅" }, { word: "go camping", icon: "⛺" },
      { word: "have a party", icon: "🎉" }, { word: "take a course", icon: "📖" }, { word: "visit relatives", icon: "👪" },
      { word: "go on vacation", icon: "🏝️" }, { word: "save money", icon: "🐷" }, { word: "learn to drive", icon: "🚗" },
      { word: "stay at home", icon: "🏠" }, { word: "plan", icon: "📝" }, { word: "relax", icon: "😌" }
    ],
    grammar: [
      {
        title: "Be going to",
        head: ["", "Example"],
        rows: [
          ["affirmative", "I*'m going to* visit my family. She*'s going to* study."],
          ["negative", "We *aren't going to* travel. He *isn't going to* work."],
          ["question", "*Are* you *going to* go camping?"],
          ["short answers", "Yes, I *am*. / No, I*'m not*."],
          ["Wh- question", "*What are* you *going to do*? *Where is* she *going to go*?"]
        ],
        note: "Form: *am / is / are + going to + base verb*. We use it for plans and decisions we already made."
      },
      {
        title: "Future time expressions",
        head: ["Expression", "Example"],
        rows: [
          ["*tomorrow* (morning / night)", "I'm going to call you *tomorrow*."],
          ["*tonight*", "We're going to watch a movie *tonight*."],
          ["*this* weekend / Friday", "*This weekend* I'm going to relax."],
          ["*next* week / month / year", "*Next year* she's going to study in Canada."],
          ["*in* + time", "*In two weeks* we're going to have a test."]
        ],
        note: "Say *next week* — not *the next week*. Say *this weekend* — not *in this weekend*."
      }
    ],
    watchOut: [
      ["I going to visit my aunt.", "I'm going to visit my aunt."],
      ["She's going to studies.", "She's going to study."],
      ["What you are going to do?", "What are you going to do?"],
      ["I'm going to go to the beach the next week.", "I'm going to go to the beach next week."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *am, is, are* or *going*.",
      items: [
        "I [['m|am]] going to visit my grandparents.",
        "Mia [['s|is]] going to sleep in a tent.",
        "We [[aren't|are not]] going to travel. (not)",
        "[[Are]] you going to study this weekend?",
        "My friends are [[going]] to watch the game."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio host asks people in the street about their plans for next year. Listen.",
      title: "Plans for next year",
      script: [
        { who: "Host", line: "Hello! What are your plans for next year?" },
        { who: "Pedro", line: "I'm going to learn to drive. And I'm going to save money for a car." },
        { who: "Host", line: "Are you going to buy a new car?" },
        { who: "Pedro", line: "No, I'm not. It's very expensive. I'm going to buy an old one!" },
        { who: "Host", line: "Ha ha. Good idea. And you?" },
        { who: "Tania", line: "Next year is very important for me. I'm going to finish university in June, and then I'm going to take an English course in Canada." },
        { who: "Host", line: "Wow! How long are you going to stay there?" },
        { who: "Tania", line: "Three months. After that, I'm going to look for a job in Mexico." }
      ],
      activities: [
        {
          type: "sort", title: "Pedro or Tania?",
          prompt: "Whose plans are they?",
          bins: ["Pedro", "Tania"],
          items: [
            { text: "learn to drive", bin: 0 }, { text: "save money", bin: 0 }, { text: "buy an old car", bin: 0 },
            { text: "finish university", bin: 1 }, { text: "take a course in Canada", bin: 1 }, { text: "look for a job", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Pedro is going to buy a new car.", a: false },
            { s: "Tania is going to finish university in June.", a: true },
            { s: "Tania is going to stay in Canada for a year.", a: false },
            { s: "Tania is going to look for a job in Canada.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the class newsletter: students share their plans for the vacation.",
      title: "Vacation plans",
      text: [
        { author: "Diego", body: "I'm going to work in my uncle's restaurant in Puerto Escondido. I'm going to save money and learn to surf on my free days!" },
        { author: "Camila", body: "I'm not going to travel this year. I'm going to stay in Puebla, read a lot of books and take a painting course. I'm also going to visit my grandparents every Sunday." },
        { author: "Joel and Brisa", body: "We're going to volunteer in a turtle camp in Michoacán. We're going to protect the turtle eggs on the beach. We're going to sleep in a small cabin — no Wi-Fi!" }
      ],
      activities: [
        {
          type: "match", title: "Who's going to do it?",
          prompt: "Match the plan with the person.",
          pairs: [
            ["learn to surf", "Diego"],
            ["take a painting course", "Camila"],
            ["protect turtle eggs", "Joel and Brisa"]
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, he is / No, she isn't / Yes, they are…*",
          items: [
            { q: "Is Diego going to work in a hotel?", a: ["No, he isn't.", "No, he is not.", "No, he's not."] },
            { q: "Is Camila going to travel?", a: ["No, she isn't.", "No, she is not.", "No, she's not."] },
            { q: "Are Joel and Brisa going to volunteer?", a: ["Yes, they are."] },
            { q: "Are they going to have Wi-Fi?", a: ["No, they aren't.", "No, they are not.", "No, they're not."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *going to*, then write your plans.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What are you going to do tomorrow?" },
            { a: "I'm going to visit my cousins." },
            { a: "She isn't going to work this weekend." },
            { a: "Are they going to have a party?" },
            { a: "Next year I'm going to learn French." }
          ]
        },
        {
          type: "rewrite", title: "Make a plan",
          prompt: "Write a sentence with *going to*.",
          items: [
            { q: "I / visit my aunt / tomorrow", a: ["I'm going to visit my aunt tomorrow.", "I am going to visit my aunt tomorrow.", "Tomorrow I'm going to visit my aunt."] },
            { q: "we / not / study / tonight", a: ["We aren't going to study tonight.", "We're not going to study tonight.", "We are not going to study tonight."] },
            { q: "my sister / buy a car / next year", a: ["My sister is going to buy a car next year.", "My sister's going to buy a car next year.", "Next year my sister is going to buy a car."] },
            { q: "you / go camping / this weekend?", a: ["Are you going to go camping this weekend?", "Are you going camping this weekend?"] }
          ]
        },
        {
          type: "write", title: "My plans",
          prompt: "Write about your plans: for this weekend, for your next vacation and for next year. Use *going to* at least six times, one negative and future time expressions.",
          minWords: 50, maxWords: 100,
          model: "This weekend I'm going to relax. On Saturday I'm going to sleep late and then I'm going to play soccer with my friends. On Sunday I'm going to have lunch with my family. In my next vacation, I'm going to visit Chiapas with my sister. We're going to see the waterfalls! Next year I'm going to start university. I'm not going to stop studying English!",
          bank: ["This weekend I'm going to…", "On Saturday…", "In my next vacation…", "We're going to…", "Next year…", "I'm not going to…"],
          checklist: [
            "I used *going to* at least **six** times.",
            "I used *am / is / are* before *going to*.",
            "I wrote one negative.",
            "I used *this, next, tomorrow* or *tonight*."
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
            "What are you going to do this weekend?",
            "I'm going to visit my grandparents.",
            "We're going to go camping.",
            "She isn't going to work tomorrow.",
            "Are you going to study tonight?",
            "Next year I'm going to learn French."
          ]
        },
        {
          type: "speak", title: "My future plans",
          prompt: "Record yourself talking about your plans for tomorrow, next month and next year.",
          language: ["Tomorrow I'm going to…", "Next month…", "Next year…", "I'm not going to…", "I'm very excited because…"],
          seconds: 60,
          checklist: ["talk about three times in the future?", "use *going to* correctly?", "use a negative?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about plans with *going to*.", review: "Explanation: be going to; Quick check" },
    { can: "I can make negatives with *not going to*.", review: "Writing activity 2" },
    { can: "I can ask *What are you going to do?*", review: "Explanation: Wh- questions; Presentation" },
    { can: "I can ask *Are you going to…?* and answer.", review: "Reading activity 2; Speaking activity 1 (listen and repeat)" },
    { can: "I can use *tomorrow, tonight, this…, next…*", review: "Explanation: future time expressions" },
    { can: "I can write about my plans.", review: "Writing activity 3" }
  ]
};
