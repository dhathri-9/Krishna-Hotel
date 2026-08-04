import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Dining', path: '/dining' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-brand-light/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo and Nav Links Group */}
          <div className="flex items-center lg:space-x-8">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-serif font-bold text-brand-dark tracking-wider uppercase">
                Krishna <span className="text-brand-gold">Residency</span>
              </Link>
            </div>
            
            <div className="hidden lg:flex space-x-3 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="px-4 py-2 rounded-full border border-gray-300 text-xs uppercase tracking-wider text-brand-dark hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Book Now Button & Mobile Toggle */}
          <div className="flex items-center">
            <div className="hidden lg:block">
              <button className="btn-primary">Book Now</button>
            </div>
            <div className="lg:hidden flex items-center ml-4">
              <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark hover:text-brand-gold">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-light absolute w-full border-b border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 mb-2 text-center rounded-lg border border-gray-200 text-sm uppercase tracking-wider text-brand-dark hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-4">
              <button className="btn-primary w-full">Book Now</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
