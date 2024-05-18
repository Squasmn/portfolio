import { GridSmallBackground } from "@/components/ui/grid-bg";

import React from "react";

export default function Home() {
  return (
    <GridSmallBackground>
      <main>
        <div className="w-full"></div>
        <div className="mt-16" style={{ height: "2000px" }}>
          <p>
            This is a long content area for testing scroll behavior. This part
            of the text is meant to test the bars opacity
          </p>
        </div>
      </main>
    </GridSmallBackground>
  );
}
