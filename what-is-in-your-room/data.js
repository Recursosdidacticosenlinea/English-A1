window.UNIT = {
  slug: "what-is-in-your-room",
  number: 12,
  title: "What Is in Your Room?",
  level: "A1",
  minutes: 50,
  focus: ["there is / there are", "a, an, some, any", "Is there…? Are there…?", "in, on, under, next to, between", "furniture and objects"],

  presentation: {
    scene: "🛏️🪟🪴💡",
    situation: "Camila is moving to a new apartment. She's on a video call with her friend Hugo and shows him her new room.",
    warmup: {
      prompt: "What is in your bedroom? Choose everything that is true.",
      options: ["a bed", "a desk", "a chair", "a closet", "a window", "a lamp", "a mirror", "posters", "plants", "a TV", "books", "a rug"],
      response: "Great! In this unit you'll learn to describe rooms and say where things are."
    },
    dialogueTitle: "My new room",
    dialogue: [
      { who: "Hugo", line: "So, Camila, what's your new room like?" },
      { who: "Camila", line: "It's small but nice. *There's a* big window, and *there's a* bed *under* the window." },
      { who: "Hugo", line: "*Is there a* desk?" },
      { who: "Camila", line: "Yes, *there is*. It's *next to* the closet. And *there are some* shelves *above* the desk." },
      { who: "Hugo", line: "*Are there any* posters on the walls?" },
      { who: "Camila", line: "No, *there aren't any* posters yet. But *there are* two plants *on* the windowsill." },
      { who: "Hugo", line: "*Is there a* TV?" },
      { who: "Camila", line: "No, *there isn't*. But *there's* my guitar *between* the bed and the desk!" }
    ]
  },

  objectives: [
    "I can name furniture and objects in a house.",
    "I can use *there is* and *there are* with *a, an, some* and *any*.",
    "I can ask and answer *Is there…? Are there…?* questions.",
    "I can say where things are with prepositions of place."
  ],

  explanation: {
    vocabTitle: "In my room",
    vocab: [
      { word: "bed", icon: "🛏️" }, { word: "desk", icon: "🗄️" }, { word: "chair", icon: "🪑" },
      { word: "closet", icon: "🚪" }, { word: "window", icon: "🪟" }, { word: "lamp", icon: "💡" },
      { word: "mirror", icon: "🪞" }, { word: "shelf", icon: "📚" }, { word: "plant", icon: "🪴" },
      { word: "rug", icon: "🟫" }, { word: "pillow", icon: "🛌" }, { word: "poster", icon: "🖼️" },
      { word: "clock", icon: "🕰️" }, { word: "computer", icon: "💻" }, { word: "curtains", icon: "🎭" }
    ],
    grammar: [
      {
        title: "There is / there are",
        head: ["", "Singular", "Plural"],
        rows: [
          ["Affirmative", "*There's a* lamp on the desk.", "*There are some* books on the shelf."],
          ["Negative", "*There isn't a* TV.", "*There aren't any* posters."],
          ["Question", "*Is there a* mirror?", "*Are there any* plants?"],
          ["Short answer", "Yes, *there is*. / No, *there isn't*.", "Yes, *there are*. / No, *there aren't*."]
        ],
        note: "Use *some* in affirmative plurals and *any* in negatives and questions. *There's* = *there is*. Don't contract *there are*."
      },
      {
        title: "Prepositions of place",
        head: ["Preposition", "Example"],
        rows: [
          ["*in*", "The clothes are *in* the closet."],
          ["*on*", "The lamp is *on* the desk."],
          ["*under*", "My shoes are *under* the bed."],
          ["*next to*", "The chair is *next to* the desk."],
          ["*between*", "The guitar is *between* the bed and the desk."],
          ["*above / in front of / behind*", "The shelf is *above* the desk. The rug is *in front of* the bed."]
        ]
      },
      {
        title: "How many…?",
        head: ["Question", "Answer"],
        rows: [
          ["*How many* windows *are there*?", "*There are* two windows."],
          ["*How many* chairs *are there*?", "*There's* one chair. / *There's* only one."]
        ],
        note: "Use *there are* for numbers greater than one: *There are three pillows.*"
      }
    ],
    watchOut: [
      ["There is two beds.", "There are two beds."],
      ["Have a lamp in my room.", "There's a lamp in my room."],
      ["There are some posters?", "Are there any posters?"],
      ["There aren't some plants.", "There aren't any plants."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *is, are, some* or *any*.",
      items: [
        "There [[is]] a mirror next to the door.",
        "There are [[some]] pillows on the bed.",
        "[[Are]] there any books on the shelf?",
        "There aren't [[any]] curtains on the window."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Gabriel is looking for a room to rent near BUAP. He visits a house and the owner, Mrs. Paz, shows him the room.",
      title: "A room for rent",
      script: [
        { who: "Mrs. Paz", line: "Come in, come in. This is the room." },
        { who: "Gabriel", line: "Oh, it's bright! How many windows are there?" },
        { who: "Mrs. Paz", line: "There are two windows. And there are curtains, of course." },
        { who: "Gabriel", line: "Is there a desk? I'm a student, so I need a desk." },
        { who: "Mrs. Paz", line: "Yes, there is. It's in front of the window, and there's a lamp on it." },
        { who: "Gabriel", line: "Great. Is there a closet?" },
        { who: "Mrs. Paz", line: "No, there isn't a closet, but there are some shelves next to the door, and there are hooks behind the door for your jackets." },
        { who: "Gabriel", line: "OK. Are there any other students in the house?" },
        { who: "Mrs. Paz", line: "Yes, there are two girls. They study at the university. There's one bathroom between the three rooms." },
        { who: "Gabriel", line: "Is there Wi-Fi?" },
        { who: "Mrs. Paz", line: "Yes, there is, and it's fast!" }
      ],
      activities: [
        {
          type: "sort", title: "In the room or not?",
          prompt: "Listen. Put each thing in the right box.",
          bins: ["There is / there are…", "There isn't / there aren't…"],
          items: [
            { text: "two windows", bin: 0 }, { text: "curtains", bin: 0 }, { text: "a desk", bin: 0 }, { text: "a lamp", bin: 0 },
            { text: "some shelves", bin: 0 }, { text: "Wi-Fi", bin: 0 }, { text: "a closet", bin: 1 }, { text: "a private bathroom", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Where is it?",
          prompt: "Listen again and complete with a preposition.",
          bank: ["in front of", "on", "next to", "behind", "between"],
          items: [
            "The desk is [[in front of]] the window.",
            "The lamp is [[on]] the desk.",
            "The shelves are [[next to]] the door.",
            "The hooks are [[behind]] the door.",
            "The bathroom is [[between]] the three rooms."
          ]
        }
      ]
    },

    reading: {
      intro: "Read three ads from a student housing website.",
      title: "Rooms for students",
      text: [
        { author: "Room A · Coyoacán · $3,500", body: "Large room in a quiet house. There's a double bed, a big closet and a desk with a chair. There are two windows with a view of the garden. There isn't a TV, but there's fast Wi-Fi. The kitchen is shared." },
        { author: "Room B · Narvarte · $2,800", body: "Small, cozy room near the metro. There's a single bed and a desk. There aren't any windows, but there's a big lamp. There are some shelves for your books. There's a private bathroom!" },
        { author: "Room C · Del Valle · $4,200", body: "Modern room in an apartment with two other students. There's a bed, a sofa and a TV. There's a balcony with plants. There are three bathrooms in the apartment. There's a gym in the building too." }
      ],
      activities: [
        {
          type: "match", title: "Which room is it?",
          prompt: "Match the beginnings and the endings.",
          pairs: [
            ["In Room A, you can see", "the garden from the windows."],
            ["Room B has no windows, but", "there's a big lamp."],
            ["In Room B, you don't share", "the bathroom."],
            ["On the balcony of Room C,", "there are some plants."],
            ["In the building of Room C,", "there's a gym."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. Are these sentences true or false?",
          items: [
            { s: "There's a TV in Room A.", a: false },
            { s: "There are two windows in Room A.", a: true },
            { s: "There aren't any windows in Room B.", a: true },
            { s: "There isn't a bathroom in Room B.", a: false },
            { s: "There are some plants on the balcony of Room C.", a: true },
            { s: "There's one bathroom in the apartment with Room C.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures first, then describe your own room.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "There is a lamp on my desk." },
            { a: "Are there any posters on the wall?" },
            { a: "There aren't any plants in my room." },
            { a: "How many pillows are there?" },
            { a: "My shoes are under the bed." }
          ]
        },
        {
          type: "rewrite", title: "Change the sentences",
          prompt: "Follow the instructions in parentheses.",
          items: [
            { q: "There's a mirror in the bathroom. (question)", a: ["Is there a mirror in the bathroom?"] },
            { q: "There are some books on the desk. (negative)", a: ["There aren't any books on the desk.", "There are not any books on the desk."] },
            { q: "There is a chair in the room. (three chairs)", a: ["There are three chairs in the room."] },
            { q: "Are there any shelves? (answer: yes)", a: ["Yes, there are."] },
            { q: "Is there a TV? (answer: no)", a: ["No, there isn't.", "No, there is not."] }
          ]
        },
        {
          type: "write", title: "My favorite room",
          prompt: "Describe your bedroom or your favorite room at home. Say what there is and where things are. Say one thing that there isn't but you want.",
          minWords: 50, maxWords: 80,
          model: "My favorite room is my bedroom. It isn't very big, but it's comfortable. There's a bed next to the window and there's a small desk in front of the bed. There are some posters of my favorite band on the walls. There aren't any plants, and there isn't a TV. I want a TV in my room!",
          bank: ["My favorite room is", "There's a", "There are some", "next to", "in front of", "There aren't any", "There isn't a", "I want"],
          checklist: [
            "I used *there is* and *there are*.",
            "I used *some* and *any* correctly.",
            "I used at least **three** prepositions of place.",
            "I wrote one negative sentence."
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
            "Is there a desk in your room?",
            "Yes, there is. It's next to the window.",
            "There are two lamps on the table.",
            "Are there any plants?",
            "No, there aren't.",
            "My bed is between the door and the closet."
          ]
        },
        {
          type: "speak", title: "Room tour",
          prompt: "Record a short room tour (about one minute), like a video blogger. Describe what there is in your room and where things are.",
          language: ["Welcome to my room!", "This is my…", "There's a … next to…", "There are some…", "There aren't any…", "My favorite thing is…"],
          seconds: 75,
          checklist: ["use *there's* and *there are*?", "say where things are?", "mention your favorite thing?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 12 pieces of furniture and objects.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *there is* and *there are* correctly.", review: "Explanation: there is / there are" },
    { can: "I can use *some* and *any* with plural nouns.", review: "Explanation: there is / there are; Writing activity 2" },
    { can: "I can ask *Is there…? Are there…? How many…?*", review: "Explanation: questions; Speaking activity 1 (listen and repeat)" },
    { can: "I can say where things are with *in, on, under, next to, between*.", review: "Explanation: prepositions of place; Listening activity 2" },
    { can: "I can describe a room in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
