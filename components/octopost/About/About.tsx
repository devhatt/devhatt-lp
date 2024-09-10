"use client";

import { AboutLogoIconsBg, AboutLogoIconsBg1 } from "./assets/AboutLogoIconsBg";

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
import CloudIcon2 from "./assets/CloudIcon2";

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
          <div className="absolute left-28 top-48 hover:scale-105 transition-transform duration-300 group">
            <div className="relative">
              <AboutLogoIconsBg />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                boxShadow: '0 0 0 10px rgba(160, 118, 249, 0.2)',
              }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center hover:scale-95 transition-transform duration-300">
              <AboutIcons1 />
            </div>
          </div>
          <div className="absolute left-32 top-[331px] hover:scale-105 transition-transform duration-300 group">
            <div className="relative">
              <AboutLogoIconsBg />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                boxShadow: '0 0 0 10px rgba(160, 118, 249, 0.2)',
              }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center hover:scale-95 transition-transform duration-300">
              <AboutIcons2 />
            </div>
          </div>
          <div className="absolute bottom-20 left-60 hover:scale-105 transition-transform duration-300 group">
            <div className="relative">
              <AboutLogoIconsBg />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                boxShadow: '0 0 0 10px rgba(160, 118, 249, 0.2)',
              }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center hover:scale-95 transition-transform duration-300">
              <AboutIcons3 />
            </div>
          </div>
          <div className="absolute bottom-20 right-[210px] hover:scale-105 transition-transform duration-300 group">
            <div className="relative">
              <AboutLogoIconsBg />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                boxShadow: '0 0 0 10px rgba(160, 118, 249, 0.2)',
              }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center hover:scale-95 transition-transform duration-300">
              <AboutIcons4 />
            </div>
          </div>
          <div className="absolute right-28 bottom-44 hover:scale-105 transition-transform duration-300 group">
            <div className="relative">
              <AboutLogoIconsBg1 />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                boxShadow: '0 0 0 40px rgba(247, 40, 142, 0.1), 0 0 0 28px rgba(247, 40, 142, 0.1)',
              }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center hover:scale-95 transition-transform duration-300">
              <AboutIcons5 />
            </div>
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
            <div>
              <div className="relative group">
                <div className="transition-opacity duration-300  hover:opacity-0">
                  <CloudIcon />
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <CloudIcon2 />
                </div>
              </div>
              <p className="primary-text-gradient text-center">
                Grátis e Código <br />
                Aberto
              </p>
            </div>
            <div>
              <div className="relative group">
                <div className="transition-opacity duration-300 hover:opacity-0">
                  <CloudIcon />
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <CloudIcon2 />
                </div>
              </div>
              <p className="primary-text-gradient text-center">
                Modular e <br />
                Extensível
              </p>
            </div>
            <div>
              <div className="relative group">
                <div className="transition-opacity duration-300 hover:opacity-0">
                  <CloudIcon />
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <CloudIcon2 />
                </div>
              </div>
              <p className="primary-text-gradient text-center">
                Multiplataforma
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
