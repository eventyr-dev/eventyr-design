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
          ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
          : 'border-stone-200 focus:border-emerald-600 focus:ring-emerald-50'
        }
      `}
      {...props} 
    />
    {error && <span className="text-xs text-red-600 font-medium">{error}</span>}
  </div>
);