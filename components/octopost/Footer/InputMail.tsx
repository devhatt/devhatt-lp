import { motion } from "framer-motion";
import React, { useState } from "react";
import InputIcon from "./assets/InputIcon";

export default function InputMail() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 5000);
  };

  return (
    <div className="over flex items-center">
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
          className="mr-[3px] h-[46px] bg-cyan-900/20 p-2 text-white outline outline-cyan-800/30"
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
        className="flex h-[46px] w-[62px] items-center justify-center"
        onClick={handleClick}
      >
        <motion.div
          className="relative"
          initial={{ x: 0, y: 0, rotate: 0, scale: 1.5 }}
          animate={{
            x: isClicked ? 800 : 0,
            y: isClicked ? -800 : 0,
            scale: isClicked ? 1.8 : 1.5,
            rotate: isClicked ? [0, -15, 15, -10, 10, 0] : 0,
          }}
          transition={{
            duration: 1,
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
            className={`h-2 ${isClicked ? "opacity-100" : "opacity-0"} flex-center absolute left-[24px] top-[14px] w-2 rounded-full bg-red-500 text-[0.4rem] font-light transition duration-1000`}
          >
            1
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}
