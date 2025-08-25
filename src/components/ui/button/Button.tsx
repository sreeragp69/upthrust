import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  variant?: "primary" | "outline"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
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
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  // Variant Classes
  const variantClasses = {
    primary: "bg-themePrimary text-white shadow-theme-xs ",
    outline:
      "bg-transparent text-black ring-1 ring-inset font-alexandria text-gray-600! font  ring-gray-200! hover:bg-gray-50 ",
  };

  return (
    <button
      className={clsx(
        `rounded-full inline-flex font-alexandria   items-center justify-center gap-2  transition ${
          sizeClasses[size]
        } ${variantClasses[variant]} ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        }`,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
