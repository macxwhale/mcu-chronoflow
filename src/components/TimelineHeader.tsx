import { motion } from "framer-motion";

export const TimelineHeader = () => {
  return (
    <motion.header 
      className="relative py-16 md:py-24 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform -translate-y-1/2" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
            THE COMPLETE SAGA
          </span>
        </motion.div>
        
        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-gradient">MCU</span>{" "}
          <span className="text-foreground">TIMELINE</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the Marvel Cinematic Universe in perfect chronological order. 
          From Captain America's origins to the multiverse saga and beyond.
        </motion.p>
        
        {/* Phase legend */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { phase: "Phase 1", color: "phase-1" },
            { phase: "Phase 2", color: "phase-2" },
            { phase: "Phase 3", color: "phase-3" },
            { phase: "Phase 4", color: "phase-4" },
          ].map((item) => (
            <div 
              key={item.phase}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: `hsl(var(--${item.color}))` }}
              />
              <span className="text-sm text-muted-foreground">{item.phase}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};
