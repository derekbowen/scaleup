import React, { useState } from 'react';
import { CircleCheckIcon, LoaderCircleIcon } from 'lucide-react';
import { needOptions } from '../../data/contact';
import { Button } from '../ui/Button';

type FormState = {name: string;email: string;need: string;message: string;};
type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = { name: '', email: '', need: '', message: '' };

const fieldClass =
'mt-1.5 w-full rounded-[10px] border bg-white px-3.5 py-2.5 text-base text-brand-ink placeholder:text-[#8A8A9E] transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/30';

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.need) next.need = 'Please choose what you need.';
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  };

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[14px] border border-white/10 bg-white/5 p-8 text-center">
        <CircleCheckIcon className="h-12 w-12 text-emerald-400" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-white">Thanks, {form.name.split(' ')[0]}</h3>
        <p className="mt-2 text-base text-[#C9C9DE]">A senior engineer will reply to {form.email} within one business day.</p>
        <Button variant="outlineLight" className="mt-6" onClick={() => {setForm(emptyForm);setStatus('idle');}}>
          Send another message
        </Button>
      </div>);

  }

  const borderFor = (key: keyof FormState) => errors[key] ? 'border-red-400' : 'border-transparent';

  return (
    <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col rounded-[14px] border border-white/10 bg-white/5 p-6 sm:p-7">
      <h3 className="font-heading text-lg font-semibold text-white">Prefer to write?</h3>
      <p className="mt-1 text-sm text-[#C9C9DE]">Tell us about your marketplace and we’ll reply within one business day.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-white">Name</label>
          <input id="contact-name" type="text" autoComplete="name" value={form.name} onChange={update('name')}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={`${fieldClass} ${borderFor('name')}`} placeholder="Jane Founder" />
          {errors.name && <p id="contact-name-error" className="mt-1 text-sm text-red-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-white">Email</label>
          <input id="contact-email" type="email" autoComplete="email" value={form.email} onChange={update('email')}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={`${fieldClass} ${borderFor('email')}`} placeholder="jane@company.com" />
          {errors.email && <p id="contact-email-error" className="mt-1 text-sm text-red-300">{errors.email}</p>}
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="contact-need" className="text-sm font-semibold text-white">What do you need?</label>
        <select id="contact-need" value={form.need} onChange={update('need')}
        aria-invalid={!!errors.need} aria-describedby={errors.need ? 'contact-need-error' : undefined}
        className={`${fieldClass} ${borderFor('need')}`}>
          <option value="">Choose an option</option>
          {needOptions.map((option) =>
          <option key={option} value={option}>{option}</option>
          )}
        </select>
        {errors.need && <p id="contact-need-error" className="mt-1 text-sm text-red-300">{errors.need}</p>}
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <label htmlFor="contact-message" className="text-sm font-semibold text-white">Message <span className="font-normal text-[#B5B5CC]">(optional)</span></label>
        <textarea id="contact-message" rows={4} value={form.message} onChange={update('message')}
        className={`${fieldClass} flex-1 resize-none border-transparent`} placeholder="A sentence or two about your marketplace and timeline" />
      </div>
      <Button type="submit" variant="light" size="lg" className="mt-5 w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ?
        <>
            <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </> :

        'Send message'
        }
      </Button>
    </form>);

}