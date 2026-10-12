import React, { useMemo, useState } from 'react';
import { addDays, format, isWeekend } from 'date-fns';
import { CalendarIcon, CircleCheckIcon, ClockIcon, VideoIcon } from 'lucide-react';
import { bookingSlots } from '../../data/contact';
import { Button } from '../ui/Button';

function nextWeekdays(count: number): Date[] {
  const days: Date[] = [];
  let cursor = addDays(new Date(), 1);
  while (days.length < count) {
    if (!isWeekend(cursor)) days.push(cursor);
    cursor = addDays(cursor, 1);
  }
  return days;
}

export function BookingCard() {
  const days = useMemo(() => nextWeekdays(5), []);
  const timeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
  const [dayIndex, setDayIndex] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const selectedDay = days[dayIndex];

  if (booked && slot) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[14px] bg-white p-8 text-center shadow-lift">
        <CircleCheckIcon className="h-12 w-12 text-emerald-600" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-brand-navy">Your call is booked</h3>
        <p className="mt-2 text-base text-brand-muted">
          {format(selectedDay, 'EEEE d MMMM')} at {slot} ({timeZone}). A calendar invite is on its way.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => {setBooked(false);setSlot(null);}}>
          Choose another time
        </Button>
      </div>);

  }

  return (
    <div className="flex h-full flex-col rounded-[14px] bg-white p-6 shadow-lift sm:p-7">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand-lavender text-brand-purple">
          <CalendarIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-heading text-lg font-semibold text-brand-navy">Free 15-minute consultation</h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-muted">
            <span className="inline-flex items-center gap-1"><ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />15 min</span>
            <span className="inline-flex items-center gap-1"><VideoIcon className="h-3.5 w-3.5" aria-hidden="true" />Video call</span>
          </p>
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-brand-ink">Pick a day</legend>
        <div className="mt-2 grid grid-cols-5 gap-2">
          {days.map((day, i) => {
            const active = i === dayIndex;
            return (
              <button
                key={day.toISOString()}
                type="button"
                aria-pressed={active}
                onClick={() => {setDayIndex(i);setSlot(null);}}
                className={`flex flex-col items-center rounded-[10px] border py-2 transition-colors ${
                active ? 'border-brand-purple bg-brand-purple text-white' : 'border-brand-line text-brand-ink hover:border-brand-purple'}`
                }>
                
                <span className="text-xs font-semibold uppercase">{format(day, 'EEE')}</span>
                <span className="font-heading text-lg font-semibold">{format(day, 'd')}</span>
              </button>);

          })}
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-brand-ink">Available times · {format(selectedDay, 'd MMMM')}</legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {bookingSlots.map((time) => {
            const active = slot === time;
            return (
              <button
                key={time}
                type="button"
                aria-pressed={active}
                onClick={() => setSlot(time)}
                className={`rounded-[10px] border px-2 py-2 text-sm font-semibold transition-colors ${
                active ? 'border-brand-purple bg-brand-lavender text-brand-purpleDark' : 'border-brand-line text-brand-ink hover:border-brand-purple'}`
                }>
                
                {time}
              </button>);

          })}
        </div>
        <p className="mt-2 text-xs text-brand-muted">Times shown in your time zone ({timeZone})</p>
      </fieldset>

      <Button className="mt-6 w-full" size="lg" disabled={!slot} onClick={() => setBooked(true)}>
        {slot ? `Confirm ${format(selectedDay, 'EEE d MMM')}, ${slot}` : 'Select a time to continue'}
      </Button>
    </div>);

}