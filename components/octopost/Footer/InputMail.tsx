import { motion } from "framer-motion";
import React, { useState } from "react";
import InputIcon from "./assets/InputIcon";

type Props = {};

export default function InputMail({}: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex items-center">
      {/* Input que vai encolher da esquerda para a direita */}
      <motion.div
        className="flex"
        initial={{ width: "250px", opacity: 1 }}
        animate={{
          width: isClicked ? "0px" : "250px",
          opacity: isClicked ? 0 : 1,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <motion.input
          className="p-2 outline-cyan-800/30 bg-cyan-900/20 text-white outline mr-[3px] h-[46px]"
          type="text"
          placeholder="Entre com seu email"
          style={{ width: "100%" }}
        />
      </motion.div>

      <motion.button
        initial={{ opacity: 1, backgroundColor: "#AC3FE4" }}
        animate={{
          backgroundColor: isClicked ? "transparent" : "#AC3FE4",
          opacity: 1,
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex items-center justify-center w-[62px] h-[46px]"
        onClick={handleClick}
      >
        <motion.div
          className="relative"
          initial={{ x: 0, y: 0, rotate: 0, scale: 1.5 }}
          animate={{
            x: isClicked ? 1000 : 0,
            y: isClicked ? -1000 : 0,
            scale: isClicked ? 1.8 : 1.5,
            rotate: isClicked ? [0, -15, 15, -10, 10, 0] : 0, // Tremor antes de voar
          }}
          transition={{
            duration: 2.5,
            delay: isClicked ? 1.8 : 0,
            scale: {
              duration: 1.5,
              delay: 0.5,
            },
            rotate: {
              duration: 0.7,
              delay: isClicked ? 1 : 0,
            },
          }}
        >
          <InputIcon />
          <div
            className={`h-2 ${isClicked ? "opacity-100" : "opacity-0"} transition duration-1000 absolute top-[14px] left-[24px] text-[0.4rem] font-light w-2 rounded-full bg-red-500 flex-center`}
          >
            1
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}
