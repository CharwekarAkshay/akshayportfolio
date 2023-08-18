"use client";

import { motion } from "framer-motion";

const shakeAnimation = {
  shakeStart: {
    rotate: [-5, 5, -5, 5, -5, 5, 0],
    x: [-10, 10, -10, 10, -10, 10, 0],
    transition: {
      duration: 1,
    },
  },
  shakeEnd: {
    rotate: 0,
    x: 0,
    transition: {
      delay: 1,
    },
  },
};

const Home = () => {
  return (
    <section id="home" className="section flex items-center justify-center">
      <div className="flex flex-1 flex-col items-center justify-evenly space-y-7 md:flex-row">
        <div className="flex flex-col items-start justify-center space-y-2 md:items-center">
          <div className="flex space-x-2 text-2xl text-orange-500 lg:text-3xl xl:text-4xl">
            <div>Hi</div>
            <motion.div
              variants={shakeAnimation}
              initial="shakeEnd"
              animate="shakeStart"
            >
              👋
            </motion.div>
          </div>
          <div className="flex flex-row space-x-2 text-2xl text-orange-500 lg:text-3xl xl:text-4xl">
            <p>I am</p> <p className="font-bold">Akshay Charwekar</p>
          </div>
          <div className="text-md md:text-l flex flex-row justify-between space-x-0 text-slate-500 md:space-x-2">
            <p>I am Senior Full Stack Engineer</p>
            <p className="font-bold">@Agoda</p>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute -left-[4.813rem] -top-0 -z-10 h-[25rem] w-[25rem] bg-[url('../public/svg/profile_blob.svg')] md:-left-20 md:-top-16 md:h-[28rem] md:w-[28rem] lg:-left-24 lg:-top-20 lg:h-[30rem] lg:w-[30rem] xl:-left-20 xl:-top-16 xl:h-[30rem] xl:w-[30rem]"></div>
          <div className="relative h-[16rem] w-[16rem] bg-[url('../public/images/profile_pic.png')] bg-contain bg-center bg-no-repeat">
            <div className="absolute bottom-0 left-0 right-0  h-4 bg-gradient-to-b from-transparent via-transparent to-blue-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
