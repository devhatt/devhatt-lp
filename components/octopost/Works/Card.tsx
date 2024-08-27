'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import ColorfulEllipse from './assets/ ColorfulEllipse'
import CloudIcon from './assets/CloudIcon'
import Ellipse from './assets/Ellipse'
import ColorfulCloud from './assets/ColorfulCloud'

type CardProps = {
  title: string
  text: string
}

function Card({ title, text }: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative flex h-96 w-[265px] flex-col items-center justify-between overflow-hidden rounded-xl bg-white px-8 pb-10 pt-16 shadow-dropshadow-card"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-0 top-0">
        <Ellipse />
      </div>
      <motion.div
        className="absolute left-0 top-0 z-20"
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{
          x: isHovered ? 0 : -100,
          y: isHovered ? 0 : -100,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.8 }}
      >
        <ColorfulEllipse />
      </motion.div>
      <div className="relative mb-9">
        <CloudIcon />
        <motion.div
          className="absolute top-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <ColorfulCloud />
        </motion.div>
      </div>
      <div className="z-20 overflow-hidden">
        <h3 className="mb-3 text-center text-xl font-bold text-octopost-tertiaryViolet">
          {title}
        </h3>
        <div className="">
          <p className="text-ellipsis text-center text-sm leading-6 text-[#2E2667]">
            {text}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10 rotate-180">
        <Ellipse />
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: isHovered ? '108px' : '0px',
          height: isHovered ? '8px' : '0px',
        }}
        transition={{
          width: { duration: 0.5 },
          height: { duration: isHovered ? 0 : 0.5, delay: isHovered ? 0 : 0.2 },
        }}
        className="absolute bottom-0 left-1/2 z-40 h-2 -translate-x-1/2 transform rounded-full bg-gradient-purplebar"
      ></motion.div>
    </motion.div>
  )
}

export default Card
