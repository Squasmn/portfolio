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
            <div>
              <p>Final Project of the DCI Fullstack Development course</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsum culpa debitis in, quos iste?
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
          <h2 className="text-3xl">Task for Talent / Talent for Task</h2>
          <div className="columns-2 pt-5">
            <div>
              <p>Final Project of the DCI Fullstack Development course</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsum culpa debitis in, quos iste?
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
              <p>Final Project of the DCI Fullstack Development course</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsum culpa debitis in, quos iste?
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
          <h2 className="text-3xl">Task for Talent / Talent for Task</h2>
          <div className="columns-2 pt-5">
            <div>
              <p>Final Project of the DCI Fullstack Development course</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsum culpa debitis in, quos iste?
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
      title: "Country Flags",
      value: "Country Flags",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-lime-950 bg-gradient-to-br from-purple-700 to-violet-900 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
          <h2 className="text-3xl">Task for Talent / Talent for Task</h2>
          <div className="columns-2 pt-5">
            <div>
              <p>Final Project of the DCI Fullstack Development course</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsum culpa debitis in, quos iste?
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
