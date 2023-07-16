import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "./components/Header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio: Akshay Charwekar",
  description:
    "Portfolio of Akshay Charwekar - Senior Fullstack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${openSans.className} bg-gray-100 text-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
