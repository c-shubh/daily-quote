const STORAGE_KEY = "bookmarks";

export interface Bookmarks {
  [k: string]: boolean;
}

export function store(key: string, value: boolean) {
  const existing = load();
  existing[key] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function load(): Bookmarks {
  const ret = localStorage.getItem(STORAGE_KEY);
  if (ret !== null) {
    return JSON.parse(ret) as Bookmarks;
  }
  return {};
}
