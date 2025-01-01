import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TermlyCMP from "@/components/TermlyCMP/TermlyCMP";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Software Engineer Career Kickstart",
  description:
    "Learn how to write code properly and kick-start your career as a software engineer with one-to-one tailored coaching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <TermlyCMP />
        </Suspense>
        {children}
      </body>
      <GoogleAnalytics gaId="G-C23YSLN56P" />
    </html>
  );
}
