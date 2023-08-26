import React from "react";
import { Carousel } from "./Carousel";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { SiGithub, SiInstagram, SiLeetcode, SiLinkedin } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="section flex flex-col items-stretch justify-center gap-10"
    >
      <div className="section-heading">
        About
        <div className="h-[2px] w-full flex-1 rounded bg-orange-400"></div>
      </div>
      <div className="flex flex-col-reverse items-stretch justify-center gap-10 lg:flex lg:flex-row">
        <div className="flex-1">
          <div className="relative h-[15rem] w-full md:h-[30rem] lg:h-[35rem] lg:w-[55rem]">
            <Carousel />
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-center space-y-3 text-slate-400">
          <p>
            Hello! I&apos;m Akshay, a passionate tech enthusiast who thrives on
            bringing ideas to life on the digital canvas. I embarked on my
            journey as a Frontend Engineer in 2019 and haven&apos;t looked back
            since.
          </p>
          <p>
            Currently, I hold the position of Senior Full Stack Software
            Engineer at Agoda, where I dedicate my efforts to crafting
            accessible, inclusive products and immersive digital experiences.
          </p>
          <p>
            Beyond my work, I take pleasure in experimenting with emerging
            technologies and nurturing my side projects. My off-screen pursuits
            include mastering the guitar 🎸 and courting new adventures through
            travel 🌊 🏔️. I&apos;m also a certified scuba diver! 🤿
          </p>
          <p>
            <span className="font-semibold">Fun fact</span>: I always end up in
            extreme conditions when I travel.
          </p>
          <p>
            Follow me on my socials to stay updated with my latest adventures!
          </p>
          <div className="flex flex-row items-center justify-center space-x-4 py-6 text-xl">
            <a
              href="https://www.linkedin.com/in/akshay-charwekar/"
              target="_blank"
            >
              <BiLogoLinkedin className="cursor-pointer transition-all duration-200  hover:scale-150 hover:text-orange-400" />
            </a>
            <a href="https://github.com/CharwekarAkshay" target="_blank">
              <BiLogoGithub className="cursor-pointer transition-all duration-200  hover:scale-150 hover:text-orange-400" />
            </a>
            <a href="https://leetcode.com/AkshayCharwekar/" target="_blank">
              <SiLeetcode className="cursor-pointer transition-all duration-200  hover:scale-150 hover:text-orange-400" />
            </a>
            <a
              href="https://www.instagram.com/akshaycharwekar/"
              target="_blank"
            >
              <BiLogoInstagram className="cursor-pointer transition-all duration-200  hover:scale-150 hover:text-orange-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
