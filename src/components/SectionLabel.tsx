import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SectionLabelProps {
  children: string;
  className?: string;
}

export const SectionLabel = ({ children, className = '' }: SectionLabelProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="text-xs md:text-sm tracking-widest text-muted uppercase"
        initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.6,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
