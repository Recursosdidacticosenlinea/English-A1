window.UNIT = {
  slug: "hi-my-name-is",
  number: 2,
  title: "Hi, My Name Is…",
  level: "A1",
  minutes: 50,
  speakers: { A: "m", B: "f" }, /* voices for the speaking model (A is Iván) */
  focus: ["verb to be: am, is, are", "I'm / you're / she's…", "Are you…? Yes, I am.", "name, age, from, job"],

  presentation: {
    scene: "👋🙂🏫🪪",
    situation: "It's the first day of the semester at BUAP. In the English club, students introduce themselves and meet new classmates.",
    warmup: {
      prompt: "What can you say about yourself in English? Choose everything you can say.",
      options: ["my name", "my age", "my city", "my country", "my school", "my job", "my phone number", "my favorite color", "my family", "my email"],
      response: "Great! In this unit you'll learn to introduce yourself and ask other people about them."
    },
    dialogueTitle: "At the English club",
    dialogue: [
      { who: "Lucía", line: "Hi! *I'm* Lucía. What's your name?" },
      { who: "Kenji", line: "Hello, Lucía. My name *is* Kenji. Nice to meet you." },
      { who: "Lucía", line: "Nice to meet you too. *Are* you a new student?" },
      { who: "Kenji", line: "Yes, *I am*. I'm sixteen. *Are* you sixteen too?" },
      { who: "Lucía", line: "No, *I'm not*. I'm seventeen. Where *are* you from?" },
      { who: "Kenji", line: "*I'm* from Osaka, in Japan. My parents *are* teachers here in Mexico City." },
      { who: "Lucía", line: "Cool! This *is* my friend Beto. *He's* from Puebla." }
    ]
  },

  objectives: [
    "I can greet people and introduce myself.",
    "I can use *am, is* and *are* with *I, you, he, she, it, we, they*.",
    "I can ask and answer questions about name, age, city and job.",
    "I can make negative sentences with *'m not, isn't, aren't*."
  ],

  explanation: {
    vocabTitle: "Personal information",
    vocab: [
      { word: "name", icon: "🪪" }, { word: "age", icon: "🎂" }, { word: "country", icon: "🌎" },
      { word: "city", icon: "🏙️" }, { word: "student", icon: "🎒" }, { word: "teacher", icon: "👩‍🏫" },
      { word: "doctor", icon: "🩺" }, { word: "engineer", icon: "👷" }, { word: "friend", icon: "🤝" },
      { word: "classmate", icon: "🧑‍🤝‍🧑" }, { word: "married", icon: "💍" }, { word: "single", icon: "🙋" },
      { word: "Hello!", icon: "👋" }, { word: "Nice to meet you", icon: "🤝" }, { word: "Goodbye!", icon: "🚪" }
    ],
    grammar: [
      {
        title: "Verb to be: affirmative",
        head: ["Subject", "Full form", "Short form"],
        rows: [
          ["I", "I *am* a student.", "*I'm* a student."],
          ["you", "You *are* my friend.", "*You're* my friend."],
          ["he / she / it", "She *is* from Puebla.", "*She's* from Puebla."],
          ["we", "We *are* classmates.", "*We're* classmates."],
          ["they", "They *are* teachers.", "*They're* teachers."]
        ],
        note: "We use *to be* for name, age, nationality, jobs and descriptions: *I'm 16.* — never *I have 16*."
      },
      {
        title: "Negatives and questions",
        head: ["Negative", "Question", "Short answer"],
        rows: [
          ["I*'m not* tired.", "*Am* I late?", "Yes, you *are*. / No, you *aren't*."],
          ["He *isn't* Mexican.", "*Is* he Mexican?", "Yes, he *is*. / No, he *isn't*."],
          ["They *aren't* here.", "*Are* they here?", "Yes, they *are*. / No, they *aren't*."]
        ],
        note: "In short answers with *Yes*, don't use contractions: *Yes, I am.* — never *Yes, I'm.*"
      },
      {
        title: "Wh- questions with be",
        head: ["Question", "Answer"],
        rows: [
          ["*What's* your name?", "My name's Lucía."],
          ["*How old are* you?", "I'm seventeen."],
          ["*Where are* you from?", "I'm from Osaka."],
          ["*What's* your job?", "I'm a student."],
          ["*Who is* she?", "She's my teacher."]
        ]
      }
    ],
    watchOut: [
      ["I have 16 years.", "I'm 16. / I'm 16 years old."],
      ["She is teacher.", "She is a teacher."],
      ["You are from Mexico?", "Are you from Mexico?"],
      ["Yes, I'm.", "Yes, I am."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *am, is* or *are*.",
      items: [
        "I [[am]] a student at BUAP.",
        "Kenji [[is]] from Japan.",
        "[[Are]] you sixteen? – No, I'm not.",
        "My parents [[are]] teachers."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Ms. Ortiz is the English club coordinator. She registers three new members. Listen and complete the forms.",
      title: "Registration day",
      script: [
        { who: "Ms. Ortiz", line: "Good morning! Welcome to the English club. What's your name?" },
        { who: "Andrea", line: "Hi. My name's Andrea Soto." },
        { who: "Ms. Ortiz", line: "How old are you, Andrea?" },
        { who: "Andrea", line: "I'm fifteen. I'm in the first semester." },
        { who: "Ms. Ortiz", line: "Great. Thank you. Next, please. Hello! Are you a student here?" },
        { who: "Marcos", line: "No, I'm not. I'm a librarian. I work in the school library. My name is Marcos." },
        { who: "Ms. Ortiz", line: "Oh, nice to meet you, Marcos. Where are you from?" },
        { who: "Marcos", line: "I'm from Oaxaca, but my wife and I are in Mexico City now." },
        { who: "Ms. Ortiz", line: "Wonderful. And you? What's your name?" },
        { who: "Claire", line: "Hello. I'm Claire. I'm an exchange student. I'm from Montreal, in Canada." },
        { who: "Ms. Ortiz", line: "Welcome, Claire! How old are you?" },
        { who: "Claire", line: "I'm seventeen. My brother is here too. He's nineteen. He's at the university." }
      ],
      activities: [
        {
          type: "match", title: "Who is who?",
          prompt: "Match each person with the correct information.",
          pairs: [
            ["Andrea", "a 15-year-old student in the first semester"],
            ["Marcos", "a librarian from Oaxaca"],
            ["Claire", "an exchange student from Canada"],
            ["Claire's brother", "a 19-year-old university student"],
            ["Ms. Ortiz", "the English club coordinator"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Andrea's last name is Soto.", a: true },
            { s: "Marcos is a student at BUAP.", a: false },
            { s: "Marcos and his wife are in Oaxaca now.", a: false },
            { s: "Claire is from Montreal.", a: true },
            { s: "Claire is nineteen.", a: false },
            { s: "Claire's brother is at the university.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "New members of the English club wrote short profiles for the club's page.",
      title: "Meet our new members",
      text: [
        { author: "Diego", body: "Hi! I'm Diego and I'm sixteen. I'm from Toluca, but my family and I are in Mexico City now. I'm a student in the third semester. My favorite subject is biology. My mom is a nurse and my dad is a taxi driver." },
        { author: "Fernanda", body: "Hello, everyone! My name is Fernanda, but my friends call me Fer. I'm fifteen and I'm from Mexico City. I'm not very good at English, but I'm happy to be here! My best friend, Paola, is in the club too." },
        { author: "Mr. Hughes", body: "Good afternoon! I'm Robert Hughes. I'm forty-two and I'm from Manchester, in England. I'm a music teacher. I'm married and my wife is Mexican. We're in Coyoacán with our two children." }
      ],
      activities: [
        {
          type: "sort", title: "Whose profile is it?",
          prompt: "Put each piece of information under the right person.",
          bins: ["Diego", "Fernanda", "Mr. Hughes"],
          items: [
            { text: "16 years old", bin: 0 }, { text: "from Toluca", bin: 0 }, { text: "mom is a nurse", bin: 0 },
            { text: "15 years old", bin: 1 }, { text: "friends call her Fer", bin: 1 }, { text: "best friend is in the club", bin: 1 },
            { text: "from England", bin: 2 }, { text: "a music teacher", bin: 2 }, { text: "married with two children", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete the sentences about the profiles. Use one word.",
          items: [
            "Diego [[is]] in the third semester.",
            "His dad [[is]] a taxi driver.",
            "Fernanda [[isn't|is not]] very good at English.",
            "Paola and Fernanda [[are]] best friends.",
            "Mr. Hughes and his wife [[are]] in Coyoacán.",
            "Mr. Hughes [[is]] forty-two years old."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice making sentences and questions, then write your own profile for the club page.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What's your name?" },
            { a: "Where are you from?" },
            { a: "How old is your brother?" },
            { a: "I'm not from Mexico City." },
            { a: "Are they your classmates?" },
            { a: "My mom is a nurse." }
          ]
        },
        {
          type: "rewrite", title: "Make it negative",
          prompt: "Rewrite the sentences in the negative. Use short forms.",
          items: [
            { q: "I'm a teacher.", a: ["I'm not a teacher.", "I am not a teacher."] },
            { q: "She's from Canada.", a: ["She isn't from Canada.", "She's not from Canada.", "She is not from Canada."] },
            { q: "We're in the library.", a: ["We aren't in the library.", "We're not in the library.", "We are not in the library."] },
            { q: "It's my phone.", a: ["It isn't my phone.", "It's not my phone.", "It is not my phone."] },
            { q: "They're sixteen.", a: ["They aren't sixteen.", "They're not sixteen.", "They are not sixteen."] }
          ]
        },
        {
          type: "write", title: "My profile",
          prompt: "Write a profile for the English club page. Say your name, age, where you're from, what you do, and something about your family or friends.",
          minWords: 40, maxWords: 70,
          model: "Hi! I'm Valeria and I'm sixteen. I'm from Tlaxcala, but my school is in Puebla. I'm a student at BUAP. My favorite subject is math. My sister is twenty and she's a nurse. My best friend is Sam. He isn't in the club, but he's very nice!",
          bank: ["Hi! I'm", "I'm … years old", "I'm from", "I'm a student at", "My … is a", "My best friend is", "He / She isn't"],
          checklist: [
            "I wrote my **name, age and city**.",
            "I used *am, is* and *are* correctly.",
            "I wrote at least one negative sentence (*isn't, aren't, 'm not*).",
            "I used *a / an* with jobs: *a nurse, an engineer*."
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
            "Hi! My name is Lucy.",
            "Nice to meet you.",
            "Are you a new student?",
            "Yes, I am. I'm sixteen.",
            "Where are you from?",
            "This is my friend. He's from Puebla."
          ]
        },
        {
          type: "speak", title: "Introduce yourself",
          prompt: "Record a short video or audio message for the club (about one minute). Say your name, age, city, school and one thing about a person in your family.",
          language: ["Hello, my name is…", "I'm … years old.", "I'm from…", "I'm a student at…", "My … is a…", "He's / She's…"],
          seconds: 75,
          checklist: ["say your name, age and city?", "use *I'm* correctly?", "talk about a family member with *he's* or *she's*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can greet people and introduce myself.", review: "Presentation: the dialogue at the English club" },
    { can: "I can use *am, is* and *are* with all the subjects.", review: "Explanation: verb to be, affirmative" },
    { can: "I can make negative sentences with *'m not, isn't, aren't*.", review: "Explanation: negatives; Writing activity 2" },
    { can: "I can ask *Are you…? Is he…?* and give short answers.", review: "Explanation: questions and short answers" },
    { can: "I can ask about name, age, city and job.", review: "Explanation: Wh- questions; Speaking activity 1 (listen and repeat)" },
    { can: "I can write and record a short introduction about myself.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
