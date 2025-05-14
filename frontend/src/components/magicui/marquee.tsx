'use client';

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const containerWidth = container.offsetWidth;
    const contentWidth = content.offsetWidth / 2; // Divide by 2 since we duplicate content
    const duration = contentWidth * 0.03; // Slightly slower for smoother transition

    const animation = content.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(${reverse ? contentWidth : -contentWidth}px)` },
      ],
      {
        duration: duration * 1000,
        iterations: Infinity,
        easing: 'linear',
        fill: 'forwards',
      }
    );

    // Add a small delay before starting the animation
    setTimeout(() => {
      animation.play();
    }, 100);

    if (pauseOnHover) {
      container.addEventListener('mouseenter', () => {
        animation.pause();
        setIsPaused(true);
      });
      container.addEventListener('mouseleave', () => {
        animation.play();
        setIsPaused(false);
      });
    }

    return () => {
      animation.cancel();
      if (pauseOnHover) {
        container.removeEventListener('mouseenter', () => {});
        container.removeEventListener('mouseleave', () => {});
      }
    };
  }, [reverse, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex",
          isPaused && "cursor-pause",
          !isPaused && "cursor-default"
        )}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
} 