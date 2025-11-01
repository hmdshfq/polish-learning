import React from "react";
import { Book, Star } from "lucide-react";

const Header = ({ streak = 0 }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <Book className="w-8 h-8 text-indigo-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Remember Polish
            </h1>
            <p className="text-sm text-gray-600">
              Your Polish Learning Companion 🎓
            </p>
          </div>
        </div>

        {/* Streak Counter */}
        <div className="bg-linear-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-lg">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            <div>
              <p className="text-xs">Study Streak</p>
              <p className="text-xl font-bold">{streak} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
