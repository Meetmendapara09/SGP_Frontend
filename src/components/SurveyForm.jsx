import { useState } from "react";

export default function SurveyForm({ questions = [], onSubmit }) {
  const [responses, setResponses] = useState({});

  function handleChange(qid, value) {
    setResponses((prev) => ({ ...prev, [qid]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(responses);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 w-full max-w-lg flex flex-col gap-4">
      <h2 className="text-lg font-bold text-blue-900 mb-2">Survey</h2>
      {questions.length === 0 ? (
        <div className="text-gray-400">No questions available.</div>
      ) : (
        questions.map((q) => (
          <div key={q.id} className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">{q.text}</label>
            {q.type === "text" ? (
              <input
                type="text"
                className="border rounded px-3 py-2"
                value={responses[q.id] || ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
            ) : q.type === "choice" ? (
              <select
                className="border rounded px-3 py-2"
                value={responses[q.id] || ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
              >
                <option value="">Select...</option>
                {q.options.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            ) : null}
          </div>
        ))
      )}
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded font-bold">Submit</button>
    </form>
  );
}
