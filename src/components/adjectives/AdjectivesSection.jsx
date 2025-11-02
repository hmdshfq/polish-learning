import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import ScoreDisplay from "../shared/ScoreDisplay";

const AdjectivesSection = ({
  adjectives,
  currentAdjective,
  setCurrentAdjective,
  currentAdjectiveData,
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
  const quizData = currentAdjectiveData?.quiz?.[difficulty] || [];
  const fillData = currentAdjectiveData?.fillBlanks?.[difficulty] || [];

  const totalQuestions =
    mode === "quiz"
      ? quizData.length
      : mode === "fillblank"
      ? fillData.length
      : 0;

  const renderBasicAdjectives = () => {
    if (!currentAdjectiveData?.commonAdjectives) return null;

    return (
      <div className="mb-6 space-y-6">
        {/* Common Adjectives */}
        {currentAdjectiveData.commonAdjectives && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">📝 Common Adjectives</h3>
            <div className="space-y-3">
              {currentAdjectiveData.commonAdjectives.map((adj, idx) => (
                <div key={idx} className="p-4 bg-amber-50 border border-amber-200 rounded">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold text-amber-800">{adj.polish}</div>
                      <div className="text-sm text-gray-600">{adj.english}</div>
                    </div>
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded">
                      {adj.category}
                    </span>
                  </div>
                  <div className="mt-3 p-3 bg-white rounded border-l-2 border-amber-400">
                    <div className="font-semibold text-amber-800">{adj.example}</div>
                    <div className="text-sm text-gray-600 italic">{adj.exampleEng}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rules */}
        {currentAdjectiveData.rules && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">📋 Rules</h3>
            <div className="space-y-4">
              {currentAdjectiveData.rules.map((rule, idx) => (
                <div key={idx} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-blue-800 mb-2">{rule.title}</h4>
                  <p className="text-sm text-gray-700 mb-3">{rule.description}</p>
                  <div className="space-y-1">
                    {rule.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="text-sm text-gray-600 italic bg-blue-50 p-2 rounded border-l-2 border-blue-300 pl-3">
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Basic Declension Table */}
        {currentAdjectiveData.declensionTable && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">📊 Declension Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="border border-amber-300 p-2 text-left font-bold">Case</th>
                    <th className="border border-amber-300 p-2 text-left font-bold">Masculine</th>
                    <th className="border border-amber-300 p-2 text-left font-bold">Feminine</th>
                    <th className="border border-amber-300 p-2 text-left font-bold">Neuter</th>
                    <th className="border border-amber-300 p-2 text-left font-bold">English</th>
                  </tr>
                </thead>
                <tbody>
                  {currentAdjectiveData.declensionTable.forms.map((form, idx) => (
                    <tr key={idx} className="hover:bg-amber-50">
                      <td className="border border-amber-200 p-2 font-semibold text-amber-800">{form.case}</td>
                      <td className="border border-amber-200 p-2 text-amber-900 font-semibold">{form.masculine}</td>
                      <td className="border border-amber-200 p-2 text-amber-900 font-semibold">{form.feminine}</td>
                      <td className="border border-amber-200 p-2 text-amber-900 font-semibold">{form.neuter}</td>
                      <td className="border border-amber-200 p-2 text-gray-600 text-xs italic">{form.english}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderFullDeclension = () => {
    if (!currentAdjectiveData?.declensionTable?.forms?.length || !currentAdjectiveData.patternNotes) return null;

    return (
      <div className="mb-6 space-y-6">
        {/* Full Declension Table */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-amber-700 mb-4">📊 Full Declension Table (All 7 Cases)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-100">
                  <th className="border border-amber-300 p-2 text-left font-bold">Case</th>
                  <th className="border border-amber-300 p-2 text-left font-bold">Question</th>
                  <th className="border border-amber-300 p-2 text-left font-bold">Masculine</th>
                  <th className="border border-amber-300 p-2 text-left font-bold">Feminine</th>
                  <th className="border border-amber-300 p-2 text-left font-bold">Neuter</th>
                  <th className="border border-amber-300 p-2 text-left font-bold">Example</th>
                </tr>
              </thead>
              <tbody>
                {currentAdjectiveData.declensionTable.forms.map((form, idx) => (
                  <tr key={idx} className="hover:bg-amber-50">
                    <td className="border border-amber-200 p-2 font-semibold text-amber-800">{form.case}</td>
                    <td className="border border-amber-200 p-2 text-gray-600 text-xs">{form.question}</td>
                    <td className="border border-amber-200 p-2 text-amber-900 font-semibold">{form.masculine}</td>
                    <td className="border border-amber-200 p-2 text-amber-900 font-semibold">{form.feminine}</td>
                    <td className="border border-amber-200 p-2 text-amber-900 font-semibold">{form.neuter}</td>
                    <td className="border border-amber-200 p-2 text-gray-600 text-xs italic">{form.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pattern Notes */}
        {currentAdjectiveData.patternNotes && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">💡 Pattern Notes</h3>
            <div className="space-y-4">
              {currentAdjectiveData.patternNotes.map((note, idx) => (
                <div key={idx} className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-purple-800 mb-2">{note.title}</h4>
                  <p className="text-sm text-gray-700 mb-3">{note.description}</p>
                  <div className="space-y-1">
                    {note.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="text-sm text-gray-600 bg-purple-50 p-2 rounded border-l-2 border-purple-300 pl-3">
                        {ex}
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

  const renderComparatives = () => {
    if (!currentAdjectiveData?.formationRules) return null;

    return (
      <div className="mb-6 space-y-6">
        {/* Formation Rules */}
        {currentAdjectiveData.formationRules && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">🔄 Formation Rules</h3>
            <div className="space-y-4">
              {currentAdjectiveData.formationRules.map((rule, idx) => (
                <div key={idx} className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-green-800 mb-2">{rule.type}</h4>
                  <p className="text-sm text-gray-700 mb-3">{rule.rule}</p>
                  <div className="space-y-2">
                    {rule.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3 bg-green-50 rounded border-l-2 border-green-400">
                        <div className="text-sm"><span className="font-semibold">Positive:</span> {ex.positive}</div>
                        <div className="text-sm"><span className="font-semibold">Comparative:</span> {ex.comparative}</div>
                        <div className="text-sm"><span className="font-semibold">Superlative:</span> {ex.superlative}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Irregular Forms */}
        {currentAdjectiveData.irregularForms && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">⚠️ Irregular Forms</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-red-100">
                    <th className="border border-red-300 p-2 text-left font-bold">Positive</th>
                    <th className="border border-red-300 p-2 text-left font-bold">Comparative</th>
                    <th className="border border-red-300 p-2 text-left font-bold">Superlative</th>
                    <th className="border border-red-300 p-2 text-left font-bold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {currentAdjectiveData.irregularForms.map((form, idx) => (
                    <tr key={idx} className="hover:bg-red-50">
                      <td className="border border-red-200 p-2 font-semibold text-amber-800">{form.positive}</td>
                      <td className="border border-red-200 p-2 font-semibold text-amber-800">{form.comparative}</td>
                      <td className="border border-red-200 p-2 font-semibold text-amber-800">{form.superlative}</td>
                      <td className="border border-red-200 p-2 text-gray-600 text-xs italic">{form.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Comparison Structures */}
        {currentAdjectiveData.comparisonStructures && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">🔀 Comparison Structures</h3>
            <div className="space-y-4">
              {currentAdjectiveData.comparisonStructures.map((struct, idx) => (
                <div key={idx} className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-orange-800 mb-1">{struct.structure}</h4>
                  <p className="text-sm text-gray-700 mb-3">{struct.usage}</p>
                  <div className="space-y-2">
                    {struct.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3 bg-orange-50 rounded border-l-2 border-orange-400">
                        <div className="font-semibold text-orange-900">{ex.polish}</div>
                        <div className="text-sm text-gray-600 italic">{ex.english}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common Mistakes */}
        {currentAdjectiveData.commonMistakes && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              {currentAdjectiveData.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-bold text-red-800 mb-2">{mistake.mistake}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 bg-green-50 rounded border-l-2 border-green-500">
                      <span className="font-semibold text-green-800">✓ Correct:</span> {mistake.correct}
                    </div>
                    <div className="p-2 bg-red-50 rounded border-l-2 border-red-500">
                      <span className="font-semibold text-red-800">✗ Incorrect:</span> {mistake.incorrect}
                    </div>
                    {mistake.note && (
                      <div className="p-2 bg-blue-50 rounded italic text-gray-700">
                        💡 {mistake.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderAgreement = () => {
    if (!currentAdjectiveData?.genderAgreement && !currentAdjectiveData?.caseAgreement) return null;

    return (
      <div className="mb-6 space-y-6">
        {/* Gender Agreement */}
        {currentAdjectiveData.genderAgreement && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">👥 Gender Agreement</h3>

            {/* Singular */}
            <div className="mb-6">
              <h4 className="font-bold text-amber-700 mb-4">Singular</h4>
              <div className="space-y-4">
                {currentAdjectiveData.genderAgreement.singular?.map((gender, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4">
                    <h5 className="font-bold text-blue-800 mb-1">{gender.gender}</h5>
                    <p className="text-sm text-gray-700 mb-2">{gender.pattern}</p>
                    <div className="space-y-1">
                      {gender.examples?.map((ex, exIdx) => (
                        <div key={exIdx} className="p-2 bg-blue-50 rounded border-l-2 border-blue-300">
                          <div className="font-semibold text-blue-900">{ex.polish}</div>
                          <div className="text-sm text-gray-600">{ex.english}</div>
                          {ex.note && <div className="text-xs text-gray-500 italic mt-1">{ex.note}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plural */}
            {currentAdjectiveData.genderAgreement.plural && (
              <div>
                <h4 className="font-bold text-amber-700 mb-4">Plural</h4>
                <div className="space-y-4">
                  {currentAdjectiveData.genderAgreement.plural.map((pluralType, idx) => (
                    <div key={idx} className="border-l-4 border-purple-600 pl-4">
                      <h5 className="font-bold text-purple-800 mb-1">{pluralType.type}</h5>
                      <p className="text-sm text-gray-600 mb-2">{pluralType.definition}</p>
                      <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Ending:</span> {pluralType.nominativeEnding}</p>
                      <div className="space-y-1">
                        {pluralType.examples?.map((ex, exIdx) => (
                          <div key={exIdx} className="p-2 bg-purple-50 rounded border-l-2 border-purple-300">
                            <div className="font-semibold text-purple-900">{ex.polish}</div>
                            <div className="text-sm text-gray-600">{ex.english}</div>
                            {ex.note && <div className="text-xs text-gray-500 italic mt-1">{ex.note}</div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Case Agreement */}
        {currentAdjectiveData.caseAgreement && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">📋 Case Agreement</h3>
            <div className="space-y-4">
              {currentAdjectiveData.caseAgreement.map((caseInfo, idx) => (
                <div key={idx} className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-bold text-teal-800 mb-1">{caseInfo.case}</h4>
                  <p className="text-sm text-gray-700 mb-3">{caseInfo.usage}</p>
                  <div className="space-y-2">
                    {caseInfo.examples?.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3 bg-teal-50 rounded border-l-2 border-teal-400">
                        <div className="font-semibold text-teal-900">{ex.polish}</div>
                        <div className="text-sm text-gray-600 italic">{ex.english}</div>
                        <div className="text-xs text-gray-500 mt-1">Breakdown: {ex.breakdown}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Multiple Adjectives */}
        {currentAdjectiveData.multipleAdjectives && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-700 mb-4">📚 Multiple Adjectives</h3>
            <div className="space-y-4">
              {currentAdjectiveData.multipleAdjectives.map((item, idx) => (
                <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                  <p className="text-sm text-gray-700 mb-3 font-semibold">{item.rule}</p>
                  <div className="space-y-2">
                    {item.examples?.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3 bg-indigo-50 rounded border-l-2 border-indigo-400">
                        <div className="font-semibold text-indigo-900">{ex.polish}</div>
                        <div className="text-sm text-gray-600 italic">{ex.english}</div>
                        <div className="text-xs text-gray-600 mt-1">Breakdown: {ex.breakdown}</div>
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
          {adjectives.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentAdjective(index);
                handleReset();
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === currentAdjective
                  ? "bg-amber-600 text-white"
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
            <span className="text-5xl">{currentAdjectiveData.icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-amber-600">
                {currentAdjectiveData.name}
              </h2>
              <p className="text-xl text-gray-600">
                {currentAdjectiveData.polish}
              </p>
            </div>
          </div>

          {currentAdjectiveData.description && (
            <div className="mb-6 p-4 bg-amber-50 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">📚 Description:</h3>
              <p className="text-gray-700">{currentAdjectiveData.description}</p>
            </div>
          )}

          {renderBasicAdjectives()}
          {renderFullDeclension()}
          {renderComparatives()}
          {renderAgreement()}
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
              <h2 className="text-2xl font-bold text-amber-600 mb-6">Quiz</h2>
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
                                  ? "bg-amber-100 border-amber-500"
                                  : "bg-gray-50 border-gray-300 hover:border-amber-300"
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
                    className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
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
              <h2 className="text-2xl font-bold text-amber-600 mb-6">
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
                                  ? "bg-amber-100 border-amber-500"
                                  : "bg-gray-50 border-gray-300 hover:border-amber-300"
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
                    className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
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

export default AdjectivesSection;
