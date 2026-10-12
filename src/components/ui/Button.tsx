import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'light' | 'outlineLight';
type Size = 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {to: string;};
type NativeButtonProps = CommonProps & {to?: undefined;} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-heading font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-purple text-white shadow-sm hover:bg-brand-purpleDark',
  secondary: 'border border-brand-line bg-white text-brand-ink hover:border-brand-purple hover:text-brand-purple',
  light: 'bg-white text-brand-navy hover:bg-brand-lavender',
  outlineLight: 'border border-white/30 text-white hover:bg-white/10'
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[15px]'
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>);

  }

  const { variant: _v, size: _s, className: _c, children: _ch, to: _t, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>);

}