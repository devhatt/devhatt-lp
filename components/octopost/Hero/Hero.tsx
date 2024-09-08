"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SvgIcon1, SvgIcon2, SvgIcon3, SvgIcon4 } from "./assets/socials";
import HeroImg from "./assets/HeroImg";
import StickerLogo1 from "./assets/StickerLogo1";
import StickerLogo2 from "./assets/StickerLogo2";
import WaveAnimation from "./assets/WaveAnimation";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-pattern relative flex flex-col overflow-hidden text-white">
      <div className="flex-center mt-20 flex flex-col md:mt-0 md:h-[80vh] lg:h-screen lg:flex-row">
        <div className="-mt-20 lg:space-y-10">
          <motion.div
            initial={{ x: -300, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ x: -300, opacity: 0 }}
            className="mx-auto text-center lg:max-w-[450px] lg:text-start"
          >
            <h1 className="mb-8 mt-32 text-3xl lg:text-3xl lg:leading-10">
              Gerenciar redes sociais
              <br /> não deveria ser complicado.
              <br /> Descubra a Octopost
            </h1>
            <p className="hidden font-light lg:flex">
              Sua solução simples para uma gestão descomplicada de redes
              sociais. Feito para todos, de empreendedores a criadores de
              conteúdo.
            </p>
            <button className="mb-4 rounded-full border border-white px-9 py-5 font-light shadow-md drop-shadow lg:mt-10 lg:py-4">
              Experimente agora!
            </button>
          </motion.div>

          <div className="hidden justify-center gap-2 sm:flex lg:justify-start">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <SvgIcon1 />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <SvgIcon2 />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <SvgIcon3 />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
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
            className={`absolute inset-0 top-64 animate-pulse md:left-24 md:top-96 lg:left-[600px]`}
          >
            <StickerLogo1 />
          </div>
          <div className="absolute -right-10 top-48 animate-pulse md:right-20 md:top-96 lg:right-[200px]">
            <StickerLogo2 />
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 -bottom-px mt-auto">
        <WaveAnimation />
      </div>
    </section>
  );
}

export default Hero;
