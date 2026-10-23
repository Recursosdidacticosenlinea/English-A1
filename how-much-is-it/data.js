window.UNIT = {
  slug: "how-much-is-it",
  number: 29,
  title: "How Much Is It?",
  level: "A1",
  minutes: 50,
  speakers: { "Seller": "m", "Jimena": "f", "Doña Lupe": "f", "Kevin": "m", A: "f", B: "m" },
  focus: ["prices and money: pesos, dollars, cents", "How much is it? How much are they?", "It's… / They're…", "numbers 100–1,000", "at the market: Can I have…? Here you are."],

  presentation: {
    scene: "🧺💰🍉🌶️",
    situation: "Jimena is at the market on Saturday morning. She buys fruit and vegetables for the week.",
    warmup: {
      prompt: "What can you buy at a Mexican market? Choose all.",
      options: ["fruit", "vegetables", "flowers", "cheese", "tortillas", "clothes", "toys", "spices", "meat", "juice"],
      response: "Good! In this unit you'll learn to ask about prices and buy things."
    },
    dialogueTitle: "At the market",
    dialogue: [
      { who: "Seller", line: "Good morning! What would you like?" },
      { who: "Jimena", line: "Good morning. *How much are* the mangoes?" },
      { who: "Seller", line: "*They're thirty pesos* a kilo." },
      { who: "Jimena", line: "OK, *can I have* two kilos, please? And *how much is* that watermelon?" },
      { who: "Seller", line: "*It's forty-five pesos*." },
      { who: "Jimena", line: "Hmm, *that's expensive*. *How about forty*?" },
      { who: "Seller", line: "OK, forty. *Here you are*. That's a hundred pesos in total." },
      { who: "Jimena", line: "Here's two hundred." },
      { who: "Seller", line: "Thank you. *And here's your change*: one hundred pesos. Have a nice day!" }
    ]
  },

  objectives: [
    "I can ask and say prices.",
    "I can use *How much is…?* and *How much are…?*",
    "I can say numbers from 100 to 1,000.",
    "I can buy things at a market or shop."
  ],

  explanation: {
    vocabTitle: "Money and shopping",
    vocab: [
      { word: "price", icon: "🏷️" }, { word: "peso", icon: "🪙" }, { word: "dollar", icon: "💵" },
      { word: "coin", icon: "🪙" }, { word: "bill (money)", icon: "💴" }, { word: "change", icon: "💱" },
      { word: "cash", icon: "💰" }, { word: "card", icon: "💳" }, { word: "cheap", icon: "👍" },
      { word: "expensive", icon: "💸" }, { word: "a kilo", icon: "⚖️" }, { word: "half a kilo", icon: "½" },
      { word: "a piece", icon: "🍉" }, { word: "receipt", icon: "🧾" }, { word: "discount", icon: "🔖" }
    ],
    grammar: [
      {
        title: "How much is it? How much are they?",
        head: ["Question", "Answer"],
        rows: [
          ["*How much is* the watermelon?", "*It's* forty-five pesos."],
          ["*How much are* the mangoes?", "*They're* thirty pesos a kilo."],
          ["*How much is it* in total?", "*It's* / *That's* a hundred pesos."],
          ["*How much does it cost?*", "*It costs* fifteen dollars."]
        ],
        note: "Singular → *is / it's*. Plural → *are / they're*."
      },
      {
        title: "Big numbers",
        head: ["Number", "Say"],
        rows: [
          ["100", "*a / one hundred*"],
          ["150", "a hundred *and* fifty"],
          ["275", "two hundred *and* seventy-five"],
          ["500", "five hundred (no -s!)"],
          ["1,000", "*a / one thousand*"],
          ["$12.50", "twelve dollars *and* fifty cents / twelve fifty"]
        ],
        note: "*hundred* and *thousand* don't take *-s* after a number: *three hundred* — never *three hundreds*."
      },
      {
        title: "Buying things",
        head: ["Customer", "Seller"],
        rows: [
          ["*Can I have* a kilo of tomatoes?", "*Sure. Here you are.*"],
          ["*Do you take* cards?", "*Sorry, cash only.*"],
          ["*That's expensive. How about…?*", "*OK, …* / *Sorry, no.*"],
          ["*Here's* two hundred.", "*Here's your change.*"]
        ]
      }
    ],
    watchOut: [
      ["How much is the mangoes?", "How much are the mangoes?"],
      ["It's two hundreds pesos.", "It's two hundred pesos."],
      ["How much cost it?", "How much does it cost? / How much is it?"],
      ["Is expensive.", "It's expensive."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *is, are, it's* or *they're*.",
      items: [
        "How much [[is]] the pineapple? – [[It's]] thirty pesos.",
        "How much [[are]] the avocados? – [[They're]] sixty pesos a kilo.",
        "How much [[is]] this bag? – It's two hundred pesos."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Kevin buys a present for his mom at a craft market. Listen to the prices.",
      title: "At the craft market",
      script: [
        { who: "Kevin", line: "Excuse me, how much is this vase?" },
        { who: "Doña Lupe", line: "That blue vase? It's three hundred and fifty pesos. It's Talavera, from Puebla." },
        { who: "Kevin", line: "It's beautiful, but it's expensive. How much are those small plates?" },
        { who: "Doña Lupe", line: "They're one hundred and twenty pesos each, or two for two hundred." },
        { who: "Kevin", line: "OK, can I have two plates, please?" },
        { who: "Doña Lupe", line: "Of course. Would you like a bag?" },
        { who: "Kevin", line: "Yes, please. Do you take cards?" },
        { who: "Doña Lupe", line: "Sorry, cash only. There's an ATM next to the church." },
        { who: "Kevin", line: "No problem, I've got cash. Here's five hundred." },
        { who: "Doña Lupe", line: "And here's your change: three hundred pesos. Thank you!" }
      ],
      activities: [
        {
          type: "gap", title: "Write the prices",
          prompt: "Write the prices in numbers.",
          items: [
            "the blue vase: $[[350]]",
            "one small plate: $[[120]]",
            "two small plates: $[[200]]",
            "Kevin pays with: $[[500]]",
            "Kevin's change: $[[300]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Kevin buys the vase.", a: false },
            { s: "The vase is Talavera from Puebla.", a: true },
            { s: "Doña Lupe takes cards.", a: false },
            { s: "There's an ATM next to the church.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the ads on a buy-and-sell page for students.",
      title: "Student marketplace",
      text: [
        { author: "Bike for sale", body: "Blue mountain bike, two years old, very good condition. Only $1,000! It's cheap because I'm moving to another city. Message Joel." },
        { author: "Books", body: "Three English books for level A1 and A2. They're $150 each or $400 for all three. They're like new! Message Brisa." },
        { author: "Desk lamp", body: "White desk lamp, perfect for studying. It's $250, but for BUAP students it's $200. Cash or bank transfer. Message Óscar." }
      ],
      activities: [
        {
          type: "match", title: "How much?",
          prompt: "Match the item with the price.",
          pairs: [
            ["the bike", "a thousand pesos"],
            ["one book", "a hundred and fifty pesos"],
            ["three books", "four hundred pesos"],
            ["the lamp for BUAP students", "two hundred pesos"]
          ]
        },
        {
          type: "rewrite", title: "Write the numbers in words",
          prompt: "Write the prices in words.",
          items: [
            { q: "$150", a: ["a hundred and fifty pesos", "one hundred and fifty pesos", "a hundred and fifty", "one hundred and fifty"] },
            { q: "$400", a: ["four hundred pesos", "four hundred"] },
            { q: "$250", a: ["two hundred and fifty pesos", "two hundred and fifty"] },
            { q: "$1,000", a: ["a thousand pesos", "one thousand pesos", "a thousand", "one thousand"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice price questions, then write an ad.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "How much is this T-shirt?" },
            { a: "How much are the oranges?" },
            { a: "They're twenty pesos a kilo." },
            { a: "Do you take cards?" },
            { a: "Here's your change." }
          ]
        },
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write the question with *How much is…?* or *How much are…?*",
          items: [
            { q: "It's eighty pesos. (the cheese)", a: ["How much is the cheese?"] },
            { q: "They're fifteen pesos each. (the mangoes)", a: ["How much are the mangoes?"] },
            { q: "It's a thousand pesos. (the bike)", a: ["How much is the bike?"] },
            { q: "They're two hundred pesos. (the plates)", a: ["How much are the plates?"] }
          ]
        },
        {
          type: "write", title: "Sell something",
          prompt: "Write an ad for the student marketplace. Describe something you want to sell (color, size, condition), say the price and how people can pay. Say why it's cheap.",
          minWords: 35, maxWords: 70,
          model: "Guitar for sale! It's a brown acoustic guitar, one year old, in excellent condition. It's only $1,200 — it's cheap because I don't play it now. I can also sell a guitar case for $150. Cash only. Message Rafa on WhatsApp.",
          bank: ["… for sale!", "It's a … , … years old.", "It's in very good condition.", "It's only $…", "It's cheap because…", "Cash / card / bank transfer", "Message…"],
          checklist: [
            "I described the object (color, size or condition).",
            "I wrote the price.",
            "I said how people can pay.",
            "I used *it's* or *they're* correctly."
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
            "How much is this bag?",
            "It's two hundred pesos.",
            "How much are the mangoes?",
            "They're thirty pesos a kilo.",
            "That's too expensive.",
            "Here's your change."
          ]
        },
        {
          type: "speak", title: "My shopping",
          prompt: "Record yourself talking about five things you buy every week and how much they cost (for example: tortillas, a bus ticket, coffee).",
          language: ["Every week I buy…", "It's… / They're…", "… costs about…", "It's cheap / expensive.", "In total, about … pesos."],
          seconds: 60,
          checklist: ["name five things?", "say prices?", "use *it's / they're*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can ask about prices.", review: "Explanation: How much is it?" },
    { can: "I can choose *How much is* or *How much are*.", review: "Quick check; Writing activity 2" },
    { can: "I can say numbers from 100 to 1,000.", review: "Explanation: big numbers; Reading activity 2" },
    { can: "I can understand prices when people speak.", review: "Listening: at the craft market" },
    { can: "I can buy something at a market or shop.", review: "Explanation: buying things; Speaking activity 1 (listen and repeat)" },
    { can: "I can write a short ad to sell something.", review: "Writing activity 3" }
  ]
};
