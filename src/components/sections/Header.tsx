"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";

import Logo from "../../../public/logo.svg";
import Facebook from "../../../public/facebook-icon.svg";
import Instagram from "../../../public/instagram-icon.svg";
import LinkedIn from "../../../public/linkdin-icon.svg";
import MenuIcon from "../../../public/menu-icon.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${
          scrolled ? "py-[10px]" : "py-[14px]"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-[5px] min-h-[74px]">
          {/* --- Left Section (Logo) --- */}
          <Link href="/" className="flex items-center" aria-label="Mirai Minds">
            <Image
              src={Logo}
              alt="Mirai Minds"
              width={150}
              height={50}
              priority
              className="h-auto w-[145px] md:w-[155px]"
            />
          </Link>

          {/* --- Right Section --- */}
          <div className="flex items-center gap-5">
            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="https://www.instagram.com/mirai.minds/"
                target="_blank"
                aria-label="Instagram"
                className="hover:opacity-80 transition"
              >
                <Image src={Instagram} alt="Instagram" width={22} height={22} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61559717374141"
                target="_blank"
                aria-label="Facebook"
                className="hover:opacity-80 transition"
              >
                <Image src={Facebook} alt="Facebook" width={22} height={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/mirai-minds/"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:opacity-80 transition"
              >
                <Image src={LinkedIn} alt="LinkedIn" width={22} height={22} />
              </Link>
            </div>

            {/* TEL Button */}
            <Link
              href="tel:+817022204436"
              className="hidden md:inline-block text-[15px] font-medium text-[#000] border border-[#ccc] px-[16px] py-[5px] rounded-[4px] hover:bg-gray-50 transition"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              TEL: +81 70 2220 4436
            </Link>

            {/* Inquiry Button */}
            <Link
              href="/join-us"
              className="hidden md:inline-block bg-[#EB940E] text-white text-[15px] font-semibold rounded-[10px] px-[22px] py-[8px] transition hover:opacity-90"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              inquiry
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open mobile menu"
              className="flex md:hidden"
            >
              <Image src={MenuIcon} alt="Menu" width={28} height={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
