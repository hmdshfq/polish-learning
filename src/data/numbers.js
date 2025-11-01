export const numbers = [
  {
    name: "Numbers 1-100",
    polish: "Liczebniki 1-100",
    difficulty: "beginner",
    level: "A1",
    icon: "🔢",

    explanation: "Polish numbers from 1-100 follow predictable patterns once you learn the basics. Numbers 1-10 are unique and must be memorized. Numbers 11-19 add the suffix '-naście' (like English '-teen'). Tens (20, 30, 40...) have their own forms, and compound numbers simply combine tens + units. At the A1 level, focus on recognizing and saying numbers - you'll learn how numbers change with cases later.",

    analogy: "Think of Polish numbers like building blocks. You memorize 1-10 (the foundation blocks), learn the '-naście' pattern for teens (like how English adds '-teen'), and then stack tens with units for larger numbers (just like saying 'twenty-five' in English). Once you know the building blocks, you can construct any number up to 100.",

    numberGroups: [
      {
        range: "1-10",
        description: "Foundation numbers - memorize these first",
        numbers: [
          { numeral: 1, polish: "jeden", english: "one", note: "Sounds like 'YEH-den'" },
          { numeral: 2, polish: "dwa", english: "two", note: "Rhymes with 'spa'" },
          { numeral: 3, polish: "trzy", english: "three", note: "Sounds like 'tsh-ih'" },
          { numeral: 4, polish: "cztery", english: "four", note: "Like 'CHTE-rih'" },
          { numeral: 5, polish: "pięć", english: "five", note: "Sounds like 'pyen-ch'" },
          { numeral: 6, polish: "sześć", english: "six", note: "Like 'shesh-ch'" },
          { numeral: 7, polish: "siedem", english: "seven", note: "See-DEM" },
          { numeral: 8, polish: "osiem", english: "eight", note: "OH-shem" },
          { numeral: 9, polish: "dziewięć", english: "nine", note: "DJEH-vyen-ch'" },
          { numeral: 10, polish: "dziesięć", english: "ten", note: "DJEH-shen-ch'" }
        ]
      },
      {
        range: "11-19",
        description: "Teen numbers - add '-naście' to the root (like English '-teen')",
        numbers: [
          { numeral: 11, polish: "jedenaście", english: "eleven", note: "jeden + naście" },
          { numeral: 12, polish: "dwanaście", english: "twelve", note: "dwa + naście" },
          { numeral: 13, polish: "trzynaście", english: "thirteen", note: "trzy + naście" },
          { numeral: 14, polish: "czternaście", english: "fourteen", note: "czter + naście" },
          { numeral: 15, polish: "piętnaście", english: "fifteen", note: "pięt + naście (slight change)" },
          { numeral: 16, polish: "szesnaście", english: "sixteen", note: "szes + naście (shortened)" },
          { numeral: 17, polish: "siedemnaście", english: "seventeen", note: "siedem + naście" },
          { numeral: 18, polish: "osiemnaście", english: "eighteen", note: "osiem + naście" },
          { numeral: 19, polish: "dziewiętnaście", english: "nineteen", note: "dziewięt + naście" }
        ]
      },
      {
        range: "20-90",
        description: "Tens - each has a unique form to memorize",
        numbers: [
          { numeral: 20, polish: "dwadzieścia", english: "twenty", note: "dwa + dzieścia pattern" },
          { numeral: 30, polish: "trzydzieści", english: "thirty", note: "trzy + dzieści pattern" },
          { numeral: 40, polish: "czterdzieści", english: "forty", note: "czter + dzieści" },
          { numeral: 50, polish: "pięćdziesiąt", english: "fifty", note: "pięć + dziesiąt pattern" },
          { numeral: 60, polish: "sześćdziesiąt", english: "sixty", note: "sześć + dziesiąt" },
          { numeral: 70, polish: "siedemdziesiąt", english: "seventy", note: "siedem + dziesiąt" },
          { numeral: 80, polish: "osiemdziesiąt", english: "eighty", note: "osiem + dziesiąt" },
          { numeral: 90, polish: "dziewięćdziesiąt", english: "ninety", note: "dziewięć + dziesiąt" }
        ]
      },
      {
        range: "Special",
        description: "Important number",
        numbers: [
          { numeral: 100, polish: "sto", english: "one hundred", note: "Simple and short!" }
        ]
      },
      {
        range: "Examples 21-99",
        description: "Compound numbers - just say tens + units (like English)",
        numbers: [
          { numeral: 21, polish: "dwadzieścia jeden", english: "twenty-one", note: "20 + 1" },
          { numeral: 35, polish: "trzydzieści pięć", english: "thirty-five", note: "30 + 5" },
          { numeral: 47, polish: "czterdzieści siedem", english: "forty-seven", note: "40 + 7" },
          { numeral: 56, polish: "pięćdziesiąt sześć", english: "fifty-six", note: "50 + 6" },
          { numeral: 68, polish: "sześćdziesiąt osiem", english: "sixty-eight", note: "60 + 8" },
          { numeral: 79, polish: "siedemdziesiąt dziewięć", english: "seventy-nine", note: "70 + 9" },
          { numeral: 82, polish: "osiemdziesiąt dwa", english: "eighty-two", note: "80 + 2" },
          { numeral: 94, polish: "dziewięćdziesiąt cztery", english: "ninety-four", note: "90 + 4" }
        ]
      }
    ],

    usage: [
      {
        context: "Stating your age",
        example: "Mam dwadzieścia pięć lat.",
        english: "I am 25 years old.",
        note: "Use 'Mam' (I have) + number + 'lat' (years). This is the basic form - you'll learn why 'lat' changes in A2."
      },
      {
        context: "Counting objects",
        example: "Widzę pięć kotów.",
        english: "I see five cats.",
        note: "Number + noun. The noun ending changes based on the number, but at A1 level, just focus on the number itself."
      },
      {
        context: "Phone numbers",
        example: "Mój numer to sześć, osiem, trzy, dwa, jeden.",
        english: "My number is 6-8-3-2-1.",
        note: "Say each digit separately, like in English."
      },
      {
        context: "Prices (basic)",
        example: "To kosztuje dziesięć złotych.",
        english: "This costs ten zloty.",
        note: "Number + 'złotych' (zloty - Polish currency)."
      },
      {
        context: "Time (hours)",
        example: "Jest trzecia.",
        english: "It's three o'clock.",
        note: "Time uses different number forms, but you can start with basics like 'trzecia' (third/three) for 3 o'clock."
      },
      {
        context: "Counting in sequence",
        example: "Jeden, dwa, trzy, cztery, pięć...",
        english: "One, two, three, four, five...",
        note: "Use the basic forms when counting or doing math."
      }
    ],

    quiz: {
      beginner: [
        {
          question: "How do you say '3' in Polish?",
          options: ["dwa", "trzy", "cztery", "troje"],
          correct: 1,
          explanation: "'Trzy' is the Polish word for 'three'."
        },
        {
          question: "What number is 'osiem'?",
          options: ["7", "8", "9", "10"],
          correct: 1,
          explanation: "'Osiem' means 'eight' in Polish."
        },
        {
          question: "How do you say '10' in Polish?",
          options: ["dziewięć", "dziesięć", "jedenaście", "dziewiętnaście"],
          correct: 1,
          explanation: "'Dziesięć' is 'ten' in Polish."
        },
        {
          question: "What is 'pięć'?",
          options: ["4", "5", "6", "15"],
          correct: 1,
          explanation: "'Pięć' means 'five'."
        },
        {
          question: "Complete: 'Mam ___ lat.' (I am 7 years old)",
          options: ["sześć", "siedem", "osiem", "dziewięć"],
          correct: 1,
          explanation: "'Siedem' means 'seven', so 'Mam siedem lat' = 'I am seven years old'."
        },
        {
          question: "How do you say '15' in Polish?",
          options: ["piętnaście", "pięćdziesiąt", "pięć", "dwanaście"],
          correct: 0,
          explanation: "'Piętnaście' is 'fifteen'. Notice the '-naście' suffix like English '-teen'."
        },
        {
          question: "What number is 'dwanaście'?",
          options: ["2", "12", "20", "22"],
          correct: 1,
          explanation: "'Dwanaście' means 'twelve' (dwa + naście)."
        },
        {
          question: "Which number is 'jeden'?",
          options: ["1", "10", "11", "21"],
          correct: 0,
          explanation: "'Jeden' is the Polish word for 'one'."
        },
        {
          question: "How do you say '6' in Polish?",
          options: ["pięć", "sześć", "siedem", "osiem"],
          correct: 1,
          explanation: "'Sześć' means 'six'."
        },
        {
          question: "What does 'cztery' mean?",
          options: ["three", "four", "five", "fourteen"],
          correct: 1,
          explanation: "'Cztery' is the Polish word for 'four'."
        }
      ],

      intermediate: [
        {
          question: "How do you say '20' in Polish?",
          options: ["dwanaście", "dwadzieścia", "dwa", "dwudziestu"],
          correct: 1,
          explanation: "'Dwadzieścia' is 'twenty' in Polish."
        },
        {
          question: "What number is 'trzydzieści'?",
          options: ["3", "13", "30", "33"],
          correct: 2,
          explanation: "'Trzydzieści' means 'thirty'."
        },
        {
          question: "How do you say '25' in Polish?",
          options: ["dwadzieścia pięć", "pięć dwadzieścia", "piętnaście", "pięćdziesiąt"],
          correct: 0,
          explanation: "'Dwadzieścia pięć' (twenty five) is how you say 25 - tens first, then units."
        },
        {
          question: "Complete: 'Mam ___ lat.' (I am 18 years old)",
          options: ["osiemnaście", "osiem", "osiemdziesiąt", "dwadzieścia osiem"],
          correct: 0,
          explanation: "'Osiemnaście' means 'eighteen'."
        },
        {
          question: "What is 'czterdzieści siedem'?",
          options: ["44", "47", "74", "57"],
          correct: 1,
          explanation: "'Czterdzieści siedem' = forty (40) + seven (7) = 47."
        },
        {
          question: "How do you say '50' in Polish?",
          options: ["pięć", "piętnaście", "pięćdziesiąt", "pięćset"],
          correct: 2,
          explanation: "'Pięćdziesiąt' is 'fifty' in Polish."
        },
        {
          question: "What number is 'dziewiętnaście'?",
          options: ["9", "19", "90", "99"],
          correct: 1,
          explanation: "'Dziewiętnaście' means 'nineteen' (dziewięt + naście)."
        },
        {
          question: "Complete: 'Widzę ___ kotów.' (I see 11 cats)",
          options: ["jeden", "jedenaście", "jedendziesiąt", "dziesięć jeden"],
          correct: 1,
          explanation: "'Jedenaście' means 'eleven'."
        },
        {
          question: "How do you write '34' in Polish?",
          options: ["trzydzieści cztery", "czterdzieści trzy", "czternaście", "trzy cztery"],
          correct: 0,
          explanation: "'Trzydzieści cztery' = thirty (30) + four (4) = 34."
        },
        {
          question: "What is 'sześćdziesiąt'?",
          options: ["6", "16", "60", "66"],
          correct: 2,
          explanation: "'Sześćdziesiąt' means 'sixty'."
        }
      ],

      advanced: [
        {
          question: "How do you say '73' in Polish?",
          options: ["siedemdziesiąt trzy", "siedemnaście", "trzydzieści siedem", "siedem trzy"],
          correct: 0,
          explanation: "'Siedemdziesiąt trzy' = seventy (70) + three (3) = 73."
        },
        {
          question: "What number is 'dziewięćdziesiąt osiem'?",
          options: ["89", "98", "99", "88"],
          correct: 1,
          explanation: "'Dziewięćdziesiąt osiem' = ninety (90) + eight (8) = 98."
        },
        {
          question: "Complete: 'Mam ___ lat.' (I am 42 years old)",
          options: ["czterdzieści dwa", "dwadzieścia cztery", "czternaście dwa", "czterdzieści drugi"],
          correct: 0,
          explanation: "'Czterdzieści dwa' means 'forty-two'."
        },
        {
          question: "How do you say '100' in Polish?",
          options: ["dziesiąt", "dziesięć dziesięć", "sto", "setka"],
          correct: 2,
          explanation: "'Sto' is the simple Polish word for 'one hundred'."
        },
        {
          question: "Which number is 'osiemdziesiąt jeden'?",
          options: ["18", "81", "88", "71"],
          correct: 1,
          explanation: "'Osiemdziesiąt jeden' = eighty (80) + one (1) = 81."
        },
        {
          question: "What pattern do teens (11-19) follow?",
          options: ["root + -dziesiąt", "root + -naście", "root + -set", "root + -sto"],
          correct: 1,
          explanation: "Teen numbers add '-naście' to the root, like English adds '-teen' (e.g., dwanaście = twelve)."
        },
        {
          question: "How do you say '56' in Polish?",
          options: ["pięćdziesiąt sześć", "sześćdziesiąt pięć", "pięć sześćdziesiąt", "szesnaście pięć"],
          correct: 0,
          explanation: "'Pięćdziesiąt sześć' = fifty (50) + six (6) = 56."
        },
        {
          question: "What suffix do numbers 50-90 share?",
          options: ["-naście", "-dzieścia/-dzieści", "-dziesiąt", "-sto"],
          correct: 2,
          explanation: "Numbers 50, 60, 70, 80, 90 all end with '-dziesiąt' (pięćdziesiąt, sześćdziesiąt, etc.)."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "Mam ___ koty.",
          english: "I have three cats.",
          blank: 1,
          options: ["dwa", "trzy", "cztery", "pięć"],
          correct: 1,
          explanation: "'Trzy' means 'three'."
        },
        {
          polish: "Widzę ___ psów.",
          english: "I see five dogs.",
          blank: 1,
          options: ["cztery", "pięć", "sześć", "siedem"],
          correct: 1,
          explanation: "'Pięć' means 'five'."
        },
        {
          polish: "Mam ___ lat.",
          english: "I am ten years old.",
          blank: 1,
          options: ["dziewięć", "dziesięć", "jedenaście", "osiem"],
          correct: 1,
          explanation: "'Dziesięć' means 'ten'."
        },
        {
          polish: "___ plus dwa równa się sześć.",
          english: "Four plus two equals six.",
          blank: 0,
          options: ["Trzy", "Cztery", "Pięć", "Sześć"],
          correct: 1,
          explanation: "'Cztery' means 'four'. 4 + 2 = 6."
        },
        {
          polish: "Mam ___ jabłek.",
          english: "I have seven apples.",
          blank: 1,
          options: ["sześć", "siedem", "osiem", "dziewięć"],
          correct: 1,
          explanation: "'Siedem' means 'seven'."
        },
        {
          polish: "Jest godzina ___.",
          english: "It's one o'clock.",
          blank: 2,
          options: ["jeden", "pierwsza", "jedna", "raz"],
          correct: 1,
          explanation: "For time, we use 'pierwsza' (first) for 1 o'clock, but you'll learn this pattern later."
        },
        {
          polish: "Mam ___ złotych.",
          english: "I have eight zloty.",
          blank: 1,
          options: ["siedem", "osiem", "dziewięć", "dziesięć"],
          correct: 1,
          explanation: "'Osiem' means 'eight'."
        },
        {
          polish: "___ minus jeden równa się osiem.",
          english: "Nine minus one equals eight.",
          blank: 0,
          options: ["Osiem", "Dziewięć", "Dziesięć", "Siedem"],
          correct: 1,
          explanation: "'Dziewięć' means 'nine'. 9 - 1 = 8."
        }
      ],

      intermediate: [
        {
          polish: "Mam ___ lat.",
          english: "I am fifteen years old.",
          blank: 1,
          options: ["piętnaście", "pięćdziesiąt", "pięćset", "pięć"],
          correct: 0,
          explanation: "'Piętnaście' means 'fifteen'."
        },
        {
          polish: "To kosztuje ___ złotych.",
          english: "This costs twenty zloty.",
          blank: 2,
          options: ["dwa", "dwanaście", "dwadzieścia", "dwudziesty"],
          correct: 2,
          explanation: "'Dwadzieścia' means 'twenty'."
        },
        {
          polish: "Widzę ___ osób.",
          english: "I see thirteen people.",
          blank: 1,
          options: ["trzynaście", "trzydzieści", "trzeci", "trzy"],
          correct: 0,
          explanation: "'Trzynaście' means 'thirteen'."
        },
        {
          polish: "Mam ___ książek.",
          english: "I have thirty-two books.",
          blank: 1,
          options: ["trzydzieści dwa", "dwadzieścia trzy", "trzynaście", "czterdzieści dwa"],
          correct: 0,
          explanation: "'Trzydzieści dwa' = thirty (30) + two (2) = 32."
        },
        {
          polish: "Ona ma ___ lat.",
          english: "She is eighteen years old.",
          blank: 2,
          options: ["osiem", "osiemdziesiąt", "osiemnaście", "ósmy"],
          correct: 2,
          explanation: "'Osiemnaście' means 'eighteen'."
        },
        {
          polish: "Kupuję ___ jajek.",
          english: "I'm buying forty eggs.",
          blank: 1,
          options: ["czterdzieści", "czternaście", "cztery", "czterdziesty"],
          correct: 0,
          explanation: "'Czterdzieści' means 'forty'."
        },
        {
          polish: "W klasie jest ___ uczniów.",
          english: "There are twenty-five students in the class.",
          blank: 3,
          options: ["dwadzieścia pięć", "pięć dwadzieścia", "piętnaście", "pięćdziesiąt"],
          correct: 0,
          explanation: "'Dwadzieścia pięć' = twenty (20) + five (5) = 25."
        },
        {
          polish: "Mój dziadek ma ___ lat.",
          english: "My grandfather is sixty years old.",
          blank: 3,
          options: ["sześćdziesiąt", "szesnaście", "sześć", "szóstych"],
          correct: 0,
          explanation: "'Sześćdziesiąt' means 'sixty'."
        }
      ],

      advanced: [
        {
          polish: "Moja mama ma ___ lat.",
          english: "My mom is forty-seven years old.",
          blank: 3,
          options: ["czterdzieści siedem", "siedemdziesiąt cztery", "czternaście siedem", "siedemnaście"],
          correct: 0,
          explanation: "'Czterdzieści siedem' = forty (40) + seven (7) = 47."
        },
        {
          polish: "W tym budynku jest ___ mieszkań.",
          english: "There are eighty-nine apartments in this building.",
          blank: 4,
          options: ["osiemdziesiąt dziewięć", "dziewięćdziesiąt osiem", "osiemnaście dziewięć", "dziewiętnaście osiem"],
          correct: 0,
          explanation: "'Osiemdziesiąt dziewięć' = eighty (80) + nine (9) = 89."
        },
        {
          polish: "Szkoła ma ___ uczniów.",
          english: "The school has ninety-three students.",
          blank: 2,
          options: ["dziewięćdziesiąt trzy", "trzydzieści dziewięć", "dziewiętnaście trzy", "dziewięć trzydzieści"],
          correct: 0,
          explanation: "'Dziewięćdziesiąt trzy' = ninety (90) + three (3) = 93."
        },
        {
          polish: "Bilet kosztuje ___ złotych.",
          english: "The ticket costs seventy-five zloty.",
          blank: 2,
          options: ["siedemdziesiąt pięć", "pięćdziesiąt siedem", "siedemnaście pięć", "pięć siedemdziesiąt"],
          correct: 0,
          explanation: "'Siedemdziesiąt pięć' = seventy (70) + five (5) = 75."
        },
        {
          polish: "Przeczytałem ___ stron.",
          english: "I read one hundred pages.",
          blank: 1,
          options: ["sto", "dziesięć dziesięć", "setka", "stówka"],
          correct: 0,
          explanation: "'Sto' is the simple word for 'one hundred'."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the Polish number with its English equivalent",
          pairs: [
            { polish: "jeden", english: "one" },
            { polish: "dwa", english: "two" },
            { polish: "trzy", english: "three" },
            { polish: "cztery", english: "four" },
            { polish: "pięć", english: "five" },
            { polish: "sześć", english: "six" },
            { polish: "siedem", english: "seven" },
            { polish: "osiem", english: "eight" }
          ]
        },
        {
          instruction: "Match the Polish teen number with its value",
          pairs: [
            { polish: "jedenaście", english: "11" },
            { polish: "dwanaście", english: "12" },
            { polish: "trzynaście", english: "13" },
            { polish: "czternaście", english: "14" },
            { polish: "piętnaście", english: "15" },
            { polish: "szesnaście", english: "16" },
            { polish: "siedemnaście", english: "17" },
            { polish: "osiemnaście", english: "18" }
          ]
        }
      ]
    },

    countingPractice: {
      beginner: [
        {
          instruction: "Count from 1 to 10 in Polish",
          numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          polish: ["jeden", "dwa", "trzy", "cztery", "pięć", "sześć", "siedem", "osiem", "dziewięć", "dziesięć"]
        },
        {
          instruction: "Count the tens: 10, 20, 30... to 100",
          numbers: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          polish: ["dziesięć", "dwadzieścia", "trzydzieści", "czterdzieści", "pięćdziesiąt", "sześćdziesiąt", "siedemdziesiąt", "osiemdziesiąt", "dziewięćdziesiąt", "sto"]
        },
        {
          instruction: "Count from 11 to 20 in Polish",
          numbers: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
          polish: ["jedenaście", "dwanaście", "trzynaście", "czternaście", "piętnaście", "szesnaście", "siedemnaście", "osiemnaście", "dziewiętnaście", "dwadzieścia"]
        }
      ],
      intermediate: [
        {
          instruction: "Count by fives from 5 to 50",
          numbers: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          polish: ["pięć", "dziesięć", "piętnaście", "dwadzieścia", "dwadzieścia pięć", "trzydzieści", "trzydzieści pięć", "czterdzieści", "czterdzieści pięć", "pięćdziesiąt"]
        },
        {
          instruction: "Count by tens from 10 to 100",
          numbers: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          polish: ["dziesięć", "dwadzieścia", "trzydzieści", "czterdzieści", "pięćdziesiąt", "sześćdziesiąt", "siedemdziesiąt", "osiemdziesiąt", "dziewięćdziesiąt", "sto"]
        }
      ]
    }
  }
];
