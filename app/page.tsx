import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <section id="introduction" className="section"></section>
      <section id="about" className="section"></section>
      <section id="experience" className="section"></section>
      <section id="projects" className="section"></section>
      <section id="contact" className="section"></section>
      <section id="footer" className="section bg-[url('../public/svg/endingwave.svg')] bg-no-repeat bg-bottom"></section>
    </main>
  );
}
