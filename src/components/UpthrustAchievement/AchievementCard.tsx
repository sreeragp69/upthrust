// src/components/AchievementCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { AchievementCardProps } from "../../types/UpthrustAchievement.type";

const AchievementCard: React.FC<Omit<AchievementCardProps, "id">> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     
      
      whileHover={{ transition: { duration: 0.3 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-white rounded-3xl p-5 xs:p-6 hover:shadow-lg hover:shadow-gray-100  md:p-7 flex flex-col items-start w-full h-full"
    >
      {/* Top small image */}
      <motion.div
        className=" w-full h-40"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <img
          src={imageSrc}
          alt="achievement icon"
          className="w-full h-full rounded-3xl object-cover object-center"
        />
      </motion.div>

      {/* Spacing for the image */}
      <div className="mt-4 xs:mt-5 "></div>

      {/* Title */}
      <motion.h4
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-themePrimary text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-1 xs:mb-2 font-syne"
      >
        {title}
      </motion.h4>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lightGray text-xs lg:text-[16px] xl:text-sm 2xl:text-sm  tracking-[0.02em] lg:leading-5 2xl:leading-6 font-alexandria"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default AchievementCard;
