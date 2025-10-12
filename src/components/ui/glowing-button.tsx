import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "pink" | "cyan" | "purple" | "orange" | "lime";
}

const variantStyles = {
  pink: "bg-gradient-to-r from-candy-pink to-candy-purple shadow-glow-pink hover:shadow-glow-pink",
  cyan: "bg-gradient-to-r from-candy-cyan to-candy-blue shadow-glow-cyan hover:shadow-glow-cyan",
  purple: "bg-gradient-to-r from-candy-purple to-candy-pink shadow-glow-purple hover:shadow-glow-purple",
  orange: "bg-gradient-to-r from-candy-orange to-candy-pink shadow-glow-pink",
  lime: "bg-gradient-to-r from-candy-lime to-candy-cyan shadow-glow-cyan",
};

const GlowingButton = forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, variant = "pink", children, onClick, disabled, type, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          "relative px-6 py-3 rounded-full font-semibold text-white overflow-hidden",
          "transition-all duration-300",
          variantStyles[variant],
          className
        )}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

GlowingButton.displayName = "GlowingButton";

export { GlowingButton };
