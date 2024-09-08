"use client";

import { useRef, useState } from "react";
import Bubble from "./assets/Bubble";
import VectorLeft from "./assets/VectorLeft";
import VectorRight from "./assets/VectorRight";
import Card from "./Card";
import { motion } from "framer-motion";

import { CARDS } from "./utils/Cards";

function Works() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const handleScrollEvent = (): void => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.clientWidth;
      const newActiveSlide = Math.round(scrollLeft / width);
      setActiveSlide(newActiveSlide);
    }
  };

  return (
    <section className="relative mb-60 flex h-screen items-center overflow-hidden bg-octopost-primaryWhite">
      <div className="z-20 m-auto flex max-w-7xl flex-col gap-9 overflow-hidden desktop:gap-32">
        <div className="m-0 flex max-w-[589px] flex-col items-center gap-10 self-center px-10 desktop:px-5">
          <h2 className="text-center text-4xl font-semibold text-octopost-primaryViolet">
            Como Funciona?
          </h2>
          <p className="h-24 overflow-hidden text-ellipsis text-center leading-6 tracking-tighter text-octopost-tertiaryViolet">
            O OctoPost simplifica o compartilhamento de conteúdo em diversas
            plataformas. Veja como podemos transformar sua experiência online.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <ul
          className="no-scrollbar flex gap-4 overflow-x-auto desktop:gap-7"
          ref={scrollContainerRef}
          onScroll={handleScrollEvent}
        >
          <li className="flex-none">
            <div className="w-7"></div>
          </li>
          {CARDS.map((card, index) => (
            <li className="flex-none" key={index}>
              <Card title={card.title} text={card.text} />
            </li>
          ))}
          <li className="flex-none">
            <div className="w-7"></div>
          </li>
        </ul>
      </div>
      <div className="absolute inset-x-0 bottom-12 z-50 mx-auto hidden w-fit gap-3 mobile:flex">
        {Array.from({ length: CARDS.length }).map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full border-[1px] transition-all duration-500 ${index === activeSlide ? "border-octopost-primaryViolet bg-octopost-primaryViolet" : "border-[#A1A1A1]"}`}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-0 h-3/5 w-full bg-gradient-works opacity-40"></div>

      <div className="absolute right-0 top-0 mobile:-right-[31rem]">
        <VectorRight />
      </div>
      <div className="absolute bottom-0 left-0 mobile:-left-[38rem]">
        <VectorLeft />
      </div>

      {[
        {
          className:
            "absolute left-[10%] bottom-[8%] mobile:-left-20 mobile:bottom-1 desktop:animate-pulse mobile:opacity-40",
          delay: 0,
        },
        {
          className:
            "absolute left-[24.3%] top-[30.2%] scale-[.71] rotate-90 mobile:left-72 mobile:top-52 desktop:animate-pulse mobile:opacity-40",
          delay: 1,
        },
        {
          className:
            "absolute right-[15%] top-[25%] scale-75 mobile:-left-36 mobile:top-28 desktop:animate-pulse mobile:opacity-40",
          delay: 2,
        },
        {
          className:
            "absolute right-[12%] bottom-[5%] scale-[1.31] -rotate-90 mobile:left-96 mobile:-bottom-32 desktop:animate-pulse mobile:opacity-40",
          delay: 3,
        },
      ].map(({ className, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -3, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 3,
            delay: delay * 1,
            y: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            },
          }}
          className={className}
        >
          <Bubble />
        </motion.div>
      ))}
    </section>
  );
}

export default Works;
