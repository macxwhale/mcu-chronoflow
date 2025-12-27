import { useState } from "react";
import { MCUNode, getPhaseColor } from "@/data/mcuTimeline";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Film, Users, Info } from "lucide-react";

interface TimelineNodeProps {
  node: MCUNode;
  index: number;
  isLeft: boolean;
}

export const TimelineNode = ({ node, index, isLeft }: TimelineNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const phaseColor = getPhaseColor(node.phase);
  
  const isActive = isHovered || isTouched;

  const handleTouch = () => {
    setIsTouched(!isTouched);
  };

  return (
    <motion.div
      className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} w-full group`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Node Content */}
      <div 
        className={`w-[calc(50%-40px)] ${isLeft ? 'pr-4 text-right' : 'pl-4 text-left'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouch}
      >
        <motion.div
          className="relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Poster Card */}
          <div className="relative inline-block">
            <div 
              className={`relative overflow-hidden rounded-lg transition-all duration-500 poster-shimmer
                ${isActive ? 'ring-2 ring-primary shadow-2xl' : 'ring-1 ring-border/50'}
              `}
              style={{
                boxShadow: isActive ? `0 0 40px hsla(var(--${phaseColor}), 0.4)` : 'none'
              }}
            >
              <img
                src={node.poster_url}
                alt={node.title}
                className="w-32 h-48 md:w-40 md:h-60 object-cover transition-transform duration-500"
                style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Phase badge */}
              <div 
                className={`absolute top-2 ${isLeft ? 'left-2' : 'right-2'} px-2 py-1 rounded-md text-xs font-semibold backdrop-blur-sm`}
                style={{ 
                  backgroundColor: `hsla(var(--${phaseColor}), 0.9)`,
                  color: 'white'
                }}
              >
                {node.phase}
              </div>
              
              {/* Year badge */}
              <div className={`absolute bottom-2 ${isLeft ? 'left-2' : 'right-2'} px-2 py-1 rounded-md text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground`}>
                {node.release_year}
              </div>
            </div>
            
            {/* Glow effect */}
            <div 
              className={`absolute -inset-4 rounded-2xl transition-opacity duration-500 -z-10
                ${isActive ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                background: `radial-gradient(ellipse at center, hsla(var(--${phaseColor}), 0.2) 0%, transparent 70%)`
              }}
            />
          </div>
          
          {/* Title below poster */}
          <motion.h3 
            className="font-display text-lg md:text-xl mt-3 text-foreground leading-tight"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isActive ? 1 : 0.8 }}
          >
            {node.title}
          </motion.h3>
          
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1 justify-end" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
            <Film size={12} />
            {node.platform}
          </p>
        </motion.div>
      </div>

      {/* Timeline connector */}
      <div className="relative flex flex-col items-center justify-center w-20 shrink-0">
        {/* Connection line */}
        <div 
          className={`absolute w-8 h-0.5 top-1/2 transform -translate-y-1/2
            ${isLeft ? 'right-10' : 'left-10'}
          `}
          style={{
            background: `linear-gradient(${isLeft ? '90deg' : '270deg'}, hsla(var(--${phaseColor}), 0.6), transparent)`
          }}
        />
        
        {/* Node dot */}
        <motion.div
          className="relative z-10 w-5 h-5 rounded-full border-2 border-primary bg-background"
          style={{
            borderColor: `hsl(var(--${phaseColor}))`,
            boxShadow: isActive ? `0 0 20px hsla(var(--${phaseColor}), 0.6)` : 'none'
          }}
          animate={{
            scale: isActive ? 1.3 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="absolute inset-1 rounded-full"
            style={{ backgroundColor: `hsl(var(--${phaseColor}))` }}
          />
        </motion.div>
        
        {/* Order number */}
        <span 
          className="absolute -bottom-6 text-xs font-medium"
          style={{ color: `hsl(var(--${phaseColor}))` }}
        >
          #{node.chronological_order}
        </span>
      </div>

      {/* Hover Details Panel */}
      <div className={`w-[calc(50%-40px)] ${isLeft ? 'pl-4' : 'pr-4'}`}>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: isLeft ? 20 : -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: isLeft ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card/95 backdrop-blur-md rounded-xl p-4 border border-border/50 shadow-2xl"
              style={{
                boxShadow: `0 0 30px hsla(var(--${phaseColor}), 0.2)`
              }}
            >
              <div className="space-y-3">
                {/* Synopsis */}
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {node.synopsis}
                  </p>
                </div>
                
                {/* Key Characters */}
                <div className="flex items-start gap-2">
                  <Users size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <div className="flex flex-wrap gap-1">
                    {node.key_characters.slice(0, 5).map((character, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {character}
                      </span>
                    ))}
                    {node.key_characters.length > 5 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        +{node.key_characters.length - 5}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Release Info */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <Calendar size={14} />
                  <span>Released {node.release_year}</span>
                  <span className="mx-2">•</span>
                  <span>{node.platform}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
