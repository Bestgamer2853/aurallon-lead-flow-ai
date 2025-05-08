
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode; // Changed from string to ReactNode to support JSX
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = false, className }) => {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-white/70 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
