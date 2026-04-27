import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  PenLine,
  Phone,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatPublishedDate,
} from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found | Maxima Pools" };

  return {
    title: `${post.title} | Maxima Pools Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: { "@type": "Organization", name: post.author },
            publisher: { "@type": "Organization", name: "Maxima Pools" },
            image: post.coverImage,
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 min-h-[480px] flex items-end">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/85 to-[#0c4a6e]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/80 via-[#0c4a6e]/20 to-transparent" />
        <div className="absolute inset-0 water-caustics opacity-10 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-accent transition-colors font-medium">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/80 font-medium truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </span>
          </nav>

          {post.tags.length > 0 && (
            <div className="hero-animate hero-animate-2 flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-accent bg-accent/15 border border-accent/25 backdrop-blur-sm rounded-full px-3 py-1.5 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="hero-animate hero-animate-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="hero-animate hero-animate-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/90">
            <span className="flex items-center gap-2">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {formatPublishedDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {post.readingTime} min read
            </span>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Body ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="blog-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </article>

          {/* Back to blog */}
          <div className="mt-14 pt-8 border-t border-gray-100 flex items-center justify-between gap-4">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              All articles
            </Link>
            <span className="text-xs text-gray-400">
              Published {formatPublishedDate(post.publishedAt)}
            </span>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <>
          <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="max-w-3xl mb-10">
                  <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-5">
                    <PenLine size={14} className="text-accent" />
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                      Keep Reading
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    More from the journal
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((p, i) => (
                  <ScrollReveal key={p.slug} delay={((i + 1) as 1 | 2)}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group block rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                        <Image
                          src={p.coverImage}
                          alt={p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                          {p.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                          {p.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                          Read article
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
          <SectionDivider />
        </>
      )}

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[360px] flex items-center">
              <Image
                src="/images/pools/grand-manhattan.png"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative w-full px-8 sm:px-12 lg:px-16 py-12 sm:py-14">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                    Have a pool question{" "}
                    <span className="shimmer-text">we can help with?</span>
                  </h2>
                  <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                    We answer questions like these every day. Reach out for a free
                    consultation — no obligation, no sales pitch.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 *:whitespace-nowrap">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300 text-sm"
                    >
                      Get a Free Estimate
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/pool-simulator"
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm"
                    >
                      <Sparkles size={16} className="text-accent" />
                      Pool Simulator
                    </Link>
                    <a
                      href="tel:+16143845081"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
                    >
                      <Phone size={16} />
                      (614) 384-5081
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
