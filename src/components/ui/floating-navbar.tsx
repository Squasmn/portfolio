"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link"; // Import Link from Next.js

import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
  dropdownMenu,
}: {
  navItems: {
    name?: string;
    link?: string;
    icon?: JSX.Element;
    component?: JSX.Element;
  }[];
  className?: string;
  dropdownMenu?: JSX.Element;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex justify-between w-full fixed top-0 inset-x-0 mx-auto  dark:border-white/[0.2] dark:bg-sky-950/[0.4] bg-sky-600/[0.4] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center space-x-4 ",
          className
        )}
      >
        {dropdownMenu}
        <div className="flex justify-center space-x-4">
          {navItems.map((navItem: any, idx: number) =>
            navItem.component ? (
              navItem.component
            ) : (
              <Link key={`link=${idx}`} href={navItem.link} passHref>
                <div
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">
                    {navItem.name}
                  </span>
                </div>
              </Link>
            )
          )}
        </div>{" "}
        <div className="icon">
          <Image
            src="/images/Icon.jpg"
            alt="icon image"
            width={64}
            height={64}
            className="p-1"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
