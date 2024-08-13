"use client";
import { use, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInterval } from "usehooks-ts";
import MinusIcon from "./assets/MinusIcon";
import PlusIcon from "./assets/PlusIcon";
import { cn } from "@/lib/utils";

const Accordion = () => {
  const [progress, setProgress] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [accordionOpenId, setAccordionOpenId] = useState(1);

  useInterval(() => {
    setProgress((prevProgress) => {
      let newProgress = prevProgress + 0.3;
      if (newProgress >= 100) {
        setAccordionOpenId(accordionOpenId < 4 ? accordionOpenId + 1 : 1);
        newProgress = 0;
      }
      return newProgress;
    });
  }, 10);

  useEffect(() => {
    setActiveQuestion(accordionOpenId);
  }, [accordionOpenId]);

  const questions = [
    {
      id: 1,
      question:
        "What is your name? ajdxwaiudxhawuixhdauwixhduaiwhdxuiawhdxuiaw",
      answer: "shreyas",
    },
    {
      id: 2,
      question: "What is your age?",
      answer: "22",
    },
    {
      id: 3,
      question: "What is your hobby?",
      answer: "coding",
    },
    {
      id: 4,
      question: "What is your fav color?udhauwdhawuhduawhuahdauwhdawuhd",
      answer:
        "blackawuhduwahduawhzduawhdzuhawudhwaudxhawudxhwaudxhwaudhxawudhxxawudhwauhdxxauwh",
    },
  ];
  return (
    <>
      <div className="flex-center">
        <div className="max-w-[350px] sm:max-w-[600px]  rounded-lg ">
          <h1 className="text-4xl mb-20 text-octopost-primaryViolet font-bold">
            Perguntas Frequentes (FAQ)
          </h1>
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <button
                className="w-full text-left text-xl focus:outline-none p-4 rounded-lg flex justify-center items-center"
                onClick={() =>
                  setActiveQuestion(
                    activeQuestion === question.id ? null : question.id,
                  )
                }
              >
                <div className="flex justify-between w-full text-black/70 font-bold">
                  <motion.div
                    className={cn("truncate", {
                      "text-octopost-primaryViolet":
                        activeQuestion === question.id,
                    })}
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{
                      opacity: activeQuestion === question.id ? 1 : 0.5,
                      scale: activeQuestion === question.id ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {question.id}.{question.question}
                  </motion.div>
                  <div className="transition-all">
                    {activeQuestion === question.id ? (
                      <MinusIcon />
                    ) : (
                      <PlusIcon />
                    )}
                  </div>
                </div>
              </button>
              <AnimatePresence>
                {activeQuestion === question.id && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2  max-w-[280px] sm:max-w-[530px]  text-gray-600 ml-4"
                  >
                    <p className="text-sm text-violet-950/50">
                      {question.answer}
                    </p>
                    <div className="transition-all w-full bg-gray-100 h-[2px]">
                      <div
                        className="mt-2 bg-gradient-to-r from-orange-300 via-purple-400 to-cyan-200 h-[2px]"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Accordion;
