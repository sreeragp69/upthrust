export const FeatureSkeleton = () => (
  <div className="animate-pulse rounded-2xl p-4 sm:p-5 md:p-6">
    <div className="flex items-center  justify-center">
      <div className="h-8 sm:h-10 md:h-12  w-20  bg-gray-200 rounded-md mb-3 sm:mb-4"></div>
    </div>
    <div className="flex  flex-col items-center">
      <div className="h-4 sm:h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
      <div className="h-3 sm:h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
    </div>
  </div>
);

export const StatisticSkeleton = () => (
  <div className="animate-pulse bg-white rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg">
    <div className="h-6 sm:h-8 md:h-10 bg-gray-200 rounded-md mb-2 w-12 sm:w-16 mx-auto"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-20 mx-auto"></div>
  </div>
);

export const IllustrationSkeleton = () => (
  <div className="animate-pulse w-full flex justify-center relative">
    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gray-200 rounded-full"></div>
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-32 sm:h-32 bg-gray-300 rounded-full -z-10 blur-lg"></div>
  </div>
);
