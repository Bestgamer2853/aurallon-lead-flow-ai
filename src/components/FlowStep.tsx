
import React from 'react';
import { cn } from '@/lib/utils';

interface FlowStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isLast?: boolean;
}

const FlowStep: React.FC<FlowStepProps> = ({ 
  title, 
  description, 
  icon, 
  index,
  isLast = false
}) => {
  return (
    <div className="relative flex items-start">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-gradient text-white font-bold">
          {index}
        </div>
        {!isLast && (
          <div className="h-full w-px bg-gradient-to-b from-aurallon-light-purple to-transparent my-2"></div>
        )}
      </div>
      <div className="premium-card w-full">
        <div className="p-3 bg-aurallon-light-purple/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default FlowStep;
