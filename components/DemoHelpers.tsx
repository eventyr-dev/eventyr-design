import React, { useState } from 'react';
import { LucideIcon, Check, Copy } from 'lucide-react';

// --- Section Header ---

interface SectionHeaderProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, icon: Icon }) => (
  <div className="mb-8 pb-4 border-b border-stone-200">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-stone-100 rounded-lg text-stone-700">
        {Icon && <Icon size={24} />}
      </div>
      <h2 className="text-2xl font-bold text-stone-800">{title}</h2>
    </div>
    <p className="text-stone-500 max-w-2xl">{description}</p>
  </div>
);

// --- Color Swatch ---

interface ColorSwatchProps {
  name: string;
  hex: string;
  usage: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, hex, usage }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDark = ['#2F3E46', '#354F52', '#1C1917'].includes(hex);

  return (
    <div 
      onClick={copyToClipboard}
      className="group cursor-pointer rounded-xl overflow-hidden border border-stone-100 shadow-sm transition-all hover:shadow-md"
    >
      <div 
        className="h-32 flex items-center justify-center relative"
        style={{ backgroundColor: hex }}
      >
        <span className={`absolute opacity-0 group-hover:opacity-100 transition-opacity font-medium flex items-center gap-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied' : 'Copy Hex'}
        </span>
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-stone-800">{name}</h3>
          <span className="text-xs font-mono text-stone-400 uppercase">{hex}</span>
        </div>
        <p className="text-xs text-stone-500">{usage}</p>
      </div>
    </div>
  );
};