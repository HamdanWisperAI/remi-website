"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Iphone15ProProps {
  className?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

export function Iphone15Pro({
  className,
  width = 300,
  height = 620,
  children,
}: Iphone15ProProps) {
  return (
    <div
      className={cn(
        "relative mx-auto bg-gray-900 rounded-[3rem] p-2 shadow-2xl",
        className
      )}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />
      
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-full z-10 flex items-center justify-center">
        <div className="w-16 h-1.5 bg-gray-800 rounded-full" />
      </div>

      {/* Screen */}
      <div
        className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white"
        style={{
          height: `${height - 16}px`,
        }}
      >
        {/* Content */}
        <div className="w-full h-full overflow-hidden">
          {children}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full" />
    </div>
  );
}

