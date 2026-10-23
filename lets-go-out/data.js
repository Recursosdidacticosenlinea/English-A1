window.UNIT = {
  slug: "lets-go-out",
  number: 24,
  title: "Let's Go Out!",
  level: "A1",
  minutes: 50,
  speakers: { "Fernanda": "f", "Beto": "m", "Carla": "f", "Omar": "m", A: "f", B: "m" },
  focus: ["Let's… / How about…? / Why don't we…?", "Would you like to…?", "Yes, I'd love to. / Sorry, I can't.", "accepting and refusing politely", "places to go: concert, fair, museum"],

  presentation: {
    scene: "🎉🎡🎶📲",
    situation: "It's Friday afternoon. Fernanda calls her friend Beto to make plans for the weekend.",
    warmup: {
      prompt: "What do you like doing on weekends? Choose all.",
      options: ["go to the movies", "go to a concert", "eat out", "go to a party", "visit a museum", "go to the park", "go shopping", "stay at home", "go dancing", "visit family"],
      response: "Fun! In this unit you'll learn to make suggestions, invite friends and accept or refuse."
    },
    dialogueTitle: "Weekend plans",
    dialogue: [
      { who: "Fernanda", line: "Hi, Beto! *Would you like to* go to the Puebla fair on Saturday?" },
      { who: "Beto", line: "*Sorry, I can't*. I work on Saturdays." },
      { who: "Fernanda", line: "Oh no. *How about* Sunday?" },
      { who: "Beto", line: "Sunday is good! *What time*?" },
      { who: "Fernanda", line: "*Let's meet* at five, at the entrance." },
      { who: "Beto", line: "Hmm, it's very hot at five. *Why don't we* go at seven? The lights are beautiful at night." },
      { who: "Fernanda", line: "*Good idea!* And *let's invite* Carla too." },
      { who: "Beto", line: "*Sure!* I'll call her. See you on Sunday!" }
    ]
  },

  objectives: [
    "I can make suggestions with *Let's…, How about…?, Why don't we…?*",
    "I can invite someone with *Would you like to…?*",
    "I can accept and refuse an invitation politely.",
    "I can agree on a day, time and place to meet."
  ],

  explanation: {
    vocabTitle: "Places and plans",
    vocab: [
      { word: "concert", icon: "🎤" }, { word: "fair", icon: "🎡" }, { word: "museum", icon: "🏛️" },
      { word: "movie theater", icon: "🎬" }, { word: "party", icon: "🎉" }, { word: "restaurant", icon: "🍕" },
      { word: "bowling", icon: "🎳" }, { word: "picnic", icon: "🧺" }, { word: "soccer game", icon: "🏟️" },
      { word: "exhibition", icon: "🖼️" }, { word: "invitation", icon: "💌" }, { word: "ticket", icon: "🎟️" },
      { word: "entrance", icon: "🚪" }, { word: "free", icon: "🆓" }, { word: "busy", icon: "📅" }
    ],
    grammar: [
      {
        title: "Making suggestions",
        head: ["Structure", "Example"],
        rows: [
          ["*Let's* + verb", "*Let's go* to the fair."],
          ["*How about* + noun / verb-ing?", "*How about* Sunday? / *How about going* at seven?"],
          ["*Why don't we* + verb?", "*Why don't we invite* Carla?"],
          ["*Let's not* + verb", "*Let's not go* by car. There's a lot of traffic."]
        ],
        note: "After *How about* use a noun or *-ing*: *How about dancing?* After *Let's* and *Why don't we* use the base verb."
      },
      {
        title: "Inviting · accepting · refusing",
        head: ["Invite", "Accept 😊", "Refuse politely 😔"],
        rows: [
          ["*Would you like to* come to my party?", "*Yes, I'd love to!*", "*Sorry, I can't. I'm busy.*"],
          ["*Do you want to* go to the movies?", "*Sure! / Great idea!*", "*I'd love to, but I have to study.*"],
          ["*Are you free* on Friday?", "*Yes, I am.*", "*No, sorry. Maybe next time?*"]
        ],
        note: "When you refuse, give a reason: *Sorry, I can't. I work on Saturdays.*"
      },
      {
        title: "Agreeing on details",
        head: ["Question", "Answer"],
        rows: [
          ["*What time* shall we meet?", "*Let's meet at* seven."],
          ["*Where* shall we meet?", "*At* the entrance / *in front of* the cinema."],
          ["*When* is it?", "*On* Saturday *at* eight."]
        ]
      }
    ],
    watchOut: [
      ["Let's to go to the park.", "Let's go to the park."],
      ["How about go to the movies?", "How about going to the movies?"],
      ["Would you like come?", "Would you like to come?"],
      ["No. (refusing an invitation)", "Sorry, I can't. I'm busy."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "[[Let's]] go to the concert!",
        "How about [[going]] to the museum? (go)",
        "Why don't [[we]] eat pizza?",
        "Would you like [[to]] come to my party?",
        "Yes, I'd [[love]] to!",
        "Sorry, I [[can't|cannot]]. I'm busy."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Carla and Omar make plans by phone. Listen and answer.",
      title: "Making plans",
      script: [
        { who: "Carla", line: "Hi, Omar! Are you free on Friday evening?" },
        { who: "Omar", line: "Hmm, why?" },
        { who: "Carla", line: "There's a jazz concert at the Casa de Cultura. Would you like to come?" },
        { who: "Omar", line: "I'd love to, but I have a math exam on Saturday morning. I have to study." },
        { who: "Carla", line: "Oh, OK. How about Saturday afternoon, after your exam? Let's go bowling!" },
        { who: "Omar", line: "Yes, great idea! What time?" },
        { who: "Carla", line: "Let's meet at four, in front of the shopping mall." },
        { who: "Omar", line: "Four is perfect. Why don't we invite Kenji?" },
        { who: "Carla", line: "Sure! See you on Saturday. Good luck on your exam!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "The concert is on Friday evening.", a: true },
            { s: "Omar goes to the concert.", a: false },
            { s: "Omar has an exam on Saturday morning.", a: true },
            { s: "They decide to go to the movies.", a: false },
            { s: "Omar wants to invite Kenji.", a: true }
          ]
        },
        {
          type: "gap", title: "The plan",
          prompt: "Complete the plan.",
          items: [
            "Activity: [[bowling]]",
            "Day: [[Saturday]] afternoon",
            "Time: [[4|four|4:00]]",
            "Place: in front of the shopping [[mall]]"
          ]
        }
      ]
    },

    reading: {
      intro: "Read the messages in a friends' group chat.",
      title: "Group chat: Weekend!!",
      text: [
        { author: "Daniela", body: "Hi everyone! Would you like to go to the museum on Saturday? There's a new dinosaur exhibition and it's free for students! 🦖" },
        { author: "Hugo", body: "I'd love to! What time?" },
        { author: "Renata", body: "Sorry, I can't. I visit my grandma on Saturdays. How about Sunday?" },
        { author: "Daniela", body: "The museum is closed on Sundays 😕. Why don't we go on Saturday morning and have lunch with you on Sunday, Renata?" },
        { author: "Renata", body: "Great idea! Let's have a picnic in the park on Sunday. I can make sandwiches." },
        { author: "Hugo", body: "Perfect. Museum at 11 on Saturday and picnic at 2 on Sunday. 👍" }
      ],
      activities: [
        {
          type: "sort", title: "Invite, accept or refuse?",
          prompt: "What does each phrase do?",
          bins: ["Invite / suggest", "Accept", "Refuse"],
          items: [
            { text: "Would you like to go to the museum?", bin: 0 }, { text: "How about Sunday?", bin: 0 }, { text: "Let's have a picnic.", bin: 0 },
            { text: "I'd love to!", bin: 1 }, { text: "Great idea!", bin: 1 }, { text: "Perfect.", bin: 1 },
            { text: "Sorry, I can't.", bin: 2 }
          ]
        },
        {
          type: "match", title: "Find the information",
          prompt: "Match the question with the answer.",
          pairs: [
            ["What is the exhibition about?", "dinosaurs"],
            ["Why can't Renata go on Saturday?", "She visits her grandma."],
            ["When is the museum closed?", "on Sundays"],
            ["What can Renata make?", "sandwiches"],
            ["What time is the picnic?", "at two on Sunday"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice suggestions, then write an invitation and a reply.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Would you like to come?" },
            { a: "Let's meet at the entrance." },
            { a: "How about going to the park?" },
            { a: "Why don't we invite Carla?" },
            { a: "Sorry, I can't. I'm busy." }
          ]
        },
        {
          type: "rewrite", title: "Say it another way",
          prompt: "Rewrite the suggestion. Use the words in brackets.",
          items: [
            { q: "Let's go to the movies. (How about…?)", a: ["How about going to the movies?"] },
            { q: "Let's eat tacos. (Why don't we…?)", a: ["Why don't we eat tacos?"] },
            { q: "Do you want to come to the party? (Would you like…?)", a: ["Would you like to come to the party?"] },
            { q: "Why don't we dance? (Let's…)", a: ["Let's dance."] }
          ]
        },
        {
          type: "write", title: "An invitation",
          prompt: "Write a message to invite a friend to an event. Say what, when, where and what time. Then write your friend's reply: they refuse with a reason and suggest another day.",
          minWords: 40, maxWords: 80,
          model: "Hi Sam! Would you like to come to a concert with me? It's on Friday at 8 p.m. at the Auditorio Metropolitano. Let's meet at 7:30 at the entrance. — Reply: Hi! I'd love to, but I can't on Friday. I work in the evenings. How about going to a movie on Sunday? Let's go to the 5 o'clock show!",
          bank: ["Would you like to…?", "It's on … at…", "Let's meet at…", "I'd love to, but…", "Sorry, I can't…", "How about…?", "Why don't we…?"],
          checklist: [
            "I wrote **what, when, where** and **what time**.",
            "I used *Would you like to…?*",
            "The reply refuses politely and gives a reason.",
            "I used *How about…?* or *Why don't we…?*"
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
            "Would you like to go to the movies?",
            "Yes, I'd love to!",
            "Sorry, I can't. I'm busy.",
            "How about Sunday?",
            "Why don't we invite Carla?",
            "Let's meet at seven."
          ]
        },
        {
          type: "speak", title: "A voice message",
          prompt: "Record a voice message inviting a friend to an event this weekend. Say what it is, when, where, and suggest a time and place to meet.",
          language: ["Hi …! It's…", "Would you like to…?", "It's on…", "Let's meet…", "Why don't we…?", "Call me!"],
          seconds: 45,
          checklist: ["say what, when and where?", "use a suggestion form?", "suggest a meeting point?", "sound friendly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can make suggestions with *Let's, How about, Why don't we*.", review: "Explanation: making suggestions; Writing activity 2" },
    { can: "I can invite someone with *Would you like to…?*", review: "Explanation: inviting" },
    { can: "I can accept an invitation.", review: "Explanation: accepting; Reading activity 1" },
    { can: "I can refuse politely and give a reason.", review: "Explanation: refusing; Listening" },
    { can: "I can agree on a day, time and place.", review: "Explanation: agreeing on details; Speaking activity 1 (listen and repeat)" },
    { can: "I can write an invitation and a reply.", review: "Writing activity 3" }
  ]
};
