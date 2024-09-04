'use client'
import { motion } from 'framer-motion'
import JoinUsLogo from './assets/JoinUsLogo'

import Datas from '@/components/octopost/Datas/Datas'
import Image from 'next/image'

const RenderLayers = () => {
  return (
    <>
      <motion.div
        animate={{ y: [50, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer absolute inset-0"
      ></motion.div>
      <motion.div
        animate={{ y: [90, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer1 absolute inset-0"
      ></motion.div>
      <motion.div
        animate={{ x: [-20, 0], y: [20, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer2 absolute bottom-[550px] left-[420px] size-32"
      ></motion.div>

      <motion.div
        animate={{ x: [0, 20], y: [0, 20] }}
        transition={{
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer3 absolute bottom-[450px] left-[20px] h-20 w-72"
      ></motion.div>

      <motion.div
        animate={{ x: [-30, 0], y: [20, -20] }}
        transition={{
          ease: 'easeInOut',
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer4 absolute bottom-[600px] left-[680px] h-20 w-72 opacity-70"
      ></motion.div>

      <motion.div
        animate={{ x: [-20, 0], y: [20, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer5 absolute bottom-[500px] left-[880px] h-40 w-72 opacity-50"
      ></motion.div>

      <motion.div
        animate={{ x: [-30, 0], y: [20, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer6 absolute bottom-[650px] left-[120px] h-40 w-72 opacity-50"
      ></motion.div>

      <motion.div
        animate={{ x: [-20, 0], y: [20, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer7 absolute bottom-[400px] left-[1220px] h-40 w-72 opacity-80"
      ></motion.div>

      <motion.div
        animate={{ x: [-20, 0], y: [20, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer8 absolute bottom-[400px] left-[700px] h-40 w-72 opacity-100"
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
          ease: 'easeInOut',
          duration: 5,
          delay: 0,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer9 absolute bottom-[600px] left-[100px] h-40 w-72 sm:left-[1000px]"
      ></motion.div>

      <motion.div
        animate={{ x: [-20, 0], y: [20, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="bg-layer10 absolute bottom-[500px] left-[1400px] h-40 w-72 opacity-40"
      ></motion.div>

      <motion.div
        animate={{ x: [-20, 10], y: [10, 0], opacity: [0.6, 0.7] }}
        transition={{
          ease: 'easeInOut',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2,
        }}
        className="bg-layer11 absolute bottom-[400px] left-[1490px] h-40 w-72 opacity-40"
      ></motion.div>
    </>
  )
}

export default function JoinUs() {
  const profiles = [
    { imgSrc: '/image1.jpg', alt: 'Profile 1' },
    { imgSrc: '/image2.jpg', alt: 'Profile 2' },
    { imgSrc: '/image3.jpg', alt: 'Profile 3' },
    { imgSrc: '/image4.jpg', alt: 'Profile 4' },
  ]

  return (
    <section className="flex h-screen flex-col">
      <div className="flex-shrink-0">
        <Datas />
      </div>
      <div className="overflow-hidden flex-grow bg-[#2C3680] p-4 sm:p-0 relative ">
        <RenderLayers />
        <div className="absolute flex-center p-4 inset-0 gap-32">
          <div className="hidden lg:block ">
            <JoinUsLogo />
          </div>
          <div className="space-y-10 text-white">
            <div className="max-w-[500px]">
              <h1 className="text-[56px] font-bold leading-tight">
                Junte-se a nossa comunidade
              </h1>
              <p className="font-light">
                Veja o que outros usuários e desenvolvedores estão dizendo sobre
                o OctoPost. Convocamos você a participar deste movimento
                colaborativo!
              </p>
            </div>

            <div className="flex-start space-x-[-16px]">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="size-10 overflow-hidden rounded-full border-2 border-white bg-blue-800"
                >
                  <Image
                    width={12}
                    height={12}
                    src={profile.imgSrc}
                    alt={profile.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <div className="font-thin italic">
                <p className="ml-8">More than 10,000 people have tried</p>
              </div>
            </div>
            <div className="max-w-60 cursor-pointer rounded-md bg-[#5965F2] px-6 py-4 hover:shadow-lg hover:brightness-105">
              Acesse o nosso Discord!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
