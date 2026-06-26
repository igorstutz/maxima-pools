import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  PenLine,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { getAllPosts, formatPublishedDate } from "@/lib/blog";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/" },
  title: "Blog — Pool Tips, Insights & Stories | Maxima Pools",
  description:
    "Honest advice on fiberglass pools, maintenance, design ideas, and what we've learned installing pools across Central Ohio.",
  openGraph: {
    url: "/blog/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: "Maxima Pools Blog — Pool Tips & Insights",
    description:
      "Pool ownership tips, design ideas, and the experience of building and maintaining fiberglass pools in Central Ohio.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Image
          src="/images/gallery/featured-01.webp"
          alt="Maxima Pools Blog"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 via-transparent to-[#0c4a6e]/20" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">Blog</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <PenLine size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                The Maxima Journal
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Pool Stories &amp; </span>
              <span className="shimmer-text">Real Advice</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white leading-relaxed max-w-2xl">
              Honest, useful articles on fiberglass pools, maintenance, design
              choices, and everything we&apos;ve learned installing pools across
              Central Ohio.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Empty state ── */}
      {posts.length === 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <PenLine size={32} className="text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              First articles coming soon
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We&apos;re putting together our first pieces. Check back shortly —
              or get in touch for pool advice in the meantime.
            </p>
          </div>
        </section>
      )}

      {/* ── Featured post ── */}
      {featured && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                  {/* Image */}
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                    <Image
                      src={featured.coverImage}
                      alt={featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1.5 shadow-md">
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-10 lg:p-14 flex flex-col justify-center">
                    {featured.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featured.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold text-accent bg-accent/[0.06] rounded-full px-3 py-1 border border-accent/15"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {featured.title}
                    </h2>

                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-400 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {formatPublishedDate(featured.publishedAt)}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {featured.readingTime} min read
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── More posts grid ── */}
      {rest.length > 0 && (
        <>
          <SectionDivider />
          <section className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="max-w-3xl mb-12">
                  <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-5">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                      More from the Journal
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    Latest articles
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((post, i) => (
                  <ScrollReveal key={post.slug} delay={((i % 3 + 1) as 1 | 2 | 3)}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-semibold text-accent bg-accent/[0.06] rounded-full px-2.5 py-1 border border-accent/15 uppercase tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between gap-2 text-xs text-gray-400 pt-4 border-t border-gray-100">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {formatPublishedDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={12} />
                            {post.readingTime} min
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
