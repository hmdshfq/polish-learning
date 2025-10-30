import React from "react";
import { CheckCircle, XCircle, ArrowRight, Edit3, Shuffle, Table } from "lucide-react";
import ScoreDisplay from "../shared/ScoreDisplay";

const CasesSection = ({
  cases,
  currentCase,
  setCurrentCase,
  currentCaseData,
  mode,
  difficulty,
  quizAnswers,
  fillBlankAnswers,
  showResults,
  score,
  handleModeChange,
  handleReset,
  handleSubmit,
  setQuizAnswers,
  setFillBlankAnswers,
  sentenceAnswers,
  setSentenceAnswers,
  declensionTables,
}) => {
  const quizData = currentCaseData.quiz[difficulty] || [];
  const fillData = currentCaseData.fillBlanks[difficulty] || [];
  const sentenceData = currentCaseData.sentenceBuilder[difficulty] || [];
  const totalQuestions =
    mode === "quiz"
      ? quizData.length
      : mode === "fillblank"
      ? fillData.length
      : mode === "sentence"
      ? sentenceData.length
      : 0;

  const handleSentenceWordClick = (questionIndex, word) => {
    if (showResults) return;
    const current = sentenceAnswers[questionIndex] || [];
    const newAnswer = [...current, word];
    setSentenceAnswers({ ...sentenceAnswers, [questionIndex]: newAnswer });
  };

  const handleSentenceRemoveWord = (questionIndex, index) => {
    if (showResults) return;
    const current = sentenceAnswers[questionIndex] || [];
    const newAnswer = current.filter((_, i) => i !== index);
    setSentenceAnswers({ ...sentenceAnswers, [questionIndex]: newAnswer });
  };

  return (
    <div>
      {/* Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="flex gap-2 flex-wrap mb-4">
          {cases.map((c, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentCase(index);
                handleReset();
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === currentCase
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {c.name}
            </button>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => handleModeChange("learn")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "learn"
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700"
            }`}>
            Learn
          </button>
          <button
            onClick={() => handleModeChange("quiz")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "quiz"
                ? "bg-purple-600 text-white"
                : "bg-purple-100 text-purple-700"
            }`}>
            Quiz
          </button>
          <button
            onClick={() => handleModeChange("fillblank")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "fillblank"
                ? "bg-orange-600 text-white"
                : "bg-orange-100 text-orange-700"
            }`}>
            Practice
          </button>
          <button
            onClick={() => handleModeChange("sentence")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "sentence"
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-700"
            }`}>
            Build Sentence
          </button>
          <button
            onClick={() => handleModeChange("declension")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "declension"
                ? "bg-teal-600 text-white"
                : "bg-teal-100 text-teal-700"
            }`}>
            Tables
          </button>
        </div>
      </div>

      {/* Content */}
      {mode === "learn" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-2">
            {currentCaseData.name} ({currentCaseData.polish})
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {currentCaseData.question} • {currentCaseData.questionEng}
          </p>

          <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">📚 When to use:</h3>
            <p className="text-gray-700">{currentCaseData.usage}</p>
          </div>

          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">
              💡 Think of it like:
            </h3>
            <p className="text-gray-700">{currentCaseData.analogy}</p>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-gray-800 mb-4 text-xl">Examples:</h3>
            <div className="space-y-4">
              {currentCaseData.examples.map((example, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
                  <p className="text-lg font-medium text-gray-800 mb-1">
                    {example.polish
                      .split(example.highlight)
                      .map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="bg-yellow-200 px-1 rounded font-bold">
                              {example.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                  </p>
                  <p className="text-gray-600">{example.english}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {mode === "quiz" && quizData.length > 0 && (
        <QuizMode
          data={quizData}
          title={`${
            difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
          } Quiz: ${currentCaseData.name}`}
          quizAnswers={quizAnswers}
          showResults={showResults}
          onAnswerSelect={(qIndex, aIndex) =>
            setQuizAnswers({ ...quizAnswers, [qIndex]: aIndex })
          }
          onSubmit={handleSubmit}
          onReset={handleReset}
          score={score}
          total={totalQuestions}
        />
      )}

      {mode === "fillblank" && fillData.length > 0 && (
        <FillBlankMode
          data={fillData}
          title={`${
            difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
          } Practice: ${currentCaseData.name}`}
          answers={fillBlankAnswers}
          showResults={showResults}
          onAnswerSelect={(qIndex, answer) =>
            setFillBlankAnswers({ ...fillBlankAnswers, [qIndex]: answer })
          }
          onSubmit={handleSubmit}
          onReset={handleReset}
          score={score}
          total={totalQuestions}
        />
      )}

      {mode === "sentence" && sentenceData.length > 0 && (
        <SentenceMode
          data={sentenceData}
          title={`${
            difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
          } Build Sentence: ${currentCaseData.name}`}
          sentenceAnswers={sentenceAnswers}
          showResults={showResults}
          onWordClick={handleSentenceWordClick}
          onRemoveWord={handleSentenceRemoveWord}
          onSubmit={handleSubmit}
          onReset={handleReset}
          score={score}
          total={totalQuestions}
        />
      )}

      {mode === "declension" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            Noun Declension Tables
          </h2>
          <p className="text-gray-600 mb-6">
            See how nouns change in all 7 cases. Polish has 3 genders and each
            declines differently!
          </p>

          <div className="space-y-6">
            {declensionTables.map((table, tIndex) => (
              <div
                key={tIndex}
                className="border-2 border-teal-200 rounded-lg overflow-hidden">
                <div className="bg-teal-100 p-4">
                  <h3 className="font-bold text-teal-900 text-lg">
                    {table.title}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-3 text-left font-semibold text-gray-700 border-b-2">
                          Case
                        </th>
                        <th className="p-3 text-left font-semibold text-gray-700 border-b-2">
                          Singular
                        </th>
                        <th className="p-3 text-left font-semibold text-gray-700 border-b-2">
                          Plural
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rIndex) => (
                        <tr
                          key={rIndex}
                          className="hover:bg-gray-50 transition-colors">
                          <td className="p-3 border-b font-medium text-gray-700">
                            {row.case}
                          </td>
                          <td className="p-3 border-b text-teal-700 font-medium">
                            {row.singular}
                          </td>
                          <td className="p-3 border-b text-teal-700 font-medium">
                            {row.plural}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700">
              <span className="font-bold">💡 Pro Tip:</span> Notice the
              patterns! Masculine animate nouns (like 'kot') have different
              Accusative forms than inanimate ones (like 'dom'). This is a key
              feature of Polish grammar.
            </p>
          </div>
        </div>
      )}

      {((mode === "quiz" && quizData.length === 0) ||
        (mode === "fillblank" && fillData.length === 0) ||
        (mode === "sentence" && sentenceData.length === 0)) &&
        mode !== "learn" &&
        mode !== "declension" && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 text-lg">
              No {mode === "quiz" ? "quiz questions" : "practice exercises"}{" "}
              available for {difficulty} level yet.
            </p>
            <p className="text-gray-500 mt-2">
              Try a different difficulty level!
            </p>
          </div>
        )}
    </div>
  );
};

// Verbs Section Component

export default CasesSection;
