"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden rounded-md mt-8 ">
      <div className="w-full h-60 relative">
        {/* Gradients */}
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full blur-sm" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={500}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(750px_400px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
