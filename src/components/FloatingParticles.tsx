import { motion } from "framer-motion";
import { Lightbulb, MessageCircle, Flame, HelpCircle, Sparkles, Zap } from "lucide-react";

const icons = [Lightbulb, MessageCircle, Flame, HelpCircle, Sparkles, Zap];

export const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(12)].map((_, i) => {
        const Icon = icons[i % icons.length];
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = 15 + Math.random() * 10;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: "-10%",
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, Math.sin(i) * 50, 0],
              rotate: [0, 360],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
          >
            <Icon 
              className="w-8 h-8"
              style={{
                color: `hsl(${(i * 60) % 360}, 100%, 60%)`,
                filter: `drop-shadow(0 0 8px hsl(${(i * 60) % 360}, 100%, 60%))`,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
