window.UNIT = {
  slug: "whats-the-matter",
  number: 41,
  title: "What's the Matter?",
  level: "A1",
  minutes: 50,
  speakers: { "Pharmacist": "f", "Diego": "m", "Doctor": "m", "Camila": "f", "Mom": "f", A: "f", B: "m" },
  focus: ["parts of the body", "I've got a headache / a cold", "My … hurts.", "What's the matter? / What's wrong?", "advice with imperatives: Take… / Drink… / Don't…"],

  presentation: {
    scene: "🤒💊🌡️🛌",
    situation: "Diego doesn't feel well. He goes to the pharmacy near his house before class.",
    warmup: {
      prompt: "Which words about health do you know? Choose all.",
      options: ["headache", "stomachache", "toothache", "a cold", "a fever", "a cough", "tired", "sick", "medicine", "doctor"],
      response: "Get well soon! In this unit you'll learn to say how you feel and understand simple advice."
    },
    dialogueTitle: "At the pharmacy",
    dialogue: [
      { who: "Pharmacist", line: "Good morning. *What's the matter*?" },
      { who: "Diego", line: "*I don't feel well*. *I've got a headache* and *my throat hurts*." },
      { who: "Pharmacist", line: "*Have you got a fever*?" },
      { who: "Diego", line: "I think so. I'm hot and *I'm very tired*." },
      { who: "Pharmacist", line: "*Maybe you've got a cold*. *Take* these pills, one every eight hours." },
      { who: "Diego", line: "OK. Anything else?" },
      { who: "Pharmacist", line: "*Drink* a lot of water and *rest*. *Don't go* to school today." },
      { who: "Diego", line: "Great advice! Thank you." },
      { who: "Pharmacist", line: "And if you've still got a fever tomorrow, *see a doctor*. *Get well soon*!" }
    ]
  },

  objectives: [
    "I can name parts of the body.",
    "I can say what's wrong: *I've got a headache. My back hurts.*",
    "I can ask *What's the matter?* and show I care.",
    "I can understand and give simple advice with imperatives."
  ],

  explanation: {
    vocabTitle: "The body and health problems",
    vocab: [
      { word: "head", icon: "🗣️" }, { word: "eye", icon: "👁️" }, { word: "ear", icon: "👂" },
      { word: "nose", icon: "👃" }, { word: "mouth / tooth", icon: "🦷" }, { word: "throat", icon: "🧣" },
      { word: "back", icon: "🧍" }, { word: "stomach", icon: "🫃" }, { word: "arm / hand", icon: "💪" },
      { word: "leg / foot", icon: "🦵" }, { word: "a headache", icon: "🤕" }, { word: "a cold", icon: "🤧" },
      { word: "a fever", icon: "🌡️" }, { word: "a cough", icon: "😷" }, { word: "pills / medicine", icon: "💊" }
    ],
    grammar: [
      {
        title: "Saying what's wrong",
        head: ["Structure", "Example"],
        rows: [
          ["*I've got a* + problem", "*I've got a* headache / a cold / a fever / a cough."],
          ["*My* + body part + *hurts*", "*My* back *hurts*. *My* throat *hurts*."],
          ["*My* + plural + *hurt*", "*My* feet *hurt*."],
          ["*I feel* + adjective", "*I feel* sick / tired / terrible."],
          ["*I don't feel well.*", "general problem"]
        ],
        note: "*-ache* words: *headache, stomachache, toothache, earache, backache*. *I've got a stomachache.*"
      },
      {
        title: "Asking and caring",
        head: ["Question / reaction", "Answer"],
        rows: [
          ["*What's the matter?* / *What's wrong?*", "I've got a headache."],
          ["*Are you OK?*", "Not really. I feel sick."],
          ["*Oh no! / I'm sorry.*", ""],
          ["*Get well soon!* / *Take care!*", "Thanks."]
        ]
      },
      {
        title: "Advice with imperatives",
        head: ["Do", "Don't"],
        rows: [
          ["*Take* an aspirin.", "*Don't go* to work."],
          ["*Drink* a lot of water.", "*Don't eat* spicy food."],
          ["*Go* to bed. *Rest.*", "*Don't use* your phone at night."],
          ["*See* a doctor.", "*Don't* run today."]
        ]
      }
    ],
    watchOut: [
      ["I have pain of head.", "I've got a headache."],
      ["My feet hurts.", "My feet hurt."],
      ["I feel me sick.", "I feel sick."],
      ["What's the problem with you?", "What's the matter? / What's wrong?"]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match the problem with the best advice.",
      pairs: [
        ["I've got a toothache.", "See a dentist."],
        ["I've got a fever.", "Take some medicine and rest."],
        ["My eyes hurt.", "Don't use your computer for a long time."],
        ["I've got a stomachache.", "Don't eat spicy food."],
        ["I'm very tired.", "Go to bed early."]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Camila is at the doctor's office. Listen to the conversation.",
      title: "At the doctor's",
      script: [
        { who: "Doctor", line: "Good afternoon, Camila. What's the matter?" },
        { who: "Camila", line: "My back hurts, doctor. And my right arm hurts too." },
        { who: "Doctor", line: "I see. What do you do?" },
        { who: "Camila", line: "I'm a student. I sit at my computer for eight or nine hours every day." },
        { who: "Doctor", line: "Do you do any exercise?" },
        { who: "Camila", line: "No, I don't. I haven't got time." },
        { who: "Doctor", line: "OK. Here's my advice. Stand up and walk every hour. Do some exercise three times a week — swimming is great for your back. And don't carry a heavy backpack." },
        { who: "Camila", line: "Do I need any medicine?" },
        { who: "Doctor", line: "Take one of these pills at night for five days. Come back in two weeks." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Camila's back hurts.", a: true },
            { s: "Her left arm hurts.", a: false },
            { s: "She sits at her computer for a long time.", a: true },
            { s: "She does exercise every day.", a: false },
            { s: "She takes the pills for five days.", a: true }
          ]
        },
        {
          type: "gap", title: "The doctor's advice",
          prompt: "Complete the advice.",
          items: [
            "Stand up and [[walk]] every hour.",
            "Do some exercise [[three]] times a week.",
            "[[Swimming]] is great for your back.",
            "[[Don't|Do not]] carry a heavy backpack.",
            "Come back in two [[weeks]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read the health tips page on the university website.",
      title: "Stay healthy during exams!",
      text: [
        { author: "Tip 1 · Sleep", body: "A lot of students sleep only four or five hours during exams. That's bad for your memory! Sleep seven or eight hours every night. Don't drink coffee after 6 p.m." },
        { author: "Tip 2 · Eyes", body: "Do your eyes hurt after studying? Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet (6 meters) away for 20 seconds." },
        { author: "Tip 3 · Stress", body: "Have you got a headache or a stomachache before an exam? It's often stress. Walk for fifteen minutes, breathe slowly and talk to a friend. The university health center is open Monday to Friday, 8 to 6." }
      ],
      activities: [
        {
          type: "match", title: "Problem and tip",
          prompt: "Match the problem with the tip.",
          pairs: [
            ["You sleep only four hours.", "Sleep seven or eight hours."],
            ["Your eyes hurt.", "Follow the 20-20-20 rule."],
            ["You've got a headache before an exam.", "Walk, breathe slowly and talk to a friend."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Little sleep is bad for your memory.", a: true },
            { s: "You can drink coffee at 10 p.m.", a: false },
            { s: "A stomachache before an exam is often stress.", a: true },
            { s: "The health center is open on Saturdays.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice health language, then write a message to a teacher.",
      activities: [
        {
          type: "rewrite", title: "Say it another way",
          prompt: "Rewrite with *I've got a…*",
          items: [
            { q: "My head hurts.", a: ["I've got a headache.", "I have got a headache.", "I have a headache."] },
            { q: "My stomach hurts.", a: ["I've got a stomachache.", "I have got a stomachache.", "I have a stomachache."] },
            { q: "My tooth hurts.", a: ["I've got a toothache.", "I have got a toothache.", "I have a toothache."] },
            { q: "My back hurts.", a: ["I've got a backache.", "I have got a backache.", "I have a backache."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What's the matter with you?" },
            { a: "I don't feel very well." },
            { a: "My feet hurt after the game." },
            { a: "Drink a lot of hot tea." },
            { a: "Don't go to school today." }
          ]
        },
        {
          type: "write", title: "I'm sick today",
          prompt: "Write a message to your English teacher. Say you can't go to class today, explain what's wrong, say what the doctor or your family says to do, and ask about homework.",
          minWords: 40, maxWords: 80,
          model: "Dear Ms. Reyes, I'm sorry, but I can't go to class today. I've got a bad cold. I've got a fever and my throat hurts a lot. The doctor says: \"Stay in bed, drink a lot of water and don't go out for two days.\" Can you send me the homework, please? Thank you. Best wishes, Diego",
          bank: ["Dear…,", "I'm sorry, but I can't…", "I've got a…", "My … hurts.", "I feel…", "The doctor says…", "Can you send me…?", "Best wishes,"],
          checklist: [
            "I explained the problem with *I've got…* or *…hurts*.",
            "I included advice with imperatives.",
            "I asked a polite question.",
            "I started and ended the message correctly."
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
            "What's the matter?",
            "I've got a headache.",
            "My back hurts.",
            "I don't feel well today.",
            "Drink a lot of water and rest.",
            "Get well soon!"
          ]
        },
        {
          type: "speak", title: "Health tips video",
          prompt: "Record a short health-tips video for students. Choose a common problem (headache, stress, tiredness) and give four tips.",
          language: ["Have you got a…?", "Here are my tips.", "Drink…", "Sleep…", "Don't…", "See a doctor if…"],
          seconds: 60,
          checklist: ["name a health problem?", "give four tips?", "use *do* and *don't* imperatives?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name parts of the body.", review: "Explanation: vocabulary" },
    { can: "I can say what's wrong with *I've got…* and *…hurts*.", review: "Explanation: saying what's wrong; Writing activity 1" },
    { can: "I can ask *What's the matter?* and react kindly.", review: "Explanation: asking and caring" },
    { can: "I can understand advice from a doctor or pharmacist.", review: "Listening: at the doctor's" },
    { can: "I can give advice with imperatives.", review: "Explanation: advice; Quick check" },
    { can: "I can write a message to say I'm sick.", review: "Writing activity 3" }
  ]
};
