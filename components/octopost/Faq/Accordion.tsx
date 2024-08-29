'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInterval } from 'usehooks-ts'
import MinusIcon from './assets/MinusIcon'
import PlusIcon from './assets/PlusIcon'

const Accordion = () => {
  const [progress, setProgress] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const [accordionOpenId, setAccordionOpenId] = useState(1)

  useInterval(() => {
    setProgress((prevProgress) => {
      let newProgress = prevProgress + 0.3
      if (newProgress >= 100) {
        setAccordionOpenId(accordionOpenId < 4 ? accordionOpenId + 1 : 1)
        newProgress = 0
      }
      return newProgress
    })
  }, 10)

  useEffect(() => {
    setActiveQuestion(accordionOpenId)
  }, [accordionOpenId])

  const questions = [
    {
      id: 1,
      question:
        'What is your name? ajdxwaiudxhawuixhdauwixhduaiwhdxuiawhdxuiaw',
      answer: 'shreyas',
    },
    {
      id: 2,
      question: 'What is your age?',
      answer: '22',
    },
    {
      id: 3,
      question: 'What is your hobby?',
      answer: 'coding',
    },
    {
      id: 4,
      question: 'What is your fav color?udhauwdhawuhduawhuahdauwhdawuhd',
      answer:
        'blackawuhduwahduawhzduawhdzuhawudhwaudxhawudxhwaudxhwaudhxawudhxxawudhwauhdxxauwh',
    },
  ]
  return (
    <>
      <div className="flex-center">
        <div className="max-w-[350px] rounded-lg sm:max-w-[600px]">
          <h1 className="mb-20 text-4xl font-bold text-octopost-primaryViolet">
            Perguntas Frequentes (FAQ)
          </h1>
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <button
                className="flex w-full items-center justify-center rounded-lg p-4 text-left text-xl focus:outline-none"
                onClick={() =>
                  setActiveQuestion(
                    activeQuestion === question.id ? null : question.id,
                  )
                }
              >
                <div className="flex w-full justify-between font-bold text-black/70">
                  <motion.div
                    className={cn('truncate', {
                      'text-octopost-primaryViolet':
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
                      height: 'auto',
                    }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 mt-2 max-w-[280px] text-gray-600 sm:max-w-[530px]"
                  >
                    <p className="text-sm text-violet-950/50">
                      {question.answer}
                    </p>
                    <div className="h-[2px] w-full bg-gray-100 transition-all">
                      <div
                        className="mt-2 h-[2px] bg-gradient-to-r from-orange-300 via-purple-400 to-cyan-200"
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
  )
}
export default Accordion
