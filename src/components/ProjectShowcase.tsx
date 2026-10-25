import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const ProjectShowcase = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current || !sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      // Desktop: Pin the container while scrolling through projects
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${projects.length * 100}%`,
        pin: containerRef.current,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * projects.length),
            projects.length - 1
          );
          setActiveProject(newIndex);
        },
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [prefersReducedMotion]);

  const handleThumbnailClick = (index: number) => {
    setActiveProject(index);
  };

  const project = projects[activeProject];

  return (
    <div ref={sectionRef} className="relative bg-background">
      {/* Pinned Container */}
      <section
        ref={containerRef}
        id="projects"
        className="min-h-screen w-full bg-background flex items-center py-12 md:py-16 lg:py-0"
      >
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
            {/* LEFT SIDE - Navigation & Info */}
            <div className="lg:col-span-5 space-y-4 md:space-y-6">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3 md:space-y-4"
              >
                <p className="text-xs md:text-sm text-muted tracking-[0.2em]">
                  SELECTED PROJECTS
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display leading-[0.9] text-foreground">
                  FEATURED<br />WORK
                </h2>
              </motion.div>

              {/* Project Thumbnails */}
              <div className="space-y-1 pt-4 md:pt-6">
                {projects.map((proj, index) => (
                  <motion.button
                    key={proj.id}
                    onClick={() => handleThumbnailClick(index)}
                    className={`flex items-center gap-3 md:gap-4 w-full p-2 rounded-lg transition-all group ${index === activeProject
                      ? 'opacity-100'
                      : 'opacity-40 hover:opacity-70'
                      }`}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-12 h-9 md:w-16 md:h-12 bg-foreground/5 rounded overflow-hidden border border-border flex-shrink-0">
                      {proj.visual.type === 'image' && proj.visual.image ? (
                        <img 
                          src={proj.visual.image} 
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-muted">
                          {proj.number}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-xs md:text-sm font-medium ${index === activeProject ? 'text-foreground' : 'text-muted'
                        }`}>
                        {proj.title}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full transition-all ${index === activeProject ? 'bg-accent scale-125' : 'bg-border'
                      }`} />
                  </motion.button>
                ))}
              </div>

              {/* View All Button - Hidden on mobile, visible on tablet+ */}
              <motion.button
                className="hidden md:inline-block px-4 md:px-6 py-2 md:py-3 bg-foreground text-background text-xs md:text-sm font-medium tracking-wider hover:bg-foreground/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                VIEW ALL
              </motion.button>

              {/* Progress Indicator */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-foreground flex items-center justify-center">
                  <span className="text-xs font-medium">{activeProject + 1}</span>
                </div>
                <div className="text-xs text-muted">/ {projects.length}</div>
              </div>
            </div>

            {/* RIGHT SIDE - Featured Project */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? {} : { opacity: 0, y: -40 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.7,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="flex items-baseline gap-2 text-xs md:text-sm">
                    <span className="text-muted">{project.number}</span>
                    <span className="text-muted">/ 0{projects.length}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display leading-tight text-foreground">
                    {project.title.toUpperCase()}
                  </h3>

                  {/* Project Visual */}
                  <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-foreground/5 border border-border aspect-video w-full">
                    {project.visual.type === 'image' && project.visual.image && (
                      <img 
                        src={project.visual.image} 
                        alt={`${project.title} - ${project.description}`}
                        className="w-full h-full object-cover object-center"
                      />
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
                    <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-foreground/5 border border-border rounded text-xs text-muted">
                      <span className="uppercase tracking-wider">{project.category}</span>
                    </div>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <div
                        key={tech}
                        className="px-2 md:px-3 py-1 md:py-1.5 bg-foreground/5 border border-border rounded text-xs text-muted"
                      >
                        {tech}
                      </div>
                    ))}
                    {project.status && (
                      <div className="px-2 md:px-3 py-1 md:py-1.5 bg-accent/10 border border-accent/30 rounded text-xs text-accent">
                        {project.status}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-4 md:gap-6 pt-2 md:pt-4">
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs md:text-sm text-foreground hover:text-accent transition-colors group"
                      >
                        <span className="border-b border-foreground group-hover:border-accent transition-colors">
                          View Repository
                        </span>
                        <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
