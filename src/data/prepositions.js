export const prepositions = [
  {
    name: "Genitive Prepositions",
    polish: "Przyimki z dopełniaczem",
    case: "Genitive",
    difficulty: "intermediate",
    icon: "📍",
    explanation:
      "These prepositions ALWAYS require the Genitive case. They often express relationships of origin, absence, or possession.",
    analogy:
      "Think of them as 'from/of/without' relationships - they show where something comes from or what it lacks.",
    commonPrepositions: [
      {
        polish: "do",
        english: "to, into",
        example: "Idę do domu",
        exampleEng: "I'm going to the house",
        highlight: "domu",
        caseForm: "Genitive",
      },
      {
        polish: "z/ze",
        english: "from, out of",
        example: "Wracam z pracy",
        exampleEng: "I'm returning from work",
        highlight: "pracy",
        caseForm: "Genitive",
      },
      {
        polish: "od",
        english: "from (a person/place)",
        example: "List od przyjaciela",
        exampleEng: "A letter from a friend",
        highlight: "przyjaciela",
        caseForm: "Genitive",
      },
      {
        polish: "bez",
        english: "without",
        example: "Kawa bez cukru",
        exampleEng: "Coffee without sugar",
        highlight: "cukru",
        caseForm: "Genitive",
      },
      {
        polish: "dla",
        english: "for (beneficiary)",
        example: "Prezent dla matki",
        exampleEng: "A gift for mother",
        highlight: "matki",
        caseForm: "Genitive",
      },
      {
        polish: "u",
        english: "at (someone's place)",
        example: "Jestem u babci",
        exampleEng: "I'm at grandma's",
        highlight: "babci",
        caseForm: "Genitive",
      },
    ],
    quiz: {
      beginner: [
        {
          question:
            "Which preposition requires Genitive? 'Idę ___ sklepu' (I'm going to the store)",
          options: ["do", "w", "na", "dla"],
          correct: 0,
          explanation:
            "'Do' (to/into) always requires Genitive case. 'sklepu' is Genitive form of 'sklep'.",
        },
        {
          question:
            "Complete: 'Kawa ___ mleka' (Coffee without milk)",
          options: ["bez", "z", "od", "u"],
          correct: 0,
          explanation:
            "'Bez' (without) takes Genitive case. 'mleka' is Genitive form.",
        },
        {
          question:
            "Which is correct? 'Prezent ___ dziecka' (A gift for the child)",
          options: ["dla", "do", "z", "bez"],
          correct: 0,
          explanation: "'Dla' (for) requires Genitive. 'dziecka' is Genitive.",
        },
      ],
      intermediate: [
        {
          question:
            "Choose correct form: 'Wracam ___ szkoły' (I'm returning from school)",
          options: ["z", "ze", "od", "do"],
          correct: 0,
          explanation:
            "'Z' (from) takes Genitive. Use 'ze' before consonant clusters.",
        },
        {
          question:
            "Complete: 'List ___ przyjaciela' (A letter from a friend)",
          options: ["od", "z", "dla", "do"],
          correct: 0,
          explanation:
            "'Od' (from a person) requires Genitive. 'przyjaciela' is Genitive form.",
        },
        {
          question:
            "Which is Genitive? 'Jestem ___ lekarza' (I'm at the doctor's)",
          options: ["u", "w", "na", "przy"],
          correct: 0,
          explanation:
            "'U' (at someone's place) takes Genitive. 'lekarza' is Genitive.",
        },
      ],
      advanced: [
        {
          question:
            "Complete correctly: 'Wyszedł zza ___ i znad ___' (He came out from behind the tree and from above the river)",
          options: [
            "drzewa, rzeki",
            "drzewo, rzeka",
            "drzewem, rzeką",
            "drzewu, rzece",
          ],
          correct: 0,
          explanation:
            "Compound prepositions 'zza' and 'znad' require Genitive case.",
        },
        {
          question:
            "Which requires Genitive? 'Stoi naprzeciwko ___' (Standing opposite the building)",
          options: ["budynku", "budynek", "budynkiem", "budynkowi"],
          correct: 0,
          explanation:
            "'Naprzeciwko' (opposite) takes Genitive. 'budynku' is correct.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Idę ___ parku.",
          correct: "do",
          options: ["do", "w", "na", "z"],
          english: "I'm going to the park.",
          hint: "Motion towards (Genitive)",
        },
        {
          sentence: "Herbata ___ cukru.",
          correct: "bez",
          options: ["bez", "z", "dla", "od"],
          english: "Tea without sugar.",
          hint: "Absence/lacking",
        },
      ],
      intermediate: [
        {
          sentence: "Wracam ___ biura.",
          correct: "z",
          options: ["z", "od", "do", "u"],
          english: "I'm returning from the office.",
          hint: "Coming from a place",
        },
        {
          sentence: "To jest ___ ciebie.",
          correct: "dla",
          options: ["dla", "do", "od", "u"],
          english: "This is for you.",
          hint: "Beneficiary",
        },
      ],
      advanced: [
        {
          sentence: "Mieszkam niedaleko ___ centrum.",
          correct: "od",
          options: ["od", "z", "do", "u"],
          english: "I live not far from the center.",
          hint: "Distance from",
        },
        {
          sentence: "Wyszedł spod ___ i zza ___.",
          correct: "mostu",
          options: ["mostu", "most", "mostem", "moście"],
          english: "He came out from under the bridge and from behind.",
          hint: "Compound preposition + Genitive",
        },
      ],
    },
    matchPairs: {
      beginner: [
        {
          pairs: [
            { preposition: "do", case: "Genitive", example: "do domu" },
            { preposition: "bez", case: "Genitive", example: "bez ciebie" },
            { preposition: "z", case: "Genitive", example: "z miasta" },
            { preposition: "dla", case: "Genitive", example: "dla mnie" },
          ],
          distractors: ["Dative", "Accusative", "Instrumental"],
        },
      ],
      intermediate: [
        {
          pairs: [
            { preposition: "od", case: "Genitive", example: "od babci" },
            { preposition: "u", case: "Genitive", example: "u lekarza" },
            { preposition: "obok", case: "Genitive", example: "obok domu" },
            { preposition: "koło", case: "Genitive", example: "koło szkoły" },
          ],
          distractors: ["Locative", "Dative", "Accusative"],
        },
      ],
      advanced: [
        {
          pairs: [
            { preposition: "zza", case: "Genitive", example: "zza drzewa" },
            { preposition: "spod", case: "Genitive", example: "spod stołu" },
            { preposition: "znad", case: "Genitive", example: "znad rzeki" },
            {
              preposition: "spośród",
              case: "Genitive",
              example: "spośród nas",
            },
          ],
          distractors: ["Instrumental", "Locative", "Accusative"],
        },
      ],
    },
  },
  {
    name: "Dative Prepositions",
    polish: "Przyimki z celownikiem",
    case: "Dative",
    difficulty: "intermediate",
    icon: "🎯",
    explanation:
      "Very few prepositions require the Dative case in Polish. These express direction, opposition, or gratitude.",
    analogy:
      "Think of them as 'towards' or 'thanks to' - they show direction or credit.",
    commonPrepositions: [
      {
        polish: "ku",
        english: "towards, to",
        example: "Idę ku rzece",
        exampleEng: "I'm going towards the river",
        highlight: "rzece",
        caseForm: "Dative",
      },
      {
        polish: "przeciw(ko)",
        english: "against",
        example: "Jestem przeciw wojnie",
        exampleEng: "I'm against war",
        highlight: "wojnie",
        caseForm: "Dative",
      },
      {
        polish: "dzięki",
        english: "thanks to",
        example: "Dzięki tobie",
        exampleEng: "Thanks to you",
        highlight: "tobie",
        caseForm: "Dative",
      },
      {
        polish: "wbrew",
        english: "contrary to, despite",
        example: "Wbrew regułom",
        exampleEng: "Contrary to the rules",
        highlight: "regułom",
        caseForm: "Dative",
      },
    ],
    quiz: {
      beginner: [
        {
          question: "Which preposition takes Dative? '___ tobie' (thanks to you)",
          options: ["dzięki", "z", "dla", "bez"],
          correct: 0,
          explanation: "'Dzięki' (thanks to) requires Dative case.",
        },
        {
          question:
            "Complete: 'Idę ___ słońcu' (I'm going towards the sun)",
          options: ["ku", "do", "na", "w"],
          correct: 0,
          explanation: "'Ku' (towards) takes Dative. 'słońcu' is Dative form.",
        },
      ],
      intermediate: [
        {
          question:
            "Which is correct? 'Jestem ___ temu pomysłowi' (I'm against this idea)",
          options: ["przeciw", "dla", "od", "bez"],
          correct: 0,
          explanation:
            "'Przeciw' (against) requires Dative. 'pomysłowi' is Dative.",
        },
        {
          question:
            "Complete: '___ moim radom' (Contrary to my advice)",
          options: ["Wbrew", "Dzięki", "Ku", "Przeciw"],
          correct: 0,
          explanation: "'Wbrew' (contrary to) takes Dative case.",
        },
      ],
      advanced: [
        {
          question:
            "Choose correct: '___ wszystkim przeciwnościom' (Despite all adversities)",
          options: ["Wbrew", "Mimo", "Dzięki", "Przeciw"],
          correct: 0,
          explanation:
            "'Wbrew' with Dative means 'despite'. 'przeciwnościom' is Dative plural.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "___ tobie jestem szczęśliwy.",
          correct: "Dzięki",
          options: ["Dzięki", "Dla", "Z", "Ku"],
          english: "Thanks to you, I'm happy.",
          hint: "Expressing gratitude",
        },
      ],
      intermediate: [
        {
          sentence: "Idzie ___ lepszej przyszłości.",
          correct: "ku",
          options: ["ku", "do", "w", "na"],
          english: "Going towards a better future.",
          hint: "Direction (Dative)",
        },
        {
          sentence: "Jestem ___ wojnie.",
          correct: "przeciw",
          options: ["przeciw", "dla", "bez", "z"],
          english: "I'm against war.",
          hint: "Opposition",
        },
      ],
      advanced: [
        {
          sentence: "___ moim oczekiwaniom, to się udało.",
          correct: "Wbrew",
          options: ["Wbrew", "Mimo", "Dzięki", "Przeciw"],
          english: "Contrary to my expectations, it succeeded.",
          hint: "Contrary to (Dative)",
        },
      ],
    },
    matchPairs: {
      beginner: [
        {
          pairs: [
            { preposition: "dzięki", case: "Dative", example: "dzięki tobie" },
            { preposition: "ku", case: "Dative", example: "ku rzece" },
            { preposition: "przeciw", case: "Dative", example: "przeciw nim" },
          ],
          distractors: ["Genitive", "Locative", "Instrumental"],
        },
      ],
      intermediate: [
        {
          pairs: [
            { preposition: "wbrew", case: "Dative", example: "wbrew regułom" },
            {
              preposition: "przeciwko",
              case: "Dative",
              example: "przeciwko wojnie",
            },
          ],
          distractors: ["Genitive", "Accusative"],
        },
      ],
      advanced: [
        {
          pairs: [
            {
              preposition: "naprzeciw",
              case: "Dative",
              example: "naprzeciw kościołowi",
            },
            { preposition: "ku", case: "Dative", example: "ku szczęściu" },
          ],
          distractors: ["Genitive", "Locative"],
        },
      ],
    },
  },
  {
    name: "Accusative Prepositions",
    polish: "Przyimki z biernikiem",
    case: "Accusative",
    difficulty: "intermediate",
    icon: "➡️",
    explanation:
      "These prepositions require Accusative case and typically express motion, time periods, or direction. Note: 'na' and 'w' can take BOTH Accusative (motion) and Locative (location).",
    analogy:
      "Think of Accusative prepositions as action words - they show movement or direction towards something.",
    commonPrepositions: [
      {
        polish: "na",
        english: "onto, to, for (motion)",
        example: "Idę na pocztę",
        exampleEng: "I'm going to the post office",
        highlight: "pocztę",
        caseForm: "Accusative",
      },
      {
        polish: "w",
        english: "into (motion)",
        example: "Wchodzę w las",
        exampleEng: "I'm entering the forest",
        highlight: "las",
        caseForm: "Accusative",
      },
      {
        polish: "przez",
        english: "through, across, for (time)",
        example: "Idę przez park",
        exampleEng: "I'm walking through the park",
        highlight: "park",
        caseForm: "Accusative",
      },
      {
        polish: "po",
        english: "after, for (to get)",
        example: "Idę po chleb",
        exampleEng: "I'm going for bread",
        highlight: "chleb",
        caseForm: "Accusative",
      },
      {
        polish: "o",
        english: "about, at (time)",
        example: "Rozmawiam o filmie",
        exampleEng: "I'm talking about the movie",
        highlight: "filmie",
        caseForm: "Accusative/Locative",
      },
      {
        polish: "za",
        english: "behind, for (exchange)",
        example: "Kupuję za złotówkę",
        exampleEng: "I'm buying for a zloty",
        highlight: "złotówkę",
        caseForm: "Accusative",
      },
    ],
    quiz: {
      beginner: [
        {
          question:
            "Which case after 'na' with motion? 'Idę ___ pocztę' (I'm going to the post office)",
          options: ["Accusative", "Locative", "Genitive", "Instrumental"],
          correct: 0,
          explanation:
            "'Na' with motion (going TO) requires Accusative. 'pocztę' is Accusative.",
        },
        {
          question:
            "Complete: 'Idę ___ las' (I'm going into the forest)",
          options: ["w", "we", "na", "do"],
          correct: 0,
          explanation: "'W' + Accusative for motion into. 'las' is Accusative.",
        },
        {
          question:
            "Which preposition? 'Idę ___ sklep' (I'm walking through the store)",
          options: ["przez", "w", "na", "do"],
          correct: 0,
          explanation: "'Przez' (through) requires Accusative case.",
        },
      ],
      intermediate: [
        {
          question:
            "Choose correct: 'Idę ___ chleb' (I'm going for bread)",
          options: ["po", "przez", "na", "do"],
          correct: 0,
          explanation: "'Po' + Accusative means 'going to get something'.",
        },
        {
          question:
            "Complete: 'Kupuję prezent ___ dziesięć złotych' (I'm buying a gift for ten zloty)",
          options: ["za", "przez", "po", "na"],
          correct: 0,
          explanation: "'Za' (for/in exchange) takes Accusative case.",
        },
        {
          question:
            "Which is motion? 'Wchodzę ___ budynek' (I'm entering the building)",
          options: ["w", "we", "na", "przy"],
          correct: 0,
          explanation:
            "'W' + Accusative indicates motion into. 'budynek' is Accusative.",
        },
      ],
      advanced: [
        {
          question:
            "Choose correct preposition + case: 'Czekałem ___ godzinę' (I waited for an hour)",
          options: ["przez", "w", "na", "za"],
          correct: 0,
          explanation:
            "'Przez' + Accusative for duration of time. 'godzinę' is Accusative.",
        },
        {
          question:
            "Which is Accusative? 'Rozmawiam ___ problem' (I'm talking about the problem)",
          options: ["o", "w", "na", "przy"],
          correct: 0,
          explanation:
            "'O' can take Accusative or Locative. Here 'problem' is Accusative.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Idę ___ pocztę.",
          correct: "na",
          options: ["na", "w", "do", "przy"],
          english: "I'm going to the post office.",
          hint: "Motion to a place (Accusative)",
        },
        {
          sentence: "Chodzę ___ park.",
          correct: "przez",
          options: ["przez", "w", "na", "po"],
          english: "I walk through the park.",
          hint: "Through",
        },
      ],
      intermediate: [
        {
          sentence: "Idę ___ mleko.",
          correct: "po",
          options: ["po", "na", "przez", "za"],
          english: "I'm going for milk.",
          hint: "Going to get something",
        },
        {
          sentence: "Kupuję to ___ pięć złotych.",
          correct: "za",
          options: ["za", "przez", "po", "na"],
          english: "I'm buying this for five zloty.",
          hint: "Exchange/price",
        },
      ],
      advanced: [
        {
          sentence: "Czytałem ___ całą noc.",
          correct: "przez",
          options: ["przez", "w", "na", "za"],
          english: "I read through the whole night.",
          hint: "Duration of time",
        },
      ],
    },
    matchPairs: {
      beginner: [
        {
          pairs: [
            {
              preposition: "na (motion)",
              case: "Accusative",
              example: "na pocztę",
            },
            {
              preposition: "w (motion)",
              case: "Accusative",
              example: "w las",
            },
            { preposition: "przez", case: "Accusative", example: "przez park" },
          ],
          distractors: ["Locative", "Genitive", "Instrumental"],
        },
      ],
      intermediate: [
        {
          pairs: [
            { preposition: "po", case: "Accusative", example: "po chleb" },
            { preposition: "za", case: "Accusative", example: "za pieniądze" },
            { preposition: "o", case: "Accusative", example: "o problem" },
          ],
          distractors: ["Locative", "Genitive", "Dative"],
        },
      ],
      advanced: [
        {
          pairs: [
            {
              preposition: "przez (time)",
              case: "Accusative",
              example: "przez godzinę",
            },
            {
              preposition: "pod (motion)",
              case: "Accusative",
              example: "pod stół",
            },
          ],
          distractors: ["Instrumental", "Locative"],
        },
      ],
    },
  },
  {
    name: "Instrumental Prepositions",
    polish: "Przyimki z narzędnikiem",
    case: "Instrumental",
    difficulty: "intermediate",
    icon: "🔧",
    explanation:
      "These prepositions require the Instrumental case and often express accompaniment, location (with static position), or means.",
    analogy:
      "Think of Instrumental as 'with' or 'by means of' - showing companionship or tools.",
    commonPrepositions: [
      {
        polish: "z",
        english: "with (accompaniment)",
        example: "Idę z przyjacielem",
        exampleEng: "I'm going with a friend",
        highlight: "przyjacielem",
        caseForm: "Instrumental",
      },
      {
        polish: "przed",
        english: "in front of, before",
        example: "Przed domem",
        exampleEng: "In front of the house",
        highlight: "domem",
        caseForm: "Instrumental",
      },
      {
        polish: "za",
        english: "behind",
        example: "Za drzewem",
        exampleEng: "Behind the tree",
        highlight: "drzewem",
        caseForm: "Instrumental",
      },
      {
        polish: "pod",
        english: "under (location)",
        example: "Pod stołem",
        exampleEng: "Under the table",
        highlight: "stołem",
        caseForm: "Instrumental",
      },
      {
        polish: "nad",
        english: "above, over",
        example: "Nad morzem",
        exampleEng: "Above/by the sea",
        highlight: "morzem",
        caseForm: "Instrumental",
      },
      {
        polish: "między",
        english: "between",
        example: "Między nami",
        exampleEng: "Between us",
        highlight: "nami",
        caseForm: "Instrumental",
      },
    ],
    quiz: {
      beginner: [
        {
          question:
            "Which case with 'z' (with)? 'Idę z ___' (I'm going with a friend)",
          options: [
            "przyjacielem (Instrumental)",
            "przyjaciel (Nominative)",
            "przyjaciela (Genitive)",
            "przyjacielowi (Dative)",
          ],
          correct: 0,
          explanation: "'Z' meaning 'with' requires Instrumental case.",
        },
        {
          question:
            "Complete: 'Kot śpi ___ stołem' (The cat sleeps under the table)",
          options: ["pod", "na", "w", "przy"],
          correct: 0,
          explanation: "'Pod' (under) requires Instrumental for location.",
        },
      ],
      intermediate: [
        {
          question:
            "Which preposition? 'Stoi ___ domem' (Standing in front of the house)",
          options: ["przed", "za", "nad", "pod"],
          correct: 0,
          explanation:
            "'Przed' (in front of) takes Instrumental. 'domem' is Instrumental.",
        },
        {
          question:
            "Complete: 'Wakacje ___ morzem' (Vacation by the sea)",
          options: ["nad", "przy", "w", "na"],
          correct: 0,
          explanation: "'Nad' (above/by) requires Instrumental case.",
        },
        {
          question:
            "Which is correct? '___ tobą i mną' (Between you and me)",
          options: ["Między", "Z", "Przed", "Pod"],
          correct: 0,
          explanation: "'Między' (between) takes Instrumental case.",
        },
      ],
      advanced: [
        {
          question:
            "Choose correct: 'Spotkajmy się ___ szkołą' (Let's meet in front of the school)",
          options: ["przed", "za", "obok", "przy"],
          correct: 0,
          explanation:
            "'Przed' + Instrumental for 'in front of'. 'szkołą' is Instrumental.",
        },
        {
          question:
            "Complete: 'Mieszkam ___ pierwszym i drugim piętrem' (I live between the first and second floor)",
          options: ["między", "nad", "pod", "przy"],
          correct: 0,
          explanation: "'Między' requires Instrumental for both objects.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Idę ___ mamą.",
          correct: "z",
          options: ["z", "do", "dla", "u"],
          english: "I'm going with mom.",
          hint: "Accompaniment (Instrumental)",
        },
        {
          sentence: "Kot śpi ___ łóżkiem.",
          correct: "pod",
          options: ["pod", "na", "w", "przy"],
          english: "The cat sleeps under the bed.",
          hint: "Under (location)",
        },
      ],
      intermediate: [
        {
          sentence: "Czekam ___ kinem.",
          correct: "przed",
          options: ["przed", "za", "w", "na"],
          english: "I'm waiting in front of the cinema.",
          hint: "In front of",
        },
        {
          sentence: "Spędzam lato ___ morzem.",
          correct: "nad",
          options: ["nad", "przy", "w", "na"],
          english: "I spend summer by the sea.",
          hint: "Above/by (Instrumental)",
        },
      ],
      advanced: [
        {
          sentence: "To pozostaje ___ nami.",
          correct: "między",
          options: ["między", "z", "przed", "za"],
          english: "This stays between us.",
          hint: "Between",
        },
      ],
    },
    matchPairs: {
      beginner: [
        {
          pairs: [
            {
              preposition: "z (with)",
              case: "Instrumental",
              example: "z tobą",
            },
            { preposition: "pod", case: "Instrumental", example: "pod stołem" },
            {
              preposition: "przed",
              case: "Instrumental",
              example: "przed domem",
            },
          ],
          distractors: ["Genitive", "Accusative", "Locative"],
        },
      ],
      intermediate: [
        {
          pairs: [
            { preposition: "nad", case: "Instrumental", example: "nad rzeką" },
            { preposition: "za", case: "Instrumental", example: "za domem" },
            {
              preposition: "między",
              case: "Instrumental",
              example: "między nami",
            },
          ],
          distractors: ["Genitive", "Locative", "Accusative"],
        },
      ],
      advanced: [
        {
          pairs: [
            {
              preposition: "pomiędzy",
              case: "Instrumental",
              example: "pomiędzy drzewami",
            },
            {
              preposition: "ponad",
              case: "Instrumental",
              example: "ponad nami",
            },
          ],
          distractors: ["Genitive", "Locative"],
        },
      ],
    },
  },
  {
    name: "Locative Prepositions",
    polish: "Przyimki z miejscowniku",
    case: "Locative",
    difficulty: "beginner",
    icon: "📌",
    explanation:
      "Locative case is ALWAYS used with a preposition - it never stands alone! These prepositions express static location (where something IS, not where it's going).",
    analogy:
      "Think of Locative as a photo - it shows where things ARE sitting still, not moving.",
    commonPrepositions: [
      {
        polish: "w",
        english: "in (location)",
        example: "Jestem w domu",
        exampleEng: "I'm at home",
        highlight: "domu",
        caseForm: "Locative",
      },
      {
        polish: "na",
        english: "on, at (location)",
        example: "Książka jest na stole",
        exampleEng: "The book is on the table",
        highlight: "stole",
        caseForm: "Locative",
      },
      {
        polish: "o",
        english: "about",
        example: "Rozmawiam o filmie",
        exampleEng: "I'm talking about the movie",
        highlight: "filmie",
        caseForm: "Locative",
      },
      {
        polish: "po",
        english: "on, upon (surface)",
        example: "Chodzę po lesie",
        exampleEng: "I walk in/through the forest",
        highlight: "lesie",
        caseForm: "Locative",
      },
      {
        polish: "przy",
        english: "by, near, at",
        example: "Siedzę przy oknie",
        exampleEng: "I'm sitting by the window",
        highlight: "oknie",
        caseForm: "Locative",
      },
    ],
    quiz: {
      beginner: [
        {
          question:
            "Which case for location? 'Jestem ___ domu' (I'm at home)",
          options: [
            "w (Locative)",
            "w (Accusative)",
            "do (Genitive)",
            "na (Accusative)",
          ],
          correct: 0,
          explanation:
            "'W' with static location requires Locative. 'domu' is Locative.",
        },
        {
          question:
            "Complete: 'Książka jest ___ stole' (The book is on the table)",
          options: ["na", "w", "przy", "pod"],
          correct: 0,
          explanation:
            "'Na' + Locative for static location on surface. 'stole' is Locative.",
        },
        {
          question:
            "Which preposition? 'Rozmawiam ___ tobie' (I'm talking about you)",
          options: ["o", "z", "do", "dla"],
          correct: 0,
          explanation: "'O' (about) requires Locative case.",
        },
      ],
      intermediate: [
        {
          question:
            "Choose correct: 'Siedzę ___ oknie' (I'm sitting by the window)",
          options: ["przy", "w", "na", "obok"],
          correct: 0,
          explanation:
            "'Przy' (by/near) takes Locative. 'oknie' is Locative form.",
        },
        {
          question:
            "Complete: 'Spaceruję ___ parku' (I'm walking in the park)",
          options: ["w", "po", "przez", "na"],
          correct: 0,
          explanation:
            "'W' + Locative for location where action happens. 'parku' is Locative.",
        },
        {
          question:
            "Which is static location? 'Mieszkam ___ Warszawie' (I live in Warsaw)",
          options: ["w", "do", "z", "na"],
          correct: 0,
          explanation:
            "'W' + Locative for static location. Cities use 'w' + Locative.",
        },
      ],
      advanced: [
        {
          question:
            "Choose correct form: 'Myślę ___ mojej przyszłości' (I'm thinking about my future)",
          options: ["o", "na", "w", "do"],
          correct: 0,
          explanation:
            "'O' (about) requires Locative. 'przyszłości' is Locative form.",
        },
        {
          question:
            "Complete: 'Mówią ___ nowej ustawie' (They're talking about the new law)",
          options: ["o", "z", "przez", "dla"],
          correct: 0,
          explanation: "'O' + Locative for topics of discussion.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Jestem ___ szkole.",
          correct: "w",
          options: ["w", "na", "do", "z"],
          english: "I'm at school.",
          hint: "Static location inside",
        },
        {
          sentence: "Książka leży ___ stole.",
          correct: "na",
          options: ["na", "w", "pod", "przy"],
          english: "The book is lying on the table.",
          hint: "On a surface (Locative)",
        },
      ],
      intermediate: [
        {
          sentence: "Siedzę ___ komputerze.",
          correct: "przy",
          options: ["przy", "w", "na", "obok"],
          english: "I'm sitting at the computer.",
          hint: "By/at (Locative)",
        },
        {
          sentence: "Rozmawiamy ___ pogodzie.",
          correct: "o",
          options: ["o", "z", "do", "na"],
          english: "We're talking about the weather.",
          hint: "About (Locative)",
        },
      ],
      advanced: [
        {
          sentence: "Spotkajmy się ___ kawiarni ___ rogu.",
          correct: "w",
          options: ["w", "na", "przy", "pod"],
          english: "Let's meet at the café on the corner.",
          hint: "Location (Locative)",
        },
      ],
    },
    matchPairs: {
      beginner: [
        {
          pairs: [
            {
              preposition: "w (location)",
              case: "Locative",
              example: "w domu",
            },
            {
              preposition: "na (location)",
              case: "Locative",
              example: "na stole",
            },
            { preposition: "o", case: "Locative", example: "o tobie" },
          ],
          distractors: ["Accusative", "Genitive", "Instrumental"],
        },
      ],
      intermediate: [
        {
          pairs: [
            { preposition: "przy", case: "Locative", example: "przy oknie" },
            { preposition: "po", case: "Locative", example: "po ulicy" },
            { preposition: "w", case: "Locative", example: "w Krakowie" },
          ],
          distractors: ["Accusative", "Genitive", "Dative"],
        },
      ],
      advanced: [
        {
          pairs: [
            {
              preposition: "o (about)",
              case: "Locative",
              example: "o polityce",
            },
            {
              preposition: "po (after)",
              case: "Locative",
              example: "po południu",
            },
          ],
          distractors: ["Accusative", "Instrumental"],
        },
      ],
    },
  },
  {
    name: "Dual-Case Prepositions",
    polish: "Przyimki wieloprzypadkowe",
    case: "Multiple",
    difficulty: "advanced",
    icon: "🔄",
    explanation:
      "Some prepositions can take DIFFERENT cases depending on meaning! The most important: 'w' and 'na' (Accusative for motion, Locative for location), 'z' (Genitive for 'from', Instrumental for 'with'), 'o' (Accusative or Locative for 'about').",
    analogy:
      "Think of these as chameleons - they change their case based on whether you're moving or staying still!",
    commonPrepositions: [
      {
        polish: "w",
        english: "in/into",
        example: "w domu (Loc) vs w dom (Acc)",
        exampleEng: "in the house vs into the house",
        highlight: "domu vs dom",
        caseForm: "Locative/Accusative",
      },
      {
        polish: "na",
        english: "on/onto",
        example: "na stole (Loc) vs na stół (Acc)",
        exampleEng: "on the table vs onto the table",
        highlight: "stole vs stół",
        caseForm: "Locative/Accusative",
      },
      {
        polish: "z",
        english: "from/with",
        example: "z domu (Gen) vs z mamą (Ins)",
        exampleEng: "from home vs with mom",
        highlight: "domu vs mamą",
        caseForm: "Genitive/Instrumental",
      },
      {
        polish: "pod",
        english: "under (location/motion)",
        example: "pod stołem (Ins) vs pod stół (Acc)",
        exampleEng: "under the table vs (going) under the table",
        highlight: "stołem vs stół",
        caseForm: "Instrumental/Accusative",
      },
      {
        polish: "za",
        english: "behind (location/motion)",
        example: "za domem (Ins) vs za dom (Acc)",
        exampleEng: "behind the house vs (going) behind the house",
        highlight: "domem vs dom",
        caseForm: "Instrumental/Accusative",
      },
    ],
    quiz: {
      beginner: [
        {
          question:
            "Which is correct? 'Jestem ___ (in) domu' (I'm at home - location)",
          options: [
            "w domu (Locative)",
            "w dom (Accusative)",
            "do domu (Genitive)",
            "z domu (Genitive)",
          ],
          correct: 0,
          explanation: "Static location requires Locative. 'w domu' is correct.",
        },
        {
          question:
            "Which is motion? 'Idę ___ dom' (I'm going home - motion)",
          options: [
            "w dom (Accusative)",
            "w domu (Locative)",
            "do domu (Genitive)",
            "na dom (Accusative)",
          ],
          correct: 0,
          explanation:
            "Motion INTO requires 'w' + Accusative. 'w dom' shows movement.",
        },
      ],
      intermediate: [
        {
          question:
            "Choose correct: 'Wracam ___ pracy' (I'm returning FROM work)",
          options: [
            "z pracy (Genitive)",
            "z pracą (Instrumental)",
            "do pracy (Genitive)",
            "w pracy (Locative)",
          ],
          correct: 0,
          explanation:
            "'Z' meaning 'from' requires Genitive. 'z pracy' is correct.",
        },
        {
          question:
            "Complete: 'Idę ___ przyjacielem' (I'm going WITH a friend)",
          options: [
            "z przyjacielem (Instrumental)",
            "z przyjaciela (Genitive)",
            "do przyjaciela (Genitive)",
            "przy przyjacielu (Locative)",
          ],
          correct: 0,
          explanation:
            "'Z' meaning 'with' requires Instrumental. 'z przyjacielem' is correct.",
        },
        {
          question:
            "Which is location? 'Książka jest ___ stole' (The book is on the table)",
          options: [
            "na stole (Locative)",
            "na stół (Accusative)",
            "pod stołem (Instrumental)",
            "przy stole (Locative)",
          ],
          correct: 0,
          explanation:
            "Static location uses Locative. 'na stole' shows where book IS.",
        },
      ],
      advanced: [
        {
          question:
            "Choose correct form: 'Kładę książkę ___ stół' (I'm putting the book onto the table - motion)",
          options: [
            "na stół (Accusative)",
            "na stole (Locative)",
            "w stół (Accusative)",
            "przy stole (Locative)",
          ],
          correct: 0,
          explanation:
            "Motion ONTO requires 'na' + Accusative. 'na stół' shows action.",
        },
        {
          question:
            "Complete: 'Czołgam się ___ stół' (I'm crawling under the table - motion)",
          options: [
            "pod stół (Accusative)",
            "pod stołem (Instrumental)",
            "w stół (Accusative)",
            "za stół (Accusative)",
          ],
          correct: 0,
          explanation:
            "Motion UNDER requires 'pod' + Accusative. Shows movement direction.",
        },
        {
          question:
            "Which shows location? 'Siedzę ___ drzewem' (I'm sitting behind the tree)",
          options: [
            "za drzewem (Instrumental)",
            "za drzewo (Accusative)",
            "przed drzewem (Instrumental)",
            "pod drzewem (Instrumental)",
          ],
          correct: 0,
          explanation:
            "'Za' with static location uses Instrumental. 'za drzewem' is correct.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Jestem ___ (Locative - location).",
          correct: "w domu",
          options: ["w domu", "w dom", "do domu", "z domu"],
          english: "I'm at home.",
          hint: "Static location (Locative)",
        },
        {
          sentence: "Idę ___ (Accusative - motion).",
          correct: "w dom",
          options: ["w dom", "w domu", "do domu", "z domu"],
          english: "I'm going home (into the house).",
          hint: "Motion into (Accusative)",
        },
      ],
      intermediate: [
        {
          sentence: "Wracam ___ szkoły.",
          correct: "z",
          options: ["z", "ze", "do", "w"],
          english: "I'm returning from school.",
          hint: "From (Genitive)",
        },
        {
          sentence: "Idę ___ tobą.",
          correct: "z",
          options: ["z", "do", "dla", "od"],
          english: "I'm going with you.",
          hint: "With (Instrumental)",
        },
      ],
      advanced: [
        {
          sentence: "Kładę książkę ___ półkę (motion).",
          correct: "na",
          options: ["na", "w", "pod", "przy"],
          english: "I'm putting the book onto the shelf.",
          hint: "Motion onto (Accusative)",
        },
        {
          sentence: "Książka leży ___ półce (location).",
          correct: "na",
          options: ["na", "w", "pod", "przy"],
          english: "The book is lying on the shelf.",
          hint: "Static location (Locative)",
        },
      ],
    },
    matchPairs: {
      beginner: [
        {
          pairs: [
            { preposition: "w (into)", case: "Accusative", example: "w las" },
            { preposition: "w (in)", case: "Locative", example: "w lesie" },
          ],
          distractors: ["Genitive", "Instrumental"],
        },
      ],
      intermediate: [
        {
          pairs: [
            {
              preposition: "z (from)",
              case: "Genitive",
              example: "z miasta",
            },
            {
              preposition: "z (with)",
              case: "Instrumental",
              example: "z tobą",
            },
            {
              preposition: "na (onto)",
              case: "Accusative",
              example: "na stół",
            },
          ],
          distractors: ["Locative", "Dative"],
        },
      ],
      advanced: [
        {
          pairs: [
            {
              preposition: "pod (under, motion)",
              case: "Accusative",
              example: "pod stół",
            },
            {
              preposition: "pod (under, location)",
              case: "Instrumental",
              example: "pod stołem",
            },
            {
              preposition: "za (behind, motion)",
              case: "Accusative",
              example: "za dom",
            },
            {
              preposition: "za (behind, location)",
              case: "Instrumental",
              example: "za domem",
            },
          ],
          distractors: ["Genitive", "Locative"],
        },
      ],
    },
  },
];
