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
  },

  // A2 LEVEL CONTENT - Building on A1 foundation

  {
    name: "More Reflexive Verbs - Expanded Vocabulary",
    polish: "Więcej czasowników zwrotnych - rozszerzony zasób słów",
    difficulty: "intermediate",
    level: "A2",
    icon: "📚",

    explanation: "Now that you've mastered the basic reflexive verbs, it's time to expand your vocabulary with more useful reflexive verbs that native speakers use daily. These verbs fall into several categories: daily routines (waking up, going to bed), emotions (worrying, being interested), social interactions (agreeing, being late), and physical actions (shaving, combing). Remember: all these verbs require 'się', and some require specific cases for their objects. For example, 'interesować się' (to be interested in) always takes the Instrumental case: 'Interesuję się muzyką' (I'm interested in music - Instrumental).",

    analogy: "Think of reflexive verbs as having different 'flavors' or categories, just like we organize vocabulary by topics in English. Daily routine verbs help you talk about your morning (budzić się, golić się), emotional verbs express feelings (martwić się, cieszyć się), and social verbs describe interactions (zgadzać się, spotykać się). Each category has its own 'personality' - some are actions you do to yourself (czesać się), while others describe states or attitudes (interesować się). Learning them by category makes them easier to remember and use naturally.",

    moreReflexiveVerbs: [
      {
        infinitive: "budzić się",
        english: "to wake up",
        example: "Budzę się o szóstej rano.",
        exampleEng: "I wake up at six in the morning.",
        category: "daily routine",
        note: "Very common morning routine verb - different from 'budzić' (to wake someone else up)"
      },
      {
        infinitive: "kłaść się / położyć się",
        english: "to lie down, to go to bed",
        example: "Kładę się spać o jedenastej.",
        exampleEng: "I go to bed at eleven.",
        category: "daily routine",
        note: "Aspect pair: kłaść się (imperfective) / położyć się (perfective). Use perfective for completed action."
      },
      {
        infinitive: "golić się",
        english: "to shave (oneself)",
        example: "Golę się codziennie rano.",
        exampleEng: "I shave every morning.",
        category: "daily routine",
        note: "Masculine-oriented activity, but verb conjugates normally for all genders"
      },
      {
        infinitive: "czesać się",
        english: "to comb one's hair",
        example: "Czeszę się przed lustrem.",
        exampleEng: "I comb my hair in front of the mirror.",
        category: "daily routine",
        note: "Literal: 'to comb oneself' - the reflexive shows you're doing it to yourself"
      },
      {
        infinitive: "pakować się",
        english: "to pack (one's things)",
        example: "Pakuję się na wakacje.",
        exampleEng: "I'm packing for vacation.",
        category: "daily routine",
        note: "Different from 'pakować' (to pack something for someone else)"
      },
      {
        infinitive: "martwić się",
        english: "to worry",
        example: "Martwię się o egzamin.",
        exampleEng: "I'm worried about the exam.",
        category: "emotion",
        note: "Takes 'o' + Accusative for what you worry about"
      },
      {
        infinitive: "spóźniać się",
        english: "to be late",
        example: "Spóźniam się na autobus.",
        exampleEng: "I'm late for the bus.",
        category: "social",
        note: "Takes 'na' + Accusative for what you're late to"
      },
      {
        infinitive: "zgadzać się",
        english: "to agree",
        example: "Zgadzam się z tobą.",
        exampleEng: "I agree with you.",
        category: "social",
        note: "Takes 'z' + Instrumental for who/what you agree with"
      },
      {
        infinitive: "przygotowywać się",
        english: "to prepare (oneself)",
        example: "Przygotowuję się do egzaminu.",
        exampleEng: "I'm preparing for the exam.",
        category: "mental state",
        note: "Takes 'do' + Genitive for what you're preparing for"
      },
      {
        infinitive: "interesować się",
        english: "to be interested in",
        example: "Interesuję się muzyką klasyczną.",
        exampleEng: "I'm interested in classical music.",
        category: "mental state",
        note: "ALWAYS takes Instrumental case for what interests you - very important!"
      },
      {
        infinitive: "zajmować się",
        english: "to deal with, to take care of",
        example: "Zajmuję się dziećmi.",
        exampleEng: "I take care of the children.",
        category: "activity",
        note: "Takes Instrumental case for what/whom you deal with"
      },
      {
        infinitive: "rozglądać się",
        english: "to look around",
        example: "Rozglądam się po pokoju.",
        exampleEng: "I'm looking around the room.",
        category: "physical action",
        note: "Takes 'po' + Locative for where you're looking around"
      }
    ],

    caseRequirements: {
      title: "Which cases do these verbs take?",
      groups: [
        {
          case: "Instrumental",
          verbs: ["interesować się", "zajmować się", "zgadzać się"],
          examples: [
            { polish: "Interesuję się sportem.", english: "I'm interested in sports." },
            { polish: "Zajmuję się grafiką.", english: "I deal with graphic design." },
            { polish: "Zgadzam się z kolegą.", english: "I agree with my colleague." }
          ]
        },
        {
          case: "Genitive (with 'do')",
          verbs: ["przygotowywać się"],
          examples: [
            { polish: "Przygotowuję się do egzaminu.", english: "I'm preparing for the exam." }
          ]
        },
        {
          case: "Accusative (with 'o' or 'na')",
          verbs: ["martwić się", "spóźniać się"],
          examples: [
            { polish: "Martwię się o zdrowie.", english: "I worry about health." },
            { polish: "Spóźniam się na lekcję.", english: "I'm late for class." }
          ]
        },
        {
          case: "Locative (with 'po')",
          verbs: ["rozglądać się"],
          examples: [
            { polish: "Rozglądam się po mieście.", english: "I'm looking around the city." }
          ]
        }
      ]
    },

    conjugationExample: {
      verb: "interesować się (to be interested in)",
      forms: [
        { pronoun: "ja", form: "interesuję się", english: "I'm interested" },
        { pronoun: "ty", form: "interesujesz się", english: "you're interested" },
        { pronoun: "on/ona/ono", form: "interesuje się", english: "he/she/it is interested" },
        { pronoun: "my", form: "interesujemy się", english: "we're interested" },
        { pronoun: "wy", form: "interesujecie się", english: "you (plural) are interested" },
        { pronoun: "oni/one", form: "interesują się", english: "they're interested" }
      ],
      note: "Remember: 'się' comes after the verb, and the object must be in Instrumental case!"
    },

    quiz: {
      beginner: [
        {
          question: "How do you say 'I wake up at seven'?",
          options: ["Budzę o siódmej", "Budzę się o siódmej", "Budzę mi o siódmej", "Się budzę o siódmej"],
          correct: 1,
          explanation: "'Budzić się' is reflexive. 'Budzę się o siódmej' is correct."
        },
        {
          question: "Complete: 'Ona ___ włosy.' (She combs her hair)",
          options: ["czesze", "czesze się", "czeszę się", "czesają się"],
          correct: 1,
          explanation: "'Czesać się' for 'ona' is 'czesze się'."
        },
        {
          question: "How do you say 'I'm worried'?",
          options: ["Martwię", "Martwię się", "Jestem martwić", "Mam martwić"],
          correct: 1,
          explanation: "'Martwić się' means 'to worry'. 'Martwię się' is 'I'm worried'."
        },
        {
          question: "Complete: 'Ty ___ muzyką?' (Are you interested in music?)",
          options: ["interesujesz", "interesujesz się", "interesuje się", "interesuję się"],
          correct: 1,
          explanation: "'Ty' form of 'interesować się' is 'interesujesz się'."
        },
        {
          question: "What does 'Spóźniam się' mean?",
          options: ["I'm early", "I'm late", "I'm on time", "I'm waiting"],
          correct: 1,
          explanation: "'Spóźniać się' means 'to be late'. 'Spóźniam się' = 'I'm late'."
        },
        {
          question: "Complete: 'On ___ dziećmi.' (He takes care of children)",
          options: ["zajmuje", "zajmuje się", "zajmuję się", "zajmują się"],
          correct: 1,
          explanation: "'Zajmować się' for 'on' is 'zajmuje się'."
        },
        {
          question: "How do you say 'We agree'?",
          options: ["Zgadzamy", "Zgadzamy się", "Zgadzam się", "Zgadza się"],
          correct: 1,
          explanation: "'Zgadzać się' for 'my' (we) is 'zgadzamy się'."
        },
        {
          question: "Complete: 'Ja ___ na wakacje.' (I'm packing for vacation)",
          options: ["pakuję", "pakuję się", "się pakuję", "jestem pakować"],
          correct: 1,
          explanation: "'Pakować się' means 'to pack (one's things)'. 'Pakuję się' is correct."
        },
        {
          question: "What is the infinitive form of 'Golę się'?",
          options: ["golić", "golić się", "golenie", "się golić"],
          correct: 1,
          explanation: "The infinitive is 'golić się' (to shave oneself)."
        },
        {
          question: "Complete: 'My ___ po sklepie.' (We're looking around the store)",
          options: ["rozglądamy", "rozglądamy się", "rozgląda się", "rozglądają się"],
          correct: 1,
          explanation: "'My' form of 'rozglądać się' is 'rozglądamy się'."
        }
      ],

      intermediate: [
        {
          question: "Complete: 'Interesuję się ___.' (I'm interested in history)",
          options: ["historia", "historii", "historią", "historię"],
          correct: 2,
          explanation: "'Interesować się' takes Instrumental case. 'Historią' is correct."
        },
        {
          question: "How do you say 'She's preparing for the exam'?",
          options: ["Ona przygotowuje na egzamin", "Ona przygotowuje się do egzaminu", "Ona przygotowuje się na egzamin", "Ona przygotowuje egzaminu"],
          correct: 1,
          explanation: "'Przygotowywać się do' + Genitive. 'Przygotowuje się do egzaminu' is correct."
        },
        {
          question: "Complete: 'Martwię się ___ dzieci.' (I worry about the children)",
          options: ["dzieci", "dzieciom", "o dzieci", "dziećmi"],
          correct: 2,
          explanation: "'Martwić się o' + Accusative. 'O dzieci' is correct."
        },
        {
          question: "What does 'Zgadzam się z tobą' mean?",
          options: ["I disagree with you", "I agree with you", "I'm talking to you", "I'm meeting you"],
          correct: 1,
          explanation: "'Zgadzać się z' + Instrumental means 'to agree with'. 'Z tobą' = 'with you'."
        },
        {
          question: "Complete: 'Oni ___ na autobus.' (They're late for the bus)",
          options: ["spóźniają", "spóźniają się", "są spóźnieni", "spóźnia się"],
          correct: 1,
          explanation: "'Oni' (they) form of 'spóźniać się' is 'spóźniają się'."
        },
        {
          question: "How do you say 'I shave every day'?",
          options: ["Golę codziennie", "Golę się codziennie", "Jestem golić codziennie", "Mam golić codziennie"],
          correct: 1,
          explanation: "'Golić się' is reflexive. 'Golę się codziennie' is correct."
        },
        {
          question: "Complete: 'Zajmuję się ___.' (I deal with computers - plural)",
          options: ["komputery", "komputerów", "komputerami", "komputerom"],
          correct: 2,
          explanation: "'Zajmować się' takes Instrumental case. 'Komputerami' is correct."
        },
        {
          question: "What case does 'interesować się' require?",
          options: ["Nominative", "Genitive", "Accusative", "Instrumental"],
          correct: 3,
          explanation: "'Interesować się' ALWAYS takes Instrumental case for what interests you."
        },
        {
          question: "Complete: 'Kładę się ___ o dziesiątej.' (I go to bed at ten)",
          options: ["spać", "spanie", "śpię", "spał"],
          correct: 0,
          explanation: "'Kłaść się spać' (to go to bed) uses the infinitive 'spać' after it."
        },
        {
          question: "How do you say 'We're looking around the museum'?",
          options: ["Rozglądamy się po muzeum", "Rozglądamy się w muzeum", "Rozglądamy się o muzeum", "Rozglądamy się na muzeum"],
          correct: 0,
          explanation: "'Rozglądać się po' + Locative. 'Po muzeum' is correct."
        }
      ],

      advanced: [
        {
          question: "Complete: 'Nie zgadzam się ___ twoim pomysłem.' (I don't agree with your idea)",
          options: ["o", "z", "na", "do"],
          correct: 1,
          explanation: "'Zgadzać się z' + Instrumental. 'Z twoim pomysłem' (Instrumental) is correct."
        },
        {
          question: "What's the difference between 'pakować' and 'pakować się'?",
          options: ["They mean the same", "'Pakować się' means packing your own things", "'Pakować' is more formal", "There's no difference"],
          correct: 1,
          explanation: "'Pakować się' = pack your own things (reflexive). 'Pakować' = pack for someone else."
        },
        {
          question: "Complete: 'Studenci ___ do egzaminów bardzo długo.' (Students prepare for exams for a long time)",
          options: ["przygotowują", "przygotowują się", "przygotują się", "przygotowywują"],
          correct: 1,
          explanation: "'Przygotowywać się' (imperfective) is correct. 'Studenci przygotowują się' (plural)."
        },
        {
          question: "How would you say 'I'm interested in Polish culture' with correct case?",
          options: ["Interesuję się polska kultura", "Interesuję się polskiej kultury", "Interesuję się polską kulturą", "Interesuję się polską kulturę"],
          correct: 2,
          explanation: "'Interesować się' + Instrumental. 'Polską kulturą' (Instrumental) is correct."
        },
        {
          question: "Complete: 'Dlaczego się tak ___?' (Why are you (singular) worrying so much?)",
          options: ["martwisz", "martwisz się", "martwię się", "martwią się"],
          correct: 0,
          explanation: "When 'się' comes before the verb in questions, verb appears without it. 'Martwisz' is correct, though 'martwisz się' is also acceptable."
        },
        {
          question: "What does 'Rozglądam się po sklepie' mean?",
          options: ["I'm shopping in the store", "I'm looking around the store", "I'm working in the store", "I'm leaving the store"],
          correct: 1,
          explanation: "'Rozglądać się po' + Locative means 'to look around'. Browsing, not necessarily buying."
        },
        {
          question: "Complete with the correct preposition: 'Martwię się ___ jutrzejszy egzamin.'",
          options: ["o", "z", "na", "do"],
          correct: 0,
          explanation: "'Martwić się o' + Accusative. 'O jutrzejszy egzamin' is correct."
        },
        {
          question: "How do you say 'They take care of their parents'?",
          options: ["Zajmują się rodzicami", "Zajmują się rodziców", "Zajmują rodzicami", "Zajmują rodziców"],
          correct: 0,
          explanation: "'Zajmować się' + Instrumental. 'Zajmują się rodzicami' is correct."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "Ja ___ o szóstej rano.",
          english: "I wake up at six in the morning.",
          blank: 1,
          options: ["budzę", "budzę się", "budzi się", "budzą się"],
          correct: 1,
          explanation: "'Budzić się' for 'ja' is 'budzę się'."
        },
        {
          polish: "Ona ___ przed lustrem.",
          english: "She combs her hair in front of the mirror.",
          blank: 1,
          options: ["czesze", "czesze się", "czeszę się", "czesają się"],
          correct: 1,
          explanation: "'Czesać się' for 'ona' is 'czesze się'."
        },
        {
          polish: "My ___ na wakacje.",
          english: "We're packing for vacation.",
          blank: 1,
          options: ["pakujemy", "pakujemy się", "pakuje się", "pakują się"],
          correct: 1,
          explanation: "'Pakować się' for 'my' is 'pakujemy się'."
        },
        {
          polish: "Ty ___ muzyką?",
          english: "Are you interested in music?",
          blank: 1,
          options: ["interesujesz", "interesujesz się", "interesuje się", "interesują się"],
          correct: 1,
          explanation: "'Ty' form of 'interesować się' is 'interesujesz się'."
        },
        {
          polish: "Dzieci ___ po pokoju.",
          english: "The children are looking around the room.",
          blank: 1,
          options: ["rozglądają", "rozglądają się", "rozgląda się", "rozglądamy się"],
          correct: 1,
          explanation: "'Dzieci' (plural) uses 'rozglądają się'."
        },
        {
          polish: "Ja ___ dziećmi.",
          english: "I take care of the children.",
          blank: 1,
          options: ["zajmuję", "zajmuję się", "zajmuje się", "zajmują się"],
          correct: 1,
          explanation: "'Zajmować się' for 'ja' is 'zajmuję się'."
        },
        {
          polish: "On ___ na autobus.",
          english: "He's late for the bus.",
          blank: 1,
          options: ["spóźnia", "spóźnia się", "spóźnię się", "spóźniają się"],
          correct: 1,
          explanation: "'Spóźniać się' for 'on' is 'spóźnia się'."
        },
        {
          polish: "My ___.",
          english: "We agree.",
          blank: 1,
          options: ["zgadzamy", "zgadzamy się", "zgadza się", "zgadzają się"],
          correct: 1,
          explanation: "'Zgadzać się' for 'my' is 'zgadzamy się'."
        }
      ],

      intermediate: [
        {
          polish: "Interesuję się ___.",
          english: "I'm interested in sports.",
          blank: 2,
          options: ["sport", "sportu", "sportem", "sportowi"],
          correct: 2,
          explanation: "'Interesować się' takes Instrumental: 'sportem'."
        },
        {
          polish: "Martwię się ___ egzamin.",
          english: "I'm worried about the exam.",
          blank: 2,
          options: ["egzamin", "egzaminu", "o egzamin", "na egzamin"],
          correct: 2,
          explanation: "'Martwić się o' + Accusative: 'o egzamin'."
        },
        {
          polish: "Ona ___ do testu.",
          english: "She's preparing for the test.",
          blank: 1,
          options: ["przygotowuje", "przygotowuje się", "przygotują się", "przygotowuję się"],
          correct: 1,
          explanation: "'Ona' form of 'przygotowywać się' is 'przygotowuje się'."
        },
        {
          polish: "Zgadzam się ___ tobą.",
          english: "I agree with you.",
          blank: 2,
          options: ["o", "z", "na", "do"],
          correct: 1,
          explanation: "'Zgadzać się z' + Instrumental: 'z tobą'."
        },
        {
          polish: "On ___ codziennie rano.",
          english: "He shaves every morning.",
          blank: 1,
          options: ["goli", "goli się", "golę się", "golą się"],
          correct: 1,
          explanation: "'Golić się' for 'on' is 'goli się'."
        },
        {
          polish: "Zajmuję się ___.",
          english: "I deal with computers.",
          blank: 2,
          options: ["komputery", "komputerów", "komputerami", "komputerom"],
          correct: 2,
          explanation: "'Zajmować się' takes Instrumental: 'komputerami'."
        },
        {
          polish: "Rozglądamy się ___ mieście.",
          english: "We're looking around the city.",
          blank: 2,
          options: ["w", "po", "o", "na"],
          correct: 1,
          explanation: "'Rozglądać się po' + Locative: 'po mieście'."
        },
        {
          polish: "Kładę się ___ o jedenastej.",
          english: "I go to bed at eleven.",
          blank: 2,
          options: ["spać", "śpię", "spanie", "spał"],
          correct: 0,
          explanation: "'Kłaść się spać' uses infinitive 'spać'."
        }
      ],

      advanced: [
        {
          polish: "Studenci ___ do egzaminów bardzo poważnie.",
          english: "Students prepare for exams very seriously.",
          blank: 1,
          options: ["przygotowują", "przygotowują się", "przygotują", "przygotowywują"],
          correct: 1,
          explanation: "'Przygotowywać się' for plural: 'przygotowują się'."
        },
        {
          polish: "Nie zgadzam się ___ twoim pomysłem.",
          english: "I don't agree with your idea.",
          blank: 3,
          options: ["o", "z", "na", "do"],
          correct: 1,
          explanation: "'Zgadzać się z' + Instrumental: 'z twoim pomysłem'."
        },
        {
          polish: "Interesuję się ___ kulturą.",
          english: "I'm interested in Polish culture.",
          blank: 2,
          options: ["polska kultura", "polskiej kultury", "polską kulturą", "polską kulturę"],
          correct: 2,
          explanation: "'Interesować się' + Instrumental: 'polską kulturą'."
        },
        {
          polish: "Dlaczego ty zawsze ___ tak późno?",
          english: "Why do you always wake up so late?",
          blank: 3,
          options: ["budzisz", "budzisz się", "budzi się", "budzą się"],
          correct: 1,
          explanation: "'Ty' form of 'budzić się': 'budzisz się'."
        },
        {
          polish: "Oni ___ swoimi rodzicami.",
          english: "They take care of their parents.",
          blank: 1,
          options: ["zajmują", "zajmują się", "zajmuję się", "zajmuje się"],
          correct: 1,
          explanation: "'Zajmować się' for 'oni': 'zajmują się'."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the reflexive verb with its English meaning",
          pairs: [
            { polish: "budzić się", english: "to wake up" },
            { polish: "golić się", english: "to shave" },
            { polish: "czesać się", english: "to comb one's hair" },
            { polish: "martwić się", english: "to worry" },
            { polish: "spóźniać się", english: "to be late" },
            { polish: "zgadzać się", english: "to agree" },
            { polish: "interesować się", english: "to be interested in" },
            { polish: "zajmować się", english: "to take care of" }
          ]
        },
        {
          instruction: "Match the verb with the correct case it requires",
          pairs: [
            { polish: "interesować się + ?", english: "Instrumental" },
            { polish: "zgadzać się z + ?", english: "Instrumental" },
            { polish: "martwić się o + ?", english: "Accusative" },
            { polish: "przygotowywać się do + ?", english: "Genitive" },
            { polish: "zajmować się + ?", english: "Instrumental" },
            { polish: "spóźniać się na + ?", english: "Accusative" },
            { polish: "rozglądać się po + ?", english: "Locative" },
            { polish: "kłaść się", english: "no case needed" }
          ]
        }
      ]
    }
  },

  {
    name: "Reflexive Verbs in All Tenses",
    polish: "Czasowniki zwrotne we wszystkich czasach",
    difficulty: "intermediate",
    level: "A2",
    icon: "⏰",

    explanation: "You've learned reflexive verbs in present tense, but now it's time to use them in past and future tenses! The good news: 'się' doesn't change - it always stays 'się' regardless of tense. The verb part conjugates normally according to tense rules. IMPORTANT: In past tense, Polish verbs show gender agreement! This means the past tense ending changes depending on whether the subject is masculine, feminine, or neuter, and whether it's singular or plural. For example: 'Myłem się' (I washed - masculine), 'Myłam się' (I washed - feminine), 'Myliśmy się' (We washed). The imperative mood (commands) also uses reflexive verbs naturally: 'Myj się!' (Wash yourself!), 'Nie martw się!' (Don't worry!).",

    analogy: "Think of 'się' as a loyal companion that follows the verb through time. Whether you're talking about what you DID yesterday (past tense), what you WILL DO tomorrow (future tense), or giving someone a command (imperative), 'się' is always there, unchanged. It's like how 'yourself' doesn't change in English whether you say 'I wash myself' (present), 'I washed myself' (past), or 'I will wash myself' (future). The verb changes, but the reflexive marker stays constant. The tricky part in Polish is remembering gender agreement in past tense - something English doesn't have!",

    tenseOverview: {
      present: {
        pattern: "Conjugated verb + się",
        example: "Uczę się polskiego.",
        exampleEng: "I'm learning Polish.",
        note: "'Się' comes after the conjugated present tense verb"
      },
      past: {
        pattern: "Past tense verb (with gender/number agreement) + się",
        example: "Uczyłem się polskiego. (masculine) / Uczyłam się polskiego. (feminine)",
        exampleEng: "I was learning Polish. (masculine/feminine)",
        note: "CRITICAL: Past tense shows gender! -łem/-łam (singular), -liśmy/-łyśmy (plural)"
      },
      future: {
        pattern: "Będę/będziesz/będzie... + infinitive reflexive verb",
        example: "Będę się uczyć polskiego.",
        exampleEng: "I will learn Polish.",
        note: "'Się' comes between 'będę' and the infinitive verb"
      },
      imperative: {
        pattern: "Command form + się (or Nie + command + się)",
        example: "Ucz się! / Nie martw się!",
        exampleEng: "Study! / Don't worry!",
        note: "Used for giving orders or advice"
      }
    },

    conjugationTables: {
      pastTense: {
        verb: "uczyć się (to study/learn)",
        masculine: [
          { pronoun: "ja", form: "uczyłem się", english: "I studied/learned (masculine)" },
          { pronoun: "ty", form: "uczyłeś się", english: "you studied/learned (masculine)" },
          { pronoun: "on", form: "uczył się", english: "he studied/learned" },
          { pronoun: "my", form: "uczyliśmy się", english: "we studied/learned (masculine group)" },
          { pronoun: "wy", form: "uczyliście się", english: "you (plural) studied/learned (masculine group)" },
          { pronoun: "oni", form: "uczyli się", english: "they studied/learned (masculine group)" }
        ],
        feminine: [
          { pronoun: "ja", form: "uczyłam się", english: "I studied/learned (feminine)" },
          { pronoun: "ty", form: "uczyłaś się", english: "you studied/learned (feminine)" },
          { pronoun: "ona", form: "uczyła się", english: "she studied/learned" },
          { pronoun: "my", form: "uczyłyśmy się", english: "we studied/learned (feminine group)" },
          { pronoun: "wy", form: "uczyłyście się", english: "you (plural) studied/learned (feminine group)" },
          { pronoun: "one", form: "uczyły się", english: "they studied/learned (feminine group)" }
        ],
        neuter: [
          { pronoun: "ono", form: "uczyło się", english: "it studied/learned" },
          { pronoun: "one (things)", form: "uczyły się", english: "they studied/learned (neuter things)" }
        ],
        note: "Past tense endings: masculine -łem/-łeś/-ł/-liśmy/-liście/-li; feminine -łam/-łaś/-ła/-łyśmy/-łyście/-ły"
      },

      futureTense: {
        verb: "myć się (to wash oneself)",
        forms: [
          { pronoun: "ja", form: "będę się myć / będę się mył/myła", english: "I will wash (myself)" },
          { pronoun: "ty", form: "będziesz się myć / będziesz się mył/myła", english: "you will wash (yourself)" },
          { pronoun: "on", form: "będzie się myć / będzie się mył", english: "he will wash (himself)" },
          { pronoun: "ona", form: "będzie się myć / będzie się myła", english: "she will wash (herself)" },
          { pronoun: "my", form: "będziemy się myć / będziemy się myli/myły", english: "we will wash (ourselves)" },
          { pronoun: "wy", form: "będziecie się myć / będziecie się myli/myły", english: "you (plural) will wash (yourselves)" },
          { pronoun: "oni", form: "będą się myć / będą się myli", english: "they will wash (themselves - masculine)" },
          { pronoun: "one", form: "będą się myć / będą się myły", english: "they will wash (themselves - feminine)" }
        ],
        note: "Future can be: 'będę się' + infinitive OR 'będę się' + past participle (with gender). Both are correct!"
      },

      imperative: {
        verb: "myć się (to wash oneself)",
        forms: [
          { form: "myj się!", english: "wash yourself! (singular, informal)" },
          { form: "myjcie się!", english: "wash yourselves! (plural, informal)" },
          { form: "niech się myje!", english: "let him/her wash!" },
          { form: "myjmy się!", english: "let's wash ourselves!" }
        ],
        negativeExamples: [
          { form: "Nie myj się!", english: "Don't wash yourself!" },
          { form: "Nie martwcie się!", english: "Don't worry! (plural)" },
          { form: "Nie spóźnij się!", english: "Don't be late!" }
        ],
        note: "Imperative is used for commands, requests, and advice"
      },

      commonVerbs: {
        title: "Three common reflexive verbs in all tenses",
        verbs: [
          {
            infinitive: "nazywać się (to be called)",
            present: "nazywam się",
            pastMasc: "nazywałem się",
            pastFem: "nazywałam się",
            future: "będę się nazywać",
            imperative: "nazywaj się!"
          },
          {
            infinitive: "bać się (to be afraid)",
            present: "boję się",
            pastMasc: "bałem się",
            pastFem: "bałam się",
            future: "będę się bać",
            imperative: "bój się!"
          },
          {
            infinitive: "cieszyć się (to be happy)",
            present: "cieszę się",
            pastMasc: "cieszyłem się",
            pastFem: "cieszyłam się",
            future: "będę się cieszyć",
            imperative: "ciesz się!"
          }
        ]
      }
    },

    genderAgreementGuide: {
      title: "Past Tense Gender Agreement - Quick Reference",
      rules: [
        {
          gender: "Masculine singular",
          endings: "-łem (I), -łeś (you), -ł (he/it)",
          examples: [
            { polish: "Myłem się.", english: "I washed (myself) - man speaking" },
            { polish: "On bał się.", english: "He was afraid." }
          ]
        },
        {
          gender: "Feminine singular",
          endings: "-łam (I), -łaś (you), -ła (she/it)",
          examples: [
            { polish: "Myłam się.", english: "I washed (myself) - woman speaking" },
            { polish: "Ona bała się.", english: "She was afraid." }
          ]
        },
        {
          gender: "Neuter singular",
          endings: "-ło (it)",
          examples: [
            { polish: "Dziecko myło się.", english: "The child washed (itself)." }
          ]
        },
        {
          gender: "Masculine personal plural",
          endings: "-liśmy (we), -liście (you plural), -li (they)",
          examples: [
            { polish: "Myliśmy się.", english: "We washed (ourselves) - men/mixed group" },
            { polish: "Oni bali się.", english: "They were afraid (men)." }
          ]
        },
        {
          gender: "Non-masculine personal plural",
          endings: "-łyśmy (we), -łyście (you plural), -ły (they)",
          examples: [
            { polish: "Myłyśmy się.", english: "We washed (ourselves) - women/things" },
            { polish: "One bały się.", english: "They were afraid (women/things)." }
          ]
        }
      ],
      keyPoint: "If there's even ONE man in a group, use masculine personal plural forms!"
    },

    quiz: {
      beginner: [
        {
          question: "How do you say 'I studied' (past tense, masculine)?",
          options: ["Uczę się", "Uczyłem się", "Uczyłam się", "Będę się uczyć"],
          correct: 1,
          explanation: "Past tense masculine: 'Uczyłem się' (-łem ending for masculine 'I')."
        },
        {
          question: "How do you say 'She washed' (past tense)?",
          options: ["Ona myje się", "Ona myła się", "Ona mył się", "Ona myło się"],
          correct: 1,
          explanation: "Past tense feminine: 'Ona myła się' (-ła ending for feminine past)."
        },
        {
          question: "Complete: 'Ja ___ polskiego.' (I will learn - future tense)",
          options: ["uczę się", "uczyłem się", "będę się uczyć", "uczył się"],
          correct: 2,
          explanation: "Future tense: 'będę się uczyć' (will learn)."
        },
        {
          question: "What does 'Myj się!' mean?",
          options: ["I wash myself", "Wash yourself!", "He washes", "We wash"],
          correct: 1,
          explanation: "'Myj się!' is the imperative (command): 'Wash yourself!'"
        },
        {
          question: "How do you say 'Don't worry!' (singular, informal)?",
          options: ["Nie martw się!", "Nie martwię się!", "Martwię się!", "Martw się!"],
          correct: 0,
          explanation: "Negative imperative: 'Nie martw się!' (Don't worry!)"
        },
        {
          question: "Complete: 'Ona ___ o szóstej.' (She woke up - past tense)",
          options: ["budzi się", "budziła się", "budził się", "budzą się"],
          correct: 1,
          explanation: "Past tense feminine: 'Ona budziła się' (-ła ending)."
        },
        {
          question: "What is the past tense of 'Boję się' for a woman?",
          options: ["Bałem się", "Bałam się", "Bał się", "Bała się"],
          correct: 1,
          explanation: "Feminine 'I': 'Bałam się' (-łam ending for feminine past)."
        },
        {
          question: "How do you say 'We will meet' (future)?",
          options: ["Spotykamy się", "Spotkaliśmy się", "Będziemy się spotykać", "Spotykali się"],
          correct: 2,
          explanation: "Future: 'Będziemy się spotykać' (we will meet)."
        },
        {
          question: "Complete the command: '___!' (Be happy! - singular)",
          options: ["Ciesz się", "Cieszę się", "Cieszył się", "Będę się cieszyć"],
          correct: 0,
          explanation: "Imperative: 'Ciesz się!' (Be happy!)"
        },
        {
          question: "What does 'Uczyłam się' tell you about the speaker?",
          options: ["The speaker is male", "The speaker is female", "The speaker is plural", "Can't determine gender"],
          correct: 1,
          explanation: "'-łam' ending indicates feminine 'I'. A woman is speaking."
        }
      ],

      intermediate: [
        {
          question: "Complete: 'My ___ wczoraj.' (We washed - past tense, masculine group)",
          options: ["myliśmy się", "myłyśmy się", "mylimy się", "myjemy się"],
          correct: 0,
          explanation: "Masculine personal plural: 'myliśmy się' (-liśmy for masculine 'we')."
        },
        {
          question: "How do you say 'They studied' (past tense, all women)?",
          options: ["Uczyły się", "Uczyli się", "Uczą się", "Uczę się"],
          correct: 0,
          explanation: "Feminine/neuter plural: 'Uczyły się' (-ły for non-masculine personal)."
        },
        {
          question: "Complete: 'Ty ___ o piątej.' (You will wake up - future, using infinitive)",
          options: ["budzisz się", "budziłeś się", "będziesz się budzić", "budził się"],
          correct: 2,
          explanation: "Future: 'będziesz się budzić' (you will wake up)."
        },
        {
          question: "What's the difference between 'Uczyłem się' and 'Uczyłam się'?",
          options: ["Different tenses", "Different persons", "Different genders (masculine vs feminine)", "Different aspects"],
          correct: 2,
          explanation: "'Uczyłem się' = masculine speaker, 'Uczyłam się' = feminine speaker."
        },
        {
          question: "Complete: 'Oni ___ na lekcję wczoraj.' (They were late - past, masculine)",
          options: ["spóźnili się", "spóźniły się", "spóźnią się", "spóźniają się"],
          correct: 0,
          explanation: "Masculine personal plural past: 'spóźnili się'."
        },
        {
          question: "How do you say 'Let's wash!' (imperative, inclusive)?",
          options: ["Myj się!", "Myjcie się!", "Myjmy się!", "Myje się!"],
          correct: 2,
          explanation: "Inclusive imperative 'we': 'Myjmy się!' (Let's wash!)"
        },
        {
          question: "Complete: 'Dzieci ___ wczoraj.' (The children were happy - past)",
          options: ["cieszyły się", "cieszyli się", "cieszą się", "cieszymy się"],
          correct: 0,
          explanation: "'Dzieci' is neuter plural, uses -ły: 'cieszyły się'."
        },
        {
          question: "What does 'Będę się golić' mean?",
          options: ["I shave", "I shaved", "I will shave", "Shave yourself!"],
          correct: 2,
          explanation: "'Będę się golić' is future tense: 'I will shave'."
        },
        {
          question: "Complete negative command: '___ się!' (Don't be late! - plural)",
          options: ["Nie spóźnij", "Nie spóźnijcie", "Nie spóźniajcie", "Nie spóźniaj"],
          correct: 1,
          explanation: "Plural negative imperative: 'Nie spóźnijcie się!'"
        },
        {
          question: "How do you say 'I was afraid' (past tense, feminine)?",
          options: ["Bałem się", "Bałam się", "Boję się", "Będę się bać"],
          correct: 1,
          explanation: "Feminine past: 'Bałam się' (-łam for feminine 'I')."
        }
      ],

      advanced: [
        {
          question: "Complete: 'Wczoraj ___ do egzaminu całą noc.' (Yesterday I prepared - past, feminine)",
          options: ["przygotowałem się", "przygotowałam się", "przygotowuję się", "przygotuję się"],
          correct: 1,
          explanation: "Feminine past: 'przygotowałam się' (feminine speaker)."
        },
        {
          question: "What's the future tense alternative to 'Będę się myć'?",
          options: ["Myję się", "Będę się mył/myła", "Myłem się", "Myj się"],
          correct: 1,
          explanation: "Both forms are correct: 'będę się myć' OR 'będę się mył/myła' (with past participle)."
        },
        {
          question: "Complete: 'Oni ___ polityką przez całe życie.' (They were interested - past, masculine)",
          options: ["interesowali się", "interesowały się", "interesują się", "interesowałem się"],
          correct: 0,
          explanation: "Masculine personal plural: 'interesowali się'."
        },
        {
          question: "How do you say 'We agreed' (past tense, all women)?",
          options: ["Zgadzaliśmy się", "Zgadzałyśmy się", "Zgadzamy się", "Zgodziliśmy się"],
          correct: 1,
          explanation: "Feminine plural 'we': 'Zgadzałyśmy się' (-łyśmy for feminine)."
        },
        {
          question: "Complete formal imperative: '___!' (Please don't worry! - formal singular)",
          options: ["Niech się pan/pani nie martwi", "Nie martw się", "Nie martwcie się", "Nie martwi się"],
          correct: 0,
          explanation: "Formal: 'Niech się pan/pani nie martwi!' (using 'niech' construction)."
        },
        {
          question: "What does 'Dziecko myło się' tell you?",
          options: ["Past tense, neuter subject", "Present tense, child", "Future tense", "Imperative mood"],
          correct: 0,
          explanation: "'-ło' ending indicates neuter singular past: 'The child washed itself'."
        },
        {
          question: "Complete: 'Wy ___ wczoraj wieczorem?' (Did you (plural, mixed) meet yesterday evening?)",
          options: ["spotykaliście się", "spotykałyście się", "spotykaliśmy się", "spotykały się"],
          correct: 0,
          explanation: "Masculine personal 'you plural': 'spotykaliście się' (mixed/masculine group)."
        },
        {
          question: "How do you say 'They will take care' (future, feminine group)?",
          options: ["Zajmują się", "Będą się zajmować", "Zajmowały się", "Zajmowali się"],
          correct: 1,
          explanation: "Future is same for all genders: 'Będą się zajmować'."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "Wczoraj ja ___ o szóstej.",
          english: "Yesterday I woke up at six. (masculine)",
          blank: 2,
          options: ["budzę się", "budziłem się", "budziłam się", "będę się budzić"],
          correct: 1,
          explanation: "Past tense masculine: 'budziłem się'."
        },
        {
          polish: "Ona ___ wczoraj.",
          english: "She studied yesterday.",
          blank: 1,
          options: ["uczy się", "uczyła się", "uczył się", "uczyło się"],
          correct: 1,
          explanation: "Past tense feminine: 'uczyła się' (-ła ending)."
        },
        {
          polish: "Ja ___ jutro o siódmej.",
          english: "I will wake up tomorrow at seven.",
          blank: 1,
          options: ["budzę się", "budziłem się", "będę się budzić", "budziłam się"],
          correct: 2,
          explanation: "Future tense: 'będę się budzić'."
        },
        {
          polish: "___!",
          english: "Wash yourself! (singular command)",
          blank: 0,
          options: ["Myj się", "Myje się", "Myłem się", "Będę się myć"],
          correct: 0,
          explanation: "Imperative: 'Myj się!'"
        },
        {
          polish: "___!",
          english: "Don't worry! (singular)",
          blank: 0,
          options: ["Nie martw się", "Nie martwię się", "Martwię się", "Martw się"],
          correct: 0,
          explanation: "Negative imperative: 'Nie martw się!'"
        },
        {
          polish: "On ___ codziennie rano.",
          english: "He shaved every morning. (past)",
          blank: 1,
          options: ["goli się", "golił się", "goliła się", "będzie się golić"],
          correct: 1,
          explanation: "Past tense masculine: 'golił się'."
        },
        {
          polish: "My ___ jutro.",
          english: "We will meet tomorrow.",
          blank: 1,
          options: ["spotykamy się", "spotykaliśmy się", "będziemy się spotykać", "spotykałyśmy się"],
          correct: 2,
          explanation: "Future: 'będziemy się spotykać'."
        },
        {
          polish: "Ja ___ wczoraj.",
          english: "I was happy yesterday. (feminine)",
          blank: 1,
          options: ["cieszę się", "cieszyłam się", "cieszyłem się", "będę się cieszyć"],
          correct: 1,
          explanation: "Past tense feminine: 'cieszyłam się'."
        }
      ],

      intermediate: [
        {
          polish: "Oni ___ wczoraj wieczorem.",
          english: "They met yesterday evening. (masculine group)",
          blank: 1,
          options: ["spotykają się", "spotykali się", "spotykały się", "spotykaliśmy się"],
          correct: 1,
          explanation: "Masculine personal plural past: 'spotykali się'."
        },
        {
          polish: "Dziewczyny ___ cały dzień.",
          english: "The girls studied all day. (past)",
          blank: 1,
          options: ["uczą się", "uczyły się", "uczyli się", "uczyliśmy się"],
          correct: 1,
          explanation: "Feminine plural past: 'uczyły się'."
        },
        {
          polish: "Ty ___ o piątej jutro?",
          english: "Will you wake up at five tomorrow?",
          blank: 1,
          options: ["budzisz się", "budziłeś się", "będziesz się budzić", "będziesz się budził"],
          correct: 2,
          explanation: "Future: 'będziesz się budzić' (infinitive form is most common)."
        },
        {
          polish: "___!",
          english: "Don't be late! (plural)",
          blank: 0,
          options: ["Nie spóźnij się", "Nie spóźnijcie się", "Nie spóźniaj się", "Spóźnijcie się"],
          correct: 1,
          explanation: "Plural negative imperative: 'Nie spóźnijcie się!'"
        },
        {
          polish: "My ___ wczoraj do testu.",
          english: "We prepared for the test yesterday. (feminine group)",
          blank: 1,
          options: ["przygotowujemy się", "przygotowałyśmy się", "przygotowaliśmy się", "przygotują się"],
          correct: 1,
          explanation: "Feminine plural 'we': 'przygotowałyśmy się'."
        },
        {
          polish: "Wy ___ jutro?",
          english: "Will you (plural) agree tomorrow?",
          blank: 1,
          options: ["zgadzacie się", "zgadzaliście się", "będziecie się zgadzać", "zgadzałyście się"],
          correct: 2,
          explanation: "Future: 'będziecie się zgadzać'."
        },
        {
          polish: "Dzieci ___ bardzo wczoraj.",
          english: "The children were very happy yesterday.",
          blank: 1,
          options: ["cieszą się", "cieszyły się", "cieszyli się", "cieszymy się"],
          correct: 1,
          explanation: "Neuter plural past: 'cieszyły się'."
        },
        {
          polish: "___!",
          english: "Let's wash! (inclusive command)",
          blank: 0,
          options: ["Myj się", "Myjcie się", "Myjmy się", "Myje się"],
          correct: 2,
          explanation: "Inclusive imperative: 'Myjmy się!'"
        }
      ],

      advanced: [
        {
          polish: "Studenci ___ do egzaminu całą noc.",
          english: "The students prepared for the exam all night. (past)",
          blank: 1,
          options: ["przygotowują się", "przygotowali się", "przygotowały się", "przygotowaliśmy się"],
          correct: 1,
          explanation: "Masculine personal plural: 'przygotowali się'."
        },
        {
          polish: "Wczoraj ja ___ muzyką klasyczną.",
          english: "Yesterday I was interested in classical music. (past, feminine)",
          blank: 2,
          options: ["interesuję się", "interesowałem się", "interesowałam się", "będę się interesować"],
          correct: 2,
          explanation: "Feminine past: 'interesowałam się'."
        },
        {
          polish: "One ___ dziećmi przez całe życie.",
          english: "They took care of children all their lives. (women)",
          blank: 1,
          options: ["zajmują się", "zajmowały się", "zajmowali się", "zajmowaliśmy się"],
          correct: 1,
          explanation: "Feminine plural past: 'zajmowały się'."
        },
        {
          polish: "___!",
          english: "Please don't worry! (formal, singular)",
          blank: 0,
          options: ["Niech się pan/pani nie martwi", "Nie martw się", "Nie martwcie się", "Pan/Pani nie martwi się"],
          correct: 0,
          explanation: "Formal imperative: 'Niech się pan/pani nie martwi!'"
        },
        {
          polish: "My ___ z nimi jutro.",
          english: "We will agree with them tomorrow.",
          blank: 1,
          options: ["zgadzamy się", "zgadzaliśmy się", "będziemy się zgadzać", "zgadzałyśmy się"],
          correct: 2,
          explanation: "Future: 'będziemy się zgadzać'."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the tense with its example",
          pairs: [
            { polish: "Uczę się", english: "Present tense" },
            { polish: "Uczyłem się", english: "Past tense (masculine)" },
            { polish: "Uczyłam się", english: "Past tense (feminine)" },
            { polish: "Będę się uczyć", english: "Future tense" },
            { polish: "Ucz się!", english: "Imperative (command)" },
            { polish: "Nie ucz się!", english: "Negative imperative" },
            { polish: "Uczyliśmy się", english: "Past tense (we - masculine)" },
            { polish: "Uczyli się", english: "Past tense (they - masculine)" }
          ]
        },
        {
          instruction: "Match the gender with its past tense ending",
          pairs: [
            { polish: "Masculine 'I'", english: "-łem się" },
            { polish: "Feminine 'I'", english: "-łam się" },
            { polish: "Masculine 'he'", english: "-ł się" },
            { polish: "Feminine 'she'", english: "-ła się" },
            { polish: "Neuter 'it'", english: "-ło się" },
            { polish: "Masculine plural 'we'", english: "-liśmy się" },
            { polish: "Feminine plural 'we'", english: "-łyśmy się" },
            { polish: "Masculine plural 'they'", english: "-li się" }
          ]
        }
      ]
    }
  }
];
