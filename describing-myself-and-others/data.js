window.UNIT = {
  slug: "describing-myself-and-others",
  number: 7,
  title: "Describing Myself and Others",
  level: "A1",
  minutes: 50,
  focus: ["appearance: tall, short, curly hair…", "personality: friendly, shy, funny…", "be + adjective", "have / has + hair and eyes", "What does she look like?"],

  presentation: {
    scene: "🧑‍🦱👩‍🦰🧔👓",
    situation: "Sara is waiting for her cousin Tomás at the airport. She has never met him! Her aunt calls to describe him.",
    warmup: {
      prompt: "Which words describe you? Choose everything that is true.",
      options: ["tall", "short", "medium height", "long hair", "short hair", "curly hair", "straight hair", "glasses", "friendly", "shy", "funny", "quiet", "hard-working", "creative"],
      response: "Great! In this unit you'll learn to describe how people look and what they are like."
    },
    dialogueTitle: "Waiting at the airport",
    dialogue: [
      { who: "Aunt Rosa", line: "Hi, Sara! Are you at the airport?" },
      { who: "Sara", line: "Yes, I am. But *what does* Tomás *look like*?" },
      { who: "Aunt Rosa", line: "*He's tall* and thin. *He has short, curly* black *hair* and brown eyes." },
      { who: "Sara", line: "*Does he have* glasses?" },
      { who: "Aunt Rosa", line: "Yes, he does. He *has* a beard too. And he's wearing a green jacket." },
      { who: "Sara", line: "OK! And *what's he like*?" },
      { who: "Aunt Rosa", line: "*He's* very *friendly* and *funny*, but he's a little *shy* at first." },
      { who: "Sara", line: "I can see him! Tall, curly hair, glasses… and a green jacket. Thanks, Aunt Rosa!" }
    ]
  },

  objectives: [
    "I can describe people's appearance: height, build, hair and eyes.",
    "I can describe personality with adjectives like *friendly, shy* and *funny*.",
    "I can use *be* and *have / has* correctly in descriptions.",
    "I can ask and answer *What does he look like?* and *What is she like?*"
  ],

  explanation: {
    vocabTitle: "Describing people",
    vocab: [
      { word: "tall", icon: "🦒" }, { word: "short", icon: "🐿️" }, { word: "thin", icon: "📏" },
      { word: "strong", icon: "💪" }, { word: "curly hair", icon: "🌀" }, { word: "straight hair", icon: "💇" },
      { word: "blond hair", icon: "👱" }, { word: "beard", icon: "🧔" }, { word: "glasses", icon: "👓" },
      { word: "friendly", icon: "😊" }, { word: "shy", icon: "🙈" }, { word: "funny", icon: "😂" },
      { word: "quiet", icon: "🤫" }, { word: "hard-working", icon: "📚" }, { word: "creative", icon: "🎨" }
    ],
    grammar: [
      {
        title: "Be + adjective and have / has + noun",
        head: ["Verb", "Use it for…", "Examples"],
        rows: [
          ["*be* (am / is / are)", "height, build, age, personality", "*She's* tall. *He's* thin. *They're* friendly."],
          ["*have / has*", "hair, eyes, beard, glasses", "*I have* brown eyes. *She has* long hair."],
          ["negative", "", "He *isn't* tall. She *doesn't have* glasses."]
        ],
        note: "Use *has* with *he, she, it*: *He has a beard.* Use *have* with *I, you, we, they*."
      },
      {
        title: "Adjective order",
        head: ["Size / length", "Style", "Color", "Noun"],
        rows: [
          ["*long*", "*straight*", "*black*", "hair"],
          ["*short*", "*curly*", "*red*", "hair"],
          ["*big*", "", "*brown*", "eyes"]
        ],
        note: "Adjectives come before the noun and never take *-s*: *She has long hair.* (not *longs hairs*)"
      },
      {
        title: "Asking about people",
        head: ["Question", "Answer about…"],
        rows: [
          ["What does he *look like*?", "appearance: *He's tall. He has a beard.*"],
          ["What *is* she *like*?", "personality: *She's friendly and creative.*"],
          ["*Does* she *have* glasses?", "*Yes, she does. / No, she doesn't.*"],
          ["*Is* he shy?", "*Yes, he is. / No, he isn't.*"]
        ],
        note: "Use *a little, very* and *really* to say more: *He's a little shy. She's really funny.*"
      }
    ],
    watchOut: [
      ["She is long hair.", "She has long hair."],
      ["He has tall.", "He is tall."],
      ["She has eyes blue.", "She has blue eyes."],
      ["What is he look like?", "What does he look like?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *is, has, are* or *have*.",
      items: [
        "My sister [[is]] very creative.",
        "Tomás [[has]] curly hair and a beard.",
        "My parents [[are]] friendly and funny.",
        "I [[have]] brown eyes."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Three students describe their best friends for a school radio program. Listen and find the friends.",
      title: "My best friend",
      script: [
        { who: "Host", line: "Welcome to BUAP Radio! Today we're talking about best friends. Javier, tell us about your best friend." },
        { who: "Javier", line: "My best friend is Lalo. He's short and strong. He has short, straight black hair and big brown eyes. He's really funny. He tells jokes all the time!" },
        { who: "Host", line: "Thanks, Javier. Now you, Mariana." },
        { who: "Mariana", line: "My best friend is Alicia. She's tall and thin. She has long, curly red hair and green eyes. She has glasses too. She's quiet, but she's very creative. She draws beautiful pictures." },
        { who: "Host", line: "Beautiful! And finally, Pablo." },
        { who: "Pablo", line: "My best friend is my grandmother, Doña Carmen. She's seventy. She's short, and she has short white hair. She's very hard-working and friendly. Everybody in my neighborhood loves her." }
      ],
      activities: [
        {
          type: "sort", title: "Who is it?",
          prompt: "Put each description under the right person.",
          bins: ["Lalo", "Alicia", "Doña Carmen"],
          items: [
            { text: "short and strong", bin: 0 }, { text: "straight black hair", bin: 0 }, { text: "tells jokes", bin: 0 },
            { text: "tall and thin", bin: 1 }, { text: "curly red hair", bin: 1 }, { text: "quiet and creative", bin: 1 },
            { text: "seventy years old", bin: 2 }, { text: "short white hair", bin: 2 }, { text: "hard-working", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Lalo has big brown eyes.", a: true },
            { s: "Lalo is shy.", a: false },
            { s: "Alicia has blue eyes.", a: false },
            { s: "Alicia has glasses.", a: true },
            { s: "Pablo's best friend is his grandmother.", a: true },
            { s: "Doña Carmen has long hair.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three posts from an online pen-pal site. Students describe themselves to find a pen pal.",
      title: "Find a pen pal",
      text: [
        { author: "Mei, 16 · Taiwan", body: "Hi! I'm medium height and I have long, straight black hair. I usually have it in a ponytail. I have glasses. My friends say I'm hard-working and a little shy, but I'm very talkative when I know you! I love photography." },
        { author: "Lucas, 17 · Brazil", body: "Hello! I'm tall and thin, with short curly brown hair and brown eyes. I'm very sociable and funny. I play soccer every day, so I'm quite strong too. I'm not very patient, but I'm learning!" },
        { author: "Emma, 15 · Ireland", body: "Hey! I'm short, with blond hair and blue eyes. I don't have glasses. I'm creative and a bit crazy! I write songs and I play the guitar. I'm looking for a friendly pen pal who likes music." }
      ],
      activities: [
        {
          type: "match", title: "Complete the sentences",
          prompt: "Match the beginnings and the endings.",
          pairs: [
            ["Mei usually has her hair", "in a ponytail."],
            ["Mei is very talkative", "when she knows you."],
            ["Lucas is quite strong because", "he plays soccer every day."],
            ["Lucas is learning to be", "more patient."],
            ["Emma wants a pen pal who", "likes music."]
          ]
        },
        {
          type: "rewrite", title: "Correct the information",
          prompt: "Each sentence has wrong information. Write the correct sentence.",
          items: [
            { q: "Mei has short hair.", a: ["Mei has long hair.", "Mei has long straight black hair.", "Mei has long, straight black hair."] },
            { q: "Lucas is short.", a: ["Lucas is tall.", "Lucas is tall and thin."] },
            { q: "Lucas has blue eyes.", a: ["Lucas has brown eyes."] },
            { q: "Emma has glasses.", a: ["Emma doesn't have glasses.", "Emma does not have glasses."] },
            { q: "Emma has black hair.", a: ["Emma has blond hair."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures first, then describe yourself or a person you love.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "She has long curly hair." },
            { a: "What does your brother look like?" },
            { a: "My mom is very hard-working." },
            { a: "He doesn't have a beard." },
            { a: "What is your best friend like?" },
            { a: "They are tall and friendly." }
          ]
        },
        {
          type: "gap", title: "Complete the description",
          prompt: "Complete with words from the box.",
          bank: true,
          items: [
            "My dad is fifty. He [[is]] tall and a little heavy.",
            "He has short gray [[hair]] and a big [[beard]].",
            "He [[has]] glasses because he reads a lot.",
            "He's very [[funny]]. He always makes us laugh.",
            "He [[isn't]] shy. He talks to everybody!"
          ]
        },
        {
          type: "write", title: "A person I admire",
          prompt: "Describe yourself or a person you admire (a friend, a family member or a famous person). Write about their appearance and their personality.",
          minWords: 50, maxWords: 80,
          model: "I want to describe my aunt Lupita. She's forty-five. She's short and she has long, straight black hair and brown eyes. She has glasses. She's a doctor, so she's very hard-working. She's also funny and friendly. She isn't shy at all. I really admire her!",
          bank: ["He's / She's", "He has / She has", "… hair and … eyes", "He / She doesn't have", "He's very", "a little", "I admire him / her because"],
          checklist: [
            "I described **appearance** and **personality**.",
            "I used *be* for height and personality.",
            "I used *has / have* for hair, eyes and glasses.",
            "I put adjectives **before** the noun: *long hair, blue eyes*."
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
            "What does she look like?",
            "She's tall and she has long hair.",
            "He has short curly hair.",
            "My brother has brown eyes.",
            "What's your best friend like?",
            "She's very friendly and funny."
          ]
        },
        {
          type: "speak", title: "This is me",
          prompt: "Record yourself for about one minute. Describe your appearance and your personality, then describe one person in your family.",
          language: ["I'm tall / short / medium height.", "I have … hair and … eyes.", "I'm friendly / shy / creative.", "My … is…", "He / She has…"],
          seconds: 75,
          checklist: ["describe your appearance?", "describe your personality?", "describe another person with *he / she has*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 10 adjectives for appearance and personality.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *be* for height and personality.", review: "Explanation: be + adjective" },
    { can: "I can use *have / has* for hair, eyes, glasses and beards.", review: "Explanation: have / has; Writing activity 2" },
    { can: "I can put adjectives in the right order before a noun.", review: "Explanation: adjective order" },
    { can: "I can ask *What does he look like?* and *What is she like?*", review: "Speaking activity 1 (listen and repeat): Guess who!" },
    { can: "I can describe myself and another person in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
