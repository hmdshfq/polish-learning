import { useState, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getPerformanceLevel } from "../utils/progressCalculations";
import { calculateNextReviewDate } from "../utils/spacedRepetition";

/**
 * Custom hook for managing learning progress
 */
export const useProgress = (cases, verbs) => {
  const [progress, setProgress] = useLocalStorage("polish-grammar-progress", {
    cases: {},
    verbs: {},
    totalScore: 0,
    totalAttempts: 0,
    streak: 0,
    lastStudyDate: null,
    weakAreas: [],
    masteredTopics: [],
  });

  const [reviewSchedule, setReviewSchedule] = useLocalStorage(
    "polish-grammar-reviews",
    {}
  );

  /**
   * Update progress after completing a quiz
   */
  const updateProgress = useCallback(
    (topicType, topicIndex, score, total) => {
      const percentage = (score / total) * 100;
      const topicId = `${topicType}-${topicIndex}`;

      setProgress((prev) => {
        const newProgress = { ...prev };

        // Update topic-specific progress
        if (!newProgress[topicType][topicIndex]) {
          newProgress[topicType][topicIndex] = {
            attempts: 0,
            totalScore: 0,
            bestScore: 0,
            lastAttempt: new Date(),
          };
        }

        const topicProgress = newProgress[topicType][topicIndex];
        topicProgress.attempts += 1;
        topicProgress.totalScore += score;
        topicProgress.bestScore = Math.max(
          topicProgress.bestScore,
          percentage
        );
        topicProgress.lastAttempt = new Date();

        // Update overall stats
        newProgress.totalScore += score;
        newProgress.totalAttempts += total;
        newProgress.lastStudyDate = new Date().toDateString();

        // Identify weak areas (< 70%)
        const topicName =
          topicType === "cases"
            ? cases[topicIndex].name
            : verbs[topicIndex].name;

        if (percentage < 70) {
          if (!newProgress.weakAreas.includes(topicName)) {
            newProgress.weakAreas.push(topicName);
          }
        } else {
          // Remove from weak areas if improved
          newProgress.weakAreas = newProgress.weakAreas.filter(
            (area) => area !== topicName
          );
        }

        // Mark as mastered (>= 90% on 3+ attempts)
        if (percentage >= 90 && topicProgress.attempts >= 3) {
          if (!newProgress.masteredTopics.includes(topicName)) {
            newProgress.masteredTopics.push(topicName);
          }
        }

        return newProgress;
      });

      // Update spaced repetition schedule
      const performance = getPerformanceLevel(percentage);
      const currentReview = reviewSchedule[topicId];
      const newReview = calculateNextReviewDate(
        performance,
        currentReview?.interval,
        currentReview?.lastReview
      );

      setReviewSchedule((prev) => ({
        ...prev,
        [topicId]: newReview,
      }));
    },
    [cases, verbs, reviewSchedule, setProgress, setReviewSchedule]
  );

  /**
   * Reset all progress
   */
  const resetProgress = useCallback(() => {
    setProgress({
      cases: {},
      verbs: {},
      totalScore: 0,
      totalAttempts: 0,
      streak: 0,
      lastStudyDate: null,
      weakAreas: [],
      masteredTopics: [],
    });
    setReviewSchedule({});
  }, [setProgress, setReviewSchedule]);

  return {
    progress,
    setProgress,
    reviewSchedule,
    setReviewSchedule,
    updateProgress,
    resetProgress,
  };
};
