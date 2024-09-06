"use client";
import { AnimatePresence, motion } from "framer-motion";
import Accordion from "./Accordion";
import FaqLogo from "./assets/FaqLogo";

export default function Faq() {
  return (
    <section className="flex min-h-[80vh] justify-center overflow-x-hidden p-4">
      <div className="flex-center gap-10 overflow-x-hidden">
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
            className="hidden lg:block"
          >
            <FaqLogo />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
