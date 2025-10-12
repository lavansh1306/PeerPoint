import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Zap } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      setTimeout(() => navigate("/feed"), 3000);
    };
    sequence();
  }, [controls, navigate]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
    },
  };

  const letters = "PeerPoint".split("");

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-background via-purple-50 to-cyan-50">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-candy-pink/30 to-candy-purple/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-candy-cyan/30 to-candy-blue/30 rounded-full blur-3xl"
        animate={{
          scale: [1.5, 1, 1.5],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 text-center">
        {/* Logo animation */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-12 h-12 text-candy-pink" />
          </motion.div>
          
          <div className="flex">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                initial="hidden"
                animate={controls}
                transition={{
                  delay: i * 0.1,
                  type: "spring" as const,
                  stiffness: 200,
                  damping: 10,
                }}
                className="text-7xl font-black bg-gradient-to-r from-candy-pink via-candy-purple to-candy-cyan bg-clip-text text-transparent"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
          >
            <Zap className="w-12 h-12 text-candy-cyan" />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-2xl font-semibold bg-gradient-to-r from-candy-blue to-candy-purple bg-clip-text text-transparent"
        >
          The Ultimate Doubt-Solving Universe
        </motion.p>

        {/* Loading indicator */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-candy-pink to-candy-purple"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Splash;
