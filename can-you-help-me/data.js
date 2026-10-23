window.UNIT = {
  slug: "can-you-help-me",
  number: 43,
  title: "Can You Help Me?",
  level: "A1",
  minutes: 50,
  speakers: { "Lin": "f", "Hugo": "m", "Neighbor": "f", "Iván": "m", A: "f", B: "m" },
  focus: ["asking for help: Can you…? Could you…?", "offering help: Can I help you? Let me…", "Sure! / Sorry, I can't.", "Excuse me / Sorry / Thank you so much", "everyday problems"],

  presentation: {
    scene: "🙋📦🔑🤝",
    situation: "Lin is moving into a new apartment. She has a lot of boxes and her neighbor Hugo offers to help.",
    warmup: {
      prompt: "When do you need help from other people? Choose all.",
      options: ["moving house", "with homework", "with a computer", "carrying bags", "finding a place", "cooking", "fixing a bike", "with a language", "opening a door", "taking a photo"],
      response: "We all need help sometimes! In this unit you'll learn to ask for help and offer help politely."
    },
    dialogueTitle: "Moving day",
    dialogue: [
      { who: "Hugo", line: "Hi! You're the new neighbor, right? *Can I help you* with those boxes?" },
      { who: "Lin", line: "Oh, yes, please! *Thank you so much*. They're very heavy." },
      { who: "Hugo", line: "No problem. *Let me* take this big one." },
      { who: "Lin", line: "Thanks. *Could you open* the door for me, please? My keys are in my pocket." },
      { who: "Hugo", line: "*Sure*. Here you are. Where do you want the boxes?" },
      { who: "Lin", line: "In the kitchen, please. Oh, and *can you tell me* the Wi-Fi company here?" },
      { who: "Hugo", line: "*Sorry, I don't know*. But *ask* Doña Elena on the first floor. She knows everything!" },
      { who: "Lin", line: "Great. *You're very kind*. *Would you like* a coffee later?" }
    ]
  },

  objectives: [
    "I can ask for help politely with *Can you…? / Could you…?*",
    "I can offer help with *Can I help you? / Let me…*",
    "I can accept, refuse and say thank you.",
    "I can use *Excuse me* and *Sorry* correctly."
  ],

  explanation: {
    vocabTitle: "Everyday help",
    vocab: [
      { word: "carry", icon: "📦" }, { word: "open / close", icon: "🚪" }, { word: "lend", icon: "🤲" },
      { word: "borrow", icon: "✋" }, { word: "fix", icon: "🔧" }, { word: "explain", icon: "💬" },
      { word: "show", icon: "👉" }, { word: "take a photo", icon: "📸" }, { word: "heavy", icon: "🏋️" },
      { word: "broken", icon: "💔" }, { word: "lost", icon: "❓" }, { word: "neighbor", icon: "🏠" },
      { word: "Excuse me", icon: "🙋" }, { word: "Sorry", icon: "😔" }, { word: "Thank you so much", icon: "🙏" }
    ],
    grammar: [
      {
        title: "Asking for help",
        head: ["Request", "Answer: yes", "Answer: no"],
        rows: [
          ["*Can you* help me, please?", "*Sure!* / *Of course!*", "*Sorry, I can't. I'm busy.*"],
          ["*Could you* open the door, please?", "*No problem.*", "*I'm sorry, I can't right now.*"],
          ["*Can you* tell me where the bank is?", "*Yes, it's over there.*", "*Sorry, I don't know.*"],
          ["*Can I borrow* your pen?", "*Here you are.*", "*Sorry, I need it.*"]
        ],
        note: "*Could you…?* is more polite than *Can you…?* — use it with strangers and teachers. Don't forget *please*!"
      },
      {
        title: "Offering help",
        head: ["Offer", "Answer"],
        rows: [
          ["*Can I help you?*", "*Yes, please. Thank you!* / *No, thanks. I'm OK.*"],
          ["*Let me* carry that.", "*Thanks, that's very kind.*"],
          ["*Do you need* help?", "*Yes, please!*"],
          ["*Would you like* some help?", "*That would be great!*"]
        ]
      },
      {
        title: "Excuse me or Sorry?",
        head: ["Phrase", "Use"],
        rows: [
          ["*Excuse me*", "*before* you ask or interrupt: *Excuse me, can you help me?*"],
          ["*Sorry*", "*after* a small mistake: *Oh, sorry!* / to say no politely"],
          ["*Pardon? / Sorry?*", "you didn't hear: *Sorry? Can you repeat that?*"]
        ]
      }
    ],
    watchOut: [
      ["Can you to help me?", "Can you help me?"],
      ["Can you borrow me your pen?", "Can you lend me your pen? / Can I borrow your pen?"],
      ["Sorry, where is the station? (to start)", "Excuse me, where is the station?"],
      ["Help me with this!", "Could you help me with this, please?"]
    ],
    check: {
      type: "sort", title: "Quick check",
      prompt: "Is it asking for help or offering help?",
      bins: ["Asking for help", "Offering help"],
      items: [
        { text: "Could you open the door?", bin: 0 }, { text: "Can you help me, please?", bin: 0 }, { text: "Can I borrow your phone?", bin: 0 },
        { text: "Can I help you?", bin: 1 }, { text: "Let me carry that.", bin: 1 }, { text: "Do you need help?", bin: 1 }, { text: "Would you like some help?", bin: 1 }
      ]
    }
  },

  skills: {
    listening: {
      intro: "Iván asks different people for help on a busy day. Listen to the three short conversations.",
      title: "A busy day",
      script: [
        { who: "Iván", line: "Excuse me, could you take a photo of us, please?" },
        { who: "Neighbor", line: "Sure! Smile! … Here you are." },
        { who: "Iván", line: "Thank you so much!" },
        { who: "Iván", line: "Lin, can you lend me your charger? My phone is dead." },
        { who: "Lin", line: "Sorry, I can't. I haven't got it with me. Ask Hugo." },
        { who: "Iván", line: "Hugo, can I borrow your charger, please?" },
        { who: "Hugo", line: "Of course. Here you are. Can you give it back before five? I need it." },
        { who: "Iván", line: "No problem. Thanks!" },
        { who: "Iván", line: "Excuse me, can you help me? I'm lost. Where's the post office?" },
        { who: "Neighbor", line: "Let me show you. It's very near. Follow me!" }
      ],
      activities: [
        {
          type: "match", title: "What does Iván need?",
          prompt: "Match the request with the result.",
          pairs: [
            ["a photo", "A woman takes it."],
            ["Lin's charger", "Lin hasn't got it."],
            ["Hugo's charger", "Hugo lends it until five."],
            ["the post office", "A woman shows him the way."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Iván's phone battery is dead.", a: true },
            { s: "Lin lends Iván her charger.", a: false },
            { s: "Iván needs to give the charger back before five.", a: true },
            { s: "The post office is very far.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the messages on a neighborhood help board.",
      title: "Neighbors helping neighbors",
      text: [
        { author: "Doña Elena, apt. 1A", body: "Hello, neighbors! Can anyone help me with my computer? I want to make video calls with my grandchildren, but I don't understand the app. I can pay with homemade cookies! 🍪" },
        { author: "Majo, apt. 3C", body: "Could someone water my plants next week, from Monday to Friday? I'm visiting my parents in Mérida. I can leave the key with you. Thank you!" },
        { author: "Hugo, apt. 2B", body: "Do you need help with English homework? I'm an English student at BUAP. I can help children on Saturday mornings, for free. Send me a message." }
      ],
      activities: [
        {
          type: "sort", title: "Asking or offering?",
          prompt: "Is the person asking for help or offering help?",
          bins: ["Asking for help", "Offering help"],
          items: [
            { text: "Doña Elena", bin: 0 }, { text: "Majo", bin: 0 },
            { text: "Hugo", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with one word.",
          items: [
            "Doña Elena wants to make video [[calls]].",
            "She can pay with homemade [[cookies]].",
            "Majo is visiting her parents in [[Mérida|Merida]].",
            "Majo can leave the [[key]] with a neighbor.",
            "Hugo can help children on [[Saturday]] mornings."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice polite requests, then write a message for the help board.",
      activities: [
        {
          type: "rewrite", title: "Make it polite",
          prompt: "Rewrite with *Could you…, please?*",
          items: [
            { q: "Open the window.", a: ["Could you open the window, please?"] },
            { q: "Help me with my bags.", a: ["Could you help me with my bags, please?"] },
            { q: "Repeat that.", a: ["Could you repeat that, please?"] },
            { q: "Tell me the time.", a: ["Could you tell me the time, please?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Can I help you with that?" },
            { a: "Could you lend me your umbrella?" },
            { a: "Let me carry your bag." },
            { a: "Sorry, I can't right now." },
            { a: "Thank you so much for your help!" }
          ]
        },
        {
          type: "write", title: "A message for the help board",
          prompt: "Write two short messages for the neighborhood help board: one asking for help (say what, when and why) and one offering help (say what you can do and when).",
          minWords: 45, maxWords: 90,
          model: "1) Hi neighbors! Could someone feed my cat on Saturday and Sunday? I'm going to a wedding in Tlaxcala. Her name is Luna and she's very friendly. Thank you so much! — Ana, 4B. 2) Hello! Do you need help with your phone or computer? I can help on weekday evenings after six. It's free! Send me a message. — Ana, 4B",
          bank: ["Could someone…?", "Can anyone help me with…?", "I can… / I can help with…", "on Saturday / after six", "because…", "Thank you so much!", "Send me a message."],
          checklist: [
            "I asked for help with *Could someone…? / Can anyone…?*",
            "I offered help with *I can…*",
            "I said **when**.",
            "I said thank you."
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
            "Excuse me, can you help me?",
            "Could you open the door, please?",
            "Can I borrow your pen?",
            "Let me carry that bag.",
            "Sorry, I can't right now.",
            "Thank you so much!"
          ]
        },
        {
          type: "speak", title: "A favor",
          prompt: "Record a voice message to a friend or neighbor asking for a favor. Explain the problem, ask politely and offer something in return.",
          language: ["Hi…, it's…", "I've got a problem.", "Could you…?", "Can I borrow…?", "I can … for you.", "Thank you so much!"],
          seconds: 45,
          checklist: ["explain the problem?", "ask politely?", "offer something back?", "say thank you?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can ask for help with *Can you…? / Could you…?*", review: "Explanation: asking for help; Writing activity 1" },
    { can: "I can offer help with *Can I help you? / Let me…*", review: "Explanation: offering help; Quick check" },
    { can: "I can accept or refuse help politely.", review: "Presentation; Listening" },
    { can: "I can use *borrow* and *lend* correctly.", review: "Explanation: watch out!" },
    { can: "I can use *Excuse me* and *Sorry* correctly.", review: "Explanation: Excuse me or Sorry?" },
    { can: "I can write a message asking for or offering help.", review: "Writing activity 3" }
  ]
};
