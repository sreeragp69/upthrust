import type React from "react";

type ArrowDirection = "left" | "right" | "up" | "down";

interface ArrowButtonProps {
  direction?: ArrowDirection;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "filled" | "outline" | "ghost";
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  asIcon?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction = "left",
  size = "md",
  color = "text-gray-600",
  backgroundColor = "bg-transparent",
  borderColor,
  asIcon = false,
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
}) => {
  // Size configs
  const sizeClasses = {
    sm: "w-5b h-5b",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const arrowSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
  };

  const arrowRotations = {
    left: "rotate-180",
    right: "rotate-0",
    up: "-rotate-90",
    down: "rotate-90",
  };

  const WavyBorder = ({
    size,
    borderColor,
    backgroundColor,
  }: {
    size: string;
    borderColor?: string;
    backgroundColor: string;
  }) => {
    const dimensions = {
      sm: { width: 32, height: 32, viewBox: "0 0 32 32" },
      md: { width: 40, height: 40, viewBox: "0 0 40 40" },
      lg: { width: 48, height: 48, viewBox: "0 0 48 48" },
      xl: { width: 64, height: 64, viewBox: "0 0 64 64" },
    };

    const { width, height, viewBox } =
      dimensions[size as keyof typeof dimensions];

    const points: string[] = [];
    const spikes = 18;
    const outerRadius = width / 2 - 2;
    const innerRadius = outerRadius * 0.7;
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < spikes; i++) {
      const angle = (i * 2 * Math.PI) / spikes;
      const nextAngle = ((i + 1) * 2 * Math.PI) / spikes;

      const outerX = centerX + Math.cos(angle) * outerRadius;
      const outerY = centerY + Math.sin(angle) * outerRadius;

      const innerX = centerX + Math.cos(angle + Math.PI / spikes) * innerRadius;
      const innerY = centerY + Math.sin(angle + Math.PI / spikes) * innerRadius;

      if (i === 0) {
        points.push(`M ${outerX} ${outerY}`);
      }

      points.push(
        `Q ${innerX} ${innerY} ${centerX + Math.cos(nextAngle) * outerRadius} ${
          centerY + Math.sin(nextAngle) * outerRadius
        }`
      );
    }
    points.push("Z");

    return (
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        className="absolute inset-0"
      >
        <path
          d={points.join(" ")}
          fill={
            backgroundColor === "bg-transparent"
              ? "transparent"
              : backgroundColor.replace("bg-", "")
          }
          stroke={borderColor?.startsWith("#") ? borderColor : "currentColor"}
          className={
            borderColor && !borderColor.startsWith("#") ? borderColor : ""
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    transition-all duration-200
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `;

  // 🔹 Common SVG (used in both icon + div modes)
  const ArrowIcon = (
    <svg
      className={`${arrowSizes[size]} ${
        arrowRotations[direction]
      } transition-transform duration-200 relative z-10 ${
        !color.startsWith("#") ? color : ""
      }`}
      fill={color.startsWith("#") ? color : "currentColor"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
    </svg>
  );

  // 🔹 If only icon (no click div wrapper)
  if (asIcon) {
    return (
      <span
        className={`${baseClasses} ${sizeClasses[size]} ${className}`.trim()}
      >
        <WavyBorder
          size={size}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
        />
        {ArrowIcon}
      </span>
    );
  }

  // 🔹 Replacing button → div (but keeps click, keyboard & accessibility)
  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-label={ariaLabel || `Arrow ${direction} button`}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
          onClick?.();
        }
      }}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`.trim()}
    >
      <WavyBorder
        size={size}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
      />
      {ArrowIcon}
    </div>
  );
};

export default ArrowButton;
