import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { heroStats } from '../../data/showcase';

function CountUp({ value, suffix }: {value: number;suffix: string;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v))
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>);

}

export function StatsBand() {
  return (
    <section className="bg-brand-navy" aria-label="Scaleup Consulting in numbers">
      <dl className="mx-auto grid max-w-site grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
        {heroStats.map((stat, i) =>
        <div
          key={stat.label}
          className={`flex flex-col-reverse gap-2 py-10 sm:px-6 lg:py-14 ${i > 0 ? 'lg:border-l lg:border-white/10' : ''} ${
          i % 2 === 1 ? 'border-l border-white/10 pl-5 lg:pl-6' : ''}`
          }>
          
            <dt className="text-[15px] leading-snug text-[#C9C9DE]">{stat.label}</dt>
            <dd className="font-heading text-5xl font-semibold tracking-tight text-white lg:text-6xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        )}
      </dl>
    </section>);

}