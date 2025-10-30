import React from "react";

const Navigation = ({ section, onSectionChange }) => {
  const sections = [
    { id: "dashboard", label: "📊 Dashboard", colors: "from-green-500 to-teal-500" },
    { id: "cases", label: "📚 Cases", colors: "bg-indigo-600" },
    { id: "verbs", label: "⚡ Verbs", colors: "bg-purple-600" },
  ];

  return (
    <div className="flex gap-3 mb-4">
      {sections.map((sec) => (
        <button
          key={sec.id}
          onClick={() => onSectionChange(sec.id)}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
            section === sec.id
              ? sec.colors.includes("from")
                ? `bg-gradient-to-r ${sec.colors} text-white shadow-lg`
                : `${sec.colors} text-white shadow-lg`
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {sec.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
