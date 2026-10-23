window.UNIT = {
  slug: "when-is-your-birthday",
  number: 17,
  title: "When Is Your Birthday?",
  level: "A1",
  minutes: 50,
  speakers: { "Regina": "f", "Max": "m", "Receptionist": "f", "Mr. Lara": "m", "Ms. Vidal": "f", "Host": "f", A: "f", B: "m" },
  focus: ["months and days of the week", "ordinal numbers: first, second, third…", "dates: May 5th, the fifth of May", "in / on / at for time", "When is…? What time is…?"],

  presentation: {
    scene: "🎂📅🎉🎈",
    situation: "Regina is organizing the class calendar of birthdays and special days. She's asking her classmate Max some questions.",
    warmup: {
      prompt: "Which celebrations do you have every year? Choose everything that is true.",
      options: ["my birthday", "New Year's Day", "Valentine's Day", "Mother's Day", "Father's Day", "Day of the Dead", "Independence Day", "Christmas", "Children's Day", "Teacher's Day", "May 5th in Puebla", "a saint's day"],
      response: "Great! In this unit you'll learn to talk about dates, birthdays and special days."
    },
    dialogueTitle: "The class calendar",
    dialogue: [
      { who: "Regina", line: "Hi, Max! I'm making a birthday calendar for our class. *When is your birthday*?" },
      { who: "Max", line: "*It's on March 21st*, the first day of spring!" },
      { who: "Regina", line: "Cool! And *what year* were you born?" },
      { who: "Max", line: "*In* 2007. What about you? When's your birthday?" },
      { who: "Regina", line: "Mine is *on the fifth of May*." },
      { who: "Max", line: "May 5th? That's a holiday in Puebla! There's a big parade." },
      { who: "Regina", line: "I know! Every year there's a party for me… and for the whole city!" },
      { who: "Max", line: "Ha ha! Lucky you. What time is the parade?" },
      { who: "Regina", line: "It starts *at* ten o'clock *in the morning*." }
    ]
  },

  objectives: [
    "I can say the months, the days of the week and ordinal numbers.",
    "I can say and write dates in English.",
    "I can ask and answer *When is…?* and *What time is…?*",
    "I can use *in, on* and *at* with times and dates."
  ],

  explanation: {
    vocabTitle: "Months and special days",
    vocab: [
      { word: "January", icon: "❄️" }, { word: "February", icon: "💘" }, { word: "March", icon: "🌱" },
      { word: "April", icon: "🌧️" }, { word: "May", icon: "🌸" }, { word: "June", icon: "☀️" },
      { word: "July", icon: "🏖️" }, { word: "August", icon: "🌻" }, { word: "September", icon: "🇲🇽" },
      { word: "October", icon: "🎃" }, { word: "November", icon: "💀" }, { word: "December", icon: "🎄" },
      { word: "birthday", icon: "🎂" }, { word: "holiday", icon: "🎉" }, { word: "weekend", icon: "🛋️" }
    ],
    grammar: [
      {
        title: "Ordinal numbers",
        head: ["Number", "Ordinal", "Short"],
        rows: [
          ["1, 2, 3", "*first, second, third*", "1st, 2nd, 3rd"],
          ["4, 5, 6", "*fourth, fifth, sixth*", "4th, 5th, 6th"],
          ["8, 9, 12", "*eighth, ninth, twelfth*", "8th, 9th, 12th"],
          ["20, 21, 22", "*twentieth, twenty-first, twenty-second*", "20th, 21st, 22nd"],
          ["30, 31", "*thirtieth, thirty-first*", "30th, 31st"]
        ],
        note: "Most ordinals add *-th*. Learn the special ones: *first, second, third, fifth, eighth, ninth, twelfth*."
      },
      {
        title: "Saying dates",
        head: ["Write", "Say"],
        rows: [
          ["May 5th / May 5", "*May fifth* or *the fifth of May*"],
          ["March 21st", "*March twenty-first* or *the twenty-first of March*"],
          ["2007", "*two thousand seven*"],
          ["1998", "*nineteen ninety-eight*"]
        ],
        note: "Months and days always start with a capital letter: *Monday, May*."
      },
      {
        title: "In, on, at",
        head: ["Preposition", "Use it with…", "Examples"],
        rows: [
          ["*in*", "months, years, seasons, parts of the day", "*in* May, *in* 2007, *in* summer, *in* the morning"],
          ["*on*", "days and dates", "*on* Monday, *on* May 5th, *on* my birthday, *on* the weekend"],
          ["*at*", "clock times and some expressions", "*at* ten o'clock, *at* night, *at* noon"]
        ]
      }
    ],
    watchOut: [
      ["My birthday is in May 5th.", "My birthday is on May 5th."],
      ["The class is on 7 o'clock.", "The class is at 7 o'clock."],
      ["I was born on 2007.", "I was born in 2007."],
      ["My birthday is in monday.", "My birthday is on Monday."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *in, on* or *at*.",
      items: [
        "My birthday is [[on]] June 12th.",
        "The concert starts [[at]] nine o'clock.",
        "I always study [[in]] the morning.",
        "We go on vacation [[in]] December."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to people making appointments and plans. Write the dates and times.",
      title: "Dates and times",
      script: [
        { who: "Receptionist", line: "Good afternoon, BUAP Language Center. How can I help you?" },
        { who: "Mr. Lara", line: "Hello. When is the next placement test, please?" },
        { who: "Receptionist", line: "It's on Saturday, August 16th, at nine o'clock in the morning." },
        { who: "Mr. Lara", line: "August 16th at nine. And when do classes start?" },
        { who: "Receptionist", line: "Classes start on Monday, August 25th." },
        { who: "Mr. Lara", line: "Thank you very much." },
        { who: "Host", line: "And now, the events in Puebla this week. On Wednesday, the 3rd, there's a free concert in the Zócalo at seven p.m." },
        { who: "Host", line: "On Friday, the 5th, the art museum is open until ten at night. And on Sunday, the 7th, there's a family bike ride at eight in the morning." },
        { who: "Ms. Vidal", line: "Class, remember: your project is due on Thursday, November 13th. And our final exam is on December 2nd, at eleven." }
      ],
      activities: [
        {
          type: "match", title: "When is it?",
          prompt: "Match each event with its date.",
          pairs: [
            ["the placement test", "Saturday, August 16th"],
            ["the first day of classes", "Monday, August 25th"],
            ["the free concert", "Wednesday, the 3rd"],
            ["the family bike ride", "Sunday, the 7th"],
            ["the project", "Thursday, November 13th"],
            ["the final exam", "December 2nd"]
          ]
        },
        {
          type: "gap", title: "What time?",
          prompt: "Listen again and write the time (for example: *nine* or *9*).",
          items: [
            "The placement test starts at [[nine|9|9:00|9 a.m.]] in the morning.",
            "The concert in the Zócalo is at [[seven|7|7:00|7 p.m.]] p.m.",
            "The museum is open until [[ten|10|10:00]] at night.",
            "The bike ride starts at [[eight|8|8:00]] in the morning.",
            "The final exam is at [[eleven|11|11:00]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read about three special days in Puebla.",
      title: "Puebla's calendar",
      text: [
        { author: "May 5th · Battle of Puebla", body: "On May 5th, 1862, the Mexican army won a famous battle in Puebla. Today there's a big parade in the city every year on this day. Schools and many offices are closed. In the United States, many people celebrate *Cinco de Mayo* too!" },
        { author: "November 1st and 2nd · Day of the Dead", body: "At the beginning of November, families in Puebla make altars with flowers, candles, bread and photos. In Huaquechula, a town near Puebla, the altars are very big and white. Many visitors go there on November 1st." },
        { author: "August and September · Chiles en nogada season", body: "From the end of July to September, restaurants in Puebla serve *chiles en nogada*. The dish has the colors of the Mexican flag. Many people eat it in September, the month of Independence Day, on September 16th." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the text. Are these sentences true or false?",
          items: [
            { s: "The Battle of Puebla was in 1862.", a: true },
            { s: "The parade is on May 15th.", a: false },
            { s: "Huaquechula is famous for its altars.", a: true },
            { s: "You can eat chiles en nogada in January.", a: false },
            { s: "Mexico's Independence Day is on September 16th.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Write the dates in words",
          prompt: "Write the dates the way we *say* them. Use *the … of …*",
          items: [
            { q: "May 5th", a: ["the fifth of May"] },
            { q: "November 2nd", a: ["the second of November"] },
            { q: "September 16th", a: ["the sixteenth of September"] },
            { q: "July 31st", a: ["the thirty-first of July", "the thirty first of July"] },
            { q: "February 3rd", a: ["the third of February"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice dates and prepositions, then write about your favorite day of the year.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "When is your birthday?" },
            { a: "My birthday is on July 4th." },
            { a: "I was born in 2008." },
            { a: "The party starts at eight o'clock." },
            { a: "We have English on Mondays." }
          ]
        },
        {
          type: "sort", title: "In, on or at?",
          prompt: "Put each time expression in the right box.",
          bins: ["in", "on", "at"],
          items: [
            { text: "April", bin: 0 }, { text: "2010", bin: 0 }, { text: "the afternoon", bin: 0 }, { text: "winter", bin: 0 },
            { text: "Friday", bin: 1 }, { text: "June 3rd", bin: 1 }, { text: "my birthday", bin: 1 },
            { text: "6:30", bin: 2 }, { text: "night", bin: 2 }, { text: "noon", bin: 2 }
          ]
        },
        {
          type: "write", title: "My favorite day of the year",
          prompt: "Write about your favorite day of the year (your birthday, a holiday, a family celebration). Say when it is, what you do, and at what time things happen.",
          minWords: 50, maxWords: 80,
          model: "My favorite day of the year is December 24th, Christmas Eve. In the afternoon, my family and I cook together. My grandma makes romeritos and my dad makes punch. At about ten o'clock at night, all my cousins arrive. We eat dinner at midnight and we open presents. On December 25th, we sleep until noon!",
          bank: ["My favorite day of the year is", "It's on", "In the morning / afternoon", "At … o'clock", "On that day,", "Every year"],
          checklist: [
            "I wrote the **date** correctly.",
            "I used *in, on* and *at*.",
            "I wrote at least two clock times.",
            "I used capital letters for months and days."
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
            "When is your birthday?",
            "It's on the fifth of May.",
            "My birthday is in October.",
            "The party is on Saturday at seven.",
            "What's the date today?",
            "Christmas is on December twenty-fifth."
          ]
        },
        {
          type: "speak", title: "My week",
          prompt: "Record yourself for about one minute. Talk about the important dates of this month or this week: classes, exams, birthdays, holidays. Say the dates and times.",
          language: ["This month…", "On Monday the…", "at … o'clock", "My … is on…", "There's a holiday on…"],
          seconds: 75,
          checklist: ["say at least four dates?", "use ordinal numbers?", "use *in, on, at*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can say the months and the days of the week.", review: "Explanation: the vocabulary cards" },
    { can: "I can say ordinal numbers from 1st to 31st.", review: "Explanation: ordinal numbers" },
    { can: "I can say and write dates in English.", review: "Explanation: saying dates; Reading activity 2" },
    { can: "I can use *in, on* and *at* with times and dates.", review: "Explanation: in, on, at; Writing activity 2" },
    { can: "I can understand dates and times when I listen.", review: "Listening: dates and times" },
    { can: "I can talk about special days in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
