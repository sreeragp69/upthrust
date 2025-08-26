import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BlogPost } from "../../types/BlogSection.type";
import Fallback from "../../assets/images/error/fallback.png";
const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <motion.article
      className="overflow-hidden  border-gray-100 cursor-pointer flex flex-col"
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative rounded-4xl overflow-hidden flex-shrink-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={imageError ? Fallback : post.image || "/placeholder.svg"}
          alt={post.imageAlt}
          className={`w-full h-full object-cover ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {post.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="px-0 py-3 lg:py-6 flex-1 flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-xl sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl leading-8 font-bold text-gray-900 mb-1 lg:mb-4">
            {post.title}
          </h3>
          <p className="text-lightGray text-xs md:text-sm lg:text-sm xl:text-base  tracking-[0.02em] lg:leading-5 2xl:leading-6 font-alexandria line-clamp-2">
            {post.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
