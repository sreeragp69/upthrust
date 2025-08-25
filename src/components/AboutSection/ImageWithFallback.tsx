import { useState } from "react";
import clsx from "clsx";
import FallbackImage from "../../assets/images/error/fallback.png";
import { motion } from "framer-motion";

interface ImageWithFallbackProps {
  src: string;
  alt?: string;
  className?: string;
  fallback?: string; // Path to fallback image
}
const ImageWithFallback = ({
  src,
  alt,
  className,
  fallback = FallbackImage,
}: ImageWithFallbackProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden`}>
      {/* Show loader while image loads */}
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="loader">Loading...</span>
        </div>
      )}

      <motion.img
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        src={error ? fallback : src}
        alt={alt}
        className={clsx(
          `${loading ? "opacity-0" : "opacity-100"} 
     w-full h-full object-cover transition-opacity duration-300`,
          className
        )}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
};

export default ImageWithFallback;
