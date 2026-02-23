"use client";

import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface ProjectGalleryProps {
  images: string[];
  isOpen: boolean;
  closeGallery: () => void;
}

const ProjectGallery = ({ images, isOpen, closeGallery }: ProjectGalleryProps) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  if (!isOpen) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md md:max-w-4xl aspect-9/16 md:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900">

        <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-6 md:px-12">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary text-black flex items-center justify-center rounded">
              <span className="font-bold">A</span>
            </div>
            <div>
              <h2 className="text-white text-sm font-black tracking-widest uppercase leading-none">
                AlCon
              </h2>
              <span className="text-[10px] text-white/80 uppercase tracking-[0.2em]">
                Project Gallery
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              closeGallery();
              setCurrent(0);
            }}
            className="size-12 flex items-center justify-center rounded-full bg-white/40 hover:bg-primary hover:text-black transition-all"
          >
            <CloseIcon fontSize="large" />
          </button>
        </header>

        <div className="relative w-full h-full">
          <Image
            src={images[current]}
            alt={`Project ${current + 1}`}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 size-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-black transition-all"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 size-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-black transition-all"
          >
            ▶
          </button>

          <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full flex items-center gap-3">
            <span className="text-primary font-bold text-xs tabular-nums">
              {String(current + 1).padStart(2, "0")}
            </span>

            <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>

            <span className="text-white/50 font-bold text-xs tabular-nums">
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectGallery;