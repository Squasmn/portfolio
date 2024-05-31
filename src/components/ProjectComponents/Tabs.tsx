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
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-white bg-gradient-to-br  from-indigo-900 to-rose-900 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <div className="w-full h-full flex flex-wrap justify-between">
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full p-1">
                  <CardItem translateZ="50" className="text-xl font-bold pb-5">
                    T4T Task for Talent / Talent for Task
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-sm max-w-sm mt-2 pb-5 px-5"
                  >
                    Final Project of the DCI Fullstack Development course
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/images/FaceDetect/Screenshot 2024-05-28 194319.jpg"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-10 flex justify-between">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal "
                    >
                      Try now →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full flex flex-col justify-start p-1">
                  <CardItem translateZ="50" className="text-xl font-bold ">
                    Teamwork with Halid Kutsal
                  </CardItem>

                  <div className="flex-grow flex items-center">
                    <CardItem
                      as="p"
                      translateZ="60"
                      className=" text-sm max-w-sm mt-2 px-5"
                    >
                      Freelancing platform for Talents and Task offers. An open
                      approach to the saturated gig economy, offering low entry
                      barriers for both sides. The platform is designed to serve
                      as a stepping stone for Talents to build their portfolio
                      and gain experience, while Task offers can find affordable
                      solutions for their projects. Or is it really just a black
                      board with tags for skills? 😱
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
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
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-orange-500 bg-gradient-to-br from-indigo-700 to-violet-900 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <div className="w-full h-full flex justify-between">
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full p-1  text-orange-500">
                  <CardItem translateZ="50" className="text-xl font-bold pb-5">
                    Face Detect
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-sm max-w-sm mt-2 px-5"
                  >
                    Final Project of ZTM Zero to Mastery Full Stack course
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/images/FaceDetect/Screenshot 2024-05-31 113703.jpg"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-10 flex justify-between">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal "
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal "
                    >
                      Try now →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full flex flex-col justify-start p-1  text-orange-500">
                  <CardItem translateZ="50" className="text-xl font-bold">
                    My first Fullstack Web Application
                  </CardItem>

                  <div className="flex-grow flex items-center">
                    <CardItem
                      as="p"
                      translateZ="60"
                      className=" text-sm max-w-sm mt-2 px-5"
                    >
                      Small Project displaying fundamental understanding of
                      Frontend Design with React and Backend with Node.js. The
                      application allows you to detect faces in images using the
                      ClarifAI face detect model via an API.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
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
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-fuchsia-500 bg-gradient-to-br from-sky-800 to-indigo-950 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <div className="w-full h-full flex justify-between">
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full p-1  text-fuchsia-400">
                  <CardItem translateZ="50" className="text-xl font-bold pb-5">
                    DevBlog
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-sm max-w-sm mt-2 px-5"
                  >
                    Blog with managed content
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/images/Screenshot 2024-05-31 121453.jpg"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-10 flex justify-between">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal "
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal "
                    >
                      Try now →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full flex flex-col justify-start p-1  text-fuchsia-400">
                  <CardItem translateZ="50" className="text-xl font-bold">
                    My first Fullstack Web Application
                  </CardItem>

                  <div className="flex-grow flex items-center">
                    <CardItem
                      as="p"
                      translateZ="60"
                      className=" text-sm max-w-sm mt-2 px-5"
                    >
                      A Development Blog as my second Project with Content
                      Management tool Sanity. A cool learning project for future
                      use of CMS&apos;s in client applications. Also handy to
                      proliferate my ego (and my knowledge as a Developer and
                      tech enthusiast)
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Portfolio 08/23",
      value: "Portfolio 08/23",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-rose-300 bg-gradient-to-br  from-rose-800 to-indigo-950 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <div className="w-full h-full flex justify-between">
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full p-1  text-blue-300">
                  <CardItem translateZ="50" className="text-xl font-bold pb-5">
                    Portfolio 08/23
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-sm max-w-sm mt-2 px-5"
                  >
                    React Portfolio
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/images/Screenshot-2024-05-22-130454.jpg"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-10 flex justify-between">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://github.com/Squasmn/portfolio-project"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal hover:underline"
                    >
                      Github Repo →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://squasmn.github.io/portfolio-project/"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal hover:underline"
                    >
                      Try now →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full flex flex-col justify-start p-1  text-blue-300">
                  <CardItem translateZ="50" className="text-xl font-bold">
                    Adding JS and React
                  </CardItem>

                  <div className="flex-grow flex items-center">
                    <CardItem
                      as="p"
                      translateZ="60"
                      className=" text-sm max-w-sm mt-2 px-5"
                    >
                      A new Portfolio concluding the Jsvascript and React
                      modules of the DCI course. First interactive Website with
                      a few animations and a more modern design. Grasssping
                      these many new concepts was a challenge and finishing a
                      stretch, but I used to be content with the outcome.
                      Certainly theres weaknesses still present, but I decided
                      to kkeep this Portolio untouched as well to further be
                      able to display the milestones of my Dev journey. Live on
                      Github Pages for you to explore.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Portfolio 04/23",
      value: "Portfolio 04/23",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  font-bold text-rose-300 bg-gradient-to-br  from-teal-700  to-cyan-800 shadow-2xl transition-shadow duration-200 ease-in-out dark:hover:shadow-dark">
            <div className="w-full h-full flex justify-between">
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full p-1  text-fuchsia-400">
                  <CardItem translateZ="50" className="text-xl font-bold pb-5">
                    Portfolio 04/23
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-sm max-w-sm mt-2 px-5"
                  >
                    basic HTML CSS project during the early days of the DCI
                    course
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/images/Screenshot-2024-05-22-120231.jpg"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-10 flex justify-between">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://github.com/Squasmn/portfolio-project"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal hover:underline"
                    >
                      Github Repo →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://squasmn.github.io/portfolio-project/"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal hover:underline"
                    >
                      Try now →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-black/[0.2] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full w-full flex flex-col justify-start p-1  text-fuchsia-400">
                  <CardItem translateZ="50" className="text-xl font-bold">
                    fundamental skills
                  </CardItem>

                  <div className="flex-grow flex items-center">
                    <CardItem
                      as="p"
                      translateZ="60"
                      className=" text-sm max-w-sm mt-2 px-5 "
                    >
                      The project was created during the early days of my DCI
                      journey. Live on Github Pages for you to explore the
                      included early Projects as well. For instance my first
                      ever Website and a group project. These old Portfolio
                      attempts are included in my projects to give you an idea
                      of my progress as a Web Developer. I never updated them
                      resulting in a genuine impression of where I started and
                      how i developed (pun intended)
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
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
