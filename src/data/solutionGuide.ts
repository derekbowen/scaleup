export const guideMeta = {
  hubLabel: 'Sharetribe solutions library',
  hubHref: '/sharetribe-solutions',
  category: 'Bookings & transactions',
  title: 'Can Sharetribe combine a negotiated quote with a calendar booking?',
  reviewer: 'Scaleup Consulting engineering team',
  reviewed: '6 October 2026',
  readTime: '7 min read'
};

export const guideToc = [
{ id: 'short-answer', label: 'The short answer' },
{ id: 'out-of-the-box', label: 'What Sharetribe does out of the box' },
{ id: 'where-it-stops', label: 'Where the built-in feature stops' },
{ id: 'worked-example', label: 'Worked example' },
{ id: 'edge-cases', label: 'Edge cases' },
{ id: 'implementation', label: 'What an implementation covers' },
{ id: 'related-questions', label: 'Related questions' },
{ id: 'sources', label: 'Sources' }];


export const outOfBoxPoints = [
{
  title: 'Calendar bookings',
  description:
  'Providers set availability by day, night, hour or fixed time slot. Customers pick dates, see an instant price and pay upfront through Stripe.'
},
{
  title: 'Negotiation flow',
  description:
  'A negotiation transaction process lets a customer request a quote, the provider make an offer, and both sides agree a price before payment.'
},
{
  title: 'Inquiries and messaging',
  description:
  'Customers can message a provider about a listing before starting a transaction, which many marketplaces use for informal quoting.'
}];


export const builtInLimits = [
'A transaction follows one process: booking (with dates and availability) or negotiation (with offers) — not both at once.',
'Negotiated offers don’t reserve calendar time, so two customers can be quoted for the same dates.',
'Booking prices are calculated from the listing’s unit price, so an agreed custom amount can’t simply be passed into a booking.',
'Offer expiry, deposits and re-quoting after a date change aren’t modelled.'];


export const workedExample = [
{
  actor: 'Customer',
  action: 'Requests a quote for a 3-day equipment hire, 14–16 November, with delivery to site.'
},
{
  actor: 'Provider',
  action: 'Sends an offer of A$1,850 including delivery. The dates are held as tentative for 48 hours.'
},
{
  actor: 'Customer',
  action: 'Accepts and pays. The custom process converts the hold into a confirmed booking and blocks the calendar.'
},
{
  actor: 'Marketplace',
  action: 'Applies commission to the agreed total, sends confirmations and schedules the payout after the hire ends.'
}];


export const edgeCases = [
{
  title: 'Two quotes for the same dates',
  description:
  'Decide whether an offer places a tentative hold, or whether the first customer to accept wins and other requests are declined automatically.'
},
{
  title: 'Offer expiry',
  description:
  'Offers should expire after a set time and release any held dates, so calendars don’t fill up with stale quotes.'
},
{
  title: 'Customer changes the dates',
  description:
  'A date change after an offer usually invalidates the price. The flow should send the request back to the provider to re-quote.'
},
{
  title: 'Cancellations and refunds',
  description:
  'Refund rules need to use the negotiated total, not the listing’s base price, including delivery and extras.'
},
{
  title: 'Commission on custom totals',
  description:
  'Your marketplace fee must be calculated on the agreed price, including any line items the provider added.'
},
{
  title: 'Time zones',
  description:
  'Providers and customers in different time zones must see the same booked period. Times are stored in the listing’s time zone.'
}];


export const implementationScope = [
{
  title: 'Custom transaction process',
  description:
  'A process combining request, offer, counter-offer, tentative hold, acceptance, payment and booking states.'
},
{
  title: 'Quote and booking UI',
  description:
  'Request form on the listing page, offer composer for providers and an accept-and-pay step for customers.'
},
{
  title: 'Server-side pricing',
  description:
  'Agreed line items calculated in a privileged transition, so the price can’t be changed in the browser.'
},
{
  title: 'Availability holds',
  description:
  'Tentative holds on offer, automatic release on expiry or decline, and confirmed blocking on payment.'
},
{
  title: 'Email notifications',
  description:
  'New request, new offer, offer expiring, accepted and booking confirmed emails for both parties.'
},
{
  title: 'Testing before launch',
  description:
  'End-to-end tests of every path in Sharetribe’s test environment, including expiry and cancellation.'
}];


export const relatedQuestions = [
{
  question: 'Can providers send a custom price for a standard booking?',
  answer:
  'Not with the default booking process, which always prices from the listing. A lighter custom change can let providers adjust the price before accepting — usually cheaper than a full quote-and-booking flow.'
},
{
  question: 'Can Sharetribe take a deposit and charge the balance later?',
  answer:
  'Not out of the box. Deposits need a custom transaction process with two payment steps. It’s on our feature menu as “Deposit and balance payments”, from A$1,899.'
},
{
  question: 'Can customers request a booking without paying upfront?',
  answer:
  'Sharetribe’s booking flow authorises the card at request time and captures on acceptance. Removing the upfront card step requires custom code.'
},
{
  question: 'How long does a custom transaction process take to build?',
  answer:
  'Most quote-and-booking flows take two to four weeks including testing, depending on edge cases such as holds, expiry and deposits.'
}];


export const guideSources = [
{
  title: 'Transaction process',
  publisher: 'Sharetribe Developer Docs',
  url: 'https://www.sharetribe.com/docs/concepts/transaction-process/',
  checked: '6 Oct 2026'
},
{
  title: 'Listing availability management',
  publisher: 'Sharetribe Developer Docs',
  url: 'https://www.sharetribe.com/docs/concepts/availability/',
  checked: '6 Oct 2026'
},
{
  title: 'Privileged transitions',
  publisher: 'Sharetribe Developer Docs',
  url: 'https://www.sharetribe.com/docs/concepts/privileged-transitions/',
  checked: '6 Oct 2026'
},
{
  title: 'Sharetribe Help Center',
  publisher: 'Sharetribe',
  url: 'https://www.sharetribe.com/help/en/',
  checked: '6 Oct 2026'
}];