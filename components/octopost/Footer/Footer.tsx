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
    <footer className="flex h-[428px] w-full items-center justify-evenly bg-[#221440] text-octopost-primaryWhite">
      <div className="space-y-4">
        <div className="mix-blend-luminosity">
          <Logo />
        </div>
        <div className="max-w-[250px] space-x-4 font-bold leading-10">
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
              opacity: 1,
              x: isClicked ? 1000 : 0,
              y: isClicked ? -1000 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="flex-start outline outline-cyan-800/30 hover:animate-pulse hover:brightness-125"
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
