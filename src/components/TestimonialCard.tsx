
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
      <div className="mb-6">
        <img src={logo} alt={company} className="h-6" />
      </div>
      <p className="text-white/80 text-lg mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center gap-4">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-medium text-white">{author}</div>
          <div className="text-white/60 text-sm">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
