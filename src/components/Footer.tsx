import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-4">Mae Farias</div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Transforming businesses through innovative technology solutions. 
            Let's build something amazing together.
          </p>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="text-red-500" size={16} /> byMaeFarias
              <span className="mx-2">•</span>
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;