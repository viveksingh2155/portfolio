import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 w-full z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.8, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.4 }
        }}
      >
        <div className="container-custom">
          <motion.div 
            className="flex items-center justify-between"
            animate={{
              paddingTop: isScrolled ? '12px' : '16px',
              paddingBottom: isScrolled ? '12px' : '24px',
            }}
            transition={{ 
              duration: prefersReducedMotion ? 0 : 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg md:text-xl font-semibold tracking-tight hover:text-muted relative z-10"
              animate={{
                opacity: isScrolled ? 0 : 1,
                scale: isScrolled ? 0.9 : 1,
                x: isScrolled ? -20 : 0,
              }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ scale: isScrolled ? 0.9 : 1.02 }}
              whileTap={{ scale: isScrolled ? 0.9 : 0.98 }}
              style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
            >
              VIVEK SINGH
            </motion.button>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden md:flex items-center relative"
              layout
              animate={{
                gap: isScrolled ? '24px' : '32px',
              }}
              transition={{ 
                layout: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                gap: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              {/* Background pill */}
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                  opacity: isScrolled ? 1 : 0,
                  scale: isScrolled ? 1 : 0.95,
                }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  backgroundColor: 'rgba(10, 10, 11, 0.8)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '9999px',
                  padding: '16px 24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isScrolled ? '0 4px 16px rgba(0, 0, 0, 0.3)' : 'none',
                }}
              />
            {/* Nav items with staggered animation */}
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-sm py-3 px-8 text-muted hover:text-foreground transition-colors relative z-10"
              animate={{
                paddingLeft: isScrolled ? '16px' : '0px',
                paddingRight: isScrolled ? '0px' : '0px',
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              ABOUT
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="text-sm text-muted hover:text-foreground transition-colors relative z-10"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              PROJECTS
            </motion.button>
                                   
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors relative z-10"
              animate={{
                paddingRight: isScrolled ? '16px' : '24px',
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
            </motion.button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:text-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onNavigate={scrollToSection} />
    </>
  );
};
