import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import ScoreDisplay from "../shared/ScoreDisplay";

const NumbersSection = ({
  numbers,
  currentNumber,
  setCurrentNumber,
  currentNumberData,
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
  const quizData = currentNumberData?.quiz?.[difficulty] || [];
  const fillData = currentNumberData?.fillBlanks?.[difficulty] || [];

  const totalQuestions =
    mode === "quiz"
      ? quizData.length
      : mode === "fillblank"
      ? fillData.length
      : 0;

  const renderNumberInfo = () => {
    if (!currentNumberData?.numberGroups) return null;

    return (
      <div className="mb-6 space-y-6">
        {currentNumberData.numberGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="border-l-4 border-emerald-600 pl-4">
            <h4 className="text-lg font-bold text-emerald-700 mb-2">
              {group.range}
            </h4>
            <p className="text-sm text-gray-600 mb-4">{group.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {group.numbers.map((num, numIdx) => (
                <div
                  key={numIdx}
                  className="p-3 bg-emerald-50 border border-emerald-200 rounded">
                  <div className="font-semibold text-emerald-800">
                    {num.numeral}. {num.polish}
                  </div>
                  <div className="text-sm text-gray-600">{num.english}</div>
                  {num.note && (
                    <div className="text-xs text-gray-500 mt-1 italic">
                      💡 {num.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderA2Content = () => {
    if (!currentNumberData?.patterns) return null;

    return (
      <div className="mb-6 space-y-6">
        {/* Patterns Section */}
        {currentNumberData.patterns && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">📋 Patterns</h3>
            <div className="space-y-4">
              {currentNumberData.patterns.map((pattern, idx) => (
                <div key={idx} className="border-l-4 border-emerald-600 pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-lg font-bold text-emerald-800">{pattern.number}</span>
                    <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                      {pattern.case}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{pattern.description}</p>
                  <div className="bg-emerald-50 p-3 rounded mb-3 space-y-2">
                    {pattern.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="border-l-2 border-emerald-400 pl-3">
                        <div className="font-semibold text-emerald-800">{ex.polish}</div>
                        <div className="text-sm text-gray-600">{ex.english}</div>
                      </div>
                    ))}
                  </div>
                  {pattern.note && (
                    <div className="text-xs text-gray-600 italic bg-blue-50 p-2 rounded border-l-2 border-blue-300 pl-3">
                      📝 {pattern.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Personal vs Non-Personal Section */}
        {currentNumberData.personalVsNonPersonal && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">👥 Personal vs Non-Personal</h3>
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-gray-700">
                {currentNumberData.personalVsNonPersonal.explanation}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Masculine */}
              {currentNumberData.personalVsNonPersonal.personalMasculine && (
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-purple-700 mb-2">🧑 Masculine Personal</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {currentNumberData.personalVsNonPersonal.personalMasculine.description}
                  </p>
                  <div className="space-y-2 mb-3">
                    {currentNumberData.personalVsNonPersonal.personalMasculine.examples.map((ex, idx) => (
                      <div key={idx} className="p-2 bg-purple-50 rounded">
                        <div className="font-semibold text-purple-800 text-sm">{ex.polish}</div>
                        <div className="text-xs text-gray-600">{ex.english}</div>
                        {ex.note && <div className="text-xs text-gray-500 italic mt-1">{ex.note}</div>}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 italic bg-gray-50 p-2 rounded">
                    {currentNumberData.personalVsNonPersonal.personalMasculine.rule}
                  </div>
                </div>
              )}

              {/* Non-Personal */}
              {currentNumberData.personalVsNonPersonal.nonPersonal && (
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-bold text-indigo-700 mb-2">🦋 Non-Personal</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {currentNumberData.personalVsNonPersonal.nonPersonal.description}
                  </p>
                  <div className="space-y-2 mb-3">
                    {currentNumberData.personalVsNonPersonal.nonPersonal.examples.map((ex, idx) => (
                      <div key={idx} className="p-2 bg-indigo-50 rounded">
                        <div className="font-semibold text-indigo-800 text-sm">{ex.polish}</div>
                        <div className="text-xs text-gray-600">{ex.english}</div>
                        {ex.note && <div className="text-xs text-gray-500 italic mt-1">{ex.note}</div>}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 italic bg-gray-50 p-2 rounded">
                    {currentNumberData.personalVsNonPersonal.nonPersonal.rule}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Common Nouns Section */}
        {currentNumberData.commonNouns && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">📚 Common Nouns</h3>
            <div className="space-y-3">
              {currentNumberData.commonNouns.map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded">
                  <div className="font-bold text-gray-800 mb-3">{item.noun}</div>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <span className="font-semibold text-gray-700">1:</span>
                        <div className="text-gray-600">{item.forms.one}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">2-4:</span>
                        <div className="text-gray-600">{item.forms.twoToFour}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">5+:</span>
                        <div className="text-gray-600">{item.forms.fivePlus}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderOrdinalContent = () => {
    if (!currentNumberData?.ordinalsList) return null;

    return (
      <div className="mb-6 space-y-6">
        {/* Ordinals List */}
        {currentNumberData.ordinalsList && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">🔢 Ordinal Numbers</h3>
            <div className="space-y-3">
              {currentNumberData.ordinalsList.map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-bold text-lg text-gray-800">
                        {item.number}. {item.english}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Cardinal: {item.cardinal}</div>
                    </div>
                    {item.irregular && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">
                        Irregular
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm mb-3">
                    <div>
                      <span className="font-semibold text-gray-700">M:</span>
                      <div className="text-emerald-800 font-semibold">{item.ordinal.masculine}</div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">F:</span>
                      <div className="text-emerald-800 font-semibold">{item.ordinal.feminine}</div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">N:</span>
                      <div className="text-emerald-800 font-semibold">{item.ordinal.neuter}</div>
                    </div>
                  </div>
                  {item.note && (
                    <div className="text-xs text-gray-600 italic bg-blue-50 p-2 rounded border-l-2 border-blue-300 pl-3">
                      📝 {item.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Declension Tables */}
        {currentNumberData.declensionTables && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">📋 Declension Tables</h3>
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-gray-700">{currentNumberData.declensionTables.explanation}</p>
            </div>
            <div className="space-y-4">
              {[
                { key: "masculine", label: "🧑 Masculine" },
                { key: "feminine", label: "👩 Feminine" },
                { key: "neuter", label: "📦 Neuter" }
              ].map((gender) => {
                const table = currentNumberData.declensionTables[gender.key];
                if (!table) return null;
                return (
                  <div key={gender.key} className="border-l-4 border-emerald-600 pl-4">
                    <h4 className="font-bold text-emerald-700 mb-2">{gender.label}</h4>
                    <p className="text-sm text-gray-600 mb-3">{table.gender}</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-emerald-50">
                            <th className="border border-emerald-200 p-2 text-left font-bold">Case</th>
                            <th className="border border-emerald-200 p-2 text-left font-bold">Singular</th>
                            <th className="border border-emerald-200 p-2 text-left font-bold">Plural</th>
                            <th className="border border-emerald-200 p-2 text-left font-bold">Example</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table.cases.map((caseRow, cIdx) => (
                            <tr key={cIdx} className="hover:bg-gray-50">
                              <td className="border border-gray-200 p-2 font-semibold text-gray-700">
                                {caseRow.case}
                              </td>
                              <td className="border border-gray-200 p-2 text-emerald-800 font-semibold">
                                {caseRow.singular}
                              </td>
                              <td className="border border-gray-200 p-2 text-emerald-800 font-semibold">
                                {caseRow.plural}
                              </td>
                              <td className="border border-gray-200 p-2 text-gray-600 text-xs italic">
                                {caseRow.example}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Usage Examples */}
        {currentNumberData.usageExamples && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">💬 Usage Examples</h3>
            <div className="space-y-4">
              {currentNumberData.usageExamples.map((usage, idx) => (
                <div key={idx} className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-purple-700 mb-2">{usage.context}</h4>
                  <p className="text-sm text-gray-600 mb-3">{usage.explanation}</p>
                  <div className="space-y-2">
                    {usage.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3 bg-purple-50 rounded border-l-2 border-purple-300">
                        <div className="font-semibold text-purple-900">{ex.polish}</div>
                        <div className="text-sm text-gray-600 italic">{ex.english}</div>
                        {ex.note && (
                          <div className="text-xs text-gray-600 mt-1">📌 {ex.note}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderTimeContent = () => {
    if (!currentNumberData?.timePatterns) return null;

    return (
      <div className="mb-6 space-y-6">
        {/* Time Patterns */}
        {currentNumberData.timePatterns && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">⏰ Time Patterns</h3>
            <div className="space-y-4">
              {currentNumberData.timePatterns.map((pattern, idx) => (
                <div key={idx} className="border-l-4 border-orange-600 pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-lg font-bold text-orange-800">{pattern.category}</span>
                    <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded">
                      {pattern.pattern}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{pattern.explanation}</p>
                  <div className="space-y-2">
                    {pattern.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3 bg-orange-50 rounded border-l-2 border-orange-300">
                        <div className="font-semibold text-orange-900">{ex.polish}</div>
                        <div className="text-sm text-gray-600 italic">{ex.english}</div>
                        {ex.note && (
                          <div className="text-xs text-gray-600 mt-1">💡 {ex.note}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dates and Years */}
        {currentNumberData.datesAndYears && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">📅 Dates and Years</h3>
            <div className="space-y-4">
              {currentNumberData.datesAndYears.map((section, idx) => (
                <div key={idx} className="border-l-4 border-blue-600 pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-lg font-bold text-blue-800">{section.category}</span>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                      {section.pattern}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{section.explanation}</p>
                  <div className="space-y-2">
                    {section.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3 bg-blue-50 rounded border-l-2 border-blue-300">
                        <div className="font-semibold text-blue-900">{ex.polish}</div>
                        <div className="text-sm text-gray-600 italic">{ex.english}</div>
                        {ex.note && (
                          <div className="text-xs text-gray-600 mt-1">📌 {ex.note}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fractions and Other */}
        {currentNumberData.fractionsAndOther && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">🔀 Fractions and Other</h3>
            <div className="space-y-4">
              {currentNumberData.fractionsAndOther.map((section, idx) => (
                <div key={idx} className="border-l-4 border-teal-600 pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-lg font-bold text-teal-800">{section.category}</span>
                    {section.pattern && (
                      <span className="inline-block px-2 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded">
                        {section.pattern}
                      </span>
                    )}
                  </div>
                  {section.explanation && (
                    <p className="text-sm text-gray-600 mb-3">{section.explanation}</p>
                  )}
                  <div className="space-y-2">
                    {section.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3 bg-teal-50 rounded border-l-2 border-teal-300">
                        <div className="font-semibold text-teal-900">{ex.polish}</div>
                        <div className="text-sm text-gray-600 italic">{ex.english}</div>
                        {ex.note && (
                          <div className="text-xs text-gray-600 mt-1">📌 {ex.note}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
          {numbers.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentNumber(index);
                handleReset();
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === currentNumber
                  ? "bg-emerald-600 text-white"
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
                ? "bg-emerald-600 text-white"
                : "bg-emerald-100 text-emerald-700"
            }`}>
            Practice
          </button>
        </div>
      </div>

      {/* Learn Mode */}
      {mode === "learn" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{currentNumberData.icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-emerald-600">
                {currentNumberData.name}
              </h2>
              <p className="text-xl text-gray-600">
                {currentNumberData.polish}
              </p>
            </div>
          </div>

          {currentNumberData.explanation && (
            <div className="mb-6 p-4 bg-emerald-50 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">📚 Explanation:</h3>
              <p className="text-gray-700">{currentNumberData.explanation}</p>
            </div>
          )}

          {currentNumberData.analogy && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2">💭 Memory Aid:</h3>
              <p className="text-blue-900">{currentNumberData.analogy}</p>
            </div>
          )}

          {renderNumberInfo()}
          {renderA2Content()}
          {renderOrdinalContent()}
          {renderTimeContent()}

          {currentNumberData.usage && currentNumberData.usage.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-emerald-700 mb-4">
                🗣️ Practical Usage
              </h3>
              <div className="space-y-3">
                {currentNumberData.usage.map((item, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="text-sm font-semibold text-gray-700 mb-2">
                      {item.context}
                    </div>
                    <div className="p-2 bg-white border-l-4 border-emerald-500 rounded mb-2">
                      <div className="font-semibold text-emerald-800">
                        {item.example}
                      </div>
                      <div className="text-sm text-gray-600 italic">
                        {item.english}
                      </div>
                    </div>
                    {item.note && (
                      <div className="text-xs text-gray-600 italic">
                        📝 {item.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
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
              <h2 className="text-2xl font-bold text-emerald-600 mb-6">Quiz</h2>
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
                        <p className="font-bold text-gray-800 mb-3">
                          {q.question}
                        </p>
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
                                  ? "bg-emerald-100 border-emerald-500"
                                  : "bg-gray-50 border-gray-300 hover:border-emerald-300"
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
                <ScoreDisplay
                  score={score}
                  total={totalQuestions}
                  onReset={handleReset}
                />
              ) : (
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() =>
                      handleSubmit("quiz", quizAnswers, quizData)
                    }
                    disabled={
                      Object.keys(quizAnswers).length < quizData.length
                    }
                    className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
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
              <h2 className="text-2xl font-bold text-emerald-600 mb-6">
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
                        <p className="text-gray-600 italic mb-3">
                          {item.english}
                        </p>
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
                                  ? "bg-emerald-100 border-emerald-500"
                                  : "bg-gray-50 border-gray-300 hover:border-emerald-300"
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
                <ScoreDisplay
                  score={score}
                  total={totalQuestions}
                  onReset={handleReset}
                />
              ) : (
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() =>
                      handleSubmit("fillblank", fillBlankAnswers, fillData)
                    }
                    disabled={
                      Object.keys(fillBlankAnswers).length < fillData.length
                    }
                    className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
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

export default NumbersSection;
