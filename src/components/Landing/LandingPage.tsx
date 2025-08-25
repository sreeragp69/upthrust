import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/button/Button";
import { testimonialImage } from "../../constant/Home.data";
import { GAME_DEV_CARDS } from "../../constant/Home.data";
import HomeCard from "../../components/Landing/HomeCard";
import HomeSwiper from "./InfiniteCards";
import LandingCardSwiper from "./LandingCardSwiper";
import DottedLineAnimation from "./DottedLineAnimation";
import AvatarStack from "./AvatarStack";
import UserFallback from '../../assets/images/error/userFallback.png';
import dots from '../../assets/images/carosel/dots.png';

const LandingPage: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div id="home"  className="min-h-screen bg-themeBackgroundColor mx-auto">
      <div className=" mt-10 mx-auto    flex flex-col items-center justify-center">
        <div className="relative text-center flex items-center justify-center flex-col w-full">
          {/* Mobile decorative dots only (removed gradient) */}

          <div className="uppercase relative w-full md:w-[60%] ]text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-themeGray"
            >
              Define a <br className="lg:hidden" /> new way for
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-themePrimary"
            >
              Job-Oriented
            </motion.h1>
            <div className="hidden lg:flex flex-col items-center w-fit absolute uppercase  lg:right-20  xl:right-40 lg:text-2xl xl:text-3xl 2xl:text-4xl -bottom-9 font-bold right-37 lg:scale-y-90 lg:px-7 lg:py-1 lg:-rotate-3 rounded-full justify-center text-white bg-[#55B700]">
              <h2 className="scale-y-110">Training</h2>
            </div>
          </div>
          <div className="hidden lg:block absolute lg:right-32 top-[20%] xl:right-40 lg:h-20 xl:h-28">
            <img
              className="h-full w-full"
              src={dots}
              alt="....."
            />

          </div>

          <div className="w-full flex flex-col  sm:flex-row items-center justify-center lg:hidden gap-6 mt-6 px-1.5">
            {/* Training text */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex lg:hidden rotate-0 md:relative flex-col md:flex-row items-center w-fit uppercase text-base px-5 py-2 font-bold rounded-full justify-center text-white bg-[#55B700] shadow-theme-xs"
            >
              <h2>Training</h2>
            </motion.div>

            {/* User Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="flex w-fit justify-center items-center flex-col  bg-white p-3 rounded-xl shadow-xl z-20 gap-1"
            >
              <p className="font-alexandria text-xs">20k+ Student Find Job!</p>
              <div className="flex -space-x-2">
                {testimonialImage.map((user: { id: number; image: string }) => (
                  <AvatarStack
                    key={user.id}
                    index={user.id}
                    size={28}
                    fallback={UserFallback}
                    avatars={user}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* User Avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            className=" hidden lg:flex w-fit justify-center absolute right-0 items-center flex-col top-[20%] lg:rotate-3 lg:scale-90 bg-white p-3 rounded-xl shadow-xl z-20 gap-1"
          >
            <p className="font-alexandria text-xs">20k+ Student Find Job!</p>
            <div className="flex -space-x-2">
              {testimonialImage.map(
                (user: { id: number; image: string }, index) => (
                  <AvatarStack
                    key={user.id}
                    index={index}
                    size={28}
                    fallback={UserFallback}
                    avatars={user}
                  />
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-center md:text-center font-alexandria text-[#727272] flex justify-center flex-col items-center mt-10 md:mt-20"
          >
            <p className="w-[86%] mb-3 lg:mb-0 md:w-[66%]">
              We empower aspiring creators and digital professionals with
              hands-on training, cutting-edge tools, and a collaborative
              community to bridge the gap between learning and real-world
              experience.
            </p>
            <p className="w-[80%] md:w-[80%]">
              Ready to become a confident, future-ready expert in Game
              Development, Digital Marketing, or Web & App Development? Learn,
              build, and grow with
              <span className="ml-6 lg:ml-0 text-themePrimary font-bold">
                {" "}
                THE UPTHRUST
              </span>{" "}
              — where skills meet opportunity.
            </p>
          </motion.div>
        </div>

        <LandingCardSwiper />

        <motion.div
          className=" hidden md:grid  justify-items-center   grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full mt-20 sm:mt-24 md:mt-28  lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <HomeCard
            id={GAME_DEV_CARDS[0].id}
            index={0}
            backgroundImage={GAME_DEV_CARDS[0].backgroundImage}
            subtitle={GAME_DEV_CARDS[0].subtitle}
            alt={GAME_DEV_CARDS[0].alt}
            characterTrue={GAME_DEV_CARDS[0].characterTrue}
            characterImage={GAME_DEV_CARDS[0].characterImage}
            
            tilt="left"
          />

          <HomeCard
            id={GAME_DEV_CARDS[1].id}
            index={1}
            backgroundImage={GAME_DEV_CARDS[1].backgroundImage}
            subtitle={GAME_DEV_CARDS[1].subtitle}
            alt={GAME_DEV_CARDS[1].alt}
            characterTrue={GAME_DEV_CARDS[1].characterTrue}
            characterImage={GAME_DEV_CARDS[1].characterImage}
            tilt="none"
          />

          <HomeCard
            id={GAME_DEV_CARDS[2].id}
            index={2}
            backgroundImage={GAME_DEV_CARDS[2].backgroundImage}
            subtitle={GAME_DEV_CARDS[2].subtitle}
            alt={GAME_DEV_CARDS[2].alt}
            characterTrue={GAME_DEV_CARDS[2].characterTrue}
            characterImage={GAME_DEV_CARDS[2].characterImage}
           
            tilt="right"
          />
        </motion.div>


        {/* Enhanced spacing and animation for swiper */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <HomeSwiper />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
