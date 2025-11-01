import React from "react";

const Navigation = ({ section, onSectionChange }) => {
  const sections = [
    { id: "dashboard", label: "📊 Dashboard", colors: "from-green-500 to-teal-500" },
    { id: "cases", label: "📚 Cases", colors: "bg-indigo-600" },
    { id: "verbs", label: "⚡ Verbs", colors: "bg-purple-600" },
    { id: "prepositions", label: "🔗 Prepositions", colors: "bg-teal-600" },
    { id: "reflexiveVerbs", label: "🔄 Reflexive Verbs", colors: "bg-cyan-600" },
    { id: "imperativeMood", label: "🎯 Imperative", colors: "bg-orange-600" },
    { id: "conditionals", label: "❓ Conditionals", colors: "bg-slate-600" },
    { id: "motionVerbs", label: "🚶 Motion Verbs", colors: "bg-blue-600" },
    { id: "participles", label: "📝 Participles", colors: "bg-violet-600" },
    { id: "verbPrepositions", label: "📍 Verb+Prep", colors: "bg-red-600" },
    { id: "a1Vocabulary", label: "📖 A1 Vocab", colors: "bg-sky-600" },
    { id: "a2Vocabulary", label: "📖 A2 Vocab", colors: "bg-teal-600" },
    { id: "b1Vocabulary", label: "📖 B1 Vocab", colors: "bg-purple-600" },
    { id: "adjectives", label: "✨ Adjectives", colors: "bg-amber-600" },
    { id: "numbers", label: "🔢 Numbers", colors: "bg-emerald-600" },
    { id: "pronouns", label: "👤 Pronouns", colors: "bg-rose-600" },
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
