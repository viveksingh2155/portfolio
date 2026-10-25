import { motion } from 'framer-motion';
import { ArrowRight, Mouse } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-xs md:text-sm text-muted tracking-widest">
                AI & SOFTWARE
              </div>
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full text-xs"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.4 }}
              >
                <span className="text-muted">OPEN TO OPPORTUNITIES</span>
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3 md:space-y-4">
              <AnimatedText
                as="h1"
                text="AI & Software Developer"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-hero font-display leading-[0.95] tracking-tight"
                delay={0.6}
              />
              <motion.p
                className="text-base md:text-lg lg:text-xl text-muted max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 1.2 }}
              >
                Building intelligent systems and thoughtful digital experiences.
              </motion.p>
            </div>

            {/* Tech Stack Labels */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 1.4 }}
            >
              {['Python', 'React', 'Machine Learning', 'LLMs'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 md:px-3 py-1 text-xs md:text-sm border border-border rounded-full text-muted"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">Let's Work Together</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Metadata */}
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 1.8 }}
            >
              <div>
                <div className="text-xs text-muted mb-1">IDENTITY</div>
                <div className="text-sm font-medium">Vivek Singh</div>
              </div>
              <div>
                <div className="text-xs text-muted mb-1">PORTFOLIO</div>
                <div className="text-sm font-medium">Developer / 2026</div>
              </div>
              <div>
                <div className="text-xs text-muted mb-1">LOCATION</div>
                <div className="text-sm font-medium">India</div>
              </div>
              <div>
                <div className="text-xs text-muted mb-1">EDUCATION</div>
                <div className="text-sm font-medium">B.E. ISE, NMIT</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Developer Photo */}
          <motion.div
            className="relative aspect-square max-w-md mx-auto lg:max-w-lg order-first lg:order-last"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: prefersReducedMotion ? 0 : 0.8, 
              delay: 0.8,
              ease: [0.33, 1, 0.68, 1]
            }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.015 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl md:rounded-3xl blur-3xl"></div>
            
            {/* Photo Container */}
            <div className="relative w-full h-full border border-border rounded-2xl md:rounded-3xl overflow-hidden bg-background/50 backdrop-blur-sm">
              <motion.img
                src="/images/vivek.png"
                alt="Vivek Singh working at a computer"
                className="w-full h-full object-cover object-[center_20%]"
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 1, 
                  delay: 1,
                  ease: [0.33, 1, 0.68, 1]
                }}
              />
              
              {/* Subtle bottom gradient overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors group"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.6,
          delay: 2,
        }}
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Mouse size={20} className="group-hover:scale-110 transition-transform" />
        </motion.div>
      </motion.button>
    </section>
  );
};
