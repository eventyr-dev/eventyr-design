import React from 'react';

export type ContainerProps = {
    children?: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    className?: string;
};

const maxWidthMap = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full'
};

export const Container: React.FC<ContainerProps> = ({
    children,
    maxWidth = 'xl',
    className = ''
}) => {
    return (
        <div className={`mx-auto px-4 ${maxWidthMap[maxWidth]} ${className}`}>
            {children}
        </div>
    );
};
