import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';

export const Services = () => {
  const services = [
    'AI/ML Application Development',
    'Frontend Development',
    'Backend & API Integration',
    'Intelligent Automation',
  ];

  const focus = [
    'Practical AI Applications',
    'Clean and Maintainable Code',
    'Useful User Experiences',
    'Performance and Reliability',
  ];

  const expertise = [
    'Machine Learning',
    'LLM-Based Applications',
    'Multimodal AI',
    'Responsive Web Development',
    'Data Processing',
    'Software Automation',
  ];

  return (
    <section id="services" className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Services */}
          <div>
            <SectionLabel className="mb-8">SERVICES</SectionLabel>
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-lg md:text-xl text-muted hover:text-foreground transition-colors cursor-default"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Focus */}
          <div>
            <SectionLabel className="mb-8">FOCUS</SectionLabel>
            <Reveal delay={0.2}>
              <ul className="space-y-4">
                {focus.map((item, index) => (
                  <li
                    key={index}
                    className="text-lg md:text-xl text-muted hover:text-foreground transition-colors cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Expertise */}
          <div>
            <SectionLabel className="mb-8">EXPERTISE</SectionLabel>
            <Reveal delay={0.3}>
              <ul className="space-y-4">
                {expertise.map((item, index) => (
                  <li
                    key={index}
                    className="text-lg md:text-xl text-muted hover:text-foreground transition-colors cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
