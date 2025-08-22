import React from "react";
import { Link } from "react-router";

type CourseItemProps = {
  title: string;
  description: string;
  href: string;
  src: string;
};

const CourseItem: React.FC<CourseItemProps> = ({
  title,
  description,
  href,
  src,
}) => {
  return (
    <Link
      to={href}
      className="flex items-center gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-sm   hover:shadow-blue-400/40 hover:shadow-sm transition-all duration-300"
    >
      <img
        src={src}
        width={90}
        height={55}
        alt={title}
        className="shrink-0 rounded-md shadow-sm"
      />
      <div className="space-y-0.5">
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <p className="text-xs text-gray-600 leading-snug line-clamp-2 max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CourseItem;
