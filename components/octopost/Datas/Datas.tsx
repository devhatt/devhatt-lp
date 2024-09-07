"use client";
import { motion, stagger } from "framer-motion";
import { CloudIcon } from "./assets/CloudIcon";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Datas() {
  const dataNumbers = [
    {
      icon: CloudIcon,
      numbers: 1200,
      text: "Dados Importantes",
    },
    {
      icon: CloudIcon,
      numbers: 1200,
      text: "Dados Importantes",
    },
    {
      icon: CloudIcon,
      numbers: 1200,
      text: "Dados Importantes",
    },
    {
      icon: CloudIcon,
      numbers: 1200,
      text: "Dados Importantes",
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-r from-octopost-primaryViolet to-octopost-primaryPink pt-3 lg:max-h-64">
      <button
        onClick={scrollLeft}
        className="absolute left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/30"
      >
        <ArrowLeft className="text-white" />
      </button>

      <div className="before:absolute before:-top-[500px] before:left-80 before:h-[2000px] before:w-[2000px] before:rounded-full before:bg-white/5 after:absolute after:-right-52 after:-top-10 after:h-[800px] after:w-[800px] after:overflow-hidden after:rounded-full after:bg-white/10"></div>

      <div
        ref={scrollRef}
        className="flex max-h-64 min-h-64 flex-nowrap space-x-5 overflow-x-auto overflow-y-hidden p-2 lg:h-40 lg:max-h-[50px] lg:flex-row"
      >
        {dataNumbers.map(({ icon: Icon }, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.4 }}
            key={index}
            className={`relative z-10 ml-0 flex w-full flex-row gap-5 lg:max-w-[340px] lg:flex-row lg:gap-5 ${index % 2 === 0 ? "ml-56 mt-32 w-full" : ""}`}
          >
            <div className="group">
              <div className="flex-center size-24 rounded-md bg-white/30 transition-all group-hover:scale-x-[-1]">
                <Icon />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <h1 className="text-3xl font-bold">1200+</h1>
              <p className="flex-wrap text-xl font-bold text-white/60">
                Dados importantes
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/30"
      >
        <ArrowRight className="text-white" />
      </button>
    </section>
  );
}
