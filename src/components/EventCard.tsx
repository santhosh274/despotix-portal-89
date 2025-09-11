import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Brain, Palette, FileText, Search, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  "Techscribe": FileText,
  "PixelCraft": Palette,
  "CodeQuest": Zap,
  "BrainChain": Brain,
  "Huntrix": Search,
};

interface EventCardProps {
  event: {
    name: string;
    category: string;
    description: string;
    registrationLink: string;
  };
  onClick: () => void;
  index: number;
}

export function EventCard({ event, onClick, index }: EventCardProps) {
  const Icon = iconMap[event.name as keyof typeof iconMap] || Gamepad2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1]
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.25, 0, 1] }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card 
        className="card-cosmic p-6 relative overflow-hidden group cursor-pointer"
        onClick={onClick}
      >
        {/* Animated background glow */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 "
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div 
              className="p-2 rounded-lg bg-primary/20 border border-primary/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="h-6 w-6 text-primary" />
            </motion.div>
            <Badge 
              variant={event.category === "Technical" ? "default" : "secondary"}
              className={
                event.category === "Technical" 
                  ? "bg-primary/20 text-primary border-primary/30" 
                  : "bg-accent/20 text-accent border-accent/30"
              }
            >
              {event.category}
            </Badge>
          </div>
          
          <h3 className="text-xl font-orbitron font-bold mb-2 text-cosmic">
            {event.name}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {event.description.split(' ').slice(0, 12).join(' ')}...
          </p>
          
          <motion.div 
            className="mt-4 flex items-center text-primary text-sm font-medium"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            Click to view details →
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}