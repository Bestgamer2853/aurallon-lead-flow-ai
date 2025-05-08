
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</a>
          <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
          <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
        </div>
        <Button className="primary-btn">
          Book a demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
