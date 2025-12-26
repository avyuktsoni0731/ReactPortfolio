"use client";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { useState } from "react";

const projects = [
  {
    title: "EttyDB",
    description:
      "A Remote Database Management and Integration Service that allows you to manage your website's database entries using Telegram.",
    techStack: ["MongoDB", "Telegram API", "Crypto.js", "JavaScript"],
    image: "/projects/ettyDB.png",
    link: "https://github.com/stktyagi/EttyDB",
  },
  {
    title: "TCP Client-Server Socket",
    description:
      "Implemented client-server communication using socket programming in C, handling real-time data transfer via TCP/IP protocol with low latency.",
    techStack: ["C", "TCP/IP", "Socket Programming", "Multithreading"],
    image: "/projects/socketProgramming.png",
    link: "https://github.com/avyuktsoni0731/socket-programming-c",
  },
  {
    title: "Vital",
    description:
      "A health assistance provider that provides feedback according to age, gender, allergies and health problems.",
    techStack: ["Flask", "React.js", "Next.js", "MongoDB", "Gemini API"],
    image: "/projects/vital.png",
    link: "https://github.com/avyuktsoni0731/vitalWebApp",
  },
  {
    title: "CryptoDrive",
    description:
      "Base-64 Cryptographic Encryption based cloud file-storage platform addressing data security and leak prevention.",
    techStack: ["Flask", "React.js", "Google OAuth", "Cryptography"],
    image:
      "https://github.com/avyuktsoni0731/CryptoDrive/blob/main/images/Encrypted.png?raw=true",
    link: "https://github.com/avyuktsoni0731/CryptoDrive",
  },
  {
    title: "PyMongoAuth",
    description:
      "SHA-256 Cryptographic Encryption based Authentication System with salted password storage and MongoDB backend.",
    techStack: ["Python", "MongoDB", "SHA256", "PBKDF2_HMAC"],
    image:
      "https://github.com/avyuktsoni0731/python-mongo-authentication/blob/main/static/mongoDB.png?raw=true",
    link: "https://github.com/avyuktsoni0731/python-mongo-authentication",
  },
  {
    title: "PowerOptima",
    description:
      "Energy Efficiency Calculator using prediction models to optimize Wind Turbine and Solar Cell efficiency.",
    techStack: ["Python", "Flask", "Firebase", "Numpy", "Pandas"],
    image: "https://github.com/avyuktsoni0731/efficalc/raw/main/images/1.png",
    link: "https://github.com/avyuktsoni0731/efficalc",
    badge: "Google Solution Challenge",
  },
  {
    title: "FluxFeed",
    description:
      "Dynamic web-based news aggregator using web-scraping to deliver real-time headlines from diverse sources.",
    techStack: ["Python", "Flask", "Beautiful Soup"],
    image:
      "https://github.com/avyuktsoni0731/fluxfeed/raw/main/assets/fluxfeed_landing.png",
    link: "https://github.com/avyuktsoni0731/fluxfeed",
  },
];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[activeIndex];

  return (
    <section
      id="projects"
      className="w-screen min-h-screen flex justify-center items-center py-20"
    >
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-12">
          <Reveal>
            <h2 className="font-Montserrat text-[#ccd6f6] text-3xl md:text-5xl font-bold tracking-tight text-center">
              Featured Projects
              <span className="text-[#64ffda] ml-1">.</span>
            </h2>
          </Reveal>

          {/* Project Display */}
          <div className="w-full">
            {/* Project Counter */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[#64ffda] font-mono text-4xl font-bold">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <div className="h-px w-12 bg-[#233554]" />
                <span className="text-[#8892b0] font-mono text-sm">
                  {String(projects.length).padStart(2, "0")} projects
                </span>
              </div>

              {/* Arrow Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevProject}
                  className="w-10 h-10 rounded-full border border-[#233554] flex items-center justify-center text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-300"
                  aria-label="Previous project"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextProject}
                  className="w-10 h-10 rounded-full border border-[#233554] flex items-center justify-center text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-300"
                  aria-label="Next project"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Card */}
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
              {/* Image Card */}
              <div className="md:col-span-3 group">
                {/* <Reveal> */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#112240] border border-[#233554] hover:border-[#64ffda]/30 transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-[#64ffda]/0 group-hover:bg-[#64ffda]/5 transition-colors duration-500" />
                </div>
                {/* </Reveal> */}
              </div>

              {/* Content Card */}
              <div className="md:col-span-2 flex flex-col h-full">
                <div className="bg-[#112240] bg-opacity-20 rounded-xl border border-[#233554] p-6 md:p-8 flex flex-col h-full">
                  {/* Badge */}
                  {project.badge && (
                    <Reveal>
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-[#64ffda]/10 border border-[#64ffda]/30 rounded-full text-[#64ffda] text-xs font-mono">
                          {project.badge}
                        </span>
                      </div>
                    </Reveal>
                  )}

                  {/* Title */}
                  <Reveal>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-4 font-Montserrat">
                      {project.title}
                    </h3>
                  </Reveal>

                  {/* Description */}
                  <Reveal>
                    <p className="text-[#8892b0] text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                  </Reveal>

                  {/* Tech Stack */}
                  <Reveal>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-[#0a192f] rounded text-[#64ffda] text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>

                  {/* View Project Link */}
                  <Reveal>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="group/link inline-flex items-center gap-2 text-[#ccd6f6] text-sm font-medium hover:text-[#64ffda] transition-colors"
                    >
                      <span className="border-b border-current pb-0.5">
                        View on GitHub
                      </span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>

            {/* Project Thumbnails */}
            <div className="mt-8 flex gap-3 overflow-x-auto p-2  [&::-webkit-scrollbar]:hidden">
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                    i === activeIndex
                      ? "ring-2 ring-[#64ffda] ring-offset-2 ring-offset-[#0a192f]"
                      : "opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`View ${p.title}`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
