'use client'

import { useState, useRef, useEffect } from 'react';
import Bubble from "./assets/Bubble";
import VectorLeft from "./assets/VectorLeft";
import VectorRight from "./assets/VectorRight";
import Card from "./Card";

import { CARDS } from './utils/Cards';

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
    <section className="h-screen bg-octopost-primaryWhite flex items-center relative overflow-hidden">
      <div className="m-auto flex flex-col max-w-7xl z-20 overflow-hidden gap-9 desktop:gap-32">

        <div className="flex flex-col max-w-[589px] m-0 items-center gap-10 px-10 self-center desktop:px-5">
          <h2 className="font-semibold text-octopost-primaryViolet text-4xl text-center">Como Funciona?</h2>
          <p className="h-24 overflow-hidden text-ellipsis leading-6 text-octopost-tertiaryViolet text-center tracking-tighter">
            O OctoPost simplifica o compartilhamento de conteúdo em diversas plataformas. Veja como podemos transformar sua experiência online. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <ul className="flex overflow-x-auto gap-7 no-scrollbar mobile:gap-4" ref={scrollContainerRef} onScroll={handleScrollEvent}>
            <li className="flex-none">
                <div className='w-7'>
                </div>
              </li>
              {CARDS.map((card, index) => (
                <li className="flex-none"
                key={index}>
                  <Card 
                    title={card.title}
                    text={card.text}
                  />
              </li>
              ))}
              <li className="flex-none">
                <div className='w-7'>

                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="w-fit absolute bottom-12 inset-x-0 mx-auto z-50 gap-3 hidden mobile:flex">
        {Array.from({ length: CARDS.length }).map((_, index) => (
          <div 
            key={index}
            className={`w-3 h-3 border-[1px] rounded-full transition-all duration-500 ${index === activeSlide ? 'bg-octopost-primaryViolet border-octopost-primaryViolet' : 'border-[#A1A1A1]'}`}
          ></div>
        ))}
      </div>

      <div className="w-full h-3/5 absolute bg-gradient-works bottom-0 opacity-40"></div>
      
      <div className="absolute right-0 top-0 mobile:-right-[31rem]">
        <VectorRight />
      </div>
      <div className="absolute left-0 bottom-0 mobile:-left-[38rem]">
        <VectorLeft />
      </div>

      <div className="absolute left-[10%] bottom-[8%] mobile:-left-20 mobile:bottom-1 desktop:animate-pulse mobile:opacity-40">
        <Bubble />
      </div>
      <div className="absolute left-[24.3%] top-[30.2%] scale-[.71] rotate-90 mobile:left-72 mobile:top-52 desktop:animate-pulse mobile:opacity-40">
        <Bubble />
      </div>
      <div className="absolute right-[15%] top-[25%] scale-75  mobile:-left-36 mobile:top-28 desktop:animate-pulse mobile:opacity-40">
        <Bubble />
      </div>
      <div className="absolute right-[12%] bottom-[5%] scale-[1.31] -rotate-90  mobile:left-96 mobile:-bottom-32 desktop:animate-pulse mobile:opacity-40">
        <Bubble />
      </div>
    </section>
  );
}

export default Works;
