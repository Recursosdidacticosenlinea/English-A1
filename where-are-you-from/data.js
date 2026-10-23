window.UNIT = {
  slug: "where-are-you-from",
  number: 4,
  title: "Where Are You From?",
  level: "A1",
  minutes: 50,
  speakers: { "Emma": "f", "Rafa": "m", "Yuki": "f", "Host": "f", "Omar": "m", "Lena": "f", A: "m", B: "f" },
  focus: ["countries and nationalities", "Where are you from? I'm from…", "Is she Mexican? Yes, she is.", "he / she / they + be", "capital letters"],

  presentation: {
    scene: "🌎✈️🗺️🧳",
    situation: "It's International Day at the language center. Students from different countries meet at the welcome table.",
    warmup: {
      prompt: "Which countries can you say in English? Choose all.",
      options: ["Mexico", "the United States", "Canada", "Brazil", "Spain", "France", "Japan", "China", "Germany", "Colombia"],
      response: "Nice! In this unit you'll learn countries, nationalities and how to ask where people are from."
    },
    dialogueTitle: "International Day",
    dialogue: [
      { who: "Emma", line: "Hi! I'm Emma. *Where are you from*?" },
      { who: "Rafa", line: "*I'm from* Mexico. I'm *Mexican*. And you?" },
      { who: "Emma", line: "I'm from Canada, from Toronto. I'm *Canadian*." },
      { who: "Rafa", line: "Cool! Who's that? *Is she* from China?" },
      { who: "Emma", line: "*No, she isn't*. She's Yuki. *She's from* Japan. She's *Japanese*." },
      { who: "Rafa", line: "And those two boys? *Are they* American?" },
      { who: "Emma", line: "*Yes, they are*. They're from Texas. *They're* exchange students." }
    ]
  },

  objectives: [
    "I can say the names of countries and nationalities.",
    "I can ask and answer *Where are you from?*",
    "I can ask yes/no questions with *Is he…? Are they…?*",
    "I can introduce a person from another country."
  ],

  explanation: {
    vocabTitle: "Countries and nationalities",
    vocab: [
      { word: "Mexico – Mexican", icon: "🇲🇽" }, { word: "the USA – American", icon: "🇺🇸" }, { word: "Canada – Canadian", icon: "🇨🇦" },
      { word: "Brazil – Brazilian", icon: "🇧🇷" }, { word: "Colombia – Colombian", icon: "🇨🇴" }, { word: "Argentina – Argentinian", icon: "🇦🇷" },
      { word: "Spain – Spanish", icon: "🇪🇸" }, { word: "England – English", icon: "🏴" }, { word: "France – French", icon: "🇫🇷" },
      { word: "Germany – German", icon: "🇩🇪" }, { word: "Italy – Italian", icon: "🇮🇹" }, { word: "China – Chinese", icon: "🇨🇳" },
      { word: "Japan – Japanese", icon: "🇯🇵" }, { word: "Korea – Korean", icon: "🇰🇷" }, { word: "Peru – Peruvian", icon: "🇵🇪" }
    ],
    grammar: [
      {
        title: "Nationality endings",
        head: ["Ending", "Examples"],
        rows: [
          ["-an / -ian", "Mexic*an*, Americ*an*, Canad*ian*, Brazil*ian*, Ital*ian*"],
          ["-ish", "Span*ish*, Engl*ish*, Ir*ish*, Turk*ish*"],
          ["-ese", "Japan*ese*, Chin*ese*, Portugu*ese*"],
          ["other", "Fren*ch*, Gre*ek*, Tha*i*"]
        ],
        note: "In English, countries, nationalities and languages always start with a **capital letter**: *Mexico, Mexican, Spanish*."
      },
      {
        title: "Where…from? with be",
        head: ["Question", "Answer"],
        rows: [
          ["*Where are you from?*", "*I'm from* Puebla, in Mexico."],
          ["*Where is he from?*", "*He's from* Brazil. He's Brazilian."],
          ["*Where are they from?*", "*They're from* the USA."],
          ["*What nationality is* she?", "She's Korean."]
        ]
      },
      {
        title: "Yes/no questions and short answers",
        head: ["Question", "Yes", "No"],
        rows: [
          ["*Are you* Mexican?", "Yes, I *am*.", "No, I'm *not*."],
          ["*Is he* from Spain?", "Yes, he *is*.", "No, he *isn't*. He's from Peru."],
          ["*Is she* Japanese?", "Yes, she *is*.", "No, she *isn't*."],
          ["*Are they* American?", "Yes, they *are*.", "No, they *aren't*."]
        ],
        note: "Put *be* before the subject to make a question: *She is Japanese* → *Is she Japanese?*"
      }
    ],
    watchOut: [
      ["I'm from mexico. I'm mexican.", "I'm from Mexico. I'm Mexican."],
      ["Where you are from?", "Where are you from?"],
      ["She is from Japanese.", "She is from Japan. / She is Japanese."],
      ["They are americans students.", "They are American students."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the nationality.",
      items: [
        "Yuki is from Japan. She's [[Japanese]].",
        "Emma is from Canada. She's [[Canadian]].",
        "Luis is from Spain. He's [[Spanish]].",
        "Ana and Paulo are from Brazil. They're [[Brazilian]].",
        "Mr. Li is from China. He's [[Chinese]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "The host of a radio show talks to three international students in Puebla. Listen and find where they are from.",
      title: "Radio show: Students of the world",
      script: [
        { who: "Host", line: "Good afternoon and welcome to Students of the World! Our first guest is Omar. Omar, where are you from?" },
        { who: "Omar", line: "Hi! I'm from Morocco, from a city called Fez. I'm Moroccan." },
        { who: "Host", line: "Welcome, Omar. And our next guest is Lena. Lena, are you from Germany?" },
        { who: "Lena", line: "No, I'm not. I'm from Austria, from Vienna. But I speak German." },
        { who: "Host", line: "Interesting! And your friends, are they Austrian too?" },
        { who: "Lena", line: "No, they aren't. They're Italian, from Rome." },
        { who: "Host", line: "And finally, Yuki. Yuki, you're Japanese, right?" },
        { who: "Yuki", line: "Yes, I am. I'm from Osaka. My teacher here is Colombian. She's from Medellín." }
      ],
      activities: [
        {
          type: "match", title: "Who is from where?",
          prompt: "Match the person with the city.",
          pairs: [
            ["Omar", "Fez, Morocco"],
            ["Lena", "Vienna, Austria"],
            ["Lena's friends", "Rome, Italy"],
            ["Yuki", "Osaka, Japan"],
            ["Yuki's teacher", "Medellín, Colombia"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Omar is Moroccan.", a: true },
            { s: "Lena is from Germany.", a: false },
            { s: "Lena speaks German.", a: true },
            { s: "Lena's friends are Austrian.", a: false },
            { s: "Yuki's teacher is Mexican.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the profiles on a language exchange website.",
      title: "LinguaPals · Find a language partner",
      text: [
        { author: "Hugo, 24", body: "Hello! I'm Hugo and I'm from Lyon, in France. I'm French. I speak French and English, and I want to learn Spanish. My girlfriend is Mexican, from Oaxaca!" },
        { author: "Min-ji, 20", body: "Hi, everyone! I'm Min-ji. I'm Korean, from Seoul. I'm a university student. I'm not very good at English, but I practice every day. I love Mexican food!" },
        { author: "Carla, 31", body: "Hello! I'm Carla. I'm not Spanish — I'm Argentinian, from Buenos Aires. My husband is Italian and our two children are Argentinian and Italian!" }
      ],
      activities: [
        {
          type: "sort", title: "Whose profile is it?",
          prompt: "Put each piece of information under the right person.",
          bins: ["Hugo", "Min-ji", "Carla"],
          items: [
            { text: "from Lyon", bin: 0 }, { text: "wants to learn Spanish", bin: 0 }, { text: "girlfriend from Oaxaca", bin: 0 },
            { text: "from Seoul", bin: 1 }, { text: "a university student", bin: 1 }, { text: "loves Mexican food", bin: 1 },
            { text: "from Buenos Aires", bin: 2 }, { text: "husband is Italian", bin: 2 }, { text: "two children", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers: *Yes, he is. / No, she isn't.*",
          items: [
            { q: "Is Hugo French?", a: ["Yes, he is."] },
            { q: "Is Min-ji Japanese?", a: ["No, she isn't.", "No, she is not.", "No, she's not."] },
            { q: "Is Carla Spanish?", a: ["No, she isn't.", "No, she is not.", "No, she's not."] },
            { q: "Is Carla's husband Italian?", a: ["Yes, he is."] },
            { q: "Are Carla's children Argentinian?", a: ["Yes, they are."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice questions and sentences, then write your own LinguaPals profile.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Where are you from?" },
            { a: "Is your teacher American?" },
            { a: "They aren't from Spain." },
            { a: "She's Korean, from Seoul." },
            { a: "What nationality is he?" }
          ]
        },
        {
          type: "rewrite", title: "Correct the capital letters",
          prompt: "Rewrite the sentences with capital letters.",
          items: [
            { q: "i'm from mexico.", a: ["I'm from Mexico."] },
            { q: "she's brazilian.", a: ["She's Brazilian."] },
            { q: "they speak english and french.", a: ["They speak English and French."] },
            { q: "is he from japan?", a: ["Is he from Japan?"] }
          ]
        },
        {
          type: "write", title: "My LinguaPals profile",
          prompt: "Write a profile for a language exchange website. Say your name, age, city, country and nationality, which languages you speak, and about one person in your family or a friend from another place.",
          minWords: 35, maxWords: 70,
          model: "Hi! I'm Mariana and I'm twenty. I'm from Cholula, in Mexico. I'm Mexican. I speak Spanish and a little English. I want to practice English with people from other countries. My best friend is Colombian. She's from Cali and she's a dance teacher.",
          bank: ["Hi! I'm…", "I'm from…, in…", "I'm Mexican.", "I speak…", "I want to practice…", "My friend is…", "He's / She's from…"],
          checklist: [
            "I wrote my **city, country and nationality**.",
            "I used capital letters for countries and nationalities.",
            "I wrote about another person with *he's / she's from…*",
            "I wrote at least one negative: *I'm not…, he isn't…*"
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
            "Where are you from?",
            "I'm from Mexico. I'm Mexican.",
            "Is she from China?",
            "No, she isn't. She's Japanese.",
            "Are they American?",
            "Yes, they are. They're from Texas."
          ]
        },
        {
          type: "speak", title: "Introduce an international friend",
          prompt: "Record yourself introducing yourself and a friend from another country (real or invented). Say where you are both from, your nationalities and the languages you speak.",
          language: ["I'm from…", "I'm Mexican.", "This is my friend…", "He's / She's from…", "He / She speaks…", "We aren't from the same country."],
          seconds: 60,
          checklist: ["say your country and nationality?", "introduce another person?", "use *he's / she's from*?", "pronounce the nationalities clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can say the names of countries in English.", review: "Explanation: vocabulary" },
    { can: "I can say nationalities with the right ending.", review: "Explanation: nationality endings; Quick check" },
    { can: "I can ask and answer *Where are you from?*", review: "Explanation: Where…from?; Presentation dialogue" },
    { can: "I can ask *Is he…? Are they…?* and give short answers.", review: "Explanation: yes/no questions; Reading activity 2" },
    { can: "I can understand people saying where they are from.", review: "Listening: radio show" },
    { can: "I can write a profile with my country and nationality.", review: "Writing activity 3" }
  ]
};
