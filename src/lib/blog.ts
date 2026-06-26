import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
  content: string;
  readingTime: number;
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function fileToSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

// The CMS date picker may write the date as an unquoted YAML value, which
// gray-matter parses into a Date. Always coerce to a "YYYY-MM-DD" string.
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && value) return value;
  return new Date().toISOString().slice(0, 10);
}

function parsePost(filename: string): BlogPost {
  const fullPath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug: typeof data.slug === "string" && data.slug ? data.slug : fileToSlug(filename),
    title: data.title ?? "Untitled",
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage ?? "/images/gallery/featured-01.png",
    author: data.author ?? "Maxima Pools Team",
    publishedAt: normalizeDate(data.publishedAt),
    tags: Array.isArray(data.tags) ? data.tags : [],
    content,
    readingTime: estimateReadingTime(content),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("."));

  return files
    .map(parsePost)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);

  const overlap = (post: BlogPost): number =>
    post.tags.filter((t) => current.tags.includes(t)).length;

  return all
    .filter((p) => p.slug !== slug)
    .sort((a, b) => overlap(b) - overlap(a))
    .slice(0, limit);
}

export function formatPublishedDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
