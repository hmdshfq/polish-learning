/**
 * Calculate accuracy percentage from score and total
 */
export const calculateAccuracy = (score, total) => {
  if (total === 0) return 0;
  return Math.round((score / total) * 100);
};

/**
 * Calculate overall accuracy from progress data
 */
export const calculateOverallAccuracy = (progress) => {
  if (progress.totalAttempts === 0) return 0;
  return Math.round((progress.totalScore / progress.totalAttempts) * 100);
};

/**
 * Determine performance level based on percentage score
 */
export const getPerformanceLevel = (percentage) => {
  if (percentage >= 90) return "excellent";
  if (percentage >= 70) return "good";
  return "poor";
};

/**
 * Check if a topic should be marked as weak (< 70% accuracy)
 */
export const isWeakTopic = (topicProgress) => {
  if (!topicProgress || topicProgress.attempts === 0) return false;
  const avgScore = topicProgress.totalScore / topicProgress.attempts;
  return avgScore < 0.7;
};

/**
 * Check if a topic has been mastered (>= 90% on 3+ attempts)
 */
export const isMasteredTopic = (topicProgress) => {
  if (!topicProgress) return false;
  return topicProgress.bestScore >= 90 && topicProgress.attempts >= 3;
};

/**
 * Get weak areas from progress data
 */
export const identifyWeakAreas = (progress, cases, verbs) => {
  const weakAreas = [];

  // Check cases
  Object.keys(progress.cases || {}).forEach((index) => {
    const topicProgress = progress.cases[index];
    if (isWeakTopic(topicProgress)) {
      weakAreas.push(cases[index].name);
    }
  });

  // Check verbs
  Object.keys(progress.verbs || {}).forEach((index) => {
    const topicProgress = progress.verbs[index];
    if (isWeakTopic(topicProgress)) {
      weakAreas.push(verbs[index].name);
    }
  });

  return weakAreas;
};

/**
 * Get mastered topics from progress data
 */
export const identifyMasteredTopics = (progress, cases, verbs) => {
  const masteredTopics = [];

  // Check cases
  Object.keys(progress.cases || {}).forEach((index) => {
    const topicProgress = progress.cases[index];
    if (isMasteredTopic(topicProgress)) {
      masteredTopics.push(cases[index].name);
    }
  });

  // Check verbs
  Object.keys(progress.verbs || {}).forEach((index) => {
    const topicProgress = progress.verbs[index];
    if (isMasteredTopic(topicProgress)) {
      masteredTopics.push(verbs[index].name);
    }
  });

  return masteredTopics;
};
