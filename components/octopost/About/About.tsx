"use client";

import { motion } from "framer-motion";
import AboutLogo from "./assets/AboutLogo";
import {
  AboutIcons1,
  AboutIcons2,
  AboutIcons3,
  AboutIcons4,
  AboutIcons5,
} from './assets/AboutLogoIcons'
import CloudIcon from './assets/CloudIcon'

export default function About() {
  return (
    <section className="flex bg-white md:flex-center  lg:mx-40 lg:flex-center">
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
        className="max-w-[445px] md:flex-center px-4 flex-center lg:max-w-full  lg:flex-center"
      >
        <div className="space-y-12 text-wrap text-center truncate ">
          <h1 className="text-[#a076f9] lg:text-5xl  text-4xl font-bold mt-20 lg:font-extrabold">
            O que é a Octopost?
          </h1>
          <p className="w-full font-light text-[#5C5CA0]">
            Octopost é um app que permite que o usuário faça publicações em
            redes sociais all-in-one, mas de forma modular, ou seja, se sua rede
            social não está presente ainda no app, não se preocupe, você pode
            desenvolver um módulo pra usar essa nova rede social no app!
          </p>
          <div className="flex gap-8 max-w-1/3 lg:flex-row  lg:flex-nowrap flex-wrap-reverse flex-center">
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
  )
}
