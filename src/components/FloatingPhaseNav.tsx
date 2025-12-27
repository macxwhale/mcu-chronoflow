import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, Menu, X } from "lucide-react";
import { getPhaseColor } from "@/data/mcuTimeline";

interface FloatingPhaseNavProps {
  phases: string[];
  activePhase: string;
  onPhaseClick: (phase: string) => void;
}

export const FloatingPhaseNav = ({ phases, activePhase, onPhaseClick }: FloatingPhaseNavProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeIndex = phases.indexOf(activePhase);
  const activeColor = getPhaseColor(activePhase);

  const scrollToPhase = (phase: string) => {
    const phaseNumber = parseInt(phase.replace("Phase ", ""));
    const element = document.getElementById(`phase-${phaseNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onPhaseClick(phase);
    if (isMobile) setIsExpanded(false);
  };

  const goToPrevPhase = () => {
    if (activeIndex > 0) {
      scrollToPhase(phases[activeIndex - 1]);
    }
  };

  const goToNextPhase = () => {
    if (activeIndex < phases.length - 1) {
      scrollToPhase(phases[activeIndex + 1]);
    }
  };

  // Mobile floating button
  if (isMobile) {
    return (
      <>
        {/* Floating phase indicator button */}
        <motion.button
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glassmorphism-strong flex items-center justify-center energy-pulse"
          style={{
            borderColor: `hsl(var(--${activeColor}))`,
            color: `hsl(var(--${activeColor}))`,
          }}
          onClick={() => setIsExpanded(!isExpanded)}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <span className="font-display text-xl">{activeIndex + 1}</span>
          )}
        </motion.button>

        {/* Expanded phase menu */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="fixed bottom-24 right-6 z-50 glassmorphism-strong rounded-xl p-2 min-w-[180px]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {phases.map((phase) => {
                const phaseColor = getPhaseColor(phase);
                const isActive = phase === activePhase;
                
                return (
                  <button
                    key={phase}
                    onClick={() => scrollToPhase(phase)}
                    className={`w-full px-4 py-3 rounded-lg text-left flex items-center gap-3 transition-all ${
                      isActive ? "bg-secondary" : "hover:bg-secondary/50"
                    }`}
                  >
                    <div 
                      className={`w-3 h-3 rounded-full ${isActive ? "energy-pulse" : ""}`}
                      style={{ backgroundColor: `hsl(var(--${phaseColor}))` }}
                    />
                    <span className={`font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {phase}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop sidebar
  return (
    <motion.nav
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 glassmorphism-strong rounded-2xl p-3 flex flex-col items-center gap-2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Up arrow */}
      <button
        onClick={goToPrevPhase}
        disabled={activeIndex === 0}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Phase indicators */}
      <div className="flex flex-col gap-2 py-2">
        {phases.map((phase, index) => {
          const phaseColor = getPhaseColor(phase);
          const isActive = phase === activePhase;
          const phaseNumber = index + 1;
          
          return (
            <motion.button
              key={phase}
              onClick={() => scrollToPhase(phase)}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive ? "energy-pulse" : "hover:scale-110"
                }`}
                style={{
                  backgroundColor: isActive 
                    ? `hsl(var(--${phaseColor}))` 
                    : `hsl(var(--${phaseColor}) / 0.2)`,
                  border: `2px solid hsl(var(--${phaseColor}))`,
                  color: isActive 
                    ? "hsl(var(--background))" 
                    : `hsl(var(--${phaseColor}))`,
                }}
              >
                <span className="font-display text-lg">{phaseNumber}</span>
              </div>

              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div 
                  className="px-3 py-1.5 rounded-lg glassmorphism-strong whitespace-nowrap text-sm font-medium"
                  style={{ color: `hsl(var(--${phaseColor}))` }}
                >
                  {phase}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Down arrow */}
      <button
        onClick={goToNextPhase}
        disabled={activeIndex === phases.length - 1}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronDown className="w-5 h-5" />
      </button>

      {/* Progress indicator line */}
      <div className="absolute left-1/2 top-14 bottom-14 w-0.5 bg-border -z-10 -translate-x-1/2">
        <motion.div 
          className="w-full rounded-full"
          style={{
            background: `linear-gradient(180deg, hsl(var(--${activeColor})), hsl(var(--${activeColor}) / 0.3))`,
            height: `${((activeIndex + 1) / phases.length) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.nav>
  );
};
