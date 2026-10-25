import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const AnimatedText = ({ 
  text, 
  className = '', 
  delay = 0,
  as = 'p' 
}: AnimatedTextProps) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  const words = text.split(' ');

  return (
    <Component className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: delay + (index * 0.03),
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
};
