import React from 'react';

export type TextareaProps = {
    label?: string;
    placeholder?: string;
    error?: string;
    rows?: number;
    defaultValue?: string;
    className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: React.FC<TextareaProps> = ({
    label,
    placeholder,
    error,
    rows = 4,
    defaultValue,
    className = '',
    ...props
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label className="text-sm font-medium text-stone-700 mb-2">
                    {label}
                </label>
            )}
            <textarea
                rows={rows}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={`
          px-4 py-3 rounded-lg border transition-all resize-y
          ${error
                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-stone-300 bg-stone-50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100'
                    }
          text-stone-900 placeholder-stone-400
          focus:outline-none
        `}
                {...props}
            />
            {error && (
                <span className="text-xs text-red-600 mt-1">{error}</span>
            )}
        </div>
    );
};
