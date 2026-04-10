"use client";

import { useState, useEffect, useRef } from "react";
import Image from "@/components/Image";
import { X, ZoomIn } from "lucide-react";
import { asset } from "@/lib/base-path";

interface ImageLightboxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
}

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  className = "",
  sizes,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative group cursor-zoom-in block w-full"
        type="button"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ZoomIn size={20} className="text-gray-700" />
          </div>
        </div>
      </button>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-[9999] w-screen h-screen max-w-none max-h-none m-0 p-0 bg-transparent backdrop:bg-black/90 open:flex items-center justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2.5 cursor-pointer z-10"
            onClick={() => setOpen(false)}
            aria-label="Close"
            type="button"
          >
            <X size={24} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(src)}
            alt={alt}
            className="max-w-full max-h-full object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </dialog>
    </>
  );
}
