export const a1Vocabulary = [
  {
    name: "Greetings & Introductions",
    polish: "Powitania i przedstawianie się",
    difficulty: "beginner",
    level: "A1",
    icon: "👋",
    category: "social",

    explanation: "These are the essential phrases you need to greet people, introduce yourself, and have basic polite conversations. Polish has formal (pan/pani) and informal (ty) forms - choose based on who you're talking to.",

    vocabulary: [
      { polish: "Dzień dobry", english: "Good morning/Good day", category: "greeting", note: "Formal, used until evening" },
      { polish: "Dobry wieczór", english: "Good evening", category: "greeting", note: "After ~6 PM" },
      { polish: "Cześć", english: "Hi/Bye", category: "greeting", note: "Informal, casual" },
      { polish: "Hej", english: "Hey", category: "greeting", note: "Very informal" },
      { polish: "Do widzenia", english: "Goodbye", category: "farewell", note: "Formal" },
      { polish: "Do zobaczenia", english: "See you", category: "farewell", note: "Casual" },
      { polish: "Dobranoc", english: "Good night", category: "farewell", note: "Before bed" },
      { polish: "Jak się masz?", english: "How are you? (informal)", category: "question", note: "To friends" },
      { polish: "Jak się pan/pani ma?", english: "How are you? (formal)", category: "question", note: "Polite form" },
      { polish: "Dobrze, dziękuję", english: "Fine, thank you", category: "response", note: "Standard response" },
      { polish: "Nazywam się...", english: "My name is...", category: "introduction", note: "Reflexive verb" },
      { polish: "Miło mi", english: "Nice to meet you", category: "introduction", note: "Literally 'pleasant to me'" },
      { polish: "Przepraszam", english: "Excuse me/Sorry", category: "polite", note: "Very important word!" },
      { polish: "Proszę", english: "Please/You're welcome", category: "polite", note: "Multiple meanings" },
      { polish: "Dziękuję", english: "Thank you", category: "polite", note: "Can shorten to 'dzięki' (informal)" },
      { polish: "Tak", english: "Yes", category: "basic", note: "Affirmative" },
      { polish: "Nie", english: "No", category: "basic", note: "Negative" }
    ],

    commonPhrases: [
      { polish: "Jak masz na imię?", english: "What's your name? (informal)", usage: "asking name" },
      { polish: "Jak ma pan/pani na imię?", english: "What's your name? (formal)", usage: "asking name politely" },
      { polish: "Skąd jesteś?", english: "Where are you from? (informal)", usage: "asking origin" },
      { polish: "Ile masz lat?", english: "How old are you?", usage: "asking age" },
      { polish: "Mam ... lat.", english: "I am ... years old.", usage: "stating age" },
      { polish: "Jestem z...", english: "I'm from...", usage: "stating origin" },
      { polish: "Nie rozumiem", english: "I don't understand", usage: "when confused" },
      { polish: "Czy mówisz po angielsku?", english: "Do you speak English?", usage: "language help" },
      { polish: "Powtórz, proszę", english: "Repeat, please", usage: "didn't hear" }
    ],

    quiz: {
      beginner: [
        {
          question: "How do you say 'Good morning' in Polish?",
          options: ["Dobry wieczór", "Dzień dobry", "Dobranoc", "Cześć"],
          correct: 1,
          explanation: "'Dzień dobry' is used for 'good morning' and 'good day' (formal)."
        },
        {
          question: "What does 'Przepraszam' mean?",
          options: ["Thank you", "Goodbye", "Excuse me/Sorry", "Please"],
          correct: 2,
          explanation: "'Przepraszam' means 'excuse me' or 'I'm sorry' - a very important polite word!"
        },
        {
          question: "How do you introduce yourself? 'My name is Maria'",
          options: ["Jestem Maria", "Mam Maria", "Nazywam się Maria", "Ja Maria"],
          correct: 2,
          explanation: "'Nazywam się Maria' - using the reflexive verb 'nazywać się'."
        },
        {
          question: "What does 'Tak' mean?",
          options: ["No", "Yes", "Maybe", "Please"],
          correct: 1,
          explanation: "'Tak' is the Polish word for 'yes'."
        },
        {
          question: "How do you say 'Thank you'?",
          options: ["Proszę", "Dziękuję", "Przepraszam", "Miło mi"],
          correct: 1,
          explanation: "'Dziękuję' means 'thank you'. Informal version is 'dzięki'."
        }
      ],
      intermediate: [
        {
          question: "Which greeting is informal?",
          options: ["Dzień dobry", "Dobry wieczór", "Cześć", "Do widzenia"],
          correct: 2,
          explanation: "'Cześć' is informal (like 'hi'). 'Dzień dobry' and 'Dobry wieczór' are formal."
        },
        {
          question: "How do you ask 'How are you?' formally?",
          options: ["Jak się masz?", "Jak się pan/pani ma?", "Co słychać?", "Jak leci?"],
          correct: 1,
          explanation: "'Jak się pan/pani ma?' is the formal way. 'Jak się masz?' is informal."
        },
        {
          question: "What's the appropriate response to 'Dziękuję'?",
          options: ["Tak", "Nie ma za co", "Proszę", "Miło mi"],
          correct: 2,
          explanation: "'Proszę' means both 'please' and 'you're welcome' in Polish."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match Polish greetings with English",
          pairs: [
            { polish: "Dzień dobry", english: "Good morning" },
            { polish: "Cześć", english: "Hi" },
            { polish: "Do widzenia", english: "Goodbye" },
            { polish: "Dziękuję", english: "Thank you" },
            { polish: "Przepraszam", english: "Excuse me" },
            { polish: "Proszę", english: "Please" }
          ]
        }
      ]
    }
  },

  {
    name: "Family & People",
    polish: "Rodzina i ludzie",
    difficulty: "beginner",
    level: "A1",
    icon: "👨‍👩‍👧‍👦",
    category: "people",

    explanation: "Learn the words for family members and how to talk about people. Polish has specific words for different family relationships.",

    vocabulary: [
      { polish: "rodzina", english: "family", gender: "feminine", category: "general" },
      { polish: "mama", english: "mom", gender: "feminine", category: "parents" },
      { polish: "tata", english: "dad", gender: "masculine", category: "parents" },
      { polish: "rodzice", english: "parents", gender: "plural", category: "parents" },
      { polish: "syn", english: "son", gender: "masculine", category: "children" },
      { polish: "córka", english: "daughter", gender: "feminine", category: "children" },
      { polish: "dzieci", english: "children", gender: "plural neuter", category: "children" },
      { polish: "brat", english: "brother", gender: "masculine", category: "siblings" },
      { polish: "siostra", english: "sister", gender: "feminine", category: "siblings" },
      { polish: "dziadek", english: "grandfather", gender: "masculine", category: "grandparents" },
      { polish: "babcia", english: "grandmother", gender: "feminine", category: "grandparents" },
      { polish: "mąż", english: "husband", gender: "masculine", category: "spouse" },
      { polish: "żona", english: "wife", gender: "feminine", category: "spouse" },
      { polish: "przyjaciel", english: "friend (male)", gender: "masculine", category: "friends" },
      { polish: "przyjaciółka", english: "friend (female)", gender: "feminine", category: "friends" },
      { polish: "kolega", english: "colleague (male)", gender: "masculine", category: "friends" },
      { polish: "koleżanka", english: "colleague (female)", gender: "feminine", category: "friends" },
      { polish: "chłopiec", english: "boy", gender: "masculine", category: "age" },
      { polish: "dziewczyna", english: "girl", gender: "feminine", category: "age" },
      { polish: "mężczyzna", english: "man", gender: "masculine", category: "age" },
      { polish: "kobieta", english: "woman", gender: "feminine", category: "age" },
      { polish: "dziecko", english: "child", gender: "neuter", category: "age" }
    ],

    quiz: {
      beginner: [
        {
          question: "How do you say 'mother' in Polish?",
          options: ["tata", "mama", "siostra", "babcia"],
          correct: 1,
          explanation: "'Mama' means 'mom/mother' in Polish."
        },
        {
          question: "What is 'brat'?",
          options: ["brother", "sister", "son", "friend"],
          correct: 0,
          explanation: "'Brat' means 'brother'. 'Siostra' means 'sister'."
        },
        {
          question: "How do you say 'grandparents'?",
          options: ["rodzice", "dzieci", "dziadkowie", "rodzina"],
          correct: 2,
          explanation: "'Dziadkowie' means 'grandparents' (grandfather=dziadek, grandmother=babcia)."
        },
        {
          question: "What does 'żona' mean?",
          options: ["sister", "daughter", "wife", "mother"],
          correct: 2,
          explanation: "'Żona' means 'wife'. 'Mąż' means 'husband'."
        },
        {
          question: "'Dzieci' means:",
          options: ["parents", "children", "grandparents", "siblings"],
          correct: 1,
          explanation: "'Dzieci' is the plural of 'dziecko' (child) - means 'children'."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match Polish family words with English",
          pairs: [
            { polish: "mama", english: "mom" },
            { polish: "tata", english: "dad" },
            { polish: "brat", english: "brother" },
            { polish: "siostra", english: "sister" },
            { polish: "dziadek", english: "grandfather" },
            { polish: "babcia", english: "grandmother" },
            { polish: "syn", english: "son" },
            { polish: "córka", english: "daughter" }
          ]
        }
      ]
    }
  },

  {
    name: "Colors",
    polish: "Kolory",
    difficulty: "beginner",
    level: "A1",
    icon: "🎨",
    category: "descriptive",

    explanation: "Colors in Polish are adjectives, so they change endings to match the gender of the noun they describe. Here are the basic masculine forms.",

    vocabulary: [
      { polish: "czerwony", english: "red", gender: "masculine", note: "czerwona (f), czerwone (n)" },
      { polish: "niebieski", english: "blue", gender: "masculine", note: "niebieska (f), niebieskie (n)" },
      { polish: "zielony", english: "green", gender: "masculine", note: "zielona (f), zielone (n)" },
      { polish: "żółty", english: "yellow", gender: "masculine", note: "żółta (f), żółte (n)" },
      { polish: "czarny", english: "black", gender: "masculine", note: "czarna (f), czarne (n)" },
      { polish: "biały", english: "white", gender: "masculine", note: "biała (f), białe (n)" },
      { polish: "szary", english: "gray", gender: "masculine", note: "szara (f), szare (n)" },
      { polish: "brązowy", english: "brown", gender: "masculine", note: "brązowa (f), brązowe (n)" },
      { polish: "różowy", english: "pink", gender: "masculine", note: "różowa (f), różowe (n)" },
      { polish: "pomarańczowy", english: "orange", gender: "masculine", note: "pomarańczowa (f), pomarańczowe (n)" },
      { polish: "fioletowy", english: "purple", gender: "masculine", note: "fioletowa (f), fioletowe (n)" },
      { polish: "złoty", english: "golden", gender: "masculine", note: "złota (f), złote (n)" },
      { polish: "srebrny", english: "silver", gender: "masculine", note: "srebrna (f), srebrne (n)" }
    ],

    quiz: {
      beginner: [
        {
          question: "How do you say 'red' in Polish?",
          options: ["niebieski", "czerwony", "zielony", "żółty"],
          correct: 1,
          explanation: "'Czerwony' means 'red' (masculine form)."
        },
        {
          question: "What color is 'niebieski'?",
          options: ["blue", "green", "black", "white"],
          correct: 0,
          explanation: "'Niebieski' means 'blue'."
        },
        {
          question: "'Czarny' means:",
          options: ["white", "gray", "black", "brown"],
          correct: 2,
          explanation: "'Czarny' means 'black'. 'Biały' means 'white'."
        },
        {
          question: "What is the Polish word for 'yellow'?",
          options: ["zielony", "żółty", "różowy", "szary"],
          correct: 1,
          explanation: "'Żółty' means 'yellow'."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match Polish colors with English",
          pairs: [
            { polish: "czerwony", english: "red" },
            { polish: "niebieski", english: "blue" },
            { polish: "zielony", english: "green" },
            { polish: "żółty", english: "yellow" },
            { polish: "czarny", english: "black" },
            { polish: "biały", english: "white" },
            { polish: "brązowy", english: "brown" },
            { polish: "różowy", english: "pink" }
          ]
        }
      ]
    }
  },

  {
    name: "Days & Months",
    polish: "Dni tygodnia i miesiące",
    difficulty: "beginner",
    level: "A1",
    icon: "📅",
    category: "time",

    explanation: "Days of the week and months in Polish. Note that in Polish, these are NOT capitalized (unlike English).",

    vocabulary: [
      { polish: "poniedziałek", english: "Monday", category: "days", note: "Not capitalized!" },
      { polish: "wtorek", english: "Tuesday", category: "days" },
      { polish: "środa", english: "Wednesday", category: "days" },
      { polish: "czwartek", english: "Thursday", category: "days" },
      { polish: "piątek", english: "Friday", category: "days" },
      { polish: "sobota", english: "Saturday", category: "days" },
      { polish: "niedziela", english: "Sunday", category: "days" },
      { polish: "styczeń", english: "January", category: "months" },
      { polish: "luty", english: "February", category: "months" },
      { polish: "marzec", english: "March", category: "months" },
      { polish: "kwiecień", english: "April", category: "months" },
      { polish: "maj", english: "May", category: "months" },
      { polish: "czerwiec", english: "June", category: "months" },
      { polish: "lipiec", english: "July", category: "months" },
      { polish: "sierpień", english: "August", category: "months" },
      { polish: "wrzesień", english: "September", category: "months" },
      { polish: "październik", english: "October", category: "months" },
      { polish: "listopad", english: "November", category: "months" },
      { polish: "grudzień", english: "December", category: "months" },
      { polish: "dziś", english: "today", category: "time words" },
      { polish: "jutro", english: "tomorrow", category: "time words" },
      { polish: "wczoraj", english: "yesterday", category: "time words" },
      { polish: "teraz", english: "now", category: "time words" },
      { polish: "dzień", english: "day", category: "time words" },
      { polish: "tydzień", english: "week", category: "time words" },
      { polish: "miesiąc", english: "month", category: "time words" },
      { polish: "rok", english: "year", category: "time words" }
    ],

    quiz: {
      beginner: [
        {
          question: "What day is 'poniedziałek'?",
          options: ["Monday", "Tuesday", "Friday", "Sunday"],
          correct: 0,
          explanation: "'Poniedziałek' is Monday in Polish."
        },
        {
          question: "How do you say 'Friday'?",
          options: ["czwartek", "piątek", "sobota", "niedziela"],
          correct: 1,
          explanation: "'Piątek' means Friday."
        },
        {
          question: "'Środa' means:",
          options: ["Monday", "Wednesday", "Saturday", "Sunday"],
          correct: 1,
          explanation: "'Środa' is Wednesday (literally 'middle' of the week)."
        },
        {
          question: "What does 'dziś' mean?",
          options: ["yesterday", "today", "tomorrow", "now"],
          correct: 1,
          explanation: "'Dziś' means 'today'. 'Jutro' = tomorrow, 'wczoraj' = yesterday."
        },
        {
          question: "Which month is 'styczeń'?",
          options: ["January", "July", "September", "December"],
          correct: 0,
          explanation: "'Styczeń' is January."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match Polish days with English",
          pairs: [
            { polish: "poniedziałek", english: "Monday" },
            { polish: "wtorek", english: "Tuesday" },
            { polish: "środa", english: "Wednesday" },
            { polish: "czwartek", english: "Thursday" },
            { polish: "piątek", english: "Friday" },
            { polish: "sobota", english: "Saturday" },
            { polish: "niedziela", english: "Sunday" }
          ]
        }
      ]
    }
  },

  {
    name: "Common Objects",
    polish: "Podstawowe przedmioty",
    difficulty: "beginner",
    level: "A1",
    icon: "📦",
    category: "objects",

    explanation: "Essential everyday objects you'll encounter. Remember to note the gender of each noun!",

    vocabulary: [
      { polish: "dom", english: "house", gender: "masculine" },
      { polish: "mieszkanie", english: "apartment", gender: "neuter" },
      { polish: "pokój", english: "room", gender: "masculine" },
      { polish: "stół", english: "table", gender: "masculine" },
      { polish: "krzesło", english: "chair", gender: "neuter" },
      { polish: "łóżko", english: "bed", gender: "neuter" },
      { polish: "okno", english: "window", gender: "neuter" },
      { polish: "drzwi", english: "door", gender: "plural" },
      { polish: "książka", english: "book", gender: "feminine" },
      { polish: "telefon", english: "phone", gender: "masculine" },
      { polish: "komputer", english: "computer", gender: "masculine" },
      { polish: "telewizor", english: "television", gender: "masculine" },
      { polish: "samochód", english: "car", gender: "masculine" },
      { polish: "rower", english: "bicycle", gender: "masculine" },
      { polish: "autobus", english: "bus", gender: "masculine" },
      { polish: "pociąg", english: "train", gender: "masculine" },
      { polish: "szkoła", english: "school", gender: "feminine" },
      { polish: "praca", english: "work/job", gender: "feminine" },
      { polish: "sklep", english: "store/shop", gender: "masculine" },
      { polish: "restauracja", english: "restaurant", gender: "feminine" },
      { polish: "kawa", english: "coffee", gender: "feminine" },
      { polish: "herbata", english: "tea", gender: "feminine" },
      { polish: "woda", english: "water", gender: "feminine" },
      { polish: "chleb", english: "bread", gender: "masculine" },
      { polish: "mleko", english: "milk", gender: "neuter" }
    ],

    quiz: {
      beginner: [
        {
          question: "What is 'książka'?",
          options: ["book", "table", "chair", "window"],
          correct: 0,
          explanation: "'Książka' means 'book' (feminine)."
        },
        {
          question: "'Dom' means:",
          options: ["apartment", "room", "house", "door"],
          correct: 2,
          explanation: "'Dom' means 'house' (masculine)."
        },
        {
          question: "How do you say 'car'?",
          options: ["rower", "autobus", "pociąg", "samochód"],
          correct: 3,
          explanation: "'Samochód' means 'car'."
        },
        {
          question: "What does 'kawa' mean?",
          options: ["tea", "coffee", "water", "milk"],
          correct: 1,
          explanation: "'Kawa' means 'coffee'. 'Herbata' = tea."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match Polish objects with English",
          pairs: [
            { polish: "dom", english: "house" },
            { polish: "książka", english: "book" },
            { polish: "telefon", english: "phone" },
            { polish: "samochód", english: "car" },
            { polish: "szkoła", english: "school" },
            { polish: "kawa", english: "coffee" },
            { polish: "woda", english: "water" },
            { polish: "chleb", english: "bread" }
          ]
        }
      ]
    }
  }
];
