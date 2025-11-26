import React from 'react';

export type FormFieldProps = {
    label?: string;
    helperText?: string;
    error?: string;
    required?: boolean;
    children: React.ReactNode;
    className?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
    label,
    helperText,
    error,
    required = false,
    children,
    className = ''
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label className="text-sm font-medium text-stone-700 mb-2">
                    {label}
                    {required && <span className="text-nordic-berry ml-1">*</span>}
                </label>
            )}
            {children}
            {helperText && !error && (
                <span className="text-xs text-stone-500 mt-1">{helperText}</span>
            )}
            {error && (
                <span className="text-xs text-nordic-berry mt-1">{error}</span>
            )}
        </div>
    );
};
