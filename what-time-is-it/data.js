window.UNIT = {
  slug: "what-time-is-it",
  number: 16,
  title: "What Time Is It?",
  level: "A1",
  minutes: 50,
  speakers: { "Iker": "m", "Mom": "f", "Announcer": "f", "Andrés": "m", "Camila": "f", A: "m", B: "f" },
  focus: ["telling the time", "It's half past seven. It's 7:30.", "o'clock, quarter past, quarter to", "at + time: at 9 o'clock", "a.m. / p.m., in the morning"],

  presentation: {
    scene: "⏰🕖🚌😱",
    situation: "It's Monday morning. Iker is late for school, and his mom is not happy.",
    warmup: {
      prompt: "Which time words do you know? Choose all.",
      options: ["o'clock", "half", "quarter", "minute", "hour", "morning", "afternoon", "evening", "late", "early"],
      response: "Good! In this unit you'll learn to tell the time and say when things happen."
    },
    dialogueTitle: "Late again!",
    dialogue: [
      { who: "Mom", line: "Iker! Wake up! *It's quarter past seven*!" },
      { who: "Iker", line: "What? *What time is it*?" },
      { who: "Mom", line: "*It's seven fifteen*. Your class is *at eight o'clock*." },
      { who: "Iker", line: "Oh no! And the bus is *at half past seven*!" },
      { who: "Mom", line: "Yes. *You've got fifteen minutes*. Hurry!" },
      { who: "Iker", line: "OK, OK… Mom, *what time is it now*?" },
      { who: "Mom", line: "*It's twenty-five past seven*. Go! Your breakfast is in your backpack." },
      { who: "Iker", line: "Thanks, Mom! See you *at three in the afternoon*!" }
    ]
  },

  objectives: [
    "I can ask and tell the time.",
    "I can use *o'clock, half past, quarter past, quarter to*.",
    "I can say when things happen with *at* + time.",
    "I can understand times in announcements and schedules."
  ],

  explanation: {
    vocabTitle: "Time words",
    vocab: [
      { word: "seven o'clock", icon: "🕖" }, { word: "quarter past seven", icon: "🕖" }, { word: "half past seven", icon: "🕢" },
      { word: "quarter to eight", icon: "🕗" }, { word: "minute", icon: "⏱️" }, { word: "hour", icon: "⌛" },
      { word: "clock", icon: "🕰️" }, { word: "watch", icon: "⌚" }, { word: "alarm", icon: "⏰" },
      { word: "midday / noon", icon: "☀️" }, { word: "midnight", icon: "🌑" }, { word: "early", icon: "🐓" },
      { word: "late", icon: "😰" }, { word: "on time", icon: "✅" }, { word: "schedule", icon: "🗓️" }
    ],
    grammar: [
      {
        title: "Telling the time: two ways",
        head: ["Time", "Way 1 (digital)", "Way 2 (traditional)"],
        rows: [
          ["7:00", "seven", "seven *o'clock*"],
          ["7:15", "seven fifteen", "*quarter past* seven"],
          ["7:30", "seven thirty", "*half past* seven"],
          ["7:45", "seven forty-five", "*quarter to* eight"],
          ["7:10", "seven ten", "ten *past* seven"],
          ["7:50", "seven fifty", "ten *to* eight"]
        ],
        note: "*Past* = after the hour (minutes 1–30). *To* = before the next hour (minutes 31–59). Only use *o'clock* with exact hours."
      },
      {
        title: "Asking and saying times",
        head: ["Question", "Answer"],
        rows: [
          ["*What time is it?* / *What's the time?*", "*It's* half past three."],
          ["*What time is* the class?", "It's *at* eight o'clock."],
          ["*When is* the bus?", "*At* 7:30."],
          ["*Excuse me, have you got the time?*", "Yes, it's ten to five."]
        ],
        note: "Use *at* with clock times: *at 8:00, at midnight, at noon*."
      },
      {
        title: "Parts of the day",
        head: ["Time", "Expression"],
        rows: [
          ["5:00–12:00", "*in the morning* / *a.m.*"],
          ["12:00–18:00", "*in the afternoon* / *p.m.*"],
          ["18:00–21:00", "*in the evening* / *p.m.*"],
          ["21:00–5:00", "*at night* / *p.m. or a.m.*"]
        ],
        note: "In English we use the 12-hour clock in conversation: *15:00 = three in the afternoon = 3 p.m.*"
      }
    ],
    watchOut: [
      ["It's 7:30 o'clock.", "It's 7:30. / It's half past seven."],
      ["What hour is it?", "What time is it?"],
      ["The class is in 8:00.", "The class is at 8:00."],
      ["It's quarter for eight.", "It's quarter to eight."]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match the clock time with the words.",
      pairs: [
        ["9:00", "nine o'clock"],
        ["9:15", "quarter past nine"],
        ["9:30", "half past nine"],
        ["9:45", "quarter to ten"],
        ["9:50", "ten to ten"],
        ["9:05", "five past nine"]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Andrés and Camila are at a bus station. Listen to the announcements and their conversation.",
      title: "At the bus station",
      script: [
        { who: "Announcer", line: "Good afternoon. The bus to Mexico City leaves at four fifteen from gate three." },
        { who: "Andrés", line: "Camila, what time is it?" },
        { who: "Camila", line: "It's ten to four. We've got twenty-five minutes." },
        { who: "Andrés", line: "Great. Let's get a coffee." },
        { who: "Announcer", line: "Attention, please. The bus to Oaxaca is late. It now leaves at half past six, from gate five." },
        { who: "Camila", line: "Oh, poor people! Two hours late." },
        { who: "Andrés", line: "And what time do we arrive in Mexico City?" },
        { who: "Camila", line: "At quarter to seven in the evening. My sister is at the station at seven." }
      ],
      activities: [
        {
          type: "gap", title: "Complete the screen",
          prompt: "Write the times in numbers, for example *4:15*.",
          items: [
            "Mexico City: leaves at [[4:15]] · gate [[3|three]]",
            "Oaxaca: leaves at [[6:30]] · gate [[5|five]]",
            "Time now (Camila): [[3:50]]",
            "Arrival in Mexico City: [[6:45]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Andrés and Camila want a coffee.", a: true },
            { s: "The Oaxaca bus is on time.", a: false },
            { s: "They arrive in Mexico City in the morning.", a: false },
            { s: "Camila's sister is at the station at seven.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the information board at a cultural center.",
      title: "Casa de Cultura · Saturday activities",
      text: [
        { author: "Morning", body: "Yoga in the garden: 8:00–9:00. Painting for children: from half past nine to eleven o'clock. The café opens at 9:00." },
        { author: "Afternoon", body: "Guitar class: 1:15–2:45 p.m. Free English conversation club: from quarter to four to quarter to five. Bring a friend!" },
        { author: "Evening", body: "Movie night: the film starts at 7:30 p.m. Doors open at quarter past seven. The center closes at 10 p.m." }
      ],
      activities: [
        {
          type: "match", title: "When is it?",
          prompt: "Match the activity with the start time.",
          pairs: [
            ["yoga", "eight o'clock"],
            ["painting for children", "half past nine"],
            ["guitar class", "quarter past one"],
            ["English conversation club", "quarter to four"],
            ["the movie", "half past seven"]
          ]
        },
        {
          type: "rewrite", title: "Write the time in words",
          prompt: "Use *past, to, half* or *o'clock*.",
          items: [
            { q: "11:00", a: ["eleven o'clock", "It's eleven o'clock."] },
            { q: "2:45", a: ["quarter to three", "a quarter to three", "It's quarter to three."] },
            { q: "4:45", a: ["quarter to five", "a quarter to five", "It's quarter to five."] },
            { q: "7:15", a: ["quarter past seven", "a quarter past seven", "It's quarter past seven."] },
            { q: "10:30", a: ["half past ten", "It's half past ten."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice questions about time, then write your Saturday schedule.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What time is it?" },
            { a: "It's half past six." },
            { a: "The movie is at eight o'clock." },
            { a: "What time is your English class?" },
            { a: "We're late for the bus!" }
          ]
        },
        {
          type: "gap", title: "At, in or on?",
          prompt: "Complete with *at* or *in*.",
          items: [
            "My class is [[at]] 8 o'clock.",
            "I'm tired [[in]] the morning.",
            "The party is [[at]] midnight.",
            "We watch TV [[in]] the evening.",
            "Lunch is [[at]] 2:30."
          ]
        },
        {
          type: "write", title: "My ideal Saturday",
          prompt: "Write your ideal Saturday schedule. Say at least five things and the time of each one. Use *at*, *o'clock*, *half past*, *quarter past / to*.",
          minWords: 40, maxWords: 80,
          model: "My ideal Saturday starts at ten o'clock. Breakfast is at half past ten — pancakes! At twelve o'clock I go to the park with my dog. Lunch with my family is at three in the afternoon. At quarter to six I watch a movie. Dinner is at half past eight, and I go to bed at midnight.",
          bank: ["My day starts at…", "At … o'clock I…", "… is at half past…", "In the afternoon…", "At quarter to…", "I go to bed at…"],
          checklist: [
            "I wrote at least **five** times.",
            "I used *at* with each time.",
            "I used *half past* or *quarter past / to*.",
            "I used *in the morning / afternoon / evening*."
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
            "What time is it?",
            "It's half past seven.",
            "It's quarter to eight.",
            "My class is at eight o'clock.",
            "The bus is at ten past nine.",
            "We have lunch at two in the afternoon."
          ]
        },
        {
          type: "speak", title: "My Monday",
          prompt: "Record yourself describing a typical Monday with times: when your day starts, your classes or work, meals and when you go to bed.",
          language: ["My day starts at…", "My first class is at…", "Lunch is at…", "In the evening, at…", "I go to bed at…"],
          seconds: 60,
          checklist: ["say at least five times?", "use *at* + time?", "use parts of the day?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can ask *What time is it?* and answer.", review: "Explanation: asking and saying times" },
    { can: "I can say times with *o'clock, half past, quarter past / to*.", review: "Explanation: telling the time; Quick check" },
    { can: "I can say when things happen with *at* + time.", review: "Writing activity 2" },
    { can: "I can use *in the morning / afternoon / evening*.", review: "Explanation: parts of the day" },
    { can: "I can understand times in announcements and schedules.", review: "Listening and Reading" },
    { can: "I can write and talk about my schedule.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
