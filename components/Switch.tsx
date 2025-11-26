import React from 'react';

export type SwitchProps = {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
};

export const Switch: React.FC<SwitchProps> = ({
    checked = false,
    onChange,
    label,
    disabled = false,
    className = ''
}) => {
    return (
        <label className={`flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => !disabled && onChange?.(e.target.checked)}
                    disabled={disabled}
                    className="sr-only"
                />
                <div className={`
          w-11 h-6 rounded-full transition-all
          ${checked ? 'bg-nordic-sage' : 'bg-stone-300'}
        `}>
                    <div className={`
            w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200
            absolute top-0.5
            ${checked ? 'translate-x-5' : 'translate-x-0.5'}
          `} />
                </div>
            </div>
            {label && <span className="text-sm text-stone-700">{label}</span>}
        </label>
    );
};
