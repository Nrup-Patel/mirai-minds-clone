"use client";

import Link from "next/link";

export default function SkillsSection() {
  return (
    // Outer Wrapper (consistent section spacing)
    <section className="relative w-full py-24 px-6">
      {/* Inner Rounded Background Container */}
      <div className="relative overflow-hidden rounded-[20px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-cta1.jpg')",
          }}
        />

        {/* Optional Decorative Overlay */}
        <div className="absolute inset-0 bg-white/0 pointer-events-none" />

        {/* Foreground Content */}
        <div className="relative flex flex-col items-start justify-center px-6 py-36 md:px-24 md:py-48">
          {/* Text Column */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
            <h2
              className="text-[42px] font-semibold text-left"
              style={{
                fontFamily: '"Noto Serif JP", serif',
                color: "#000000",
              }}
            >
              What skills do you need <br />
              to survive in this world ?
            </h2>

            <p
              className="text-[18px] text-left w-full max-w-[600px]"
              style={{
                fontFamily: '"Noto Serif JP", serif',
                color: "#000000",
              }}
            >
              We will help your child acquire skills that will help them achieve
              their future, tailored to their individual goals, interests, and
              style.
            </p>

            <div className="pt-4">
              <Link
                href="https://miraiminds.jp/join-us/"
                className="px-6 py-3 bg-[#000000] text-white text-lg font-medium rounded-full hover:bg-[#333333] transition"
              >
                Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
