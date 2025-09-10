import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ParticleBackground } from "@/components/ParticleBackground";

const Secret = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      <ParticleBackground />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Card className="p-8 text-center bg-neutral-900/70 border border-neutral-700 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-accent mb-6">
              SECRET CHALLENGE
            </h1>
            <p className="text-muted-foreground mb-6">
              Shhh 🤫… Only the curious will notice what hides in the dark.
            </p>

            {/* Hidden binary clue */}
            <motion.p
              className="text-sm md:text-base font-mono opacity-20 hover:opacity-80 transition duration-500 text-accent/70 blur-[1px] hover:blur-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              whileHover={{ opacity: 0.8 }}
            >
              01101110 01100001 01101110 00100000 01100100 01101000 01100001 01101110 00100000 01100100 01100001 00100000 01101100 01100101 01101111
            </motion.p>

            <p className="text-muted-foreground mt-8">
              If you decode the hidden message, whisper the phrase to{" "}
              <span className="text-accent font-bold">Santhosh</span> in the department.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Secret;
