/**
 * Spaced repetition intervals (in days)
 */
export const INTERVALS = {
  poor: 1, // 1 day
  good: 3, // 3 days
  excellent: 7, // 7 days
};

/**
 * Calculate next review date based on performance and current interval
 */
export const calculateNextReviewDate = (performance, currentInterval = 1, lastReview = new Date()) => {
  const now = new Date(lastReview);
  let newInterval = INTERVALS[performance];

  // Double interval for mastered topics that are already at excellent level
  if (performance === "excellent" && currentInterval >= 7) {
    newInterval = currentInterval * 2;
  }

  const nextDate = new Date(now);
  nextDate.setDate(nextDate.getDate() + newInterval);

  return {
    interval: newInterval,
    lastReview: now,
    nextReview: nextDate,
  };
};

/**
 * Get topics that are due for review
 */
export const getTopicsDueForReview = (reviewSchedule) => {
  const now = new Date();
  const dueTopics = [];

  Object.keys(reviewSchedule).forEach((topicId) => {
    const review = reviewSchedule[topicId];
    if (new Date(review.nextReview) <= now) {
      dueTopics.push(topicId);
    }
  });

  return dueTopics;
};

/**
 * Get recommended next topic based on priority:
 * 1. Weak areas (< 70%)
 * 2. Due for review
 * 3. New/unattempted topics
 * 4. Random topic
 */
export const getRecommendedTopic = (progress, reviewSchedule, cases, verbs) => {
  // Priority 1: Weak areas
  if (progress.weakAreas && progress.weakAreas.length > 0) {
    return { type: "weak", topic: progress.weakAreas[0] };
  }

  // Priority 2: Due for review
  const dueTopics = getTopicsDueForReview(reviewSchedule);
  if (dueTopics.length > 0) {
    return { type: "review", topicId: dueTopics[0] };
  }

  // Priority 3: New topics (cases)
  for (let i = 0; i < cases.length; i++) {
    if (!progress.cases || !progress.cases[i]) {
      return { type: "new", section: "cases", index: i };
    }
  }

  // Priority 3: New topics (verbs)
  for (let i = 0; i < verbs.length; i++) {
    if (!progress.verbs || !progress.verbs[i]) {
      return { type: "new", section: "verbs", index: i };
    }
  }

  // Priority 4: Random/default
  return { type: "random", section: "cases", index: 0 };
};
