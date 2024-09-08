"use client";

import { motion } from "framer-motion";
import AboutLogo from "./assets/AboutLogo";
import {
  AboutIcons1,
  AboutIcons2,
  AboutIcons3,
  AboutIcons4,
  AboutIcons5,
} from "./assets/AboutLogoIcons";
import CloudIcon from "./assets/CloudIcon";

export default function About() {
  return (
    <section className="md:flex-center lg:flex-center flex overflow-x-hidden bg-white lg:mx-40">
      <div className="lg:flex-center">
        <motion.div
          initial={{ x: -300, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ x: -300, opacity: 0 }}
          className="relative hidden lg:flex"
        >
          <AboutLogo />
          <div className="absolute left-14 top-36">
            <AboutIcons1 />
          </div>
          <div className="absolute left-20 top-[278px]">
            <AboutIcons2 />
          </div>
          <div className="absolute bottom-7 left-48">
            <AboutIcons3 />
          </div>
          <div className="absolute bottom-10 right-[164px]">
            <AboutIcons4 />
          </div>
          <div className="absolute right-8 top-56">
            <AboutIcons5 />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 300, opacity: 0, scale: 0.9 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        exit={{ x: 300, opacity: 0 }}
        className="md:flex-center flex-center lg:flex-center max-w-[445px] overflow-x-hidden px-4 lg:max-w-full"
      >
        <div className="space-y-12 truncate text-wrap text-center">
          <h1 className="mt-20 text-4xl font-bold text-[#a076f9] lg:text-5xl lg:font-extrabold">
            O que é a Octopost?
          </h1>
          <p className="w-full font-light text-[#5C5CA0]">
            Octopost é um app que permite que o usuário faça publicações em
            redes sociais all-in-one, mas de forma modular, ou seja, se sua rede
            social não está presente ainda no app, não se preocupe, você pode
            desenvolver um módulo pra usar essa nova rede social no app!
          </p>
          <div className="max-w-1/3 flex-center flex flex-wrap-reverse gap-8 overflow-x-hidden lg:flex-row lg:flex-nowrap">
            <div className="">
              <CloudIcon />
              <p className="primary-text-gradient text-center">
                Free and Open <br />
                Source
              </p>
            </div>
            <div className="hover:bg-white">
              <CloudIcon />
              <p className="primary-text-gradient text-center">
                Free and Open <br />
                Source
              </p>
            </div>
            <div className="">
              <CloudIcon />
              <p className="primary-text-gradient text-center">
                Free and Open <br />
                Source
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
