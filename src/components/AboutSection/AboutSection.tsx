import { motion } from "framer-motion";
import AboutLeftContent from "./AboutLeftContent";

import { useEffect, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

const AboutSection = () => {
  const [loading, setLoading] = useState(false);
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
    setTimeout(() => {
      setLoading;
    }, 1500);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <motion.section
      className="mx-auto w-full  py-8 xs:py-10 px-3 lg:px-0 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div
        className=" mx-auto  lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 py-5"
        variants={containerVariants}
      >
        {/* Left Text Section */}
        <AboutLeftContent itemVariants={itemVariants} />

        {/* Middle Images */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col h-full justify-center sm:col-span-2 md:col-span-1"
        >
          <motion.div
            className="w-full h-full overflow-hidden rounded-2xl  shadow-theme-xs"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              className="w-full h-auto object-cover"
              src="images/svg/aboutSecimg1.png"
              alt="About section main"
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-6"
            variants={containerVariants}
          >
            <motion.div
              className="w-full h-full overflow-hidden rounded-2xl  shadow-theme-xs"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                className="w-full h-full object-cover"
                src="images/svg/aboutSecimg2.png"
                alt="About section secondary 1"
              />
            </motion.div>
            <motion.div
              className="w-full h-full overflow-hidden rounded-2xl  shadow-theme-xs"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                className="w-full h-full object-cover"
                src="images/svg/aboutSecimg3.png"
                alt="About section secondary 2"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center h-full sm:col-span-2 md:col-span-1 lg:col-span-1"
        >
          <motion.div
            className="w-full overflow-hidden rounded-2xl  shadow-theme-xs h-full"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              className="w-full h-full object-cover"
              src="/images/svg/aboutSecimg4.png"
              alt="About section illustration"
             
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
