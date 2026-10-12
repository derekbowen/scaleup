import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from './Button';

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="on-dark bg-white px-5 pb-20 lg:px-8 lg:pb-28" aria-labelledby="cta-banner-title">
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[14px] bg-brand-navy px-6 py-12 sm:px-12 lg:py-16">
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-purple opacity-25" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="cta-banner-title" className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-[#C9C9DE]">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/#contact" variant="light" size="lg">
              Book a free 15-minute consultation
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button to="/sharetribe-expert#feature-menu" variant="outlineLight" size="lg">
              See feature pricing
            </Button>
          </div>
        </div>
      </div>
    </section>);

}