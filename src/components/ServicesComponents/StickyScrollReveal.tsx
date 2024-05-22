"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Communnicate your Vision",
    description:
      "I will get to know you and your business, and together we will create a vision for your project. I will help you communicate your vision to your audience in a way that is clear, concise, and compelling. I will work with you to create a plan that will help you achieve your goals and reach your target audience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Draft Designs",
    description:
      "We will create a draft design of that will either help you visualize the final product, or help me to build your precise vision. I will work with you to refine the design until it meets your expectations. I will provide you with a detailed timeline and budget for the project, and keep you informed of the progress every step of the way.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Technical Solution",
    description:
      "Experienced in various technologies, I will provide you with a technical solution that meets your needs. I will work with you to ensure that the solution is scalable, secure, and reliable. I will provide you with a detailed plan for which technologies are required and their implementation. I will work with you to ensure that the solution meets your expectations and is delivered on time and on budget.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Deliver Success",
    description:
      "My Websites aim to provide optimal user experience, fast loading times, and mobile responsiveness. I will work with you to ensure that your website is optimized for search engines and social media. This will prepare your business for the future and help you to reach your target audience. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Maintainance and Support",
    description:
      "Who's better suited to maintain than the creator himself? I provide maintenance and support for our project, always striving to achieve mutual content.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Custom Enquiries",
    description:
      "I am always open to discuss custom projects and ideas. I will work with you to create a custom solution that meets your needs. All projects are unique and require a unique approach and I'm already curious to learn what you have planned!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll className="scrollbar-hide" content={content} />
    </div>
  );
}
