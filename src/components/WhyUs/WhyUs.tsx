"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { whyUsData } from "../../constant/WhyUs.data";
import { WhyUsData } from "../../types/WhyUs.type";
import Fallback from "../../assets/images/error/fallback.png";

import Content from "../ui/Content/Content";
import StatisticCard from "./StatisticCard";
import {
  FeatureSkeleton,
  StatisticSkeleton,
  IllustrationSkeleton,
} from "./WhyUsSkeleton";
import ContentSkeleton from "../ui/skeletons/ContentSkeleton";

const WhyUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<WhyUsData | null>(null);
  const [imgError, setImgError] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(whyUsData);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-12">
        <div className=" mx-auto px-4">
          {/* Header Skeleton */}
          <div className="animate-pulse text-center sm:text-left mb-8 lg:mb-12">
            <div className="h-6 sm:h-8 lg:h-10 bg-gray-200 rounded w-1/3 mx-auto sm:mx-0 mb-3"></div>
            <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3 mx-auto sm:mx-0"></div>
          </div>

          {/* Grid Layout same as final */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Features (Desktop) */}
            <div className="hidden lg:block lg:col-span-3 space-y-4">
              {[...Array(3)].map((_, i) => (
                <ContentSkeleton key={i} />
              ))}
            </div>

            {/* Illustration Center */}
            <div className="lg:col-span-6 flex justify-center">
              <IllustrationSkeleton />
            </div>

            {/* Right Features + Stats */}
            <div className="lg:col-span-3 space-y-6">
              {/* Features (Mobile/Tablet) */}
              <div className="lg:hidden space-y-4">
                {[...Array(3)].map((_, i) => (
                  <ContentSkeleton key={i} />
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[...Array(4)].map((_, i) => (
                  <StatisticSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-8 sm:py-12 px-3 lg:px-0 lg:py-16 xl:py-20 overflow-hidden">
      <div className=" mx-auto  ">
        {/* Header */}
        <motion.div
          className="text-center sm:text-start  "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl leading-8 font-bold text-gray-900 mb-4">
            {data.mainTitle}
          </h2>
          <p className="text-lightGray text-xs lg:text-[16px] xl:text-sm 2xl:text-sm  tracking-[0.02em] lg:leading-5 2xl:leading-6 font-alexandria w-full sm:w-2/3 lg:w-1/2 xl:w-[45%] mx-auto sm:mx-0">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 items-start lg:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left Features (Desktop) */}
          <motion.div
            className="hidden lg:block lg:col-span-3 space-y-4"
            variants={itemVariants}
          >
            {data.features.map((f) => (
              <Content key={f.id} {...f} />
            ))}
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="lg:col-span-6 flex justify-center order-first lg:order-none mb-8 lg:mb-0 lg:-mt-10 xl:-mt-28"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-xs sm:max-w-s lg:max-w-md xl:max-w-lg mx-auto">
              <motion.img
                src={imgError ? Fallback : data.illustration.src}
                alt={data.illustration.alt}
                onError={() => setImgError(true)}
                className="w-full h-auto object-contain rounded-4xl relative z-10 mx-auto"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 lg:w-32 lg:h-32 bg-black/40 rounded-full blur-lg -z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Right Features + Stats */}
          <motion.div
            className="lg:col-span-3 lg:w-[110%] lg:-ml-14"
            variants={itemVariants}
          >
            <div className="space-y-6">
              {/* Features (Mobile/Tablet) */}
              <div className="lg:hidden space-y-4">
                {data.features.map((f) => (
                  <Content key={f.id} {...f} />
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {data.statistics.map((stat, i) => (
                  <motion.div
                    key={stat.id}
                    variants={itemVariants}
                    transition={{ delay: i * 0.1 }}
                  >
                    <StatisticCard statistic={stat} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
