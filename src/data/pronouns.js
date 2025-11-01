export const pronouns = [
  {
    name: "Personal Pronouns",
    polish: "Zaimki osobowe",
    difficulty: "beginner",
    level: "A1",
    icon: "👤",

    explanation: "Personal pronouns in Polish change their form depending on their role in the sentence. At the A1 level, we focus on two main forms: Nominative (who is doing the action) and Accusative (who/what receives the action). Unlike English where 'you' is always 'you', Polish has different words for singular 'you' (ty) and plural/formal 'you' (wy). The pronouns also have gender: 'on' (he/masculine), 'ona' (she/feminine), and 'ono' (it/neuter).",

    analogy: "Think of personal pronouns like actors on a stage. In Nominative case, they're the ones performing the action (the subject). In Accusative case, they're receiving the action (the direct object). Just like in English where 'I' becomes 'me' when receiving action ('He sees me'), Polish pronouns also change form, but the changes are more consistent across all pronouns.",

    examples: [
        {
          polish: "Ja lubię kawę.",
          english: "I like coffee."
        },
        {
          polish: "Ty jesteś studentem.",
          english: "You are a student."
        },
        {
          polish: "On czyta książkę.",
          english: "He is reading a book."
        },
        {
          polish: "Ona ma kota.",
          english: "She has a cat."
        },
        {
          polish: "My idziemy do kina.",
          english: "We are going to the cinema."
        },
        {
          polish: "Wy macie pytanie.",
          english: "You (plural/formal) have a question."
        }
      ],

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
,
{
  name: "Possessive Pronouns",
  polish: "Zaimki dzierżawcze",
  difficulty: "intermediate",
  level: "A2",
  icon: "🏠",
  explanation: "Possessive pronouns in Polish show ownership and must agree in gender, number, and case with the noun they describe (not with the owner). This is different from English! For example, 'her book' is 'jej książka' (feminine) but 'her cat' is 'jej kot' (masculine) - 'jej' stays the same, but in other pronouns the ending changes.",
      analogy: "Think of possessive pronouns as chameleons that change their appearance to match the thing being owned, not the owner. In English, 'his' stays 'his' whether it's 'his car' or 'his house.' In Polish, 'jego' (his) stays the same, but 'mój' (my) becomes 'moja' or 'moje' depending on what you own.",

    examples: [
        {
          polish: "To jest mój dom.",
          english: "This is my house."
        },
        {
          polish: "To jest moja książka.",
          english: "This is my book."
        },
        {
          polish: "To jest moje okno.",
          english: "This is my window."
        },
        {
          polish: "Widzę jego dom.",
          english: "I see his house."
        },
        {
          polish: "Rozmawiam z jej matką.",
          english: "I'm talking with her mother."
        },
        {
          polish: "Myślę o ich problemach.",
          english: "I'm thinking about their problems."
        }
      ],

  possessivePronouns: [
    {
      pronoun: "mój/moja/moje",
      english: "my, mine",
      gender: "masculine/feminine/neuter",
      note: "Changes form to match the owned object"
    },
    {
      pronoun: "twój/twoja/twoje",
      english: "your, yours (singular informal)",
      gender: "masculine/feminine/neuter",
      note: "Changes form to match the owned object"
    },
    {
      pronoun: "jego",
      english: "his, its",
      gender: "all genders",
      note: "Never changes - always 'jego'"
    },
    {
      pronoun: "jej",
      english: "her, hers, its",
      gender: "all genders",
      note: "Never changes - always 'jej'"
    },
    {
      pronoun: "nasz/nasza/nasze",
      english: "our, ours",
      gender: "masculine/feminine/neuter",
      note: "Changes form to match the owned object"
    },
    {
      pronoun: "wasz/wasza/wasze",
      english: "your, yours (plural informal)",
      gender: "masculine/feminine/neuter",
      note: "Changes form to match the owned object"
    },
    {
      pronoun: "ich",
      english: "their, theirs",
      gender: "all genders",
      note: "Never changes - always 'ich'"
    }
  ],

  declensionTables: {
    moj: {
      title: "mój (my/mine) - Masculine",
      cases: {
        nominative: { singular: "mój", plural: "moi/moje" },
        genitive: { singular: "mojego", plural: "moich" },
        dative: { singular: "mojemu", plural: "moim" },
        accusative: { singular: "mojego/mój", plural: "moich/moje" },
        instrumental: { singular: "moim", plural: "moimi" },
        locative: { singular: "moim", plural: "moich" },
        vocative: { singular: "mój", plural: "moi/moje" }
      }
    },
    moja: {
      title: "moja (my/mine) - Feminine",
      cases: {
        nominative: { singular: "moja", plural: "moje" },
        genitive: { singular: "mojej", plural: "moich" },
        dative: { singular: "mojej", plural: "moim" },
        accusative: { singular: "moją", plural: "moje" },
        instrumental: { singular: "moją", plural: "moimi" },
        locative: { singular: "mojej", plural: "moich" },
        vocative: { singular: "moja", plural: "moje" }
      }
    },
    moje: {
      title: "moje (my/mine) - Neuter",
      cases: {
        nominative: { singular: "moje", plural: "moje" },
        genitive: { singular: "mojego", plural: "moich" },
        dative: { singular: "mojemu", plural: "moim" },
        accusative: { singular: "moje", plural: "moje" },
        instrumental: { singular: "moim", plural: "moimi" },
        locative: { singular: "moim", plural: "moich" },
        vocative: { singular: "moje", plural: "moje" }
      }
    },
    nasz: {
      title: "nasz (our/ours) - Masculine",
      cases: {
        nominative: { singular: "nasz", plural: "nasi/nasze" },
        genitive: { singular: "naszego", plural: "naszych" },
        dative: { singular: "naszemu", plural: "naszym" },
        accusative: { singular: "naszego/nasz", plural: "naszych/nasze" },
        instrumental: { singular: "naszym", plural: "naszymi" },
        locative: { singular: "naszym", plural: "naszych" },
        vocative: { singular: "nasz", plural: "nasi/nasze" }
      }
    }
  },

  usageNotes: [
    {
      rule: "Gender Agreement",
      explanation: "The possessive pronoun must match the gender of the thing owned, not the owner.",
      examples: [
        { polish: "To jest mój dom.", english: "This is my house.", note: "dom is masculine" },
        { polish: "To jest moja książka.", english: "This is my book.", note: "książka is feminine" },
        { polish: "To jest moje okno.", english: "This is my window.", note: "okno is neuter" }
      ]
    },
    {
      rule: "Invariable Forms",
      explanation: "jego, jej, and ich never change form regardless of case or gender.",
      examples: [
        { polish: "Widzę jego dom.", english: "I see his house.", note: "Accusative - still 'jego'" },
        { polish: "Rozmawiam z jej matką.", english: "I'm talking with her mother.", note: "Instrumental - still 'jej'" },
        { polish: "Myślę o ich problemach.", english: "I'm thinking about their problems.", note: "Locative - still 'ich'" }
      ]
    },
    {
      rule: "Common Mistake",
      explanation: "English speakers often forget that 'my', 'your', 'our' change endings in Polish.",
      examples: [
        { polish: "Czekam na mojego brata.", english: "I'm waiting for my brother.", note: "Accusative masculine animate requires -ego" },
        { polish: "Jestem z moją siostrą.", english: "I'm with my sister.", note: "Instrumental feminine requires -ą" }
      ]
    }
  ],

  quiz: {
    beginner: [
      {
        question: "To jest ___ dom. (This is my house.)",
        options: ["mój", "moja", "moje", "mojego"],
        correct: 0,
        explanation: "'Dom' is masculine nominative, so we use 'mój'."
      },
      {
        question: "Widzę ___ kota. (I see your cat.) - informal you",
        options: ["twój", "twoja", "twojego", "twoim"],
        correct: 2,
        explanation: "'Kota' is accusative masculine animate, requiring 'twojego'."
      },
      {
        question: "Czy to jest ___ książka? (Is this her book?)",
        options: ["jego", "jej", "ich", "moja"],
        correct: 1,
        explanation: "'Her' in Polish is always 'jej', regardless of the noun's gender or case."
      },
      {
        question: "To są ___ dzieci. (These are our children.)",
        options: ["nasz", "nasza", "nasze", "naszych"],
        correct: 2,
        explanation: "'Dzieci' is neuter plural nominative, so we use 'nasze'."
      },
      {
        question: "___ pies jest duży. (His dog is big.)",
        options: ["Jego", "Jej", "Mój", "Twój"],
        correct: 0,
        explanation: "'His' in Polish is always 'jego', never changing form."
      },
      {
        question: "Gdzie jest ___ samochód? (Where is their car?)",
        options: ["ich", "jej", "jego", "nasz"],
        correct: 0,
        explanation: "'Their' in Polish is always 'ich', regardless of the noun."
      },
      {
        question: "Lubię ___ siostrę. (I like my sister.)",
        options: ["mój", "moja", "moją", "mojej"],
        correct: 2,
        explanation: "'Siostrę' is accusative feminine, requiring 'moją'."
      },
      {
        question: "To jest ___ szkoła. (This is your school.) - plural you",
        options: ["wasz", "wasza", "wasze", "waszych"],
        correct: 1,
        explanation: "'Szkoła' is feminine nominative, so we use 'wasza'."
      },
      {
        question: "Znam ___ przyjaciela. (I know his friend.)",
        options: ["jego", "jej", "mój", "twój"],
        correct: 0,
        explanation: "'His' is always 'jego' in Polish, regardless of case."
      },
      {
        question: "___ kot śpi. (My cat is sleeping.)",
        options: ["Mój", "Moja", "Moje", "Moim"],
        correct: 0,
        explanation: "'Kot' is masculine nominative, so we use 'mój'."
      }
    ],
    intermediate: [
      {
        question: "Rozmawiam z ___ nauczycielem. (I'm talking with my teacher.)",
        options: ["mój", "mojego", "moim", "moja"],
        correct: 2,
        explanation: "Instrumental case after 'z' requires 'moim' for masculine nouns."
      },
      {
        question: "Myślę o ___ rodzinie. (I'm thinking about your family.) - informal",
        options: ["twój", "twoja", "twojej", "twoją"],
        correct: 2,
        explanation: "Locative case after 'o' requires 'twojej' for feminine nouns."
      },
      {
        question: "Pomogę ___ mamie. (I'll help his mother.)",
        options: ["jego", "jej", "mojej", "jego"],
        correct: 0,
        explanation: "'His' is always 'jego' in Polish, even in the dative case."
      },
      {
        question: "Dziękuję ___ rodzicom. (I thank our parents.)",
        options: ["nasz", "nasza", "naszym", "naszych"],
        correct: 2,
        explanation: "Dative plural requires 'naszym' for all genders."
      },
      {
        question: "Wracam od ___ przyjaciółki. (I'm coming back from her friend.)",
        options: ["jej", "jego", "ich", "mojej"],
        correct: 0,
        explanation: "'Her' is always 'jej', even in genitive constructions."
      },
      {
        question: "Jestem dumny z ___ córki. (I'm proud of my daughter.)",
        options: ["mój", "moja", "mojej", "moją"],
        correct: 2,
        explanation: "After 'z' meaning 'of/with', genitive case requires 'mojej' for feminine."
      },
      {
        question: "Nie zgadzam się z ___ opinią. (I don't agree with their opinion.)",
        options: ["ich", "jej", "jego", "moją"],
        correct: 0,
        explanation: "'Their' is always 'ich', and it works with instrumental case 'opinią'."
      },
      {
        question: "Czekam na ___ brata. (I'm waiting for your brother.) - plural you",
        options: ["wasz", "wasza", "waszego", "waszym"],
        correct: 2,
        explanation: "Accusative masculine animate requires 'waszego'."
      },
      {
        question: "Mieszkam u ___ babci. (I live at my grandmother's.)",
        options: ["mój", "moja", "mojej", "moją"],
        correct: 2,
        explanation: "After 'u' (at someone's place), genitive case requires 'mojej'."
      },
      {
        question: "Idę do ___ domu. (I'm going to our house.)",
        options: ["nasz", "naszego", "naszym", "nasza"],
        correct: 1,
        explanation: "After 'do', genitive case requires 'naszego' for masculine."
      }
    ],
    advanced: [
      {
        question: "Wspominam ___ wspólne wakacje. (I remember our shared vacation.)",
        options: ["nasz", "nasze", "naszych", "naszymi"],
        correct: 1,
        explanation: "'Wakacje' is plural neuter accusative, requiring 'nasze'."
      },
      {
        question: "Nic nie wiem o ___ planach. (I know nothing about their plans.)",
        options: ["ich", "jej", "jego", "naszych"],
        correct: 0,
        explanation: "'Their' is always 'ich', working with locative plural 'planach'."
      },
      {
        question: "Nie mogę żyć bez ___ wsparcia. (I can't live without your support.) - informal",
        options: ["twój", "twoja", "twojego", "twoim"],
        correct: 2,
        explanation: "'Bez' takes genitive; 'wsparcia' is neuter genitive, requiring 'twojego'."
      },
      {
        question: "Zainteresowałem się ___ propozycją. (I became interested in her proposal.)",
        options: ["jej", "jego", "ich", "moją"],
        correct: 0,
        explanation: "'Her' is always 'jej', working with instrumental 'propozycją'."
      },
      {
        question: "Podziwiam cię za ___ odwagę. (I admire you for your courage.) - informal",
        options: ["twój", "twoja", "twoją", "twojej"],
        correct: 2,
        explanation: "'Za' with this meaning takes accusative; 'odwagę' is feminine, requiring 'twoją'."
      },
      {
        question: "Spotkamy się przy ___ biurze. (We'll meet at my office.)",
        options: ["mój", "moja", "moim", "mojego"],
        correct: 2,
        explanation: "'Przy' takes locative; 'biurze' is neuter locative, requiring 'moim'."
      },
      {
        question: "Między ___ przyjaciółmi nie ma sekretów. (Between our friends there are no secrets.)",
        options: ["nasz", "nasza", "naszych", "naszymi"],
        correct: 3,
        explanation: "'Między' takes instrumental plural, requiring 'naszymi'."
      },
      {
        question: "Dzięki ___ pomocy wszystko się udało. (Thanks to their help, everything succeeded.)",
        options: ["ich", "jej", "jego", "naszej"],
        correct: 0,
        explanation: "'Their' is always 'ich', working with dative 'pomocy'."
      }
    ]
  },

  fillBlanks: {
    beginner: [
      {
        polish: "To jest ___ pokój.",
        english: "This is my room.",
        blank: 2,
        options: ["mój", "moja", "moje", "mojego"],
        correct: 0,
        explanation: "'Pokój' is masculine nominative, requiring 'mój'."
      },
      {
        polish: "Lubię ___ kota.",
        english: "I like your cat. (informal you)",
        blank: 1,
        options: ["twój", "twoja", "twojego", "twoim"],
        correct: 2,
        explanation: "'Kota' is accusative masculine animate, requiring 'twojego'."
      },
      {
        polish: "Gdzie jest ___ torba?",
        english: "Where is her bag?",
        blank: 2,
        options: ["jego", "jej", "ich", "moja"],
        correct: 1,
        explanation: "'Her' is always 'jej' in Polish."
      },
      {
        polish: "___ dzieci są grzeczne.",
        english: "Our children are well-behaved.",
        blank: 0,
        options: ["Nasz", "Nasza", "Nasze", "Naszych"],
        correct: 2,
        explanation: "'Dzieci' is neuter plural nominative, requiring 'nasze'."
      },
      {
        polish: "Widzę ___ dom.",
        english: "I see his house.",
        blank: 1,
        options: ["jego", "jej", "ich", "mój"],
        correct: 0,
        explanation: "'His' is always 'jego', regardless of case."
      },
      {
        polish: "To jest ___ samochód.",
        english: "This is their car.",
        blank: 2,
        options: ["ich", "jej", "jego", "nasz"],
        correct: 0,
        explanation: "'Their' is always 'ich'."
      },
      {
        polish: "Czytam ___ książkę.",
        english: "I'm reading my book.",
        blank: 1,
        options: ["mój", "moja", "moją", "mojej"],
        correct: 2,
        explanation: "'Książkę' is accusative feminine, requiring 'moją'."
      },
      {
        polish: "___ szkoła jest duża.",
        english: "Your school is big. (plural you)",
        blank: 0,
        options: ["Wasz", "Wasza", "Wasze", "Waszych"],
        correct: 1,
        explanation: "'Szkoła' is feminine nominative, requiring 'wasza'."
      }
    ],
    intermediate: [
      {
        polish: "Rozmawiam z ___ przyjacielem.",
        english: "I'm talking with my friend.",
        blank: 2,
        options: ["mój", "mojego", "moim", "moja"],
        correct: 2,
        explanation: "Instrumental case after 'z' requires 'moim'."
      },
      {
        polish: "Myślę o ___ siostrze.",
        english: "I'm thinking about your sister. (informal)",
        blank: 2,
        options: ["twój", "twoja", "twojej", "twoją"],
        correct: 2,
        explanation: "Locative case after 'o' requires 'twojej'."
      },
      {
        polish: "Pomogę ___ mamie.",
        english: "I'll help his mother.",
        blank: 1,
        options: ["jego", "jej", "mojej", "naszej"],
        correct: 0,
        explanation: "'His' is always 'jego'."
      },
      {
        polish: "Dziękuję ___ rodzicom.",
        english: "I thank our parents.",
        blank: 1,
        options: ["nasz", "nasza", "naszym", "naszych"],
        correct: 2,
        explanation: "Dative plural requires 'naszym'."
      },
      {
        polish: "Idę do ___ domu.",
        english: "I'm going to her house.",
        blank: 2,
        options: ["jej", "jego", "ich", "mojego"],
        correct: 0,
        explanation: "'Her' is always 'jej', even with genitive 'domu'."
      },
      {
        polish: "Jestem z ___ córką.",
        english: "I'm with my daughter.",
        blank: 2,
        options: ["mój", "moja", "moją", "mojej"],
        correct: 2,
        explanation: "Instrumental case requires 'moją' for feminine."
      },
      {
        polish: "Nie zgadzam się z ___ opinią.",
        english: "I don't agree with their opinion.",
        blank: 4,
        options: ["ich", "jej", "jego", "moją"],
        correct: 0,
        explanation: "'Their' is always 'ich'."
      },
      {
        polish: "Czekam na ___ brata.",
        english: "I'm waiting for your brother. (plural you)",
        blank: 2,
        options: ["wasz", "wasza", "waszego", "waszym"],
        correct: 2,
        explanation: "Accusative masculine animate requires 'waszego'."
      }
    ],
    advanced: [
      {
        polish: "Wspominam ___ wspólne wakacje.",
        english: "I remember our shared vacation.",
        blank: 1,
        options: ["nasz", "nasze", "naszych", "naszymi"],
        correct: 1,
        explanation: "'Wakacje' is plural accusative, requiring 'nasze'."
      },
      {
        polish: "Nie mogę żyć bez ___ wsparcia.",
        english: "I can't live without your support. (informal)",
        blank: 4,
        options: ["twój", "twoja", "twojego", "twoim"],
        correct: 2,
        explanation: "'Bez' takes genitive; neuter requires 'twojego'."
      },
      {
        polish: "Zainteresowałem się ___ propozycją.",
        english: "I became interested in her proposal.",
        blank: 2,
        options: ["jej", "jego", "ich", "moją"],
        correct: 0,
        explanation: "'Her' is always 'jej'."
      },
      {
        polish: "Spotkamy się przy ___ biurze.",
        english: "We'll meet at my office.",
        blank: 3,
        options: ["mój", "moja", "moim", "mojego"],
        correct: 2,
        explanation: "'Przy' takes locative, requiring 'moim'."
      },
      {
        polish: "Dzięki ___ pomocy wszystko się udało.",
        english: "Thanks to their help, everything succeeded.",
        blank: 1,
        options: ["ich", "jej", "jego", "naszej"],
        correct: 0,
        explanation: "'Their' is always 'ich'."
      }
    ]
  },

  matchPairs: {
    beginner: [
      {
        title: "Match the possessive pronouns with their English meanings",
        description: "Connect each Polish possessive pronoun with its correct English translation.",
        pairs: [
          { polish: "mój", english: "my (masculine)" },
          { polish: "moja", english: "my (feminine)" },
          { polish: "moje", english: "my (neuter)" },
          { polish: "twój", english: "your (masculine, informal)" },
          { polish: "jego", english: "his" },
          { polish: "jej", english: "her" },
          { polish: "nasz", english: "our (masculine)" },
          { polish: "wasz", english: "your (plural, informal)" },
          { polish: "ich", english: "their" },
          { polish: "nasza", english: "our (feminine)" }
        ]
      }
    ]
  }
}
,
{
  name: "Demonstrative Pronouns",
  polish: "Zaimki wskazujące",
  difficulty: "intermediate",
  level: "A2",
  icon: "👉",
  explanation: "Demonstrative pronouns in Polish point to specific things, people, or concepts. The most common are 'ten/ta/to' (this/that - near) and 'tamten/tamta/tamto' (that - far). Like possessive pronouns, they must agree in gender, number, and case with the noun they refer to. Polish also has 'taki/taka/takie' meaning 'such' or 'this kind of'.",
  analogy: "Think of demonstrative pronouns as pointing fingers that change shape depending on what they're pointing at. 'Ten' is like pointing at something close (this man), 'ta' points at something feminine close (this woman), and 'tamten' points at something far away (that man over there).",

    examples: [
        {
          polish: "Ten dom jest duży.",
          english: "This house is big."
        },
        {
          polish: "Ta książka jest ciekawa.",
          english: "This book is interesting."
        },
        {
          polish: "To dziecko jest grzeczne.",
          english: "This child is well-behaved."
        },
        {
          polish: "Tamten dom jest stary.",
          english: "That house (over there) is old."
        },
        {
          polish: "Taki piękny dzień!",
          english: "Such a beautiful day!"
        },
        {
          polish: "Nie lubię takiej muzyki.",
          english: "I don't like this kind of music."
        }
      ],

  demonstrativeTypes: [
    {
      type: "ten/ta/to",
      english: "this/that (near)",
      usage: "Points to things close in space or recently mentioned",
      examples: [
        { polish: "Ten dom jest duży.", english: "This house is big." },
        { polish: "Ta książka jest ciekawa.", english: "This book is interesting." },
        { polish: "To dziecko jest grzeczne.", english: "This child is well-behaved." }
      ]
    },
    {
      type: "tamten/tamta/tamto",
      english: "that (far)",
      usage: "Points to things far away or mentioned earlier",
      examples: [
        { polish: "Tamten dom jest stary.", english: "That house (over there) is old." },
        { polish: "Tamta kobieta to moja siostra.", english: "That woman (over there) is my sister." },
        { polish: "Tamto drzewo jest wysokie.", english: "That tree (over there) is tall." }
      ]
    },
    {
      type: "taki/taka/takie",
      english: "such, this kind of",
      usage: "Describes quality or type of something",
      examples: [
        { polish: "Taki piękny dzień!", english: "Such a beautiful day!" },
        { polish: "Nie lubię takiej muzyki.", english: "I don't like this kind of music." },
        { polish: "Takie pytanie jest trudne.", english: "Such a question is difficult." }
      ]
    }
  ],

  declensionTables: {
    ten: {
      title: "ten (this/that) - Masculine",
      cases: {
        nominative: { singular: "ten", plural: "ci/te" },
        genitive: { singular: "tego", plural: "tych" },
        dative: { singular: "temu", plural: "tym" },
        accusative: { singular: "tego/ten", plural: "tych/te" },
        instrumental: { singular: "tym", plural: "tymi" },
        locative: { singular: "tym", plural: "tych" },
        vocative: { singular: "ten", plural: "ci/te" }
      }
    },
    ta: {
      title: "ta (this/that) - Feminine",
      cases: {
        nominative: { singular: "ta", plural: "te" },
        genitive: { singular: "tej", plural: "tych" },
        dative: { singular: "tej", plural: "tym" },
        accusative: { singular: "tę", plural: "te" },
        instrumental: { singular: "tą", plural: "tymi" },
        locative: { singular: "tej", plural: "tych" },
        vocative: { singular: "ta", plural: "te" }
      }
    },
    to: {
      title: "to (this/that) - Neuter",
      cases: {
        nominative: { singular: "to", plural: "te" },
        genitive: { singular: "tego", plural: "tych" },
        dative: { singular: "temu", plural: "tym" },
        accusative: { singular: "to", plural: "te" },
        instrumental: { singular: "tym", plural: "tymi" },
        locative: { singular: "tym", plural: "tych" },
        vocative: { singular: "to", plural: "te" }
      }
    },
    tamten: {
      title: "tamten (that - far) - Masculine",
      cases: {
        nominative: { singular: "tamten", plural: "tamci/tamte" },
        genitive: { singular: "tamtego", plural: "tamtych" },
        dative: { singular: "tamtemu", plural: "tamtym" },
        accusative: { singular: "tamtego/tamten", plural: "tamtych/tamte" },
        instrumental: { singular: "tamtym", plural: "tamtymi" },
        locative: { singular: "tamtym", plural: "tamtych" },
        vocative: { singular: "tamten", plural: "tamci/tamte" }
      }
    },
    taki: {
      title: "taki (such) - Masculine",
      cases: {
        nominative: { singular: "taki", plural: "tacy/takie" },
        genitive: { singular: "takiego", plural: "takich" },
        dative: { singular: "takiemu", plural: "takim" },
        accusative: { singular: "takiego/taki", plural: "takich/takie" },
        instrumental: { singular: "takim", plural: "takimi" },
        locative: { singular: "takim", plural: "takich" },
        vocative: { singular: "taki", plural: "tacy/takie" }
      }
    }
  },

  usageNotes: [
    {
      rule: "Near vs. Far",
      explanation: "'Ten/ta/to' refers to things nearby or recently mentioned. 'Tamten/tamta/tamto' emphasizes distance or contrast.",
      examples: [
        { polish: "Ten dom jest nowy, a tamten stary.", english: "This house is new, and that one is old.", note: "Contrasting near and far" },
        { polish: "Kto to jest? - To jest mój brat.", english: "Who is this? - This is my brother.", note: "'To' used for identification" }
      ]
    },
    {
      rule: "Taki for Quality",
      explanation: "'Taki/taka/takie' emphasizes the quality or type of something, often translating as 'such' or 'this kind of'.",
      examples: [
        { polish: "Nigdy nie widziałem takiego filmu.", english: "I've never seen such a film.", note: "Emphasizing quality" },
        { polish: "Taka pogoda jest rzadka.", english: "Such weather is rare.", note: "Describing type" }
      ]
    },
    {
      rule: "Gender Agreement",
      explanation: "Demonstrative pronouns must match the gender and number of the noun they modify.",
      examples: [
        { polish: "Ten stół, ta lampa, to okno.", english: "This table, this lamp, this window.", note: "Three genders in nominative" },
        { polish: "Te domy, te książki, te dzieci.", english: "These houses, these books, these children.", note: "Plural forms" }
      ]
    }
  ],

  quiz: {
    beginner: [
      {
        question: "___ książka jest ciekawa. (This book is interesting.)",
        options: ["Ten", "Ta", "To", "Te"],
        correct: 1,
        explanation: "'Książka' is feminine, so we use 'ta'."
      },
      {
        question: "___ dom jest duży. (This house is big.)",
        options: ["Ten", "Ta", "To", "Tamten"],
        correct: 0,
        explanation: "'Dom' is masculine, so we use 'ten'."
      },
      {
        question: "___ dziecko jest grzeczne. (This child is well-behaved.)",
        options: ["Ten", "Ta", "To", "Te"],
        correct: 2,
        explanation: "'Dziecko' is neuter, so we use 'to'."
      },
      {
        question: "___ samochód jest stary. (That car over there is old.)",
        options: ["Ten", "Tamten", "To", "Ta"],
        correct: 1,
        explanation: "For something far away, we use 'tamten' (masculine)."
      },
      {
        question: "___ ludzie są mili. (These people are nice.)",
        options: ["Ten", "Ta", "Ci", "To"],
        correct: 2,
        explanation: "'Ludzie' is masculine personal plural, requiring 'ci'."
      },
      {
        question: "Nie lubię ___ muzyki. (I don't like this kind of music.)",
        options: ["ten", "ta", "takiej", "taka"],
        correct: 2,
        explanation: "Genitive case after 'nie lubię' requires 'takiej' for feminine."
      },
      {
        question: "___ kobieta to moja mama. (This woman is my mom.)",
        options: ["Ten", "Ta", "To", "Te"],
        correct: 1,
        explanation: "'Kobieta' is feminine, so we use 'ta'."
      },
      {
        question: "___ piękny dzień! (Such a beautiful day!)",
        options: ["Ten", "Taki", "To", "Ta"],
        correct: 1,
        explanation: "To express 'such', we use 'taki' (masculine with 'dzień')."
      },
      {
        question: "___ drzewo jest wysokie. (That tree over there is tall.)",
        options: ["To", "Tamto", "Ten", "Ta"],
        correct: 1,
        explanation: "'Drzewo' is neuter and far away, so we use 'tamto'."
      },
      {
        question: "___ kot jest mój. (This cat is mine.)",
        options: ["Ten", "Ta", "To", "Te"],
        correct: 0,
        explanation: "'Kot' is masculine, so we use 'ten'."
      }
    ],
    intermediate: [
      {
        question: "Nie znam ___ człowieka. (I don't know this person.)",
        options: ["ten", "tego", "temu", "tym"],
        correct: 1,
        explanation: "Accusative masculine animate requires 'tego'."
      },
      {
        question: "Rozmawiam z ___ kobietą. (I'm talking with this woman.)",
        options: ["ta", "tę", "tej", "tą"],
        correct: 3,
        explanation: "Instrumental case after 'z' requires 'tą' for feminine."
      },
      {
        question: "Myślę o ___ problemie. (I'm thinking about this problem.)",
        options: ["ten", "tego", "tym", "te"],
        correct: 2,
        explanation: "Locative case after 'o' requires 'tym' for masculine."
      },
      {
        question: "Idę do ___ sklepu. (I'm going to that store over there.)",
        options: ["tamten", "tamtego", "tamtym", "tamta"],
        correct: 1,
        explanation: "Genitive case after 'do' requires 'tamtego'."
      },
      {
        question: "Nie zgadzam się z ___ opinią. (I don't agree with such an opinion.)",
        options: ["taka", "taką", "takiej", "taki"],
        correct: 2,
        explanation: "Instrumental 'opinią' requires genitive-form agreement with 'z', so 'takiej'."
      },
      {
        question: "Czekam na ___ autobus. (I'm waiting for this bus.)",
        options: ["ten", "tego", "tym", "te"],
        correct: 0,
        explanation: "Accusative of inanimate masculine is same as nominative: 'ten'."
      },
      {
        question: "Nie pamiętam ___ dnia. (I don't remember that day.)",
        options: ["ten", "tego", "tym", "tamtego"],
        correct: 3,
        explanation: "Genitive case after 'nie pamiętam' requires 'tamtego'."
      },
      {
        question: "Jestem zadowolony z ___ wyniku. (I'm satisfied with such a result.)",
        options: ["taki", "takiego", "takim", "takich"],
        correct: 1,
        explanation: "'Z' with genitive requires 'takiego' for masculine 'wyniku'."
      },
      {
        question: "Mieszkam w ___ mieście. (I live in this city.)",
        options: ["to", "tego", "tym", "te"],
        correct: 2,
        explanation: "Locative case after 'w' requires 'tym' for neuter."
      },
      {
        question: "Dziękuję za ___ radę. (Thank you for such advice.)",
        options: ["taka", "taką", "takiej", "taki"],
        correct: 1,
        explanation: "Accusative feminine after 'za' requires 'taką'."
      }
    ],
    advanced: [
      {
        question: "Dzięki ___ liście wszystko się wyjaśniło. (Thanks to that letter, everything became clear.)",
        options: ["ten", "tego", "temu", "tym"],
        correct: 2,
        explanation: "'Dzięki' takes dative case, requiring 'temu' for masculine."
      },
      {
        question: "Nie mogę zapomnieć o ___ wydarzeniach. (I can't forget about those events.)",
        options: ["te", "tych", "tym", "tamtych"],
        correct: 3,
        explanation: "Locative plural after 'o' requires 'tamtych'."
      },
      {
        question: "Między ___ budynkami jest park. (Between these buildings is a park.)",
        options: ["te", "tych", "tymi", "tym"],
        correct: 2,
        explanation: "'Między' takes instrumental plural, requiring 'tymi'."
      },
      {
        question: "Wbrew ___ opiniom podjąłem decyzję. (Contrary to such opinions, I made a decision.)",
        options: ["taka", "takich", "takim", "takiej"],
        correct: 1,
        explanation: "'Wbrew' takes dative, but with plural it looks like genitive: 'takich'."
      },
      {
        question: "Zgodnie z ___ planem wyjedziemy jutro. (According to this plan, we'll leave tomorrow.)",
        options: ["ten", "tego", "tym", "temu"],
        correct: 2,
        explanation: "'Zgodnie z' takes instrumental, requiring 'tym'."
      },
      {
        question: "W przeciwieństwie do ___ ludzi jestem optymistą. (Unlike those people, I'm an optimist.)",
        options: ["ci", "tych", "tym", "tamtych"],
        correct: 3,
        explanation: "'Do' takes genitive plural, requiring 'tamtych'."
      },
      {
        question: "Przed ___ domem rośnie drzewo. (In front of that house grows a tree.)",
        options: ["ten", "tego", "tym", "tamtym"],
        correct: 3,
        explanation: "'Przed' takes instrumental, requiring 'tamtym'."
      },
      {
        question: "Pomimo ___ trudności osiągnęliśmy cel. (Despite such difficulties, we achieved our goal.)",
        options: ["takie", "takich", "takim", "takimi"],
        correct: 1,
        explanation: "'Pomimo' takes genitive plural, requiring 'takich'."
      }
    ]
  },

  fillBlanks: {
    beginner: [
      {
        polish: "___ książka jest dobra.",
        english: "This book is good.",
        blank: 0,
        options: ["Ta", "Ten", "To", "Te"],
        correct: 0,
        explanation: "'Książka' is feminine, requiring 'ta'."
      },
      {
        polish: "Lubię ___ dom.",
        english: "I like this house.",
        blank: 1,
        options: ["ten", "ta", "to", "tego"],
        correct: 0,
        explanation: "'Dom' is masculine inanimate accusative, same as nominative: 'ten'."
      },
      {
        polish: "___ dziecko jest małe.",
        english: "This child is small.",
        blank: 0,
        options: ["To", "Ten", "Ta", "Te"],
        correct: 0,
        explanation: "'Dziecko' is neuter, requiring 'to'."
      },
      {
        polish: "___ samochód jest szybki.",
        english: "That car (over there) is fast.",
        blank: 0,
        options: ["Tamten", "Ten", "Ta", "To"],
        correct: 0,
        explanation: "Far distance requires 'tamten' for masculine."
      },
      {
        polish: "___ piękny dzień!",
        english: "Such a beautiful day!",
        blank: 0,
        options: ["Taki", "Ten", "To", "Ta"],
        correct: 0,
        explanation: "'Such' is expressed with 'taki' (masculine)."
      },
      {
        polish: "___ kobiety są miłe.",
        english: "These women are nice.",
        blank: 0,
        options: ["Te", "Ta", "Ten", "To"],
        correct: 0,
        explanation: "Plural feminine/neuter requires 'te'."
      },
      {
        polish: "Nie znam ___ człowieka.",
        english: "I don't know this person.",
        blank: 2,
        options: ["ten", "tego", "tym", "te"],
        correct: 1,
        explanation: "Accusative masculine animate requires 'tego'."
      },
      {
        polish: "Widzę ___ drzewo.",
        english: "I see that tree (over there).",
        blank: 1,
        options: ["to", "tamto", "ten", "tamten"],
        correct: 1,
        explanation: "Far distance with neuter requires 'tamto'."
      }
    ],
    intermediate: [
      {
        polish: "Rozmawiam z ___ mężczyzną.",
        english: "I'm talking with this man.",
        blank: 2,
        options: ["ten", "tego", "tym", "te"],
        correct: 2,
        explanation: "Instrumental after 'z' requires 'tym'."
      },
      {
        polish: "Myślę o ___ sprawie.",
        english: "I'm thinking about this matter.",
        blank: 2,
        options: ["ta", "tej", "tę", "tą"],
        correct: 1,
        explanation: "Locative after 'o' requires 'tej' for feminine."
      },
      {
        polish: "Idę do ___ sklepu.",
        english: "I'm going to that store (over there).",
        blank: 2,
        options: ["tamten", "tamtego", "tamtym", "tamta"],
        correct: 1,
        explanation: "Genitive after 'do' requires 'tamtego'."
      },
      {
        polish: "Nie zgadzam się z ___ propozycją.",
        english: "I don't agree with such a proposal.",
        blank: 4,
        options: ["taka", "taką", "takiej", "taki"],
        correct: 2,
        explanation: "Instrumental 'propozycją' works with 'takiej'."
      },
      {
        polish: "Czekam na ___ pociąg.",
        english: "I'm waiting for this train.",
        blank: 2,
        options: ["ten", "tego", "tym", "te"],
        correct: 0,
        explanation: "Accusative inanimate is same as nominative: 'ten'."
      },
      {
        polish: "Mieszkam w ___ budynku.",
        english: "I live in this building.",
        blank: 2,
        options: ["ten", "tego", "tym", "te"],
        correct: 2,
        explanation: "Locative after 'w' requires 'tym'."
      },
      {
        polish: "Nie pamiętam ___ wieczoru.",
        english: "I don't remember that evening.",
        blank: 2,
        options: ["ten", "tego", "tym", "tamtego"],
        correct: 3,
        explanation: "Genitive after 'nie pamiętam' requires 'tamtego'."
      },
      {
        polish: "Jestem dumny z ___ osiągnięcia.",
        english: "I'm proud of such an achievement.",
        blank: 3,
        options: ["takie", "takiego", "takim", "takiej"],
        correct: 1,
        explanation: "'Z' with genitive requires 'takiego' for neuter."
      }
    ],
    advanced: [
      {
        polish: "Dzięki ___ wsparciu wszystko się udało.",
        english: "Thanks to this support, everything succeeded.",
        blank: 1,
        options: ["to", "tego", "temu", "tym"],
        correct: 2,
        explanation: "'Dzięki' takes dative, requiring 'temu'."
      },
      {
        polish: "Nie mogę zapomnieć o ___ dniach.",
        english: "I can't forget about those days.",
        blank: 4,
        options: ["te", "tych", "tym", "tamtych"],
        correct: 3,
        explanation: "Locative plural requires 'tamtych'."
      },
      {
        polish: "Między ___ drzewami jest ścieżka.",
        english: "Between these trees is a path.",
        blank: 1,
        options: ["te", "tych", "tymi", "tym"],
        correct: 2,
        explanation: "'Między' takes instrumental plural: 'tymi'."
      },
      {
        polish: "Zgodnie z ___ prawem postąpiłem słusznie.",
        english: "According to this law, I acted correctly.",
        blank: 2,
        options: ["to", "tego", "tym", "te"],
        correct: 2,
        explanation: "'Zgodnie z' takes instrumental: 'tym'."
      },
      {
        polish: "W przeciwieństwie do ___ osób ja się zgadzam.",
        english: "Unlike those people, I agree.",
        blank: 3,
        options: ["te", "tych", "tamtych", "tym"],
        correct: 2,
        explanation: "'Do' takes genitive plural: 'tamtych'."
      }
    ]
  },

  matchPairs: {
    beginner: [
      {
        title: "Match demonstrative pronouns with their meanings",
        description: "Connect each Polish demonstrative pronoun with its correct English translation.",
        pairs: [
          { polish: "ten", english: "this (masculine)" },
          { polish: "ta", english: "this (feminine)" },
          { polish: "to", english: "this (neuter)" },
          { polish: "te", english: "these" },
          { polish: "tamten", english: "that - far (masculine)" },
          { polish: "tamta", english: "that - far (feminine)" },
          { polish: "tamto", english: "that - far (neuter)" },
          { polish: "taki", english: "such (masculine)" },
          { polish: "taka", english: "such (feminine)" },
          { polish: "takie", english: "such (neuter)" }
        ]
      }
    ]
  }
}
,
{
  name: "Interrogative Pronouns",
  polish: "Zaimki pytające",
  difficulty: "intermediate",
  level: "A2",
  icon: "❓",
  explanation: "Interrogative pronouns in Polish are used to ask questions. The main ones are 'kto' (who), 'co' (what), 'jaki/jaka/jakie' (what kind of), 'który/która/które' (which), and 'czyj/czyja/czyje' (whose). Like other pronouns, they decline through cases, and some must agree in gender and number with the noun they refer to.",
  analogy: "Think of interrogative pronouns as question magnets that pull information toward them. 'Kto' always asks about people and is grammatically masculine. 'Co' asks about things and never changes for gender. 'Jaki', 'który', and 'czyj' are like adjustable tools that change shape to match what you're asking about.",

    examples: [
        {
          polish: "Kto to jest?",
          english: "Who is this?"
        },
        {
          polish: "Co to jest?",
          english: "What is this?"
        },
        {
          polish: "Jaki to kolor?",
          english: "What color is it?"
        },
        {
          polish: "Który autobus jedzie do centrum?",
          english: "Which bus goes to the center?"
        },
        {
          polish: "Czyj to dom?",
          english: "Whose house is this?"
        },
        {
          polish: "Z kim rozmawiasz?",
          english: "Who are you talking with?"
        }
      ],

  interrogativeTypes: [
    {
      type: "kto",
      english: "who",
      usage: "Asks about people, always grammatically masculine singular",
      note: "Even if asking about women or groups, 'kto' is masculine",
      examples: [
        { polish: "Kto to jest?", english: "Who is this?" },
        { polish: "Z kim rozmawiasz?", english: "Who are you talking with?" },
        { polish: "O kim myślisz?", english: "Who are you thinking about?" }
      ]
    },
    {
      type: "co",
      english: "what",
      usage: "Asks about things, concepts, actions",
      note: "Does not change for gender",
      examples: [
        { polish: "Co to jest?", english: "What is this?" },
        { polish: "Co robisz?", english: "What are you doing?" },
        { polish: "O czym mówisz?", english: "What are you talking about?" }
      ]
    },
    {
      type: "jaki/jaka/jakie",
      english: "what kind of, what",
      usage: "Asks about quality, characteristics, type",
      note: "Must agree in gender, number, and case with the noun",
      examples: [
        { polish: "Jaki to kolor?", english: "What color is it?" },
        { polish: "Jaka jest pogoda?", english: "What is the weather like?" },
        { polish: "Jakie masz plany?", english: "What plans do you have?" }
      ]
    },
    {
      type: "który/która/które",
      english: "which, which one",
      usage: "Asks about a specific choice from options",
      note: "Must agree in gender, number, and case with the noun",
      examples: [
        { polish: "Który autobus jedzie do centrum?", english: "Which bus goes to the center?" },
        { polish: "Która jest godzina?", english: "What time is it? (lit. Which is the hour?)" },
        { polish: "Które okno jest otwarte?", english: "Which window is open?" }
      ]
    },
    {
      type: "czyj/czyja/czyje",
      english: "whose",
      usage: "Asks about possession/ownership",
      note: "Must agree in gender, number, and case with the owned thing",
      examples: [
        { polish: "Czyj to dom?", english: "Whose house is this?" },
        { polish: "Czyja to książka?", english: "Whose book is this?" },
        { polish: "Czyje to dziecko?", english: "Whose child is this?" }
      ]
    }
  ],

  declensionTables: {
    kto: {
      title: "kto (who) - Always masculine singular",
      cases: {
        nominative: "kto",
        genitive: "kogo",
        dative: "komu",
        accusative: "kogo",
        instrumental: "kim",
        locative: "kim",
        vocative: "kto"
      }
    },
    co: {
      title: "co (what) - No gender",
      cases: {
        nominative: "co",
        genitive: "czego",
        dative: "czemu",
        accusative: "co",
        instrumental: "czym",
        locative: "czym",
        vocative: "co"
      }
    },
    jaki: {
      title: "jaki (what kind of) - Masculine",
      cases: {
        nominative: { singular: "jaki", plural: "jacy/jakie" },
        genitive: { singular: "jakiego", plural: "jakich" },
        dative: { singular: "jakiemu", plural: "jakim" },
        accusative: { singular: "jakiego/jaki", plural: "jakich/jakie" },
        instrumental: { singular: "jakim", plural: "jakimi" },
        locative: { singular: "jakim", plural: "jakich" },
        vocative: { singular: "jaki", plural: "jacy/jakie" }
      }
    },
    jaka: {
      title: "jaka (what kind of) - Feminine",
      cases: {
        nominative: { singular: "jaka", plural: "jakie" },
        genitive: { singular: "jakiej", plural: "jakich" },
        dative: { singular: "jakiej", plural: "jakim" },
        accusative: { singular: "jaką", plural: "jakie" },
        instrumental: { singular: "jaką", plural: "jakimi" },
        locative: { singular: "jakiej", plural: "jakich" },
        vocative: { singular: "jaka", plural: "jakie" }
      }
    },
    jakie: {
      title: "jakie (what kind of) - Neuter",
      cases: {
        nominative: { singular: "jakie", plural: "jakie" },
        genitive: { singular: "jakiego", plural: "jakich" },
        dative: { singular: "jakiemu", plural: "jakim" },
        accusative: { singular: "jakie", plural: "jakie" },
        instrumental: { singular: "jakim", plural: "jakimi" },
        locative: { singular: "jakim", plural: "jakich" },
        vocative: { singular: "jakie", plural: "jakie" }
      }
    },
    ktory: {
      title: "który (which) - Masculine",
      cases: {
        nominative: { singular: "który", plural: "którzy/które" },
        genitive: { singular: "którego", plural: "których" },
        dative: { singular: "któremu", plural: "którym" },
        accusative: { singular: "którego/który", plural: "których/które" },
        instrumental: { singular: "którym", plural: "którymi" },
        locative: { singular: "którym", plural: "których" },
        vocative: { singular: "który", plural: "którzy/które" }
      }
    },
    czyj: {
      title: "czyj (whose) - Masculine",
      cases: {
        nominative: { singular: "czyj", plural: "czyi/czyje" },
        genitive: { singular: "czyjego", plural: "czyich" },
        dative: { singular: "czyjemu", plural: "czyim" },
        accusative: { singular: "czyjego/czyj", plural: "czyich/czyje" },
        instrumental: { singular: "czyim", plural: "czyimi" },
        locative: { singular: "czyim", plural: "czyich" },
        vocative: { singular: "czyj", plural: "czyi/czyje" }
      }
    }
  },

  usageNotes: [
    {
      rule: "Kto vs. Co",
      explanation: "'Kto' is only for people. 'Co' is for things, actions, and concepts. 'Kto' is always treated as masculine singular.",
      examples: [
        { polish: "Kto przyszedł? - Moja siostra przyszła.", english: "Who came? - My sister came.", note: "'Kto' is masculine but answer can be feminine" },
        { polish: "Co to jest?", english: "What is this?", note: "Asking about a thing" },
        { polish: "Co się stało?", english: "What happened?", note: "Asking about an event" }
      ]
    },
    {
      rule: "Jaki vs. Który",
      explanation: "'Jaki' asks about quality or characteristics (what kind of). 'Który' asks about a specific choice from options (which one).",
      examples: [
        { polish: "Jaki jest ten film? - Ciekawy.", english: "What is this film like? - Interesting.", note: "Asking about quality" },
        { polish: "Który film wolisz? - Ten.", english: "Which film do you prefer? - This one.", note: "Asking about choice" },
        { polish: "Jaka jest pogoda?", english: "What's the weather like?", note: "Quality question" },
        { polish: "Która godzina?", english: "What time? (Which hour?)", note: "Specific choice - idiomatic" }
      ]
    },
    {
      rule: "Prepositions with Interrogatives",
      explanation: "Interrogative pronouns combine with prepositions and change case accordingly. 'Kto' and 'co' have special forms.",
      examples: [
        { polish: "Z kim? (instrumental)", english: "With whom?", note: "'Kto' becomes 'kim'" },
        { polish: "O czym? (locative)", english: "About what?", note: "'Co' becomes 'czym'" },
        { polish: "Do kogo? (genitive)", english: "To whom?", note: "'Kto' becomes 'kogo'" },
        { polish: "Na co? (accusative)", english: "For what? On what?", note: "'Co' stays 'co'" }
      ]
    },
    {
      rule: "Czyj Agreement",
      explanation: "'Czyj' (whose) must agree with the thing owned, not the owner, just like possessive pronouns.",
      examples: [
        { polish: "Czyj to dom?", english: "Whose house is this?", note: "Masculine because 'dom' is masculine" },
        { polish: "Czyja to torba?", english: "Whose bag is this?", note: "Feminine because 'torba' is feminine" },
        { polish: "Czyje to dziecko?", english: "Whose child is this?", note: "Neuter because 'dziecko' is neuter" }
      ]
    }
  ],

  quiz: {
    beginner: [
      {
        question: "___ to jest? (Who is this?)",
        options: ["Kto", "Co", "Jaki", "Który"],
        correct: 0,
        explanation: "'Who' is always 'kto' when asking about people."
      },
      {
        question: "___ robisz? (What are you doing?)",
        options: ["Kto", "Co", "Jaki", "Która"],
        correct: 1,
        explanation: "'What' asking about an action is 'co'."
      },
      {
        question: "___ jest pogoda? (What is the weather like?)",
        options: ["Kto", "Co", "Jaka", "Która"],
        correct: 2,
        explanation: "'Pogoda' is feminine, so we use 'jaka' to ask about its quality."
      },
      {
        question: "___ autobus jedzie do centrum? (Which bus goes to the center?)",
        options: ["Jaki", "Który", "Co", "Kto"],
        correct: 1,
        explanation: "'Which' for a specific choice is 'który' (masculine with 'autobus')."
      },
      {
        question: "___ to dom? (Whose house is this?)",
        options: ["Czyj", "Czyja", "Czyje", "Kto"],
        correct: 0,
        explanation: "'Dom' is masculine, so we use 'czyj' for 'whose'."
      },
      {
        question: "___ to książka? (Whose book is this?)",
        options: ["Czyj", "Czyja", "Czyje", "Która"],
        correct: 1,
        explanation: "'Książka' is feminine, so we use 'czyja'."
      },
      {
        question: "___ masz imię? (What is your name? - lit. What name do you have?)",
        options: ["Jakie", "Które", "Co", "Kto"],
        correct: 0,
        explanation: "'Imię' is neuter, and we're asking about type/quality, so 'jakie'."
      },
      {
        question: "___ przyszedł? (Who came?)",
        options: ["Kto", "Co", "Jaki", "Który"],
        correct: 0,
        explanation: "Asking about a person requires 'kto'."
      },
      {
        question: "___ to jest? (What is this?)",
        options: ["Kto", "Co", "Jaki", "Który"],
        correct: 1,
        explanation: "Asking about a thing uses 'co'."
      },
      {
        question: "___ jest dzisiaj dzień? (What day is it today?)",
        options: ["Jaki", "Który", "Co", "Kto"],
        correct: 0,
        explanation: "'Dzień' is masculine, asking about type/quality uses 'jaki'."
      }
    ],
    intermediate: [
      {
        question: "Z ___ rozmawiasz? (Who are you talking with?)",
        options: ["kto", "kogo", "kim", "komu"],
        correct: 2,
        explanation: "'Z' takes instrumental case, so 'kto' becomes 'kim'."
      },
      {
        question: "O ___ myślisz? (What are you thinking about?)",
        options: ["co", "czego", "czym", "czemu"],
        correct: 2,
        explanation: "'O' takes locative case, so 'co' becomes 'czym'."
      },
      {
        question: "Do ___ idziesz? (Where are you going? - lit. To whom?)",
        options: ["kto", "kogo", "komu", "kim"],
        correct: 1,
        explanation: "'Do' takes genitive case, so 'kto' becomes 'kogo'."
      },
      {
        question: "___ kolor wolisz? (What color do you prefer?)",
        options: ["Jaki", "Który", "Co", "Jakie"],
        correct: 0,
        explanation: "'Kolor' is masculine, asking about type uses 'jaki'."
      },
      {
        question: "Na ___ czekasz? (What are you waiting for?)",
        options: ["co", "czego", "czym", "czemu"],
        correct: 0,
        explanation: "'Na' with 'czekać' takes accusative, so 'co' stays 'co'."
      },
      {
        question: "___ książkę czytasz? (Which book are you reading?)",
        options: ["Jaka", "Która", "Jaką", "Którą"],
        correct: 3,
        explanation: "Accusative feminine for specific choice is 'którą'."
      },
      {
        question: "___ językiem mówisz? (What language do you speak?)",
        options: ["Jaki", "Jakim", "Który", "Którym"],
        correct: 1,
        explanation: "Instrumental case with 'mówić' requires 'jakim' (masculine)."
      },
      {
        question: "W ___ mieście mieszkasz? (Which city do you live in?)",
        options: ["jaki", "jakie", "które", "którym"],
        correct: 3,
        explanation: "'W' takes locative, and 'miasto' is neuter, so 'którym'."
      },
      {
        question: "___ nauczycielowi pomagasz? (Which teacher are you helping?)",
        options: ["Jaki", "Jakiemu", "Który", "Któremu"],
        correct: 3,
        explanation: "'Pomagać' takes dative, so we need 'któremu' (masculine)."
      },
      {
        question: "___ przyjacielem się spotykasz? (Which friend are you meeting with?)",
        options: ["Jaki", "Jakim", "Który", "Którym"],
        correct: 3,
        explanation: "'Z' takes instrumental (się spotykasz z), so 'którym'."
      }
    ],
    advanced: [
      {
        question: "Dla ___ kupujesz te kwiaty? (For whom are you buying these flowers?)",
        options: ["kto", "kogo", "komu", "kim"],
        correct: 1,
        explanation: "'Dla' takes genitive case, so 'kto' becomes 'kogo'."
      },
      {
        question: "Dzięki ___ dowiedziałeś się o tym? (Thanks to whom did you find out about this?)",
        options: ["kto", "kogo", "komu", "kim"],
        correct: 2,
        explanation: "'Dzięki' takes dative case, so 'kto' becomes 'komu'."
      },
      {
        question: "Bez ___ nie możesz żyć? (Without what can't you live?)",
        options: ["co", "czego", "czym", "czemu"],
        correct: 1,
        explanation: "'Bez' takes genitive case, so 'co' becomes 'czego'."
      },
      {
        question: "___ problemem się zajmujesz? (What problem are you dealing with?)",
        options: ["Jaki", "Jakim", "Który", "Którym"],
        correct: 1,
        explanation: "'Zajmować się' takes instrumental, requiring 'jakim'."
      },
      {
        question: "Wbrew ___ opiniom podjąłeś decyzję? (Contrary to whose opinions did you make a decision?)",
        options: ["czyj", "czyje", "czyjej", "czyim"],
        correct: 3,
        explanation: "'Wbrew' takes dative, plural is 'czyim'."
      },
      {
        question: "Zgodnie z ___ planem działacie? (According to which plan are you acting?)",
        options: ["jaki", "który", "jakim", "którym"],
        correct: 3,
        explanation: "'Zgodnie z' takes instrumental, so 'którym'."
      },
      {
        question: "W przeciwieństwie do ___ myślisz inaczej? (Unlike whom do you think differently?)",
        options: ["kto", "kogo", "komu", "kim"],
        correct: 1,
        explanation: "'Do' takes genitive, so 'kogo'."
      },
      {
        question: "Pomimo ___ trudności idziesz dalej? (Despite what difficulties are you going forward?)",
        options: ["jaki", "jakich", "jakim", "jakimi"],
        correct: 1,
        explanation: "'Pomimo' takes genitive plural, so 'jakich'."
      }
    ]
  },

  fillBlanks: {
    beginner: [
      {
        polish: "___ to jest?",
        english: "Who is this?",
        blank: 0,
        options: ["Kto", "Co", "Jaki", "Który"],
        correct: 0,
        explanation: "Asking about a person uses 'kto'."
      },
      {
        polish: "___ robisz?",
        english: "What are you doing?",
        blank: 0,
        options: ["Kto", "Co", "Jaki", "Która"],
        correct: 1,
        explanation: "Asking about an action uses 'co'."
      },
      {
        polish: "___ jest twoje imię?",
        english: "What is your name?",
        blank: 0,
        options: ["Jakie", "Które", "Co", "Kto"],
        correct: 0,
        explanation: "'Imię' is neuter, asking about type uses 'jakie'."
      },
      {
        polish: "___ autobus jedzie tam?",
        english: "Which bus goes there?",
        blank: 0,
        options: ["Jaki", "Który", "Co", "Kto"],
        correct: 1,
        explanation: "Asking for a specific choice uses 'który'."
      },
      {
        polish: "___ to dom?",
        english: "Whose house is this?",
        blank: 0,
        options: ["Czyj", "Czyja", "Czyje", "Kto"],
        correct: 0,
        explanation: "'Dom' is masculine, so 'czyj'."
      },
      {
        polish: "___ przyszedł?",
        english: "Who came?",
        blank: 0,
        options: ["Kto", "Co", "Jaki", "Który"],
        correct: 0,
        explanation: "Asking about a person uses 'kto'."
      },
      {
        polish: "___ jest pogoda?",
        english: "What is the weather like?",
        blank: 0,
        options: ["Kto", "Co", "Jaka", "Która"],
        correct: 2,
        explanation: "'Pogoda' is feminine, asking about quality uses 'jaka'."
      },
      {
        polish: "___ to książka?",
        english: "Whose book is this?",
        blank: 0,
        options: ["Czyj", "Czyja", "Czyje", "Która"],
        correct: 1,
        explanation: "'Książka' is feminine, so 'czyja'."
      }
    ],
    intermediate: [
      {
        polish: "Z ___ rozmawiasz?",
        english: "Who are you talking with?",
        blank: 1,
        options: ["kto", "kogo", "kim", "komu"],
        correct: 2,
        explanation: "'Z' takes instrumental, so 'kim'."
      },
      {
        polish: "O ___ myślisz?",
        english: "What are you thinking about?",
        blank: 1,
        options: ["co", "czego", "czym", "czemu"],
        correct: 2,
        explanation: "'O' takes locative, so 'czym'."
      },
      {
        polish: "___ kolor lubisz?",
        english: "What color do you like?",
        blank: 0,
        options: ["Jaki", "Który", "Co", "Jakie"],
        correct: 0,
        explanation: "'Kolor' is masculine, asking about type uses 'jaki'."
      },
      {
        polish: "Na ___ czekasz?",
        english: "What are you waiting for?",
        blank: 1,
        options: ["co", "czego", "czym", "czemu"],
        correct: 0,
        explanation: "'Na' with 'czekać' takes accusative, so 'co'."
      },
      {
        polish: "___ książkę czytasz?",
        english: "Which book are you reading?",
        blank: 0,
        options: ["Jaka", "Która", "Jaką", "Którą"],
        correct: 3,
        explanation: "Accusative feminine for specific choice is 'którą'."
      },
      {
        polish: "Do ___ idziesz?",
        english: "To whom are you going?",
        blank: 1,
        options: ["kto", "kogo", "komu", "kim"],
        correct: 1,
        explanation: "'Do' takes genitive, so 'kogo'."
      },
      {
        polish: "W ___ mieście mieszkasz?",
        english: "Which city do you live in?",
        blank: 1,
        options: ["jaki", "jakie", "które", "którym"],
        correct: 3,
        explanation: "'W' takes locative, neuter requires 'którym'."
      },
      {
        polish: "___ językiem mówisz?",
        english: "What language do you speak?",
        blank: 0,
        options: ["Jaki", "Jakim", "Który", "Którym"],
        correct: 1,
        explanation: "Instrumental with 'mówić' requires 'jakim'."
      }
    ],
    advanced: [
      {
        polish: "Dla ___ to robisz?",
        english: "For whom are you doing this?",
        blank: 1,
        options: ["kto", "kogo", "komu", "kim"],
        correct: 1,
        explanation: "'Dla' takes genitive, so 'kogo'."
      },
      {
        polish: "Dzięki ___ się udało?",
        english: "Thanks to whom did it succeed?",
        blank: 1,
        options: ["kto", "kogo", "komu", "kim"],
        correct: 2,
        explanation: "'Dzięki' takes dative, so 'komu'."
      },
      {
        polish: "Bez ___ nie możesz żyć?",
        english: "Without what can't you live?",
        blank: 1,
        options: ["co", "czego", "czym", "czemu"],
        correct: 1,
        explanation: "'Bez' takes genitive, so 'czego'."
      },
      {
        polish: "Zgodnie z ___ planem działasz?",
        english: "According to which plan are you acting?",
        blank: 2,
        options: ["jaki", "który", "jakim", "którym"],
        correct: 3,
        explanation: "'Zgodnie z' takes instrumental, so 'którym'."
      },
      {
        polish: "___ problemem się zajmujesz?",
        english: "What problem are you dealing with?",
        blank: 0,
        options: ["Jaki", "Jakim", "Który", "Którym"],
        correct: 1,
        explanation: "'Zajmować się' takes instrumental, so 'jakim'."
      }
    ]
  },

  matchPairs: {
    beginner: [
      {
        title: "Match interrogative pronouns with their English meanings",
        description: "Connect each Polish interrogative pronoun with its correct English translation.",
        pairs: [
          { polish: "kto", english: "who" },
          { polish: "co", english: "what" },
          { polish: "jaki", english: "what kind of (masculine)" },
          { polish: "jaka", english: "what kind of (feminine)" },
          { polish: "jakie", english: "what kind of (neuter)" },
          { polish: "który", english: "which (masculine)" },
          { polish: "która", english: "which (feminine)" },
          { polish: "które", english: "which (neuter)" },
          { polish: "czyj", english: "whose (masculine)" },
          { polish: "czyja", english: "whose (feminine)" }
        ]
      }
    ]
  }
}
];
