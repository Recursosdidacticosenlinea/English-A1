window.UNIT = {
  slug: "have-you-got-a-pet",
  number: 9,
  title: "Have You Got a Pet?",
  level: "A1",
  minutes: 50,
  speakers: { "Mateo": "m", "Lucía": "f", "Vet": "f", "Hugo": "m", A: "m", B: "f" },
  focus: ["have got / has got", "Have you got…? Yes, I have.", "haven't got / hasn't got", "pets and animals", "plurals: fish, mice"],

  presentation: {
    scene: "🐶🐱🐠🐹",
    situation: "Lucía is in a pet shop. She wants a pet, but she lives in a small apartment. Mateo works in the shop.",
    warmup: {
      prompt: "Which animals can you name in English? Choose all.",
      options: ["dog", "cat", "fish", "bird", "rabbit", "hamster", "turtle", "horse", "snake", "parrot"],
      response: "Great! In this unit you'll learn to talk about pets and what people have got."
    },
    dialogueTitle: "At the pet shop",
    dialogue: [
      { who: "Mateo", line: "Hi! Can I help you?" },
      { who: "Lucía", line: "Yes. I want a pet, but my apartment is small. *It hasn't got* a garden." },
      { who: "Mateo", line: "*Have you got* any pets now?" },
      { who: "Lucía", line: "*No, I haven't*. But my sister *has got* two cats." },
      { who: "Mateo", line: "Well, a hamster is good for small apartments. *They've got* small cages." },
      { who: "Lucía", line: "Hmm… *Has it got* a long tail?" },
      { who: "Mateo", line: "*No, it hasn't*. It's got a very short tail. Or what about fish? *We've got* beautiful goldfish." },
      { who: "Lucía", line: "Fish are perfect! *I've got* a small table for a fish tank." }
    ]
  },

  objectives: [
    "I can name common pets and animals.",
    "I can use *have got* and *has got* to talk about possessions.",
    "I can ask *Have you got…?* and give short answers.",
    "I can describe an animal: *It's got a long tail.*"
  ],

  explanation: {
    vocabTitle: "Pets and animal parts",
    vocab: [
      { word: "dog", icon: "🐕" }, { word: "cat", icon: "🐈" }, { word: "fish", icon: "🐟" },
      { word: "bird", icon: "🐦" }, { word: "parrot", icon: "🦜" }, { word: "rabbit", icon: "🐇" },
      { word: "hamster", icon: "🐹" }, { word: "mouse – mice", icon: "🐭" }, { word: "turtle", icon: "🐢" },
      { word: "snake", icon: "🐍" }, { word: "horse", icon: "🐎" }, { word: "tail", icon: "〰️" },
      { word: "ears", icon: "👂" }, { word: "wings", icon: "🪽" }, { word: "fur", icon: "🧶" }
    ],
    grammar: [
      {
        title: "Have got / has got",
        head: ["Subject", "Affirmative", "Negative"],
        rows: [
          ["I / you / we / they", "I*'ve got* a dog.", "I *haven't got* a cat."],
          ["he / she / it", "She*'s got* two cats.", "It *hasn't got* a garden."]
        ],
        note: "*'ve got = have got* · *'s got = has got*. Here *'s* means *has*, not *is*: *She's got a cat* = she has a cat."
      },
      {
        title: "Questions and short answers",
        head: ["Question", "Yes", "No"],
        rows: [
          ["*Have you got* a pet?", "Yes, I *have*.", "No, I *haven't*."],
          ["*Has she got* a dog?", "Yes, she *has*.", "No, she *hasn't*."],
          ["*Has it got* a long tail?", "Yes, it *has*.", "No, it *hasn't*."],
          ["*How many* pets *have they got*?", "They've got three.", ""]
        ],
        note: "In short answers we don't say *got*: *Yes, I have.* — never *Yes, I have got*."
      },
      {
        title: "Irregular plurals",
        head: ["Singular", "Plural"],
        rows: [
          ["a fish", "two *fish*"],
          ["a mouse", "three *mice*"],
          ["a sheep", "ten *sheep*"],
          ["a puppy", "two *puppies*"]
        ],
        note: "*Have got* is common in British English. In American English people often say *I have a dog / Do you have a dog?* Both are correct."
      }
    ],
    watchOut: [
      ["She have got a cat.", "She has got a cat."],
      ["Have you got a pet? – Yes, I have got.", "Yes, I have."],
      ["I've got two fishes.", "I've got two fish."],
      ["He hasn't a dog.", "He hasn't got a dog."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *have, has, haven't* or *hasn't*.",
      items: [
        "My sister [[has]] got two cats.",
        "I [[haven't]] got a pet. My apartment is very small.",
        "[[Have]] you got a dog? – Yes, I have.",
        "A fish [[hasn't]] got legs.",
        "[[Has]] your brother got a bike? – No, he hasn't."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Hugo takes his pets to the vet. Listen to the conversation.",
      title: "At the vet",
      script: [
        { who: "Vet", line: "Good morning. What's your name, please?" },
        { who: "Hugo", line: "Hugo Díaz. I've got an appointment for my pets." },
        { who: "Vet", line: "OK. How many pets have you got?" },
        { who: "Hugo", line: "I've got three: a dog, a parrot and a turtle. But the turtle is at home today." },
        { who: "Vet", line: "Has your dog got a name?" },
        { who: "Hugo", line: "Yes, she has. She's Luna. She's five. She's got a problem with her ear." },
        { who: "Vet", line: "Let me see… Yes, her ear is red. And the parrot?" },
        { who: "Hugo", line: "His name's Pepe. He's fine, but he talks all day! He's got a very big vocabulary." },
        { who: "Vet", line: "Ha ha! Has he got any English words?" },
        { who: "Hugo", line: "Yes, he has. He says \"Hello!\" and \"Good morning!\"" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Hugo has got three pets.", a: true },
            { s: "The turtle is at the vet.", a: false },
            { s: "Luna is a cat.", a: false },
            { s: "Luna has got a problem with her ear.", a: true },
            { s: "Pepe the parrot can say English words.", a: true }
          ]
        },
        {
          type: "gap", title: "Complete the vet's notes",
          prompt: "Write one word or number.",
          items: [
            "Owner: Hugo [[Díaz|Diaz]]",
            "Number of pets: [[3|three]]",
            "Dog's name: [[Luna]] · Age: [[5|five]]",
            "Parrot's name: [[Pepe]]"
          ]
        }
      ]
    },

    reading: {
      intro: "Read the fact cards at the city zoo.",
      title: "Amazing animals",
      text: [
        { author: "The axolotl", body: "The axolotl is from Mexico City. It lives in the water of Xochimilco. It has got four small legs and a long tail. It hasn't got eyelids! Axolotls are in danger, so please protect them." },
        { author: "The owl", body: "Owls are birds. They've got big eyes and very good ears. They haven't got teeth. They sleep in the day and hunt at night." },
        { author: "The elephant", body: "The African elephant is very big. It's got big ears, a long trunk and two tusks. Elephants have got a great memory!" }
      ],
      activities: [
        {
          type: "sort", title: "Which animal?",
          prompt: "Sort the information.",
          bins: ["Axolotl", "Owl", "Elephant"],
          items: [
            { text: "lives in Xochimilco", bin: 0 }, { text: "four small legs", bin: 0 }, { text: "no eyelids", bin: 0 },
            { text: "big eyes", bin: 1 }, { text: "no teeth", bin: 1 }, { text: "hunts at night", bin: 1 },
            { text: "a long trunk", bin: 2 }, { text: "two tusks", bin: 2 }, { text: "a great memory", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer with *Yes, it has / No, it hasn't* or *Yes, they have / No, they haven't*.",
          items: [
            { q: "Has the axolotl got a long tail?", a: ["Yes, it has."] },
            { q: "Have owls got teeth?", a: ["No, they haven't.", "No, they have not."] },
            { q: "Has the elephant got small ears?", a: ["No, it hasn't.", "No, it has not."] },
            { q: "Have owls got good ears?", a: ["Yes, they have."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *have got*, then write about a pet.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Have you got a pet?" },
            { a: "My cat has got green eyes." },
            { a: "We haven't got a garden." },
            { a: "How many fish has she got?" },
            { a: "It's got a very long tail." }
          ]
        },
        {
          type: "rewrite", title: "Make it negative",
          prompt: "Rewrite the sentences in the negative.",
          items: [
            { q: "I've got a rabbit.", a: ["I haven't got a rabbit.", "I have not got a rabbit."] },
            { q: "She's got a big dog.", a: ["She hasn't got a big dog.", "She has not got a big dog."] },
            { q: "They've got two cats.", a: ["They haven't got two cats.", "They have not got two cats."] },
            { q: "It's got wings.", a: ["It hasn't got wings.", "It has not got wings."] }
          ]
        },
        {
          type: "write", title: "My pet (or my dream pet)",
          prompt: "Write about your pet or the pet you want. Say what animal it is, its name, age and what it looks like (use *has got*). Say what it has not got.",
          minWords: 35, maxWords: 70,
          model: "I've got a dog. His name is Max and he's three years old. He's got brown fur, big ears and a short tail. He hasn't got a house in the garden — he sleeps in my room! He's very friendly and funny. My brother has got a turtle.",
          bank: ["I've got a…", "My dream pet is a…", "His / Her name is…", "He's / She's got…", "It hasn't got…", "My … has got…"],
          checklist: [
            "I used *has got* or *'s got* to describe the animal.",
            "I wrote one sentence with *hasn't got* or *haven't got*.",
            "I said the animal's name and age.",
            "I used *his / her / its* correctly."
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
            "Have you got a pet?",
            "Yes, I have. I've got a dog.",
            "My sister has got two cats.",
            "We haven't got a garden.",
            "Has it got a long tail?",
            "No, it hasn't."
          ]
        },
        {
          type: "speak", title: "Pets in my family",
          prompt: "Record yourself talking about the pets in your family (or your friends' pets). Say who has got what, and describe one pet.",
          language: ["I've got… / I haven't got…", "My aunt has got…", "Its name is…", "It's got…", "It hasn't got…"],
          seconds: 60,
          checklist: ["use *have got / has got*?", "use a negative?", "describe one animal?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name common pets and animals.", review: "Explanation: vocabulary" },
    { can: "I can use *have got* and *has got*.", review: "Explanation: have got / has got; Quick check" },
    { can: "I can make negatives with *haven't got / hasn't got*.", review: "Writing activity 2" },
    { can: "I can ask *Have you got…?* and give short answers.", review: "Explanation: questions; Reading activity 2" },
    { can: "I can describe an animal: *It's got big ears.*", review: "Reading: amazing animals; Speaking activity 1 (listen and repeat)" },
    { can: "I can write about a pet.", review: "Writing activity 3" }
  ]
};
