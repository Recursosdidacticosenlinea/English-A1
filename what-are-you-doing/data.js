window.UNIT = {
  slug: "what-are-you-doing",
  number: 31,
  title: "What Are You Doing?",
  level: "A1",
  minutes: 50,
  focus: ["present progressive: am / is / are + -ing", "isn't / aren't + -ing", "What are you doing?", "now, right now, at the moment", "spelling: running, making"],

  presentation: {
    scene: "📱🏖️⚽🎧",
    situation: "It's Saturday afternoon. Pedro is bored at home, so he sends voice messages to his friends. What are they doing right now?",
    warmup: {
      prompt: "What are you doing right now? Choose everything that is true.",
      options: ["studying English", "listening to music", "sitting on a chair", "drinking water", "eating a snack", "using a computer", "using a phone", "wearing a jacket", "talking to a friend", "waiting for someone"],
      response: "Great! In this unit you'll learn to talk about actions happening now."
    },
    dialogueTitle: "Voice messages",
    dialogue: [
      { who: "Pedro", line: "Hey, Dani! *What are you doing*? Do you want to go to the park?" },
      { who: "Dani", line: "Sorry, Pedro! *I'm helping* my dad. *We're painting* the kitchen." },
      { who: "Pedro", line: "Oh, OK. Hi, Majo! *Are you doing* anything right now?" },
      { who: "Majo", line: "Yes, I am. *I'm sitting* on the beach in Acapulco! My cousins *are swimming* and my mom *is reading* a book." },
      { who: "Pedro", line: "Lucky you! Hi, Toño. *Are you sleeping*?" },
      { who: "Toño", line: "No, *I'm not*! *I'm playing* soccer with my brother. *He's winning*, of course." },
      { who: "Pedro", line: "Can I play too? *I'm not doing* anything!" }
    ]
  },

  objectives: [
    "I can describe actions happening now.",
    "I can form the present progressive with *am / is / are* + verb *-ing*.",
    "I can ask and answer *What are you doing? Are you…?*",
    "I can spell *-ing* forms correctly: *making, running, studying*."
  ],

  explanation: {
    vocabTitle: "Everyday actions",
    vocab: [
      { word: "sleeping", icon: "😴" }, { word: "eating", icon: "🍔" }, { word: "drinking", icon: "🥤" },
      { word: "reading", icon: "📖" }, { word: "writing", icon: "✍️" }, { word: "listening to music", icon: "🎧" },
      { word: "watching TV", icon: "📺" }, { word: "cooking", icon: "🍳" }, { word: "cleaning", icon: "🧹" },
      { word: "running", icon: "🏃" }, { word: "swimming", icon: "🏊" }, { word: "dancing", icon: "💃" },
      { word: "playing video games", icon: "🎮" }, { word: "talking on the phone", icon: "📞" }, { word: "waiting", icon: "⏳" }
    ],
    grammar: [
      {
        title: "Present progressive: form",
        head: ["Subject", "Affirmative", "Negative"],
        rows: [
          ["I", "*I'm reading.*", "*I'm not reading.*"],
          ["he / she / it", "*She's cooking.*", "*She isn't cooking.*"],
          ["you / we / they", "*They're dancing.*", "*They aren't dancing.*"]
        ],
        note: "Use it for actions happening **now**, at the moment of speaking. Common words: *now, right now, at the moment, Look! Listen!*"
      },
      {
        title: "Questions and short answers",
        head: ["Question", "Short answer"],
        rows: [
          ["*Are* you *studying*?", "Yes, I *am*. / No, I'*m not*."],
          ["*Is* he *sleeping*?", "Yes, he *is*. / No, he *isn't*."],
          ["*Are* they *playing*?", "Yes, they *are*. / No, they *aren't*."],
          ["*What are* you *doing*?", "I'm *watching* a movie."],
          ["*Where is* she *going*?", "She's *going* to the store."]
        ]
      },
      {
        title: "Spelling the -ing form",
        head: ["Rule", "Examples"],
        rows: [
          ["most verbs + *-ing*", "read → *reading*, play → *playing*, study → *studying*"],
          ["verb ends in -e: drop the *e*", "make → *making*, dance → *dancing*, write → *writing*"],
          ["one vowel + one consonant: double it", "run → *running*, swim → *swimming*, sit → *sitting*"],
          ["-ie → *-ying*", "lie → *lying*, die → *dying*"]
        ]
      }
    ],
    watchOut: [
      ["I watching TV.", "I'm watching TV."],
      ["She is dance.", "She is dancing."],
      ["He is runing.", "He is running."],
      ["What you are doing?", "What are you doing?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the present progressive of the verb in parentheses.",
      items: [
        "Listen! The baby [[is crying|'s crying]]. (cry)",
        "We [[are swimming|'re swimming]] in the pool. (swim)",
        "I [[am not sleeping|'m not sleeping]], I'm thinking! (not sleep)",
        "[[Are]] your friends [[playing]] soccer? (play)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Sofía is on a video call with her grandma. Grandma wants to know what everybody in the house is doing.",
      title: "A video call with Grandma",
      script: [
        { who: "Grandma", line: "Hello, Sofía! I can see you! What are you doing?" },
        { who: "Sofía", line: "Hi, Grandma! I'm doing my math homework. It's very difficult today." },
        { who: "Grandma", line: "Oh, poor you. And where's your mom? Is she working?" },
        { who: "Sofía", line: "No, she isn't. She's in the kitchen. She's making enchiladas for dinner." },
        { who: "Grandma", line: "Mmm, delicious! And your dad?" },
        { who: "Sofía", line: "He's washing the car outside. And Max, our dog, is helping him. Well, Max is playing with the water!" },
        { who: "Grandma", line: "Ha ha! And your little brother, Leo?" },
        { who: "Sofía", line: "Leo is sitting on the sofa. He's watching cartoons and eating cookies." },
        { who: "Grandma", line: "Cookies before dinner? Tell your mom!" }
      ],
      activities: [
        {
          type: "match", title: "Who is doing what?",
          prompt: "Match each person with what they are doing.",
          pairs: [
            ["Sofía", "is doing her math homework."],
            ["Sofía's mom", "is making enchiladas."],
            ["Sofía's dad", "is washing the car."],
            ["Max, the dog", "is playing with the water."],
            ["Leo", "is watching cartoons."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Sofía's homework is easy today.", a: false },
            { s: "Her mom is working in the office.", a: false },
            { s: "Her dad is outside.", a: true },
            { s: "Leo is sitting on the sofa.", a: true },
            { s: "Leo is eating fruit.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the messages in a class group chat on a Friday evening.",
      title: "Class group chat · Friday, 7:30 p.m.",
      text: [
        { author: "Ximena", body: "Hi, everyone! What are you doing? I'm waiting for the bus. It's raining and I don't have an umbrella! 🌧️" },
        { author: "Raúl", body: "I'm at the cinema with my cousins. We're watching the new superhero movie. It's great! (Shh, I'm not texting, I'm not texting...) 🎬" },
        { author: "Karla", body: "I'm studying for the English test. 😩 Actually, I'm not studying. I'm looking at memes on my phone." },
        { author: "Beto", body: "I'm working at my uncle's taco stand. A lot of people are buying tacos tonight. I'm cutting onions and crying! 🌮" },
        { author: "Ximena", body: "Ha ha! Good luck, Beto. Oh! The bus is coming. See you on Monday!" }
      ],
      activities: [
        {
          type: "sort", title: "Where are they?",
          prompt: "Put each sentence under the right person.",
          bins: ["Ximena", "Raúl", "Karla", "Beto"],
          items: [
            { text: "is waiting at a bus stop", bin: 0 }, { text: "is getting wet", bin: 0 },
            { text: "is watching a movie", bin: 1 }, { text: "is with his cousins", bin: 1 },
            { text: "is looking at memes", bin: 2 }, { text: "isn't really studying", bin: 2 },
            { text: "is cutting onions", bin: 3 }, { text: "is working", bin: 3 }
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Answer with a full sentence in the present progressive.",
          items: [
            { q: "What is Ximena waiting for?", a: ["She's waiting for the bus.", "She is waiting for the bus.", "Ximena is waiting for the bus."] },
            { q: "What are Raúl and his cousins watching?", a: ["They're watching a superhero movie.", "They are watching a superhero movie.", "They're watching the new superhero movie.", "They are watching the new superhero movie."] },
            { q: "Is Karla studying?", a: ["No, she isn't.", "No, she's not.", "No, she is not."] },
            { q: "Why is Beto crying?", a: ["He's cutting onions.", "He is cutting onions.", "Because he's cutting onions.", "Because he is cutting onions."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the forms first, then describe a scene.",
      activities: [
        {
          type: "gap", title: "Spell it right",
          prompt: "Write the *-ing* form of each verb.",
          items: [
            "write → [[writing]]",
            "swim → [[swimming]]",
            "study → [[studying]]",
            "dance → [[dancing]]",
            "sit → [[sitting]]",
            "play → [[playing]]"
          ]
        },
        {
          type: "tiles", title: "Make questions and answers",
          items: [
            { a: "What are you doing right now?" },
            { a: "I'm listening to my favorite song." },
            { a: "Is your brother sleeping?" },
            { a: "No, he isn't. He's reading." },
            { a: "They aren't watching TV at the moment." }
          ]
        },
        {
          type: "write", title: "Right now at…",
          prompt: "Imagine you are taking a photo of a busy place (a park, a market, your house, the school cafeteria). Write a message to a friend: where you are and what five people are doing right now.",
          minWords: 50, maxWords: 80,
          model: "Hi, Pau! I'm at the Sunday market with my mom. It's very busy. A man is selling fresh fruit and he's shouting the prices. Two girls are eating quesadillas. An old woman is buying flowers. A little boy is crying because he wants a toy. My mom is talking to her friend, and I'm writing to you!",
          bank: ["I'm at", "It's very busy.", "A man is", "Two … are", "Nobody is", "My … is", "and I'm"],
          checklist: [
            "I described **five** actions.",
            "I used *am / is / are* + *-ing* every time.",
            "I wrote at least one negative (*isn't / aren't*).",
            "I checked the spelling of the *-ing* forms."
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
            "What are you doing?",
            "I'm watching a movie with my family.",
            "She's cooking dinner right now.",
            "Are you studying?",
            "No, I'm not. I'm playing a game.",
            "They're waiting for the bus."
          ]
        },
        {
          type: "speak", title: "Live report",
          prompt: "Be a reporter! Go to a window, your street, a park or a room in your house. Record about one minute describing what people (or animals) are doing right now.",
          language: ["Hello, I'm at…", "Right now…", "A man / woman is…", "Some kids are…", "Nobody is…", "Look! The dog is…"],
          seconds: 75,
          checklist: ["say where you are?", "describe at least four actions?", "use *is* and *are* correctly?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 12 everyday actions.", review: "Explanation: the vocabulary cards" },
    { can: "I can make affirmative and negative present progressive sentences.", review: "Explanation: present progressive form" },
    { can: "I can spell *-ing* forms correctly.", review: "Explanation: spelling; Writing activity 1" },
    { can: "I can ask *What are you doing?* and *Are you…?* questions.", review: "Explanation: questions; Speaking activity 1 (listen and repeat)" },
    { can: "I can understand people describing actions happening now.", review: "Listening: a video call with Grandma" },
    { can: "I can describe a scene in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
