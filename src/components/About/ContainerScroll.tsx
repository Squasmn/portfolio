"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";

const words = `Through the mist of uncertain paths and shifting passions, I found my true calling in the art of code — where every challenge is a canvas, and every solution a stroke of discovery.
`;

export function HeroScrollDemo() {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden rounded-md mt-8 "></div>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <Link href="/about/skills">
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  learn <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    more
                  </span>
                </h1>
              </Link>
            </>
          }
        >
          <div className="flex justify-center items-center">
            <BackgroundGradient className="rounded-[22px] p-10 bg-white dark:bg-zinc-900">
              <TextGenerateEffect
                className="flex items-center text-center"
                words={words}
              />
            </BackgroundGradient>
          </div>
        </ContainerScroll>
      </div>
    </>
  );
}
