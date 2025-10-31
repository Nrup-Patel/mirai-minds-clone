"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

export default function BottomBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-[9999] shadow-md transition-all duration-700 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      }`}
      style={{
        background: "linear-gradient(90deg, #eb940e 12%, #bc5a1b 36%)",
        fontFamily: '"Noto Serif JP", "Shippori Mincho", serif',
      }}
    >
      {/* Floating Character */}
      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 md:left-[9%] md:translate-x-0 pointer-events-none animate-float">
        <Image
          src="https://miraiminds.jp/wp-content/uploads/2024/09/mm-cta3s.png"
          alt="Mirai Minds Character"
          width={190}
          height={224}
          className="object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
          priority
        />
      </div>

      {/* Centered Content */}
      <div className="relative mx-auto flex flex-col md:flex-row items-center justify-center text-center gap-4 max-w-[1480px] px-6 py-5 md:py-4">
        {/* Text */}
        <p className="text-white text-lg md:text-xl leading-snug font-medium tracking-wide">
          Acquire skills that will connect your child to the future
        </p>

        {/* CTA Button */}
        <Link
          href="/join-us"
          className='rounded-full bg-gradient-to-br from-[#eb940e] to-[#e5c80d] text-[#0a0a0a] font-semibold text-sm md:text-base px-6 py-2 hover:brightness-105 transition tracking-wide'
          style={{ fontFamily: '"Shippori Mincho", serif' }}
        >
          Inquiry
        </Link>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-3 md:right-5 md:top-3 text-white hover:opacity-80 transition"
        aria-label="Close banner"
      >
        <X className="h-5 w-5 md:h-4 md:w-4" />
      </button>
    </div>
  );
}
