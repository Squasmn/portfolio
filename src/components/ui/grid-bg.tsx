import React from "react";

export function GridSmallBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex items-center justify-center z-10">
      {/* linear gradient for the background */}
      <div className="absolute inset-0 bg-gradient-to-r dark:from-black via-transparent[2%] dark:to-black  light:from-white  light:to-white opacity-20 pointer-events-none z-0"></div>
      {/* container for the content */}
      <div className="relative z-20 min-w-full">{children}</div>
    </div>
  );
}
