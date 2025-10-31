import React, { useState } from "react";
import { CheckCircle, XCircle, Shuffle } from "lucide-react";
import ScoreDisplay from "../shared/ScoreDisplay";

const PrepositionsSection = ({
  prepositions,
  currentPreposition,
  setCurrentPreposition,
  currentPrepositionData,
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
  const quizData = currentPrepositionData.quiz[difficulty] || [];
  const fillData = currentPrepositionData.fillBlanks[difficulty] || [];
  const matchData = currentPrepositionData.matchPairs[difficulty] || [];
  const totalQuestions =
    mode === "quiz"
      ? quizData.length
      : mode === "fillblank"
      ? fillData.length
      : mode === "matchpairs"
      ? matchData.length
      : 0;

  return (
    <div>
      {/* Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="flex gap-2 flex-wrap mb-4">
          {prepositions.map((prep, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPreposition(index);
                handleReset();
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === currentPreposition
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {prep.icon} {prep.name}
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
            onClick={() => handleModeChange("matchpairs")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "matchpairs"
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-700"
            }`}>
            Match Pairs
          </button>
        </div>
      </div>

      {/* Content */}
      {mode === "learn" && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-teal-600 mb-2">
            {currentPrepositionData.name}
          </h2>
          {currentPrepositionData.polish && (
            <p className="text-xl text-gray-500 mb-2">
              {currentPrepositionData.polish}
            </p>
          )}
          <p className="text-lg text-teal-700 font-medium mb-6">
            Case: {currentPrepositionData.case}
          </p>

          <div className="mb-6 p-4 bg-teal-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">📚 Explanation:</h3>
            <p className="text-gray-700">
              {currentPrepositionData.explanation}
            </p>
          </div>

          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">
              💡 Think of it like:
            </h3>
            <p className="text-gray-700">{currentPrepositionData.analogy}</p>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-gray-800 mb-4 text-xl">
              Common Prepositions:
            </h3>
            <div className="space-y-4">
              {currentPrepositionData.commonPrepositions.map((prep, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border-l-4 border-teal-400">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xl font-bold text-teal-700">
                        {prep.polish}
                      </span>
                      <span className="text-gray-600 ml-3">
                        ({prep.english})
                      </span>
                    </div>
                    <span className="text-xs font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded">
                      {prep.caseForm}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-1">
                    {prep.example
                      .split(prep.highlight)
                      .map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="bg-yellow-200 px-1 rounded font-bold">
                              {prep.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                  </p>
                  <p className="text-gray-600">{prep.exampleEng}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700">
              <span className="font-bold">💡 Pro Tip:</span> Prepositions in
              Polish determine the case of the following noun. Master these
              combinations to speak naturally!
            </p>
          </div>
        </div>
      )}

      {mode === "quiz" && quizData.length > 0 && (
        <QuizMode
          data={quizData}
          title={`${
            difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
          } Quiz: ${currentPrepositionData.name}`}
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
          } Practice: ${currentPrepositionData.name}`}
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

      {mode === "matchpairs" && matchData.length > 0 && (
        <MatchPairsMode
          data={matchData}
          title={`${
            difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
          } Match Pairs: ${currentPrepositionData.name}`}
          answers={matchPairsAnswers}
          showResults={showResults}
          onAnswerSelect={(qIndex, pair) =>
            setMatchPairsAnswers({ ...matchPairsAnswers, [qIndex]: pair })
          }
          onSubmit={handleSubmit}
          onReset={handleReset}
          score={score}
          total={totalQuestions}
        />
      )}

      {((mode === "quiz" && quizData.length === 0) ||
        (mode === "fillblank" && fillData.length === 0) ||
        (mode === "matchpairs" && matchData.length === 0)) &&
        mode !== "learn" && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 text-lg">
              No{" "}
              {mode === "quiz"
                ? "quiz questions"
                : mode === "matchpairs"
                ? "matching exercises"
                : "practice exercises"}{" "}
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

// ========== Mode Components ==========

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
            <p className="text-sm text-teal-600 mb-4">💡 Hint: {q.hint}</p>
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

const MatchPairsMode = ({
  data,
  title,
  answers,
  showResults,
  onAnswerSelect,
  onSubmit,
  onReset,
  score,
  total,
}) => {
  // For each question, the data structure is:
  // { pairs: [{ preposition, case, example }], distractors: ["Case1", "Case2"] }
  // User needs to match each preposition with its correct case

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">
        Match each preposition with its correct case. Click on a preposition,
        then click on the case it requires.
      </p>

      <div className="space-y-6 mb-8">
        {data.map((item, qIndex) => {
          const pairs = item.pairs;
          const allCases = [
            ...new Set([...pairs.map((p) => p.case), ...item.distractors]),
          ];

          return (
            <div key={qIndex} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-4">
                Exercise {qIndex + 1}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Prepositions Column */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    Prepositions:
                  </h4>
                  <div className="space-y-2">
                    {pairs.map((pair, pIndex) => {
                      const userAnswer = answers?.[qIndex]?.[pIndex];
                      const isCorrect = userAnswer === pair.case;
                      const showCorrect = showResults && isCorrect;
                      const showIncorrect = showResults && !isCorrect && userAnswer;

                      return (
                        <div
                          key={pIndex}
                          className={`p-3 rounded-lg border-2 ${
                            showCorrect
                              ? "bg-green-50 border-green-400"
                              : showIncorrect
                              ? "bg-red-50 border-red-400"
                              : userAnswer
                              ? "bg-blue-50 border-blue-400"
                              : "bg-white border-gray-300"
                          }`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-bold text-gray-800">
                                {pair.preposition}
                              </span>
                              <p className="text-xs text-gray-500 mt-1">
                                {pair.example}
                              </p>
                            </div>
                            {userAnswer && (
                              <span
                                className={`text-sm font-medium px-2 py-1 rounded ${
                                  showCorrect
                                    ? "bg-green-200 text-green-800"
                                    : showIncorrect
                                    ? "bg-red-200 text-red-800"
                                    : "bg-blue-200 text-blue-800"
                                }`}>
                                {userAnswer}
                                {showCorrect && " ✓"}
                                {showIncorrect && " ✗"}
                              </span>
                            )}
                          </div>
                          {showIncorrect && (
                            <p className="text-xs text-red-600 mt-2">
                              Correct: {pair.case}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Cases Column */}
                {!showResults && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">
                      Cases (click to match):
                    </h4>
                    <div className="space-y-2">
                      {allCases.map((caseName, cIndex) => (
                        <button
                          key={cIndex}
                          onClick={() => {
                            // Find the next unanswered pair
                            const currentAnswers = answers?.[qIndex] || [];
                            const nextUnanswered = pairs.findIndex(
                              (_, idx) => !currentAnswers[idx]
                            );
                            if (nextUnanswered !== -1) {
                              const newAnswers = [...currentAnswers];
                              newAnswers[nextUnanswered] = caseName;
                              onAnswerSelect(qIndex, newAnswers);
                            }
                          }}
                          className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-100 hover:border-blue-400 transition-colors cursor-pointer">
                          {caseName}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {!showResults && (answers?.[qIndex]?.length > 0) && (
                <button
                  onClick={() => onAnswerSelect(qIndex, [])}
                  className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Reset this exercise
                </button>
              )}
            </div>
          );
        })}
      </div>

      {!showResults ? (
        <button
          onClick={onSubmit}
          disabled={
            !answers ||
            Object.keys(answers).length < total ||
            Object.values(answers).some(
              (ans, idx) =>
                !ans || ans.length < data[idx].pairs.length
            )
          }
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed">
          Submit Answers
        </button>
      ) : (
        <ScoreDisplay score={score} total={total} onReset={onReset} />
      )}
    </div>
  );
};

export default PrepositionsSection;
