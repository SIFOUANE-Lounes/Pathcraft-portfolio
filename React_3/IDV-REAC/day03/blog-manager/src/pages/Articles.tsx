import { Link } from "react-router-dom";
import { useArticles } from "../useArticles";

export default function Articles() {
  const { articles, remove } = useArticles();

  function del(id: string) {
    if (confirm("Delete this article?")) remove(id);
  }

  return (
    <section>
      <h1>All Articles</h1>

      <div style={{ marginBottom: 8 }}>
        <Link className="button" to="/new">New</Link>
      </div>

      {articles.length === 0 ? (
        <p>No articles</p>
      ) : (
        <ul>
          {articles.map(a => (
            <li key={a.id} style={{ marginBottom: 6 }}>
              <Link to={`/articles/${a.id}`}>{a.title}</Link>{" "}
              <button className="button" onClick={() => del(a.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
