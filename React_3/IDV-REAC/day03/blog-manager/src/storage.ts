const KEY = "blog_articles_v1";

export function load<T>(fallback: T): T {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function save<T>(value: T) {
  localStorage.setItem(KEY, JSON.stringify(value));
}
