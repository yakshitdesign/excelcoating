// src/components/Buttons/PrimaryButton.tsx
"use client";

import React from "react";

interface PrimaryButtonProps {
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

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
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
      className={`bg-black text-white rounded-md hover:bg-gray-800 overflow-hidden hover:shadow-none transition ${sizeClass} ${className}`}
      style={{ boxShadow: "0px 0px 0px 1px #0A0A0A, 0px 4px 10px -2px rgba(3, 7, 18, 0.25)" }}
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`bg-black text-white rounded-md hover:bg-gray-800 overflow-hidden hover:shadow-none transition ${sizeClass} ${className}`}
      style={{ boxShadow: "0px 0px 0px 1px #0A0A0A, 0px 4px 10px -2px rgba(3, 7, 18, 0.25)" }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
