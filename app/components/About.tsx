import React from "react";
import { Carousel } from "./Carousel";

const About = () => {
  return (
    <section
      id="about"
      className="section flex flex-col items-stretch justify-center gap-10"
    >
      <div className="section-heading">
        About
        <div className="h-[2px] w-full flex-1 bg-blue-400 rounded"></div>
      </div>
      <div className="flex flex-col-reverse items-stretch justify-center gap-10 lg:flex lg:flex-row">
        <div className="flex-1">
          <div className="relative h-[15rem] w-full overflow-clip rounded-xl md:h-[30rem] lg:h-[35rem] lg:w-[55rem]">
            <Carousel />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center space-y-3 text-slate-500">
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
            travel 🌊 🏔️.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
