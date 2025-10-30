import { getTopicsDueForReview } from "./spacedRepetition";

/**
 * Get recommended next topic based on priority:
 * 1. Weak areas (< 70%)
 * 2. Due for review
 * 3. New/unattempted topics
 * 4. Random topic
 */
export const getRecommendedTopic = (
  progress,
  reviewSchedule,
  cases,
  verbs
) => {
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
