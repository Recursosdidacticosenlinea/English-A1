window.UNIT = {
  slug: "whats-the-weather-like",
  number: 34,
  title: "What's the Weather Like?",
  level: "A1",
  minutes: 50,
  speakers: { "Grandma": "f", "Nico": "m", "Weather reporter": "f", "Claire": "f", A: "f", B: "m" },
  focus: ["weather: sunny, rainy, cloudy, windy…", "It's raining. It's sunny.", "What's the weather like?", "seasons and temperatures", "present simple vs. present continuous"],

  presentation: {
    scene: "☀️🌧️❄️🌬️",
    situation: "Nico is on vacation in Vancouver, Canada. He calls his grandma in Puebla.",
    warmup: {
      prompt: "What's the weather like today where you are? Choose all.",
      options: ["sunny", "cloudy", "rainy", "windy", "hot", "cold", "warm", "cool", "foggy", "stormy"],
      response: "Thanks! In this unit you'll learn to talk about the weather and the seasons."
    },
    dialogueTitle: "A call from Canada",
    dialogue: [
      { who: "Grandma", line: "Hi, Nico! *What's the weather like* in Vancouver?" },
      { who: "Nico", line: "Hi, Grandma! *It's raining* right now. *It's cold* and *cloudy*." },
      { who: "Grandma", line: "Oh no! *What's the temperature*?" },
      { who: "Nico", line: "*It's eight degrees*. I'm wearing two sweaters! And in Puebla?" },
      { who: "Grandma", line: "*It's sunny* and *warm* here. *It's about twenty-four degrees*." },
      { who: "Nico", line: "Lucky you! *Does it rain a lot* in Puebla in November?" },
      { who: "Grandma", line: "No, *it doesn't*. *It usually rains* in the summer, from June to September." },
      { who: "Nico", line: "Here *it rains* all year! But it's beautiful. Tomorrow I'm going to the mountains — maybe *it's snowing* there!" }
    ]
  },

  objectives: [
    "I can describe the weather.",
    "I can ask *What's the weather like?* and give temperatures.",
    "I can name the seasons and talk about the weather in each one.",
    "I can use *It's raining* (now) and *It rains* (usually)."
  ],

  explanation: {
    vocabTitle: "Weather",
    vocab: [
      { word: "sunny", icon: "☀️" }, { word: "cloudy", icon: "☁️" }, { word: "rainy", icon: "🌧️" },
      { word: "windy", icon: "🌬️" }, { word: "snowy", icon: "❄️" }, { word: "stormy", icon: "⛈️" },
      { word: "foggy", icon: "🌫️" }, { word: "hot", icon: "🥵" }, { word: "warm", icon: "🌤️" },
      { word: "cool", icon: "🍃" }, { word: "cold", icon: "🥶" }, { word: "spring", icon: "🌸" },
      { word: "summer", icon: "🏖️" }, { word: "fall / autumn", icon: "🍂" }, { word: "winter", icon: "⛄" }
    ],
    grammar: [
      {
        title: "Talking about the weather",
        head: ["Question", "Answer"],
        rows: [
          ["*What's the weather like?*", "*It's* sunny / cloudy / windy / cold."],
          ["*What's the temperature?*", "*It's* 24 degrees. / *It's* 24°C."],
          ["*Is it* hot in Mérida?", "Yes, *it is*. It's very hot!"],
          ["*How's the weather* today?", "*It's* a beautiful day!"]
        ],
        note: "We use *It* for weather: *It's cold.* — never *Is cold* or *Makes cold*."
      },
      {
        title: "Now or usually?",
        head: ["", "Present continuous (now)", "Present simple (usually)"],
        rows: [
          ["rain", "*It's raining* right now.", "*It rains* a lot in summer."],
          ["snow", "*It's snowing* in the mountains.", "*It doesn't snow* in Cancún."],
          ["question", "*Is it raining*?", "*Does it rain* in winter?"]
        ],
        note: "Noun → adjective: *sun → sunny, cloud → cloudy, rain → rainy, wind → windy, snow → snowy*."
      },
      {
        title: "Seasons and months",
        head: ["Expression", "Example"],
        rows: [
          ["*in* + season", "*In* winter it's cold in Toluca."],
          ["*in* + month", "It rains a lot *in* July."],
          ["*the rainy season / the dry season*", "In Mexico, *the rainy season* is from June to October."]
        ]
      }
    ],
    watchOut: [
      ["Is very hot today.", "It's very hot today."],
      ["It's rain now.", "It's raining now."],
      ["Makes cold in winter.", "It's cold in winter."],
      ["It's raining a lot in July. (every year)", "It rains a lot in July."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *is raining, rains, is snowing* or *snows*.",
      items: [
        "Take an umbrella! It [[is raining|'s raining]] right now.",
        "It [[rains]] a lot in Veracruz in September.",
        "Look! It [[is snowing|'s snowing]] on the volcano!",
        "It never [[snows]] in Acapulco."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to the weather report for Mexico today.",
      title: "Today's weather",
      script: [
        { who: "Weather reporter", line: "Good morning! Here's the weather for today, Monday. In the north, in Monterrey, it's sunny and very hot: thirty-six degrees." },
        { who: "Weather reporter", line: "In Mexico City it's cloudy in the morning, with rain in the afternoon. The temperature is twenty degrees." },
        { who: "Weather reporter", line: "In Veracruz it's windy and stormy. Be careful on the roads!" },
        { who: "Weather reporter", line: "And in Toluca it's cold this morning: only five degrees. Wear a jacket!" },
        { who: "Weather reporter", line: "In Cancún it's warm and sunny, twenty-nine degrees. A perfect day for the beach. Have a great day!" }
      ],
      activities: [
        {
          type: "match", title: "City and weather",
          prompt: "Match the city with the weather.",
          pairs: [
            ["Monterrey", "sunny and very hot"],
            ["Mexico City", "cloudy, rain in the afternoon"],
            ["Veracruz", "windy and stormy"],
            ["Toluca", "cold"],
            ["Cancún", "warm and sunny"]
          ]
        },
        {
          type: "gap", title: "Temperatures",
          prompt: "Write the temperatures in numbers.",
          items: [
            "Monterrey: [[36]]°C",
            "Mexico City: [[20]]°C",
            "Toluca: [[5]]°C",
            "Cancún: [[29]]°C"
          ]
        }
      ]
    },

    reading: {
      intro: "Read three messages from students on exchange programs.",
      title: "Messages from abroad",
      text: [
        { author: "Claire in Moscow", body: "Hi! It's January and it's very cold here: minus fifteen degrees! It's snowing right now. People wear big coats, hats and boots. It snows a lot in winter, but the city is beautiful." },
        { author: "Omar in London", body: "Hello from London! The weather changes a lot. In the morning it's sunny, then it's cloudy, then it rains! I always carry an umbrella. It isn't very cold — about ten degrees." },
        { author: "Lin in Lima", body: "Greetings from Peru! It's summer here in January. It's warm and humid, but it doesn't rain in Lima. It almost never rains here! Every day is cloudy in the morning and sunny in the afternoon." }
      ],
      activities: [
        {
          type: "sort", title: "Which city?",
          prompt: "Sort the information.",
          bins: ["Moscow", "London", "Lima"],
          items: [
            { text: "minus fifteen degrees", bin: 0 }, { text: "snowing now", bin: 0 }, { text: "big coats and hats", bin: 0 },
            { text: "the weather changes a lot", bin: 1 }, { text: "always carry an umbrella", bin: 1 },
            { text: "summer in January", bin: 2 }, { text: "it almost never rains", bin: 2 }, { text: "warm and humid", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "It's snowing in Moscow now.", a: true },
            { s: "It's very cold in London.", a: false },
            { s: "It rains a lot in Lima.", a: false },
            { s: "In Lima it's cloudy in the morning.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice weather sentences, then write a message about the weather where you live.",
      activities: [
        {
          type: "rewrite", title: "Noun to adjective",
          prompt: "Write a sentence. Example: *sun* → *It's sunny.*",
          items: [
            { q: "cloud", a: ["It's cloudy.", "It is cloudy."] },
            { q: "wind", a: ["It's windy.", "It is windy."] },
            { q: "rain", a: ["It's rainy.", "It is rainy.", "It's raining.", "It is raining."] },
            { q: "fog", a: ["It's foggy.", "It is foggy."] },
            { q: "snow", a: ["It's snowy.", "It is snowy.", "It's snowing.", "It is snowing."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What's the weather like today?" },
            { a: "It's raining in the mountains." },
            { a: "It doesn't snow in Cancún." },
            { a: "It's very hot in summer." },
            { a: "Does it rain a lot in July?" }
          ]
        },
        {
          type: "write", title: "Weather where I live",
          prompt: "Write a message to an international pen pal. Describe the weather today (now) and the weather in your city in different seasons. Say your favorite season and why.",
          minWords: 45, maxWords: 90,
          model: "Hi Emma! Today in Puebla it's cloudy and cool — about seventeen degrees. It isn't raining now, but it's windy. In spring it's usually hot and dry. In summer it rains almost every afternoon. In winter it's cold in the morning, but sunny and warm in the afternoon. My favorite season is fall because the weather is perfect and there's Día de Muertos!",
          bank: ["Today it's…", "It's … degrees.", "It isn't raining now.", "In spring / summer it…", "It usually rains…", "It doesn't snow…", "My favorite season is … because…"],
          checklist: [
            "I described the weather **now** (present continuous / *it's*).",
            "I described the weather **usually** (present simple).",
            "I used *in* + season.",
            "I said my favorite season and why."
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
            "What's the weather like today?",
            "It's sunny and hot.",
            "It's raining right now.",
            "It rains a lot in the summer.",
            "It's very cold in winter.",
            "It's twenty degrees."
          ]
        },
        {
          type: "speak", title: "Weather report",
          prompt: "Be a TV weather reporter! Record a weather report for three cities in Mexico. Say the weather and temperatures and give advice.",
          language: ["Good morning! Here's the weather.", "In … it's…", "It's … degrees.", "It's raining in…", "Take an umbrella! / Wear a jacket!"],
          seconds: 60,
          checklist: ["talk about three cities?", "say temperatures?", "give advice with imperatives?", "speak like a reporter?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe the weather.", review: "Explanation: vocabulary; Writing activity 1" },
    { can: "I can ask and answer *What's the weather like?*", review: "Explanation: talking about the weather" },
    { can: "I can say temperatures.", review: "Listening: today's weather" },
    { can: "I can use *It's raining* (now) and *It rains* (usually).", review: "Explanation: now or usually?; Quick check" },
    { can: "I can talk about seasons.", review: "Explanation: seasons and months" },
    { can: "I can write about the weather where I live.", review: "Writing activity 3" }
  ]
};
