"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Avatar = {
  id: number;
  image: string;
};

interface AvatarStackProps {
  avatars: Avatar;
  size?: number; // optional size, default 28px (w-7 h-7)
  fallback?: string; // optional fallback image
  index: number;
}

const AvatarStack: React.FC<AvatarStackProps> = ({
  avatars,
  size = 28,
  fallback,
  index,
}) => {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [error, setError] = useState<Record<number, boolean>>({});

  return (
    <motion.div
      key={avatars.id}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
      className="relative rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      {/* Loader */}
      {!loaded[avatars.id] && !error[avatars.id] && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full">
          <div className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error fallback */}
      {error[avatars.id] &&
        (fallback ? (
          <img
            src={fallback}
            alt="fallback"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-full text-[10px] text-gray-600">
            ?
          </div>
        ))}

      {/* Avatar image */}
      <img
        src={avatars.image}
        alt={`User ${avatars.id}`}
        className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${
          loaded[avatars.id] && !error[avatars.id] ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded((prev) => ({ ...prev, [avatars.id]: true }))}
        onError={() => setError((prev) => ({ ...prev, [avatars.id]: true }))}
      />
    </motion.div>
  );
};

export default AvatarStack;
