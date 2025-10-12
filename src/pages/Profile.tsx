import { MorphingBackground } from "@/components/MorphingBackground";
import { FloatingParticles } from "@/components/FloatingParticles";
import { XPBarAnimated } from "@/components/XPBarAnimated";
import { motion } from "framer-motion";
import { Award, Flame, Heart, MessageCircle, Sparkles, TrendingUp, Zap } from "lucide-react";

const Profile = () => {
  const badges = [
    { name: "Helper Hero", icon: Heart, color: "#FF1493", description: "Helped 50+ students" },
    { name: "Fast Responder", icon: Zap, color: "#CCFF00", description: "Quick replies" },
    { name: "Hot Streak", icon: Flame, color: "#FF6B1A", description: "7 day streak" },
    { name: "Top Contributor", icon: Award, color: "#00D9FF", description: "100+ answers" },
  ];

  return (
    <div className="min-h-screen relative">
      <MorphingBackground />
      <FloatingParticles />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border mb-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-candy-pink via-candy-purple to-candy-cyan opacity-20" />
            
            <div className="relative flex items-start gap-6">
              {/* Avatar with pulsating ring */}
              <motion.div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-candy-pink via-candy-purple to-candy-cyan"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="relative w-32 h-32 rounded-full bg-gradient-to-br from-candy-pink via-candy-purple to-candy-cyan flex items-center justify-center text-5xl shadow-glow-purple"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  🎓
                </motion.div>
              </motion.div>

              {/* User info */}
              <div className="flex-1 pt-4">
                <h1 className="text-4xl font-black text-foreground mb-2">Aarav Sharma</h1>
                <p className="text-lg text-muted-foreground mb-4">Computer Science Engineering</p>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-candy-cyan" />
                    <span className="font-semibold text-foreground">156 Answers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-candy-pink" />
                    <span className="font-semibold text-foreground">892 Likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-candy-lime" />
                    <span className="font-semibold text-foreground">Rank #1</span>
                  </div>
                </div>

                <XPBarAnimated current={8750} max={10000} level={45} />
              </div>
            </div>
          </div>

          {/* Badges Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-candy-pink" />
              <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.3 + index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    rotateZ: 2,
                  }}
                  className="relative group cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                    style={{ backgroundColor: `${badge.color}40` }}
                  />
                  
                  <div className="relative bg-card rounded-xl p-6 border border-border shadow-lg">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-16 h-16 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${badge.color}20` }}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <badge.icon className="w-8 h-8" style={{ color: badge.color }} />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {badge.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {badge.description}
                        </p>
                      </div>
                    </div>

                    {/* Sparkle effect on hover */}
                    <motion.div
                      className="absolute top-2 right-2"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <Sparkles className="w-4 h-4" style={{ color: badge.color }} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
