"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      className="relative w-full text-white pt-[140px] pb-[100px] overflow-hidden"
      style={{ backgroundColor: "#BC5A1B", fontFamily: '"Noto Serif JP", serif' }}
    >
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none scale-y-[-1]">
  <svg
    className="w-full h-[60px]"
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffffff"
    viewBox="0 0 1600 200"
    preserveAspectRatio="none"
  >
    <path d="M-8,95.3C-8,95.3,189,2,398,2s604,184.7,800,184.7s412-91.4,412-91.4V271H-8V95.3z" />
    <path d="M1610,95.3c0,0-216,80-412,80c-98,0-245.8-40.5-395.1-80.9
      c149.4,46.2,297.1,92.3,395.1,92.3C1394,186.7,1610,95.3,1610,95.3z" />
  </svg>
</div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 px-6 md:px-10">
        {/* Column 1 — Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="https://miraiminds.jp/wp-content/uploads/2024/09/mm-f-lg1.png"
            alt="Mirai Minds Logo"
            width={270}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Column 2 — Quick Navigation */}
        <div>
          <h3 className="flex items-center gap-2 text-[18px] font-semibold mb-6">
            <ChevronRight className="h-5 w-5" /> Quick Navigation
          </h3>
          <ul className="space-y-3 text-white/90 text-[16px] leading-relaxed">
            {[
              ["Top", "/"],
              ["Class", "/live-classes"],
              ["In-school (on-site) program", "/in-school-programs"],
              ["About Mirai Minds", "/about-us"],
              ["Blog", "/blog"],
              ["Inquiry", "/join-us"],
            ].map(([label, link]) => (
              <li key={label}>
                <Link
                  href={link}
                  className="flex items-center gap-1 hover:underline transition"
                >
                  <ChevronRight className="h-4 w-4 text-white/70" /> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Address */}
        <div>
          <h3 className="flex items-center gap-2 text-[18px] font-semibold mb-6">
            <ChevronRight className="h-5 w-5" /> Address
          </h3>
          <p className="text-white/90 text-[16px] leading-relaxed">
            1F Bandari Building, 4-28-6
            <br />
            Taito, Taito-ku, Tokyo 110-0016
          </p>
        </div>

        {/* Column 4 — Inquiry */}
        <div>
          <h3 className="flex items-center gap-2 text-[18px] font-semibold mb-6">
            <ChevronRight className="h-5 w-5" /> Inquiry
          </h3>
          <p className="text-white/90 text-[16px] leading-relaxed">
            <a
              href="https://line.me/ti/p/koQd1B515F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline transition"
            >
              LINE
            </a>
            <br />
            <a
              href="mailto:hello@miraiminds.jp"
              className="text-white hover:underline transition"
            >
              hello@miraiminds.jp
            </a>
            <br />
            ☎ +81 70 2220{" "}
            <a
              href="tel:+817022204436"
              className="text-white hover:underline transition"
            >
              4436
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 text-center text-[15px] text-white/80 tracking-wide">
        © {new Date().getFullYear()} Mirai Minds. All Rights Reserved.
      </div>
    </footer>
  );
}
