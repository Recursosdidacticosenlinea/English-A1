window.UNIT = {
  slug: "music-and-movies",
  number: 23,
  title: "Music and Movies",
  level: "A1",
  minutes: 50,
  speakers: { "Ximena": "f", "Rodrigo": "m", "DJ": "m", "Caller": "f", A: "f", B: "m" },
  focus: ["types of music and movies", "object pronouns: me, you, him, her, it, us, them", "I like it. I don't like them.", "Who's your favorite singer?", "What kind of… do you like?"],

  presentation: {
    scene: "🎵🎬🍿🎧",
    situation: "Ximena and Rodrigo want to watch a movie on Friday night. They talk about what they like.",
    warmup: {
      prompt: "What kinds of music and movies do you know? Choose all.",
      options: ["pop", "rock", "reggaeton", "classical", "jazz", "comedies", "horror movies", "cartoons", "action movies", "romantic movies"],
      response: "Nice! In this unit you'll learn to talk about music and movies you like and don't like."
    },
    dialogueTitle: "Friday movie night",
    dialogue: [
      { who: "Rodrigo", line: "*What kind of movies* do you like?" },
      { who: "Ximena", line: "I love comedies. I watch *them* every weekend. And horror movies? *Do you like them*?" },
      { who: "Rodrigo", line: "No! I hate *them*. They scare *me*!" },
      { who: "Ximena", line: "Ha ha! OK. What about the new Spider-Man movie? *Do you like him*?" },
      { who: "Rodrigo", line: "Yes, I like *him* a lot. And Zendaya is in the movie. *Do you know her*?" },
      { who: "Ximena", line: "Of course! I love *her*! She's my favorite actress." },
      { who: "Rodrigo", line: "Great. And the music in the movie is good too. I listen to *it* every day." },
      { who: "Ximena", line: "Perfect. Call *me* on Friday and we can watch *it* together!" }
    ]
  },

  objectives: [
    "I can talk about types of music and movies.",
    "I can use object pronouns: *me, you, him, her, it, us, them*.",
    "I can say what I like and don't like and why.",
    "I can ask *What kind of… do you like?* and *Who's your favorite…?*"
  ],

  explanation: {
    vocabTitle: "Music and movies",
    vocab: [
      { word: "pop", icon: "🎤" }, { word: "rock", icon: "🎸" }, { word: "reggaeton", icon: "💃" },
      { word: "classical music", icon: "🎻" }, { word: "jazz", icon: "🎷" }, { word: "regional Mexican", icon: "🪗" },
      { word: "comedy", icon: "😂" }, { word: "horror movie", icon: "👻" }, { word: "action movie", icon: "💥" },
      { word: "romantic movie", icon: "💕" }, { word: "cartoon / animated movie", icon: "🧸" }, { word: "science fiction", icon: "👽" },
      { word: "singer", icon: "🧑‍🎤" }, { word: "band", icon: "🥁" }, { word: "actor / actress", icon: "🎭" }
    ],
    grammar: [
      {
        title: "Object pronouns",
        intro: "Object pronouns go **after** the verb.",
        head: ["Subject", "Object", "Example"],
        rows: [
          ["I", "*me*", "Horror movies scare *me*."],
          ["you", "*you*", "I can call *you* on Friday."],
          ["he", "*him*", "Tom Holland? I like *him*."],
          ["she", "*her*", "Zendaya? I love *her*."],
          ["it", "*it*", "The song? I listen to *it* every day."],
          ["we", "*us*", "Come with *us*!"],
          ["they", "*them*", "Comedies? I watch *them* every weekend."]
        ],
        note: "Don't repeat the noun. Say *I love her* — not *I love Zendaya* again and again."
      },
      {
        title: "Talking about likes",
        head: ["Question", "Answer"],
        rows: [
          ["*What kind of music* do you like?", "I like pop and rock."],
          ["*Who's your favorite* singer?", "Bad Bunny. I love *him*."],
          ["*Do you like* jazz?", "Yes, I like *it*. / No, I don't like *it* at all."],
          ["*What do you think of* horror movies?", "I think they're scary / boring / great."]
        ]
      }
    ],
    watchOut: [
      ["I like she.", "I like her."],
      ["Comedies? I love.", "Comedies? I love them."],
      ["Call to me on Friday.", "Call me on Friday."],
      ["What kind of music you like?", "What kind of music do you like?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with an object pronoun.",
      items: [
        "Shakira is great. I really like [[her]].",
        "I don't like horror movies. I never watch [[them]].",
        "This song is fantastic. I listen to [[it]] every day.",
        "We're at the movie theater. Come with [[us]]!",
        "Bad Bunny? My sister loves [[him]].",
        "Can you help [[me]] with my homework?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listeners call a radio program to request songs. Listen to the DJ and a caller.",
      title: "Radio request show",
      script: [
        { who: "DJ", line: "Good evening! This is Request Hour. We have a caller. Hello, who's this?" },
        { who: "Caller", line: "Hi! I'm Sara, from Tehuacán." },
        { who: "DJ", line: "Hi, Sara! What kind of music do you like?" },
        { who: "Caller", line: "I like a lot of music, but my favorite is rock. I listen to it in the car every day." },
        { who: "DJ", line: "Who's your favorite band?" },
        { who: "Caller", line: "Maná. My parents love them too. We go to their concerts together." },
        { who: "DJ", line: "Great! And what song do you want?" },
        { who: "Caller", line: "\"Oye mi amor\", please. It's for my boyfriend, Pablo. I want to say hello to him. He's listening!" },
        { who: "DJ", line: "Hi, Pablo! This one's for you!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Sara is from Tehuacán.", a: true },
            { s: "Her favorite music is pop.", a: false },
            { s: "She listens to music in the car.", a: true },
            { s: "Her parents don't like Maná.", a: false },
            { s: "The song is for her brother.", a: false }
          ]
        },
        {
          type: "gap", title: "Who or what is it?",
          prompt: "What do the pronouns mean? Write one word.",
          items: [
            "\"I listen to *it* in the car.\" → it = [[rock]] music",
            "\"My parents love *them*.\" → them = [[Maná]]",
            "\"I want to say hello to *him*.\" → him = [[Pablo]]"
          ]
        }
      ]
    },

    reading: {
      intro: "Read the reviews on a movie website.",
      title: "Weekend movie reviews",
      text: [
        { author: "⭐⭐⭐⭐⭐ Coco · by Majo", body: "I love this movie! It's an animated movie about a Mexican boy, Miguel, and Día de Muertos. The music is beautiful — I listen to it all the time. Watch it with your family!" },
        { author: "⭐⭐ Space Attack 3 · by Kevin", body: "It's an action movie with a lot of explosions, but the story is boring. The actors are famous, but I don't like them in this film. Don't watch it!" },
        { author: "⭐⭐⭐⭐ The Note · by Lin", body: "A romantic movie about two students in Paris. The main actress is fantastic. I think she's very natural. My friends and I cried at the end!" }
      ],
      activities: [
        {
          type: "match", title: "Which movie?",
          prompt: "Match the movie with the description.",
          pairs: [
            ["Coco", "an animated movie with beautiful music"],
            ["Space Attack 3", "an action movie with a boring story"],
            ["The Note", "a romantic movie set in Paris"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Majo listens to the music from Coco a lot.", a: true },
            { s: "Kevin recommends Space Attack 3.", a: false },
            { s: "Lin thinks the actress is very natural.", a: true },
            { s: "Lin watched The Note alone.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice object pronouns, then write a short review.",
      activities: [
        {
          type: "rewrite", title: "Use a pronoun",
          prompt: "Replace the words in *italics* with a pronoun.",
          items: [
            { q: "I love *Karol G*.", a: ["I love her."] },
            { q: "We watch *cartoons* on Sundays.", a: ["We watch them on Sundays."] },
            { q: "My dad doesn't like *reggaeton*.", a: ["My dad doesn't like it.", "My dad does not like it."] },
            { q: "Call *my brother and me* later.", a: ["Call us later."] },
            { q: "Do you know *Tom Holland*?", a: ["Do you know him?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What kind of music do you like?" },
            { a: "Who's your favorite actor?" },
            { a: "I don't like them at all." },
            { a: "My sister listens to it every day." },
            { a: "Watch it with your friends!" }
          ]
        },
        {
          type: "write", title: "My review",
          prompt: "Write a short review of a movie, a series, a singer or a band you like. Say what kind it is, who is in it, what you think, and why. Use at least three object pronouns.",
          minWords: 40, maxWords: 80,
          model: "My favorite band is Morat. They're from Colombia and they play pop music. I listen to them every day on the bus. The singer, Juan Pablo, has a beautiful voice. I love him! Their new song is fantastic — I sing it all the time. Listen to it!",
          bank: ["My favorite … is…", "It's a comedy / an action movie.", "They play…", "I love him / her / them.", "I listen to it…", "I think it's…", "Watch it! / Listen to it!"],
          checklist: [
            "I used at least **three** object pronouns.",
            "I said what kind of music or movie it is.",
            "I gave my opinion: *I think it's…*",
            "I put pronouns **after** the verb."
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
            "What kind of music do you like?",
            "I love her songs.",
            "I don't like horror movies.",
            "They scare me!",
            "I listen to it every day.",
            "Who's your favorite actor?"
          ]
        },
        {
          type: "speak", title: "My entertainment",
          prompt: "Record yourself talking about the music and movies you like. Name a singer or band and a movie, and say why you like them.",
          language: ["I like… / I love…", "My favorite singer is…", "I listen to them…", "My favorite movie is…", "I watch it…", "because…"],
          seconds: 60,
          checklist: ["talk about music and movies?", "use object pronouns?", "say why?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name types of music and movies.", review: "Explanation: vocabulary" },
    { can: "I can use object pronouns.", review: "Explanation: object pronouns; Quick check" },
    { can: "I can say what I like and don't like.", review: "Explanation: talking about likes" },
    { can: "I can ask *What kind of…?* and *Who's your favorite…?*", review: "Listening; Speaking activity 1 (listen and repeat)" },
    { can: "I can understand short movie reviews.", review: "Reading: weekend movie reviews" },
    { can: "I can write a short review.", review: "Writing activity 3" }
  ]
};
