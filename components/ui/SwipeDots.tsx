"use client";
"use client";

import { useState } from "react";

interface SwipeDotsProps {
  total?: number;
}

export default function SwipeDots({ total = 3 }: SwipeDotsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="absolute -bottom-12.5 left-1/2 -translate-x-1/2 flex gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === index
              ? "bg-primary scale-125"
              : "bg-white/30 hover:bg-white/60"
          }`}
        />
      ))}
    </div>
  );
}