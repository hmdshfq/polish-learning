export const reflexiveVerbs = [
  {
    name: "Basic Reflexive Verbs",
    polish: "Podstawowe czasowniki zwrotne",
    difficulty: "beginner",
    level: "A1",
    icon: "🔄",

    explanation: "Reflexive verbs in Polish always include the word 'się' (oneself). This little word is essential and cannot be dropped! Reflexive verbs describe actions done to oneself or actions that are inherently reflexive. The verb 'się' usually comes after the verb in simple sentences, but its position can change in longer sentences. At the A1 level, focus on the most common reflexive verbs and learn their present tense conjugation.",

    analogy: "Think of 'się' as a mirror - it reflects the action back to the person doing it. When you 'myć się' (wash yourself), you're both washing AND being washed. It's like saying 'I wash myself' in English, but in Polish, the 'myself/yourself' part ('się') is a separate word that tags along with the verb.",

    commonReflexiveVerbs: [
      {
        infinitive: "nazywać się",
        english: "to be called, to be named",
        example: "Nazywam się Anna.",
        exampleEng: "My name is Anna. (lit. I call myself Anna)",
        category: "identity",
        note: "Most common reflexive verb - used for introducing yourself"
      },
      {
        infinitive: "uczyć się",
        english: "to learn, to study",
        example: "Uczę się polskiego.",
        exampleEng: "I'm learning Polish.",
        category: "education",
        note: "Very common - different from 'uczyć' (to teach)"
      },
      {
        infinitive: "myć się",
        english: "to wash (oneself)",
        example: "Myję się codziennie.",
        exampleEng: "I wash (myself) every day.",
        category: "daily routine",
        note: "Daily hygiene verb"
      },
      {
        infinitive: "ubierać się",
        english: "to get dressed",
        example: "Ubieram się szybko.",
        exampleEng: "I get dressed quickly.",
        category: "daily routine",
        note: "Morning routine essential"
      },
      {
        infinitive: "bać się",
        english: "to be afraid, to fear",
        example: "Boję się pająków.",
        exampleEng: "I'm afraid of spiders.",
        category: "emotion",
        note: "Takes Genitive case for what you fear (advanced)"
      },
      {
        infinitive: "cieszyć się",
        english: "to be happy, to rejoice",
        example: "Cieszę się.",
        exampleEng: "I'm happy.",
        category: "emotion",
        note: "Expresses joy and happiness"
      },
      {
        infinitive: "spotykać się",
        english: "to meet (each other)",
        example: "Spotykamy się o piątej.",
        exampleEng: "We're meeting at five.",
        category: "social",
        note: "Reciprocal - mutual action"
      },
      {
        infinitive: "śmiać się",
        english: "to laugh",
        example: "Śmieję się głośno.",
        exampleEng: "I laugh loudly.",
        category: "emotion",
        note: "Different from 'śmiać' (rare)"
      }
    ],

    sięPlacement: {
      title: "Where does 'się' go?",
      rules: [
        {
          rule: "Basic sentence",
          pattern: "Subject + Verb + się",
          examples: [
            "Ja uczę się. (I study)",
            "Ona myje się. (She washes)",
            "My spotykamy się. (We meet)"
          ]
        },
        {
          rule: "With object or complement",
          pattern: "Subject + Verb + się + Object/Time",
          examples: [
            "Uczę się polskiego. (I'm learning Polish)",
            "Spotykamy się wieczorem. (We meet in the evening)",
            "Cieszę się bardzo. (I'm very happy)"
          ]
        },
        {
          rule: "Negative sentence",
          pattern: "Subject + nie + Verb + się",
          examples: [
            "Nie uczę się. (I don't study)",
            "Nie boję się. (I'm not afraid)",
            "Nie śmieję się. (I'm not laughing)"
          ]
        }
      ],
      note: "'Się' is NOT attached to the verb - it's always a separate word!"
    },

    conjugationTable: {
      verb: "uczyć się (to study/learn)",
      forms: [
        { pronoun: "ja", form: "uczę się", english: "I study/learn" },
        { pronoun: "ty", form: "uczysz się", english: "you study/learn" },
        { pronoun: "on/ona/ono", form: "uczy się", english: "he/she/it studies/learns" },
        { pronoun: "my", form: "uczymy się", english: "we study/learn" },
        { pronoun: "wy", form: "uczycie się", english: "you (plural) study/learn" },
        { pronoun: "oni/one", form: "uczą się", english: "they study/learn" }
      ],
      pattern: "The verb conjugates normally + się stays the same for all persons!"
    },

    quiz: {
      beginner: [
        {
          question: "How do you say 'My name is Piotr'?",
          options: ["Nazywam się Piotr", "Nazywam Piotr", "Jestem się Piotr", "Mam się Piotr"],
          correct: 0,
          explanation: "'Nazywam się' means 'I am called/named'. Don't forget 'się'!"
        },
        {
          question: "Complete: 'Ja ___ polskiego.' (I'm learning Polish)",
          options: ["uczę", "uczę się", "uczę mi", "się uczę"],
          correct: 1,
          explanation: "'Uczyć się' is reflexive, so you need 'się'. 'Uczę się polskiego' is correct."
        },
        {
          question: "How do you say 'She washes (herself)'?",
          options: ["Ona myje", "Ona myje się", "Ona się myje", "Ona jest myje"],
          correct: 1,
          explanation: "'Myć się' (to wash oneself) needs 'się'. 'Ona myje się' is correct."
        },
        {
          question: "Complete: 'Oni ___ wieczorem.' (They meet in the evening)",
          options: ["spotykają", "spotykają się", "się spotykają", "spotyka się"],
          correct: 1,
          explanation: "'Spotykać się' means 'to meet each other'. 'Spotykają się' is the correct form."
        },
        {
          question: "What does 'Cieszę się' mean?",
          options: ["I'm sad", "I'm happy", "I'm tired", "I'm hungry"],
          correct: 1,
          explanation: "'Cieszyć się' means 'to be happy/glad'. 'Cieszę się' = 'I'm happy'."
        },
        {
          question: "How do you say 'I'm afraid' in Polish?",
          options: ["Boję", "Boję się", "Jestem bać", "Mam bać"],
          correct: 1,
          explanation: "'Bać się' means 'to be afraid'. 'Boję się' is 'I'm afraid'."
        },
        {
          question: "Complete: 'Ty ___ szybko.' (You get dressed quickly)",
          options: ["ubierasz", "ubierasz się", "się ubierasz", "jesteś ubierać"],
          correct: 1,
          explanation: "'Ubierać się' means 'to get dressed'. 'Ubierasz się' is correct for 'you'."
        },
        {
          question: "What is the infinitive form of 'Uczę się'?",
          options: ["uczyć", "uczyć się", "uczenie", "się uczyć"],
          correct: 1,
          explanation: "The infinitive is 'uczyć się' (to study/learn). The 'się' is part of the verb."
        },
        {
          question: "Where does 'się' go? 'We don't laugh.'",
          options: ["Nie śmiejemy", "Nie śmiejemy się", "Się nie śmiejemy", "Nie się śmiejemy"],
          correct: 1,
          explanation: "'Się' comes after the verb. 'Nie śmiejemy się' is correct."
        },
        {
          question: "Complete: 'My ___ codziennie.' (We meet every day)",
          options: ["spotykamy", "spotykamy się", "się spotykamy", "jesteśmy spotykać"],
          correct: 1,
          explanation: "'Spotykać się' is reflexive. 'Spotykamy się' is the correct form for 'we'."
        }
      ],

      intermediate: [
        {
          question: "Complete: '___ dobrze po polsku?' (Do you study Polish well?)",
          options: ["Uczysz", "Uczysz się", "Ty uczysz się", "Się uczysz"],
          correct: 1,
          explanation: "In questions, 'się' still comes after the verb. 'Uczysz się' is correct."
        },
        {
          question: "How do you say 'They are getting dressed'?",
          options: ["Oni ubierają", "Oni ubierają się", "Oni są ubierać", "Oni się ubierają"],
          correct: 1,
          explanation: "'Ubierać się' conjugates to 'ubierają się' for 'they'."
        },
        {
          question: "Complete: 'Ona nie ___ matematyki.' (She doesn't study math)",
          options: ["uczy", "uczy się", "uczą się", "uczysz się"],
          correct: 1,
          explanation: "'Nie uczy się matematyki' - the verb is 'uczy się' for 'ona' (she)."
        },
        {
          question: "What does 'Boicie się?' mean?",
          options: ["Are you (singular) afraid?", "Are you (plural) afraid?", "Are they afraid?", "Is he afraid?"],
          correct: 1,
          explanation: "'Boicie się' is the 'wy' (you plural) form of 'bać się'."
        },
        {
          question: "Complete: 'Rano ___ i ubieram się.' (In the morning I wash and get dressed)",
          options: ["myję", "myję się", "się myję", "jestem myć"],
          correct: 1,
          explanation: "'Myję się' (I wash myself) is the correct form."
        },
        {
          question: "How do you say 'We are happy'?",
          options: ["Cieszymy", "Cieszymy się", "Jesteśmy cieszyć", "Się cieszymy"],
          correct: 1,
          explanation: "'Cieszyć się' for 'we' is 'cieszymy się'."
        },
        {
          question: "Complete: 'Dlaczego się ___?' (Why are you laughing?)",
          options: ["śmiejesz", "śmiejesz się", "śmieje", "śmieją"],
          correct: 0,
          explanation: "When 'się' comes before the verb (which can happen in questions), the verb appears without it. But 'śmiejesz się' is more common."
        },
        {
          question: "What is 'nazywać się' in English?",
          options: ["to call", "to be called", "to name", "to have a name"],
          correct: 1,
          explanation: "'Nazywać się' means 'to be called/named' (literally 'to call oneself')."
        },
        {
          question: "Complete: 'Gdzie wy ___?' (Where do you (plural) meet?)",
          options: ["spotykać", "spotykamy się", "spotykacie się", "spotyka się"],
          correct: 2,
          explanation: "'Wy' (you plural) conjugates to 'spotykacie się'."
        },
        {
          question: "How do you say 'He doesn't wash'?",
          options: ["On nie myje", "On nie myje się", "On się nie myje", "On myje nie się"],
          correct: 1,
          explanation: "'On nie myje się' - negative word 'nie' comes before the verb."
        }
      ],

      advanced: [
        {
          question: "Complete: 'Studenci bardzo dobrze ___.' (The students study very well)",
          options: ["uczą", "uczą się", "się uczą", "uczy się"],
          correct: 1,
          explanation: "'Studenci' (students) is plural, so 'uczą się' is correct."
        },
        {
          question: "What's the difference between 'Boję' and 'Boję się'?",
          options: ["They mean the same", "'Boję' is wrong - must use 'Boję się'", "'Boję' means 'I fear', 'Boję się' means 'I am afraid'", "They're interchangeable"],
          correct: 1,
          explanation: "'Bać się' is ALWAYS reflexive. 'Boję' alone is incorrect - you must say 'Boję się'."
        },
        {
          question: "Complete: 'Nie ___ codziennie, tylko co drugi dzień.' (I don't wash every day, only every other day)",
          options: ["myję", "myję się", "się myję", "mam myć"],
          correct: 1,
          explanation: "'Nie myję się' - the reflexive verb 'myć się' needs 'się'."
        },
        {
          question: "How would you ask 'What is your name?' formally?",
          options: ["Jak się pan/pani nazywa?", "Jak pan/pani nazywa się?", "Jak się nazywasz?", "Jak nazywasz się?"],
          correct: 0,
          explanation: "'Jak się pan/pani nazywa?' is the formal way. 'Się' can come before the verb in questions."
        },
        {
          question: "Complete: 'Oni ___ z nami jutro.' (They are meeting with us tomorrow)",
          options: ["spotykają", "spotykają się", "się spotykają", "spotyka"],
          correct: 1,
          explanation: "'Spotykają się' is the plural form. The preposition phrase 'z nami' comes after."
        },
        {
          question: "What case does 'bać się' take for the thing you're afraid of?",
          options: ["Nominative", "Accusative", "Genitive", "Locative"],
          correct: 2,
          explanation: "'Bać się' takes Genitive case: 'Boję się pająków' (I'm afraid of spiders - Genitive)."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "Ja ___ Anna.",
          english: "My name is Anna.",
          blank: 1,
          options: ["nazywam", "nazywam się", "jestem", "mam"],
          correct: 1,
          explanation: "'Nazywać się' is how you say 'to be called'. 'Nazywam się' is correct."
        },
        {
          polish: "Ona ___ polskiego.",
          english: "She's learning Polish.",
          blank: 1,
          options: ["uczy", "uczy się", "uczę się", "uczą się"],
          correct: 1,
          explanation: "'Ona' (she) uses 'uczy się' form of 'uczyć się'."
        },
        {
          polish: "My ___ rano.",
          english: "We wash in the morning.",
          blank: 1,
          options: ["myjemy", "myjemy się", "myje się", "myją się"],
          correct: 1,
          explanation: "'My' (we) conjugates to 'myjemy się'."
        },
        {
          polish: "Ty ___ bardzo szybko.",
          english: "You get dressed very quickly.",
          blank: 1,
          options: ["ubierasz", "ubierasz się", "ubieram się", "ubieram"],
          correct: 1,
          explanation: "'Ty' (you) uses 'ubierasz się' for 'ubierać się'."
        },
        {
          polish: "Dzieci ___ głośno.",
          english: "The children laugh loudly.",
          blank: 1,
          options: ["śmieją", "śmieją się", "śmieje się", "śmieje"],
          correct: 1,
          explanation: "'Dzieci' (children - plural) uses 'śmieją się'."
        },
        {
          polish: "Ja ___ wieczorem z przyjaciółmi.",
          english: "I meet with friends in the evening.",
          blank: 1,
          options: ["spotykam", "spotykam się", "spotkam się", "spotyka się"],
          correct: 1,
          explanation: "'Spotykać się' for 'ja' is 'spotykam się'."
        },
        {
          polish: "Czy ty ___?",
          english: "Are you afraid?",
          blank: 2,
          options: ["boisz", "boisz się", "boję się", "boją się"],
          correct: 1,
          explanation: "'Ty' (you) form of 'bać się' is 'boisz się'."
        },
        {
          polish: "On ___, że wygrał.",
          english: "He's happy that he won.",
          blank: 1,
          options: ["cieszy", "cieszy się", "cieszę się", "cieszą się"],
          correct: 1,
          explanation: "'On' (he) uses 'cieszy się' for 'cieszyć się'."
        }
      ],

      intermediate: [
        {
          polish: "Wy ___ bardzo dobrze.",
          english: "You (plural) study very well.",
          blank: 1,
          options: ["uczycie", "uczycie się", "uczą się", "uczy się"],
          correct: 1,
          explanation: "'Wy' form of 'uczyć się' is 'uczycie się'."
        },
        {
          polish: "Ona nie ___ pająków.",
          english: "She's not afraid of spiders.",
          blank: 2,
          options: ["boi", "boi się", "boję się", "boją"],
          correct: 1,
          explanation: "'Nie boi się' - 'ona' form with negation."
        },
        {
          polish: "Czy ___ Piotr?",
          english: "Is your name Piotr?",
          blank: 1,
          options: ["nazywasz", "nazywasz się", "nazywam się", "nazywa się"],
          correct: 1,
          explanation: "Question form for 'ty': 'Czy nazywasz się Piotr?'"
        },
        {
          polish: "Oni ___ w parku codziennie.",
          english: "They meet in the park every day.",
          blank: 1,
          options: ["spotykają", "spotykają się", "spotykamy się", "spotyka się"],
          correct: 1,
          explanation: "'Oni' (they) uses 'spotykają się'."
        },
        {
          polish: "Rano ___, myję się i ubieram się.",
          english: "In the morning I wake up, wash, and get dressed.",
          blank: 1,
          options: ["budzę", "budzę się", "budzi się", "budzą się"],
          correct: 1,
          explanation: "'Budzić się' (to wake up) for 'ja' is 'budzę się'."
        },
        {
          polish: "Studenci ___ polskiego w szkole.",
          english: "The students study Polish at school.",
          blank: 1,
          options: ["uczą", "uczą się", "uczy się", "uczymy się"],
          correct: 1,
          explanation: "'Studenci' (students - plural) takes 'uczą się'."
        },
        {
          polish: "Dlaczego nie ___?",
          english: "Why aren't you laughing?",
          blank: 2,
          options: ["śmiejesz", "śmiejesz się", "śmieje się", "śmieją się"],
          correct: 1,
          explanation: "'Nie śmiejesz się' - negative form for 'ty'."
        },
        {
          polish: "My bardzo ___ na wakacje.",
          english: "We're very happy about the vacation.",
          blank: 2,
          options: ["cieszymy", "cieszymy się", "cieszę się", "cieszą się"],
          correct: 1,
          explanation: "'My' (we) form is 'cieszymy się'."
        }
      ],

      advanced: [
        {
          polish: "Kiedy ___ z nami?",
          english: "When are you (plural) meeting with us?",
          blank: 1,
          options: ["spotykać się", "spotykamy się", "spotykacie się", "spotykają się"],
          correct: 2,
          explanation: "'Wy' form in a question: 'spotykacie się'."
        },
        {
          polish: "On ___ matematyki, ale ___ historii.",
          english: "He doesn't study math, but he studies history.",
          blank: "1,4",
          options: ["nie uczy się, uczy się", "uczy się, nie uczy się", "nie uczy, uczy", "uczy, nie uczy"],
          correct: 0,
          explanation: "Both clauses use reflexive form: 'nie uczy się... uczy się'."
        },
        {
          polish: "Dlaczego ty zawsze ___ tak późno?",
          english: "Why do you always wake up so late?",
          blank: 3,
          options: ["budzisz", "budzisz się", "budzi się", "budzą się"],
          correct: 1,
          explanation: "'Ty' form of 'budzić się': 'budzisz się'."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the reflexive verb with its English meaning",
          pairs: [
            { polish: "nazywać się", english: "to be called" },
            { polish: "uczyć się", english: "to study/learn" },
            { polish: "myć się", english: "to wash (oneself)" },
            { polish: "ubierać się", english: "to get dressed" },
            { polish: "bać się", english: "to be afraid" },
            { polish: "cieszyć się", english: "to be happy" },
            { polish: "śmiać się", english: "to laugh" },
            { polish: "spotykać się", english: "to meet" }
          ]
        }
      ]
    }
  }
];
