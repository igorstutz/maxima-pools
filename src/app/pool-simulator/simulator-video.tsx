"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import content from "@/content/pages/pool-simulator.json";

// Video URL + label are editable via the CMS (pool-simulator.json → Demo video).
const VIDEO_SRC = content.videoSection.videoSrc;

export function SimulatorVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="w-full h-auto block"
        controls={playing}
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play simulator demonstration"
          className="absolute inset-0 flex items-center justify-center group bg-gradient-to-br from-[#0c4a6e]/40 via-[#0369a1]/35 to-[#06b6d4]/30 hover:from-[#0c4a6e]/30 hover:via-[#0369a1]/25 hover:to-[#06b6d4]/20 transition-all duration-500 cursor-pointer"
        >
          <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

          <div className="relative flex flex-col items-center gap-4">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
              <span className="absolute -inset-2 rounded-full border-2 border-white/40" />
              <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-[0_0_40px_rgba(6,182,212,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-all duration-500">
                <Play
                  size={32}
                  className="text-primary translate-x-0.5"
                  fill="currentColor"
                />
              </div>
            </div>
            <span className="text-white font-semibold text-sm sm:text-base bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              {content.videoSection.watchLabel}
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
