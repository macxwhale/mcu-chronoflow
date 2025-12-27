import { motion } from "framer-motion";
import { getPhaseColor } from "@/data/mcuTimeline";

interface ProgressIndicatorProps {
  phases: string[];
  activePhase: string;
  scrollProgress: number;
  onPhaseClick: (phase: string) => void;
}

export const ProgressIndicator = ({ 
  phases, 
  activePhase, 
  scrollProgress,
  onPhaseClick 
}: ProgressIndicatorProps) => {
  const scrollToPhase = (phase: string) => {
    const phaseNumber = parseInt(phase.replace("Phase ", ""));
    const element = document.getElementById(`phase-${phaseNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onPhaseClick(phase);
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-40 glassmorphism-strong"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Main progress bar */}
      <div className="h-1 bg-border relative">
        {/* Bifrost-style gradient progress */}
        <motion.div 
          className="absolute inset-y-0 left-0 bifrost-trail"
          style={{ 
            width: `${scrollProgress * 100}%`,
            backgroundSize: "200% 100%",
          }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Phase markers */}
      <div className="relative h-12 flex items-center justify-between px-4 md:px-8">
        {/* Current phase label */}
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: `hsl(var(--${getPhaseColor(activePhase)}))` }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="font-display text-lg tracking-wider hidden sm:block">
            {activePhase}
          </span>
        </div>

        {/* Phase quick-jump buttons */}
        <div className="flex items-center gap-1 md:gap-2">
          {phases.map((phase, index) => {
            const phaseColor = getPhaseColor(phase);
            const isActive = phase === activePhase;
            const position = (index + 0.5) / phases.length;
            const isPassed = scrollProgress >= position - 0.1;
            
            return (
              <button
                key={phase}
                onClick={() => scrollToPhase(phase)}
                className="relative group"
              >
                <div 
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive ? "scale-110" : "hover:scale-105"
                  }`}
                  style={{
                    backgroundColor: isActive || isPassed 
                      ? `hsl(var(--${phaseColor}) / 0.3)` 
                      : `hsl(var(--${phaseColor}) / 0.1)`,
                    border: isActive 
                      ? `2px solid hsl(var(--${phaseColor}))` 
                      : `1px solid hsl(var(--${phaseColor}) / 0.3)`,
                  }}
                >
                  <span 
                    className="font-display text-sm md:text-base"
                    style={{ 
                      color: isActive || isPassed 
                        ? `hsl(var(--${phaseColor}))` 
                        : `hsl(var(--${phaseColor}) / 0.5)` 
                    }}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Tooltip */}
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="px-2 py-1 rounded glassmorphism-strong whitespace-nowrap text-xs">
                    {phase}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress percentage */}
        <div className="text-sm text-muted-foreground font-mono">
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>
    </motion.div>
  );
};
