export type TrustItem = {
  label: string;
  detail: string;
  rating?: string;
};

export const trustItems: TrustItem[] = [
{ label: 'Verified Sharetribe Expert', detail: 'Listed in the Sharetribe Experts directory' },
{ label: 'Clutch', rating: '5.0', detail: 'from 18 reviews' },
{ label: 'Google', rating: '5.0', detail: 'from 9 reviews' },
{ label: 'GoodFirms', rating: '5.0', detail: 'verified reviews' }];