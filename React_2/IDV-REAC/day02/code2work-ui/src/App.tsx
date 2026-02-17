import { useState, useCallback } from "react";

type Task = { id: number; title: string };

function TaskItem({
  task,
  onSelect,
}: {
  task: Task;
  onSelect: (id: number) => void;
}) {
  console.log("Render:", task.title);
  return (
    <li
      onClick={() => onSelect(task.id)}
      style={{
        border: "1px solid #ccc",
        padding: 6,
        marginTop: 4,
        borderRadius: 6,
        cursor: "pointer",
      }}
    >
      {task.title}
    </li>
  );
}

export default function App() {
  const [tasks] = useState<Task[]>(
    Array.from({ length: 5 }, (_, i) => ({ id: i + 1, title: `Tâche ${i + 1}` }))
  );
  const [count, setCount] = useState(0);
  const [useCb, setUseCb] = useState(true);

  const handleSelect = useCb
    ? useCallback((id: number) => console.log("useCallback:", id), [])
    : (id: number) => console.log("sans useCallback:", id);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>useCallback simple</h1>
      <label>
        <input
          type="checkbox"
          checked={useCb}
          onChange={(e) => setUseCb(e.target.checked)}
        />{" "}
        useCallback activé
      </label>
      <button onClick={() => setCount((c) => c + 1)}>Re-render ({count})</button>
      <ul>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} onSelect={handleSelect} />
        ))}
      </ul>
    </div>
  );
}
