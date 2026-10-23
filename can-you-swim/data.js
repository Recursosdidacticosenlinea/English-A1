window.UNIT = {
  slug: "can-you-swim",
  number: 10,
  title: "Can You Swim?",
  level: "A1",
  minutes: 50,
  speakers: { "Coach Vera": "f", "Paty": "f", "Samuel": "m", "Interviewer": "f", "Bruno": "m", "Elena": "f", "Mr. Ríos": "m", A: "f", B: "m" },
  focus: ["can / can't for abilities", "Can you…? Yes, I can.", "well, very well, a little, not at all", "abilities: swim, cook, draw…", "pronunciation: can / can't"],

  presentation: {
    scene: "🏊🎸⚽🎨",
    situation: "The BUAP sports and culture center is looking for students for new teams and workshops. Coach Vera interviews two students.",
    warmup: {
      prompt: "What can you do? Choose everything that is true.",
      options: ["swim", "ride a bike", "dance", "sing", "cook", "draw", "play the guitar", "play soccer", "speak two languages", "drive a car", "use Excel", "skate"],
      response: "Great! In this unit you'll learn to talk about your abilities and other people's abilities."
    },
    dialogueTitle: "At the sports center",
    dialogue: [
      { who: "Coach Vera", line: "Hi! Are you here for the swimming team?" },
      { who: "Paty", line: "Yes! *I can swim* very well. I swim every weekend." },
      { who: "Coach Vera", line: "Excellent. And you? *Can you swim*?" },
      { who: "Samuel", line: "No, *I can't*. Not at all! But *I can play* the guitar." },
      { who: "Coach Vera", line: "Oh, then you should go to the music workshop. *Can you sing* too?" },
      { who: "Samuel", line: "*I can sing* a little… but not very well." },
      { who: "Paty", line: "He's being modest. *He can sing* really well!" },
      { who: "Coach Vera", line: "Perfect. The music workshop is on the second floor. Good luck!" }
    ]
  },

  objectives: [
    "I can name common abilities: sports, music, art and everyday skills.",
    "I can say what I *can* and *can't* do.",
    "I can ask and answer *Can you…?* questions.",
    "I can say how well I do something: *very well, a little, not at all*."
  ],

  explanation: {
    vocabTitle: "Abilities",
    vocab: [
      { word: "swim", icon: "🏊" }, { word: "ride a bike", icon: "🚲" }, { word: "dance", icon: "💃" },
      { word: "sing", icon: "🎤" }, { word: "cook", icon: "🍳" }, { word: "draw", icon: "✏️" },
      { word: "paint", icon: "🎨" }, { word: "play the guitar", icon: "🎸" }, { word: "play the piano", icon: "🎹" },
      { word: "play soccer", icon: "⚽" }, { word: "skate", icon: "🛹" }, { word: "drive", icon: "🚗" },
      { word: "speak French", icon: "🇫🇷" }, { word: "type fast", icon: "⌨️" }, { word: "take photos", icon: "📷" }
    ],
    grammar: [
      {
        title: "Can / can't",
        head: ["", "Example"],
        rows: [
          ["affirmative", "I *can* swim. She *can* dance."],
          ["negative", "He *can't* (cannot) drive."],
          ["question", "*Can* you cook?"],
          ["short answers", "Yes, I *can*. / No, I *can't*."],
          ["Wh- question", "What *can* you do? What instruments *can* you play?"]
        ],
        note: "*Can* is the same for all subjects: *I can, he can, they can*. The verb after *can* has no *to* and no *-s*: *She can swim.* (not *She can swims*)."
      },
      {
        title: "How well?",
        head: ["Expression", "Example"],
        rows: [
          ["*very well* / *really well*", "Paty can swim *very well*."],
          ["*well*", "I can cook *well*."],
          ["*a little*", "I can sing *a little*."],
          ["*not very well*", "He can dance, but *not very well*."],
          ["*not at all*", "I can't swim *at all*."]
        ],
        note: "These expressions go at the **end** of the sentence."
      },
      {
        title: "Pronunciation",
        head: ["Word", "How it sounds"],
        rows: [
          ["*can* in a sentence", "short and weak: *I c'n swim* /kən/"],
          ["*can* in short answers", "strong: *Yes, I CAN.* /kæn/"],
          ["*can't*", "always strong and long: *I CAN'T swim.* /kænt/"]
        ],
        note: "Listen for the stress: if *can* is very clear and strong in the middle of a sentence, it's probably *can't*."
      }
    ],
    watchOut: [
      ["I can to swim.", "I can swim."],
      ["She cans dance.", "She can dance."],
      ["Do you can cook?", "Can you cook?"],
      ["I can speak very well English.", "I can speak English very well."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *can* or *can't*.",
      items: [
        "Fish [[can]] swim, but they [[can't|cannot]] walk.",
        "[[Can]] you play the piano? – Yes, I can.",
        "My grandma is 80, but she [[can]] ride a bike!",
        "Babies [[can't|cannot]] talk."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A school website is making videos about talented students. Listen to two interviews.",
      title: "Hidden talents",
      script: [
        { who: "Interviewer", line: "Hi, Bruno! People say you have a special talent. What can you do?" },
        { who: "Bruno", line: "Well, I can solve a Rubik's cube in thirty seconds!" },
        { who: "Interviewer", line: "Wow! Can you do it with your eyes closed?" },
        { who: "Bruno", line: "No, I can't. Not yet! But I can do it with one hand." },
        { who: "Interviewer", line: "Amazing. Can you play any sports?" },
        { who: "Bruno", line: "Not really. I can't play soccer at all, but I can swim a little." },
        { who: "Interviewer", line: "Thank you, Bruno. Now, Elena. What can you do?" },
        { who: "Elena", line: "I can speak four languages: Spanish, English, French and Náhuatl. My grandmother taught me Náhuatl." },
        { who: "Interviewer", line: "That's incredible! Can you write in Náhuatl too?" },
        { who: "Elena", line: "Yes, I can, but not very well. I can read it well." },
        { who: "Interviewer", line: "And can you cook? People say you make great mole." },
        { who: "Elena", line: "Ha ha! No, I can't. My grandmother can cook mole. I can only eat it!" }
      ],
      activities: [
        {
          type: "sort", title: "Can or can't?",
          prompt: "Listen. Put each ability in the right box.",
          bins: ["Bruno can…", "Bruno can't…", "Elena can…", "Elena can't…"],
          items: [
            { text: "solve a Rubik's cube with one hand", bin: 0 }, { text: "swim a little", bin: 0 },
            { text: "solve the cube with his eyes closed", bin: 1 }, { text: "play soccer", bin: 1 },
            { text: "speak four languages", bin: 2 }, { text: "read Náhuatl well", bin: 2 },
            { text: "cook mole", bin: 3 }, { text: "write Náhuatl very well", bin: 3 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Bruno can solve the cube in thirty seconds.", a: true },
            { s: "Bruno can play soccer very well.", a: false },
            { s: "Elena can speak French.", a: true },
            { s: "Elena learned Náhuatl at school.", a: false },
            { s: "Elena's grandmother can cook mole.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three ads on the BUAP student job board.",
      title: "Student job board",
      text: [
        { author: "Café Cholula · Weekend barista", body: "We're looking for a friendly student for Saturdays and Sundays. You can't be shy! You need to talk to customers in Spanish and English. You don't need experience: we can teach you to make coffee." },
        { author: "Kids' Summer Camp · Assistant", body: "Can you swim well? Can you play games and sing songs with children? Join our summer camp in Atlixco! You must be 18 or older. You can't use your phone during activities." },
        { author: "Design Studio · Part-time assistant", body: "We need a creative student who can draw and use design programs. You can work from home three days a week. Can you take good photos? That's a plus!" }
      ],
      activities: [
        {
          type: "match", title: "The right job",
          prompt: "Match each student with the best job.",
          pairs: [
            ["Karla is very sociable and can speak English well.", "Café Cholula"],
            ["Iván can swim very well and loves children.", "Kids' Summer Camp"],
            ["Sonia can draw and take great photos.", "Design Studio"]
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Answer with a short answer: *Yes, you can.* or *No, you can't.*",
          items: [
            { q: "Café Cholula: Can I work there with no experience?", a: ["Yes, you can."] },
            { q: "Summer camp: Can I use my phone during activities?", a: ["No, you can't.", "No, you cannot."] },
            { q: "Summer camp: Can I work there if I'm 16?", a: ["No, you can't.", "No, you cannot."] },
            { q: "Design Studio: Can I work from home?", a: ["Yes, you can."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures, then write about your abilities.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Can you play the guitar?" },
            { a: "My sister can draw very well." },
            { a: "I can't swim at all." },
            { a: "What languages can you speak?" },
            { a: "He can cook a little." }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write the correct sentence.",
          items: [
            { q: "She can sings very well.", a: ["She can sing very well."] },
            { q: "Do you can ride a bike?", a: ["Can you ride a bike?"] },
            { q: "I can to speak English.", a: ["I can speak English."] },
            { q: "They can't to drive.", a: ["They can't drive.", "They cannot drive."] },
            { q: "He can play very well soccer.", a: ["He can play soccer very well."] }
          ]
        },
        {
          type: "write", title: "Apply for a job",
          prompt: "Choose one job from the job board. Write a short message to apply. Say what you can do (and how well), and one thing you can't do but want to learn.",
          minWords: 50, maxWords: 80,
          model: "Hello! My name is Diana and I'm 19. I'm a student at BUAP. I want to work at the Kids' Summer Camp. I can swim very well and I can play the guitar a little, so I can sing songs with the children. I can't speak English very well, but I want to learn. I'm friendly and patient. Thank you!",
          bank: ["I want to work at", "I can … very well", "I can … a little", "I can't … at all", "but I want to learn", "I'm friendly / patient / creative"],
          checklist: [
            "I said **which job** I want.",
            "I wrote at least **three** things I can do.",
            "I used *very well, a little* or *not at all*.",
            "I wrote one thing I *can't* do."
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
            "Can you swim?",
            "Yes, I can, but not very well.",
            "I can't drive at all.",
            "She can play the guitar.",
            "Can your brother cook?",
            "We can speak a little English."
          ]
        },
        {
          type: "speak", title: "My talents",
          prompt: "Record yourself for about one minute for the school website. Talk about three things you can do, how well you can do them, and one thing you can't do yet.",
          language: ["Hi! I'm… and I can…", "I can … very well.", "I can … a little.", "I can't … at all.", "I want to learn to…"],
          seconds: 75,
          checklist: ["talk about three abilities?", "say how well?", "say one thing you can't do?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 12 abilities.", review: "Explanation: the vocabulary cards" },
    { can: "I can say what I *can* and *can't* do.", review: "Explanation: can / can't" },
    { can: "I can ask *Can you…?* and give short answers.", review: "Explanation: can / can't; Speaking activity 1 (listen and repeat)" },
    { can: "I can say how well I do things.", review: "Explanation: how well?; Writing activity 2" },
    { can: "I can hear the difference between *can* and *can't*.", review: "Explanation: pronunciation; Listening" },
    { can: "I can describe my abilities in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
