window.UNIT = {
  slug: "hello-and-goodbye",
  number: 1,
  title: "Hello and Goodbye",
  level: "A1",
  minutes: 50,
  speakers: { "Ms. Reyes": "f", "Tomás": "m", "Ana": "f", "Leo": "m", "Receptionist": "f", "Mr. Park": "m", A: "f", B: "m" },
  focus: ["greetings: Hi, Good morning, Bye", "How are you? I'm fine, thanks.", "the alphabet and spelling", "classroom instructions: open, listen, repeat"],

  presentation: {
    scene: "👋🔤🏫🙂",
    situation: "It's the first English class of the semester. The teacher, Ms. Reyes, says hello to the students and asks them to spell their names.",
    warmup: {
      prompt: "Which of these words and phrases do you already know? Choose them all.",
      options: ["Hello", "Hi", "Good morning", "Good night", "Bye", "See you later", "Thank you", "Please", "Sorry", "How are you?"],
      response: "Very good! You already know a lot. In this unit you'll learn to greet people, say goodbye and spell words in English."
    },
    dialogueTitle: "The first class",
    dialogue: [
      { who: "Ms. Reyes", line: "*Good morning*, everyone! I'm Ms. Reyes, your English teacher." },
      { who: "Tomás", line: "*Good morning*, Ms. Reyes." },
      { who: "Ms. Reyes", line: "*Hello!* What's your name?" },
      { who: "Tomás", line: "My name's Tomás." },
      { who: "Ms. Reyes", line: "*How do you spell* that?" },
      { who: "Tomás", line: "T-O-M-A-S. Tomás." },
      { who: "Ms. Reyes", line: "Thank you, Tomás. *How are you* today?" },
      { who: "Tomás", line: "*I'm fine, thanks.* And you?" },
      { who: "Ms. Reyes", line: "*I'm very well*, thank you. OK, everyone, *open your books* to page five, please." }
    ]
  },

  objectives: [
    "I can say hello and goodbye at different times of the day.",
    "I can ask *How are you?* and answer it.",
    "I can say the letters of the alphabet and spell my name.",
    "I can understand simple classroom instructions."
  ],

  explanation: {
    vocabTitle: "Greetings and classroom words",
    vocab: [
      { word: "Hello!", icon: "👋" }, { word: "Hi!", icon: "🙋" }, { word: "Good morning", icon: "🌅" },
      { word: "Good afternoon", icon: "☀️" }, { word: "Good evening", icon: "🌆" }, { word: "Good night", icon: "🌙" },
      { word: "Goodbye!", icon: "🚪" }, { word: "See you later!", icon: "⏰" }, { word: "Please", icon: "🙏" },
      { word: "Thank you", icon: "💐" }, { word: "Sorry", icon: "😔" }, { word: "Excuse me", icon: "✋" },
      { word: "book", icon: "📖" }, { word: "pen", icon: "🖊️" }, { word: "board", icon: "🧑‍🏫" }
    ],
    grammar: [
      {
        title: "Hello and goodbye",
        head: ["Time", "Hello", "Goodbye"],
        rows: [
          ["morning (before 12:00)", "*Good morning!*", "*Have a nice day!*"],
          ["afternoon (12:00–6:00)", "*Good afternoon!*", "*See you later!*"],
          ["evening (after 6:00)", "*Good evening!*", "*Good night!*"],
          ["any time, with friends", "*Hi! / Hello!*", "*Bye! / See you!*"]
        ],
        note: "*Good night* is only for saying goodbye or going to bed. To say hello in the evening, use *Good evening*."
      },
      {
        title: "How are you?",
        head: ["Question", "Answers"],
        rows: [
          ["*How are you?*", "*I'm fine, thanks.* / *I'm very well, thank you.*"],
          ["*How are you doing?*", "*Great!* / *Not bad.* / *OK.*"],
          ["After you answer:", "*And you?* / *How about you?*"]
        ],
        note: "Always answer and then ask the other person: *I'm fine, thanks. And you?*"
      },
      {
        title: "The alphabet",
        intro: "Some letters sound the same. Group them to remember them.",
        head: ["Sound", "Letters"],
        rows: [
          ["/eɪ/ like *day*", "A, H, J, K"],
          ["/iː/ like *see*", "B, C, D, E, G, P, T, V, Z"],
          ["/e/ like *ten*", "F, L, M, N, S, X"],
          ["/aɪ/ like *my*", "I, Y"],
          ["/əʊ/ like *no*", "O"],
          ["/uː/ like *you*", "Q, U, W"],
          ["/ɑː/ like *car*", "R"]
        ],
        note: "Two letters together: *double L* (Bella), *double S* (Ross). Ask: *How do you spell it?*"
      },
      {
        title: "Classroom instructions",
        head: ["Teacher says", "Meaning"],
        rows: [
          ["*Open* your book. / *Close* your book.", "abre / cierra tu libro"],
          ["*Listen* and *repeat*.", "escucha y repite"],
          ["*Read* the text. *Write* your name.", "lee / escribe"],
          ["*Work* in pairs.", "trabajen en parejas"],
          ["*Don't* use your phone, please.", "no uses tu celular"]
        ],
        note: "Useful for students: *Can you repeat that, please?* · *How do you say \"lápiz\" in English?* · *Sorry, I don't understand.*"
      }
    ],
    watchOut: [
      ["Good night! (to say hello at 8 p.m.)", "Good evening!"],
      ["How are you? – Fine.", "Fine, thanks. And you?"],
      ["How do you write your name?", "How do you spell your name?"],
      ["I am fine, and you? (without thanks)", "I'm fine, thanks. And you?"]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match the situation with the best phrase.",
      pairs: [
        ["You see your teacher at 8 a.m.", "Good morning!"],
        ["You leave a party at 11 p.m.", "Good night!"],
        ["Someone gives you a pen.", "Thank you!"],
        ["You don't understand.", "Can you repeat that, please?"],
        ["You see a friend after class.", "Hi! How are you?"]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Four short conversations at a school. Listen and identify who is talking and what they say.",
      title: "Hello, goodbye, how do you spell it?",
      script: [
        { who: "Ana", line: "Hi, Leo! How are you?" },
        { who: "Leo", line: "Hi, Ana. I'm OK, thanks. And you?" },
        { who: "Ana", line: "Great, thanks! See you later in class." },
        { who: "Leo", line: "Bye! See you." },
        { who: "Receptionist", line: "Good afternoon. Can I help you?" },
        { who: "Mr. Park", line: "Good afternoon. Yes, I'm the new music teacher. My name is Park." },
        { who: "Receptionist", line: "How do you spell that, please?" },
        { who: "Mr. Park", line: "P-A-R-K." },
        { who: "Receptionist", line: "Thank you, Mr. Park. Welcome to the school!" },
        { who: "Ms. Reyes", line: "OK, everyone. Close your books, please. Listen and repeat: Good evening." },
        { who: "Tomás", line: "Good evening." },
        { who: "Ms. Reyes", line: "Very good. Now work in pairs. Goodbye, everyone! Have a nice day." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Ana and Leo are friends.", a: true },
            { s: "Leo is very bad today.", a: false },
            { s: "Mr. Park is a new music teacher.", a: true },
            { s: "The conversation with Mr. Park is in the morning.", a: false },
            { s: "Ms. Reyes says *Open your books*.", a: false },
            { s: "The students work in pairs.", a: true }
          ]
        },
        {
          type: "gap", title: "Listen and spell",
          prompt: "Listen again and complete the words.",
          items: [
            "Mr. Park spells his name: P-A-[[R]]-K.",
            "The receptionist says: Good [[afternoon]].",
            "Ana says: See you [[later]] in class.",
            "Ms. Reyes says: [[Close]] your books, please.",
            "The students repeat: Good [[evening]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read the messages on the school's welcome board.",
      title: "Welcome board",
      text: [
        { author: "Ms. Reyes", body: "Good morning, students! Welcome to English 1. Please bring your book and a pen to every class. In class, speak English, listen to your classmates and ask questions. Don't be shy! See you on Monday." },
        { author: "Tomás", body: "Hi, everyone! My name's Tomás. That's T-O-M-A-S. I'm a new student. Nice to meet you. See you in class!" },
        { author: "Library", body: "Good afternoon! The library is open from 9 to 6. Please be quiet in the library. Thank you!" }
      ],
      activities: [
        {
          type: "sort", title: "Who says it?",
          prompt: "Put each phrase under the right message.",
          bins: ["Ms. Reyes", "Tomás", "Library"],
          items: [
            { text: "Welcome to English 1.", bin: 0 }, { text: "Don't be shy!", bin: 0 }, { text: "See you on Monday.", bin: 0 },
            { text: "I'm a new student.", bin: 1 }, { text: "T-O-M-A-S", bin: 1 }, { text: "Nice to meet you.", bin: 1 },
            { text: "open from 9 to 6", bin: 2 }, { text: "Please be quiet.", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete the sentences with one word from the board.",
          bank: true,
          items: [
            "Students bring a book and a [[pen]] to class.",
            "In class, students speak [[English]].",
            "Tomás is a [[new]] student.",
            "In the library, please be [[quiet]].",
            "The library is open in the [[afternoon]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice greetings and spelling, then write a welcome message.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "How are you today?" },
            { a: "I'm fine, thanks. And you?" },
            { a: "How do you spell your name?" },
            { a: "Can you repeat that, please?" },
            { a: "See you later!" },
            { a: "Open your books, please." }
          ]
        },
        {
          type: "rewrite", title: "Spell it",
          prompt: "Write the word. Example: *B-O-O-K* → *book*.",
          items: [
            { q: "P-E-N", a: ["pen"] },
            { q: "H-E-L-L-O", a: ["hello"] },
            { q: "S-O-R-R-Y", a: ["sorry"] },
            { q: "T-H-A-N-K-S", a: ["thanks"] },
            { q: "Q-U-I-E-T", a: ["quiet"] },
            { q: "J-U-L-Y", a: ["July"] }
          ]
        },
        {
          type: "write", title: "My welcome message",
          prompt: "Write a short message for the class welcome board. Say hello, say your name and spell it, say how you are, and say goodbye.",
          minWords: 25, maxWords: 50,
          model: "Hello, everyone! My name's Ximena. That's X-I-M-E-N-A. I'm a new student in English 1. I'm very well today, thank you. Nice to meet you! See you in class. Bye!",
          bank: ["Hello, everyone!", "My name's…", "That's…", "I'm a new student.", "I'm fine / very well.", "Nice to meet you!", "See you in class!"],
          checklist: [
            "I said **hello** and **goodbye**.",
            "I wrote my **name** and **spelled** it.",
            "I said how I am today.",
            "I used capital letters for names: *Ximena*, *English*."
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
            "Good morning, everyone!",
            "How are you today?",
            "I'm fine, thanks. And you?",
            "How do you spell your name?",
            "Can you repeat that, please?",
            "See you later!"
          ]
        },
        {
          type: "speak", title: "Say and spell",
          prompt: "Record yourself. Say hello, say your full name and spell it, then spell three English words you know (for example *book, teacher, friend*). Finish with a goodbye.",
          language: ["Hello! My name is…", "That's…", "Book: B-O-O-K.", "Goodbye! See you!"],
          seconds: 60,
          checklist: ["say hello and goodbye?", "spell your name clearly?", "spell three English words?", "pronounce *E, I, A* correctly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can say hello and goodbye at different times of the day.", review: "Explanation: hello and goodbye" },
    { can: "I can ask *How are you?* and answer it.", review: "Explanation: How are you?; Presentation dialogue" },
    { can: "I can say the letters of the alphabet.", review: "Explanation: the alphabet" },
    { can: "I can spell my name and understand other people spelling.", review: "Listening activity 2; Speaking activity 1 (listen and repeat)" },
    { can: "I can understand classroom instructions like *Open your book*.", review: "Explanation: classroom instructions" },
    { can: "I can write a short welcome message.", review: "Writing activity 3" }
  ]
};
