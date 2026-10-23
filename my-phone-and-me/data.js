window.UNIT = {
  slug: "my-phone-and-me",
  number: 25,
  title: "My Phone and Me",
  level: "A1",
  minutes: 50,
  speakers: { "Tania": "f", "Mr. Ruiz": "m", "Researcher": "f", "Alan": "m", "Rocío": "f", A: "f", B: "m" },
  focus: ["technology: apps, messages, charger…", "Wh- questions: What, Where, When, Who, How long…?", "do you / does he in questions", "How many hours a day…?", "online / offline"],

  presentation: {
    scene: "📱💬🎮🔋",
    situation: "Tania's grandpa, Mr. Ruiz, has a new smartphone. He asks Tania lots of questions about how she uses her phone.",
    warmup: {
      prompt: "What do you do with your phone? Choose all.",
      options: ["send messages", "make calls", "take photos", "watch videos", "play games", "listen to music", "use social media", "read the news", "study", "shop online"],
      response: "Thanks! In this unit you'll learn to ask and answer questions about technology and habits."
    },
    dialogueTitle: "Grandpa's new phone",
    dialogue: [
      { who: "Mr. Ruiz", line: "Tania, *what do you do* on your phone all day?" },
      { who: "Tania", line: "Lots of things, Grandpa! I send messages, watch videos and listen to music." },
      { who: "Mr. Ruiz", line: "*Who do you send* messages to?" },
      { who: "Tania", line: "My friends and my classmates. And you! *How often do you check* your messages?" },
      { who: "Mr. Ruiz", line: "Once a day, in the morning. *How many hours a day do you use* your phone?" },
      { who: "Tania", line: "Hmm… about five hours. Is that bad?" },
      { who: "Mr. Ruiz", line: "That's a lot! *When do you study*?" },
      { who: "Tania", line: "In the afternoon. But I use apps to study too! *What apps does* Grandma *use*?" },
      { who: "Mr. Ruiz", line: "Only WhatsApp. She sends me photos of her plants every day!" }
    ]
  },

  objectives: [
    "I can talk about how I use my phone and the internet.",
    "I can ask Wh- questions in the present simple.",
    "I can use *do* and *does* in questions correctly.",
    "I can ask *How many hours…? How often…? How long…?*"
  ],

  explanation: {
    vocabTitle: "Technology",
    vocab: [
      { word: "smartphone", icon: "📱" }, { word: "app", icon: "🧩" }, { word: "message", icon: "💬" },
      { word: "send", icon: "📤" }, { word: "download", icon: "⬇️" }, { word: "charger", icon: "🔌" },
      { word: "battery", icon: "🔋" }, { word: "Wi-Fi", icon: "📶" }, { word: "password", icon: "🔐" },
      { word: "social media", icon: "👍" }, { word: "post a photo", icon: "🖼️" }, { word: "video call", icon: "🎥" },
      { word: "online", icon: "🌐" }, { word: "offline", icon: "📴" }, { word: "screen time", icon: "⏳" }
    ],
    grammar: [
      {
        title: "Wh- questions in the present simple",
        head: ["Wh- word", "do / does", "subject", "verb…?"],
        rows: [
          ["*What*", "*do*", "you", "do on your phone?"],
          ["*Where*", "*do*", "they", "study?"],
          ["*When*", "*does*", "she", "check her messages?"],
          ["*Who*", "*do*", "you", "send messages to?"],
          ["*What apps*", "*does*", "your grandma", "use?"]
        ],
        note: "Use *does* with *he, she, it* and a singular name. The verb has no *-s*: *What does she use?*"
      },
      {
        title: "How + question",
        head: ["Question", "Answer"],
        rows: [
          ["*How often* do you check your phone?", "Every ten minutes! / Once a day."],
          ["*How many hours a day* do you use it?", "About three hours."],
          ["*How long* does the battery last?", "About a day."],
          ["*How* do you go online?", "With Wi-Fi or mobile data."]
        ]
      }
    ],
    watchOut: [
      ["What you do on your phone?", "What do you do on your phone?"],
      ["Where does she studies?", "Where does she study?"],
      ["How many hours you use it?", "How many hours do you use it?"],
      ["What apps do your brother use?", "What apps does your brother use?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *do* or *does*.",
      items: [
        "What [[do]] you do on your phone?",
        "Where [[does]] your sister study?",
        "How often [[do]] your parents call you?",
        "What apps [[does]] Grandpa use?",
        "When [[do]] we have the English test?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A researcher interviews two students about their screen time. Listen.",
      title: "Screen time survey",
      script: [
        { who: "Researcher", line: "Hi, Alan. How many hours a day do you use your phone?" },
        { who: "Alan", line: "About six hours. I play games a lot, especially at night." },
        { who: "Researcher", line: "When do you turn off your phone?" },
        { who: "Alan", line: "Never! I sleep with it next to my bed." },
        { who: "Researcher", line: "OK. Thanks. And you, Rocío? What do you use your phone for?" },
        { who: "Rocío", line: "Mostly for music and video calls with my family. They live in Veracruz." },
        { who: "Researcher", line: "How often do you call them?" },
        { who: "Rocío", line: "Every Sunday. And I don't use social media. I think it's a waste of time." },
        { who: "Researcher", line: "How many hours a day?" },
        { who: "Rocío", line: "Only about two hours. I read real books too!" }
      ],
      activities: [
        {
          type: "sort", title: "Alan or Rocío?",
          prompt: "Sort the information.",
          bins: ["Alan", "Rocío"],
          items: [
            { text: "about six hours a day", bin: 0 }, { text: "plays games at night", bin: 0 }, { text: "never turns off the phone", bin: 0 },
            { text: "video calls with family", bin: 1 }, { text: "doesn't use social media", bin: 1 }, { text: "about two hours a day", bin: 1 }, { text: "reads books", bin: 1 }
          ]
        },
        {
          type: "match", title: "Questions and answers",
          prompt: "Match the question with Rocío's answer.",
          pairs: [
            ["What do you use your phone for?", "For music and video calls."],
            ["Where does your family live?", "In Veracruz."],
            ["How often do you call them?", "Every Sunday."],
            ["How many hours a day do you use it?", "About two."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a student magazine.",
      title: "A week offline",
      text: [
        { author: "Student Life", body: "Paulina, 17, is from Puebla. Every day she uses her phone for about seven hours. This month, her teacher has an idea: a week offline! For seven days, Paulina's class doesn't use phones after school." },
        { author: "Student Life", body: "What does Paulina do in the afternoon this week? She reads, plays basketball and cooks with her mom. \"The first two days are very difficult,\" she says. \"But now I sleep better and I talk to my family more.\" Her friends communicate with notes in class! After the offline week, Paulina wants to use her phone less. Her plan: turn it off at nine every night." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "Paulina uses her phone for about seven hours a day.", a: true },
            { s: "The idea for the offline week is from her mom.", a: false },
            { s: "Now Paulina plays basketball in the afternoon.", a: true },
            { s: "After the week, Paulina wants to stop using her phone.", a: false },
            { s: "Her plan is to turn off her phone at nine every night.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Answer with information from the text. Write short answers.",
          items: [
            { q: "Where is Paulina from?", a: ["Puebla", "She's from Puebla.", "She is from Puebla.", "From Puebla."] },
            { q: "Who does she cook with?", a: ["her mom", "With her mom.", "She cooks with her mom."] },
            { q: "How do her friends communicate in class?", a: ["with notes", "With notes.", "They communicate with notes."] },
            { q: "What time does she want to turn off her phone?", a: ["at nine", "At nine.", "At 9.", "At nine o'clock.", "She wants to turn it off at nine."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice making questions, then write about your digital habits.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "How often do you check your messages?" },
            { a: "What apps does your mom use?" },
            { a: "Where do you charge your phone?" },
            { a: "Who do you call every day?" },
            { a: "How many hours do you play games?" }
          ]
        },
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write a question for the words in *italics*.",
          items: [
            { q: "I watch videos *in the evening*. (When…?)", a: ["When do you watch videos?"] },
            { q: "She uses *Instagram*. (What app…?)", a: ["What app does she use?"] },
            { q: "They study *in the library*. (Where…?)", a: ["Where do they study?"] },
            { q: "He calls *his girlfriend* every night. (Who…?)", a: ["Who does he call every night?", "Who does he call?"] }
          ]
        },
        {
          type: "write", title: "My digital life",
          prompt: "Write about how you use your phone and the internet. How many hours a day? What apps? When and where? Who do you talk to? Is it a problem? End with two questions for a classmate.",
          minWords: 45, maxWords: 90,
          model: "I use my phone for about four hours a day. I use WhatsApp to talk to my friends and my family, and I watch videos on YouTube. I study with an English app on the bus. I don't play games. At night I charge my phone in the kitchen, not in my bedroom. My question for you: How many hours a day do you use your phone? What apps do you use?",
          bank: ["I use my phone for about … hours a day.", "I use … to…", "In the morning / at night I…", "I don't…", "My mom / friend uses…", "How many hours…?", "What apps do you…?"],
          checklist: [
            "I described **what, when** and **where** I use my phone.",
            "I wrote one sentence about another person (*he / she uses*).",
            "I wrote two Wh- questions with *do* / *does*.",
            "I used *How many* or *How often*."
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
            "How many hours a day do you use your phone?",
            "What apps do you use?",
            "I send messages to my friends.",
            "Where do you charge your phone?",
            "When does she check her messages?",
            "I turn off my phone at night."
          ]
        },
        {
          type: "speak", title: "A day with my phone",
          prompt: "Record yourself describing a normal day with your phone: when you use it, what for, and how many hours. Say if you want to change something.",
          language: ["In the morning I…", "I use … to…", "I don't…", "In total, about … hours.", "I want to use it less / more."],
          seconds: 60,
          checklist: ["describe the whole day?", "use technology words?", "use the present simple correctly?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use technology words: app, charger, message…", review: "Explanation: vocabulary" },
    { can: "I can ask Wh- questions in the present simple.", review: "Explanation: Wh- questions; Writing activity 2" },
    { can: "I can choose *do* or *does* in questions.", review: "Explanation; Quick check" },
    { can: "I can ask *How many hours…? How often…?*", review: "Explanation: How + question" },
    { can: "I can understand a text about digital habits.", review: "Reading: a week offline" },
    { can: "I can write about how I use my phone.", review: "Writing activity 3" }
  ]
};
