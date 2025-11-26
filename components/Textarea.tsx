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
                        ? 'border-nordic-berry/30 bg-nordic-berry/5 focus:border-nordic-berry focus:ring-2 focus:ring-nordic-berry/20'
                        : 'border-stone-300 bg-stone-50 focus:border-nordic-sage focus:ring-2 focus:ring-nordic-sage/20'
                    }
          text-stone-900 placeholder-stone-400
          focus:outline-none
        `}
                {...props}
            />
            {error && (
                <span className="text-xs text-nordic-berry mt-1">{error}</span>
            )}
        </div>
    );
};
