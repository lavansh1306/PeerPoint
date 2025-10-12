import { motion } from "framer-motion";

interface XPBarAnimatedProps {
  current: number;
  max: number;
  level: number;
  delay?: number;
}

export const XPBarAnimated = ({ current, max, level, delay = 0 }: XPBarAnimatedProps) => {
  const percentage = (current / max) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Level {level}</span>
        <span className="text-sm font-medium text-muted-foreground">
          {current} / {max} XP
        </span>
      </div>
      
      <div className="relative h-6 bg-muted rounded-full overflow-hidden">
        {/* Background shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* XP Fill */}
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-candy-pink via-candy-purple to-candy-cyan rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 1.5,
            delay,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {/* Liquid wave effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.5) 75%)",
              backgroundSize: "20px 20px",
            }}
          />
        </motion.div>
        
        {/* Glow effect on the end */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-candy-cyan/50 to-transparent blur-sm"
          style={{ left: `${percentage}%` }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};
