import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';
import { credentials } from '../data/credentials';

export const Credentials = () => {
  const certifications = credentials.filter((c) => c.type === 'certification');
  const education = credentials.filter((c) => c.type === 'education');
  const highlights = credentials.filter((c) => c.type === 'highlight');

  return (
    <section className="section-padding border-t border-border">
      <div className="container-custom">
        <SectionLabel className="mb-16">RECOGNITION & LEARNING</SectionLabel>

        <div className="space-y-16">
          {/* Certifications */}
          <div>
            <Reveal>
              <h3 className="text-xl font-medium mb-8">Certifications</h3>
            </Reveal>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-border/50 last:border-0">
                    <div className="md:col-span-2 text-sm text-muted">{cert.year}</div>
                    <div className="md:col-span-10">
                      <h4 className="text-lg font-medium mb-1">{cert.title}</h4>
                      <p className="text-muted">{cert.organization}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <Reveal>
              <h3 className="text-xl font-medium mb-8">Education</h3>
            </Reveal>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Reveal key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-border/50 last:border-0">
                    <div className="md:col-span-2 text-sm text-muted">{edu.date}</div>
                    <div className="md:col-span-10">
                      <h4 className="text-lg font-medium mb-1">{edu.title}</h4>
                      <p className="text-muted mb-2">{edu.organization}</p>
                      {edu.description && (
                        <p className="text-sm text-muted">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <Reveal>
              <h3 className="text-xl font-medium mb-8">Additional Highlights</h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="p-6 border border-border rounded-2xl">
                    <h4 className="text-lg font-medium mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted">{highlight.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
