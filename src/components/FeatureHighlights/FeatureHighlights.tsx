"use client";

import { useEffect, useState } from "react";
import { features } from "../../constant/FeatureHighlights.data";

type Feature = {
  id: number;
  text: string;
  bgColor: string;
};

export function FeatureHighlights() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto">
      <div className="lg:mt-20 mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 px-3 lg:px-0">
          {loading
            ? features.map((feature: Feature) => (
                <FeatureBadgeSkeleton
                  key={feature.id}
                  bgColor={feature.bgColor}
                />
              ))
            : features.map((feature: Feature) => (
                <FeatureBadge
                  key={feature.id}
                  text={feature.text}
                  bgColor={feature.bgColor}
                />
              ))}
      </div>
    </div>
  );
}

type FeatureBadgeProps = {
  text: string;
  bgColor: string;
};

function FeatureBadge({ text, bgColor }: FeatureBadgeProps) {
  const [imgSrc, setImgSrc] = useState("images/icons/shieldCheck.svg");

  return (
    <div
      className="flex  items-center  justify-center gap-4   rounded-full font-alexandria px-10  py-5 lg:px-6  shadow-sm"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={imgSrc}
        alt="icon"
        className="w-5 "
        onError={() => setImgSrc("/images/error/fallback.png")}
      />
      <span className=" text-base text-left lg:text-base 2xl:text-xl font-medium text-[#343339] ">{text}</span>
    </div>
  );
}

type FeatureBadgeSkeletonProps = {
  bgColor: string;
};

/* Skeleton with matching bgColor + layout */
function FeatureBadgeSkeleton({ bgColor }: FeatureBadgeSkeletonProps) {
  return (
    <div
      className="flex items-center justify-center gap-2 rounded-full font-alexandria px-10 py-4 shadow-sm animate-pulse"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-5 h-5 bg-white/50 rounded" />
      <div className="h-5 w-24 bg-white/50 rounded" />
    </div>
  );
}
