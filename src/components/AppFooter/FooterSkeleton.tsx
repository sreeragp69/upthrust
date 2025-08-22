const FooterSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-6 sm:py-8 md:py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="h-8 sm:h-10 md:h-12 w-60 sm:w-72 md:w-80 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Company Info Skeleton */}
          <div className="space-y-4">
            <div className="h-12 sm:h-14 md:h-16 w-36 sm:w-40 md:w-48 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 sm:h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Links and Contact Skeleton */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            <div className="space-y-4">
              <div className="h-5 sm:h-6 w-20 sm:w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-3 sm:h-4 w-28 sm:w-32 bg-gray-200 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-5 sm:h-6 w-16 sm:w-20 bg-gray-200 rounded animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-3 sm:h-4 w-32 sm:w-36 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-1">
                  <div className="h-3 sm:h-4 w-36 sm:w-40 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 sm:h-4 w-40 sm:w-44 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 sm:h-4 w-44 sm:w-48 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Skeleton */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="h-5 sm:h-6 w-28 sm:w-32 bg-gray-200 rounded animate-pulse mb-4 sm:mb-6"></div>
            <div className="space-y-3 sm:space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 sm:h-12 bg-gray-200 rounded-xl animate-pulse"
                ></div>
              ))}
              <div className="h-10 sm:h-12 bg-gray-200 rounded-xl animate-pulse"></div>
              <div className="h-10 sm:h-12 bg-blue-200 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSkeleton