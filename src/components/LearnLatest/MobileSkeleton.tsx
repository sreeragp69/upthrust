const MobileSkeleton = () => (
  <div className="animate-pulse w-full relative flex justify-center items-center gap-4">
    {/* First Phone */}
    <div className="w-48 sm:w-56 md:w-64 lg:w-72 h-96 sm:h-[24rem] md:h-[26rem] lg:h-[28rem] bg-gray-200 rounded-3xl relative shadow-inner">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-300 rounded-full"></div>
      {/* Screen inner placeholder */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] h-[88%] bg-gray-300 rounded-2xl"></div>
    </div>

    {/* Second Phone with realistic 3D rotation */}
    <div
      className="w-48 sm:w-56 md:w-64 lg:w-72 h-96 sm:h-[24rem] md:h-[26rem] lg:h-[28rem] bg-gray-200 rounded-3xl shadow-inner absolute -translate-x-6 right-0 top-7"
      style={{
        transform: "rotateY(-25deg) rotateX(5deg) rotateZ(5deg)",
      }}
    >
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-300 rounded-full"></div>
      {/* Screen inner placeholder */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] h-[88%] bg-gray-300 rounded-2xl"></div>
    </div>

    {/* Background blur circle */}
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-56 bg-gray-300 rounded-full -z-10 blur-lg"></div>
  </div>
);


export default MobileSkeleton;