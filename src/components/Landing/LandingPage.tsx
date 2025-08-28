import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Button from "../../components/ui/button/Button";
import { testimonialImage } from "../../constant/Home.data";
import { GAME_DEV_CARDS } from "../../constant/Home.data";
import HomeCard from "../../components/Landing/HomeCard";
import LandingCardSwiper from "./LandingCardSwiper";
import AvatarStack from "./AvatarStack";
import UserFallback from "../../assets/images/error/userFallback.png";
import dots from "../../assets/images/carosel/dots.png";
import SocialSidebar from "../common/SocialSidebar";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { HomeSwiperImages } from "../../constant/Home.data";


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
    <div id="home" className=" bg-themeBackgroundColor mx-auto ">
      <div className=" mt-32 lg:mt-14 mx-auto    flex flex-col items-center justify-center">
        <div className="relative text-center flex items-center justify-center flex-col w-full">
          {/* Mobile decorative dots only (removed gradient) */}
         
          <div className="uppercase relative w-full md:w-[60%] ]text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-themeGray"
            >
              Define a <br className="lg:hidden" /> new way for{" "}
              <span className="block text-3xl sm:text-4xl md:text-6xl font-bold text-themePrimary">
                Job-Oriented
              </span>
            </motion.h1>

            <div className="hidden lg:flex flex-col items-center w-fit absolute uppercase  lg:right-20  xl:right-40 lg:text-2xl xl:text-3xl 2xl:text-4xl -bottom-9 font-bold right-37 lg:scale-y-90 lg:px-7 lg:py-1 lg:-rotate-3 rounded-full justify-center text-white bg-[#55B700]">
              <span className="scale-y-110">Training</span>
            </div>
          </div>
          <div className="hidden lg:block absolute lg:right-32 top-[20%] xl:right-40 lg:h-20 xl:h-28">
            <img className="h-full w-full" src={dots} alt="....." />
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
              <span>Training</span>
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
              At
              <span className=" text-themePrimary font-bold">
                {" "}
                The Upthrust
              </span>
              , we believe learning should go beyond theory. Our certification
              courses in Game Development and Design, Digital Marketing, Web and
              App Development, and UI/UX are built to provide practical skills,
              industry insights and confidence to create something impactful.
            </p>
            <p className="w-[80%] md:w-[80%]">
              Whether you want to Design Games, master Digital Marketing or
              build powerful Apps and Websites. We provide the right guidance,
              tools and mentorship to help you grow. Join a community where
              creativity meets technology and turn your future into a Job ready
              career.
            </p>
          </motion.div>
        </div>
              <div className="container flex items-center justify-center   ">

        <LandingCardSwiper />
              </div>

     

        <motion.div
          className="hidden md:grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 2xl:gap-6 w-full mt-20 sm:mt-24 md:mt-28 lg:px-8 xl:px-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {GAME_DEV_CARDS.map((card, index) => (
            <TiltCard key={card.id} card={card} index={index} />
          ))}
        </motion.div>

        {/* Enhanced spacing and animation for swiper */}
        <motion.div
          className="container mt-2 md:mt-10 lg:mt-16 mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <InfiniteMovingCards
            items={HomeSwiperImages}
            direction="right"
            speed="slow"
            className="mb-8"
          />
        </motion.div>
      </div>
      <SocialSidebar />
    </div>
  );
};

// const TiltCard = ({ card, index }: any) => {
//   const ref = useRef(null);

//   // Track scroll progress of this card
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start center", "end center"],
//     // expands the scroll window (card enters → exits viewport center)
//   });

//   // Define tilt direction
//   const tiltDirection = index === 0 ? -12 : index === 1 ? 0 : 12;

//   // More tilt + keep tilt longer in middle of scroll
//   const rotate = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.7, 1], // 👈 wider range
//     [0, tiltDirection, tiltDirection, 0] // 👈 tilt holds between 30% - 70%
//   );

//   return (
//     <motion.div ref={ref} style={{ rotate }}>
//       <HomeCard
//         id={card.id}
//         index={index}
//         backgroundImage={card.backgroundImage}
//         subtitle={card.subtitle}
//         alt={card.alt}
//         characterTrue={card.characterTrue}
//         characterImage={card.characterImage}
//       />
//     </motion.div>
//   );
// };

const TiltCard = ({ card, index }: any) => {
  const ref = useRef(null);

  // Track scroll progress of this card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Define tilt direction
  const tiltDirection = index === 0 ? -12 : index === 1 ? 0 : 12;

  // Base rotate mapping
  const rawRotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, tiltDirection, tiltDirection, 0]
  );

  // Apply spring for bounce effect
  const rotate = useSpring(rawRotate, {
    stiffness: 200, // higher = snappier
    damping: 12, // lower = more bounce
    mass: 0.6, // adjust weight of motion
  });

  return (
    <motion.div ref={ref} style={{ rotate }}>
      <HomeCard
        id={card.id}
        index={index}
        backgroundImage={card.backgroundImage}
        subtitle={card.subtitle}
        alt={card.alt}
        characterTrue={card.characterTrue}
        characterImage={card.characterImage}
      />
    </motion.div>
  );
};

export default LandingPage;
