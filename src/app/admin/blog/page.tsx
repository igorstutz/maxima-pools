"use client";

import { useState, useMemo, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Download,
  Copy,
  Eye,
  Pencil,
  Lock,
  Sparkles,
  RefreshCcw,
  Check,
  AlertCircle,
} from "lucide-react";
import { asset } from "@/lib/base-path";

const markdownComponents = {
  img({ src, alt, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) {
    const resolved = typeof src === "string" ? asset(src) : src;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...rest} src={resolved} alt={alt ?? ""} loading="lazy" />;
  },
};

const ADMIN_PASSWORD = "maxima2026";

const STORAGE_KEY = "maxima-blog-draft-v1";

interface Draft {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: string;
  tags: string;
  publishedAt: string;
  body: string;
}

const emptyDraft: Draft = {
  title: "",
  slug: "",
  excerpt: "",
  coverImage: "/images/gallery/featured-01.png",
  author: "Maxima Pools Team",
  tags: "",
  publishedAt: new Date().toISOString().slice(0, 10),
  body: `Write your article here using Markdown.

## Section heading

Use **bold**, *italic*, and [links](https://example.com).

- Bullet points
- Another bullet

> A quote stands out from the rest.

Add another paragraph and finish with a call to action.
`,
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildMarkdown(draft: Draft): string {
  const tags = draft.tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const escape = (v: string) => v.replace(/"/g, '\\"');

  const frontmatter = [
    "---",
    `title: "${escape(draft.title || "Untitled")}"`,
    `excerpt: "${escape(draft.excerpt)}"`,
    `coverImage: "${escape(draft.coverImage)}"`,
    `author: "${escape(draft.author)}"`,
    `publishedAt: "${draft.publishedAt}"`,
    `tags: [${tags.map((t) => `"${escape(t)}"`).join(", ")}]`,
    "---",
    "",
  ].join("\n");

  return frontmatter + draft.body.trimStart();
}

function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

export default function AdminBlogPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [pwError, setPwError] = useState(false);

  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [view, setView] = useState<"edit" | "preview">("edit");
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<Draft>;
        setDraft((d) => ({ ...d, ...parsed }));
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist draft to localStorage
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch {
      // ignore
    }
  }, [draft, hydrated]);

  // Auto-derive slug from title (only when slug is empty or matches the previous title's slug)
  useEffect(() => {
    setDraft((d) => {
      const desired = slugify(d.title);
      if (!d.slug || d.slug === slugify(d.title.slice(0, d.title.length - 1))) {
        return { ...d, slug: desired };
      }
      return d;
    });
  }, [draft.title]);

  const filename = useMemo(
    () => `${draft.slug || "untitled"}.md`,
    [draft.slug]
  );

  const markdown = useMemo(() => buildMarkdown(draft), [draft]);

  const isValid = draft.title.trim().length > 0 && draft.slug.trim().length > 0;

  function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setUnlocked(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  }

  function handleDownload() {
    if (!isValid) return;
    downloadFile(filename, markdown);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  function handleReset() {
    if (confirm("Discard the current draft? This cannot be undone.")) {
      setDraft(emptyDraft);
    }
  }

  /* ── Password gate ── */
  if (!unlocked) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#075985] px-4 py-20">
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />
        <div className="relative w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
              <Lock size={24} className="text-accent" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Maxima Blog — Admin
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Enter the editor passphrase to compose a new article.
            </p>
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPwError(false);
                  }}
                  placeholder="Passphrase"
                  className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-base ${
                    pwError ? "border-red-300 bg-red-50/50" : "border-gray-200"
                  }`}
                  autoFocus
                />
                {pwError && (
                  <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5">
                    <AlertCircle size={12} />
                    Incorrect passphrase
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all text-sm cursor-pointer"
              >
                Unlock editor
                <Sparkles size={16} />
              </button>
            </form>
            <p className="text-[11px] text-gray-400 mt-6 leading-relaxed">
              This page is unindexed and unlinked. Anyone with the URL and
              passphrase can compose, but nothing publishes automatically —
              you still commit the .md file to the repo.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ── Editor ── */
  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-3">
              <Pencil size={12} className="text-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-wider">
                Blog Editor
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Compose a new article
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Fill in the fields, then download the <code className="text-accent bg-accent/5 px-1.5 py-0.5 rounded text-xs">.md</code> file
              and drop it into <code className="text-accent bg-accent/5 px-1.5 py-0.5 rounded text-xs">src/content/blog/</code>.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 *:whitespace-nowrap">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition-all text-sm cursor-pointer"
            >
              <RefreshCcw size={14} />
              Reset
            </button>
            <button
              type="button"
              onClick={handleCopy}
              disabled={!isValid}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy markdown"}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              disabled={!isValid}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Download size={14} />
              Download {filename}
            </button>
          </div>
        </div>

        {/* Mobile view toggle */}
        <div className="lg:hidden mb-4 inline-flex bg-white border border-gray-200 rounded-full p-1">
          {(["edit", "preview"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                view === v
                  ? "bg-accent text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {v === "edit" ? (
                <>
                  <Pencil size={12} className="inline mr-1.5" />
                  Edit
                </>
              ) : (
                <>
                  <Eye size={12} className="inline mr-1.5" />
                  Preview
                </>
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Edit panel */}
          <div className={`${view === "edit" ? "block" : "hidden"} lg:block space-y-5`}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">
                Article details
              </h2>

              <div className="space-y-4">
                <Field
                  label="Title"
                  value={draft.title}
                  onChange={(v) => setDraft({ ...draft, title: v })}
                  placeholder="A clear, useful headline"
                />
                <Field
                  label="Slug"
                  value={draft.slug}
                  onChange={(v) => setDraft({ ...draft, slug: slugify(v) })}
                  placeholder="article-url-segment"
                  hint="Used in the URL: /blog/{slug}"
                />
                <Field
                  label="Excerpt"
                  value={draft.excerpt}
                  onChange={(v) => setDraft({ ...draft, excerpt: v })}
                  placeholder="A 1–2 sentence teaser shown on the listing"
                  multiline
                />
                <Field
                  label="Cover image URL"
                  value={draft.coverImage}
                  onChange={(v) => setDraft({ ...draft, coverImage: v })}
                  placeholder="/images/gallery/your-image.jpg"
                  hint="Reference any image in /public/images/."
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Author"
                    value={draft.author}
                    onChange={(v) => setDraft({ ...draft, author: v })}
                    placeholder="Maxima Pools Team"
                  />
                  <Field
                    label="Published date"
                    value={draft.publishedAt}
                    onChange={(v) => setDraft({ ...draft, publishedAt: v })}
                    type="date"
                  />
                </div>
                <Field
                  label="Tags"
                  value={draft.tags}
                  onChange={(v) => setDraft({ ...draft, tags: v })}
                  placeholder="Maintenance, Tips, Spring Opening"
                  hint="Comma-separated. Show up as filters & badges."
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">
                Body (Markdown)
              </h2>
              <textarea
                value={draft.body}
                onChange={(e) => setDraft({ ...draft, body: e.target.value })}
                rows={22}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm font-mono leading-relaxed resize-y"
                spellCheck
              />
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                Markdown supports headings (##), <strong>**bold**</strong>,
                <em>*italic*</em>, [links](url), bullet lists, &gt; blockquotes,
                and tables.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 sm:p-6">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Publishing flow
              </h3>
              <ol className="text-sm text-gray-700 leading-relaxed list-decimal pl-5 space-y-1">
                <li>Click <strong>Download</strong> — the file saves as <code className="text-accent text-xs">{filename}</code>.</li>
                <li>Drop it into <code className="text-accent text-xs">src/content/blog/</code> in the project.</li>
                <li>Commit + push (or send the file to whoever does it).</li>
                <li>GitHub Pages rebuilds and the article goes live.</li>
              </ol>
            </div>
          </div>

          {/* Preview panel */}
          <div className={`${view === "preview" ? "block" : "hidden"} lg:block`}>
            <div className="lg:sticky lg:top-24 space-y-5">
              {/* Card preview */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-2">
                  <Eye size={14} className="text-accent" />
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Listing card preview
                  </span>
                </div>
                <div className="p-5">
                  <div className="rounded-xl overflow-hidden border border-gray-100 bg-white">
                    <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                      {draft.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={draft.coverImage}
                          alt={draft.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-sm">
                          Cover preview
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      {draft.tags && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {draft.tags
                            .split(",")
                            .map((t) => t.trim())
                            .filter(Boolean)
                            .slice(0, 2)
                            .map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-semibold text-accent bg-accent/[0.06] rounded-full px-2.5 py-1 border border-accent/15 uppercase tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                        {draft.title || "Article title"}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {draft.excerpt || "Excerpt appears here."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body preview */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-2">
                  <Eye size={14} className="text-accent" />
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Article preview
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    {draft.title || "Article title"}
                  </h1>
                  <p className="text-xs text-gray-400 mb-6">
                    {draft.author} · {draft.publishedAt}
                  </p>
                  <div className="blog-prose">
                    {draft.body.trim() ? (
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                        {draft.body}
                      </ReactMarkdown>
                    ) : (
                      <p className="text-gray-400 italic">
                        Body preview will appear here as you type.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Field component ── */
function Field({
  label,
  value,
  onChange,
  placeholder,
  hint,
  multiline,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hint?: string;
  multiline?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={2}
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm resize-y"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
        />
      )}
      {hint && <p className="text-[11px] text-gray-400 mt-1.5">{hint}</p>}
    </div>
  );
}
