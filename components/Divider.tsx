import React from 'react';

export type DividerProps = {
    orientation?: 'horizontal' | 'vertical';
    thickness?: 'thin' | 'medium' | 'thick';
    color?: 'stone' | 'emerald' | 'dark';
    className?: string;
};

const thicknessMap = {
    horizontal: {
        thin: 'h-px',
        medium: 'h-0.5',
        thick: 'h-1'
    },
    vertical: {
        thin: 'w-px',
        medium: 'w-0.5',
        thick: 'w-1'
    }
};

const colorMap = {
    stone: 'bg-stone-200',
    emerald: 'bg-emerald-300',
    dark: 'bg-stone-600'
};

export const Divider: React.FC<DividerProps> = ({
    orientation = 'horizontal',
    thickness = 'thin',
    color = 'stone',
    className = ''
}) => {
    const sizeClass = thicknessMap[orientation][thickness];
    const fullSize = orientation === 'horizontal' ? 'w-full' : 'h-full';

    return (
        <div className={`${fullSize} ${sizeClass} ${colorMap[color]} ${className}`} />
    );
};
