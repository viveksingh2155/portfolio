import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';
import { skills } from '../data/skills';

export const Skills = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-custom">
        <SectionLabel className="mb-16">TECHNICAL SKILLS</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {skills.map((skillGroup, index) => (
            <Reveal key={skillGroup.category} delay={0.1 * index}>
              <div>
                <h3 className="text-sm font-medium mb-6 tracking-wider">
                  {skillGroup.category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm border border-border rounded-full text-muted hover:text-foreground hover:border-foreground/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
