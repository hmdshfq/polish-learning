import React, { useState } from "react";
import { Download, FileText } from "lucide-react";
import { exportStudySheetHTML } from "../../utils/exportHelpers";

const ExportButton = ({ cases, verbs, prepositions, declensionTables }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleExportAll = () => {
    exportStudySheetHTML(cases, declensionTables, prepositions);
    setShowMenu(false);
  };

  const handleExportCases = () => {
    exportStudySheetHTML(cases, declensionTables, []);
    setShowMenu(false);
  };

  const handleExportPrepositions = () => {
    exportStudySheetHTML([], [], prepositions);
    setShowMenu(false);
  };

  const handleExportDeclensions = () => {
    exportStudySheetHTML([], declensionTables, []);
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
        <FileText className="w-5 h-5" />
        Export Study Sheets
      </button>

      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />

          {/* Dropdown Menu */}
          <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20 min-w-64">
            <button
              onClick={handleExportAll}
              className="w-full px-4 py-3 text-left hover:bg-indigo-50 transition-colors flex items-center gap-3">
              <Download className="w-4 h-4 text-indigo-600" />
              <div>
                <div className="font-medium text-gray-800">
                  Complete Study Pack
                </div>
                <div className="text-xs text-gray-500">
                  Cases, declensions & prepositions
                </div>
              </div>
            </button>

            <button
              onClick={handleExportCases}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center gap-3">
              <Download className="w-4 h-4 text-blue-600" />
              <div>
                <div className="font-medium text-gray-800">Cases Cheat Sheet</div>
                <div className="text-xs text-gray-500">
                  All 7 cases with examples
                </div>
              </div>
            </button>

            <button
              onClick={handleExportPrepositions}
              className="w-full px-4 py-3 text-left hover:bg-teal-50 transition-colors flex items-center gap-3">
              <Download className="w-4 h-4 text-teal-600" />
              <div>
                <div className="font-medium text-gray-800">
                  Prepositions Guide
                </div>
                <div className="text-xs text-gray-500">
                  Common prepositions by case
                </div>
              </div>
            </button>

            <button
              onClick={handleExportDeclensions}
              className="w-full px-4 py-3 text-left hover:bg-purple-50 transition-colors flex items-center gap-3">
              <Download className="w-4 h-4 text-purple-600" />
              <div>
                <div className="font-medium text-gray-800">
                  Declension Tables
                </div>
                <div className="text-xs text-gray-500">
                  Noun endings by gender
                </div>
              </div>
            </button>

            <div className="border-t border-gray-200 mt-2 pt-2 px-4 py-2">
              <p className="text-xs text-gray-500">
                💡 Opens as printable HTML file
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExportButton;
