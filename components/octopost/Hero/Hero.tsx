"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SvgIcon1, SvgIcon2, SvgIcon3, SvgIcon4 } from "./assets/socials";
import HeroImg from "./assets/HeroImg";
import StickerLogo1 from "./assets/StickerLogo1";
import StickerLogo2 from "./assets/StickerLogo2";
import WaveAnimation from "./assets/WaveAnimation";

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // lg breakpoint = 1024px

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-pattern text-white flex flex-col  overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:h-screen flex-center md:h-[80vh] mt-20 md:mt-0">
        <div className="-mt-20 lg:space-y-10">
          <motion.div
            initial={{ x: -300, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ x: -300, opacity: 0 }}
            className="mx-auto lg:max-w-[450px] lg:text-start  text-center"
          >
            <h1 className="lg:text-3xl  text-3xl mt-32 lg:leading-10 mb-8">
              Gerenciar redes sociais
              <br /> não deveria ser complicado.
              <br /> Descubra a Octopost
            </h1>
            <p className="font-light hidden lg:flex">
              Sua solução simples para uma gestão descomplicada de redes
              sociais. Feito para todos, de empreendedores a criadores de
              conteúdo.
            </p>
            <button className="lg:mt-10 lg:py-4 mb-4 px-9 py-5 font-light shadow-md drop-shadow border-white border rounded-full">
              Experimente agora!
            </button>
          </motion.div>

          <div className="gap-2 hidden sm:flex justify-center lg:justify-start">
            <div className="rounded-full flex justify-center items-center w-10 h-10 bg-white">
              <SvgIcon1 />
            </div>
            <div className="rounded-full w-10 justify-center items-center h-10 flex bg-white">
              <SvgIcon2 />
            </div>
            <div className="rounded-full w-10 justify-center items-center h-10 flex bg-white">
              <SvgIcon3 />
            </div>
            <div className="rounded-full w-10 justify-center items-center flex h-10 bg-white">
              <SvgIcon4 />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ x: 300, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          exit={{ x: 300, opacity: 0 }}
          className="-mt-20"
        >
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
            <HeroImg isMobile={isMobile} />
          </motion.div>
          <div
            className={`absolute lg:left-[600px] inset-0 top-64 md:left-24 md:top-96 animate-pulse`}
          >
            <StickerLogo1 />
          </div>
          <div className="absolute -right-10 lg:right-[200px] top-48 md:top-96 md:right-20 animate-pulse">
            <StickerLogo2 />
          </div>
        </motion.div>
      </div>
      <div className="inset-x-0 absolute -bottom-px mt-auto">
        <WaveAnimation />
      </div>
    </section>
  );
}

export default Hero;
