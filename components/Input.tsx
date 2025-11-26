import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => (
  <div className="flex flex-col gap-1.5 w-full">
    {label && <label className="text-sm font-semibold text-stone-700">{label}</label>}
    <input
      className={`
        w-full px-4 py-2.5 rounded-lg border bg-white text-stone-900
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-0
        placeholder:text-stone-400
        ${error
          ? 'border-nordic-berry/30 bg-nordic-berry/5 focus:border-nordic-berry focus:ring-2 focus:ring-nordic-berry/20'
          : 'border-stone-300 bg-stone-50 focus:border-nordic-sage focus:ring-2 focus:ring-nordic-sage/20'
        }
      `}
      {...props}
    />
    {error && <span className="text-xs text-nordic-berry mt-1">{error}</span>}
  </div>
);