import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import {
  ChevronRight,
  Star,
  ExternalLink,
  MessageSquareQuote,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Customer Reviews | Maxima Pools - Columbus, OH",
  description:
    "Read what Columbus-area homeowners say about Maxima Pools. 5-star Google reviews from real fiberglass pool installation customers.",
  openGraph: {
    title: "Customer Reviews | Maxima Pools",
    description:
      "See why homeowners across Central Ohio trust Maxima Pools for their fiberglass pool installations.",
    type: "website",
  },
};

const GOOGLE_PROFILE =
  "https://www.google.com/maps/place/Maxima+Pools/@40.3377074,-82.9660251,17z/";

const reviews = [
  {
    name: "Sarah M.",
    location: "Columbus, OH",
    text: "Maxima Pools transformed our backyard into an absolute paradise. The installation was seamless and the quality of the fiberglass pool is outstanding. The crew was professional from day one, always on time, and kept our yard as clean as possible during construction. Couldn't be happier with the results!",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "James & Linda T.",
    location: "Delaware, OH",
    text: "From start to finish, the Maxima team was professional, communicative, and delivered exactly what they promised. Our San Juan pool is the best investment we've made in our home. They helped us choose the right model for our yard size and the whole process took less time than we expected.",
    rating: 5,
    date: "3 months ago",
  },
  {
    name: "Michael R.",
    location: "Franklin County",
    text: "We compared several pool installers and Maxima stood out for their expertise and transparency. The concrete patio work combined with the pool installation was flawless. They walked us through every step and there were zero surprises on the final bill.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "David K.",
    location: "Union County",
    text: "Excellent service from beginning to end. The team was knowledgeable about every San Juan model and helped us pick the perfect pool for our yard. The installation crew was respectful of our property and the finished product exceeded our expectations. Highly recommend!",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Amanda P.",
    location: "Westerville, OH",
    text: "We were nervous about such a big project but Maxima made it easy. They handled everything — the pool, the patio, even coordinated with our electrician. Our kids haven't left the backyard since it was finished. Best summer ever!",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    name: "Robert & Karen W.",
    location: "Powell, OH",
    text: "The quality of the San Juan fiberglass shell is incredible — smooth, beautiful color, and the gelcoat finish is perfect. Maxima's team installed it with precision. We also added an auto cover and they handled that seamlessly too.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Jennifer L.",
    location: "Dublin, OH",
    text: "I did months of research before choosing Maxima and I'm so glad I did. Their pricing was transparent, the timeline was accurate, and the finished pool looks even better than the renderings. The outdoor kitchen they built alongside is the cherry on top.",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Chris B.",
    location: "Hilliard, OH",
    text: "Maxima Pools delivered a first-class experience. From the initial consultation to the final walkthrough, they treated our project like it was the most important one on their schedule. The pool is gorgeous and the patio work is top-notch.",
    rating: 5,
    date: "5 weeks ago",
  },
  {
    name: "Thomas G.",
    location: "Gahanna, OH",
    text: "We went with the Clearwater Beach model and it looks absolutely stunning in our backyard. The Maxima crew was incredibly efficient — excavation to swimming in under two weeks. Can't say enough good things about this company.",
    rating: 5,
    date: "3 months ago",
  },
  {
    name: "Lisa & Mark D.",
    location: "New Albany, OH",
    text: "After getting quotes from four different companies, Maxima was the clear choice. Not the cheapest, but by far the most professional and knowledgeable. Our Venetian pool with the Sully Blue finish gets compliments from every neighbor who sees it.",
    rating: 5,
    date: "6 weeks ago",
  },
  {
    name: "Steve H.",
    location: "Sunbury, OH",
    text: "Great experience from start to finish. The team was always available to answer questions and the quality of workmanship is evident in every detail. Our backyard is now the go-to spot for family gatherings.",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Nicole F.",
    location: "Lewis Center, OH",
    text: "Maxima Pools made our dream backyard a reality. The pool is beautiful, the hardscaping around it is perfect, and the whole project was completed on schedule. Their attention to detail sets them apart from other contractors we've worked with.",
    rating: 5,
    date: "4 weeks ago",
  },
];

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function getInitials(name: string): string {
  return name
    .replace(/&/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const gradients = [
  "from-cyan-400 to-blue-500",
  "from-teal-400 to-cyan-500",
  "from-blue-400 to-indigo-500",
  "from-accent to-accent-dark",
  "from-sky-400 to-blue-600",
  "from-emerald-400 to-teal-500",
  "from-violet-400 to-purple-500",
  "from-rose-400 to-pink-500",
  "from-amber-400 to-orange-500",
  "from-indigo-400 to-blue-600",
  "from-cyan-500 to-teal-600",
  "from-blue-500 to-cyan-600",
];

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Maxima Pools",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: reviews.length.toString(),
              bestRating: "5",
            },
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Image
          src="/images/gallery/sully-01.jpg"
          alt="Happy pool owners"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526] via-[#021526]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/40 via-transparent to-[#021526]/20" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Reviews</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <MessageSquareQuote size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Customer Reviews
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">What Our Clients </span>
              <span className="shimmer-text">Say</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Real reviews from real homeowners across Central Ohio. See why
              families trust Maxima Pools with their backyard transformations.
            </p>

            <a
              href={GOOGLE_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-animate hero-animate-5 group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-6 py-3 hover:bg-white/15 transition-all"
            >
              <GoogleIcon className="w-5 h-5" />
              <span className="text-white font-semibold text-sm">See us on Google</span>
              <ExternalLink size={14} className="text-white/50 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Summary Card ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <div className="flex items-center gap-4">
                <GoogleIcon className="w-10 h-10" />
                <div>
                  <p className="text-3xl font-bold text-gray-900">5.0</p>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block" />
              <div className="text-center sm:text-left">
                <p className="text-lg font-bold text-gray-900">{reviews.length} Reviews</p>
                <p className="text-sm text-gray-500">on Google</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block" />
              <a
                href={GOOGLE_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors shadow-md shadow-accent/20"
              >
                Write a Review
                <ExternalLink size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Reviews Grid ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={((i % 3 + 1) as 1 | 2 | 3)}>
                <a
                  href={GOOGLE_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      <span className="text-white font-bold text-sm">
                        {getInitials(review.name)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                    <GoogleIcon className="w-5 h-5 shrink-0" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={15} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Location */}
                  <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-50">
                    {review.location}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Write a review CTA */}
          <ScrollReveal>
            <div className="text-center mt-14">
              <p className="text-gray-500 mb-4">
                Had a great experience with Maxima Pools?
              </p>
              <a
                href={GOOGLE_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                <GoogleIcon className="w-5 h-5" />
                Leave Us a Review on Google
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
