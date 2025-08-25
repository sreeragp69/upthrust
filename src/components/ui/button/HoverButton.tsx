import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: "primary" | "outline";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const HoverButton: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "h-[2.4em] text-xs px-4",
    md: "h-[2.8em] text-sm px-5",
  };

  // Variant Classes
  const variantClasses = {
    primary:
      "bg-themePrimary text-white shadow-theme-xs hover:bg-[#D7E7FF] hover:text-black hover:border-black",
    outline:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white",
  };

  return (
    <button
      className={clsx(
        `group relative py-5 rounded-full gap-3 font-semibold tracking-wide border justify-between 
         border-transparent hover:border-themePrimary group-hover:text-gray-400 flex items-center overflow-hidden 
         cursor-pointer transition-all duration-300`,
        sizeClasses[size],
        variantClasses[variant],
        disabled ? "cursor-not-allowed opacity-50" : "",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Start Icon */}
      {startIcon && <span className="mr-2 flex items-center">{startIcon}</span>}

      {/* Button text */}
      <span>{children}</span>

      {/* End Icon */}
      {endIcon && (
        <span
          className={clsx(
            `flex items-center justify-center rounded-full 
             transition-transform duration-300 ease-out 
             group-hover:translate-x-1 group-hover:-rotate-45 `
          )}
        >
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default HoverButton;
