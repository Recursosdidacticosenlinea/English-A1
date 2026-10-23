window.UNIT = {
  slug: "this-is-me",
  number: 50,
  title: "This Is Me!",
  level: "A1",
  minutes: 60,
  speakers: { "Interviewer": "f", "Rafa": "m", "Ms. Reyes": "f", "Lucía": "f", A: "f", B: "m" },
  focus: ["A1 review: be, have got, can, present simple", "present continuous, was / were, past simple", "going to for plans", "asking and answering personal questions", "final project: My English profile"],

  presentation: {
    scene: "🌟🙋‍♀️🎓🗺️",
    situation: "It's the end of the A1 course. For the final project, students make a video called \"This Is Me!\". Rafa is the first to present.",
    warmup: {
      prompt: "What can you do in English now? Choose everything!",
      options: ["introduce myself", "talk about my family", "describe my home", "tell the time", "order food", "buy clothes", "give directions", "talk about my routine", "talk about the past", "talk about my plans"],
      response: "Amazing! You can do a lot in English now. In this final unit you'll review everything and create your English profile."
    },
    dialogueTitle: "Rafa's video",
    dialogue: [
      { who: "Rafa", line: "Hi! *My name's* Rafael, but everybody *calls me* Rafa. *I'm* nineteen and *I'm from* Tehuacán." },
      { who: "Rafa", line: "*I've got* two sisters and a very lazy cat. *I can* play the guitar, but *I can't* sing!" },
      { who: "Rafa", line: "*I study* engineering at BUAP. *I usually get up* at six because my classes *start* at seven." },
      { who: "Rafa", line: "Right now *I'm recording* this video in my bedroom. *It's raining* outside!" },
      { who: "Rafa", line: "Last year *I was* very shy in English class. *I didn't speak* a lot. But this semester *I studied* every day and *I made* new friends." },
      { who: "Rafa", line: "Next semester *I'm going to take* A2. And one day *I'd like to work* in Canada. Thanks for watching!" }
    ]
  },

  objectives: [
    "I can present myself with the main A1 grammar structures.",
    "I can ask and answer personal questions about present, past and future.",
    "I can choose the correct tense for each situation.",
    "I can create my own English profile."
  ],

  explanation: {
    vocabTitle: "A1 review: topics I know",
    vocab: [
      { word: "personal information", icon: "🪪" }, { word: "family", icon: "👨‍👩‍👧" }, { word: "home", icon: "🏠" },
      { word: "neighborhood", icon: "🏘️" }, { word: "daily routine", icon: "⏰" }, { word: "free time", icon: "🎮" },
      { word: "food", icon: "🍲" }, { word: "clothes", icon: "👕" }, { word: "weather", icon: "⛅" },
      { word: "transportation", icon: "🚌" }, { word: "health", icon: "🩺" }, { word: "celebrations", icon: "🎉" },
      { word: "past experiences", icon: "📸" }, { word: "future plans", icon: "🗓️" }, { word: "dreams", icon: "💭" }
    ],
    grammar: [
      {
        title: "A1 tenses at a glance",
        head: ["Use", "Form", "Example"],
        rows: [
          ["facts, identity", "*be*", "I*'m* nineteen. She*'s* from Peru."],
          ["possessions", "*have got*", "I*'ve got* two sisters."],
          ["ability, permission", "*can / can't*", "I *can* swim. You *can't* eat here."],
          ["habits, routines", "present simple", "I *get up* at six. She *works* in a bank."],
          ["now", "present continuous", "I*'m recording* a video."],
          ["past of be", "*was / were*", "I *was* shy. We *were* tired."],
          ["finished past actions", "past simple", "I *studied*. I *went* to Oaxaca."],
          ["plans", "*going to*", "I*'m going to take* A2."],
          ["wishes", "*would like to*", "I*'d like to* work in Canada."]
        ]
      },
      {
        title: "Question words review",
        head: ["Question", "Example answer"],
        rows: [
          ["*Where are* you from?", "I'm from Tehuacán."],
          ["*What do* you do?", "I'm a student."],
          ["*What are* you doing?", "I'm recording a video."],
          ["*Where did* you go last weekend?", "I went to Atlixco."],
          ["*What are* you going to do next year?", "I'm going to take A2."],
          ["*Can* you play an instrument?", "Yes, I can. I play the guitar."]
        ]
      }
    ],
    watchOut: [
      ["I have 19 years.", "I'm 19."],
      ["She work in a bank.", "She works in a bank."],
      ["Yesterday I go to the park.", "Yesterday I went to the park."],
      ["I going to travel.", "I'm going to travel."]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match the question with the best answer.",
      pairs: [
        ["How old are you?", "I'm twenty."],
        ["What do you do on Sundays?", "I usually visit my grandma."],
        ["What are you doing?", "I'm doing my homework."],
        ["Where were you last night?", "I was at home."],
        ["What did you do yesterday?", "I watched a movie."],
        ["What are you going to do tomorrow?", "I'm going to play soccer."]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Ms. Reyes interviews Lucía about her experience in the A1 course. Listen.",
      title: "End-of-course interview",
      script: [
        { who: "Ms. Reyes", line: "Lucía, congratulations! You finished A1. How do you feel?" },
        { who: "Lucía", line: "I feel very happy! At the beginning I was nervous, but now I can speak with more confidence." },
        { who: "Ms. Reyes", line: "What was your favorite unit?" },
        { who: "Lucía", line: "\"At the Café\". I loved the role-plays. Last month I went to a café with an American friend and I ordered in English!" },
        { who: "Ms. Reyes", line: "Excellent! What's difficult for you?" },
        { who: "Lucía", line: "Listening. People speak very fast! So every day I listen to a podcast on the bus." },
        { who: "Ms. Reyes", line: "Great idea. And what are you going to do now?" },
        { who: "Lucía", line: "I'm going to start A2 in January. And in the summer I'm going to visit my cousin in Chicago." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Lucía was nervous at the beginning.", a: true },
            { s: "Her favorite unit was \"Next Weekend\".", a: false },
            { s: "She ordered in English at a café.", a: true },
            { s: "Reading is difficult for her.", a: false },
            { s: "She's going to visit her cousin in Chicago.", a: true }
          ]
        },
        {
          type: "sort", title: "Past, present or future?",
          prompt: "Sort Lucía's sentences.",
          bins: ["Past", "Present", "Future"],
          items: [
            { text: "I was nervous.", bin: 0 }, { text: "I went to a café.", bin: 0 }, { text: "I ordered in English.", bin: 0 },
            { text: "I feel very happy.", bin: 1 }, { text: "I listen to a podcast every day.", bin: 1 },
            { text: "I'm going to start A2.", bin: 2 }, { text: "I'm going to visit my cousin.", bin: 2 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read two student profiles from the CAA \"This Is Me!\" wall.",
      title: "The \"This Is Me!\" wall",
      text: [
        { author: "Brenda, 22 · Nursing student", body: "I'm from Cholula and I live with my parents and my grandma. I can cook very well — my specialty is mole! I work at a pharmacy on weekends. Last summer I went to Cancún with my friends and I spoke English with tourists. It was scary, but fun! Next year I'm going to do my social service in a hospital." },
        { author: "Omar, 35 · Architect", body: "I'm married and I've got a daughter. Her name is Sofi and she's six. I study English because I want to work with international companies. Every morning I practice for twenty minutes before work. Right now I'm designing a library for a small town. In the future, I'd like to visit Japan and see its modern buildings." }
      ],
      activities: [
        {
          type: "sort", title: "Brenda or Omar?",
          prompt: "Sort the information.",
          bins: ["Brenda", "Omar"],
          items: [
            { text: "lives with her grandma", bin: 0 }, { text: "cooks mole", bin: 0 }, { text: "went to Cancún", bin: 0 }, { text: "social service next year", bin: 0 },
            { text: "has got a daughter", bin: 1 }, { text: "practices every morning", bin: 1 }, { text: "is designing a library", bin: 1 }, { text: "would like to visit Japan", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers.",
          items: [
            { q: "Where does Brenda work on weekends?", a: ["At a pharmacy.", "at a pharmacy", "In a pharmacy.", "She works at a pharmacy."] },
            { q: "Did Brenda speak English in Cancún?", a: ["Yes, she did."] },
            { q: "How old is Omar's daughter?", a: ["Six.", "six", "She's six.", "She is six.", "6"] },
            { q: "What is Omar designing right now?", a: ["A library.", "a library", "He's designing a library.", "A library for a small town."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Review the tenses, then write your English profile — your final A1 project.",
      activities: [
        {
          type: "gap", title: "Choose the right form",
          prompt: "Write the correct form of the verb.",
          items: [
            "I [['m|am]] twenty years old. (be)",
            "My brother [[works]] in a bank. (work)",
            "Right now we [['re studying|are studying]] English. (study)",
            "Last weekend I [[went]] to the beach. (go)",
            "Yesterday it [[was]] very hot. (be)",
            "Next year I [['m going to learn|am going to learn]] French. (learn)"
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I can speak a little English." },
            { a: "What did you do last summer?" },
            { a: "I'm going to start A2 next semester." },
            { a: "My sister doesn't like coffee." },
            { a: "I'd like to travel to Canada." }
          ]
        },
        {
          type: "write", title: "This is me!",
          prompt: "Write your English profile for the CAA wall. Include: who you are (*be*), family or pets (*have got*), abilities (*can*), routines (present simple), what you're doing now (present continuous), something you did in the past (past simple), and your plans (*going to*) and dreams (*would like to*).",
          minWords: 80, maxWords: 150,
          model: "Hi! I'm Valeria and I'm twenty. I'm from Atlixco, but I live in Puebla now. I've got one brother and a dog called Max. I can dance salsa, but I can't swim very well. I study psychology at BUAP. I usually get up at six and I take the bus to the university. Right now I'm sitting in the CAA and I'm writing this profile! Last year I went to Oaxaca with my family and we ate a lot of tlayudas. This semester I studied English every day. Next year I'm going to start A2, and one day I'd like to work in Spain.",
          bank: ["Hi! I'm…", "I've got…", "I can… / I can't…", "I usually…", "Right now I'm…", "Last year I…", "I'm going to…", "One day I'd like to…"],
          checklist: [
            "I used *be, have got* and *can*.",
            "I used the present simple and the present continuous.",
            "I used the past simple (regular and irregular verbs).",
            "I used *going to* and *would like to*."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your final evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Then say it and check your pronunciation.",
          items: [
            "Hi! My name is Rafa and I'm nineteen.",
            "I've got two sisters and a cat.",
            "I can play the guitar.",
            "I usually get up at six o'clock.",
            "Last year I went to Oaxaca.",
            "Next year I'm going to start A2."
          ]
        },
        {
          type: "speak", title: "This is me! (final video)",
          prompt: "Record your final video like Rafa's (one to two minutes). Present yourself, your life now, something from the past and your plans and dreams. Smile — you finished A1! 🎉",
          language: ["Hi! My name's…", "I've got…", "I can…", "I usually…", "Right now I'm…", "Last year I…", "I'm going to…", "One day I'd like to…", "Thanks for watching!"],
          seconds: 120,
          checklist: ["present yourself?", "use at least five different structures?", "talk about past, present and future?", "speak for one to two minutes?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can introduce myself and give personal information.", review: "Units 1–5" },
    { can: "I can describe people, places and things around me.", review: "Units 6–15" },
    { can: "I can talk about routines, free time and food.", review: "Units 16–30" },
    { can: "I can describe what is happening now and solve everyday situations.", review: "Units 31–45" },
    { can: "I can talk about the past with *was / were* and the past simple.", review: "Units 46–48" },
    { can: "I can talk about my plans and dreams for the future.", review: "Units 44 and 49; Writing activity 3" }
  ]
};
