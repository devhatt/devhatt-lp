'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SvgIcon1, SvgIcon2, SvgIcon3, SvgIcon4 } from './assets/socials'
import HeroImg from './assets/HeroImg'
import StickerLogo1 from './assets/StickerLogo1'
import StickerLogo2 from './assets/StickerLogo2'
import WaveAnimation from './assets/WaveAnimation'

function Hero() {
  return (
    <section className="bg-pattern relative flex h-screen flex-col text-white">
      <div className="flex h-screen items-center justify-center">
        <div className="flex">
          <div className="ml-4 max-w-[420px]">
            <h1 className="mb-5 text-3xl font-bold leading-10">
              Gerenciar redes sociais
              <br /> não deveria ser complicado.
              <br /> Descubra a Octopost
            </h1>
            <p className="font-light">
              Sua solução simples para uma gestão descomplicada de redes
              sociais. Feito para todos, de empreendedores a criadores de
              conteúdo.
            </p>
            <button className="my-7 mb-10 rounded-full border border-white px-4 py-3 text-sm font-light shadow-md drop-shadow">
              Experimente agora
            </button>
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
          <div className="relative drop-shadow-2xl">
            <motion.div
              animate={{
                y: [0, -20, 0, 20, 0],
              }}
              transition={{
                duration: 8,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            >
              <HeroImg />
            </motion.div>
            <div className="absolute inset-0 left-10 animate-pulse">
              <StickerLogo1 />
            </div>
            <div className="absolute -right-5 top-40 animate-pulse">
              <StickerLogo2 />
            </div>
          </div>
        </div>
      </div>
      <div className="z-999 absolute inset-0 h-screen">
        <WaveAnimation />
      </div>
    </section>
  )
}

export default Hero
