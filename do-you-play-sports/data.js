window.UNIT = {
  slug: "do-you-play-sports",
  number: 22,
  title: "Do You Play Sports?",
  level: "A1",
  minutes: 50,
  speakers: { "Coach": "m", "Andrea": "f", "Mariana": "f", "Leo": "m", A: "m", B: "f" },
  focus: ["sports vocabulary", "play / go / do + sport", "Do you…? Yes, I do. / No, I don't.", "Where / When do you…?", "I'm good at…"],

  presentation: {
    scene: "⚽🏊‍♀️🥋🏀",
    situation: "It's sign-up week at the university sports center. Andrea talks to the coach about the activities.",
    warmup: {
      prompt: "Which sports do you know in English? Choose all.",
      options: ["soccer", "basketball", "volleyball", "tennis", "swimming", "running", "cycling", "karate", "yoga", "baseball"],
      response: "Great! In this unit you'll learn to talk about the sports you do."
    },
    dialogueTitle: "At the sports center",
    dialogue: [
      { who: "Coach", line: "Hi! *Do you play* any sports?" },
      { who: "Andrea", line: "*Yes, I do*. *I play* volleyball with my friends on weekends." },
      { who: "Coach", line: "Great! We've got a volleyball team. *Do you go* swimming?" },
      { who: "Andrea", line: "*No, I don't*. I can't swim very well." },
      { who: "Coach", line: "No problem. We have swimming classes for beginners. What about yoga? *Do you do* yoga?" },
      { who: "Andrea", line: "Sometimes, at home. *When are* the yoga classes?" },
      { who: "Coach", line: "On Tuesdays and Thursdays at six. *Where do you live*? Is it near?" },
      { who: "Andrea", line: "Yes, *I live* five minutes from here. OK — volleyball and yoga, please!" }
    ]
  },

  objectives: [
    "I can name popular sports.",
    "I can use *play, go* and *do* with sports.",
    "I can ask and answer *Do you…?* questions.",
    "I can ask *Where / When / How often do you…?*"
  ],

  explanation: {
    vocabTitle: "Sports",
    vocab: [
      { word: "soccer", icon: "⚽" }, { word: "basketball", icon: "🏀" }, { word: "volleyball", icon: "🏐" },
      { word: "tennis", icon: "🎾" }, { word: "baseball", icon: "⚾" }, { word: "swimming", icon: "🏊" },
      { word: "running", icon: "🏃" }, { word: "cycling", icon: "🚴" }, { word: "skateboarding", icon: "🛹" },
      { word: "karate", icon: "🥋" }, { word: "yoga", icon: "🧘" }, { word: "gymnastics", icon: "🤸" },
      { word: "team", icon: "👥" }, { word: "ball", icon: "🔴" }, { word: "gym", icon: "🏋️" }
    ],
    grammar: [
      {
        title: "Play, go or do?",
        head: ["Verb", "Use", "Examples"],
        rows: [
          ["*play*", "sports with a ball, in teams or against a person", "*play* soccer, tennis, basketball"],
          ["*go*", "activities with *-ing*", "*go* swimming, running, cycling"],
          ["*do*", "martial arts and individual activities", "*do* karate, yoga, gymnastics, exercise"]
        ]
      },
      {
        title: "Present simple questions: I / you / we / they",
        head: ["Question", "Short answer"],
        rows: [
          ["*Do you play* soccer?", "Yes, I *do*. / No, I *don't*."],
          ["*Do they go* running?", "Yes, they *do*. / No, they *don't*."],
          ["*Where do you play*?", "In the park."],
          ["*When do you go* swimming?", "On Saturdays."],
          ["*How often do you do* yoga?", "Twice a week."]
        ],
        note: "Word order: *(Wh-word) + do + subject + verb*. *Where do you play?* — never *Where you play?*"
      },
      {
        title: "Talking about ability and preference",
        head: ["Structure", "Example"],
        rows: [
          ["*I'm good at* + sport", "*I'm good at* basketball."],
          ["*I'm not very good at…*", "*I'm not very good at* tennis."],
          ["*My favorite sport is…*", "*My favorite sport is* soccer."],
          ["*I'm a fan of…*", "*I'm a fan of* the Puebla soccer team."]
        ]
      }
    ],
    watchOut: [
      ["I do swimming.", "I go swimming."],
      ["I play karate.", "I do karate."],
      ["You play tennis?", "Do you play tennis?"],
      ["Do you play soccer? – Yes, I play.", "Yes, I do."]
    ],
    check: {
      type: "sort", title: "Quick check",
      prompt: "Put each sport with the right verb.",
      bins: ["play", "go", "do"],
      items: [
        { text: "soccer", bin: 0 }, { text: "tennis", bin: 0 }, { text: "volleyball", bin: 0 },
        { text: "swimming", bin: 1 }, { text: "running", bin: 1 }, { text: "cycling", bin: 1 },
        { text: "karate", bin: 2 }, { text: "yoga", bin: 2 }, { text: "gymnastics", bin: 2 }
      ]
    }
  },

  skills: {
    listening: {
      intro: "Mariana interviews Leo for the university newspaper. Leo is on the basketball team. Listen.",
      title: "Interview with an athlete",
      script: [
        { who: "Mariana", line: "Leo, thanks for the interview. Do you play basketball every day?" },
        { who: "Leo", line: "Yes, I do. We practice from five to seven every afternoon." },
        { who: "Mariana", line: "Wow. Where do you practice?" },
        { who: "Leo", line: "In the university gym. On Saturdays we play games in other cities." },
        { who: "Mariana", line: "Do you do other sports?" },
        { who: "Leo", line: "Yes. I go running in the morning, three times a week. And I do yoga on Sundays. It's good for my back." },
        { who: "Mariana", line: "Do your parents play basketball?" },
        { who: "Leo", line: "No, they don't. But they come to all my games!" }
      ],
      activities: [
        {
          type: "match", title: "When does Leo do it?",
          prompt: "Match the activity with the time.",
          pairs: [
            ["basketball practice", "every afternoon, from five to seven"],
            ["basketball games", "on Saturdays"],
            ["running", "in the morning, three times a week"],
            ["yoga", "on Sundays"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Leo practices in a park.", a: false },
            { s: "The team plays games in other cities.", a: true },
            { s: "Yoga is good for Leo's back.", a: true },
            { s: "Leo's parents play basketball.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the posts on a sports app where people look for partners.",
      title: "SportBuddy",
      text: [
        { author: "Iris, 22", body: "I go cycling every Sunday morning on the Atlixco road. Do you have a bike? Come with me! I'm not very fast, so beginners are welcome." },
        { author: "Joel, 30", body: "Do you play tennis? I need a partner for Tuesday and Thursday evenings. I play at the sports club near the stadium. I'm quite good at tennis." },
        { author: "Brenda, 19", body: "I do karate at a school downtown. The classes are on Mondays, Wednesdays and Fridays at seven. We want new students, especially women!" }
      ],
      activities: [
        {
          type: "sort", title: "Whose post?",
          prompt: "Sort the information.",
          bins: ["Iris", "Joel", "Brenda"],
          items: [
            { text: "Sunday mornings", bin: 0 }, { text: "needs a bike", bin: 0 }, { text: "beginners welcome", bin: 0 },
            { text: "Tuesday and Thursday evenings", bin: 1 }, { text: "near the stadium", bin: 1 }, { text: "quite good", bin: 1 },
            { text: "three days a week", bin: 2 }, { text: "downtown", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write a question for each answer. Use *you*.",
          items: [
            { q: "Yes, I do. I play tennis. (Do…?)", a: ["Do you play tennis?"] },
            { q: "On Sunday mornings. (When…go cycling?)", a: ["When do you go cycling?"] },
            { q: "At a school downtown. (Where…do karate?)", a: ["Where do you do karate?"] },
            { q: "Three times a week. (How often…?)", a: ["How often do you do karate?", "How often do you go?", "How often do you practice?", "How often do you do it?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice questions, then write a SportBuddy post.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Do you play basketball?" },
            { a: "Where do you go swimming?" },
            { a: "I do yoga on Sundays." },
            { a: "We don't play baseball." },
            { a: "I'm not very good at tennis." }
          ]
        },
        {
          type: "gap", title: "Play, go or do?",
          prompt: "Complete with the correct verb.",
          items: [
            "My brothers [[play]] soccer in the park.",
            "I [[go]] running every morning.",
            "Do you [[do]] karate?",
            "We [[go]] cycling on weekends.",
            "They [[play]] volleyball on the beach."
          ]
        },
        {
          type: "write", title: "My SportBuddy post",
          prompt: "Write a post to find a sports partner. Say what sport you do, where and when, how good you are, and ask one question.",
          minWords: 35, maxWords: 70,
          model: "Hi! I'm Kevin. I play soccer, but my favorite activity is running. I go running in the Ecological Park three times a week, at six in the morning. I'm not very fast, but I'm quite good at long distances. Do you want to run with me? Send me a message!",
          bank: ["I play / go / do…", "I go … in the park.", "… times a week", "on Saturdays", "I'm good at…", "Do you want to…?", "Send me a message!"],
          checklist: [
            "I used *play, go* or *do* correctly.",
            "I said **where** and **when**.",
            "I asked a question with *Do you…?*",
            "I used *I'm good at…* or *I'm not very good at…*"
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
            "Do you play any sports?",
            "Yes, I play soccer on weekends.",
            "I go swimming twice a week.",
            "She does yoga on Tuesdays.",
            "Where do you play basketball?",
            "I'm not very good at tennis."
          ]
        },
        {
          type: "speak", title: "Sports in my life",
          prompt: "Record yourself talking about sports in your life: what you do (or don't do), where, when, and a sport you watch on TV.",
          language: ["I play / go / do…", "I don't play…", "I'm good at…", "My favorite sport is…", "I watch … on TV."],
          seconds: 60,
          checklist: ["talk about at least two sports?", "use *play / go / do*?", "say when and where?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name popular sports.", review: "Explanation: vocabulary" },
    { can: "I can use *play, go* and *do* with sports.", review: "Explanation: play, go or do?; Quick check" },
    { can: "I can ask *Do you…?* and give short answers.", review: "Explanation: present simple questions" },
    { can: "I can ask *Where / When / How often do you…?*", review: "Reading activity 2; Speaking activity 1 (listen and repeat)" },
    { can: "I can say what sports I'm good at.", review: "Explanation: ability and preference" },
    { can: "I can write a post about the sports I do.", review: "Writing activity 3" }
  ]
};
