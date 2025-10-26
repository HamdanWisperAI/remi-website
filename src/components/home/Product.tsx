"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Intro from "./Intro";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { CardStack } from "@/components/ui/card-stack";
import { OrbitComponent } from "@/components/ui/orbit";
import { AnimatedList } from "@/components/ui/animated-list";
import { ArrowRight, BookOpen, BarChart3, Smartphone, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const notifications = [
  {
    title: "First Home Purchase",
    description: "Learn the basics",
    time: "3 min",
    color: "#10b981",
  },
  {
    title: "Building Credit Score",
    description: "Improve your rating",
    time: "2 min",
    color: "#10b981",
  },
  {
    title: "Retirement Planning",
    description: "Plan for the future",
    time: "4 min",
    color: "#10b981",
  },
  {
    title: "Emergency Savings",
    description: "Build your safety net",
    time: "3 min",
    color: "#10b981",
  },
];

const Notification = ({
  title,
  description,
  time,
  color,
}: {
  title: string;
  description: string;
  time: string;
  color: string;
}) => {
  return (
    <figure className="relative mx-auto min-h-fit w-full max-w-[95%] sm:max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] transform-gpu bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-xl overflow-hidden relative"
          style={{ backgroundColor: color }}
        >
          <BookOpen className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium">
            <span className="text-gray-900">{title}</span>
          </figcaption>
          <p className="text-xs font-normal text-gray-600">{description}</p>
        </div>
        <span className="ml-auto text-xs text-accent font-semibold">
          {time}
        </span>
      </div>
    </figure>
  );
};

export default function Product() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );
      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
      const allPhotos = gsap.utils.toArray(".desktopPhoto");

      // Set initial state - hide all photos except the first one
      gsap.set(photos, { yPercent: 101, opacity: 0 });
      gsap.set(allPhotos[0] as HTMLElement, { yPercent: 0, opacity: 1 });

      // Create matchMedia for responsive behavior
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        // Pin the right side while left scrolls
        ScrollTrigger.create({
          trigger: galleryRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: rightRef.current,
        });

        // Create scroll triggers for each section
        details.forEach((detail: unknown, index) => {
          const element = detail as HTMLElement;
          const headline = element.querySelector("h1");
          
          const animation = gsap
            .timeline()
            .to(photos[index] as HTMLElement, { 
              yPercent: 0, 
              opacity: 1, 
              duration: 1,
              ease: "power2.inOut"
            })
            .to(allPhotos[index] as HTMLElement, { 
              opacity: 0, 
              duration: 0.5 
            }, "-=0.5");

          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: 1,
          });
        });
      });

      return () => mm.revert();
    }, galleryRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .hero-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .text-gradient {
          color: #625bff;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/assets/images/home/homeBG.png');
          background-size: cover;
          background-position: center;
          opacity: 1;
          z-index: 0;
        }

        .hero-vignette {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.15) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .hero-section {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .hero-section {
            height: auto;
            min-height: 600px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: auto;
            min-height: 100vh;
            padding: 40px 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 20px 12px;
          }
        }

        .gallery {
          display: flex;
          width: 100%;
        }

        .left {
          width: 50%;
          position: relative;
        }

        .right {
          height: 100vh;
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .desktopContent {
          margin: auto;
          width: 85%;
          max-width: 650px;
        }

        .desktopContentSection {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 0;
        }

        @media screen and (max-width: 767px) {
          .desktopContent {
            display: none;
          }
        }

        .desktopPhotos {
          width: min(88vw, 520px);
          height: min(88vw, 520px);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
        }

        .desktopPhoto {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          padding: 40px;
          will-change: transform, opacity;
        }

        .mobileContent {
          display: none;
        }

        @media screen and (max-width: 767px) {
          .gallery {
            display: block;
            width: 100%;
            margin: 0;
            overflow-x: hidden;
          }

          .left {
            width: 100%;
            padding: 0;
            margin: 0;
            background-color: rgb(249 250 251);
          }

          .right {
            display: none;
          }

          .mobileContent {
            display: block;
            width: 100%;
            max-width: 100%;
            padding: 32px 20px;
            margin: 0;
            box-sizing: border-box;
          }
        }

        @media screen and (max-width: 480px) {
          .mobileContent {
            padding: 24px 16px;
          }
        }
      `}</style>

      <section className="hero-section bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
        <div className="hero-background"></div>
        <div className="hero-vignette"></div>

        <div className="relative z-10 w-full mx-auto max-w-5xl px-4 sm:px-6 text-center space-y-8">

          {/* Main Headline with Enhanced Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut", type: "spring" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] text-black"
          >
            Start Anywhere.
            <br />
            <span className="text-gradient">Win Everywhere.</span>
          </motion.h1>

          {/* Enhanced Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              delay: 0.1,
            }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light tracking-tight"
          >
            Banking intelligence tools that work independently or together.
            <br />
            <span className="text-gray-500">Compete with confidence. Serve every generation brilliantly.</span>
          </motion.p>

          {/* CTA Buttons with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              delay: 0.2,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link href="/product/CI">
              <Button
                size="lg"
                className="group relative bg-linear-to-r from-[#625bff] to-[#7c6fff] text-white hover:shadow-xl font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start With CI — 3 Days
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Link href="/product/financialLiteracy">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-black bg-white hover:bg-gray-50 hover:border-[#625bff] hover:text-[#625bff] font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Start With Literacy — 2 Weeks
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-base text-black pt-8 font-semibold tracking-wide"
          >
            Built for banks and credit unions from $100M to $10B in assets.
          </motion.p>

        </div>
      </section>
      <HeroSection/>
      {/* Spacer */}
      <div className="h-[30vh] bg-linear-to-b from-white to-gray-50"></div>
      <Intro/>
      {/* Three Tools Section with Scroll Animations */}
      <div ref={galleryRef} className="gallery">
        {/* Left: Scrollable Content */}
        <div className="left bg-gray-50">
          <div className="desktopContent">
            {/* Section 1: Competitive Intelligence */}
            <div className="desktopContentSection">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-[#625bff]/10">
                    <BarChart3 className="h-7 w-7 text-[#625bff]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#625bff]">
                      Tool 01
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-1">
                      Competitive Intelligence
                    </h1>
                  </div>
                </div>

                <div className="space-y-4 pl-16">
                  <p className="text-xl font-semibold text-[#625bff]">
                    Finally. Know what everyone else is doing. In real-time.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Remember when you found out your competitor dropped auto rates... three weeks after losing five loans? Never again.
                  </p>
                </div>

                <div className="pl-16 space-y-3 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3">
                    What it does:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-[#625bff]" />
                      <span className="text-gray-700">
                        Tracks every rate, fee, and feature across your competition
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-[#625bff]" />
                      <span className="text-gray-700">
                        Updates weekly (not quarterly like that dusty spreadsheet)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-[#625bff]" />
                      <span className="text-gray-700">
                        Shows you gaps and opportunities instantly
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-[#625bff]" />
                      <span className="text-gray-700">
                        Answers &quot;How do we compare?&quot; in seconds, not hours
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pl-16 pt-6 border-t border-gray-200 text-[#625bff] font-semibold">
                  Deploy in 72 hours. Yes, really. We&apos;ve timed it.
                </div>

                <div className="pl-16 pt-6">
                  <Link href="/product/CI">
                    <Button className="bg-[#625bff] hover:bg-[#625bff]/90 text-white font-semibold px-6 py-3 rounded-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="rounded-2xl p-8 border border-[#625bff]/20 bg-[#625bff]/5">
                  <p className="italic text-[#0f172a] text-lg leading-relaxed">
                    &quot;It&apos;s like having a spy at every competitor&apos;s strategy meeting. Except legal and way more useful.&quot;
                  </p>
                  <p className="mt-4 font-semibold text-gray-600">
                    — VP of Lending, $2B Credit Union
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Financial Literacy */}
            <div className="desktopContentSection">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-[#10b981]/10">
                    <Smartphone className="h-7 w-7 text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#10b981]">
                      Tool 02
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-1">
                      Financial Literacy That Actually Works
                    </h1>
                  </div>
                </div>

                <div className="space-y-4 pl-16">
                  <p className="text-xl font-semibold text-[#10b981]">
                    700+ lessons. 78% completion rate. (Industry average: 3%. We checked.)
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Your members don&apos;t need another PDF about compound interest. They need guidance exactly when they need it, delivered how they want it.
                  </p>
                </div>

                <div className="pl-16 space-y-3 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3">
                    The magic:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-[#10b981]" />
                      <span className="text-gray-700">
                        3-minute lessons that fit between Instagram scrolls
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-[#10b981]" />
                      <span className="text-gray-700">
                        Your products naturally embedded (hello, cross-sell)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-[#10b981]" />
                      <span className="text-gray-700">
                        Personalized by life stage (first job to retirement party)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-[#10b981]" />
                      <span className="text-gray-700">
                        Works on phones (revolutionary, we know)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pl-16 pt-6 border-t border-gray-200 text-[#10b981] font-semibold">
                  Two weeks to deploy. From &quot;let&apos;s do this&quot; to &quot;we&apos;re doing this.&quot;
                </div>

                <div className="pl-16 pt-6">
                  <Link href="/product/financialLiteracy">
                    <Button className="bg-[#10b981] hover:bg-[#10b981]/90 text-white font-semibold px-6 py-3 rounded-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="rounded-2xl p-8 border border-[#10b981]/20 bg-[#10b981]/5">
                  <p className="italic text-[#0f172a] text-lg leading-relaxed">
                    &quot;Members actually thank you for this. When&apos;s the last time someone thanked you for financial education?&quot;
                  </p>
                  <p className="mt-4 font-semibold text-gray-600">
                    — Chief Marketing Officer, $500M Credit Union
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: CRA Innovation Credit */}
            <div className="desktopContentSection">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-purple-500/10">
                    <CheckSquare className="h-7 w-7 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
                      Tool 03
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-1">
                      CRA Innovation Credit
                    </h1>
                  </div>
                </div>

                <div className="space-y-4 pl-16">
                  <p className="text-xl font-semibold text-purple-600">
                    Turn compliance from necessary evil into competitive edge.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    You&apos;re already doing amazing things for your community. Now you can prove it. With data. That regulators love.
                  </p>
                </div>

                <div className="pl-16 space-y-3 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3">
                    Track everything:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-purple-600" />
                      <span className="text-gray-700">
                        Hours of financial education consumed
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-purple-600" />
                      <span className="text-gray-700">
                        Behavior changes documented
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-purple-600" />
                      <span className="text-gray-700">
                        LMI engagement measured
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="h-5 w-5 shrink-0 mt-1 text-purple-600" />
                      <span className="text-gray-700">
                        Products adopted through education
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pl-16 pt-6 border-t border-gray-200 text-purple-600 font-semibold">
                  Instant activation. Like, click-a-button instant.
                </div>

                <div className="pl-16 pt-6">
                  <Link href="/product/CRA">
                    <Button className="bg-purple-600 hover:bg-purple-600/90 text-white font-semibold px-6 py-3 rounded-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="rounded-2xl p-8 border border-purple-500/20 bg-purple-500/5">
                  <p className="italic text-[#0f172a] text-lg leading-relaxed">
                    &quot;Our last CRA review became a victory lap, not a fire drill. The examiner was genuinely impressed.&quot;
                  </p>
                  <p className="mt-4 font-semibold text-gray-600">
                    — Compliance Officer, Community Bank
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Pinned Animations */}
        <div ref={rightRef} className="right">
          <div className="desktopPhotos">
            {/* Photo 1: Orbit - Competitive Intelligence */}
            <div className="desktopPhoto bg-linear-to-br from-[#625bff] to-[#7c6fff] shadow-2xl">
              <OrbitComponent />
            </div>

            {/* Photo 2: AnimatedList - Financial Literacy */}
            <div className="desktopPhoto bg-linear-to-br from-[#10b981] to-[#059669] shadow-2xl">
              <div className="w-full flex items-center justify-center">
                <AnimatedList delay={2000}>
                  {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                  ))}
                </AnimatedList>
              </div>
            </div>

            {/* Photo 3: CardStack - CRA Innovation */}
            <div className="desktopPhoto bg-linear-to-br from-[#7c3aed] to-[#6d28d9] shadow-2xl">
              <div className="w-full max-w-md">
                <CardStack />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content - Storytelling Scroll */}
        <div className="mobileContent max-w-full">
          {/* Section 1: Competitive Intelligence Text → Animation */}
          <div className="mb-16 w-full">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-[#625bff]/10">
                  <BarChart3 className="h-7 w-7 text-[#625bff]" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#625bff]">
                    Tool 01
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#0f172a] mt-1">
                    Competitive Intelligence
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-[#625bff]">
                  Finally. Know what everyone else is doing. In real-time.
                </p>

                <p className="text-base text-gray-600 leading-relaxed">
                  Remember when you found out your competitor dropped auto rates... three weeks after losing five loans? Never again.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <h3 className="text-base font-bold text-[#0f172a] mb-3">
                  What it does:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-[#625bff]" />
                    <span className="text-gray-700 text-sm">
                      Tracks every rate, fee, and feature across your competition
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-[#625bff]" />
                    <span className="text-gray-700 text-sm">
                      Updates weekly (not quarterly like that dusty spreadsheet)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-[#625bff]" />
                    <span className="text-gray-700 text-sm">
                      Shows you gaps and opportunities instantly
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-[#625bff]" />
                    <span className="text-gray-700 text-sm">
                      Answers &quot;How do we compare?&quot; in seconds, not hours
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-sm font-semibold text-[#625bff]">
                Deploy in 72 hours. Yes, really. We&apos;ve timed it.
              </p>

              <div className="pt-4">
                <Link href="/product/CI">
                  <Button className="bg-[#625bff] hover:bg-[#625bff]/90 text-white font-semibold px-6 py-3 rounded-lg w-full">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="rounded-xl p-6 border border-[#625bff]/20 bg-[#625bff]/5">
                <p className="text-gray-700 italic text-sm">
                  &quot;It&apos;s like having a spy at every competitor&apos;s strategy meeting. Except legal and way more useful.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  — VP of Lending, $2B Credit Union
                </p>
              </div>
            </div>

            <div
              className="w-full max-w-[90%] sm:max-w-[420px] mx-auto aspect-square bg-linear-to-br from-[#625bff] to-[#7c6fff] rounded-3xl flex items-center justify-center p-6 shadow-xl"
            >
              <OrbitComponent />
            </div>
          </div>

          {/* Section 2: Financial Literacy Text → Animation */}
          <div className="mb-16 w-full">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-[#10b981]/10">
                  <Smartphone className="h-7 w-7 text-[#10b981]" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#10b981]">
                    Tool 02
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#0f172a] mt-1">
                    Financial Literacy That Actually Works
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-[#10b981]">
                  700+ lessons. 78% completion rate. (Industry average: 3%. We checked.)
                </p>

                <p className="text-base text-gray-600 leading-relaxed">
                  Your members don&apos;t need another PDF about compound interest. They need guidance exactly when they need it, delivered how they want it.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <h3 className="text-base font-bold text-[#0f172a] mb-3">
                  The magic:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-[#10b981]" />
                    <span className="text-gray-700 text-sm">
                      3-minute lessons that fit between Instagram scrolls
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-[#10b981]" />
                    <span className="text-gray-700 text-sm">
                      Your products naturally embedded (hello, cross-sell)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-[#10b981]" />
                    <span className="text-gray-700 text-sm">
                      Personalized by life stage (first job to retirement party)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-[#10b981]" />
                    <span className="text-gray-700 text-sm">
                      Works on phones (revolutionary, we know)
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-sm font-semibold text-[#10b981]">
                Two weeks to deploy. From &quot;let&apos;s do this&quot; to &quot;we&apos;re doing this.&quot;
              </p>

              <div className="pt-4">
                <Link href="/product/financialLiteracy">
                  <Button className="bg-[#10b981] hover:bg-[#10b981]/90 text-white font-semibold px-6 py-3 rounded-lg w-full">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="rounded-xl p-6 border border-[#10b981]/20 bg-[#10b981]/5">
                <p className="text-gray-700 italic text-sm">
                  &quot;Members actually thank you for this. When&apos;s the last time someone thanked you for financial education?&quot;
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  — Chief Marketing Officer, $500M Credit Union
                </p>
              </div>
            </div>

            <div
              className="w-full max-w-[90%] sm:max-w-[420px] mx-auto aspect-square bg-linear-to-br from-[#10b981] to-[#059669] rounded-3xl flex items-center justify-center p-6 shadow-xl"
            >
              <div className="w-full flex items-center justify-center">
                <AnimatedList delay={2000}>
                  {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                  ))}
                </AnimatedList>
              </div>
            </div>
          </div>

          {/* Section 3: CRA Innovation Text → Animation */}
          <div className="mb-8 w-full">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-purple-500/10">
                  <CheckSquare className="h-7 w-7 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
                    Tool 03
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#0f172a] mt-1">
                    CRA Innovation Credit
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-purple-600">
                  Turn compliance from necessary evil into competitive edge.
                </p>

                <p className="text-base text-gray-600 leading-relaxed">
                  You&apos;re already doing amazing things for your community. Now you can prove it. With data. That regulators love.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <h3 className="text-base font-bold text-[#0f172a] mb-3">
                  Track everything:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-purple-600" />
                    <span className="text-gray-700 text-sm">
                      Hours of financial education consumed
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-purple-600" />
                    <span className="text-gray-700 text-sm">
                      Behavior changes documented
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-purple-600" />
                    <span className="text-gray-700 text-sm">
                      LMI engagement measured
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-4 w-4 shrink-0 mt-0.5 text-purple-600" />
                    <span className="text-gray-700 text-sm">
                      Products adopted through education
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-sm font-semibold text-purple-600">
                Instant activation. Like, click-a-button instant.
              </p>

              <div className="pt-4">
                <Link href="/product/CRA">
                  <Button className="bg-purple-600 hover:bg-purple-600/90 text-white font-semibold px-6 py-3 rounded-lg w-full">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="rounded-xl p-6 border border-purple-500/20 bg-purple-500/5">
                <p className="text-gray-700 italic text-sm">
                  &quot;Our last CRA review became a victory lap, not a fire drill. The examiner was genuinely impressed.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  — Compliance Officer, Community Bank
                </p>
              </div>
            </div>

            <div
              className="w-full max-w-[90%] sm:max-w-[420px] mx-auto aspect-square bg-linear-to-br from-[#7c3aed] to-[#6d28d9] rounded-3xl flex items-center justify-center p-6 shadow-xl"
            >
              <div className="w-full max-w-md">
                <CardStack />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[30vh] bg-gray-50"></div>
    </>
  );
}
