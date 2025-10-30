"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to pause the marquee on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Whether to reverse the direction of the marquee
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to show the marquee vertically
   * @default false
   */
  vertical?: boolean;
  /**
   * Speed of the marquee in seconds
   * @default 20s
   */
  duration?: number;
  /**
   * Repeat the content multiple times
   * @default 4
   */
  repeat?: number;
  /**
   * Class name for the wrapper
   */
  className?: string;
  /**
   * Children to render
   */
  children?: React.ReactNode;
}

export function Marquee({
  className,
  pauseOnHover = false,
  reverse = false,
  vertical = false,
  duration = 20,
  repeat = 4,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]",
        vertical && "flex-col",
        className
      )}
      style={
        {
          "--duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", vertical && "flex-col")}
            style={{
              animation: `marquee-${vertical ? "vertical" : "horizontal"} var(--duration) linear infinite`,
              animationDirection: reverse ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      <style>{`
        @keyframes marquee-horizontal {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
        @keyframes marquee-vertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(calc(-100% - var(--gap)));
          }
        }
        ${pauseOnHover ? `
          .group:hover div {
            animation-play-state: paused;
          }
        ` : ""}
      `}</style>
    </div>
  );
}

