import { useState } from "react";
import { MCUNode, getPhaseColor } from "@/data/mcuTimeline";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Film, Users, Info, ChevronDown } from "lucide-react";

interface MobileTimelineNodeProps {
  node: MCUNode;
  index: number;
}

export const MobileTimelineNode = ({ node, index }: MobileTimelineNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phaseColor = getPhaseColor(node.phase);

  return (
    <motion.div
      className="relative flex"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center mr-4">
        <motion.div
          className="relative z-10 w-4 h-4 rounded-full border-2 bg-background shrink-0"
          style={{
            borderColor: `hsl(var(--${phaseColor}))`,
            boxShadow: isExpanded ? `0 0 15px hsla(var(--${phaseColor}), 0.6)` : 'none'
          }}
          animate={{ scale: isExpanded ? 1.2 : 1 }}
        >
          <div 
            className="absolute inset-0.5 rounded-full"
            style={{ backgroundColor: `hsl(var(--${phaseColor}))` }}
          />
        </motion.div>
        <div 
          className="w-0.5 flex-1 -mt-1"
          style={{ 
            background: `linear-gradient(180deg, hsla(var(--${phaseColor}), 0.5), hsla(var(--${phaseColor}), 0.2))` 
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <motion.div
          className={`bg-card/80 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden
            ${isExpanded ? 'border-primary/50 shadow-lg' : 'border-border/50'}
          `}
          style={{
            boxShadow: isExpanded ? `0 0 30px hsla(var(--${phaseColor}), 0.2)` : 'none'
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Card header - always visible */}
          <div className="flex gap-3 p-3">
            {/* Poster thumbnail */}
            <div className="relative shrink-0">
              <img
                src={node.poster_url}
                alt={node.title}
                className="w-16 h-24 object-cover rounded-lg"
              />
              <div 
                className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-semibold"
                style={{ 
                  backgroundColor: `hsla(var(--${phaseColor}), 0.9)`,
                  color: 'white'
                }}
              >
                {node.phase.replace("Phase ", "P")}
              </div>
            </div>

            {/* Basic info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-base leading-tight text-foreground">
                    {node.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {node.release_year}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Film size={10} />
                      {node.platform}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} className="text-muted-foreground" />
                </motion.div>
              </div>
              
              <span 
                className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full"
                style={{ 
                  backgroundColor: `hsla(var(--${phaseColor}), 0.2)`,
                  color: `hsl(var(--${phaseColor}))`
                }}
              >
                #{node.chronological_order} in timeline
              </span>
            </div>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-border/50"
              >
                <div className="p-3 space-y-3">
                  {/* Synopsis */}
                  <div className="flex items-start gap-2">
                    <Info size={14} className="text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {node.synopsis}
                    </p>
                  </div>

                  {/* Key Characters */}
                  <div className="flex items-start gap-2">
                    <Users size={14} className="text-muted-foreground shrink-0 mt-0.5" />
                    <div className="flex flex-wrap gap-1">
                      {node.key_characters.map((character, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {character}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};
