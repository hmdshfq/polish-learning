import { useEffect } from "react";

/**
 * Custom hook for managing daily study streak
 */
export const useStreak = (progress, setProgress) => {
  useEffect(() => {
    const today = new Date().toDateString();

    if (progress.lastStudyDate === today) {
      // Already studied today
      return;
    }

    if (!progress.lastStudyDate) {
      // First time studying
      setProgress((prev) => ({
        ...prev,
        streak: 1,
        lastStudyDate: today,
      }));
      return;
    }

    const lastDate = new Date(progress.lastStudyDate);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastDate.toDateString() === yesterday.toDateString()) {
      // Studied yesterday, increment streak
      setProgress((prev) => ({
        ...prev,
        streak: prev.streak + 1,
        lastStudyDate: today,
      }));
    } else {
      // Missed days, reset streak
      setProgress((prev) => ({
        ...prev,
        streak: 1,
        lastStudyDate: today,
      }));
    }
  }, [progress.lastStudyDate, setProgress]);
};
