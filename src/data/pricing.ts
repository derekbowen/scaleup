import type { Feature, FeatureCategory, PriceRow } from '../types/features';

export const pricingTeaserRows: PriceRow[] = [
{ name: 'Social login & SSO', capability: 'Configuration', priceFrom: 249 },
{ name: 'Favourites', capability: 'Custom code', priceFrom: 449 },
{ name: 'Multi-language', capability: 'Custom code', priceFrom: 599 },
{ name: 'Discount vouchers', capability: 'Custom code', priceFrom: 899 },
{ name: 'Shopping cart', capability: 'Custom code', priceFrom: 2499 },
{ name: 'User subscription fees', capability: 'Custom code', priceFrom: 2999 }];


export const featureCategories: FeatureCategory[] = [
'Listings',
'Search',
'Payments',
'Bookings',
'Integrations',
'Mobile'];


export const featureMenu: Feature[] = [
{ name: 'Listing approval workflow', description: 'Review new listings before they go live.', category: 'Listings', capability: 'Built in', priceFrom: null },
{ name: 'Custom listing fields', description: 'Extra fields, categories and listing types set up in Console.', category: 'Listings', capability: 'Configuration', priceFrom: 199 },
{ name: 'Favourites', description: 'Let users save listings and come back to them later.', category: 'Listings', capability: 'Custom code', priceFrom: 449 },
{ name: 'Bulk listing import (CSV)', description: 'Import hundreds of listings with images from a spreadsheet.', category: 'Listings', capability: 'Custom code', priceFrom: 1499 },
{ name: 'Keyword and filter search', description: 'Search by keyword plus filters on your listing fields.', category: 'Search', capability: 'Built in', priceFrom: null },
{ name: 'Map search with Mapbox', description: 'Location search with a map view and radius results.', category: 'Search', capability: 'Configuration', priceFrom: 249 },
{ name: 'Saved searches and alerts', description: 'Email users when new listings match their search.', category: 'Search', capability: 'Custom code', priceFrom: 1199 },
{ name: 'Stripe payments and payouts', description: 'Card payments, commission and automatic provider payouts.', category: 'Payments', capability: 'Built in', priceFrom: null },
{ name: 'Discount vouchers', description: 'Percentage or fixed-amount codes applied at checkout.', category: 'Payments', capability: 'Custom code', priceFrom: 899 },
{ name: 'Deposit and balance payments', description: 'Take a deposit at booking and charge the balance later.', category: 'Payments', capability: 'Custom code', priceFrom: 1899 },
{ name: 'Shopping cart', description: 'Multi-item checkout from one seller in a single payment.', category: 'Payments', capability: 'Custom code', priceFrom: 2499 },
{ name: 'User subscription fees', description: 'Recurring membership fees for providers or customers.', category: 'Payments', capability: 'Custom code', priceFrom: 2999 },
{ name: 'Calendar availability', description: 'Daily, nightly, hourly and fixed-slot availability.', category: 'Bookings', capability: 'Built in', priceFrom: null },
{ name: 'Seat-based bookings', description: 'Sell multiple seats or units for the same time slot.', category: 'Bookings', capability: 'Configuration', priceFrom: 299 },
{ name: 'Buffer time between bookings', description: 'Automatic gaps for cleaning, travel or setup.', category: 'Bookings', capability: 'Custom code', priceFrom: 799 },
{ name: 'Negotiated quote + booking', description: 'Provider sends a custom price, customer books the dates.', category: 'Bookings', capability: 'Custom code', priceFrom: 2200 },
{ name: 'Social login & SSO', description: 'Sign up with Google, Facebook or your identity provider.', category: 'Integrations', capability: 'Configuration', priceFrom: 249 },
{ name: 'Multi-language', description: 'Translate the interface and switch language per user.', category: 'Integrations', capability: 'Custom code', priceFrom: 599 },
{ name: 'HubSpot CRM sync', description: 'Push users and transactions into HubSpot automatically.', category: 'Integrations', capability: 'Custom code', priceFrom: 1299 },
{ name: 'Progressive web app', description: 'Installable home-screen app with offline shell.', category: 'Mobile', capability: 'Custom code', priceFrom: 999 },
{ name: 'Push notifications', description: 'Booking and message alerts on iOS and Android.', category: 'Mobile', capability: 'Custom code', priceFrom: 1499 },
{ name: 'Native iOS and Android app', description: 'App Store and Google Play apps on your Sharetribe backend.', category: 'Mobile', capability: 'Custom code', priceFrom: 14900 }];


export type ThirdPartyCost = {
  item: string;
  cost: string;
  notes: string;
};

export const thirdPartyCosts: ThirdPartyCost[] = [
{ item: 'Sharetribe Build plan', cost: 'USD 39/month', notes: 'Test environment for building and testing before launch.' },
{ item: 'Sharetribe Live plan', cost: 'USD 199/month billed yearly, or USD 259 monthly', notes: 'Required to accept real users and payments.' },
{ item: 'Sharetribe Hosting', cost: 'From A$140/year', notes: 'Only needed once you customise code. 32 hosting regions.' },
{ item: 'Domain name', cost: 'Approx. A$20–40/year', notes: 'Bought from any registrar; we connect it for you.' },
{ item: 'Mapbox', cost: 'Free tier, then usage-based', notes: 'Covers maps and location search for most early marketplaces.' },
{ item: 'Stripe', cost: 'Per-transaction fees', notes: 'Standard Stripe processing fees for your country. No monthly fee.' }];