import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ArrowLeft, FileText, Calendar, MapPin, Trophy, Users, ExternalLink, ClipboardList, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Techscribe = () => {
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
                <FileText className="h-12 w-12 text-primary" />
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-orbitron font-bold text-cosmic mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                TECHSCRIBE <br/> <p className="text-3xl">(Paper presentation)</p>
              </motion.h1>

              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Paper Presentation
              </Badge>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Showcase your research and technical writing skills in our paper presentation
                competition. Present innovative ideas, cutting-edge research, and technological
                solutions to expert judges and fellow tech enthusiasts.
              </motion.p>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card className="card-cosmic p-8">
                <h2 className="text-2xl font-orbitron font-bold text-cosmic mb-6">Event Details</h2>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li><strong>Format:</strong> Paper Presentation</li>
                  <li><strong>Team Size:</strong> Individual or team of 2 authors</li>
                  <li><strong>Duration:</strong> 7 minutes presentation + 3 minutes Q&A</li>
                  <li><strong>Slides:</strong> 12–15 slides recommended (use PowerPoint, avoid text-heavy slides)</li>
                  <li><strong>Submission:</strong> Soft copy (Word/PDF), 8–10 pages, Font size 12, submitted before deadline</li>
                </ul>
              </Card>
            </motion.div>

            {/* Rules and Regulations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Card className="card-cosmic p-8">
                <h2 className="text-2xl font-orbitron font-bold text-cosmic mb-6 flex items-center gap-2">
                  <ClipboardList className="h-6 w-6 text-primary" /> Rules & Regulations
                </h2>

                <div className="space-y-8">
                  {/* Eligibility */}
                  <div>
                    <h3 className="font-orbitron font-semibold text-primary mb-2">Eligibility</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Open to Undergraduate students only</li>
                      <li>Maximum of 2 authors per paper</li>
                    </ul>
                  </div>

                  {/* Topics */}
                  <div>
                    <h3 className="font-orbitron font-semibold text-primary mb-2">Topics</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Emerging Technologies (AI, IoT, Blockchain, Cloud, etc.)</li>
                      <li>Recent Trends in Engineering / IT</li>
                      <li>Innovative Projects and Research Work</li>
                    </ul>
                  </div>

                  {/* Evaluation */}
                  <div>
                    <h3 className="font-orbitron font-semibold text-primary mb-2">Evaluation Criteria</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Content & Originality (relevance, depth of research)</li>
                      <li>Clarity of Presentation (organization, time management, delivery)</li>
                      <li>Visual Aids – PPT quality</li>
                      <li>Knowledge & Q&A – ability to answer questions</li>
                      <li>Overall Impact – innovation & presentation style</li>
                    </ul>
                  </div>

                  {/* Disqualification */}
                  <div>
                    <h3 className="font-orbitron font-semibold text-primary mb-2">Disqualification Rules</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Exceeding time limit (even after warning)</li>
                      <li>Copied content / Plagiarism</li>
                      <li>Misbehavior</li>
                    </ul>
                  </div>

                  {/* Prizes */}
                  <div>
                    <h3 className="font-orbitron font-semibold text-primary mb-2">Prizes & Certificates</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Best Paper Presentation Award will be given</li>
                      <li>All participants will receive Participation Certificates</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Event Info Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
                <p className="text-muted-foreground">IT Block</p>
              </Card>

              <Card className="card-cosmic p-6 text-center">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-orbitron font-semibold mb-2">Prizes</h3>
                <p className="text-muted-foreground">₹2,000+ Prize Pool</p>
              </Card>
            </motion.div>

            {/* Registration CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Card className="card-cosmic p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-orbitron font-bold text-cosmic mb-4">Ready to Participate?</h2>
                <p className="text-muted-foreground mb-6">
                  Submit your paper and join us in showcasing innovative research and technical excellence.
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

export default Techscribe;
