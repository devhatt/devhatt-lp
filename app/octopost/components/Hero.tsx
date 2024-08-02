"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroImg from "./assets/HeroLogo/HeroImg";
import WaveAnimation from "./components/WaveAnimation";
import StickerLogo1 from "./assets/HeroLogo/StickerLogo1";
import StickerLogo2 from "./assets/HeroLogo/StickerLogo1";

function Hero() {
  return (
    <section className="bg-pattern bg-cover text-white flex relative flex-col h-screen">
      <div className="flex bg-gradient-to-t to-indigo-500 via-[#805AD5] from-[#E030A3] justify-center items-center h-screen">
        <div className="flex">
          <div className="max-w-[420px] ml-4">
            <h1 className="text-3xl leading-10 mb-5 font-bold">
              Gerenciar redes sociais
              <br /> não deveria ser complicado.
              <br /> Descubra a Octopost
            </h1>
            <p className="font-light">
              Sua solução simples para uma gestão descomplicada de redes
              sociais. Feito para todos, de empreendedores a criadores de
              conteúdo.
            </p>
            <button className="mb-10 px-4 my-7 py-3 font-light text-sm shadow-md drop-shadow border-white border rounded-full">
              Experimente agora
            </button>
            <div className="flex gap-2">
              <div className="rounded-full w-10 h-10 bg-white"></div>
              <div className="rounded-full w-10 h-10 bg-white"></div>
              <div className="rounded-full w-10 h-10 bg-white"></div>
              <div className="rounded-full w-10 h-10 bg-white"></div>
            </div>
          </div>
          <div className="relative drop-shadow-2xl">
            <motion.div
              animate={{
                y: [0, -20, 0, 20, 0],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <HeroImg />
            </motion.div>
            <div className="absolute inset-0 left-10 animate-pulse">
              <StickerLogo1 />
            </div>
            <div className="absolute -right-5 top-40 animate-pulse">
              <StickerLogo2 />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-screen inset-0 z-999">
        <WaveAnimation />
      </div>
    </section>
  );
}

export default Hero;
