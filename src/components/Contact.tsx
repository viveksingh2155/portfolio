import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check, Copy } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';
import { siteConfig } from '../data/siteConfig';

export const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  // Open Gmail compose in browser
  const openGmail = () => {
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(`Hi Vivek,\n\nI came across your portfolio and would like to discuss...`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${subject}&body=${body}`, '_blank');
  };

  // Open Outlook compose in browser
  const openOutlook = () => {
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(`Hi Vivek,\n\nI came across your portfolio and would like to discuss...`);
    window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${siteConfig.email}&subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-custom">
        <SectionLabel className="mb-12 md:mb-16">CONTACT</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
          {/* Headline */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight mb-6 md:mb-8">
                LET'S BUILD SOMETHING USEFUL.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base md:text-lg lg:text-xl text-muted leading-relaxed mb-8 md:mb-12">
                Have an interesting problem to solve? I am open to discussing software
                engineering, AI/ML projects, and suitable internship or development
                opportunities.
              </p>
            </Reveal>

            {/* CTA Button */}
            <Reveal delay={0.4}>
              <motion.button
                onClick={openGmail}
                className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-foreground text-background rounded-full text-base md:text-lg font-medium hover:bg-foreground/90 transition-colors w-full sm:w-auto justify-center sm:justify-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Send Me a Message</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Reveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            {/* Email */}
            <Reveal delay={0.2}>
              <div>
                <div className="text-xs text-muted mb-3 tracking-wider">EMAIL</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={copyEmail}
                      className="text-base md:text-lg hover:text-accent transition-colors cursor-pointer break-all"
                    >
                      {siteConfig.email}
                    </button>
                    <button
                      onClick={copyEmail}
                      className="p-2 hover:bg-muted/10 rounded-full transition-colors flex-shrink-0"
                      aria-label="Copy email"
                      title={emailCopied ? 'Copied!' : 'Copy email'}
                    >
                      {emailCopied ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <motion.button
                      onClick={openGmail}
                      className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/10 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={16} />
                      <span>Gmail</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.button
                      onClick={openOutlook}
                      className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/10 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={16} />
                      <span>Outlook</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Phone */}
            <Reveal delay={0.3}>
              <div>
                <div className="text-xs text-muted mb-3 tracking-wider">PHONE</div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <motion.a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/10 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>Call Now</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      href={`sms:${siteConfig.phone}`}
                      className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2 border border-border rounded-full text-sm hover:bg-muted/10 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      title="Send SMS"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                      <span>SMS</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Location */}
            <Reveal delay={0.4}>
              <div>
                <div className="text-xs text-muted mb-3 tracking-wider">LOCATION</div>
                <p className="text-base md:text-lg">{siteConfig.location}</p>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.5}>
              <div>
                <div className="text-xs text-muted mb-3 tracking-wider">CONNECT</div>
                <div className="flex items-center gap-4 flex-wrap">
                  <motion.a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span>LinkedIn</span>
                  </motion.a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
