import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';
import { siteConfig } from '../data/siteConfig';

export const About = () => {
  const paragraphs = siteConfig.bio.description.split('\n\n');

  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-custom">
        <SectionLabel className="mb-8">ABOUT</SectionLabel>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Heading */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-section font-display leading-tight">
                Curious by nature. Technical by choice.
              </h2>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-6">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.1 * (index + 1)}>
                <p className="text-lg md:text-xl text-muted leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
