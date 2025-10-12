import { AnimatedPostCard } from "@/components/AnimatedPostCard";
import { CommunityTag } from "@/components/CommunityTag";
import { FloatingParticles } from "@/components/FloatingParticles";
import { MorphingBackground } from "@/components/MorphingBackground";
import { GlowingButton } from "@/components/ui/glowing-button";
import { motion } from "framer-motion";
import { Plus, Code, Cpu, Calculator, Atom, Sparkles, TrendingUp } from "lucide-react";

const Feed = () => {
  const communities = [
    { name: "CSE", icon: Code, color: "#4169FF", memberCount: 1250 },
    { name: "ECE", icon: Cpu, color: "#B24BF3", memberCount: 890 },
    { name: "Maths", icon: Calculator, color: "#CCFF00", memberCount: 760 },
    { name: "Physics", icon: Atom, color: "#FF6B1A", memberCount: 540 },
  ];

  const posts = [
    {
      title: "How to implement binary search tree in Python?",
      author: "Rahul Kumar",
      subject: "CSE",
      likes: 24,
      replies: 8,
      isHot: true,
    },
    {
      title: "Can someone explain Kirchhoff's laws with examples?",
      author: "Priya Singh",
      subject: "ECE",
      likes: 18,
      replies: 5,
    },
    {
      title: "Need help with integration by parts",
      author: "Arjun Patel",
      subject: "Maths",
      likes: 31,
      replies: 12,
      isHot: true,
    },
    {
      title: "Quantum mechanics - wave particle duality confusion",
      author: "Sneha Reddy",
      subject: "Physics",
      likes: 15,
      replies: 6,
    },
  ];

  return (
    <div className="min-h-screen relative">
      <MorphingBackground />
      <FloatingParticles />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-candy-pink" />
            <h1 className="text-4xl font-black bg-gradient-to-r from-candy-pink via-candy-purple to-candy-cyan bg-clip-text text-transparent">
              PeerPoint
            </h1>
          </div>
          
          <GlowingButton variant="pink" className="gap-2">
            <Plus className="w-5 h-5" />
            Ask Doubt
          </GlowingButton>
        </motion.header>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Communities Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-candy-pink" />
                <h2 className="text-xl font-bold text-foreground">Communities</h2>
              </div>
              {communities.map((community, index) => (
                <CommunityTag
                  key={community.name}
                  {...community}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </motion.aside>

          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <h2 className="text-2xl font-bold text-foreground">Recent Doubts</h2>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-candy-cyan" />
              </motion.div>
            </motion.div>

            {posts.map((post, index) => (
              <AnimatedPostCard
                key={index}
                {...post}
                delay={0.5 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
