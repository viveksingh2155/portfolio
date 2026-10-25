import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface MobileMenuProps {
  isOpen: boolean;
  onNavigate: (id: string) => void;
}

export const MobileMenu = ({ isOpen, onNavigate }: MobileMenuProps) => {
  const prefersReducedMotion = useReducedMotion();

  const menuItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-background md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-2xl font-display hover:text-muted transition-colors"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  delay: index * 0.1,
                }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => onNavigate('contact')}
              className="mt-4 px-8 py-3 bg-foreground text-background text-lg font-medium rounded-full"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: 0.3,
              }}
            >
              GET IN TOUCH
            </motion.button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
