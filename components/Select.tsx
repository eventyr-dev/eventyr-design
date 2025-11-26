import React from 'react';
import { ChevronDown } from 'lucide-react';

export type SelectProps = {
    label?: string;
    options: { value: string; label: string }[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    error?: string;
    className?: string;
};

export const Select: React.FC<SelectProps> = ({
    label,
    options,
    value,
    onChange,
    placeholder = 'Select an option',
    error,
    className = ''
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label className="text-sm font-medium text-stone-700 mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className={`
            w-full px-4 py-3 pr-10 rounded-lg border transition-all appearance-none
            ${error
                            ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-stone-300 bg-stone-50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100'
                        }
            text-stone-900
            focus:outline-none
            cursor-pointer
          `}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
                />
            </div>
            {error && (
                <span className="text-xs text-red-600 mt-1">{error}</span>
            )}
        </div>
    );
};
