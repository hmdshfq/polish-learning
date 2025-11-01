export const cases = [
  {
    name: "Nominative",
    polish: "Mianownik",
    difficulty: "beginner",
    question: "Kto? Co?",
    questionEng: "Who? What?",
    usage:
      "The subject of the sentence - the person or thing doing the action",
    analogy:
      "Think of it as the 'hero' of your sentence - the one doing things",
    examples: [
      {
        polish: "Kot śpi.",
        english: "The cat is sleeping.",
        highlight: "Kot",
      },
      {
        polish: "Książka jest interesująca.",
        english: "The book is interesting.",
        highlight: "Książka",
      },
    ],
    quiz: {
      beginner: [
        {
          question:
            "Which word is in the Nominative case? '___ jest duży.' (The house is big)",
          options: ["Domu", "Dom", "Domem", "Domu"],
          correct: 1,
          explanation: "Dom (house) is the subject, so it's in Nominative.",
        },
      ],
      intermediate: [
        {
          question: "Complete: '___ lubi muzykę.' (The girl likes music)",
          options: ["Dziewczyna", "Dziewczyny", "Dziewczynie", "Dziewczyną"],
          correct: 0,
          explanation: "Dziewczyna is the subject (who likes music).",
        },
        {
          question:
            "Which is Nominative? '___ są na stole.' (The books are on the table)",
          options: ["Książki", "Książek", "Książkom", "Książkami"],
          correct: 0,
          explanation: "Książki (plural nominative) is the subject.",
        },
      ],
      advanced: [
        {
          question:
            "Complete with plural Nominative: '___ zawsze mówią prawdę.' (Children always tell the truth)",
          options: ["Dzieci", "Dziecko", "Dziećmi", "Dzieciom"],
          correct: 0,
          explanation:
            "Dzieci is the irregular nominative plural of dziecko.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "___ jest piękna.",
          correct: "Pogoda",
          options: ["Pogoda", "Pogody", "Pogodzie", "Pogodą"],
          english: "The weather is beautiful.",
          hint: "Subject of the sentence",
        },
      ],
      intermediate: [
        {
          sentence: "___ biega szybko.",
          correct: "Pies",
          options: ["Pies", "Psa", "Psu", "Psem"],
          english: "The dog runs fast.",
          hint: "Who is running?",
        },
      ],
      advanced: [
        {
          sentence: "___ stoją w ogrodzie.",
          correct: "Drzewa",
          options: ["Drzewo", "Drzewa", "Drzewom", "Drzew"],
          english: "The trees are standing in the garden.",
          hint: "Plural subject",
        },
      ],
    },
    sentenceBuilder: {
      beginner: [
        {
          words: ["jest", "piękny", "Dzień", "dziś"],
          correct: "Dzień jest dziś piękny",
          english: "The day is beautiful today",
          hint: "Subject + verb + adverb + adjective",
        },
      ],
      intermediate: [
        {
          words: ["na", "Kot", "śpi", "kanapie"],
          correct: "Kot śpi na kanapie",
          english: "The cat is sleeping on the sofa",
          hint: "Who + action + where",
        },
      ],
      advanced: [
        {
          words: ["bardzo", "Studenci", "są", "inteligentni"],
          correct: "Studenci są bardzo inteligentni",
          english: "The students are very intelligent",
          hint: "Subject + verb + adverb + adjective",
        },
      ],
    },
  },
  {
    name: "Genitive",
    polish: "Dopełniacz",
    difficulty: "intermediate",
    question: "Kogo? Czego?",
    questionEng: "Whose? Of what?",
    usage:
      "Shows possession, absence, or negation. Also used after numbers and certain prepositions.",
    analogy:
      "Like saying 'of' in English - 'house of Maria' or 'I don't have' (absence)",
    examples: [
      {
        polish: "Mam mało czasu.",
        english: "I have little time.",
        highlight: "czasu",
      },
      {
        polish: "Nie mam czasu.",
        english: "I don't have time.",
        highlight: "czasu",
      },
      {
        polish: "To jest dom Marii.",
        english: "This is Maria's house.",
        highlight: "Marii",
      },
      {
        polish: "Mam dużo czasu.",
        english: "I have a lot time.",
        highlight: "czasu",
      },
    ],
    quiz: {
      beginner: [
        {
          question: "Complete: 'Nie mam ___' (I don't have a dog)",
          options: ["pies", "psa", "psem", "psie"],
          correct: 1,
          explanation: "After negation 'nie mam' we use Genitive: psa.",
        },
      ],
      intermediate: [
        {
          question:
            "Complete: 'To jest książka ___' (This is the teacher's book)",
          options: [
            "nauczyciel",
            "nauczyciela",
            "nauczycielowi",
            "nauczycielem",
          ],
          correct: 1,
          explanation: "For possession, we use Genitive: nauczyciela.",
        },
      ],
      advanced: [
        {
          question: "Complete: 'Nie widzę ___' (I don't see any people)",
          options: ["ludzie", "ludzi", "ludziom", "ludźmi"],
          correct: 1,
          explanation: "Genitive plural of 'ludzie' (people) is 'ludzi'.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Nie widzę ___.",
          correct: "kota",
          options: ["kot", "kota", "kotem", "kotu"],
          english: "I don't see the cat.",
          hint: "Negation + whom/what",
        },
      ],
      intermediate: [
        {
          sentence: "To jest dom ___.",
          correct: "Piotra",
          options: ["Piotr", "Piotra", "Piotrowi", "Piotrem"],
          english: "This is Piotr's house.",
          hint: "Whose house?",
        },
      ],
    },
    sentenceBuilder: {
      beginner: [
        {
          words: ["nie", "pieniędzy", "mam"],
          correct: "Nie mam pieniędzy",
          english: "I don't have money",
          hint: "Negation first",
        },
      ],
      intermediate: [
        {
          words: ["to", "brata", "dom", "jest", "mojego"],
          correct: "To jest dom mojego brata",
          english: "This is my brother's house",
          hint: "This + verb + noun + adjective + noun in genitive",
        },
      ],
      advanced: [
        {
          words: ["dzieci", "wszystkich", "nie", "widzę"],
          correct: "Nie widzę wszystkich dzieci",
          english: "I don't see all the children",
          hint: "Negation + verb + adjective + noun (genitive plural)",
        },
      ],
    },
  },
  {
    name: "Accusative",
    polish: "Biernik",
    difficulty: "beginner",
    question: "Kogo? Co?",
    questionEng: "Whom? What?",
    usage: "Shows the direct object - what or whom the action is done to.",
    analogy:
      "The 'victim' or 'target' of the action - what you're eating, seeing, loving",
    examples: [
      { polish: "Widzę kota.", english: "I see the cat.", highlight: "kota" },
      {
        polish: "Czytam książkę.",
        english: "I'm reading a book.",
        highlight: "książkę",
      },
    ],
    quiz: {
      beginner: [
        {
          question: "Complete: 'Mam ___' (I have a dog)",
          options: ["pies", "psa", "psem", "psowi"],
          correct: 1,
          explanation: "Mieć (to have) takes Accusative: psa.",
        },
      ],
      intermediate: [
        {
          question: "Complete: 'Słucham ___' (I'm listening to music)",
          options: ["muzyka", "muzyki", "muzykę", "muzyką"],
          correct: 2,
          explanation: "Direct object: muzykę (Accusative).",
        },
        {
          question: "Complete: 'Widzę ___' (I see my brother)",
          options: ["brat", "brata", "bratem", "bratu"],
          correct: 1,
          explanation:
            "Masculine animate nouns use different Accusative: brata.",
        },
      ],
      advanced: [
        {
          question: "Complete: 'Kocham ___' (I love my parents - plural)",
          options: ["rodzice", "rodziców", "rodzicom", "rodzicami"],
          correct: 1,
          explanation: "Accusative plural of masculine personal: rodziców.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Lubię ___.",
          correct: "kawę",
          options: ["kawa", "kawy", "kawę", "kawą"],
          english: "I like coffee.",
          hint: "What do you like?",
        },
      ],
      intermediate: [
        {
          sentence: "Znam ___.",
          correct: "tego pana",
          options: ["ten pan", "tego pana", "temu panu", "tym panem"],
          english: "I know this gentleman.",
          hint: "Direct object - animate masculine",
        },
      ],
      advanced: [
        {
          sentence: "Kupuję ___.",
          correct: "nowe buty",
          options: [
            "nowe buty",
            "nowych butów",
            "nowym butom",
            "nowymi butami",
          ],
          english: "I'm buying new shoes.",
          hint: "Plural accusative",
        },
      ],
    },
    sentenceBuilder: {
      beginner: [
        {
          words: ["piłkę", "Kopię"],
          correct: "Kopię piłkę",
          english: "I'm kicking the ball",
          hint: "Action + what",
        },
      ],
      intermediate: [
        {
          words: ["widzę", "sklep", "duży"],
          correct: "Widzę duży sklep",
          english: "I see a big store",
          hint: "Verb + adjective + noun",
        },
      ],
      advanced: [
        {
          words: ["Kocham", "moją", "rodzinę", "całą"],
          correct: "Kocham całą moją rodzinę",
          english: "I love my whole family",
          hint: "Verb + adjective + possessive + noun",
        },
      ],
    },
  },
  {
    name: "Dative",
    polish: "Celownik",
    difficulty: "intermediate",
    question: "Komu? Czemu?",
    questionEng: "To whom? To what?",
    usage:
      "Shows the indirect object - the person receiving something or benefiting from an action.",
    analogy: "Think 'to/for someone' - like giving a gift TO your friend",
    examples: [
      {
        polish: "Daję prezent Markowi.",
        english: "I'm giving a gift to Mark.",
        highlight: "Markowi",
      },
      { polish: "Pomogę ci.", english: "I'll help you.", highlight: "ci" },
      {
        polish: "Kupuję kwiaty mamie.",
        english: "I'm buying flowers for mom.",
        highlight: "mamie",
      },
    ],
    quiz: {
      beginner: [
        {
          question:
            "Complete: 'Daję książkę ___' (I'm giving a book to my sister)",
          options: ["siostra", "siostry", "siostrze", "siostrą"],
          correct: 2,
          explanation: "The indirect object (to whom) uses Dative: siostrze.",
        },
      ],
      intermediate: [
        {
          question:
            "Complete: 'Opowiadam historię ___' (I'm telling a story to children)",
          options: ["dzieci", "dzieciom", "dziecko", "dziećmi"],
          correct: 1,
          explanation: "Dzieciom is the Dative plural form.",
        },
        {
          question: "Complete: 'Pomagam ___' (I'm helping my friend)",
          options: [
            "przyjaciel",
            "przyjaciela",
            "przyjacielowi",
            "przyjacielem",
          ],
          correct: 2,
          explanation: "Dative for masculine nouns: przyjacielowi.",
        },
      ],
      advanced: [
        {
          question: "Complete: 'Wszystkim ___' dziękuję (I thank all guests)",
          options: ["goście", "gości", "gościom", "gośćmi"],
          correct: 2,
          explanation: "Dative plural: gościom (to all guests).",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Pomogę ___.",
          correct: "tobie",
          options: ["ty", "tobie", "ciebie", "tobą"],
          english: "I'll help you.",
          hint: "To whom will I help?",
        },
      ],
      intermediate: [
        {
          sentence: "Daj ___ jabłko.",
          correct: "dziecku",
          options: ["dziecko", "dziecku", "dziecka", "dzieckiem"],
          english: "Give the child an apple.",
          hint: "To whom to give?",
        },
        {
          sentence: "Piszę list ___.",
          correct: "babci",
          options: ["babcia", "babci", "babcię", "babcią"],
          english: "I'm writing a letter to grandma.",
          hint: "To whom?",
        },
      ],
      advanced: [
        {
          sentence: "Dzięki ___ wygraliśmy.",
          correct: "wam",
          options: ["wy", "was", "wam", "wami"],
          english: "Thanks to you (plural) we won.",
          hint: "Dative plural pronoun",
        },
      ],
    },
    sentenceBuilder: {
      beginner: [
        {
          words: ["kupuję", "mamie", "prezent"],
          correct: "Kupuję mamie prezent",
          english: "I'm buying mom a gift",
          hint: "Verb + to whom + what",
        },
      ],
      intermediate: [
        {
          words: ["pomagam", "codziennie", "babci"],
          correct: "Pomagam babci codziennie",
          english: "I help grandma every day",
          hint: "Verb + to whom + when",
        },
      ],
      advanced: [
        {
          words: ["dzieciom", "Opowiadam", "bajkę", "moim"],
          correct: "Opowiadam moim dzieciom bajkę",
          english: "I'm telling my children a story",
          hint: "Verb + possessive + to whom + what",
        },
      ],
    },
  },
  {
    name: "Instrumental",
    polish: "Narzędnik",
    difficulty: "intermediate",
    question: "Kim? Czym?",
    questionEng: "By whom? With what?",
    usage:
      "Shows the instrument/tool used, or accompaniment. Also used with professions and 'to be'.",
    analogy:
      "Think 'with' or 'by means of' - writing WITH a pen, going WITH a friend",
    examples: [
      {
        polish: "Piszę długopisem.",
        english: "I'm writing with a pen.",
        highlight: "długopisem",
      },
      {
        polish: "Idę z przyjacielem.",
        english: "I'm going with a friend.",
        highlight: "przyjacielem",
      },
      {
        polish: "On jest lekarzem.",
        english: "He is a doctor.",
        highlight: "lekarzem",
      },
    ],
    quiz: {
      beginner: [
        {
          question: "Complete: 'Jem zupę ___' (I'm eating soup with a spoon)",
          options: ["łyżka", "łyżki", "łyżką", "łyżce"],
          correct: 2,
          explanation: "Instrument used: łyżką (Instrumental).",
        },
      ],
      intermediate: [
        {
          question: "Complete: 'Jestem ___' (I am a student)",
          options: ["student", "studenta", "studentem", "studentowi"],
          correct: 2,
          explanation:
            "Profession with 'być' (to be) uses Instrumental: studentem.",
        },
        {
          question: "Complete: 'Idę z ___' (I'm going with my sister)",
          options: ["siostra", "siostry", "siostrze", "siostrą"],
          correct: 3,
          explanation: "After 'z' (with), use Instrumental: siostrą.",
        },
      ],
      advanced: [
        {
          question:
            "Complete: 'Między ___ jest problem (Between the neighbors there is a problem)",
          options: ["sąsiedzi", "sąsiadów", "sąsiadom", "sąsiadami"],
          correct: 3,
          explanation:
            "Między (between) takes Instrumental plural: sąsiadami.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Jadę ___.",
          correct: "samochodem",
          options: ["samochód", "samochodu", "samochodem", "samochodzie"],
          english: "I'm going by car.",
          hint: "By what means?",
        },
      ],
      intermediate: [
        {
          sentence: "Jestem ___.",
          correct: "nauczycielem",
          options: [
            "nauczyciel",
            "nauczyciela",
            "nauczycielem",
            "nauczycielowi",
          ],
          english: "I am a teacher.",
          hint: "Profession with 'być'",
        },
        {
          sentence: "Idę z ___.",
          correct: "kolegą",
          options: ["kolega", "kolegi", "koledze", "kolegą"],
          english: "I'm going with a colleague.",
          hint: "With whom?",
        },
      ],
      advanced: [
        {
          sentence: "Cieszę się ___.",
          correct: "sukcesem",
          options: ["sukces", "sukcesu", "sukcesem", "sukcesie"],
          english: "I'm happy with the success.",
          hint: "Cieszyć się takes Instrumental",
        },
      ],
    },
    sentenceBuilder: {
      beginner: [
        {
          words: ["nożem", "Kroję", "chleb"],
          correct: "Kroję chleb nożem",
          english: "I'm cutting bread with a knife",
          hint: "Verb + object + instrument",
        },
      ],
      intermediate: [
        {
          words: ["jest", "Ona", "lekarką"],
          correct: "Ona jest lekarką",
          english: "She is a doctor",
          hint: "Subject + verb + profession",
        },
      ],
      advanced: [
        {
          words: ["Interesuję", "się", "polityką", "nie"],
          correct: "Nie interesuję się polityką",
          english: "I'm not interested in politics",
          hint: "Negation + reflexive verb + instrumental",
        },
      ],
    },
  },
  {
    name: "Locative",
    polish: "Miejscownik",
    difficulty: "intermediate",
    question: "O kim? O czym? Gdzie?",
    questionEng: "About whom? About what? Where?",
    usage:
      "Shows location or the topic being discussed. Always used with a preposition!",
    analogy:
      "Think 'about' or 'in/on/at' a place - talking ABOUT something or being IN a location",
    examples: [
      {
        polish: "Jestem w domu.",
        english: "I'm at home.",
        highlight: "domu",
      },
      {
        polish: "Rozmawiamy o filmie.",
        english: "We're talking about the movie.",
        highlight: "filmie",
      },
      {
        polish: "Mieszkam w Polsce.",
        english: "I live in Poland.",
        highlight: "Polsce",
      },
    ],
    quiz: {
      beginner: [
        {
          question: "Complete: 'Jestem w ___' (I'm in the park)",
          options: ["park", "parku", "parkiem", "parków"],
          correct: 1,
          explanation: "After preposition 'w' (in), we use Locative: parku.",
        },
      ],
      intermediate: [
        {
          question:
            "Complete: 'Myślę o ___' (I'm thinking about you - singular, familiar)",
          options: ["ty", "ciebie", "tobie", "tobą"],
          correct: 2,
          explanation: "After 'o' (about), Locative: tobie.",
        },
        {
          question:
            "Complete: 'Rozmawiamy o ___' (We're talking about the book)",
          options: ["książka", "książki", "książce", "książką"],
          correct: 2,
          explanation: "After 'o' (about), Locative: książce.",
        },
      ],
      advanced: [
        {
          question:
            "Complete: 'Na ___ są kwiaty (On the tables there are flowers - plural)",
          options: ["stoły", "stołów", "stołom", "stołach"],
          correct: 3,
          explanation: "Na (on) with location uses Locative plural: stołach.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Jestem w ___.",
          correct: "szkole",
          options: ["szkoła", "szkoły", "szkole", "szkołą"],
          english: "I'm at school.",
          hint: "Where am I?",
        },
      ],
      intermediate: [
        {
          sentence: "Rozmawiamy o ___.",
          correct: "muzyce",
          options: ["muzyka", "muzyki", "muzyce", "muzyką"],
          english: "We're talking about music.",
          hint: "About what?",
        },
        {
          sentence: "Mieszkam w ___.",
          correct: "mieście",
          options: ["miasto", "miasta", "mieście", "miastem"],
          english: "I live in a city.",
          hint: "Where do I live?",
        },
      ],
      advanced: [
        {
          sentence: "Myślę o ___.",
          correct: "dzieciach",
          options: ["dzieci", "dzieci", "dzieciom", "dzieciach"],
          english: "I'm thinking about the children.",
          hint: "About whom? (plural)",
        },
      ],
    },
    sentenceBuilder: {
      beginner: [
        {
          words: ["w", "Jestem", "parku"],
          correct: "Jestem w parku",
          english: "I'm in the park",
          hint: "Subject + preposition + place",
        },
      ],
      intermediate: [
        {
          words: ["o", "książce", "Myślę", "tej"],
          correct: "Myślę o tej książce",
          english: "I'm thinking about this book",
          hint: "Verb + preposition + determiner + noun",
        },
      ],
      advanced: [
        {
          words: ["Polsce", "w", "Mieszkam", "pięknej"],
          correct: "Mieszkam w pięknej Polsce",
          english: "I live in beautiful Poland",
          hint: "Verb + preposition + adjective + noun",
        },
      ],
    },
  },
  {
    name: "Vocative",
    polish: "Wołacz",
    difficulty: "beginner",
    question: "O!",
    questionEng: "Hey!",
    usage:
      "Used when addressing or calling someone directly. The 'hey you!' case.",
    analogy:
      "Like saying 'Hey, John!' or 'Maria!' when calling someone's name",
    examples: [
      {
        polish: "Marku, chodź tutaj!",
        english: "Mark, come here!",
        highlight: "Marku",
      },
      {
        polish: "Kochanie, pomóż mi.",
        english: "Honey, help me.",
        highlight: "Kochanie",
      },
      {
        polish: "Panie profesorze!",
        english: "Mr. Professor!",
        highlight: "profesorze",
      },
    ],
    quiz: {
      beginner: [
        {
          question: "Complete: '___, jak się masz?' (Anna, how are you?)",
          options: ["Anna", "Anno", "Anny", "Annie"],
          correct: 1,
          explanation: "When calling someone: Anno (Vocative).",
        },
      ],
      intermediate: [
        {
          question: "Complete: '___, proszę pomóc!' (Mom, please help!)",
          options: ["Mama", "Mamo", "Mamy", "Mamie"],
          correct: 1,
          explanation: "Addressing mother: Mamo (Vocative).",
        },
        {
          question: "Complete: '___, dziękuję!' (Sir, thank you!)",
          options: ["Pan", "Pana", "Panie", "Panem"],
          correct: 2,
          explanation: "Formal address: Panie (Vocative).",
        },
      ],
      advanced: [
        {
          question: "Complete: '___, słuchajcie! (Dear children, listen!)",
          options: [
            "Drogie dzieci",
            "Drodzy dzieci",
            "Drogie dziecko",
            "Drogich dzieci",
          ],
          correct: 0,
          explanation: "Vocative with adjective: Drogie dzieci.",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "___, chodź tutaj!",
          correct: "Piotrze",
          options: ["Piotr", "Piotra", "Piotrze", "Piotrem"],
          english: "Piotr, come here!",
          hint: "Calling someone's name",
        },
      ],
      intermediate: [
        {
          sentence: "___, co robisz?",
          correct: "Kasiu",
          options: ["Kasia", "Kasi", "Kasiu", "Kasią"],
          english: "Kasia, what are you doing?",
          hint: "Direct address",
        },
        {
          sentence: "___, proszę o ciszę!",
          correct: "Panowie",
          options: ["Panowie", "Panów", "Panom", "Panami"],
          english: "Gentlemen, please be quiet!",
          hint: "Plural formal address",
        },
      ],
      advanced: [
        {
          sentence: "___, witam serdecznie!",
          correct: "Szanowni państwo",
          options: [
            "Szanowni państwo",
            "Szanownych państwa",
            "Szanownym państwu",
            "Szanownymi państwami",
          ],
          english: "Ladies and gentlemen, I warmly welcome you!",
          hint: "Very formal plural address",
        },
      ],
    },
    sentenceBuilder: {
      beginner: [
        {
          words: ["tutaj", "Marku", "chodź"],
          correct: "Marku chodź tutaj",
          english: "Mark, come here",
          hint: "Name first when calling",
        },
      ],
      intermediate: [
        {
          words: ["dzieci", "Słuchajcie", "drogie"],
          correct: "Drogie dzieci Słuchajcie",
          english: "Dear children, listen",
          hint: "Address + noun + verb",
        },
      ],
      advanced: [
        {
          words: ["Panie", "proszę", "profesorze", "pomóc"],
          correct: "Panie profesorze proszę pomóc",
          english: "Professor, please help",
          hint: "Title + noun + verb + infinitive",
        },
      ],
    },
  },
];
