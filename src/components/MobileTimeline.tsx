import { mcuTimelineData } from "@/data/mcuTimeline";
import { MobileTimelineNode } from "./MobileTimelineNode";
import { motion } from "framer-motion";

export const MobileTimeline = () => {
  const sortedData = [...mcuTimelineData].sort((a, b) => a.chronological_order - b.chronological_order);

  return (
    <div className="relative w-full px-4">
      {/* Timeline start indicator */}
      <motion.div 
        className="relative flex items-center mb-8 pl-0.5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-glow-pulse">
          <div className="w-2 h-2 rounded-full bg-primary-foreground" />
        </div>
        <p className="ml-4 text-sm font-display text-muted-foreground">
          THE BEGINNING
        </p>
      </motion.div>
      
      {/* Timeline nodes */}
      <div className="ml-0.5">
        {sortedData.map((node, index) => (
          <MobileTimelineNode 
            key={node.id} 
            node={node} 
            index={index}
          />
        ))}
      </div>
      
      {/* Timeline end indicator */}
      <motion.div 
        className="relative flex items-center mt-4 pl-0.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-accent-foreground" />
        </div>
        <p className="ml-4 text-sm font-display text-muted-foreground">
          TO BE CONTINUED...
        </p>
      </motion.div>
    </div>
  );
};
