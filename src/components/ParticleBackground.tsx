import { motion } from "framer-motion";

export function ParticleBackground() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 20,
    duration: Math.random() * 10 + 15,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-cosmic-drift" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-cosmic-drift" style={{ animationDelay: '5s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-nebula-rotate" style={{ animationDelay: '10s' }} />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            opacity: [0, 1, 1, 0],
            scale: [1, 1.5, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Stars */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            width: Math.random() * 100 + 50,
            top: `${Math.random() * 100}%`,
            left: "-10%",
          }}
          animate={{
            x: ["0vw", "110vw"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 10,
            repeat: Infinity,
            repeatDelay: Math.random() * 15 + 5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}