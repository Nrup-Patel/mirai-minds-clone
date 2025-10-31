import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Shippori_Mincho } from "next/font/google"; // 👈 Add this import
import BottomBanner from "@/components/BottomBanner";

const inter = Inter({ subsets: ["latin"] });
const shippori = Shippori_Mincho({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-shippori" });

export const metadata: Metadata = {
  title: "Mirai Minds Japan",
  description: "Cloned site using Next.js + shadcn + TypeScript + TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <BottomBanner /> {/* 👈 Always visible */}
        </ThemeProvider>
      </body>
    </html>
  );
}
