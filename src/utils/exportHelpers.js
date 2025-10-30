/**
 * Export progress data as JSON file
 */
export const exportProgressToJSON = (progress, reviewSchedule, difficulty) => {
  const data = JSON.stringify(
    { progress, reviewSchedule, difficulty },
    null,
    2
  );
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `polish-grammar-progress-${
    new Date().toISOString().split("T")[0]
  }.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Parse imported progress file
 */
export const parseProgressFile = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        resolve(data);
      } catch (error) {
        reject(new Error("Invalid JSON file format"));
      }
    };
    reader.onerror = () => reject(new Error("Error reading file"));
    reader.readAsText(file);
  });
};

/**
 * Export study sheet as HTML file
 */
export const exportStudySheetHTML = (cases, declensionTables, prepositions = []) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Polish Grammar Study Sheet</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
    }
    h1 { color: #4F46E5; border-bottom: 3px solid #4F46E5; padding-bottom: 10px; }
    h2 { color: #7C3AED; margin-top: 30px; }
    h3 { color: #DB2777; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
    th { background-color: #4F46E5; color: white; }
    .case-section { page-break-inside: avoid; margin-bottom: 30px; }
    .example { background: #EEF2FF; padding: 10px; margin: 10px 0; border-radius: 5px; }
    @media print {
      body { font-size: 12px; }
      .case-section { page-break-after: always; }
    }
  </style>
</head>
<body>
  <h1>📚 Polish Grammar Study Sheet</h1>
  <p><em>Generated on ${new Date().toLocaleDateString()}</em></p>

  <h2>Polish Grammatical Cases</h2>
  ${cases.map(c => `
    <div class="case-section">
      <h3>${c.name} (${c.polish})</h3>
      <p><strong>Question:</strong> ${c.question} - ${c.questionEng}</p>
      <p><strong>Usage:</strong> ${c.usage}</p>
      <p><strong>Tip:</strong> ${c.analogy}</p>
      <div class="example">
        <strong>Examples:</strong><br>
        ${c.examples.map(ex => `• ${ex.polish} → ${ex.english}`).join('<br>')}
      </div>
    </div>
  `).join('')}

  <h2>Declension Tables</h2>
  ${declensionTables.map(table => `
    <h3>${table.title}</h3>
    <table>
      <thead>
        <tr>
          <th>Case</th>
          <th>Singular</th>
          <th>Plural</th>
        </tr>
      </thead>
      <tbody>
        ${table.rows.map(row => `
          <tr>
            <td>${row.case}</td>
            <td>${row.singular}</td>
            <td>${row.plural}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `).join('')}

  ${prepositions.length > 0 ? `
    <h2>Prepositions</h2>
    ${prepositions.map(prep => `
      <h3>${prep.name}</h3>
      <p><strong>Case used:</strong> ${prep.case}</p>
      <p>${prep.explanation}</p>
      <ul>
        ${prep.commonPrepositions.map(p => `
          <li><strong>${p.polish}</strong> - ${p.english}: <em>${p.example}</em></li>
        `).join('')}
      </ul>
    `).join('')}
  ` : ''}

  <footer style="margin-top: 50px; padding-top: 20px; border-top: 2px solid #ddd; text-align: center; color: #666;">
    <p>Created with Polish Grammar Master</p>
  </footer>
</body>
</html>
  `;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `polish-grammar-study-sheet-${new Date().toISOString().split("T")[0]}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
