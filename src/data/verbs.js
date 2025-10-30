export const verbs = [
  {
    name: "Verb Aspects",
    topic: "Perfective vs Imperfective",
    difficulty: "intermediate",
    icon: "⚡",
    explanation:
      "Polish verbs come in PAIRS - most verbs have two forms called aspects. This is one of the trickiest parts of Polish!",
    analogy:
      "Think of it like a movie: Imperfective = watching the whole movie (ongoing action). Perfective = just the ending scene (completed action).",
    aspectPairs: [
      { imperfective: "robić", perfective: "zrobić", english: "to do/make" },
      { imperfective: "pisać", perfective: "napisać", english: "to write" },
    ],
    quiz: {
      beginner: [
        {
          question:
            "Which verb do you use? 'Yesterday I ___ a letter (and finished it)'",
          options: ["pisałem (imperfective)", "napisałem (perfective)"],
          correct: 1,
          explanation:
            "Use perfective 'napisałem' because the action was completed.",
        },
      ],
      intermediate: [
        {
          question: "Which verb? 'I ___ books every day (regularly)'",
          options: ["czytam (imperfective)", "przeczytam (perfective)"],
          correct: 0,
          explanation: "Use imperfective 'czytam' for repeated actions.",
        },
      ],
      advanced: [
        {
          question:
            "Which verb? 'Tomorrow I will ___ the whole book (complete it)'",
          options: ["będę czytać (imperfective)", "przeczytam (perfective)"],
          correct: 1,
          explanation:
            "Use perfective 'przeczytam' for completed future action.",
        },
      ],
    },
  },
  {
    name: "Present Tense",
    topic: "Present Tense Conjugation",
    difficulty: "beginner",
    icon: "🕐",
    explanation:
      "Present tense in Polish is used for actions happening NOW. Only imperfective verbs have present tense!",
    analogy:
      "Like taking a photo of what's happening right now - the action is in progress.",
    conjugationTable: {
      verb: "robić (to do/make - imperfective)",
      forms: [
        { pronoun: "ja", form: "robię", english: "I do/am doing" },
        { pronoun: "ty", form: "robisz", english: "you do/are doing" },
        { pronoun: "on/ona/ono", form: "robi", english: "he/she/it does" },
        { pronoun: "my", form: "robimy", english: "we do/are doing" },
        { pronoun: "wy", form: "robicie", english: "you (plural) do" },
        { pronoun: "oni/one", form: "robią", english: "they do/are doing" },
      ],
    },
    patterns: [
      {
        name: "-ać verbs (like czytać)",
        example:
          "czytać → czytam, czytasz, czyta, czytamy, czytacie, czytają",
      },
      {
        name: "-ić/-yć verbs (like mówić)",
        example: "mówić → mówię, mówisz, mówi, mówimy, mówicie, mówią",
      },
    ],
    quiz: {
      beginner: [
        {
          question: "Conjugate 'pisać' (to write) for 'ja' (I)",
          options: ["piszę", "pisam", "pisze", "piszą"],
          correct: 0,
          explanation: "ja piszę - I write/am writing",
        },
        {
          question: "Conjugate 'czytać' (to read) for 'ty' (you)",
          options: ["czytam", "czytasz", "czyta", "czytają"],
          correct: 1,
          explanation: "ty czytasz - you read/are reading",
        },
      ],
      intermediate: [
        {
          question: "Conjugate 'robić' (to do) for 'oni' (they)",
          options: ["robi", "robią", "robimy", "robicie"],
          correct: 1,
          explanation: "oni robią - they do/are doing",
        },
        {
          question: "Conjugate 'mówić' (to speak) for 'my' (we)",
          options: ["mówię", "mówisz", "mówimy", "mówią"],
          correct: 2,
          explanation: "my mówimy - we speak/are speaking",
        },
      ],
      advanced: [
        {
          question: "Conjugate 'jeść' (to eat - irregular) for 'ja' (I)",
          options: ["jem", "jesz", "jedzę", "jedziem"],
          correct: 0,
          explanation: "jeść is irregular: ja jem (I eat)",
        },
      ],
    },
  },
  {
    name: "Past Tense",
    topic: "Past Tense Conjugation",
    difficulty: "intermediate",
    icon: "⏮️",
    explanation:
      "Past tense in Polish agrees with gender! Male, female, and neuter forms are different. Both aspects can be used.",
    analogy:
      "Like looking at old photos - the action already happened. But you choose the aspect based on whether it was completed or ongoing.",
    conjugationTable: {
      verb: "zrobić (to do/make - perfective)",
      forms: [
        { pronoun: "ja (m)", form: "zrobiłem", english: "I did (male)" },
        { pronoun: "ja (f)", form: "zrobiłam", english: "I did (female)" },
        { pronoun: "ty (m)", form: "zrobiłeś", english: "you did (male)" },
        { pronoun: "ty (f)", form: "zrobiłaś", english: "you did (female)" },
        { pronoun: "on", form: "zrobił", english: "he did" },
        { pronoun: "ona", form: "zrobiła", english: "she did" },
        { pronoun: "ono", form: "zrobiło", english: "it did" },
        {
          pronoun: "my (m)",
          form: "zrobiliśmy",
          english: "we did (male group)",
        },
        {
          pronoun: "my (f)",
          form: "zrobiłyśmy",
          english: "we did (female group)",
        },
        { pronoun: "oni", form: "zrobili", english: "they did (male/mixed)" },
        { pronoun: "one", form: "zrobiły", english: "they did (female)" },
      ],
    },
    genderNote:
      "IMPORTANT: The ending changes based on who is doing the action! -łem/-łam for 'I', -łeś/-łaś for 'you', etc.",
    quiz: {
      beginner: [
        {
          question: "Complete: 'Ja (male) ___ zadanie.' (I did the homework)",
          options: ["zrobiłem", "zrobiłam", "zrobił", "zrobiła"],
          correct: 0,
          explanation: "Male speaker uses -łem: zrobiłem",
        },
        {
          question: "Complete: 'Ona ___ obiad.' (She cooked dinner)",
          options: ["gotował", "gotowała", "gotowali", "gotowały"],
          correct: 1,
          explanation: "Feminine singular: gotowała (she cooked)",
        },
      ],
      intermediate: [
        {
          question: "Complete: 'Oni ___ film.' (They watched a movie)",
          options: ["oglądał", "oglądała", "oglądali", "oglądały"],
          correct: 2,
          explanation: "Masculine/mixed group uses -li: oglądali",
        },
        {
          question:
            "Complete: 'Ty (female) ___ książkę?' (Did you read the book?)",
          options: [
            "przeczytałem",
            "przeczytałeś",
            "przeczytałam",
            "przeczytałaś",
          ],
          correct: 3,
          explanation: "Female 'you' (ty) uses -łaś: przeczytałaś",
        },
      ],
      advanced: [
        {
          question:
            "Complete: 'My (all female) ___ do kina.' (We went to the cinema)",
          options: ["poszliśmy", "poszłyśmy", "poszli", "poszły"],
          correct: 1,
          explanation: "All-female 'we' uses -łyśmy: poszłyśmy",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Wczoraj ja (m) ___ film.",
          correct: "oglądałem",
          options: ["oglądałem", "oglądałam", "oglądał", "oglądała"],
          verb: "oglądać (to watch)",
          english: "Yesterday I (male) watched a movie.",
          pronoun: "ja (I - male)",
        },
      ],
      intermediate: [
        {
          sentence: "Ona ___ list.",
          correct: "napisała",
          options: ["napisał", "napisała", "napisałem", "napisałam"],
          verb: "napisać (to write - perfective)",
          english: "She wrote a letter.",
          pronoun: "ona (she)",
        },
      ],
      advanced: [
        {
          sentence: "One (women) ___ w parku.",
          correct: "biegały",
          options: ["biegał", "biegali", "biegała", "biegały"],
          verb: "biegać (to run)",
          english: "They (women) were running in the park.",
          pronoun: "one (they - female)",
        },
      ],
    },
  },
  {
    name: "Future Tense",
    topic: "Future Tense Formation",
    difficulty: "intermediate",
    icon: "⏭️",
    explanation:
      "Future tense has TWO ways to form it! Perfective verbs form future simply. Imperfective verbs need a helper verb.",
    analogy:
      "Like planning ahead - perfective is 'I will do it (and finish)', imperfective is 'I will be doing it (ongoing)'.",
    details: [
      {
        title: "Perfective Future (Simple)",
        description:
          "Just conjugate the perfective verb - it automatically means future!",
        examples: [
          "Przeczytam książkę. (I will read the book)",
          "Napiszę list. (I will write a letter)",
          "Kupię chleb. (I will buy bread)",
        ],
      },
      {
        title: "Imperfective Future (Compound)",
        description: "Use 'będę' (will be) + infinitive OR past form",
        examples: [
          "Będę czytać książkę. (I will be reading a book)",
          "Będę pisał/pisała listy. (I will be writing letters)",
          "Będziemy robić zakupy. (We will be shopping)",
        ],
      },
    ],
    conjugationTable: {
      helper: "być (to be) - future forms",
      forms: [
        { pronoun: "ja", form: "będę", english: "I will be" },
        { pronoun: "ty", form: "będziesz", english: "you will be" },
        {
          pronoun: "on/ona/ono",
          form: "będzie",
          english: "he/she/it will be",
        },
        { pronoun: "my", form: "będziemy", english: "we will be" },
        { pronoun: "wy", form: "będziecie", english: "you (plural) will be" },
        { pronoun: "oni/one", form: "będą", english: "they will be" },
      ],
    },
    quiz: {
      beginner: [
        {
          question: "Future: 'I will read the book (and finish it)'",
          options: ["będę czytać", "przeczytam", "czytam", "czytałem"],
          correct: 1,
          explanation:
            "Use perfective 'przeczytam' for completed future action.",
        },
        {
          question:
            "Which form is correct? 'Jutro ___ do sklepu' (Tomorrow I will go to the store)",
          options: ["idę", "pójdę", "będę iść", "szedłem"],
          correct: 1,
          explanation: "Perfective future: pójdę (I will go - and arrive)",
        },
      ],
      intermediate: [
        {
          question: "Future: 'Tomorrow I will be studying (all day)'",
          options: [
            "nauczę się",
            "będę się uczyć",
            "uczę się",
            "uczyłem się",
          ],
          correct: 1,
          explanation:
            "Use imperfective 'będę się uczyć' for ongoing future action.",
        },
        {
          question:
            "Complete: 'Wieczorem oni ___ telewizję' (In the evening they will watch TV)",
          options: ["oglądają", "będą oglądać", "obejrzą", "oglądali"],
          correct: 1,
          explanation: "Imperfective future: będą oglądać (will be watching)",
        },
      ],
      advanced: [
        {
          question:
            "Which is correct? 'Za rok ___ nowy dom' (In a year we will build a new house - completed)",
          options: [
            "budujemy",
            "będziemy budować",
            "zbudujemy",
            "budowaliśmy",
          ],
          correct: 2,
          explanation: "Perfective future for completed action: zbudujemy",
        },
      ],
    },
    fillBlanks: {
      beginner: [
        {
          sentence: "Jutro ja ___ zakupy.",
          correct: "zrobię",
          options: ["robię", "zrobię", "będę robić", "robiłem"],
          verb: "zrobić (to do - perfective)",
          english: "Tomorrow I will do shopping (and finish).",
          aspect: "perfective",
        },
      ],
      intermediate: [
        {
          sentence: "Wieczorem my ___ film.",
          correct: "będziemy oglądać",
          options: [
            "oglądamy",
            "obejrzymy",
            "będziemy oglądać",
            "oglądaliśmy",
          ],
          verb: "oglądać (to watch - imperfective)",
          english: "In the evening we will be watching a movie.",
          aspect: "imperfective",
        },
      ],
      advanced: [
        {
          sentence: "W przyszłym roku oni ___ do Francji.",
          correct: "pojadą",
          options: ["jadą", "pojadą", "będą jechać", "jechali"],
          verb: "pojechać (to go - perfective)",
          english: "Next year they will go to France.",
          aspect: "perfective",
        },
      ],
    },
  },
  {
    name: "Common Verbs",
    topic: "Most Used Polish Verbs",
    difficulty: "beginner",
    icon: "⭐",
    explanation:
      "Master these essential verbs and you'll be able to have basic conversations!",
    analogy:
      "These are like the 'greatest hits' - the verbs you'll use every single day.",
    commonVerbs: [
      {
        imperfective: "być",
        perfective: "—",
        english: "to be",
        present: "jestem, jesteś, jest, jesteśmy, jesteście, są",
        note: "Most important verb! Irregular.",
      },
      {
        imperfective: "mieć",
        perfective: "—",
        english: "to have",
        present: "mam, masz, ma, mamy, macie, mają",
        note: "Essential for possession",
      },
      {
        imperfective: "móc",
        perfective: "—",
        english: "can/to be able",
        present: "mogę, możesz, może, możemy, możecie, mogą",
        note: "Modal verb for ability",
      },
      {
        imperfective: "chcieć",
        perfective: "—",
        english: "to want",
        present: "chcę, chcesz, chce, chcemy, chcecie, chcą",
        note: "Express desires",
      },
      {
        imperfective: "wiedzieć",
        perfective: "dowiedzieć się",
        english: "to know (facts)",
        present: "wiem, wiesz, wie, wiemy, wiecie, wiedzą",
        note: "For factual knowledge",
      },
      {
        imperfective: "znać",
        perfective: "poznać",
        english: "to know (people/places)",
        present: "znam, znasz, zna, znamy, znacie, znają",
        note: "For familiarity",
      },
      {
        imperfective: "iść",
        perfective: "pójść",
        english: "to go (on foot)",
        present: "idę, idziesz, idzie, idziemy, idziecie, idą",
        note: "Very irregular!",
      },
      {
        imperfective: "jechać",
        perfective: "pojechać",
        english: "to go (by vehicle)",
        present: "jadę, jedziesz, jedzie, jedziemy, jedziecie, jadą",
        note: "For transport",
      },
    ],
    quiz: {
      beginner: [
        {
          question: "Complete: 'Ja ___ student.' (I am a student)",
          options: ["mam", "jestem", "będę", "mogę"],
          correct: 1,
          explanation: "Use 'jestem' (I am) from the verb 'być'.",
        },
        {
          question: "Complete: 'Czy ty ___ psa?' (Do you have a dog?)",
          options: ["jesteś", "masz", "możesz", "chcesz"],
          correct: 1,
          explanation: "Use 'masz' (you have) from the verb 'mieć'.",
        },
      ],
      intermediate: [
        {
          question: "Complete: 'Czy ty ___ po polsku?' (Do you know Polish?)",
          options: ["wiesz", "znasz", "umiesz", "możesz"],
          correct: 1,
          explanation: "Use 'znasz' for knowing a language (familiarity).",
        },
        {
          question: "Complete: 'Nie ___ dziś przyjść' (I can't come today)",
          options: ["chcę", "mogę", "muszę", "wiem"],
          correct: 1,
          explanation: "Use 'mogę' (I can) - negative: nie mogę (I can't)",
        },
      ],
      advanced: [
        {
          question:
            "Complete: 'Oni już ___ do domu' (They are already going home - on foot)",
          options: ["jadą", "idą", "chodzą", "biegną"],
          correct: 1,
          explanation:
            "Use 'idą' (they are going) from 'iść' for going on foot.",
        },
      ],
    },
  },
];
