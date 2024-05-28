"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { Meteors } from "../ui/meteors";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

const content = [
  {
    title: "Communicate your Vision",
    description:
      "Develop and articulate a clear, compelling vision for your project. Together, we'll create a plan to achieve your goals and reach your target audience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white relative">
        <Meteors number={40} className="absolute inset-0 z-10" />
        <div className="z-20">
          <Image
            src="/assets/icons/illustrationsServices/communicate.svg"
            alt="communication illustration"
            width={300}
            height={300}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Draft Designs",
    description:
      "Visualize the final product with draft designs. Refine the design to meet your expectations with a detailed timeline and budget provided.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Meteors number={40} className="absolute inset-0 z-10" />
        <div className="z-20"></div>
      </div>
    ),
  },
  {
    title: "Technical Solution",
    description:
      "Deliver scalable, secure, and reliable technical solutions. Ensure the solution meets your expectations and is delivered on time and within budget.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Meteors number={40} className="absolute inset-0 z-10" />
        <div className="z-20">
          <Image
            src="/assets/icons/illustrationsServices/brain.svg"
            alt="brains illustration"
            width={300}
            height={300}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Deliver Success",
    description:
      "Provide optimal user experience, fast loading times, and mobile responsiveness. Optimize for search engines and social media to reach your audience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Meteors number={40} className="absolute inset-0 z-10" />
        <div className="z-20">
          <Image
            src="/assets/icons/illustrationsServices/happycoder.svg"
            alt="happycoder illustration"
            width={300}
            height={300}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Maintainance and Support",
    description:
      "Offer ongoing maintenance and support to ensure mutual satisfaction. Determine the best approach and budgeting plan for your project's success.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Meteors number={40} className="absolute inset-0 z-10" />
        <div className="z-20">Collaborative Editing</div>
      </div>
    ),
  },
  {
    title: "Custom Enquiries",
    description:
      "Discuss and create custom solutions tailored to your unique needs. Eager to learn about your plans and provide a unique approach.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Meteors number={40} className="absolute inset-0 z-10" />
        <div className="z-20">Collaborative Editing</div>
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white"></div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <BackgroundGradient>
        <StickyScroll className="scrollbar-hide" content={content} />
      </BackgroundGradient>
    </div>
  );
}
