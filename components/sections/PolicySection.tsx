"use client";
import { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import Image from 'next/image';
import Statistics from '../ui/Statistics';

const PolicySection = () => {
  const [selectedImg, setSelectedImg] = useState('');

  const policyImages = [
    { src: "/images/policy1.png", alt: "Quality Policy Page 1" },
    { src: "/images/policy1.png", alt: "Quality Policy Page 2" }
  ];

  return (
    <section className="py-8 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="inline-block border-l-4 border-primary pl-4">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
              Corporate Governance
            </span>
            <h2 className="text-5xl md:text-7xl font-black mt-2 leading-none uppercase">
              Quality<br />Policy
            </h2>
            <p className="mt-8 text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
              At Aliño Construction Corporation, our reputation is built on the quality of our work...
            </p>
          </div>

          <div className="relative flex items-center justify-center pt-12 lg:pt-0">
            {policyImages.map((img, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImg(img.src)}
                className={`relative w-2/3 cursor-pointer transition-all duration-500 hover:scale-105 hover:z-30
                  ${index === 0 ? "z-10 -rotate-3" : "z-20 -ml-32 mt-12 rotate-3"}`}
              >
                <div className="bg-white p-2 shadow-2xl rounded-sm border border-black/5">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
            
        <Statistics />
      </div>

      {selectedImg && (
        <div 
          className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImg('')}
        >
          <button className="absolute top-6 right-6 size-12 flex items-center justify-center rounded-full hover:bg-primary hover:text-black transition-all">
            <CloseIcon fontSize="large" />
          </button>
          
          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            <div className="relative w-full h-full max-h-[90vh] aspect-9/16 md:aspect-3/4">
              <Image
                src={selectedImg}
                alt="Enlarged Policy"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PolicySection;