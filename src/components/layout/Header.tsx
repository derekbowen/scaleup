import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { mainLinks } from '../../data/navigation';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { ServicesMenu } from './ServicesMenu';
import { MobileMenu } from './MobileMenu';

const navItemClass =
'inline-flex items-center gap-1 rounded-lg px-3 py-2 font-heading text-[14px] font-medium text-brand-ink transition-colors hover:text-brand-purple';

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white">
      <div className="mx-auto flex h-[72px] max-w-site items-center justify-between gap-6 px-5 lg:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              
              <button
                type="button"
                className={navItemClass}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((v) => !v)}>
                
                Services
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true" />
                
              </button>
              <AnimatePresence>{servicesOpen && <ServicesMenu id="services-menu" />}</AnimatePresence>
            </li>
            {mainLinks.map((link) =>
            <li key={link.label}>
                <Link to={link.href} className={navItemClass}>
                  {link.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button to="/#contact" className="hidden sm:inline-flex">
            Book a free consultation
          </Button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-brand-line text-brand-navy lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}>
            
            {mobileOpen ? <XIcon className="h-5 w-5" aria-hidden="true" /> : <MenuIcon className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <AnimatePresence>{mobileOpen && <MobileMenu id="mobile-menu" />}</AnimatePresence>
    </header>);

}