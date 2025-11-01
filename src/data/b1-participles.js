export const b1Participles = [
  {
    name: "Participles - Verbal Adjectives",
    polish: "Imiesłowy - przymiotniki odczasownikowe",
    difficulty: "advanced",
    level: "B1",
    icon: "📝",

    explanation: "Master the sophisticated world of Polish participles! Participles are verb forms that function as adjectives, allowing you to create complex, elegant descriptions and avoid repetitive sentences. Polish has several types of participles: active present (reading), active past (having read), passive present (being read), and passive past (read/having been read). Understanding participles is essential for academic and literary Polish, formal writing, and sophisticated conversation. They appear frequently in newspapers, legal documents, and educated speech.",

    analogy: "Think of participles as linguistic transformers - they're verbs that have 'transformed' into adjectives while keeping their verbal power. Just like how Superman can fly AND be a reporter, participles can describe things (like adjectives) AND show action (like verbs). Instead of saying 'The man who is reading a book is smart,' you can say 'The reading man is smart.' Participles help you pack more information into fewer words, making your Polish sound more sophisticated and natural - like upgrading from basic sentences to premium, high-efficiency language!",

    participleTypes: {
      title: "Types of Participles in Polish",
      types: [
        {
          type: "Active Present Participle",
          polish: "Imiesłów przymiotnikowy czynny",
          formation: "Verb stem + -ący/-ąca/-ące",
          meaning: "Currently doing the action",
          examples: [
            { verb: "czytać", participle: "czytający", english: "reading", sentence: "Człowiek czytający książkę.", sentenceEng: "The man reading a book." },
            { verb: "pracować", participle: "pracujący", english: "working", sentence: "Kobieta pracująca w biurze.", sentenceEng: "The woman working in the office." },
            { verb: "śpiewać", participle: "śpiewający", english: "singing", sentence: "Dzieci śpiewające piosenkę.", sentenceEng: "Children singing a song." }
          ]
        },
        {
          type: "Active Past Participle",
          polish: "Imiesłów przymiotnikowy czynny przeszły",
          formation: "Past tense stem + -szy/-wszy",
          meaning: "Having done the action",
          examples: [
            { verb: "przeczytać", participle: "przeczytawszy", english: "having read", sentence: "Przeczytawszy książkę, poszedł spać.", sentenceEng: "Having read the book, he went to sleep." },
            { verb: "zjeść", participle: "zjadłszy", english: "having eaten", sentence: "Zjadłszy obiad, wyszła.", sentenceEng: "Having eaten lunch, she left." },
            { verb: "napisać", participle: "napisawszy", english: "having written", sentence: "Napisawszy list, wysłał go.", sentenceEng: "Having written the letter, he sent it." }
          ]
        },
        {
          type: "Passive Present Participle",
          polish: "Imiesłów przymiotnikowy bierny",
          formation: "Verb stem + -ny/-na/-ne OR -ty/-ta/-te",
          meaning: "Being done to / can be done",
          examples: [
            { verb: "czytać", participle: "czytany", english: "being read/readable", sentence: "Książka czytana przez uczniów.", sentenceEng: "A book being read by students." },
            { verb: "robić", participle: "robiony", english: "being made", sentence: "Praca robiona z pasją.", sentenceEng: "Work being done with passion." },
            { verb: "pisać", participle: "pisany", english: "being written", sentence: "List pisany ręcznie.", sentenceEng: "A letter being written by hand." }
          ]
        },
        {
          type: "Passive Past Participle",
          polish: "Imiesłów przymiotnikowy bierny przeszły",
          formation: "Past stem + -ny/-na/-ne OR -ty/-ta/-te",
          meaning: "Having been done / completed action",
          examples: [
            { verb: "przeczytać", participle: "przeczytany", english: "read/having been read", sentence: "Książka przeczytana wczoraj.", sentenceEng: "The book read yesterday." },
            { verb: "napisać", participle: "napisany", english: "written", sentence: "List napisany piórem.", sentenceEng: "A letter written with a pen." },
            { verb: "zrobić", participle: "zrobiony", english: "done/made", sentence: "Praca zrobiona starannie.", sentenceEng: "Work done carefully." }
          ]
        }
      ]
    },

    participleFormation: {
      title: "How to Form Participles",
      activePresent: {
        rule: "3rd person plural present + -ący/-ąca/-ące",
        steps: [
          "Take 3rd person plural present tense (oni/one form)",
          "Remove the final -ą",
          "Add -ący (masculine), -ąca (feminine), -ące (neuter/plural)"
        ],
        examples: [
          { verb: "czytać", present3pl: "czytają", participle: "czytający/czytająca/czytające" },
          { verb: "pisać", present3pl: "piszą", participle: "piszący/pisząca/piszące" },
          { verb: "pracować", present3pl: "pracują", participle: "pracujący/pracująca/pracujące" },
          { verb: "śpiewać", present3pl: "śpiewają", participle: "śpiewający/śpiewająca/śpiewające" }
        ]
      },
      activePast: {
        rule: "Past tense stem + -szy/-wszy",
        formation: "Usually -wszy for perfective verbs, -szy for others",
        examples: [
          { verb: "przeczytać", past: "przeczytał", participle: "przeczytawszy" },
          { verb: "napisać", past: "napisał", participle: "napisawszy" },
          { verb: "zjeść", past: "zjadł", participle: "zjadłszy" },
          { verb: "przyjść", past: "przyszedł", participle: "przyszedłszy" }
        ],
        note: "Active past participles are quite formal and mostly used in literary/academic language"
      },
      passive: {
        rule: "Various endings: -ny/-na/-ne, -ty/-ta/-te, -ony/-ona/-one",
        patterns: [
          {
            pattern: "-ny/-na/-ne",
            verbs: "Most -ać, -eć, -ować verbs",
            examples: [
              { verb: "czytać", participle: "czytany" },
              { verb: "pisać", participle: "pisany" },
              { verb: "robić", participle: "robiony" }
            ]
          },
          {
            pattern: "-ty/-ta/-te",
            verbs: "Many -ąć, -nąć verbs and others",
            examples: [
              { verb: "zamknąć", participle: "zamknięty" },
              { verb: "otworzyć", participle: "otwarty" },
              { verb: "umyć", participle: "umyty" }
            ]
          },
          {
            pattern: "-ony/-ona/-one",
            verbs: "Some irregular formations",
            examples: [
              { verb: "złamać", participle: "złamany" },
              { verb: "zgubić", participle: "zgubiony" }
            ]
          }
        ]
      }
    },

    participleUsage: {
      title: "How to Use Participles",
      uses: [
        {
          use: "Attributive (like adjectives)",
          description: "Directly modifying nouns",
          examples: [
            { polish: "Czytający człowiek", english: "A reading man" },
            { polish: "Pracująca kobieta", english: "A working woman" },
            { polish: "Napisany list", english: "A written letter" },
            { polish: "Otwarte okno", english: "An open window" }
          ]
        },
        {
          use: "Predicative (with 'być')",
          description: "After the verb 'to be'",
          examples: [
            { polish: "Książka jest czytana.", english: "The book is being read." },
            { polish: "Okno jest otwarte.", english: "The window is open." },
            { polish: "Praca jest skończona.", english: "The work is finished." },
            { polish: "List jest napisany.", english: "The letter is written." }
          ]
        },
        {
          use: "Temporal clauses (past participles)",
          description: "Showing sequence of actions",
          examples: [
            { polish: "Przeczytawszy książkę, poszedł spać.", english: "Having read the book, he went to sleep." },
            { polish: "Zjadłszy obiad, wyszła.", english: "Having eaten lunch, she left." },
            { polish: "Skończywszy pracę, poszli do domu.", english: "Having finished work, they went home." }
          ]
        },
        {
          use: "Avoiding relative clauses",
          description: "More elegant than 'który/która/które'",
          examples: [
            { polish: "Człowiek czytający → Człowiek, który czyta", english: "The reading man → The man who is reading" },
            { polish: "Kobieta pracująca → Kobieta, która pracuje", english: "The working woman → The woman who is working" },
            { polish: "Książka napisana → Książka, która została napisana", english: "The written book → The book that was written" }
          ]
        }
      ]
    },

    commonParticiples: {
      title: "Common Participles in Everyday Polish",
      everyday: [
        {
          category: "States and Conditions",
          participles: [
            { polish: "zmęczony", english: "tired", example: "Jestem zmęczony.", exampleEng: "I'm tired." },
            { polish: "zajęty", english: "busy", example: "Ona jest zajęta.", exampleEng: "She's busy." },
            { polish: "zdenerwowany", english: "nervous", example: "Wydaje się zdenerwowany.", exampleEng: "He seems nervous." },
            { polish: "zainteresowany", english: "interested", example: "Jest zainteresowana tym tematem.", exampleEng: "She's interested in this topic." },
            { polish: "przygotowany", english: "prepared", example: "Jestem przygotowany na egzamin.", exampleEng: "I'm prepared for the exam." }
          ]
        },
        {
          category: "Physical States",
          participles: [
            { polish: "zamknięty", english: "closed", example: "Sklep jest zamknięty.", exampleEng: "The store is closed." },
            { polish: "otwarty", english: "open", example: "Okno jest otwarte.", exampleEng: "The window is open." },
            { polish: "złamany", english: "broken", example: "Mam złamaną rękę.", exampleEng: "I have a broken arm." },
            { polish: "ukryty", english: "hidden", example: "Skarb jest ukryty.", exampleEng: "The treasure is hidden." },
            { polish: "umyty", english: "washed", example: "Samochód jest umyty.", exampleEng: "The car is washed." }
          ]
        },
        {
          category: "Mental/Emotional States",
          participles: [
            { polish: "zaskoczony", english: "surprised", example: "Jestem zaskoczony.", exampleEng: "I'm surprised." },
            { polish: "zadowolony", english: "satisfied", example: "Jest zadowolona z pracy.", exampleEng: "She's satisfied with the work." },
            { polish: "wzruszony", english: "moved/touched", example: "Był wzruszony filmem.", exampleEng: "He was moved by the film." },
            { polish: "zmartwiony", english: "worried", example: "Rodzice są zmartwieni.", exampleEng: "The parents are worried." },
            { polish: "zakochany", english: "in love", example: "Jest zakochany w niej.", exampleEng: "He's in love with her." }
          ]
        }
      ]
    },

    quiz: {
      beginner: [
        {
          question: "How do you form the active present participle?",
          options: ["Past stem + -szy", "3rd person plural present - ą + -ący", "Infinitive + -ny", "Present stem + -ty"],
          correct: 1,
          explanation: "Active present participle: take 3rd person plural present, remove -ą, add -ący/-ąca/-ące."
        },
        {
          question: "What does 'czytający' mean?",
          options: ["having read", "being read", "reading (person who reads)", "readable"],
          correct: 2,
          explanation: "'Czytający' is active present participle meaning 'reading' or 'one who reads'."
        },
        {
          question: "Complete: 'Okno jest ___.' (The window is open)",
          options: ["otwierać", "otwarte", "otwierający", "otwarzy"],
          correct: 1,
          explanation: "'Otwarte' is the passive participle meaning 'open'."
        },
        {
          question: "What type of participle is 'napisany'?",
          options: ["Active present", "Active past", "Passive present", "Passive past"],
          correct: 3,
          explanation: "'Napisany' is a passive past participle meaning 'written'."
        },
        {
          question: "How do you say 'I'm tired'?",
          options: ["Jestem męczyć", "Jestem zmęczony", "Jestem męczący", "Męczę się"],
          correct: 1,
          explanation: "'Jestem zmęczony' uses the passive participle 'zmęczony' (tired)."
        },
        {
          question: "What does 'pracująca kobieta' mean?",
          options: ["woman who worked", "working woman", "woman to work", "woman being worked"],
          correct: 1,
          explanation: "'Pracująca kobieta' = 'working woman' (active present participle)."
        },
        {
          question: "Complete: 'Sklep jest ___.' (The store is closed)",
          options: ["zamknąć", "zamknięty", "zamykający", "zamykany"],
          correct: 1,
          explanation: "'Zamknięty' is the passive participle meaning 'closed'."
        },
        {
          question: "What does 'przeczytawszy' express?",
          options: ["currently reading", "being read", "having read", "will read"],
          correct: 2,
          explanation: "'Przeczytawszy' is active past participle meaning 'having read'."
        }
      ],

      intermediate: [
        {
          question: "Transform: 'Człowiek, który czyta książkę' → using participle",
          options: ["Człowiek czytany książkę", "Człowiek czytający książkę", "Człowiek przeczytawszy książkę", "Człowiek do czytania książkę"],
          correct: 1,
          explanation: "'Człowiek czytający książkę' replaces the relative clause with active present participle."
        },
        {
          question: "Complete: '___ obiad, wyszła.' (Having eaten lunch, she left)",
          options: ["Jedząc", "Zjadłszy", "Jadła", "Zjedzona"],
          correct: 1,
          explanation: "'Zjadłszy' is active past participle showing completed action before main action."
        },
        {
          question: "What's the difference between 'pisany' and 'napisany'?",
          options: ["No difference", "'pisany' = being written, 'napisany' = written (completed)", "'napisany' = being written", "'pisany' = will be written"],
          correct: 1,
          explanation: "'Pisany' = ongoing (being written), 'napisany' = completed (written)."
        },
        {
          question: "How do you say 'The book being read by students'?",
          options: ["Książka czytana przez uczniów", "Książka czytająca przez uczniów", "Książka przeczytana przez uczniów", "Książka do czytania przez uczniów"],
          correct: 0,
          explanation: "'Książka czytana przez uczniów' uses passive present participle for ongoing action."
        },
        {
          question: "Complete: 'Jest ___ tym filmem.' (He's moved by this film)",
          options: ["wzruszać", "wzruszony", "wzruszający", "wzruszy"],
          correct: 1,
          explanation: "'Wzruszony' is passive participle expressing emotional state."
        },
        {
          question: "What does 'śpiewające dzieci' mean?",
          options: ["children who will sing", "children being sung to", "singing children", "children who sang"],
          correct: 2,
          explanation: "'Śpiewające dzieci' = 'singing children' (active present participle, plural)."
        },
        {
          question: "Transform: 'Po tym, jak przeczytał książkę' → using participle",
          options: ["Czytając książkę", "Przeczytawszy książkę", "Przeczytana książka", "Książka do przeczytania"],
          correct: 1,
          explanation: "'Przeczytawszy książkę' (having read the book) replaces temporal clause."
        },
        {
          question: "Complete: 'Praca ___ starannie.' (Work done carefully)",
          options: ["robić", "zrobiona", "robiąca", "robi"],
          correct: 1,
          explanation: "'Zrobiona' is passive past participle meaning 'done'."
        }
      ],

      advanced: [
        {
          question: "What's the correct participle form of 'interesować się' for 'interested woman'?",
          options: ["interesująca się kobieta", "zainteresowana kobieta", "interesowana kobieta", "interesująca kobieta"],
          correct: 1,
          explanation: "'Zainteresowana kobieta' - use perfective passive participle for state."
        },
        {
          question: "Complete: 'Nie widząc jej wczoraj, ___ się o nią.' (Not having seen her yesterday, I worried about her)",
          options: ["martwiłem", "martwię", "zmartwiony", "martwi"],
          correct: 0,
          explanation: "'Martwiłem się' - past tense in main clause after negative participle."
        },
        {
          question: "How do you express 'The letter written with a pen'?",
          options: ["List pisany piórem", "List napisany piórem", "List piszący piórem", "List do napisania piórem"],
          correct: 1,
          explanation: "'List napisany piórem' - passive past participle for completed action."
        },
        {
          question: "What's the difference between 'zajęty' and 'zajmujący'?",
          options: ["No difference", "'zajęty' = busy (state), 'zajmujący' = occupying/engaging", "'zajmujący' = busy", "'zajęty' = occupying"],
          correct: 1,
          explanation: "'Zajęty' = busy (passive state), 'zajmujący' = occupying/engaging (active)."
        },
        {
          question: "Complete formal style: '___ wszystkie dokumenty, przystąpił do pisania raportu.' (Having reviewed all documents, he proceeded to write the report)",
          options: ["Przegląda", "Przeglądając", "Przejrzawszy", "Przejrzany"],
          correct: 2,
          explanation: "'Przejrzawszy' - active past participle for formal, sequential actions."
        },
        {
          question: "How do you say 'Work being done with passion'?",
          options: ["Praca robiąca z pasją", "Praca robiona z pasją", "Praca zrobiona z pasją", "Praca do robienia z pasją"],
          correct: 1,
          explanation: "'Praca robiona z pasją' - passive present participle for ongoing action."
        },
        {
          question: "Transform to formal style: 'Kiedy skończył pracę, poszedł do domu'",
          options: ["Skończywszy pracę, poszedł do domu", "Skańczając pracę, poszedł do domu", "Skończona praca, poszedł do domu", "Po skończeniu pracy, poszedł do domu"],
          correct: 0,
          explanation: "'Skończywszy pracę' - active past participle for formal temporal sequence."
        },
        {
          question: "What does 'nieprzeczytana książka' mean?",
          options: ["unreadable book", "book not being read", "unread book", "book to not read"],
          correct: 2,
          explanation: "'Nieprzeczytana książka' = 'unread book' (negative passive past participle)."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "Człowiek ___ książkę.",
          english: "The man reading a book.",
          blank: 1,
          options: ["czytać", "czytający", "czytany", "przeczytany"],
          correct: 1,
          explanation: "'Czytający' - active present participle modifying 'człowiek'."
        },
        {
          polish: "Okno jest ___.",
          english: "The window is open.",
          blank: 2,
          options: ["otwierać", "otwarte", "otwierający", "otwarzy"],
          correct: 1,
          explanation: "'Otwarte' - passive participle after 'być'."
        },
        {
          polish: "Jestem ___.",
          english: "I'm tired.",
          blank: 1,
          options: ["męczyć", "zmęczony", "męczący", "męczy"],
          correct: 1,
          explanation: "'Zmęczony' - passive participle expressing state."
        },
        {
          polish: "___ dzieci śpiewają.",
          english: "Happy children are singing.",
          blank: 0,
          options: ["Zadowolone", "Zadowalające", "Zadowolić", "Zadowoli"],
          correct: 0,
          explanation: "'Zadowolone' - passive participle agreeing with 'dzieci'."
        }
      ],

      intermediate: [
        {
          polish: "___ obiad, wyszedł.",
          english: "Having eaten lunch, he left.",
          blank: 0,
          options: ["Jedząc", "Zjadłszy", "Jedzony", "Zjedzony"],
          correct: 1,
          explanation: "'Zjadłszy' - active past participle for completed action."
        },
        {
          polish: "Książka ___ przez uczniów.",
          english: "The book being read by students.",
          blank: 1,
          options: ["czytać", "czytana", "czytający", "przeczytana"],
          correct: 1,
          explanation: "'Czytana' - passive present participle for ongoing action."
        },
        {
          polish: "List ___ piórem.",
          english: "A letter written with a pen.",
          blank: 1,
          options: ["pisać", "napisany", "piszący", "pisany"],
          correct: 1,
          explanation: "'Napisany' - passive past participle for completed action."
        },
        {
          polish: "Jest ___ tym filmem.",
          english: "He's moved by this film.",
          blank: 1,
          options: ["wzruszać", "wzruszony", "wzruszający", "wzruszy"],
          correct: 1,
          explanation: "'Wzruszony' - passive participle expressing emotional state."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the participle type with its example",
          pairs: [
            { polish: "czytający (reading)", english: "Active present" },
            { polish: "przeczytawszy (having read)", english: "Active past" },
            { polish: "czytany (being read)", english: "Passive present" },
            { polish: "przeczytany (read)", english: "Passive past" },
            { polish: "pracujący (working)", english: "Active present" },
            { polish: "napisany (written)", english: "Passive past" },
            { polish: "śpiewający (singing)", english: "Active present" },
            { polish: "otwarty (open)", english: "Passive past" }
          ]
        },
        {
          instruction: "Match the common participle with its meaning",
          pairs: [
            { polish: "zmęczony", english: "tired" },
            { polish: "zajęty", english: "busy" },
            { polish: "zamknięty", english: "closed" },
            { polish: "otwarty", english: "open" },
            { polish: "zadowolony", english: "satisfied" },
            { polish: "zaskoczony", english: "surprised" },
            { polish: "przygotowany", english: "prepared" },
            { polish: "złamany", english: "broken" }
          ]
        }
      ]
    }
  }
];