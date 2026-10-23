window.UNIT = {
  slug: "school-rules",
  number: 42,
  title: "School Rules",
  level: "A1",
  minutes: 50,
  speakers: { "Librarian": "f", "Kenji": "m", "Principal": "m", "Brisa": "f", A: "m", B: "f" },
  focus: ["can / can't for permission", "Can I…? Yes, you can. / No, you can't.", "signs and rules", "imperatives: Please… / Don't…", "You're (not) allowed to…"],

  presentation: {
    scene: "🏫🚫📵📚",
    situation: "Kenji is an exchange student. It's his first visit to the university library and he has a lot of questions.",
    warmup: {
      prompt: "What can't you do in a library? Choose all.",
      options: ["eat", "talk loudly", "use your phone", "sleep", "read", "study", "drink water", "listen to music", "take photos", "run"],
      response: "Good! In this unit you'll learn to talk about rules and ask for permission."
    },
    dialogueTitle: "In the library",
    dialogue: [
      { who: "Kenji", line: "Excuse me. *Can I* eat my sandwich here?" },
      { who: "Librarian", line: "*No, you can't*. *You can't eat* in the library. *You can eat* in the café." },
      { who: "Kenji", line: "Oh, sorry. *Can I drink* water?" },
      { who: "Librarian", line: "*Yes, you can*, but only water in a bottle." },
      { who: "Kenji", line: "OK. *Can I use* my laptop?" },
      { who: "Librarian", line: "Sure. The Wi-Fi password is on the wall. But *please don't talk* on your phone." },
      { who: "Kenji", line: "*Can I take* books home?" },
      { who: "Librarian", line: "Yes, *you can take* three books for two weeks. *Don't forget* your student ID!" }
    ]
  },

  objectives: [
    "I can ask for permission with *Can I…?*",
    "I can talk about rules with *can* and *can't*.",
    "I can understand signs and notices.",
    "I can write rules with imperatives."
  ],

  explanation: {
    vocabTitle: "Rules and signs",
    vocab: [
      { word: "No phones", icon: "📵" }, { word: "No smoking", icon: "🚭" }, { word: "No food or drink", icon: "🍔" },
      { word: "Quiet, please", icon: "🤫" }, { word: "No photos", icon: "📷" }, { word: "Exit", icon: "🚪" },
      { word: "Wash your hands", icon: "🧼" }, { word: "Recycle", icon: "♻️" }, { word: "rule", icon: "📏" },
      { word: "allowed", icon: "✅" }, { word: "not allowed", icon: "❌" }, { word: "student ID", icon: "🪪" },
      { word: "uniform", icon: "👕" }, { word: "late", icon: "⏰" }, { word: "permission", icon: "🙋" }
    ],
    grammar: [
      {
        title: "Can / can't for permission",
        head: ["", "Example"],
        rows: [
          ["permission ✅", "You *can* use your laptop."],
          ["prohibition ❌", "You *can't* eat in the library."],
          ["question", "*Can I* take photos?"],
          ["short answers", "Yes, you *can*. / No, you *can't*. / Sure! / Sorry, no."]
        ],
        note: "Remember: *can* is the same for all subjects and the verb has no *to*: *Students can use…* — never *can to use*."
      },
      {
        title: "Rules with imperatives",
        head: ["Polite", "Prohibition"],
        rows: [
          ["*Please* turn off your phone.", "*Don't* run in the hallways."],
          ["*Please* be on time.", "*Don't* eat in class."],
          ["*Wash* your hands.", "*No* smoking. (on signs)"]
        ]
      },
      {
        title: "Allowed / not allowed",
        head: ["Structure", "Example"],
        rows: [
          ["*You're allowed to* + verb", "*You're allowed to* drink water."],
          ["*You aren't allowed to* + verb", "*You aren't allowed to* use your phone in exams."],
          ["*Are we allowed to…?*", "*Are we allowed to* wear caps in class?"]
        ],
        note: "*Allowed to* is a little more formal than *can*. Both are correct."
      }
    ],
    watchOut: [
      ["Can I to use the computer?", "Can I use the computer?"],
      ["You don't can eat here.", "You can't eat here."],
      ["No run in the hallways.", "Don't run in the hallways."],
      ["Can I take photos? – Yes, you can take.", "Yes, you can."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *can, can't* or *Don't*.",
      items: [
        "You [[can't|cannot]] smoke in the school. It's a rule.",
        "[[Can]] I go to the bathroom, please?",
        "Students [[can]] take three books home.",
        "[[Don't]] use your phone during the exam.",
        "You [[can't|cannot]] eat in the library, but you can drink water."
      ]
    }
  },

  skills: {
    listening: {
      intro: "The principal of a language school explains the rules to new students. Listen.",
      title: "Welcome to the language school",
      script: [
        { who: "Principal", line: "Good morning and welcome! Here are some important rules. Classes start at eight o'clock. Please be on time. If you're more than fifteen minutes late, you can't go into the class." },
        { who: "Principal", line: "You can use your phones in the break, but please turn them off in class. You can't eat in the classrooms, but you can drink water or coffee." },
        { who: "Brisa", line: "Excuse me, can we use the computers in the lab?" },
        { who: "Principal", line: "Yes, you can, from nine to five. But you can't download games or movies." },
        { who: "Brisa", line: "And can we bring friends to the English club?" },
        { who: "Principal", line: "Yes, of course! The English club is on Fridays and everybody is welcome." }
      ],
      activities: [
        {
          type: "sort", title: "Allowed or not?",
          prompt: "Sort the actions.",
          bins: ["✅ You can", "❌ You can't"],
          items: [
            { text: "use phones in the break", bin: 0 }, { text: "drink water in class", bin: 0 }, { text: "use the lab computers", bin: 0 }, { text: "bring friends to the club", bin: 0 },
            { text: "go into class 20 minutes late", bin: 1 }, { text: "eat in the classrooms", bin: 1 }, { text: "download games", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Classes start at nine.", a: false },
            { s: "Students can drink coffee in class.", a: true },
            { s: "The lab is open from nine to five.", a: true },
            { s: "The English club is on Mondays.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the signs and notices around the university.",
      title: "Signs on campus",
      text: [
        { author: "Swimming pool", body: "Please take a shower before you swim. Wear a swimming cap. Don't run. No food or glass bottles. Children under 12 can swim only with an adult." },
        { author: "Computer lab", body: "Students can use the computers with their student ID. Don't eat or drink near the computers. Please save your work on a USB — files are deleted every night." },
        { author: "Parking lot", body: "Only cars with a university sticker can park here. Visitors can park on Level 2. Don't leave things in your car. Maximum speed: 10 km/h." }
      ],
      activities: [
        {
          type: "match", title: "Where is the sign?",
          prompt: "Match the rule with the place.",
          pairs: [
            ["Wear a swimming cap.", "the swimming pool"],
            ["Save your work on a USB.", "the computer lab"],
            ["Visitors can park on Level 2.", "the parking lot"]
          ]
        },
        {
          type: "rewrite", title: "Can or can't?",
          prompt: "Answer with *Yes, you can.* or *No, you can't.*",
          items: [
            { q: "Can I bring a glass bottle to the pool?", a: ["No, you can't.", "No, you cannot."] },
            { q: "Can a 10-year-old swim alone?", a: ["No, he can't.", "No, she can't.", "No, they can't.", "No, you can't."] },
            { q: "Can I use the computers with my student ID?", a: ["Yes, you can."] },
            { q: "Can visitors park on Level 2?", a: ["Yes, they can.", "Yes, you can."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice asking for permission, then write rules for a place.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Can I open the window, please?" },
            { a: "You can't use your phone here." },
            { a: "Please turn off the lights." },
            { a: "Don't eat in the classroom." },
            { a: "Are we allowed to wear caps?" }
          ]
        },
        {
          type: "rewrite", title: "Ask for permission",
          prompt: "Write a question with *Can I…?*",
          items: [
            { q: "You want to go to the bathroom.", a: ["Can I go to the bathroom?", "Can I go to the bathroom, please?"] },
            { q: "You want to use your dictionary in the exam.", a: ["Can I use my dictionary in the exam?", "Can I use my dictionary?"] },
            { q: "You want to borrow a pen.", a: ["Can I borrow a pen?", "Can I borrow a pen, please?", "Can I borrow your pen?"] },
            { q: "You want to leave early.", a: ["Can I leave early?", "Can I leave early, please?"] }
          ]
        },
        {
          type: "write", title: "Our class rules",
          prompt: "Write six rules for your English class or your home. Use *You can…, You can't…, Please…* and *Don't…*. Explain one rule with *because*.",
          minWords: 40, maxWords: 80,
          model: "Our English class rules: 1. Please be on time. 2. You can use your phone for dictionaries, but you can't play games. 3. Don't speak Spanish in pair work. 4. You can drink water, but you can't eat in class. 5. Please help your classmates. 6. Don't be afraid of mistakes, because mistakes help us learn!",
          bank: ["You can…", "You can't…", "Please…", "Don't…", "You're allowed to…", "because…"],
          checklist: [
            "I wrote **six** rules.",
            "I used *can* and *can't*.",
            "I used *Please* and *Don't*.",
            "I explained one rule with *because*."
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
            "Can I go to the bathroom, please?",
            "Yes, you can.",
            "You can't eat in the library.",
            "Please turn off your phone.",
            "Don't run in the hallways.",
            "Can I use your dictionary?"
          ]
        },
        {
          type: "speak", title: "Rules in my home",
          prompt: "Record yourself explaining the rules in your home (or your school). Say what you can and can't do and give reasons.",
          language: ["At home I can…", "I can't…", "My parents say: \"Don't…\"", "We aren't allowed to…", "because…"],
          seconds: 60,
          checklist: ["use *can* and *can't*?", "give reasons with *because*?", "use an imperative?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can ask for permission with *Can I…?*", review: "Writing activity 2; Speaking activity 1 (listen and repeat)" },
    { can: "I can talk about rules with *can* and *can't*.", review: "Explanation: can / can't for permission" },
    { can: "I can answer *Yes, you can / No, you can't*.", review: "Reading activity 2" },
    { can: "I can understand signs and notices.", review: "Reading: signs on campus" },
    { can: "I can use imperatives for rules.", review: "Explanation: rules with imperatives; Quick check" },
    { can: "I can write a list of rules.", review: "Writing activity 3" }
  ]
};
