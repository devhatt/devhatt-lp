"use client";
import { motion } from "framer-motion";
import JoinUsLogo from "./assets/JoinUsLogo";

import Datas from "@/components/octopost/Datas/Datas";

export default function JoinUs() {
  return (
    <section className="h-screen flex flex-col ">
      <div className="flex-shrink-0">
        <Datas />
      </div>
      <div className=" flex-grow bg-[#2C3680] relative ">
        <motion.div
          animate={{ y: [50, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer inset-0 "
        ></motion.div>
        <motion.div
          animate={{ y: [90, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer1 inset-0 "
        ></motion.div>
        <motion.div
          animate={{ x: [-20, 0], y: [20, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer2 bottom-[550px] size-32 left-[420px] "
        ></motion.div>

        <motion.div
          animate={{ x: [0, 20], y: [0, 20] }}
          transition={{
            ease: "easeInOut",
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer3 bottom-[450px] w-72 h-20 left-[20px] "
        ></motion.div>

        <motion.div
          animate={{ x: [-30, 0], y: [20, -20] }}
          transition={{
            ease: "easeInOut",
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute opacity-70  bg-layer4 bottom-[600px] w-72 h-20 left-[680px] "
        ></motion.div>

        <motion.div
          animate={{ x: [-20, 0], y: [20, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer5 bottom-[500px] w-72 h-40 left-[880px] opacity-50"
        ></motion.div>

        <motion.div
          animate={{ x: [-30, 0], y: [20, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer6 bottom-[650px] w-72 h-40 left-[120px] opacity-50"
        ></motion.div>

        <motion.div
          animate={{ x: [-20, 0], y: [20, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer7 bottom-[400px] w-72 h-40 left-[1220px] opacity-80"
        ></motion.div>

        <motion.div
          animate={{ x: [-20, 0], y: [20, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer8 bottom-[400px] w-72 h-40 left-[700px] opacity-50"
        ></motion.div>

        <motion.div
          animate={{
            x: [-20, 50],
            y: [40, -10],
            rotate: [-5, 5],
            scale: [0.9, 1],
            opacity: [0.8, 1],
          }}
          transition={{
            ease: "easeInOut",
            duration: 5,
            delay: 0,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer9 bottom-[600px] w-72 h-40 left-[1000px]"
        ></motion.div>

        <motion.div
          animate={{ x: [-20, 0], y: [20, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute  bg-layer10 bottom-[500px] w-72 h-40 left-[1400px] opacity-40"
        ></motion.div>

        <motion.div
          animate={{ x: [-20, 10], y: [10, 0], opacity: [0.6, 0.7] }}
          transition={{
            ease: "easeInOut",
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute  bg-layer11 bottom-[400px] w-72 h-40 left-[1490px] opacity-40"
        ></motion.div>

        <div className="absolute flex-center  inset-0 gap-32">
          <div className="">
            <JoinUsLogo />
          </div>
          <div className="text-white space-y-10">
            <div className="max-w-[500px] ">
              <h1 className="text-[56px] leading-tight font-bold ">
                Junte-se a nossa comunidade
              </h1>
              <p className="font-light">
                Veja o que outros usuários e desenvolvedores estão dizendo sobre
                o OctoPost. Convocamos você a participar deste movimento
                colaborativo!
              </p>
            </div>
            <div className="italic font-thin">
              More than 10,000 people have tried
            </div>
            <div className="hover:shadow-lg cursor-pointer py-4 px-6 max-w-60 hover:brightness-105 rounded-md bg-[#5965F2]">
              Acesse o nosso Discord!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
