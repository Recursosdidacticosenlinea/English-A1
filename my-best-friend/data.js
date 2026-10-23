window.UNIT = {
  slug: "my-best-friend",
  number: 8,
  title: "My Best Friend",
  level: "A1",
  minutes: 50,
  speakers: { "Jimena": "f", "Alan": "m", "Host": "f", "Gabriel": "m", "Tania": "f", A: "f", B: "m" },
  focus: ["personality adjectives: kind, funny, shy…", "adjective + noun: a funny friend", "very, really, quite, not very", "and / but", "What's he like?"],

  presentation: {
    scene: "🤝😄🎈💬",
    situation: "Jimena and Alan are planning a birthday party. Alan asks about Jimena's best friend, Paulina.",
    warmup: {
      prompt: "What makes a good friend? Choose the words you know.",
      options: ["kind", "funny", "friendly", "honest", "smart", "quiet", "shy", "generous", "lazy", "talkative"],
      response: "Good! In this unit you'll learn to describe people's personality."
    },
    dialogueTitle: "Planning a party",
    dialogue: [
      { who: "Alan", line: "So, who's Paulina? *What's she like*?" },
      { who: "Jimena", line: "She's *my best friend*. She's *really funny* and *very kind*." },
      { who: "Alan", line: "Is she *talkative*?" },
      { who: "Jimena", line: "Not with new people. She's *quite shy*, *but* she's *very friendly* when she knows you." },
      { who: "Alan", line: "Cool. And her boyfriend?" },
      { who: "Jimena", line: "Hmm… he's *a smart guy*, *but* he's *not very* patient!" },
      { who: "Alan", line: "Ha! OK. And is she *generous*?" },
      { who: "Jimena", line: "Yes! She's *a really generous* person. She always shares her food." }
    ]
  },

  objectives: [
    "I can describe someone's personality with adjectives.",
    "I can put adjectives before nouns: *a kind person*.",
    "I can use *very, really, quite* and *not very*.",
    "I can join ideas with *and* and *but*."
  ],

  explanation: {
    vocabTitle: "Personality",
    vocab: [
      { word: "kind", icon: "💗" }, { word: "funny", icon: "😂" }, { word: "friendly", icon: "🤗" },
      { word: "shy", icon: "🙈" }, { word: "talkative", icon: "🗣️" }, { word: "quiet", icon: "🤫" },
      { word: "smart", icon: "🧠" }, { word: "honest", icon: "🤞" }, { word: "generous", icon: "🎁" },
      { word: "lazy", icon: "🛋️" }, { word: "hard-working", icon: "💪" }, { word: "patient", icon: "⏳" },
      { word: "serious", icon: "😐" }, { word: "creative", icon: "🎨" }, { word: "polite", icon: "🎩" }
    ],
    grammar: [
      {
        title: "Adjectives: position and form",
        head: ["After be", "Before a noun"],
        rows: [
          ["Paulina *is funny*.", "She's a *funny friend*."],
          ["My cousins *are kind*.", "They're *kind people*."],
          ["Her brother *is smart*.", "He's a *smart guy*."]
        ],
        note: "Adjectives don't change in plural: *kind people*, never *kinds people*. The adjective goes **before** the noun: *a funny friend*, not *a friend funny*."
      },
      {
        title: "How much? very, really, quite, not very",
        head: ["Word", "Example", "Meaning"],
        rows: [
          ["*really / very*", "She's *really* funny.", "100%"],
          ["*quite*", "He's *quite* shy.", "70%"],
          ["*not very*", "He's *not very* patient.", "30%"],
          ["*not … at all*", "She's *not* lazy *at all*.", "0%"]
        ]
      },
      {
        title: "And / but · What's he like?",
        head: ["Structure", "Example"],
        rows: [
          ["*and* = similar ideas", "She's kind *and* generous."],
          ["*but* = different ideas", "He's shy, *but* he's friendly."],
          ["*What's he / she like?*", "personality: *He's funny.*"],
          ["*What does he / she look like?*", "appearance: *He's tall.*"]
        ],
        note: "*What's she like?* asks about personality, not about what she likes!"
      }
    ],
    watchOut: [
      ["She is a girl very funny.", "She is a very funny girl."],
      ["They are friendlys.", "They are friendly."],
      ["How is she? (personality)", "What's she like?"],
      ["He's shy and he's very friendly.", "He's shy, but he's very friendly."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *and* or *but*.",
      items: [
        "Paulina is funny [[and]] kind.",
        "Her boyfriend is smart, [[but]] he isn't patient.",
        "My brother is quiet, [[but]] he's very friendly.",
        "Our teacher is serious [[and]] hard-working.",
        "I'm shy, [[but]] I'm talkative with my friends."
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a podcast called *Best Friends Forever*, two people describe their best friends. Listen.",
      title: "Podcast: Best Friends Forever",
      script: [
        { who: "Host", line: "Welcome to Best Friends Forever! Gabriel, tell us about your best friend." },
        { who: "Gabriel", line: "My best friend is Omar. We're friends from primary school. He's really talkative and very funny. He's not very hard-working at school, but he's a great guitar player." },
        { who: "Host", line: "And what's he like with other people?" },
        { who: "Gabriel", line: "He's very friendly. Everybody likes him." },
        { who: "Host", line: "Thank you, Gabriel. And you, Tania?" },
        { who: "Tania", line: "My best friend is my sister, Carla. She's quiet and quite shy, but she's very creative. She paints beautiful pictures. She's also really honest. She always tells me the truth!" }
      ],
      activities: [
        {
          type: "sort", title: "Omar or Carla?",
          prompt: "Who is it? Sort the adjectives.",
          bins: ["Omar", "Carla"],
          items: [
            { text: "talkative", bin: 0 }, { text: "very funny", bin: 0 }, { text: "not very hard-working", bin: 0 }, { text: "friendly", bin: 0 },
            { text: "quiet", bin: 1 }, { text: "quite shy", bin: 1 }, { text: "creative", bin: 1 }, { text: "honest", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Gabriel and Omar are friends from university.", a: false },
            { s: "Omar plays the guitar.", a: true },
            { s: "Carla is Tania's cousin.", a: false },
            { s: "Carla paints pictures.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three messages for a \"Friend of the Year\" competition.",
      title: "Friend of the Year",
      text: [
        { author: "Mónica", body: "My friend Iris is the best! She's very generous — she always helps me with my homework. She's not very talkative, but she's a great listener." },
        { author: "Diego", body: "My best friend is Kevin. He's really funny and creative. He makes videos for social media. He's sometimes lazy, but he's an honest person." },
        { author: "Lupita", body: "My friend is my neighbor, Doña Elena. She's seventy-two! She's patient and very kind. She's quite serious, but she tells funny stories about her life." }
      ],
      activities: [
        {
          type: "match", title: "Who is it?",
          prompt: "Match the friend with the description.",
          pairs: [
            ["Iris", "helps with homework and listens"],
            ["Kevin", "makes videos for social media"],
            ["Doña Elena", "seventy-two and very patient"]
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with an adjective from the texts.",
          items: [
            "Iris helps other people. She's [[generous|kind]].",
            "Iris doesn't talk a lot. She isn't very [[talkative]].",
            "Kevin makes people laugh. He's [[funny]].",
            "Kevin tells the truth. He's [[honest]].",
            "Doña Elena never gets angry. She's [[patient]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice word order, then nominate your friend for \"Friend of the Year\".",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "She's a very kind person." },
            { a: "What's your best friend like?" },
            { a: "He's quiet, but he's friendly." },
            { a: "My friends are really funny." },
            { a: "Her brother isn't very patient." }
          ]
        },
        {
          type: "rewrite", title: "Adjective before the noun",
          prompt: "Rewrite the sentences. Example: *My friend is smart.* → *He's a smart friend.*",
          items: [
            { q: "My teacher is patient. (She…)", a: ["She's a patient teacher.", "She is a patient teacher."] },
            { q: "My neighbors are friendly. (They…)", a: ["They're friendly neighbors.", "They are friendly neighbors."] },
            { q: "My cousin is creative. (He…)", a: ["He's a creative cousin.", "He is a creative cousin."] },
            { q: "The students are hard-working. (They…)", a: ["They're hard-working students.", "They are hard-working students."] }
          ]
        },
        {
          type: "write", title: "Friend of the Year",
          prompt: "Write a message about your best friend for the competition. Say who they are, what they're like (use at least four adjectives), and why they're a good friend. Use *and* and *but*.",
          minWords: 40, maxWords: 80,
          model: "My best friend is Ale. We're classmates at BUAP. She's really funny and very creative. She's a little shy with new people, but she's friendly when she knows you. She's also honest. She's the Friend of the Year because she's always there for me!",
          bank: ["My best friend is…", "We're friends from…", "He's / She's really…", "He's / She's quite…", "…, but…", "He's / She's a … person.", "because…"],
          checklist: [
            "I used at least **four** personality adjectives.",
            "I used *very, really, quite* or *not very*.",
            "I used *and* and *but*.",
            "I put an adjective before a noun: *a kind person*."
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
            "What's your best friend like?",
            "She's really funny and very kind.",
            "He's quite shy, but he's friendly.",
            "My friend is a very generous person.",
            "They're smart and hard-working.",
            "She isn't very patient."
          ]
        },
        {
          type: "speak", title: "My best friend",
          prompt: "Record yourself describing your best friend: name, how you know them, what they're like, and one thing you do together.",
          language: ["My best friend is…", "We're friends from…", "He's / She's very…", "He's / She's not very…", "We… together."],
          seconds: 60,
          checklist: ["say who your best friend is?", "use four adjectives?", "use *and* and *but*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe personality with adjectives.", review: "Explanation: vocabulary" },
    { can: "I can put an adjective before a noun.", review: "Explanation: adjectives; Writing activity 2" },
    { can: "I can use *very, really, quite* and *not very*.", review: "Explanation: how much?" },
    { can: "I can join ideas with *and* and *but*.", review: "Explanation: and / but; Quick check" },
    { can: "I can ask and answer *What's he / she like?*", review: "Presentation dialogue; Speaking activity 1 (listen and repeat)" },
    { can: "I can write a short description of a friend.", review: "Writing activity 3" }
  ]
};
