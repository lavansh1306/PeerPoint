import { motion } from "framer-motion";

export const MorphingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-50 to-cyan-50" />
      
      {/* Animated blob 1 */}
      <motion.div
        className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-gradient-to-br from-candy-pink/30 to-candy-purple/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated blob 2 */}
      <motion.div
        className="absolute w-[500px] h-[500px] top-1/4 -right-32 bg-gradient-to-br from-candy-cyan/30 to-candy-blue/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated blob 3 */}
      <motion.div
        className="absolute w-[550px] h-[550px] bottom-0 left-1/3 bg-gradient-to-br from-candy-lime/20 to-candy-cyan/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated blob 4 */}
      <motion.div
        className="absolute w-[450px] h-[450px] bottom-1/4 right-1/4 bg-gradient-to-br from-candy-orange/20 to-candy-pink/20 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
