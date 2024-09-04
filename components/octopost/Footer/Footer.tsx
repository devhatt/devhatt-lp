'use client'
import Link from 'next/link'
import Logo from '../Navbar/assets/Logo'
import { SvgIcon1, SvgIcon2, SvgIcon3, SvgIcon4 } from '../Hero/assets/socials'
import InputIcon from './assets/InputIcon'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(true)
  }
  return (
    <footer className="flex flex-col md:flex-row lg:flex-row justify-evenly items-center bg-[#221440] text-octopost-primaryWhite h-[428px] w-full">
      <div className="space-y-4">
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
      </div>

      <div className="max-w-[300px] space-y-4">
        <div className="space-y-4">
          <h1 className="font-bold">Newsletter</h1>
          <p className="">
            Cadastre seu email e fique por dentro de todas as novidades.
          </p>
        </div>

        <div className="flex-start">
          <motion.input
            className="flex-start mr-[3px] h-[46px] bg-cyan-900/20 p-2 text-white outline outline-cyan-800/30"
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
    </footer>
  )
}
