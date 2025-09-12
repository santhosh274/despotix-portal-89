import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ArrowLeft, Brain, Calendar, MapPin, Trophy, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Huntrix = () => {
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
                className="p-4 rounded-xl bg-accent/20 border-2 border-accent/30 w-fit mx-auto mb-6"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Brain className="h-12 w-12 text-accent" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-orbitron font-bold text-cosmic mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                HUNTRIX <br/> <p className="text-3xl">(Connection)</p>
              </motion.h1>
              
              <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
                Non-Technical Event
              </Badge>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                An adventurous treasure-hunt inspired game of logic and clues!
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
                      <h3 className="font-orbitron font-semibold text-accent mb-2">About the Event</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Solve challenging clues step by step in a thrilling race against time.
                        Test your teamwork, logic, and problem-solving skills to reach the final destination first!
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-orbitron font-semibold text-accent mb-2">Format</h3>
                      <p className="text-muted-foreground">Treasure Hunt / Logical Clue Solving</p>
                    </div>
                    
                    <div>
                      <h3 className="font-orbitron font-semibold text-accent mb-2">Timing</h3>
                      <p className="text-muted-foreground">11:00 AM – 12:30 PM</p>
                    </div>
                    
                    <div>
                      <h3 className="font-orbitron font-semibold text-accent mb-2">Team Size</h3>
                      <p className="text-muted-foreground">Up to 4 participants per team</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Rules & Regulations */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Card className="card-cosmic p-8 h-full">
                  <h2 className="text-2xl font-orbitron font-bold text-cosmic mb-6">Rules & Regulations</h2>
                  
                  <div className="space-y-4">
                    {[
                      "A team can consist of 4 participants.",
                      "Clues must be solved in sequence. Skipping or tampering with clues is prohibited.",
                      "No external help (other teams, bystanders, or internet) unless permitted.",
                      "Mobile phones strictly prohibited.",
                      "Follow safety guidelines and stay within the designated area.",
                      "The first team to solve all clues and reach the final destination wins.",
                      "Judge's decision will be final."
                    ].map((rule, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{rule}</p>
                      </div>
                    ))}
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
                <Calendar className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-orbitron font-semibold mb-2">Event Date</h3>
                <p className="text-muted-foreground">September 26, 2025</p>
              </Card>
              
              <Card className="card-cosmic p-6 text-center">
                <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-orbitron font-semibold mb-2">Venue</h3>
                <p className="text-muted-foreground">IT Block</p>
              </Card>
              
              <Card className="card-cosmic p-6 text-center">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-orbitron font-semibold mb-2">Prizes</h3>
                <p className="text-muted-foreground">₹2,000+ Prize Pool</p>
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
                <h2 className="text-2xl font-orbitron font-bold text-cosmic mb-4">Think You Can Crack It?</h2>
                <p className="text-muted-foreground mb-6">
                  Form your team, follow the trail of clues, and race to the finish!
                </p>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/80"
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

export default Huntrix;
