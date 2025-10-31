"use client";

import { Mail, Car, MessageSquare, User } from "lucide-react";
import Image from "next/image";

export default function ApplicationProcess() {
  const steps = [
    {
      icon: <Mail className="w-7 h-7 text-[#060097]" />,
      title: "Choose a program",
      desc: "Browse our programs and choose a class that best suits your child's goals and interests.",
    },
    {
      icon: <Car className="w-7 h-7 text-[#060097]" />,
      title: "Book a consultation",
      desc: (
        <>
          Please fill in the form with your child's details and use the calendar
          to book a consultation. We will discuss your child's needs and schedule
          a trial lesson.
          <br />
          <strong className="font-semibold text-gray-900">
            Calendar Reservation{" "}
          </strong>
          <br />
          <a
            href="https://miraiminds.jp/join-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#eb940e] font-semibold underline hover:text-orange-500"
          >
            Inquiry Form
          </a>
        </>
      ),
    },
    {
      icon: <MessageSquare className="w-7 h-7 text-[#060097]" />,
      title: "Take a trial lesson",
      desc: "Participate in a trial lesson and experience the charm of Mirai Minds firsthand.",
    },
    {
      icon: <User className="w-7 h-7 text-[#060097]" />,
      title: "Sign up",
      desc: "After the trial lesson, you can decide whether to join. We will send you details by email, so please check. We look forward to spending time with you at Mirai Minds.",
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-24 px-6"
      style={{
        backgroundImage:
          "url('https://miraiminds.jp/wp-content/uploads/2024/09/mm-hp-bg10.webp')",
      }}
    >
      {/* Header */}
      <div className="text-center mb-20 max-w-[1400px] w-full">
        <Image
          src="https://miraiminds.jp/wp-content/uploads/2024/08/mm-hp-h4.png"
          alt="Application Process"
          width={300}
          height={150}
          className="mx-auto mb-6"
        />
        <h3
          className="text-3xl md:text-4xl font-semibold text-gray-900"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          Application process
        </h3>
        <p
          className="text-gray-700 mt-3 text-lg"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          Mirai Minds&apos; 4 steps!
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center space-y-24 max-w-[1400px] w-full px-4 md:px-10 mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2 z-0"></div>

        {steps.map((step, i) => (
          <div
            key={i}
            className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 z-10 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } w-full`}
          >
            {/* Icon marker */}
            <div className="bg-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 border-2 border-[#060097] z-10">
              {step.icon}
            </div>

            {/* Content */}
            <div
              className="bg-white shadow-md rounded-2xl p-8 w-full md:w-[45%]"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              <h4 className="text-2xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h4>
              <p className="text-gray-700 text-[16px] leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
