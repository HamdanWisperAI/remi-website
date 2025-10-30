'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, Users, Shield } from 'lucide-react';
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Compare } from "@/components/ui/compare";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { WarpBackground } from "@/components/ui/warp-background";

// Extended Compare wrapper to fix hover reset issue
const CompareWrapper: React.FC<React.ComponentProps<typeof Compare>> = (props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouseLeaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    // Delay the mouse leave event to allow for minor mouse movements
    mouseLeaveTimeoutRef.current = setTimeout(() => {
      // Only trigger actual leave if mouse is still outside
      if (wrapperRef.current && !wrapperRef.current.matches(':hover')) {
        // Reset will happen naturally in Compare component
      }
    }, 100);
  };

  const handleMouseEnter = () => {
    if (mouseLeaveTimeoutRef.current) {
      clearTimeout(mouseLeaveTimeoutRef.current);
    }
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Compare {...props} />
    </div>
  );
};

// Ripple Background Component with #625bff color
const RippleBackground: React.FC = () => {
  const [clickedCell, setClickedCell] = useState<{ row: number; col: number } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="absolute inset-0 h-full w-full [--cell-border-color:#625bff] [--cell-fill-color:rgba(98,91,255,0.3)] [--cell-shadow-color:#625bff]"
      style={
        {
          "--cell-border-color": "#625bff",
          "--cell-fill-color": "rgba(98, 91, 255, 0.2)",
          "--cell-shadow-color": "#625bff",
        } as React.CSSProperties
      }
    >
      <div className="relative h-auto w-auto overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
        <RippleGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-20% mask-radial-at-top opacity-40"
          rows={6}
          cols={20}
          cellSize={56}
          borderColor="#625bff"
          fillColor="rgba(98, 91, 255, 0.2)"
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col });
            setRippleKey((k) => k + 1);
          }}
          interactive
        />
      </div>
    </div>
  );
};

type RippleGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const RippleGrid = ({
  className,
  rows = 6,
  cols = 20,
  cellSize = 56,
  borderColor = "#625bff",
  fillColor = "rgba(98, 91, 255, 0.2)",
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
}: RippleGridProps) => {
  const cells = Array.from({ length: rows * cols }, (_, idx) => idx);

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
  };

  return (
    <div className={`relative z-[3] ${className || ""}`} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0;
        const duration = 200 + distance * 80;

        const style: CellStyle = clickedCell
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }
          : {};

        return (
          <div
            key={idx}
            className={`cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 ${
              clickedCell ? "animate-cell-ripple [animation-fill-mode:none]" : ""
            } ${!interactive ? "pointer-events-none" : ""}`}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          />
        );
      })}
    </div>
  );
};

// Text reveal animation component
const SplitText: React.FC<{ 
  text: string; 
  className?: string;
  isInView: boolean;
  delay?: number;
}> = ({ text, className = '', isInView, delay = 0 }) => {
  const words = text.split(' ');
  
  return (
    <div className={className}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + idx * 0.05,
            ease: 'easeOut'
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Comparison highlight component
const ComparisonHighlight: React.FC<{ 
  before: string; 
  after: string; 
  isInView: boolean;
  delay?: number;
}> = ({ before, after, isInView, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className="space-y-3"
    >
      <p className="text-base md:text-lg text-[#6b7280]">
        <span className="line-through text-red-400">Other competitors: Rip everything out</span>
      </p>
      <p className="text-base md:text-lg text-[#10b981] font-semibold">
        We: Let's make what you have amazing
      </p>
    </motion.div>
  );
};

// Different and Why Section - 50/50 Layout with Compare Component
const DifferentSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#625bff]/2 to-white overflow-hidden">
      {/* Background Ripple Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <RippleBackground />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Badge */}

        {/* Main Content Grid - 50/50 Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Main Headline - Animated */}
            <div className="mb-8">
              <div className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                {/* First headline line */}
                <SplitText
                  text="We don't replace."
                  isInView={isInView}
                  delay={0.2}
                  className="text-[#171717]"
                />

                {/* Second headline line: We {changing words}. */}
                <div className="mt-3">
                  <span className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight inline-flex items-center flex-wrap">
                    <SplitText
                      text="We"
                      isInView={isInView}
                      delay={0.5}
                      className="text-[#171717] inline-block"
                    />

                    <span className="inline-block ml-3">
                      <span className="inline-block bg-[#625bff] text-white rounded-md px-3 py-1">
                        <ContainerTextFlip
                          words={["enhance", "enrich", "refine", "polish", "uplift", "improve"]}
                          className="bg-transparent"
                          textClassName=""
                        />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-[#6b7280] font-light mb-10"
            >
              Build on what you've built. Keep the foundation that works.
            </motion.p>


          </motion.div>

          {/* Right Side - Compare Component */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-2xl">
              <div className="p-4 border rounded-3xl bg-neutral-100 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 overflow-hidden">
                <CompareWrapper
                  firstImage="/assets/images/home/whatothersdo1.png"
                  secondImage="/assets/images/home/whatwedo1.png"
                  firstImageClassName="object-contain object-center bg-[#F5F5F5]"
                  secondImageClassname="object-contain object-center bg-[#F5F5F5]"
                  className="h-[400px] w-full md:h-[500px]"
                  slideMode="hover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Timeline Component
const TimelineSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  const milestones = [
    { period: 'Week 1', text: 'Wait, we can see competitor rates daily?' },
    { period: 'Month 1', text: 'Our young members are actually engaging.' },
    { period: 'Month 3', text: 'The board wants to know what other magic we have.' },
    { period: 'Month 6', text: "We're the innovative FI others copy now." }
  ];

  const metrics = [
    { value: '41%', label: 'Fewer Delinquencies', source: 'CFPB Financial Wellness Study 2023' },
    { value: '32%', label: 'Reduction in Support Calls', source: 'Internal Case Studies' },
    { value: '3.4x', label: 'Product Adoption', source: 'Member Engagement Metrics' },
    { value: '67%', label: 'Increase in Lifetime Value', source: 'Industry Benchmarks' }
  ];

  return (
    <div ref={ref} className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#625bff]/5 overflow-hidden">
      {/* Warp Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <WarpBackground
          children={<div />}
          perspective={1000}
          beamsPerSide={3}
          beamSize={10}
          beamDuration={8}
          beamDelayMin={0}
          beamDelayMax={5}
          gridColor="rgba(98, 91, 255, 0.4)"
          beamColor="rgba(98, 91, 255, 0.25)"
          className="!absolute !inset-0 !border-0 !p-0 !rounded-none"
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold text-[#625bff] uppercase tracking-wider mb-3">
            The Real Impact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717]">
            Results That{" "}
            <PointerHighlight
              rectangleClassName="bg-[rgba(98,91,255,0.15)] dark:bg-[rgba(98,91,255,0.2)] border-[#625bff]/30 dark:border-[#625bff]/40 leading-loose px-4 py-2"
              pointerClassName="text-[#625bff] h-3 w-3"
              containerClassName="inline-block ml-1"
            >
              <span className="relative z-10 text-4xl md:text-5xl lg:text-6xl">Speak</span>
            </PointerHighlight>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="relative"
              >
                {/* Timeline Connector */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute left-full top-8 w-full h-1 bg-gradient-to-r from-[#625bff] to-transparent" />
                )}

                {/* Card */}
                <div className="relative p-6 rounded-lg border border-[#625bff]/30 bg-white hover:border-[#625bff]/60 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Period Badge */}
                  <div className="inline-block mb-3 px-3 py-1 rounded-full bg-[#625bff]/10 text-[#625bff] text-xs font-semibold">
                    {milestone.period}
                  </div>
                  {/* Text */}
                  <p className="text-sm md:text-base font-medium text-[#171717]">
                    {milestone.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-[#625bff]/5 to-[#10b981]/5 border border-[#625bff]/20 hover:border-[#625bff]/60 transition-all duration-300"
            >
              {/* Animated Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <CounterAnimation
                  value={parseFloat(metric.value)}
                  suffix={metric.value.includes('x') ? 'x' : '%'}
                  isInView={isInView}
                />
              </motion.div>

              <p className="text-sm font-semibold text-[#171717] mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Counter Animation Component
const CounterAnimation: React.FC<{ value: number; suffix: string; isInView: boolean }> = ({
  value,
  suffix,
  isInView
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let startValue = 0;
    const increment = value / 60;
    let currentValue = startValue;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(currentValue * 10) / 10);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div className="text-4xl md:text-5xl font-bold text-[#625bff]">
      {displayValue.toFixed(1)}{suffix}
    </div>
  );
};

// Built By People Section
const BuiltByPeopleSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const credentials = [
    "Our founder protected $200 billion at PayPal.",
    "Banking isn't just algorithms. It's about communities and trust."
  ];

  return (
    <div ref={ref} className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-[#625bff]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold text-[#625bff] uppercase tracking-wider mb-3">
            Our Foundation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717]">
            Built by People Who Get It
          </h2>
        </motion.div>
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Avatar/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Avatar Circle with gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#625bff]/20 to-[#10b981]/20 border-4 border-[#625bff]/40 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#625bff]/10 to-[#10b981]/10 flex items-center justify-center">
                  <Users className="w-24 h-24 text-[#625bff] opacity-60" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-[#625bff]/20"
              >
                <Zap className="w-6 h-6 text-[#625bff]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-[#10b981]/20"
              >
                <Shield className="w-6 h-6 text-[#10b981]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Story Text */}
          <div className="space-y-6">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="p-6 rounded-lg bg-gradient-to-r from-[#625bff]/5 to-transparent border border-[#625bff]/20 hover:border-[#625bff]/40 transition-all"
              >
                <p className="text-lg md:text-xl text-[#171717] font-semibold">{cred}</p>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base text-[#6b7280] leading-relaxed"
            >
              We understand your challenges because we've been in your shoes. That's why our solutions
              are built to enhance, not replace, the foundation you've carefully built.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Hero Section Component
export const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <DifferentSection />
      <TimelineSection />
      <BuiltByPeopleSection />
    </div>
  );
};

export default HeroSection;
