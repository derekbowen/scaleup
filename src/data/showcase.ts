export type ShowcaseItem = {
  client: string;
  label: string;
  image: string;
};

export const showcaseImages = {
  gosupply: "/75b14e82-4503-4b23-9899-48a3c93fc85b.jpg",
  artwave: "/5a763cc2-afe8-42b7-9afe-42c327583e48.jpg",
  rental: "/d9fbb4a0-4d69-4d63-ba47-c23644ae365a.jpg",
  iot: "/47228c94-3a41-4dbf-8c20-0291d51a14e8.jpg",
  floorplan: "/c3b3d74f-e0f7-4d57-a6f1-4a0ffc453b55.jpg"
};

export const showcaseRowOne: ShowcaseItem[] = [
{ client: 'Go Supply', label: 'B2B quoting marketplace', image: showcaseImages.gosupply },
{ client: 'Equipment rental', label: 'Sharetribe bookings', image: showcaseImages.rental },
{ client: 'Art Wave AI', label: 'Reverse-auction marketplace', image: showcaseImages.artwave },
{ client: 'IoT Platform', label: 'Custom software', image: showcaseImages.iot },
{ client: 'iFloorPlan', label: 'Ordering platform', image: showcaseImages.floorplan }];


export const showcaseRowTwo: ShowcaseItem[] = [
{ client: 'Art Wave AI', label: 'Bid management', image: showcaseImages.artwave },
{ client: 'iFloorPlan', label: 'Order tracking', image: showcaseImages.floorplan },
{ client: 'Go Supply', label: 'Manufacturer catalogue', image: showcaseImages.gosupply },
{ client: 'Equipment rental', label: 'Calendar availability', image: showcaseImages.rental },
{ client: 'IoT Platform', label: 'Live monitoring', image: showcaseImages.iot }];


export const heroStats = [
{ value: 35, suffix: '+', decimals: 0, label: 'Sharetribe projects shipped' },
{ value: 5, suffix: '.0', decimals: 0, label: 'Average rating on Clutch, Google & GoodFirms' },
{ value: 5, suffix: '', decimals: 0, label: 'Regions served: US, Canada, Europe, NZ, AU' },
{ value: 32, suffix: '', decimals: 0, label: 'Hosting regions worldwide' }];