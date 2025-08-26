"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { learnLatestData } from "../../constant/LearnLatest.data";
import {
  LearnLatestData,
  LearnLatestFeature,
  LearnLatestStatistic,
} from "../../types/LearnLatest.type";
import Button from "../ui/button/Button";
import Content from "../ui/Content/Content";
import MobileSkeleton from "./MobileSkeleton";
const RightArrowIMg = "/images/icons/rightArrow.svg";
import Fallback from "../../assets/images/error/fallback.png";
import learnlatest from "../../assets/images/home/learnlatest.png";
// Loading skeleton components
const FeatureSkeleton = () => (
  <div className="animate-pulse rounded-2xl p-4 sm:p-5 md:p-6">
    <div className="h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 bg-gray-200 rounded-md mb-3 sm:mb-4"></div>
    <div className="h-4 sm:h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
  </div>
);

// Main component
const LearnLatest: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<LearnLatestData | null>(null);
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
    // Simulate loading delay
    const timer = setTimeout(() => {
      setData(learnLatestData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-12 md:py-16 lg:py-24">
        <div className=" mx-auto">
          {/* Mobile/Tablet Header Skeleton */}
          <div className="mb-8 md:mb-10 lg:hidden animate-pulse text-center">
            <div className="h-8 md:h-10 bg-gray-200 rounded-md mb-4 w-3/4 sm:w-2/3 mx-auto"></div>
            <div className="space-y-2 w-full max-w-md mx-auto">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
            </div>
            <div className="h-10 w-32 bg-gray-200 rounded-md mt-6 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start lg:items-center mt-8 md:mt-10 lg:mt-12">
            {/* Desktop Header Skeleton */}
            <div className="hidden lg:block lg:col-span-3 animate-pulse">
              <div className="h-10 lg:h-12 bg-gray-200 rounded-md mb-4 w-3/4"></div>
              <div className="space-y-2 w-full lg:w-3/4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="h-10 w-32 bg-gray-200 rounded-md mt-6"></div>
            </div>

            {/* Center Illustration Skeleton */}
            <div className="col-span-1 md:col-span-2 lg:col-span-6 flex justify-center">
              <MobileSkeleton />
            </div>

            {/* Features Skeleton */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-6 md:space-y-8 w-full">
              {[...Array(3)].map((_, i) => (
                <FeatureSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className=" mx-auto ">
        {/* Title section - always visible, positioned at top on mobile/tablet */}
        <motion.div
          className="mb-8 md:mb-10 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center lg:text-start">
            <motion.h2
              className="text-xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl leading-8 font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {data.mainTitle}
            </motion.h2>
            <motion.p
              className="text-lightGray text-xs md:text-sm  lg:text-sm xl:text-base 2xl:text-base leading-relaxed lg:leading-snug xl:leading-relaxed font-alexandria"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {data.subtitle}
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                children="Contact Now"
                size="sm"
                className="py-2! px-4!  scale-90 md:scale-95 -ml-2 lg:ml-0 lg:scale-100 text-xs!"
                endIcon={<RightArrowIcon />}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start lg:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left side content - hidden on mobile/tablet, visible on desktop */}
          <motion.div
            className="hidden lg:block lg:col-span-3 space-y-4 xl:space-y-8"
            variants={itemVariants}
          >
            {/* Left content */}
            <motion.div className="text-start" variants={itemVariants}>
              <motion.h2
                className="text-xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl leading-8 font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {data.mainTitle}
              </motion.h2>
              <motion.p
                className="text-lightGray text-xs lg:text-[16px] xl:text-sm 2xl:text-sm  tracking-[0.02em] lg:leading-5 2xl:leading-5 font-alexandria w-full lg:w-[85%]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {data.subtitle}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                children="Contact Now"
                size="sm"
                className="py-2! px-4!   scale-90 md:scale-95 -ml-2 lg:ml-0 lg:scale-100 text-xs!"
                endIcon={<RightArrowIcon />}
              />
            </motion.div>
          </motion.div>

          {/* Center illustration - order first on desktop, centered on all screens */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-6 flex justify-center order-none"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.img
                src={imgError ? Fallback : data.illustration.src}
                onError={() => setImgError(true)}
                alt={data.illustration.alt}
                className="w-full h-auto rounded-4xl max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg object-contain relative z-10 mx-auto"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>

          {/* Right side features */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 xl:space-y-8"
            variants={itemVariants}
          >
            <motion.div
              className="text-center md:text-left lg:text-left"
              variants={containerVariants}
            >
              {data.features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className="mb-6 md:mb-8"
                  variants={itemVariants}
                >
                  <Content
                    id={feature.id}
                    title={feature.title}
                    description={feature.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const RightArrowIcon = () => (
  <img alt="Arrrow" className="w-6" src={RightArrowIMg} />
);

export default LearnLatest;
