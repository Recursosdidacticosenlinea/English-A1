window.UNIT = {
  slug: "what-do-you-like-doing",
  number: 21,
  title: "What Do You Like Doing?",
  level: "A1",
  minutes: 50,
  speakers: { "Fer": "f", "Jorge": "m", "Host": "f", "Ricardo": "m", "Lety": "f", "Martín": "m", A: "f", B: "m" },
  focus: ["love / like / don't mind / don't like / hate", "verb + -ing: I like reading", "Do you like…? Does she like…?", "free-time activities", "me too / me neither"],

  presentation: {
    scene: "🎮📚🎧🏃",
    situation: "Fer and Jorge are new roommates in an apartment near BUAP. They're talking about what they like doing in their free time.",
    warmup: {
      prompt: "What do you like doing in your free time? Choose everything that is true.",
      options: ["watching series", "playing video games", "reading", "listening to music", "going out with friends", "doing sports", "sleeping", "cooking", "drawing", "going to the movies", "chatting online", "dancing"],
      response: "Great! In this unit you'll learn to talk about your likes and dislikes."
    },
    dialogueTitle: "New roommates",
    dialogue: [
      { who: "Fer", line: "So, Jorge, *what do you like doing* on weekends?" },
      { who: "Jorge", line: "*I love playing* video games. And *I like cooking*. I make great chilaquiles!" },
      { who: "Fer", line: "Great! *I hate cooking*, but *I love eating*!" },
      { who: "Jorge", line: "Ha ha! And you? *Do you like* video games?" },
      { who: "Fer", line: "*Not really*. *I prefer reading* or *going* to the gym. *Do you like doing* exercise?" },
      { who: "Jorge", line: "*I don't mind running*, but *I don't like going* to the gym." },
      { who: "Fer", line: "OK. What about cleaning?" },
      { who: "Jorge", line: "*I hate cleaning*!" },
      { who: "Fer", line: "*Me too*! Hmm… this is a problem." }
    ]
  },

  objectives: [
    "I can name common free-time activities.",
    "I can say how much I like something: *love, like, don't mind, don't like, hate*.",
    "I can use the *-ing* form after *like, love* and *hate*.",
    "I can ask about likes and agree or disagree with *me too* and *me neither*."
  ],

  explanation: {
    vocabTitle: "Free-time activities",
    vocab: [
      { word: "reading", icon: "📚" }, { word: "watching series", icon: "📺" }, { word: "playing video games", icon: "🎮" },
      { word: "listening to music", icon: "🎧" }, { word: "going out", icon: "🌃" }, { word: "running", icon: "🏃" },
      { word: "swimming", icon: "🏊" }, { word: "cooking", icon: "🍳" }, { word: "drawing", icon: "✏️" },
      { word: "dancing", icon: "💃" }, { word: "shopping", icon: "🛍️" }, { word: "chatting online", icon: "💬" },
      { word: "camping", icon: "⛺" }, { word: "taking photos", icon: "📷" }, { word: "cleaning", icon: "🧹" }
    ],
    grammar: [
      {
        title: "How much do you like it?",
        head: ["", "Expression", "Example"],
        rows: [
          ["😍", "*love*", "I *love* dancing."],
          ["🙂", "*like* / *enjoy*", "I *like* reading. She *enjoys* swimming."],
          ["😐", "*don't mind*", "I *don't mind* cooking."],
          ["🙁", "*don't like*", "I *don't like* running."],
          ["😡", "*hate* / *can't stand*", "I *hate* cleaning."]
        ],
        note: "After these verbs, use the **-ing** form: *I love playing* (not *I love play*). With a noun, no -ing: *I love music.*"
      },
      {
        title: "Questions and he / she",
        head: ["Form", "Example"],
        rows: [
          ["question", "*Do* you *like* swimming? – Yes, I *do*. / No, I *don't*."],
          ["he / she", "She *likes* drawing. He *doesn't like* shopping."],
          ["he / she question", "*Does* he *like* camping? – Yes, he *does*."],
          ["Wh- question", "*What do* you *like doing* on weekends?"]
        ]
      },
      {
        title: "Agreeing",
        head: ["Your friend says…", "You agree", "You disagree"],
        rows: [
          ["I *like* dancing. (+)", "*Me too!*", "*Really? I don't.*"],
          ["I *don't like* running. (–)", "*Me neither.*", "*Really? I do!*"]
        ],
        note: "Use *Me too* with positive sentences and *Me neither* with negative sentences."
      }
    ],
    watchOut: [
      ["I like play soccer.", "I like playing soccer."],
      ["She like reading.", "She likes reading."],
      ["Do you like swim?", "Do you like swimming?"],
      ["I don't like it. – Me too.", "I don't like it. – Me neither."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verb in parentheses.",
      items: [
        "I love [[dancing]] at parties. (dance)",
        "My brother hates [[running]]. (run)",
        "Ana [[likes]] taking photos. (like)",
        "[[Does]] your dad like cooking? (do)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio program about hobbies. Three people talk about their free time.",
      title: "Weekend lives",
      script: [
        { who: "Host", line: "Good morning, Puebla! Today we're talking about hobbies. Ricardo, what do you like doing?" },
        { who: "Ricardo", line: "I love cycling. Every Sunday I ride my bike to Cholula with my friends. I don't like riding in the city because of the traffic." },
        { who: "Host", line: "And do you like other sports?" },
        { who: "Ricardo", line: "I don't mind swimming, but I hate running. It's boring!" },
        { who: "Host", line: "Thank you, Ricardo. Lety, what about you?" },
        { who: "Lety", line: "I really like taking photos. I take photos of old buildings in the city center. I also love reading, especially mystery novels." },
        { who: "Host", line: "Do you like going out at night?" },
        { who: "Lety", line: "Not really. I prefer staying at home with a good book and a cup of coffee." },
        { who: "Host", line: "And finally, Martín." },
        { who: "Martín", line: "I'm a big gamer. I love playing video games online with my friends. But I also like cooking. My mom is teaching me to make mole poblano!" }
      ],
      activities: [
        {
          type: "sort", title: "Likes and dislikes",
          prompt: "Listen. Put each activity in the right box.",
          bins: ["Ricardo loves / doesn't mind…", "Ricardo doesn't like / hates…", "Lety likes / loves…", "Martín likes / loves…"],
          items: [
            { text: "cycling", bin: 0 }, { text: "swimming", bin: 0 },
            { text: "riding in the city", bin: 1 }, { text: "running", bin: 1 },
            { text: "taking photos", bin: 2 }, { text: "reading mystery novels", bin: 2 },
            { text: "playing video games", bin: 3 }, { text: "cooking", bin: 3 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete with one word.",
          items: [
            "Ricardo rides his bike to [[Cholula]] every Sunday.",
            "He thinks running is [[boring]].",
            "Lety takes photos of old [[buildings]].",
            "She prefers staying at [[home]] at night.",
            "Martín's mom is teaching him to make [[mole]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read the profiles on a website to find people with the same hobbies.",
      title: "HobbyMatch · Find your people",
      text: [
        { author: "Nadia, 18", body: "I love dancing! I go to salsa classes on Tuesdays and Thursdays. I also like watching K-dramas. I don't like doing homework on weekends, and I hate getting up early. I'm looking for a dance partner!" },
        { author: "Toño, 20", body: "I enjoy hiking and camping. I often go to the volcanoes near Puebla with my friends. I don't mind getting up early for that! I don't like shopping malls. I'm looking for people to go hiking with." },
        { author: "Celia, 17", body: "I really like drawing and painting. I draw comics in my free time. I also love listening to music while I draw. I don't like sports very much, but I don't mind walking. I'm looking for other artists." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the profiles. Are these sentences true or false?",
          items: [
            { s: "Nadia goes to salsa classes twice a week.", a: true },
            { s: "Nadia loves getting up early.", a: false },
            { s: "Toño likes going to shopping malls.", a: false },
            { s: "Toño doesn't mind getting up early to go hiking.", a: true },
            { s: "Celia listens to music when she draws.", a: true },
            { s: "Celia loves doing sports.", a: false }
          ]
        },
        {
          type: "match", title: "Who's the best match?",
          prompt: "Match each new user with the best person to meet.",
          pairs: [
            ["Pablo loves salsa and bachata.", "Nadia"],
            ["Iris wants to climb Iztaccíhuatl.", "Toño"],
            ["Luis makes comics and sells stickers.", "Celia"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the forms, then write your own profile.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I love listening to music." },
            { a: "What do you like doing on weekends?" },
            { a: "She doesn't like getting up early." },
            { a: "Does your brother like playing soccer?" },
            { a: "I don't mind cooking." }
          ]
        },
        {
          type: "rewrite", title: "Write about Martín",
          prompt: "Rewrite the sentences with *he*.",
          items: [
            { q: "I love playing video games.", a: ["He loves playing video games."] },
            { q: "I like cooking.", a: ["He likes cooking."] },
            { q: "I don't like running.", a: ["He doesn't like running.", "He does not like running."] },
            { q: "Do you enjoy reading?", a: ["Does he enjoy reading?"] },
            { q: "I hate cleaning.", a: ["He hates cleaning."] }
          ]
        },
        {
          type: "write", title: "My HobbyMatch profile",
          prompt: "Write a profile for HobbyMatch. Say what you love, like, don't mind, don't like and hate doing. Say what kind of people you're looking for.",
          minWords: 50, maxWords: 80,
          model: "Hi! I'm Santi and I'm 19. I love playing basketball and I really like watching NBA games with my friends. I also enjoy cooking, especially pasta. I don't mind cleaning the kitchen after. I don't like reading very much, and I hate waiting in traffic! I'm looking for people to play basketball on Saturdays.",
          bank: ["I love", "I really like", "I enjoy", "I don't mind", "I don't like", "I hate", "I'm looking for people to"],
          checklist: [
            "I used at least **four** different expressions (love, like, don't mind…).",
            "I used the **-ing** form after them.",
            "I said what kind of people I'm looking for.",
            "I checked the spelling: *running, swimming, dancing*."
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
            "What do you like doing?",
            "I love playing video games.",
            "I don't like doing homework.",
            "My sister hates cooking.",
            "Do you like dancing?",
            "I like reading. Me too!"
          ]
        },
        {
          type: "speak", title: "My perfect weekend",
          prompt: "Record yourself for about one minute. Describe your perfect weekend: what you love doing, and what you don't like doing on weekends.",
          language: ["On my perfect weekend…", "I love…ing", "I really enjoy…", "I don't mind…", "I hate…", "because it's…"],
          seconds: 75,
          checklist: ["use at least four expressions of likes and dislikes?", "use the *-ing* form?", "give reasons?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 12 free-time activities.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *love, like, don't mind, don't like, hate*.", review: "Explanation: how much do you like it?" },
    { can: "I can use the *-ing* form after these verbs.", review: "Explanation: how much do you like it?; Writing activity 1" },
    { can: "I can use *likes / doesn't like* with *he* and *she*.", review: "Explanation: questions and he / she; Writing activity 2" },
    { can: "I can agree with *me too* and *me neither*.", review: "Explanation: agreeing; Speaking activity 1 (listen and repeat)" },
    { can: "I can describe my likes and dislikes in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
