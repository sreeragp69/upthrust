import { useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  BookOpenIcon,
  GraduationCapIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";
import { useSelector } from "react-redux";
import AppHeaderData from "../constant/AppHeader.data";

interface RootState {
  auth: {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    } | null;
    token: string | null;
  };
}

const AppSidebar: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();
  const location = useLocation();

  const currentUser = useSelector((state: RootState) => state.auth.user);
  const role = currentUser?.role || "Student";

  const isActive = useCallback(
    (path: string) => {
      if (!path) return false;
      if (location.pathname === path) return true;
      const normalized = path.endsWith("/") ? path.slice(0, -1) : path;
      return location.pathname.startsWith(`${normalized}/`);
    },
    [location.pathname]
  );

  const handleNavClick = () => {
    if (isMobileOpen) toggleMobileSidebar();
  };

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    handleNavClick(); // close sidebar if mobile

    // Check if it's an in-page anchor
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.replace("#", "");
      const element = document.getElementById(targetId);
      const headerOffset = 80; // Adjust based on your header height
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <aside
      className={`fixed pt-3 flex flex-col top-0 right-0 h-full z-999999  overflow-y-hidden w-[300px] 
        bg-themeBackgroundColor shadow-xl border-l border-gray-100
        transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "translate-x-full"} 
        lg:hidden`}
    >
      <div className="flex-1   overflow-y-hidden ">
        <div className="px-6 space-y-6">
          <div>
            <h3 className="text-base  mt-6 mb-10 font-semibold text-gray-500 uppercase tracking-wide">
              Navigation
            </h3>
            <div className="space-y-2">
              {AppHeaderData.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => {
                    handleNavClick(); // keep your existing mobile sidebar toggle
                    // Smooth scroll for in-page anchors
                    if (item.path.startsWith("#")) {
                      e.preventDefault();
                      const targetId = item.path.replace("#", "");
                      const element = document.getElementById(targetId);
                      const headerOffset = 80; // adjust to your sticky header height
                      if (element) {
                        const elementPosition =
                          element.getBoundingClientRect().top;
                        const offsetPosition =
                          elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }
                  }}
                  className={`group flex items-center gap-4 px-4 py-3 rounded-md text-base font-medium relative transition-all duration-200
      ${
        isActive(item.path)
          ? "text-[var(--color-themePrimary)] font-semibold border-l-4 border-[var(--color-themePrimary)] bg-[var(--color-themeBackgroundColor)]"
          : "text-gray-700 hover:text-[var(--color-themePrimary)] hover:bg-white"
      }`}
                >
                  <span
                    className={`w-6 h-6 flex items-center justify-center transition-colors
        ${
          isActive(item.path)
            ? "text-[var(--color-themePrimary)]"
            : "text-gray-500 group-hover:text-[var(--color-themePrimary)]"
        }`}
                  >
                    {item.name === "Home" && <HomeIcon className="w-6 h-6" />}
                    {item.name === "About us" && (
                      <UsersIcon className="w-6 h-6" />
                    )}
                    {item.name === "Courses" && (
                      <BookOpenIcon className="w-6 h-6" />
                    )}
                    {item.name === "Batches" && (
                      <GraduationCapIcon className="w-6 h-6" />
                    )}
                    {item.name === "Blog" && (
                      <BookOpenIcon className="w-6 h-6" />
                    )}
                    {item.name === "Contact us" && (
                      <UsersIcon className="w-6 h-6" />
                    )}
                    {item.name === "Calendar" && (
                      <CalendarIcon className="w-6 h-6" />
                    )}
                  </span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
