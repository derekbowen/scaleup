import type { Capability } from '../types/features';

export type ExplainerColumn = {
  capability: Capability;
  title: string;
  description: string;
  effort: string;
  examples: string[];
};

export const explainerColumns: ExplainerColumn[] = [
{
  capability: 'Built in',
  title: 'Native to Sharetribe',
  description:
  'Already part of Sharetribe. Switch it on in Console and you’re done — no development cost, no maintenance.',
  effort: 'No development needed',
  examples: [
  'Calendar availability and bookings',
  'Stripe payments and payouts',
  'Reviews and messaging',
  'Listing approval']

},
{
  capability: 'Configuration',
  title: 'Configured by us',
  description:
  'Sharetribe supports it, but it needs setting up correctly: listing fields, transaction settings, emails, login providers.',
  effort: 'Usually hours, not weeks',
  examples: [
  'Social login and SSO',
  'Custom listing fields and filters',
  'Map search with Mapbox',
  'Hourly, daily or nightly pricing']

},
{
  capability: 'Custom code',
  title: 'Built by our engineers',
  description:
  'Logic Sharetribe doesn’t ship: new transaction processes, extended data models and third-party integrations.',
  effort: 'Fixed-price scope',
  examples: [
  'Shopping cart and multi-item checkout',
  'Negotiated quote plus calendar booking',
  'User subscription fees',
  'Discount vouchers']

}];