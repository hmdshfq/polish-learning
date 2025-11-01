export const imperativeMood = [
  {
    name: "Basic Imperative - Commands and Requests",
    polish: "Tryb rozkazujący - polecenia i prośby",
    difficulty: "intermediate",
    level: "A2",
    icon: "📢",

    explanation: "The imperative mood (tryb rozkazujący) is used to give commands, make requests, offer suggestions, and give advice. In Polish, the imperative has different forms depending on who you're talking to: informal singular (ty), informal plural (wy), and formal (pan/pani). The imperative is formed from the present tense stem, but the endings are different. Unlike English, Polish imperative shows the relationship between speaker and listener - formal or informal, singular or plural. This is crucial for proper politeness levels in Polish conversation.",

    analogy: "Think of the imperative as having different 'volume levels' like a sound system. You have 'friendly mode' for close friends (ty), 'group mode' for multiple people (wy), and 'respectful mode' for formal situations (pan/pani). Just like you wouldn't shout at your grandmother or whisper orders to a large crowd, Polish has specific forms for each social situation. The key is matching your command form to your relationship with the person - it's like social GPS for politeness!",

    basicFormation: {
      title: "How to form the imperative",
      steps: [
        {
          step: "Take the 3rd person plural present tense (oni/one form)",
          example: "robią (they do), mówią (they speak), idą (they go)"
        },
        {
          step: "Remove the final -ą",
          example: "robi-, mówi-, id-"
        },
        {
          step: "Add imperative endings",
          patterns: [
            { form: "ty (informal singular)", ending: "- / -y / -ij", example: "rób, mów, idź" },
            { form: "wy (informal plural)", ending: "-cie", example: "róbcie, mówcie, idźcie" },
            { form: "formal", ending: "niech + 3rd person", example: "niech pan/pani robi" }
          ]
        }
      ],
      note: "The exact ending depends on the stem - some take nothing, some take -y, some take -ij"
    },

    commonPatterns: [
      {
        verbType: "Most -ić verbs",
        pattern: "Remove -ą, add nothing (ty) / -cie (wy)",
        examples: [
          { infinitive: "robić", present3pl: "robią", imperative: "rób! / róbcie!" },
          { infinitive: "mówić", present3pl: "mówią", imperative: "mów! / mówcie!" },
          { infinitive: "kupić", present3pl: "kupią", imperative: "kup! / kupcie!" }
        ]
      },
      {
        verbType: "-ować verbs",
        pattern: "Remove -ują, add -uj (ty) / -ujcie (wy)",
        examples: [
          { infinitive: "pracować", present3pl: "pracują", imperative: "pracuj! / pracujcie!" },
          { infinitive: "studiować", present3pl: "studiują", imperative: "studiuj! / studiujcie!" },
          { infinitive: "malować", present3pl: "malują", imperative: "maluj! / malujcie!" }
        ]
      },
      {
        verbType: "-ę/-isz verbs",
        pattern: "Remove -ą, add nothing or -y (ty) / -cie (wy)",
        examples: [
          { infinitive: "pisać", present3pl: "piszą", imperative: "pisz! / piszcie!" },
          { infinitive: "czytać", present3pl: "czytają", imperative: "czytaj! / czytajcie!" },
          { infinitive: "jeść", present3pl: "jedzą", imperative: "jedz! / jedzcie!" }
        ]
      },
      {
        verbType: "Irregular verbs",
        pattern: "Must be memorized",
        examples: [
          { infinitive: "iść", present3pl: "idą", imperative: "idź! / idźcie!" },
          { infinitive: "być", present3pl: "są", imperative: "bądź! / bądźcie!" },
          { infinitive: "mieć", present3pl: "mają", imperative: "miej! / miejcie!" }
        ]
      }
    ],

    politenessForms: {
      title: "Politeness levels in imperative",
      forms: [
        {
          level: "Informal singular (ty)",
          usage: "Close friends, family, children, peers",
          pattern: "Verb stem + imperative ending",
          examples: [
            { polish: "Chodź!", english: "Come!" },
            { polish: "Słuchaj!", english: "Listen!" },
            { polish: "Pomóż mi!", english: "Help me!" }
          ]
        },
        {
          level: "Informal plural (wy)",
          usage: "Group of friends, multiple children",
          pattern: "Singular form + -cie",
          examples: [
            { polish: "Chodźcie!", english: "Come! (you all)" },
            { polish: "Słuchajcie!", english: "Listen! (you all)" },
            { polish: "Pomóżcie mi!", english: "Help me! (you all)" }
          ]
        },
        {
          level: "Formal singular",
          usage: "Strangers, older people, professional settings",
          pattern: "Niech + pan/pani + 3rd person present",
          examples: [
            { polish: "Niech pan/pani przyjdzie!", english: "Please come!" },
            { polish: "Niech pan/pani posłucha!", english: "Please listen!" },
            { polish: "Niech pan/pani pomoże!", english: "Please help!" }
          ]
        },
        {
          level: "Formal plural",
          usage: "Multiple strangers, formal group settings",
          pattern: "Niech + państwo + 3rd person plural",
          examples: [
            { polish: "Niech państwo przyjdą!", english: "Please come! (formal plural)" },
            { polish: "Niech państwo posłuchają!", english: "Please listen! (formal plural)" },
            { polish: "Niech państwo pomogą!", english: "Please help! (formal plural)" }
          ]
        }
      ]
    },

    negativeImperative: {
      title: "Negative commands (Don't...)",
      formation: "Nie + imperative form",
      examples: [
        {
          positive: "Idź!",
          negative: "Nie idź!",
          english: "Go! / Don't go!"
        },
        {
          positive: "Mów!",
          negative: "Nie mów!",
          english: "Speak! / Don't speak!"
        },
        {
          positive: "Róbcie to!",
          negative: "Nie róbcie tego!",
          english: "Do it! / Don't do it!"
        },
        {
          positive: "Niech pan przyjdzie!",
          negative: "Niech pan nie przychodzi!",
          english: "Please come! / Please don't come!"
        }
      ],
      note: "In formal negative commands, sometimes the present tense form is used instead of imperative"
    },

    commonExpressions: [
      {
        category: "Daily requests",
        expressions: [
          { polish: "Pomóż mi!", english: "Help me!" },
          { polish: "Poczekaj!", english: "Wait!" },
          { polish: "Chodź tutaj!", english: "Come here!" },
          { polish: "Posłuchaj!", english: "Listen!" },
          { polish: "Sprawdź to!", english: "Check this!" },
          { polish: "Daj mi to!", english: "Give me that!" },
          { polish: "Weź to!", english: "Take this!" },
          { polish: "Zostaw to!", english: "Leave it!" }
        ]
      },
      {
        category: "Polite requests",
        expressions: [
          { polish: "Proszę, pomóż mi!", english: "Please help me!" },
          { polish: "Bądź tak miły!", english: "Be so kind!" },
          { polish: "Niech pan/pani siada!", english: "Please sit down!" },
          { polish: "Proszę usiąść!", english: "Please sit down!" },
          { polish: "Niech pan/pani nie przeszkadza!", english: "Please don't disturb!" },
          { polish: "Proszę nie przeszkadzać!", english: "Please don't disturb!" }
        ]
      },
      {
        category: "Directions and instructions",
        expressions: [
          { polish: "Idź prosto!", english: "Go straight!" },
          { polish: "Skręć w lewo!", english: "Turn left!" },
          { polish: "Zatrzymaj się!", english: "Stop!" },
          { polish: "Otwórz drzwi!", english: "Open the door!" },
          { polish: "Zamknij okno!", english: "Close the window!" },
          { polish: "Napisz to!", english: "Write this!" },
          { polish: "Przeczytaj to!", english: "Read this!" }
        ]
      },
      {
        category: "Strong commands",
        expressions: [
          { polish: "Przestań!", english: "Stop it!" },
          { polish: "Zamilcz!", english: "Be quiet!" },
          { polish: "Wstawaj!", english: "Get up!" },
          { polish: "Wyjdź!", english: "Get out!" },
          { polish: "Uważaj!", english: "Be careful!" },
          { polish: "Śpiesz się!", english: "Hurry up!" }
        ]
      }
    ],

    aspectInImperative: {
      title: "Perfective vs Imperfective in imperative",
      explanation: "In Polish, you can use both perfective and imperfective verbs in the imperative, but they have different meanings. Imperfective commands suggest ongoing or repeated actions, while perfective commands suggest one-time, completed actions.",
      examples: [
        {
          imperfective: "Czytaj książkę!",
          perfective: "Przeczytaj książkę!",
          difference: "Keep reading the book! vs Read the book (completely)!"
        },
        {
          imperfective: "Pisz list!",
          perfective: "Napisz list!",
          difference: "Write the letter (ongoing) vs Write the letter (finish it)!"
        },
        {
          imperfective: "Rób zadanie!",
          perfective: "Zrób zadanie!",
          difference: "Do the assignment (work on it) vs Do the assignment (complete it)!"
        }
      ]
    },

    quiz: {
      beginner: [
        {
          question: "How do you say 'Come!' (informal singular)?",
          options: ["Chodź!", "Chodźcie!", "Niech pan przyjdzie!", "Chodzę!"],
          correct: 0,
          explanation: "'Chodź!' is the informal singular imperative from 'iść' (to go/come)."
        },
        {
          question: "What is the imperative form of 'robić' for 'ty'?",
          options: ["rób!", "róbcie!", "robisz!", "robi!"],
          correct: 0,
          explanation: "'Robić' → 'robią' → 'rób!' (remove -ą from 3rd person plural)."
        },
        {
          question: "How do you say 'Help!' (informal singular)?",
          options: ["Pomóż!", "Pomagaj!", "Pomaga!", "Pomocny!"],
          correct: 0,
          explanation: "'Pomóż!' is the imperative of 'pomóc' (to help)."
        },
        {
          question: "Complete: '___!' (Listen! - informal singular)",
          options: ["Słuchaj", "Słucha", "Słuchajcie", "Słucham"],
          correct: 0,
          explanation: "'Słuchaj!' is the imperative of 'słuchać' (to listen)."
        },
        {
          question: "What does 'Nie mów!' mean?",
          options: ["Speak!", "Don't speak!", "He speaks!", "You speak!"],
          correct: 1,
          explanation: "'Nie mów!' means 'Don't speak!' (negative imperative)."
        },
        {
          question: "How do you say 'Wait!' (informal singular)?",
          options: ["Czekaj!", "Poczekaj!", "Czekasz!", "Czeka!"],
          correct: 1,
          explanation: "'Poczekaj!' is the perfective imperative meaning 'Wait!' (for a moment)."
        },
        {
          question: "What is the plural form of 'Idź!'?",
          options: ["Idą!", "Idźcie!", "Idziesz!", "Idzie!"],
          correct: 1,
          explanation: "'Idź!' (go/come - singular) becomes 'Idźcie!' (plural)."
        },
        {
          question: "Complete: '___!' (Give me - informal singular)",
          options: ["Daj mi", "Dajesz mi", "Daje mi", "Dajcie mi"],
          correct: 0,
          explanation: "'Daj mi!' means 'Give me!' (imperative of 'dać')."
        },
        {
          question: "How do you say 'Be quiet!' (informal singular)?",
          options: ["Zamilcz!", "Milczysz!", "Milczy!", "Milczcie!"],
          correct: 0,
          explanation: "'Zamilcz!' means 'Be quiet!' (perfective imperative)."
        },
        {
          question: "What does 'Otwórz!' mean?",
          options: ["Close!", "Open!", "Write!", "Read!"],
          correct: 1,
          explanation: "'Otwórz!' means 'Open!' (imperative of 'otworzyć')."
        }
      ],

      intermediate: [
        {
          question: "How do you politely say 'Please sit down' (formal singular)?",
          options: ["Siadaj!", "Niech pan/pani siada!", "Siedź!", "Siadajcie!"],
          correct: 1,
          explanation: "Formal imperative uses 'Niech pan/pani + 3rd person present' construction."
        },
        {
          question: "What's the difference between 'Pisz!' and 'Napisz!'?",
          options: ["No difference", "'Pisz!' = keep writing, 'Napisz!' = write completely", "'Napisz!' is more polite", "'Pisz!' is formal"],
          correct: 1,
          explanation: "'Pisz!' (imperfective) = ongoing action, 'Napisz!' (perfective) = complete the action."
        },
        {
          question: "How do you say 'Don't go!' (informal plural)?",
          options: ["Nie idź!", "Nie idźcie!", "Nie idą!", "Nie idziesz!"],
          correct: 1,
          explanation: "'Nie idźcie!' is the negative imperative plural of 'iść'."
        },
        {
          question: "Complete formal request: '___!' (Please help - formal singular)",
          options: ["Pomóż", "Niech pan/pani pomoże", "Pomagaj", "Pomóżcie"],
          correct: 1,
          explanation: "Formal: 'Niech pan/pani pomoże!' (Please help)."
        },
        {
          question: "What's the imperative of 'studiować' for 'wy'?",
          options: ["studiuj!", "studiujcie!", "studiuje!", "studiują!"],
          correct: 1,
          explanation: "'-ować' verbs: 'studiować' → 'studiują' → 'studiuj!/studiujcie!'"
        },
        {
          question: "How do you say 'Turn left!' (informal singular)?",
          options: ["Skręć w lewo!", "Skręcaj w lewo!", "Skręcasz w lewo!", "Skręci w lewo!"],
          correct: 0,
          explanation: "'Skręć w lewo!' is the perfective imperative (one-time action)."
        },
        {
          question: "Complete: 'Nie ___!' (Don't do it! - informal plural)",
          options: ["rób tego", "róbcie tego", "robisz tego", "robią tego"],
          correct: 1,
          explanation: "'Nie róbcie tego!' - negative imperative plural."
        },
        {
          question: "What does 'Bądź miły!' mean?",
          options: ["Be mean!", "Be nice!", "You are nice!", "He is nice!"],
          correct: 1,
          explanation: "'Bądź miły!' means 'Be nice!' (imperative of 'być')."
        },
        {
          question: "How do you say 'Close the window!' (informal singular)?",
          options: ["Zamknij okno!", "Zamykaj okno!", "Zamykasz okno!", "Zamknie okno!"],
          correct: 0,
          explanation: "'Zamknij okno!' (perfective) for a one-time action of closing."
        },
        {
          question: "What's the formal plural of 'Chodźcie!'?",
          options: ["Niech państwo przychodzą!", "Niech państwo przyjdą!", "Chodźcie państwo!", "Proszę przyjść!"],
          correct: 1,
          explanation: "Formal plural: 'Niech państwo przyjdą!' (Please come - formal plural)."
        }
      ],

      advanced: [
        {
          question: "Complete the formal negative: 'Niech pan ___!' (Please don't disturb)",
          options: ["nie przeszkadza", "nie przeszkadzać", "nie przeszkodzi", "przeszkadza nie"],
          correct: 0,
          explanation: "Formal negative often uses present tense: 'Niech pan nie przeszkadza!'"
        },
        {
          question: "What's the difference between 'Czytaj książkę!' and 'Przeczytaj książkę!'?",
          options: ["Different politeness levels", "'Czytaj' = ongoing reading, 'Przeczytaj' = finish reading", "'Przeczytaj' is more urgent", "No difference"],
          correct: 1,
          explanation: "Aspect difference: imperfective (ongoing) vs perfective (complete action)."
        },
        {
          question: "How do you say 'Let's go!' in Polish?",
          options: ["Idźmy!", "Chodźmy!", "Idźcie!", "Niech idziemy!"],
          correct: 1,
          explanation: "'Chodźmy!' or 'Idźmy!' both mean 'Let's go!' (1st person plural imperative)."
        },
        {
          question: "Complete polite request: '___!' (Please don't worry - formal singular)",
          options: ["Nie martw się", "Niech się pan/pani nie martwi", "Nie martwcie się", "Proszę nie martwić się"],
          correct: 1,
          explanation: "Formal with reflexive: 'Niech się pan/pani nie martwi!'"
        },
        {
          question: "What does 'Proszę nie przeszkadzać!' mean?",
          options: ["Please disturb!", "Please don't disturb!", "You are disturbing!", "Don't please disturb!"],
          correct: 1,
          explanation: "'Proszę nie przeszkadzać!' = 'Please don't disturb!' (infinitive after 'proszę nie')."
        },
        {
          question: "How do you say 'Keep working!' (emphasizing continuation)?",
          options: ["Zrób!", "Pracuj dalej!", "Przepracuj!", "Odpracuj!"],
          correct: 1,
          explanation: "'Pracuj dalej!' emphasizes continuing the action (imperfective + 'dalej')."
        },
        {
          question: "What's the inclusive imperative for 'Let's read!'?",
          options: ["Czytajmy!", "Czytajcie!", "Niech czytamy!", "Przeczytajmy!"],
          correct: 0,
          explanation: "'Czytajmy!' = Let's read! (1st person plural imperative - inclusive)."
        },
        {
          question: "Complete: 'Niech się ___!' (Let him/her wash - formal 3rd person)",
          options: ["myje", "myć", "mył", "myją"],
          correct: 0,
          explanation: "'Niech się myje!' uses 3rd person present with reflexive 'się'."
        },
        {
          question: "How do you emphasize urgency in 'Hurry up!'?",
          options: ["Śpiesz się!", "Pośpiesz się!", "Śpieszcie się!", "Szybko!"],
          correct: 1,
          explanation: "'Pośpiesz się!' (perfective) emphasizes immediate action vs 'Śpiesz się!' (ongoing)."
        },
        {
          question: "What does 'Zostaw mnie w spokoju!' mean?",
          options: ["Leave me in peace!", "Stay with me!", "Come with me!", "Help me!"],
          correct: 0,
          explanation: "'Zostaw mnie w spokoju!' = 'Leave me alone!/Leave me in peace!'"
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "___!",
          english: "Come! (informal singular)",
          blank: 0,
          options: ["Chodź", "Chodźcie", "Chodzi", "Chodzę"],
          correct: 0,
          explanation: "'Chodź!' is the informal singular imperative."
        },
        {
          polish: "___ mi!",
          english: "Help me! (informal singular)",
          blank: 0,
          options: ["Pomóż", "Pomagaj", "Pomaga", "Pomagasz"],
          correct: 0,
          explanation: "'Pomóż mi!' means 'Help me!' (perfective imperative)."
        },
        {
          polish: "___ tutaj!",
          english: "Wait here! (informal singular)",
          blank: 0,
          options: ["Poczekaj", "Czekaj", "Czekasz", "Czeka"],
          correct: 0,
          explanation: "'Poczekaj tutaj!' - perfective imperative for 'wait here'."
        },
        {
          polish: "___ to!",
          english: "Take this! (informal singular)",
          blank: 0,
          options: ["Weź", "Bierz", "Bierzesz", "Bierze"],
          correct: 0,
          explanation: "'Weź to!' means 'Take this!' (perfective imperative)."
        },
        {
          polish: "Nie ___!",
          english: "Don't speak! (informal singular)",
          blank: 1,
          options: ["mówisz", "mów", "mówi", "mówimy"],
          correct: 1,
          explanation: "'Nie mów!' means 'Don't speak!' (negative imperative)."
        },
        {
          polish: "___ drzwi!",
          english: "Open the door! (informal singular)",
          blank: 0,
          options: ["Otwórz", "Otwierasz", "Otwiera", "Otwieramy"],
          correct: 0,
          explanation: "'Otwórz drzwi!' means 'Open the door!' (perfective)."
        },
        {
          polish: "___!",
          english: "Listen! (informal singular)",
          blank: 0,
          options: ["Słuchaj", "Słuchasz", "Słucha", "Słuchamy"],
          correct: 0,
          explanation: "'Słuchaj!' means 'Listen!' (imperfective imperative)."
        },
        {
          polish: "___ się!",
          english: "Hurry up! (informal singular)",
          blank: 0,
          options: ["Śpiesz", "Śpieszysz", "Śpieszy", "Śpieszymy"],
          correct: 0,
          explanation: "'Śpiesz się!' means 'Hurry up!' (with reflexive 'się')."
        }
      ],

      intermediate: [
        {
          polish: "Niech pan ___!",
          english: "Please sit down! (formal singular)",
          blank: 2,
          options: ["siadaj", "siada", "siadasz", "siadamy"],
          correct: 1,
          explanation: "Formal imperative: 'Niech pan siada!' uses 3rd person present."
        },
        {
          polish: "___ w lewo!",
          english: "Turn left! (informal singular)",
          blank: 0,
          options: ["Skręć", "Skręcaj", "Skręcasz", "Skręca"],
          correct: 0,
          explanation: "'Skręć w lewo!' - perfective for one-time action."
        },
        {
          polish: "Nie ___ tego!",
          english: "Don't do that! (informal plural)",
          blank: 1,
          options: ["rób", "róbcie", "robisz", "robią"],
          correct: 1,
          explanation: "'Nie róbcie tego!' - negative imperative plural."
        },
        {
          polish: "___ książkę!",
          english: "Read the book! (completely - informal singular)",
          blank: 0,
          options: ["Przeczytaj", "Czytaj", "Czytasz", "Czyta"],
          correct: 0,
          explanation: "'Przeczytaj!' (perfective) means 'read completely'."
        },
        {
          polish: "Niech państwo ___!",
          english: "Please come! (formal plural)",
          blank: 2,
          options: ["chodź", "chodźcie", "przyjdą", "przychodzą"],
          correct: 2,
          explanation: "Formal plural: 'Niech państwo przyjdą!' (3rd person plural)."
        },
        {
          polish: "___ miły!",
          english: "Be nice! (informal singular)",
          blank: 0,
          options: ["Bądź", "Jesteś", "Jest", "Jesteśmy"],
          correct: 0,
          explanation: "'Bądź miły!' - imperative of 'być' (to be)."
        },
        {
          polish: "___ okno!",
          english: "Close the window! (informal singular)",
          blank: 0,
          options: ["Zamknij", "Zamykaj", "Zamykasz", "Zamyka"],
          correct: 0,
          explanation: "'Zamknij okno!' - perfective for one-time action."
        },
        {
          polish: "Proszę nie ___!",
          english: "Please don't disturb!",
          blank: 2,
          options: ["przeszkadza", "przeszkadzać", "przeszkadza", "przeszkodzić"],
          correct: 1,
          explanation: "'Proszę nie przeszkadzać!' uses infinitive after 'proszę nie'."
        }
      ],

      advanced: [
        {
          polish: "Niech się pan nie ___!",
          english: "Please don't worry! (formal singular)",
          blank: 3,
          options: ["martw", "martwi", "martwisz", "martwię"],
          correct: 1,
          explanation: "Formal negative with reflexive: 'Niech się pan nie martwi!'"
        },
        {
          polish: "___ dalej!",
          english: "Keep working! (emphasizing continuation)",
          blank: 0,
          options: ["Pracuj", "Przepracuj", "Pracujesz", "Pracuje"],
          correct: 0,
          explanation: "'Pracuj dalej!' emphasizes continuing the action (imperfective)."
        },
        {
          polish: "___!",
          english: "Let's read! (inclusive)",
          blank: 0,
          options: ["Czytajmy", "Czytajcie", "Czytaj", "Czytają"],
          correct: 0,
          explanation: "'Czytajmy!' is 1st person plural imperative (let's read)."
        },
        {
          polish: "___ mnie w spokoju!",
          english: "Leave me alone! (informal singular)",
          blank: 0,
          options: ["Zostaw", "Zostawiaj", "Zostawiasz", "Zostawi"],
          correct: 0,
          explanation: "'Zostaw mnie w spokoju!' means 'Leave me alone!'"
        },
        {
          polish: "Niech się ___!",
          english: "Let him/her wash! (3rd person)",
          blank: 2,
          options: ["myć", "myje", "myjesz", "myją"],
          correct: 1,
          explanation: "'Niech się myje!' uses 3rd person present with reflexive."
        },
        {
          polish: "___ się!",
          english: "Hurry up! (emphasizing immediate action)",
          blank: 0,
          options: ["Pośpiesz", "Śpiesz", "Śpieszysz", "Śpieszy"],
          correct: 0,
          explanation: "'Pośpiesz się!' (perfective) emphasizes immediate action."
        },
        {
          polish: "Niech pan ___!",
          english: "Please don't come! (formal singular)",
          blank: 2,
          options: ["nie przychodzi", "nie przyjdzie", "przychodzi nie", "nie przychodzić"],
          correct: 0,
          explanation: "Formal negative: 'Niech pan nie przychodzi!' (present tense form)."
        },
        {
          polish: "___ się tym!",
          english: "Don't worry about this! (informal singular)",
          blank: 1,
          options: ["Nie", "nie martw", "nie martwisz", "nie martwi"],
          correct: 1,
          explanation: "'Nie martw się tym!' - negative imperative with reflexive."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the command with its English meaning",
          pairs: [
            { polish: "Chodź!", english: "Come!" },
            { polish: "Pomóż!", english: "Help!" },
            { polish: "Słuchaj!", english: "Listen!" },
            { polish: "Poczekaj!", english: "Wait!" },
            { polish: "Weź!", english: "Take!" },
            { polish: "Daj!", english: "Give!" },
            { polish: "Otwórz!", english: "Open!" },
            { polish: "Zamknij!", english: "Close!" }
          ]
        },
        {
          instruction: "Match the negative command with its meaning",
          pairs: [
            { polish: "Nie mów!", english: "Don't speak!" },
            { polish: "Nie idź!", english: "Don't go!" },
            { polish: "Nie rób!", english: "Don't do!" },
            { polish: "Nie bierz!", english: "Don't take!" },
            { polish: "Nie słuchaj!", english: "Don't listen!" },
            { polish: "Nie czekaj!", english: "Don't wait!" },
            { polish: "Nie pomagaj!", english: "Don't help!" },
            { polish: "Nie zamykaj!", english: "Don't close!" }
          ]
        }
      ],

      intermediate: [
        {
          instruction: "Match the politeness level with the correct form",
          pairs: [
            { polish: "Chodź! (ty)", english: "Informal singular" },
            { polish: "Chodźcie! (wy)", english: "Informal plural" },
            { polish: "Niech pan przyjdzie!", english: "Formal singular" },
            { polish: "Niech państwo przyjdą!", english: "Formal plural" },
            { polish: "Proszę przyjść!", english: "Polite infinitive" },
            { polish: "Może pan przyjdzie?", english: "Very polite suggestion" },
            { polish: "Chodźmy!", english: "Let's go (inclusive)" },
            { polish: "Bądź tak miły!", english: "Please be so kind" }
          ]
        },
        {
          instruction: "Match the aspect with its imperative meaning",
          pairs: [
            { polish: "Pisz! (imperfective)", english: "Keep writing" },
            { polish: "Napisz! (perfective)", english: "Write (complete it)" },
            { polish: "Czytaj! (imperfective)", english: "Keep reading" },
            { polish: "Przeczytaj! (perfective)", english: "Read (finish it)" },
            { polish: "Rób! (imperfective)", english: "Keep doing" },
            { polish: "Zrób! (perfective)", english: "Do (complete it)" },
            { polish: "Pracuj! (imperfective)", english: "Keep working" },
            { polish: "Przepracuj! (perfective)", english: "Work through completely" }
          ]
        }
      ]
    }
  }
];