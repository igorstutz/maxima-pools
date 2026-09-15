/* ------------------------------------------------------------------ */
/*  Markdown twin of every exported page.                              */
/*                                                                     */
/*  Runs after `next build` and writes <route>/index.md next to each   */
/*  <route>/index.html in out/. Apache serves the .md when a client    */
/*  asks for `Accept: text/markdown` (see public/.htaccess), which is  */
/*  how AI agents read the site without wading through the React       */
/*  markup — no icon SVGs, no gradient wrappers, no RSC payload.       */
/*                                                                     */
/*  Only the <main> element is converted: the header and footer are    */
/*  navigation chrome that repeats on all ~200 pages and tells an      */
/*  agent nothing about the page it asked for.                         */
/* ------------------------------------------------------------------ */

import { readFile, writeFile, readdir, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import TurndownService from "turndown";

const OUT_DIR = "out";
const POOLS_DIR = join("src", "content", "pools");
const SITE = "https://maximapools.com";

/* The CMS and the Next.js internals have no prose worth converting. */
const SKIP_DIRS = new Set(["_next", "admin", "api", "images", "videos", "_not-found"]);

const turndown = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
});

/* Lucide renders every icon as an inline <svg>; left in place they become
   pages of stray whitespace. Same for the RSC payload in trailing scripts. */
turndown.remove(["script", "style", "noscript", "svg", "iframe", "form"]);

/* A relative link is useless to an agent that fetched a single page, so
   both links and images resolve against the canonical origin. */
const absolute = (value) => {
  if (!value) return "";
  if (/^(https?:|mailto:|tel:|#)/i.test(value)) return value;
  return value.startsWith("/") ? `${SITE}${value}` : value;
};

turndown.addRule("absoluteLinks", {
  filter: (node) => node.nodeName === "A" && node.getAttribute("href"),
  replacement: (content, node) => {
    const text = content.trim();
    if (!text) return "";
    return `[${text}](${absolute(node.getAttribute("href"))})`;
  },
});

turndown.addRule("absoluteImages", {
  filter: "img",
  replacement: (_content, node) => {
    const src = node.getAttribute("src");
    if (!src) return "";
    const alt = (node.getAttribute("alt") || "").trim();
    return `![${alt}](${absolute(src)})`;
  },
});

const stripComments = (html) => html.replace(/<!--[\s\S]*?-->/g, "");

/** The layout renders exactly one <main>, so index/lastIndexOf is enough. */
function extractMain(html) {
  const open = html.indexOf("<main");
  if (open === -1) return null;
  const bodyStart = html.indexOf(">", open);
  const close = html.lastIndexOf("</main>");
  if (bodyStart === -1 || close === -1 || close < bodyStart) return null;
  return html.slice(bodyStart + 1, close);
}

function metaOf(html, pattern) {
  const match = html.match(pattern);
  if (!match) return "";
  return decodeEntities(match[1].trim());
}

function decodeEntities(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

/** YAML needs the quotes escaped; every value we emit is a plain string. */
const yaml = (value) => `"${String(value).replace(/"/g, '\\"')}"`;

/* ------------------------------------------------------------------ */
/*  Fallback bodies for routes that render only on the client.         */
/*                                                                     */
/*  /pools reads the filter state from useSearchParams, so Next bails  */
/*  the whole catalog out to client-side rendering and the exported    */
/*  HTML contains nothing but the JSON-LD. A browser fills it in; an   */
/*  agent fetching the URL sees an empty page. Rebuilding the table    */
/*  from the same JSON the page reads keeps the Markdown twin useful   */
/*  without touching the interactive page itself.                      */
/* ------------------------------------------------------------------ */

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Pipes inside a cell would end it early — the dimensions use inch marks. */
const cell = (value) => String(value ?? "—").replace(/\|/g, "\\|");

async function poolCatalogTable() {
  const files = (await readdir(POOLS_DIR)).filter((f) => f.endsWith(".json"));

  const models = (
    await Promise.all(
      files.map(async (f) =>
        JSON.parse(await readFile(join(POOLS_DIR, f), "utf8"))
      )
    )
  )
    .filter((p) => !p.hidden)
    .sort(
      (a, b) =>
        (a.order ?? Number.MAX_SAFE_INTEGER) -
          (b.order ?? Number.MAX_SAFE_INTEGER) ||
        a.name.localeCompare(b.name)
    );

  const rows = models.map((p) => {
    const types = p.types?.length ? p.types.join(", ") : p.type;
    return `| [${cell(p.name)}](${SITE}/pools/${slugify(p.name)}/) | ${cell(
      types
    )} | ${cell(p.shape)} | ${cell(p.size)} | ${cell(p.length)} | ${cell(
      p.width
    )} | ${cell(p.depth)} | ${cell(p.area)} | ${cell(p.volume)} |`;
  });

  return [
    "# San Juan Fiberglass Pool Collection",
    "",
    `Every San Juan fiberglass pool and spa model Maxima Pools installs in Central Ohio — ${models.length} in total. Each model links to its own page with photos, a 3D view where available, and the full specification.`,
    "",
    "| Model | Type | Shape | Size | Length | Width | Depth | Area | Volume |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...rows,
    "",
    `Dimensions are the manufacturer's published figures. [Request a free estimate](${SITE}/contact/) or call (614) 384-5081 to talk through which model fits your yard.`,
  ].join("\n");
}

const FALLBACKS = { "/pools/": poolCatalogTable };

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(join(dir, entry.name));
    } else if (entry.name === "index.html") {
      yield join(dir, entry.name);
    }
  }
}

/** out/pools/atlantic/index.html → /pools/atlantic/ */
function routeOf(file) {
  const rel = relative(OUT_DIR, file).split(sep).slice(0, -1).join("/");
  return rel ? `/${rel}/` : "/";
}

async function main() {
  try {
    await stat(OUT_DIR);
  } catch {
    console.error(`[markdown] ${OUT_DIR}/ not found — run next build first.`);
    process.exit(1);
  }

  let written = 0;
  const empty = [];

  for await (const file of walk(OUT_DIR)) {
    const html = stripComments(await readFile(file, "utf8"));
    const route = routeOf(file);
    const main = extractMain(html);

    const title = metaOf(html, /<title>([\s\S]*?)<\/title>/i);
    const description = metaOf(
      html,
      /<meta\s+name="description"\s+content="([^"]*)"/i
    );

    let body = main
      ? turndown.turndown(main).replace(/\n{3,}/g, "\n\n").trim()
      : "";

    if (!body && FALLBACKS[route]) {
      body = await FALLBACKS[route]();
    }

    if (!body) {
      empty.push(route);
      continue;
    }

    const frontMatter = [
      "---",
      `title: ${yaml(title)}`,
      description ? `description: ${yaml(description)}` : null,
      `url: ${yaml(SITE + route)}`,
      "---",
    ]
      .filter(Boolean)
      .join("\n");

    await writeFile(
      file.replace(/index\.html$/, "index.md"),
      `${frontMatter}\n\n${body}\n`,
      "utf8"
    );
    written += 1;
  }

  console.log(`[markdown] wrote ${written} .md file${written === 1 ? "" : "s"}`);

  /* Naming the routes rather than counting them: a page that silently starts
     rendering client-side would otherwise slip into the build unnoticed. */
  if (empty.length) {
    console.warn(
      `[markdown] no prose found for ${empty.length} route(s): ${empty.join(", ")}`
    );
  }
}

await main();
