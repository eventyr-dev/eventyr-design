import React from 'react';
import { LucideIcon } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-nordic-pine text-white hover:bg-nordic-pine-light focus:ring-nordic-pine shadow-sm hover:shadow-md",
    secondary: "bg-nordic-sage text-white hover:bg-nordic-sage-dark focus:ring-nordic-sage shadow-sm hover:shadow-md",
    tertiary: "bg-nordic-mist text-nordic-charcoal hover:bg-stone-300 focus:ring-nordic-granite",
    ghost: "bg-transparent text-nordic-granite hover:bg-nordic-snow hover:text-nordic-charcoal",
    outline: "bg-transparent border-2 border-nordic-glacier text-nordic-granite hover:border-nordic-pine hover:text-nordic-charcoal"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
};