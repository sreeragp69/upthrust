import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FallbackChar } from "../../assets/images";
import fallback from "../../assets/images/error/fallback.png";

type HomeCardProps = {
  id: string;
  index: number;
  backgroundImage: string;
  subtitle: string;
  alt: string;
  characterTrue: boolean;
  characterImage?: string;
  tilt?: "left" | "right" | "none";
  loading?: boolean; // ✅ from parent
};

const HomeCard: React.FC<HomeCardProps> = ({
  id,
  index,
  backgroundImage,
  characterImage,
  alt,
  characterTrue,
  subtitle,
  tilt = "none",
  loading = false,
}) => {
  const rotateTarget = tilt === "left" ? -6 : tilt === "right" ? 6 : 0;
  const [hasScrolled, setHasScrolled] = useState(false);
  const [enableTilt, setEnableTilt] = useState(false);

  // ✅ Local image states
  const [bgLoaded, setBgLoaded] = useState(false);
  const [bgError, setBgError] = useState(false);
  const [charLoaded, setCharLoaded] = useState(false);
  const [charError, setCharError] = useState(false);

  useEffect(() => {
    const check = () => setEnableTilt(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { amount: 0.35 });

  useEffect(() => {
    const onScroll = () => setHasScrolled(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-sm 2xl:max-w-(--breakpoint-2xl)">
        <div className="relative overflow-hidden rounded-3xl bg-skeletonPrimary shadow p-6 animate-pulse">
          <div className="h-64 w-full bg-skeletonPrimary/80 rounded-2xl mb-4"></div>
          <div className="h-6 w-1/2 bg-skeletonPrimary/80 rounded mb-2"></div>
          <div className="h-8 w-3/4 bg-skeletonPrimary/80 rounded"></div>
        </div>
      </div>
    );
  }

  // ✅ Once parent API finished, show actual card
  return (
    <div className="w-full  max-w-sm 2xl:max-w-(--breakpoint-2xl)">
      <motion.div
        ref={cardRef}
        key={id}
        initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: enableTilt && isInView && hasScrolled ? rotateTarget : 0,
        }}
        transition={{
          duration: isInView ? 0.1 : 0.8,
          // delay: index * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="relative overflow-visible h-[290px] sm:h-auto md:h-auto rounded-3xl cursor-pointer group"
      >
        {/* Background Container */}
        <div className="relative w-full h-full">
          {/* Loader while background is loading */}
          {!bgLoaded && !bgError && (
            <div className="absolute inset-0 flex items-center justify-center bg-skeletonPrimary rounded-4xl">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
            </div>
          )}

          {/* Show fallback if bg fails */}
          {bgError ? (
            <img
              src={fallback}
              alt="Background load failed"
              className="w-full h-full object-cover rounded-4xl"
            />
          ) : (
            <motion.img
              src={backgroundImage}
              alt="Game development background"
              className="w-full h-full object-cover object-center rounded-4xl"
              onLoad={() => setBgLoaded(true)}
              onError={() => setBgError(true)}
            />
          )}
        </div>

        {/* Character image */}
        {characterTrue && characterImage && (
          <>
            {charError && (
              <div className="absolute z-50 top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 lg:h-[314px] flex items-center justify-center">
                <img
                  src={FallbackChar}
                  alt="Character load failed"
                  className="h-12 w-12 object-contain"
                />
              </div>
            )}

            {!charError && (
              <motion.img
                src={characterImage}
                alt={alt}
                className={`absolute z-50 top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 lg:h-[314px] object-contain pointer-events-none ${
                  !charLoaded ? "hidden" : "block"
                }`}
                onLoad={() => setCharLoaded(true)}
                onError={() => setCharError(true)}
              />
            )}
          </>
        )}

        {/* Text Content */}
        <div className="absolute scale-80 md:scale-95 lg:scale-100 pb-8 bottom-0 left-0 right-0 px-8 sm:p-8 md:pl-6 lg:p-12 lg:pb-10 xl:pb-11 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white"
          >
            <motion.p
              className="text-base md:text-lg lg:text-xl font-light mb-1 tracking-wide drop-shadow-lg"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Become a
            </motion.p>
            <motion.p
              className="text-2xl md:text-2xl lg:text-4xl font-clash font-bold uppercase leading-tight tracking-tight drop-shadow-lg"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeCard;
