window.UNIT = {
  slug: "my-last-birthday",
  number: 48,
  title: "My Last Birthday",
  level: "A1",
  minutes: 50,
  speakers: { "Paulina": "f", "Emilio": "m", "Grandma": "f", "Tomás": "m", A: "f", B: "m" },
  focus: ["past simple: common irregular verbs", "went, had, got, ate, saw, gave, made…", "Where did you go? What did you get?", "first, then, after that, finally", "telling a short story"],

  presentation: {
    scene: "🎂🎁🎈📸",
    situation: "Paulina's birthday was on Saturday. On Monday, her friend Emilio asks her about it.",
    warmup: {
      prompt: "What do people do on their birthday? Choose all.",
      options: ["have a party", "get presents", "eat cake", "go out for dinner", "sing Happy Birthday", "see friends", "make a wish", "take photos", "break a piñata", "go dancing"],
      response: "Happy birthday to everyone! In this unit you'll learn irregular past verbs to tell stories."
    },
    dialogueTitle: "How was your birthday?",
    dialogue: [
      { who: "Emilio", line: "Happy birthday, Paulina! Sorry, it was on Saturday, right? *What did you do*?" },
      { who: "Paulina", line: "Thanks! In the morning *my family made* breakfast for me. Then *we went* to Atlixco." },
      { who: "Emilio", line: "Nice! *What did you do* there?" },
      { who: "Paulina", line: "*We ate* at a great restaurant and *we saw* the flower gardens." },
      { who: "Emilio", line: "*Did you have* a party?" },
      { who: "Paulina", line: "Yes, *I did*! In the evening my friends *came* to my house. *We had* pizza and cake." },
      { who: "Emilio", line: "*What did you get*?" },
      { who: "Paulina", line: "*My parents gave* me a new phone and my sister *bought* me a book. *I got* a lot of messages too!" }
    ]
  },

  objectives: [
    "I can use common irregular verbs in the past simple.",
    "I can ask *Where did you go? What did you get?*",
    "I can tell a short story with *first, then, after that, finally*.",
    "I can describe a special day in the past."
  ],

  explanation: {
    vocabTitle: "Irregular verbs",
    vocab: [
      { word: "go → went", icon: "🚶" }, { word: "have → had", icon: "🍕" }, { word: "get → got", icon: "🎁" },
      { word: "eat → ate", icon: "🍰" }, { word: "see → saw", icon: "👀" }, { word: "give → gave", icon: "🤲" },
      { word: "make → made", icon: "🥞" }, { word: "come → came", icon: "🏃" }, { word: "buy → bought", icon: "🛍️" },
      { word: "take → took", icon: "📸" }, { word: "drink → drank", icon: "🥤" }, { word: "sing → sang", icon: "🎤" },
      { word: "say → said", icon: "💬" }, { word: "sleep → slept", icon: "😴" }, { word: "be → was / were", icon: "🙂" }
    ],
    grammar: [
      {
        title: "Irregular verbs in the past",
        head: ["Present", "Past", "Example"],
        rows: [
          ["go", "*went*", "We *went* to Atlixco."],
          ["have", "*had*", "I *had* a party."],
          ["eat", "*ate*", "We *ate* cake."],
          ["see", "*saw*", "We *saw* the gardens."],
          ["give", "*gave*", "My parents *gave* me a phone."],
          ["buy", "*bought*", "My sister *bought* me a book."]
        ],
        note: "Irregular verbs don't use *-ed*. You need to learn them! But negatives and questions are regular: *didn't go, Did you go?*"
      },
      {
        title: "Negatives and questions",
        head: ["", "Example"],
        rows: [
          ["negative", "I *didn't go* to school. (not *didn't went*)"],
          ["yes/no question", "*Did* you *have* a party? – Yes, I *did*."],
          ["Wh- question", "*Where did* you *go*? *What did* you *get*? *Who did* you *see*?"]
        ]
      },
      {
        title: "Telling a story",
        head: ["Word", "Example"],
        rows: [
          ["*First,*", "*First,* we had breakfast."],
          ["*Then,*", "*Then,* we went to Atlixco."],
          ["*After that,*", "*After that,* my friends came."],
          ["*Finally,*", "*Finally,* we sang and ate cake."]
        ]
      }
    ],
    watchOut: [
      ["We goed to the beach.", "We went to the beach."],
      ["I didn't went to the party.", "I didn't go to the party."],
      ["Did you saw the movie?", "Did you see the movie?"],
      ["Where you went?", "Where did you go?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the past simple of the verb.",
      items: [
        "Yesterday I [[went]] to the movies. (go)",
        "We [[had]] tacos for dinner. (have)",
        "She [[saw]] her friends at the party. (see)",
        "My dad [[made]] a big cake. (make)",
        "I [[didn't go|did not go]] to school on Friday. (not go)",
        "What did you [[get]] for your birthday? (get)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Tomás calls his grandma. She asks about his trip to Mexico City last weekend. Listen.",
      title: "A weekend in the city",
      script: [
        { who: "Grandma", line: "Hello, Tomás! How was your weekend in Mexico City?" },
        { who: "Tomás", line: "It was amazing, Grandma! First, we went to Chapultepec Park and we saw the castle." },
        { who: "Grandma", line: "Did you go to the museum?" },
        { who: "Tomás", line: "Yes, we did. We went to the Anthropology Museum. I took a lot of photos." },
        { who: "Grandma", line: "And what did you eat?" },
        { who: "Tomás", line: "We ate tacos al pastor in a small restaurant. Then we had churros and hot chocolate." },
        { who: "Grandma", line: "Did you buy anything?" },
        { who: "Tomás", line: "Yes, I bought you a present! It's a small book about Frida Kahlo." },
        { who: "Grandma", line: "Oh, thank you, darling!" },
        { who: "Tomás", line: "Finally, we came home on Sunday night. I was very tired, so I slept ten hours!" }
      ],
      activities: [
        {
          type: "tiles", title: "Put the story in order",
          prompt: "Put the words in order to make sentences from the story.",
          items: [
            { a: "First, we went to Chapultepec Park." },
            { a: "We saw the castle." },
            { a: "I took a lot of photos." },
            { a: "We ate tacos al pastor." },
            { a: "I slept ten hours!" }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Tomás went to Chapultepec Park.", a: true },
            { s: "He didn't go to any museums.", a: false },
            { s: "He bought a book for his grandma.", a: true },
            { s: "They came home on Saturday.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short story from a student magazine.",
      title: "The best birthday present",
      text: [
        { author: "Part 1", body: "Last year, on my twelfth birthday, I woke up early. My parents said \"Happy birthday!\" but they didn't give me a present. I was sad. I went to school and I had a normal day." },
        { author: "Part 2", body: "In the afternoon, my dad took me to my grandparents' house. My grandma made my favorite food, mole poblano. After that, my grandpa said: \"Come to the garden.\" And there it was: a small brown dog with a red bow! I gave him a big hug. I called him Chocolate. It was the best present ever!" }
      ],
      activities: [
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers.",
          items: [
            { q: "Did the parents give a present in the morning?", a: ["No, they didn't.", "No, they did not."] },
            { q: "Where did the dad take the writer?", a: ["To the grandparents' house.", "to the grandparents' house", "To his grandparents' house.", "To her grandparents' house."] },
            { q: "What did the grandma make?", a: ["Mole poblano.", "mole poblano", "Mole.", "She made mole poblano."] },
            { q: "What did the writer call the dog?", a: ["Chocolate.", "chocolate", "Chocolate"] }
          ]
        },
        {
          type: "match", title: "Present and past",
          prompt: "Match the present form with the past form from the story.",
          pairs: [
            ["wake up", "woke up"],
            ["say", "said"],
            ["take", "took"],
            ["make", "made"],
            ["give", "gave"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice irregular verbs, then write about a special day.",
      activities: [
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write a question with *did* for the words in *italics*.",
          items: [
            { q: "I went *to Oaxaca*. (Where…?)", a: ["Where did you go?"] },
            { q: "I got *a bike*. (What…?)", a: ["What did you get?"] },
            { q: "I saw *my cousins*. (Who…?)", a: ["Who did you see?"] },
            { q: "We ate *at a restaurant*. (Where…?)", a: ["Where did you eat?"] }
          ]
        },
        {
          type: "gap", title: "Complete the story",
          prompt: "Write the past simple.",
          items: [
            "Last Sunday we [[went]] to the beach. (go)",
            "First, we [[had]] breakfast in a café. (have)",
            "Then, I [[took]] a lot of photos. (take)",
            "After that, my brother [[bought]] some ice cream. (buy)",
            "Finally, we [[came]] home at night. (come)"
          ]
        },
        {
          type: "write", title: "A special day",
          prompt: "Write about a special day in the past: your last birthday, a trip or a celebration. Where did you go? What did you do, eat and see? Use *first, then, after that, finally* and at least five irregular verbs.",
          minWords: 50, maxWords: 100,
          model: "My last birthday was on March 5th. First, my mom made pancakes for breakfast. Then, my friends and I went to the movies and we saw a horror movie. After that, we ate hamburgers in a restaurant downtown. My best friend gave me a T-shirt of my favorite band. Finally, we went to my house and we had cake. It was a great day!",
          bank: ["My last birthday was…", "First,…", "Then,…", "After that,…", "Finally,…", "went / had / ate / saw / gave / made", "It was a great day!"],
          checklist: [
            "I used at least **five** irregular verbs.",
            "I used *first, then, after that, finally*.",
            "I didn't use *-ed* with irregular verbs.",
            "I said how the day was."
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
            "What did you do on your birthday?",
            "We went to a restaurant.",
            "My parents gave me a new phone.",
            "We ate cake and sang songs.",
            "I had a great party.",
            "Where did you go last summer?"
          ]
        },
        {
          type: "speak", title: "My best day",
          prompt: "Record yourself telling the story of one of the best days of your life. Use sequence words and irregular verbs.",
          language: ["One of the best days of my life was…", "First,…", "Then,…", "After that,…", "Finally,…", "It was the best day because…"],
          seconds: 75,
          checklist: ["tell the story in order?", "use five irregular verbs?", "say why it was special?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use common irregular past verbs.", review: "Explanation: irregular verbs; Quick check" },
    { can: "I can make negatives with *didn't* + base verb.", review: "Explanation: negatives and questions" },
    { can: "I can ask *Where did you go? What did you get?*", review: "Writing activity 1" },
    { can: "I can use *first, then, after that, finally*.", review: "Explanation: telling a story" },
    { can: "I can understand a short story in the past.", review: "Listening and Reading" },
    { can: "I can write about a special day in the past.", review: "Writing activity 3" }
  ]
};
