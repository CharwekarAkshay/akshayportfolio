"use client";
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";

export default function MainPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMovement = (event: MouseEvent) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  const radialGradientStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };

  return (
    <main className="relative">
      <div
        className="pointer-events-none fixed inset-0 transition duration-300 lg:absolute"
        style={radialGradientStyle}
      ></div>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
