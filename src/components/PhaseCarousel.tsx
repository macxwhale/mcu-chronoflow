import { MCUNode, getPhaseColor } from "@/data/mcuTimeline";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { PhaseCard } from "./PhaseCard";

interface PhaseCarouselProps {
  phase: string;
  nodes: MCUNode[];
  phaseIndex: number;
}

export const PhaseCarousel = ({ phase, nodes, phaseIndex }: PhaseCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const phaseColor = getPhaseColor(phase);
  const phaseNumber = parseInt(phase.replace("Phase ", ""));

  return (
    <motion.section
      id={`phase-${phaseNumber}`}
      className="relative py-8 md:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
    >
      {/* Phase background glow */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, hsl(var(--${phaseColor}) / 0.3) 0%, transparent 70%)`,
        }}
      />

      {/* Phase header */}
      <div className="relative px-4 md:px-8 mb-6">
        <div className="flex items-center gap-4">
          {/* Infinity Stone-style indicator */}
          <motion.div 
            className="relative flex-shrink-0"
            whileHover={{ scale: 1.1 }}
          >
            <div 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center energy-pulse"
              style={{ 
                backgroundColor: `hsl(var(--${phaseColor}) / 0.2)`,
                border: `2px solid hsl(var(--${phaseColor}))`,
                color: `hsl(var(--${phaseColor}))`,
              }}
            >
              <span className="font-display text-2xl md:text-3xl">{phaseNumber}</span>
            </div>
            {/* Particle effects */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  backgroundColor: `hsl(var(--${phaseColor}))`,
                  left: `${50 + Math.cos(i * 2.1) * 30}%`,
                  top: `${50 + Math.sin(i * 2.1) * 30}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </motion.div>

          <div>
            <h2 
              className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider"
              style={{ color: `hsl(var(--${phaseColor}))` }}
            >
              {phase}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {nodes.length} {nodes.length === 1 ? "entry" : "entries"} in the timeline
            </p>
          </div>
        </div>

        {/* Energy trail line */}
        <div 
          className="h-0.5 mt-4 rounded-full"
          style={{
            background: `linear-gradient(90deg, hsl(var(--${phaseColor})) 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Carousel */}
      <div className="relative px-4 md:px-8">
        {/* Navigation buttons */}
        {canScrollPrev && (
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-card/80 transition-all group"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>
        )}
        
        {canScrollNext && (
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-card/80 transition-all group"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>
        )}

        {/* Carousel viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 md:gap-6">
            {nodes.map((node, index) => (
              <PhaseCard 
                key={node.id} 
                node={node} 
                index={index}
                phaseColor={phaseColor}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
