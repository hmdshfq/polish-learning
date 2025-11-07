import { BookOpen, GraduationCap } from 'lucide-react';

export default function ModeSelection({ onSelectMode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Polish Learning App
          </h1>
          <p className="text-xl text-gray-600">
            Choose your learning path
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vocabulary Mode */}
          <button
            onClick={() => onSelectMode('vocabulary')}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-500 transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <BookOpen className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Vocabulary
              </h2>
              <p className="text-gray-600 mb-6">
                Learn Polish words and phrases organized by proficiency levels
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  A1 Vocabulary (Beginner)
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  A2 Vocabulary (Elementary)
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  B1 Vocabulary (Intermediate)
                </div>
              </div>
            </div>
          </button>

          {/* Grammar Mode */}
          <button
            onClick={() => onSelectMode('grammar')}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-purple-500 transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                <GraduationCap className="w-12 h-12 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Grammar
              </h2>
              <p className="text-gray-600 mb-6">
                Master Polish grammar rules, cases, verbs, and sentence structures
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Cases & Declensions
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Verbs & Conjugations
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  Advanced Grammar Topics
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            You can switch between modes anytime from the dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
