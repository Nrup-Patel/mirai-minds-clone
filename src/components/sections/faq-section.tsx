"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const leftFAQs: FAQItem[] = [
  {
    question: "What age group is it aimed at?",
    answer:
      "Our programs are for children ages 3 to 16, with classes tailored to each age and developmental stage.",
  },
  {
    question: "What is the class structure and size?",
    answer:
      "There are usually 8 to 12 students in a class. This is the ideal size for children to actively engage in tasks, discussions, and develop collaborative relationships with their peers. Teachers provide individual feedback and children develop strong communication and problem-solving skills.",
  },
  {
    question: "What are the teachers like?",
    answer:
      "Our teachers are highly qualified professionals with a passion for education and a love for children, many of whom have degrees in education or child psychology, as well as specialist training in English, science, or the arts.",
  },
  {
    question: "How is the individual curriculum structured?",
    answer:
      "We begin with assessments, observations, and parental feedback to gauge your child's current skill level in reading, writing, speaking, and comprehension. The curriculum is tailored to your child's interests, strengths, and needs.",
  },
  {
    question: "What abilities will you develop?",
    answer:
      "In addition to academic ability, we develop skills required in society such as English communication, creativity, cooperation, and adaptability.",
  },
];

const rightFAQs: FAQItem[] = [
  {
    question: "How do you assess a child's progress?",
    answer:
      "We regularly monitor progress through report cards, meetings with teachers and parents, and ongoing feedback on performance and participation.",
  },
  {
    question: "How long is each program and how often are lessons?",
    answer:
      "Most programs run for 10–12 weeks, with lessons 1–2 times per week. Each session usually lasts 60–90 minutes.",
  },
  {
    question: "What happens if my child misses a class?",
    answer:
      "We offer makeup classes or provide learning materials to help your child catch up at their own pace.",
  },
  {
    question: "How do you deal with children who have strengths and weaknesses?",
    answer:
      "Our teachers adapt to various learning styles — visual, auditory, kinesthetic, and interactive — to meet each student's needs.",
  },
  {
    question: "What if I want to ask a teacher about my child's progress?",
    answer:
      "We offer regular parent meetings, email communication, and consultation windows where you can freely discuss your child's growth.",
  },
];

const AccordionItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left"
      >
        <h5
          className="text-lg font-medium"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          {item.question}
        </h5>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-800" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p
              className="pb-4 text-gray-700 leading-relaxed"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-24 px-6"
      style={{
        backgroundImage:
          "url('https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-bg6.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/0"></div>

      {/* Inner Container */}
      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            src="https://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-h5.png"
            alt="FAQ Header"
            className="mx-auto mb-6 w-[300px] h-auto"
          />
          <h2
            className="text-[36px] font-semibold"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            Frequently asked questions
          </h2>
          <p
            className="mt-4 text-[18px] max-w-[600px] mx-auto text-gray-800"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            Please see our frequently asked questions here. If you have any
            other questions or concerns about Mirai Minds, please feel free to
            contact us.
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {leftFAQs.map((item, index) => (
              <AccordionItem key={index} item={item} />
            ))}
          </div>
          <div>
            {rightFAQs.map((item, index) => (
              <AccordionItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
