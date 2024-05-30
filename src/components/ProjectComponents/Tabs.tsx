"use client";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import { BackgroundGradient } from "../ui/background-gradient";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

export function TabsDemo() {
  const tabs = [
    {
      title: "T4T",
      value: "T4T",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-white bg-gradient-to-br from-zinc-900 to-gray-950 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <h2 className="text-3xl">Task for Talent / Talent for Task</h2>
            <div className="columns-2 pt-5">
              <div className="my-auto">
                <p>Final Project of the DCI Fullstack Development course</p>
                <p>
                  Freelancing platform for Talents and Task offers. An open
                  approach to the saturated gig economy, offering low entry
                  barriers for both sides. The platform is designed to serve as
                  a stepping stone for Talents to build their portfolio and gain
                  experience, while Task offers can find affordable solutions
                  for their projects. Or is it really just a black board with
                  tags for skills? 😱
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
                  target="blank"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },

    {
      title: "Face Detect",
      value: "Face Detect",
      content: (
        <BackgroundGradient>
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
                  src="/images/FaceDetect/Screenshot 2024-05-28 195407.jpg" // replace with your placeholder image URL
                  alt="FaceDetect overview image"
                  width={500} // replace with your desired width
                  height={300} // replace with your desired height
                />
                <Link
                  className="text-indigo-700 hover:text-indigo-500 hover:underline"
                  href="/projects/t4t"
                  target="blank"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "CMS Blog",
      value: "CMS Blog",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-fuchsia-500 bg-gradient-to-br from-indigo-950 to-slate-800 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <h2 className="text-3xl">Dev Blog with Sanity CMS</h2>
            <div className="grid grid-cols-2 gap-4 pt-20 h-full">
              <div className="flex items-center">
                <p>Dev Blog</p>
                <p>
                  A Development Blog as my second Project with Content
                  Management tool Sanity. A cool learning project for future use
                  of CMS&apos;s in client applications. Also handy to
                  proliferate my ego (and my knowledge as a Developer and tech
                  enthusiast)
                </p>
              </div>
              <div className="flex flex-col h-full justify-between">
                <div></div>
                <div className="flex items-center justify-center">
                  <div className=" transition duration-500 ease-in-out transform hover:scale-105">
                    <Link href="">
                      <Image
                        src="/images/Screenshot-2024-05-22-152643.jpg" // replace with your placeholder image URL
                        alt="Placeholder Image"
                        layout="responsive" // use 'responsive' layout
                        width={100} // set width relative to the parent container
                        height={100} // set height relative to the parent container
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between text-right pt-5">
                  <p>04/2023</p>
                  <Link
                    className="text-indigo-700 hover:text-indigo-500 hover:underline"
                    href="https://github.com/Squasmn/portfolio-project"
                    target="blank"
                  >
                    Github Repo
                  </Link>
                  <Link
                    className="text-indigo-700 hover:text-indigo-500 hover:underline"
                    href="https://squasmn.github.io/portfolio-project/"
                    target="blank"
                  >
                    Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Portfolio 1",
      value: "Portfolio 1",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-rose-300 bg-gradient-to-br  from-slate-900 to-indigo-950 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <h2 className="text-3xl">
              Portfolio attempts throughout my dev carreer
            </h2>
            <div className="grid grid-cols-2 gap-4 pt-5">
              <div className="flex flex-col justify-between h-full"></div>
              <div>
                <div className="transition duration-500 ease-in-out transform hover:scale-105">
                  <Link
                    href="https://squasmn.github.io/portfolio-project/"
                    target="blank"
                  >
                    <Image
                      src="/images/Screenshot-2024-05-22-120231.jpg" // replace with your placeholder image URL
                      alt="Placeholder Image"
                      width={500} // replace with your desired width
                      height={300} // replace with your desired height
                    />
                  </Link>
                </div>
                <div className="transition duration-500 ease-in-out transform hover:scale-105 ">
                  <Link
                    href="https://squasmn.github.io/portfolio-project/"
                    target="blank"
                  >
                    <Image
                      src="/images/Screenshot-2024-05-22-120940.jpg" // replace with your placeholder image URL
                      alt="Placeholder Image"
                      width={500} // replace with your desired width
                      height={300} // replace with your desired height
                    />
                  </Link>
                </div>
                <div className="flex justify-between pt-3">
                  <p>04/2023</p>
                  <Link
                    className="text-indigo-700 hover:text-indigo-500 hover:underline"
                    href="https://github.com/Squasmn/portfolio-project"
                    target="blank"
                  >
                    Github Repo
                  </Link>
                  <Link
                    className="text-indigo-700 hover:text-indigo-500 hover:underline"
                    href="https://squasmn.github.io/portfolio-project/"
                    target="blank"
                  >
                    Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Portfolio 2",
      value: "Portfolio 2",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-rose-300 bg-gradient-to-br  from-slate-900 to-indigo-950 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <h2 className="text-3xl">
              Portfolio attempts throughout my dev carreer
            </h2>
            <div className="grid grid-cols-2 gap-4 pt-5">
              <div>hi</div>
              <div className="flex flex-col justify-between h-full">
                <div></div>
                <div className="flex items-center justify-center">
                  <div className=" transition duration-500 ease-in-out transform hover:scale-105">
                    <Link
                      href="https://squasmn.github.io/portfolio-project/"
                      target="blank"
                    >
                      <Image
                        src="/images/Screenshot-2024-05-22-130454.jpg" // replace with your placeholder image URL
                        alt="Placeholder Image"
                        width={500} // replace with your desired width
                        height={300} // replace with your desired height
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>08/2023</p>
                  <Link
                    className="text-indigo-700 hover:text-indigo-500 hover:underline"
                    href="https://squasmn.github.io/portfolio-project/"
                    target="blank"
                  >
                    Github Repo
                  </Link>
                  <Link
                    className="text-indigo-700 hover:text-indigo-500 hover:underline"
                    href="https://squasmn.github.io/portfolio-project/"
                    target="blank"
                  >
                    Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },

    {
      title: "Portfolio 4",
      value: "Portfolio 4",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl font-bold text-rose-300 bg-gradient-to-br from-slate-900 to-indigo-950 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <h2 className="text-3xl m-2">
              Portfolio attempts throughout my dev carreer
            </h2>
            <CardContainer className="inter-var">
              <CardBody className="grid grid-cols-2 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl border p-5 ">
                <CardItem
                  as="p"
                  translateZ="70"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 m-auto dark:border-white/[0.2] border-black/[0.1] border rounded-xl"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  corporis. Minus sunt labore harum delectus odit architecto
                  esse vel! Vitae, esse obcaecati. Labore, tempore, recusandae
                  aperiam veritatis officia cupiditate doloremque molestiae,
                  quaerat sint sed qui magnam neque. Aperiam laboriosam nulla
                  magnam veniam maiores quisquam libero. Officiis excepturi
                  magnam nemo voluptatum! Quisquam, quidem. Quisquam, quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                </CardItem>

                <CardItem translateZ="70" className="w-full pr-4">
                  <Image
                    src="/images/FaceDetect/Screenshot 2024-05-28 194319.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <div className="flex justify-center">
              <div className="w-[80%] flex justify-between py-4">
                <p>08/2023</p>
                <Link
                  className="text-indigo-700 hover:text-indigo-500 hover:underline"
                  href="https://squasmn.github.io/portfolio-project/"
                  target="blank"
                >
                  Github Repo
                </Link>
                <Link
                  className="text-indigo-700 hover:text-indigo-500 hover:underline"
                  href="https://squasmn.github.io/portfolio-project/"
                  target="blank"
                >
                  Link
                </Link>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl w-full items-start justify-start my-40 ">
      <Tabs tabs={tabs} />
    </div>
  );
}
