import { useCallback, useMemo, useRef, useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import type { Task } from "./TaskItem";

function makeTasks(n = 10): Task[] {
  return Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    title: `Tâche ${i + 1}`,
    done: Math.random() > 0.5,
  }));
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(() => makeTasks());
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [unrelated, setUnrelated] = useState(0);
  const [optimized, setOptimized] = useState(true);

  const handleSelect = optimized
    ? useCallback((id: number) => {
        console.log("handleSelect (useCallback) id:", id);
        setSelectedId(id);
      }, [])
    : (id: number) => {
        console.log("handleSelect (non mémo) id:", id);
        setSelectedId(id);
      };

  const lastFnRef = useRef<(id: number) => void>(handleSelect);
  useEffect(() => {
    if (lastFnRef.current !== handleSelect) {
      console.log(
        optimized
          ? "🔒 Nouvelle fonction (useCallback)"
          : "♻️ Nouvelle fonction (sans useCallback)"
      );
      lastFnRef.current = handleSelect;
    }
  }, [handleSelect, optimized]);

  const list = useMemo(() => [...tasks].sort((a, b) => a.id - b.id), [tasks]);

  return (
    <div>
      <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <input
          type="checkbox"
          checked={optimized}
          onChange={(e) => setOptimized(e.target.checked)}
        />
        useCallback activé
      </label>

      <button onClick={() => setUnrelated((n) => n + 1)}>
        Re-render non lié ({unrelated})
      </button>
      <button onClick={() => setTasks(makeTasks())}>🔄 Régénérer les tâches</button>
      <button onClick={() => setSelectedId(null)}>✖️ Désélectionner</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {list.map((t) => (
          <TaskItem
            key={t.id}
            task={t}
            onSelect={handleSelect}
            selected={t.id === selectedId}
          />
        ))}
      </ul>
    </div>
  );
}
