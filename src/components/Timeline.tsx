import { mcuTimelineData } from "@/data/mcuTimeline";
import { TimelineNode } from "./TimelineNode";
import { motion } from "framer-motion";

export const Timeline = () => {
  const sortedData = [...mcuTimelineData].sort((a, b) => a.chronological_order - b.chronological_order);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Central timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full timeline-line" />
      
      {/* Timeline start indicator */}
      <motion.div 
        className="relative flex justify-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-glow-pulse">
            <div className="w-3 h-3 rounded-full bg-primary-foreground" />
          </div>
          <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-display text-muted-foreground whitespace-nowrap">
            THE BEGINNING
          </p>
        </div>
      </motion.div>
      
      {/* Timeline nodes */}
      <div className="space-y-12 md:space-y-16 py-12">
        {sortedData.map((node, index) => (
          <TimelineNode 
            key={node.id} 
            node={node} 
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
      
      {/* Timeline end indicator */}
      <motion.div 
        className="relative flex justify-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-accent-foreground" />
          </div>
          <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-display text-muted-foreground whitespace-nowrap">
            TO BE CONTINUED...
          </p>
        </div>
      </motion.div>
    </div>
  );
};
