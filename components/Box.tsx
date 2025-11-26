import React from 'react';

export type BoxProps = {
    children?: React.ReactNode;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    bg?: 'white' | 'stone' | 'emerald' | 'transparent';
    className?: string;
};

const paddingMap = {
    none: 'p-0',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8'
};

const marginMap = {
    none: 'm-0',
    sm: 'm-2',
    md: 'm-4',
    lg: 'm-6',
    xl: 'm-8'
};

const bgMap = {
    white: 'bg-white',
    stone: 'bg-stone-50',
    emerald: 'bg-emerald-50',
    transparent: 'bg-transparent'
};

export const Box: React.FC<BoxProps> = ({
    children,
    padding = 'none',
    margin = 'none',
    bg = 'transparent',
    className = ''
}) => {
    return (
        <div className={`${paddingMap[padding]} ${marginMap[margin]} ${bgMap[bg]} ${className}`}>
            {children}
        </div>
    );
};
