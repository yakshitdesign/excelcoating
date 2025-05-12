// src/components/Buttons/SecondaryButton.tsx
"use client";

import React from "react";

interface GhostButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-6 py-3",
};

const GhostButton: React.FC<GhostButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  size = "md",
}) => {
  const sizeClass = sizeClasses[size];
  return href ? (
    <a
      href={href}
      className={`text-primary hover:text-black rounded-md hover:bg-gray-100 transition ${sizeClass} ${className}`}
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`text-primary hover:text-black rounded-md hover:bg-gray-100 transition ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default GhostButton;
