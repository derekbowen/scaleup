import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon, StarIcon } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];
  const go = (delta: number) => setIndex((i) => (i + delta + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading
          id="testimonials-title"
          eyebrow="What founders say"
          title="Clear answers, delivered work"
          align="center" />
        
        <div
          className="relative mx-auto mt-12 max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials">
          
          <div className="rounded-[14px] border border-brand-line bg-white p-8 shadow-card sm:p-12">
            <QuoteIcon className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <div aria-live="polite" className="min-h-[200px] sm:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={current.name}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25 }}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${testimonials.length}`}>
                  
                  <blockquote className="mt-5 font-heading text-xl font-medium leading-relaxed text-brand-navy sm:text-2xl">
                    “{current.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-lavender font-heading text-sm font-semibold text-brand-purple">
                      {current.initials}
                    </span>
                    <span>
                      <span className="block font-heading text-base font-semibold text-brand-navy">{current.name}</span>
                      <span className="block text-sm text-brand-muted">
                        {current.role}, {current.company}
                      </span>
                    </span>
                    <span className="ml-auto hidden sm:flex" aria-label="5 out of 5 stars">
                      {[0, 1, 2, 3, 4].map((i) =>
                      <StarIcon key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                      )}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-line bg-white text-brand-navy transition-colors hover:border-brand-purple hover:text-brand-purple">
              
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) =>
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-brand-purple' : 'w-2.5 bg-[#CFC4FF]'}`} />

              )}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-line bg-white text-brand-navy transition-colors hover:border-brand-purple hover:text-brand-purple">
              
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}