window.UNIT = {
  slug: "at-the-bus-station",
  number: 37,
  title: "At the Bus Station",
  level: "A1",
  minutes: 50,
  speakers: { "Ticket agent": "f", "Daniel": "m", "Announcer": "m", "Sara": "f", A: "m", B: "f" },
  focus: ["buying tickets", "a one-way / round-trip ticket", "What time does the bus leave / arrive?", "Which gate? Gate 5.", "Can I have…? I'd like…"],

  presentation: {
    scene: "🚌🎟️🕒🧳",
    situation: "Daniel is at the CAPU bus station in Puebla. He wants to go to Veracruz for the weekend.",
    warmup: {
      prompt: "What do you need for a bus trip? Choose all.",
      options: ["a ticket", "a suitcase", "a backpack", "an ID", "money", "a phone charger", "snacks", "water", "a jacket", "headphones"],
      response: "Ready to travel! In this unit you'll learn to buy tickets and understand times and gates."
    },
    dialogueTitle: "Buying a ticket",
    dialogue: [
      { who: "Ticket agent", line: "Good morning. Where would you like to go?" },
      { who: "Daniel", line: "Good morning. *I'd like a ticket to* Veracruz, please." },
      { who: "Ticket agent", line: "*One-way or round-trip*?" },
      { who: "Daniel", line: "*Round-trip*, please. I'm coming back on Sunday." },
      { who: "Ticket agent", line: "OK. There's a bus at ten fifteen. Is that OK?" },
      { who: "Daniel", line: "Yes. *What time does it arrive*?" },
      { who: "Ticket agent", line: "*It arrives at* two thirty. *Window or aisle* seat?" },
      { who: "Daniel", line: "Window, please. *How much is it*?" },
      { who: "Ticket agent", line: "It's one thousand two hundred pesos. *The bus leaves from gate* seven. Have a nice trip!" }
    ]
  },

  objectives: [
    "I can buy a bus or train ticket.",
    "I can ask *What time does the bus leave / arrive?*",
    "I can understand times, gates and prices in announcements.",
    "I can use travel words: *one-way, round-trip, gate, seat*."
  ],

  explanation: {
    vocabTitle: "At the station",
    vocab: [
      { word: "ticket", icon: "🎟️" }, { word: "ticket office", icon: "🏢" }, { word: "one-way", icon: "➡️" },
      { word: "round-trip", icon: "🔁" }, { word: "gate", icon: "🚪" }, { word: "platform", icon: "🚉" },
      { word: "seat", icon: "💺" }, { word: "window seat", icon: "🪟" }, { word: "aisle seat", icon: "↔️" },
      { word: "departure", icon: "🛫" }, { word: "arrival", icon: "🛬" }, { word: "delayed", icon: "⏳" },
      { word: "luggage", icon: "🧳" }, { word: "passenger", icon: "🧍" }, { word: "waiting room", icon: "🪑" }
    ],
    grammar: [
      {
        title: "Asking about times",
        head: ["Question", "Answer"],
        rows: [
          ["*What time does* the bus *leave*?", "*It leaves at* 10:15."],
          ["*What time does* it *arrive*?", "*It arrives at* 2:30."],
          ["*When is* the next bus to Oaxaca?", "*At* half past eleven."],
          ["*How long is* the trip?", "*It's* about four hours."]
        ],
        note: "We use the present simple for timetables: *The bus leaves at 10.* (it's on the schedule)."
      },
      {
        title: "Buying a ticket",
        head: ["Passenger", "Ticket agent"],
        rows: [
          ["*I'd like a ticket to* Veracruz, please.", "*One-way or round-trip?*"],
          ["*Can I have two tickets to* Mexico City?", "*For what time?*"],
          ["*Window seat, please.*", "*Here's your ticket.*"],
          ["*Which gate is it?*", "*Gate* seven."]
        ]
      }
    ],
    watchOut: [
      ["What time leaves the bus?", "What time does the bus leave?"],
      ["The bus arrive at 2:30.", "The bus arrives at 2:30."],
      ["A ticket for go and return.", "A round-trip ticket."],
      ["I want a ticket. (to the agent)", "I'd like a ticket, please."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the conversation.",
      items: [
        "I'd [[like]] a ticket to Oaxaca, please.",
        "One-way or [[round-trip|round trip]]?",
        "What time [[does]] the bus leave?",
        "It [[leaves]] at nine o'clock.",
        "[[Which]] gate is it? – Gate four."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Sara is waiting at the bus station. Listen to the announcements and complete the departure board.",
      title: "Station announcements",
      script: [
        { who: "Announcer", line: "Attention, passengers. The bus to Mexico City leaves at eleven thirty from gate two." },
        { who: "Announcer", line: "The bus to Oaxaca is delayed. It now leaves at twelve fifteen from gate five." },
        { who: "Announcer", line: "Passengers to Tlaxcala, your bus is now boarding at gate one. It leaves in five minutes." },
        { who: "Sara", line: "Excuse me, which gate is the bus to Xalapa?" },
        { who: "Ticket agent", line: "Gate eight. But it doesn't leave until one o'clock." },
        { who: "Sara", line: "One o'clock? Oh no, I've got two hours. Where's the waiting room?" },
        { who: "Ticket agent", line: "It's upstairs, next to the cafés." }
      ],
      activities: [
        {
          type: "gap", title: "Departure board",
          prompt: "Complete the board. Write times like *11:30* and gate numbers.",
          items: [
            "Mexico City · [[11:30]] · gate [[2|two]]",
            "Oaxaca · DELAYED · [[12:15]] · gate [[5|five]]",
            "Tlaxcala · boarding now · gate [[1|one]]",
            "Xalapa · [[1:00|1|one o'clock]] · gate [[8|eight]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The Oaxaca bus is on time.", a: false },
            { s: "Sara is going to Xalapa.", a: true },
            { s: "Sara has thirty minutes to wait.", a: false },
            { s: "The waiting room is next to the cafés.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the bus company's timetable and information.",
      title: "Estrella Bus Lines · Puebla – Mexico City",
      text: [
        { author: "Timetable", body: "Departures from Puebla: 6:00 · 8:30 · 11:00 · 14:00 · 18:30 · 21:00. The trip takes about two hours. Buses arrive at the TAPO station in Mexico City." },
        { author: "Prices", body: "One-way: $260 · Round-trip: $480 · Students and teachers: 50% discount with ID (Monday to Friday only) · Children under 3: free" },
        { author: "Rules", body: "One big suitcase and one small bag per passenger. Arrive 20 minutes before departure. Don't eat on the bus. Free Wi-Fi on all buses." }
      ],
      activities: [
        {
          type: "match", title: "Find the information",
          prompt: "Match the question with the answer.",
          pairs: [
            ["How long is the trip?", "about two hours"],
            ["How much is a round-trip ticket?", "four hundred and eighty pesos"],
            ["When is the last bus?", "at nine p.m."],
            ["When can students get a discount?", "Monday to Friday"],
            ["How early do you need to arrive?", "twenty minutes before"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "There are six buses a day.", a: true },
            { s: "Students get a discount on Saturdays.", a: false },
            { s: "You can eat on the bus.", a: false },
            { s: "There's Wi-Fi on the bus.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice ticket language, then write a message about your trip plans.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What time does the bus leave?" },
            { a: "I'd like a round-trip ticket, please." },
            { a: "The bus arrives at half past two." },
            { a: "Which gate is the bus to Oaxaca?" },
            { a: "Can I have a window seat?" }
          ]
        },
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write the question for each answer.",
          items: [
            { q: "It leaves at 8:30. (What time…?)", a: ["What time does the bus leave?", "What time does it leave?"] },
            { q: "It arrives at 10:30. (What time…?)", a: ["What time does the bus arrive?", "What time does it arrive?"] },
            { q: "It's $260. (How much…?)", a: ["How much is it?", "How much is the ticket?", "How much is a one-way ticket?"] },
            { q: "Gate 3. (Which…?)", a: ["Which gate is it?", "Which gate?"] }
          ]
        },
        {
          type: "write", title: "Trip details",
          prompt: "Write a message to a friend who is coming with you on a bus trip. Use the Estrella timetable. Say the day, the departure and arrival times, the price, where to meet and what to bring.",
          minWords: 40, maxWords: 80,
          model: "Hi Rocío! Our bus to Mexico City leaves on Friday at 8:30 a.m. It arrives at TAPO at about 10:30. I've got our tickets — they're round-trip, so it's $480 each. With our student IDs it's only $240! Let's meet at the station at 8:00, in front of gate 4. Bring your ID and a jacket. Don't bring a lot of luggage!",
          bank: ["Our bus leaves on … at…", "It arrives at…", "The ticket is…", "Let's meet at…", "Bring your…", "Don't bring…"],
          checklist: [
            "I wrote departure and arrival times.",
            "I used the present simple: *leaves, arrives*.",
            "I said the price.",
            "I used at least one imperative: *Bring… / Don't…*"
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
            "I'd like a ticket to Veracruz, please.",
            "One-way or round-trip?",
            "What time does the bus leave?",
            "It leaves at ten fifteen.",
            "Which gate is it?",
            "Can I have a window seat?"
          ]
        },
        {
          type: "speak", title: "A station announcement",
          prompt: "Record three station announcements like the ones in the listening: destination, time, gate, and if the bus is delayed.",
          language: ["Attention, passengers.", "The bus to … leaves at…", "from gate…", "is delayed.", "is now boarding."],
          seconds: 45,
          checklist: ["give three announcements?", "say times clearly?", "say gate numbers?", "use *leaves*?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can buy a bus ticket.", review: "Explanation: buying a ticket; Speaking activity 1 (listen and repeat)" },
    { can: "I can ask *What time does it leave / arrive?*", review: "Explanation: asking about times" },
    { can: "I can understand announcements with times and gates.", review: "Listening: station announcements" },
    { can: "I can read a timetable and prices.", review: "Reading: Estrella Bus Lines" },
    { can: "I can use *one-way, round-trip, gate, seat*.", review: "Explanation: vocabulary; Quick check" },
    { can: "I can write a message with trip details.", review: "Writing activity 3" }
  ]
};
