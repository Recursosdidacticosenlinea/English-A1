window.UNIT = {
  slug: "how-do-you-get-to-school",
  number: 36,
  title: "How Do You Get to School?",
  level: "A1",
  minutes: 50,
  speakers: { "Teacher": "f", "Beto": "m", "Lupita": "f", "Reporter": "m", "Ana": "f", A: "m", B: "f" },
  focus: ["transportation: bus, subway, bike, on foot", "by bus / by car / on foot", "How do you get to…?", "How long does it take? It takes 20 minutes.", "How far is it?"],

  presentation: {
    scene: "🚌🚲🚶‍♀️🚗",
    situation: "The teacher asks the students how they get to school for a class project about transportation.",
    warmup: {
      prompt: "How do people travel in your city? Choose all.",
      options: ["by bus", "by car", "by bike", "on foot", "by taxi", "by subway", "by motorcycle", "by train", "by plane", "by scooter"],
      response: "Good! In this unit you'll learn to talk about how you travel and how long it takes."
    },
    dialogueTitle: "Class survey",
    dialogue: [
      { who: "Teacher", line: "OK, everyone. Beto, *how do you get to school*?" },
      { who: "Beto", line: "*I come by bus*. I take two buses!" },
      { who: "Teacher", line: "Two buses! *How long does it take*?" },
      { who: "Beto", line: "*It takes about an hour*. I live very far, in Amozoc." },
      { who: "Teacher", line: "Wow. And you, Lupita?" },
      { who: "Lupita", line: "*I walk*. I come *on foot*. My house is near, *about ten minutes* from here." },
      { who: "Teacher", line: "Lucky you! *Does your brother walk* too?" },
      { who: "Lupita", line: "No, *he goes by bike*. He goes to the university. *It takes him twenty minutes*." }
    ]
  },

  objectives: [
    "I can name types of transportation.",
    "I can use *by* + transportation and *on foot*.",
    "I can ask and answer *How do you get to…?*",
    "I can ask and answer *How long does it take?*"
  ],

  explanation: {
    vocabTitle: "Transportation",
    vocab: [
      { word: "bus", icon: "🚌" }, { word: "car", icon: "🚗" }, { word: "taxi", icon: "🚕" },
      { word: "subway", icon: "🚇" }, { word: "train", icon: "🚆" }, { word: "bike", icon: "🚲" },
      { word: "motorcycle", icon: "🏍️" }, { word: "scooter", icon: "🛴" }, { word: "plane", icon: "✈️" },
      { word: "boat", icon: "⛴️" }, { word: "on foot / walk", icon: "🚶" }, { word: "bus stop", icon: "🚏" },
      { word: "traffic", icon: "🚦" }, { word: "fast", icon: "⚡" }, { word: "slow", icon: "🐢" }
    ],
    grammar: [
      {
        title: "By + transportation",
        head: ["Structure", "Example"],
        rows: [
          ["*by* + bus / car / taxi / bike / train", "I go to work *by bus*."],
          ["*on foot* (= walk)", "She goes to school *on foot*. / She *walks* to school."],
          ["*take* + the bus / a taxi", "I *take the bus* at 7:00."],
          ["*drive* / *ride* a bike", "My dad *drives* to work. I *ride my bike*."]
        ],
        note: "Say *by bus* — not *by the bus* or *in bus*. But *on foot*, not *by foot*."
      },
      {
        title: "Questions about travel",
        head: ["Question", "Answer"],
        rows: [
          ["*How do you get to* school?", "*By* bus. / *I walk.*"],
          ["*How does* she *get to* work?", "She *drives*."],
          ["*How long does it take*?", "*It takes* twenty minutes / an hour."],
          ["*How far is it*?", "*It's* five kilometers. / *It's* near / far."]
        ],
        note: "*It takes + time*: *It takes 30 minutes by bus.* *It takes me 10 minutes to walk.*"
      }
    ],
    watchOut: [
      ["I go to school in bus.", "I go to school by bus."],
      ["She goes by foot.", "She goes on foot. / She walks."],
      ["How long it takes?", "How long does it take?"],
      ["It takes me twenty minutes for arrive.", "It takes me twenty minutes to get there."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *by, on, take, takes* or *does*.",
      items: [
        "I go to work [[by]] subway.",
        "Lupita goes to school [[on]] foot.",
        "We [[take]] the bus at seven.",
        "It [[takes]] about an hour.",
        "How long [[does]] it take by bike?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio reporter asks people in Mexico City how they get to work. Listen.",
      title: "Getting to work in the big city",
      script: [
        { who: "Reporter", line: "Excuse me, how do you get to work?" },
        { who: "Ana", line: "I take the subway and then I walk. It takes about forty-five minutes." },
        { who: "Reporter", line: "Is the subway crowded?" },
        { who: "Ana", line: "Yes, very! In the morning it's full of people. But it's cheap and fast." },
        { who: "Reporter", line: "Thank you. And you, sir?" },
        { who: "Man", line: "I drive. My office is far, about twenty kilometers. With the traffic it takes an hour and a half!" },
        { who: "Reporter", line: "That's a long time." },
        { who: "Man", line: "Yes. My wife goes by bike. Her office is near, only fifteen minutes. She's very happy!" }
      ],
      activities: [
        {
          type: "match", title: "How do they get to work?",
          prompt: "Match the person with the information.",
          pairs: [
            ["Ana", "subway and on foot · 45 minutes"],
            ["the man", "by car · an hour and a half"],
            ["the man's wife", "by bike · 15 minutes"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The subway is crowded in the morning.", a: true },
            { s: "Ana says the subway is expensive.", a: false },
            { s: "The man's office is twenty kilometers away.", a: true },
            { s: "There isn't much traffic.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read about how students around the world get to school.",
      title: "The road to school",
      text: [
        { author: "Netherlands", body: "In the Netherlands, most children go to school by bike. There are special bike roads everywhere. It usually takes ten or fifteen minutes. Even when it rains, they ride their bikes!" },
        { author: "Japan", body: "Many Japanese children walk to school alone or with friends, from the age of six. In big cities, older students take the train. It's very safe." },
        { author: "Philippines", body: "On some islands in the Philippines, students go to school by boat. Sometimes it takes an hour. When the weather is bad, there isn't any school!" }
      ],
      activities: [
        {
          type: "sort", title: "Which country?",
          prompt: "Sort the information.",
          bins: ["Netherlands", "Japan", "Philippines"],
          items: [
            { text: "by bike", bin: 0 }, { text: "special roads", bin: 0 }, { text: "ride even in the rain", bin: 0 },
            { text: "walk from age six", bin: 1 }, { text: "older students take the train", bin: 1 },
            { text: "by boat", bin: 2 }, { text: "no school in bad weather", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers.",
          items: [
            { q: "How do Dutch children get to school?", a: ["By bike.", "by bike", "They go by bike.", "They ride their bikes."] },
            { q: "How long does it usually take them?", a: ["Ten or fifteen minutes.", "10 or 15 minutes.", "It takes ten or fifteen minutes."] },
            { q: "How do older students in big Japanese cities get to school?", a: ["By train.", "by train", "They take the train."] },
            { q: "How long can the boat trip take?", a: ["An hour.", "an hour", "One hour.", "It takes an hour."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice questions about transportation, then write about your journey.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "How do you get to work?" },
            { a: "I go to school by bus." },
            { a: "It takes about thirty minutes." },
            { a: "How long does it take by car?" },
            { a: "My sister walks to the university." }
          ]
        },
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write the question for each answer.",
          items: [
            { q: "I go by subway. (How…?)", a: ["How do you get to work?", "How do you get to school?", "How do you go to work?", "How do you go to school?", "How do you get there?"] },
            { q: "It takes twenty minutes. (How long…?)", a: ["How long does it take?"] },
            { q: "It's three kilometers. (How far…?)", a: ["How far is it?"] },
            { q: "She drives. (How… she…?)", a: ["How does she get to work?", "How does she get to school?", "How does she go to work?", "How does she get there?"] }
          ]
        },
        {
          type: "write", title: "My journey",
          prompt: "Write about how you get to school or work. Say what transportation you use, how long it takes, what time you leave, and if you like it. Then write about how one family member gets to work.",
          minWords: 40, maxWords: 80,
          model: "I live in Cholula and I study at BUAP. I go to the university by bus. I leave home at six thirty and it takes about forty minutes. The bus is crowded, but it's cheap. I listen to music on the way. My mom works in a hospital near our house, so she goes on foot. It only takes her ten minutes!",
          bank: ["I go to … by…", "I take the… / I walk.", "I leave home at…", "It takes about…", "It's cheap / fast / slow.", "My … goes by…", "It takes him / her…"],
          checklist: [
            "I used *by* + transportation or *on foot*.",
            "I used *It takes…* for time.",
            "I wrote about another person (*he / she goes*).",
            "I gave my opinion: *it's fast / slow / crowded*."
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
            "How do you get to school?",
            "I go to school by bus.",
            "My sister walks to work.",
            "How long does it take?",
            "It takes about twenty minutes.",
            "He goes to the university by bike."
          ]
        },
        {
          type: "speak", title: "Transportation in my city",
          prompt: "Record yourself describing transportation in your city: what people use, what's fast or slow, cheap or expensive, and what you use most.",
          language: ["In my city, people go by…", "The … is fast / slow.", "It's cheap / expensive.", "I usually go by…", "It takes…"],
          seconds: 60,
          checklist: ["name at least four types of transportation?", "use *by*?", "use adjectives?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name types of transportation.", review: "Explanation: vocabulary" },
    { can: "I can use *by* + transportation and *on foot*.", review: "Explanation: by + transportation; Quick check" },
    { can: "I can ask and answer *How do you get to…?*", review: "Explanation: questions about travel" },
    { can: "I can use *It takes…* to say how long.", review: "Writing activity 2" },
    { can: "I can understand people describing their journey.", review: "Listening and Reading" },
    { can: "I can write about how I get to school or work.", review: "Writing activity 3" }
  ]
};
