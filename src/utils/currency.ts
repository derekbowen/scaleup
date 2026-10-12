export function formatAud(value: number | null): string {
  if (value === null) return 'Included';
  return `$${value.toLocaleString('en-AU')}`;
}