window.UNIT = {
  slug: "numbers-everywhere",
  number: 3,
  title: "Numbers Everywhere",
  level: "A1",
  minutes: 50,
  speakers: { "Pablo": "m", "Sara": "f", "Librarian": "f", "Coach": "m", "Brenda": "f", "Kevin": "m", A: "f", B: "m" },
  focus: ["numbers 0–100", "phone numbers and email addresses", "How old are you?", "How many…? There are…", "-teen or -ty? 13 / 30"],

  presentation: {
    scene: "🔢📱📧🎂",
    situation: "Pablo wants to join the university soccer team. Sara, the team captain, writes down his information.",
    warmup: {
      prompt: "Where do you see numbers every day? Choose all.",
      options: ["my phone", "the bus", "prices in shops", "the clock", "my ID card", "my house", "my age", "the classroom door", "my email", "my bank card"],
      response: "Numbers are everywhere! In this unit you'll learn to say and understand numbers in English."
    },
    dialogueTitle: "Joining the team",
    dialogue: [
      { who: "Sara", line: "Hi! Do you want to join the team? OK. What's your name?" },
      { who: "Pablo", line: "Pablo Herrera." },
      { who: "Sara", line: "*How old are you*, Pablo?" },
      { who: "Pablo", line: "I'm *nineteen*." },
      { who: "Sara", line: "And *what's your phone number*?" },
      { who: "Pablo", line: "It's *two-two-two, five-four-eight, three-oh-seven-one*." },
      { who: "Sara", line: "Sorry, *can you repeat that*?" },
      { who: "Pablo", line: "Sure. 222 548 3071." },
      { who: "Sara", line: "Thanks. *What's your email address*?" },
      { who: "Pablo", line: "It's *pablo dot herrera at mail dot com*." },
      { who: "Sara", line: "Perfect. Practice is in room *forty*, at the gym. There are *thirty* players on the team!" }
    ]
  },

  objectives: [
    "I can say and understand numbers from 0 to 100.",
    "I can give my phone number and email address.",
    "I can ask and answer *How old…?* and *How many…?*",
    "I can hear the difference between *thirteen* and *thirty*."
  ],

  explanation: {
    vocabTitle: "Numbers",
    vocab: [
      { word: "zero", icon: "0️⃣" }, { word: "one", icon: "1️⃣" }, { word: "two", icon: "2️⃣" }, { word: "three", icon: "3️⃣" },
      { word: "eleven", say: "eleven", icon: "1️⃣1️⃣" }, { word: "twelve", icon: "1️⃣2️⃣" }, { word: "thirteen", icon: "1️⃣3️⃣" },
      { word: "fifteen", icon: "1️⃣5️⃣" }, { word: "twenty", icon: "2️⃣0️⃣" }, { word: "thirty", icon: "3️⃣0️⃣" },
      { word: "forty", icon: "4️⃣0️⃣" }, { word: "fifty", icon: "5️⃣0️⃣" }, { word: "one hundred", icon: "💯" },
      { word: "phone number", icon: "📱" }, { word: "email address", icon: "📧" }
    ],
    grammar: [
      {
        title: "Numbers 0–100",
        head: ["1–10", "11–19", "20–100"],
        rows: [
          ["one, two, three, four, five", "eleven, twelve, *thirteen*, fourteen, *fifteen*", "*twenty*, *thirty*, *forty*, *fifty*"],
          ["six, seven, eight, nine, ten", "sixteen, seventeen, eighteen, nineteen", "sixty, seventy, eighty, ninety, one hundred"],
          ["", "", "21 = *twenty-one*, 35 = *thirty-five*, 99 = *ninety-nine*"]
        ],
        note: "Spelling: *four* but *forty* (no u). *Five → fifteen, fifty*. *Three → thirteen, thirty*. Use a hyphen: *twenty-one*."
      },
      {
        title: "-teen or -ty?",
        head: ["-teen (stress at the end)", "-ty (stress at the beginning)"],
        rows: [
          ["thir*TEEN* (13)", "*THIR*ty (30)"],
          ["four*TEEN* (14)", "*FOR*ty (40)"],
          ["fif*TEEN* (15)", "*FIF*ty (50)"],
          ["eigh*TEEN* (18)", "*EIGH*ty (80)"]
        ]
      },
      {
        title: "Phone numbers and emails",
        head: ["Write", "Say"],
        rows: [
          ["222 548 3071", "two-two-two, five-four-eight, three-*oh*-seven-one"],
          ["55 1100 2299", "five-five, *double one*-oh-oh, *double two*-nine-nine"],
          ["ana.ruiz@mail.com", "ana *dot* ruiz *at* mail *dot* com"],
          ["leo_22@buap.mx", "leo *underscore* two-two at buap dot m-x"]
        ],
        note: "In phone numbers we often say *oh* for 0, and *double* for two equal numbers: *77 = double seven*."
      },
      {
        title: "Questions with numbers",
        head: ["Question", "Answer"],
        rows: [
          ["*How old are* you? / *How old is* she?", "I'm 19. / She's 21 (years old)."],
          ["*What's* your phone number?", "It's 222 548 3071."],
          ["*How many* students *are there*?", "*There are* thirty students."],
          ["*What number is* your classroom?", "It's room forty."]
        ],
        note: "We say *I'm 19* or *I'm 19 years old* — never *I have 19 years*."
      }
    ],
    watchOut: [
      ["I have 20 years.", "I'm 20. / I'm 20 years old."],
      ["fourty", "forty"],
      ["twenty one", "twenty-one"],
      ["How many years do you have?", "How old are you?"]
    ],
    check: {
      type: "rewrite", title: "Quick check",
      prompt: "Write the numbers in words.",
      items: [
        { q: "14", a: ["fourteen"] },
        { q: "40", a: ["forty"] },
        { q: "15", a: ["fifteen"] },
        { q: "23", a: ["twenty-three", "twenty three"] },
        { q: "100", a: ["one hundred", "a hundred"] }
      ]
    }
  },

  skills: {
    listening: {
      intro: "Three students sign up for activities at the university. Listen and write the numbers.",
      title: "Sign-up day",
      script: [
        { who: "Librarian", line: "Hello. Do you want a library card? What's your name?" },
        { who: "Brenda", line: "Brenda Gómez. I'm eighteen." },
        { who: "Librarian", line: "And your phone number, Brenda?" },
        { who: "Brenda", line: "It's two-two-one, four-oh-nine, double six-one-two." },
        { who: "Librarian", line: "Thank you. Your card number is fifty-seven." },
        { who: "Coach", line: "Hi! Welcome to the basketball team. How old are you?" },
        { who: "Kevin", line: "I'm twenty. My name's Kevin." },
        { who: "Coach", line: "What's your email, Kevin?" },
        { who: "Kevin", line: "It's kevin underscore nine at mail dot com." },
        { who: "Coach", line: "Great. There are fourteen players on the team. Practice is in gym number three." }
      ],
      activities: [
        {
          type: "gap", title: "Listen for the numbers",
          prompt: "Write the numbers with figures (1, 2, 3…).",
          items: [
            "Brenda is [[18]] years old.",
            "Brenda's phone number: 221 [[409]] 6612.",
            "Her library card number is [[57]].",
            "Kevin is [[20]] years old.",
            "There are [[14]] players on the basketball team.",
            "Practice is in gym number [[3]]."
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Brenda wants a library card.", a: true },
            { s: "Kevin is on the soccer team.", a: false },
            { s: "Kevin's email is kevin_9@mail.com.", a: true },
            { s: "There are forty players on the team.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the student club notice board.",
      title: "University clubs",
      text: [
        { author: "Chess club", body: "Room 13 · 25 members. Do you like chess? Come and play! Contact: Daniel, 222 315 7780, daniel.chess@buap.mx" },
        { author: "Photography club", body: "Room 30 · 18 members. Bring your phone or camera. We take photos around the city. Contact: Mia, 221 600 4455, mia_photo@mail.com" },
        { author: "Dance club", body: "Gym 2 · 40 members. Salsa, hip-hop and folk dance. All ages: our oldest member is 62! Contact: Rocío, 222 999 1203, rocio.dance@buap.mx" }
      ],
      activities: [
        {
          type: "match", title: "Find the numbers",
          prompt: "Match the question with the answer.",
          pairs: [
            ["How many members are in the chess club?", "twenty-five"],
            ["What room is the photography club in?", "thirty"],
            ["How many people are in the dance club?", "forty"],
            ["How old is the oldest dancer?", "sixty-two"],
            ["What room is the chess club in?", "thirteen"]
          ]
        },
        {
          type: "sort", title: "Phone or email?",
          prompt: "Sort the contact information.",
          bins: ["Phone number", "Email address"],
          items: [
            { text: "222 315 7780", bin: 0 }, { text: "221 600 4455", bin: 0 }, { text: "222 999 1203", bin: 0 },
            { text: "daniel.chess@buap.mx", bin: 1 }, { text: "mia_photo@mail.com", bin: 1 }, { text: "rocio.dance@buap.mx", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice questions with numbers, then complete a sign-up form in sentences.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "How old are you?" },
            { a: "What's your phone number?" },
            { a: "How many students are there?" },
            { a: "My sister is twenty-one years old." },
            { a: "What's your email address?" }
          ]
        },
        {
          type: "gap", title: "Do the math",
          prompt: "Write the answer in words.",
          items: [
            "ten + five = [[fifteen]]",
            "twenty + twenty = [[forty]]",
            "fifty – eight = [[forty-two|forty two]]",
            "thirty + thirty-three = [[sixty-three|sixty three]]",
            "one hundred – ten = [[ninety]]"
          ]
        },
        {
          type: "write", title: "Sign up for a club",
          prompt: "Write a message to join a club. Say your name, age, phone number and email. Ask one question with *How many…?* or *What room…?*",
          minWords: 30, maxWords: 60,
          model: "Hi! My name is Camila Torres and I'm nineteen years old. I want to join the photography club. My phone number is 222 410 8836 and my email is camila.torres@mail.com. How many members are in the club? Thank you!",
          bank: ["My name is…", "I'm … years old.", "I want to join…", "My phone number is…", "My email is…", "How many…?", "What room…?"],
          checklist: [
            "I wrote my **age** with *I'm … years old*.",
            "I wrote my **phone number** and **email**.",
            "I asked a question with *How many* or *What room*.",
            "I spelled the numbers in words correctly."
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
            "How old are you?",
            "I'm nineteen years old.",
            "What's your phone number?",
            "There are thirty students in my class.",
            "My sister is twenty-one.",
            "What's your email address?"
          ]
        },
        {
          type: "speak", title: "Numbers in my life",
          prompt: "Record yourself talking about five numbers in your life: your age, your house number, how many people are in your family, how many students are in your class, and your favorite number.",
          language: ["I'm … years old.", "My house number is…", "There are … people in my family.", "There are … students in my class.", "My favorite number is…"],
          seconds: 60,
          checklist: ["say five different numbers?", "pronounce *-teen* and *-ty* clearly?", "use *There are…*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can say and write numbers from 0 to 100.", review: "Explanation: numbers 0–100; Quick check" },
    { can: "I can hear the difference between *-teen* and *-ty*.", review: "Explanation: -teen or -ty?" },
    { can: "I can give and understand phone numbers.", review: "Explanation: phone numbers; Listening activity 1" },
    { can: "I can say and spell an email address.", review: "Explanation: phone numbers and emails" },
    { can: "I can ask and answer *How old…?* and *How many…?*", review: "Explanation: questions with numbers" },
    { can: "I can fill in a form or write a message with my personal numbers.", review: "Writing activity 3" }
  ]
};
