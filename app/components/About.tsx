import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section flex items-center justify-center space-x-10 p-10"
    >
      <div className="flex-1">
        <div className="h-[30rem] w-[45rem] bg-green-500"> </div>
      </div>
      <div className="flex flex-col items-start justify-center space-y-3 text-slate-500">
        <p>
          Hello! I&apos;m Akshay, a passionate tech enthusiast who thrives on
          bringing ideas to life on the digital canvas. I embarked on my journey
          as a Frontend Engineer in 2019 and haven&apos;t looked back since.
        </p>
        <p>
          Currently, I hold the position of Senior Full Stack Software Engineer
          at Agoda, where I dedicate my efforts to crafting accessible,
          inclusive products and immersive digital experiences.
        </p>
        <p>
          Beyond my work, I take pleasure in experimenting with emerging
          technologies and nurturing my side projects. My off-screen pursuits
          include mastering the guitar 🎸 and courting new adventures through
          travel 🌊 🏔️.
        </p>
      </div>
    </section>
  );
};

export default About;
