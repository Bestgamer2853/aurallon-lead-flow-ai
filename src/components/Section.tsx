
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className, children, fullWidth = false }) => {
  return (
    <section id={id} className={cn("py-20", className)}>
      <div className={fullWidth ? "w-full" : "max-w-7xl mx-auto px-6 md:px-12"}>
        {children}
      </div>
    </section>
  );
};

export default Section;
