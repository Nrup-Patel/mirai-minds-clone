"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaTrialSection() {
  return (
    <section className="relative w-full flex justify-center py-20 px-6">
      <div
        className="
          relative 
          w-full 
          max-w-[1480.8px] 
          h-[380px] 
          rounded-[20px] 
          overflow-hidden 
          shadow-[0_10px_16px_-6px_rgba(0,0,0,0.29)]
        "
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(228deg, rgba(255,191,15,0.88) 51%, rgba(235,148,14,0.82) 58%),
              url('https://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-cta2.jpg')
            `,
          }}
        />

        {/* Decorative Circles */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none"
          viewBox="0 0 800 315"
          preserveAspectRatio="none"
        >
          <g className="fill-[#ffffff33]">
            <circle cx="118.5" cy="112.5" r="84.5" />
            <circle cx="269" cy="173" r="53" />
            <circle cx="508" cy="94" r="53" />
            <circle cx="371" cy="60" r="60" />
            <circle cx="654" cy="137" r="60" />
            <circle cx="704.5" cy="48.5" r="19.5" />
            <circle cx="775" cy="38" r="9" />
            <circle cx="537.5" cy="184.5" r="26.5" />
            <circle cx="278" cy="84" r="16" />
            <circle cx="216.5" cy="35.5" r="24.5" />
            <circle cx="177.5" cy="225.5" r="19.5" />
            <circle cx="12.5" cy="185.5" r="12.5" />
            <circle cx="46.5" cy="28.5" r="12.5" />
            <circle cx="542.5" cy="238.5" r="12.5" />
            <circle cx="467.5" cy="165.5" r="12.5" />
            <circle cx="787.5" cy="172.5" r="12.5" />
            <circle cx="753" cy="113" r="22" />
            <circle cx="370.5" cy="177.5" r="30.5" />
            <circle cx="455" cy="247" r="41" />
            <circle cx="357" cy="290" r="25" />
            <circle cx="278" cy="253" r="8" />
            <circle cx="476" cy="20" r="8" />
            <circle cx="573" cy="138" r="8" />
            <circle cx="233" cy="100" r="8" />
            <circle cx="23" cy="63" r="5" />
            <circle cx="601.5" cy="46.5" r="30.5" />
          </g>
        </svg>

        {/* Foreground */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="
              text-[40px] 
              md:text-[52px] 
              font-serif 
              font-bold 
              leading-tight 
              mb-10 
              text-white 
              [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]
              drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]
            "
            style={{
              WebkitTextStroke: "1px transparent",
              backgroundImage: "linear-gradient(to right, #000, #333, #000)",
              WebkitBackgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Please try a trial lesson first!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="https://miraiminds.jp/join-us/"
              target="_self"
              aria-label="inquiry"
              className="
                inline-block 
                bg-[#BC5A1B]
                text-white 
                text-base md:text-lg
                font-serif 
                font-semibold
                px-10 
                py-3 
                rounded-full 
                border 
                border-[#BC5A1B]
                hover:bg-white 
                hover:text-[#BC5A1B]
                transition-colors 
                duration-300 
                shadow-md
              "
            >
              Inquiry
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
