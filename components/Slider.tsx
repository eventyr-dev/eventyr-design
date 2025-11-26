import React from 'react';

export type SliderProps = {
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => void;
    showValue?: boolean;
    className?: string;
};

export const Slider: React.FC<SliderProps> = ({
    label,
    min = 0,
    max = 100,
    step = 1,
    value = 50,
    onChange,
    showValue = true,
    className = ''
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="flex items-center justify-between mb-2">
                {label && (
                    <label className="text-sm font-medium text-stone-700">
                        {label}
                    </label>
                )}
                {showValue && (
                    <span className="text-sm font-mono text-stone-600">{value}</span>
                )}
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange?.(Number(e.target.value))}
                className="
          w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-emerald-600
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:transition-all
          [&::-webkit-slider-thumb]:hover:bg-emerald-700
          [&::-webkit-slider-thumb]:hover:scale-110
          [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:h-5
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-emerald-600
          [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:cursor-pointer
          [&::-moz-range-thumb]:shadow-md
          [&::-moz-range-thumb]:transition-all
          [&::-moz-range-thumb]:hover:bg-emerald-700
        "
            />
        </div>
    );
};
