import React from 'react';
import { Link } from 'react-router-dom';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/logo.jpg'; // Adjust path based on your project

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow">
                <img
                  src={logo}
                  alt="HIFI-TRENDZ Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Hi-Fi Trendz™</h1>
                <p className="text-[10px]">An ISO 9001 : 2008 Company</p>
                <p className="text-xs font-bold">your home made comfortable</p>
            </div>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Creating beautiful, functional spaces that reflect your personality and
              enhance your lifestyle through innovative interior design solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-white">
              {[
                'Interior Design',
                'Modular Kitchen',
                'Pooja Unit',
                'TV Unit',
                'Modular Wardrobes',
                'False Ceiling',
                'Work Space',
                'Wood Flooring',
                'Aluminum Partitions',
                'Wallpaper & Decor',
                
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm text-white">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9500009474</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 7871616123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9786773773</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>
                  <strong>Address:</strong><br />
                  197/1, Gandhi Road, Thilagar Nagar Bus Stop,<br />
                  Anupparpalayam, Avinashi Road, Tirupur.
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hifitrendz@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon-Sat: 9.30AM-7.30PM</span>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 HIFI‑TRENDZ. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
