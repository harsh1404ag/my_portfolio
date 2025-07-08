import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center space-x-2">
              <span>© 2025 Harsh Agnihotri. Built with</span>
              <Heart className="w-4 h-4 text-amber-400" />
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-400">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-semibold">
                IntrinsAI
              </span>
            </div>
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Building the future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
