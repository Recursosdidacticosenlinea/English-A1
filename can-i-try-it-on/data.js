window.UNIT = {
  slug: "can-i-try-it-on",
  number: 33,
  title: "Can I Try It On?",
  level: "A1",
  minutes: 50,
  speakers: { "Shop assistant": "f", "Rafa": "m", "Mariana": "f", "Cashier": "m", A: "f", B: "m" },
  focus: ["in a clothes shop", "Can I try it / them on?", "sizes: small, medium, large", "this one / these ones", "It's too big. They're perfect."],

  presentation: {
    scene: "🛍️👕🪞🏷️",
    situation: "Rafa is in a clothes shop. He wants a new jacket for a trip to Toluca, where it's cold.",
    warmup: {
      prompt: "What do you say in a clothes shop? Choose the words you know.",
      options: ["size", "small", "medium", "large", "fitting room", "price", "cash", "card", "receipt", "discount"],
      response: "Great! In this unit you'll learn to buy clothes in English."
    },
    dialogueTitle: "In the clothes shop",
    dialogue: [
      { who: "Shop assistant", line: "Hi! *Can I help you*?" },
      { who: "Rafa", line: "Yes, please. I'm looking for a jacket. *How much is this one*?" },
      { who: "Shop assistant", line: "It's nine hundred pesos. *What size are you*?" },
      { who: "Rafa", line: "*Medium*, I think. *Can I try it on*?" },
      { who: "Shop assistant", line: "Sure. *The fitting rooms are* over there." },
      { who: "Rafa", line: "Hmm, *it's too small*. Have you got it in *large*?" },
      { who: "Shop assistant", line: "Yes, here you are. And *these gloves* are on sale. *Would you like to try them on*?" },
      { who: "Rafa", line: "OK! … The jacket is *perfect* and the gloves are great. *I'll take them*. Can I pay by card?" }
    ]
  },

  objectives: [
    "I can ask for clothes in a shop.",
    "I can talk about sizes and say if something fits.",
    "I can use *it / them* and *one / ones* to avoid repeating.",
    "I can use *too* + adjective: *It's too big*."
  ],

  explanation: {
    vocabTitle: "In the shop",
    vocab: [
      { word: "size", icon: "📏" }, { word: "small (S)", icon: "🅢" }, { word: "medium (M)", icon: "🅜" },
      { word: "large (L)", icon: "🅛" }, { word: "fitting room", icon: "🚪" }, { word: "mirror", icon: "🪞" },
      { word: "try on", icon: "👚" }, { word: "on sale", icon: "🏷️" }, { word: "price tag", icon: "🔖" },
      { word: "cashier", icon: "🧾" }, { word: "gloves", icon: "🧤" }, { word: "coat", icon: "🧥" },
      { word: "tight", icon: "🤏" }, { word: "loose", icon: "🎈" }, { word: "comfortable", icon: "😌" }
    ],
    grammar: [
      {
        title: "It / them · one / ones",
        head: ["Singular", "Plural"],
        rows: [
          ["Can I try *it* on? (the jacket)", "Can I try *them* on? (the gloves)"],
          ["I'll take *it*.", "I'll take *them*."],
          ["How much is this *one*?", "How much are these *ones*?"],
          ["I like the red *one*.", "I like the black *ones*."]
        ],
        note: "*Try on* is a phrasal verb: *try it on* — the pronoun goes in the middle. Never *try on it*."
      },
      {
        title: "Too + adjective",
        head: ["Problem", "Example"],
        rows: [
          ["*too big / too small*", "This shirt is *too big*."],
          ["*too long / too short*", "These pants are *too long*."],
          ["*too expensive*", "It's nice, but it's *too expensive*."],
          ["no problem 😊", "It's *perfect*! / They *fit* well."]
        ],
        note: "*Too* = more than you want (negative). *Very* = a lot (not always negative): *It's very nice.*"
      },
      {
        title: "Shop phrases",
        head: ["Shop assistant", "Customer"],
        rows: [
          ["*Can I help you?*", "*I'm looking for…* / *I'm just looking, thanks.*"],
          ["*What size are you?*", "*I'm a medium.* / *Size 26.*"],
          ["*How is it?*", "*It's too small. Have you got it in large?*"],
          ["*How would you like to pay?*", "*By card / In cash, please.*"]
        ]
      }
    ],
    watchOut: [
      ["Can I try on it?", "Can I try it on?"],
      ["I like the black.", "I like the black one."],
      ["It's very big. I can't wear it.", "It's too big."],
      ["I'll take it. (for jeans)", "I'll take them."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *it, them, one* or *ones*.",
      items: [
        "I like this sweater. Can I try [[it]] on?",
        "These shoes are nice. Can I try [[them]] on?",
        "Not the blue jacket — the black [[one]].",
        "The jeans are perfect. I'll take [[them]].",
        "Do you like the red sneakers or the white [[ones]]?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Mariana is shopping for a party dress. Listen to her conversation with the cashier.",
      title: "The perfect dress",
      script: [
        { who: "Cashier", line: "Hello. Are you OK in there?" },
        { who: "Mariana", line: "Not really. This green dress is too long. Have you got a shorter one?" },
        { who: "Cashier", line: "Yes, try this one. It's the same color." },
        { who: "Mariana", line: "Hmm, it's nice, but it's too tight. Have you got it in a medium?" },
        { who: "Cashier", line: "Sorry, no. But we've got a blue one in medium." },
        { who: "Mariana", line: "OK, I can try it on… Oh, it's perfect! How much is it?" },
        { who: "Cashier", line: "It's on sale. It's eight hundred pesos, not one thousand." },
        { who: "Mariana", line: "Great! I'll take it. And these earrings, how much are they?" },
        { who: "Cashier", line: "They're one hundred and fifty pesos." },
        { who: "Mariana", line: "I'll take them too. Can I pay in cash?" }
      ],
      activities: [
        {
          type: "match", title: "What's the problem?",
          prompt: "Match each dress with its problem.",
          pairs: [
            ["the first green dress", "too long"],
            ["the second green dress", "too tight"],
            ["the blue dress", "perfect"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The shop hasn't got the green dress in medium.", a: true },
            { s: "The blue dress costs a thousand pesos now.", a: false },
            { s: "Mariana buys earrings too.", a: true },
            { s: "She pays by card.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the online reviews of a clothes shop.",
      title: "Reviews · Moda Joven",
      text: [
        { author: "⭐⭐⭐⭐⭐ Iris", body: "Great shop! The shop assistants are very friendly. My new jeans are perfect and they're on sale this month. The fitting rooms are big and clean." },
        { author: "⭐⭐ Hugo", body: "The clothes are nice, but they're too expensive for students. Also, they haven't got many sizes. All the large T-shirts are too short for me — I'm very tall!" },
        { author: "⭐⭐⭐⭐ Lin", body: "I love their sweaters. They're warm and comfortable. The only problem: you can't pay in cash, only by card." }
      ],
      activities: [
        {
          type: "sort", title: "Good or bad?",
          prompt: "Sort the comments.",
          bins: ["😊 Good things", "😕 Problems"],
          items: [
            { text: "friendly shop assistants", bin: 0 }, { text: "big, clean fitting rooms", bin: 0 }, { text: "warm, comfortable sweaters", bin: 0 },
            { text: "too expensive for students", bin: 1 }, { text: "not many sizes", bin: 1 }, { text: "card only", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with one word.",
          items: [
            "Iris's new jeans are [[perfect]].",
            "Hugo thinks the clothes are too [[expensive]].",
            "The large T-shirts are too [[short]] for Hugo.",
            "Lin says the sweaters are warm and [[comfortable]].",
            "At Moda Joven you can only pay by [[card]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice shop language, then write a conversation in a clothes shop.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Can I try it on?" },
            { a: "These pants are too long." },
            { a: "Have you got it in small?" },
            { a: "I'm just looking, thanks." },
            { a: "How much are these ones?" }
          ]
        },
        {
          type: "rewrite", title: "What's the problem?",
          prompt: "Write a sentence with *too*. Use *It's* or *They're*.",
          items: [
            { q: "the jacket / big", a: ["It's too big.", "It is too big."] },
            { q: "the shoes / small", a: ["They're too small.", "They are too small."] },
            { q: "the dress / expensive", a: ["It's too expensive.", "It is too expensive."] },
            { q: "the jeans / long", a: ["They're too long.", "They are too long."] }
          ]
        },
        {
          type: "write", title: "A shop conversation",
          prompt: "Write a conversation in a clothes shop. The customer looks for something, asks for a size, tries it on, has a problem (*too…*), tries another one and buys it. Use *it / them* and *one / ones*.",
          minWords: 50, maxWords: 100,
          model: "Assistant: Hi! Can I help you? · Customer: Yes, I'm looking for sneakers. · Assistant: What size are you? · Customer: Size 25. Can I try these ones on? · Assistant: Sure. · Customer: Hmm, they're too small. Have you got them in 26? · Assistant: Yes, here you are. · Customer: They're perfect! How much are they? · Assistant: They're 1,200 pesos. · Customer: I'll take them. Can I pay by card?",
          bank: ["Can I help you?", "I'm looking for…", "What size are you?", "Can I try it / them on?", "It's / They're too…", "Have you got it in…?", "I'll take it / them.", "Can I pay by card?"],
          checklist: [
            "I used *try it on* or *try them on*.",
            "I used *too* + adjective.",
            "I used *one* or *ones*.",
            "The customer pays at the end."
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
            "Can I help you?",
            "I'm looking for a jacket.",
            "Can I try it on?",
            "It's too small. Have you got it in large?",
            "These jeans are perfect.",
            "I'll take them."
          ]
        },
        {
          type: "speak", title: "My last shopping trip",
          prompt: "Record yourself describing the clothes in your closet: your favorite clothes and one thing that is too big, too small or too old.",
          language: ["My favorite … is…", "I've got a pair of…", "This … is too small for me.", "These … are too old.", "I want to buy a new one."],
          seconds: 60,
          checklist: ["name at least four clothes?", "use *too*?", "use *one / ones*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can ask for clothes and sizes in a shop.", review: "Explanation: shop phrases" },
    { can: "I can ask *Can I try it / them on?*", review: "Explanation: it / them; Presentation" },
    { can: "I can use *one / ones* to avoid repeating.", review: "Explanation: it / them · one / ones; Quick check" },
    { can: "I can use *too* + adjective to describe a problem.", review: "Explanation: too + adjective; Writing activity 2" },
    { can: "I can understand a conversation in a shop.", review: "Listening: the perfect dress" },
    { can: "I can buy clothes in English.", review: "Writing activity 3; Speaking activity 1 (listen and repeat)" }
  ]
};
