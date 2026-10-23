window.UNIT = {
  slug: "at-the-cafe",
  number: 28,
  title: "At the Café",
  level: "A1",
  minutes: 50,
  speakers: { "Waiter": "m", "Camila": "f", "Daniel": "m", "Cashier": "f", "Customer": "m", A: "m", B: "f" },
  focus: ["ordering: I'd like… / Can I have…?", "Would you like…? Yes, please. / No, thank you.", "small, medium, large", "Anything else? That's all.", "café food and drinks"],

  presentation: {
    scene: "☕🥐🧁🧾",
    situation: "Camila and Daniel are in a café after class. The waiter comes to their table.",
    warmup: {
      prompt: "What do you order in a café? Choose all.",
      options: ["coffee", "tea", "hot chocolate", "a smoothie", "a sandwich", "a muffin", "a croissant", "a piece of cake", "orange juice", "a bagel"],
      response: "Delicious! In this unit you'll learn to order food and drinks politely."
    },
    dialogueTitle: "Ordering at a café",
    dialogue: [
      { who: "Waiter", line: "Good afternoon! *What would you like*?" },
      { who: "Camila", line: "*I'd like* a cappuccino, please." },
      { who: "Waiter", line: "Sure. *Small, medium or large*?" },
      { who: "Camila", line: "Medium, please. And *can I have* a chocolate muffin?" },
      { who: "Waiter", line: "Of course. And for you?" },
      { who: "Daniel", line: "*I'd like* a ham and cheese sandwich and an orange juice." },
      { who: "Waiter", line: "*Would you like* the sandwich hot or cold?" },
      { who: "Daniel", line: "Hot, please." },
      { who: "Waiter", line: "*Anything else*?" },
      { who: "Camila", line: "*No, that's all, thank you*. *Can we have the check*, please?" }
    ]
  },

  objectives: [
    "I can order food and drinks politely.",
    "I can use *I'd like…* and *Can I have…?*",
    "I can answer *Would you like…?* questions.",
    "I can understand a menu and a waiter's questions."
  ],

  explanation: {
    vocabTitle: "Café menu",
    vocab: [
      { word: "coffee", icon: "☕" }, { word: "cappuccino", icon: "🫖" }, { word: "tea", icon: "🍵" },
      { word: "hot chocolate", icon: "🍫" }, { word: "smoothie", icon: "🥤" }, { word: "orange juice", icon: "🧃" },
      { word: "sandwich", icon: "🥪" }, { word: "muffin", icon: "🧁" }, { word: "croissant", icon: "🥐" },
      { word: "a piece of cake", icon: "🍰" }, { word: "salad", icon: "🥗" }, { word: "cookie", icon: "🍪" },
      { word: "menu", icon: "📋" }, { word: "check / bill", icon: "🧾" }, { word: "tip", icon: "💵" }
    ],
    grammar: [
      {
        title: "Ordering politely",
        head: ["Customer says", "Meaning"],
        rows: [
          ["*I'd like* a coffee, please.", "*I'd like* = I would like (more polite than *I want*)"],
          ["*Can I have* a muffin, please?", "a polite request"],
          ["*Could I have* some water, please?", "very polite"],
          ["*For me*, a tea, please.", "short answer in a group"]
        ],
        note: "*I want a coffee* can sound rude to the waiter. Use *I'd like* or *Can I have…?* and always say *please*."
      },
      {
        title: "Waiter's questions",
        head: ["Waiter", "Customer"],
        rows: [
          ["*What would you like?* / *Are you ready to order?*", "*I'd like…* / *Yes. Can I have…?*"],
          ["*Would you like* milk / sugar?", "*Yes, please.* / *No, thank you.*"],
          ["*Small, medium or large?*", "*Medium, please.*"],
          ["*For here or to go?*", "*For here.* / *To go, please.*"],
          ["*Anything else?*", "*No, that's all, thanks.*"]
        ]
      },
      {
        title: "Would like vs. like",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*Would you like* a coffee?", "an offer: now", "Yes, please."],
          ["*Do you like* coffee?", "general preference", "Yes, I do. I drink it every day."]
        ]
      }
    ],
    watchOut: [
      ["I would like a coffee? (to order)", "I'd like a coffee, please."],
      ["Would you like a tea? – Yes, I would like.", "Yes, please."],
      ["Can I have the count?", "Can I have the check, please?"],
      ["Give me a sandwich.", "Can I have a sandwich, please?"]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match the waiter's question with the best answer.",
      pairs: [
        ["What would you like?", "I'd like a tea, please."],
        ["Would you like sugar?", "No, thank you."],
        ["Small, medium or large?", "Large, please."],
        ["For here or to go?", "To go, please."],
        ["Anything else?", "No, that's all."]
      ]
    }
  },

  skills: {
    listening: {
      intro: "A customer orders at the counter of a busy coffee shop. Listen and complete the order.",
      title: "At the counter",
      script: [
        { who: "Cashier", line: "Hi! What can I get you?" },
        { who: "Customer", line: "Hi. I'd like a large hot chocolate, please." },
        { who: "Cashier", line: "Would you like whipped cream on top?" },
        { who: "Customer", line: "Yes, please. And can I have two croissants?" },
        { who: "Cashier", line: "Sure. Is that for here or to go?" },
        { who: "Customer", line: "To go, please. Oh, and a small black coffee for my friend. No sugar." },
        { who: "Cashier", line: "OK. Anything else?" },
        { who: "Customer", line: "No, that's all, thanks. How much is it?" },
        { who: "Cashier", line: "That's one hundred and fifteen pesos, please." }
      ],
      activities: [
        {
          type: "gap", title: "The order",
          prompt: "Complete the order.",
          items: [
            "1 [[large]] hot chocolate with whipped cream",
            "[[2|two]] croissants",
            "1 [[small]] black coffee — no [[sugar]]",
            "For here or to go? [[to go]]",
            "Total: [[115]] pesos"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The customer wants whipped cream.", a: true },
            { s: "The coffee is for the customer.", a: false },
            { s: "They eat in the coffee shop.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the menu of a student café.",
      title: "Café La Esquina · Menu",
      text: [
        { author: "Drinks", body: "Coffee (small $25 · medium $30 · large $35) · Cappuccino $40 · Tea $20 · Hot chocolate $38 · Fruit smoothie $45 (mango, strawberry or banana)" },
        { author: "Food", body: "Ham and cheese sandwich $55 · Vegetarian sandwich $50 · Chicken salad $65 · Muffin (chocolate or blueberry) $30 · Piece of cake $42" },
        { author: "Student special", body: "Monday to Friday, 7–10 a.m.: any coffee + a muffin = $45. Show your student ID!" }
      ],
      activities: [
        {
          type: "match", title: "How much is it?",
          prompt: "Match the order with the price.",
          pairs: [
            ["a small coffee", "$25"],
            ["a cappuccino", "$40"],
            ["a chicken salad", "$65"],
            ["a vegetarian sandwich", "$50"],
            ["the student special", "$45"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "There are three kinds of smoothie.", a: true },
            { s: "The muffins are only chocolate.", a: false },
            { s: "The student special is on Saturdays.", a: false },
            { s: "You need a student ID for the special.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice polite orders, then write a café dialogue.",
      activities: [
        {
          type: "rewrite", title: "Be polite!",
          prompt: "Rewrite with *I'd like… , please.*",
          items: [
            { q: "I want a coffee.", a: ["I'd like a coffee, please.", "I would like a coffee, please."] },
            { q: "Give me a sandwich.", a: ["I'd like a sandwich, please.", "I would like a sandwich, please."] },
            { q: "I want two muffins.", a: ["I'd like two muffins, please.", "I would like two muffins, please."] },
            { q: "Water!", a: ["I'd like some water, please.", "I'd like a water, please.", "I would like some water, please."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What would you like to drink?" },
            { a: "Can I have the check, please?" },
            { a: "Would you like milk with your coffee?" },
            { a: "No, that's all, thank you." },
            { a: "I'd like a piece of cake." }
          ]
        },
        {
          type: "write", title: "A café dialogue",
          prompt: "Write a dialogue between a waiter and you at Café La Esquina. Order a drink and some food from the menu. The waiter asks at least three questions. Ask for the check at the end.",
          minWords: 45, maxWords: 90,
          model: "Waiter: Good morning! What would you like? · Me: I'd like a medium coffee, please. · Waiter: Would you like milk? · Me: Yes, please. And can I have a blueberry muffin? · Waiter: Sure. For here or to go? · Me: For here. · Waiter: Anything else? · Me: No, that's all. Can I have the check, please? · Waiter: That's sixty pesos.",
          bank: ["What would you like?", "I'd like…, please.", "Can I have…?", "Would you like…?", "Yes, please. / No, thank you.", "For here or to go?", "Anything else?", "Can I have the check, please?"],
          checklist: [
            "I ordered with *I'd like* or *Can I have*.",
            "The waiter asks *Would you like…?*",
            "I used *please* and *thank you*.",
            "I asked for the check."
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
            "What would you like?",
            "I'd like a coffee, please.",
            "Can I have a chocolate muffin?",
            "Would you like milk with that?",
            "For here or to go?",
            "Can I have the check, please?"
          ]
        },
        {
          type: "speak", title: "My café order",
          prompt: "Record yourself ordering your perfect breakfast in a café. Imagine the waiter's questions and answer them.",
          language: ["Good morning!", "I'd like…", "Can I have…?", "Yes, please. / No, thank you.", "That's all, thanks.", "Can I have the check, please?"],
          seconds: 45,
          checklist: ["order at least two things?", "sound polite?", "use *I'd like*?", "ask for the check?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can order food and drinks politely.", review: "Explanation: ordering politely" },
    { can: "I can use *I'd like* and *Can I have…?*", review: "Writing activity 1" },
    { can: "I can answer *Would you like…?*", review: "Explanation: waiter's questions; Quick check" },
    { can: "I can understand the difference between *Would you like* and *Do you like*.", review: "Explanation: would like vs. like" },
    { can: "I can understand a menu and prices.", review: "Reading: Café La Esquina" },
    { can: "I can have a simple conversation in a café.", review: "Speaking activity 1 (listen and repeat)" }
  ]
};
