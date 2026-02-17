import { useEffect, useState } from "react";
import { load, save } from "./storage";
import type { Article } from "./types";

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>(() => load<Article[]>([]));

  useEffect(() => { save(articles); }, [articles]);

  function create(data: Omit<Article, "id" | "createdAt">) {
    const id =
      (globalThis.crypto && "randomUUID" in globalThis.crypto
        ? (crypto as any).randomUUID()
        : String(Date.now() + Math.random()));
    const a: Article = { ...data, id, createdAt: new Date().toISOString() };
    const next = [a, ...articles];     
    setArticles(next);                   
    save(next);                          
  }

  function update(next: Article) {
    const arr = articles.map(a => (String(a.id) === String(next.id) ? next : a));
    setArticles(arr);
    save(arr);                          
  }

  function remove(id: string) {
    const arr = articles.filter(a => String(a.id) !== String(id));
    setArticles(arr);
    save(arr);                           
  }

  return { articles, create, update, remove };
}
