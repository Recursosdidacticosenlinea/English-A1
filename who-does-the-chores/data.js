window.UNIT = {
  slug: "who-does-the-chores",
  number: 19,
  title: "Who Does the Chores?",
  level: "A1",
  minutes: 50,
  speakers: { "Valentina": "f", "Rafa": "m", "Host": "f", "Pedro": "m", "Lupita": "f", A: "f", B: "m" },
  focus: ["housework: wash the dishes, make the bed…", "present simple he / she: she cleans, he washes", "does / doesn't", "Who does…? Does he…?", "every day, once a week, on Saturdays"],

  presentation: {
    scene: "🧹🧺🍽️🗑️",
    situation: "Valentina and her brother Rafa share an apartment. They make a list of chores, but Rafa is not very happy.",
    warmup: {
      prompt: "Which chores do you do at home? Choose all.",
      options: ["wash the dishes", "make my bed", "cook", "clean the bathroom", "take out the trash", "do the laundry", "sweep the floor", "go shopping", "walk the dog", "iron clothes"],
      response: "Thanks for helping at home! In this unit you'll learn to talk about who does the chores."
    },
    dialogueTitle: "The chores list",
    dialogue: [
      { who: "Valentina", line: "OK, Rafa. Here's the list. *I cook* every day, so *you wash* the dishes." },
      { who: "Rafa", line: "Every day? Hmm… And *who does* the laundry?" },
      { who: "Valentina", line: "*Mom does* the laundry on Sundays, when she visits." },
      { who: "Rafa", line: "Ha! And the bathroom?" },
      { who: "Valentina", line: "You. *Dad cleans* the bathroom at his house, so you can clean ours!" },
      { who: "Rafa", line: "But *Dad doesn't clean* it every week!" },
      { who: "Valentina", line: "Rafa… *Does Dad wash* the dishes?" },
      { who: "Rafa", line: "*Yes, he does*. OK, OK. I wash the dishes and *you take out* the trash." }
    ]
  },

  objectives: [
    "I can name common household chores.",
    "I can use the present simple with *he, she, it* (*-s / -es*).",
    "I can make negatives and questions with *doesn't* and *does*.",
    "I can say how often people do things."
  ],

  explanation: {
    vocabTitle: "Chores",
    vocab: [
      { word: "wash the dishes", icon: "🍽️" }, { word: "make the bed", icon: "🛏️" }, { word: "cook dinner", icon: "🍳" },
      { word: "clean the bathroom", icon: "🚽" }, { word: "take out the trash", icon: "🗑️" }, { word: "do the laundry", icon: "🧺" },
      { word: "sweep the floor", icon: "🧹" }, { word: "vacuum", icon: "🔌" }, { word: "iron clothes", icon: "👔" },
      { word: "water the plants", icon: "🪴" }, { word: "walk the dog", icon: "🐕" }, { word: "go shopping", icon: "🛒" },
      { word: "set the table", icon: "🍴" }, { word: "feed the cat", icon: "🐈" }, { word: "tidy my room", icon: "🧸" }
    ],
    grammar: [
      {
        title: "Present simple: he / she / it",
        head: ["I / you / we / they", "he / she / it", "Rule"],
        rows: [
          ["I *clean*", "she *cleans*", "+ *-s*"],
          ["they *wash*", "he *washes*", "-sh, -ch, -s, -x, -o + *-es*"],
          ["we *do*", "Mom *does*", "do → *does*, go → *goes*"],
          ["you *tidy*", "he *tidies*", "consonant + y → *-ies*"],
          ["I *have*", "she *has*", "irregular"]
        ]
      },
      {
        title: "Negatives and questions",
        head: ["", "Example"],
        rows: [
          ["negative", "Dad *doesn't clean* the bathroom. (no -s!)"],
          ["yes/no question", "*Does* he *wash* the dishes? – Yes, he *does*. / No, he *doesn't*."],
          ["Wh- question", "*What does* she *do* on Saturdays?"],
          ["Who as subject", "*Who does* the laundry? – Mom *does*."]
        ],
        note: "After *does / doesn't* the verb has no *-s*: *She doesn't cook.* — never *She doesn't cooks*."
      },
      {
        title: "How often?",
        head: ["Expression", "Example"],
        rows: [
          ["*every* day / week / morning", "I make my bed *every day*."],
          ["*once / twice* a week", "He vacuums *once a week*."],
          ["*three times* a month", "She irons *three times a month*."],
          ["*on* + day", "We go shopping *on Saturdays*."]
        ],
        note: "These expressions usually go at the **end** of the sentence."
      }
    ],
    watchOut: [
      ["My mom cook every day.", "My mom cooks every day."],
      ["He washs the dishes.", "He washes the dishes."],
      ["She doesn't cleans.", "She doesn't clean."],
      ["Who do the laundry?", "Who does the laundry?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the correct form of the verb.",
      items: [
        "Valentina [[cooks]] every day. (cook)",
        "Rafa [[washes]] the dishes. (wash)",
        "Mom [[does]] the laundry on Sundays. (do)",
        "Dad [[doesn't|does not]] iron clothes. (not iron)",
        "[[Does]] your brother make his bed? – No, he doesn't."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio host asks two people about chores in their homes. Listen.",
      title: "Radio survey: chores at home",
      script: [
        { who: "Host", line: "Hello! Today's question: who does the chores in your house? Pedro?" },
        { who: "Pedro", line: "Well, I live with my wife and two kids. My wife cooks, and I wash the dishes. My son takes out the trash every night. My daughter feeds the cat." },
        { who: "Host", line: "Very good. And who cleans the bathroom?" },
        { who: "Pedro", line: "I do! Twice a week." },
        { who: "Host", line: "Thanks, Pedro. Lupita, what about you?" },
        { who: "Lupita", line: "I live with my grandma. She doesn't do a lot of chores because she's eighty-five. I do the laundry on Saturdays and I go shopping. My grandma waters the plants every morning. She loves her plants!" }
      ],
      activities: [
        {
          type: "match", title: "Who does what?",
          prompt: "Match the person with the chore.",
          pairs: [
            ["Pedro's wife", "cooks"],
            ["Pedro", "washes the dishes and cleans the bathroom"],
            ["Pedro's son", "takes out the trash"],
            ["Pedro's daughter", "feeds the cat"],
            ["Lupita's grandma", "waters the plants"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Pedro cleans the bathroom once a week.", a: false },
            { s: "Lupita lives with her grandma.", a: true },
            { s: "Lupita's grandma does a lot of chores.", a: false },
            { s: "Lupita does the laundry on Saturdays.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a family magazine.",
      title: "The chores champion",
      text: [
        { author: "Family Life magazine", body: "Meet Tomás, 12, our chores champion! Tomás lives in Tlaxcala with his parents and his little sister. Every morning he makes his bed and feeds the dog. After school he does his homework and then sets the table for dinner. On Saturdays he washes the family car with his dad. He doesn't like cleaning the bathroom, but he does it once a month. His mom says: \"Tomás is a great help. He doesn't complain!\" His sister, Ana, is five. She doesn't do many chores, but she tidies her toys every night." }
      ],
      activities: [
        {
          type: "sort", title: "When does Tomás do it?",
          prompt: "Sort the chores.",
          bins: ["every morning", "after school", "on Saturdays", "once a month"],
          items: [
            { text: "makes his bed", bin: 0 }, { text: "feeds the dog", bin: 0 },
            { text: "does his homework", bin: 1 }, { text: "sets the table", bin: 1 },
            { text: "washes the car", bin: 2 },
            { text: "cleans the bathroom", bin: 3 }
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, he / she does.* or *No, he / she doesn't.*",
          items: [
            { q: "Does Tomás feed the dog?", a: ["Yes, he does."] },
            { q: "Does Tomás like cleaning the bathroom?", a: ["No, he doesn't.", "No, he does not."] },
            { q: "Does Tomás complain?", a: ["No, he doesn't.", "No, he does not."] },
            { q: "Does Ana tidy her toys?", a: ["Yes, she does."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice he / she forms, then write about chores in your home.",
      activities: [
        {
          type: "rewrite", title: "Change the subject",
          prompt: "Rewrite with the new subject.",
          items: [
            { q: "I wash the dishes. (My brother…)", a: ["My brother washes the dishes."] },
            { q: "We do the laundry on Sundays. (Mom…)", a: ["Mom does the laundry on Sundays."] },
            { q: "I don't iron clothes. (Dad…)", a: ["Dad doesn't iron clothes.", "Dad does not iron clothes."] },
            { q: "They tidy their rooms. (She…)", a: ["She tidies her room."] },
            { q: "Do you cook? (… your sister…?)", a: ["Does your sister cook?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Who takes out the trash?" },
            { a: "My dad cooks on Sundays." },
            { a: "She doesn't make her bed." },
            { a: "Does he walk the dog?" },
            { a: "I vacuum once a week." }
          ]
        },
        {
          type: "write", title: "Chores in my home",
          prompt: "Write about the chores in your home. Who does what? How often? Say what you do and what you don't do. Use he / she forms.",
          minWords: 40, maxWords: 80,
          model: "In my house we all do chores. My mom cooks every day and my dad washes the dishes. My sister does the laundry twice a week. I take out the trash every night and I walk our dog, Rocky. My brother doesn't do a lot — he only makes his bed! On Saturdays we clean the house together.",
          bank: ["In my house…", "My mom / dad…", "He / She … every day.", "… twice a week.", "I … and I…", "He / She doesn't…", "On Saturdays we…"],
          checklist: [
            "I wrote about at least **three** people.",
            "I used *-s / -es* with *he / she*.",
            "I used *doesn't* + verb once.",
            "I used *every…, once / twice a week* or *on…*"
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
            "Who does the laundry in your house?",
            "My mom cooks every day.",
            "My brother washes the dishes.",
            "Dad doesn't iron clothes.",
            "Does your sister make her bed?",
            "I take out the trash every night."
          ]
        },
        {
          type: "speak", title: "A helper at home",
          prompt: "Record yourself describing a person in your family who does a lot of chores. Say what he or she does, when, and what you do to help.",
          language: ["My … does a lot of chores.", "Every morning he / she…", "He / She doesn't…", "I help: I…", "once / twice a week"],
          seconds: 60,
          checklist: ["describe one person's chores?", "use *-s / -es* correctly?", "use a negative?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name household chores.", review: "Explanation: vocabulary" },
    { can: "I can use the present simple with *he, she, it*.", review: "Explanation: he / she / it; Quick check" },
    { can: "I can make negatives with *doesn't*.", review: "Explanation: negatives and questions; Writing activity 1" },
    { can: "I can ask *Does he…?* and *Who does…?*", review: "Reading activity 2; Speaking activity 1 (listen and repeat)" },
    { can: "I can say how often people do things.", review: "Explanation: How often?" },
    { can: "I can write about the chores in my home.", review: "Writing activity 3" }
  ]
};
