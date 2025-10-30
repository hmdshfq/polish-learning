import React, { useState } from "react";
import { TrendingUp, Target, Calendar, Star, Download, Upload } from "lucide-react";

// Data imports
import { cases } from "./data/cases";
import { declensionTables } from "./data/declensionTables";
import { verbs } from "./data/verbs";

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

// Section Components
import CasesSection from "./components/cases/CasesSection";
import VerbsSection from "./components/verbs/VerbsSection";

const PolishGrammarApp = () => {
  // UI State
  const [section, setSection] = useState("dashboard");
  const [currentCase, setCurrentCase] = useState(0);
  const [currentVerb, setCurrentVerb] = useState(0);
  const [mode, setMode] = useState("learn");
  const [difficulty, setDifficulty] = useState("beginner");

  // Custom Hooks
  const { progress, setProgress, reviewSchedule, updateProgress } = useProgress(cases, verbs);
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
  const overallAccuracy = calculateOverallAccuracy(progress);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-6xl mx-auto">
        <Header streak={progress.streak} />

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <Navigation section={section} onSectionChange={handleSectionChange} />
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
              <h3 className="font-bold text-gray-800 text-xl mb-4">📊 Progress by Topic</h3>
              <div className="space-y-4">
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
              </div>
            </div>

            {/* Data Management */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-gray-800 text-xl mb-4">Manage Your Progress</h3>
              <p className="text-sm text-gray-600 mb-4">
                ⚠️ Your progress is stored in your browser's memory. Export your data to save it permanently!
              </p>
              <div className="flex gap-3">
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

        <Footer />
      </div>
    </div>
  );
};

export default PolishGrammarApp;
