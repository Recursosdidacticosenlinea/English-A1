window.UNIT = {
  slug: "sorry-im-late",
  number: 45,
  title: "Sorry, I'm Late!",
  level: "A1",
  minutes: 50,
  speakers: { "Ms. Reyes": "f", "Alan": "m", "Mariana": "f", "Boss": "m", "Ximena": "f", A: "m", B: "f" },
  focus: ["apologizing: I'm sorry. / Sorry about that.", "giving reasons with because", "accepting apologies: That's OK. / Don't worry.", "and / but / so", "excuses: traffic, alarm, bus"],

  presentation: {
    scene: "⏰🏃‍♂️🚌😅",
    situation: "It's 8:20. Alan arrives late to his English class. The class starts at eight.",
    warmup: {
      prompt: "Why are people late? Choose the reasons you know.",
      options: ["traffic", "the bus is late", "the alarm doesn't ring", "I'm sick", "I can't find my keys", "it's raining", "I'm tired", "my phone is dead", "I'm lost", "I forget"],
      response: "We all have bad days! In this unit you'll learn to apologize and give reasons."
    },
    dialogueTitle: "Late for class",
    dialogue: [
      { who: "Alan", line: "Excuse me, Ms. Reyes. *I'm sorry I'm late*." },
      { who: "Ms. Reyes", line: "Good morning, Alan. *What's the problem*?" },
      { who: "Alan", line: "I'm late *because* there's a lot of traffic on Reforma. And the bus is very slow." },
      { who: "Ms. Reyes", line: "Hmm. You're late every Monday, Alan." },
      { who: "Alan", line: "*I know. I'm really sorry*. My alarm doesn't work, *so* I wake up late." },
      { who: "Ms. Reyes", line: "*OK, that's fine*. But please buy a new alarm clock! Sit down, we're on page 30." },
      { who: "Alan", line: "*Thank you*. *It won't happen again*!" }
    ]
  },

  objectives: [
    "I can apologize in different situations.",
    "I can give reasons and excuses with *because*.",
    "I can accept an apology politely.",
    "I can connect ideas with *and, but* and *so*."
  ],

  explanation: {
    vocabTitle: "Problems and excuses",
    vocab: [
      { word: "late", icon: "⏰" }, { word: "traffic", icon: "🚗" }, { word: "alarm clock", icon: "⏰" },
      { word: "miss the bus", icon: "🚌" }, { word: "forget", icon: "🤦" }, { word: "lose", icon: "🔍" },
      { word: "break", icon: "💔" }, { word: "spill", icon: "☕" }, { word: "dead battery", icon: "🪫" },
      { word: "homework", icon: "📝" }, { word: "meeting", icon: "👥" }, { word: "apologize", icon: "🙇" },
      { word: "excuse", icon: "🗯️" }, { word: "mistake", icon: "❌" }, { word: "on time", icon: "✅" }
    ],
    grammar: [
      {
        title: "Apologizing and answering",
        head: ["Apologize", "Accept"],
        rows: [
          ["*I'm sorry I'm late.*", "*That's OK.* / *No problem.*"],
          ["*I'm really sorry.*", "*Don't worry.*"],
          ["*Sorry about that!*", "*It doesn't matter.*"],
          ["*I'm sorry, but I can't…*", "*Never mind.* / *Maybe next time.*"]
        ],
        note: "Use *really* or *so* to make it stronger: *I'm so sorry!* After the apology, give a reason."
      },
      {
        title: "And, but, so, because",
        head: ["Word", "Use", "Example"],
        rows: [
          ["*and*", "add information", "The bus is late *and* it's raining."],
          ["*but*", "contrast", "I want to come, *but* I'm sick."],
          ["*so*", "result", "My alarm doesn't work, *so* I wake up late."],
          ["*because*", "reason", "I'm late *because* there's a lot of traffic."]
        ],
        note: "*because* = the reason (¿por qué?). *so* = the result (por eso)."
      },
      {
        title: "Common reasons",
        head: ["Problem", "Sentence"],
        rows: [
          ["transport", "*The bus is late.* / *There's a lot of traffic.*"],
          ["phone", "*My phone is dead.* / *I haven't got my phone.*"],
          ["memory", "*My homework is at home.* / *I can't find my keys.*"],
          ["health", "*I don't feel well.* / *I've got a headache.*"]
        ]
      }
    ],
    watchOut: [
      ["Sorry for the late.", "Sorry I'm late."],
      ["I'm late why the bus is slow.", "I'm late because the bus is slow."],
      ["I'm tired, because I go to bed. (result)", "I'm tired, so I go to bed."],
      ["I'm sorry. – Is OK.", "That's OK. / It's OK."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *and, but, so* or *because*.",
      bank: ["and", "but", "so", "because"],
      items: [
        "I'm late [[because]] the bus is slow.",
        "My phone is dead, [[so]] I can't call you.",
        "I want to go to the party, [[but]] I'm very tired.",
        "It's raining [[and]] there's a lot of traffic.",
        "I can't do my homework [[because]] my computer doesn't work."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Three short situations: people apologize and give reasons. Listen.",
      title: "Sorry!",
      script: [
        { who: "Mariana", line: "Hi, Ximena. I'm so sorry, but I can't go to the movies tonight. My little brother is sick and my parents aren't at home, so I have to stay with him." },
        { who: "Ximena", line: "Oh, don't worry! Maybe next weekend?" },
        { who: "Boss", line: "Alan, the meeting starts at nine. It's nine fifteen!" },
        { who: "Alan", line: "I'm really sorry. The bus is very slow today and there's a lot of traffic." },
        { who: "Boss", line: "OK, but please take an earlier bus." },
        { who: "Ximena", line: "Oh no! I'm sorry! Your coffee is on your notebook!" },
        { who: "Mariana", line: "That's OK. It doesn't matter. It's an old notebook." }
      ],
      activities: [
        {
          type: "match", title: "What's the problem?",
          prompt: "Match the person with the reason or problem.",
          pairs: [
            ["Mariana can't go to the movies", "because her brother is sick."],
            ["Alan is late for the meeting", "because the bus is slow."],
            ["Ximena says sorry", "because there's coffee on Mariana's notebook."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Mariana's parents are at home.", a: false },
            { s: "Ximena accepts Mariana's apology.", a: true },
            { s: "The meeting starts at nine fifteen.", a: false },
            { s: "Mariana is angry about the notebook.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three messages in a student group chat.",
      title: "Group project chat",
      text: [
        { author: "Ximena · 6:05 p.m.", body: "Hi everyone! Sorry, but I can't go to the library at seven. My mom needs the car, so I haven't got transport. Can we meet online?" },
        { author: "Alan · 6:12 p.m.", body: "No problem, Xime. I'm sorry too — I haven't got my part of the project. My laptop doesn't work! I can finish it tomorrow morning." },
        { author: "Mariana · 6:20 p.m.", body: "Don't worry, guys. Let's have a video call at eight. I've got the presentation, but it's not finished. See you online!" }
      ],
      activities: [
        {
          type: "sort", title: "Problem or solution?",
          prompt: "Sort the sentences.",
          bins: ["Problem", "Solution"],
          items: [
            { text: "My mom needs the car.", bin: 0 }, { text: "My laptop doesn't work.", bin: 0 }, { text: "It's not finished.", bin: 0 },
            { text: "Can we meet online?", bin: 1 }, { text: "I can finish it tomorrow morning.", bin: 1 }, { text: "Let's have a video call at eight.", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Ximena has got a car tonight.", a: false },
            { s: "Alan's laptop is broken.", a: true },
            { s: "Mariana is angry with her friends.", a: false },
            { s: "They meet in the library at eight.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice connectors, then write an apology message.",
      activities: [
        {
          type: "rewrite", title: "Join the sentences",
          prompt: "Join the two sentences with the word in brackets.",
          items: [
            { q: "I'm late. There's a lot of traffic. (because)", a: ["I'm late because there's a lot of traffic.", "I'm late because there is a lot of traffic."] },
            { q: "My phone is dead. I can't call you. (so)", a: ["My phone is dead, so I can't call you.", "My phone is dead so I can't call you."] },
            { q: "I want to help. I'm busy. (but)", a: ["I want to help, but I'm busy.", "I want to help but I'm busy."] },
            { q: "I'm tired. I've got a headache. (and)", a: ["I'm tired and I've got a headache.", "I'm tired, and I've got a headache."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I'm really sorry I'm late." },
            { a: "Don't worry, it doesn't matter." },
            { a: "My homework is at home." },
            { a: "The bus is late, so I'm late." },
            { a: "Sorry, but I can't come tonight." }
          ]
        },
        {
          type: "write", title: "An apology message",
          prompt: "You can't go to a friend's birthday party. Write a message: apologize, explain the reason, say something nice, and suggest another plan. Use *because, so, but*.",
          minWords: 40, maxWords: 80,
          model: "Hi Leo! I'm so sorry, but I can't go to your party on Saturday. My grandparents are visiting from Oaxaca, so I have to stay at home with my family. I really want to celebrate with you because you're my best friend! Can we have lunch on Sunday? I've got a present for you. Happy birthday! 🎉",
          bank: ["I'm so sorry, but…", "because…", "so…", "I really want to…", "Can we…?", "How about…?", "Happy birthday!"],
          checklist: [
            "I apologized at the beginning.",
            "I gave a reason with *because* or *so*.",
            "I used *but* once.",
            "I suggested another plan."
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
            "I'm sorry I'm late.",
            "There's a lot of traffic today.",
            "My phone is dead, so I can't call you.",
            "That's OK. Don't worry.",
            "I want to go, but I'm very tired.",
            "It doesn't matter."
          ]
        },
        {
          type: "speak", title: "A voice message to my teacher",
          prompt: "Record a voice message to your teacher. You can't go to class tomorrow. Apologize, explain why and ask about the homework.",
          language: ["Good afternoon, teacher. It's…", "I'm really sorry, but…", "because…", "so…", "Can you send me…?", "Thank you."],
          seconds: 45,
          checklist: ["apologize?", "give a reason?", "ask a polite question?", "use a connector?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can apologize in different situations.", review: "Explanation: apologizing and answering" },
    { can: "I can give a reason with *because*.", review: "Explanation: and, but, so, because" },
    { can: "I can use *so* for a result.", review: "Quick check; Writing activity 1" },
    { can: "I can accept an apology politely.", review: "Listening: Sorry!" },
    { can: "I can understand messages with problems and solutions.", review: "Reading: group project chat" },
    { can: "I can write an apology message.", review: "Writing activity 3" }
  ]
};
