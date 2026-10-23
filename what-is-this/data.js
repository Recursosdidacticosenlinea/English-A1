window.UNIT = {
  slug: "what-is-this",
  number: 11,
  title: "What Is This?",
  level: "A1",
  minutes: 50,
  speakers: { "Kenji": "m", "Brisa": "f", "Teacher": "f", "Dani": "m", A: "f", B: "m" },
  focus: ["this / that / these / those", "What's this? What are those?", "plural nouns: -s, -es, -ies", "colors", "classroom and personal objects"],

  presentation: {
    scene: "🎒✏️📚🔍",
    situation: "Kenji is an exchange student from Japan. On his first day, his classmate Brisa helps him with the names of things in the classroom.",
    warmup: {
      prompt: "What's in your backpack today? Choose the words you know.",
      options: ["a pen", "a pencil", "a notebook", "a book", "an eraser", "a phone", "keys", "a water bottle", "a laptop", "headphones"],
      response: "Good! In this unit you'll learn to ask and answer about objects near you and far from you."
    },
    dialogueTitle: "What's this in English?",
    dialogue: [
      { who: "Kenji", line: "Brisa, *what's this* in English?" },
      { who: "Brisa", line: "*It's a* ruler. And *this is a* pencil case." },
      { who: "Kenji", line: "OK. And *what's that*, on the wall?" },
      { who: "Brisa", line: "*That's a* map of Mexico." },
      { who: "Kenji", line: "And *what are these*?" },
      { who: "Brisa", line: "*They're* markers — for the board. *These* markers are blue and black." },
      { who: "Kenji", line: "And *those* boxes, near the window?" },
      { who: "Brisa", line: "*Those are* boxes for the recycling. *That* one is for paper." }
    ]
  },

  objectives: [
    "I can name common objects in the classroom and in my bag.",
    "I can use *this, that, these, those* correctly.",
    "I can make plural nouns with *-s, -es* and *-ies*.",
    "I can describe objects with colors."
  ],

  explanation: {
    vocabTitle: "Objects and colors",
    vocab: [
      { word: "pen", icon: "🖊️" }, { word: "pencil", icon: "✏️" }, { word: "notebook", icon: "📓" },
      { word: "eraser", icon: "🧽" }, { word: "ruler", icon: "📏" }, { word: "scissors", icon: "✂️" },
      { word: "backpack", icon: "🎒" }, { word: "keys", icon: "🔑" }, { word: "wallet", icon: "👛" },
      { word: "glasses", icon: "👓" }, { word: "laptop", icon: "💻" }, { word: "umbrella", icon: "☂️" },
      { word: "red · blue · green", icon: "🎨" }, { word: "black · white · gray", icon: "⚫" }, { word: "yellow · orange · pink · purple · brown", icon: "🌈" }
    ],
    grammar: [
      {
        title: "This, that, these, those",
        head: ["", "Here (near)", "There (far)"],
        rows: [
          ["one (singular)", "*This is* a pen.", "*That is* a map."],
          ["two or more (plural)", "*These are* markers.", "*Those are* boxes."],
          ["question", "*What's this?* / *What are these?*", "*What's that?* / *What are those?*"],
          ["answer", "*It's* a ruler.", "*They're* boxes."]
        ],
        note: "We answer *What's this?* with *It's…* and *What are these?* with *They're…*"
      },
      {
        title: "Plural nouns",
        head: ["Rule", "Examples"],
        rows: [
          ["most nouns + *-s*", "pen → pen*s*, book → book*s*"],
          ["-s, -sh, -ch, -x + *-es*", "box → box*es*, watch → watch*es*, glass → glass*es*"],
          ["consonant + y → *-ies*", "dictionary → dictionar*ies*, city → cit*ies*"],
          ["irregular", "man → *men*, woman → *women*, child → *children*, person → *people*"]
        ],
        note: "Some words are always plural: *scissors, glasses, jeans*: *These scissors are new.*"
      },
      {
        title: "Colors with objects",
        head: ["Question", "Answer"],
        rows: [
          ["*What color is* your backpack?", "It's *black*."],
          ["*What color are* those pens?", "They're *red* and *blue*."],
          ["adjective before the noun", "a *green* notebook · *white* shoes"]
        ],
        note: "Colors don't take *-s*: *two red pens* — never *two reds pens*."
      }
    ],
    watchOut: [
      ["This are my keys.", "These are my keys."],
      ["What is these?", "What are these?"],
      ["two boxs", "two boxes"],
      ["a backpack black", "a black backpack"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *this, that, these* or *those*. (here = near, there = far)",
      items: [
        "[[This]] is my pen. (here)",
        "[[Those]] are your books, on the table over there.",
        "What are [[these]]? – They're my new glasses. (here)",
        "Is [[that]] your bike, outside? (there)",
        "[[These]] scissors are very small. (here)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "The teacher has a lost-and-found box. Students come to find their things. Listen.",
      title: "Lost and found",
      script: [
        { who: "Teacher", line: "OK, everyone, this is the lost-and-found box. Dani, is this your umbrella?" },
        { who: "Dani", line: "No, it isn't. My umbrella is black. That's a purple umbrella." },
        { who: "Teacher", line: "OK. What about these keys?" },
        { who: "Dani", line: "Yes! Those are my keys. Thank you!" },
        { who: "Teacher", line: "Brisa, are these your glasses?" },
        { who: "Brisa", line: "No, they aren't. But that green notebook is mine. It's my English notebook." },
        { who: "Teacher", line: "Here you are. And there are three pencil cases, two watches and a white laptop charger. Whose are they?" },
        { who: "Dani", line: "The white charger is Kenji's, I think." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "The purple umbrella is Dani's.", a: false },
            { s: "Dani's umbrella is black.", a: true },
            { s: "The keys are Dani's.", a: true },
            { s: "The glasses are Brisa's.", a: false },
            { s: "Brisa's English notebook is green.", a: true },
            { s: "The laptop charger is probably Kenji's.", a: true }
          ]
        },
        {
          type: "gap", title: "In the box",
          prompt: "How many? Write the numbers in words.",
          items: [
            "There are [[three]] pencil cases.",
            "There are [[two]] watches.",
            "There is [[one|a]] white laptop charger."
          ]
        }
      ]
    },

    reading: {
      intro: "Read the online store listings for students.",
      title: "Back-to-school sale",
      text: [
        { author: "Pack A · $250", body: "Three notebooks (blue, red and yellow), five pencils, two erasers and one ruler. Perfect for primary school children." },
        { author: "Pack B · $480", body: "A black backpack with two pockets, a pencil case and four markers. The markers are for whiteboards." },
        { author: "Pack C · $390", body: "Two dictionaries (Spanish–English), a pair of scissors and three highlighters: pink, green and orange." }
      ],
      activities: [
        {
          type: "sort", title: "Which pack?",
          prompt: "Sort the objects.",
          bins: ["Pack A", "Pack B", "Pack C"],
          items: [
            { text: "three notebooks", bin: 0 }, { text: "five pencils", bin: 0 }, { text: "a ruler", bin: 0 },
            { text: "a backpack", bin: 1 }, { text: "a pencil case", bin: 1 }, { text: "four markers", bin: 1 },
            { text: "two dictionaries", bin: 2 }, { text: "scissors", bin: 2 }, { text: "highlighters", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Make it plural",
          prompt: "Write the plural.",
          items: [
            { q: "one dictionary → two…", a: ["dictionaries", "two dictionaries"] },
            { q: "one box → three…", a: ["boxes", "three boxes"] },
            { q: "one child → four…", a: ["children", "four children"] },
            { q: "one watch → two…", a: ["watches", "two watches"] },
            { q: "one woman → five…", a: ["women", "five women"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *this / that / these / those*, then describe the things in your backpack.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What are those on the table?" },
            { a: "These are my new pens." },
            { a: "What color is your backpack?" },
            { a: "That isn't my umbrella." },
            { a: "Is this your phone?" }
          ]
        },
        {
          type: "rewrite", title: "From one to many",
          prompt: "Rewrite in the plural. Example: *This is a pen.* → *These are pens.*",
          items: [
            { q: "This is a book.", a: ["These are books."] },
            { q: "That is a box.", a: ["Those are boxes."] },
            { q: "What's this?", a: ["What are these?"] },
            { q: "It's a red marker.", a: ["They're red markers.", "They are red markers."] }
          ]
        },
        {
          type: "write", title: "What's in my backpack?",
          prompt: "Write about the things in your backpack or bag. Say what they are, how many and what color. Use *this, these, it's* and *they're*.",
          minWords: 35, maxWords: 70,
          model: "This is my backpack. It's gray and it's very big! In my backpack there are two notebooks. They're blue. These are my pens: one black and one red. This is my laptop. It's old, but it's OK. I've also got keys, a wallet and a green water bottle.",
          bank: ["This is my…", "These are my…", "It's… / They're…", "There are two…", "I've also got…", "My … is red."],
          checklist: [
            "I used *this* and *these*.",
            "I wrote plurals correctly.",
            "I used colors **before** nouns: *a blue notebook*.",
            "Colors don't have *-s*."
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
            "What's this in English?",
            "It's a ruler.",
            "What are those on the table?",
            "They're my new markers.",
            "These are my keys.",
            "Is that your backpack?"
          ]
        },
        {
          type: "speak", title: "Show and tell",
          prompt: "Record a short video or audio. Show five objects you have with you and describe them: what they are, their color and one more detail.",
          language: ["This is my…", "These are my…", "It's… / They're…", "It's new / old / big / small."],
          seconds: 60,
          checklist: ["describe five objects?", "use plurals correctly?", "say colors?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name objects in the classroom and in my bag.", review: "Explanation: vocabulary" },
    { can: "I can use *this, that, these, those*.", review: "Explanation: this, that…; Quick check" },
    { can: "I can ask *What's this?* and *What are those?*", review: "Presentation dialogue; Speaking activity 1 (listen and repeat)" },
    { can: "I can make plural nouns, including irregular ones.", review: "Explanation: plural nouns; Reading activity 2" },
    { can: "I can say the colors of things.", review: "Explanation: colors with objects" },
    { can: "I can describe the things I carry.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
