// FlipWordsHero.tsx
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { AuroraBackground } from "../ui/aurora-background";

export function FlipWordsHero() {
  const words = [
    "modern",
    "customized",
    "responsive",
    "pixel-perfect",
    "beautiful",
  ];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-center">
        <div className="border-1 border-gray-800 border-opacity-25 dark:border-slate-600 dark:border-opacity-50 bg-transparent bg-opacity-25 backdrop-blur-md shadow-sm dark:shadow-slate-800 hover:shadow-md hover:border-3 transition-all duration-500 ease-in-out">
          <AuroraBackground className="h-fulll w-full showRadialGradient={true}">
            <div className="text-neutral-900 dark:text-neutral-100">
              find solutions for
              <div>
                <FlipWords words={words} />
              </div>
              websites with David Emmerich
            </div>
          </AuroraBackground>
        </div>
      </div>
    </div>
  );
}
