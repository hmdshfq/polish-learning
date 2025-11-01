export const adjectives = [
  {
    name: "Basic Descriptive Adjectives",
    polish: "Podstawowe przymiotniki opisowe",
    difficulty: "beginner",
    level: "A1",
    icon: "📏",
    explanation:
      "Adjectives in Polish change their endings to match the gender (masculine, feminine, neuter) of the noun they describe. At the beginner level, focus on the basic Nominative case endings.",
    analogy:
      "Think of adjectives like chameleons - they change their 'color' (ending) to match the noun they're with. Masculine adjectives usually end in -y, feminine in -a, and neuter in -e.",

    commonAdjectives: [
      {
        polish: "duży",
        english: "big, large",
        category: "size",
        example: "Duży dom",
        exampleEng: "A big house",
        highlight: "Duży",
        gender: "masculine"
      },
      {
        polish: "duża",
        english: "big, large",
        category: "size",
        example: "Duża książka",
        exampleEng: "A big book",
        highlight: "Duża",
        gender: "feminine"
      },
      {
        polish: "duże",
        english: "big, large",
        category: "size",
        example: "Duże okno",
        exampleEng: "A big window",
        highlight: "Duże",
        gender: "neuter"
      },
      {
        polish: "mały",
        english: "small, little",
        category: "size",
        example: "Mały kot",
        exampleEng: "A small cat",
        highlight: "Mały",
        gender: "masculine"
      },
      {
        polish: "dobry",
        english: "good",
        category: "quality",
        example: "Dobry film",
        exampleEng: "A good movie",
        highlight: "Dobry",
        gender: "masculine"
      },
      {
        polish: "zły",
        english: "bad",
        category: "quality",
        example: "Zły dzień",
        exampleEng: "A bad day",
        highlight: "Zły",
        gender: "masculine"
      },
      {
        polish: "nowy",
        english: "new",
        category: "age",
        example: "Nowy telefon",
        exampleEng: "A new phone",
        highlight: "Nowy",
        gender: "masculine"
      },
      {
        polish: "stary",
        english: "old",
        category: "age",
        example: "Stary samochód",
        exampleEng: "An old car",
        highlight: "Stary",
        gender: "masculine"
      },
      {
        polish: "ładny",
        english: "pretty, nice",
        category: "quality",
        example: "Ładna sukienka",
        exampleEng: "A pretty dress",
        highlight: "Ładna",
        gender: "feminine"
      },
      {
        polish: "brzydki",
        english: "ugly",
        category: "quality",
        example: "Brzydki budynek",
        exampleEng: "An ugly building",
        highlight: "Brzydki",
        gender: "masculine"
      }
    ],

    rules: [
      {
        title: "Gender Agreement in Nominative",
        description: "Adjectives must match the gender of the noun. The basic endings are: -y (masculine), -a (feminine), -e (neuter)",
        examples: [
          "Masculine: duży dom, mały kot, dobry student",
          "Feminine: duża książka, mała kawa, dobra muzyka",
          "Neuter: duże okno, małe dziecko, dobre jedzenie"
        ]
      },
      {
        title: "Soft Adjectives",
        description: "Some adjectives have 'soft' endings with -i instead of -y for masculine",
        examples: [
          "Masculine: tani (cheap), drogi (expensive), łatwy→łatwi",
          "This happens after k, g, and certain other consonants"
        ]
      }
    ],

    declensionTable: {
      adjective: "duży (big)",
      translations: "big, large",
      forms: [
        {
          case: "Nominative",
          masculine: "duży",
          feminine: "duża",
          neuter: "duże",
          english: "big (subject)"
        },
        {
          case: "Accusative (inanimate)",
          masculine: "duży",
          feminine: "dużą",
          neuter: "duże",
          english: "big (object)"
        }
      ]
    },

    quiz: {
      beginner: [
        {
          question: "Which ending is correct? 'To jest ___ dom.' (This is a big house)",
          options: ["duży", "duża", "duże", "dużego"],
          correct: 0,
          explanation: "Dom (house) is masculine, so we use the masculine ending -y: duży."
        },
        {
          question: "Choose the right form: 'Mam ___ książkę.' (I have a small book)",
          options: ["mały", "mała", "małą", "małe"],
          correct: 2,
          explanation: "Książka is feminine and in Accusative case (direct object), so: małą."
        },
        {
          question: "Complete: 'To jest ___ okno.' (This is a big window)",
          options: ["duży", "duża", "duże", "dużą"],
          correct: 2,
          explanation: "Okno (window) is neuter, so we use the neuter ending -e: duże."
        },
        {
          question: "Which is correct? '___ kawa' (good coffee)",
          options: ["dobry", "dobra", "dobre", "dobrą"],
          correct: 1,
          explanation: "Kawa (coffee) is feminine in Nominative, so: dobra."
        },
        {
          question: "Select the right adjective: '___ kot śpi' (A small cat is sleeping)",
          options: ["mały", "mała", "małe", "małego"],
          correct: 0,
          explanation: "Kot (cat) is masculine, so: mały."
        },
        {
          question: "Complete: 'Widzę ___ psa' (I see a big dog)",
          options: ["duży", "duża", "duże", "dużego"],
          correct: 3,
          explanation: "Pies is masculine animate in Accusative, which uses Genitive form: dużego."
        },
        {
          question: "Which form? 'To ___ dziecko' (This is a small child)",
          options: ["mały", "mała", "małe", "mali"],
          correct: 2,
          explanation: "Dziecko (child) is neuter, so: małe."
        },
        {
          question: "Choose correctly: '___ pogoda' (nice weather)",
          options: ["ładny", "ładna", "ładne", "ładnego"],
          correct: 1,
          explanation: "Pogoda (weather) is feminine, so: ładna."
        }
      ],
      intermediate: [
        {
          question: "Complete: 'Kupuję ___ samochód' (I'm buying a new car)",
          options: ["nowy", "nową", "nowe", "nowego"],
          correct: 0,
          explanation: "Samochód is masculine inanimate in Accusative - same as Nominative: nowy."
        },
        {
          question: "Which is correct? 'Czytam ___ gazetę' (I'm reading an old newspaper)",
          options: ["stary", "stara", "starą", "stare"],
          correct: 2,
          explanation: "Gazeta is feminine in Accusative, so: starą."
        },
        {
          question: "Select: '___ telefon nie działa' (The old phone doesn't work)",
          options: ["stary", "stara", "stare", "starego"],
          correct: 0,
          explanation: "Telefon is masculine in Nominative: stary."
        },
        {
          question: "Complete: 'Mam ___ mieszkanie' (I have a new apartment)",
          options: ["nowy", "nową", "nowe", "nowego"],
          correct: 2,
          explanation: "Mieszkanie is neuter in Accusative (same as Nominative): nowe."
        },
        {
          question: "Which form? 'To jest ___ sukienka' (This is a pretty dress)",
          options: ["ładny", "ładna", "ładne", "ładną"],
          correct: 1,
          explanation: "Sukienka is feminine in Nominative: ładna."
        },
        {
          question: "Choose: 'Widzę ___ film' (I see a good movie)",
          options: ["dobry", "dobra", "dobre", "dobrego"],
          correct: 0,
          explanation: "Film is masculine inanimate in Accusative - same as Nominative: dobry."
        },
        {
          question: "Complete: '___ muzyka gra' (Nice music is playing)",
          options: ["ładny", "ładna", "ładne", "ładną"],
          correct: 1,
          explanation: "Muzyka is feminine in Nominative: ładna."
        },
        {
          question: "Select: 'To ___ pióro' (This is an old pen)",
          options: ["stary", "stara", "stare", "starego"],
          correct: 2,
          explanation: "Pióro is neuter in Nominative: stare."
        }
      ],
      advanced: [
        {
          question: "Complete: 'Lubię ___ i ___ kawę' (I like strong and hot coffee)",
          options: ["mocną i gorącą", "mocna i gorąca", "mocny i gorący", "mocne i gorące"],
          correct: 0,
          explanation: "Kawa is feminine in Accusative with two adjectives: mocną i gorącą."
        },
        {
          question: "Which is correct? 'Mieszkam w ___ domu' (I live in an old house)",
          options: ["stary", "starym", "stara", "stare"],
          correct: 1,
          explanation: "With 'w' (in), we use Locative case. Masculine Locative: starym."
        },
        {
          question: "Complete: 'Mój ___ brat' (My younger brother)",
          options: ["młodszy", "młodsza", "młodsze", "młody"],
          correct: 0,
          explanation: "Młodszy is the comparative form (younger). Brat is masculine: młodszy."
        },
        {
          question: "Select: 'Widzę ___ kota' (I see a small cat)",
          options: ["mały", "małego", "mała", "małe"],
          correct: 1,
          explanation: "Kot is masculine animate - Accusative = Genitive: małego kota."
        },
        {
          question: "Which form? '___ dzieci bawią się' (Small children are playing - plural)",
          options: ["małe", "małi", "mały", "mała"],
          correct: 0,
          explanation: "Dzieci (children) is plural neuter: małe dzieci."
        },
        {
          question: "Complete: 'To są ___ ludzie' (These are nice people)",
          options: ["mili", "miły", "miła", "miłe"],
          correct: 0,
          explanation: "Ludzie (people) is masculine personal plural: mili (soft ending -i)."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          sentence: "___ dom stoi na górze.",
          correct: "Duży",
          options: ["Duży", "Duża", "Duże", "Dużego"],
          english: "A big house stands on the hill.",
          hint: "Dom is masculine, Nominative"
        },
        {
          sentence: "Mam ___ psa.",
          correct: "małego",
          options: ["mały", "małego", "mała", "małe"],
          english: "I have a small dog.",
          hint: "Pies is masculine animate, Accusative"
        },
        {
          sentence: "To jest ___ książka.",
          correct: "dobra",
          options: ["dobry", "dobra", "dobre", "dobrą"],
          english: "This is a good book.",
          hint: "Książka is feminine, Nominative"
        },
        {
          sentence: "Widzę ___ okno.",
          correct: "duże",
          options: ["duży", "duża", "duże", "dużego"],
          english: "I see a big window.",
          hint: "Okno is neuter, Accusative = Nominative"
        },
        {
          sentence: "___ dziecko śpi.",
          correct: "Małe",
          options: ["Mały", "Mała", "Małe", "Małego"],
          english: "A small child is sleeping.",
          hint: "Dziecko is neuter, Nominative"
        }
      ],
      intermediate: [
        {
          sentence: "Kupuję ___ samochód.",
          correct: "nowy",
          options: ["nowy", "nową", "nowe", "nowego"],
          english: "I'm buying a new car.",
          hint: "Samochód is masculine inanimate, Accusative"
        },
        {
          sentence: "To jest ___ muzyka.",
          correct: "ładna",
          options: ["ładny", "ładna", "ładne", "ładną"],
          english: "This is nice music.",
          hint: "Muzyka is feminine, Nominative"
        },
        {
          sentence: "Mam ___ mieszkanie.",
          correct: "nowe",
          options: ["nowy", "nową", "nowe", "nowego"],
          english: "I have a new apartment.",
          hint: "Mieszkanie is neuter, Accusative"
        },
        {
          sentence: "___ pogoda jest dziś.",
          correct: "Ładna",
          options: ["Ładny", "Ładna", "Ładne", "Ładną"],
          english: "The weather is nice today.",
          hint: "Pogoda is feminine, Nominative"
        },
        {
          sentence: "Czytam ___ gazetę.",
          correct: "starą",
          options: ["stary", "stara", "starą", "stare"],
          english: "I'm reading an old newspaper.",
          hint: "Gazeta is feminine, Accusative"
        }
      ],
      advanced: [
        {
          sentence: "Widzę ___ kota i ___ psa.",
          correct: "małego, dużego",
          options: ["małego, dużego", "mały, duży", "mała, duża", "małe, duże"],
          english: "I see a small cat and a big dog.",
          hint: "Both are masculine animate, Accusative"
        },
        {
          sentence: "Lubię ___ kawę.",
          correct: "mocną",
          options: ["mocny", "mocna", "mocną", "mocne"],
          english: "I like strong coffee.",
          hint: "Kawa is feminine, Accusative"
        },
        {
          sentence: "___ ludzie mieszkają tutaj.",
          correct: "Mili",
          options: ["Mili", "Miły", "Miła", "Miłe"],
          english: "Nice people live here.",
          hint: "Ludzie is masculine personal plural"
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the Polish adjectives with their English meanings:",
          pairs: [
            { polish: "duży", english: "big", category: "size" },
            { polish: "mały", english: "small", category: "size" },
            { polish: "dobry", english: "good", category: "quality" },
            { polish: "zły", english: "bad", category: "quality" },
            { polish: "nowy", english: "new", category: "age" },
            { polish: "stary", english: "old", category: "age" }
          ],
          distractors: ["tall", "short", "fast", "slow"]
        }
      ],
      intermediate: [
        {
          instruction: "Match adjectives with their opposite pairs:",
          pairs: [
            { polish: "duży", english: "mały", category: "opposites" },
            { polish: "dobry", english: "zły", category: "opposites" },
            { polish: "nowy", english: "stary", category: "opposites" },
            { polish: "ładny", english: "brzydki", category: "opposites" }
          ],
          distractors: ["szybki", "wolny", "drogi", "tani"]
        }
      ]
    },

    declensionPractice: {
      beginner: [
        {
          adjective: "duży",
          noun: "dom",
          case: "Nominative",
          gender: "masculine",
          correct: "duży",
          options: ["duży", "duża", "duże", "dużego"],
          sentence: "___ dom (big house)",
          english: "big house"
        },
        {
          adjective: "mały",
          noun: "książka",
          case: "Nominative",
          gender: "feminine",
          correct: "mała",
          options: ["mały", "mała", "małe", "małego"],
          sentence: "___ książka (small book)",
          english: "small book"
        },
        {
          adjective: "dobry",
          noun: "okno",
          case: "Nominative",
          gender: "neuter",
          correct: "dobre",
          options: ["dobry", "dobra", "dobre", "dobrego"],
          sentence: "___ okno (good window)",
          english: "good window"
        }
      ],
      intermediate: [
        {
          adjective: "nowy",
          noun: "samochód",
          case: "Accusative",
          gender: "masculine inanimate",
          correct: "nowy",
          options: ["nowy", "nową", "nowe", "nowego"],
          sentence: "Kupuję ___ samochód (I'm buying a new car)",
          english: "new car"
        },
        {
          adjective: "stary",
          noun: "gazeta",
          case: "Accusative",
          gender: "feminine",
          correct: "starą",
          options: ["stary", "stara", "starą", "stare"],
          sentence: "Czytam ___ gazetę (I'm reading an old newspaper)",
          english: "old newspaper"
        }
      ]
    }
  }
];
