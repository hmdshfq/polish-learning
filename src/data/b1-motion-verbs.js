export const b1MotionVerbs = [
  {
    name: "Motion Verbs with Prefixes",
    polish: "Czasowniki ruchu z prefiksami",
    difficulty: "advanced",
    level: "B1",
    icon: "🏃‍♂️",

    explanation: "Master the complex system of Polish motion verbs! Motion verbs are among the most sophisticated aspects of Polish grammar, involving prefixes that completely change meaning, aspectual pairs, and directional indicators. Polish has two basic motion verbs: 'iść' (to go on foot) and 'jechać' (to go by vehicle), but with prefixes, they create dozens of specific verbs describing different types of movement. Understanding these verbs is crucial for natural communication, as they appear constantly in everyday conversation and are essential for describing any kind of movement or travel.",

    analogy: "Think of basic motion verbs ('iść', 'jechać') as the foundation of a house, and prefixes as different rooms with specific purposes. Just as a house has a kitchen (for cooking), bedroom (for sleeping), and bathroom (for washing), motion verbs have prefixes that create 'rooms' for specific types of movement: 'wyjść' (exit room), 'przyjść' (arrival room), 'przejść' (passing-through room). Each prefix-verb combination has its own 'purpose' and 'rules' - you wouldn't cook in the bathroom, and you wouldn't use 'wyjść' to describe arriving somewhere!",

    basicMotionVerbs: {
      title: "Basic Motion Verbs - Foundation",
      verbs: [
        {
          infinitive: "iść / pójść",
          english: "to go (on foot)",
          type: "Unidirectional",
          aspect: "imperfective / perfective",
          usage: "Movement on foot in one direction",
          examples: [
            { polish: "Idę do sklepu.", english: "I'm going to the store." },
            { polish: "Pójdę jutro do lekarza.", english: "I'll go to the doctor tomorrow." }
          ]
        },
        {
          infinitive: "jechać / pojechać",
          english: "to go (by vehicle)",
          type: "Unidirectional",
          aspect: "imperfective / perfective",
          usage: "Movement by transport in one direction",
          examples: [
            { polish: "Jadę autobusem do pracy.", english: "I'm going to work by bus." },
            { polish: "Pojechaliśmy na wakacje do Gdańska.", english: "We went on vacation to Gdansk." }
          ]
        },
        {
          infinitive: "chodzić",
          english: "to walk, to go (habitually)",
          type: "Multidirectional",
          aspect: "imperfective",
          usage: "Habitual movement, back-and-forth, aimless walking",
          examples: [
            { polish: "Chodzę do szkoły każdego dnia.", english: "I go to school every day." },
            { polish: "Lubię chodzić po parku.", english: "I like walking in the park." }
          ]
        },
        {
          infinitive: "jeździć",
          english: "to drive, to ride (habitually)",
          type: "Multidirectional",
          aspect: "imperfective",
          usage: "Habitual movement by vehicle, multiple trips",
          examples: [
            { polish: "Jeżdżę samochodem do pracy.", english: "I drive to work." },
            { polish: "Lubi jeździć na rowerze.", english: "He likes riding a bike." }
          ]
        }
      ],
      keyDistinction: "Unidirectional = one-time movement in one direction; Multidirectional = habitual, repeated, or aimless movement"
    },

    commonPrefixes: {
      title: "Motion Verb Prefixes and Their Meanings",
      prefixes: [
        {
          prefix: "przy-",
          meaning: "arrival, coming to",
          examples: [
            { verb: "przyjść", english: "to come (on foot)", example: "Przyjdę o piątej.", exampleEng: "I'll come at five." },
            { verb: "przyjechać", english: "to come (by vehicle)", example: "Przyjechał pociągiem.", exampleEng: "He came by train." },
            { verb: "przychodzić", english: "to come (habitually)", example: "Przychodzi codziennie.", exampleEng: "He comes every day." },
            { verb: "przyjeżdżać", english: "to come (habitually by vehicle)", example: "Przyjeżdża autobusem.", exampleEng: "He comes by bus." }
          ]
        },
        {
          prefix: "wy-",
          meaning: "exit, going out",
          examples: [
            { verb: "wyjść", english: "to go out (on foot)", example: "Wyszedł z domu.", exampleEng: "He left the house." },
            { verb: "wyjechać", english: "to leave (by vehicle)", example: "Wyjechała za granicę.", exampleEng: "She went abroad." },
            { verb: "wychodzić", english: "to go out (habitually)", example: "Wychodzi o ósmej.", exampleEng: "He leaves at eight." },
            { verb: "wyjeżdżać", english: "to leave (habitually by vehicle)", example: "Wyjeżdża w podróże służbowe.", exampleEng: "He goes on business trips." }
          ]
        },
        {
          prefix: "w-/we-",
          meaning: "entering, going in",
          examples: [
            { verb: "wejść", english: "to enter (on foot)", example: "Wszedł do pokoju.", exampleEng: "He entered the room." },
            { verb: "wjechać", english: "to drive in", example: "Wjechał do garażu.", exampleEng: "He drove into the garage." },
            { verb: "wchodzić", english: "to enter (habitually)", example: "Wchodzi przez główne wejście.", exampleEng: "He enters through the main entrance." },
            { verb: "wjeżdżać", english: "to drive in (habitually)", example: "Wjeżdża tym tunelem.", exampleEng: "He drives through this tunnel." }
          ]
        },
        {
          prefix: "prze-",
          meaning: "through, across, over",
          examples: [
            { verb: "przejść", english: "to go through/across", example: "Przeszedł przez park.", exampleEng: "He walked through the park." },
            { verb: "przejechać", english: "to drive through", example: "Przejechał przez miasto.", exampleEng: "He drove through the city." },
            { verb: "przechodzić", english: "to go through (habitually)", example: "Przechodzi przez ten most.", exampleEng: "He goes across this bridge." },
            { verb: "przejeżdżać", english: "to drive through (habitually)", example: "Przejeżdża tędy codziennie.", exampleEng: "He drives this way every day." }
          ]
        },
        {
          prefix: "pod-",
          meaning: "approaching, coming up to",
          examples: [
            { verb: "podejść", english: "to approach (on foot)", example: "Podszedł do okna.", exampleEng: "He approached the window." },
            { verb: "podjechać", english: "to drive up to", example: "Podjechał pod dom.", exampleEng: "He drove up to the house." },
            { verb: "podchodzić", english: "to approach (habitually)", example: "Podchodzi do każdego psa.", exampleEng: "He approaches every dog." },
            { verb: "podjeżdżać", english: "to drive up (habitually)", example: "Podjeżdża pod ten sklep.", exampleEng: "He drives up to this store." }
          ]
        },
        {
          prefix: "od-",
          meaning: "moving away from",
          examples: [
            { verb: "odejść", english: "to go away (on foot)", example: "Odszedł od stołu.", exampleEng: "He walked away from the table." },
            { verb: "odjechać", english: "to drive away", example: "Odjechał z parkingu.", exampleEng: "He drove away from the parking lot." },
            { verb: "odchodzić", english: "to go away (habitually)", example: "Odchodzi o szóstej.", exampleEng: "He leaves at six." },
            { verb: "odjeżdżać", english: "to drive away (habitually)", example: "Odjeżdża tym autobusem.", exampleEng: "He leaves on this bus." }
          ]
        },
        {
          prefix: "za-",
          meaning: "stopping by, brief visit",
          examples: [
            { verb: "zajść", english: "to stop by (on foot)", example: "Zajdę do ciebie wieczorem.", exampleEng: "I'll stop by your place tonight." },
            { verb: "zajechać", english: "to stop by (by vehicle)", example: "Zajechał po dzieci.", exampleEng: "He drove by to pick up the children." },
            { verb: "zachodzić", english: "to stop by (habitually)", example: "Zachodzi do babci.", exampleEng: "He stops by grandma's." },
            { verb: "zajeżdżać", english: "to stop by (habitually by vehicle)", example: "Zajeżdża po zakupy.", exampleEng: "He drives by for shopping." }
          ]
        },
        {
          prefix: "do-",
          meaning: "reaching destination, arriving",
          examples: [
            { verb: "dojść", english: "to reach (on foot)", example: "Doszedł do centrum.", exampleEng: "He reached the center." },
            { verb: "dojechać", english: "to reach (by vehicle)", example: "Dojechał do Warszawy.", exampleEng: "He reached Warsaw." },
            { verb: "dochodzić", english: "to reach (habitually)", example: "Dochodzi do pracy pieszo.", exampleEng: "He walks to work." },
            { verb: "dojeżdżać", english: "to commute", example: "Dojeżdża do pracy pociągiem.", exampleEng: "He commutes to work by train." }
          ]
        }
      ]
    },

    aspectualPairs: {
      title: "Aspectual Pairs in Motion Verbs",
      explanation: "Each prefixed motion verb has perfective and imperfective forms. The perfective describes completed, one-time actions, while imperfective describes ongoing, habitual, or repeated actions.",
      pairs: [
        {
          perfective: "przyjść",
          imperfective: "przychodzić",
          english: "to come",
          examples: [
            { polish: "Przyjdę jutro o piątej.", english: "I'll come tomorrow at five." },
            { polish: "Przychodzę tutaj codziennie.", english: "I come here every day." }
          ]
        },
        {
          perfective: "wyjść",
          imperfective: "wychodzić",
          english: "to go out",
          examples: [
            { polish: "Wyszedł już z domu.", english: "He already left the house." },
            { polish: "Wychodzi z domu o ósmej.", english: "He leaves the house at eight." }
          ]
        },
        {
          perfective: "przejść",
          imperfective: "przechodzić",
          english: "to go through",
          examples: [
            { polish: "Przeszedł przez ulicę.", english: "He crossed the street." },
            { polish: "Przechodzi przez park codziennie.", english: "He goes through the park every day." }
          ]
        },
        {
          perfective: "dojechać",
          imperfective: "dojeżdżać",
          english: "to reach by vehicle",
          examples: [
            { polish: "Dojechał na miejsce.", english: "He reached the destination." },
            { polish: "Dojeżdża do pracy autobusem.", english: "He commutes to work by bus." }
          ]
        }
      ]
    },

    caseUsage: {
      title: "Cases with Motion Verbs",
      rules: [
        {
          case: "Accusative",
          usage: "Direction towards (gdzie? - where to?)",
          prepositions: ["do", "na", "w", "za", "pod"],
          examples: [
            { polish: "Idę do sklepu.", english: "I'm going to the store." },
            { polish: "Jadę na uniwersytet.", english: "I'm going to the university." },
            { polish: "Wchodzę w tunel.", english: "I'm entering the tunnel." }
          ]
        },
        {
          case: "Locative",
          usage: "Location where action happens (gdzie? - where?)",
          prepositions: ["w", "na", "po"],
          examples: [
            { polish: "Chodzę po parku.", english: "I walk in the park." },
            { polish: "Jeżdżę po mieście.", english: "I drive around the city." },
            { polish: "Spaceruje w lesie.", english: "I walk in the forest." }
          ]
        },
        {
          case: "Genitive",
          usage: "Source, point of departure (skąd? - where from?)",
          prepositions: ["z", "od", "spod"],
          examples: [
            { polish: "Wychodzę z domu.", english: "I'm leaving the house." },
            { polish: "Odjeżdżam od przystanku.", english: "I'm leaving from the stop." },
            { polish: "Wyjeżdżam z miasta.", english: "I'm leaving the city." }
          ]
        },
        {
          case: "Instrumental",
          usage: "Means of transportation (czym? - by what?)",
          examples: [
            { polish: "Jadę autobusem.", english: "I'm going by bus." },
            { polish: "Lecę samolotem.", english: "I'm flying by plane." },
            { polish: "Płynę statkiem.", english: "I'm sailing by ship." }
          ]
        }
      ]
    },

    quiz: {
      beginner: [
        {
          question: "What's the difference between 'iść' and 'chodzić'?",
          options: ["No difference", "'iść' = one direction, 'chodzić' = habitual/multi-directional", "'chodzić' = faster movement", "'iść' = by vehicle"],
          correct: 1,
          explanation: "'Iść' is unidirectional (one-time, one direction), 'chodzić' is multidirectional (habitual, repeated)."
        },
        {
          question: "How do you say 'I'll come at five'?",
          options: ["Chodzę o piątej", "Idę o piątej", "Przyjdę o piątej", "Przychodzę o piątej"],
          correct: 2,
          explanation: "'Przyjdę o piątej' uses perfective 'przyjść' for one-time future arrival."
        },
        {
          question: "What does 'wyjść' mean?",
          options: ["to enter", "to go out/leave", "to come", "to pass through"],
          correct: 1,
          explanation: "'Wyjść' means 'to go out' or 'to leave' (prefix 'wy-' = out)."
        },
        {
          question: "Complete: 'Jadę ___ do pracy.' (I go to work by bus)",
          options: ["autobus", "autobusem", "autobusu", "autobusie"],
          correct: 1,
          explanation: "'Autobusem' is instrumental case - means of transportation."
        },
        {
          question: "How do you say 'He entered the room'?",
          options: ["Wszedł do pokoju", "Wyszedł z pokoju", "Przeszedł przez pokój", "Podszedł do pokoju"],
          correct: 0,
          explanation: "'Wszedł do pokoju' - 'wejść' means 'to enter'."
        },
        {
          question: "What prefix means 'through, across'?",
          options: ["przy-", "wy-", "prze-", "pod-"],
          correct: 2,
          explanation: "'Prze-' means 'through, across' (przejść = go through)."
        },
        {
          question: "Complete: 'Wychodzi ___ domu o ósmej.' (He leaves the house at eight)",
          options: ["do", "z", "w", "na"],
          correct: 1,
          explanation: "'Z domu' (from the house) - genitive after 'z' for source."
        },
        {
          question: "What does 'podejść' mean?",
          options: ["to go away", "to approach", "to go through", "to enter"],
          correct: 1,
          explanation: "'Podejść' means 'to approach' (prefix 'pod-' = up to, approaching)."
        }
      ],

      intermediate: [
        {
          question: "What's the aspectual pair of 'przyjść'?",
          options: ["przychodzić", "iść", "chodzić", "jść"],
          correct: 0,
          explanation: "'Przyjść' (perfective) pairs with 'przychodzić' (imperfective)."
        },
        {
          question: "Complete: 'Przechodzi przez ten park ___.' (He goes through this park every day)",
          options: ["wczoraj", "jutro", "codziennie", "raz"],
          correct: 2,
          explanation: "'Przechodzić' (imperfective) is used for habitual actions - 'codziennie'."
        },
        {
          question: "How do you say 'I commute to work by train'?",
          options: ["Dojeżdżam do pracy pociągiem", "Dojechałem do pracy pociągiem", "Jadę do pracy pociągiem", "Pojechałem do pracy pociągiem"],
          correct: 0,
          explanation: "'Dojeżdżać' (imperfective) expresses habitual commuting."
        },
        {
          question: "What case is used after 'od' in motion verbs?",
          options: ["Nominative", "Accusative", "Genitive", "Locative"],
          correct: 2,
          explanation: "'Od' (from, away from) takes Genitive case."
        },
        {
          question: "Complete: '___ do ciebie wieczorem.' (I'll stop by your place tonight)",
          options: ["Zachodzę", "Zajdę", "Chodzę", "Idę"],
          correct: 1,
          explanation: "'Zajdę' (perfective) for one-time future visit."
        },
        {
          question: "What's the difference between 'jechać' and 'jeździć'?",
          options: ["Different directions", "'jechać' = one trip, 'jeździć' = habitual/repeated", "'jeździć' = faster", "No difference"],
          correct: 1,
          explanation: "'Jechać' = one-time trip, 'jeździć' = habitual or repeated trips."
        },
        {
          question: "Complete: 'Odszedł ___ stołu.' (He walked away from the table)",
          options: ["do", "od", "z", "na"],
          correct: 1,
          explanation: "'Od stołu' - 'od' + Genitive for moving away from."
        },
        {
          question: "How do you say 'He drives up to the house'?",
          options: ["Podjechał pod dom", "Odjechał od domu", "Wjechał do domu", "Przejechał przez dom"],
          correct: 0,
          explanation: "'Podjechał pod dom' - 'pod-' prefix means approaching."
        }
      ],

      advanced: [
        {
          question: "Complete: 'Dojeżdża do pracy, ale wczoraj ___ się samochodem.' (He commutes to work, but yesterday his car broke down)",
          options: ["zepsuł", "zepsuje", "psuje", "popsuł"],
          correct: 0,
          explanation: "'Zepsuł się' (perfective past) for completed action yesterday."
        },
        {
          question: "What's the most natural way to say 'I walk to work every day'?",
          options: ["Idę do pracy codziennie", "Chodzę do pracy codziennie", "Dochodzę do pracy codziennie", "Przychodzę do pracy codziennie"],
          correct: 2,
          explanation: "'Dochodzę do pracy codziennie' - 'dochodzić' for habitual commuting on foot."
        },
        {
          question: "Complete: 'Nie mógł ___ do centrum, bo zabrakło mu paliwa.' (He couldn't reach the center because he ran out of fuel)",
          options: ["dojechać", "dojeżdżać", "jechać", "pojechać"],
          correct: 0,
          explanation: "'Dojechać' (perfective) after 'mógł' for reaching destination."
        },
        {
          question: "How do you express 'He goes by this route every day'?",
          options: ["Przechodzi tą drogą codziennie", "Przeszedł tą drogą codziennie", "Przechodził tą drogą codziennie", "Przejdzie tą drogą codziennie"],
          correct: 0,
          explanation: "'Przechodzi' (imperfective present) for habitual action."
        },
        {
          question: "What does 'Zajeżdża po zakupy' mean?",
          options: ["He's doing shopping", "He drives by for shopping", "He finished shopping", "He will go shopping"],
          correct: 1,
          explanation: "'Zajeżdża po zakupy' - habitual stopping by to do shopping."
        },
        {
          question: "Complete: 'Często ___ po mieście bez celu.' (He often drives around the city aimlessly)",
          options: ["jeździ", "jedzie", "pojechał", "dojeżdża"],
          correct: 0,
          explanation: "'Jeździ' (multidirectional) for aimless, repeated movement."
        },
        {
          question: "How do you say 'The train is approaching the station'?",
          options: ["Pociąg dochodzi do stacji", "Pociąg podchodzi do stacji", "Pociąg przychodzi do stacji", "Pociąg wchodzi do stacji"],
          correct: 1,
          explanation: "'Podchodzi do stacji' - approaching (though 'podjeżdża' would be more natural for vehicles)."
        },
        {
          question: "What's the instrumental form of 'rower' in 'I go by bike'?",
          options: ["rower", "roweru", "rowerem", "rowerze"],
          correct: 2,
          explanation: "'Rowerem' - instrumental case for means of transportation."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "___ do sklepu po mleko.",
          english: "I'm going to the store for milk.",
          blank: 0,
          options: ["Idę", "Chodzę", "Szedłem", "Pójdę"],
          correct: 0,
          explanation: "'Idę' for current one-directional movement."
        },
        {
          polish: "Wczoraj ___ do kina.",
          english: "Yesterday I went to the cinema.",
          blank: 1,
          options: ["idę", "poszedłem", "chodzę", "będę szedł"],
          correct: 1,
          explanation: "'Poszedłem' (perfective past) for completed action."
        },
        {
          polish: "___ z domu o ósmej.",
          english: "He leaves the house at eight.",
          blank: 0,
          options: ["Wychodzi", "Wchodzi", "Przychodzi", "Dochodzi"],
          correct: 0,
          explanation: "'Wychodzi' means 'leaves' (going out)."
        },
        {
          polish: "Jadę do pracy ___.",
          english: "I go to work by bus.",
          blank: 3,
          options: ["autobus", "autobusem", "autobusu", "autobusie"],
          correct: 1,
          explanation: "'Autobusem' - instrumental for means of transport."
        }
      ],

      intermediate: [
        {
          polish: "___ do ciebie wieczorem.",
          english: "I'll stop by your place tonight.",
          blank: 0,
          options: ["Zachodzę", "Zajdę", "Chodzę", "Idę"],
          correct: 1,
          explanation: "'Zajdę' (perfective) for future one-time visit."
        },
        {
          polish: "Codziennie ___ przez ten park.",
          english: "Every day he goes through this park.",
          blank: 1,
          options: ["przeszedł", "przechodzi", "przejdzie", "przejść"],
          correct: 1,
          explanation: "'Przechodzi' (imperfective) for habitual action."
        },
        {
          polish: "___ do pracy pociągiem.",
          english: "He commutes to work by train.",
          blank: 0,
          options: ["Dojeżdża", "Dojechał", "Dojedzie", "Jechać"],
          correct: 0,
          explanation: "'Dojeżdża' (imperfective) for habitual commuting."
        },
        {
          polish: "Podszedł ___ okna.",
          english: "He approached the window.",
          blank: 1,
          options: ["na", "do", "od", "z"],
          correct: 1,
          explanation: "'Do okna' - accusative for direction toward."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the motion verb with its meaning",
          pairs: [
            { polish: "przyjść", english: "to come (arrive on foot)" },
            { polish: "wyjść", english: "to go out, leave" },
            { polish: "wejść", english: "to enter" },
            { polish: "przejść", english: "to go through" },
            { polish: "podejść", english: "to approach" },
            { polish: "odejść", english: "to go away" },
            { polish: "zajść", english: "to stop by" },
            { polish: "dojść", english: "to reach" }
          ]
        },
        {
          instruction: "Match the prefix with its meaning",
          pairs: [
            { polish: "przy-", english: "arrival, coming to" },
            { polish: "wy-", english: "exit, going out" },
            { polish: "w-", english: "entering" },
            { polish: "prze-", english: "through, across" },
            { polish: "pod-", english: "approaching" },
            { polish: "od-", english: "moving away" },
            { polish: "za-", english: "stopping by" },
            { polish: "do-", english: "reaching destination" }
          ]
        }
      ]
    }
  }
];