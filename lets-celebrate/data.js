window.UNIT = {
  slug: "lets-celebrate",
  number: 40,
  title: "Let's Celebrate!",
  level: "A1",
  minutes: 50,
  speakers: { "Emma": "f", "Rodrigo": "m", "Teacher": "f", "Yuki": "f", "Omar": "m", A: "f", B: "m" },
  focus: ["festivals and celebrations", "present simple for traditions: People decorate…", "in / on / at with dates", "Happy birthday! Merry Christmas!", "special food and objects"],

  presentation: {
    scene: "🎉🕯️💀🎄",
    situation: "Emma, an exchange student from Canada, sees an ofrenda at Rodrigo's house. It's the end of October.",
    warmup: {
      prompt: "Which celebrations do you know in English? Choose all.",
      options: ["birthday", "Christmas", "New Year's Eve", "Day of the Dead", "Independence Day", "Mother's Day", "Valentine's Day", "Easter", "Halloween", "wedding"],
      response: "Let's celebrate! In this unit you'll learn to talk about festivals and traditions."
    },
    dialogueTitle: "The ofrenda",
    dialogue: [
      { who: "Emma", line: "Wow, Rodrigo! What's this? It's beautiful." },
      { who: "Rodrigo", line: "It's an *ofrenda*. *We celebrate* Day of the Dead *on November 1st and 2nd*." },
      { who: "Emma", line: "*What do people do*?" },
      { who: "Rodrigo", line: "*We remember* family members who are dead. *We put* photos, candles and orange flowers on the ofrenda." },
      { who: "Emma", line: "And the bread?" },
      { who: "Rodrigo", line: "That's *pan de muerto*. *People eat it* in October and November. *Do you celebrate* Halloween in Canada?" },
      { who: "Emma", line: "Yes! *On October 31st*, children *wear* costumes and *go* from house to house for candy." },
      { who: "Rodrigo", line: "Here kids *do that* too! Let's buy some pan de muerto — *it's delicious*!" }
    ]
  },

  objectives: [
    "I can name important celebrations.",
    "I can describe traditions with the present simple.",
    "I can use *in, on, at* with dates and times.",
    "I can use greetings for special days."
  ],

  explanation: {
    vocabTitle: "Celebrations",
    vocab: [
      { word: "birthday", icon: "🎂" }, { word: "Christmas", icon: "🎄" }, { word: "New Year's Eve", icon: "🎆" },
      { word: "Day of the Dead", icon: "💀" }, { word: "Independence Day", icon: "🇲🇽" }, { word: "wedding", icon: "💒" },
      { word: "candle", icon: "🕯️" }, { word: "present / gift", icon: "🎁" }, { word: "costume", icon: "🎭" },
      { word: "fireworks", icon: "🎇" }, { word: "decorations", icon: "🎊" }, { word: "parade", icon: "🎺" },
      { word: "piñata", icon: "🪅" }, { word: "card", icon: "💌" }, { word: "celebrate", icon: "🥳" }
    ],
    grammar: [
      {
        title: "Describing traditions",
        head: ["Structure", "Example"],
        rows: [
          ["*People* + verb", "*People decorate* their houses."],
          ["*We* + verb", "*We eat* twelve grapes at midnight."],
          ["*Children* + verb", "*Children break* a piñata."],
          ["*It's a day / time for…*", "*It's a time for* family."],
          ["negative", "We *don't work* on September 16th."]
        ],
        note: "We use the present simple for traditions because they happen every year."
      },
      {
        title: "In, on, at with time",
        head: ["Preposition", "Use", "Example"],
        rows: [
          ["*in*", "months, seasons", "*in* December, *in* summer"],
          ["*on*", "days and dates", "*on* Christmas Day, *on* November 2nd, *on* my birthday"],
          ["*at*", "clock times, *night*, *midnight*", "*at* midnight, *at* night, *at* 8 p.m."]
        ]
      },
      {
        title: "Special greetings",
        head: ["Day", "Say"],
        rows: [
          ["birthday", "*Happy birthday!*"],
          ["Christmas", "*Merry Christmas!*"],
          ["New Year", "*Happy New Year!*"],
          ["wedding", "*Congratulations!*"],
          ["any celebration", "*Have a great day! / Cheers!*"]
        ]
      }
    ],
    watchOut: [
      ["We celebrate in November 2nd.", "We celebrate on November 2nd."],
      ["We celebrate the Christmas.", "We celebrate Christmas."],
      ["People eats tamales.", "People eat tamales."],
      ["in midnight", "at midnight"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *in, on* or *at*.",
      items: [
        "We celebrate Independence Day [[on]] September 16th.",
        "We eat twelve grapes [[at]] midnight.",
        "Christmas is [[in]] December.",
        "My party is [[on]] Saturday.",
        "The fireworks start [[at]] 10 p.m."
      ]
    }
  },

  skills: {
    listening: {
      intro: "In English class, two international students describe a celebration from their country. Listen.",
      title: "Celebrations around the world",
      script: [
        { who: "Teacher", line: "Yuki, tell us about a celebration in Japan." },
        { who: "Yuki", line: "OK! New Year is very important in Japan. On January 1st, families visit a temple. We eat special food called osechi. Children get money in small envelopes from their grandparents." },
        { who: "Teacher", line: "Very nice! Omar?" },
        { who: "Omar", line: "In Morocco we celebrate Eid. People wear new clothes and visit their family and friends. We eat a lot of sweets and cakes. It's a happy day, and children get presents too." },
        { who: "Teacher", line: "Thank you both! Children are lucky in every country!" }
      ],
      activities: [
        {
          type: "sort", title: "Japan or Morocco?",
          prompt: "Sort the traditions.",
          bins: ["New Year in Japan", "Eid in Morocco"],
          items: [
            { text: "visit a temple", bin: 0 }, { text: "eat osechi", bin: 0 }, { text: "money in small envelopes", bin: 0 },
            { text: "wear new clothes", bin: 1 }, { text: "eat a lot of sweets", bin: 1 }, { text: "visit family and friends", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Japanese New Year is on January 1st.", a: true },
            { s: "Children get money from their teachers.", a: false },
            { s: "In Morocco people wear old clothes for Eid.", a: false },
            { s: "Children get presents in both countries.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a text for international students about celebrations in Mexico.",
      title: "A year of fiestas",
      text: [
        { author: "September", body: "On the night of September 15th, people go to the main square and shout \"¡Viva México!\" There are fireworks and music. People eat pozole and chiles en nogada. September 16th is a holiday." },
        { author: "December", body: "From December 16th to 24th there are posadas. People sing, break piñatas and drink hot ponche. On December 24th families have a big dinner at night." },
        { author: "January", body: "On January 6th, Three Kings' Day, children get presents. Families eat a special bread, the rosca. There's a small doll in the bread. If you find it, you buy tamales for everyone on February 2nd!" }
      ],
      activities: [
        {
          type: "match", title: "When is it?",
          prompt: "Match the tradition with the date.",
          pairs: [
            ["shout \"¡Viva México!\"", "on the night of September 15th"],
            ["posadas", "from December 16th to 24th"],
            ["a big family dinner", "on December 24th"],
            ["children get presents", "on January 6th"],
            ["tamales for everyone", "on February 2nd"]
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with one word.",
          items: [
            "In September there are [[fireworks]] and music.",
            "At posadas people break [[piñatas|pinatas]].",
            "People drink hot [[ponche]] in December.",
            "On Three Kings' Day families eat a special bread called the [[rosca]].",
            "There's a small [[doll]] in the bread."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice traditions and prepositions, then write about your favorite celebration.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "We celebrate my birthday in May." },
            { a: "People decorate their houses with lights." },
            { a: "Children break a piñata at parties." },
            { a: "We eat twelve grapes at midnight." },
            { a: "What do people do on Christmas Day?" }
          ]
        },
        {
          type: "match", title: "What do you say?",
          prompt: "Match the situation with the greeting.",
          pairs: [
            ["It's your friend's birthday.", "Happy birthday!"],
            ["It's December 25th.", "Merry Christmas!"],
            ["It's midnight on December 31st.", "Happy New Year!"],
            ["Your cousin is getting married.", "Congratulations!"]
          ]
        },
        {
          type: "write", title: "My favorite celebration",
          prompt: "Write about your favorite celebration for an international website. Say when it is, what people do, eat and wear, and why you like it. Use *in, on, at*.",
          minWords: 45, maxWords: 90,
          model: "My favorite celebration is Christmas. In Mexico we celebrate on the night of December 24th. My family has a big dinner with bacalao and romeritos. At midnight we hug and say \"Merry Christmas!\" Children open their presents on December 25th. We decorate the house with lights and a nacimiento. I love it because all my family is together.",
          bank: ["My favorite celebration is…", "We celebrate it in / on…", "People…", "We eat…", "At midnight…", "We decorate…", "I love it because…"],
          checklist: [
            "I used the **present simple** for traditions.",
            "I used *in, on* or *at* correctly.",
            "I described food, activities or clothes.",
            "I said why I like it."
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
            "We celebrate Day of the Dead in November.",
            "People put flowers and candles on the ofrenda.",
            "We eat twelve grapes at midnight.",
            "Happy birthday!",
            "Merry Christmas and Happy New Year!",
            "What do people eat at Christmas?"
          ]
        },
        {
          type: "speak", title: "A celebration in my family",
          prompt: "Record yourself describing how your family celebrates a special day (a birthday, Christmas, a saint's day…).",
          language: ["In my family we celebrate…", "It's on / in…", "We usually…", "My grandma makes…", "At night / at midnight…", "It's my favorite day because…"],
          seconds: 60,
          checklist: ["say when it is?", "describe at least three traditions?", "use the present simple?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name important celebrations.", review: "Explanation: vocabulary" },
    { can: "I can describe traditions with the present simple.", review: "Explanation: describing traditions" },
    { can: "I can use *in, on, at* with dates and times.", review: "Explanation: in, on, at; Quick check" },
    { can: "I can say greetings for special days.", review: "Explanation: special greetings; Writing activity 2" },
    { can: "I can understand people describing a festival.", review: "Listening and Reading" },
    { can: "I can write about my favorite celebration.", review: "Writing activity 3" }
  ]
};
