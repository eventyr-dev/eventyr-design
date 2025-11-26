import React from 'react';

export type GridProps = {
    children?: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | 6 | 12;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
};

const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12'
};

const gapMap = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
};

export const Grid: React.FC<GridProps> = ({
    children,
    cols = 12,
    gap = 'md',
    className = ''
}) => {
    return (
        <div className={`grid ${colsMap[cols]} ${gapMap[gap]} ${className}`}>
            {children}
        </div>
    );
};

export type ColProps = {
    children?: React.ReactNode;
    span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    className?: string;
};

const spanMap = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12'
};

export const Col: React.FC<ColProps> = ({
    children,
    span = 12,
    className = ''
}) => {
    return (
        <div className={`${spanMap[span]} ${className}`}>
            {children}
        </div>
    );
};
