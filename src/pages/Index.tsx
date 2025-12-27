import { TimelineHeader } from "@/components/TimelineHeader";
import { Timeline } from "@/components/Timeline";
import { MobileTimeline } from "@/components/MobileTimeline";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Helmet>
        <title>MCU Timeline - Complete Marvel Cinematic Universe Chronological Order</title>
        <meta name="description" content="Explore the complete Marvel Cinematic Universe timeline in chronological order. From Captain America's origins to the multiverse saga - every movie and Disney+ series." />
        <meta name="keywords" content="MCU, Marvel, timeline, chronological order, Avengers, Iron Man, Captain America, Disney Plus, Marvel movies" />
        <link rel="canonical" href="https://mcu-timeline.app" />
      </Helmet>
      
      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Star field effect */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
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
          </div>
          
          {/* Gradient orbs */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <TimelineHeader />
          
          <section className="py-8 md:py-16">
            {isMobile ? <MobileTimeline /> : <Timeline />}
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
