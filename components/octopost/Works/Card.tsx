'use client';

import { motion } from "framer-motion";
import React, { useState } from 'react';
import ColorfulEllipse from "./assets/ ColorfulEllipse";
import CloudIcon from "./assets/CloudIcon";
import Ellipse from "./assets/Ellipse";
import ColorfulCloud from "./assets/ColorfulCloud";

type CardProps = {
  title: string,
  text: string,
}

function Card({
  title,
  text,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  
  return (
    <motion.div className="w-[265px] bg-white shadow-dropshadow-card h-96 rounded-xl px-8 pt-16 pb-10 flex flex-col justify-between items-center relative overflow-hidden group"
    whileHover={{scale: 1.02}}
    transition={{duration: 0.5}}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div className="absolute top-0 left-0">
        <Ellipse/>
      </div>
      <motion.div className="absolute top-0 left-0 z-20"
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{ x: isHovered ? 0 : -100, y: isHovered ? 0 : -100, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <ColorfulEllipse />
      </motion.div>
      <div className="mb-9 relative">
        <CloudIcon />
         <motion.div className="absolute top-0"
         initial={{opacity: 0}}
         animate={{opacity: isHovered ? 1 : 0}}
         transition={{duration:  0.8}}>
           <ColorfulCloud />
         </motion.div>
      </div>
      <div className="overflow-hidden z-20">
        <h3 className="font-bold text-xl text-center text-octopost-tertiaryViolet mb-3">{title}</h3>
        <div className="">
          <p className="text-sm text-center text-[#2E2667] leading-6 text-ellipsis">{text}</p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 rotate-180 z-10">
        <Ellipse/>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '108px' : '0px', height: isHovered ? '8px' : '0px'}}
        transition={{ width: {duration: 0.5}, height: {duration: isHovered ? 0 : 0.5, delay: isHovered ? 0 : 0.2} }}
        className="h-2 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-purplebar z-40"
      ></motion.div>
    </motion.div>
  )
}

export default Card;