import { HeroScrollDemo } from "@/components/About/ContainerScroll";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";
import Link from "next/link";
import { SparklesPreview } from "@/components/About/SparklesBeam";
const AboutPage = () => {
  return (
    <div>
      <TracingBeam>
        <HeroScrollDemo />

        <div className="flex flex-col items-center h-full w-full mt-4">
          <h2 className="text-3xl">About Me</h2>
          <div className="text-lg pt-4 prose mb-10">
            <p className="mb-4">
              Born in 1993 I consider myself a true Millenial. In childhood days
              much of my time was spent either on the basketball court or
              immersed in PC and console gaming. I often found myself unsure of
              my path, intersted in everything nd nothing alike, leading to a
              somewhat aimless young adult life.
            </p>

            <p className="mb-4">
              I began to find direction by working in an antiquity shop. This
              job led me to become an office clerk and numismatics expert, where
              I rediscovered a love for learning and building expertise.
              However, I struggled to find true satisfaction in this field.
            </p>

            <p className="mb-4">
              It wasn&apos;t until I found coding that everything clicked. I
              fell in love with it and dedicated myself to improving my skills
              every day. This newfound passion led me to start freelancing,
              where I have been able to leverage my talents and continuously
              grow.
            </p>

            <p>
              I&apos;ve learned the importance of adaptability and perseverance.
              Each step of the way has shaped me into the person I am today—a
              dedicated, lifelong learner who thrives on new challenges and
              opportunities.
            </p>
          </div>
        </div>
      </TracingBeam>
      <SparklesPreview />
      <div className="h-64 bg-black"></div>
    </div>
  );
};

export default AboutPage;
