// Official Lyon Financial animated banner ("Website-Banner-GIF-250K"), served
// as a self-hosted looping MP4 (547 KB) instead of the original 12.4 MB GIF.
// Clicking it opens Maxima's unique Lyon apply page (lid tracks the referral).

export const LYON_APPLY_URL =
  "https://www.lyonfinancial.net/apply/?lid=11-19241";

export function LyonFinancingBanner({ className = "" }: { className?: string }) {
  return (
    <a
      href={LYON_APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Lyon Financial — the industry's best pool loans since 1979. Terms up to 30 years, amounts up to $250K. Apply today (opens in new tab)"
      className={`group block rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/60 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ${className}`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/partners/lyon-banner-poster.jpg"
        className="w-full h-auto block"
        width={970}
        height={250}
      >
        <source src="/images/partners/lyon-banner.mp4" type="video/mp4" />
        {/* Fallback for browsers without video support */}
        <img
          src="/images/partners/lyon-banner-poster.jpg"
          alt="Lyon Financial — pool loans up to $250K, terms up to 30 years. Apply today."
          width={970}
          height={250}
        />
      </video>
    </a>
  );
}
