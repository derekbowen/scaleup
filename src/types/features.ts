export type Capability = 'Built in' | 'Configuration' | 'Custom code';

export type FeatureCategory =
'Listings' |
'Search' |
'Payments' |
'Bookings' |
'Integrations' |
'Mobile';

export type Feature = {
  name: string;
  description: string;
  category: FeatureCategory;
  capability: Capability;
  priceFrom: number | null;
};

export type PriceRow = {
  name: string;
  capability: Capability;
  priceFrom: number | null;
};