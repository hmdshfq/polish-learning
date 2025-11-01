export const b1Conditionals = [
  {
    name: "Conditional Sentences - Real Conditions",
    polish: "Zdania warunkowe - warunki realne",
    difficulty: "advanced",
    level: "B1",
    icon: "🔀",

    explanation: "Master the art of expressing conditions and hypothetical situations in Polish! Conditional sentences allow you to talk about cause and effect, make predictions, express wishes, and discuss hypothetical scenarios. Polish has several types of conditionals, from simple real conditions (if it rains, I'll stay home) to complex unreal conditions (if I had studied more, I would have passed). Understanding conditionals is crucial for sophisticated communication, as they appear constantly in academic, professional, and everyday conversations about possibilities, consequences, and alternatives.",

    analogy: "Think of conditionals like a GPS navigation system for language. Just as GPS tells you 'IF you take this route, THEN you'll arrive in 20 minutes' or 'IF there's traffic, THEN we'll find an alternative route,' conditionals help you navigate through possibilities and consequences in conversation. A1-A2 taught you to state facts ('It's raining'), but B1 conditionals let you explore alternatives ('IF it rains, THEN we'll cancel the picnic'). It's like upgrading from basic directions to having a smart navigation system that can handle complex scenarios!",

    conditionalTypes: {
      title: "Types of Conditional Sentences in Polish",
      types: [
        {
          type: "Zero Conditional",
          description: "General truths, scientific facts",
          structure: "Jeśli + present, present",
          example: "Jeśli woda osiągnie 100°C, wrze.",
          exampleEng: "If water reaches 100°C, it boils.",
          use: "Always true situations, laws of nature"
        },
        {
          type: "First Conditional",
          description: "Real future possibilities",
          structure: "Jeśli + present, future",
          example: "Jeśli będzie słońce, pójdziemy na plażę.",
          exampleEng: "If it's sunny, we'll go to the beach.",
          use: "Likely future events, plans, predictions"
        },
        {
          type: "Second Conditional",
          description: "Unreal present situations",
          structure: "Gdyby + past, conditional mood",
          example: "Gdybym miał pieniądze, kupiłbym samochód.",
          exampleEng: "If I had money, I would buy a car.",
          use: "Hypothetical present, unlikely situations, wishes"
        },
        {
          type: "Third Conditional",
          description: "Unreal past situations",
          structure: "Gdyby + past perfect, conditional perfect",
          example: "Gdybym się uczył, zdałbym egzamin.",
          exampleEng: "If I had studied, I would have passed the exam.",
          use: "Regrets, criticism, alternative past scenarios"
        },
        {
          type: "Mixed Conditional",
          description: "Past condition, present result",
          structure: "Gdyby + past, conditional present",
          example: "Gdybym się więcej uczył, teraz byłbym lekarzem.",
          exampleEng: "If I had studied more, I would be a doctor now.",
          use: "Past actions affecting present state"
        }
      ]
    },

    conditionalWords: {
      title: "Conditional Conjunctions and Their Uses",
      conjunctions: [
        {
          word: "jeśli",
          english: "if",
          usage: "Most common, neutral, real conditions",
          examples: [
            { polish: "Jeśli masz czas, zadzwoń.", english: "If you have time, call." },
            { polish: "Przyjdę, jeśli będziesz potrzebować pomocy.", english: "I'll come if you need help." }
          ]
        },
        {
          word: "gdy",
          english: "when, if",
          usage: "More formal, often for time conditions",
          examples: [
            { polish: "Gdy skończysz pracę, porozmawiamy.", english: "When you finish work, we'll talk." },
            { polish: "Gdy pada deszcz, zostaję w domu.", english: "When it rains, I stay home." }
          ]
        },
        {
          word: "gdyby",
          english: "if (hypothetical)",
          usage: "Unreal conditions, wishes, hypothetical scenarios",
          examples: [
            { polish: "Gdyby miał więcej czasu, więcej by czytał.", english: "If he had more time, he would read more." },
            { polish: "Gdybym był bogaty, podróżowałbym po świecie.", english: "If I were rich, I would travel the world." }
          ]
        },
        {
          word: "pod warunkiem, że",
          english: "provided that, on condition that",
          usage: "Formal conditions, requirements",
          examples: [
            { polish: "Zgadzam się, pod warunkiem, że zapłacisz.", english: "I agree, provided that you pay." },
            { polish: "Możesz wyjść, pod warunkiem, że skończysz zadanie.", english: "You can go out, on condition that you finish the task." }
          ]
        },
        {
          word: "w przypadku, gdy",
          english: "in case, if",
          usage: "Formal, precautionary conditions",
          examples: [
            { polish: "W przypadku, gdy nie przyjdę, zacznijcie beze mnie.", english: "In case I don't come, start without me." },
            { polish: "W przypadku, gdy będzie problem, zadzwoń.", english: "In case there's a problem, call." }
          ]
        },
        {
          word: "nawet jeśli",
          english: "even if",
          usage: "Emphasizing that condition doesn't matter",
          examples: [
            { polish: "Pójdę tam, nawet jeśli będzie padać.", english: "I'll go there, even if it's raining." },
            { polish: "Nawet jeśli się spóźnię, i tak przyjdę.", english: "Even if I'm late, I'll still come." }
          ]
        }
      ]
    },

    conditionalMood: {
      title: "Conditional Mood Formation",
      description: "The conditional mood (tryb warunkowy) is formed by adding conditional particles to verb forms. It expresses hypothetical actions, polite requests, and uncertain statements.",
      formation: [
        {
          type: "Present Conditional",
          pattern: "Past tense form + conditional particles (bym, byś, by, byśmy, byście, by)",
          examples: [
            { pronoun: "ja", form: "robiłbym / robiłabym", english: "I would do (m/f)" },
            { pronoun: "ty", form: "robiłbyś / robiłabyś", english: "you would do (m/f)" },
            { pronoun: "on/ona", form: "robiłby / robiłaby", english: "he/she would do" },
            { pronoun: "my", form: "robilibyśmy / robiłybyśmy", english: "we would do (m/f group)" },
            { pronoun: "wy", form: "robilibyście / robiłybyście", english: "you (plural) would do (m/f group)" },
            { pronoun: "oni/one", form: "robiliby / robiłyby", english: "they would do (m/f group)" }
          ]
        },
        {
          type: "Perfect Conditional",
          pattern: "Past tense form + conditional particles + 'był/była/było'",
          examples: [
            { pronoun: "ja", form: "zrobiłbym był / zrobiłabym była", english: "I would have done (m/f)" },
            { pronoun: "on/ona", form: "zrobiłby był / zrobiłaby była", english: "he/she would have done" }
          ],
          note: "Often simplified to just past tense + conditional particles in spoken Polish"
        }
      ],
      conditionalParticles: {
        title: "Conditional Particles Position",
        rules: [
          {
            rule: "After the verb (most common)",
            examples: [
              { polish: "Poszedłbym tam.", english: "I would go there." },
              { polish: "Kupiłaby to.", english: "She would buy it." }
            ]
          },
          {
            rule: "After the first stressed word in sentence",
            examples: [
              { polish: "Wczoraj bym poszedł.", english: "I would have gone yesterday." },
              { polish: "To by było świetne.", english: "That would be great." }
            ]
          },
          {
            rule: "After question words",
            examples: [
              { polish: "Co byś zrobił?", english: "What would you do?" },
              { polish: "Gdzie byśmy się spotkali?", english: "Where would we meet?" }
            ]
          }
        ]
      }
    },

    commonPatterns: [
      {
        pattern: "Expressing wishes",
        structure: "Chciałbym / Wolałbym + infinitive",
        examples: [
          { polish: "Chciałbym nauczyć się hiszpańskiego.", english: "I would like to learn Spanish." },
          { polish: "Wolałbym zostać w domu.", english: "I would prefer to stay home." },
          { polish: "Chciałaby wyjechać na wakacje.", english: "She would like to go on vacation." }
        ]
      },
      {
        pattern: "Polite requests",
        structure: "Czy mógłby/mogłaby Pan/Pani...?",
        examples: [
          { polish: "Czy mógłby Pan mi pomóc?", english: "Could you help me?" },
          { polish: "Czy mogłaby Pani otworzyć okno?", english: "Could you open the window?" },
          { polish: "Czy moglibyście Państwo poczekać?", english: "Could you wait?" }
        ]
      },
      {
        pattern: "Hypothetical advice",
        structure: "Na Twoim miejscu + conditional",
        examples: [
          { polish: "Na twoim miejscu poszedłbym do lekarza.", english: "If I were you, I would go to the doctor." },
          { polish: "Na twoim miejscu nie robiłabym tego.", english: "If I were you, I wouldn't do that." },
          { polish: "Na waszym miejscu byśmy się przeprowadzili.", english: "If we were you, we would move." }
        ]
      },
      {
        pattern: "Regrets and criticism",
        structure: "Powinieneś/Powinnaś był/była + infinitive",
        examples: [
          { polish: "Powinieneś był się więcej uczyć.", english: "You should have studied more." },
          { polish: "Powinniśmy byli wyjść wcześniej.", english: "We should have left earlier." },
          { polish: "Nie powinnaś była tego mówić.", english: "You shouldn't have said that." }
        ]
      }
    ],

    quiz: {
      beginner: [
        {
          question: "Complete: 'Jeśli będzie słońce, ___ na plażę.' (If it's sunny, we'll go to the beach)",
          options: ["idziemy", "pójdziemy", "szliśmy", "chodziliśmy"],
          correct: 1,
          explanation: "First conditional uses future tense: 'pójdziemy' (we'll go)."
        },
        {
          question: "How do you say 'If I had money, I would buy a car'?",
          options: ["Jeśli mam pieniądze, kupię samochód", "Gdybym miał pieniądze, kupiłbym samochód", "Gdy będę miał pieniądze, kupię samochód", "Jeśli miałem pieniądze, kupiłem samochód"],
          correct: 1,
          explanation: "Second conditional uses 'gdyby' + conditional mood for unreal present situations."
        },
        {
          question: "What does 'Chciałbym nauczyć się hiszpańskiego' mean?",
          options: ["I learned Spanish", "I want to learn Spanish", "I would like to learn Spanish", "I am learning Spanish"],
          correct: 2,
          explanation: "'Chciałbym' is conditional mood expressing a polite wish: 'I would like to'."
        },
        {
          question: "Complete: '___ miał więcej czasu, więcej by czytał.' (If he had more time, he would read more)",
          options: ["Jeśli", "Gdy", "Gdyby", "Kiedy"],
          correct: 2,
          explanation: "'Gdyby' is used for hypothetical/unreal conditions."
        },
        {
          question: "How do you ask 'Could you help me?' politely?",
          options: ["Możesz mi pomóc?", "Czy mógłbyś mi pomóc?", "Pomóż mi!", "Czy pomożesz mi?"],
          correct: 1,
          explanation: "'Czy mógłbyś mi pomóc?' uses conditional mood for polite requests."
        },
        {
          question: "What type of conditional is 'Jeśli pada deszcz, zostaję w domu'?",
          options: ["Zero conditional", "First conditional", "Second conditional", "Third conditional"],
          correct: 0,
          explanation: "Zero conditional expresses general truths and habits (present + present)."
        },
        {
          question: "Complete: 'Na twoim miejscu ___ do lekarza.' (If I were you, I would go to the doctor)",
          options: ["idę", "pójdę", "poszedłbym", "szedłem"],
          correct: 2,
          explanation: "'Na twoim miejscu poszedłbym' uses conditional mood for hypothetical advice."
        },
        {
          question: "What does 'nawet jeśli' mean?",
          options: ["if only", "even if", "as if", "only if"],
          correct: 1,
          explanation: "'Nawet jeśli' means 'even if' - emphasizing the condition doesn't matter."
        }
      ],

      intermediate: [
        {
          question: "Complete: 'Gdybym się ___, zdałbym egzamin.' (If I had studied, I would have passed)",
          options: ["uczę", "uczyłem", "uczył", "nauczył"],
          correct: 1,
          explanation: "Third conditional uses past tense after 'gdyby': 'gdybym się uczył'."
        },
        {
          question: "What's the difference between 'jeśli' and 'gdyby'?",
          options: ["No difference", "'jeśli' = real conditions, 'gdyby' = unreal conditions", "'gdyby' = formal, 'jeśli' = informal", "'jeśli' = past, 'gdyby' = present"],
          correct: 1,
          explanation: "'Jeśli' is for real/possible conditions, 'gdyby' for hypothetical/unreal ones."
        },
        {
          question: "Complete: 'Powinieneś ___ wyjść wcześniej.' (You should have left earlier)",
          options: ["był", "być", "będzie", "bądź"],
          correct: 0,
          explanation: "'Powinieneś był' expresses past obligation/regret: 'you should have'."
        },
        {
          question: "How do you say 'provided that you pay'?",
          options: ["jeśli zapłacisz", "pod warunkiem, że zapłacisz", "gdy zapłacisz", "gdybyś zapłacił"],
          correct: 1,
          explanation: "'Pod warunkiem, że' means 'provided that' - formal condition."
        },
        {
          question: "Complete: 'W przypadku, gdy nie przyjdę, ___ beze mnie.' (In case I don't come, start without me)",
          options: ["zaczęliście", "zacznijcie", "zaczniecie", "zaczynajcie"],
          correct: 1,
          explanation: "'Zacznijcie' is imperative (command form) for 'start' (you plural)."
        },
        {
          question: "What does 'Gdybym był bogaty, podróżowałbym po świecie' express?",
          options: ["Past fact", "Future plan", "Present reality", "Hypothetical situation"],
          correct: 3,
          explanation: "This is second conditional expressing an unreal/hypothetical present situation."
        },
        {
          question: "Complete conditional particle: 'Co ___ zrobił?' (What would you do?)",
          options: ["byś", "będziesz", "robisz", "zrobiłeś"],
          correct: 0,
          explanation: "'Co byś zrobił?' - conditional particle 'byś' after question word."
        },
        {
          question: "How do you express 'If we were you, we would move'?",
          options: ["Jeśli jesteśmy wami, przeprowadzamy się", "Na waszym miejscu przeprowadzilibyśmy się", "Gdy będziemy wami, przeprowadzimy się", "Gdybyśmy byli wami, przeprowadzamy się"],
          correct: 1,
          explanation: "'Na waszym miejscu' + conditional is the correct pattern for advice."
        }
      ],

      advanced: [
        {
          question: "Complete mixed conditional: 'Gdybym się więcej uczył, teraz ___ lekarzem.' (If I had studied more, I would be a doctor now)",
          options: ["byłem", "byłbym", "będę", "jestem"],
          correct: 1,
          explanation: "Mixed conditional: past condition ('gdybym się uczył') + present result ('byłbym')."
        },
        {
          question: "Which sentence uses third conditional correctly?",
          options: ["Gdybym miał pieniądze, kupiłbym samochód", "Gdybym miał pieniądze, kupiłbym był samochód", "Gdybym mieć pieniądze, kupiłbym samochód", "Gdybym będę miał pieniądze, kupię samochód"],
          correct: 1,
          explanation: "Third conditional can use 'kupiłbym był' (though 'kupiłbym' alone is more common)."
        },
        {
          question: "Complete: 'Wczoraj ___ poszedł, ale nie miałem czasu.' (I would have gone yesterday, but I didn't have time)",
          options: ["bym", "byłem", "byłbym", "będę"],
          correct: 0,
          explanation: "'Wczoraj bym poszedł' - conditional particle after the first stressed word."
        },
        {
          question: "What's the most natural way to say 'If I were rich' in Polish?",
          options: ["Jeśli jestem bogaty", "Gdybym był bogaty", "Gdy będę bogaty", "Jeśli byłem bogaty"],
          correct: 1,
          explanation: "'Gdybym był bogaty' correctly expresses unreal present condition."
        },
        {
          question: "Complete formal conditional: 'Czy mogłaby Pani ___ okno?' (Could you open the window?)",
          options: ["otwórz", "otworzyć", "otwiera", "otworzy"],
          correct: 1,
          explanation: "After modal verbs in conditional, use infinitive: 'mogłaby Pani otworzyć'."
        },
        {
          question: "How do you say 'She shouldn't have said that'?",
          options: ["Nie powinna tego mówić", "Nie powinnaś była tego mówić", "Nie powinnaś tego mówić", "Nie powinna była tego mówić"],
          correct: 3,
          explanation: "'Nie powinna była tego mówić' - third person feminine past obligation."
        },
        {
          question: "Complete: 'To ___ świetne!' (That would be great!)",
          options: ["było", "by było", "będzie", "jest"],
          correct: 1,
          explanation: "'To by było świetne!' - conditional particle after stressed word 'to'."
        },
        {
          question: "What does 'Wolałbym zostać w domu' express?",
          options: ["Strong desire", "Polite preference", "Past action", "Future plan"],
          correct: 1,
          explanation: "'Wolałbym' (I would prefer) expresses polite preference using conditional mood."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "Jeśli będzie słońce, ___ na plażę.",
          english: "If it's sunny, we'll go to the beach.",
          blank: 3,
          options: ["idziemy", "pójdziemy", "szliśmy", "chodzimy"],
          correct: 1,
          explanation: "First conditional uses future tense: 'pójdziemy'."
        },
        {
          polish: "Gdybym miał pieniądze, ___ samochód.",
          english: "If I had money, I would buy a car.",
          blank: 3,
          options: ["kupię", "kupiłbym", "kupowałem", "kupuję"],
          correct: 1,
          explanation: "Second conditional uses conditional mood: 'kupiłbym'."
        },
        {
          polish: "___ nauczyć się hiszpańskiego.",
          english: "I would like to learn Spanish.",
          blank: 0,
          options: ["Chciałbym", "Chcę", "Chciałem", "Będę chciał"],
          correct: 0,
          explanation: "'Chciałbym' is conditional mood for polite wishes."
        },
        {
          polish: "Czy ___ mi pomóc?",
          english: "Could you help me?",
          blank: 1,
          options: ["możesz", "mógłbyś", "pomoże", "pomagasz"],
          correct: 1,
          explanation: "'Mógłbyś' is conditional mood for polite requests."
        }
      ],

      intermediate: [
        {
          polish: "Gdybym się uczył, ___ egzamin.",
          english: "If I had studied, I would have passed the exam.",
          blank: 3,
          options: ["zdaję", "zdałbym", "zdawałem", "zdam"],
          correct: 1,
          explanation: "Third conditional uses conditional mood: 'zdałbym'."
        },
        {
          polish: "Na twoim miejscu ___ do lekarza.",
          english: "If I were you, I would go to the doctor.",
          blank: 3,
          options: ["idę", "pójdę", "poszedłbym", "chodzę"],
          correct: 2,
          explanation: "'Na twoim miejscu poszedłbym' - conditional for advice."
        },
        {
          polish: "Pod warunkiem, że ___, zgadzam się.",
          english: "Provided that you pay, I agree.",
          blank: 3,
          options: ["zapłacisz", "płacisz", "zapłaciłeś", "płaciłeś"],
          correct: 0,
          explanation: "'Pod warunkiem, że zapłacisz' - future after formal condition."
        },
        {
          polish: "Powinieneś ___ wyjść wcześniej.",
          english: "You should have left earlier.",
          blank: 1,
          options: ["być", "był", "będzie", "bądź"],
          correct: 1,
          explanation: "'Powinieneś był' expresses past obligation/regret."
        }
      ],

      advanced: [
        {
          polish: "Gdybym się więcej uczył, teraz ___ lekarzem.",
          english: "If I had studied more, I would be a doctor now.",
          blank: 4,
          options: ["jestem", "byłem", "byłbym", "będę"],
          correct: 2,
          explanation: "Mixed conditional: past condition, present result with 'byłbym'."
        },
        {
          polish: "Wczoraj ___ poszedł, ale nie miałem czasu.",
          english: "I would have gone yesterday, but I didn't have time.",
          blank: 1,
          options: ["bym", "byłem", "będę", "jestem"],
          correct: 0,
          explanation: "'Wczoraj bym poszedł' - particle after stressed word."
        },
        {
          polish: "Nie powinna ___ tego mówić.",
          english: "She shouldn't have said that.",
          blank: 2,
          options: ["być", "była", "będzie", "jest"],
          correct: 1,
          explanation: "'Nie powinna była tego mówić' - past obligation."
        },
        {
          polish: "To ___ świetne!",
          english: "That would be great!",
          blank: 1,
          options: ["było", "by było", "będzie", "jest"],
          correct: 1,
          explanation: "'To by było świetne!' - conditional after 'to'."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          instruction: "Match the conditional type with its example",
          pairs: [
            { polish: "Jeśli pada, zostaję w domu", english: "Zero conditional" },
            { polish: "Jeśli będzie słońce, pójdziemy", english: "First conditional" },
            { polish: "Gdybym miał czas, pomógłbym", english: "Second conditional" },
            { polish: "Gdybym się uczył, zdałbym", english: "Third conditional" },
            { polish: "Chciałbym pojechać", english: "Conditional wish" },
            { polish: "Czy mógłbyś pomóc?", english: "Polite request" },
            { polish: "Na twoim miejscu poszedłbym", english: "Hypothetical advice" },
            { polish: "Powinieneś był to zrobić", english: "Past obligation/regret" }
          ]
        },
        {
          instruction: "Match the conditional conjunction with its meaning",
          pairs: [
            { polish: "jeśli", english: "if (real conditions)" },
            { polish: "gdyby", english: "if (hypothetical)" },
            { polish: "gdy", english: "when/if (formal)" },
            { polish: "pod warunkiem, że", english: "provided that" },
            { polish: "w przypadku, gdy", english: "in case" },
            { polish: "nawet jeśli", english: "even if" },
            { polish: "o ile", english: "as long as" },
            { polish: "chyba że", english: "unless" }
          ]
        }
      ]
    }
  }
];