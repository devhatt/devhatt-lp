"use client";

import Link from "next/link";
import Logo from "../Navbar/assets/Logo";
import { SvgIcon1, SvgIcon2, SvgIcon3, SvgIcon4 } from "../Hero/assets/socials";
import { motion } from "framer-motion";
import InputMail from "./InputMail";

export default function Footer() {
  return (
    <footer className="flex h-[428px] w-full flex-col items-center justify-evenly bg-[#221440] text-octopost-primaryWhite md:flex-row lg:flex-row">
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
        <div className="max-w-[250px] space-x-4 text-center font-bold leading-10">
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
        className="max-w-[300px] space-y-4"
      >
        <div className="space-y-4">
          <h1 className="font-bold">Newsletter</h1>
          <p className="">
            Cadastre seu email e fique por dentro de todas as novidades.
          </p>
        </div>

        <div className="flex-start">
          <InputMail />
        </div>

        <div className="flex gap-2">
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
      </motion.div>
    </footer>
  );
}
