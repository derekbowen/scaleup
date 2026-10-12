import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon } from 'lucide-react';
import { footerColumns } from '../../data/navigation';
import { trustItems } from '../../data/reviews';
import { Logo } from '../ui/Logo';
import { TrustBadge } from '../ui/TrustBadge';

export function Footer() {
  return (
    <footer className="on-dark bg-brand-ink text-[#C9C9DE]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-site px-5 pb-10 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-base leading-relaxed">
              Senior engineers building, customising and growing Sharetribe marketplaces and custom software for founders worldwide.
            </p>
            <address className="mt-6 space-y-3 not-italic">
              <p className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#B9A6FF]" aria-hidden="true" />
                <span>
                  Sydney HQ · 477 Pitt St, Haymarket NSW 2000, Australia
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-[#B9A6FF]" aria-hidden="true" />
                <a href="mailto:hello@scaleupconsulting.com.au" className="hover:text-white">
                  hello@scaleupconsulting.com.au
                </a>
              </p>
            </address>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/scaleup-consulting"
                target="_blank"
                rel="noreferrer"
                aria-label="Scaleup Consulting on LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-[10px] bg-white/5 text-white transition-colors hover:bg-brand-purple">
                
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm7 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@scaleupconsulting"
                target="_blank"
                rel="noreferrer"
                aria-label="Scaleup Consulting on YouTube"
                className="grid h-10 w-10 place-items-center rounded-[10px] bg-white/5 text-white transition-colors hover:bg-brand-purple">
                
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {footerColumns.map((column) =>
            <div key={column.title}>
                <h3 className="font-heading text-sm font-semibold text-white">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) =>
                <li key={link.label}>
                      <Link to={link.href} className="text-base transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) =>
          <TrustBadge key={item.label} item={item} tone="dark" />
          )}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm sm:flex-row sm:justify-between">
          <p>© 2026 Scaleup Consulting Pty Ltd. All rights reserved.</p>
          <p>Prices shown in AUD excluding GST unless stated otherwise.</p>
        </div>
      </div>
    </footer>);

}