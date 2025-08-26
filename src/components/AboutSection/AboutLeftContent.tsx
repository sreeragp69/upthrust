import { m, motion } from "framer-motion";
import React from "react";
import Button from "../ui/button/Button";
import HoverButton from "../ui/button/HoverButton";
import RightArrowIMg from "../../assets/images/button/Pattern.svg";

interface AboutLeftContentProps {
  itemVariants: any;
}

const AboutLeftContent = ({ itemVariants }: AboutLeftContentProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center sm:col-span-2 lg:col-span-1"
    >
      <motion.div
        className="flex flex-col gap-3 xl:gap-5 items-start"
        variants={itemVariants}
      >
        <motion.h2
          className="text-[#343339] text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold font-nunito "
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          About The Upthrust
        </motion.h2>
        <motion.h1
          className="text-themeGray font-bold text-xl sm:text-xl md:text-2xl 2xl:text-4xl leading-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Result-Oriented Training, Backed <br /> by Experience!
        </motion.h1>
        <motion.p
          className="text-lightGray text-xs lg:text-[16px] xl:text-sm 2xl:text-sm  tracking-[0.02em] lg:leading-5 2xl:leading-6 font-alexandria"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          At The Upthrust, we bring over 14 years of expertise in defining the
          career trajectory of students with Game Development and Digital
          Marketing courses. Our focus has always been on delivering practical
          learning that backs students when they face real-world challenges.
          Industry training & internships are the two most valuable factors that
          make The Upthrust a unique choice among career enthusiasts.
          <br />
          We don’t just teach, we mentor, guide and provide hands-on exposure to
          ensure that every learner can confidently apply their skills in this
          cut-throat competitive world. From Game Design and Digital Marketing
          to Mobile App and Web Development, our certification courses are
          designed to help you grow and succeed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <HoverButton
            children="More About"
            className=" px-4!  scale-90 md:scale-95 -ml-2 lg:ml-0 lg:scale-100 text-xs!"
            endIcon={<RightArrowIcon />}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const RightArrowIcon = () => (
  <img alt="Arrrow" className="w-6" src={RightArrowIMg} />
);

export default AboutLeftContent;
