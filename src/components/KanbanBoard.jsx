import { useState } from "react";

const defaultColumns = [
  { id: "todo", title: "To Do" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];

export default function KanbanBoard({ tasks = [], onTaskMove }) {
  const [columns, setColumns] = useState(defaultColumns);

  function handleMove(taskId, toColumn) {
    if (onTaskMove) onTaskMove(taskId, toColumn);
  }

  return (
    <div className="flex gap-6 w-full">
      {columns.map((col) => (
        <div key={col.id} className="flex-1 bg-white rounded-xl shadow p-4">
          <h3 className="font-bold text-blue-900 mb-4">{col.title}</h3>
          <div className="flex flex-col gap-3 min-h-[120px]">
            {tasks.filter((t) => t.status === col.id).length === 0 ? (
              <div className="text-gray-400">No tasks</div>
            ) : (
              tasks.filter((t) => t.status === col.id).map((task) => (
                <div key={task.id} className="bg-blue-50 rounded-lg p-3 shadow flex flex-col gap-1">
                  <div className="font-semibold text-blue-800">{task.title}</div>
                  <div className="text-xs text-gray-500">Due: {task.dueDate || "-"}</div>
                  <div className="flex gap-2 mt-2">
                    {columns.filter((c) => c.id !== col.id).map((c) => (
                      <button
                        key={c.id}
                        className="px-2 py-1 text-xs bg-blue-200 rounded hover:bg-blue-300"
                        onClick={() => handleMove(task.id, c.id)}
                      >
                        Move to {c.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
