"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Projects;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://github.com/avyuktsoni0731/vitalWebApp/raw/main/static/Landing.png",
    title: "Vital",
    id: 1,
  },
  {
    url: "https://github.com/avyuktsoni0731/CryptoDrive/blob/main/images/Encrypted.png?raw=true",
    title: "CryptoDrive",
    id: 2,
  },
  {
    url: "https://github.com/avyuktsoni0731/python-mongo-authentication/blob/main/static/mongoDB.png?raw=true",
    title: "PyMongoAuth",
    id: 3,
  },
  {
    url: "https://github.com/avyuktsoni0731/efficalc/raw/main/images/1.png",
    title: "PowerOptima",
    id: 4,
  },
  {
    url: "https://github.com/avyuktsoni0731/fluxfeed/raw/main/assets/fluxfeed_landing.png",
    title: "FluxFeed",
    id: 5,
  },
  //   {
  //     url: "/imgs/abstract/6.jpg",
  //     title: "Title 6",
  //     id: 6,
  //   },
  //   {
  //     url: "/imgs/abstract/7.jpg",
  //     title: "Title 7",
  //     id: 7,
  //   },
];
