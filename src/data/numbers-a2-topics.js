// A2-Level Topics for Numbers Module
// These three topics build on A1 cardinal numbers (1-100)

export const numberA2Topics = [
  {
    name: "Number-Noun Agreement",
    polish: "Zgoda liczebników z rzeczownikami",
    difficulty: "intermediate",
    level: "A2",
    icon: "📊",

    explanation: "In Polish, the form of the noun changes depending on which number you use with it. This is one of the most important patterns to master. There are three main rules: (1) The number 'one' (jeden/jedna/jedno) uses the Nominative singular form of the noun. (2) Numbers 'two, three, four' (2-4) use the Nominative plural form. (3) Numbers 'five and above' (5+) use the Genitive plural form. Additionally, Polish distinguishes between 'personal' nouns (referring to people) and 'non-personal' nouns (animals, objects), which affects some endings. Understanding this pattern is crucial because you can't simply say 'five cat' in Polish - the noun must be in the correct form to match the number.",

    analogy: "Think of Polish numbers like different-sized containers that hold nouns. The number 'one' is a small single-item box (singular form). Numbers 2-4 are medium boxes that hold a few items (regular plural). Numbers 5+ are big bulk containers (special genitive plural form). Just like you'd say 'one apple, two apples, a bunch of apples' in English, Polish uses different noun forms - except the forms change their endings systematically rather than just adding -s.",

    patterns: [
      {
        number: "1 (jeden/jedna/jedno)",
        case: "Nominative Singular",
        description: "Use the basic dictionary form of the noun",
        examples: [
          { polish: "jeden pies", english: "one dog (masculine)", highlight: "pies" },
          { polish: "jedna książka", english: "one book (feminine)", highlight: "książka" },
          { polish: "jedno krzesło", english: "one chair (neuter)", highlight: "krzesło" }
        ],
        note: "The number 'jeden' must agree with gender: jeden (m), jedna (f), jedno (n)"
      },
      {
        number: "2-4 (dwa, trzy, cztery)",
        case: "Nominative Plural",
        description: "Use the regular plural form of the noun",
        examples: [
          { polish: "dwa psy", english: "two dogs", highlight: "psy" },
          { polish: "trzy książki", english: "three books", highlight: "książki" },
          { polish: "cztery krzesła", english: "four chairs", highlight: "krzesła" }
        ],
        note: "This is the same plural form you use for 'the dogs are...' (psy są...)"
      },
      {
        number: "5+ (pięć, sześć... sto)",
        case: "Genitive Plural",
        description: "Use the genitive plural form - often different from nominative plural",
        examples: [
          { polish: "pięć psów", english: "five dogs", highlight: "psów" },
          { polish: "dziesięć książek", english: "ten books", highlight: "książek" },
          { polish: "dwadzieścia krzeseł", english: "twenty chairs", highlight: "krzeseł" }
        ],
        note: "Genitive plural endings vary: masculine often -ów, feminine often -Ø or -ek/-y"
      }
    ],

    personalVsNonPersonal: {
      explanation: "For numbers 2-4, Polish distinguishes between people (personal) and non-people (non-personal)",
      personalMasculine: {
        description: "Masculine personal nouns (groups of men or mixed gender groups)",
        examples: [
          { polish: "dwaj studenci", english: "two students (male)", note: "Uses 'dwaj' instead of 'dwa'" },
          { polish: "trzej nauczyciele", english: "three teachers (male)", note: "Uses 'trzej'" },
          { polish: "czterej mężczyźni", english: "four men", note: "Uses 'czterej'" }
        ],
        rule: "Numbers change: dwa→dwaj/dwóch, trzy→trzej, cztery→czterej"
      },
      nonPersonal: {
        description: "All other nouns (women, animals, objects, neuter)",
        examples: [
          { polish: "dwie kobiety", english: "two women", note: "Uses 'dwie' for feminine" },
          { polish: "trzy koty", english: "three cats", note: "Animals use regular forms" },
          { polish: "cztery domy", english: "four houses", note: "Objects use regular forms" }
        ],
        rule: "Use regular number forms: dwa/dwie (m/f), trzy, cztery"
      }
    },

    commonNouns: [
      {
        noun: "kot (cat)",
        forms: {
          one: "jeden kot",
          twoToFour: "dwa koty / trzy koty / cztery koty",
          fivePlus: "pięć kotów / dziesięć kotów"
        }
      },
      {
        noun: "pies (dog)",
        forms: {
          one: "jeden pies",
          twoToFour: "dwa psy / trzy psy / cztery psy",
          fivePlus: "pięć psów / dziesięć psów"
        }
      },
      {
        noun: "książka (book)",
        forms: {
          one: "jedna książka",
          twoToFour: "dwie książki / trzy książki / cztery książki",
          fivePlus: "pięć książek / dziesięć książek"
        }
      },
      {
        noun: "jabłko (apple)",
        forms: {
          one: "jedno jabłko",
          twoToFour: "dwa jabłka / trzy jabłka / cztery jabłka",
          fivePlus: "pięć jabłek / dziesięć jabłek"
        }
      },
      {
        noun: "student (male student)",
        forms: {
          one: "jeden student",
          twoToFour: "dwaj studenci / trzej studenci / czterej studenci (PERSONAL)",
          fivePlus: "pięciu studentów (PERSONAL)"
        }
      }
    ],

    quiz: {
      beginner: [
        {
          question: "Complete: 'Mam ___ psa.' (I have one dog)",
          options: ["jeden", "jednego", "dwa", "pięć"],
          correct: 0,
          explanation: "With 'one', use Nominative singular: 'jeden pies' (but 'jednego psa' in Accusative after 'mam')."
        },
        {
          question: "Which form is correct? 'Widzę trzy ___.' (I see three cats)",
          options: ["kot", "koty", "kotów", "kota"],
          correct: 1,
          explanation: "Numbers 2-4 use Nominative plural: 'koty' is the plural form of 'kot'."
        },
        {
          question: "Complete: 'Kupuję pięć ___.' (I'm buying five apples)",
          options: ["jabłko", "jabłka", "jabłek", "jabłki"],
          correct: 2,
          explanation: "Numbers 5+ use Genitive plural: 'jabłek' is the genitive plural of 'jabłko'."
        },
        {
          question: "What case follows the number 'jeden'?",
          options: ["Genitive plural", "Nominative plural", "Nominative singular", "Accusative singular"],
          correct: 2,
          explanation: "'Jeden' (one) is followed by Nominative singular - the dictionary form."
        },
        {
          question: "Which is correct? 'Mam cztery ___.' (I have four books)",
          options: ["książka", "książki", "książek", "książkę"],
          correct: 1,
          explanation: "Numbers 2-4 use Nominative plural: 'książki' is the plural of 'książka'."
        },
        {
          question: "Complete: 'Widzę dziesięć ___.' (I see ten dogs)",
          options: ["pies", "psy", "psów", "psa"],
          correct: 2,
          explanation: "Numbers 5+ use Genitive plural: 'psów' is the genitive plural of 'pies'."
        },
        {
          question: "Which number uses Genitive plural with nouns?",
          options: ["jeden", "dwa", "cztery", "pięć"],
          correct: 3,
          explanation: "Numbers 5 and above use Genitive plural: pięć psów, sześć psów, dziesięć psów."
        },
        {
          question: "Complete: 'Mam ___ książkę.' (I have one book)",
          options: ["jeden", "jedna", "jedno", "jednej"],
          correct: 1,
          explanation: "'Książka' is feminine, so use 'jedna' (but 'jedną książkę' in Accusative after 'mam')."
        },
        {
          question: "Which is correct? 'Dwa ___' (two chairs)",
          options: ["krzesło", "krzesła", "krzeseł", "krzesłach"],
          correct: 1,
          explanation: "Numbers 2-4 use Nominative plural: 'krzesła' is the plural of 'krzesło' (neuter)."
        },
        {
          question: "What form follows 'trzy'? (three)",
          options: ["Singular", "Nominative plural", "Genitive plural", "Dative"],
          correct: 1,
          explanation: "Numbers 2-4 (dwa, trzy, cztery) use Nominative plural form."
        }
      ],

      intermediate: [
        {
          question: "Complete: 'W pokoju jest dwóch ___.' (There are two students in the room)",
          options: ["student", "studenci", "studentów", "studentom"],
          correct: 2,
          explanation: "For masculine personal nouns with 'two', use 'dwóch' + genitive plural: 'dwóch studentów'."
        },
        {
          question: "Which is correct? 'Cztery ___ śpią.' (Four cats are sleeping)",
          options: ["kot", "koty", "kotów", "kotem"],
          correct: 1,
          explanation: "Animals are non-personal, so use regular plural with 2-4: 'cztery koty'."
        },
        {
          question: "Complete: 'Mam dwadzieścia trzy ___.' (I have 23 years)",
          options: ["rok", "roku", "lata", "lat"],
          correct: 2,
          explanation: "Numbers ending in 2-4 (except 12-14) use Nominative plural: 23 ends in 3, so 'lata'."
        },
        {
          question: "Why do we say 'trzej studenci' instead of 'trzy studenci'?",
          options: ["Students is feminine", "Students is plural", "Students is masculine personal", "It's genitive case"],
          correct: 2,
          explanation: "Masculine personal nouns use special forms: trzej (not trzy) with masculine personal plural."
        },
        {
          question: "Which is correct? 'Pięć ___' (five women)",
          options: ["kobieta", "kobiety", "kobiet", "kobietom"],
          correct: 2,
          explanation: "Numbers 5+ use Genitive plural: 'kobiet' is the genitive plural of 'kobieta'."
        },
        {
          question: "Complete: 'Widzę ___ nauczycieli.' (I see three teachers - male)",
          options: ["trzy", "trzej", "trzech", "troje"],
          correct: 2,
          explanation: "In Accusative case with masculine personal, use 'trzech' + genitive: 'trzech nauczycieli'."
        },
        {
          question: "Which is correct? 'Dwie ___ śpiewają.' (Two women are singing)",
          options: ["kobieta", "kobiety", "kobiet", "kobietę"],
          correct: 1,
          explanation: "Feminine nouns with 2-4 use 'dwie' + nominative plural: 'dwie kobiety'."
        },
        {
          question: "Why is it 'pięć psów' but 'trzy psy'?",
          options: ["Different genders", "3 uses plural, 5 uses genitive", "Personal vs non-personal", "Irregular forms"],
          correct: 1,
          explanation: "Numbers 2-4 use Nominative plural (psy), but 5+ uses Genitive plural (psów)."
        },
        {
          question: "Complete: 'Kupiłem czterdzieści pięć ___.' (I bought 45 books)",
          options: ["książka", "książki", "książek", "książkę"],
          correct: 2,
          explanation: "Numbers ending in 5-9 (except teens) use Genitive plural: 45 ends in 5, so 'książek'."
        },
        {
          question: "Which form is used with 'dwaj'? (two - masculine personal)",
          options: ["Any masculine noun", "Only masculine personal nouns", "Only animals", "Only objects"],
          correct: 1,
          explanation: "'Dwaj' is specifically used with masculine personal nouns: dwaj studenci, dwaj mężczyźni."
        }
      ],

      advanced: [
        {
          question: "Complete: 'W klasie jest dwudziestu trzech ___.' (There are 23 students in class)",
          options: ["student", "studenci", "studentów", "studentom"],
          correct: 2,
          explanation: "In cases other than Nominative, numbers 2-4 use Genitive: 'dwudziestu trzech studentów'."
        },
        {
          question: "Why is it 'pięciu studentów' but 'pięć kobiet'?",
          options: ["Different cases", "Personal masculine uses special form", "Irregular nouns", "Different genders only"],
          correct: 1,
          explanation: "Masculine personal nouns use 'pięciu' (not pięć) in Nominative: 'pięciu studentów' vs 'pięć kobiet'."
        },
        {
          question: "Which is correct? 'Grupa składa się z ___ mężczyzn.' (The group consists of 24 men)",
          options: ["dwadzieścia cztery", "dwudziestu czterech", "dwadzieścia czterech", "dwadzieścia czterej"],
          correct: 1,
          explanation: "After prepositions (z + Genitive), use declined number forms: 'dwudziestu czterech'."
        },
        {
          question: "Complete: 'Spotkałem się z ___ kolegami.' (I met with two friends - male)",
          options: ["dwa", "dwaj", "dwoma", "dwóch"],
          correct: 2,
          explanation: "Instrumental case with 'two' uses 'dwoma' + instrumental: 'z dwoma kolegami'."
        },
        {
          question: "Which pattern is correct for compound numbers ending in 2-4?",
          options: ["Always genitive plural", "Follow the last digit rule (22=plural, 25=genitive)", "Always nominative plural", "Depends on gender only"],
          correct: 1,
          explanation: "Compound numbers follow the last digit: 22,23,24 use plural (lata), but 25-29 use genitive (lat)."
        },
        {
          question: "Complete: 'Myślę o ___ pomysłach.' (I'm thinking about three ideas)",
          options: ["trzy", "trzej", "trzech", "trzema"],
          correct: 2,
          explanation: "Locative case after 'o' uses declined number: 'o trzech pomysłach' (Locative plural)."
        },
        {
          question: "What's the difference between 'dwóch studentów' and 'dwa studenty'?",
          options: ["No difference", "First is personal masculine, second is wrong", "First is genitive, second is nominative", "First is formal, second is informal"],
          correct: 1,
          explanation: "Masculine personal uses 'dwóch/dwaj studentów', never 'dwa studenty'. 'Dwa' is for non-personal."
        },
        {
          question: "Complete: 'Rozmawiałem z ___ nauczycielkami.' (I spoke with four teachers - female)",
          options: ["cztery", "czterema", "czterech", "czwórką"],
          correct: 1,
          explanation: "Instrumental case with 'four' uses 'czterema' + instrumental: 'z czterema nauczycielkami'."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "Mam ___ kota.",
          english: "I have one cat.",
          blank: 1,
          options: ["jeden", "dwa", "pięć", "koty"],
          correct: 0,
          explanation: "Use 'jeden' for the number one (masculine: jeden kot, but 'jednego kota' in Accusative)."
        },
        {
          polish: "Widzę trzy ___.",
          english: "I see three dogs.",
          blank: 2,
          options: ["pies", "psy", "psów", "psami"],
          correct: 1,
          explanation: "Numbers 2-4 use Nominative plural: 'psy' is the plural of 'pies'."
        },
        {
          polish: "Kupiłem pięć ___.",
          english: "I bought five books.",
          blank: 2,
          options: ["książka", "książki", "książek", "książkami"],
          correct: 2,
          explanation: "Numbers 5+ use Genitive plural: 'książek' is genitive plural of 'książka'."
        },
        {
          polish: "Mam cztery ___.",
          english: "I have four apples.",
          blank: 2,
          options: ["jabłko", "jabłka", "jabłek", "jabłkami"],
          correct: 1,
          explanation: "Numbers 2-4 use Nominative plural: 'jabłka' is plural of 'jabłko'."
        },
        {
          polish: "Widzę dziesięć ___.",
          english: "I see ten cats.",
          blank: 2,
          options: ["kot", "koty", "kotów", "kotem"],
          correct: 2,
          explanation: "Numbers 5+ use Genitive plural: 'kotów' is genitive plural of 'kot'."
        },
        {
          polish: "Mam ___ jedno mieszkanie.",
          english: "I have only one apartment.",
          blank: 1,
          options: ["tylko", "dwa", "trzy", "pięć"],
          correct: 0,
          explanation: "This tests the word 'tylko' (only), and 'jedno' agrees with neuter 'mieszkanie'."
        },
        {
          polish: "Kupuję dwa ___.",
          english: "I'm buying two tickets.",
          blank: 2,
          options: ["bilet", "bilety", "biletów", "biletami"],
          correct: 1,
          explanation: "Numbers 2-4 use Nominative plural: 'bilety' is plural of 'bilet'."
        },
        {
          polish: "Mam sześć ___.",
          english: "I have six pens.",
          blank: 2,
          options: ["długopis", "długopisy", "długopisów", "długopisami"],
          correct: 2,
          explanation: "Numbers 5+ use Genitive plural: 'długopisów' is genitive plural of 'długopis'."
        }
      ],

      intermediate: [
        {
          polish: "W pokoju jest ___ studenci.",
          english: "There are three students (male) in the room.",
          blank: 3,
          options: ["trzy", "trzej", "trzech", "troje"],
          correct: 1,
          explanation: "Masculine personal nouns use special form: 'trzej studenci' (not 'trzy')."
        },
        {
          polish: "Widzę dwie ___.",
          english: "I see two women.",
          blank: 2,
          options: ["kobieta", "kobiety", "kobiet", "kobieto"],
          correct: 1,
          explanation: "Feminine nouns with 2 use 'dwie' + nominative plural: 'dwie kobiety'."
        },
        {
          polish: "Mam dwadzieścia trzy ___.",
          english: "I am 23 years old.",
          blank: 3,
          options: ["rok", "lata", "lat", "roku"],
          correct: 1,
          explanation: "Numbers ending in 2-4 (except 12-14) use Nominative plural: 'lata'."
        },
        {
          polish: "Kupiłem ___ mężczyzn w sklepie.",
          english: "I saw four men in the store.",
          blank: 1,
          options: ["cztery", "czterech", "czterej", "czterema"],
          correct: 1,
          explanation: "Accusative with masculine personal uses genitive form: 'czterech mężczyzn'."
        },
        {
          polish: "W grupie jest pięć ___.",
          english: "There are five women in the group.",
          blank: 4,
          options: ["kobieta", "kobiety", "kobiet", "kobietom"],
          correct: 2,
          explanation: "Numbers 5+ use Genitive plural: 'kobiet' is genitive plural of 'kobieta'."
        },
        {
          polish: "Mam trzydzieści pięć ___.",
          english: "I am 35 years old.",
          blank: 3,
          options: ["rok", "lata", "lat", "roku"],
          correct: 2,
          explanation: "Numbers ending in 5-9 use Genitive plural: 'lat' (except teens 15-19 also use 'lat')."
        },
        {
          polish: "___ nauczycieli pracuje w szkole.",
          english: "Seven teachers (male) work at the school.",
          blank: 0,
          options: ["Siedem", "Siedmiu", "Siedmioro", "Siedemnaście"],
          correct: 1,
          explanation: "Masculine personal with 5+ uses special form: 'siedmiu nauczycieli' in Nominative."
        },
        {
          polish: "Widziałem ___ dzieci w parku.",
          english: "I saw four children in the park.",
          blank: 1,
          options: ["cztery", "czworo", "czterech", "czterej"],
          correct: 1,
          explanation: "'Dzieci' (children) uses collective numbers: 'czworo dzieci' for mixed gender groups."
        }
      ],

      advanced: [
        {
          polish: "Rozmawiałem z ___ kolegami.",
          english: "I spoke with three friends (male).",
          blank: 2,
          options: ["trzy", "trzej", "trzema", "trzech"],
          correct: 2,
          explanation: "Instrumental case with 'three' uses 'trzema' + Instrumental: 'z trzema kolegami'."
        },
        {
          polish: "Myślę o ___ pomysłach.",
          english: "I'm thinking about four ideas.",
          blank: 2,
          options: ["cztery", "czterech", "czterej", "czterema"],
          correct: 1,
          explanation: "Locative case after 'o' uses declined form: 'o czterech pomysłach'."
        },
        {
          polish: "W klasie uczy się dwudziestu ___ uczniów.",
          english: "Twenty-three students study in the class.",
          blank: 2,
          options: ["trzy", "trzej", "trzech", "troje"],
          correct: 2,
          explanation: "Declined numbers in Genitive use special forms: 'dwudziestu trzech uczniów'."
        },
        {
          polish: "Spotkałem się z ___ przyjaciółmi.",
          english: "I met with two friends.",
          blank: 3,
          options: ["dwa", "dwaj", "dwoma", "dwóch"],
          correct: 2,
          explanation: "Instrumental case with 'two' uses 'dwoma' + Instrumental: 'z dwoma przyjaciółmi'."
        },
        {
          polish: "Film trwa ___ godzin.",
          english: "The movie lasts two hours.",
          blank: 2,
          options: ["dwa", "dwie", "dwóch", "dwoma"],
          correct: 1,
          explanation: "'Godzina' is feminine, so use 'dwie' + genitive plural: 'dwie godziny' (but here Accusative)."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the number pattern with the correct case usage",
          pairs: [
            { polish: "jeden (1)", english: "Nominative singular" },
            { polish: "dwa, trzy, cztery (2-4)", english: "Nominative plural" },
            { polish: "pięć, sześć... (5+)", english: "Genitive plural" },
            { polish: "jeden kot", english: "one cat" },
            { polish: "trzy koty", english: "three cats" },
            { polish: "pięć kotów", english: "five cats" },
            { polish: "jedna książka", english: "one book" },
            { polish: "cztery książki", english: "four books" }
          ]
        },
        {
          instruction: "Match the Polish phrase with its English translation",
          pairs: [
            { polish: "dwa psy", english: "two dogs" },
            { polish: "pięć psów", english: "five dogs" },
            { polish: "trzy jabłka", english: "three apples" },
            { polish: "dziesięć jabłek", english: "ten apples" },
            { polish: "cztery książki", english: "four books" },
            { polish: "sześć książek", english: "six books" },
            { polish: "jeden dom", english: "one house" },
            { polish: "siedem domów", english: "seven houses" }
          ]
        }
      ]
    }
  },

  {
    name: "Ordinal Numbers",
    polish: "Liczebniki porządkowe",
    difficulty: "intermediate",
    level: "A2",
    icon: "🥇",

    explanation: "Ordinal numbers in Polish (first, second, third, etc.) are used to show order, rank, or sequence. Unlike cardinal numbers (one, two, three), ordinal numbers behave like adjectives - they must agree with the noun they modify in gender, number, and case. This means 'pierwszy' (first) has different forms: pierwszy (masculine), pierwsza (feminine), pierwsze (neuter), pierwsi (masculine personal plural), and pierwsze (non-personal plural). The first three ordinals (pierwszy, drugi, trzeci) are irregular, but from 'fourth' onward, they follow a predictable pattern by adding -ty/-ta/-te to the cardinal number root. You'll use ordinals constantly in Polish for dates, floors, rankings, and sequences.",

    analogy: "Think of ordinal numbers as flexible adjectives that wear different uniforms depending on who they're with. Just like in English 'the first boy' vs 'the first girl' uses the same word 'first', in Polish 'pierwszy chłopiec' vs 'pierwsza dziewczyna' changes the ending to match. It's like the number is chameleon that adapts its ending to blend in with the noun's gender and case.",

    ordinalsList: [
      {
        number: 1,
        cardinal: "jeden",
        ordinal: {
          masculine: "pierwszy",
          feminine: "pierwsza",
          neuter: "pierwsze"
        },
        english: "first",
        irregular: true,
        note: "Completely irregular - must be memorized"
      },
      {
        number: 2,
        cardinal: "dwa",
        ordinal: {
          masculine: "drugi",
          feminine: "druga",
          neuter: "drugie"
        },
        english: "second",
        irregular: true,
        note: "Irregular form, not based on 'dwa'"
      },
      {
        number: 3,
        cardinal: "trzy",
        ordinal: {
          masculine: "trzeci",
          feminine: "trzecia",
          neuter: "trzecie"
        },
        english: "third",
        irregular: true,
        note: "Irregular form, not based on 'trzy'"
      },
      {
        number: 4,
        cardinal: "cztery",
        ordinal: {
          masculine: "czwarty",
          feminine: "czwarta",
          neuter: "czwarte"
        },
        english: "fourth",
        irregular: false,
        note: "Regular pattern starts here: czwar-ty/-ta/-te"
      },
      {
        number: 5,
        cardinal: "pięć",
        ordinal: {
          masculine: "piąty",
          feminine: "piąta",
          neuter: "piąte"
        },
        english: "fifth",
        irregular: false,
        note: "Regular: piąt-y/-a/-e"
      },
      {
        number: 6,
        cardinal: "sześć",
        ordinal: {
          masculine: "szósty",
          feminine: "szósta",
          neuter: "szóste"
        },
        english: "sixth",
        irregular: false,
        note: "Regular: szóst-y/-a/-e"
      },
      {
        number: 7,
        cardinal: "siedem",
        ordinal: {
          masculine: "siódmy",
          feminine: "siódma",
          neuter: "siódme"
        },
        english: "seventh",
        irregular: false,
        note: "Regular: siódm-y/-a/-e"
      },
      {
        number: 8,
        cardinal: "osiem",
        ordinal: {
          masculine: "ósmy",
          feminine: "ósma",
          neuter: "ósme"
        },
        english: "eighth",
        irregular: false,
        note: "Regular: ósm-y/-a/-e"
      },
      {
        number: 9,
        cardinal: "dziewięć",
        ordinal: {
          masculine: "dziewiąty",
          feminine: "dziewiąta",
          neuter: "dziewiąte"
        },
        english: "ninth",
        irregular: false,
        note: "Regular: dziewiąt-y/-a/-e"
      },
      {
        number: 10,
        cardinal: "dziesięć",
        ordinal: {
          masculine: "dziesiąty",
          feminine: "dziesiąta",
          neuter: "dziesiąte"
        },
        english: "tenth",
        irregular: false,
        note: "Regular: dziesiąt-y/-a/-e"
      },
      {
        number: 11,
        cardinal: "jedenaście",
        ordinal: {
          masculine: "jedenasty",
          feminine: "jedenasta",
          neuter: "jedenaste"
        },
        english: "eleventh",
        irregular: false,
        note: "Regular: jedenast-y/-a/-e"
      },
      {
        number: 12,
        cardinal: "dwanaście",
        ordinal: {
          masculine: "dwunasty",
          feminine: "dwunasta",
          neuter: "dwunaste"
        },
        english: "twelfth",
        irregular: false,
        note: "Regular: dwunast-y/-a/-e"
      },
      {
        number: 20,
        cardinal: "dwadzieścia",
        ordinal: {
          masculine: "dwudziesty",
          feminine: "dwudziesta",
          neuter: "dwudzieste"
        },
        english: "twentieth",
        irregular: false,
        note: "Regular: dwudziest-y/-a/-e"
      }
    ],

    declensionTables: {
      explanation: "Ordinals decline through all 7 cases like regular adjectives. Here's 'pierwszy' (first) in all cases:",

      masculine: {
        gender: "Masculine (pierwszy dom - first house)",
        cases: [
          { case: "Nominative", singular: "pierwszy", plural: "pierwsi (personal) / pierwsze", example: "pierwszy dzień (first day)" },
          { case: "Genitive", singular: "pierwszego", plural: "pierwszych", example: "pierwszego dnia (of the first day)" },
          { case: "Dative", singular: "pierwszemu", plural: "pierwszym", example: "pierwszemu klientowi (to the first client)" },
          { case: "Accusative", singular: "pierwszy/pierwszego", plural: "pierwszych/pierwsze", example: "pierwszy raz (first time)" },
          { case: "Instrumental", singular: "pierwszym", plural: "pierwszymi", example: "pierwszym razem (for the first time)" },
          { case: "Locative", singular: "pierwszym", plural: "pierwszych", example: "o pierwszym dniu (about the first day)" },
          { case: "Vocative", singular: "pierwszy", plural: "pierwsi/pierwsze", example: "(rarely used)" }
        ]
      },

      feminine: {
        gender: "Feminine (pierwsza książka - first book)",
        cases: [
          { case: "Nominative", singular: "pierwsza", plural: "pierwsze", example: "pierwsza lekcja (first lesson)" },
          { case: "Genitive", singular: "pierwszej", plural: "pierwszych", example: "pierwszej lekcji (of the first lesson)" },
          { case: "Dative", singular: "pierwszej", plural: "pierwszym", example: "pierwszej osobie (to the first person)" },
          { case: "Accusative", singular: "pierwszą", plural: "pierwsze", example: "pierwszą książkę (the first book - object)" },
          { case: "Instrumental", singular: "pierwszą", plural: "pierwszymi", example: "pierwszą próbą (on the first attempt)" },
          { case: "Locative", singular: "pierwszej", plural: "pierwszych", example: "o pierwszej (at one o'clock)" },
          { case: "Vocative", singular: "pierwsza", plural: "pierwsze", example: "(rarely used)" }
        ]
      },

      neuter: {
        gender: "Neuter (pierwsze miejsce - first place)",
        cases: [
          { case: "Nominative", singular: "pierwsze", plural: "pierwsze", example: "pierwsze miejsce (first place)" },
          { case: "Genitive", singular: "pierwszego", plural: "pierwszych", example: "pierwszego miejsca (of first place)" },
          { case: "Dative", singular: "pierwszemu", plural: "pierwszym", example: "pierwszemu dziecku (to the first child)" },
          { case: "Accusative", singular: "pierwsze", plural: "pierwsze", example: "pierwsze pytanie (the first question)" },
          { case: "Instrumental", singular: "pierwszym", plural: "pierwszymi", example: "pierwszym dzieckiem (with the first child)" },
          { case: "Locative", singular: "pierwszym", plural: "pierwszych", example: "o pierwszym miejscu (about first place)" },
          { case: "Vocative", singular: "pierwsze", plural: "pierwsze", example: "(rarely used)" }
        ]
      }
    },

    usageExamples: [
      {
        context: "Dates",
        explanation: "Polish uses ordinals for dates (except 'first' which uses 'pierwszy')",
        examples: [
          { polish: "pierwszy stycznia", english: "January 1st (first of January)", note: "Genitive case after ordinal" },
          { polish: "trzeci maja", english: "May 3rd", note: "Polish Constitution Day" },
          { polish: "piąty sierpnia", english: "August 5th", note: "Month in Genitive" },
          { polish: "dwudziesty drugi lipca", english: "July 22nd", note: "Compound ordinals" }
        ]
      },
      {
        context: "Floors/Stories",
        explanation: "Building floors use ordinal numbers (note: ground floor is 'parter')",
        examples: [
          { polish: "pierwsze piętro", english: "first floor (second floor US)", note: "European counting" },
          { polish: "trzecie piętro", english: "third floor (fourth floor US)", note: "Neuter: piętro" },
          { polish: "Mieszkam na drugim piętrze.", english: "I live on the second floor.", note: "Locative: na + locative" }
        ]
      },
      {
        context: "Rankings/Positions",
        explanation: "Ordinals show rank or position",
        examples: [
          { polish: "pierwsze miejsce", english: "first place", note: "Neuter: miejsce" },
          { polish: "trzecia nagroda", english: "third prize", note: "Feminine: nagroda" },
          { polish: "Jestem pierwszy!", english: "I'm first!", note: "Masculine subject" },
          { polish: "Ona jest druga.", english: "She's second.", note: "Feminine subject" }
        ]
      },
      {
        context: "Sequences",
        explanation: "Ordinals in everyday sequences",
        examples: [
          { polish: "pierwszy raz", english: "the first time", note: "Common phrase" },
          { polish: "drugi dzień", english: "the second day", note: "Masculine: dzień" },
          { polish: "czwarta lekcja", english: "the fourth lesson", note: "Feminine: lekcja" },
          { polish: "piąta próba", english: "the fifth attempt", note: "Feminine: próba" }
        ]
      }
    ],

    quiz: {
      beginner: [
        {
          question: "What is the ordinal number for 'first' (masculine)?",
          options: ["jeden", "pierwszy", "pierwsza", "raz"],
          correct: 1,
          explanation: "'Pierwszy' is the masculine form of 'first' in Polish."
        },
        {
          question: "Complete: '___ dzień' (the first day)",
          options: ["jeden", "pierwszy", "pierwsza", "pierwsze"],
          correct: 1,
          explanation: "'Dzień' is masculine, so use 'pierwszy dzień'."
        },
        {
          question: "What is 'second' in Polish (feminine)?",
          options: ["dwa", "drugi", "druga", "drugie"],
          correct: 2,
          explanation: "'Druga' is the feminine form of 'second'."
        },
        {
          question: "Complete: '___ lekcja' (the third lesson)",
          options: ["trzy", "trzeci", "trzecia", "trzecie"],
          correct: 2,
          explanation: "'Lekcja' is feminine, so use 'trzecia lekcja' (third lesson)."
        },
        {
          question: "How do you say 'fourth' (masculine)?",
          options: ["cztery", "czwarty", "czwarta", "czwarte"],
          correct: 1,
          explanation: "'Czwarty' is the masculine ordinal for 'fourth'."
        },
        {
          question: "Complete: '___ miejsce' (fifth place)",
          options: ["pięć", "piąty", "piąta", "piąte"],
          correct: 3,
          explanation: "'Miejsce' is neuter, so use 'piąte miejsce'."
        },
        {
          question: "What is the Polish ordinal for 'sixth' (feminine)?",
          options: ["sześć", "szósty", "szósta", "szóste"],
          correct: 2,
          explanation: "'Szósta' is the feminine form of 'sixth'."
        },
        {
          question: "Which ordinals are irregular?",
          options: ["All of them", "1st, 2nd, 3rd", "Only 1st", "4th and above"],
          correct: 1,
          explanation: "Pierwszy (1st), drugi (2nd), and trzeci (3rd) are irregular. From 4th onward, they're regular."
        },
        {
          question: "Complete: '___ piętro' (seventh floor)",
          options: ["siedem", "siódmy", "siódma", "siódme"],
          correct: 3,
          explanation: "'Piętro' is neuter, so use 'siódme piętro'."
        },
        {
          question: "How do you say 'eighth' (masculine)?",
          options: ["osiem", "ósmy", "ósma", "ósme"],
          correct: 1,
          explanation: "'Ósmy' is the masculine ordinal for 'eighth'."
        }
      ],

      intermediate: [
        {
          question: "Complete: 'Mieszkam na ___ piętrze.' (I live on the third floor)",
          options: ["trzy", "trzeci", "trzecim", "trzecie"],
          correct: 2,
          explanation: "Locative case after 'na': 'na trzecim piętrze' (on the third floor)."
        },
        {
          question: "What is the correct form for 'January 5th'?",
          options: ["pięć stycznia", "piąty stycznia", "piątego stycznia", "piąta stycznia"],
          correct: 1,
          explanation: "Dates use masculine Nominative ordinal + month in Genitive: 'piąty stycznia'."
        },
        {
          question: "Complete: 'To jest moja ___ próba.' (This is my second attempt)",
          options: ["dwa", "drugi", "druga", "drugie"],
          correct: 2,
          explanation: "'Próba' is feminine, so use 'druga próba'."
        },
        {
          question: "How do you say 'the ninth lesson' (Accusative)?",
          options: ["dziewiąta lekcja", "dziewiątą lekcję", "dziewiątej lekcji", "dziewiąte lekcje"],
          correct: 1,
          explanation: "Accusative feminine: 'dziewiątą lekcję' (the ninth lesson as direct object)."
        },
        {
          question: "Complete: 'Zaczynamy ___ lekcję.' (We're starting the first lesson)",
          options: ["pierwsza", "pierwszą", "pierwszej", "pierwsze"],
          correct: 1,
          explanation: "Accusative feminine after 'zaczynamy': 'pierwszą lekcję'."
        },
        {
          question: "What is 'the tenth day' in Genitive case?",
          options: ["dziesiąty dzień", "dziesiątego dnia", "dziesiątym dniem", "dziesiątych dni"],
          correct: 1,
          explanation: "Genitive masculine singular: 'dziesiątego dnia'."
        },
        {
          question: "Complete: 'Myślę o ___ razie.' (I'm thinking about the first time)",
          options: ["pierwszy", "pierwszego", "pierwszym", "pierwszej"],
          correct: 2,
          explanation: "Locative case after 'o': 'o pierwszym razie'."
        },
        {
          question: "How do you say 'with the second friend' (Instrumental)?",
          options: ["drugi przyjaciel", "drugiego przyjaciela", "drugim przyjacielem", "drugiemu przyjacielowi"],
          correct: 2,
          explanation: "Instrumental case: 'z drugim przyjacielem' (with the second friend)."
        },
        {
          question: "Complete: 'Ona zajęła ___ miejsce.' (She took third place)",
          options: ["trzeci", "trzecie", "trzeciego", "trzecią"],
          correct: 1,
          explanation: "'Miejsce' is neuter Accusative: 'trzecie miejsce'."
        },
        {
          question: "What is the correct date format for 'December 25th'?",
          options: ["dwadzieścia pięć grudnia", "dwudziesty piąty grudnia", "dwudziesta piąta grudnia", "dwudzieste piąte grudnia"],
          correct: 1,
          explanation: "Dates use masculine ordinal: 'dwudziesty piąty grudnia' (twenty-fifth of December)."
        }
      ],

      advanced: [
        {
          question: "Complete: 'Podoba mi się twoja ___ książka.' (I like your third book)",
          options: ["trzeci", "trzecia", "trzecią", "trzeciej"],
          correct: 1,
          explanation: "Nominative feminine (subject complement after 'podoba mi się'): 'trzecia książka'."
        },
        {
          question: "How do you say 'for the first time' (Instrumental)?",
          options: ["pierwszy raz", "pierwszego razu", "pierwszym razem", "pierwszej razy"],
          correct: 2,
          explanation: "Instrumental expressing means: 'pierwszym razem' (for the first time)."
        },
        {
          question: "Complete: 'Gratulacje dla ___ zwycięzcy!' (Congratulations to the first winner!)",
          options: ["pierwszy", "pierwszego", "pierwszym", "pierwszemu"],
          correct: 1,
          explanation: "Genitive after 'dla' (for): 'dla pierwszego zwycięzcy'."
        },
        {
          question: "What is 'about the fifth chapter' (Locative)?",
          options: ["piąty rozdział", "piątego rozdziału", "piątym rozdziale", "piątemu rozdziałowi"],
          correct: 2,
          explanation: "Locative after 'o': 'o piątym rozdziale' (about the fifth chapter)."
        },
        {
          question: "Complete: 'Rozmawiałem z ___ nauczycielem.' (I spoke with the second teacher)",
          options: ["drugi", "drugiego", "drugim", "drugiemu"],
          correct: 2,
          explanation: "Instrumental after 'z': 'z drugim nauczycielem'."
        },
        {
          question: "How do you say 'to the tenth floor' (Dative/Accusative motion)?",
          options: ["dziesiąty piętro", "dziesiątego piętra", "na dziesiąte piętro", "dziesiątym piętrem"],
          correct: 2,
          explanation: "Motion uses 'na' + Accusative: 'na dziesiąte piętro' (to the tenth floor)."
        },
        {
          question: "Complete: 'W ___ dniu miesiąca...' (On the seventh day of the month...)",
          options: ["siódmy", "siódmego", "siódmym", "siódmemu"],
          correct: 2,
          explanation: "Locative case: 'w siódmym dniu' (on the seventh day)."
        },
        {
          question: "What is the proper way to say 'from the first to the last'?",
          options: ["od pierwszy do ostatni", "od pierwszego do ostatniego", "z pierwszego na ostatnie", "od pierwszym do ostatnim"],
          correct: 1,
          explanation: "Genitive after 'od...do': 'od pierwszego do ostatniego'."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "To jest ___ dzień.",
          english: "This is the first day.",
          blank: 2,
          options: ["jeden", "pierwszy", "pierwsza", "pierwsze"],
          correct: 1,
          explanation: "'Dzień' is masculine, so use 'pierwszy dzień'."
        },
        {
          polish: "Ona jest ___ w klasie.",
          english: "She is second in class.",
          blank: 2,
          options: ["dwa", "drugi", "druga", "drugie"],
          correct: 2,
          explanation: "When referring to a female, use feminine form: 'druga'."
        },
        {
          polish: "Mam ___ lekcję teraz.",
          english: "I have the third lesson now.",
          blank: 1,
          options: ["trzy", "trzeci", "trzecią", "trzecie"],
          correct: 2,
          explanation: "Accusative feminine 'lekcję' needs 'trzecią' (third lesson - direct object)."
        },
        {
          polish: "To jest jego ___ samochód.",
          english: "This is his fourth car.",
          blank: 3,
          options: ["cztery", "czwarty", "czwarta", "czwarte"],
          correct: 1,
          explanation: "'Samochód' is masculine, so use 'czwarty samochód'."
        },
        {
          polish: "Zajęliśmy ___ miejsce.",
          english: "We took fifth place.",
          blank: 1,
          options: ["pięć", "piąty", "piąta", "piąte"],
          correct: 3,
          explanation: "'Miejsce' is neuter Accusative: 'piąte miejsce'."
        },
        {
          polish: "Idę na ___ piętro.",
          english: "I'm going to the sixth floor.",
          blank: 2,
          options: ["sześć", "szósty", "szósta", "szóste"],
          correct: 3,
          explanation: "Motion to floor uses Accusative: 'na szóste piętro' (piętro is neuter)."
        },
        {
          polish: "Dziś jest ___ marca.",
          english: "Today is March 7th.",
          blank: 2,
          options: ["siedem", "siódmy", "siódma", "siódme"],
          correct: 1,
          explanation: "Dates use masculine Nominative: 'siódmy marca' (seventh of March)."
        },
        {
          polish: "To jest ___ raz!",
          english: "This is the eighth time!",
          blank: 2,
          options: ["osiem", "ósmy", "ósma", "ósme"],
          correct: 1,
          explanation: "'Raz' is masculine, so use 'ósmy raz'."
        }
      ],

      intermediate: [
        {
          polish: "Mieszkam na ___ piętrze.",
          english: "I live on the third floor.",
          blank: 2,
          options: ["trzeci", "trzecie", "trzecim", "trzeciego"],
          correct: 2,
          explanation: "Locative after 'na' (location): 'na trzecim piętrze'."
        },
        {
          polish: "Zaczynamy ___ lekcję.",
          english: "We're starting the ninth lesson.",
          blank: 1,
          options: ["dziewiąty", "dziewiąta", "dziewiątą", "dziewiąte"],
          correct: 2,
          explanation: "Accusative feminine: 'dziewiątą lekcję' (direct object)."
        },
        {
          polish: "Myślę o ___ rozdziale.",
          english: "I'm thinking about the first chapter.",
          blank: 2,
          options: ["pierwszy", "pierwszego", "pierwszym", "pierwszej"],
          correct: 2,
          explanation: "Locative after 'o': 'o pierwszym rozdziale'."
        },
        {
          polish: "Spotkałem się z ___ nauczycielem.",
          english: "I met with the second teacher.",
          blank: 3,
          options: ["drugi", "drugiego", "drugim", "drugiemu"],
          correct: 2,
          explanation: "Instrumental after 'z': 'z drugim nauczycielem'."
        },
        {
          polish: "To jest jego ___ samochodu.",
          english: "This is his fifth car's (genitive - possessive).",
          blank: 3,
          options: ["piąty", "piąta", "piątego", "piątym"],
          correct: 2,
          explanation: "Genitive masculine: 'piątego samochodu' (of the fifth car)."
        },
        {
          polish: "Urodziny mam ___ sierpnia.",
          english: "My birthday is August 12th.",
          blank: 2,
          options: ["dwanaście", "dwunasty", "dwunasta", "dwunaste"],
          correct: 1,
          explanation: "Dates use masculine Nominative: 'dwunasty sierpnia'."
        },
        {
          polish: "Byłem tam po raz ___.",
          english: "I was there for the tenth time.",
          blank: 4,
          options: ["dziesięć", "dziesiąty", "dziesiątego", "dziesiątym"],
          correct: 1,
          explanation: "'Po raz dziesiąty' is a fixed phrase (for the tenth time)."
        },
        {
          polish: "Gratulacje dla ___ zwycięzcy!",
          english: "Congratulations to the first winner!",
          blank: 2,
          options: ["pierwszy", "pierwszego", "pierwszym", "pierwszemu"],
          correct: 1,
          explanation: "Genitive after 'dla': 'dla pierwszego zwycięzcy'."
        }
      ],

      advanced: [
        {
          polish: "Rozmawialiśmy o ___ próbie.",
          english: "We were talking about the third attempt.",
          blank: 2,
          options: ["trzeci", "trzecia", "trzeciej", "trzecią"],
          correct: 2,
          explanation: "Locative feminine after 'o': 'o trzeciej próbie'."
        },
        {
          polish: "Idę na spotkanie z ___ klientem.",
          english: "I'm going to a meeting with the fourth client.",
          blank: 4,
          options: ["czwarty", "czwartego", "czwartym", "czwartemu"],
          correct: 2,
          explanation: "Instrumental after 'z': 'z czwartym klientem'."
        },
        {
          polish: "Nie mogę znaleźć ___ strony.",
          english: "I can't find the seventh page.",
          blank: 3,
          options: ["siódmy", "siódma", "siódmej", "siódmą"],
          correct: 2,
          explanation: "Genitive feminine after negated verb: 'nie mogę znaleźć siódmej strony'."
        },
        {
          polish: "Według ___ źródła, to prawda.",
          english: "According to the first source, it's true.",
          blank: 1,
          options: ["pierwszy", "pierwszego", "pierwszym", "pierwszej"],
          correct: 1,
          explanation: "Genitive neuter after 'według': 'według pierwszego źródła'."
        },
        {
          polish: "W ___ dniu miesiąca zaczynamy projekt.",
          english: "On the fifth day of the month we start the project.",
          blank: 1,
          options: ["piąty", "piąta", "piątego", "piątym"],
          correct: 3,
          explanation: "Locative masculine after 'w': 'w piątym dniu'."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the Polish ordinal with its English translation",
          pairs: [
            { polish: "pierwszy", english: "first (masculine)" },
            { polish: "drugi", english: "second (masculine)" },
            { polish: "trzeci", english: "third (masculine)" },
            { polish: "czwarty", english: "fourth (masculine)" },
            { polish: "piąty", english: "fifth (masculine)" },
            { polish: "szósty", english: "sixth (masculine)" },
            { polish: "siódmy", english: "seventh (masculine)" },
            { polish: "ósmy", english: "eighth (masculine)" }
          ]
        },
        {
          instruction: "Match the feminine ordinal with its English meaning",
          pairs: [
            { polish: "pierwsza", english: "first (feminine)" },
            { polish: "druga", english: "second (feminine)" },
            { polish: "trzecia", english: "third (feminine)" },
            { polish: "czwarta", english: "fourth (feminine)" },
            { polish: "piąta", english: "fifth (feminine)" },
            { polish: "szósta", english: "sixth (feminine)" },
            { polish: "siódma", english: "seventh (feminine)" },
            { polish: "ósma", english: "eighth (feminine)" }
          ]
        }
      ]
    }
  },

  {
    name: "Telling Time and Advanced Number Usage",
    polish: "Podawanie godziny i zaawansowane użycie liczebników",
    difficulty: "intermediate",
    level: "A2",
    icon: "🕐",

    explanation: "Telling time in Polish requires ordinal numbers in the feminine form because 'godzina' (hour) is a feminine noun. Poles say 'Jest pierwsza' (It's one o'clock - literally 'It's the first hour'), 'Jest druga' (It's two o'clock - 'It's the second hour'), etc. Minutes are added after the hour: 'Jest trzecia piętnaście' (It's 3:15). Time expressions are one of the most practical uses of ordinal numbers. Beyond time, this topic covers years (which use cardinal numbers), days of the month (ordinals), centuries (ordinals), and basic fractions. These number patterns appear constantly in daily conversation, from scheduling appointments to discussing historical dates.",

    analogy: "Think of Polish time-telling like referring to 'the first hour, the second hour' instead of 'one o'clock, two o'clock.' It's as if you're counting which hour of the day it is. The clock strikes the 'third hour' (trzecia godzina), not 'three hours.' This is why ordinal numbers are used - you're identifying which hour in sequence, not counting quantities. The feminine forms are used because you're always implicitly referring to 'godzina' (hour), even when you drop the word.",

    timePatterns: [
      {
        category: "Full Hours",
        pattern: "Jest + feminine ordinal",
        explanation: "Use feminine ordinal numbers because 'godzina' (hour) is feminine",
        examples: [
          { polish: "Jest pierwsza.", english: "It's 1:00 (one o'clock)", note: "Literally: 'It's the first [hour]'" },
          { polish: "Jest druga.", english: "It's 2:00", note: "druga godzina (second hour)" },
          { polish: "Jest trzecia.", english: "It's 3:00", note: "trzecia godzina (third hour)" },
          { polish: "Jest czwarta.", english: "It's 4:00", note: "czwarta godzina" },
          { polish: "Jest piąta.", english: "It's 5:00", note: "piąta godzina" },
          { polish: "Jest dziesiąta.", english: "It's 10:00", note: "dziesiąta godzina" },
          { polish: "Jest dwunasta.", english: "It's 12:00 (noon/midnight)", note: "dwunasta godzina" }
        ]
      },
      {
        category: "Hours with Minutes",
        pattern: "Jest + ordinal hour + cardinal minutes",
        explanation: "Say the hour (ordinal feminine), then add minutes (cardinal number)",
        examples: [
          { polish: "Jest pierwsza piętnaście.", english: "It's 1:15", note: "First hour, fifteen minutes" },
          { polish: "Jest druga dwadzieścia.", english: "It's 2:20", note: "Second hour, twenty minutes" },
          { polish: "Jest trzecia trzydzieści.", english: "It's 3:30", note: "Can also say 'wpół do czwartej' (half to four)" },
          { polish: "Jest piąta czterdzieści pięć.", english: "It's 5:45", note: "Or 'za piętnaście szósta' (fifteen to six)" },
          { polish: "Jest szósta dziesięć.", english: "It's 6:10", note: "Sixth hour, ten minutes" }
        ]
      },
      {
        category: "Quarter Hours",
        pattern: "Special expressions for :15, :30, :45",
        explanation: "Common shortcuts for quarter hours",
        examples: [
          { polish: "Jest kwadrans po trzeciej.", english: "It's quarter past three (3:15)", note: "kwadrans = quarter hour" },
          { polish: "Jest wpół do czwartej.", english: "It's half to four (3:30)", note: "Literally 'half to four'" },
          { polish: "Jest za kwadrans czwarta.", english: "It's quarter to four (3:45)", note: "Literally 'in a quarter [it will be] four'" },
          { polish: "Jest za pięć druga.", english: "It's five to two (1:55)", note: "za = in/before" }
        ]
      },
      {
        category: "Asking About Time",
        pattern: "Która godzina? / Która jest godzina?",
        explanation: "How to ask 'What time is it?'",
        examples: [
          { polish: "Która godzina?", english: "What time is it?", note: "Most common form" },
          { polish: "Która jest godzina?", english: "What time is it?", note: "Slightly more formal" },
          { polish: "O której?", english: "At what time?", note: "Asking for a specific time" },
          { polish: "O której godzinie?", english: "At what time?", note: "More complete form" }
        ]
      },
      {
        category: "At What Time (Locative)",
        pattern: "O + Locative feminine ordinal",
        explanation: "When saying 'at [time]', use 'o' + Locative case",
        examples: [
          { polish: "O pierwszej.", english: "At 1:00", note: "Locative: o pierwszej [godzinie]" },
          { polish: "O drugiej.", english: "At 2:00", note: "Locative: o drugiej" },
          { polish: "O trzeciej piętnaście.", english: "At 3:15", note: "Hour in Locative, minutes cardinal" },
          { polish: "Spotkajmy się o piątej.", english: "Let's meet at 5:00", note: "o piątej" },
          { polish: "Film zaczyna się o ósmej trzydzieści.", english: "The movie starts at 8:30", note: "o ósmej" }
        ]
      }
    ],

    datesAndYears: [
      {
        category: "Days of the Month",
        pattern: "Ordinal masculine + month in Genitive",
        explanation: "Dates use masculine ordinal numbers",
        examples: [
          { polish: "pierwszy stycznia", english: "January 1st", note: "Nominative: 'the first of January'" },
          { polish: "trzeci maja", english: "May 3rd", note: "Polish Constitution Day" },
          { polish: "dwudziesty drugi lipca", english: "July 22nd", note: "Compound ordinal" },
          { polish: "dziś jest piąty sierpnia", english: "today is August 5th", note: "Full sentence" }
        ]
      },
      {
        category: "Asking About Dates",
        pattern: "Którego (jest) dziś? / Który jest dzień?",
        explanation: "How to ask 'What's the date?'",
        examples: [
          { polish: "Którego dziś?", english: "What's the date today?", note: "Genitive: 'which [date] today?'" },
          { polish: "Który jest dzień?", english: "What day is it?", note: "Nominative: 'which day is?'" },
          { polish: "Dziś jest trzeci.", english: "Today is the 3rd.", note: "Short answer" }
        ]
      },
      {
        category: "Years",
        pattern: "Cardinal number + rok/roku",
        explanation: "Years use cardinal numbers, not ordinals",
        examples: [
          { polish: "rok tysiąc dziewięćset dziewięćdziesiąty dziewiąty", english: "the year 1999", note: "Or simply 'rok 1999'" },
          { polish: "dwa tysiące dwadzieścia pięć", english: "2025", note: "Modern years: 'two thousand twenty-five'" },
          { polish: "w roku dwa tysiące dwadzieścia", english: "in the year 2020", note: "w roku + year" },
          { polish: "Urodziłem się w tysiąc dziewięćset osiemdziesiątym roku.", english: "I was born in 1980.", note: "Locative: w + ordinal + roku" }
        ]
      },
      {
        category: "Centuries",
        pattern: "Ordinal number + wiek",
        explanation: "Centuries use ordinal numbers",
        examples: [
          { polish: "dwudziesty pierwszy wiek", english: "21st century", note: "Nominative" },
          { polish: "w dwudziestym wieku", english: "in the 20th century", note: "Locative: w + Locative" },
          { polish: "dziewiętnasty wiek", english: "19th century", note: "Ordinal: dziewiętnasty" }
        ]
      }
    ],

    fractionsAndOther: [
      {
        category: "Basic Fractions",
        pattern: "Special forms for common fractions",
        examples: [
          { polish: "pół / połowa", english: "half / a half", note: "pół godziny (half an hour)" },
          { polish: "jedna trzecia", english: "one third", note: "jedna (1) + trzecia (third)" },
          { polish: "dwie trzecie", english: "two thirds", note: "dwie (2) + trzecie (thirds)" },
          { polish: "jedna czwarta", english: "one quarter / one fourth", note: "Can also use 'ćwierć'" },
          { polish: "trzy czwarte", english: "three quarters", note: "trzy (3) + czwarte (fourths)" }
        ]
      },
      {
        category: "Decimals",
        pattern: "Number + 'przecinek' + decimal",
        explanation: "Polish uses comma (przecinek) for decimal point",
        examples: [
          { polish: "trzy przecinek czternaście", english: "3.14 (pi)", note: "Literally: 'three comma fourteen'" },
          { polish: "jeden przecinek pięć", english: "1.5", note: "Or 'półtora' for exactly 1.5" },
          { polish: "dwa przecinek siedem", english: "2.7", note: "Used in measurements" }
        ]
      },
      {
        category: "Age",
        pattern: "Cardinal number + lat/lata/rok",
        explanation: "Age uses cardinal numbers with specific noun forms",
        examples: [
          { polish: "Mam dwadzieścia pięć lat.", english: "I'm 25 years old.", note: "Numbers 5+ use 'lat' (Genitive)" },
          { polish: "Mam dwadzieścia trzy lata.", english: "I'm 23 years old.", note: "Ending in 2-4 use 'lata' (Nominative plural)" },
          { polish: "Mam dwadzieścia jeden lat.", english: "I'm 21 years old.", note: "Ending in 1 (except 11) uses 'rok' in Genitive: 'lat' (not 'rok')" }
        ]
      }
    ],

    quiz: {
      beginner: [
        {
          question: "How do you say 'It's 1:00' in Polish?",
          options: ["Jest jeden.", "Jest jedna.", "Jest pierwsza.", "Jest raz."],
          correct: 2,
          explanation: "'Jest pierwsza' (It's the first hour) is correct. Use feminine ordinal for time."
        },
        {
          question: "Complete: 'Jest ___ .' (It's 3:00)",
          options: ["trzy", "trzecia", "trzeci", "troje"],
          correct: 1,
          explanation: "'Jest trzecia' - feminine ordinal because 'godzina' (hour) is feminine."
        },
        {
          question: "What does 'O której?' mean?",
          options: ["What time is it?", "At what time?", "Which hour?", "How many hours?"],
          correct: 1,
          explanation: "'O której?' means 'At what time?' - used to ask when something happens."
        },
        {
          question: "How do you say 'It's 5:00'?",
          options: ["Jest pięć.", "Jest piąta.", "Jest piąte.", "Jest piąty."],
          correct: 1,
          explanation: "'Jest piąta' - fifth hour, feminine ordinal form."
        },
        {
          question: "Complete: 'Spotkajmy się ___ drugiej.' (Let's meet at 2:00)",
          options: ["w", "na", "o", "do"],
          correct: 2,
          explanation: "'O' + Locative is used for 'at [time]': o drugiej (at 2:00)."
        },
        {
          question: "What is 'It's 4:15' in Polish?",
          options: ["Jest cztery piętnaście.", "Jest czwarta piętnaście.", "Jest czwartej piętnaście.", "Jest czwarty piętnaście."],
          correct: 1,
          explanation: "'Jest czwarta piętnaście' - fourth hour (ordinal), fifteen minutes (cardinal)."
        },
        {
          question: "How do you ask 'What time is it?'",
          options: ["Która godzina?", "Ile godzin?", "Jaka godzina?", "Które godziny?"],
          correct: 0,
          explanation: "'Która godzina?' is the most common way to ask 'What time is it?'"
        },
        {
          question: "Complete: 'Jest ___ .' (It's 7:00)",
          options: ["siedem", "siódma", "siódmy", "siódme"],
          correct: 1,
          explanation: "'Jest siódma' - seventh hour, feminine ordinal."
        },
        {
          question: "What does 'wpół do czwartej' mean?",
          options: ["Quarter to four", "Half past four", "3:30 (half to four)", "4:30"],
          correct: 2,
          explanation: "'Wpół do czwartej' literally means 'half to four' = 3:30."
        },
        {
          question: "How do you say 'at 6:00'?",
          options: ["w szóstej", "na szóstej", "o szóstej", "do szóstej"],
          correct: 2,
          explanation: "'O szóstej' - use 'o' + Locative for 'at [time]'."
        }
      ],

      intermediate: [
        {
          question: "Complete: 'Film zaczyna się ___ ósmej trzydzieści.' (The movie starts at 8:30)",
          options: ["w", "na", "o", "za"],
          correct: 2,
          explanation: "'O' + Locative is used: 'o ósmej trzydzieści' (at 8:30)."
        },
        {
          question: "What is 'quarter past three' in Polish?",
          options: ["kwadrans po trzeciej", "za kwadrans trzecia", "wpół do trzeciej", "trzecia piętnaście"],
          correct: 0,
          explanation: "'Kwadrans po trzeciej' = quarter past three (also: trzecia piętnaście)."
        },
        {
          question: "How do you say 'It's 11:45'?",
          options: ["Jest jedenasta czterdzieści pięć.", "Jest za piętnaście dwunasta.", "Both are correct.", "Jest wpół do dwunastej."],
          correct: 2,
          explanation: "Both forms are correct: 'jedenasta czterdzieści pięć' or 'za piętnaście dwunasta' (fifteen to twelve)."
        },
        {
          question: "Complete: 'Urodziłem się ___ marca.' (I was born on March 5th)",
          options: ["pięć", "piąty", "piątego", "piąta"],
          correct: 2,
          explanation: "Genitive masculine ordinal: 'piątego marca' (fifth of March)."
        },
        {
          question: "What does 'za pięć druga' mean?",
          options: ["Five past two", "Five to two", "Second at five", "Two at five"],
          correct: 1,
          explanation: "'Za pięć druga' = five to two (1:55) - 'za' means 'before/in'."
        },
        {
          question: "How do you say 'in the 21st century'?",
          options: ["w dwadzieścia pierwszym wieku", "w dwudziestym pierwszym wieku", "dwudziesty pierwszy wiek", "o dwudziestym pierwszym wieku"],
          correct: 1,
          explanation: "'W dwudziestym pierwszym wieku' - Locative case after 'w'."
        },
        {
          question: "Complete: 'Mam dwadzieścia trzy ___.' (I'm 23 years old)",
          options: ["rok", "lata", "lat", "roku"],
          correct: 1,
          explanation: "Numbers ending in 2-4 use 'lata' (Nominative plural): dwadzieścia trzy lata."
        },
        {
          question: "What is 'January 1st' in Polish?",
          options: ["jeden stycznia", "pierwszy stycznia", "pierwszego stycznia", "jedna stycznia"],
          correct: 1,
          explanation: "'Pierwszy stycznia' - Nominative masculine ordinal + month in Genitive."
        },
        {
          question: "How do you say 'half an hour'?",
          options: ["pół godzina", "pół godziny", "połowa godzina", "połówka godziny"],
          correct: 1,
          explanation: "'Pół godziny' - 'pół' is followed by Genitive: pół godziny."
        },
        {
          question: "Complete: 'Żyję w ___ wieku.' (I live in the 21st century)",
          options: ["dwudziesty pierwszy", "dwudziestym pierwszym", "dwadzieścia jeden", "dwadzieścia pierwszym"],
          correct: 1,
          explanation: "Locative after 'w': 'w dwudziestym pierwszym wieku'."
        }
      ],

      advanced: [
        {
          question: "What's the difference between 'Jest trzecia trzydzieści' and 'Jest wpół do czwartej'?",
          options: ["Different times", "Same time (3:30), different expressions", "First is formal, second informal", "First is time, second is duration"],
          correct: 1,
          explanation: "Both mean 3:30. First is 'third hour thirty', second is 'half to four' - same time."
        },
        {
          question: "Complete: 'Urodziłem się ___ roku.' (I was born in 1985 - Locative)",
          options: ["w tysiąc dziewięćset osiemdziesiąt pięć", "w tysiąc dziewięćset osiemdziesiątym piątym", "tysiąc dziewięćset osiemdziesiąt piąty", "roku tysiąc dziewięćset osiemdziesiąt pięć"],
          correct: 1,
          explanation: "Locative requires ordinal form: 'w tysiąc dziewięćset osiemdziesiątym piątym roku'."
        },
        {
          question: "How do you say 'two thirds' in Polish?",
          options: ["dwa trzecie", "dwie trzecie", "dwóch trzecich", "dwie trzeci"],
          correct: 1,
          explanation: "'Dwie trzecie' - feminine form of 'two' + neuter plural 'trzecie' (thirds)."
        },
        {
          question: "Complete: 'Spotkanie jest zaplanowane na godzinę ___.' (The meeting is scheduled for 14:30)",
          options: ["czternastą trzydzieści", "czternasta trzydzieści", "czternastej trzydzieści", "o czternastej trzydzieści"],
          correct: 0,
          explanation: "Accusative after 'na': 'na godzinę czternastą trzydzieści' (for 14:30)."
        },
        {
          question: "What does 'trzy czwarte' mean?",
          options: ["Three quarters", "Three fourths", "Both A and B", "75% only"],
          correct: 2,
          explanation: "'Trzy czwarte' means both 'three quarters' and 'three fourths' - same meaning."
        },
        {
          question: "How do you say 'I'm exactly 30 years old'?",
          options: ["Mam dokładnie trzydzieści lat.", "Mam dokładnie trzydzieści lata.", "Mam dokładnie trzydziesty rok.", "Mam dokładnie trzydzieści roku."],
          correct: 0,
          explanation: "Numbers ending in 0 (except 10) use Genitive: 'trzydzieści lat'."
        },
        {
          question: "Complete: 'Żyjemy w ___ stuleciu.' (We live in the 21st century - alternative word)",
          options: ["dwudziestym pierwszym", "dwudziesty pierwszy", "dwadzieścia pierwszy", "dwudziesta pierwsza"],
          correct: 0,
          explanation: "Locative after 'w': 'w dwudziestym pierwszym stuleciu' (stulecie = century)."
        },
        {
          question: "What's the correct way to say '3.14' (pi) in Polish?",
          options: ["trzy punkt czternaście", "trzy przecinek czternaście", "trzy kropka czternaście", "trzy i czternaście"],
          correct: 1,
          explanation: "'Trzy przecinek czternaście' - Polish uses 'przecinek' (comma) for decimal point."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "Jest ___.",
          english: "It's 1:00.",
          blank: 1,
          options: ["jeden", "jedna", "pierwsza", "raz"],
          correct: 2,
          explanation: "'Jest pierwsza' - first hour, feminine ordinal."
        },
        {
          polish: "Spotkajmy się ___ czwartej.",
          english: "Let's meet at 4:00.",
          blank: 2,
          options: ["w", "na", "o", "za"],
          correct: 2,
          explanation: "'O' + Locative is used for 'at [time]': o czwartej."
        },
        {
          polish: "Jest ___ piętnaście.",
          english: "It's 2:15.",
          blank: 1,
          options: ["dwa", "druga", "drugi", "drugiej"],
          correct: 1,
          explanation: "'Jest druga piętnaście' - second hour (ordinal) + fifteen minutes."
        },
        {
          polish: "___ godzina?",
          english: "What time is it?",
          blank: 0,
          options: ["Która", "Ile", "Jaka", "Co"],
          correct: 0,
          explanation: "'Która godzina?' is the standard way to ask the time."
        },
        {
          polish: "Film zaczyna się o ___.",
          english: "The movie starts at 8:00.",
          blank: 4,
          options: ["ósma", "ósmej", "osiem", "ósmą"],
          correct: 1,
          explanation: "'O' requires Locative: 'o ósmej' (at eight)."
        },
        {
          polish: "Jest ___.",
          english: "It's 6:00.",
          blank: 1,
          options: ["sześć", "szósta", "szóste", "szósty"],
          correct: 1,
          explanation: "'Jest szósta' - sixth hour, feminine ordinal."
        },
        {
          polish: "Mam dwadzieścia pięć ___.",
          english: "I'm 25 years old.",
          blank: 3,
          options: ["rok", "lata", "lat", "roku"],
          correct: 2,
          explanation: "Numbers 5+ use Genitive plural: 'lat'."
        },
        {
          polish: "Dziś jest ___ marca.",
          english: "Today is March 3rd.",
          blank: 2,
          options: ["trzy", "trzeci", "trzecia", "trzecie"],
          correct: 1,
          explanation: "Dates use masculine Nominative ordinal: 'trzeci marca'."
        }
      ],

      intermediate: [
        {
          polish: "Jest ___ do czwartej.",
          english: "It's 3:30 (half to four).",
          blank: 1,
          options: ["pół", "wpół", "połowa", "połowy"],
          correct: 1,
          explanation: "'Wpół do czwartej' is the idiomatic expression for 3:30."
        },
        {
          polish: "Urodziłem się ___ sierpnia.",
          english: "I was born on August 12th.",
          blank: 2,
          options: ["dwanaście", "dwunasty", "dwunastego", "dwunasta"],
          correct: 2,
          explanation: "Genitive masculine ordinal in dates: 'dwunastego sierpnia'."
        },
        {
          polish: "Jest kwadrans ___ trzeciej.",
          english: "It's quarter past three.",
          blank: 2,
          options: ["w", "na", "po", "za"],
          correct: 2,
          explanation: "'Kwadrans po trzeciej' - 'po' means 'past' in time expressions."
        },
        {
          polish: "Żyję w ___ wieku.",
          english: "I live in the 21st century.",
          blank: 2,
          options: ["dwudziesty pierwszy", "dwudziestym pierwszym", "dwadzieścia jeden", "dwudziesta pierwsza"],
          correct: 1,
          explanation: "Locative after 'w': 'w dwudziestym pierwszym wieku'."
        },
        {
          polish: "Jest ___ piąć druga.",
          english: "It's five to two (1:55).",
          blank: 1,
          options: ["w", "na", "za", "po"],
          correct: 2,
          explanation: "'Za pięć druga' - 'za' means 'in/before' for time remaining."
        },
        {
          polish: "Mam dwadzieścia trzy ___.",
          english: "I'm 23 years old.",
          blank: 3,
          options: ["rok", "lata", "lat", "roku"],
          correct: 1,
          explanation: "Numbers ending in 2-4 use Nominative plural: 'lata'."
        },
        {
          polish: "___ godziny czekałem.",
          english: "I waited for half an hour.",
          blank: 0,
          options: ["Pół", "Wpół", "Połowa", "Połowy"],
          correct: 0,
          explanation: "'Pół godziny' - 'pół' + Genitive for 'half an hour'."
        },
        {
          polish: "Spotkanie jest o godzinie ___ trzydzieści.",
          english: "The meeting is at 14:30.",
          blank: 4,
          options: ["czternasta", "czternastej", "czternaście", "czternastą"],
          correct: 1,
          explanation: "'O godzinie' requires Locative: 'o godzinie czternastej trzydzieści'."
        }
      ],

      advanced: [
        {
          polish: "Urodziłem się w ___ roku.",
          english: "I was born in 1990 (Locative - in the year 1990).",
          blank: 3,
          options: ["tysiąc dziewięćset dziewięćdziesiąty", "tysiąc dziewięćset dziewięćdziesiątym", "roku tysiąc dziewięćset dziewięćdziesiąt", "tysiąc dziewięćset dziewięćdziesiąt"],
          correct: 1,
          explanation: "Locative requires ordinal: 'w tysiąc dziewięćset dziewięćdziesiątym roku'."
        },
        {
          polish: "To stanowi ___ całości.",
          english: "This constitutes two thirds of the whole.",
          blank: 2,
          options: ["dwa trzecie", "dwie trzecie", "dwóch trzecich", "dwaj trzeci"],
          correct: 1,
          explanation: "'Dwie trzecie' - two thirds (feminine 'dwie' + neuter plural 'trzecie')."
        },
        {
          polish: "Wartość pi to ___ czternaście.",
          english: "The value of pi is 3.14 (three comma fourteen).",
          blank: 3,
          options: ["trzy punkt", "trzy przecinek", "trzy kropka", "trzech przecinek"],
          correct: 1,
          explanation: "'Trzy przecinek czternaście' - Polish uses 'przecinek' (comma) for decimals."
        },
        {
          polish: "W ___ stuleciu nastąpił wielki postęp.",
          english: "Great progress occurred in the 20th century.",
          blank: 1,
          options: ["dwudziesty", "dwudziestym", "dwadzieścia", "dwudziesta"],
          correct: 1,
          explanation: "Locative after 'w': 'w dwudziestym stuleciu'."
        },
        {
          polish: "Zjazd zaplanowano na godzinę ___.",
          english: "The reunion is scheduled for 15:45.",
          blank: 4,
          options: ["piętnasta czterdzieści pięć", "piętnastą czterdzieści pięć", "piętnastej czterdzieści pięć", "o piętnastej czterdzieści pięć"],
          correct: 1,
          explanation: "Accusative after 'na': 'na godzinę piętnastą czterdzieści pięć'."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the Polish time expression with its English meaning",
          pairs: [
            { polish: "Jest pierwsza.", english: "It's 1:00" },
            { polish: "Jest druga.", english: "It's 2:00" },
            { polish: "Jest trzecia.", english: "It's 3:00" },
            { polish: "Jest czwarta.", english: "It's 4:00" },
            { polish: "Jest piąta.", english: "It's 5:00" },
            { polish: "O której?", english: "At what time?" },
            { polish: "Która godzina?", english: "What time is it?" },
            { polish: "O szóstej.", english: "At 6:00" }
          ]
        },
        {
          instruction: "Match the time expression with its translation",
          pairs: [
            { polish: "wpół do czwartej", english: "3:30 (half to four)" },
            { polish: "kwadrans po trzeciej", english: "3:15 (quarter past three)" },
            { polish: "za kwadrans czwarta", english: "3:45 (quarter to four)" },
            { polish: "za pięć druga", english: "1:55 (five to two)" },
            { polish: "pierwszy stycznia", english: "January 1st" },
            { polish: "dwudziesty pierwszy wiek", english: "21st century" },
            { polish: "pół godziny", english: "half an hour" },
            { polish: "dwie trzecie", english: "two thirds" }
          ]
        }
      ]
    }
  }
];
