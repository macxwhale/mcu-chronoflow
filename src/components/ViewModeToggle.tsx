import { motion } from "framer-motion";
import { LayoutGrid, List, GalleryHorizontal } from "lucide-react";

export type ViewMode = "carousel" | "timeline" | "grid";

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export const ViewModeToggle = ({ viewMode, onViewModeChange }: ViewModeToggleProps) => {
  const modes: { mode: ViewMode; icon: React.ReactNode; label: string }[] = [
    { mode: "carousel", icon: <GalleryHorizontal className="w-4 h-4" />, label: "Carousel" },
    { mode: "timeline", icon: <List className="w-4 h-4" />, label: "Timeline" },
    { mode: "grid", icon: <LayoutGrid className="w-4 h-4" />, label: "Grid" },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg glassmorphism">
      {modes.map(({ mode, icon, label }) => (
        <button
          key={mode}
          onClick={() => onViewModeChange(mode)}
          className={`relative px-3 py-2 rounded-md flex items-center gap-2 transition-colors ${
            viewMode === mode 
              ? "text-foreground" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {viewMode === mode && (
            <motion.div
              layoutId="viewModeIndicator"
              className="absolute inset-0 bg-secondary rounded-md"
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            />
          )}
          <span className="relative z-10">{icon}</span>
          <span className="relative z-10 text-sm font-medium hidden sm:block">{label}</span>
        </button>
      ))}
    </div>
  );
};
