import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-school-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-school-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                 BV
               </div>
               <span className="text-xl font-bold">BRIGHTER VISION</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Shaping Brighter Futures Through Excellence & Discipline. Providing quality private education in Weija from Creche to JHS.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-school-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-school-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-school-gold transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-school-gold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/admissions" className="hover:text-white transition-colors">Admissions</NavLink></li>
              <li><NavLink to="/academics" className="hover:text-white transition-colors">Academic Programs</NavLink></li>
              <li><NavLink to="/facilities" className="hover:text-white transition-colors">Our Facilities</NavLink></li>
              <li><NavLink to="/news" className="hover:text-white transition-colors">News & Events</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-school-gold">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-school-gold mt-1 shrink-0" />
                <span>HM7M+777, Oblogo Road,<br/>Weija, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-school-gold shrink-0" />
                <span>024 371 6049</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-school-gold shrink-0" />
                <span>admissions@brightervision.edu.gh</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-school-gold">Operating Hours</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between"><span>Monday - Friday</span> <span>7:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>Closed</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Brighter Vision School. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
             <span>Best school in Weija</span>
             <span>•</span>
             <span>Quality Basic Education</span>
          </div>
        </div>
      </div>
    </footer>
  );
};