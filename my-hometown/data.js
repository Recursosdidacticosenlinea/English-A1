window.UNIT = {
  slug: "my-hometown",
  number: 38,
  title: "My Hometown",
  level: "A1",
  minutes: 50,
  speakers: { "Guide": "f", "Kenji": "m", "Mónica": "f", "Pablo": "m", A: "f", B: "m" },
  focus: ["describing a town or city", "adjectives: big, small, old, modern, busy, quiet", "It's famous for…", "There's / There are + has", "very, quite, not very"],

  presentation: {
    scene: "🏙️⛪🌋🏞️",
    situation: "Mónica gives a short presentation about her hometown, Atlixco, to the international students in her English class. Kenji asks her questions.",
    warmup: {
      prompt: "Which adjectives can describe a city? Choose all.",
      options: ["big", "small", "old", "modern", "busy", "quiet", "beautiful", "ugly", "clean", "dangerous"],
      response: "Nice! In this unit you'll learn to describe your hometown."
    },
    dialogueTitle: "A presentation about Atlixco",
    dialogue: [
      { who: "Mónica", line: "*My hometown is* Atlixco. *It's* in the state of Puebla, *near* the Popocatépetl volcano." },
      { who: "Mónica", line: "It's *a small town*, but it's *very beautiful*. *It's famous for* its flowers." },
      { who: "Kenji", line: "*Is it* old?" },
      { who: "Mónica", line: "Yes, it's *quite old*. *There are* a lot of old churches and colorful houses." },
      { who: "Kenji", line: "*What's the weather like*?" },
      { who: "Mónica", line: "It's warm all year! Atlixco *has* a famous flower festival in November, called *Huey Atlixcáyotl*." },
      { who: "Kenji", line: "Cool! *Is it busy*?" },
      { who: "Mónica", line: "*Not very*. It's quiet during the week, but on weekends *there are* a lot of tourists." }
    ]
  },

  objectives: [
    "I can describe a town or city with adjectives.",
    "I can say where a place is and what it's famous for.",
    "I can use *there is / there are* and *has* to describe a place.",
    "I can give a short presentation about my hometown."
  ],

  explanation: {
    vocabTitle: "Describing places",
    vocab: [
      { word: "big", icon: "🏙️" }, { word: "small", icon: "🏘️" }, { word: "old", icon: "🏚️" },
      { word: "modern", icon: "🏢" }, { word: "busy", icon: "🚦" }, { word: "quiet", icon: "🌙" },
      { word: "clean", icon: "✨" }, { word: "dirty", icon: "🗑️" }, { word: "safe", icon: "🛡️" },
      { word: "dangerous", icon: "⚠️" }, { word: "colorful", icon: "🎨" }, { word: "famous for", icon: "⭐" },
      { word: "near", icon: "📍" }, { word: "state", icon: "🗺️" }, { word: "population", icon: "👥" }
    ],
    grammar: [
      {
        title: "Describing a town",
        head: ["Structure", "Example"],
        rows: [
          ["*It's* + adjective", "*It's* small and quiet."],
          ["*It's a* + adjective + noun", "*It's a* beautiful town."],
          ["*It's in / near…*", "*It's in* Puebla, *near* the volcano."],
          ["*It's famous for* + noun", "*It's famous for* its flowers / its food."],
          ["*It has…* / *There's / There are…*", "*It has* a big market. *There are* a lot of churches."]
        ]
      },
      {
        title: "How much? very, quite, not very",
        head: ["Word", "Example"],
        rows: [
          ["*very*", "Mexico City is *very* big."],
          ["*quite*", "Atlixco is *quite* old."],
          ["*not very*", "It's *not very* busy."],
          ["*a lot of*", "There are *a lot of* tourists on weekends."]
        ]
      },
      {
        title: "Asking about a place",
        head: ["Question", "Answer"],
        rows: [
          ["*Where is* your hometown?", "It's in Oaxaca, in the south of Mexico."],
          ["*What's it like?*", "It's small, quiet and friendly."],
          ["*What's it famous for?*", "It's famous for mezcal and mole."],
          ["*Is it* big?", "No, *it isn't*. It's a small town."]
        ],
        note: "*What's it like?* asks for a description — not *Do you like it?*"
      }
    ],
    watchOut: [
      ["Is a small city.", "It's a small city."],
      ["It's a city very beautiful.", "It's a very beautiful city."],
      ["It's famous by its food.", "It's famous for its food."],
      ["How is your city? (description)", "What's your city like?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      bank: ["famous", "near", "like", "has", "quite", "There"],
      items: [
        "What's your hometown [[like]]?",
        "It's [[near]] the beach, only 20 minutes away.",
        "It's [[famous]] for its chocolate.",
        "The town [[has]] a big market.",
        "[[There]] are a lot of museums.",
        "It's [[quite]] old — about 400 years."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A tour guide describes the city of Guanajuato to a group of tourists. Listen.",
      title: "Welcome to Guanajuato",
      script: [
        { who: "Guide", line: "Good morning and welcome to Guanajuato! Guanajuato is in the center of Mexico. It's not very big — about two hundred thousand people live here." },
        { who: "Guide", line: "The city is very old and very colorful. It's famous for its small streets, called callejones, and for the Cervantino Festival in October." },
        { who: "Pablo", line: "Are there a lot of cars?" },
        { who: "Guide", line: "Not in the center. There are tunnels under the city for the cars. So the center is quiet and great for walking." },
        { who: "Pablo", line: "Is it safe?" },
        { who: "Guide", line: "Yes, it's quite safe. And it has a big university, so there are a lot of young people." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Guanajuato is in the north of Mexico.", a: false },
            { s: "It's a very big city.", a: false },
            { s: "The Cervantino Festival is in October.", a: true },
            { s: "There are tunnels for cars under the city.", a: true },
            { s: "There aren't many young people.", a: false }
          ]
        },
        {
          type: "gap", title: "Complete the description",
          prompt: "Write one word.",
          items: [
            "Guanajuato is very old and very [[colorful]].",
            "The small streets are called [[callejones]].",
            "The center is [[quiet]] and great for walking.",
            "The city has a big [[university]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read three short travel blog posts about Mexican towns.",
      title: "Small towns, big hearts",
      text: [
        { author: "Cuetzalan, Puebla", body: "Cuetzalan is a small town in the mountains of the Sierra Norte. It's green and it rains a lot. There are old stone streets and a big market on Sundays. It's famous for its coffee and its traditional dances." },
        { author: "Bacalar, Quintana Roo", body: "Bacalar is a quiet town in the south-east of Mexico. It has a beautiful lake with seven colors of blue! It's very hot and sunny all year. There aren't a lot of big hotels, so it's very relaxing." },
        { author: "Real de Catorce, San Luis Potosí", body: "Real de Catorce is an old mining town in the desert. It's very quiet. To get there, you go through a long, dark tunnel. There are only about one thousand people. At night it's cold, but the stars are amazing." }
      ],
      activities: [
        {
          type: "match", title: "Which town?",
          prompt: "Match the town with what it's famous for.",
          pairs: [
            ["Cuetzalan", "coffee and traditional dances"],
            ["Bacalar", "a lake with seven colors of blue"],
            ["Real de Catorce", "a long tunnel and amazing stars"]
          ]
        },
        {
          type: "sort", title: "Describe the town",
          prompt: "Sort the descriptions.",
          bins: ["Cuetzalan", "Bacalar", "Real de Catorce"],
          items: [
            { text: "in the mountains", bin: 0 }, { text: "it rains a lot", bin: 0 }, { text: "a market on Sundays", bin: 0 },
            { text: "hot and sunny all year", bin: 1 }, { text: "not many big hotels", bin: 1 },
            { text: "in the desert", bin: 2 }, { text: "about 1,000 people", bin: 2 }, { text: "cold at night", bin: 2 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice describing places, then write about your hometown.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What's your hometown like?" },
            { a: "It's a very beautiful city." },
            { a: "It's famous for its food." },
            { a: "There are a lot of old churches." },
            { a: "It isn't very big." }
          ]
        },
        {
          type: "rewrite", title: "Opposites",
          prompt: "Write the opposite. Example: *It's big.* → *It's small.*",
          items: [
            { q: "It's old.", a: ["It's modern.", "It's new.", "It is modern.", "It is new."] },
            { q: "It's busy.", a: ["It's quiet.", "It is quiet."] },
            { q: "It's dirty.", a: ["It's clean.", "It is clean."] },
            { q: "It's dangerous.", a: ["It's safe.", "It is safe."] }
          ]
        },
        {
          type: "write", title: "My hometown",
          prompt: "Write a blog post about your hometown (or a town you love). Say where it is, what it's like, what there is, what it's famous for and the best time to visit.",
          minWords: 45, maxWords: 90,
          model: "My hometown is Zacatlán. It's in the north of Puebla, in the mountains. It's a small town, but it's very beautiful. There's an old clock in the main square and there are a lot of apple trees. Zacatlán is famous for its apples and its cider. It's quite cold and foggy in winter. The best time to visit is August, for the Apple Fair!",
          bank: ["My hometown is…", "It's in…, near…", "It's a … town / city.", "There's / There are…", "It has…", "It's famous for…", "The best time to visit is…"],
          checklist: [
            "I said **where** it is.",
            "I used at least **four** adjectives.",
            "I used *It's famous for…*",
            "I used *very, quite* or *not very*."
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
            "Where is your hometown?",
            "It's a small town near the volcano.",
            "What's it like?",
            "It's quiet and very beautiful.",
            "It's famous for its flowers.",
            "There are a lot of old churches."
          ]
        },
        {
          type: "speak", title: "A one-minute presentation",
          prompt: "Record a one-minute presentation about your hometown for international students, like Mónica's. Invite them to visit.",
          language: ["My hometown is…", "It's in…", "It's very / quite…", "There's / There are…", "It's famous for…", "Come and visit!"],
          seconds: 75,
          checklist: ["say where it is?", "describe it with adjectives?", "say what it's famous for?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe a town with adjectives.", review: "Explanation: vocabulary; Writing activity 2" },
    { can: "I can say where a place is.", review: "Explanation: describing a town" },
    { can: "I can say what a place is famous for.", review: "Reading: small towns, big hearts" },
    { can: "I can use *very, quite, not very*.", review: "Explanation: how much?" },
    { can: "I can ask *What's it like?*", review: "Explanation: asking about a place; Speaking activity 1 (listen and repeat)" },
    { can: "I can write and present a description of my hometown.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
