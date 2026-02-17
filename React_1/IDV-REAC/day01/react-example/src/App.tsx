import { useState } from "react";

export default function App() {
  const [nom, setNom] = useState<string>("Lounes");
  const [score, setScore] = useState<number>(0);
  const [taches, setTaches] = useState(0);

  const projets = [
    { id: 1, nom: "Dashboard", auteur: "Lounes", statut: "En cours" },
    { id: 2, nom: "Service", auteur: "Sarah", statut: "Terminé" },
    { id: 3, nom: "Library", auteur: "Amine", statut: "En attente" },
  ];

  const couleur = (s: string) =>
    s === "Terminé" ? "green" : s === "En attente" ? "orange" : "blue";

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <p>Utilisateur : {nom}</p>
      <input value={nom} onChange={(e) => setNom(e.target.value)} />

      <h2>Score : {score}</h2>
      <button onClick={() => setScore((s) => s + 1)}>+1</button>
      <button onClick={() => setScore((s) => s + 10)}>+10</button>

      <h2>Tâches complétées : {taches}</h2>
      <button onClick={() => setTaches((t) => t + 1)}>Ajouter une tâche</button>

      <h2>Projets</h2>
      {projets.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #444",
            borderRadius: 6,
            margin: "10px 0",
            padding: 10,
            background: "#111",
            color: "#fff",
          }}
        >
          <h3>{p.nom}</h3>
          <p>Auteur : {p.auteur}</p>
          <p style={{ color: couleur(p.statut) }}>Statut : {p.statut}</p>
        </div>
      ))}
    </div>
  );
}
