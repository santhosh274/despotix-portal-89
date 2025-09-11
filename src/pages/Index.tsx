import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { EventCard } from "@/components/EventCard";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/events";
import { coordinators } from "@/data/coordinators";
import { schedule } from "@/data/schedule";
import { Calendar, MapPin, Phone, Mail, Users, Trophy, AlertTriangle } from "lucide-react";
import logo from '/logo.png';

const Index = () => {
  const navigate = useNavigate();

  const handleEventClick = (event: typeof events[0]) => {
    const eventRoutes: Record<string, string> = {
      "Techscribe": "/events/techscribe",
      "PixelCraft": "/events/pixelcraft",
      "CodeQuest": "/events/codequest",
      "BrainChain": "/events/brainchain",
      "secret": "/events/secret",
      "Huntrix": "/events/huntrix"
    };
    
    navigate(eventRoutes[event.name]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Particle Background */}
      <ParticleBackground />

      <div className="relative z-10">
        {/* Header Section */}
        <motion.header 
          className="text-center py-8 px-4 border-b border-border/30"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Enhanced College Logo */}
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl border-2 border-primary/40 mx-auto mb-4 flex items-center justify-center animate-pulse-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              
              <div className="w-10 h-10 bg-primary/50 rounded-lg" />
              <img src={logo} alt="logo" className="w-15 h-15" />
            </motion.div>
            
            <motion.h1 
              className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              S.A. ENGINEERING COLLEGE
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Organized by the Department of Information Technology
            </motion.p>
          </div>
        </motion.header>

        {/* Main Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6 text-cosmic text-glow animate-glow-pulse"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              DESPOTIX
            </motion.h2>
            <motion.div 
              className="text-3xl md:text-5xl font-orbitron font-bold text-primary mb-4 animate-bounce-cosmic"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              2K25
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Calendar className="h-5 w-5 text-accent" />
              <span className="text-lg md:text-xl font-orbitron font-medium text-accent">
                September 26, 2025
              </span>
            </motion.div>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Join us for an extraordinary symposium featuring cutting-edge technical competitions and engaging activities. 
              Experience the future of technology and innovation.
            </motion.p>

            {/* Participation Rules */}
            <motion.div
              className="max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Card className="card-cosmic p-6 border-accent/30">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  <h3 className="font-orbitron font-bold text-accent">Important Rule</h3>
                </div>
                <p className="text-muted-foreground">
                  Each team can participate in a maximum of <span className="text-primary font-bold">2 events</span>. 
                  Choose your competitions wisely!
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h3 
              className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-4 text-cosmic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Event Showcase
            </motion.h3>
            <motion.p 
              className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Explore our diverse range of technical and non-technical events designed to challenge and inspire.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <EventCard 
                  key={event.name}
                  event={event} 
                  onClick={() => handleEventClick(event)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h3 
              className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-4 text-cosmic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Event Schedule
            </motion.h3>
            <motion.p 
              className="text-center text-muted-foreground mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              September 26, 2025 - Complete timeline of events
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-cosmic p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-3">
                      <Badge 
                        variant={item.type === "technical" ? "default" : item.type === "general" ? "secondary" : "outline"}
                        className={
                          item.type === "technical" 
                            ? "bg-primary/20 text-primary border-primary/30" 
                            : item.type === "general"
                            ? "bg-accent/20 text-accent border-accent/30"
                            : "bg-muted/20 text-muted-foreground border-muted/30"
                        }
                      >
                        {item.time}
                      </Badge>
                    </div>
                    <h4 className="font-orbitron font-semibold text-foreground mt-2 mb-1">
                      {item.event}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {item.venue}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Coordinators Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h3 
              className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-4 text-cosmic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Coordinators
            </motion.h3>
            <motion.p 
              className="text-center text-muted-foreground mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Meet our dedicated team organizing DESPOTIX 2K25
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coordinators.map((coordinator, index) => (
                <motion.div
                  key={coordinator.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="card-cosmic p-6 text-center group">
                    <div className="w-20 h-20 bg-primary/20 rounded-full border-2 border-primary/30 mx-auto mb-4 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-orbitron font-bold text-foreground mb-1">
                      {coordinator.name}
                    </h4>
                    <p className="text-accent text-sm font-medium mb-3">
                      {coordinator.role}
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center justify-center gap-1">
                        <Phone className="h-3 w-3" />
                        {coordinator.phone}
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Mail className="h-3 w-3" />
                        {coordinator.email}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h3 
              className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12 text-cosmic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact Information
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-cosmic p-6">
                  <h4 className="font-orbitron font-bold text-primary mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Venue Details
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>College:</strong> S.A. Engineering College</p>
                    <p><strong>Department:</strong> Information Technology</p>
                    <p><strong>Address:</strong> Poonamallee-Avadi Road, Thiruverkadu, Chennai, Tamil Nadu</p>
                    <p><strong>Date:</strong> September 26, 2025</p>
                    <p className="font-orbitron text-primary mb-4 flex items-center gap-2"><strong><a href="https://maps.app.goo.gl/q6ALUZJHsWCxfr3S6" target="_blank" rel="noopener noreferrer">View in Google Maps</a></strong></p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-cosmic p-6">
                  <h4 className="font-orbitron font-bold text-primary mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Get in Touch
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> despotix2k25@gmail.com</p>
                    <p><strong>Phone:</strong> +91 81221 47725</p>
                    <p><strong>Website:</strong> www.saec.ac.in</p>
                    <p><strong>Follow us:</strong><a className="font-orbitron font-bold text-primary mb-4 flex items-center gap-2" href="https://www.instagram.com/despotix__2k25?igsh=d3RiNWR0czB6YTFn">@despotix2k25</a></p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 py-8 px-4 border-t border-border/30">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Trophy className="h-5 w-5 text-primary" />
              <span className="font-orbitron font-bold text-primary">DESPOTIX 2K25</span>
            </motion.div>
            <p className="text-muted-foreground text-sm">
              © 2025 DESPOTIX 2K25 - S.A. ENGINEERING COLLEGE
            </p>
            <p className="text-xs text-white/5 italic tracking-wide hover:text-white/40 transition duration-500 select-none">For those who dare, may find what they seek.</p>
          </div>
        </footer>
      </div>
    </div>
    
  );
};

export default Index;
