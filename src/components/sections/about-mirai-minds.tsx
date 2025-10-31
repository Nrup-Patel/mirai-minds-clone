"use client";

import Image from "next/image";
import Link from "next/link";

const aboutImages = [
  "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-ab1.webp",
  "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-ab2.webp",
  "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-ab3.webp",
  "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-ab4.webp",
  "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-ab5.webp",
  "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-ab6.webp",
];

export default function AboutMiraiMinds() {
  return (
    <section className="py-28 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto rounded-[24px] bg-gradient-to-b from-[#BC5A1B] to-[#A54410] text-white p-20 lg:p-28 shadow-xl relative overflow-hidden">
        {/* Title */}
        <div className="text-center mb-20">
          <h5
            className="uppercase tracking-widest text-sm text-yellow-200"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            ABOUT MIRAI MINDS
          </h5>
          <h2
            className="text-3xl md:text-4xl xl:text-5xl font-semibold mt-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            Develop not only academic ability but also interpersonal skills
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center mb-20">
          {aboutImages.map((src, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Mirai Minds About ${idx + 1}`}
                width={260}
                height={260}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div
          className="text-lg leading-relaxed text-white/95 text-center max-w-[1100px] mx-auto space-y-6"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          <p>
            In this rapidly changing world, children are expected to have not only academic ability but also human skills.
          </p>
          <p>
            Mirai Minds' programs in Tokyo help students develop skills such as international thinking, creativity, problem-solving, and communication.
          </p>
          <p>
            This allows students to grow not only academically but also emotionally and socially, enabling them to thrive in an ever-evolving world.
          </p>
          <p>
            Our school in Tokyo, Saitama, and Kanagawa offers "active learning" at an affordable price, developing your child's talents while respecting their individuality and potential.
          </p>
          <p>
            This program also promotes early brain development and cultivates global talent through a gradual process of gifted education that continues through kindergarten, elementary school, and junior high school.
          </p>
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="https://miraiminds.jp/about-us/"
            className="px-10 py-3 bg-white text-[#A54410] rounded-full font-semibold hover:bg-yellow-100 transition-all duration-300 text-lg"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
