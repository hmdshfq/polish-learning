import React from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import ScoreDisplay from "../shared/ScoreDisplay";

const VerbsSection = ({
  verbs,
  currentVerb,
  setCurrentVerb,
  currentVerbData,
  mode,
  difficulty,
  quizAnswers,
  showResults,
  score,
  handleModeChange,
  handleReset,
  handleSubmit,
  setQuizAnswers,
}) => {
  const quizData = currentVerbData.quiz[difficulty] || [];
  const totalQuestions = quizData.length;

  return (
    <div>
      {/* Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="flex gap-2 flex-wrap mb-4">
          {verbs.map((v, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentVerb(index);
                handleReset();
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === currentVerb
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {v.icon} {v.name}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
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
        </div>
      </div>

      {/* Content */}
      {mode === "learn" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{currentVerbData.icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-purple-600">
                {currentVerbData.name}
              </h2>
              <p className="text-xl text-gray-600">{currentVerbData.topic}</p>
            </div>
          </div>

          <div className="mb-6 p-4 bg-purple-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">📚 Explanation:</h3>
            <p className="text-gray-700">{currentVerbData.explanation}</p>
          </div>

          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">
              💡 Think of it like:
            </h3>
            <p className="text-gray-700">{currentVerbData.analogy}</p>
          </div>

          {currentVerbData.aspectPairs && (
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-4 text-xl">
                Common Aspect Pairs:
              </h3>
              <div className="space-y-3">
                {currentVerbData.aspectPairs.map((pair, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-400">
                    <div className="flex gap-4 items-center flex-wrap">
                      <div className="flex-1 min-w-36">
                        <p className="text-sm text-gray-600">Imperfective</p>
                        <p className="text-lg font-bold text-blue-600">
                          {pair.imperfective}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                      <div className="flex-1 min-w-36">
                        <p className="text-sm text-gray-600">Perfective</p>
                        <p className="text-lg font-bold text-green-600">
                          {pair.perfective}
                        </p>
                      </div>
                      <div className="flex-1 min-w-48">
                        <p className="text-gray-700">{pair.english}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {mode === "quiz" && quizData.length > 0 && (
        <QuizMode
          data={quizData}
          title={`${
            difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
          } Quiz: ${currentVerbData.name}`}
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

      {mode === "quiz" && quizData.length === 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-600 text-lg">
            No quiz questions available for {difficulty} level yet.
          </p>
          <p className="text-gray-500 mt-2">
            Try a different difficulty level!
          </p>
        </div>
      )}
    </div>
  );
};

// Quiz Mode Component
const QuizMode = ({
  data,
  title,
  quizAnswers,
  showResults,
  onAnswerSelect,
  onSubmit,
  onReset,
  score,
  total,
}) => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold text-purple-600 mb-6">{title}</h2>
    <div className="space-y-6 mb-8">
      {data.map((q, qIndex) => (
        <div key={qIndex} className="p-4 bg-gray-50 rounded-lg">
          <p className="font-medium text-gray-800 mb-4">
            {qIndex + 1}. {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((option, oIndex) => {
              const isSelected = quizAnswers[qIndex] === oIndex;
              const isCorrect = oIndex === q.correct;
              const showCorrect = showResults && isCorrect;
              const showIncorrect = showResults && isSelected && !isCorrect;

              return (
                <button
                  key={oIndex}
                  onClick={() => onAnswerSelect(qIndex, oIndex)}
                  disabled={showResults}
                  className={`w-full p-3 rounded-lg text-left transition-all ${
                    showCorrect
                      ? "bg-green-100 border-2 border-green-500"
                      : showIncorrect
                      ? "bg-red-100 border-2 border-red-500"
                      : isSelected
                      ? "bg-purple-100 border-2 border-purple-400"
                      : "bg-white border-2 border-gray-200 hover:border-purple-300"
                  } ${showResults ? "cursor-default" : "cursor-pointer"}`}>
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {showIncorrect && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          {showResults && (
            <div className="mt-3 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Explanation:</span> {q.explanation}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>

    {!showResults ? (
      <button
        onClick={onSubmit}
        disabled={Object.keys(quizAnswers).length < total}
        className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed">
        Submit Answers
      </button>
    ) : (
      <ScoreDisplay score={score} total={total} onReset={onReset} />
    )}
  </div>
);

// Fill Blank Mode Component
const FillBlankMode = ({
  data,
  title,
  answers,
  showResults,
  onAnswerSelect,
  onSubmit,
  onReset,
  score,
  total,
}) => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold text-orange-600 mb-6">{title}</h2>
    <div className="space-y-6 mb-8">
      {data.map((q, qIndex) => (
        <div key={qIndex} className="p-4 bg-gray-50 rounded-lg">
          <p className="font-medium text-gray-800 mb-2 text-lg">
            {qIndex + 1}. {q.sentence}
          </p>
          <p className="text-sm text-gray-600 mb-2">English: {q.english}</p>
          {q.hint && (
            <p className="text-sm text-indigo-600 mb-4">💡 Hint: {q.hint}</p>
          )}
          <div className="grid grid-cols-2 gap-2">
            {q.options.map((option, oIndex) => {
              const isSelected = answers[qIndex] === option;
              const isCorrect = option === q.correct;
              const showCorrect = showResults && isCorrect;
              const showIncorrect = showResults && isSelected && !isCorrect;

              return (
                <button
                  key={oIndex}
                  onClick={() => onAnswerSelect(qIndex, option)}
                  disabled={showResults}
                  className={`p-3 rounded-lg text-center font-medium transition-all ${
                    showCorrect
                      ? "bg-green-100 border-2 border-green-500"
                      : showIncorrect
                      ? "bg-red-100 border-2 border-red-500"
                      : isSelected
                      ? "bg-orange-100 border-2 border-orange-400"
                      : "bg-white border-2 border-gray-200 hover:border-orange-300"
                  } ${showResults ? "cursor-default" : "cursor-pointer"}`}>
                  <div className="flex items-center justify-center gap-2">
                    <span>{option}</span>
                    {showCorrect && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {showIncorrect && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>

    {!showResults ? (
      <button
        onClick={onSubmit}
        disabled={Object.keys(answers).length < total}
        className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed">
        Submit Answers
      </button>
    ) : (
      <ScoreDisplay score={score} total={total} onReset={onReset} />
    )}
  </div>
);

// Sentence Mode Component
const SentenceMode = ({
  data,
  title,
  sentenceAnswers,
  showResults,
  onWordClick,
  onRemoveWord,
  onSubmit,
  onReset,
  score,
  total,
}) => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
    <p className="text-gray-600 mb-6">
      Click the words in the correct order to build the sentence. Click on words
      in your answer to remove them.
    </p>

    <div className="space-y-6 mb-8">
      {data.map((q, qIndex) => {
        const usedWords = sentenceAnswers[qIndex] || [];
        const availableWords = q.words.filter((w) => !usedWords.includes(w));
        const userAnswer = usedWords.join(" ");
        const isCorrect = userAnswer === q.correct;

        return (
          <div key={qIndex} className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-800 mb-2">
              {qIndex + 1}. Build this sentence:
            </p>
            <p className="text-gray-600 mb-3">English: {q.english}</p>
            <p className="text-sm text-indigo-600 mb-4">💡 Hint: {q.hint}</p>

            <div className="mb-4 p-4 bg-white rounded-lg border-2 border-blue-300 min-h-16">
              <p className="text-xs text-gray-500 mb-2">Your answer:</p>
              <div className="flex flex-wrap gap-2">
                {usedWords.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => onRemoveWord(qIndex, idx)}
                    disabled={showResults}
                    className={`px-3 py-2 rounded-lg font-medium ${
                      showResults && isCorrect
                        ? "bg-green-100 text-green-700"
                        : showResults && !isCorrect
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer"
                    }`}>
                    {word}
                  </button>
                ))}
                {usedWords.length === 0 && (
                  <span className="text-gray-400 italic">
                    Click words below to build sentence...
                  </span>
                )}
              </div>
            </div>

            {!showResults && (
              <div className="flex flex-wrap gap-2">
                {availableWords.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => onWordClick(qIndex, word)}
                    className="px-3 py-2 bg-white border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-100 cursor-pointer transition-colors">
                    {word}
                  </button>
                ))}
              </div>
            )}

            {showResults && (
              <div
                className={`mt-3 p-3 rounded border-l-4 ${
                  isCorrect
                    ? "bg-green-50 border-green-400"
                    : "bg-red-50 border-red-400"
                }`}>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">
                    {isCorrect ? "✅ Correct!" : "❌ Incorrect."}
                  </span>
                  {!isCorrect && ` Correct answer: ${q.correct}`}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>

    {!showResults ? (
      <button
        onClick={onSubmit}
        disabled={
          Object.keys(sentenceAnswers).length < total ||
          Object.values(sentenceAnswers).some((ans) => ans.length === 0)
        }
        className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed">
        Submit Answers
      </button>
    ) : (
      <ScoreDisplay score={score} total={total} onReset={onReset} />
    )}
  </div>
);

// Score Display Component

export default VerbsSection;
