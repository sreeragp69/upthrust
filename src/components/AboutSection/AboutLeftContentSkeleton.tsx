import { motion } from "framer-motion";

const AboutLeftContentSkeleton = () => {
  return (
    <motion.div
      className="flex items-center sm:col-span-2 lg:col-span-1"
    >
      <div className="flex flex-col gap-3 xl:gap-5 items-start w-full animate-pulse">
        {/* Title Skeleton */}
        <div className="h-5 lg:h-6 xl:h-7 w-40 lg:w-48 xl:w-56 bg-gray-200 rounded-md" />

        {/* Heading Skeleton */}
        <div className="h-6 sm:h-7 md:h-8 2xl:h-10 w-64 md:w-80 2xl:w-[28rem] bg-gray-200 rounded-md" />

        {/* Paragraph Skeleton */}
        <div className="space-y-2 w-full max-w-xl">
          <div className="h-3 xl:h-4 w-full bg-gray-200 rounded-md" />
          <div className="h-3 xl:h-4 w-11/12 bg-gray-200 rounded-md" />
          <div className="h-3 xl:h-4 w-10/12 bg-gray-200 rounded-md" />
          <div className="h-3 xl:h-4 w-9/12 bg-gray-200 rounded-md" />
        </div>

        {/* Button Skeleton */}
        <div className="mt-2">
          <div className="flex items-center gap-2 h-8 w-28 bg-gray-200 rounded-md" />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutLeftContentSkeleton;
