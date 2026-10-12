import React from 'react';
import { showcaseRowOne, showcaseRowTwo, type ShowcaseItem } from '../../data/showcase';

function MarqueeRow({ items, reverse = false }: {items: ShowcaseItem[];reverse?: boolean;}) {
  const loop = [...items, ...items];
  return (
    <div className="marquee overflow-hidden">
      <ul className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {loop.map((item, i) =>
        <li key={`${item.client}-${i}`} className="pr-5" aria-hidden={i >= items.length}>
            <figure className="group relative w-[300px] overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-card sm:w-[420px]">
              <img
              src={item.image}
              alt={i >= items.length ? '' : `${item.client} — ${item.label} interface`}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
            
              <figcaption className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs shadow-card">
                <span className="font-heading font-semibold text-brand-navy">{item.client}</span>
                <span className="text-brand-muted">{item.label}</span>
              </figcaption>
            </figure>
          </li>
        )}
      </ul>
    </div>);

}

export function ShowcaseMarquee() {
  return (
    <div className="space-y-5" aria-label="Marketplaces and software we’ve built">
      <MarqueeRow items={showcaseRowOne} />
      <MarqueeRow items={showcaseRowTwo} reverse />
    </div>);

}