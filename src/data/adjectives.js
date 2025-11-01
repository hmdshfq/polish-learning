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
  },

  // A2 LEVEL CONTENT - Building on A1 foundation

  {
    name: "Full Adjective Declension",
    polish: "Pełna deklinacja przymiotników",
    difficulty: "intermediate",
    level: "A2",
    icon: "📊",
    explanation:
      "Building on what you learned in A1 (Nominative and Accusative), adjectives in Polish must change their endings for ALL 7 cases, just like nouns. Each case has specific endings for masculine, feminine, and neuter genders. Learning these patterns will allow you to describe things in any grammatical context.",
    analogy:
      "Think of adjective declension like a complete wardrobe - you already have your everyday clothes (Nominative) and your work outfit (Accusative). Now you're adding formal wear (Genitive), casual clothes (Dative), tools (Instrumental), travel gear (Locative), and party attire (Vocative). The adjective 'dresses up' differently depending on the situation (case).",

    declensionTable: {
      adjective: "dobry (good)",
      translations: "good, kind, fine",
      forms: [
        {
          case: "Nominative",
          question: "jaki? jaka? jakie?",
          masculine: "dobry",
          feminine: "dobra",
          neuter: "dobre",
          english: "good (subject)",
          example: "dobry film / dobra książka / dobre jedzenie"
        },
        {
          case: "Genitive",
          question: "jakiego? jakiej? jakiego?",
          masculine: "dobrego",
          feminine: "dobrej",
          neuter: "dobrego",
          english: "of good, good (possessive)",
          example: "dobrego filmu / dobrej książki / dobrego jedzenia"
        },
        {
          case: "Dative",
          question: "jakiemu? jakiej? jakiemu?",
          masculine: "dobremu",
          feminine: "dobrej",
          neuter: "dobremu",
          english: "to good",
          example: "dobremu filmowi / dobrej książce / dobremu jedzeniu"
        },
        {
          case: "Accusative",
          question: "jakiego/jaki? jaką? jakie?",
          masculine: "dobrego/dobry",
          feminine: "dobrą",
          neuter: "dobre",
          english: "good (object)",
          example: "dobry film / dobrą książkę / dobre jedzenie"
        },
        {
          case: "Instrumental",
          question: "jakim? jaką? jakim?",
          masculine: "dobrym",
          feminine: "dobrą",
          neuter: "dobrym",
          english: "with good, by good",
          example: "dobrym filmem / dobrą książką / dobrym jedzeniem"
        },
        {
          case: "Locative",
          question: "o jakim? o jakiej? o jakim?",
          masculine: "dobrym",
          feminine: "dobrej",
          neuter: "dobrym",
          english: "about good, in good",
          example: "o dobrym filmie / o dobrej książce / o dobrym jedzeniu"
        },
        {
          case: "Vocative",
          question: "—",
          masculine: "dobry",
          feminine: "dobra",
          neuter: "dobre",
          english: "good! (addressing)",
          example: "Dobry człowieku! (Good man!)"
        }
      ]
    },

    patternNotes: [
      {
        title: "Masculine & Neuter Pattern Similarity",
        description: "Notice that masculine and neuter share the same endings in Genitive, Dative, Instrumental, and Locative cases. Only Nominative and Accusative differ.",
        examples: [
          "Genitive: dobrego domu (house) = dobrego okna (window)",
          "Locative: w dobrym domu = w dobrym oknie"
        ]
      },
      {
        title: "Feminine Consistency",
        description: "Feminine adjectives follow their own pattern but are very consistent. Note that Genitive, Dative, and Locative all end in -ej.",
        examples: [
          "Genitive: dobrej książki",
          "Dative: dobrej książce",
          "Locative: o dobrej książce"
        ]
      },
      {
        title: "Hard vs Soft Adjectives",
        description: "Hard adjectives (ending in -y) follow the pattern above. Soft adjectives (ending in -i after k, g, or soft consonants) have -i instead of -y in masculine Nominative, but otherwise follow the same pattern.",
        examples: [
          "Hard: nowy (new) → nowego, nowemu, nowym...",
          "Soft: drogi (expensive) → drogiego, drogiemu, drogim..."
        ]
      }
    ],

    quiz: {
      beginner: [
        {
          question: "Complete: 'Nie mam ___ czasu' (I don't have good time) - Genitive",
          options: ["dobry", "dobrego", "dobra", "dobrą"],
          correct: 1,
          explanation: "After 'nie mam' (I don't have), we use Genitive case. Czas (time) is masculine: dobrego."
        },
        {
          question: "Select: 'Myślę o ___ filmie' (I'm thinking about a good movie) - Locative",
          options: ["dobry", "dobrego", "dobrym", "dobra"],
          correct: 2,
          explanation: "After 'o' (about), we use Locative case. Film is masculine: dobrym."
        },
        {
          question: "Which is correct? 'Idę do ___ restauracji' (I'm going to a good restaurant) - Genitive",
          options: ["dobra", "dobrej", "dobrą", "dobre"],
          correct: 1,
          explanation: "After 'do' (to), we use Genitive case. Restauracja is feminine: dobrej."
        },
        {
          question: "Complete: 'Jestem ___ studentem' (I am a good student) - Instrumental",
          options: ["dobry", "dobrego", "dobrym", "dobra"],
          correct: 2,
          explanation: "After 'jestem' (I am) with a noun, we use Instrumental case. Student is masculine: dobrym."
        },
        {
          question: "Choose: 'Szukam ___ hotelu' (I'm looking for a good hotel) - Genitive",
          options: ["dobry", "dobrego", "dobrym", "dobra"],
          correct: 1,
          explanation: "'Szukam' (I'm looking for) takes Genitive case. Hotel is masculine: dobrego."
        },
        {
          question: "Select: 'W ___ mieście' (In a big city) - Locative",
          options: ["duży", "dużego", "dużym", "duża"],
          correct: 2,
          explanation: "After 'w' (in), we use Locative case. Miasto (city) is neuter: dużym."
        },
        {
          question: "Which form? 'Dziękuję ___ panu' (Thank you, kind sir) - Dative",
          options: ["miły", "miłego", "miłemu", "miłym"],
          correct: 2,
          explanation: "'Dziękuję' (thank you) takes Dative case. Pan (sir) is masculine: miłemu."
        },
        {
          question: "Complete: 'Bez ___ pomocy' (Without good help) - Genitive",
          options: ["dobra", "dobrej", "dobrą", "dobre"],
          correct: 1,
          explanation: "'Bez' (without) takes Genitive case. Pomoc (help) is feminine: dobrej."
        },
        {
          question: "Choose: 'Interesuję się ___ muzyką' (I'm interested in good music) - Instrumental",
          options: ["dobra", "dobrej", "dobrą", "dobre"],
          correct: 2,
          explanation: "'Interesuję się' takes Instrumental case. Muzyka is feminine: dobrą."
        },
        {
          question: "Select: 'Dla ___ dziecka' (For a small child) - Genitive",
          options: ["małe", "małego", "małemu", "małym"],
          correct: 1,
          explanation: "'Dla' (for) takes Genitive case. Dziecko (child) is neuter: małego."
        }
      ],
      intermediate: [
        {
          question: "Complete: 'Rozmawiałem z ___ nauczycielką' (I talked with a nice teacher) - Instrumental",
          options: ["miła", "miłej", "miłą", "miłe"],
          correct: 2,
          explanation: "'Z' (with) takes Instrumental case when describing interaction. Nauczycielka is feminine: miłą."
        },
        {
          question: "Which is correct? 'Mieszkam naprzeciwko ___ parku' (I live opposite a big park) - Genitive",
          options: ["duży", "dużego", "dużym", "duża"],
          correct: 1,
          explanation: "'Naprzeciwko' (opposite) takes Genitive case. Park is masculine: dużego."
        },
        {
          question: "Select: 'Stoję przy ___ oknie' (I'm standing by the big window) - Locative",
          options: ["duże", "dużego", "dużemu", "dużym"],
          correct: 3,
          explanation: "'Przy' (by, near) takes Locative case. Okno (window) is neuter: dużym."
        },
        {
          question: "Choose: 'Wracam od ___ kolegi' (I'm coming back from a good friend) - Genitive",
          options: ["dobry", "dobrego", "dobremu", "dobrym"],
          correct: 1,
          explanation: "'Od' (from) takes Genitive case. Kolega (friend) is masculine: dobrego."
        },
        {
          question: "Complete: 'Daję kwiaty ___ dziewczynie' (I'm giving flowers to a nice girl) - Dative",
          options: ["miła", "miłej", "miłą", "miłe"],
          correct: 1,
          explanation: "'Daję' (I'm giving) takes Dative for the recipient. Dziewczyna is feminine: miłej."
        },
        {
          question: "Which form? 'Piszę ___ długopisem' (I write with a new pen) - Instrumental",
          options: ["nowy", "nowego", "nowemu", "nowym"],
          correct: 3,
          explanation: "Writing 'with' something uses Instrumental case. Długopis (pen) is masculine: nowym."
        },
        {
          question: "Select: 'Oprócz ___ pogody' (Apart from nice weather) - Genitive",
          options: ["ładna", "ładnej", "ładną", "ładne"],
          correct: 1,
          explanation: "'Oprócz' (apart from) takes Genitive case. Pogoda is feminine: ładnej."
        },
        {
          question: "Choose: 'Jadę ___ pociągiem' (I'm traveling by fast train) - Instrumental",
          options: ["szybki", "szybkiego", "szybkiemu", "szybkim"],
          correct: 3,
          explanation: "Traveling 'by' (means of transport) uses Instrumental case. Pociąg is masculine: szybkim."
        },
        {
          question: "Complete: 'Opowiadam o ___ podróży' (I'm talking about an interesting trip) - Locative",
          options: ["ciekawa", "ciekawej", "ciekawą", "ciekawe"],
          correct: 1,
          explanation: "'O' (about) takes Locative case. Podróż (trip) is feminine: ciekawej."
        },
        {
          question: "Which is correct? 'Przed ___ egzaminem' (Before a difficult exam) - Instrumental",
          options: ["trudny", "trudnego", "trudnemu", "trudnym"],
          correct: 3,
          explanation: "'Przed' (before) takes Instrumental case. Egzamin is masculine: trudnym."
        }
      ],
      advanced: [
        {
          question: "Complete: 'Dzięki ___ i ___ pogodzie spacerowaliśmy długo' (Thanks to warm and sunny weather, we walked for a long time)",
          options: ["ciepłej i słonecznej", "ciepła i słoneczna", "ciepłą i słoneczną", "ciepłe i słoneczne"],
          correct: 0,
          explanation: "'Dzięki' (thanks to) takes Dative case. Pogoda is feminine, both adjectives need Dative: ciepłej i słonecznej."
        },
        {
          question: "Select: 'Wzdłuż ___ wybrzeża' (Along the rocky coast) - Genitive",
          options: ["skalisty", "skalistego", "skalistemu", "skalistym"],
          correct: 1,
          explanation: "'Wzdłuż' (along) takes Genitive case. Wybrzeże (coast) is neuter: skalistego."
        },
        {
          question: "Which is correct? 'Zachwycam się ___ architekturą' (I admire medieval architecture) - Instrumental",
          options: ["średniowieczna", "średniowiecznej", "średniowieczną", "średniowieczne"],
          correct: 2,
          explanation: "'Zachwycam się' (I admire) takes Instrumental case. Architektura is feminine: średniowieczną."
        },
        {
          question: "Choose: 'Podczas ___ spotkania' (During an important meeting) - Genitive",
          options: ["ważne", "ważnego", "ważnemu", "ważnym"],
          correct: 1,
          explanation: "'Podczas' (during) takes Genitive case. Spotkanie is neuter: ważnego."
        },
        {
          question: "Complete: 'Przeciwko ___ decyzji' (Against the controversial decision) - Dative",
          options: ["kontrowersyjna", "kontrowersyjnej", "kontrowersyjną", "kontrowersyjne"],
          correct: 1,
          explanation: "'Przeciwko' (against) takes Dative case. Decyzja is feminine: kontrowersyjnej."
        },
        {
          question: "Select: 'Z powodu ___ sytuacji' (Because of the difficult situation) - Genitive",
          options: ["trudna", "trudnej", "trudną", "trudne"],
          correct: 1,
          explanation: "'Z powodu' (because of) takes Genitive case. Sytuacja is feminine: trudnej."
        },
        {
          question: "Which form? 'Pod ___ drzewem' (Under the old tree) - Instrumental",
          options: ["stare", "starego", "staremu", "starym"],
          correct: 3,
          explanation: "'Pod' (under) with location takes Instrumental case. Drzewo is neuter: starym."
        },
        {
          question: "Choose: 'W kierunku ___ gór' (Toward the high mountains) - Genitive, plural",
          options: ["wysokie", "wysokich", "wysokim", "wysokimi"],
          correct: 1,
          explanation: "'W kierunku' (toward) takes Genitive case. Góry (mountains) is plural: wysokich."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          sentence: "Nie mam ___ samochodu.",
          correct: "nowego",
          options: ["nowy", "nowego", "nowemu", "nowym"],
          english: "I don't have a new car.",
          hint: "After 'nie mam' (I don't have), use Genitive. Samochód is masculine."
        },
        {
          sentence: "Myślę o ___ książce.",
          correct: "dobrej",
          options: ["dobra", "dobrej", "dobrą", "dobre"],
          english: "I'm thinking about a good book.",
          hint: "After 'o' (about), use Locative. Książka is feminine."
        },
        {
          sentence: "Idę do ___ sklepu.",
          correct: "nowego",
          options: ["nowy", "nowego", "nowemu", "nowym"],
          english: "I'm going to a new store.",
          hint: "After 'do' (to), use Genitive. Sklep is masculine."
        },
        {
          sentence: "Jestem ___ nauczycielem.",
          correct: "dobrym",
          options: ["dobry", "dobrego", "dobremu", "dobrym"],
          english: "I am a good teacher.",
          hint: "After 'jestem' (I am) with a noun, use Instrumental. Nauczyciel is masculine."
        },
        {
          sentence: "Dziękuję ___ pani.",
          correct: "miłej",
          options: ["miła", "miłej", "miłą", "miłe"],
          english: "Thank you, kind lady.",
          hint: "'Dziękuję' takes Dative. Pani (lady) is feminine."
        },
        {
          sentence: "W ___ domu mieszkam.",
          correct: "małym",
          options: ["mały", "małego", "małemu", "małym"],
          english: "I live in a small house.",
          hint: "After 'w' (in) for location, use Locative. Dom is masculine."
        },
        {
          sentence: "Bez ___ kawy nie mogę.",
          correct: "dobrej",
          options: ["dobra", "dobrej", "dobrą", "dobre"],
          english: "I can't (function) without good coffee.",
          hint: "'Bez' (without) takes Genitive. Kawa is feminine."
        },
        {
          sentence: "Piszę ___ piórem.",
          correct: "niebieskim",
          options: ["niebieski", "niebieskiego", "niebieskim", "niebiesk iemu"],
          english: "I write with a blue pen.",
          hint: "Writing 'with' uses Instrumental. Pióro is neuter."
        }
      ],
      intermediate: [
        {
          sentence: "Rozmawiałem z ___ kolegą.",
          correct: "starym",
          options: ["stary", "starego", "staremu", "starym"],
          english: "I talked with an old friend.",
          hint: "'Z' (with) takes Instrumental. Kolega is masculine."
        },
        {
          sentence: "Stoję naprzeciwko ___ budynku.",
          correct: "wysokiego",
          options: ["wysoki", "wysokiego", "wysokiemu", "wysokim"],
          english: "I'm standing opposite a tall building.",
          hint: "'Naprzeciwko' takes Genitive. Budynek is masculine."
        },
        {
          sentence: "Daję prezent ___ dziewczynie.",
          correct: "młodej",
          options: ["młoda", "młodej", "młodą", "młode"],
          english: "I'm giving a gift to a young girl.",
          hint: "'Daję' (giving) takes Dative for recipient. Dziewczyna is feminine."
        },
        {
          sentence: "Jadę ___ autobusem.",
          correct: "nowym",
          options: ["nowy", "nowego", "nowemu", "nowym"],
          english: "I'm traveling by new bus.",
          hint: "Means of transport uses Instrumental. Autobus is masculine."
        },
        {
          sentence: "Oprócz ___ wina mamy też piwo.",
          correct: "czerwonego",
          options: ["czerwone", "czerwonego", "czerwonemu", "czerwonym"],
          english: "Apart from red wine, we also have beer.",
          hint: "'Oprócz' takes Genitive. Wino is neuter."
        },
        {
          sentence: "Marzę o ___ wakacjach.",
          correct: "długich",
          options: ["długie", "długich", "długim", "długimi"],
          english: "I dream about long holidays.",
          hint: "'O' (about) takes Locative. Wakacje (holidays) is plural."
        },
        {
          sentence: "Wracam od ___ lekarza.",
          correct: "nowego",
          options: ["nowy", "nowego", "nowemu", "nowym"],
          english: "I'm coming back from a new doctor.",
          hint: "'Od' (from) takes Genitive. Lekarz is masculine."
        },
        {
          sentence: "Interesuję się ___ historią.",
          correct: "polską",
          options: ["polska", "polskiej", "polską", "polskie"],
          english: "I'm interested in Polish history.",
          hint: "'Interesuję się' takes Instrumental. Historia is feminine."
        }
      ],
      advanced: [
        {
          sentence: "Zachwycam się ___ i ___ architekturą Krakowa.",
          correct: "starą i piękną",
          options: ["stara i piękna", "starej i pięknej", "starą i piękną", "stare i piękne"],
          english: "I admire the old and beautiful architecture of Krakow.",
          hint: "'Zachwycam się' takes Instrumental. Architektura is feminine, both adjectives needed."
        },
        {
          sentence: "Podczas ___ spotkania rozmawialiśmy o biznesie.",
          correct: "wczorajszego",
          options: ["wczorajsze", "wczorajszego", "wczorajszemu", "wczorajszym"],
          english: "During yesterday's meeting, we talked about business.",
          hint: "'Podczas' takes Genitive. Spotkanie is neuter."
        },
        {
          sentence: "Dzięki ___ pogodzie udało się zorganizować piknik.",
          correct: "wspaniałej",
          options: ["wspaniała", "wspaniałej", "wspaniałą", "wspaniałe"],
          english: "Thanks to wonderful weather, we managed to organize a picnic.",
          hint: "'Dzięki' (thanks to) takes Dative. Pogoda is feminine: wspaniałej."
        },
        {
          sentence: "Z powodu ___ korków spóźniłem się.",
          correct: "ogromnych",
          options: ["ogromne", "ogromnych", "ogromnymi", "ogromnym"],
          english: "Because of huge traffic jams, I was late.",
          hint: "'Z powodu' takes Genitive. Korki (traffic jams) is plural."
        },
        {
          sentence: "Pod ___ mostem płynie rzeka.",
          correct: "starym",
          options: ["stary", "starego", "staremu", "starym"],
          english: "A river flows under the old bridge.",
          hint: "'Pod' (under) with location takes Instrumental. Most is masculine."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the case with the adjective ending pattern (masculine):",
          pairs: [
            { polish: "Nominative", english: "-y/-i", category: "case" },
            { polish: "Genitive", english: "-ego", category: "case" },
            { polish: "Dative", english: "-emu", category: "case" },
            { polish: "Instrumental", english: "-ym/-im", category: "case" },
            { polish: "Locative", english: "-ym/-im", category: "case" }
          ],
          distractors: ["-ą", "-ej", "-owie"]
        }
      ],
      intermediate: [
        {
          instruction: "Match the preposition with the case it requires:",
          pairs: [
            { polish: "do (to)", english: "Genitive", category: "preposition" },
            { polish: "z (with)", english: "Instrumental", category: "preposition" },
            { polish: "o (about)", english: "Locative", category: "preposition" },
            { polish: "dla (for)", english: "Genitive", category: "preposition" }
          ],
          distractors: ["Nominative", "Vocative"]
        }
      ]
    },

    declensionPractice: {
      beginner: [
        {
          adjective: "nowy",
          noun: "dom",
          case: "Genitive",
          gender: "masculine",
          correct: "nowego",
          options: ["nowy", "nowego", "nowemu", "nowym"],
          sentence: "Nie mam ___ domu (I don't have a new house)",
          english: "new house (Genitive)"
        },
        {
          adjective: "dobry",
          noun: "książka",
          case: "Locative",
          gender: "feminine",
          correct: "dobrej",
          options: ["dobra", "dobrej", "dobrą", "dobre"],
          sentence: "Mówię o ___ książce (I'm talking about a good book)",
          english: "good book (Locative)"
        },
        {
          adjective: "mały",
          noun: "okno",
          case: "Instrumental",
          gender: "neuter",
          correct: "małym",
          options: ["małe", "małego", "małemu", "małym"],
          sentence: "Patrzę ___ oknem (I'm looking through a small window)",
          english: "small window (Instrumental)"
        }
      ],
      intermediate: [
        {
          adjective: "stary",
          noun: "przyjaciel",
          case: "Dative",
          gender: "masculine",
          correct: "staremu",
          options: ["stary", "starego", "staremu", "starym"],
          sentence: "Pomagam ___ przyjacielowi (I'm helping an old friend)",
          english: "old friend (Dative)"
        },
        {
          adjective: "piękny",
          noun: "kobieta",
          case: "Genitive",
          gender: "feminine",
          correct: "pięknej",
          options: ["piękna", "pięknej", "piękną", "piękne"],
          sentence: "Szukam ___ kobiety (I'm looking for a beautiful woman)",
          english: "beautiful woman (Genitive)"
        },
        {
          adjective: "drogi",
          noun: "pióro",
          case: "Instrumental",
          gender: "neuter",
          correct: "drogim",
          options: ["drogie", "drogiego", "drogiemu", "drogim"],
          sentence: "Piszę ___ piórem (I write with an expensive pen)",
          english: "expensive pen (Instrumental)"
        }
      ]
    }
  }
,
{
  name: "Comparatives and Superlatives",
  polish: "Stopniowanie przymiotników",
  difficulty: "intermediate",
  level: "A2",
  icon: "📊",
  explanation: "Polish adjectives have three degrees: positive (base form), comparative (more/less), and superlative (most/least). The comparative is formed by adding -szy or -ejszy to the stem, and the superlative adds naj- to the comparative form. Some common adjectives have irregular comparative forms that must be memorized.",
  analogy: "Think of it like English 'tall → taller → tallest', but in Polish you add endings to the adjective instead of using separate words like 'more' and 'most' (though Polish also has analytical forms with 'bardziej' for some adjectives).",

  formationRules: [
    {
      type: "Regular -szy",
      rule: "For most adjectives ending in consonants, add -szy (m), -sza (f), -sze (n)",
      examples: [
        { positive: "bogaty (rich)", comparative: "bogatszy", superlative: "najbogatszy" },
        { positive: "wysoki (tall)", comparative: "wyższy", superlative: "najwyższy" },
        { positive: "tani (cheap)", comparative: "tańszy", superlative: "najtańszy" }
      ]
    },
    {
      type: "Regular -ejszy",
      rule: "For adjectives ending in -ki, -gi, or certain consonant clusters, add -ejszy",
      examples: [
        { positive: "drogi (expensive)", comparative: "droższy", superlative: "najdroższy" },
        { positive: "blisko (close)", comparative: "bliższy", superlative: "najbliższy" },
        { positive: "miękki (soft)", comparative: "miękkszy", superlative: "najmiękkkszy" }
      ]
    },
    {
      type: "Analytical Forms",
      rule: "Use 'bardziej' (more) and 'najbardziej' (most) with longer adjectives or those that don't decline well",
      examples: [
        { positive: "interesujący (interesting)", comparative: "bardziej interesujący", superlative: "najbardziej interesujący" },
        { positive: "skomplikowany (complicated)", comparative: "bardziej skomplikowany", superlative: "najbardziej skomplikowany" }
      ]
    }
  ],

  irregularForms: [
    { positive: "dobry (good)", comparative: "lepszy", superlative: "najlepszy", note: "Completely irregular - must memorize" },
    { positive: "zły (bad)", comparative: "gorszy", superlative: "najgorszy", note: "Completely irregular" },
    { positive: "duży (big)", comparative: "większy", superlative: "największy", note: "From 'wielki' (great)" },
    { positive: "mały (small)", comparative: "mniejszy", superlative: "najmniejszy", note: "Stem changes to mniejsz-" },
    { positive: "długi (long)", comparative: "dłuższy", superlative: "najdłuższy", note: "Vowel change ó→u" },
    { positive: "krótki (short)", comparative: "krótszy", superlative: "najkrótszy", note: "Regular but common" },
    { positive: "szeroki (wide)", comparative: "szerszy", superlative: "najszerszy", note: "Drops -ok-" },
    { positive: "wąski (narrow)", comparative: "węższy", superlative: "najwęższy", note: "ą→ę vowel change" }
  ],

  comparisonStructures: [
    {
      structure: "niż + Nominative",
      usage: "Used after comparatives to mean 'than'",
      examples: [
        { polish: "Jestem wyższy niż mój brat.", english: "I am taller than my brother." },
        { polish: "Ta książka jest bardziej interesująca niż tamta.", english: "This book is more interesting than that one." }
      ]
    },
    {
      structure: "od + Genitive",
      usage: "Alternative to 'niż', means 'than' (from)",
      examples: [
        { polish: "Jestem wyższy od mojego brata.", english: "I am taller than my brother." },
        { polish: "Ten film jest gorszy od poprzedniego.", english: "This movie is worse than the previous one." }
      ]
    },
    {
      structure: "im... tym...",
      usage: "The more... the more...",
      examples: [
        { polish: "Im więcej, tym lepiej.", english: "The more, the better." },
        { polish: "Im szybciej, tym lepiej.", english: "The faster, the better." }
      ]
    }
  ],

  commonMistakes: [
    {
      mistake: "Using 'więcej' with adjectives",
      correct: "bardziej interesujący (more interesting)",
      incorrect: "*więcej interesujący",
      note: "'Więcej' is only for quantities (more apples), not qualities"
    },
    {
      mistake: "Forgetting naj- prefix for superlatives",
      correct: "najlepszy (the best)",
      incorrect: "*lepszy when meaning 'the best'",
      note: "The superlative ALWAYS needs naj-"
    },
    {
      mistake: "Using wrong case after 'od'",
      correct: "wyższy od brata (Genitive)",
      incorrect: "*wyższy od brat (Nominative)",
      note: "'Od' always takes Genitive case"
    }
  ],

  quiz: {
    beginner: [
      {
        question: "What is the comparative form of 'duży' (big)?",
        options: ["duższy", "większy", "bardziej duży", "najduży"],
        correct: 1,
        explanation: "'Duży' has an irregular comparative 'większy' (from 'wielki'). Don't add -szy to duży!"
      },
      {
        question: "How do you say 'the best' in Polish?",
        options: ["lepszy", "najlepszy", "bardziej dobry", "dobry"],
        correct: 1,
        explanation: "Superlatives always use 'naj-' + comparative form: najlepszy"
      },
      {
        question: "Complete: Ten dom jest ___ niż tamten. (This house is bigger than that one)",
        options: ["duży", "większy", "największy", "bardziej duży"],
        correct: 1,
        explanation: "Comparative 'większy' is needed when comparing two things with 'niż'"
      },
      {
        question: "What does 'gorszy' mean?",
        options: ["better", "worse", "the worst", "bad"],
        correct: 1,
        explanation: "'Gorszy' is the comparative of 'zły' (bad), meaning 'worse'"
      },
      {
        question: "Complete: To jest ___ książka w bibliotece. (This is the best book in the library)",
        options: ["dobra", "lepsza", "najlepsza", "bardziej dobra"],
        correct: 2,
        explanation: "Superlative 'najlepsza' (feminine form) means 'the best'"
      },
      {
        question: "Which word means 'taller'?",
        options: ["wysoki", "wyższy", "najwyższy", "wysokszy"],
        correct: 1,
        explanation: "'Wyższy' is the comparative of 'wysoki' (tall)"
      },
      {
        question: "Complete: Moja siostra jest ___ ode mnie. (My sister is younger than me)",
        options: ["młoda", "młodsza", "najmłodsza", "bardziej młoda"],
        correct: 1,
        explanation: "'Młodsza' (younger) is the comparative form, and 'od' takes Genitive 'mnie'"
      },
      {
        question: "What is the superlative of 'mały' (small)?",
        options: ["mniejszy", "najmniejszy", "najmalszy", "małszy"],
        correct: 1,
        explanation: "'Najmniejszy' is the superlative (smallest). Note the irregular stem 'mniej-'"
      },
      {
        question: "How do you say 'more interesting' in Polish?",
        options: ["interesującszy", "bardziej interesujący", "najinteresujący", "więcej interesujący"],
        correct: 1,
        explanation: "Longer adjectives use analytical form: 'bardziej interesujący'"
      },
      {
        question: "Complete: Im ___, tym lepiej. (The more, the better)",
        options: ["dużo", "więcej", "większy", "najwięcej"],
        correct: 1,
        explanation: "'Im więcej, tym lepiej' is a fixed expression meaning 'the more, the better'"
      }
    ],
    intermediate: [
      {
        question: "Które zdanie jest poprawne? (Which sentence is correct?)",
        options: [
          "Ten film jest gorszy od tamtego.",
          "Ten film jest gorszy niż tamten.",
          "Ten film jest gorszy jak tamten.",
          "All are correct"
        ],
        correct: 3,
        explanation: "Both 'od + Genitive' and 'niż + Nominative' are correct for comparisons. 'Jak' is not used for comparatives in Polish."
      },
      {
        question: "Complete: Warszawa jest ___ miastem w Polsce. (Warsaw is the largest city in Poland)",
        options: ["duże", "większe", "największe", "największym"],
        correct: 3,
        explanation: "After 'jest' with Instrumental case: 'największym miastem' (superlative + Instrumental)"
      },
      {
        question: "What's the correct comparative of 'drogi' (expensive)?",
        options: ["drogszy", "droższy", "bardziej drogi", "droższszy"],
        correct: 1,
        explanation: "'Drogi' → 'droższy' (g changes to ż before -szy)"
      },
      {
        question: "Complete: Ta kawa jest ___ niż herbata. (This coffee is better than tea)",
        options: ["dobra", "lepsza", "najlepsza", "bardziej dobra"],
        correct: 1,
        explanation: "'Lepsza' (feminine) is the irregular comparative of 'dobra/dobry'"
      },
      {
        question: "How do you say 'the shortest day'?",
        options: ["krótki dzień", "krótszy dzień", "najkrótszy dzień", "najbardziej krótki dzień"],
        correct: 2,
        explanation: "'Najkrótszy dzień' uses the superlative form"
      },
      {
        question: "Complete: Matematyka jest ___ trudna ___ fizyka. (Math is more difficult than physics)",
        options: ["bardziej... niż", "więcej... od", "bardziej... od", "Both A and C"],
        correct: 3,
        explanation: "'Bardziej trudna niż' or 'bardziej trudna od' are both correct"
      },
      {
        question: "What does 'im szybciej, tym lepiej' mean?",
        options: ["very fast is better", "the fastest, the best", "the faster, the better", "faster than better"],
        correct: 2,
        explanation: "'Im... tym...' structure means 'the... the...' (the faster, the better)"
      },
      {
        question: "Complete: Mój pokój jest ___ od twojego. (My room is smaller than yours)",
        options: ["mały", "mniejszy", "najmniejszy", "malszy"],
        correct: 1,
        explanation: "'Mniejszy' is the irregular comparative of 'mały', used with 'od + Genitive'"
      },
      {
        question: "Which is the correct superlative form for 'long street' (feminine)?",
        options: ["długa ulica", "dłuższa ulica", "najdłuższa ulica", "najbardziej długa ulica"],
        correct: 2,
        explanation: "'Najdłuższa' is the superlative form (feminine to match 'ulica')"
      },
      {
        question: "Complete: To zadanie jest ___ skomplikowane. (This task is more complicated)",
        options: ["więcej", "bardziej", "większy", "najbardziej"],
        correct: 1,
        explanation: "Long adjectives use 'bardziej' for comparative: 'bardziej skomplikowane'"
      }
    ],
    advanced: [
      {
        question: "Complete with the correct case: Jesteś mądrzejszy ___ wyglądasz. (You're smarter than you look)",
        options: ["niż", "od tego, jak", "jak", "niż to, jak"],
        correct: 1,
        explanation: "When comparing clauses, use 'od tego, jak' or restructure with 'niż'"
      },
      {
        question: "Which sentence correctly uses the superlative in Genitive case?",
        options: [
          "Szukam najlepszego nauczyciela.",
          "Szukam najlepszy nauczyciel.",
          "Szukam najbardziej dobrego nauczyciela.",
          "Szukam od najlepszego nauczyciela."
        ],
        correct: 0,
        explanation: "'Szukam' takes Genitive, so 'najlepszego nauczyciela' (superlative declines like adjectives)"
      },
      {
        question: "Complete: Z każdym dniem robi się ___. (It's getting colder every day)",
        options: ["zimno", "zimniej", "zimniejszy", "najzimniej"],
        correct: 1,
        explanation: "'Zimniej' is the adverbial comparative form (colder)"
      },
      {
        question: "What's the meaning of 'Co najwyżej pięć osób'?",
        options: ["The tallest five people", "At most five people", "The highest five people", "More than five people"],
        correct: 1,
        explanation: "'Co najwyżej' is an idiom meaning 'at most' (literally: what highest)"
      },
      {
        question: "Complete the idiomatic expression: Lepszy wróbel w garści niż ___.",
        options: ["gołąb na dachu", "najlepszy gołąb", "większy ptak", "wróbel w lesie"],
        correct: 0,
        explanation: "Polish proverb: 'Better a sparrow in hand than a pigeon on the roof' (= a bird in the hand...)"
      },
      {
        question: "Which comparative form is INCORRECT?",
        options: ["szerszy (wider)", "węższy (narrower)", "grubszy (thicker)", "cięższszy (heavier)"],
        correct: 3,
        explanation: "'Cięższy' (heavier) only has two 'sz', not three. The others are correct."
      },
      {
        question: "Complete: Kupiłem to w ___ cenie. (I bought this at a better price)",
        options: ["lepsza", "lepszej", "lepszy", "lepsze"],
        correct: 1,
        explanation: "'W cenie' (Locative case), so 'w lepszej cenie' (feminine Locative)"
      },
      {
        question: "What does 'o wiele lepszy' mean compared to just 'lepszy'?",
        options: ["the very best", "much better", "a little better", "better and better"],
        correct: 1,
        explanation: "'O wiele' intensifies comparatives: 'o wiele lepszy' = much better"
      }
    ]
  },

  fillBlanks: {
    beginner: [
      {
        sentence: "Mój brat jest ___ ode mnie.",
        correct: "wyższy",
        options: ["wysoki", "wyższy", "najwyższy", "bardziej wysoki"],
        english: "My brother is taller than me.",
        hint: "You need the comparative form of 'wysoki'"
      },
      {
        sentence: "To jest ___ dzień w roku.",
        correct: "najkrótszy",
        options: ["krótki", "krótszy", "najkrótszy", "bardziej krótki"],
        english: "This is the shortest day of the year.",
        hint: "Superlative form with naj-"
      },
      {
        sentence: "Ten samochód jest ___ niż tamten.",
        correct: "droższy",
        options: ["drogi", "droższy", "najdroższy", "bardziej drogi"],
        english: "This car is more expensive than that one.",
        hint: "Comparative of 'drogi' (g→ż change)"
      },
      {
        sentence: "Ona jest ___ uczennicą w klasie.",
        correct: "najlepszą",
        options: ["dobra", "lepsza", "najlepsza", "najlepszą"],
        english: "She is the best student in the class.",
        hint: "Superlative in Instrumental case after 'jest'"
      },
      {
        sentence: "Zima jest ___ niż lato.",
        correct: "zimniejsza",
        options: ["zimna", "zimniejsza", "najzimniejsza", "bardziej zimna"],
        english: "Winter is colder than summer.",
        hint: "Comparative form of 'zimny'"
      },
      {
        sentence: "To pytanie jest ___ interesujące.",
        correct: "bardziej",
        options: ["więcej", "bardziej", "największy", "lepiej"],
        english: "This question is more interesting.",
        hint: "Use analytical form with long adjectives"
      },
      {
        sentence: "Mam ___ książkę.",
        correct: "lepszą",
        options: ["dobra", "lepsza", "lepszą", "najlepszą"],
        english: "I have a better book.",
        hint: "Comparative in Accusative case (feminine)"
      },
      {
        sentence: "Dziś jest ___ pogoda niż wczoraj.",
        correct: "lepsza",
        options: ["dobra", "lepsza", "najlepsza", "gorsza"],
        english: "Today the weather is better than yesterday.",
        hint: "Irregular comparative of 'dobry'"
      }
    ],
    intermediate: [
      {
        sentence: "Im ___, tym lepiej.",
        correct: "więcej",
        options: ["dużo", "więcej", "najwięcej", "większy"],
        english: "The more, the better.",
        hint: "Fixed expression with 'im... tym...'"
      },
      {
        sentence: "Mieszkam w ___ mieszkaniu niż ty.",
        correct: "większym",
        options: ["duże", "duży", "większe", "większym"],
        english: "I live in a bigger apartment than you.",
        hint: "Locative case after 'w' (neuter)"
      },
      {
        sentence: "To zadanie jest ___ od poprzedniego.",
        correct: "trudniejsze",
        options: ["trudne", "trudniejsze", "najtrudniejsze", "bardziej trudne"],
        english: "This task is more difficult than the previous one.",
        hint: "Comparative with 'od + Genitive'"
      },
      {
        sentence: "Potrzebuję ___ czasu na naukę.",
        correct: "więcej",
        options: ["dużo", "więcej", "bardziej", "największy"],
        english: "I need more time for studying.",
        hint: "'Więcej' is used for quantities (more time)"
      },
      {
        sentence: "Ona mówi po polsku ___ niż ja.",
        correct: "lepiej",
        options: ["dobrze", "lepiej", "najlepiej", "bardziej dobrze"],
        english: "She speaks Polish better than me.",
        hint: "Adverbial comparative form"
      },
      {
        sentence: "To był ___ film, jaki widziałem.",
        correct: "najgorszy",
        options: ["zły", "gorszy", "najgorszy", "bardziej zły"],
        english: "It was the worst movie I've seen.",
        hint: "Superlative of 'zły'"
      },
      {
        sentence: "Szukam ___ rozwiązania.",
        correct: "lepszego",
        options: ["dobry", "dobrego", "lepszy", "lepszego"],
        english: "I'm looking for a better solution.",
        hint: "Genitive case after 'szukam' (neuter)"
      },
      {
        sentence: "Ten most jest ___ w Europie.",
        correct: "najdłuższy",
        options: ["długi", "dłuższy", "najdłuższy", "najbardziej długi"],
        english: "This bridge is the longest in Europe.",
        hint: "Superlative form of 'długi'"
      }
    ],
    advanced: [
      {
        sentence: "Ceny są coraz ___.",
        correct: "wyższe",
        options: ["wysoki", "wyższe", "wyżej", "najwyższe"],
        english: "Prices are getting higher and higher.",
        hint: "'Coraz + comparative' = more and more"
      },
      {
        sentence: "Z ___ pomocy byłbym wdzięczny.",
        correct: "jakiejkolwiek",
        options: ["każda", "jakakolwiek", "jakiejkolwiek", "lepszej"],
        english: "I would be grateful for any help at all.",
        hint: "Genitive after 'z' - requires declined form"
      },
      {
        sentence: "To zadanie jest o wiele ___ niż myślałem.",
        correct: "trudniejsze",
        options: ["trudne", "trudniejsze", "bardziej trudne", "najtrudniejsze"],
        english: "This task is much more difficult than I thought.",
        hint: "'O wiele' intensifies comparatives"
      },
      {
        sentence: "Pracuję w ___ firmie w mieście.",
        correct: "największej",
        options: ["duża", "duży", "największa", "największej"],
        english: "I work in the largest company in the city.",
        hint: "Locative case after 'w' (feminine)"
      },
      {
        sentence: "Nie ma nic ___ niż zdrowie.",
        correct: "ważniejszego",
        options: ["ważny", "ważniejszy", "ważniejszego", "najważniejszy"],
        english: "There is nothing more important than health.",
        hint: "Genitive after 'nic' (neuter)"
      }
    ]
  },

  matchPairs: {
    beginner: [
      {
        instruction: "Match the positive adjective with its comparative form:",
        pairs: [
          { left: "dobry (good)", right: "lepszy" },
          { left: "zły (bad)", right: "gorszy" },
          { left: "duży (big)", right: "większy" },
          { left: "mały (small)", right: "mniejszy" },
          { left: "długi (long)", right: "dłuższy" },
          { left: "krótki (short)", right: "krótszy" },
          { left: "tani (cheap)", right: "tańszy" },
          { left: "drogi (expensive)", right: "droższy" }
        ],
        distractors: ["wysoki", "młodszy", "starszy", "cieplejszy"]
      }
    ],
    intermediate: [
      {
        instruction: "Match the Polish comparative phrase with its English meaning:",
        pairs: [
          { left: "bardziej interesujący", right: "more interesting" },
          { left: "o wiele lepszy", right: "much better" },
          { left: "coraz więcej", right: "more and more" },
          { left: "im szybciej, tym lepiej", right: "the faster, the better" },
          { left: "nic lepszego", right: "nothing better" },
          { left: "wyższy od", right: "taller than (+ Gen)" },
          { left: "najważniejszy", right: "the most important" }
        ],
        distractors: ["less than", "very good", "as much as", "too many"]
      }
    ]
  }
}
,
{
  name: "Adjective-Noun Agreement in Context",
  polish: "Zgodność przymiotnika z rzeczownikiem",
  difficulty: "intermediate",
  level: "A2",
  icon: "🤝",
  explanation: "In Polish, adjectives must agree with the nouns they modify in gender (masculine/feminine/neuter), number (singular/plural), and case. The plural system has a special distinction: masculine personal plural (for groups of men or mixed gender people) uses different endings than non-masculine personal plural (for women, animals, things). Understanding these agreement patterns is crucial for natural Polish.",
  analogy: "Think of adjectives as chameleons that change their form to match their noun's 'identity' (gender, number, case). Just like in English we say 'this book' vs 'these books', Polish adjectives change much more extensively to match their nouns in all grammatical categories.",

  genderAgreement: {
    singular: [
      {
        gender: "Masculine",
        pattern: "Adjectives typically end in -y/-i in Nominative",
        examples: [
          { polish: "duży dom", english: "big house", note: "Hard stem: -y" },
          { polish: "dobry chłopiec", english: "good boy", note: "Hard stem: -y" },
          { polish: "drogi prezent", english: "expensive gift", note: "Soft stem: -i" }
        ]
      },
      {
        gender: "Feminine",
        pattern: "Adjectives typically end in -a in Nominative",
        examples: [
          { polish: "duża książka", english: "big book", note: "Regular -a" },
          { polish: "dobra kawa", english: "good coffee", note: "Regular -a" },
          { polish: "droga sukienka", english: "expensive dress", note: "Regular -a" }
        ]
      },
      {
        gender: "Neuter",
        pattern: "Adjectives typically end in -e in Nominative",
        examples: [
          { polish: "duże okno", english: "big window", note: "Regular -e" },
          { polish: "dobre dziecko", english: "good child", note: "Regular -e" },
          { polish: "drogie mieszkanie", english: "expensive apartment", note: "Regular -e" }
        ]
      }
    ],
    plural: [
      {
        type: "Masculine Personal",
        definition: "Groups of men or mixed-gender groups of people",
        nominativeEnding: "-i/-y",
        examples: [
          { polish: "mili studenci", english: "nice students (men or mixed)", note: "Soft stem: -i" },
          { polish: "dobrzy nauczyciele", english: "good teachers (men or mixed)", note: "Hard stem: -y" },
          { polish: "wysocy mężczyźni", english: "tall men", note: "Soft stem: -i" }
        ]
      },
      {
        type: "Non-Masculine Personal",
        definition: "Women, children, animals, things - anything except masculine personal",
        nominativeEnding: "-e",
        examples: [
          { polish: "mile studentki", english: "nice students (women)", note: "Same as neuter singular" },
          { polish: "dobre dzieci", english: "good children", note: "Neuter plural" },
          { polish: "duże domy", english: "big houses", note: "Things" },
          { polish: "wysokie drzewa", english: "tall trees", note: "Things" }
        ]
      }
    ]
  },

  caseAgreement: [
    {
      case: "Nominative",
      usage: "Subject of sentence",
      examples: [
        { polish: "Nowy nauczyciel jest sympatyczny.", english: "The new teacher (m) is nice.", breakdown: "nowy (m.Nom.sg)" },
        { polish: "Nowa nauczycielka jest sympatyczna.", english: "The new teacher (f) is nice.", breakdown: "nowa (f.Nom.sg)" },
        { polish: "Nowi uczniowie są mili.", english: "The new students (m.pers) are nice.", breakdown: "nowi (m.pers.Nom.pl)" },
        { polish: "Nowe książki są ciekawe.", english: "The new books are interesting.", breakdown: "nowe (non-m.pers.Nom.pl)" }
      ]
    },
    {
      case: "Genitive",
      usage: "Possession, negation, after numbers, many prepositions",
      examples: [
        { polish: "Nie mam dobrego pomysłu.", english: "I don't have a good idea.", breakdown: "dobrego (m.Gen.sg)" },
        { polish: "Szukam nowej pracy.", english: "I'm looking for a new job.", breakdown: "nowej (f.Gen.sg)" },
        { polish: "To jest pokój starszego brata.", english: "This is the older brother's room.", breakdown: "starszego (m.Gen.sg)" },
        { polish: "Brakuje mi młodszych kolegów.", english: "I miss my younger colleagues.", breakdown: "młodszych (m.pers.Gen.pl)" }
      ]
    },
    {
      case: "Dative",
      usage: "Indirect object, certain verbs and expressions",
      examples: [
        { polish: "Dałem prezent małemu dziecku.", english: "I gave a gift to the small child.", breakdown: "małemu (n.Dat.sg)" },
        { polish: "Pomogłem starszej pani.", english: "I helped the elderly lady.", breakdown: "starszej (f.Dat.sg)" },
        { polish: "Przyglądamy się nowym studentom.", english: "We're looking at the new students.", breakdown: "nowym (m.pers.Dat.pl)" }
      ]
    },
    {
      case: "Accusative",
      usage: "Direct object",
      examples: [
        { polish: "Widzę wysokiego mężczyznę.", english: "I see a tall man.", breakdown: "wysokiego (m.anim.Acc.sg)" },
        { polish: "Kupuję nową książkę.", english: "I'm buying a new book.", breakdown: "nową (f.Acc.sg)" },
        { polish: "Mamy duże okno.", english: "We have a big window.", breakdown: "duże (n.Acc.sg = Nom.sg)" },
        { polish: "Lubię starych przyjaciół.", english: "I like old friends.", breakdown: "starych (m.pers.Acc.pl = Gen.pl)" }
      ]
    },
    {
      case: "Instrumental",
      usage: "Means/instrument, after 'być', with certain prepositions",
      examples: [
        { polish: "Jestem dobrym nauczycielem.", english: "I am a good teacher.", breakdown: "dobrym (m.Ins.sg)" },
        { polish: "Ona jest młodą lekarką.", english: "She is a young doctor.", breakdown: "młodą (f.Ins.sg)" },
        { polish: "Interesuję się nowymi technologiami.", english: "I'm interested in new technologies.", breakdown: "nowymi (non-m.pers.Ins.pl)" }
      ]
    },
    {
      case: "Locative",
      usage: "Location, after w/na/o/po/przy",
      examples: [
        { polish: "Mieszkam w starym domu.", english: "I live in an old house.", breakdown: "starym (m.Loc.sg)" },
        { polish: "Myślę o nowej pracy.", english: "I'm thinking about a new job.", breakdown: "nowej (f.Loc.sg)" },
        { polish: "Rozmawiamy o trudnych problemach.", english: "We're talking about difficult problems.", breakdown: "trudnych (non-m.pers.Loc.pl)" }
      ]
    },
    {
      case: "Vocative",
      usage: "Direct address",
      examples: [
        { polish: "Drogi przyjacielu!", english: "Dear friend!", breakdown: "drogi (m.Voc.sg)" },
        { polish: "Kochana mamo!", english: "Dear mom!", breakdown: "kochana (f.Voc.sg)" }
      ]
    }
  ],

  multipleAdjectives: [
    {
      rule: "When multiple adjectives modify one noun, ALL must agree in gender, number, and case",
      examples: [
        {
          polish: "To jest duży, stary, drogi dom.",
          english: "This is a big, old, expensive house.",
          breakdown: "All three adjectives: duży/stary/drogi = m.Nom.sg to match 'dom'"
        },
        {
          polish: "Kupiłam nową, czerwoną, elegancką sukienkę.",
          english: "I bought a new, red, elegant dress.",
          breakdown: "All three: nową/czerwoną/elegancką = f.Acc.sg to match 'sukienkę'"
        },
        {
          polish: "Mieszkam w małym, cichym, spokojnym mieście.",
          english: "I live in a small, quiet, peaceful town.",
          breakdown: "All three: małym/cichym/spokojnym = n.Loc.sg after 'w' to match 'mieście'"
        }
      ]
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing masculine personal plural with other plurals",
      incorrect: "*dobre studenci (should be: dobrzy studenci)",
      correct: "dobrzy studenci (good students - men/mixed)",
      note: "Groups of men or mixed-gender people use -i/-y endings, not -e"
    },
    {
      mistake: "Using nominative form instead of agreeing with case",
      incorrect: "*Mieszkam w nowy dom (should be: w nowym domu)",
      correct: "w nowym domu (in a new house - Locative)",
      note: "Adjectives must match the case of their noun"
    },
    {
      mistake: "Forgetting animate accusative = genitive for masculine",
      incorrect: "*Widzę młody student (should be: młodego studenta)",
      correct: "młodego studenta (young student - Acc = Gen for animate masculine)",
      note: "Animate masculine accusative looks like genitive, not nominative"
    },
    {
      mistake: "Wrong gender agreement with borrowed nouns",
      incorrect: "*dobre wifi (should be: dobre wifi or dobry wifi)",
      correct: "dobre wifi (n) OR dobry wifi (m)",
      note: "Borrowed words can have variable gender - check dictionaries"
    },
    {
      mistake: "Using soft ending with hard stem consonants",
      incorrect: "*dobri mężczyźni (should be: dobrzy mężczyźni)",
      correct: "dobrzy mężczyźni (good men)",
      note: "Hard stems (b,p,m,w,f) use -y in masc.pers.pl, not -i"
    }
  ],

  practicePatterns: [
    {
      pattern: "Adjective + Noun (Nominative)",
      drill: "Practice basic agreement",
      examples: [
        "mały pies (small dog - m)",
        "mała kotka (small cat - f)",
        "małe dziecko (small child - n)",
        "mali chłopcy (small boys - m.pers.pl)",
        "małe dzieci (small children - non-m.pers.pl)"
      ]
    },
    {
      pattern: "Preposition + Adjective + Noun",
      drill: "Practice case agreement with prepositions",
      examples: [
        "do nowego sklepu (to the new store - Gen)",
        "w starym domu (in the old house - Loc)",
        "z dobrym przyjacielem (with a good friend - Ins)",
        "o ciekawej książce (about an interesting book - Loc)",
        "bez młodszego brata (without the younger brother - Gen)"
      ]
    }
  ],

  quiz: {
    beginner: [
      {
        question: "Complete: To jest ___ dom. (This is a new house)",
        options: ["nowy", "nowa", "nowe", "nowi"],
        correct: 0,
        explanation: "'Dom' is masculine, so the adjective takes the masculine form 'nowy'"
      },
      {
        question: "Complete: Mam ___ książkę. (I have an interesting book)",
        options: ["ciekawy", "ciekawa", "ciekawą", "ciekawe"],
        correct: 2,
        explanation: "'Książkę' is feminine Accusative, so adjective is 'ciekawą' (f.Acc)"
      },
      {
        question: "Complete: To są ___ studenci. (These are good students - men)",
        options: ["dobre", "dobry", "dobrzy", "dobra"],
        correct: 2,
        explanation: "Masculine personal plural uses 'dobrzy' (hard stem + -y)"
      },
      {
        question: "Complete: Widzę ___ dziecko. (I see a small child)",
        options: ["mały", "mała", "małe", "mali"],
        correct: 2,
        explanation: "'Dziecko' is neuter, Accusative = Nominative, so 'małe'"
      },
      {
        question: "Complete: To są ___ studentki. (These are good students - women)",
        options: ["dobre", "dobrzy", "dobra", "dobrych"],
        correct: 0,
        explanation: "Feminine plural uses non-masculine personal ending 'dobre'"
      },
      {
        question: "Complete: Mieszkam w ___ mieszkaniu. (I live in a big apartment)",
        options: ["duży", "duże", "dużym", "duża"],
        correct: 2,
        explanation: "'W' takes Locative case, neuter: 'dużym mieszkaniu'"
      },
      {
        question: "Complete: Ona jest ___ nauczycielką. (She is a good teacher)",
        options: ["dobry", "dobra", "dobrą", "dobre"],
        correct: 1,
        explanation: "After 'jest', but here Nominative is used: 'dobra nauczycielka'"
      },
      {
        question: "Complete: Lubię ___ koty. (I like small cats)",
        options: ["mały", "mała", "małe", "mali"],
        correct: 2,
        explanation: "Non-masculine personal plural (animals): 'małe'"
      },
      {
        question: "Complete: To jest ___ okno. (This is a large window)",
        options: ["duży", "duża", "duże", "duzi"],
        correct: 2,
        explanation: "'Okno' is neuter singular: 'duże'"
      },
      {
        question: "Which is the correct masculine personal plural form of 'młody'?",
        options: ["młode", "młodzi", "młoda", "młody"],
        correct: 1,
        explanation: "Masculine personal plural: 'młodzi' (soft stem uses -i)"
      }
    ],
    intermediate: [
      {
        question: "Complete: Nie mam ___ pomysłu. (I don't have a good idea)",
        options: ["dobry", "dobrego", "dobrym", "dobre"],
        correct: 1,
        explanation: "Genitive case (negation): masculine 'dobrego pomysłu'"
      },
      {
        question: "Complete: Rozmawiałem z ___ nauczycielami. (I spoke with young teachers - men)",
        options: ["młody", "młodych", "młodymi", "młodzi"],
        correct: 2,
        explanation: "'Z' takes Instrumental: masculine personal plural 'młodymi'"
      },
      {
        question: "Complete: Kupiłem nową, ___, drogą książkę. (I bought a new, interesting, expensive book)",
        options: ["ciekawa", "ciekawą", "ciekawe", "ciekawej"],
        correct: 1,
        explanation: "All adjectives must be Accusative feminine: 'ciekawą' matches 'nową' and 'drogą'"
      },
      {
        question: "Complete: Widzę ___ mężczyzn. (I see tall men)",
        options: ["wysocy", "wysokie", "wysokich", "wysokim"],
        correct: 2,
        explanation: "Animate masculine Accusative = Genitive: 'wysokich mężczyzn'"
      },
      {
        question: "Complete: Jestem ___ lekarzem. (I am a good doctor - masculine)",
        options: ["dobry", "dobrego", "dobrym", "dobrze"],
        correct: 2,
        explanation: "After 'jestem' use Instrumental: 'dobrym lekarzem'"
      },
      {
        question: "Complete: Myślę o ___ czasach. (I'm thinking about old times)",
        options: ["stary", "starych", "starym", "stare"],
        correct: 1,
        explanation: "'O' takes Locative, plural: 'starych czasach'"
      },
      {
        question: "Complete: To są pokoje ___ studentów. (These are the rooms of new students)",
        options: ["nowy", "nowi", "nowych", "nowe"],
        correct: 2,
        explanation: "Genitive plural: 'nowych studentów'"
      },
      {
        question: "Complete: Interesuje się ___ kulturą. (I'm interested in Polish culture)",
        options: ["polska", "polską", "polskiej", "polskie"],
        correct: 1,
        explanation: "'Interesować się' takes Instrumental: 'polską kulturą'"
      },
      {
        question: "Complete: To jest dom ___ rodziny. (This is the house of a wealthy family)",
        options: ["bogata", "bogatej", "bogate", "bogatą"],
        correct: 1,
        explanation: "Genitive case (possession): feminine 'bogatej rodziny'"
      },
      {
        question: "Which sentence has correct agreement?",
        options: [
          "Widzę młody studenci.",
          "Widzę młodych studentów.",
          "Widzę młodzi studentów.",
          "Widzę młode studenci."
        ],
        correct: 1,
        explanation: "Animate masculine plural Accusative = Genitive: 'młodych studentów'"
      }
    ],
    advanced: [
      {
        question: "Complete: Szukam ___, ___ mieszkania w centrum. (I'm looking for a cheap, comfortable apartment in the center)",
        options: [
          "tani, wygodny",
          "taniego, wygodnego",
          "tanie, wygodne",
          "tanim, wygodnym"
        ],
        correct: 1,
        explanation: "'Szukać' takes Genitive; neuter: 'taniego, wygodnego mieszkania'"
      },
      {
        question: "Complete: W naszej szkole pracują ___ nauczycielki. (In our school work experienced, dedicated teachers - women)",
        options: [
          "doświadczone, zaangażowane",
          "doświadczonych, zaangażowanych",
          "doświadczonym, zaangażowanym",
          "doświadczona, zaangażowana"
        ],
        correct: 0,
        explanation: "Subject (Nominative) non-masculine personal plural: 'doświadczone, zaangażowane'"
      },
      {
        question: "Complete: Nie zgadzam się z ___ kolegami. (I don't agree with my older colleagues - men)",
        options: [
          "starsi koledzy",
          "starszych kolegów",
          "starszymi kolegami",
          "starsze koledzy"
        ],
        correct: 2,
        explanation: "'Z' takes Instrumental; masculine personal: 'starszymi kolegami'"
      },
      {
        question: "Complete: Cieszy się ___ życiem. (He enjoys a peaceful, happy life)",
        options: [
          "spokojny, szczęśliwy",
          "spokojne, szczęśliwe",
          "spokojnym, szczęśliwym",
          "spokojnego, szczęśliwego"
        ],
        correct: 2,
        explanation: "'Cieszyć się' takes Instrumental; neuter: 'spokojnym, szczęśliwym życiem'"
      },
      {
        question: "Which sentence is INCORRECT?",
        options: [
          "Rozmawiałem z młodymi studentkami.",
          "Rozmawiałem z młodymi studentami.",
          "Rozmawiałem z młody studenci.",
          "All are correct"
        ],
        correct: 2,
        explanation: "Option C is wrong: should be 'młodymi studentami' (Instrumental case)"
      },
      {
        question: "Complete: To jest problem ___ dzieci. (This is a problem of small children)",
        options: ["małe", "małych", "małym", "mali"],
        correct: 1,
        explanation: "Genitive plural (possession): 'małych dzieci'"
      },
      {
        question: "Complete: Uczę się w szkole z ___ tradycjami. (I study at a school with long traditions)",
        options: ["długie", "długich", "długimi", "długie"],
        correct: 2,
        explanation: "'Z' takes Instrumental plural: 'długimi tradycjami'"
      },
      {
        question: "Complete: Dali mi możliwość pracy w ___ firmie. (They gave me the opportunity to work in an international company)",
        options: ["międzynarodowa", "międzynarodową", "międzynarodowej", "międzynarodowe"],
        correct: 2,
        explanation: "'W' takes Locative; feminine: 'w międzynarodowej firmie'"
      }
    ]
  },

  fillBlanks: {
    beginner: [
      {
        sentence: "To jest ___ pies.",
        correct: "duży",
        options: ["duży", "duża", "duże", "duzi"],
        english: "This is a big dog.",
        hint: "'Pies' is masculine"
      },
      {
        sentence: "Mam ___ siostrę.",
        correct: "młodszą",
        options: ["młodszy", "młodsza", "młodszą", "młodsze"],
        english: "I have a younger sister.",
        hint: "'Siostrę' is Accusative feminine"
      },
      {
        sentence: "To są ___ książki.",
        correct: "ciekawe",
        options: ["ciekawy", "ciekawa", "ciekawe", "ciekawi"],
        english: "These are interesting books.",
        hint: "Non-masculine personal plural"
      },
      {
        sentence: "Mieszkam w ___ domu.",
        correct: "starym",
        options: ["stary", "starą", "starym", "stare"],
        english: "I live in an old house.",
        hint: "'W' takes Locative case"
      },
      {
        sentence: "Lubię ___ pogodę.",
        correct: "ciepłą",
        options: ["ciepły", "ciepła", "ciepłą", "ciepłe"],
        english: "I like warm weather.",
        hint: "'Pogodę' is Accusative feminine"
      },
      {
        sentence: "To są ___ studenci.",
        correct: "nowi",
        options: ["nowy", "nowa", "nowe", "nowi"],
        english: "These are new students (men).",
        hint: "Masculine personal plural"
      },
      {
        sentence: "Widzę ___ okno.",
        correct: "duże",
        options: ["duży", "duża", "duże", "duzi"],
        english: "I see a big window.",
        hint: "'Okno' is neuter"
      },
      {
        sentence: "Ona jest ___ nauczycielką.",
        correct: "dobrą",
        options: ["dobry", "dobra", "dobrą", "dobre"],
        english: "She is a good teacher.",
        hint: "Instrumental after 'jest'"
      }
    ],
    intermediate: [
      {
        sentence: "Nie mam ___ czasu.",
        correct: "dużego",
        options: ["duży", "dużego", "dużym", "duże"],
        english: "I don't have much time.",
        hint: "Genitive case after negation"
      },
      {
        sentence: "Rozmawiałem z ___ profesorem.",
        correct: "młodym",
        options: ["młody", "młodego", "młodym", "młodzi"],
        english: "I spoke with a young professor.",
        hint: "'Z' takes Instrumental"
      },
      {
        sentence: "Kupiłem nową, ___ książkę.",
        correct: "ciekawą",
        options: ["ciekawa", "ciekawą", "ciekawe", "ciekawej"],
        english: "I bought a new, interesting book.",
        hint: "Accusative feminine - match 'nową'"
      },
      {
        sentence: "Myślę o ___ wakacjach.",
        correct: "letnich",
        options: ["letni", "letnie", "letnich", "letnimi"],
        english: "I'm thinking about summer vacation.",
        hint: "'O' takes Locative plural"
      },
      {
        sentence: "Szukam ___ pracy.",
        correct: "nowej",
        options: ["nowa", "nową", "nowej", "nowe"],
        english: "I'm looking for a new job.",
        hint: "'Szukać' takes Genitive"
      },
      {
        sentence: "Widzę ___ kolegów.",
        correct: "starych",
        options: ["starzy", "stare", "starych", "starymi"],
        english: "I see my old colleagues (men).",
        hint: "Animate masculine Acc = Gen"
      },
      {
        sentence: "Jestem ___ studentem.",
        correct: "dobrym",
        options: ["dobry", "dobrego", "dobrym", "dobrze"],
        english: "I am a good student.",
        hint: "Instrumental after 'jestem'"
      },
      {
        sentence: "Interesuję się ___ historią.",
        correct: "polską",
        options: ["polska", "polską", "polskiej", "polskie"],
        english: "I'm interested in Polish history.",
        hint: "Instrumental case after 'interesować się'"
      }
    ],
    advanced: [
      {
        sentence: "Potrzebuję ___, ___ mieszkania.",
        correct: "dużego, wygodnego",
        options: ["duże, wygodne", "dużego, wygodnego", "dużym, wygodnym", "duży, wygodny"],
        english: "I need a big, comfortable apartment.",
        hint: "'Potrzebować' takes Genitive (neuter)"
      },
      {
        sentence: "W szkole pracują ___ nauczyciele.",
        correct: "doświadczeni",
        options: ["doświadczony", "doświadczone", "doświadczeni", "doświadczonych"],
        english: "Experienced teachers work at the school.",
        hint: "Masculine personal plural Nominative"
      },
      {
        sentence: "Nie zgadzam się z ___ kolegami.",
        correct: "starszymi",
        options: ["starsi", "starszych", "starszymi", "starsza"],
        english: "I don't agree with my older colleagues.",
        hint: "'Z' + Instrumental plural"
      },
      {
        sentence: "Cieszy się ___, ___ życiem.",
        correct: "spokojnym, szczęśliwym",
        options: ["spokojne, szczęśliwe", "spokojnego, szczęśliwego", "spokojnym, szczęśliwym", "spokojny, szczęśliwy"],
        english: "He enjoys a peaceful, happy life.",
        hint: "'Cieszyć się' + Instrumental (neuter)"
      },
      {
        sentence: "To jest problem ___ dzieci.",
        correct: "małych",
        options: ["małe", "małych", "małym", "mali"],
        english: "This is a problem of small children.",
        hint: "Genitive plural (possession)"
      }
    ]
  },

  matchPairs: {
    beginner: [
      {
        instruction: "Match the adjective with the correct gender form for Nominative singular:",
        pairs: [
          { left: "nowy + dom (m)", right: "nowy dom" },
          { left: "nowy + książka (f)", right: "nowa książka" },
          { left: "nowy + okno (n)", right: "nowe okno" },
          { left: "dobry + student (m)", right: "dobry student" },
          { left: "dobry + studentka (f)", right: "dobra studentka" },
          { left: "mały + dziecko (n)", right: "małe dziecko" },
          { left: "młody + człowiek (m)", right: "młody człowiek" },
          { left: "młody + kobieta (f)", right: "młoda kobieta" }
        ],
        distractors: ["nowe dom", "nowy książka", "dobra student", "młode kobieta"]
      }
    ],
    intermediate: [
      {
        instruction: "Match the Polish phrase with its correct case form:",
        pairs: [
          { left: "w starym domu (Locative)", right: "in an old house" },
          { left: "starego domu (Genitive)", right: "of an old house" },
          { left: "starym domem (Instrumental)", right: "with an old house" },
          { left: "do nowego sklepu (Genitive)", right: "to the new store" },
          { left: "z młodym bratem (Instrumental)", right: "with a young brother" },
          { left: "o ciekawej książce (Locative)", right: "about an interesting book" },
          { left: "bez dobrego pomysłu (Genitive)", right: "without a good idea" }
        ],
        distractors: ["at old house", "of young brother", "with interesting book", "to good idea"]
      }
    ]
  }
}
];
