import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, Brain, Palette, FileText, Search, Gamepad2 } from "lucide-react";

const iconMap = {
  "Techscribe": FileText,
  "PixelCraft": Palette,
  "CodeQuest": Zap,
  "BrainChain": Brain,
  "Huntrix": Search,
};

interface EventModalProps {
  event: {
    name: string;
    category: string;
    description: string;
    registrationLink: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!event) return null;

  const Icon = iconMap[event.name as keyof typeof iconMap] || Gamepad2;

  const handleRegister = () => {
    window.open(event.registrationLink, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="card-cosmic border-primary/30 max-w-md">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Icon className="h-8 w-8 text-primary" />
            </div>
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
          
          <DialogTitle className="text-2xl font-orbitron font-bold text-cosmic text-left">
            {event.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {event.description}
          </p>
          
          <Button 
            onClick={handleRegister}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-300 hover:shadow-[0_0_20px_hsl(255_80%_70%_/_0.3)]"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Register Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}