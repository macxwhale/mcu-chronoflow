import { MCUNode } from "@/data/mcuTimeline";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, Users, Calendar, Tv } from "lucide-react";

interface PhaseCardProps {
  node: MCUNode;
  index: number;
  phaseColor: string;
}

export const PhaseCard = ({ node, index, phaseColor }: PhaseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px]"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="relative group cursor-pointer rounded-xl overflow-hidden glassmorphism"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        onTouchStart={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: isExpanded 
            ? `0 0 40px hsl(var(--${phaseColor}) / 0.4), 0 20px 60px hsl(var(--background) / 0.8)` 
            : `0 10px 40px hsl(var(--background) / 0.5)`,
        }}
      >
        {/* Poster */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <motion.img
            src={node.poster_url}
            alt={node.title}
            className="w-full h-full object-cover"
            animate={{ scale: isExpanded ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: isExpanded ? "100%" : "-100%" }}
            transition={{ duration: 0.8 }}
          />

          {/* Chronological order badge */}
          <div 
            className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{
              backgroundColor: `hsl(var(--${phaseColor}))`,
              color: "hsl(var(--background))",
            }}
          >
            {node.chronological_order}
          </div>

          {/* Platform badge */}
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md glassmorphism-strong text-xs font-medium flex items-center gap-1">
            <Tv className="w-3 h-3" />
            {node.platform}
          </div>

          {/* Play button on hover */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `hsl(var(--${phaseColor}) / 0.9)`,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", damping: 15 }}
                >
                  <Play className="w-7 h-7 text-background ml-1" fill="currentColor" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="relative p-4">
          <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground line-clamp-2 mb-2">
            {node.title}
          </h3>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {node.release_year}
            </div>
            <div 
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `hsl(var(--${phaseColor}) / 0.2)`,
                color: `hsl(var(--${phaseColor}))`,
              }}
            >
              {node.phase}
            </div>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  {node.synopsis}
                </p>

                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex flex-wrap gap-1">
                    {node.key_characters.slice(0, 4).map((character) => (
                      <span 
                        key={character}
                        className="px-2 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground"
                      >
                        {character}
                      </span>
                    ))}
                    {node.key_characters.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground">
                        +{node.key_characters.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom glow line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{
            background: `linear-gradient(90deg, transparent, hsl(var(--${phaseColor})), transparent)`,
            opacity: isExpanded ? 1 : 0.5,
          }}
        />
      </motion.div>
    </motion.div>
  );
};
