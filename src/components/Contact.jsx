import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  ArrowDownToLine,
  ArrowUpRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import { portfolioData } from '@/data/portfolioData';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { email, github, linkedin, resumeUrl, location } = portfolioData.personal;
  const { heading, description } = portfolioData.contact;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const links = [
    {
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
      external: false,
      download: false,
    },
    {
      label: 'GitHub',
      value: 'github.com/Yaseen-md',
      href: github,
      icon: Github,
      external: true,
      download: false,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/mohammed-yaseen',
      href: linkedin,
      icon: Linkedin,
      external: true,
      download: false,
    },
    {
      label: 'Resume',
      value: 'Mohammed_Yaseen_Resume.pdf',
      href: resumeUrl,
      icon: ArrowDownToLine,
      external: false,
      download: true,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-subtle/80">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader index="06" label="Contact" title={heading} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Direct Email CTA Column */}
          <div className="lg:col-span-6">
            <p className="text-base text-secondary leading-relaxed max-w-[54ch]">
              {description}
            </p>

            <p className="mt-4 font-mono text-xs text-muted">Based in {location}</p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button variant="primary" asChild className="w-full sm:w-auto">
                <a href={`mailto:${email}`}>
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Email me
                </a>
              </Button>

              <Button
                type="button"
                variant="secondary"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-accent-secondary" aria-hidden="true" />
                    Email copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-muted" aria-hidden="true" />
                    Copy email address
                  </>
                )}
              </Button>
            </div>

            <span className="sr-only" role="status" aria-live="polite">
              {copied ? 'Email address copied to clipboard.' : ''}
            </span>
          </div>

          {/* Structured Links Column */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-subtle bg-surface divide-y divide-subtle overflow-hidden">
              {links.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    download={item.download ? 'Mohammed_Yaseen_Resume.pdf' : undefined}
                    className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-elevated/60 transition-colors duration-fast group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <Icon
                        className="w-4 h-4 text-accent shrink-0"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                          {item.label}
                        </p>
                        <p className="text-sm text-ink break-all sm:truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className="w-4 h-4 text-muted group-hover:text-accent shrink-0 transition-colors duration-fast"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
