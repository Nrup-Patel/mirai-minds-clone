"use client";

import Image from "next/image";

const features = [
  {
    img: "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-f1.webp",
    title: "International",
    subtitle: "Education Approach",
    description:
      "We use international education methods that nurture communication, collaboration, and creativity.",
  },
  {
    img: "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-f2.webp",
    title: "Active",
    subtitle: "Learning Environment",
    description:
      "Our programs encourage students to actively participate, think independently, and express their ideas.",
  },
  {
    img: "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-f3.webp",
    title: "Comprehensive",
    subtitle: "Child Development",
    description:
      "We focus not only on academics but also on developing emotional intelligence and real-world skills.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-[url('https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-bg7.webp')] bg-no-repeat bg-bottom bg-cover overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto text-center mb-12 sm:mb-16">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <Image
            src="https://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-h1-1.png"
            alt="Mirai Minds Section Banner"
            width={280}
            height={140}
            className="object-contain w-[200px] sm:w-[260px] md:w-[320px]"
          />
        </div>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          Mirai Minds Features
        </h1>
      </div>

      {/* Scrollable wrapper for mobile */}
      <div className="overflow-x-auto md:overflow-visible">
        <div
          className="
            flex 
            md:grid 
            md:grid-cols-3 
            gap-6 sm:gap-8 
            max-w-[1200px] 
            mx-auto 
            md:justify-items-center 
            px-2 
            snap-x 
            snap-mandatory 
            md:snap-none
            scrollbar-hide
          "
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 
                w-[85%] 
                sm:w-[75%] 
                md:w-auto 
                bg-white/60 
                backdrop-blur-md 
                rounded-2xl 
                p-6 sm:p-8 
                flex flex-col 
                items-center 
                text-center 
                shadow-lg 
                transition-transform 
                hover:scale-[1.03] 
                hover:shadow-xl 
                snap-center
              "
            >
              <Image
                src={feature.img}
                alt={feature.title}
                width={260}
                height={260}
                className="mb-5 sm:mb-6 rounded-xl object-contain w-[70%]"
              />
              <h3
                className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-gray-900"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                {feature.title} <br /> {feature.subtitle}
              </h3>
              <p
                className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed max-w-[90%]"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
