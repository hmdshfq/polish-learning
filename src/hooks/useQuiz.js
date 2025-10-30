import { useState, useCallback } from "react";

/**
 * Custom hook for managing quiz state
 */
export const useQuiz = () => {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [fillBlankAnswers, setFillBlankAnswers] = useState({});
  const [sentenceAnswers, setSentenceAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  /**
   * Reset all quiz state
   */
  const resetQuiz = useCallback(() => {
    setQuizAnswers({});
    setFillBlankAnswers({});
    setSentenceAnswers({});
    setShowResults(false);
    setScore(0);
  }, []);

  /**
   * Submit quiz and calculate score
   */
  const submitQuiz = useCallback((correctAnswers, userAnswers) => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach((key) => {
      if (correctAnswers[key] === userAnswers[key]) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
    return correctCount;
  }, []);

  return {
    quizAnswers,
    setQuizAnswers,
    fillBlankAnswers,
    setFillBlankAnswers,
    sentenceAnswers,
    setSentenceAnswers,
    showResults,
    setShowResults,
    score,
    setScore,
    resetQuiz,
    submitQuiz,
  };
};
