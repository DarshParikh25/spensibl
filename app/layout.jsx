import { Sora, Inter, JetBrains_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Spensibl — Own Your Money",
  description:
    "Financial Dashboard for Managing and Analyzing Your Personal Finances.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased scroll-smooth",
        inter.variable,
        sora.variable,
        mono.variable,
      )}
    >
      <body className={`min-h-full flex flex-col overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
