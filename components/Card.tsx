import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  title?: string; // Added title for accessibility/convenience if needed, though mostly children based
}

export const Card: React.FC<CardProps> = ({ children, className = '', padding = 'p-6' }) => (
  <div className={`bg-white rounded-xl border border-stone-100 shadow-sm ${padding} ${className}`}>
    {children}
  </div>
);