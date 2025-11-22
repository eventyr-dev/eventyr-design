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
    primary: "bg-stone-800 text-white hover:bg-stone-700 focus:ring-stone-800 shadow-sm hover:shadow-md",
    secondary: "bg-emerald-800 text-white hover:bg-emerald-900 focus:ring-emerald-800 shadow-sm hover:shadow-md",
    tertiary: "bg-stone-200 text-stone-800 hover:bg-stone-300 focus:ring-stone-400",
    ghost: "bg-transparent text-stone-600 hover:bg-stone-100 hover:text-stone-900",
    outline: "bg-transparent border-2 border-stone-300 text-stone-700 hover:border-stone-800 hover:text-stone-900"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
};