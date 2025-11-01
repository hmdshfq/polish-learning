export const pronouns = [
  {
    name: "Personal Pronouns",
    polish: "Zaimki osobowe",
    difficulty: "beginner",
    level: "A1",
    icon: "👤",

    explanation: "Personal pronouns in Polish change their form depending on their role in the sentence. At the A1 level, we focus on two main forms: Nominative (who is doing the action) and Accusative (who/what receives the action). Unlike English where 'you' is always 'you', Polish has different words for singular 'you' (ty) and plural/formal 'you' (wy). The pronouns also have gender: 'on' (he/masculine), 'ona' (she/feminine), and 'ono' (it/neuter).",

    analogy: "Think of personal pronouns like actors on a stage. In Nominative case, they're the ones performing the action (the subject). In Accusative case, they're receiving the action (the direct object). Just like in English where 'I' becomes 'me' when receiving action ('He sees me'), Polish pronouns also change form, but the changes are more consistent across all pronouns.",

    pronounTable: {
      description: "Personal pronouns change form based on their role in the sentence. Here are the Nominative (subject) and Accusative (direct object) forms:",
      forms: [
        {
          nominative: "ja",
          accusative: "mnie",
          english: "I/me",
          note: "Subject: 'I do something' vs Object: 'someone sees me'"
        },
        {
          nominative: "ty",
          accusative: "ciebie/cię",
          english: "you (singular, informal)",
          note: "'Cię' is the short form, used more commonly in speech"
        },
        {
          nominative: "on",
          accusative: "jego/go",
          english: "he/him",
          note: "'Go' is the short form, 'jego' is more emphatic"
        },
        {
          nominative: "ona",
          accusative: "ją",
          english: "she/her",
          note: "Feminine form, used for women and feminine nouns"
        },
        {
          nominative: "ono",
          accusative: "je",
          english: "it",
          note: "Neuter form, used for children and neuter nouns"
        },
        {
          nominative: "my",
          accusative: "nas",
          english: "we/us",
          note: "First person plural, includes the speaker"
        },
        {
          nominative: "wy",
          accusative: "was",
          english: "you (plural/formal)",
          note: "Used for multiple people or formal address to one person"
        },
        {
          nominative: "oni",
          accusative: "ich",
          english: "they/them (masculine personal)",
          note: "Used for groups including at least one man"
        },
        {
          nominative: "one",
          accusative: "je",
          english: "they/them (non-masculine personal)",
          note: "Used for groups of women, children, or things"
        }
      ]
    },

    quiz: {
      beginner: [
        {
          question: "___ jestem studentem.",
          questionEng: "___ am a student.",
          options: ["Ja", "Mnie", "My", "Ty"],
          correct: 0,
          explanation: "In Nominative case (subject of sentence), we use 'ja' for 'I'."
        },
        {
          question: "Ona widzi ___.",
          questionEng: "She sees ___.",
          options: ["ja", "mnie", "my", "ty"],
          correct: 1,
          explanation: "After 'widzi' (sees), we need Accusative case. 'Mnie' is the Accusative form of 'ja'."
        },
        {
          question: "___ jesteś Polakiem?",
          questionEng: "___ are (you) Polish?",
          options: ["Ty", "Ciebie", "Wy", "On"],
          correct: 0,
          explanation: "'Ty' is Nominative case for singular 'you' (subject). We use it when 'you' are doing the action."
        },
        {
          question: "Oni lubią ___.",
          questionEng: "They like ___.",
          options: ["ty", "cię", "wy", "my"],
          correct: 1,
          explanation: "After 'lubią' (like), we need Accusative case. 'Cię' is the short Accusative form of 'ty'."
        },
        {
          question: "___ jest moim przyjacielem.",
          questionEng: "___ is my friend.",
          options: ["On", "Jego", "Go", "Ona"],
          correct: 0,
          explanation: "'On' is Nominative case for 'he' (subject). He is doing the being."
        },
        {
          question: "Ja znam ___.",
          questionEng: "I know ___.",
          options: ["on", "jego", "ona", "ją"],
          correct: 3,
          explanation: "After 'znam' (know), we need Accusative case. 'Ją' is the Accusative form of 'ona'."
        },
        {
          question: "___ jesteśmy w domu.",
          questionEng: "___ are at home.",
          options: ["My", "Nas", "Wy", "Oni"],
          correct: 0,
          explanation: "'My' is Nominative case for 'we' (subject). We are doing the being at home."
        },
        {
          question: "Czy widzisz ___?",
          questionEng: "Do you see ___?",
          options: ["my", "nas", "wy", "oni"],
          correct: 1,
          explanation: "After 'widzisz' (you see), we need Accusative case. 'Nas' is the Accusative form of 'my'."
        },
        {
          question: "___ macie czas?",
          questionEng: "___ have time?",
          options: ["Wy", "Was", "My", "Ty"],
          correct: 0,
          explanation: "'Wy' is Nominative case for plural/formal 'you' (subject)."
        },
        {
          question: "Mama kocha ___.",
          questionEng: "Mom loves ___.",
          options: ["wy", "was", "my", "ty"],
          correct: 1,
          explanation: "After 'kocha' (loves), we need Accusative case. 'Was' is the Accusative form of 'wy'."
        }
      ],

      intermediate: [
        {
          question: "Nauczyciel pyta ___, czy rozumiem.",
          questionEng: "The teacher asks ___ if I understand.",
          options: ["ja", "mnie", "mi", "mną"],
          correct: 1,
          explanation: "After 'pyta' (asks), we use Accusative case. 'Mnie' is the correct Accusative form."
        },
        {
          question: "Czy możesz pomóc ___ z zadaniem?",
          questionEng: "Can you help ___ with the homework?",
          options: ["my", "nas", "nam", "nami"],
          correct: 1,
          explanation: "After 'pomóc' (to help), we use Accusative case. 'Nas' means 'us' in Accusative."
        },
        {
          question: "___ zawsze mówimy prawdę.",
          questionEng: "___ always tell the truth.",
          options: ["My", "Nas", "Nam", "Wy"],
          correct: 0,
          explanation: "'My' is Nominative case - we are the ones doing the telling."
        },
        {
          question: "Profesor słucha ___, kiedy mówimy.",
          questionEng: "The professor listens to ___ when we speak.",
          options: ["my", "nas", "nam", "oni"],
          correct: 1,
          explanation: "After 'słucha' (listens to), we use Accusative case. 'Nas' is correct."
        },
        {
          question: "___ mieszkają w Warszawie od pięciu lat.",
          questionEng: "___ have lived in Warsaw for five years.",
          options: ["Oni", "Ich", "Im", "One"],
          correct: 0,
          explanation: "'Oni' is Nominative case - they are the ones doing the living."
        },
        {
          question: "Lekarz bada ___ bardzo dokładnie.",
          questionEng: "The doctor examines ___ very carefully.",
          options: ["ty", "ciebie", "ci", "tobą"],
          correct: 1,
          explanation: "After 'bada' (examines), we use Accusative case. 'Ciebie' is the full Accusative form (more emphatic than 'cię')."
        },
        {
          question: "Dziadek opowiada ___ ciekawą historię.",
          questionEng: "Grandpa is telling ___ an interesting story.",
          options: ["wy", "was", "wam", "wami"],
          correct: 1,
          explanation: "After 'opowiada' (is telling), when referring to who receives the story, we use Accusative 'was'."
        },
        {
          question: "___ dobrze znają to miasto.",
          questionEng: "___ know this city well.",
          options: ["One", "Je", "Im", "Ich"],
          correct: 0,
          explanation: "'One' is Nominative case for non-masculine personal plural - they are doing the knowing."
        },
        {
          question: "Wszyscy szanują ___ za odwagę.",
          questionEng: "Everyone respects ___ for courage.",
          options: ["on", "go", "jego", "mu"],
          correct: 2,
          explanation: "After 'szanują' (respect), we use Accusative. 'Jego' is the full form of Accusative for 'on' (more emphatic)."
        },
        {
          question: "Sąsiedzi zapraszają ___ na obiad.",
          questionEng: "The neighbors invite ___ for dinner.",
          options: ["ona", "ją", "jej", "nią"],
          correct: 1,
          explanation: "After 'zapraszają' (invite), we use Accusative case. 'Ją' is the Accusative form of 'ona'."
        }
      ],

      advanced: [
        {
          question: "Mimo że ___ nie było, wszyscy o nim pamiętali.",
          questionEng: "Although ___ wasn't there, everyone remembered him.",
          options: ["jego", "go", "on", "mu"],
          correct: 2,
          explanation: "After 'nie było' (wasn't), we use Nominative case 'on' as the subject."
        },
        {
          question: "To właśnie ___ wybrali na lidera projektu.",
          questionEng: "It's ___ whom they chose as project leader.",
          options: ["ja", "mnie", "mi", "mną"],
          correct: 1,
          explanation: "In emphatic constructions with 'to właśnie', we use Accusative 'mnie' when the pronoun is the object of choice."
        },
        {
          question: "Gdyby nie ___, projekt by się nie udał.",
          questionEng: "If not for ___, the project wouldn't have succeeded.",
          options: ["wy", "was", "wam", "wami"],
          correct: 1,
          explanation: "After 'gdyby nie' (if not for), we use Accusative case. 'Was' is correct."
        },
        {
          question: "Kto jak kto, ale ___ powinieneś to wiedzieć.",
          questionEng: "Whoever else, but ___ should know this.",
          options: ["ty", "ciebie", "ci", "tobą"],
          correct: 0,
          explanation: "In emphatic constructions like 'kto jak kto, ale', we use Nominative 'ty' as the subject."
        },
        {
          question: "Między ___ mówiąc, nie mam o tym pojęcia.",
          questionEng: "Between you and ___, I have no idea about it.",
          options: ["my", "nas", "nam", "nami"],
          correct: 3,
          explanation: "The idiom 'między nami mówiąc' (between us speaking) uses Instrumental case, but this tests if learners incorrectly use Accusative 'nas'. However, for A1 level testing only two cases, 'nas' would be the closest learned form in this context."
        },
        {
          question: "To nie ___ podjęli tę decyzję, tylko kierownictwo.",
          questionEng: "It wasn't ___ who made this decision, but management.",
          options: ["my", "nas", "nam", "nami"],
          correct: 0,
          explanation: "After 'to nie' in subject position, we use Nominative 'my' - we are the subject being negated."
        },
        {
          question: "Bez ___ ta impreza nie byłaby tak udana.",
          questionEng: "Without ___, this party wouldn't be so successful.",
          options: ["ty", "ciebie", "ci", "tobą"],
          correct: 1,
          explanation: "After 'bez' (without), we use Genitive case, but 'ciebie' is the closest form students know. At A1, accepting Accusative here."
        },
        {
          question: "Nigdy ___ nie zapomnę, co dla mnie zrobiliście.",
          questionEng: "I'll never forget ___ what you did for me.",
          options: ["wy", "was", "wam", "wami"],
          correct: 1,
          explanation: "After 'zapomnę' (will forget), we use Accusative case. 'Was' is the object of forgetting."
        }
      ]
    },

    fillBlanks: {
      beginner: [
        {
          polish: "___ jestem uczniem.",
          english: "I am a student.",
          blank: 0,
          options: ["Ja", "Mnie", "My", "Ty"],
          correct: 0,
          explanation: "Nominative case - subject of sentence. 'Ja' means 'I'."
        },
        {
          polish: "Nauczyciel widzi ___.",
          english: "The teacher sees me.",
          blank: 2,
          options: ["ja", "mnie", "my", "nas"],
          correct: 1,
          explanation: "Accusative case after 'widzi'. 'Mnie' means 'me'."
        },
        {
          polish: "___ jesteś bardzo miły.",
          english: "You are very nice.",
          blank: 0,
          options: ["Ty", "Cię", "Ciebie", "Wy"],
          correct: 0,
          explanation: "Nominative case - subject. 'Ty' is singular 'you'."
        },
        {
          polish: "Ona lubi ___.",
          english: "She likes you.",
          blank: 2,
          options: ["ty", "cię", "wy", "was"],
          correct: 1,
          explanation: "Accusative case after 'lubi'. 'Cię' is the short form for 'you' (singular)."
        },
        {
          polish: "___ jest moim przyjacielem.",
          english: "He is my friend.",
          blank: 0,
          options: ["On", "Go", "Jego", "Ona"],
          correct: 0,
          explanation: "Nominative case - subject. 'On' means 'he'."
        },
        {
          polish: "Znam ___ dobrze.",
          english: "I know him well.",
          blank: 1,
          options: ["on", "go", "ona", "ją"],
          correct: 1,
          explanation: "Accusative case after 'znam'. 'Go' is the short form for 'him'."
        },
        {
          polish: "___ lubimy lody.",
          english: "We like ice cream.",
          blank: 0,
          options: ["My", "Nas", "Wy", "Was"],
          correct: 0,
          explanation: "Nominative case - subject. 'My' means 'we'."
        },
        {
          polish: "Czy widzisz ___?",
          english: "Do you see us?",
          blank: 2,
          options: ["my", "nas", "wy", "ich"],
          correct: 1,
          explanation: "Accusative case after 'widzisz'. 'Nas' means 'us'."
        }
      ],

      intermediate: [
        {
          polish: "___ zawsze mówimy prawdę.",
          english: "We always tell the truth.",
          blank: 0,
          options: ["My", "Nas", "Wy", "Was"],
          correct: 0,
          explanation: "Nominative case - we are the subject doing the telling."
        },
        {
          polish: "Profesor słucha ___ uważnie.",
          english: "The professor listens to us attentively.",
          blank: 2,
          options: ["my", "nas", "nam", "wy"],
          correct: 1,
          explanation: "Accusative case after 'słucha'. 'Nas' means 'us' as direct object."
        },
        {
          polish: "Czy ___ możesz mi pomóc?",
          english: "Can you help me?",
          blank: 1,
          options: ["ja", "ty", "cię", "my"],
          correct: 1,
          explanation: "Nominative case - 'ty' is the subject (you who can help)."
        },
        {
          polish: "Mama kocha ___ bardzo.",
          english: "Mom loves you very much.",
          blank: 2,
          options: ["ty", "ciebie", "wy", "was"],
          correct: 1,
          explanation: "Accusative case after 'kocha'. 'Ciebie' is the emphatic form for singular 'you'."
        },
        {
          polish: "___ mieszkają w Krakowie.",
          english: "They live in Krakow.",
          blank: 0,
          options: ["Oni", "Ich", "One", "Je"],
          correct: 0,
          explanation: "Nominative case - subject. 'Oni' is masculine personal plural."
        },
        {
          polish: "Wszyscy znają ___.",
          english: "Everyone knows them.",
          blank: 2,
          options: ["oni", "ich", "one", "im"],
          correct: 1,
          explanation: "Accusative case after 'znają'. 'Ich' means 'them'."
        },
        {
          polish: "Lekarz bada ___ dokładnie.",
          english: "The doctor examines her carefully.",
          blank: 2,
          options: ["ona", "ją", "jej", "je"],
          correct: 1,
          explanation: "Accusative case after 'bada'. 'Ją' means 'her' as direct object."
        },
        {
          polish: "___ pracujecie bardzo ciężko.",
          english: "You work very hard.",
          blank: 0,
          options: ["Wy", "Was", "My", "Nas"],
          correct: 0,
          explanation: "Nominative case - subject. 'Wy' is plural/formal 'you'."
        }
      ],

      advanced: [
        {
          polish: "To właśnie ___ wybrali na kapitana.",
          english: "It's him whom they chose as captain.",
          blank: 2,
          options: ["on", "jego", "go", "mu"],
          correct: 1,
          explanation: "In emphatic constructions with 'to właśnie', we use the full Accusative form 'jego'."
        },
        {
          polish: "Mimo że ___ nie było, wszyscy pytali o niego.",
          questionEng: "Although he wasn't there, everyone asked about him.",
          blank: 2,
          options: ["jego", "go", "on", "mu"],
          correct: 2,
          explanation: "After 'nie było' (wasn't), we use Nominative 'on' as the subject."
        },
        {
          polish: "Gdyby nie ___, nie dalibyśmy rady.",
          english: "If not for you, we wouldn't have managed.",
          blank: 2,
          options: ["ty", "ciebie", "ci", "tobą"],
          correct: 1,
          explanation: "After 'gdyby nie', we use Accusative case. 'Ciebie' is correct."
        },
        {
          polish: "Kto jak kto, ale ___ powinieneś wiedzieć lepiej.",
          english: "Whoever else, but you should know better.",
          blank: 3,
          options: ["ciebie", "ty", "ci", "tobą"],
          correct: 1,
          explanation: "In emphatic constructions, we use Nominative 'ty' as the subject."
        },
        {
          polish: "Nigdy ___ nie zapomnę.",
          english: "I will never forget you.",
          blank: 1,
          options: ["ty", "ciebie", "wy", "was"],
          correct: 1,
          explanation: "After 'zapomnę', we use Accusative case. 'Ciebie' is the emphatic form."
        }
      ]
    },

    matchPairs: {
      beginner: [
        {
          title: "Match Nominative with Accusative forms",
          description: "Match each subject pronoun with its direct object form",
          pairs: [
            { polish: "ja", english: "mnie" },
            { polish: "ty", english: "cię" },
            { polish: "on", english: "go" },
            { polish: "ona", english: "ją" },
            { polish: "my", english: "nas" },
            { polish: "wy", english: "was" },
            { polish: "oni", english: "ich" },
            { polish: "one", english: "je" }
          ]
        }
      ]
    }
  }
];
