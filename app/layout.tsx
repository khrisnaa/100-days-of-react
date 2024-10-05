import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from "@/libs/react-lenis";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "100 Days of React Challenge",
  description: "Welcome to the 100 Days of React challenge! 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactLenis>
  );
}
