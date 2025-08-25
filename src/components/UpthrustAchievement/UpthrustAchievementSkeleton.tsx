import React from "react";
import AchievementCardSkeleton from "./AchievementCardSkeleton";

const UpthrustAchievementSkeleton = () => {
  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24 bg-themeBackgroundColor overflow-hidden animate-pulse">
      <div className="mx-auto px-3 lg:px-0 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-3 w-full gap-6 xs:gap-8 lg:gap-12">
          
          {/* Left content skeleton */}
          <div className="w-full mb-6 xs:mb-8 md:mb-0">
            <div className="flex flex-col items-start space-y-3 xs:space-y-4">
              {/* Title skeleton */}
              <div className="flex items-baseline flex-wrap gap-2">
                <div className="h-6 sm:h-7 md:h-8 lg:h-9 w-40 sm:w-56 md:w-64 rounded-md bg-gray-300" />
                <div className="h-16 xs:h-20 sm:h-24 md:h-28 lg:w-15 xl:h-20 bg-gray-300 rounded-lg" />
              </div>

              {/* Subtitle skeleton */}
              <div className="h-8 sm:h-10 lg:h-12 w-48 sm:w-64 md:w-80 rounded-md bg-gray-300" />

              {/* Description skeleton */}
              <div className="space-y-2">
                <div className="h-3 sm:h-4 w-56 sm:w-72 md:w-96 bg-gray-300 rounded-md" />
                <div className="h-3 sm:h-4 w-40 sm:w-64 md:w-72 bg-gray-300 rounded-md" />
              </div>
            </div>

            {/* Button skeleton */}
            <div className="mt-6 sm:mt-8">
              <div className="h-9 sm:h-10 w-28 sm:w-32 rounded-lg bg-gray-300" />
            </div>
          </div>

          {/* Right side cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-4 xs:gap-5 w-full lg:ml-5">
            {[1, 2, 3, 4].map((i) => (
              <AchievementCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpthrustAchievementSkeleton;
