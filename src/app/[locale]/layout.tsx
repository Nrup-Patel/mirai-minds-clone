import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// 🧱 Layout Components
import Header from "../../components/sections/Header";

// 🎨 Fonts
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "Mirai Minds Clone",
  description: "Pixel-perfect clone with Next.js 15 + shadcn + TailwindCSS",
};

// ✅ FIXED VERSION FOR NEXT.JS 15 TURBOPACK
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // ✅ Wait for params before using
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <body className="min-h-screen bg-background antialiased font-[var(--font-noto-sans-jp)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main>{children}</main>
            {/* 👇 Sticky Footer or Bottom Banner goes here */}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
