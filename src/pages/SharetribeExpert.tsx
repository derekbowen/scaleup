import React from 'react';
import { ExpertHero } from '../components/expert/ExpertHero';
import { WhyScaleup } from '../components/expert/WhyScaleup';
import { FeatureMenu } from '../components/expert/FeatureMenu';
import { ThirdPartyCosts } from '../components/expert/ThirdPartyCosts';
import { CustomBuildFit } from '../components/expert/CustomBuildFit';
import { Accordion } from '../components/ui/Accordion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CtaBanner } from '../components/ui/CtaBanner';
import { expertFaqs } from '../data/expert';

export function SharetribeExpert() {
  return (
    <>
      <ExpertHero />
      <WhyScaleup />
      <FeatureMenu />
      <ThirdPartyCosts />
      <CustomBuildFit />
      <section id="faq" className="bg-white py-20 lg:py-24" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-site gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <SectionHeading
              id="faq-title"
              eyebrow="FAQ"
              title="Questions founders ask us"
              description="Something else on your mind? Ask it on the free consultation." />
            
          </div>
          <div className="lg:col-span-8">
            <Accordion items={expertFaqs} />
          </div>
        </div>
      </section>
      <CtaBanner
        title="Get a fixed-price Sharetribe scope"
        description="15 minutes with a senior engineer. We’ll mark every feature as built in, configuration or custom code." />
      
    </>);

}