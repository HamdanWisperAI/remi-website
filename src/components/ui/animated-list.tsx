"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0, opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 350, damping: 40 }}
      layout 
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 2000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    );

    const [isActive] = useState(true);
    const listRef = useRef<HTMLDivElement>(null);

    // Initialize as active by default

    useEffect(() => {
      if (isActive) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => {
            // Cycle through all items
            const nextIndex = (prevIndex + 1) % childrenArray.length;
            return nextIndex;
          });
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [index, delay, childrenArray.length, isActive]);

    const itemsToShow = useMemo(() => {
      // Show up to 3 items at a time (most recent at top)
      const start = Math.max(0, index - 2);
      const end = index + 1;
      const items = childrenArray.slice(start, end);
      return items.reverse();
    }, [index, childrenArray]);

    return (
      <div
        ref={listRef}
        className={cn(`flex flex-col items-center gap-3 w-full max-w-[420px]`, className)}
        {...props}
      >
        <AnimatePresence mode="popLayout">
          {itemsToShow.map((item, idx) => (
            <AnimatedListItem key={`${(item as React.ReactElement).key}-${index}-${idx}`}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";
