import { motion } from "framer-motion";

interface LetterAnimationProps {
  text: string;
  className?: string;
}

export function LetterAnimation({ text, className = "" }: LetterAnimationProps) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="letter-hover"
          whileHover={{
            y: -8,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          style={{
            display: char === " " ? "inline" : "inline-block",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
