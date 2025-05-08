
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  logo: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  image,
  logo,
  className
}) => {
  return (
    <div className={cn("premium-card flex flex-col", className)}>
      <p className="text-white/80 text-lg mb-6 flex-grow">"{quote}"</p>
      <div>
        <div className="font-medium text-white">{author}</div>
        <div className="text-white/60 text-sm">{role}, {company}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
