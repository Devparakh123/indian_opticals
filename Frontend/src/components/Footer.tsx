import React from 'react';
import { Eye, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold">Indian Opticals</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner in vision care for over two decades. We provide premium eyewear 
              solutions with exceptional service and expert care.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Main Street, Connaught Place, New Delhi - 110001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@indianopticals.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-white transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="/sunglasses" className="hover:text-white transition-colors">Sunglasses</Link>
              </li>
              <li>
                <Link to="/eyeglasses" className="hover:text-white transition-colors">Eyeglasses</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Eye Examinations</li>
              <li>Frame Fitting</li>
              <li>Contact Lenses</li>
              <li>Lens Technology</li>
              <li>Repairs & Adjustments</li>
              <li>After-Sales Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Indian Opticals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}