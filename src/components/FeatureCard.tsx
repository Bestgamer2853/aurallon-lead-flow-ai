
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  className
}) => {
  return (
    <div className={cn("premium-card group", className)}>
      <div className="p-3 bg-aurallon-light-purple/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-aurallon-light-purple/20 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
