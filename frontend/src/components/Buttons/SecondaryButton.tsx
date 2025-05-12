// src/components/Buttons/PrimaryButton.tsx
"use client";

import React from "react";

interface SecondaryButtonProps {
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

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
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
      className={`bg-white text-black rounded-md hover:bg-gray-100 border border-black transition ${sizeClass} ${className}`}
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`bg-white text-black rounded-md hover:bg-gray-100 border border-black transition ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
