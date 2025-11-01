import React from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import ScoreDisplay from "../shared/ScoreDisplay";

const ReflexiveVerbsSection = ({
  reflexiveVerbs,
  currentReflexiveVerb,
  setCurrentReflexiveVerb,
  currentReflexiveVerbData,
  mode,
  difficulty,
  quizAnswers,
  fillBlankAnswers,
  matchPairsAnswers,
  showResults,
  score,
  handleModeChange,
  handleReset,
  handleSubmit,
  setQuizAnswers,
  setFillBlankAnswers,
  setMatchPairsAnswers,
}) => {
  const quizData = currentReflexiveVerbData?.quiz?.[difficulty] || [];
  const fillData = currentReflexiveVerbData?.fillBlanks?.[difficulty] || [];
  const matchData = currentReflexiveVerbData?.matchPairs?.[difficulty] || [];

  const totalQuestions =
    mode === "quiz"
      ? quizData.length
      : mode === "fillblank"
      ? fillData.length
      : mode === "match"
      ? matchData.length
      : 0;

  const renderExamples = () => {
    if (!currentReflexiveVerbData?.commonReflexiveVerbs) return null;

    return (
      <div className="mb-6">
        <h3 className="text-xl font-bold text-cyan-700 mb-4">
          💬 Common Reflexive Verbs:
        </h3>
        <div className="space-y-3">
          {currentReflexiveVerbData.commonReflexiveVerbs.slice(0, 5).map(
            (verb, index) => (
              <div key={index} className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                <div className="font-bold text-cyan-800">{verb.infinitive}</div>
                <div className="text-gray-700 mb-2">{verb.english}</div>
                <div className="text-gray-600 italic mb-1">
                  📌 {verb.example}
                </div>
                <div className="text-gray-600 text-sm">{verb.exampleEng}</div>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  const renderConjugationTable = () => {
    if (!currentReflexiveVerbData?.conjugationTable) return null;

    return (
      <div className="mb-6">
        <h3 className="text-xl font-bold text-cyan-700 mb-4">
          📋 Conjugation Table:
        </h3>
        <div className="bg-white border-2 border-cyan-300 rounded-lg overflow-hidden">
          <div className="bg-cyan-100 p-3 font-bold text-cyan-800">
            {currentReflexiveVerbData.conjugationTable.verb}
          </div>
          <div className="divide-y">
            {currentReflexiveVerbData.conjugationTable.forms.map((form, idx) => (
              <div key={idx} className="p-3 grid grid-cols-3 gap-4">
                <div className="font-semibold text-cyan-700">{form.pronoun}</div>
                <div className="text-gray-800">{form.form}</div>
                <div className="text-gray-600 italic text-sm">{form.english}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="flex gap-2 flex-wrap mb-4">
          {reflexiveVerbs.map((v, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentReflexiveVerb(index);
                handleReset();
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === currentReflexiveVerb
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {v.icon} {v.name}
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
          {matchData.length > 0 && (
            <button
              onClick={() => handleModeChange("match")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                mode === "match"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}>
              Match
            </button>
          )}
        </div>
      </div>

      {/* Learn Mode */}
      {mode === "learn" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{currentReflexiveVerbData.icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-cyan-600">
                {currentReflexiveVerbData.name}
              </h2>
              <p className="text-xl text-gray-600">{currentReflexiveVerbData.polish}</p>
            </div>
          </div>

          <div className="mb-6 p-4 bg-cyan-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">📚 Explanation:</h3>
            <p className="text-gray-700">{currentReflexiveVerbData.explanation}</p>
          </div>

          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">💡 Think of it like:</h3>
            <p className="text-gray-700">{currentReflexiveVerbData.analogy}</p>
          </div>

          {renderExamples()}
          {renderConjugationTable()}
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
              <h2 className="text-2xl font-bold text-cyan-600 mb-6">Quiz</h2>
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
                                  ? "bg-cyan-100 border-cyan-500"
                                  : "bg-gray-50 border-gray-300 hover:border-cyan-300"
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
                    className="flex-1 bg-cyan-600 text-white py-3 rounded-lg font-bold hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
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
              <h2 className="text-2xl font-bold text-cyan-600 mb-6">Fill in the Blanks</h2>
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
                                  ? "bg-cyan-100 border-cyan-500"
                                  : "bg-gray-50 border-gray-300 hover:border-cyan-300"
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
                    className="flex-1 bg-cyan-600 text-white py-3 rounded-lg font-bold hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                    Submit Practice
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Match Pairs Mode */}
      {mode === "match" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          {matchData.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              No match content available for this difficulty level.
            </p>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-cyan-600 mb-6">Match the Pairs</h2>
              <div className="space-y-6">
                {matchData.map((exercise, exIndex) => (
                  <div key={exIndex} className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                    <p className="font-bold text-gray-800 mb-4">
                      {exercise.instruction}
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        {exercise.pairs.map((pair, pIndex) => (
                          <div
                            key={pIndex}
                            className="p-3 bg-cyan-50 border border-cyan-300 rounded">
                            <div className="font-bold text-cyan-700">
                              {pair.polish}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {exercise.pairs.map((pair, pIndex) => (
                          <button
                            key={pIndex}
                            onClick={() => {
                              if (!showResults) {
                                setMatchPairsAnswers({
                                  ...matchPairsAnswers,
                                  [exIndex]: [
                                    ...(matchPairsAnswers[exIndex] || []),
                                    pair.english,
                                  ],
                                });
                              }
                            }}
                            className={`w-full p-3 rounded border-2 transition-colors text-left ${
                              (matchPairsAnswers[exIndex] || []).includes(
                                pair.english
                              )
                                ? "bg-cyan-100 border-cyan-500"
                                : "bg-gray-50 border-gray-300 hover:border-cyan-300"
                            } disabled:cursor-not-allowed`}
                            disabled={showResults}>
                            {pair.english}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {showResults ? (
                <ScoreDisplay score={score} total={matchData.length} onReset={handleReset} />
              ) : (
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleSubmit("match", matchPairsAnswers, matchData)}
                    className="flex-1 bg-cyan-600 text-white py-3 rounded-lg font-bold hover:bg-cyan-700 transition-colors">
                    Submit Matches
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

export default ReflexiveVerbsSection;