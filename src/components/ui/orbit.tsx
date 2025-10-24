"use client";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Target, Zap } from "lucide-react";

export function OrbitComponent() {
  return (
    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] md:max-w-[350px] mx-auto">
      {/* Orbit rings */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 rounded-full border-2 bg-white/10 backdrop-blur-xl border-white/30 shadow-2xl"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-[45px] rounded-full border-2 border-white/20 backdrop-blur-xl"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        className="absolute inset-[90px] rounded-full border-2 border-white/20 backdrop-blur-xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute inset-[90px] rounded-full text-white font-bold text-lg flex items-center justify-center"
      >
        <p className="text-3xl tracking-tighter font-extrabold">CI</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="absolute inset-0 animate-spin-slow"
      >
        {/* Outer orbit items - counter-rotate to stay upright */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-xl w-14 h-14 p-2 animate-spin-slow-reverse bg-white/95 backdrop-blur-sm border-2 border-white/40 shadow-xl flex items-center justify-center">
          <TrendingUp className="h-7 w-7 text-[#625bff]" />
        </div>

        <div className="absolute bottom-4 right-4 rounded-xl w-14 h-14 p-2 animate-spin-slow-reverse bg-white/95 backdrop-blur-sm border-2 border-white/40 shadow-xl flex items-center justify-center">
          <BarChart3 className="h-7 w-7 text-[#625bff]" />
        </div>

        <div className="absolute bottom-4 left-4 rounded-xl w-14 h-14 p-2 animate-spin-slow-reverse bg-white/95 backdrop-blur-sm border-2 border-white/40 shadow-xl flex items-center justify-center">
          <span className="text-sm font-bold text-[#625bff]">72h</span>
        </div>
      </motion.div>

      {/* Middle orbit - counter-clockwise */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute inset-0 animate-spin-slow-reverse"
      >
        {/* Second orbit items - counter-rotate to stay upright */}
        <div className="absolute top-[28%] left-[14%] sm:top-[100px] sm:left-[50px] rounded-xl bg-white/95 backdrop-blur-sm border-2 border-white/40 shadow-xl w-12 h-12 sm:w-14 sm:h-14 p-2 animate-spin-slow flex items-center justify-center">
          <Target className="h-7 w-7 text-[#625bff]" />
        </div>
        <div className="absolute bottom-[28%] right-[14%] sm:bottom-[100px] sm:right-[50px] rounded-xl bg-white/95 backdrop-blur-sm border-2 border-white/40 shadow-xl w-12 h-12 sm:w-14 sm:h-14 p-2 animate-spin-slow flex items-center justify-center">
          <span className="text-sm font-bold text-[#625bff]">50+</span>
        </div>
      </motion.div>

      {/* Inner orbit - clockwise */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.05 }}
        className="absolute inset-0 animate-spin-slow"
      >
        {/* Inner orbit items - counter-rotate to stay upright */}
        <div className="absolute top-[32%] right-[24%] sm:top-[120px] sm:right-[90px] bg-white/95 backdrop-blur-sm border-2 border-white/40 shadow-xl rounded-xl w-10 h-10 sm:w-12 sm:h-12 p-2 animate-spin-slow-reverse flex items-center justify-center">
          <Zap className="h-6 w-6 text-[#625bff]" />
        </div>

        <div className="absolute bottom-[32%] left-[24%] sm:bottom-[120px] sm:left-[90px] bg-white/95 backdrop-blur-sm border-2 border-white/40 shadow-xl rounded-xl w-10 h-10 sm:w-12 sm:h-12 p-2 animate-spin-slow-reverse flex items-center justify-center">
          <span className="text-xs font-bold text-[#625bff]">1K+</span>
        </div>
      </motion.div>
    </div>
  );
}
