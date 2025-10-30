import React from "react";
import { RefreshCw } from "lucide-react";

const ScoreDisplay = ({ score, total, onReset }) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div>
      <div className="mb-6 p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-center">
        <p className="text-xl mb-2">Your Score</p>
        <p className="text-5xl font-bold mb-2">
          {score} / {total}
        </p>
        <p className="text-2xl font-semibold mb-2">{percentage}%</p>
        <p className="text-lg">
          {percentage === 100
            ? "🎉 Perfect! You mastered this!"
            : percentage >= 90
            ? "🌟 Excellent! Almost perfect!"
            : percentage >= 70
            ? "👍 Great job! Keep practicing!"
            : percentage >= 50
            ? "📚 Good effort! Review and try again!"
            : "💪 Keep studying! You'll get it!"}
        </p>
      </div>

      <button
        onClick={onReset}
        className="w-full bg-gray-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-5 h-5" />
        Try Again
      </button>
    </div>
  );
};

export default ScoreDisplay;
