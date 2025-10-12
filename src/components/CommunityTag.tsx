import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CommunityTagProps {
  name: string;
  icon: LucideIcon;
  color: string;
  memberCount: number;
  delay?: number;
}

export const CommunityTag = ({
  name,
  icon: Icon,
  color,
  memberCount,
  delay = 0,
}: CommunityTagProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay,
      }}
      whileHover={{ 
        scale: 1.05, 
        rotateZ: 2,
        boxShadow: `0 10px 30px ${color}40`,
      }}
      whileTap={{ scale: 0.95 }}
      className="relative cursor-pointer group"
    >
      <div className={`bg-card rounded-xl p-4 border border-border hover:border-opacity-50 transition-all`}>
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
          style={{ backgroundColor: `${color}30` }}
        />
        
        <div className="relative flex items-center gap-3">
          <motion.div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6" style={{ color }} />
          </motion.div>
          
          <div>
            <h3 className="font-bold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">
              {memberCount.toLocaleString()} members
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
