import React from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  id
}: SectionHeadingProps) {
  const centered = align === 'center';
  const dark = tone === 'dark';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow &&
      <p
        className={`font-heading text-xs font-semibold uppercase tracking-[0.14em] ${
        dark ? 'text-[#B9A6FF]' : 'text-brand-purple'}`
        }>
        
          {eyebrow}
        </p>
      }
      <h2
        id={id}
        className={`mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-[38px] ${
        dark ? 'text-white' : 'text-brand-navy'}`
        }>
        
        {title}
      </h2>
      {description &&
      <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-[#C9C9DE]' : 'text-brand-muted'}`}>
          {description}
        </p>
      }
    </div>);

}