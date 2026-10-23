window.UNIT = {
  slug: "this-is-my-family",
  number: 6,
  title: "This Is My Family",
  level: "A1",
  minutes: 50,
  speakers: { "Valeria": "f", "Nico": "m", "Grandma": "f", "Paco": "m", A: "f", B: "m" },
  focus: ["family members", "possessive adjectives: my, your, his, her, our, their", "possessive 's: Ana's brother", "Who's this? This is my…", "How many brothers and sisters…?"],

  presentation: {
    scene: "👨‍👩‍👧‍👦📸🏡❤️",
    situation: "Valeria shows Nico some photos from her cousin's wedding on her phone.",
    warmup: {
      prompt: "Which family words do you know? Choose all.",
      options: ["mother", "father", "brother", "sister", "grandmother", "grandfather", "aunt", "uncle", "cousin", "wife"],
      response: "Very good! In this unit you'll learn to talk about your family and say who things belong to."
    },
    dialogueTitle: "Wedding photos",
    dialogue: [
      { who: "Nico", line: "Nice photos! *Who's this*?" },
      { who: "Valeria", line: "*This is my* cousin Lupita. It's *her* wedding. And this is *her husband*, Andrés." },
      { who: "Nico", line: "And who are they?" },
      { who: "Valeria", line: "They're *my parents*. *My mom's* name is Teresa and *my dad's* name is Raúl." },
      { who: "Nico", line: "Is this *your brother*?" },
      { who: "Valeria", line: "Yes, that's Iker. He's twelve. And that's *his* dog, Chispa!" },
      { who: "Nico", line: "Ha! And the lady in the blue dress?" },
      { who: "Valeria", line: "That's *my grandma*. She's *Lupita's grandma* too. *Our* grandma is eighty!" }
    ]
  },

  objectives: [
    "I can name the people in my family.",
    "I can use *my, your, his, her, our, their*.",
    "I can use *'s* to say who someone or something belongs to.",
    "I can describe my family with a photo."
  ],

  explanation: {
    vocabTitle: "Family",
    vocab: [
      { word: "mother / mom", icon: "👩" }, { word: "father / dad", icon: "👨" }, { word: "parents", icon: "👫" },
      { word: "sister", icon: "👧" }, { word: "brother", icon: "👦" }, { word: "grandmother / grandma", icon: "👵" },
      { word: "grandfather / grandpa", icon: "👴" }, { word: "aunt", icon: "👩‍🦰" }, { word: "uncle", icon: "🧔" },
      { word: "cousin", icon: "🧒" }, { word: "wife", icon: "👰" }, { word: "husband", icon: "🤵" },
      { word: "son", icon: "👶" }, { word: "daughter", icon: "👧" }, { word: "only child", icon: "🧍" }
    ],
    grammar: [
      {
        title: "Possessive adjectives",
        head: ["Subject", "Possessive", "Example"],
        rows: [
          ["I", "*my*", "*My* sister is a nurse."],
          ["you", "*your*", "Is this *your* brother?"],
          ["he", "*his*", "Iker and *his* dog."],
          ["she", "*her*", "Lupita and *her* husband."],
          ["it", "*its*", "The dog and *its* ball."],
          ["we", "*our*", "*Our* grandma is eighty."],
          ["they", "*their*", "My parents and *their* car."]
        ],
        note: "*His* = of a man or boy. *Her* = of a woman or girl. In Spanish *su* can be both!"
      },
      {
        title: "Possessive 's",
        head: ["Structure", "Example"],
        rows: [
          ["person + *'s* + thing/person", "*Valeria's* brother is twelve."],
          ["", "*My mom's* name is Teresa."],
          ["plural with -s + *'*", "My *parents'* house is big."],
          ["Who's = Who is", "*Who's* this? – It's my uncle."]
        ],
        note: "*'s* can mean *is* (*She's my aunt*) or possession (*Ana's aunt*). Look at the next word!"
      },
      {
        title: "Talking about your family",
        head: ["Question", "Answer"],
        rows: [
          ["*How many brothers and sisters* do you have?", "I have two brothers and one sister. / I'm an *only child*."],
          ["*What's your mom's name?*", "Her name is Teresa."],
          ["*How old is your brother?*", "He's twelve."]
        ]
      }
    ],
    watchOut: [
      ["She is the sister of Ana.", "She is Ana's sister."],
      ["My brother and her dog. (the dog of my brother)", "My brother and his dog."],
      ["They're my fathers. (mom and dad)", "They're my parents."],
      ["Is this you brother?", "Is this your brother?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *my, your, his, her, our* or *their*.",
      items: [
        "Iker is twelve. [[His]] dog is Chispa.",
        "Lupita is married. [[Her]] husband is Andrés.",
        "We have a grandma. [[Our]] grandma is eighty.",
        "My parents have a car. [[Their]] car is red.",
        "Hi, Nico! Is this [[your]] phone?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Paco talks to his grandma on a video call. She asks about the people in a family photo. Listen and complete.",
      title: "Who's in the photo?",
      script: [
        { who: "Grandma", line: "Paco, who's the tall man in the photo?" },
        { who: "Paco", line: "That's Uncle Beto, Grandma. He's my mom's brother." },
        { who: "Grandma", line: "Oh, of course! And the woman next to him?" },
        { who: "Paco", line: "That's his wife, Aunt Rosa. She's a teacher." },
        { who: "Grandma", line: "And the two girls? Are they their daughters?" },
        { who: "Paco", line: "Yes. They're my cousins, Mia and Ximena. Mia is ten and Ximena is six." },
        { who: "Grandma", line: "And who's the boy with the guitar?" },
        { who: "Paco", line: "That's me, Grandma! It's my guitar. It's a present from my dad." }
      ],
      activities: [
        {
          type: "match", title: "Who is who?",
          prompt: "Match the person with the description.",
          pairs: [
            ["Uncle Beto", "Paco's mom's brother"],
            ["Aunt Rosa", "Beto's wife"],
            ["Mia", "Paco's ten-year-old cousin"],
            ["Ximena", "Mia's little sister"],
            ["the boy with the guitar", "Paco"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Uncle Beto is short.", a: false },
            { s: "Aunt Rosa is a teacher.", a: true },
            { s: "Mia and Ximena are Paco's sisters.", a: false },
            { s: "The guitar is a present from Paco's dad.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read Renata's post on the class blog.",
      title: "My family",
      text: [
        { author: "Renata", body: "Hi! I'm Renata and this is my family. We live in Tehuacán. My dad's name is Alfonso. He's a farmer. My mom's name is Gloria. She's a nurse. I have one brother. His name is Emilio and he's twenty-three. He's married. His wife's name is Kenia and their baby is Sofi. Sofi is my niece! She's only one year old." },
        { author: "Renata", body: "My grandparents live with us. My grandpa is seventy-five and my grandma is seventy. Their house is our house! We also have a cat. Its name is Michi. I love my big family." }
      ],
      activities: [
        {
          type: "gap", title: "Renata's family",
          prompt: "Complete the sentences.",
          items: [
            "Alfonso is Renata's [[dad|father]].",
            "Gloria is Alfonso's [[wife]].",
            "Emilio is Renata's [[brother]].",
            "Kenia is Emilio's [[wife]].",
            "Sofi is Emilio and Kenia's [[daughter|baby]].",
            "Michi is the family's [[cat]]."
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Renata's mom is a farmer.", a: false },
            { s: "Emilio is married.", a: true },
            { s: "Sofi is Renata's sister.", a: false },
            { s: "Renata's grandparents live in her house.", a: true },
            { s: "The family has a dog.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice possessives, then write about your family.",
      activities: [
        {
          type: "rewrite", title: "Use 's",
          prompt: "Rewrite with *'s*. Example: *the brother of Ana* → *Ana's brother*.",
          items: [
            { q: "the car of my dad", a: ["my dad's car"] },
            { q: "the name of Paco", a: ["Paco's name"] },
            { q: "the wife of my uncle", a: ["my uncle's wife"] },
            { q: "the dog of Iker", a: ["Iker's dog"] },
            { q: "the house of my grandma", a: ["my grandma's house"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Who's this in the photo?" },
            { a: "This is my cousin Lupita." },
            { a: "Her husband's name is Andrés." },
            { a: "How many brothers do you have?" },
            { a: "Their house is very big." }
          ]
        },
        {
          type: "write", title: "My family post",
          prompt: "Write about your family for the class blog. Say who is in your family, their names, ages and jobs. Use *his, her, their* and *'s*.",
          minWords: 40, maxWords: 80,
          model: "This is my family. My mom's name is Laura. She's forty-five and she's a cook. My dad's name is Juan. His job is in a bank. I have one sister. Her name is Dani and she's sixteen. My grandparents live in Zacatlán. Their house is small but very beautiful.",
          bank: ["This is my family.", "My mom's name is…", "His / Her name is…", "He's / She's … years old.", "I have … brothers / sisters.", "I'm an only child.", "Their house is…"],
          checklist: [
            "I wrote about at least **four** people.",
            "I used *his* for men and *her* for women.",
            "I used *'s* at least once (*my dad's name*).",
            "I said names, ages or jobs."
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
            "This is my family.",
            "Who's this in the photo?",
            "My mom's name is Teresa.",
            "Her husband is a teacher.",
            "I have two brothers and one sister.",
            "Our grandma is eighty years old."
          ]
        },
        {
          type: "speak", title: "My family tree",
          prompt: "Record yourself describing your family tree: grandparents, parents, brothers and sisters, aunts, uncles or cousins. Talk about at least five people.",
          language: ["My grandparents are…", "My mom's / dad's name is…", "I have … brothers / sisters.", "My uncle's wife is…", "Their children are my cousins."],
          seconds: 75,
          checklist: ["talk about at least five people?", "use possessive adjectives?", "use *'s*?", "speak clearly for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name the people in a family.", review: "Explanation: vocabulary" },
    { can: "I can use *my, your, his, her, our, their*.", review: "Explanation: possessive adjectives; Quick check" },
    { can: "I can use *'s* for possession.", review: "Explanation: possessive 's; Writing activity 1" },
    { can: "I can ask *Who's this?* and answer about a photo.", review: "Presentation dialogue; Speaking activity 1 (listen and repeat)" },
    { can: "I can understand someone describing their family.", review: "Listening and Reading" },
    { can: "I can write a short text about my family.", review: "Writing activity 3" }
  ]
};
