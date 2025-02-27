import Link from "next/link";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import Reveal from "./Reveal";

export function Projects() {
  return (
    <section
      id="projects"
      className="w-screen h-auto flex justify-center items-start"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
          <Reveal>
            <h2 className="font-Montserrat text-[#ccd6f6] text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl">
              My Projects
              <span className="text-webGreen fadeAnimate mx-1">.</span>
            </h2>
          </Reveal>
          <Carousel className="w-full max-w-6xl pt-8 font-Mono">
            <CarouselContent>
              <CarouselItem>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <Image
                    alt="Vital"
                    className="aspect-video rounded-lg object-cover"
                    height={400}
                    src="/projects/ettyDB.png"
                    width={600}
                  />
                  <div className="flex text-semiWhite flex-col gap-2">
                    <Reveal>
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        EttyDB
                      </h3>
                    </Reveal>
                    <Reveal>
                      <p className="text-gray-500 dark:text-gray-400">
                        EttyDB is a Remote Database Management and Integration
                        Service that allows you to manage your website&apos;s
                        database entries using Telegram.
                      </p>
                    </Reveal>
                    <div>
                      <Reveal>
                        <h3 className="text-md font-semibold">Tech Stack:</h3>
                      </Reveal>
                      <Reveal>
                        <p className="text-gray-500 text-sm dark:text-gray-400">
                          MongoDB, Telegram API, Crypto.js, JavaScript, HTML,
                          CSS
                        </p>
                      </Reveal>
                    </div>
                    <div className="mt-auto">
                      <Link
                        className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="https://github.com/stktyagi/EttyDB"
                        target="_blank"
                      >
                        <ArrowRightIcon />
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <Image
                    alt="Vital"
                    className="aspect-video rounded-lg object-cover"
                    height={400}
                    src="/projects/socketProgramming.png"
                    width={600}
                  />
                  <div className="flex text-semiWhite flex-col gap-2">
                    <Reveal>
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        TCP Client-Server Socket
                      </h3>
                    </Reveal>
                    <Reveal>
                      <p className="text-gray-500 dark:text-gray-400">
                        Implemented client-server communication using socket
                        programming in C, that handles real-time data transfer
                        via TCP/IP protocol with low latency and high
                        throughput.
                      </p>
                    </Reveal>
                    <div>
                      <Reveal>
                        <h3 className="text-md font-semibold">Tech Stack:</h3>
                      </Reveal>
                      <Reveal>
                        <p className="text-gray-500 text-sm dark:text-gray-400">
                          C, TCP/IP, Socket Programming, Multithreading, GNU GCC
                        </p>
                      </Reveal>
                    </div>
                    <div className="mt-auto">
                      <Link
                        className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="https://github.com/avyuktsoni0731/socket-programming-c"
                        target="_blank"
                      >
                        <ArrowRightIcon />
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <Image
                    alt="Vital"
                    className="aspect-video rounded-lg object-cover"
                    height={400}
                    src="/projects/vital.png"
                    width={600}
                  />
                  <div className="flex text-semiWhite flex-col gap-2">
                    <Reveal>
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        Vital
                      </h3>
                    </Reveal>
                    <Reveal>
                      <p className="text-gray-500 dark:text-gray-400">
                        A health assiance provider that provides feedback
                        according to age, gender, allergies and health problems.
                      </p>
                    </Reveal>
                    <div>
                      <Reveal>
                        <h3 className="text-md font-semibold">Tech Stack:</h3>
                      </Reveal>
                      <Reveal>
                        <p className="text-gray-500 text-sm dark:text-gray-400">
                          Flask, React.js, Next.js, MongoDB, Gemini API, Google
                          Maps API, Google OAuth 2.0
                        </p>
                      </Reveal>
                    </div>
                    <div className="mt-auto">
                      <Link
                        className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="https://github.com/avyuktsoni0731/vitalWebApp"
                        target="_blank"
                      >
                        <ArrowRightIcon />
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <Image
                    alt="CryptoDrive"
                    className="aspect-video rounded-lg object-cover"
                    height={400}
                    src="https://github.com/avyuktsoni0731/CryptoDrive/blob/main/images/Encrypted.png?raw=true"
                    width={600}
                  />
                  <div className="flex text-semiWhite flex-col gap-2">
                    <Reveal>
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        CryptoDrive
                      </h3>
                    </Reveal>
                    <Reveal>
                      <p className="text-gray-500 dark:text-gray-400">
                        An application Base-64 Cryptographic Encryption based
                        cloud file-storage web platform. This project addresses
                        the issue of insecurity or data-leak of files uploaded
                        on cloud platforms.
                      </p>
                    </Reveal>
                    <div>
                      <Reveal>
                        <h3 className="text-md font-semibold">Tech Stack:</h3>
                      </Reveal>
                      <Reveal>
                        <p className="text-gray-500 text-sm dark:text-gray-400">
                          Flask, React.js, Google OAuth 2.0, Google Drive v3
                          API, Cryptography Fernet
                        </p>
                      </Reveal>
                    </div>
                    <div className="mt-auto">
                      <Link
                        className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="https://github.com/avyuktsoni0731/CryptoDrive"
                        target="_blank"
                      >
                        <ArrowRightIcon />
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <Image
                    alt="PyMongoAuth"
                    className="aspect-video rounded-lg object-cover"
                    height={400}
                    src="https://github.com/avyuktsoni0731/python-mongo-authentication/blob/main/static/mongoDB.png?raw=true"
                    width={600}
                  />
                  <div className="flex text-semiWhite flex-col gap-2">
                    <Reveal>
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        PyMongoAuth
                      </h3>
                    </Reveal>
                    <Reveal>
                      <p className="text-gray-500 dark:text-gray-400">
                        Developed a SHA-256 (PBKDF2 HMAC) Cryptographic
                        Encryption based Authentication System, designed to
                        provide a secure and reliable method for storing and
                        verifying user passwords using cryptographic techniques.
                        Using hashing algorithms, salted password storage, and
                        MongoDB as the database backend to ensure data integrity
                        and confidentiality.
                      </p>
                    </Reveal>
                    <div>
                      <Reveal>
                        <h3 className="text-md font-semibold">Tech Stack:</h3>
                      </Reveal>
                      <Reveal>
                        <p className="text-gray-500 text-sm dark:text-gray-400">
                          Python, MongoDB, SHA256{"(PKDF2_HMAC)"}
                        </p>
                      </Reveal>
                    </div>
                    <div className="mt-auto">
                      <Link
                        className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="https://github.com/avyuktsoni0731/python-mongo-authentication"
                        target="_blank"
                      >
                        <ArrowRightIcon />
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <Image
                    alt="PowerOptima"
                    className="aspect-video rounded-lg object-cover"
                    height={400}
                    src="https://github.com/avyuktsoni0731/efficalc/raw/main/images/1.png"
                    width={600}
                  />
                  <div className="flex text-semiWhite flex-col gap-2">
                    <Reveal>
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        PowerOptima {"(Google Solution Challenge)"}
                      </h3>
                    </Reveal>
                    <Reveal>
                      <p className="text-gray-500 dark:text-gray-400">
                        Energy Efficiency Calculator to optimize energy
                        consumption in their devices, leading to wasted
                        resources, higher costs, and environmental impact. Using
                        prediction models, the efficiency of Wind Turbine and
                        Solar Cell are calculated according to metrics entered
                        by the user.
                      </p>
                    </Reveal>
                    <div>
                      <Reveal>
                        <h3 className="text-md font-semibold">Tech Stack:</h3>
                      </Reveal>
                      <Reveal>
                        <p className="text-gray-500 text-sm dark:text-gray-400">
                          Python, Flask, Firebase, Numpy, Pandas
                        </p>
                      </Reveal>
                    </div>
                    <div className="mt-auto">
                      <Link
                        className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="https://github.com/avyuktsoni0731/efficalc"
                        target="_blank"
                      >
                        <ArrowRightIcon />
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <Image
                    alt="FluxFeed"
                    className="aspect-video rounded-lg object-cover"
                    height={400}
                    src="https://github.com/avyuktsoni0731/fluxfeed/raw/main/assets/fluxfeed_landing.png"
                    width={600}
                  />
                  <div className="flex text-semiWhite flex-col gap-2">
                    <Reveal>
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        FluxFeed
                      </h3>
                    </Reveal>
                    <Reveal>
                      <p className="text-gray-500 dark:text-gray-400">
                        A dynamic web-based news aggregator that uses
                        web-scraping empowering users to stay informed with the
                        latest headlines, from diverse news sources, which keeps
                        on updating every few seconds as the news on the source
                        website gets updated.
                      </p>
                    </Reveal>
                    <div>
                      <Reveal>
                        <h3 className="text-md font-semibold">Tech Stack:</h3>
                      </Reveal>
                      <Reveal>
                        <p className="text-gray-500 text-sm dark:text-gray-400">
                          Python, Flask, Beautiful Soup {"(Web Scraping)"}
                        </p>
                      </Reveal>
                    </div>
                    <div className="mt-auto">
                      <Link
                        className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="https://github.com/avyuktsoni0731/vitalWebApp"
                        target="_blank"
                      >
                        <ArrowRightIcon />
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/4 md:left-4 md:top-1/2 -translate-y-1/2">
              <ChevronLeftIcon />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/4 md:right-4 md:top-1/2 -translate-y-1/2">
              <ChevronRightIcon />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
