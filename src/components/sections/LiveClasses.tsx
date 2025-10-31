"use client";

import Image from "next/image";
import Link from "next/link";

interface LiveClass {
  img: string;
  title: string;
  description: string[];
  link: string;
}

const liveClasses: LiveClass[] = [
  {
    img: "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-c1-2.webp",
    title: "Language & Conversation Classes",
    description: [
      "Communicating in English is extremely important in today's globalized world, but many Japanese students find it difficult.",
      "According to a 2019 survey, Japanese people's English proficiency ranked 53rd out of 100 countries, with issues including an emphasis on grammar over speaking and limited opportunities for practical practice.",
      "Mirai Minds' language and conversation classes develop students' ability to express themselves clearly and confidently through role-playing, presentations, and storytelling (student-participation reading aloud).",
      "Through this class, children will hone their group communication skills and the ability to succeed globally.",
    ],
    link: "https://miraiminds.jp/live-classes/",
  },
  {
    img: "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-c2-2.webp",
    title: "Thinking & Problem-Solving Classes",
    description: [
      "In a world facing various problems, critical thinking and problem-solving skills are more essential than ever.",
      "Mirai Minds' Thinking & Problem-Solving classes teach children to think for themselves, analyze situations and come up with their own solutions.",
      "Through hands-on projects, puzzles and real-world challenges, students are challenged with curiosity and confidence.",
      'Through this class, children will develop ways of thinking such as "asking questions," "seeking multiple perspectives," and "thinking logically."',
    ],
    link: "https://miraiminds.jp/live-classes/",
  },
  {
    img: "https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-c3-2.webp",
    title: "Creativity & Development Class",
    description: [
      "Mirai Minds believes that creativity is the key to innovation.",
      "Our Creativity & Development classes spark your child's imagination through art, design and invention projects, from eco-friendly ideas to building the city of the future.",
      "Students will experiment with different methods and develop an out-of-the-box way of thinking.",
      '"Have the courage to take on challenges, learn from your mistakes, and pursue your ideas."',
      "Through these activities, students will develop the skills to respond flexibly to future challenges and find creative solutions.",
    ],
    link: "https://miraiminds.jp/live-classes/",
  },
];

export default function LiveClasses() {
  return (
    <section
      className="relative w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-bg7.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 py-32 flex flex-col items-center justify-center">
        {/* ==================== HEADER AREA ==================== */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <Image
              src="https://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-h2-1.png"
              alt="A program to develop children's talents"
              width={300}
              height={150}
              className="mx-auto object-contain"
            />
          </div>

          <h2
            className="text-3xl md:text-4xl font-semibold text-gray-900"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            A program to develop children’s talents
          </h2>

          <p
            className="mt-6 text-base md:text-lg text-gray-800 leading-relaxed"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            We support brain development in preschool, elementary, and middle school students
            <br />
            through engaging activities and after-school programs.
          </p>
        </div>

        {/* ==================== CLASS CARDS ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1200px]">
          {liveClasses.map((cls, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col"
            >
              <Image
                src={cls.img}
                alt={cls.title}
                width={800}
                height={600}
                className="rounded-xl mb-6 w-full object-cover h-[220px]"
              />

              <h3
                className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                {cls.title}
              </h3>

              <div
                className="space-y-3 text-gray-800 text-base leading-relaxed mb-6"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                {cls.description.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href={cls.link}
                  target="_self"
                  className="inline-block text-sm md:text-base font-semibold bg-[#060097] text-white px-6 py-2 rounded-full hover:bg-[#1e1ebf] transition-all"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
