import { m, motion } from "framer-motion";
import React from "react";
import Button from "../ui/button/Button";
const RightArrowIMg = "/images/icons/rightArrow.svg";




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
          className="text-themeGray font-bold text-xl sm:text-xl md:text-2xl 2xl:text-4xl leading-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Aims to provide Result-Oriented Training!!
        </motion.h1>
        <motion.p
          className="text-[#6D758F] text-xs xl:text-base 2xl:text-base tracking-[0.02em] lg:leading-5 2xl:leading-6 font-alexandria"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          With our experience of 11 years in Digital Marketing training and Game
          Development, With our experience of 11 years in Digital Marketing
          training. With our experience of 11 years in Digital Marketing
          training and Game Development, With our experience of 11 years in
          Digital Marketing training.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            children="More About"
            size="sm"
            className="py-2! px-4!  scale-90 md:scale-95 -ml-2 lg:ml-0 lg:scale-100 text-xs!"
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
