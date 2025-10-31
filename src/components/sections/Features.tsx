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
      className="py-24 px-6 bg-[url('https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-bg7.webp')] bg-no-repeat bg-bottom bg-cover"
    >
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        {/* Section Banner Image */}
        <div className="mb-8 flex justify-center">
          <Image
            src="https://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-h1-1.png"
            alt="Mirai Minds Section Banner"
            width={320}
            height={150}
            className="object-contain"
          />
        </div>

        <h2
          className="text-3xl md:text-4xl font-semibold text-gray-900"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          Mirai Minds Features
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/30 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-transform transform hover:scale-105"
          >
            <Image
              src={feature.img}
              alt={feature.title}
              width={300}
              height={300}
              className="mb-6 rounded-xl object-contain"
            />
            <h3
              className="text-xl md:text-2xl font-semibold mb-3 text-gray-900"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              {feature.title} <br /> {feature.subtitle}
            </h3>
            <p
              className="text-base md:text-lg text-gray-800 leading-relaxed"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
