"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";

export function CanvasRevealEffectDemo() {
  return (
    <>
      {/* <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8"> */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-10 py-40 w-[80vw]">
          <Card
            title="Frontend"
            backTitle="Languages Technologies Frameworks Tools I've worked with"
            images={[
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",

              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",

              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",

              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
            ]}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
          <Card
            title="Backend | DB"
            backTitle="Languages Technologies Frameworks Tools I've worked with"
            images={[
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",

              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg",
            ]}
            specialImage={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            }
            className="bg-white"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
          </Card>
          <Card
            title="(Design-) Tools"
            backTitle="I found these usefull"
            images={[
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stackoverflow/stackoverflow-original-wordmark.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original-wordmark.svg",
            ]}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
          <Card
            title="Mobile"
            backTitle="just starting out with:"
            images={[
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
            ]}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
          </Card>{" "}
          <Card
            title="OS"
            backTitle="I use these"
            images={[
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
            ]}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
          <Card
            title="Learning"
            backTitle="Barely touched:"
            images={[
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
            ]}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
        </div>
      </div>
    </>
  );
}

function extractNameFromUrl(url: string): string {
  const match = url.match(/.*\/(.*?)\/.*\.svg/);
  return match ? match[1] : "";
}

const Card = ({
  title,
  backTitle,
  children,
  images = [],
  className,
  specialImage = null,
}: {
  title: string;
  backTitle: string;
  children?: React.ReactNode;
  images?: string[];
  className?: string;
  specialImage?: string | null;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-5xl group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full">
          {title}
        </div>

        <h2 className="dark:text-white text-xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 h-full ">
          {backTitle}
        </h2>
        <div className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 flex flex-wrap justify-center space-evenly h-full">
          {images.map((image, index) => {
            const name = extractNameFromUrl(image);
            return (
              <div key={index} className="m-4 relative group">
                <Image src={image} alt={name} height={50} width={50} />
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {name}
                </div>
              </div>
            );
          })}
          {specialImage && (
            <Image
              src={specialImage}
              alt="card"
              height={50}
              width={50}
              className="m-4 bg-white/70"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
