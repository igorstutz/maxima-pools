const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a local asset path with the basePath (for `<img>` tags). */
export function asset(path: string): string {
  if (!basePath || path.startsWith("http") || path.startsWith("data:")) return path;
  if (path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
}
