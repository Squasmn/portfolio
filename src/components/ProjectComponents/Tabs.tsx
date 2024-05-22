"use client";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "T4T",
      value: "T4T",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-white bg-gradient-to-br from-zinc-900 to-gray-950 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
          <h2 className="text-3xl">Task for Talent / Talent for Task</h2>
          <div className="columns-2 pt-5">
            <div className="my-auto">
              <p>Final Project of the DCI Fullstack Development course</p>
              <p>
                Freelancing platform for Talents and Task offers. An open
                approach to the saturated gig economy, offering low entry
                barriers for both sides. The platform is designed to serve as a
                stepping stone for Talents to build their portfolio and gain
                experience, while Task offers can find affordable solutions for
                their projects. Or is it really just a black board with tags for
                skills? 😱
              </p>
            </div>
            <div className=" text-right">
              <Image
                src="https://via.placeholder.com/300" // replace with your placeholder image URL
                alt="Placeholder Image"
                width={500} // replace with your desired width
                height={300} // replace with your desired height
              />
              <Link
                className="text-indigo-700 hover:text-indigo-500 hover:underline"
                href="/projects/t4t"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Face Detect",
      value: "Face Detect",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-orange-500 bg-gradient-to-br from-indigo-700 to-violet-900 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
          <h2 className="text-3xl">Face Detect</h2>
          <div className="columns-2 pt-5">
            <div>
              <p>First Fullstack Web Application</p>
              <p>
                Small Project displaying fundamental understanding of Frontend
                Design with React and Backend with Node.js. The application
                allows you to detect faces in images using the ClarifAI face
                detect model via an API.
              </p>
            </div>
            <div className=" text-right">
              <Image
                src="https://via.placeholder.com/300" // replace with your placeholder image URL
                alt="Placeholder Image"
                width={500} // replace with your desired width
                height={300} // replace with your desired height
              />
              <Link
                className="text-indigo-700 hover:text-indigo-500 hover:underline"
                href="/projects/t4t"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "CMS Blog",
      value: "CMS Blog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-fuchsia-500 bg-gradient-to-br from-indigo-950 to-slate-800 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
          <h2 className="text-3xl">Task for Talent / Talent for Task</h2>
          <div className="columns-2 pt-5">
            <div>
              <p>Dev Blog</p>
              <p>
                A Development Blog as my second Project with Content Management
                tool Sanity. A cool learning project for future use of
                CMS&apos;s in client applications. Also handy to proliferate my
                ego (and my knowledge as a Developer and tech enthusiast)
              </p>
            </div>
            <div className=" text-right">
              <Image
                src="https://via.placeholder.com/300" // replace with your placeholder image URL
                alt="Placeholder Image"
                width={500} // replace with your desired width
                height={300} // replace with your desired height
              />
              <Link
                className="text-indigo-700 hover:text-indigo-500 hover:underline"
                href="/projects/t4t"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Portfloio Journey",
      value: "Portfolio Journey",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-rose-300 bg-gradient-to-br  from-slate-900 to-indigo-950 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
          <h2 className="text-3xl">
            Portfolio attempts throughout my dev carreer
          </h2>
          <div className="columns-2 pt-5">
            <div>
              <div className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="https://squasmn.github.io/portfolio-project/">
                  <Image
                    src="https://via.placeholder.com/280" // replace with your placeholder image URL
                    alt="Placeholder Image"
                    width={500} // replace with your desired width
                    height={300} // replace with your desired height
                  />
                </Link>
              </div>
              <div className="flex justify-between">
                <p>04/2023</p>
                <Link
                  className="text-indigo-700 hover:text-indigo-500 hover:underline"
                  href="https://github.com/Squasmn/portfolio-project"
                >
                  Github Repo
                </Link>
                <Link
                  className="text-indigo-700 hover:text-indigo-500 hover:underline"
                  href="https://squasmn.github.io/portfolio-project/"
                >
                  Link
                </Link>
              </div>
            </div>
            <div>
              <div className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="https://squasmn.github.io/portfolio-project/">
                  <Image
                    src="https://via.placeholder.com/280" // replace with your placeholder image URL
                    alt="Placeholder Image"
                    width={500} // replace with your desired width
                    height={300} // replace with your desired height
                  />
                </Link>
              </div>
              <div className="flex justify-between">
                <p>08/2023</p>
                <Link
                  className="text-indigo-700 hover:text-indigo-500 hover:underline"
                  href="https://squasmn.github.io/portfolio-project/"
                >
                  Github Repo
                </Link>
                <Link
                  className="text-indigo-700 hover:text-indigo-500 hover:underline"
                  href="https://squasmn.github.io/portfolio-project/"
                >
                  Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Country Flags",
      value: "Country Flags",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-lime-950 bg-gradient-to-br from-purple-700 to-violet-900 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
          <h2 className="text-3xl">Country Flags</h2>
          <div className="columns-2 pt-5">
            <div>
              <p>from a challenge during my DCI course</p>
              <p>
                A small project displaying flags of countries and general info.
                First project with React and API calls. Also the first attempt
                at sorting fetched data. A fun little project to get started
                with React.
              </p>
            </div>
            <div className=" text-right">
              <Image
                src="https://via.placeholder.com/300" // replace with your placeholder image URL
                alt="Placeholder Image"
                width={500} // replace with your desired width
                height={300} // replace with your desired height
              />
              <Link
                className="text-indigo-700 hover:text-indigo-500 hover:underline"
                href="/projects/t4t"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
