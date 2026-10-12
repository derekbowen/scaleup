import React, { useEffect, useState } from 'react';

type TocItem = {id: string;label: string;};

export function TableOfContents({ items }: {items: TocItem[];}) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -65% 0px' }
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">On this page</p>
      <ol className="mt-4 space-y-1 border-l border-brand-line">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-[15px] transition-colors ${
                isActive ?
                'border-brand-purple font-semibold text-brand-purple' :
                'border-transparent text-brand-muted hover:text-brand-ink'}`
                }>
                
                {item.label}
              </a>
            </li>);

        })}
      </ol>
    </nav>);

}