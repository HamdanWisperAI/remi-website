"use client";
import type React from "react";

import { useEffect, useRef, useState } from "react";
import { easeOut, motion } from "framer-motion";
import { Activity, CheckCircle2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactNode;
};

const SIMPLE_CARDS = [
  {
    id: 0,
    content: (
      <div className="space-y-3 opacity-90 h-full">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-purple-500/20">
            <CheckCircle2 className="h-4 w-4 text-purple-500" />
          </div>
          <div className="bg-linear-to-r from-purple-500 via-foreground to-foreground bg-clip-text">
            <p className="text-transparent font-semibold text-sm">
              Education Hours Tracked
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-500">10,000+</span>
          <span className="text-xs text-muted-foreground">This Quarter</span>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    content: (
      <div className="space-y-3 opacity-90 h-full">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-purple-400/20">
            <TrendingUp className="h-4 w-4 text-purple-400" />
          </div>
          <div className="bg-linear-to-r from-purple-400 via-foreground to-foreground bg-clip-text">
            <p className="text-transparent font-semibold text-sm">
              Behavior Changes Documented
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-400">2,400+</span>
          <span className="text-xs text-muted-foreground">Verified</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="space-y-3 opacity-90 h-full">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-purple-300/20">
            <Activity className="h-4 w-4 text-purple-300" />
          </div>
          <div className="bg-linear-to-r from-purple-300 via-foreground to-foreground bg-clip-text">
            <p className="text-transparent font-semibold text-sm">
              LMI Engagement Rate
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-300">87%</span>
          <span className="text-xs text-muted-foreground">Active</span>
        </div>
      </div>
    ),
  },
];

export const CardStack = ({
  items = SIMPLE_CARDS,
  offset,
  scaleFactor,
  activeClass,
  inactiveClass,
}: {
  items?: Card[];
  offset?: number;
  scaleFactor?: number;
  activeClass?: string;
  inactiveClass?: string;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.1;
  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoCycle = () => {
    intervalRef.current = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        const [firstCard] = newArray.splice(0, 1);
        newArray.push(firstCard);
        return newArray;
      });
    }, 2500);
  };

  const stopAutoCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleCardClick = (clickedId: number) => {
    stopAutoCycle();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    resumeTimeoutRef.current = setTimeout(() => {
      startAutoCycle();
    }, 2000);

    setCards((prevCards) => {
      const clickedCardIndex = prevCards.findIndex(
        (card) => card.id === clickedId
      );
      const newArray = [...prevCards];
      const [clickedCard] = newArray.splice(clickedCardIndex, 1);
      newArray.push(clickedCard);
      return newArray;
    });
  };

  useEffect(() => {
    startAutoCycle();

    return () => {
      stopAutoCycle();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto h-[140px] sm:h-[150px] ">
      {cards.map((card, index) => {
        const isActive = index === 0;

        return (
          <motion.div
            key={card.id}
            className={cn(
              isActive &&
                "w-full h-full bg-background/80 border border-border/50 rounded-2xl relative z-10 p-6 flex flex-col gap-1 cursor-pointer shadow-xl text-foreground select-none backdrop-blur-md overflow-hidden",
              isActive && activeClass,
              !isActive &&
                "w-full h-full max-h-[110px] rounded-2xl absolute bg-background/80 border border-border/50 cursor-pointer p-6 flex flex-col gap-1 text-foreground backdrop-blur-md",
              !isActive && inactiveClass
            )}
            style={{
              transformOrigin: "top center",
            }}
            initial={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 0,
              top: index * -CARD_OFFSET,
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: isActive ? 1 : 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              left: isActive ? 0 : "50%",
              x: isActive ? 0 : "-50%",
              opacity: [0, 0, 1],
            }}
            transition={{
              duration: 0.4,
              ease: easeOut,
            }}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="h-full overflow-hidden">{card.content}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardStack;
