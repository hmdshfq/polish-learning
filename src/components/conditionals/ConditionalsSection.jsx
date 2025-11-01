import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import ScoreDisplay from "../shared/ScoreDisplay";

const ConditionalsSection = ({
  conditionals,
  currentConditional,
  setCurrentConditional,
  currentConditionalData,
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
}) => {
  const quizData = currentConditionalData?.quiz?.[difficulty] || [];
  const fillData = currentConditionalData?.fillBlanks?.[difficulty] || [];

  const totalQuestions =
    mode === "quiz"
      ? quizData.length
      : mode === "fillblank"
      ? fillData.length
      : 0;

  const renderConditionalInfo = () => {
    if (!currentConditionalData?.conditionalTypes) return null;

    return (
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-700 mb-4">
          🔀 Types of Conditionals
        </h3>
        <div className="space-y-3">
          {currentConditionalData.conditionalTypes.types.slice(0, 3).map(
            (type, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 border-l-4 border-slate-500 rounded">
                <div className="font-bold text-slate-800 mb-1">{type.type}</div>
                <div className="text-sm text-gray-700 mb-2">
                  {type.description}
                </div>
                <div className="text-sm font-semibold text-slate-700 mb-1">
                  {type.structure}
                </div>
                <div className="italic text-gray-600 mb-1">
                  Example: {type.example}
                </div>
                <div className="text-gray-600 text-sm">
                  English: {type.exampleEng}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  const renderCommonPatterns = () => {
    if (!currentConditionalData?.commonPatterns) return null;

    return (
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-700 mb-4">
          💡 Common Patterns
        </h3>
        <div className="space-y-4">
          {currentConditionalData.commonPatterns.slice(0, 2).map(
            (pattern, idx) => (
              <div key={idx} className="p-4 bg-white border-2 border-slate-200 rounded">
                <div className="font-bold text-slate-800 mb-2">
                  {pattern.pattern}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  Structure: {pattern.structure}
                </div>
                <div className="space-y-1">
                  {pattern.examples.slice(0, 2).map((ex, eIdx) => (
                    <div key={eIdx} className="text-sm">
                      <span className="font-semibold text-gray-800">
                        {ex.polish}
                      </span>{" "}
                      <span className="text-gray-600 italic">
                        ({ex.english})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="flex gap-2 flex-wrap mb-4">
          {conditionals.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentConditional(index);
                handleReset();
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === currentConditional
                  ? "bg-slate-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {item.icon} {item.name}
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
                ? "bg-amber-600 text-white"
                : "bg-amber-100 text-amber-700"
            }`}>
            Practice
          </button>
        </div>
      </div>

      {/* Learn Mode */}
      {mode === "learn" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{currentConditionalData.icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-slate-600">
                {currentConditionalData.name}
              </h2>
              <p className="text-xl text-gray-600">
                {currentConditionalData.polish}
              </p>
            </div>
          </div>

          <div className="mb-6 p-4 bg-slate-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">📚 Explanation:</h3>
            <p className="text-gray-700">{currentConditionalData.explanation}</p>
          </div>

          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">💡 Think of it like:</h3>
            <p className="text-gray-700">{currentConditionalData.analogy}</p>
          </div>

          {renderConditionalInfo()}
          {renderCommonPatterns()}
        </div>
      )}

      {/* Quiz Mode */}
      {mode === "quiz" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          {quizData.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              No quiz content available for this difficulty level.
            </p>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-slate-600 mb-6">Quiz</h2>
              <div className="space-y-6">
                {quizData.map((q, qIndex) => (
                  <div
                    key={qIndex}
                    className={`p-4 border-2 rounded-lg ${
                      showResults
                        ? quizAnswers[qIndex] === q.correct
                          ? "bg-green-50 border-green-500"
                          : "bg-red-50 border-red-500"
                        : "bg-white border-gray-200"
                    }`}>
                    <div className="flex items-start gap-3 mb-3">
                      {showResults && (
                        <div>
                          {quizAnswers[qIndex] === q.correct ? (
                            <CheckCircle className="text-green-600 w-6 h-6" />
                          ) : (
                            <XCircle className="text-red-600 w-6 h-6" />
                          )}
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 mb-3">{q.question}</p>
                        <div className="space-y-2">
                          {q.options.map((option, oIndex) => (
                            <button
                              key={oIndex}
                              onClick={() => {
                                if (!showResults) {
                                  setQuizAnswers({
                                    ...quizAnswers,
                                    [qIndex]: oIndex,
                                  });
                                }
                              }}
                              disabled={showResults}
                              className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                                quizAnswers[qIndex] === oIndex
                                  ? "bg-slate-100 border-slate-500"
                                  : "bg-gray-50 border-gray-300 hover:border-slate-300"
                              } disabled:cursor-not-allowed`}>
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    {showResults && (
                      <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                        <p className="text-sm text-gray-700">
                          <span className="font-bold">Explanation:</span>{" "}
                          {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {showResults ? (
                <ScoreDisplay score={score} total={totalQuestions} onReset={handleReset} />
              ) : (
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleSubmit("quiz", quizAnswers, quizData)}
                    disabled={Object.keys(quizAnswers).length < quizData.length}
                    className="flex-1 bg-slate-600 text-white py-3 rounded-lg font-bold hover:bg-slate-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                    Submit Quiz
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Fill Blanks Mode */}
      {mode === "fillblank" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          {fillData.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              No practice content available for this difficulty level.
            </p>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-slate-600 mb-6">
                Fill in the Blanks
              </h2>
              <div className="space-y-6">
                {fillData.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`p-4 border-2 rounded-lg ${
                      showResults
                        ? fillBlankAnswers[itemIndex] === item.options[item.correct]
                          ? "bg-green-50 border-green-500"
                          : "bg-red-50 border-red-500"
                        : "bg-white border-gray-200"
                    }`}>
                    <div className="flex items-start gap-3">
                      {showResults && (
                        <div>
                          {fillBlankAnswers[itemIndex] ===
                          item.options[item.correct] ? (
                            <CheckCircle className="text-green-600 w-6 h-6" />
                          ) : (
                            <XCircle className="text-red-600 w-6 h-6" />
                          )}
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 mb-3">
                          {item.polish}
                        </p>
                        <p className="text-gray-600 italic mb-3">{item.english}</p>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {item.options.map((option, oIndex) => (
                            <button
                              key={oIndex}
                              onClick={() => {
                                if (!showResults) {
                                  setFillBlankAnswers({
                                    ...fillBlankAnswers,
                                    [itemIndex]: option,
                                  });
                                }
                              }}
                              disabled={showResults}
                              className={`p-2 rounded-lg border-2 text-sm transition-colors ${
                                fillBlankAnswers[itemIndex] === option
                                  ? "bg-slate-100 border-slate-500"
                                  : "bg-gray-50 border-gray-300 hover:border-slate-300"
                              } disabled:cursor-not-allowed`}>
                              {option}
                            </button>
                          ))}
                        </div>
                        {showResults && (
                          <div className="p-2 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
                            <p className="text-gray-700">
                              <span className="font-bold">Correct answer:</span>{" "}
                              {item.options[item.correct]}
                            </p>
                            {item.explanation && (
                              <p className="text-gray-600 mt-1">
                                {item.explanation}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {showResults ? (
                <ScoreDisplay score={score} total={totalQuestions} onReset={handleReset} />
              ) : (
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleSubmit("fillblank", fillBlankAnswers, fillData)}
                    disabled={Object.keys(fillBlankAnswers).length < fillData.length}
                    className="flex-1 bg-slate-600 text-white py-3 rounded-lg font-bold hover:bg-slate-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                    Submit Practice
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConditionalsSection;