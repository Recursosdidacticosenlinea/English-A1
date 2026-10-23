window.UNIT = {
  slug: "welcome-to-my-home",
  number: 13,
  title: "Welcome to My Home",
  level: "A1",
  minutes: 50,
  speakers: { "Sofía": "f", "Ale": "m", "Agent": "f", "Mr. Cruz": "m", A: "f", B: "m" },
  focus: ["rooms of a house", "house or apartment?", "Is there…? Are there any…?", "How many bedrooms are there?", "upstairs, downstairs, big, small"],

  presentation: {
    scene: "🏠🛋️🛏️🚿",
    situation: "Sofía is moving to a new apartment. Her friend Ale calls her on video and she gives him a tour.",
    warmup: {
      prompt: "Which rooms and places in a home do you know? Choose all.",
      options: ["kitchen", "bedroom", "bathroom", "living room", "dining room", "garden", "garage", "balcony", "stairs", "roof"],
      response: "Excellent! In this unit you'll learn to describe a house or apartment."
    },
    dialogueTitle: "A video tour",
    dialogue: [
      { who: "Ale", line: "Hi, Sofía! So, this is your new apartment?" },
      { who: "Sofía", line: "Yes! Come in. This is the *living room*. It's small, but it's very sunny." },
      { who: "Ale", line: "Nice! *How many bedrooms are there*?" },
      { who: "Sofía", line: "*There are two* bedrooms. This is my bedroom. *There's a* big window." },
      { who: "Ale", line: "*Is there a* balcony?" },
      { who: "Sofía", line: "*Yes, there is*. It's next to the kitchen. Look!" },
      { who: "Ale", line: "Wow, great view. *Are there any* plants?" },
      { who: "Sofía", line: "*No, there aren't* — not yet! *There isn't a* garden, so I want plants on the balcony." }
    ]
  },

  objectives: [
    "I can name the rooms in a house or apartment.",
    "I can use *there is / there are* to describe a home.",
    "I can ask *Is there…? Are there any…? How many…?*",
    "I can describe my home in a short text."
  ],

  explanation: {
    vocabTitle: "My home",
    vocab: [
      { word: "house", icon: "🏠" }, { word: "apartment", icon: "🏢" }, { word: "living room", icon: "🛋️" },
      { word: "kitchen", icon: "🍳" }, { word: "bedroom", icon: "🛏️" }, { word: "bathroom", icon: "🚿" },
      { word: "dining room", icon: "🍽️" }, { word: "garden", icon: "🌳" }, { word: "garage", icon: "🚗" },
      { word: "balcony", icon: "🌇" }, { word: "stairs", icon: "🪜" }, { word: "roof", icon: "🏚️" },
      { word: "window", icon: "🪟" }, { word: "door", icon: "🚪" }, { word: "floor", icon: "🟫" }
    ],
    grammar: [
      {
        title: "There is / there are · review",
        head: ["", "Singular", "Plural"],
        rows: [
          ["affirmative", "*There's* a balcony.", "*There are* two bedrooms."],
          ["negative", "*There isn't* a garden.", "*There aren't any* plants."],
          ["question", "*Is there* a garage?", "*Are there any* windows?"],
          ["short answer", "Yes, there *is*. / No, there *isn't*.", "Yes, there *are*. / No, there *aren't*."]
        ],
        note: "Use *any* in negatives and questions with plural nouns: *Are there any plants?*"
      },
      {
        title: "How many…?",
        head: ["Question", "Answer"],
        rows: [
          ["*How many* bedrooms *are there*?", "*There are* three."],
          ["*How many* bathrooms *are there*?", "*There's* one. / *There's only* one."],
          ["*How many* floors *are there*?", "*There are* two: upstairs and downstairs."]
        ]
      },
      {
        title: "Where in the house?",
        head: ["Word", "Example"],
        rows: [
          ["*upstairs / downstairs*", "The bedrooms are *upstairs*."],
          ["*on the first / second floor*", "My apartment is *on the third floor*."],
          ["*next to / opposite*", "The bathroom is *next to* my bedroom."],
          ["*in* + room", "The TV is *in* the living room."]
        ]
      }
    ],
    watchOut: [
      ["There are a big kitchen.", "There's a big kitchen."],
      ["Have a garden in my house.", "There's a garden in my house."],
      ["Is there any plants?", "Are there any plants?"],
      ["How many bedrooms there are?", "How many bedrooms are there?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *is, isn't, are* or *aren't*.",
      items: [
        "There [[is]] a small kitchen in my apartment.",
        "There [[are]] three bedrooms upstairs.",
        "[[Is]] there a garage? – No, there isn't.",
        "There [[aren't]] any plants on the balcony.",
        "How many bathrooms [[are]] there?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Mr. Cruz wants to rent a house. He calls a real estate agent. Listen and complete the information.",
      title: "A house for rent",
      script: [
        { who: "Mr. Cruz", line: "Good morning. I'm calling about the house for rent on Juárez Street." },
        { who: "Agent", line: "Yes, of course. It's a beautiful house. There are two floors." },
        { who: "Mr. Cruz", line: "How many bedrooms are there?" },
        { who: "Agent", line: "There are three bedrooms, all upstairs. And there are two bathrooms." },
        { who: "Mr. Cruz", line: "Is there a garden? I've got two dogs." },
        { who: "Agent", line: "Yes, there is. There's a big garden behind the house." },
        { who: "Mr. Cruz", line: "Great. And is there a garage?" },
        { who: "Agent", line: "No, there isn't, sorry. But there's parking on the street." },
        { who: "Mr. Cruz", line: "OK. How much is it?" },
        { who: "Agent", line: "It's twelve thousand pesos a month." }
      ],
      activities: [
        {
          type: "gap", title: "Complete the listing",
          prompt: "Write a number or one word.",
          items: [
            "Street: [[Juárez|Juarez]]",
            "Floors: [[2|two]]",
            "Bedrooms: [[3|three]] (all [[upstairs]])",
            "Bathrooms: [[2|two]]",
            "Garden: [[yes]] · Garage: [[no]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Mr. Cruz has got two cats.", a: false },
            { s: "The garden is in front of the house.", a: false },
            { s: "There's parking on the street.", a: true },
            { s: "The rent is 12,000 pesos a month.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three ads on a student housing website.",
      title: "Homes for students",
      text: [
        { author: "Apartment in Cholula", body: "Modern apartment on the fourth floor. There's one bedroom, a small kitchen and a bathroom. There's a balcony with a view of the volcano. There isn't an elevator!" },
        { author: "Room in a family house", body: "A big bedroom in a family house near BUAP. There's a garden with fruit trees. There are three people in the family and two cats. Breakfast is included." },
        { author: "Shared house downtown", body: "An old house with five bedrooms. There are two bathrooms and a big kitchen for all the students. There aren't any parking spaces, but the bus stop is next to the house." }
      ],
      activities: [
        {
          type: "match", title: "Which home is best?",
          prompt: "Match the student with the best home.",
          pairs: [
            ["Iván wants to live alone and loves views.", "Apartment in Cholula"],
            ["Ana wants breakfast and loves animals.", "Room in a family house"],
            ["Leo goes everywhere by bus and likes meeting people.", "Shared house downtown"]
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, there is / No, there isn't / Yes, there are / No, there aren't*.",
          items: [
            { q: "Is there an elevator in the Cholula apartment?", a: ["No, there isn't.", "No, there is not."] },
            { q: "Is there a garden in the family house?", a: ["Yes, there is."] },
            { q: "Are there any cats in the family house?", a: ["Yes, there are."] },
            { q: "Are there any parking spaces in the shared house?", a: ["No, there aren't.", "No, there are not."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice questions about homes, then describe your home.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "How many bedrooms are there?" },
            { a: "Is there a garden?" },
            { a: "There isn't a garage." },
            { a: "The bathroom is next to the kitchen." },
            { a: "Are there any windows in the kitchen?" }
          ]
        },
        {
          type: "match", title: "What's in the room?",
          prompt: "Match the room with the objects.",
          pairs: [
            ["kitchen", "a fridge and a stove"],
            ["bathroom", "a shower and a toilet"],
            ["bedroom", "a bed and a closet"],
            ["living room", "a sofa and a TV"],
            ["garage", "a car and some bikes"]
          ]
        },
        {
          type: "write", title: "My home",
          prompt: "Describe your house or apartment (or your dream home). Say if it's a house or an apartment, how many rooms there are, what there is and what there isn't. Say your favorite room.",
          minWords: 40, maxWords: 80,
          model: "I live in a house in San Andrés Cholula. It's not very big. There are two floors. Downstairs there's a living room, a kitchen and a small bathroom. Upstairs there are three bedrooms. There isn't a garage, but there's a little garden with plants. My favorite room is my bedroom because it's quiet.",
          bank: ["I live in a house / an apartment.", "There are … floors.", "Downstairs / Upstairs there's…", "There isn't a…", "There aren't any…", "My favorite room is…"],
          checklist: [
            "I used *there is* and *there are*.",
            "I wrote a negative: *there isn't / there aren't any*.",
            "I said how many rooms there are.",
            "I said my favorite room and why."
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
            "This is the living room.",
            "How many bedrooms are there?",
            "There are two bedrooms upstairs.",
            "Is there a balcony?",
            "There isn't a garden.",
            "The bathroom is next to the kitchen."
          ]
        },
        {
          type: "speak", title: "A tour of my home",
          prompt: "Record a tour of your home (audio or video). Walk from room to room and say what there is in each one.",
          language: ["This is the…", "In the living room there's…", "Upstairs / Downstairs…", "There isn't a…", "My favorite room is…"],
          seconds: 75,
          checklist: ["name the rooms?", "use *there's / there are*?", "use a negative?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name the rooms of a house.", review: "Explanation: vocabulary" },
    { can: "I can use *there is / there are* to describe a home.", review: "Explanation: there is / there are" },
    { can: "I can ask *Is there…? Are there any…?* and answer.", review: "Explanation; Reading activity 2" },
    { can: "I can ask and answer *How many rooms are there?*", review: "Explanation: How many…?" },
    { can: "I can understand an ad or a phone call about a home.", review: "Listening and Reading" },
    { can: "I can describe my home in writing and speaking.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
