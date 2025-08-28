"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X } from "lucide-react";

type LinkItem = {
  id: number;
  href: string;
  icon: string;
  label: string;
};

const LINKS: LinkItem[] = [
  {
    id: 1,
    href: "http://in.linkedin.com/company/the-upthrust",
    icon: "/images/icons/linkedin-icon.svg",
    label: "LinkedIn",
  },
  {
    id: 2,
    href: "https://www.youtube.com/channel/UCZWKA9At-X8AcEr23e98CuA",
    icon: "/images/icons/yt-icon.svg",
    label: "Youtube",
  },
  {
    id: 3,
    href: "https://www.instagram.com/theupthrust/?hl=en",
    icon: "/images/icons/insta-icon.svg",
    label: "Instagram",
  },
  {
    id: 4,
    href: "https://www.facebook.com/TheUpThrustOfficial/",
    icon: "/images/icons/fb-icon.svg",
    label: "Facebook",
  },
  {
    id: 5,
    href: "https://in.pinterest.com/theupthrustofficial/",
    icon: "/images/icons/pinterest-icon.svg",
    label: "Pinterest",
  },
  {
    id: 6,
    href: "https://x.com/theupthrust",
    icon: "/images/icons/x-icon.svg",
    label: "X",
  },
];

const SocialHoverMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getLeftCircularPosition = (index: number, total: number) => {
    const angleStart = Math.PI * 0.4;
    const angleEnd = Math.PI * 1.6;
    const angleStep = (angleEnd - angleStart) / (total - 1);
    const angle = angleStart + index * angleStep;
    const radius = isMobile ? 70 : 100;

    return {
      x: Math.cos(angle) * radius - (isMobile ? 20 : 30),
      y: Math.sin(angle) * radius,
    };
  };

  const handleToggle = () => {
    if (isMobile) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div
      className={`fixed z-50 ${
        isMobile ? "right-5 top-1/2" : "right-6 top-1/2"
      } -translate-y-1/2`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleToggle}
    >
      <div className="relative flex flex-col items-center bg-transparent">
        {/* Main Trigger Button */}
        <motion.div
          className={`relative bg-gradient-to-r from-blue-500 to-themePrimary rounded-full  cursor-pointer 
    ${
      isMobile ? "p-3 w-12 h-12" : "p-4 w-16 h-16"
    } flex items-center justify-center`}
          whileHover={{ scale: isMobile ? 1 : 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            rotate: isHovered ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ rotate: isHovered ? -180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              key={isHovered ? "x" : "globe"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isHovered ? (
                <X className="text-white" />
              ) : (
                <Globe className="text-white" />
              )}
            </motion.div>
          </motion.div>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-themePrimary"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.7, 0, 0.7] : 0,
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <AnimatePresence>
          {isHovered && (
            <>
              {LINKS.map((link, index) => {
                const position = getLeftCircularPosition(index, LINKS.length);
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{
                      opacity: 0,
                      x: 0,
                      y: 0,
                      scale: 0.3,
                    }}
                    animate={{
                      opacity: 1,
                      x: position.x,
                      y: position.y,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: 0,
                      y: 0,
                      scale: 0.3,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    whileHover={{
                      scale: isMobile ? 1.1 : 1.2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`group absolute  rounded-full shadow-lg hover:shadow-xl transition-all duration-300  ${
                      isMobile ? "p-0" : "p-0"
                    }`}
                    style={{
                      transformOrigin: "center",
                    }}
                  >
                    <img
                      src={link.icon || "/placeholder.svg"}
                      alt={link.label}
                      className={`transition-transform duration-300 group-hover:scale-110 ${
                        isMobile ? "w-9 h-9" : "w-9 h-9"
                      }`}
                    />

                    {!isMobile && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute  text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none z-10"
                        style={{
                          right: position.x < 0 ? "auto" : "100%",
                          left: position.x < 0 ? "100%" : "auto",
                          top: "50%",
                          transform: "translateY(-50%)",
                          marginLeft: position.x < 0 ? "8px" : "0",
                          marginRight: position.x < 0 ? "0" : "8px",
                        }}
                      >
                        {link.label}
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 border-4 border-transparent ${
                            position.x < 0
                              ? "right-full border-r-gray-900"
                              : "left-full border-l-gray-900"
                          }`}
                        />
                      </motion.div>
                    )}
                  </motion.a>
                );
              })}
            </>
          )}
        </AnimatePresence>

        {/* Background overlay when hovered */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0  backdrop-blur-[1px] -z-10"
              transition={{ duration: 0.3 }}
              onClick={isMobile ? () => setIsHovered(false) : undefined}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SocialHoverMenu;
