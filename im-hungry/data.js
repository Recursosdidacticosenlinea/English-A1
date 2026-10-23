window.UNIT = {
  slug: "im-hungry",
  number: 26,
  title: "I'm Hungry!",
  level: "A1",
  minutes: 50,
  speakers: { "Leo": "m", "Mom": "f", "Nutritionist": "f", "Iván": "m", A: "m", B: "f" },
  focus: ["food and drinks", "countable and uncountable nouns", "a / an / some", "I'm hungry / thirsty", "breakfast, lunch, dinner"],

  presentation: {
    scene: "🍎🥖🧀🥛",
    situation: "Leo comes home from school. He's very hungry and he looks in the kitchen with his mom.",
    warmup: {
      prompt: "Which food words do you know? Choose all.",
      options: ["apple", "banana", "bread", "cheese", "eggs", "chicken", "rice", "beans", "milk", "water"],
      response: "Yum! In this unit you'll learn to talk about food and drinks."
    },
    dialogueTitle: "In the kitchen",
    dialogue: [
      { who: "Leo", line: "Mom, *I'm hungry*! What's for lunch?" },
      { who: "Mom", line: "Lunch is at three. Have *an apple* or *a banana* now." },
      { who: "Leo", line: "I don't want fruit. Can I have *some bread* and *some cheese*?" },
      { who: "Mom", line: "OK, but just *a sandwich*. And drink *some water*." },
      { who: "Leo", line: "Water? I want *some orange juice*. *I'm thirsty*." },
      { who: "Mom", line: "There's juice in the fridge. And there are *some eggs*, if you want an omelet." },
      { who: "Leo", line: "No, thanks. What's for lunch?" },
      { who: "Mom", line: "Chicken with *rice* and *beans*. Your favorite!" }
    ]
  },

  objectives: [
    "I can name common food and drinks.",
    "I can tell the difference between countable and uncountable nouns.",
    "I can use *a, an* and *some* with food.",
    "I can talk about what I eat for breakfast, lunch and dinner."
  ],

  explanation: {
    vocabTitle: "Food and drinks",
    vocab: [
      { word: "apple", icon: "🍎" }, { word: "banana", icon: "🍌" }, { word: "orange", icon: "🍊" },
      { word: "egg", icon: "🥚" }, { word: "bread", icon: "🍞" }, { word: "cheese", icon: "🧀" },
      { word: "chicken", icon: "🍗" }, { word: "rice", icon: "🍚" }, { word: "beans", icon: "🫘" },
      { word: "tomato", icon: "🍅" }, { word: "potato", icon: "🥔" }, { word: "tortilla", icon: "🫓" },
      { word: "milk", icon: "🥛" }, { word: "juice", icon: "🧃" }, { word: "coffee", icon: "☕" }
    ],
    grammar: [
      {
        title: "Countable and uncountable nouns",
        head: ["Countable (you can count them)", "Uncountable (you can't count them)"],
        rows: [
          ["*an* apple, two apples", "rice, bread, cheese"],
          ["*a* banana, three bananas", "milk, water, juice, coffee"],
          ["*an* egg, six eggs", "chicken (meat), meat, sugar"],
          ["*a* tomato, tomatoes", "salt, butter, soup"]
        ],
        note: "Uncountable nouns have no plural and no *a / an*: *some rice* — never *a rice* or *rices*."
      },
      {
        title: "A, an, some",
        head: ["", "Example"],
        rows: [
          ["*a / an* + singular countable", "I have *an* orange and *a* banana."],
          ["*some* + plural countable", "There are *some* eggs in the fridge."],
          ["*some* + uncountable", "Can I have *some* water?"]
        ]
      },
      {
        title: "Meals and feelings",
        head: ["Expression", "Example"],
        rows: [
          ["*have* breakfast / lunch / dinner", "I *have breakfast* at seven."],
          ["*for* breakfast", "I eat eggs *for breakfast*."],
          ["*I'm hungry* / *I'm thirsty*", "I'm hungry. Can I have a sandwich?"],
          ["*What's for* lunch?", "*Chicken and rice.*"]
        ],
        note: "We say *I'm hungry* (estoy hambriento) — never *I have hungry*."
      }
    ],
    watchOut: [
      ["I have hungry.", "I'm hungry."],
      ["Can I have a water?", "Can I have some water? / a glass of water?"],
      ["I eat rices.", "I eat rice."],
      ["I want a egg.", "I want an egg."]
    ],
    check: {
      type: "sort", title: "Quick check",
      prompt: "Countable or uncountable?",
      bins: ["Countable", "Uncountable"],
      items: [
        { text: "apple", bin: 0 }, { text: "egg", bin: 0 }, { text: "tomato", bin: 0 }, { text: "sandwich", bin: 0 },
        { text: "rice", bin: 1 }, { text: "milk", bin: 1 }, { text: "bread", bin: 1 }, { text: "cheese", bin: 1 }, { text: "water", bin: 1 }
      ]
    }
  },

  skills: {
    listening: {
      intro: "A nutritionist asks Iván about what he eats in a normal day. Listen.",
      title: "At the nutritionist",
      script: [
        { who: "Nutritionist", line: "So, Iván, what do you have for breakfast?" },
        { who: "Iván", line: "Usually some coffee and a sweet bread. Sometimes I have an egg." },
        { who: "Nutritionist", line: "Hmm. And for lunch?" },
        { who: "Iván", line: "I eat at the university. I have some tacos or a torta. And a soda." },
        { who: "Nutritionist", line: "Do you eat fruit?" },
        { who: "Iván", line: "Not a lot. Maybe a banana on Saturdays." },
        { who: "Nutritionist", line: "And what about dinner?" },
        { who: "Iván", line: "I have some milk and cereal at about ten o'clock at night." },
        { who: "Nutritionist", line: "OK, Iván. Here's my advice: drink some water every day, eat an apple or an orange in the morning, and have some vegetables with your lunch." }
      ],
      activities: [
        {
          type: "sort", title: "Which meal?",
          prompt: "When does Iván eat or drink it?",
          bins: ["breakfast", "lunch", "dinner"],
          items: [
            { text: "coffee", bin: 0 }, { text: "sweet bread", bin: 0 }, { text: "an egg (sometimes)", bin: 0 },
            { text: "tacos or a torta", bin: 1 }, { text: "a soda", bin: 1 },
            { text: "milk", bin: 2 }, { text: "cereal", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Iván eats a lot of fruit.", a: false },
            { s: "He has lunch at the university.", a: true },
            { s: "He has dinner at about ten.", a: true },
            { s: "The nutritionist says: drink some soda every day.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Three people talk about their typical breakfast on a food blog.",
      title: "What's for breakfast?",
      text: [
        { author: "Doña Rosa, Oaxaca", body: "For breakfast I have some hot chocolate and a piece of bread. On Sundays my family eats tamales. We buy them at the market." },
        { author: "Kenji, Osaka", body: "In Japan I have rice, some fish and miso soup for breakfast. In Mexico I eat chilaquiles. I love them, but they're very spicy!" },
        { author: "Claire, Montreal", body: "I have some toast with butter and jam, and a big cup of coffee. On weekends we have pancakes with maple syrup." }
      ],
      activities: [
        {
          type: "match", title: "Who eats it?",
          prompt: "Match the person with the food.",
          pairs: [
            ["Doña Rosa", "hot chocolate and bread"],
            ["Kenji in Japan", "rice, fish and miso soup"],
            ["Kenji in Mexico", "chilaquiles"],
            ["Claire", "toast with butter and jam"]
          ]
        },
        {
          type: "gap", title: "A, an or some?",
          prompt: "Complete with *a, an* or *some*.",
          items: [
            "Doña Rosa has [[some]] hot chocolate.",
            "She has [[a]] piece of bread.",
            "Kenji has [[some]] fish.",
            "Claire drinks [[a]] big cup of coffee.",
            "I want [[an]] orange, please."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *a, an, some*, then write about what you eat.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "I have a rice for lunch.", a: ["I have rice for lunch.", "I have some rice for lunch."] },
            { q: "Can I have a apple?", a: ["Can I have an apple?"] },
            { q: "I have thirsty.", a: ["I'm thirsty.", "I am thirsty."] },
            { q: "There are some milk.", a: ["There is some milk.", "There's some milk."] },
            { q: "She eats three egg.", a: ["She eats three eggs."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What's for dinner tonight?" },
            { a: "I have eggs for breakfast." },
            { a: "Can I have some water, please?" },
            { a: "There's some cheese in the fridge." },
            { a: "I'm hungry and thirsty." }
          ]
        },
        {
          type: "write", title: "My food day",
          prompt: "Write about what you eat and drink on a normal day: breakfast, lunch and dinner. Use *a, an* and *some*. Say your favorite food.",
          minWords: 40, maxWords: 80,
          model: "For breakfast I have some coffee with milk and a sandwich. I have lunch at three with my family. We usually eat some rice, beans and chicken, and we drink some water. In the afternoon I'm hungry, so I eat an apple. For dinner I have some bread and cheese. My favorite food is mole!",
          bank: ["For breakfast I have…", "I have lunch at…", "We usually eat some…", "I drink some…", "In the afternoon I'm hungry, so…", "For dinner…", "My favorite food is…"],
          checklist: [
            "I wrote about **three** meals.",
            "I used *a / an* with singular countable nouns.",
            "I used *some* with uncountable or plural nouns.",
            "I didn't put *-s* on uncountable nouns."
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
            "I'm hungry! What's for lunch?",
            "Can I have some bread and cheese?",
            "I'd like an apple, please.",
            "I eat eggs for breakfast.",
            "I'm thirsty. Can I have some water?",
            "We have chicken with rice and beans."
          ]
        },
        {
          type: "speak", title: "In my fridge",
          prompt: "Record yourself saying what there is in your fridge or kitchen right now. Then say what you want to eat today.",
          language: ["In my fridge there's some…", "There are some…", "There isn't any…", "I'm hungry!", "I want…"],
          seconds: 60,
          checklist: ["name at least eight foods?", "use *some*?", "use *there is / there are*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name common food and drinks.", review: "Explanation: vocabulary" },
    { can: "I can say if a noun is countable or uncountable.", review: "Explanation; Quick check" },
    { can: "I can use *a, an* and *some* correctly.", review: "Explanation: a, an, some; Reading activity 2" },
    { can: "I can say *I'm hungry / thirsty*.", review: "Explanation: meals and feelings" },
    { can: "I can understand people talking about their meals.", review: "Listening and Reading" },
    { can: "I can write about what I eat in a day.", review: "Writing activity 3" }
  ]
};
