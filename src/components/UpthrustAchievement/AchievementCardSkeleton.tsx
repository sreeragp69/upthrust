import React from "react";

const AchievementCardSkeleton = () => {
  return (
    <div className="relative bg-white rounded-3xl p-5 xs:p-6 sm:p-8 md:p-9 flex flex-col items-start w-full h-full animate-pulse">
      {/* Top icon */}
      <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-300 rounded-lg" />

      {/* Space for icon */}
      <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8" />

      {/* Title skeleton */}
      <div className="h-4 xs:h-5 sm:h-6 w-24 sm:w-32 md:w-40 bg-gray-300 rounded-md mb-2" />

      {/* Description skeleton */}
      <div className="space-y-2 w-full">
        <div className="h-3 sm:h-4 w-3/4 bg-gray-300 rounded-md" />
        <div className="h-3 sm:h-4 w-2/3 bg-gray-300 rounded-md" />
      </div>
    </div>
  );
};

export default AchievementCardSkeleton;
