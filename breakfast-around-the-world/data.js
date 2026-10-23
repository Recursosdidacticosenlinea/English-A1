window.UNIT = {
  slug: "breakfast-around-the-world",
  number: 30,
  title: "Breakfast Around the World",
  level: "A1",
  minutes: 50,
  speakers: { "Host": "f", "Mia": "f", "Hugo": "m", "Lin": "f", "Tomás": "m", A: "f", B: "m" },
  focus: ["meals in different countries", "present simple: people eat / don't eat", "adverbs of frequency with food", "taste adjectives: sweet, salty, spicy", "In Mexico we usually…"],

  presentation: {
    scene: "🌎🍳🥞🍙",
    situation: "On a food video channel, the host asks three international students about breakfast in their countries.",
    warmup: {
      prompt: "What do people eat for breakfast in Mexico? Choose all.",
      options: ["chilaquiles", "eggs", "tamales", "pan dulce", "fruit", "cereal", "molletes", "coffee", "atole", "pancakes"],
      response: "Delicious! In this unit you'll compare breakfasts around the world."
    },
    dialogueTitle: "The breakfast show",
    dialogue: [
      { who: "Host", line: "Welcome to the Breakfast Show! Mia, what *do people eat* for breakfast in Germany?" },
      { who: "Mia", line: "We *usually eat* bread with cheese, ham or jam. And we *always drink* coffee!" },
      { who: "Host", line: "Hugo, what about France?" },
      { who: "Hugo", line: "In France breakfast is *sweet*. We *often have* a croissant and a hot chocolate. We *don't eat* eggs for breakfast." },
      { who: "Host", line: "Interesting! And Lin, in China?" },
      { who: "Lin", line: "We *sometimes eat* rice soup, called *congee*, or *steamed buns*. Breakfast is *salty*, not sweet." },
      { who: "Host", line: "And in Mexico, it's *spicy*! We *often eat* chilaquiles with red or green sauce." }
    ]
  },

  objectives: [
    "I can describe typical meals in different countries.",
    "I can use the present simple to talk about customs.",
    "I can use adverbs of frequency: *always, usually, often, sometimes, never*.",
    "I can describe food with *sweet, salty, spicy, healthy*."
  ],

  explanation: {
    vocabTitle: "Breakfast and tastes",
    vocab: [
      { word: "toast", icon: "🍞" }, { word: "jam", icon: "🍓" }, { word: "cereal", icon: "🥣" },
      { word: "yogurt", icon: "🥛" }, { word: "pancakes", icon: "🥞" }, { word: "bacon", icon: "🥓" },
      { word: "rice soup", icon: "🍲" }, { word: "fish", icon: "🐟" }, { word: "beans", icon: "🫘" },
      { word: "sweet", icon: "🍯" }, { word: "salty", icon: "🧂" }, { word: "spicy", icon: "🌶️" },
      { word: "healthy", icon: "🥦" }, { word: "delicious", icon: "😋" }, { word: "heavy / light", icon: "⚖️" }
    ],
    grammar: [
      {
        title: "Present simple for customs",
        head: ["Affirmative", "Negative", "Question"],
        rows: [
          ["In Mexico we *eat* tamales.", "We *don't eat* bacon every day.", "*Do* people *eat* fish for breakfast?"],
          ["In Japan people *have* fish.", "They *don't drink* much coffee.", "What *do* they *drink*?"],
          ["A typical breakfast *has* eggs.", "It *doesn't have* sugar.", "*Does* it *have* meat?"]
        ]
      },
      {
        title: "Adverbs of frequency",
        head: ["Adverb", "%", "Example"],
        rows: [
          ["*always*", "100%", "Germans *always* drink coffee."],
          ["*usually*", "80%", "We *usually* eat at eight."],
          ["*often*", "60%", "The French *often* have croissants."],
          ["*sometimes*", "40%", "I *sometimes* eat cereal."],
          ["*never*", "0%", "I *never* eat breakfast. 😮"]
        ],
        note: "The adverb goes **before** the main verb (*I often eat*) but **after** *be* (*Breakfast is usually big*)."
      },
      {
        title: "Describing food",
        head: ["Structure", "Example"],
        rows: [
          ["*be* + adjective", "Chilaquiles *are spicy*."],
          ["adjective + noun", "a *healthy* breakfast, a *sweet* bread"],
          ["*too* + adjective (negative)", "This salsa is *too* spicy for me!"]
        ]
      }
    ],
    watchOut: [
      ["I eat always eggs.", "I always eat eggs."],
      ["Breakfast usually is big.", "Breakfast is usually big."],
      ["In China people doesn't eat bread.", "In China people don't eat bread."],
      ["The salsa is very spicy for me, I can't eat it.", "The salsa is too spicy for me."]
    ],
    check: {
      type: "rewrite", title: "Quick check",
      prompt: "Put the adverb in the right place.",
      items: [
        { q: "I eat fruit for breakfast. (usually)", a: ["I usually eat fruit for breakfast."] },
        { q: "My dad drinks coffee. (always)", a: ["My dad always drinks coffee."] },
        { q: "Breakfast is big on Sundays. (often)", a: ["Breakfast is often big on Sundays."] },
        { q: "We eat bacon. (never)", a: ["We never eat bacon."] }
      ]
    }
  },

  skills: {
    listening: {
      intro: "Tomás, a Mexican student in England, talks to his host family about breakfast. Listen.",
      title: "A full English breakfast",
      script: [
        { who: "Host", line: "Good morning, Tomás! This is a full English breakfast. Do you have breakfast like this in Mexico?" },
        { who: "Tomás", line: "Wow! Eggs, bacon, sausages, beans, tomatoes and toast! Well, we often eat eggs and beans, but not with sausages." },
        { who: "Host", line: "And do you drink tea?" },
        { who: "Tomás", line: "Not usually. We drink coffee or hot chocolate. My grandma always makes atole on cold mornings." },
        { who: "Host", line: "What's atole?" },
        { who: "Tomás", line: "It's a hot, sweet drink made with corn. It's delicious." },
        { who: "Host", line: "In England, we don't eat this big breakfast every day. We usually have cereal or toast. The full English is for weekends." },
        { who: "Tomás", line: "Oh, OK. In Mexico, a big breakfast is for Sundays too!" }
      ],
      activities: [
        {
          type: "sort", title: "England or Mexico?",
          prompt: "Sort the information.",
          bins: ["England", "Mexico"],
          items: [
            { text: "sausages and bacon", bin: 0 }, { text: "tea", bin: 0 }, { text: "cereal or toast on weekdays", bin: 0 },
            { text: "atole on cold mornings", bin: 1 }, { text: "coffee or hot chocolate", bin: 1 }, { text: "eggs and beans", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Tomás usually drinks tea.", a: false },
            { s: "Atole is a cold drink.", a: false },
            { s: "Atole is made with corn.", a: true },
            { s: "English people eat a full English breakfast every day.", a: false },
            { s: "In both countries, a big breakfast is for weekends.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about breakfast in three countries.",
      title: "Good morning, world!",
      text: [
        { author: "Japan", body: "A traditional Japanese breakfast is healthy and salty. People often eat rice, grilled fish, miso soup and pickles. They usually drink green tea. Today many young people eat toast too." },
        { author: "Brazil", body: "In Brazil, breakfast is usually light. People drink strong coffee with milk and eat bread with butter. They often have tropical fruit like papaya and pineapple. Cheese bread, *pão de queijo*, is very popular." },
        { author: "Turkey", body: "Turkish breakfast is a big meal. There are always a lot of small plates: cheese, olives, tomatoes, cucumbers, eggs and bread. People drink black tea in small glasses. Families sometimes eat breakfast together for two hours on Sundays!" }
      ],
      activities: [
        {
          type: "match", title: "Which country?",
          prompt: "Match the country with the description.",
          pairs: [
            ["Japan", "rice, grilled fish and green tea"],
            ["Brazil", "a light breakfast with strong coffee and fruit"],
            ["Turkey", "a lot of small plates and black tea"]
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with one word from the text.",
          items: [
            "A traditional Japanese breakfast is healthy and [[salty]].",
            "Many young Japanese people eat [[toast]] too.",
            "Brazilians often eat tropical [[fruit]].",
            "In Turkey people drink tea in small [[glasses]].",
            "Turkish families [[sometimes]] eat breakfast for two hours."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice word order, then write about breakfast in your country.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "We usually eat eggs for breakfast." },
            { a: "Do people drink tea in Mexico?" },
            { a: "My breakfast is always very light." },
            { a: "I never eat spicy food in the morning." },
            { a: "They often have fruit and yogurt." }
          ]
        },
        {
          type: "sort", title: "Sweet, salty or spicy?",
          prompt: "How do these foods usually taste?",
          bins: ["sweet", "salty", "spicy"],
          items: [
            { text: "pan dulce", bin: 0 }, { text: "pancakes with honey", bin: 0 }, { text: "hot chocolate", bin: 0 },
            { text: "bacon", bin: 1 }, { text: "miso soup", bin: 1 }, { text: "olives", bin: 1 },
            { text: "chilaquiles with green sauce", bin: 2 }, { text: "eggs with jalapeños", bin: 2 }
          ]
        },
        {
          type: "write", title: "Breakfast in my country",
          prompt: "Write a short article for international students: what do people in your country (or your family) usually eat and drink for breakfast? What's different on weekends? Use at least three adverbs of frequency and two taste adjectives.",
          minWords: 45, maxWords: 90,
          model: "In Mexico, breakfast is often big and delicious. People usually eat eggs with beans and tortillas, and they drink coffee or juice. On weekends, families often eat chilaquiles. They're spicy! Children sometimes eat cereal with milk. In my family, we never eat bacon, but we always have fruit. My favorite breakfast is tamales with atole — it's sweet and hot.",
          bank: ["In Mexico, breakfast is…", "People usually eat…", "They often drink…", "On weekends…", "… is sweet / salty / spicy.", "In my family we never…", "My favorite breakfast is…"],
          checklist: [
            "I used at least **three** adverbs of frequency.",
            "Adverbs are **before** the verb or **after** *be*.",
            "I used two taste adjectives.",
            "I used *people / they* + verb (no -s)."
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
            "What do you usually eat for breakfast?",
            "I usually have eggs and coffee.",
            "In Mexico we often eat chilaquiles.",
            "This salsa is very spicy.",
            "I never eat breakfast at home.",
            "Pancakes with honey are sweet."
          ]
        },
        {
          type: "speak", title: "Breakfast in my home",
          prompt: "Record a short video or audio presenting a typical breakfast in your home (show it if you can!). Say what it is, how it tastes and how often you eat it.",
          language: ["This is a typical breakfast in my home.", "We usually…", "It's…", "We eat it every… / on…", "I love it because…"],
          seconds: 60,
          checklist: ["name the foods and drinks?", "use adverbs of frequency?", "describe the taste?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe breakfast in different countries.", review: "Reading: Good morning, world!" },
    { can: "I can use the present simple to talk about customs.", review: "Explanation: present simple for customs" },
    { can: "I can use adverbs of frequency in the right position.", review: "Explanation: adverbs of frequency; Quick check" },
    { can: "I can describe food: *sweet, salty, spicy, healthy*.", review: "Explanation: describing food; Writing activity 2" },
    { can: "I can understand people comparing meals.", review: "Listening: a full English breakfast" },
    { can: "I can write about breakfast in my country.", review: "Writing activity 3" }
  ]
};
