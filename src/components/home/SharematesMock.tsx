import React from 'react';
import { sharematesChart, sharematesKpis, sharematesModules, sharematesQueue } from '../../data/sharemates';

export function SharematesMock() {
  return (
    <div
      role="img"
      aria-label="Sharemates operator console showing reporting metrics, a GMV chart and an identity check queue"
      className="overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-lift">
      
      <div className="flex items-center justify-between border-b border-brand-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-purple font-heading text-[11px] font-bold text-white">S</span>
          <span className="font-heading text-sm font-semibold text-brand-navy">Sharemates</span>
          <span className="text-sm text-brand-muted">/ Reporting</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live marketplace
        </span>
      </div>
      <div className="grid sm:grid-cols-[170px_1fr]">
        <ul className="hidden border-r border-brand-line bg-brand-canvas p-3 sm:block">
          {sharematesModules.map((module) => {
            const active = module.name === 'Reporting';
            return (
              <li
                key={module.name}
                className={`mb-1 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-semibold ${
                active ? 'bg-white text-brand-purple shadow-sm' : 'text-brand-muted'}`
                }>
                
                <module.icon className="h-4 w-4" aria-hidden="true" />
                {module.name}
              </li>);

          })}
        </ul>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {sharematesKpis.map((kpi) =>
            <div key={kpi.label} className="rounded-[10px] border border-brand-line p-2.5">
                <p className="truncate text-[11px] text-brand-muted">{kpi.label}</p>
                <p className="font-heading text-base font-semibold text-brand-navy">{kpi.value}</p>
                <p className="text-[11px] font-semibold text-emerald-700">{kpi.change}</p>
              </div>
            )}
          </div>
          <div className="mt-3 rounded-[10px] border border-brand-line p-3">
            <p className="text-xs font-semibold text-brand-navy">GMV, last 12 weeks</p>
            <div className="mt-3 flex h-24 items-end gap-1.5">
              {sharematesChart.map((value, i) =>
              <div
                key={i}
                className={`flex-1 rounded-t ${i === sharematesChart.length - 1 ? 'bg-brand-purple' : 'bg-[#CFC4FF]'}`}
                style={{ height: `${value}%` }} />

              )}
            </div>
          </div>
          <div className="mt-3 rounded-[10px] border border-brand-line">
            <p className="border-b border-brand-line px-3 py-2 text-xs font-semibold text-brand-navy">Identity checks</p>
            <ul>
              {sharematesQueue.map((user) =>
              <li key={user.name} className="flex items-center justify-between px-3 py-2 text-[13px]">
                  <span className="text-brand-ink">
                    {user.name} <span className="text-brand-muted">· {user.role}</span>
                  </span>
                  <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                  user.status === 'Verified' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'}`
                  }>
                  
                    {user.status}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>);

}