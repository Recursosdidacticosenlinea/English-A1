window.UNIT = {
  slug: "my-school-day",
  number: 20,
  title: "My School Day",
  level: "A1",
  minutes: 50,
  speakers: { "Mia": "f", "Nico": "m", "Teacher": "f", "Emilio": "m", A: "f", B: "m" },
  focus: ["school subjects", "What time does the class start / finish?", "What's your favorite subject? Why?", "before / after", "timetable: on Mondays, from … to …"],

  presentation: {
    scene: "🏫📚🧪⏰",
    situation: "Nico is a new student at a high school. Mia shows him the timetable on the first day.",
    warmup: {
      prompt: "Which school subjects do you know in English? Choose all.",
      options: ["math", "English", "history", "science", "biology", "chemistry", "physics", "art", "P.E.", "geography"],
      response: "Great! In this unit you'll learn to talk about school subjects, timetables and your favorite classes."
    },
    dialogueTitle: "The timetable",
    dialogue: [
      { who: "Nico", line: "Mia, *what's our first class* on Mondays?" },
      { who: "Mia", line: "It's math. *It starts at* seven o'clock and *finishes at* eight thirty." },
      { who: "Nico", line: "So early! *What do we have after* math?" },
      { who: "Mia", line: "Chemistry. Then *we have* a break *from* ten *to* ten thirty." },
      { who: "Nico", line: "OK. *What's your favorite subject*?" },
      { who: "Mia", line: "English! *I like it because* the teacher is fun. And yours?" },
      { who: "Nico", line: "I love P.E. *I don't like* history *because* it's boring for me." },
      { who: "Mia", line: "Oh no! *We have* history every day *before* lunch!" }
    ]
  },

  objectives: [
    "I can name school subjects.",
    "I can talk about a timetable: *It starts at… / We have… on Mondays*.",
    "I can say my favorite subject and give a reason with *because*.",
    "I can use *before* and *after* to order activities."
  ],

  explanation: {
    vocabTitle: "School subjects and places",
    vocab: [
      { word: "math", icon: "➗" }, { word: "English", icon: "🇬🇧" }, { word: "Spanish", icon: "📝" },
      { word: "history", icon: "🏛️" }, { word: "geography", icon: "🌍" }, { word: "biology", icon: "🧬" },
      { word: "chemistry", icon: "🧪" }, { word: "physics", icon: "⚛️" }, { word: "art", icon: "🎨" },
      { word: "music", icon: "🎵" }, { word: "P.E. (physical education)", icon: "⚽" }, { word: "computer science", icon: "💻" },
      { word: "classroom", icon: "🏫" }, { word: "lab", icon: "🔬" }, { word: "break", icon: "🥪" }
    ],
    grammar: [
      {
        title: "Talking about the timetable",
        head: ["Question", "Answer"],
        rows: [
          ["*What time does* math *start*?", "*It starts at* 7:00."],
          ["*What time does* school *finish*?", "*It finishes at* 2:30."],
          ["*What do you have on* Mondays?", "*We have* math, chemistry and history."],
          ["*When is* the break?", "*From* 10:00 *to* 10:30."]
        ],
        note: "*It* = the class → *starts / finishes* with *-s*. Use *on* with days: *on Mondays*."
      },
      {
        title: "Favorite subjects and reasons",
        head: ["Structure", "Example"],
        rows: [
          ["*My favorite subject is…*", "*My favorite subject is* art."],
          ["*I like / love… because…*", "I love biology *because* it's interesting."],
          ["*I don't like… because…*", "I don't like physics *because* it's difficult."],
          ["*What's your favorite subject? Why?*", "*Because* the teacher is great."]
        ],
        note: "Useful adjectives: *interesting, boring, easy, difficult, fun, useful*."
      },
      {
        title: "Before and after",
        head: ["Word", "Example"],
        rows: [
          ["*before* + noun", "We have history *before* lunch."],
          ["*after* + noun", "*After* math, we have chemistry."],
          ["*then*", "First English, *then* art."]
        ]
      }
    ],
    watchOut: [
      ["The class start at 7.", "The class starts at 7."],
      ["My favorite subject is the math.", "My favorite subject is math."],
      ["I like history why it's fun.", "I like history because it's fun."],
      ["In Monday we have art.", "On Monday(s) we have art."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *starts, finishes, because, before, after, on*.",
      bank: ["starts", "finishes", "because", "before", "after", "on"],
      items: [
        "English [[starts]] at 9:00 and [[finishes]] at 10:00.",
        "I love art [[because]] it's fun.",
        "We have lunch [[after]] history.",
        "We have a break [[before]] P.E.",
        "We don't have music [[on]] Fridays."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Emilio talks to his teacher about his new timetable. Listen and complete it.",
      title: "A new timetable",
      script: [
        { who: "Teacher", line: "Hello, Emilio. Here's your new timetable. Do you have any questions?" },
        { who: "Emilio", line: "Yes. What time does school start on Tuesdays?" },
        { who: "Teacher", line: "At eight o'clock. Your first class is biology, in Lab 2." },
        { who: "Emilio", line: "And after biology?" },
        { who: "Teacher", line: "Geography, from nine to ten. Then you have a break." },
        { who: "Emilio", line: "Is there art on Tuesdays? It's my favorite subject." },
        { who: "Teacher", line: "Yes, there is. Art is after the break, from half past ten to twelve." },
        { who: "Emilio", line: "Great! And what time does school finish?" },
        { who: "Teacher", line: "On Tuesdays it finishes at two o'clock, after computer science." }
      ],
      activities: [
        {
          type: "gap", title: "Emilio's Tuesday",
          prompt: "Complete the timetable.",
          items: [
            "8:00 – 9:00 · [[biology]] (Lab 2)",
            "9:00 – 10:00 · [[geography]]",
            "10:00 – 10:30 · [[break]]",
            "10:30 – 12:00 · [[art]]",
            "School finishes at [[2:00|two o'clock|2]] after computer science."
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "School starts at seven on Tuesdays.", a: false },
            { s: "Emilio's favorite subject is art.", a: true },
            { s: "Art is before the break.", a: false },
            { s: "Computer science is the last class.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Three students answer a survey: \"What's your favorite subject?\"",
      title: "Student survey",
      text: [
        { author: "Paulina, 16", body: "My favorite subject is chemistry because I love experiments in the lab. My teacher is really patient. I don't like P.E. because I'm not very good at sports." },
        { author: "Diego, 17", body: "I love history! It's interesting because we learn about Mexico and other countries. My history class is on Wednesdays and Fridays, after lunch." },
        { author: "Sara, 15", body: "My favorite subject is computer science. It's useful because I want to be a programmer. Math is difficult for me, but I study every day." }
      ],
      activities: [
        {
          type: "match", title: "Why do they like it?",
          prompt: "Match the student with the reason.",
          pairs: [
            ["Paulina likes chemistry", "because she loves experiments."],
            ["Diego likes history", "because they learn about Mexico and other countries."],
            ["Sara likes computer science", "because she wants to be a programmer."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Paulina is very good at sports.", a: false },
            { s: "Diego has history on Wednesdays.", a: true },
            { s: "Diego's history class is before lunch.", a: false },
            { s: "Math is easy for Sara.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice sentences about school, then answer the survey.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What time does English start?" },
            { a: "My favorite subject is biology." },
            { a: "We have art after the break." },
            { a: "I like math because it's easy." },
            { a: "School finishes at two o'clock." }
          ]
        },
        {
          type: "sort", title: "Positive or negative?",
          prompt: "Sort the adjectives.",
          bins: ["😊 positive", "😕 negative"],
          items: [
            { text: "interesting", bin: 0 }, { text: "fun", bin: 0 }, { text: "easy", bin: 0 }, { text: "useful", bin: 0 },
            { text: "boring", bin: 1 }, { text: "difficult", bin: 1 }, { text: "stressful", bin: 1 }
          ]
        },
        {
          type: "write", title: "Answer the survey",
          prompt: "Write about your school or university day. Say when classes start and finish, what you have on one day, your favorite subject (and why) and a subject you don't like (and why).",
          minWords: 40, maxWords: 80,
          model: "My classes start at seven o'clock and finish at one. On Mondays I have math, English and chemistry. We have a break from ten to ten thirty. My favorite subject is English because the teacher is fun and it's useful. I don't like chemistry because it's difficult for me. After school I go home and have lunch.",
          bank: ["My classes start at…", "On Mondays I have…", "We have a break from … to …", "My favorite subject is … because…", "I don't like … because…", "After school I…"],
          checklist: [
            "I wrote start and finish times.",
            "I named at least **four** subjects.",
            "I used *because* twice.",
            "I used *before* or *after*."
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
            "What's your favorite subject?",
            "My favorite subject is biology.",
            "I like English because it's fun.",
            "What time does math start?",
            "It starts at seven and finishes at eight.",
            "We have a break after chemistry."
          ]
        },
        {
          type: "speak", title: "My favorite day at school",
          prompt: "Record yourself describing your favorite day of the school week. Say the classes, the times and why it's your favorite day.",
          language: ["My favorite day is…", "First I have…", "Then…", "After the break…", "It's my favorite day because…"],
          seconds: 60,
          checklist: ["name the subjects?", "say times?", "use *because*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name school subjects.", review: "Explanation: vocabulary" },
    { can: "I can ask and say when classes start and finish.", review: "Explanation: talking about the timetable" },
    { can: "I can say my favorite subject.", review: "Presentation; Reading" },
    { can: "I can give a reason with *because*.", review: "Explanation: favorite subjects and reasons" },
    { can: "I can use *before* and *after*.", review: "Explanation: before and after; Quick check" },
    { can: "I can write about my school day.", review: "Writing activity 3" }
  ]
};
