import React from 'react';

export type RadioProps = {
    label?: string;
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    name?: string;
    className?: string;
};

export const Radio: React.FC<RadioProps> = ({
    label,
    value,
    checked = false,
    onChange,
    name,
    className = ''
}) => {
    return (
        <label className={`flex items-center gap-3 cursor-pointer ${className}`}>
            <div className="relative">
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={() => onChange?.(value)}
                    className="sr-only"
                />
                <div className={`
          w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center
          ${checked
                        ? 'bg-white border-nordic-sage'
                        : 'bg-white border-stone-300 hover:border-nordic-sage/50'
                    }
        `}>
                    {checked && <div className="w-2.5 h-2.5 rounded-full bg-nordic-sage" />}
                </div>
            </div>
            {label && <span className="text-sm text-stone-700">{label}</span>}
        </label>
    );
};
