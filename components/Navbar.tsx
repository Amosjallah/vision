import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { NavItem } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Academics', path: '/academics' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-school-dark text-white py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} className="text-school-gold" /> 024 371 6049</span>
            <span className="flex items-center gap-1"><MapPin size={14} className="text-school-gold" /> Oblogo Road, Weija</span>
          </div>
          <div className="hidden md:block text-school-gold font-medium">
            Opens 7am – Closes 4pm
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-40 bg-white shadow-md border-b-4 border-school-gold">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
               <div className="w-10 h-10 bg-school-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                 BV
               </div>
               <div className="flex flex-col">
                 <span className="text-xl font-bold text-school-dark leading-none">BRIGHTER VISION</span>
                 <span className="text-xs text-school-grey tracking-widest uppercase">School</span>
               </div>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors duration-200 uppercase tracking-wide ${
                      isActive ? 'text-school-gold' : 'text-gray-600 hover:text-school-gold'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <NavLink to="/admissions">
                <button className="bg-school-dark text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors">
                  Enroll Now
                </button>
              </NavLink>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-gray-700 hover:text-school-gold focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="flex flex-col py-4 px-4 space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-base font-medium py-2 border-b border-gray-50 ${
                      isActive ? 'text-school-gold' : 'text-gray-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/admissions" className="w-full mt-4">
                <button className="w-full bg-school-gold text-white px-5 py-3 rounded-md font-bold">
                  Enroll Now
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};