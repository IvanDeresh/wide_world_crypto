import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import { wideworld } from "@/assets/img";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wide world",
  description: "Created by Ivan Deresh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
