import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/logo.png" 
              alt="Sankalp Foundation" 
              className="h-25 w-auto object-contain bg-white mb-2"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Integrated Community Development for Sustainable and Inclusive Growth. Sarvajana Sukino Bhavanthu.
            </p>
            <p className="text-secondary text-xs font-bold tracking-widest uppercase">
              We work for change through action
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/impact" className="hover:text-white transition-colors">Impact Reports</Link></li>
              <li><Link to="/media" className="hover:text-white transition-colors">Media & News</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <span>H.No.12-7-133/G/23, Muskipet Moosapet Village<br/> Kukatpally Mandal,<br/> Medchal-Malkajgiri District,<br/>Telangana, India-500018</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <a href="tel:+917659088310" className="hover:text-white transition-colors">+91 76590 88310</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <a href="mailto:sankalpfoundation.sjsb@gmail.com" className="hover:text-white transition-colors">sankalpfoundation.sjsb@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on our latest projects.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-secondary hover:bg-primary text-white py-2 rounded font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SANKALP Trust. All rights reserved. Registered under Indian Trust Act.<br/> Developed by Exelus Info Tech Pvt., Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
