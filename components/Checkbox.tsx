import React from 'react';
import { Check } from 'lucide-react';

export type CheckboxProps = {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    onChange,
    className = ''
}) => {
    return (
        <label className={`flex items-center gap-3 cursor-pointer ${className}`}>
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    className="sr-only"
                />
                <div className={`
          w-5 h-5 rounded border-2 transition-all flex items-center justify-center
          ${checked
                        ? 'bg-nordic-sage border-nordic-sage'
                        : 'bg-white border-stone-300 hover:border-nordic-sage/50'
                    }
        `}>
                    {checked && <Check size={14} className="text-white" strokeWidth={3} />}
                </div>
            </div>
            {label && <span className="text-sm text-stone-700">{label}</span>}
        </label>
    );
};
