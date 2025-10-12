import { XPBarAnimated } from "@/components/XPBarAnimated";
import { MorphingBackground } from "@/components/MorphingBackground";
import { FloatingParticles } from "@/components/FloatingParticles";
import { motion } from "framer-motion";
import { Trophy, Medal, Crown, Sparkles, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const topUsers = [
    { name: "Aarav Sharma", xp: 8750, level: 45, rank: 1, avatar: "🏆" },
    { name: "Diya Patel", xp: 8200, level: 42, rank: 2, avatar: "🥈" },
    { name: "Rohan Gupta", xp: 7890, level: 40, rank: 3, avatar: "🥉" },
    { name: "Ananya Singh", xp: 7200, level: 38, rank: 4, avatar: "⭐" },
    { name: "Vihaan Kumar", xp: 6850, level: 36, rank: 5, avatar: "💫" },
  ];

  const rankColors = {
    1: "from-candy-orange via-candy-pink to-candy-purple",
    2: "from-candy-cyan to-candy-blue",
    3: "from-candy-lime to-candy-cyan",
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-8 h-8 text-candy-orange" />;
      case 2:
        return <Medal className="w-8 h-8 text-candy-cyan" />;
      case 3:
        return <Trophy className="w-8 h-8 text-candy-lime" />;
      default:
        return <Sparkles className="w-8 h-8 text-candy-purple" />;
    }
  };

  return (
    <div className="min-h-screen relative">
      <MorphingBackground />
      <FloatingParticles />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10 text-candy-pink" />
            <h1 className="text-5xl font-black bg-gradient-to-r from-candy-pink via-candy-purple to-candy-cyan bg-clip-text text-transparent">
              Leaderboard
            </h1>
            <Trophy className="w-10 h-10 text-candy-orange" />
          </div>
          <p className="text-lg text-muted-foreground">
            Top helpers in the PeerPoint universe 🌟
          </p>
        </motion.div>

        {/* Leaderboard */}
        <div className="max-w-4xl mx-auto space-y-4">
          {topUsers.map((user, index) => (
            <motion.div
              key={user.name}
              initial={{ opacity: 0, x: -100, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="relative group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow effect for top 3 */}
              {user.rank <= 3 && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    rankColors[user.rank as keyof typeof rankColors]
                  } rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}

              <div className="relative bg-card rounded-2xl p-6 shadow-lg border border-border">
                <div className="flex items-center gap-6">
                  {/* Rank indicator */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {getRankIcon(user.rank)}
                  </motion.div>

                  {/* Avatar */}
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${
                      user.rank <= 3
                        ? `bg-gradient-to-br ${
                            rankColors[user.rank as keyof typeof rankColors]
                          }`
                        : "bg-gradient-to-br from-candy-purple to-candy-pink"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {user.avatar}
                  </motion.div>

                  {/* User info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {user.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-candy-pink to-candy-purple text-white text-sm font-bold">
                        #{user.rank}
                      </span>
                    </div>
                    <XPBarAnimated
                      current={user.xp}
                      max={10000}
                      level={user.level}
                      delay={index * 0.1}
                    />
                  </div>

                  {/* XP Display */}
                  <div className="text-right">
                    <motion.div
                      className="text-3xl font-black bg-gradient-to-r from-candy-cyan to-candy-purple bg-clip-text text-transparent"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        delay: 0.5 + index * 0.1,
                      }}
                    >
                      {user.xp.toLocaleString()}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">XP</p>
                  </div>
                </div>

                {/* Confetti for rank 1 */}
                {user.rank === 1 && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          background: `hsl(${i * 45}, 100%, 60%)`,
                          left: `${20 + i * 10}%`,
                          top: "50%",
                        }}
                        animate={{
                          y: [-20, -60, -20],
                          x: [0, Math.sin(i) * 30, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
