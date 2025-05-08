
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute inset-0 bg-purple-gradient rounded-full blur-sm opacity-70"></div>
        <div className="relative bg-aurallon-deep-purple rounded-full p-2 border border-aurallon-light-purple/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <path 
              d="M20 6L15 11" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <path 
              d="M20 6L15 6" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <path 
              d="M20 6L20 11" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <span className="font-bold text-white text-xl tracking-tight">Aurallon</span>
    </div>
  );
};

export default Logo;
