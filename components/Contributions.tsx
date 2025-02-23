import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  ExternalLinkIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Contribution {
  title: string;
  organization: string;
  date: string;
  description: string;
  images: string[];
  linkedInUrl: string;
}

const contributions: Contribution[] = [
  {
    title: "Organising Team Member",
    organization: "AMURoboclub - Vercera 4.0",
    date: "February 2025",
    description:
      "Organized Treasure Hunt, Software Hackathon, and Coding Contest at Vercera 4.0. Developed the event dashboard with Next.js & PocketBase, handling payments, registrations, and team management. Also contributed to sponsorships and event coverage.",
    images: [
      "/IMG_6136.jpg",
      "/aboutPic.jpg",
      "/Vercera4.0/treasureHuntClue.JPG",
      "/Vercera4.0/chess.jpg",
      "/Vercera4.0/waterBottle.jpg",
      "/Vercera4.0/BGMI.jpg",
      "/Vercera4.0/tekken8.JPG",
      "/Vercera4.0/lineFollower.jpg",
      "/Vercera4.0/treasureHunt.jpg",
      "/Vercera4.0/halfTeamPic.jpg",
      "/Vercera4.0/treasureHuntTeamPic.jpg",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
  },
  {
    title: "Technical Organising Team Member",
    organization: "AUV ZHCET - AMUROVc3.0",
    date: "November 2024",
    description:
      "Incharge of setting up and managing network meshes and access points with camera control and streaming.",
    images: [
      "/ROVc3.0/teamNirma.JPG",
      "/ROVc3.0/teamUqaab.JPG",
      "/ROVc3.0/teamDTU.JPG",
      "/ROVc3.0/soloBehind.JPG",
      "/ROVc3.0/teamPic.JPG",
      "/ROVc3.0/technicalTeamPic.JPG",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
  },
  {
    title: "Event Coordinator",
    organization: "IEEE Computer Society ZHCET - Code-o-Fiesta 3.0",
    date: "October 2024",
    description:
      "Conceptualized the coding contest, along with a proper planning and moderation of the event, to framing the questions.",
    images: [
      "/Code-o-Fiesta3.0/frontLeaderboard.JPG",
      "/Code-o-Fiesta3.0/participantsFront.JPG",
      "/Code-o-Fiesta3.0/participantsBack.JPG",
      "/Code-o-Fiesta3.0/ICSTeamPic.JPG",
      "/Code-o-Fiesta3.0/teamPic.JPG",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
  },
  {
    title: "Speaker",
    organization:
      "CodeChef ZHCET x Polytechnic Roboclub - Unlocking the Power of Web: Workshop",
    date: "Octber 2024",
    description:
      "Conducted a hands-on Web Development Workshop covering the basics of HTML CSS and JS fundamentals and API integration, with a live project for practical learning.",
    images: [
      "/UnlockingThePowerOfWeb/soloPic.jpg",
      "/UnlockingThePowerOfWeb/audience.JPG",
      "/UnlockingThePowerOfWeb/console.JPG",
      "/UnlockingThePowerOfWeb/codechefTeamPic.JPG",
      "/UnlockingThePowerOfWeb/codechefXPolytechnicTeamPic.JPG",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
  },
  {
    title: "Organizer",
    organization: "AMURoboclub - NSD Software Hackathon",
    date: "August 2024",
    description:
      "Conceptualized the event covering everything from judging criteria, and evaluation of 1st round, till the announcement of winners.",
    images: [
      "/NSD/presentation.JPG",
      "/NSD/teamDiscussion.JPG",
      "/NSD/audience.JPG",
      "/NSD/team.JPG",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
  },
  {
    title: "Speaker",
    organization: "IEEE Computer Society ZHCET - LaTeX Essentials Workshop",
    date: "November 2023",
    description:
      "Spoke on Day 2, guiding attendees on Overleaf, tables, figures, and research paper formatting with a hands-on session for 50+ participants.",
    images: ["/LaTeXEssentials/latexSS.png"],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
  },
];

export function Contributions() {
  return (
    <section
      id="contributions"
      className="w-screen h-auto flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#ccd6f6] tracking-tighter sm:text-4xl md:text-5xl font-Montserrat">
              Contributions & Events
              <span className="text-webGreen fadeAnimate mx-1">.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-[700px] text-semiWhite font-Mono md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
              Showcasing my involvement and contributions to various events and
              initiatives.
            </p>
          </Reveal>
          <div className="grid gap-6 mt-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {contributions.map((contribution, index) => (
              <Reveal key={index}>
                <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 overflow-hidden flex flex-col h-[550px]">
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <Carousel className="w-full relative">
                      <CarouselContent>
                        {contribution.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="p-1">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${contribution.title} image ${
                                  imgIndex + 1
                                }`}
                                width={600}
                                height={400}
                                className="object-cover w-full h-48 rounded-md"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2">
                        <ChevronLeft className="h-6 w-6 text-white" />
                      </CarouselPrevious>
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2">
                        <ChevronRight className="h-6 w-6 text-white" />
                      </CarouselNext>
                    </Carousel>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-[#ccd6f6] mb-2">
                        {contribution.title}
                      </h3>
                      <p className="text-webGreen font-Mono mb-2">
                        {contribution.organization}
                      </p>
                      <div className="flex items-center text-semiWhite mb-2">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm">{contribution.date}</span>
                      </div>
                      <p className="text-semiWhite font-Mono text-sm mb-4 line-clamp-6 flex-grow">
                        {contribution.description}
                      </p>
                      <div className="mt-auto flex-shrink-0">
                        <Link
                          href={contribution.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" className="w-full">
                            <ExternalLinkIcon className="w-4 h-4 mr-2" />
                            See more on LinkedIn
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
