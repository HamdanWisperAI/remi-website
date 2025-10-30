"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SafariProps {
  className?: string;
  url?: string;
  src?: string;
  children?: React.ReactNode;
}

export function Safari({
  className,
  url = "platform.wisperai.com",
  src,
  children,
}: SafariProps) {
  return (
    <div className={cn("relative w-full mx-auto", className)}>
      {/* Browser Frame */}
      <div className="relative bg-gray-100 rounded-t-lg border border-gray-300 overflow-hidden shadow-2xl">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-200 border-b border-gray-300">
          {/* Traffic Lights */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          
          {/* URL Bar */}
          <div className="flex-1 flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-300 mx-4">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-sm text-gray-600 flex-1 truncate">{url}</span>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* Browser Actions */}
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-300 rounded">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-300 rounded">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Browser Content */}
        <div className="relative bg-white" style={{ aspectRatio: "16/10", minHeight: "500px" }}>
          {src ? (
            <img
              src={src}
              alt="Browser content"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full overflow-x-hidden overflow-y-auto">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Base Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-gray-900/20 rounded-full blur-xl" />
    </div>
  );
}

