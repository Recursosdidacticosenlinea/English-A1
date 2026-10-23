window.UNIT = {
  slug: "whats-your-job",
  number: 5,
  title: "What's Your Job?",
  level: "A1",
  minutes: 50,
  speakers: { "Daniela": "f", "Joel": "m", "Interviewer": "f", "Mr. Vega": "m", "Rocío": "f", "Toño": "m", A: "f", B: "m" },
  focus: ["jobs and workplaces", "a / an + job", "What do you do? What's your job?", "He works in a hospital.", "plural jobs: doctors, nurses"],

  presentation: {
    scene: "👩‍⚕️👨‍🍳👷‍♀️💼",
    situation: "Daniela and Joel are at a family party. They meet for the first time and talk about their jobs.",
    warmup: {
      prompt: "Which jobs do you know in English? Choose all.",
      options: ["teacher", "doctor", "nurse", "engineer", "police officer", "waiter", "chef", "lawyer", "driver", "architect"],
      response: "Great! In this unit you'll learn to talk about jobs and where people work."
    },
    dialogueTitle: "At a family party",
    dialogue: [
      { who: "Daniela", line: "So, Joel, *what do you do*?" },
      { who: "Joel", line: "*I'm a nurse*. *I work in* a hospital in Puebla." },
      { who: "Daniela", line: "Really? My sister is *a nurse* too!" },
      { who: "Joel", line: "Cool! And you? *What's your job*?" },
      { who: "Daniela", line: "*I'm an engineer*. *I work for* a car company." },
      { who: "Joel", line: "Wow! Is your husband an engineer too?" },
      { who: "Daniela", line: "No, he isn't. *He's a chef*. *He works in* a restaurant downtown." },
      { who: "Joel", line: "And your parents?" },
      { who: "Daniela", line: "*They're teachers*. They work in a primary school." }
    ]
  },

  objectives: [
    "I can say the names of common jobs.",
    "I can use *a* and *an* correctly with jobs.",
    "I can ask and answer *What do you do?*",
    "I can say where people work."
  ],

  explanation: {
    vocabTitle: "Jobs and workplaces",
    vocab: [
      { word: "teacher", icon: "👩‍🏫" }, { word: "doctor", icon: "🩺" }, { word: "nurse", icon: "💉" },
      { word: "engineer", icon: "👷" }, { word: "chef", icon: "👨‍🍳" }, { word: "waiter", icon: "🍽️" },
      { word: "police officer", icon: "👮" }, { word: "lawyer", icon: "⚖️" }, { word: "architect", icon: "📐" },
      { word: "taxi driver", icon: "🚕" }, { word: "shop assistant", icon: "🛍️" }, { word: "farmer", icon: "🧑‍🌾" },
      { word: "hospital", icon: "🏥" }, { word: "office", icon: "🏢" }, { word: "restaurant", icon: "🍴" }
    ],
    grammar: [
      {
        title: "A or an?",
        head: ["a + consonant sound", "an + vowel sound (a, e, i, o, u)"],
        rows: [
          ["*a* teacher, *a* doctor, *a* nurse", "*an* engineer, *an* architect"],
          ["*a* chef, *a* lawyer, *a* waiter", "*an* actor, *an* office worker"],
          ["*a* university student (u = /juː/)", "*an* hour (h is silent)"]
        ],
        note: "In English we always use *a / an* with a job: *She's a doctor.* — never *She's doctor*."
      },
      {
        title: "Talking about jobs",
        head: ["Question", "Answer"],
        rows: [
          ["*What do you do?*", "*I'm a* waiter."],
          ["*What's your job?*", "*I'm an* architect."],
          ["*What does he do?*", "*He's a* police officer."],
          ["*What do they do?*", "*They're* teachers. (no *a* in plural)"]
        ]
      },
      {
        title: "Where do you work?",
        head: ["Structure", "Example"],
        rows: [
          ["work *in* + place", "I *work in* a hospital / an office / a school."],
          ["work *for* + company", "She *works for* Volkswagen."],
          ["work *at* + specific place", "He *works at* the BUAP library."],
          ["he / she *works*", "My mom *works* in a shop."]
        ],
        note: "With *he, she, it* add *-s*: *I work → she works*."
      }
    ],
    watchOut: [
      ["She is doctor.", "She is a doctor."],
      ["I'm a engineer.", "I'm an engineer."],
      ["They are a teachers.", "They are teachers."],
      ["He work in a bank.", "He works in a bank."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write *a* or *an*. Write *–* if you don't need a word.",
      items: [
        "My dad is [[a]] taxi driver.",
        "Sofía is [[an]] architect.",
        "I want to be [[an]] engineer.",
        "Joel is [[a]] nurse.",
        "My cousins are [[–|-]] waiters."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A school radio program interviews two people about their jobs. Listen and answer.",
      title: "Jobs in my city",
      script: [
        { who: "Interviewer", line: "Good morning, Mr. Vega. What do you do?" },
        { who: "Mr. Vega", line: "Good morning. I'm a firefighter. I work at the fire station near the zócalo." },
        { who: "Interviewer", line: "Is it a difficult job?" },
        { who: "Mr. Vega", line: "Yes, it is. But it's very interesting. My wife is a firefighter too!" },
        { who: "Interviewer", line: "Amazing! And now, Rocío. What's your job, Rocío?" },
        { who: "Rocío", line: "I'm a vet. I work in an animal hospital. I help cats, dogs and horses." },
        { who: "Interviewer", line: "Do you work alone?" },
        { who: "Rocío", line: "No. There are four vets and two nurses in the hospital. My brother Toño works there too. He's a receptionist." }
      ],
      activities: [
        {
          type: "match", title: "Jobs and places",
          prompt: "Match the person with the job.",
          pairs: [
            ["Mr. Vega", "a firefighter"],
            ["Mr. Vega's wife", "a firefighter too"],
            ["Rocío", "a vet"],
            ["Toño", "a receptionist"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The fire station is near the zócalo.", a: true },
            { s: "Mr. Vega says his job is boring.", a: false },
            { s: "Rocío works in an animal hospital.", a: true },
            { s: "There are two vets in the hospital.", a: false },
            { s: "Toño is Rocío's brother.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the posts from a website where people describe their jobs.",
      title: "My job in 50 words",
      text: [
        { author: "Ernesto, Puebla", body: "I'm a bus driver. I work for a bus company in Puebla. I start very early, at five in the morning! I like my job because I talk to a lot of people every day." },
        { author: "Lin, Mexico City", body: "I'm an office worker. I work in a big office downtown. I use a computer all day. My boss is nice, but the office is very noisy." },
        { author: "Majo, Cancún", body: "I'm a waiter in a hotel restaurant. I speak English and Spanish at work because there are a lot of tourists. My job is tiring, but it's fun." }
      ],
      activities: [
        {
          type: "sort", title: "Who says it?",
          prompt: "Put each idea under the right person.",
          bins: ["Ernesto", "Lin", "Majo"],
          items: [
            { text: "starts at 5 a.m.", bin: 0 }, { text: "works for a bus company", bin: 0 }, { text: "talks to many people", bin: 0 },
            { text: "uses a computer", bin: 1 }, { text: "has a nice boss", bin: 1 }, { text: "noisy workplace", bin: 1 },
            { text: "speaks two languages at work", bin: 2 }, { text: "works in a hotel", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with one word.",
          items: [
            "Ernesto is [[a]] bus driver.",
            "Lin works in [[an]] office.",
            "Lin's office is very [[noisy]].",
            "There are a lot of [[tourists]] in Majo's restaurant.",
            "Majo's job is tiring, but it's [[fun]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice sentences about jobs, then write about the jobs in your family.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What do you do?" },
            { a: "My mom is an architect." },
            { a: "He works in a hospital." },
            { a: "They aren't police officers." },
            { a: "She works for a car company." }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "My sister is lawyer.", a: ["My sister is a lawyer."] },
            { q: "I'm a engineer.", a: ["I'm an engineer.", "I am an engineer."] },
            { q: "My dad work in an office.", a: ["My dad works in an office."] },
            { q: "They are a chefs.", a: ["They are chefs.", "They're chefs."] },
            { q: "What do she do?", a: ["What does she do?"] }
          ]
        },
        {
          type: "write", title: "Jobs in my family",
          prompt: "Write about the jobs of three people in your family or friends. Say what they do and where they work. Say what you do or want to be.",
          minWords: 35, maxWords: 70,
          model: "My mom is a nurse. She works in a hospital in Atlixco. My dad isn't a nurse — he's a mechanic. He works in a small garage. My brother Luis is an engineer. He works for a big company. I'm a student, and I want to be a vet.",
          bank: ["My mom / dad is a / an…", "He / She works in…", "He / She works for…", "I'm a student.", "I want to be a / an…", "He isn't a…"],
          checklist: [
            "I used *a / an* with every job.",
            "I used *works* with *he / she*.",
            "I said **where** each person works.",
            "I wrote what I do or want to be."
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
            "What do you do?",
            "I'm a nurse. I work in a hospital.",
            "My mother is an engineer.",
            "He's a chef in a restaurant.",
            "They're teachers in a primary school.",
            "Do you work in an office?"
          ]
        },
        {
          type: "speak", title: "A person and their job",
          prompt: "Record yourself talking about a person you know and their job. Say their name, what they do, where they work and if they like it.",
          language: ["This is my…", "His / Her name is…", "He's / She's a / an…", "He / She works in / for…", "He / She likes his / her job."],
          seconds: 60,
          checklist: ["use *a / an* with the job?", "say where the person works?", "use *works* with *he / she*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can say the names of at least ten jobs.", review: "Explanation: vocabulary" },
    { can: "I can use *a* and *an* with jobs.", review: "Explanation: a or an?; Quick check" },
    { can: "I can ask and answer *What do you do?*", review: "Explanation: talking about jobs; Presentation dialogue" },
    { can: "I can say where people work with *in, for, at*.", review: "Explanation: Where do you work?" },
    { can: "I can understand people describing their jobs.", review: "Listening and Reading" },
    { can: "I can write about the jobs in my family.", review: "Writing activity 3" }
  ]
};
