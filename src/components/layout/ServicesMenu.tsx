import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { navServices } from '../../data/navigation';

export function ServicesMenu({ id }: {id: string;}) {
  return (
    <div className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-3">
      <motion.div
        id={id}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.16 }}
        className="overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-lift">
        
        <ul className="grid grid-cols-2 gap-1 p-3">
          {navServices.map((service) =>
          <li key={service.label}>
              <Link
              to={service.href}
              className="group flex items-start gap-3 rounded-[10px] p-3 transition-colors hover:bg-brand-canvas">
              
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-lavender text-brand-purple">
                  <service.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-heading text-sm font-semibold text-brand-navy group-hover:text-brand-purple">
                    {service.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-brand-muted">{service.description}</span>
                </span>
              </Link>
            </li>
          )}
        </ul>
        <div className="flex items-center justify-between border-t border-brand-line bg-brand-canvas px-6 py-4">
          <p className="text-sm text-brand-muted">Not sure what you need? We’ll tell you on a free call.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-purple hover:text-brand-purpleDark">
            
            Talk to an engineer
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </div>);

}