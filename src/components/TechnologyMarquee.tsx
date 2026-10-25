import { marqueeSkills } from '../data/skills';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const TechnologyMarquee = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mt-12 py-12 border-y border-border overflow-hidden">
      <div
        className={`flex gap-8 ${
          prefersReducedMotion ? '' : 'animate-marquee'
        }`}
      >
        {/* Duplicate items for seamless loop */}
        {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
          <span
            key={index}
            className="text-4xl md:text-5xl lg:text-6xl font-display text-muted/30 whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
