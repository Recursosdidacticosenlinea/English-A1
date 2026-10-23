window.UNIT = {
  slug: "is-there-any-milk",
  number: 27,
  title: "Is There Any Milk?",
  level: "A1",
  minutes: 50,
  speakers: { "Sara": "f", "Pablo": "m", "Grandma": "f", "Toño": "m", A: "f", B: "m" },
  focus: ["some / any", "Is there any…? Are there any…?", "How much…? How many…?", "a lot of, a little, a few", "containers: a bottle of, a bag of…"],

  presentation: {
    scene: "🧊🥛🛒📝",
    situation: "Sara and Pablo are roommates. They want to make pancakes, so they check the kitchen and write a shopping list.",
    warmup: {
      prompt: "What do you need to make pancakes? Guess!",
      options: ["flour", "eggs", "milk", "sugar", "butter", "rice", "onions", "honey", "salt", "fish"],
      response: "Good guess! In this unit you'll learn to ask what there is in the kitchen and make a shopping list."
    },
    dialogueTitle: "Pancake problems",
    dialogue: [
      { who: "Sara", line: "Let's make pancakes! *Is there any* milk?" },
      { who: "Pablo", line: "Yes, *there's some* milk in the fridge, but not *a lot*." },
      { who: "Sara", line: "*How much* milk is there?" },
      { who: "Pablo", line: "*A little*. Half a bottle." },
      { who: "Sara", line: "OK. *Are there any* eggs?" },
      { who: "Pablo", line: "Hmm… *there aren't any* eggs. And *there isn't any* flour!" },
      { who: "Sara", line: "Oh no! *How many* eggs do we need?" },
      { who: "Pablo", line: "Two. Let's write a list: *a dozen eggs*, *a bag of* flour and *a carton of* milk." }
    ]
  },

  objectives: [
    "I can use *some* and *any* correctly.",
    "I can ask *Is there any…? Are there any…?*",
    "I can ask *How much…?* and *How many…?*",
    "I can write a shopping list with containers and quantities."
  ],

  explanation: {
    vocabTitle: "In the kitchen",
    vocab: [
      { word: "flour", icon: "🌾" }, { word: "sugar", icon: "🍬" }, { word: "salt", icon: "🧂" },
      { word: "butter", icon: "🧈" }, { word: "honey", icon: "🍯" }, { word: "onion", icon: "🧅" },
      { word: "carrot", icon: "🥕" }, { word: "lemon", icon: "🍋" }, { word: "avocado", icon: "🥑" },
      { word: "a bottle of", icon: "🍾" }, { word: "a carton of", icon: "🧃" }, { word: "a bag of", icon: "🛍️" },
      { word: "a can of", icon: "🥫" }, { word: "a kilo of", icon: "⚖️" }, { word: "a dozen", icon: "🥚" }
    ],
    grammar: [
      {
        title: "Some and any",
        head: ["", "Uncountable", "Plural countable"],
        rows: [
          ["affirmative: *some*", "There's *some* milk.", "There are *some* onions."],
          ["negative: *any*", "There isn't *any* flour.", "There aren't *any* eggs."],
          ["question: *any*", "Is there *any* sugar?", "Are there *any* lemons?"]
        ],
        note: "To offer or ask for something, use *some* in questions: *Would you like some coffee? Can I have some water?*"
      },
      {
        title: "How much? How many?",
        head: ["Question", "Use", "Answer"],
        rows: [
          ["*How much* milk is there?", "uncountable", "*A lot.* / *A little.* / *Not much.*"],
          ["*How many* eggs are there?", "countable", "*A lot.* / *A few.* / *Not many.* / *Two.*"]
        ]
      },
      {
        title: "Quantities",
        head: ["Expression", "Example"],
        rows: [
          ["*a lot of* + both", "There's *a lot of* rice. There are *a lot of* apples."],
          ["*a little* + uncountable", "There's *a little* butter."],
          ["*a few* + countable", "There are *a few* carrots."],
          ["container + *of*", "*a bottle of* water, *a can of* beans, *a kilo of* tomatoes"]
        ]
      }
    ],
    watchOut: [
      ["Is there some milk?", "Is there any milk?"],
      ["There aren't some eggs.", "There aren't any eggs."],
      ["How many sugar is there?", "How much sugar is there?"],
      ["a bottle water", "a bottle of water"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *some, any, much* or *many*.",
      items: [
        "There's [[some]] butter in the fridge.",
        "Are there [[any]] lemons?",
        "There isn't [[any]] sugar. Let's buy some.",
        "How [[much]] flour do we need?",
        "How [[many]] avocados are there?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Toño is at the supermarket. He calls his grandma to check the shopping list. Listen.",
      title: "A call from the supermarket",
      script: [
        { who: "Toño", line: "Hi, Grandma. I'm at the supermarket. What do we need?" },
        { who: "Grandma", line: "Hello, dear. We need a kilo of tomatoes and some onions." },
        { who: "Toño", line: "How many onions?" },
        { who: "Grandma", line: "Just a few. Three or four. And a bag of rice." },
        { who: "Toño", line: "OK. Is there any coffee at home?" },
        { who: "Grandma", line: "Yes, there's a lot of coffee. But there isn't any sugar. Buy a bag, please." },
        { who: "Toño", line: "Do we need any milk?" },
        { who: "Grandma", line: "Yes, two cartons. Oh, and a can of chiles. That's all. Thank you, Toño!" }
      ],
      activities: [
        {
          type: "gap", title: "Toño's list",
          prompt: "Complete the shopping list.",
          items: [
            "a kilo of [[tomatoes]]",
            "three or four [[onions]]",
            "a bag of [[rice]]",
            "a bag of [[sugar]]",
            "two [[cartons]] of milk",
            "a [[can]] of chiles"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Toño is at the market.", a: false },
            { s: "There's a lot of coffee at home.", a: true },
            { s: "There's some sugar at home.", a: false },
            { s: "They need a lot of onions.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the recipe for guacamole on a cooking website.",
      title: "Easy guacamole",
      text: [
        { author: "Ingredients (for 4 people)", body: "3 avocados · 1 small onion · 2 tomatoes · a little salt · 1 lemon · some cilantro · 1 or 2 green chiles (optional)" },
        { author: "Tips", body: "You don't need a lot of ingredients for great guacamole. Use good avocados — they're soft, not hard. Don't add any garlic; it isn't traditional. If there isn't any lemon at home, use lime. Eat it with some tortilla chips!" }
      ],
      activities: [
        {
          type: "match", title: "How much? How many?",
          prompt: "Match the ingredient with the quantity.",
          pairs: [
            ["avocados", "three"],
            ["onion", "one small one"],
            ["tomatoes", "two"],
            ["salt", "a little"],
            ["chiles", "one or two (optional)"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "The recipe is for four people.", a: true },
            { s: "You need a lot of ingredients.", a: false },
            { s: "Good avocados are hard.", a: false },
            { s: "The recipe uses garlic.", a: false },
            { s: "You can use lime if there isn't any lemon.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice questions about quantity, then write a shopping list and a message.",
      activities: [
        {
          type: "rewrite", title: "Make a question",
          prompt: "Write a question with *Is there any…?* or *Are there any…?*",
          items: [
            { q: "milk", a: ["Is there any milk?"] },
            { q: "eggs", a: ["Are there any eggs?"] },
            { q: "bread", a: ["Is there any bread?"] },
            { q: "tomatoes", a: ["Are there any tomatoes?"] },
            { q: "cheese", a: ["Is there any cheese?"] }
          ]
        },
        {
          type: "sort", title: "Much or many?",
          prompt: "Which word do you use?",
          bins: ["How much…?", "How many…?"],
          items: [
            { text: "water", bin: 0 }, { text: "rice", bin: 0 }, { text: "coffee", bin: 0 }, { text: "salt", bin: 0 },
            { text: "eggs", bin: 1 }, { text: "bananas", bin: 1 }, { text: "onions", bin: 1 }, { text: "cans of beans", bin: 1 }
          ]
        },
        {
          type: "write", title: "A note for my roommate",
          prompt: "You want to cook your favorite dish. Write a note to a roommate or family member: say what there is in the kitchen, what there isn't, and a shopping list with quantities.",
          minWords: 40, maxWords: 80,
          model: "Hi Ale! I want to cook enchiladas tonight. There are some tortillas and there's a lot of cheese, but there isn't any chicken and there aren't any tomatoes. Can you go to the supermarket, please? Shopping list: half a kilo of chicken, a kilo of tomatoes, an onion and a carton of cream. Thanks!",
          bank: ["I want to cook…", "There's some… / There are some…", "There isn't any… / There aren't any…", "Can you buy…?", "a kilo of…", "a bottle / bag / can of…", "Thanks!"],
          checklist: [
            "I used *some* in affirmative sentences.",
            "I used *any* in negative sentences.",
            "My list has **containers or quantities**: *a bag of, a kilo of…*",
            "I wrote at least six food words."
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
            "Is there any milk in the fridge?",
            "There isn't any flour.",
            "Are there any eggs?",
            "How much sugar do we need?",
            "How many tomatoes do we need?",
            "We need a bag of rice."
          ]
        },
        {
          type: "speak", title: "My favorite recipe",
          prompt: "Record yourself saying the ingredients for your favorite dish and the quantities. Say what there is at home and what you need to buy.",
          language: ["For … you need…", "a lot of / a little / a few", "two kilos of…", "At home there's some…", "There isn't any…, so I need to buy…"],
          seconds: 60,
          checklist: ["say at least six ingredients?", "use quantities?", "use *some / any*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *some* and *any*.", review: "Explanation: some and any; Quick check" },
    { can: "I can ask *Is there any…? Are there any…?*", review: "Writing activity 1" },
    { can: "I can choose *How much* or *How many*.", review: "Explanation; Writing activity 2" },
    { can: "I can use *a lot of, a little, a few*.", review: "Explanation: quantities" },
    { can: "I can understand a recipe or a shopping list.", review: "Listening and Reading" },
    { can: "I can write a shopping list with quantities.", review: "Writing activity 3" }
  ]
};
