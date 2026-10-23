window.UNIT = {
  slug: "greetings-from",
  number: 35,
  title: "Greetings From…",
  level: "A1",
  minutes: 50,
  speakers: { "Valeria": "f", "Mom": "f", "Leo": "m", "Dad": "m", A: "f", B: "m" },
  focus: ["postcards and travel messages", "present continuous: I'm sitting, we're visiting…", "present simple: every day we…", "Dear… / Love, / See you soon!", "describing a place: beautiful, crowded, quiet"],

  presentation: {
    scene: "✉️🏖️📸🌴",
    situation: "Valeria is on a school trip to Oaxaca. She sends a voice message to her mom.",
    warmup: {
      prompt: "What do you do on vacation? Choose all.",
      options: ["take photos", "swim", "visit museums", "eat local food", "buy souvenirs", "walk around the city", "send messages", "sleep a lot", "go to the beach", "meet new people"],
      response: "Fun! In this unit you'll learn to write postcards and messages about a trip."
    },
    dialogueTitle: "A voice message from Oaxaca",
    dialogue: [
      { who: "Valeria", line: "Hi, Mom! *Greetings from* Oaxaca! *I'm sitting* in the zócalo right now." },
      { who: "Valeria", line: "*It's sunny* and warm. *My friends are buying* souvenirs and *I'm eating* an ice cream." },
      { who: "Valeria", line: "*Every morning we visit* a different place. Today *we're visiting* Monte Albán — it's amazing!" },
      { who: "Valeria", line: "The food is delicious. *I eat* tlayudas every day!" },
      { who: "Valeria", line: "The hotel is small but very nice. *We're staying* near the cathedral." },
      { who: "Valeria", line: "*I'm having* a great time. *I miss you*! *See you on* Sunday. *Love*, Vale." }
    ]
  },

  objectives: [
    "I can write a postcard or travel message.",
    "I can use the present continuous to say what is happening now.",
    "I can use the present simple to say what I do every day on a trip.",
    "I can describe a place with adjectives."
  ],

  explanation: {
    vocabTitle: "On a trip",
    vocab: [
      { word: "postcard", icon: "🖼️" }, { word: "souvenir", icon: "🎁" }, { word: "hotel", icon: "🏨" },
      { word: "beach", icon: "🏖️" }, { word: "mountains", icon: "⛰️" }, { word: "ruins", icon: "🏛️" },
      { word: "tourist", icon: "📸" }, { word: "guide", icon: "🧑‍🏫" }, { word: "beautiful", icon: "😍" },
      { word: "amazing", icon: "🤩" }, { word: "crowded", icon: "👥" }, { word: "quiet", icon: "🤫" },
      { word: "old / modern", icon: "🏰" }, { word: "relaxing", icon: "😌" }, { word: "I miss you", icon: "💌" }
    ],
    grammar: [
      {
        title: "Now vs. every day",
        head: ["Present continuous (now, this week)", "Present simple (routine on the trip)"],
        rows: [
          ["*I'm sitting* in the zócalo.", "*Every morning we visit* a museum."],
          ["*We're staying* in a small hotel.", "*I eat* tlayudas *every day*."],
          ["*It's raining* now.", "*It usually rains* in the afternoon."],
          ["*I'm having* a great time!", "*We go* to bed at ten."]
        ],
        note: "Time words help you choose: *now, right now, today, this week* → continuous · *every day, always, usually* → simple."
      },
      {
        title: "Postcard language",
        head: ["Part", "Examples"],
        rows: [
          ["start", "*Dear* Mom, / *Hi* Leo! / *Greetings from* Oaxaca!"],
          ["the place", "The city is *beautiful*. The beach is *quiet*."],
          ["now", "*I'm writing* this at the hotel."],
          ["feelings", "*I'm having a great time.* / *I miss you.*"],
          ["end", "*See you soon!* / *Love,* Vale / *Hugs,* / *Bye for now!*"]
        ]
      }
    ],
    watchOut: [
      ["I'm eat tlayudas every day.", "I eat tlayudas every day."],
      ["Now we visit Monte Albán.", "Now we're visiting Monte Albán."],
      ["I'm having a great time? (in a postcard)", "I'm having a great time!"],
      ["Querida Mom", "Dear Mom,"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Choose the present simple or present continuous. Write the verb.",
      items: [
        "Right now I [['m sitting|am sitting]] on the beach. (sit)",
        "Every day we [[swim]] in the sea. (swim)",
        "Today my sister [['s visiting|is visiting]] a museum. (visit)",
        "We usually [[have]] dinner at eight. (have)",
        "Look! The guide [['s taking|is taking]] a photo of us. (take)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Leo is on vacation in Cancún with his friends. He makes a video call to his dad. Listen.",
      title: "A video call from Cancún",
      script: [
        { who: "Dad", line: "Hi, Leo! Where are you? It's very noisy!" },
        { who: "Leo", line: "Hi, Dad! I'm at the beach. My friends are playing volleyball and I'm sitting under an umbrella." },
        { who: "Dad", line: "Is the weather good?" },
        { who: "Leo", line: "Yes, it's sunny and very hot. Every afternoon there's a short storm, but it's OK." },
        { who: "Dad", line: "What do you do every day?" },
        { who: "Leo", line: "We get up late, we swim in the morning and we eat seafood every day. It's delicious!" },
        { who: "Dad", line: "And the hotel?" },
        { who: "Leo", line: "We're staying in a small hostel. It's cheap, but it's a bit crowded. I'm having a great time!" },
        { who: "Dad", line: "Great! Don't forget your sunscreen! See you on Saturday." }
      ],
      activities: [
        {
          type: "sort", title: "Now or every day?",
          prompt: "Is it happening now or is it a routine on the trip?",
          bins: ["Now", "Every day"],
          items: [
            { text: "friends are playing volleyball", bin: 0 }, { text: "Leo is sitting under an umbrella", bin: 0 },
            { text: "a short storm in the afternoon", bin: 1 }, { text: "they get up late", bin: 1 }, { text: "they swim in the morning", bin: 1 }, { text: "they eat seafood", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Leo is at the hotel.", a: false },
            { s: "The weather is cold.", a: false },
            { s: "The hostel is cheap.", a: true },
            { s: "Leo is having a bad time.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read two postcards to the same friend, Iris.",
      title: "Postcards for Iris",
      text: [
        { author: "From Ximena · San Cristóbal", body: "Dear Iris, Greetings from San Cristóbal de las Casas! The town is old and very colorful. It's cool here, so I'm wearing my big sweater. Every morning I walk to the market and buy fresh bread. Right now I'm drinking a hot chocolate in a café. It's so relaxing! See you soon, Xime" },
        { author: "From Kevin · New York", body: "Hi Iris! I'm writing this postcard in Central Park. The city is amazing, but it's very crowded and noisy. We're staying with my aunt in Brooklyn. Every day we take the subway to Manhattan. Today we're visiting the Statue of Liberty. I miss tacos! Love, Kevin" }
      ],
      activities: [
        {
          type: "sort", title: "Who says it?",
          prompt: "Put each sentence under the right writer.",
          bins: ["Ximena", "Kevin"],
          items: [
            { text: "I'm drinking a hot chocolate.", bin: 0 }, { text: "Every morning I walk to the market.", bin: 0 }, { text: "I'm wearing my big sweater.", bin: 0 },
            { text: "I'm writing this in Central Park.", bin: 1 }, { text: "Every day we take the subway.", bin: 1 }, { text: "I miss tacos!", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Describe the places",
          prompt: "Complete with an adjective from the postcards.",
          items: [
            "San Cristóbal is old and very [[colorful]].",
            "The weather in San Cristóbal is [[cool]].",
            "The café is very [[relaxing]].",
            "New York is amazing, but it's very [[crowded|noisy]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice postcard language, then write your own postcard.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Greetings from the beautiful city of Guanajuato!" },
            { a: "I'm having a great time." },
            { a: "We're staying in a small hotel." },
            { a: "Every day we eat local food." },
            { a: "See you on Sunday!" }
          ]
        },
        {
          type: "sort", title: "Start or end?",
          prompt: "Where do these go in a postcard?",
          bins: ["Start", "End"],
          items: [
            { text: "Dear Mom,", bin: 0 }, { text: "Hi Leo!", bin: 0 }, { text: "Greetings from…", bin: 0 },
            { text: "See you soon!", bin: 1 }, { text: "Love,", bin: 1 }, { text: "Hugs,", bin: 1 }, { text: "Bye for now!", bin: 1 }
          ]
        },
        {
          type: "write", title: "My postcard",
          prompt: "Imagine you're on a trip to a place you love (real or dream). Write a postcard to a friend or family member: where you are, the weather, what you're doing now, what you do every day, and how you feel.",
          minWords: 50, maxWords: 90,
          model: "Dear Grandpa, Greetings from Mazunte! The beach is quiet and beautiful, and it's very hot. Right now I'm sitting in a hammock and my brother is swimming. Every morning we eat fresh fruit for breakfast, and in the evening we watch the sunset. We're staying in a small cabin near the sea. I'm having a wonderful time! See you soon. Love, Ana",
          bank: ["Dear…,", "Greetings from…!", "It's sunny / hot / cool.", "Right now I'm…", "Every day we…", "We're staying…", "I'm having a great time!", "Love,"],
          checklist: [
            "I started and ended like a postcard.",
            "I used the **present continuous** for now.",
            "I used the **present simple** with *every day*.",
            "I described the place with two adjectives."
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
            "Greetings from Oaxaca!",
            "I'm sitting in a café right now.",
            "Every morning we visit a museum.",
            "We're staying in a small hotel.",
            "I'm having a great time!",
            "See you soon. Love, Ana."
          ]
        },
        {
          type: "speak", title: "A voice postcard",
          prompt: "Record a voice postcard like Valeria's. Say where you are (real or imagined), the weather, what you're doing now and what you do every day there.",
          language: ["Hi …! Greetings from…!", "I'm … right now.", "It's…", "Every day I…", "I miss you!", "See you soon!"],
          seconds: 60,
          checklist: ["greet and say goodbye?", "use both tenses?", "describe the weather?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can write a short postcard or travel message.", review: "Explanation: postcard language; Writing activity 3" },
    { can: "I can use the present continuous for things happening now.", review: "Explanation: now vs. every day" },
    { can: "I can use the present simple for routines on a trip.", review: "Explanation: now vs. every day; Quick check" },
    { can: "I can choose the right tense with time words.", review: "Listening activity 1" },
    { can: "I can describe a place with adjectives.", review: "Reading activity 2" },
    { can: "I can tell someone about my trip by phone.", review: "Speaking activity 1 (listen and repeat)" }
  ]
};
