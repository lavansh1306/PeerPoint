import { motion } from "framer-motion";
import { Heart, MessageCircle, Flame, User } from "lucide-react";
import { useState } from "react";

interface AnimatedPostCardProps {
  title: string;
  author: string;
  subject: string;
  likes: number;
  replies: number;
  isHot?: boolean;
  delay?: number;
}

export const AnimatedPostCard = ({
  title,
  author,
  subject,
  likes,
  replies,
  isHot = false,
  delay = 0,
}: AnimatedPostCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const subjectColors: Record<string, string> = {
    CSE: "from-candy-blue to-candy-cyan",
    ECE: "from-candy-purple to-candy-pink",
    Maths: "from-candy-lime to-candy-cyan",
    Physics: "from-candy-orange to-candy-pink",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      }}
      whileHover={{ 
        y: -8, 
        rotateX: 5,
        rotateY: isHovered ? 5 : 0,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-candy-pink/20 to-candy-purple/20 rounded-2xl blur-xl"
        animate={{
          opacity: isHovered ? 1 : 0.5,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative bg-card rounded-2xl p-6 shadow-lg border border-border overflow-hidden">
        {isHot && (
          <motion.div
            className="absolute top-4 right-4"
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Flame className="w-6 h-6 text-candy-orange" fill="currentColor" />
          </motion.div>
        )}
        
        <div className="flex items-start gap-4">
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-candy-pink to-candy-purple flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <User className="w-6 h-6 text-white" />
          </motion.div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-foreground">{author}</span>
              <span 
                className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${
                  subjectColors[subject] || "from-candy-blue to-candy-cyan"
                }`}
              >
                {subject}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
                className="flex items-center gap-2 text-muted-foreground hover:text-candy-pink transition-colors"
              >
                <Heart 
                  className="w-5 h-5" 
                  fill={isLiked ? "currentColor" : "none"}
                />
                <span className="font-semibold">{likes + (isLiked ? 1 : 0)}</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-candy-cyan transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">{replies}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
