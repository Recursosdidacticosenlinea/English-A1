window.UNIT = {
  slug: "where-were-you",
  number: 46,
  title: "Where Were You?",
  level: "A1",
  minutes: 50,
  speakers: { "Daniela": "f", "Óscar": "m", "Police officer": "m", "Woman": "f", A: "f", B: "m" },
  focus: ["past of be: was / were", "wasn't / weren't", "Where were you? Was it fun?", "yesterday, last night, last weekend, ago", "There was / There were"],

  presentation: {
    scene: "🕰️❓🎉📍",
    situation: "It's Monday. Daniela calls her friend Óscar. He wasn't at the party on Saturday.",
    warmup: {
      prompt: "Where were you last Saturday night? Choose one or more.",
      options: ["at home", "at a party", "at work", "at a restaurant", "at the movies", "at a friend's house", "at a concert", "at my grandparents' house", "in bed", "at school"],
      response: "Interesting! In this unit you'll learn to talk about the past with *was* and *were*."
    },
    dialogueTitle: "The party",
    dialogue: [
      { who: "Daniela", line: "Óscar! *Where were you* on Saturday? *You weren't* at Paola's party!" },
      { who: "Óscar", line: "I know. *I was* at my cousin's wedding in Tlaxcala." },
      { who: "Daniela", line: "Oh! *Was it* fun?" },
      { who: "Óscar", line: "*Yes, it was*. The music *was* great and *there were* about two hundred people!" },
      { who: "Daniela", line: "Wow. *Were you* tired on Sunday?" },
      { who: "Óscar", line: "Very tired! *I was* in bed all day. And the party? *How was it*?" },
      { who: "Daniela", line: "*It wasn't* very good. *There was* a lot of food, but the music *wasn't* good. *We were* sad without you!" }
    ]
  },

  objectives: [
    "I can use *was* and *were* to talk about the past.",
    "I can make negatives with *wasn't* and *weren't*.",
    "I can ask *Where were you? Was it…? How was…?*",
    "I can use past time expressions: *yesterday, last…, ago*."
  ],

  explanation: {
    vocabTitle: "Past time and places",
    vocab: [
      { word: "yesterday", icon: "📆" }, { word: "last night", icon: "🌙" }, { word: "last weekend", icon: "🗓️" },
      { word: "last year", icon: "📅" }, { word: "two days ago", icon: "⏪" }, { word: "at home", icon: "🏠" },
      { word: "at work", icon: "💼" }, { word: "at a party", icon: "🎉" }, { word: "at the beach", icon: "🏖️" },
      { word: "wedding", icon: "💒" }, { word: "fun", icon: "😄" }, { word: "boring", icon: "🥱" },
      { word: "tired", icon: "😴" }, { word: "crowded", icon: "👥" }, { word: "great", icon: "👍" }
    ],
    grammar: [
      {
        title: "Was / were",
        head: ["Subject", "Affirmative", "Negative"],
        rows: [
          ["I / he / she / it", "I *was* at home.", "It *wasn't* fun."],
          ["you / we / they", "We *were* at a party.", "They *weren't* there."]
        ],
        note: "*am / is → was* · *are → were*. *wasn't = was not* · *weren't = were not*."
      },
      {
        title: "Questions and short answers",
        head: ["Question", "Answer"],
        rows: [
          ["*Were you* at the party?", "Yes, I *was*. / No, I *wasn't*."],
          ["*Was it* fun?", "Yes, it *was*. / No, it *wasn't*."],
          ["*Where were* you yesterday?", "I *was* at work."],
          ["*How was* the concert?", "It *was* amazing!"],
          ["*Who was* there?", "My friends *were* there."]
        ]
      },
      {
        title: "There was / there were · time expressions",
        head: ["Structure", "Example"],
        rows: [
          ["*There was* + singular", "*There was* a lot of food."],
          ["*There were* + plural", "*There were* two hundred people."],
          ["*yesterday / last…*", "*yesterday* morning, *last* night, *last* Saturday"],
          ["time + *ago*", "two days *ago*, a week *ago*, ten years *ago*"]
        ],
        note: "Say *last night* — not *the last night*. And *yesterday morning* — not *yesterday in the morning*."
      }
    ],
    watchOut: [
      ["We was at home.", "We were at home."],
      ["Where you were yesterday?", "Where were you yesterday?"],
      ["Was fun.", "It was fun."],
      ["I was at the beach the last weekend.", "I was at the beach last weekend."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *was, were, wasn't* or *weren't*.",
      items: [
        "I [[was]] at home last night.",
        "My parents [[were]] in Oaxaca last week.",
        "The movie [[wasn't|was not]] good. It was boring.",
        "[[Were]] you at school yesterday? – Yes, I was.",
        "There [[were]] a lot of people at the concert."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Last night there was a problem at a café: a bike is missing! A police officer asks a woman some questions. Listen.",
      title: "Where were you last night?",
      script: [
        { who: "Police officer", line: "Good morning. Where were you last night at nine o'clock?" },
        { who: "Woman", line: "I was in the café, with my sister. We were there from eight to ten." },
        { who: "Police officer", line: "Was the café busy?" },
        { who: "Woman", line: "Yes, it was. There were about thirty people inside." },
        { who: "Police officer", line: "Were there any bikes outside?" },
        { who: "Woman", line: "Yes, there were two bikes: a red one and a black one." },
        { who: "Police officer", line: "Was there a man near the bikes?" },
        { who: "Woman", line: "Hmm, yes, there was a tall man with a green cap. But I wasn't very interested. It was cold and dark." },
        { who: "Police officer", line: "Thank you. That's very helpful." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "The woman was at the café with her sister.", a: true },
            { s: "They were there from seven to nine.", a: false },
            { s: "The café was busy.", a: true },
            { s: "There were three bikes outside.", a: false },
            { s: "The man was short.", a: false }
          ]
        },
        {
          type: "gap", title: "The police report",
          prompt: "Complete the report.",
          items: [
            "People in the café: about [[30|thirty]]",
            "Bikes outside: a [[red]] one and a [[black]] one",
            "A tall man with a [[green]] cap",
            "Weather: cold and [[dark]]"
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short article about a famous Mexican artist.",
      title: "Frida Kahlo: a quick look",
      text: [
        { author: "Biography", body: "Frida Kahlo was a Mexican painter. She was born in 1907 in Coyoacán, Mexico City. Her house was blue, and today it's a museum: the Blue House. Her father was a photographer from Germany and her mother was Mexican." },
        { author: "Her life", body: "Frida's life wasn't easy. She was very sick when she was a child and she was in a bus accident at eighteen. Her husband, Diego Rivera, was a famous painter too. Frida's paintings were very colorful and personal. There were a lot of animals and flowers in them." }
      ],
      activities: [
        {
          type: "match", title: "Find the information",
          prompt: "Match the question with the answer.",
          pairs: [
            ["Where was Frida born?", "in Coyoacán"],
            ["What color was her house?", "blue"],
            ["What was her father's job?", "a photographer"],
            ["Who was her husband?", "Diego Rivera"],
            ["What was in her paintings?", "animals and flowers"]
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, she was / No, she wasn't / Yes, it was…*",
          items: [
            { q: "Was Frida a painter?", a: ["Yes, she was."] },
            { q: "Was her mother German?", a: ["No, she wasn't.", "No, she was not."] },
            { q: "Was her life easy?", a: ["No, it wasn't.", "No, it was not."] },
            { q: "Were her paintings colorful?", a: ["Yes, they were."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *was / were*, then write about last weekend.",
      activities: [
        {
          type: "rewrite", title: "Present to past",
          prompt: "Rewrite in the past. Use the time expression.",
          items: [
            { q: "I'm at home. (yesterday)", a: ["I was at home yesterday.", "Yesterday I was at home."] },
            { q: "They're at the beach. (last week)", a: ["They were at the beach last week.", "Last week they were at the beach."] },
            { q: "It isn't cold. (last night)", a: ["It wasn't cold last night.", "Last night it wasn't cold.", "It was not cold last night."] },
            { q: "Are you tired? (yesterday)", a: ["Were you tired yesterday?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Where were you last night?" },
            { a: "How was the concert?" },
            { a: "There were a lot of people." },
            { a: "My brother wasn't at home." },
            { a: "I was in Cancún two years ago." }
          ]
        },
        {
          type: "write", title: "Last weekend",
          prompt: "Write about last weekend. Where were you on Friday night, Saturday and Sunday? Who were you with? How was it? Use *was, were, wasn't, there was / there were*.",
          minWords: 40, maxWords: 80,
          model: "Last weekend was great! On Friday night I was at home with my family. We were very tired. On Saturday I was at a concert in the Auditorio with my friends. There were a lot of people and the music was amazing. On Sunday I was at my grandma's house. There was a big lunch — mole! It wasn't a boring weekend at all.",
          bank: ["Last weekend was…", "On Friday night I was…", "I was with…", "There was / There were…", "It was fun / boring / amazing.", "It wasn't…"],
          checklist: [
            "I used *was* and *were* correctly.",
            "I wrote one negative: *wasn't / weren't*.",
            "I used *there was* or *there were*.",
            "I used time expressions: *last…, on Saturday*."
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
            "Where were you last night?",
            "I was at home with my family.",
            "Was the party fun?",
            "Yes, it was. The music was great.",
            "We weren't at school yesterday.",
            "There were a lot of people."
          ]
        },
        {
          type: "speak", title: "When I was ten",
          prompt: "Record yourself talking about your life when you were ten years old: where you were, your school, your best friend, your favorite things.",
          language: ["When I was ten, I was…", "My school was…", "My best friend was…", "My favorite … was…", "There was / There were…"],
          seconds: 60,
          checklist: ["use *was / were*?", "use a negative?", "use *there was / there were*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *was* and *were*.", review: "Explanation: was / were; Quick check" },
    { can: "I can make negatives with *wasn't / weren't*.", review: "Explanation: was / were" },
    { can: "I can ask *Where were you? How was…?*", review: "Explanation: questions; Speaking activity 1 (listen and repeat)" },
    { can: "I can use *there was / there were*.", review: "Explanation: there was / there were" },
    { can: "I can use *yesterday, last…, ago*.", review: "Writing activity 1" },
    { can: "I can write about last weekend.", review: "Writing activity 3" }
  ]
};
