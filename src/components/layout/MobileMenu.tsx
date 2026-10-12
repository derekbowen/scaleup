import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { mainLinks, navServices } from '../../data/navigation';
import { Button } from '../ui/Button';

export function MobileMenu({ id }: {id: string;}) {
  const [servicesOpen, setServicesOpen] = useState(true);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-brand-line bg-white lg:hidden">
      
      <nav aria-label="Mobile" className="px-5 py-6">
        <button
          type="button"
          aria-expanded={servicesOpen}
          onClick={() => setServicesOpen((v) => !v)}
          className="flex w-full items-center justify-between py-3 font-heading text-lg font-semibold text-brand-navy">
          
          Services
          <ChevronDownIcon
            className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
            aria-hidden="true" />
          
        </button>
        <AnimatePresence initial={false}>
          {servicesOpen &&
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden">
            
              {navServices.map((service) =>
            <li key={service.label}>
                  <Link to={service.href} className="flex items-center gap-3 rounded-[10px] px-2 py-2.5 hover:bg-brand-canvas">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-lavender text-brand-purple">
                      <service.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-base font-semibold text-brand-ink">{service.label}</span>
                  </Link>
                </li>
            )}
            </motion.ul>
          }
        </AnimatePresence>
        <ul className="mt-2 border-t border-brand-line pt-2">
          {mainLinks.map((link) =>
          <li key={link.label}>
              <Link to={link.href} className="block py-3 font-heading text-lg font-semibold text-brand-navy">
                {link.label}
              </Link>
            </li>
          )}
        </ul>
        <Button to="/#contact" size="lg" className="mt-6 w-full">
          Book a free consultation
        </Button>
      </nav>
    </motion.div>);

}