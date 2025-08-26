import React from "react";
import { motion } from "framer-motion";


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
];

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {LINKS.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className=" bg-white rounded-full shadow-lg text-themePrimary hover:text-white hover:bg-themePrimary transition-colors"
        >
          <img src={link.icon} alt={link.label} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialSidebar;
