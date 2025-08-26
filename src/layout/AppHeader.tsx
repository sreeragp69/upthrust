import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebar } from "../context/SidebarContext";
import { Link } from "react-router";
import { AppHeaderProps } from "../types/AppHeader.type";
import AppHeaderData from "../constant/AppHeader.data";

import ActionButtons from "../components/AppHeader/NavItems";
import AppLogo from "../components/AppHeader/AppLogo";
import Button from "../components/ui/button/Button";

/* -------------------- Mobile Menu Button -------------------- */

const MobileMenuButton: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => (
  <AnimatePresence>
    <div
      className={`flex items-center ${
        isOpen && "rounded-full bg-gray-100"
      } p-2   lg:hidden order-last`}
    >
      <div className="relative">
        <div id="menuToggle" className="lg:hidden">
          <input
            id="checkbox"
            type="checkbox"
            onChange={onToggle}
            checked={isOpen}
            readOnly
            className="hidden"
          />
          <label
            htmlFor="checkbox"
            className="relative w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
          >
            {/* Top Line */}
            <span
              className={`absolute block w-full h-[3px] bg-gray-600  transition-all duration-300 ${
                isOpen ? "rotate-45 scale-80 " : "-translate-y-[6px]"
              }`}
            />
            {/* Bottom Line */}
            <span
              className={`absolute block w-full h-[3px] bg-gray-600  transition-all duration-300 ${
                isOpen ? "-rotate-45 scale-80 " : "translate-y-[6px]"
              }`}
            />
          </label>
        </div>
      </div>
    </div>
  </AnimatePresence>
);

/* -------------------- AppHeader -------------------- */
const AppHeader: React.FC<AppHeaderProps> = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();
  const [active, setActive] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 hidden lg:flex p-2  bg-themeBackgroundColor z-[999999]"
      >
        <div className="mx-auto max-w-(--breakpoint-2xl) w-full">
          <div className="flex flex-col items-center justify-between w-full px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-between w-full gap-4 py-4 lg:py-5"
            >
              {/* Logo */}
              <AppLogo />

              {/* Navigation Links */}
              <ActionButtons
                AppHeaderData={AppHeaderData}
                setActive={setActive}
                active={active}
              />

              <div className=""></div>
            {/* <div className=""></div> */}

              {/* Right Side Auth Buttons */}
              {/* <motion.div
                className="hidden sm:flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/login"
                    className="  lg:px-7 lg:py-2 xl:px-9 xl:py-2.5  2xl:px-11 2xl:py-3.5 text-sm font-normal font-alexandria bg-themePrimary text-white border border-themePrimary rounded-full hover:text-shadow-2xs   hover:bg-themePrimary/90 transition-all duration-200"
                  >
                    Login
                  </Link>
                </motion.div>

                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/signup"
                    className="  lg:px-7 lg:py-2 xl:px-9 xl:py-2.5  2xl:px-11 2xl:py-3.5  text-sm font-normal font-alexandria text-themePrimary bg-white border border-themePrimary rounded-full hover:bg-blue-50 hover:text-themePrimary transition-all duration-200"
                  >
                    Sign up
                  </Link>
                </motion.div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <div
        className={`sticky lg:hidden p-5 pt-6 flex ${
          isMobileOpen ? "justify-end" : "justify-between"
        } mx-auto max-w-(--breakpoint-2xl) z-[999999]`}
      >
        {!isMobileOpen && (
          <div className="self-end ease-in-out duration-300">
            <AppLogo />
          </div>
        )}
        <MobileMenuButton
          isOpen={isMobileOpen}
          onToggle={toggleMobileSidebar}
        />
      </div>
    </>
  );
};

export default AppHeader;
