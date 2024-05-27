import React from "react";
import GithubComponent from "@/components/svgs/socials/githubComponent";
import MailComponent from "@/components/svgs/socials/mailComponent";
import LinkedinComponent from "@/components/svgs/socials/linkedinComponent";
import BlogComponent from "@/components/svgs/socials/blogComponent";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";

const Footer = () => {
  return (
    <div className="flex justify-between w-full  inset-x-0 mx-auto  dark:border-white/[0.2] dark:bg-sky-950/[0.4] bg-sky-600/[0.4] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center space-x-4 ">
      <div className="flex items-center space-x-6">
        <Link href="https://github.com/Squasmn" target="blank">
          <GithubComponent
            className="transition duration-500 ease-in-out transform hover:scale-150"
            fill="white"
            width={24}
            height={24}
          />
        </Link>

        <Link href="https://www.linkedin.com/in/david-emmerich/" target="blank">
          <LinkedinComponent
            className="transition duration-500 ease-in-out transform hover:scale-150"
            fill="white"
            width={26}
            height={26}
          />
        </Link>
        <Link href="https://next-cms-blog-beta.vercel.app/" target="blank">
          <BlogComponent
            className="transition duration-500 ease-in-out transform hover:scale-150"
            fill="white"
            width={24}
            height={24}
          />
        </Link>
        <Link href="mailto:David_Emmerich@outlook.de">
          <MailComponent
            className="transition duration-500 ease-in-out transform hover:scale-150"
            fill="white"
            width={24}
            height={24}
          />
        </Link>
      </div>

      <div className="flex items-center text-sm">
        Made with ❤️ by David Emmerich - 2024
      </div>

      <div className="flex items-center text-3xl">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Footer;
