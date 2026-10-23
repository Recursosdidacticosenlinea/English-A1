window.UNIT = {
  slug: "what-are-you-wearing",
  number: 32,
  title: "What Are You Wearing?",
  level: "A1",
  minutes: 50,
  speakers: { "Andrea": "f", "Iker": "m", "Reporter": "f", "Joel": "m", A: "f", B: "m" },
  focus: ["clothes and accessories", "present continuous: I'm wearing…", "What's he wearing?", "colors and patterns: striped, plain", "a pair of jeans / shoes"],

  presentation: {
    scene: "👕👖👟🧢",
    situation: "Andrea and Iker are on a video call. They're going to a friend's party tonight and they talk about their clothes.",
    warmup: {
      prompt: "What are you wearing now? Choose all.",
      options: ["a T-shirt", "a shirt", "jeans", "pants", "a skirt", "a dress", "sneakers", "shoes", "a sweater", "a jacket"],
      response: "Cool! In this unit you'll learn to describe clothes and what people are wearing."
    },
    dialogueTitle: "Party clothes",
    dialogue: [
      { who: "Iker", line: "Hey, Andrea! Are you ready for the party? *What are you wearing*?" },
      { who: "Andrea", line: "*I'm wearing* a black dress and my red sneakers. What about you?" },
      { who: "Iker", line: "*I'm wearing* jeans and a white shirt. Is that OK?" },
      { who: "Andrea", line: "Yes, but *are you wearing* those old shoes?" },
      { who: "Iker", line: "Ha ha! *No, I'm not*. I've got new brown boots." },
      { who: "Andrea", line: "Nice! And *what's Kenji wearing*? He's next to you." },
      { who: "Iker", line: "*He's wearing* a striped T-shirt and a cap. And *he isn't wearing* any shoes — he's at home!" },
      { who: "Andrea", line: "Ha! Tell him to hurry. The party starts at eight!" }
    ]
  },

  objectives: [
    "I can name clothes and accessories.",
    "I can use the present continuous to say what people are wearing.",
    "I can ask *What are you wearing?* and *Is she wearing…?*",
    "I can describe clothes with colors and patterns."
  ],

  explanation: {
    vocabTitle: "Clothes",
    vocab: [
      { word: "T-shirt", icon: "👕" }, { word: "shirt", icon: "👔" }, { word: "jeans", icon: "👖" },
      { word: "dress", icon: "👗" }, { word: "skirt", icon: "🩳" }, { word: "sweater", icon: "🧶" },
      { word: "jacket", icon: "🧥" }, { word: "shoes", icon: "👞" }, { word: "sneakers", icon: "👟" },
      { word: "boots", icon: "🥾" }, { word: "cap", icon: "🧢" }, { word: "hat", icon: "👒" },
      { word: "scarf", icon: "🧣" }, { word: "socks", icon: "🧦" }, { word: "glasses", icon: "👓" }
    ],
    grammar: [
      {
        title: "Present continuous with wear",
        head: ["", "Example"],
        rows: [
          ["affirmative", "I*'m wearing* a dress. He*'s wearing* a cap."],
          ["negative", "She *isn't wearing* a jacket. They *aren't wearing* shoes."],
          ["question", "*What are* you *wearing*? *Is* he *wearing* boots?"],
          ["short answer", "Yes, he *is*. / No, he *isn't*."]
        ],
        note: "Use the present continuous for clothes **now**: *Today I'm wearing jeans.* Use the present simple for habits: *I usually wear a uniform.*"
      },
      {
        title: "Describing clothes",
        head: ["Order", "Example"],
        rows: [
          ["size + color + clothes", "a *big black* jacket"],
          ["pattern + clothes", "a *striped* T-shirt, a *plain* shirt"],
          ["material", "a *cotton* shirt, *leather* boots, a *wool* sweater"],
          ["style", "*casual* clothes, *formal* clothes, a *uniform*"]
        ]
      },
      {
        title: "Plural clothes",
        head: ["Always plural", "Example"],
        rows: [
          ["jeans, pants, shorts, glasses", "These jeans *are* new."],
          ["*a pair of*", "I've got *a pair of* blue jeans. / *two pairs of* shoes"]
        ],
        note: "Say *My jeans are blue* — never *My jeans is blue*."
      }
    ],
    watchOut: [
      ["I wearing a T-shirt.", "I'm wearing a T-shirt."],
      ["She's wearing a dress red.", "She's wearing a red dress."],
      ["My pants is black.", "My pants are black."],
      ["What you are wearing?", "What are you wearing?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the present continuous of *wear*.",
      items: [
        "Today I [['m wearing|am wearing]] a green sweater.",
        "Kenji [['s wearing|is wearing]] a cap.",
        "Andrea [[isn't wearing|is not wearing]] a jacket. (not)",
        "What [[are]] you wearing?",
        "[[Is]] Iker wearing boots? – Yes, he is."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A reporter describes what famous people are wearing at a film festival. Listen.",
      title: "On the red carpet",
      script: [
        { who: "Reporter", line: "Good evening from the Morelia Film Festival! The stars are arriving. Here's the actress Renata Paz. She's wearing a long blue dress and silver shoes. Beautiful!" },
        { who: "Reporter", line: "And now, the director Joel Ríos. He's wearing a black suit, but he isn't wearing a tie. He's wearing white sneakers! Very modern." },
        { who: "Reporter", line: "Joel, why sneakers tonight?" },
        { who: "Joel", line: "Because they're comfortable! I'm standing here all night!" },
        { who: "Reporter", line: "Ha ha! And look, there's the singer Lu Martínez. She's wearing a yellow jacket, black pants and big sunglasses. At night!" }
      ],
      activities: [
        {
          type: "sort", title: "Who's wearing it?",
          prompt: "Sort the clothes.",
          bins: ["Renata Paz", "Joel Ríos", "Lu Martínez"],
          items: [
            { text: "a long blue dress", bin: 0 }, { text: "silver shoes", bin: 0 },
            { text: "a black suit", bin: 1 }, { text: "white sneakers", bin: 1 },
            { text: "a yellow jacket", bin: 2 }, { text: "black pants", bin: 2 }, { text: "big sunglasses", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The festival is in Morelia.", a: true },
            { s: "Joel is wearing a tie.", a: false },
            { s: "Joel says his sneakers are comfortable.", a: true },
            { s: "Lu is wearing sunglasses in the afternoon.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the captions on a fashion account's photos.",
      title: "Street style · Puebla",
      text: [
        { author: "Photo 1 · Valeria, 21", body: "Valeria is wearing a white T-shirt, a long green skirt and sandals. She's carrying a small brown bag. \"I always wear comfortable clothes for the university.\"" },
        { author: "Photo 2 · Diego, 25", body: "Diego is wearing a gray suit and a blue tie. He's not wearing his glasses today. \"I'm going to a job interview!\"" },
        { author: "Photo 3 · Doña Carmen, 68", body: "Doña Carmen is wearing a traditional embroidered blouse from Cuetzalan and a black shawl. \"My daughter makes these blouses. I wear them every day.\"" }
      ],
      activities: [
        {
          type: "match", title: "Who is it?",
          prompt: "Match the person with the description.",
          pairs: [
            ["Valeria", "comfortable clothes for the university"],
            ["Diego", "a gray suit for a job interview"],
            ["Doña Carmen", "a traditional embroidered blouse"]
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, he / she is.* or *No, he / she isn't.*",
          items: [
            { q: "Is Valeria wearing a skirt?", a: ["Yes, she is."] },
            { q: "Is Diego wearing his glasses?", a: ["No, he isn't.", "No, he is not.", "No, he's not."] },
            { q: "Is Diego wearing a tie?", a: ["Yes, he is."] },
            { q: "Is Doña Carmen wearing a black shawl?", a: ["Yes, she is."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice describing clothes, then describe what you and another person are wearing.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What is she wearing today?" },
            { a: "I'm wearing a blue striped shirt." },
            { a: "He isn't wearing a jacket." },
            { a: "My new jeans are black." },
            { a: "Are you wearing a uniform?" }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "She wearing a red dress.", a: ["She's wearing a red dress.", "She is wearing a red dress."] },
            { q: "I'm wearing a jacket black.", a: ["I'm wearing a black jacket.", "I am wearing a black jacket."] },
            { q: "My shorts is new.", a: ["My shorts are new."] },
            { q: "Is he wear a cap?", a: ["Is he wearing a cap?"] }
          ]
        },
        {
          type: "write", title: "Street style",
          prompt: "Write a street-style caption for two photos: you today and a friend or family member. Describe all the clothes with colors, and add a quote from each person.",
          minWords: 40, maxWords: 80,
          model: "Photo 1: Today I'm wearing black jeans, a gray hoodie and white sneakers. I'm not wearing a jacket because it's sunny. \"I love casual clothes!\" Photo 2: My brother Pablo is wearing his school uniform: a white shirt, blue pants and black shoes. He's wearing a red cap too. \"I don't like my uniform!\"",
          bank: ["Today I'm wearing…", "I'm not wearing…", "He's / She's wearing…", "a blue striped…", "a pair of…", "because…", "\"I love…\""],
          checklist: [
            "I used *'m / 's / are wearing*.",
            "I wrote one negative: *isn't / 'm not wearing*.",
            "Colors are **before** the clothes.",
            "I used *are* with *jeans / pants / shoes*."
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
            "What are you wearing today?",
            "I'm wearing jeans and a white shirt.",
            "She's wearing a long blue dress.",
            "He isn't wearing a jacket.",
            "My new shoes are black.",
            "Is he wearing a cap?"
          ]
        },
        {
          type: "speak", title: "My outfit today",
          prompt: "Record a short video or audio describing your clothes today, from head to feet. Then say what you usually wear on weekends.",
          language: ["Today I'm wearing…", "I'm not wearing…", "On weekends I usually wear…", "My favorite clothes are…"],
          seconds: 60,
          checklist: ["describe at least four clothes?", "use the present continuous for today?", "use the present simple for weekends?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name clothes and accessories.", review: "Explanation: vocabulary" },
    { can: "I can say what people are wearing now.", review: "Explanation: present continuous with wear; Quick check" },
    { can: "I can ask *What are you wearing? Is he wearing…?*", review: "Reading activity 2; Speaking activity 1 (listen and repeat)" },
    { can: "I can describe clothes with colors and patterns.", review: "Explanation: describing clothes" },
    { can: "I can use *are* with jeans, pants and shoes.", review: "Explanation: plural clothes; Writing activity 2" },
    { can: "I can write a description of an outfit.", review: "Writing activity 3" }
  ]
};
