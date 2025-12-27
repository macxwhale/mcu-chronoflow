import { MCUNode, getPhaseColor } from "@/data/mcuTimeline";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, Users, Tv, X } from "lucide-react";

interface GridViewProps {
  nodes: MCUNode[];
}

export const GridView = ({ nodes }: GridViewProps) => {
  const [selectedNode, setSelectedNode] = useState<MCUNode | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 px-4 md:px-8">
        {nodes.map((node, index) => {
          const phaseColor = getPhaseColor(node.phase);
          
          return (
            <motion.div
              key={node.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              onClick={() => setSelectedNode(node)}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <div 
                className="aspect-[2/3] rounded-lg overflow-hidden relative"
                style={{
                  boxShadow: `0 0 20px hsl(var(--${phaseColor}) / 0.2)`,
                }}
              >
                <img
                  src={node.poster_url}
                  alt={node.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Chronological order */}
                <div 
                  className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: `hsl(var(--${phaseColor}))`,
                    color: "hsl(var(--background))",
                  }}
                >
                  {node.chronological_order}
                </div>

                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-display text-sm text-foreground line-clamp-2">
                    {node.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{node.release_year}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal for selected node */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
              onClick={() => setSelectedNode(null)}
            />

            {/* Modal content */}
            <motion.div
              className="relative w-full max-w-3xl glassmorphism-strong rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              <button
                onClick={() => setSelectedNode(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glassmorphism flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Poster */}
                <div className="md:w-1/3 aspect-[2/3] md:aspect-auto">
                  <img
                    src={selectedNode.poster_url}
                    alt={selectedNode.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 p-6 md:p-8">
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                    style={{
                      backgroundColor: `hsl(var(--${getPhaseColor(selectedNode.phase)}) / 0.2)`,
                      color: `hsl(var(--${getPhaseColor(selectedNode.phase)}))`,
                    }}
                  >
                    {selectedNode.phase} • #{selectedNode.chronological_order}
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
                    {selectedNode.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedNode.release_year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tv className="w-4 h-4" />
                      {selectedNode.platform}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedNode.synopsis}
                  </p>

                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium mb-3">
                      <Users className="w-4 h-4" />
                      Key Characters
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedNode.key_characters.map((character) => (
                        <span 
                          key={character}
                          className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground"
                        >
                          {character}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
