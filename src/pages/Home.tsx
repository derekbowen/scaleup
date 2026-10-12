import React from 'react';
import { Hero } from '../components/home/Hero';
import { StatsBand } from '../components/home/StatsBand';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { NativeExplainer } from '../components/home/NativeExplainer';
import { SharematesSpotlight } from '../components/home/SharematesSpotlight';
import { PricingTeaser } from '../components/home/PricingTeaser';
import { CaseStudies } from '../components/home/CaseStudies';
import { Testimonials } from '../components/home/Testimonials';
import { HowWeWork } from '../components/home/HowWeWork';
import { ContactBand } from '../components/home/ContactBand';
import { Reveal } from '../components/ui/Reveal';

export function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <Reveal><ServicesGrid /></Reveal>
      <Reveal><NativeExplainer /></Reveal>
      <Reveal><SharematesSpotlight /></Reveal>
      <Reveal><PricingTeaser /></Reveal>
      <Reveal><CaseStudies /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><HowWeWork /></Reveal>
      <ContactBand />
    </>);

}