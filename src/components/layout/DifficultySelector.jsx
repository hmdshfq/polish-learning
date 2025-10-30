import React from "react";

const DifficultySelector = ({ difficulty, onDifficultyChange, show = true }) => {
  if (!show) return null;

  const levels = [
    { id: "beginner", label: "🌱 Beginner", color: "bg-green-500" },
    { id: "intermediate", label: "🔥 Intermediate", color: "bg-yellow-500" },
    { id: "advanced", label: "💎 Advanced", color: "bg-red-500" },
  ];

  return (
    <div className="flex gap-2 items-center mb-4">
      <span className="text-sm font-medium text-gray-700">Difficulty:</span>
      {levels.map((level) => (
        <button
          key={level.id}
          onClick={() => onDifficultyChange(level.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            difficulty === level.id
              ? `${level.color} text-white`
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {level.label}
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
