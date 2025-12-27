"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { getExperiences, Experience } from "@/lib/firebase";

// Fallback data when Firebase is not configured
const fallbackExperiences: Experience[] = [
  {
    title: "Web & Tech Lead",
    company: "Google Developer Groups on Campus, ZHCET",
    location: "Aligarh, India",
    date: "Nov 2024 - Present",
    description:
      "Leading the technical team to build projects together, helping everyone work on their skills while promoting a collaborative and supportive culture at the same time.",
    type: "work",
    icon: "/gdgcLogo.png",
    order: 0,
  },
  {
    title: "Head of Web Operations",
    company: "IEEE Student Branch, AMU",
    location: "Aligarh, India",
    date: "Aug 2024 - Present",
    description:
      "Incharge of handling the web operations of the club, managing the website and the technical team.",
    type: "work",
    order: 1,
  },
  {
    title: "Web Master",
    company: "IEEE Computer Society - ZHCET, AMU",
    location: "Aligarh, India",
    date: "Jul 2024 - Present",
    description: "Managing the website of the society, and the technical team.",
    type: "work",
    order: 2,
  },
  {
    title: "Web Developer",
    company: "AMURoboclub",
    location: "Aligarh, India",
    date: "May 2024 - Present",
    description:
      "Developing and maintaining the website of the club, and working on the technical projects (both hardware and software).",
    type: "work",
    order: 3,
  },
];

export function Experiences() {
  const [experiences, setExperiences] =
    useState<Experience[]>(fallbackExperiences);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const data = await getExperiences();
        if (data && data.length > 0) {
          setExperiences(data);
        }
      } catch (error) {
        console.log("Using fallback experiences data");
      } finally {
        setLoading(false);
      }
    }
    fetchExperiences();
  }, []);

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
        <div className="mx-auto font-Montserrat flex flex-col gap-6 py-12 px-4 md:px-32 sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center">
          {experiences.map((exp, index) => (
            <div
              key={exp.id || index}
              className="flex-grow w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
            >
              <div className="mb-4 flex items-center justify-between">
                <Reveal>
                  <div className="inline-block rounded-lg bg-gray-100 py-1 text-sm dark:bg-gray-800">
                    {exp.date}
                  </div>
                </Reveal>
                <span>
                  {exp.icon ? (
                    <Image
                      src={exp.icon}
                      alt={`${exp.company} logo`}
                      width={30}
                      height={30}
                    />
                  ) : (
                    <BriefcaseIcon />
                  )}
                </span>
              </div>
              <Reveal>
                <h3 className="text-xl font-bold text-[#ccd6f6]">
                  {exp.title}
                </h3>
              </Reveal>
              <Reveal>
                <p className="text-gray-500 dark:text-gray-400 font-Mono">
                  {exp.company}
                </p>
              </Reveal>
              <Reveal>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  {exp.description}
                </p>
              </Reveal>
            </div>
          ))}
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
