import Image from "next/image";
import Reveal from "./Reveal";

export function Experiences() {
  return (
    <section
      id="experiences"
      className="flex text-semiWhite justify-center items-center w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <Reveal>
              <h2 className="font-Montserrat text-[#ccd6f6] text-3xl font-bold tracking-tighter sm:text-5xl">
                Experience
                <span className="text-webGreen fadeAnimate mx-1">.</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-[900px] font-Mono md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out my work history and the communities I&apos;ve been a
                part of
                <span className="text-webGreen">!</span>
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mx-auto font-Montserrat flex flex-col gap-6 py-12 px-4 md:px-32 sm:flex-col md:flex-row lg:flex-row">
          <div className="flex-grow w-full flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 dark:border-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <Reveal>
                <div className="inline-block rounded-lg bg-gray-100 py-1 text-sm dark:bg-gray-800">
                  Nov 2024 - Present
                </div>
              </Reveal>
              <span>
                <a
                  href="https://gdg.community.dev/gdg-on-campus-zakir-husain-college-of-engineering-and-technology-aligarh-india/"
                  target="_blank"
                >
                  <Image
                    src={"/gdgcLogo.png"}
                    alt="gdgc-logo"
                    width={30}
                    height={30}
                  ></Image>
                </a>
              </span>
            </div>
            <Reveal>
              <h3 className="text-xl font-bold text-[#ccd6f6]">
                Web & Tech Lead
              </h3>
            </Reveal>
            <Reveal>
              <p className="text-gray-500 dark:text-gray-400 font-Mono">
                Google Developer Groups on Campus, ZHCET
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Leading the technical team to build projects together, helping
                everyone work on their skills while promoting a collaborative
                and supportive culture at the same time.
              </p>
            </Reveal>
          </div>

          <div className="flex-grow w-full flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 dark:border-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <Reveal>
                <div className="inline-block rounded-lg bg-gray-100 py-1 text-sm dark:bg-gray-800">
                  Aug 2024 - Present
                </div>
              </Reveal>
              <span>
                <a href="https://amuroboclub.tech/" target="_blank">
                  <BriefcaseIcon />
                </a>
              </span>
            </div>
            <Reveal>
              <h3 className="text-xl font-bold text-[#ccd6f6]">
                Head of Web Operations
              </h3>
            </Reveal>
            <Reveal>
              <p className="text-gray-500 dark:text-gray-400 font-Mono">
                IEEE Student Branch, AMU
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Incharge of handling the web operations of the club, managing
                the website and the technical team.
              </p>
            </Reveal>
          </div>
          <div className="flex-grow w-full flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 dark:border-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <Reveal>
                <div className="inline-block rounded-lg bg-gray-100 py-1 text-sm dark:bg-gray-800">
                  Jul 2024 - Present
                </div>
              </Reveal>
              <span>
                <a
                  href="https://gdsc.community.dev/zakir-husain-college-of-engineering-and-technology-aligarh-india/"
                  target="_blank"
                >
                  <BriefcaseIcon />
                </a>
              </span>
            </div>
            <Reveal>
              <h3 className="text-xl font-bold text-[#ccd6f6]">Web Master</h3>
            </Reveal>
            <Reveal>
              <p className="text-gray-500 dark:text-gray-400 font-Mono">
                IEEE Computer Societ - ZHCET, AMU
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 font-Mono">
                Managing the website of the society, and the technical team.
              </p>
            </Reveal>
          </div>
          <div className="flex-grow w-full flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 dark:border-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <Reveal>
                <div className="inline-block rounded-lg bg-gray-100 py-1 text-sm dark:bg-gray-800">
                  May 2024 - Present
                </div>
              </Reveal>
              <span>
                <a
                  href="https://gdsc.community.dev/zakir-husain-college-of-engineering-and-technology-aligarh-india/"
                  target="_blank"
                >
                  <BriefcaseIcon />
                </a>
              </span>
            </div>
            <Reveal>
              <h3 className="text-xl font-bold text-[#ccd6f6]">
                Web Developer
              </h3>
            </Reveal>
            <Reveal>
              <p className="text-gray-500 dark:text-gray-400 font-Mono">
                AMURoboclub
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 font-Mono">
                Developing and maintaining the website of the club, and working
                on the technical projects (both hardware and software).
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      color="#64ffda"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
