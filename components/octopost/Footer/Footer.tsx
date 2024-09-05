"use client";

import Link from "next/link";
import Logo from "../Navbar/assets/Logo";
import { SvgIcon1, SvgIcon2, SvgIcon3, SvgIcon4 } from "../Hero/assets/socials";
import InputIcon from "./assets/InputIcon";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <footer className="flex flex-col md:flex-row lg:flex-row justify-evenly items-center bg-[#221440] text-octopost-primaryWhite h-[428px] w-full">
      <motion.div
        initial={{ y: 300, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ y: 300, opacity: 0 }}
        className="space-y-4"
      >
        <div className="mix-blend-luminosity">
          <Logo />
        </div>
        <div className="font-bold leading-10 space-x-4 text-center  max-w-[250px]">
          <Link href="/"> About Us</Link>
          <Link href="/">Team</Link>
          <Link href="/">Careers</Link>
          <Link href="/"> Socials</Link>
          <Link href="/"> Activity</Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 300, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ y: 300, opacity: 0 }}
        className="space-y-4 max-w-[300px]"
      >
        <div className="space-y-4">
          <h1 className="font-bold">Newsletter</h1>
          <p className="">
            Cadastre seu email e fique por dentro de todas as novidades.
          </p>
        </div>

        <div className="flex-start">
          <motion.input
            className="p-2 flex-start outline-cyan-800/30 bg-cyan-900/20 text-white outline mr-[3px] h-[46px]"
            type="text"
            placeholder="Entre com seu email"
          />
          <motion.button
            initial={{ opacity: 0.7 }}
            animate={{
              opacity: isClicked ? 0.3 : 0.7,
              x: isClicked ? 1000 : 0,
              y: isClicked ? -1000 : 0,
            }}
            transition={{ duration: 2.5 }}
            className="flex-start hover:brightness-125 hover:animate-pulse outline outline-cyan-800/30"
            onClick={handleClick}
          >
            <InputIcon />
          </motion.button>
        </div>

        <div className="flex gap-2">
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
      </motion.div>
    </footer>
  );
}
