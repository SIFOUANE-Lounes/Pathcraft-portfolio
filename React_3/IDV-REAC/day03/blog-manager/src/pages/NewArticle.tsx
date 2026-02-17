import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useArticles } from "../useArticles";

export default function NewArticle() {
  const { create } = useArticles();
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !category || !content) return alert("Missing fields");
    create({ title, category, content, author: author || "Anonymous" });
    nav("/articles");
  }

  return (
    <section>
      <h1>New Article</h1>
      <form onSubmit={submit} style={{ display: "grid", gap: 8, maxWidth: 600 }}>
        <input className="input" placeholder="Title *" 
        value={title} onChange={e => setTitle(e.target.value)} />
        <input className="input" placeholder="Category *" 
        value={category} onChange={e => setCategory(e.target.value)} />
        <textarea className="textarea" rows={6} placeholder="Content *" 
        value={content} onChange={e => setContent(e.target.value)} />
        <input className="input" placeholder="Author" value={author} 
        onChange={e => setAuthor(e.target.value)} />
        <button className="button" type="submit">Create</button>
      </form>
    </section>
  );
}
