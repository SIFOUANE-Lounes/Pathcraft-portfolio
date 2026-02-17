import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/new">New</Link>
        </nav>
      </header>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>

      <footer style={{ padding: 12, borderTop: "1px solid #eee" }}>
        © 2025 — Simple Blog
      </footer>
    </div>
  );
}
