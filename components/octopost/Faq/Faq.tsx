"use client";
import { AnimatePresence, motion } from "framer-motion";
import Accordion from "./Accordion";
import FaqLogo from "./assets/FaqLogo";

export default function Faq() {
  return (
    <section className="p-4 h-screen">
      <div className="gap-10 flex-center">
        <AnimatePresence>
          <motion.div
            initial={{ x: -300, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ x: -300, opacity: 0 }}
            className=""
          >
            <Accordion />
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            exit={{ x: 300, opacity: 0 }}
            className="hidden sm:block"
          >
            <FaqLogo />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
