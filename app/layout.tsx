import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay Charwekar",
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
      <body className={`${montserrat.className} bg-slate-900 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
