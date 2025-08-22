import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type MenuItemProps = {
  item: string;
  active: string | null;
  setActive: (item: string | null) => void;
  children?: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  active,
  setActive,
  children,
}) => {
  const hasDropdown = children && React.Children.count(children) > 0;

  return (
    <div
      onMouseEnter={() => (hasDropdown ? setActive(item) : null)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      {hasDropdown ? (
        <motion.p
          transition={transition}
          className="cursor-pointer text-themeGray font-medium  uppercase tracking-wide  text-sm xl:text-base 2xl:text-lg  px-2 py-1 rounded-lg hover:text-themePrimary    transition-all duration-300"
        >
          {item}
        </motion.p>
      ) : (
        <Link
          to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-themeGray  uppercase tracking-wide font-medium  px-2 py-1 text-sm xl:text-base 2xl:text-lg rounded-lg hover:text-themePrimary   transition-all duration-300"
        >
          {item}
        </Link>
      )}

      {active === item && hasDropdown && (
        <div className="absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 pt-4 z-50">
          <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
          <div
            className="bg-white  backdrop-blur-x rounded-2xl overflow-hidden 
                 border border-white/30  shadow-2xl shadow-blue-500/10"
            onMouseEnter={() => setActive(item)}
            onMouseLeave={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={transition}
              className="w-max h-full  space-y-1"
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
