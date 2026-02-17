import { useParams, useNavigate } from "react-router-dom";
import { useArticles } from "../useArticles";

export default function ArticleDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const { articles, remove } = useArticles();

  const a = articles.find(x => String(x.id) === String(id));
  if (!a) return <p>Article not found. <button onClick={() => nav("/articles")}>Back</button></p>;

  return (
    <section>
      <h1>{a.title}</h1>
      <p><i>{a.category} • {a.author || "Anonymous"}</i></p>
      <p style={{ whiteSpace: "pre-wrap" }}>{a.content}</p>

      <button
        className="button"
        onClick={() => {
          if (confirm("Delete?")) { remove(a.id); nav("/articles"); }
        }}
      >
        Delete
      </button>{" "}
      <button className="button" onClick={() => nav("/articles")}>Back</button>
    </section>
  );
}
