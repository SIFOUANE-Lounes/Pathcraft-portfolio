import React from "react";

export type Task = { id: number; title: string; done: boolean };

type Props = {
  task: Task;
  onSelect: (id: number) => void;
  selected: boolean;
};

function TaskItemBase({ task, onSelect, selected }: Props) {
  console.log("TaskItem rendu :", task.id);
  return (
    <li
      onClick={() => onSelect(task.id)}
      style={{
        cursor: "pointer",
        padding: "6px 10px",
        borderRadius: 8,
        border: "1px solid #ddd",
        background: selected ? "#def" : "#fff",
        marginTop: 4,
      }}
    >
      #{task.id} — {task.title} {task.done ? "✅" : "⬜️"}
    </li>
  );
}

export default React.memo(TaskItemBase);
