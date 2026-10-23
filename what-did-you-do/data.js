window.UNIT = {
  slug: "what-did-you-do",
  number: 47,
  title: "What Did You Do?",
  level: "A1",
  minutes: 50,
  speakers: { "Renata": "f", "Iker": "m", "Teacher": "f", "Luis": "m", "Sara": "f", A: "f", B: "m" },
  focus: ["past simple: regular verbs (-ed)", "I watched, we played, she studied", "didn't + verb", "Did you…? Yes, I did. / No, I didn't.", "pronunciation: /t/, /d/, /ɪd/"],

  presentation: {
    scene: "📺⚽📞🧹",
    situation: "It's Monday morning at school. Renata asks Iker about his weekend.",
    warmup: {
      prompt: "What did you do last weekend? Choose the activities you know.",
      options: ["watched TV", "played soccer", "cooked", "cleaned my room", "listened to music", "studied", "visited my family", "walked in the park", "talked on the phone", "stayed at home"],
      response: "Good! In this unit you'll learn to talk about past activities with regular verbs."
    },
    dialogueTitle: "Monday morning",
    dialogue: [
      { who: "Renata", line: "Hi, Iker! *What did you do* on the weekend?" },
      { who: "Iker", line: "On Saturday *I played* soccer with my cousins and *we watched* a movie at night." },
      { who: "Renata", line: "Cool! *Did you study* for the math test?" },
      { who: "Iker", line: "Oh no… *No, I didn't*. *I didn't remember* the test! And you?" },
      { who: "Renata", line: "*I studied* on Sunday morning. Then *I visited* my grandma and *we cooked* enchiladas." },
      { who: "Iker", line: "Yum! *Did you like* them?" },
      { who: "Renata", line: "*Yes, I did*. They were delicious. … Iker, the test is in five minutes!" }
    ]
  },

  objectives: [
    "I can use the past simple of regular verbs.",
    "I can spell regular past forms correctly (*-ed, -d, -ied*).",
    "I can make negatives with *didn't* and questions with *Did…?*",
    "I can talk about what I did last weekend."
  ],

  explanation: {
    vocabTitle: "Regular verbs",
    vocab: [
      { word: "watch → watched", icon: "📺" }, { word: "play → played", icon: "⚽" }, { word: "cook → cooked", icon: "🍳" },
      { word: "clean → cleaned", icon: "🧹" }, { word: "listen → listened", icon: "🎧" }, { word: "visit → visited", icon: "👵" },
      { word: "walk → walked", icon: "🚶" }, { word: "talk → talked", icon: "💬" }, { word: "stay → stayed", icon: "🏠" },
      { word: "study → studied", icon: "📚" }, { word: "dance → danced", icon: "💃" }, { word: "travel → traveled", icon: "🧳" },
      { word: "start → started", icon: "▶️" }, { word: "finish → finished", icon: "🏁" }, { word: "want → wanted", icon: "💭" }
    ],
    grammar: [
      {
        title: "Past simple: regular verbs",
        head: ["Rule", "Examples"],
        rows: [
          ["most verbs + *-ed*", "watch → watch*ed*, play → play*ed*"],
          ["verbs ending in *-e* + *-d*", "dance → danc*ed*, like → lik*ed*"],
          ["consonant + *y* → *-ied*", "study → stud*ied*, cry → cr*ied*"],
          ["short verb: consonant–vowel–consonant", "stop → sto*pped*, plan → pla*nned*"]
        ],
        note: "The past simple is the same for all subjects: *I / you / she / they watched*."
      },
      {
        title: "Negatives and questions",
        head: ["", "Example"],
        rows: [
          ["negative: *didn't* + verb", "I *didn't study*. (no -ed!)"],
          ["question: *Did* + subject + verb", "*Did* you *watch* the game?"],
          ["short answers", "Yes, I *did*. / No, I *didn't*."],
          ["Wh- question", "*What did* you *do*? *Where did* you *go*?"]
        ],
        note: "After *did / didn't* use the base verb: *Did you play?* — never *Did you played?*"
      },
      {
        title: "Pronunciation of -ed",
        head: ["Sound", "Examples"],
        rows: [
          ["/t/", "watch*ed*, cook*ed*, walk*ed*, danc*ed*"],
          ["/d/", "play*ed*, clean*ed*, listen*ed*, stay*ed*"],
          ["/ɪd/ (extra syllable)", "visit*ed*, start*ed*, want*ed*, need*ed*"]
        ],
        note: "Only verbs ending in *t* or *d* get the extra syllable /ɪd/."
      }
    ],
    watchOut: [
      ["I didn't studied.", "I didn't study."],
      ["Did you played soccer?", "Did you play soccer?"],
      ["She studyed a lot.", "She studied a lot."],
      ["Yesterday I watch TV.", "Yesterday I watched TV."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the past simple.",
      items: [
        "Last night I [[watched]] a movie. (watch)",
        "We [[danced]] at the party. (dance)",
        "My sister [[studied]] for her exam. (study)",
        "I [[didn't|did not]] cook yesterday. (not cook)",
        "[[Did]] you visit your grandparents?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "The teacher asks Luis and Sara about their holiday. Listen.",
      title: "The long weekend",
      script: [
        { who: "Teacher", line: "Welcome back! Luis, what did you do on the long weekend?" },
        { who: "Luis", line: "I stayed at home. I cleaned my room and I played video games a lot." },
        { who: "Teacher", line: "Did you watch the soccer game on Monday?" },
        { who: "Luis", line: "Yes, I did! Puebla played very well." },
        { who: "Teacher", line: "And you, Sara?" },
        { who: "Sara", line: "My family and I traveled to Veracruz. We visited the aquarium and we walked on the boardwalk." },
        { who: "Teacher", line: "Did you like it?" },
        { who: "Sara", line: "Yes, I loved it! But it rained on Sunday, so we stayed in the hotel and talked and played cards." }
      ],
      activities: [
        {
          type: "sort", title: "Luis or Sara?",
          prompt: "Who did it?",
          bins: ["Luis", "Sara"],
          items: [
            { text: "stayed at home", bin: 0 }, { text: "cleaned his room", bin: 0 }, { text: "played video games", bin: 0 }, { text: "watched the soccer game", bin: 0 },
            { text: "traveled to Veracruz", bin: 1 }, { text: "visited the aquarium", bin: 1 }, { text: "walked on the boardwalk", bin: 1 }, { text: "played cards", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Luis traveled on the weekend.", a: false },
            { s: "Puebla played well.", a: true },
            { s: "Sara didn't like Veracruz.", a: false },
            { s: "It rained on Sunday.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read Valentina's diary from her first week as a volunteer.",
      title: "My volunteer week",
      text: [
        { author: "Monday", body: "Today I started as a volunteer at an animal shelter. I cleaned the dogs' beds and I walked five dogs. I was very tired!" },
        { author: "Wednesday", body: "I helped the vet. We checked two cats and a rabbit. In the afternoon I played with the puppies. They're so cute!" },
        { author: "Friday", body: "A family visited the shelter and adopted a dog, Canela. I cried a little, but I was happy. I didn't want to leave at six! I loved my first week." }
      ],
      activities: [
        {
          type: "match", title: "When did it happen?",
          prompt: "Match the activity with the day.",
          pairs: [
            ["She walked five dogs.", "Monday"],
            ["She helped the vet.", "Wednesday"],
            ["A family adopted Canela.", "Friday"]
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, she did.* or *No, she didn't.*",
          items: [
            { q: "Did Valentina clean the dogs' beds?", a: ["Yes, she did."] },
            { q: "Did she help the vet on Monday?", a: ["No, she didn't.", "No, she did not."] },
            { q: "Did she play with the puppies?", a: ["Yes, she did."] },
            { q: "Did she want to leave on Friday?", a: ["No, she didn't.", "No, she did not."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice regular verbs, then write a diary entry.",
      activities: [
        {
          type: "sort", title: "Pronunciation: -ed",
          prompt: "Listen in your head. Which sound does *-ed* make?",
          bins: ["/t/", "/d/", "/ɪd/"],
          items: [
            { text: "watched", bin: 0 }, { text: "cooked", bin: 0 }, { text: "walked", bin: 0 },
            { text: "played", bin: 1 }, { text: "cleaned", bin: 1 }, { text: "stayed", bin: 1 },
            { text: "visited", bin: 2 }, { text: "started", bin: 2 }, { text: "wanted", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Make it negative",
          prompt: "Rewrite with *didn't*.",
          items: [
            { q: "I played tennis.", a: ["I didn't play tennis.", "I did not play tennis."] },
            { q: "She studied English.", a: ["She didn't study English.", "She did not study English."] },
            { q: "We watched the news.", a: ["We didn't watch the news.", "We did not watch the news."] },
            { q: "They danced all night.", a: ["They didn't dance all night.", "They did not dance all night."] }
          ]
        },
        {
          type: "write", title: "My diary",
          prompt: "Write a diary entry about yesterday or last weekend. Use at least six regular verbs in the past and one negative with *didn't*.",
          minWords: 40, maxWords: 80,
          model: "Saturday, October 18th. Today was a good day! In the morning I cleaned the house with my mom and I listened to music. At two o'clock we cooked chiles rellenos. In the afternoon I walked to the park and I played basketball with my friends. I didn't study, but I watched a documentary about whales. I stayed up late and chatted with my cousin.",
          bank: ["In the morning I…", "At … o'clock we…", "In the afternoon…", "In the evening…", "I didn't…", "It was a … day!"],
          checklist: [
            "I used at least **six** regular verbs in the past.",
            "I spelled them correctly: *-ed, -d, -ied*.",
            "I wrote one negative with *didn't* + base verb.",
            "I used time words: *in the morning, then, at…*"
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
            "What did you do last weekend?",
            "I played soccer with my cousins.",
            "We watched a movie on Saturday.",
            "I studied for my English test.",
            "Did you visit your grandma?",
            "No, I didn't. I stayed at home."
          ]
        },
        {
          type: "speak", title: "Yesterday",
          prompt: "Record yourself describing yesterday from morning to night. Use at least eight regular verbs.",
          language: ["In the morning I…", "Then I…", "After that…", "In the evening…", "I didn't…"],
          seconds: 60,
          checklist: ["use eight regular verbs?", "use *didn't* once?", "use sequence words?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the past simple of regular verbs.", review: "Explanation: past simple regular verbs" },
    { can: "I can spell past forms: *-ed, -d, -ied*.", review: "Explanation: rules; Quick check" },
    { can: "I can make negatives with *didn't*.", review: "Writing activity 2" },
    { can: "I can ask *Did you…?* and answer.", review: "Reading activity 2; Speaking activity 1 (listen and repeat)" },
    { can: "I can pronounce *-ed* in three ways.", review: "Explanation: pronunciation; Writing activity 1" },
    { can: "I can write a diary entry about my day.", review: "Writing activity 3" }
  ]
};
