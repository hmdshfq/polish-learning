import React, { useState } from "react";
import { TrendingUp, Target, Calendar, Star, Download, Upload } from "lucide-react";

// Data imports
import { cases } from "./data/cases";
import { declensionTables } from "./data/declensionTables";
import { verbs } from "./data/verbs";
import { prepositions } from "./data/prepositions";
import { reflexiveVerbs } from "./data/reflexiveVerbs";
import { imperativeMood } from "./data/imperativeMood";
import { b1Conditionals as conditionals } from "./data/b1-conditionals";
import { b1MotionVerbs as motionVerbs } from "./data/b1-motion-verbs";
import { b1Participles as participles } from "./data/b1-participles";
import { b1VerbPreposition as verbPrepositions } from "./data/b1-verb-preposition";
import { a2ThematicVocabulary as a2Vocabulary } from "./data/a2-thematic-vocabulary";
import { b1ThematicVocabulary as b1Vocabulary } from "./data/b1-thematic-vocabulary";
import { adjectives } from "./data/adjectives";
import { numbers } from "./data/numbers";
import { pronouns } from "./data/pronouns";
import { a1Vocabulary } from "./data/vocabulary/a1-vocabulary";

// Hooks
import { useProgress } from "./hooks/useProgress";
import { useQuiz } from "./hooks/useQuiz";
import { useStreak } from "./hooks/useStreak";

// Utils
import { calculateOverallAccuracy } from "./utils/progressCalculations";
import { exportProgressToJSON, parseProgressFile } from "./utils/exportHelpers";
import { getRecommendedTopic } from "./utils/recommendations";
import { getTopicsDueForReview } from "./utils/spacedRepetition";

// Layout Components
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import DifficultySelector from "./components/layout/DifficultySelector";
import Footer from "./components/layout/Footer";
import ModeSelection from "./components/layout/ModeSelection";

// Section Components
import CasesSection from "./components/cases/CasesSection";
import VerbsSection from "./components/verbs/VerbsSection";
import PrepositionsSection from "./components/prepositions/PrepositionsSection";
import ReflexiveVerbsSection from "./components/reflexiveVerbs/ReflexiveVerbsSection";
import ImperativeMoodSection from "./components/imperativeMood/ImperativeMoodSection";
import ConditionalsSection from "./components/conditionals/ConditionalsSection";
import MotionVerbsSection from "./components/motionVerbs/MotionVerbsSection";
import ParticipleSection from "./components/participles/ParticipleSection";
import VerbPrepositionSection from "./components/verbPrepositions/VerbPrepositionSection";
import A1VocabularySection from "./components/vocabulary/A1VocabularySection";
import A2VocabularySection from "./components/vocabulary/A2VocabularySection";
import B1VocabularySection from "./components/vocabulary/B1VocabularySection";
import AdjectivesSection from "./components/adjectives/AdjectivesSection";
import NumbersSection from "./components/numbers/NumbersSection";
import PronounsSection from "./components/pronouns/PronounsSection";

// Shared Components
import ExportButton from "./components/shared/ExportButton";

const PolishGrammarApp = () => {
  // UI State
  const [appMode, setAppMode] = useState(null); // null, 'vocabulary', or 'grammar'
  const [section, setSection] = useState("dashboard");
  const [currentCase, setCurrentCase] = useState(0);
  const [currentVerb, setCurrentVerb] = useState(0);
  const [currentPreposition, setCurrentPreposition] = useState(0);
  const [currentReflexiveVerb, setCurrentReflexiveVerb] = useState(0);
  const [currentImperative, setCurrentImperative] = useState(0);
  const [currentConditional, setCurrentConditional] = useState(0);
  const [currentMotionVerb, setCurrentMotionVerb] = useState(0);
  const [currentParticiple, setCurrentParticiple] = useState(0);
  const [currentVerbPreposition, setCurrentVerbPreposition] = useState(0);
  const [currentA1Vocab, setCurrentA1Vocab] = useState(0);
  const [currentA2Vocab, setCurrentA2Vocab] = useState(0);
  const [currentB1Vocab, setCurrentB1Vocab] = useState(0);
  const [currentAdjective, setCurrentAdjective] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [currentPronoun, setCurrentPronoun] = useState(0);
  const [mode, setMode] = useState("learn");
  const [difficulty, setDifficulty] = useState("beginner");

  // Custom Hooks
  const { progress, setProgress, reviewSchedule, updateProgress } = useProgress(cases, verbs, prepositions);
  const quiz = useQuiz();
  useStreak(progress, setProgress);

  // Handlers
  const handleSubmit = () => {
    let correctCount = 0;
    let totalQuestions = 0;

    if (section === "cases") {
      const currentCaseData = cases[currentCase];

      if (mode === "quiz") {
        const quizData = currentCaseData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentCaseData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "sentence") {
        const sentenceData = currentCaseData.sentenceBuilder[difficulty] || [];
        totalQuestions = sentenceData.length;
        sentenceData.forEach((q, index) => {
          const userAnswer = (quiz.sentenceAnswers[index] || []).join(" ");
          if (userAnswer === q.correct) correctCount++;
        });
      }

      updateProgress("cases", currentCase, correctCount, totalQuestions);
    } else if (section === "verbs") {
      const currentVerbData = verbs[currentVerb];
      const quizData = currentVerbData.quiz[difficulty] || [];
      totalQuestions = quizData.length;

      if (mode === "quiz") {
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      }

      updateProgress("verbs", currentVerb, correctCount, totalQuestions);
    } else if (section === "prepositions") {
      const currentPrepositionData = prepositions[currentPreposition];

      if (mode === "quiz") {
        const quizData = currentPrepositionData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentPrepositionData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "matchpairs") {
        const matchData = currentPrepositionData.matchPairs[difficulty] || [];
        totalQuestions = matchData.length;
        matchData.forEach((item, index) => {
          const userAnswers = quiz.matchPairsAnswers[index] || [];
          const pairs = item.pairs;
          let pairCorrectCount = 0;
          pairs.forEach((pair, pIndex) => {
            if (userAnswers[pIndex] === pair.case) {
              pairCorrectCount++;
            }
          });
          // Count as correct if all pairs in the exercise are matched correctly
          if (pairCorrectCount === pairs.length) {
            correctCount++;
          }
        });
      }

      updateProgress("prepositions", currentPreposition, correctCount, totalQuestions);
    } else if (section === "reflexiveVerbs") {
      const currentData = reflexiveVerbs[currentReflexiveVerb];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      } else if (mode === "match") {
        const matchData = currentData.matchPairs[difficulty] || [];
        totalQuestions = matchData.length;
        matchData.forEach((item, index) => {
          const userAnswers = quiz.matchPairsAnswers[index] || [];
          const pairs = item.pairs;
          let pairCorrectCount = 0;
          pairs.forEach((pair, pIndex) => {
            if (userAnswers[pIndex] === pair.english) {
              pairCorrectCount++;
            }
          });
          if (pairCorrectCount === pairs.length) {
            correctCount++;
          }
        });
      }

      updateProgress("reflexiveVerbs", currentReflexiveVerb, correctCount, totalQuestions);
    } else if (section === "imperativeMood") {
      const currentData = imperativeMood[currentImperative];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("imperativeMood", currentImperative, correctCount, totalQuestions);
    } else if (section === "conditionals") {
      const currentData = conditionals[currentConditional];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("conditionals", currentConditional, correctCount, totalQuestions);
    } else if (section === "motionVerbs") {
      const currentData = motionVerbs[currentMotionVerb];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("motionVerbs", currentMotionVerb, correctCount, totalQuestions);
    } else if (section === "participles") {
      const currentData = participles[currentParticiple];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("participles", currentParticiple, correctCount, totalQuestions);
    } else if (section === "verbPrepositions") {
      const currentData = verbPrepositions[currentVerbPreposition];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("verbPrepositions", currentVerbPreposition, correctCount, totalQuestions);
    } else if (section === "a1Vocabulary") {
      const currentData = a1Vocabulary[currentA1Vocab];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("a1Vocabulary", currentA1Vocab, correctCount, totalQuestions);
    } else if (section === "a2Vocabulary") {
      const currentData = a2Vocabulary[currentA2Vocab];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("a2Vocabulary", currentA2Vocab, correctCount, totalQuestions);
    } else if (section === "b1Vocabulary") {
      const currentData = b1Vocabulary[currentB1Vocab];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("b1Vocabulary", currentB1Vocab, correctCount, totalQuestions);
    } else if (section === "adjectives") {
      const currentData = adjectives[currentAdjective];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("adjectives", currentAdjective, correctCount, totalQuestions);
    } else if (section === "numbers") {
      const currentData = numbers[currentNumber];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("numbers", currentNumber, correctCount, totalQuestions);
    } else if (section === "pronouns") {
      const currentData = pronouns[currentPronoun];

      if (mode === "quiz") {
        const quizData = currentData.quiz[difficulty] || [];
        totalQuestions = quizData.length;
        quizData.forEach((q, index) => {
          if (quiz.quizAnswers[index] === q.correct) correctCount++;
        });
      } else if (mode === "fillblank") {
        const fillData = currentData.fillBlanks[difficulty] || [];
        totalQuestions = fillData.length;
        fillData.forEach((q, index) => {
          if (quiz.fillBlankAnswers[index] === q.options[q.correct]) correctCount++;
        });
      }

      updateProgress("pronouns", currentPronoun, correctCount, totalQuestions);
    }

    quiz.setScore(correctCount);
    quiz.setShowResults(true);
  };

  const handleReset = () => {
    quiz.resetQuiz();
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    handleReset();
  };

  const handleSectionChange = (newSection) => {
    setSection(newSection);
    setMode("learn");
    handleReset();
  };

  const handleModeSelection = (selectedMode) => {
    setAppMode(selectedMode);
    setSection("dashboard");
    setMode("learn");
    handleReset();
  };

  const handleExportProgress = () => {
    exportProgressToJSON(progress, reviewSchedule, difficulty);
  };

  const handleImportProgress = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const data = await parseProgressFile(file);
        if (data.progress) setProgress(data.progress);
        alert("Progress imported successfully!");
      } catch (error) {
        alert("Error importing progress. Please check the file format.");
      }
    }
  };

  // Computed values
  const currentCaseData = section === "cases" ? cases[currentCase] : null;
  const currentVerbData = section === "verbs" ? verbs[currentVerb] : null;
  const currentPrepositionData = section === "prepositions" ? prepositions[currentPreposition] : null;
  const overallAccuracy = calculateOverallAccuracy(progress);

  // Show mode selection screen if no mode is selected
  if (appMode === null) {
    return <ModeSelection onSelectMode={handleModeSelection} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-6xl mx-auto">
        <Header streak={progress.streak} />

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <Navigation
            section={section}
            onSectionChange={handleSectionChange}
            appMode={appMode}
            onModeChange={setAppMode}
          />
          <DifficultySelector
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
            show={section !== "dashboard"}
          />
        </div>

        {/* Dashboard */}
        {section === "dashboard" && (
          <div className="space-y-6">
            {/* Overall Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-gray-800">Overall Accuracy</h3>
                </div>
                <p className="text-4xl font-bold text-green-600">{overallAccuracy}%</p>
                <p className="text-sm text-gray-600 mt-1">
                  {progress.totalScore} / {progress.totalAttempts} questions correct
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-gray-800">Topics Mastered</h3>
                </div>
                <p className="text-4xl font-bold text-blue-600">
                  {progress.masteredTopics.length}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {progress.masteredTopics.length > 0
                    ? progress.masteredTopics.join(", ")
                    : "Keep practicing!"}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <h3 className="font-bold text-gray-800">Review Due</h3>
                </div>
                <p className="text-4xl font-bold text-purple-600">
                  {getTopicsDueForReview(reviewSchedule).length}
                </p>
                <p className="text-sm text-gray-600 mt-1">Topics to review today</p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                What to Study Next
              </h3>

              {(() => {
                const recommendation = getRecommendedTopic(progress, reviewSchedule, cases, verbs);
                return (
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-300">
                    {recommendation.type === "weak" && (
                      <>
                        <p className="font-bold text-gray-800 mb-2">💪 Focus on Weak Area:</p>
                        <p className="text-lg text-gray-700">
                          Practice <span className="font-bold text-blue-600">{recommendation.topic}</span> - you scored below 70% here.
                        </p>
                      </>
                    )}
                    {recommendation.type === "review" && (
                      <>
                        <p className="font-bold text-gray-800 mb-2">🔄 Time for Review:</p>
                        <p className="text-lg text-gray-700">
                          Review topics based on spaced repetition schedule.
                        </p>
                      </>
                    )}
                    {recommendation.type === "new" && (
                      <>
                        <p className="font-bold text-gray-800 mb-2">✨ Learn Something New:</p>
                        <p className="text-lg text-gray-700">
                          Start with{" "}
                          <span className="font-bold text-blue-600">
                            {recommendation.section === "cases"
                              ? cases[recommendation.index].name
                              : verbs[recommendation.index].name}
                          </span>
                        </p>
                      </>
                    )}
                    <button
                      onClick={() => {
                        if (recommendation.section) {
                          handleSectionChange(recommendation.section);
                          if (recommendation.section === "cases") {
                            setCurrentCase(recommendation.index);
                          } else {
                            setCurrentVerb(recommendation.index);
                          }
                        }
                      }}
                      className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      Start Now →
                    </button>
                  </div>
                );
              })()}
            </div>

            {/* Weak Areas */}
            {progress.weakAreas.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-gray-800 text-xl mb-4">📉 Areas to Improve</h3>
                <div className="flex flex-wrap gap-2">
                  {progress.weakAreas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Progress by Topic */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-gray-800 text-xl mb-4">
                📊 Progress by Topic - {appMode === "vocabulary" ? "Vocabulary" : "Grammar"}
              </h3>
              <div className="space-y-4">
                {/* Vocabulary Mode: Show A1, A2, B1 Vocabulary */}
                {appMode === "vocabulary" && (
                  <>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">A1 Vocabulary (Beginner)</h4>
                      <div className="text-sm text-gray-600 mb-2">
                        {a1Vocabulary.length} topics available
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">A2 Vocabulary (Elementary)</h4>
                      <div className="text-sm text-gray-600 mb-2">
                        {a2Vocabulary.length} topics available
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">B1 Vocabulary (Intermediate)</h4>
                      <div className="text-sm text-gray-600 mb-2">
                        {b1Vocabulary.length} topics available
                      </div>
                    </div>
                  </>
                )}

                {/* Grammar Mode: Show Cases, Verbs, and other grammar topics */}
                {appMode === "grammar" && (
                  <>
                    {/* Cases Progress */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Cases</h4>
                      {cases.map((caseItem, index) => {
                        const caseProgress = progress.cases[index];
                        const accuracy = caseProgress
                          ? Math.round((caseProgress.totalScore / (caseProgress.attempts * 10)) * 100)
                          : 0;
                        return (
                          <div key={index} className="mb-3">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">{caseItem.name}</span>
                              <span className="text-sm font-medium text-gray-700">
                                {caseProgress ? `${accuracy}%` : "Not started"}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all ${
                                  accuracy >= 90
                                    ? "bg-green-500"
                                    : accuracy >= 70
                                    ? "bg-yellow-500"
                                    : accuracy > 0
                                    ? "bg-red-500"
                                    : "bg-gray-300"
                                }`}
                                style={{ width: `${accuracy}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Verbs Progress */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Verbs</h4>
                      {verbs.map((verb, index) => {
                        const verbProgress = progress.verbs[index];
                        const accuracy = verbProgress
                          ? Math.round((verbProgress.totalScore / (verbProgress.attempts * 10)) * 100)
                          : 0;
                        return (
                          <div key={index} className="mb-3">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">{verb.name}</span>
                              <span className="text-sm font-medium text-gray-700">
                                {verbProgress ? `${accuracy}%` : "Not started"}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all ${
                                  accuracy >= 90
                                    ? "bg-green-500"
                                    : accuracy >= 70
                                    ? "bg-yellow-500"
                                    : accuracy > 0
                                    ? "bg-red-500"
                                    : "bg-gray-300"
                                }`}
                                style={{ width: `${accuracy}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Other Grammar Topics */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Other Grammar Topics</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>🔗 Prepositions - {prepositions.length} topics</div>
                        <div>🔄 Reflexive Verbs - {reflexiveVerbs.length} topics</div>
                        <div>🎯 Imperative Mood - {imperativeMood.length} topics</div>
                        <div>❓ Conditionals - {conditionals.length} topics</div>
                        <div>🚶 Motion Verbs - {motionVerbs.length} topics</div>
                        <div>📝 Participles - {participles.length} topics</div>
                        <div>📍 Verb+Prepositions - {verbPrepositions.length} topics</div>
                        <div>✨ Adjectives - {adjectives.length} topics</div>
                        <div>🔢 Numbers - {numbers.length} topics</div>
                        <div>👤 Pronouns - {pronouns.length} topics</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Data Management */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-gray-800 text-xl mb-4">Manage Your Data</h3>
              <p className="text-sm text-gray-600 mb-4">
                ⚠️ Your progress is stored in your browser's memory. Export your data to save it permanently!
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleExportProgress}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Export Progress
                </button>
                <label className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors cursor-pointer">
                  <Upload className="w-5 h-5" />
                  Import Progress
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportProgress}
                    className="hidden"
                  />
                </label>
                <ExportButton
                  cases={cases}
                  verbs={verbs}
                  prepositions={prepositions}
                  declensionTables={declensionTables}
                />
              </div>
            </div>
          </div>
        )}

        {/* Cases Section */}
        {section === "cases" && currentCaseData && (
          <CasesSection
            cases={cases}
            currentCase={currentCase}
            setCurrentCase={setCurrentCase}
            currentCaseData={currentCaseData}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            sentenceAnswers={quiz.sentenceAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
            setSentenceAnswers={quiz.setSentenceAnswers}
            declensionTables={declensionTables}
          />
        )}

        {/* Verbs Section */}
        {section === "verbs" && currentVerbData && (
          <VerbsSection
            verbs={verbs}
            currentVerb={currentVerb}
            setCurrentVerb={setCurrentVerb}
            currentVerbData={currentVerbData}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
          />
        )}

        {/* Prepositions Section */}
        {section === "prepositions" && currentPrepositionData && (
          <PrepositionsSection
            prepositions={prepositions}
            currentPreposition={currentPreposition}
            setCurrentPreposition={setCurrentPreposition}
            currentPrepositionData={currentPrepositionData}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            matchPairsAnswers={quiz.matchPairsAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
            setMatchPairsAnswers={quiz.setMatchPairsAnswers}
          />
        )}

        {/* Reflexive Verbs Section */}
        {section === "reflexiveVerbs" && reflexiveVerbs[currentReflexiveVerb] && (
          <ReflexiveVerbsSection
            reflexiveVerbs={reflexiveVerbs}
            currentReflexiveVerb={currentReflexiveVerb}
            setCurrentReflexiveVerb={setCurrentReflexiveVerb}
            currentReflexiveVerbData={reflexiveVerbs[currentReflexiveVerb]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            matchPairsAnswers={quiz.matchPairsAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
            setMatchPairsAnswers={quiz.setMatchPairsAnswers}
          />
        )}

        {/* Imperative Mood Section */}
        {section === "imperativeMood" && imperativeMood[currentImperative] && (
          <ImperativeMoodSection
            imperativeMood={imperativeMood}
            currentImperative={currentImperative}
            setCurrentImperative={setCurrentImperative}
            currentImperativeData={imperativeMood[currentImperative]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* Conditionals Section */}
        {section === "conditionals" && conditionals[currentConditional] && (
          <ConditionalsSection
            conditionals={conditionals}
            currentConditional={currentConditional}
            setCurrentConditional={setCurrentConditional}
            currentConditionalData={conditionals[currentConditional]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* Motion Verbs Section */}
        {section === "motionVerbs" && motionVerbs[currentMotionVerb] && (
          <MotionVerbsSection
            motionVerbs={motionVerbs}
            currentMotionVerb={currentMotionVerb}
            setCurrentMotionVerb={setCurrentMotionVerb}
            currentMotionVerbData={motionVerbs[currentMotionVerb]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* Participles Section */}
        {section === "participles" && participles[currentParticiple] && (
          <ParticipleSection
            participles={participles}
            currentParticiple={currentParticiple}
            setCurrentParticiple={setCurrentParticiple}
            currentParticipleData={participles[currentParticiple]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* Verb Prepositions Section */}
        {section === "verbPrepositions" && verbPrepositions[currentVerbPreposition] && (
          <VerbPrepositionSection
            verbPrepositions={verbPrepositions}
            currentVerbPreposition={currentVerbPreposition}
            setCurrentVerbPreposition={setCurrentVerbPreposition}
            currentVerbPrepositionData={verbPrepositions[currentVerbPreposition]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* A1 Vocabulary Section */}
        {section === "a1Vocabulary" && a1Vocabulary[currentA1Vocab] && (
          <A1VocabularySection
            a1Vocabulary={a1Vocabulary}
            currentA1Vocab={currentA1Vocab}
            setCurrentA1Vocab={setCurrentA1Vocab}
            currentA1VocabData={a1Vocabulary[currentA1Vocab]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* A2 Vocabulary Section */}
        {section === "a2Vocabulary" && a2Vocabulary[currentA2Vocab] && (
          <A2VocabularySection
            a2Vocabulary={a2Vocabulary}
            currentA2Vocab={currentA2Vocab}
            setCurrentA2Vocab={setCurrentA2Vocab}
            currentA2VocabData={a2Vocabulary[currentA2Vocab]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* B1 Vocabulary Section */}
        {section === "b1Vocabulary" && b1Vocabulary[currentB1Vocab] && (
          <B1VocabularySection
            b1Vocabulary={b1Vocabulary}
            currentB1Vocab={currentB1Vocab}
            setCurrentB1Vocab={setCurrentB1Vocab}
            currentB1VocabData={b1Vocabulary[currentB1Vocab]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* Adjectives Section */}
        {section === "adjectives" && adjectives[currentAdjective] && (
          <AdjectivesSection
            adjectives={adjectives}
            currentAdjective={currentAdjective}
            setCurrentAdjective={setCurrentAdjective}
            currentAdjectiveData={adjectives[currentAdjective]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* Numbers Section */}
        {section === "numbers" && numbers[currentNumber] && (
          <NumbersSection
            numbers={numbers}
            currentNumber={currentNumber}
            setCurrentNumber={setCurrentNumber}
            currentNumberData={numbers[currentNumber]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        {/* Pronouns Section */}
        {section === "pronouns" && pronouns[currentPronoun] && (
          <PronounsSection
            pronouns={pronouns}
            currentPronoun={currentPronoun}
            setCurrentPronoun={setCurrentPronoun}
            currentPronounData={pronouns[currentPronoun]}
            mode={mode}
            difficulty={difficulty}
            quizAnswers={quiz.quizAnswers}
            fillBlankAnswers={quiz.fillBlankAnswers}
            showResults={quiz.showResults}
            score={quiz.score}
            handleModeChange={handleModeChange}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            setQuizAnswers={quiz.setQuizAnswers}
            setFillBlankAnswers={quiz.setFillBlankAnswers}
          />
        )}

        <Footer />
      </div>
    </div>
  );
};

export default PolishGrammarApp;
