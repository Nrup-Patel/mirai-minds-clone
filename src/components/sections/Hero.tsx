"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const carouselImages = [
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-11.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-1.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-2.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-3.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-10.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-4.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-6.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-5.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-7-1.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-8-1.png",
  "https://miraiminds.jp/wp-content/uploads/2024/11/mm-l-9-1.png",
];

interface Feature {
  img: string;
  title: string;
  subtitle: string;
  description: string;
}

const features: Feature[] = [
  {
    img: "http://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-p1.png",
    title: "The main focus is on the children!",
    subtitle: "Participatory lessons!",
    description:
      "From toddlers to junior high school students, child-centered, participatory activities stimulate imagination and promote brain development.",
  },
  {
    img: "http://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-p2.png",
    title: "Role-play",
    subtitle: "Fun",
    description:
      "By learning in accordance with real-world situations, students will learn how to solve problems and acquire the ability to put these solutions into practice.",
  },
  {
    img: "http://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-p3.png",
    title: "Achievement evaluation",
    subtitle: "System",
    description:
      "Our unique evaluation system allows you to regularly monitor your child's progress.",
  },
];

export default function Hero() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageSize, setImageSize] = useState(0);

  // Dynamic square size calculation
  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      const containerWidth = containerRef.current!.offsetWidth - 40;
      const minImageWidth = 150;
      const imagesPerView = Math.floor(containerWidth / minImageWidth) || 1;
      const size = containerWidth / imagesPerView;
      setImageSize(size);
    };

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // Carousel loop
  useEffect(() => {
    if (!trackRef.current || imageSize === 0) return;
    const track = trackRef.current;

    const pauseMs = 1000;
    const slideMs = 600;
    let step = 0;
    let isTransitioning = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const totalItems = carouselImages.length;

    const moveNext = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      step += 1;
      track.style.transition = `transform ${slideMs}ms ease`;
      track.style.transform = `translateX(${-step * imageSize}px)`;

      timeoutId = setTimeout(() => {
        isTransitioning = false;
        if (step >= totalItems) {
          track.style.transition = "none";
          step = 0;
          track.style.transform = `translateX(0px)`;
        }
      }, slideMs + pauseMs);
    };

    const interval = setInterval(moveNext, slideMs + pauseMs);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      clearInterval(interval);
    };
  }, [imageSize]);

  return (
    <>
      <section
        className="relative w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          minHeight: "860px",
          fontFamily: '"Noto Serif JP", serif',
        }}
      >
        {/* Inner content wrapper for spacing only */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="md:w-1/2 flex flex-col items-start md:items-start text-left space-y-6">
            <h5 className="text-[25px] font-medium tracking-[5.4px] uppercase text-[rgba(234,190,14,0.61)] font-nunito">
              MIRAI MINDS
            </h5>

            <h1
              className="text-[52px] font-extrabold text-white leading-[1.1] text-shadow-md"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              Next-generation education by educational experts:
              <br />
              Developing children&apos;s thinking skills
            </h1>

            <Link
              href="/join-us"
              className="inline-block bg-[#EB940E] text-white px-7 py-2.5 rounded-[10px] font-medium transition hover:opacity-90"
              style={{ fontSize: "16px", fontFamily: '"Noto Serif JP", serif' }}
            >
              inquiry
            </Link>
          </div>

          {/* Right: Image/illustration placeholder */}
          <div className="hidden md:block md:w-1/2" />
        </div>
      </section>

      {/* Marquee Section */}
      <section
        ref={containerRef}
        className="mx-auto relative overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "2933.620px",
          height: imageSize + 40,
          padding: "20px",
        }}
      >
        <div
          ref={trackRef}
          className="flex items-center"
          style={{ transform: "translateX(0px)" }}
        >
          {[...carouselImages, ...carouselImages].map((src, idx) => (
            <div
              key={idx}
              className="carousel-item flex-shrink-0 flex items-center justify-center rounded-lg bg-white"
              style={{
                width: `${imageSize}px`,
                height: `${imageSize}px`,
                marginRight: "0px",
              }}
            >
              <img
                src={src}
                alt={`carousel-${idx}`}
                className="max-w-full max-h-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* New Section After Marquee with Background Image */}
<section
  className="relative w-full min-h-[860px] bg-cover bg-center flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage:
      "url('https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-bg6.webp')",
  }}
>
  {/* Curved Bottom Shape */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[140px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#fff"
        fillOpacity="1"
        d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,149.3C840,160,960,224,1080,224C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>

  

  {/* Content Wrapper */}
  <div className="relative z-10 w-full max-w-[1480px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-16">

    {/* Left Column: Image */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <Image
        src="http://miraiminds.jp/wp-content/uploads/2024/10/mm-hp-f1-3.png"
        alt="Elementary school students participating in a program to develop thinking skills at an educational institution in Tokyo"
        width={550}
        height={550}
        className="rounded-[24px] w-[80%] md:w-[90%] lg:w-[500px] h-auto object-contain"
        priority
      />
    </div>

    {/* Right Column: Text + Button */}
    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
      <h2
        className="font-semibold leading-snug"
        style={{
          fontFamily: '"Noto Serif JP", serif',
          fontSize: "clamp(28px, 5vw, 56px)",
          color: "#BC5A1B",
        }}
      >
        You will come to <br className="hidden sm:block" />
        love English, <br className="hidden sm:block" />
        and that's why you <br className="hidden sm:block" />
        will improve.
      </h2>

      <p
        className="text-[16px] md:text-[18px] leading-relaxed"
        style={{
          fontFamily: '"Noto Serif JP", serif',
          color: "#000000",
        }}
      >
        Children will be enthralled by English education. The secret lies in our
        individualized curriculum, tailored to their interests and pace. Our
        unique approach keeps children motivated and connects them to their
        lives, helping them learn English efficiently.
      </p>

      <p
        className="text-[16px] md:text-[18px] leading-relaxed"
        style={{
          fontFamily: '"Noto Serif JP", serif',
          color: "#000000",
        }}
      >
        Personalized lessons help your child not only learn English, but also
        develop a love for it, leading to long-term growth.
      </p>

      <Link
        href="/about-us"
        className="inline-block mx-auto md:mx-0 rounded-[50px] border-2 border-black bg-white text-black font-semibold text-[16px] py-[8px] px-[24px] transition hover:opacity-90"
        style={{
          fontFamily: '"Noto Serif JP", serif',
        }}
      >
        Learn more
      </Link>
    </div>
  </div>
</section>


      {/* Skills Section with Rounded Background */}
      <section className="relative w-full py-24 px-6">
        {/* Wrapper for rounded background */}
        <div className="relative overflow-hidden rounded-[20px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-bg5.webp')",
            }}
          />

          {/* Decorative SVG Layer */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 315"
              preserveAspectRatio="none"
            >
              <g className="fl-shape-content">
                <circle
                  cx="118.5"
                  cy="112.5"
                  r="84.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle cx="269" cy="173" r="53" fill="rgba(255,255,255,0.1)" />
                <circle cx="508" cy="94" r="53" fill="rgba(255,255,255,0.1)" />
                <circle cx="371" cy="60" r="60" fill="rgba(255,255,255,0.1)" />
                <circle cx="654" cy="137" r="60" fill="rgba(255,255,255,0.1)" />
                <circle
                  cx="704.5"
                  cy="48.5"
                  r="19.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle cx="775" cy="38" r="9" fill="rgba(255,255,255,0.1)" />
                <circle
                  cx="537.5"
                  cy="184.5"
                  r="26.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle cx="278" cy="84" r="16" fill="rgba(255,255,255,0.1)" />
                <circle
                  cx="216.5"
                  cy="35.5"
                  r="24.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle
                  cx="177.5"
                  cy="225.5"
                  r="19.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle
                  cx="12.5"
                  cy="185.5"
                  r="12.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle
                  cx="46.5"
                  cy="28.5"
                  r="12.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle
                  cx="542.5"
                  cy="238.5"
                  r="12.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle
                  cx="467.5"
                  cy="165.5"
                  r="12.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle
                  cx="787.5"
                  cy="172.5"
                  r="12.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle cx="753" cy="113" r="22" fill="rgba(255,255,255,0.1)" />
                <circle
                  cx="370.5"
                  cy="177.5"
                  r="30.5"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle cx="455" cy="247" r="41" fill="rgba(255,255,255,0.1)" />
                <circle cx="357" cy="290" r="25" fill="rgba(255,255,255,0.1)" />
                <circle cx="278" cy="253" r="8" fill="rgba(255,255,255,0.1)" />
                <circle cx="476" cy="20" r="8" fill="rgba(255,255,255,0.1)" />
                <circle cx="573" cy="138" r="8" fill="rgba(255,255,255,0.1)" />
                <circle cx="233" cy="100" r="8" fill="rgba(255,255,255,0.1)" />
                <circle cx="23" cy="63" r="5" fill="rgba(255,255,255,0.1)" />
                <circle
                  cx="601.5"
                  cy="46.5"
                  r="30.5"
                  fill="rgba(255,255,255,0.1)"
                />
              </g>
            </svg>
          </div>

          {/* Content */}
          <div className="relative flex flex-col md:flex-row items-center gap-12 px-6 py-24">
            {/* Left Column: Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-6">
              {/* Heading - Centered */}
              <h2
                className="text-[42px] font-semibold text-center"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  color: "#FFFFFF",
                }}
              >
                Acquire the skills required <br />
                in society
              </h2>

              {/* Paragraphs - Left Aligned */}
              <p
                className="text-[18px] text-left w-full max-w-[600px]"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  color: "#000000",
                }}
              >
                At Mirai Minds in Tokyo, we incorporate every aspect of our
                curriculum to foster objective judgment, creativity,<br />
                communication, and teamwork.
              </p>
              <p
                className="text-[18px] text-left w-full max-w-[600px]"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  color: "#000000",
                }}
              >
                For example, in a collaborative project, children can create a
                community garden with their peers. Through this activity, children <br />
                learn to communicate ideas, think about environmental issues <br />
                from multiple perspectives, and solve problems.
              </p>
              <p
                className="text-[18px] text-left w-full max-w-[600px]"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  color: "#000000",
                }}
              >
                In addition, students will develop the ability to complete tasks
                by brainstorming solutions, presenting ideas, and working
                together as a team.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="http://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-f2-2.png"
                alt="Elementary school girls demonstrating cooperation at Mirai Minds"
                width={600}
                height={600}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

  
    <section
      className="py-24 px-6 bg-[url('https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-bg7.webp')] bg-no-repeat bg-bottom bg-cover w-[100vw] h-[120vh]"
    >
      {/* Title and Banner */}
      <div className="max-w-[1200px] mx-auto text-center mb-12">
        <div className="mb-6 flex justify-center">
          <Image
            src="https://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-h1-1.png"
            alt="Mirai Minds Section Banner"
            width={300}
            height={150}
            className="rounded-lg object-contain"
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
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/20 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-transform transform hover:scale-105"
          >
            <Image
              src={feature.img}
              alt={feature.title}
              width={260}
              height={260}
              className="mb-4 rounded-lg object-contain"
            />
            <h3
              className="text-xl font-semibold mb-2 text-gray-900"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              {feature.title} <br /> {feature.subtitle}
            </h3>
            <p
              className="text-base text-gray-800 leading-relaxed"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>




      <style jsx>{`
        .text-shadow-md {
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.23);
        }
        img {
          -webkit-user-drag: none;
          user-drag: none;
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>
    </>
  );
}
