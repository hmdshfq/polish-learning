import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import ScoreDisplay from "../shared/ScoreDisplay";

const ImperativeMoodSection = ({
  imperativeMood,
  currentImperative,
  setCurrentImperative,
  currentImperativeData,
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
  const quizData = currentImperativeData?.quiz?.[difficulty] || [];
  const fillData = currentImperativeData?.fillBlanks?.[difficulty] || [];

  const totalQuestions =
    mode === "quiz"
      ? quizData.length
      : mode === "fillblank"
      ? fillData.length
      : 0;

  const renderLearningContent = () => {
    return (
      <div>
        {currentImperativeData?.basicFormation && (
          <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h3 className="font-bold text-orange-800 mb-3">
              📖 {currentImperativeData.basicFormation.title}
            </h3>
            <ol className="space-y-3 text-gray-700">
              {currentImperativeData.basicFormation.steps.map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="font-bold text-orange-600 flex-shrink-0">
                    {idx + 1}.
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {step.step}
                    </div>
                    {step.examples && (
                      <div className="text-sm text-gray-600 mt-1">
                        Example: {step.examples.join(", ")}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {currentImperativeData?.politenessForms && (
          <div className="mb-6">
            <h3 className="font-bold text-orange-800 mb-4 text-lg">
              🎯 {currentImperativeData.politenessForms.title}
            </h3>
            <div className="space-y-4">
              {currentImperativeData.politenessForms.forms.slice(0, 3).map(
                (form, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border-l-4 border-orange-500 rounded">
                    <div className="font-bold text-orange-700 mb-2">
                      {form.level}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Usage: {form.usage}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Pattern: {form.pattern}
                    </div>
                    <div className="space-y-1">
                      {form.examples.slice(0, 2).map((ex, eIdx) => (
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
        )}

        {currentImperativeData?.commonExpressions && (
          <div className="mb-6">
            <h3 className="font-bold text-orange-800 mb-4 text-lg">
              💬 Common Expressions
            </h3>
            <div className="space-y-4">
              {currentImperativeData.commonExpressions.slice(0, 2).map(
                (category, cIdx) => (
                  <div key={cIdx}>
                    <div className="font-semibold text-orange-700 mb-2">
                      {category.category}:
                    </div>
                    <div className="space-y-2">
                      {category.expressions.slice(0, 3).map((expr, eIdx) => (
                        <div key={eIdx} className="text-sm bg-orange-50 p-2 rounded">
                          <span className="font-semibold text-gray-800">
                            {expr.polish}
                          </span>{" "}
                          <span className="text-gray-600">({expr.english})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {/* Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="flex gap-2 flex-wrap mb-4">
          {imperativeMood.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImperative(index);
                handleReset();
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === currentImperative
                  ? "bg-orange-600 text-white"
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
                ? "bg-orange-600 text-white"
                : "bg-orange-100 text-orange-700"
            }`}>
            Practice
          </button>
        </div>
      </div>

      {/* Learn Mode */}
      {mode === "learn" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{currentImperativeData.icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-orange-600">
                {currentImperativeData.name}
              </h2>
              <p className="text-xl text-gray-600">
                {currentImperativeData.polish}
              </p>
            </div>
          </div>

          <div className="mb-6 p-4 bg-orange-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">📚 Explanation:</h3>
            <p className="text-gray-700">{currentImperativeData.explanation}</p>
          </div>

          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">💡 Think of it like:</h3>
            <p className="text-gray-700">{currentImperativeData.analogy}</p>
          </div>

          {renderLearningContent()}
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
              <h2 className="text-2xl font-bold text-orange-600 mb-6">Quiz</h2>
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
                                  ? "bg-orange-100 border-orange-500"
                                  : "bg-gray-50 border-gray-300 hover:border-orange-300"
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
                    className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
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
              <h2 className="text-2xl font-bold text-orange-600 mb-6">
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
                                  ? "bg-orange-100 border-orange-500"
                                  : "bg-gray-50 border-gray-300 hover:border-orange-300"
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
                    className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
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

export default ImperativeMoodSection;