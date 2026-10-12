import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, BadgeCheckIcon, StarIcon } from 'lucide-react';
import { trustItems } from '../../data/reviews';
import { Button } from '../ui/Button';
import { TrustBadge } from '../ui/TrustBadge';
import { ShowcaseMarquee } from './ShowcaseMarquee';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-white" aria-labelledby="hero-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-420px] h-[760px] w-[1200px] -translate-x-1/2 rounded-full bg-brand-lavender opacity-70" />
      
      <div className="relative mx-auto max-w-5xl px-5 pb-14 pt-14 text-center lg:pb-16 lg:pt-24">
        <motion.a
          href="#services"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D6C7FF] bg-white py-1 pl-1 pr-3 text-sm font-semibold text-brand-ink shadow-sm transition-colors hover:border-brand-purple">
          
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-purple px-2.5 py-0.5 text-xs text-white">
            <BadgeCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Verified
          </span>
          Sharetribe Expert · 35+ projects shipped
          <ArrowRightIcon className="h-3.5 w-3.5 text-brand-purple" aria-hidden="true" />
        </motion.a>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="mx-auto mt-7 max-w-4xl font-heading text-[42px] font-semibold leading-[1.04] tracking-[-0.03em] text-brand-navy sm:text-6xl lg:text-[80px]">
          
          Build, customise and grow your <span className="text-brand-purple">Sharetribe marketplace</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.18 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-brand-muted sm:text-xl">
          
          Senior engineers who have shipped 35+ Sharetribe projects for founders in the US, Canada, Europe, NZ and
          Australia. Honest native-vs-custom advice, published prices and fixed-price scopes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.26 }}
          className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          
          <Button to="/#contact" size="lg">
            Book a free 15-minute consultation
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button to="/sharetribe-expert#feature-menu" variant="secondary" size="lg">
            See feature pricing
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          
          <span className="flex" aria-label="5 out of 5 stars">
            {[0, 1, 2, 3, 4].map((i) =>
            <StarIcon key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            )}
          </span>
          <span className="text-[15px] text-brand-muted">
            <span className="font-semibold text-brand-ink">5.0</span> across Clutch, Google and GoodFirms
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.35 }}
        className="relative pb-14">
        
        <ShowcaseMarquee />
      </motion.div>

      <div className="relative border-t border-brand-line bg-white">
        <ul className="mx-auto grid max-w-site gap-6 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8" aria-label="Credentials and reviews">
          {trustItems.map((item) =>
          <li key={item.label}>
              <TrustBadge item={item} />
            </li>
          )}
        </ul>
      </div>
    </section>);

}