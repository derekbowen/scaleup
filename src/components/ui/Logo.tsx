import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ tone = 'light' }: {tone?: 'light' | 'dark';}) {
  const dark = tone === 'dark';
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Scaleup Consulting home">
      <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-brand-purple" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <rect x="4" y="13" width="4" height="7" rx="1.2" fill="#fff" opacity="0.6" />
          <rect x="10" y="9" width="4" height="11" rx="1.2" fill="#fff" opacity="0.8" />
          <rect x="16" y="4" width="4" height="16" rx="1.2" fill="#fff" />
        </svg>
      </span>
      <span
        className={`font-heading text-[17px] font-semibold tracking-tight ${dark ? 'text-white' : 'text-brand-navy'}`}>
        
        Scaleup <span className={dark ? 'text-[#B9A6FF]' : 'text-brand-purple'}>Consulting</span>
      </span>
    </Link>);

}