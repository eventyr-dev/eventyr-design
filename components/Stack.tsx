import React from 'react';

export type StackProps = {
    children?: React.ReactNode;
    direction?: 'vertical' | 'horizontal';
    spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    className?: string;
};

const spacingMap = {
    vertical: {
        none: 'space-y-0',
        sm: 'space-y-2',
        md: 'space-y-4',
        lg: 'space-y-6',
        xl: 'space-y-8'
    },
    horizontal: {
        none: 'space-x-0',
        sm: 'space-x-2',
        md: 'space-x-4',
        lg: 'space-x-6',
        xl: 'space-x-8'
    }
};

const alignMap = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
};

const justifyMap = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around'
};

export const Stack: React.FC<StackProps> = ({
    children,
    direction = 'vertical',
    spacing = 'md',
    align = 'stretch',
    justify = 'start',
    className = ''
}) => {
    const flexDirection = direction === 'vertical' ? 'flex-col' : 'flex-row';
    const spacingClass = spacingMap[direction][spacing];

    return (
        <div className={`flex ${flexDirection} ${spacingClass} ${alignMap[align]} ${justifyMap[justify]} ${className}`}>
            {children}
        </div>
    );
};
