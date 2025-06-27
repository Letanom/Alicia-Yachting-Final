import React from 'react';
import { Anchor, Compass, Star, Heart } from 'lucide-react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 text-blue-200/20 animate-float-slow">
        <Anchor className="w-12 h-12" />
      </div>
      
      <div className="absolute top-1/3 right-20 text-blue-300/20 animate-float-medium">
        <Compass className="w-8 h-8" />
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 text-blue-200/20 animate-float-fast">
        <Star className="w-10 h-10" />
      </div>
      
      <div className="absolute top-1/2 right-1/4 text-blue-300/20 animate-float-slow">
        <Heart className="w-6 h-6" />
      </div>

      {/* Floating Circles */}
      <div className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full animate-float-medium" />
      <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-full animate-float-fast" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full animate-float-slow" />
    </div>
  );
};

export default FloatingElements;