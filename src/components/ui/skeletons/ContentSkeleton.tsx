import clsx from "clsx";
import { motion } from "framer-motion";

interface ContentSkeletonProps {
  id?: string;
  titleClass?: string;
  descriptionClass?: string;
  gap?: string;
}

const ContentSkeleton = ({ id, titleClass, descriptionClass, gap }: ContentSkeletonProps) => {
  return (
    <motion.div
      id={id}
      className={clsx("space-y-", gap)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Title skeleton */}
      <div
        className={clsx(
          "h-6 sm:h-7 md:h-8 lg:h-8 xl:h-9 w-40 mb-3 sm:w-48 md:w-56 lg:w-60 xl:w-64 rounded-md bg-gray-200 animate-pulse",
          titleClass
        )}
      />

      {/* Description skeleton */}
      <div
        className={clsx(
          "space-y-2",
          descriptionClass
        )}
      >
        <div className="h-3 sm:h-4 w-5/6 rounded-md bg-gray-200 animate-pulse" />
        <div className="h-3 sm:h-4 w-4/6 rounded-md bg-gray-200 animate-pulse" />
        <div className="h-3 sm:h-4 w-3/6 rounded-md bg-gray-200 animate-pulse" />
      </div>
    </motion.div>
  );
};

export default ContentSkeleton;
