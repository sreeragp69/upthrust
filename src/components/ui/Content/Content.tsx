import clsx from "clsx";
import { motion } from "framer-motion";

interface ContentProps {
  id?: string;
  title: string;
  description: string;
  titleClass?: string;
  descriptionClass?: string;
  gap?: string;
}

const Content = ({
  title,
  description,
  id,
  titleClass,
  descriptionClass,
  gap,
}: ContentProps) => {
  return (
    <motion.div
      id={id}
      className={clsx("space-y-", gap)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h3
        className={clsx(
          `text-base text-left sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 leading-tight `,
          titleClass
        )}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className={clsx(
          `text-lightGray text-left  text-xs lg:text-[16px] xl:text-sm 2xl:text-sm  tracking-[0.02em] lg:leading-5 2xl:leading-6 font-alexandria`,
          descriptionClass
        )}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default Content;
