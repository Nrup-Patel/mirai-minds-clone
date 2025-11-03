"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "../icons/MenuIcon";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const menuLinks = [
  { label: "top", href: "/" },
  { label: "class", href: "https://miraiminds.jp/live-classes/" },
  { label: "In-school (on-site) program", href: "https://miraiminds.jp/in-school-programs/" },
  { label: "About Mirai Minds", href: "https://miraiminds.jp/about-us/" },
  { label: "Blog", href: "https://miraiminds.jp/blog/" },
  { label: "inquiry", href: "https://miraiminds.jp/join-us/" },
];

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background Overlay */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[99]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.aside
            key="drawer"
            className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-xl z-[100] flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Header Row (Close Button) */}
            <div className="flex items-center justify-end p-6 border-b border-gray-200">
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="transition hover:opacity-80"
              >
                <MenuIcon size={26} color="#BC5A1B" isClose />
              </button>
            </div>

            {/* Navigation Links */}
            <nav
              className="flex flex-col gap-5 px-8 py-10 text-left text-[17px] font-[400]"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              {menuLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className={`transition-colors ${
                    item.label === "top"
                      ? "text-[#ffcd57]"
                      : "text-[#a55a2b] hover:text-[#ffcd57]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
