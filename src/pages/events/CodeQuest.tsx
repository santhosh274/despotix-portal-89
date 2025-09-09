import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ArrowLeft, Zap, Calendar, MapPin, Trophy, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CodeQuest = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <motion.header 
          className="py-8 px-4 border-b border-border/30"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <Link to="/">
              <Button variant="ghost" className="mb-4 hover:bg-primary/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Button>
            </Link>
            
            <div className="text-center">
              <motion.div 
                className="p-4 rounded-xl bg-primary/20 border-2 border-primary/30 w-fit mx-auto mb-6"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="h-12 w-12 text-primary" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-orbitron font-bold text-cosmic mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                CODEQUEST
              </motion.h1>
              
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Technical Event
              </Badge>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Test your technical knowledge and programming concepts in our intensive quiz competition
              </motion.p>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Event Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Card className="card-cosmic p-8 h-full">
                  <h2 className="text-2xl font-orbitron font-bold text-cosmic mb-6">Event Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-orbitron font-semibold text-primary mb-2">About the Event</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Test your technical knowledge and programming concepts in our intensive quiz competition. 
                        Challenge yourself with questions covering algorithms, data structures, web technologies, 
                        and emerging tech trends.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-orbitron font-semibold text-primary mb-2">Format</h3>
                      <p className="text-muted-foreground">Multiple-choice Technical Quiz Competition</p>
                    </div>
                    
                    <div>
                      <h3 className="font-orbitron font-semibold text-primary mb-2">Duration</h3>
                      <p className="text-muted-foreground">90 minutes (3 rounds)</p>
                    </div>
                    
                    <div>
                      <h3 className="font-orbitron font-semibold text-primary mb-2">Team Size</h3>
                      <p className="text-muted-foreground">Team of 2-3 members</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Guidelines & Rules */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Card className="card-cosmic p-8 h-full">
                  <h2 className="text-2xl font-orbitron font-bold text-cosmic mb-6">Quiz Topics</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Data Structures and Algorithms</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Web Development (Frontend & Backend)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Database Management Systems</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Artificial Intelligence & Machine Learning</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Emerging Technologies (Blockchain, IoT, Cloud)</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Event Info Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Card className="card-cosmic p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-orbitron font-semibold mb-2">Event Date</h3>
                <p className="text-muted-foreground">September 26, 2025</p>
              </Card>
              
              <Card className="card-cosmic p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-orbitron font-semibold mb-2">Venue</h3>
                <p className="text-muted-foreground">Auditorium</p>
              </Card>
              
              <Card className="card-cosmic p-6 text-center">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-orbitron font-semibold mb-2">Prizes</h3>
                <p className="text-muted-foreground">₹10,000 Prize Pool</p>
              </Card>
            </motion.div>

            {/* Registration CTA */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Card className="card-cosmic p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-orbitron font-bold text-cosmic mb-4">Ready for the Challenge?</h2>
                <p className="text-muted-foreground mb-6">
                  Put your technical knowledge to the test in this exciting quiz competition
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/80"
                  asChild
                >
                  <a 
                    href="https://forms.gle/HnewXiLFKE82omNu6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Users className="h-5 w-5" />
                    Register Now
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CodeQuest;
