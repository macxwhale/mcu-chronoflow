import { TimelineHeader } from "@/components/TimelineHeader";
import { Timeline } from "@/components/Timeline";
import { MobileTimeline } from "@/components/MobileTimeline";
import { PhaseCarousel } from "@/components/PhaseCarousel";
import { FloatingPhaseNav } from "@/components/FloatingPhaseNav";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { ViewModeToggle, ViewMode } from "@/components/ViewModeToggle";
import { GridView } from "@/components/GridView";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet-async";
import { mcuTimelineData } from "@/data/mcuTimeline";
import { useState, useEffect, useMemo } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [viewMode, setViewMode] = useState<ViewMode>("carousel");
  const [activePhase, setActivePhase] = useState("Phase 1");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Group data by phase
  const phaseData = useMemo(() => {
    const phases: Record<string, typeof mcuTimelineData> = {};
    const sortedData = [...mcuTimelineData].sort((a, b) => a.chronological_order - b.chronological_order);
    
    sortedData.forEach((node) => {
      if (!phases[node.phase]) {
        phases[node.phase] = [];
      }
      phases[node.phase].push(node);
    });
    
    return phases;
  }, []);

  const phases = Object.keys(phaseData).sort((a, b) => {
    const numA = parseInt(a.replace("Phase ", ""));
    const numB = parseInt(b.replace("Phase ", ""));
    return numA - numB;
  });

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      // Detect active phase based on scroll position
      phases.forEach((phase) => {
        const phaseNumber = parseInt(phase.replace("Phase ", ""));
        const element = document.getElementById(`phase-${phaseNumber}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActivePhase(phase);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [phases]);

  const sortedNodes = useMemo(() => 
    [...mcuTimelineData].sort((a, b) => a.chronological_order - b.chronological_order),
  []);

  return (
    <>
      <Helmet>
        <title>MCU Timeline - Complete Marvel Cinematic Universe Chronological Order</title>
        <meta name="description" content="Explore the complete Marvel Cinematic Universe timeline in chronological order. From Captain America's origins to the multiverse saga - every movie and Disney+ series." />
        <meta name="keywords" content="MCU, Marvel, timeline, chronological order, Avengers, Iron Man, Captain America, Disney Plus, Marvel movies" />
        <link rel="canonical" href="https://mcu-timeline.app" />
      </Helmet>
      
      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Progress indicator */}
        <ProgressIndicator 
          phases={phases}
          activePhase={activePhase}
          scrollProgress={scrollProgress}
          onPhaseClick={setActivePhase}
        />

        {/* Floating phase nav (desktop sidebar / mobile floating button) */}
        <FloatingPhaseNav 
          phases={phases}
          activePhase={activePhase}
          onPhaseClick={setActivePhase}
        />

        {/* Ambient background effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-foreground/50 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 pt-14">
          <TimelineHeader />
          
          {/* View mode toggle */}
          <div className="flex justify-center py-6 px-4">
            <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>
          
          <section className="py-4 md:py-8 md:pl-20">
            {viewMode === "carousel" && (
              <div className="space-y-8 md:space-y-12">
                {phases.map((phase, index) => (
                  <PhaseCarousel 
                    key={phase}
                    phase={phase}
                    nodes={phaseData[phase]}
                    phaseIndex={index}
                  />
                ))}
              </div>
            )}

            {viewMode === "timeline" && (
              isMobile ? <MobileTimeline /> : <Timeline />
            )}

            {viewMode === "grid" && (
              <GridView nodes={sortedNodes} />
            )}
          </section>
          
          {/* Footer */}
          <footer className="relative py-12 text-center border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              Powered by the multiverse • Data from the Sacred Timeline
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Index;
