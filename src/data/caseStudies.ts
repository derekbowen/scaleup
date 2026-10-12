import { showcaseImages } from './showcase';

export type CaseStudy = {
  client: string;
  category: string;
  location: string;
  summary: string;
  tags: string[];
  image: string;
};

export const caseStudies: CaseStudy[] = [
{
  client: 'Go Supply',
  category: 'B2B marketplace',
  location: 'Australia',
  summary:
  'A manufacturer-to-buyer marketplace on Sharetribe with B2B quoting, buyer accounts and custom order workflows.',
  tags: ['Sharetribe', 'Custom transaction process', 'B2B'],
  image: showcaseImages.gosupply
},
{
  client: 'Art Wave AI',
  category: 'Reverse-auction marketplace',
  location: 'San Francisco, USA',
  summary:
  'Buyers post a brief and artists bid. We built the reverse-auction flow, bid management and payments on Sharetribe.',
  tags: ['Sharetribe', 'Reverse auction', 'Stripe'],
  image: showcaseImages.artwave
},
{
  client: 'iFloorPlan',
  category: 'Property services platform',
  location: 'Australia',
  summary:
  'An ordering platform for floor-plan services, with job tracking, file delivery and integrated online payments.',
  tags: ['Custom software', 'Ordering', 'Payments'],
  image: showcaseImages.floorplan
},
{
  client: 'IoT Platform',
  category: 'Custom software',
  location: 'Industrial client',
  summary:
  'A device-monitoring platform that ingests sensor data, raises alerts and gives operators a live dashboard.',
  tags: ['IoT', 'Real-time data', 'Cloud'],
  image: showcaseImages.iot
}];