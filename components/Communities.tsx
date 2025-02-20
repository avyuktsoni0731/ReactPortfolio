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
    title: "Technical Organising Team Member",
    organization: "AMUROVc3.0",
    date: "November 2024",
    description:
      "Incharge of setting up and managing network meshes and access points with camera control and streaming.",
    images: ["/profilePic.jpg", "/profilePic.jpg", "/profilePic.jpg"],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
  },
  {
    title: "Workshop Presenter",
    organization: "Google Developer Student Clubs",
    date: "November 2023",
    description:
      "Conducted a hands-on workshop on 'Introduction to React' for 50+ students.",
    images: ["/profilePic.jpg"],
    linkedInUrl:
      "https://www.linkedin.com/in/yourusername/detail/experience/0987654321/",
  },
  // Add more contributions as needed
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
              <span className="text-webGreen fadeAnimate">.</span>
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
                <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 overflow-hidden">
                  <CardContent className="p-0">
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
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">
                        {contribution.title}
                      </h3>
                      <p className="text-webGreen font-Mono mb-2">
                        {contribution.organization}
                      </p>
                      <div className="flex items-center text-semiWhite mb-2">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm">{contribution.date}</span>
                      </div>
                      <p className="text-semiWhite font-Mono text-sm mb-4">
                        {contribution.description}
                      </p>
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
