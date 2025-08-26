import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/button/Button";
import AchievementCard from "./AchievementCard";
import { upthrustAchievementData } from "../../constant/UpthrustAchievement.data";
import ArrowButton from "../ui/button/ArrowButton";
import UpthrustAchievementSkeleton from "./UpthrustAchievementSkeleton";
const RightArrowIMg = "/images/icons/rightArrow.svg";
import trophy from '../../assets/images/home/trophy.png'
const UpthrustAchievement = () => {
  const { title, subtitle, description, buttonText, achievements } =
    upthrustAchievementData;
const [loading, setLoading] = useState(true);
 const [imgError, setImgError] = useState(false);
  // Animation variants
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  
  
  useEffect(() => {
    // Simulate fetching (replace with real API/data fetching)
    const timer = setTimeout(() => {
      
      setLoading(false);
    }, 1500); // show skeleton for 1.5s
    return () => clearTimeout(timer);
  }, []);

    if (loading) {
    return <UpthrustAchievementSkeleton />;
  }


  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24 bg-themeBackgroundColor overflow-hidden">
      <div className=" mx-auto px-3 lg:px-0 w-full">
        <motion.div
          className="flex flex-col lg:grid lg:grid-cols-3 w-full gap-6 xs:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="w-full mb-6 xs:mb-8 md:mb-0 "
            variants={itemVariants}
          >
            {/* Trophy div */}
            <motion.div
              className="flex flex-col items-start space-y-3 xs:space-y-4"
              variants={itemVariants}
            >
              
              <div className="flex items-baseline flex-wrap gap-2">
                <motion.h2
                  className="text-xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl leading-8 font-bold text-gray-900 "
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {title}
                </motion.h2>
                <motion.img
                  className="h-16 xs:h-20 sm:h-24 md:h-28  lg:w-15 xl:h-20  "
                  src={trophy}
                  alt="Trophy"

                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                />
              </div>
              <motion.h1
                className="text-2xl  md:text-2xl lg:text-4xl 2xl:text-4xl leading-8 font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {subtitle}
              </motion.h1>
              <motion.p
                className="text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base leading-relaxed lg:leading-snug xl:leading-relaxed font-alexandria text-[#6D758F]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {description}
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-4 xs:mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
                <Button
                children="Contact Now"
                size="sm"
                className="py-2! px-4!   scale-90 md:scale-95 -ml-2 lg:ml-0 lg:scale-100 text-xs!"
                endIcon={<RightArrowIcon />}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 lg:px-10  gap-4 xs:gap-5 w-full lg:ml-5"
            variants={containerVariants}
          >
            {achievements.map((achievement) => (
              <motion.div key={achievement.id} variants={itemVariants}>
                <AchievementCard
                  title={achievement.title}
                  description={achievement.description}
                  imageSrc={achievement.imageSrc}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


const RightArrowIcon = () => (
  <img alt="Arrrow" className="w-6" src={RightArrowIMg} />
);

export default UpthrustAchievement;
