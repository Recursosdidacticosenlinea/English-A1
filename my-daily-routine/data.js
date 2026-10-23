window.UNIT = {
  slug: "my-daily-routine",
  number: 18,
  title: "My Daily Routine",
  level: "A1",
  minutes: 50,
  focus: ["present simple: I get up, she gets up", "don't / doesn't", "Do you…? Does she…?", "always, usually, never", "at 7:00, in the morning"],

  presentation: {
    scene: "⏰🚿🚌📚",
    situation: "Two students are doing a survey for their English class: *What is a typical day for a BUAP student?*",
    warmup: {
      prompt: "What do you do every morning? Choose everything that is true.",
      options: ["wake up early", "take a shower", "have breakfast", "brush my teeth", "get dressed", "check my phone", "take the bus", "take the metro", "walk to school", "drink coffee"],
      response: "Great! In this unit you'll learn to talk about your routine and other people's routines."
    },
    dialogueTitle: "A class survey",
    dialogue: [
      { who: "Brenda", line: "Hi, Óscar. Can I ask you some questions for my survey?" },
      { who: "Óscar", line: "Sure!" },
      { who: "Brenda", line: "What time *do* you *get up*?" },
      { who: "Óscar", line: "I *get up* at five thirty. I *live* far from school." },
      { who: "Brenda", line: "Wow! *Do* you *have* breakfast at home?" },
      { who: "Óscar", line: "No, I *don't*. I *usually buy* a tamal near the metro station. My mom *leaves* home at five, so she *doesn't cook* in the morning." },
      { who: "Brenda", line: "And what *do* you *do* after school?" },
      { who: "Óscar", line: "I *always do* my homework, and on Tuesdays and Thursdays I *play* basketball. I *never go* to bed before eleven!" }
    ]
  },

  objectives: [
    "I can describe my daily routine with everyday verbs.",
    "I can use the present simple, including *-s / -es* with *he, she, it*.",
    "I can ask and answer *Do you…? Does he…?* and *What time…?* questions.",
    "I can say how often I do things with *always, usually, sometimes, never*."
  ],

  explanation: {
    vocabTitle: "Daily routines",
    vocab: [
      { word: "wake up", icon: "⏰" }, { word: "get up", icon: "🛏️" }, { word: "take a shower", icon: "🚿" },
      { word: "brush my teeth", icon: "🪥" }, { word: "get dressed", icon: "👕" }, { word: "have breakfast", icon: "🥣" },
      { word: "take the bus", icon: "🚌" }, { word: "go to school", icon: "🏫" }, { word: "have lunch", icon: "🍲" },
      { word: "do homework", icon: "📚" }, { word: "watch TV", icon: "📺" }, { word: "do exercise", icon: "🏃" },
      { word: "have dinner", icon: "🍽️" }, { word: "go to bed", icon: "🌙" }, { word: "sleep", icon: "😴" }
    ],
    grammar: [
      {
        title: "Present simple: affirmative and negative",
        head: ["Subject", "Affirmative", "Negative"],
        rows: [
          ["I / you / we / they", "I *get up* at six.", "I *don't get up* at six."],
          ["he / she / it", "She *gets up* at six.", "She *doesn't get up* at six."]
        ],
        note: "We use the present simple for habits and routines. After *doesn't*, the verb has no *-s*: *He doesn't play*, not *He doesn't plays*."
      },
      {
        title: "Spelling: he / she / it",
        head: ["Rule", "Examples"],
        rows: [
          ["most verbs + *-s*", "work → *works*, play → *plays*, eat → *eats*"],
          ["-sh, -ch, -ss, -x, -o + *-es*", "watch → *watches*, go → *goes*, do → *does*"],
          ["consonant + y → *-ies*", "study → *studies*, carry → *carries*"],
          ["irregular", "have → *has*"]
        ]
      },
      {
        title: "Questions and frequency adverbs",
        head: ["Question", "Answer"],
        rows: [
          ["*Do* you *walk* to school?", "Yes, I *do*. / No, I *don't*."],
          ["*Does* she *work* on Saturdays?", "Yes, she *does*. / No, she *doesn't*."],
          ["*What time do* you *have* lunch?", "I have lunch *at* three o'clock."],
          ["*How often does* he *play* soccer?", "He *always / usually / sometimes / never* plays."]
        ],
        note: "Frequency adverbs go **before** the main verb but **after** *be*: *I usually walk. I'm always tired.*"
      }
    ],
    watchOut: [
      ["She get up at seven.", "She gets up at seven."],
      ["He don't like coffee.", "He doesn't like coffee."],
      ["Does she works here?", "Does she work here?"],
      ["I go always to school by bus.", "I always go to school by bus."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verb in parentheses.",
      items: [
        "My brother [[watches]] TV every night. (watch)",
        "I [[don't|do not]] have breakfast at home. (not have)",
        "[[Does]] your mom work on Sundays? (do)",
        "She [[studies]] English at BUAP. (study)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A school podcast interviews Rocío, a student who also works. Listen and follow her day.",
      title: "A busy day",
      script: [
        { who: "Host", line: "Rocío, you study and work. What's a typical day for you?" },
        { who: "Rocío", line: "Well, I wake up at six. I take a quick shower and I get dressed. I don't have time for breakfast, so I eat a banana on the bus." },
        { who: "Host", line: "What time do your classes start?" },
        { who: "Rocío", line: "At seven. I have classes from seven to one. Then I have lunch with my friends in the school cafeteria." },
        { who: "Host", line: "And then you go to work?" },
        { who: "Rocío", line: "Yes. I work in my aunt's stationery shop from three to seven. I sell notebooks and pens and I make photocopies." },
        { who: "Host", line: "When do you do your homework?" },
        { who: "Rocío", line: "At night, after dinner. I usually finish at ten thirty. I never watch TV during the week, but on Sundays I sleep until eleven!" }
      ],
      activities: [
        {
          type: "tiles", title: "Put her day in order",
          prompt: "Listen and make sentences about Rocío's day.",
          items: [
            { a: "She wakes up at six." },
            { a: "She eats a banana on the bus." },
            { a: "She has lunch with her friends." },
            { a: "She works in a stationery shop." },
            { a: "She does her homework after dinner." }
          ]
        },
        {
          type: "gap", title: "Times and details",
          prompt: "Listen again and complete with one word or a time.",
          items: [
            "Rocío's classes start at [[seven|7|7:00]].",
            "She has classes until [[one|1|1:00]].",
            "The shop belongs to her [[aunt]].",
            "She works from three to [[seven|7|7:00]].",
            "She [[never]] watches TV during the week.",
            "On Sundays she sleeps until [[eleven|11|11:00]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read about two people with very different routines.",
      title: "Early bird or night owl?",
      text: [
        { author: "Héctor · baker, 45", body: "I'm a baker, so I start work very early. I get up at three in the morning and I walk to the bakery. I make bread from four to nine. People buy bread for breakfast, so the morning is very busy. I have lunch at one and I take a nap in the afternoon. I go to bed at eight thirty. I never go to parties on weekdays!" },
        { author: "Itzel · DJ, 28", body: "I work at night. I play music at a club from eleven at night to four in the morning. I go to bed at five and I get up at one in the afternoon. I have breakfast when other people have lunch! In the afternoon I go to the gym and I look for new music. I don't see my family very often, but I call my mom every day." }
      ],
      activities: [
        {
          type: "sort", title: "Who does it?",
          prompt: "Put each activity under the right person.",
          bins: ["Héctor", "Itzel", "Both"],
          items: [
            { text: "gets up at 3 a.m.", bin: 0 }, { text: "takes a nap in the afternoon", bin: 0 }, { text: "walks to work", bin: 0 },
            { text: "goes to the gym", bin: 1 }, { text: "goes to bed at 5 a.m.", bin: 1 }, { text: "calls her mom every day", bin: 1 },
            { text: "works at night or very early", bin: 2 }, { text: "has an unusual routine", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. Are these sentences true or false?",
          items: [
            { s: "Héctor makes bread for five hours.", a: true },
            { s: "Héctor goes to bed after ten.", a: false },
            { s: "Itzel works at a restaurant.", a: false },
            { s: "Itzel has breakfast at about one in the afternoon.", a: true },
            { s: "Itzel sees her family every day.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the forms first, then write about your own routine.",
      activities: [
        {
          type: "rewrite", title: "Change the subject",
          prompt: "Rewrite each sentence about the person in parentheses.",
          items: [
            { q: "I take the metro to school. (My sister)", a: ["My sister takes the metro to school."] },
            { q: "We watch TV after dinner. (Juan)", a: ["Juan watches TV after dinner."] },
            { q: "I don't have breakfast. (He)", a: ["He doesn't have breakfast.", "He does not have breakfast."] },
            { q: "Do you study on Saturdays? (she)", a: ["Does she study on Saturdays?"] },
            { q: "They go to bed at ten. (My dad)", a: ["My dad goes to bed at ten."] },
            { q: "I have lunch at school. (Ana)", a: ["Ana has lunch at school."] }
          ]
        },
        {
          type: "tiles", title: "Where does the adverb go?",
          items: [
            { a: "I always get up at six." },
            { a: "She is never late for class." },
            { a: "We usually have dinner at eight." },
            { a: "Do you sometimes take a nap?" },
            { a: "He never does exercise on Mondays." }
          ]
        },
        {
          type: "write", title: "My typical day",
          prompt: "Write about a typical school day. Say what you do in the morning, afternoon and evening, with times. Use at least three frequency adverbs.",
          minWords: 60, maxWords: 90,
          model: "On school days I usually wake up at six. I take a shower, get dressed and have breakfast with my mom. I take the bus at six forty. My classes start at seven and finish at one. In the afternoon I have lunch at home and I do my homework. I sometimes play video games with my brother. I never go to bed before eleven!",
          bank: ["I usually wake up at", "Then I", "After that,", "My classes start at", "In the afternoon", "In the evening", "I always / never / sometimes", "I go to bed at"],
          checklist: [
            "I wrote about the **morning, afternoon and evening**.",
            "I used *at* with times: *at seven*.",
            "I used three frequency adverbs in the right place.",
            "I used *then* or *after that* to connect ideas."
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
            "What time do you get up?",
            "I get up at six o'clock.",
            "She takes a shower in the morning.",
            "I always have breakfast at home.",
            "He doesn't watch TV at night.",
            "Do you go to bed late?"
          ]
        },
        {
          type: "speak", title: "A day in the life of someone I know",
          prompt: "Record yourself for about one minute. Describe the routine of a person you know (a parent, a friend, a neighbor). Use *he* or *she*.",
          language: ["My … gets up at…", "He / She usually…", "Then he / she…", "He / She doesn't…", "In the evening…"],
          seconds: 75,
          checklist: ["use *-s / -es* with *he / she*?", "use *doesn't* at least once?", "use times and frequency adverbs?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 12 daily routine activities.", review: "Explanation: the vocabulary cards" },
    { can: "I can use the present simple with *I, you, we, they*.", review: "Explanation: present simple, affirmative and negative" },
    { can: "I can add *-s / -es / -ies* with *he, she, it*.", review: "Explanation: spelling; Writing activity 1" },
    { can: "I can ask *Do you…? Does she…? What time…?*", review: "Explanation: questions; Speaking activity 1 (listen and repeat)" },
    { can: "I can use *always, usually, sometimes, never* in the right place.", review: "Explanation: frequency adverbs; Writing activity 2" },
    { can: "I can describe a daily routine in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
