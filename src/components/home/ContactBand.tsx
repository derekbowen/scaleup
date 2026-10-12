import React from 'react';
import { MailIcon } from 'lucide-react';
import { BookingCard } from './BookingCard';
import { ContactForm } from './ContactForm';

export function ContactBand() {
  return (
    <section id="contact" className="on-dark bg-brand-navy py-20 lg:py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-[#B9A6FF]">Let’s talk</p>
          <h2 id="contact-title" className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-[40px]">
            Get a straight answer on your marketplace
          </h2>
          <p className="mt-4 text-lg text-[#C9C9DE]">
            Book 15 minutes with a senior engineer. You’ll leave knowing what’s native, what needs building and roughly what it costs.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-base text-[#C9C9DE]">
            <MailIcon className="h-4 w-4 text-[#B9A6FF]" aria-hidden="true" />
            Or email{' '}
            <a href="mailto:hello@scaleupconsulting.com.au" className="font-semibold text-white underline-offset-4 hover:underline">
              hello@scaleupconsulting.com.au
            </a>
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <BookingCard />
          <ContactForm />
        </div>
      </div>
    </section>);

}