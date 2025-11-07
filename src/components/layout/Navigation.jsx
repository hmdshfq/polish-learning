import React from "react";
import { ArrowLeft } from "lucide-react";

const Navigation = ({ section, onSectionChange, appMode, onModeChange }) => {
  const allSections = [
    { id: "dashboard", label: "📊 Dashboard", colors: "from-green-500 to-teal-500", mode: "both" },
    // Grammar sections
    { id: "cases", label: "📚 Cases", colors: "bg-indigo-600", mode: "grammar" },
    { id: "verbs", label: "⚡ Verbs", colors: "bg-purple-600", mode: "grammar" },
    { id: "prepositions", label: "🔗 Prepositions", colors: "bg-teal-600", mode: "grammar" },
    { id: "reflexiveVerbs", label: "🔄 Reflexive Verbs", colors: "bg-cyan-600", mode: "grammar" },
    { id: "imperativeMood", label: "🎯 Imperative", colors: "bg-orange-600", mode: "grammar" },
    { id: "conditionals", label: "❓ Conditionals", colors: "bg-slate-600", mode: "grammar" },
    { id: "motionVerbs", label: "🚶 Motion Verbs", colors: "bg-blue-600", mode: "grammar" },
    { id: "participles", label: "📝 Participles", colors: "bg-violet-600", mode: "grammar" },
    { id: "verbPrepositions", label: "📍 Verb+Prep", colors: "bg-red-600", mode: "grammar" },
    { id: "adjectives", label: "✨ Adjectives", colors: "bg-amber-600", mode: "grammar" },
    { id: "numbers", label: "🔢 Numbers", colors: "bg-emerald-600", mode: "grammar" },
    { id: "pronouns", label: "👤 Pronouns", colors: "bg-rose-600", mode: "grammar" },
    // Vocabulary sections
    { id: "a1Vocabulary", label: "📖 A1 Vocab", colors: "bg-sky-600", mode: "vocabulary" },
    { id: "a2Vocabulary", label: "📖 A2 Vocab", colors: "bg-teal-600", mode: "vocabulary" },
    { id: "b1Vocabulary", label: "📖 B1 Vocab", colors: "bg-purple-600", mode: "vocabulary" },
  ];

  // Filter sections based on the selected app mode
  const sections = allSections.filter(
    (sec) => sec.mode === "both" || sec.mode === appMode
  );

  return (
    <div>
      {/* Mode indicator and back button */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onModeChange(null)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Change Mode
          </button>
          <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold">
            {appMode === "vocabulary" ? "📖 Vocabulary Mode" : "🎓 Grammar Mode"}
          </div>
        </div>
      </div>

      {/* Section navigation buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => onSectionChange(sec.id)}
            className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
              section === sec.id
                ? sec.colors.includes("from")
                  ? `bg-linear-to-r ${sec.colors} text-white shadow-lg`
                  : `${sec.colors} text-white shadow-lg`
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {sec.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
