import React, { useState } from 'react';
import { Eye, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartDrawer from './CartDrawer';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600';
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">Indian Opticals</span>
              <span className="text-sm text-amber-600 font-medium">Premium Eyewear</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isActive('/')} font-medium transition-colors`}>
                Home
              </Link>
              <Link to="/collections" className={`${isActive('/collections')} font-medium transition-colors`}>
                Collections
              </Link>
              <Link to="/sunglasses" className={`${isActive('/sunglasses')} font-medium transition-colors`}>
                Sunglasses
              </Link>
              <Link to="/eyeglasses" className={`${isActive('/eyeglasses')} font-medium transition-colors`}>
                Eyeglasses
              </Link>
              <Link to="/about" className={`${isActive('/about')} font-medium transition-colors`}>
                About
              </Link>
              <Link to="/contact" className={`${isActive('/contact')} font-medium transition-colors`}>
                Contact
              </Link>
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-4">
              <User className="h-6 w-6 text-gray-700 hover:text-amber-600 cursor-pointer transition-colors" />
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                <ShoppingBag className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                <ShoppingBag className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className={`block px-3 py-2 ${isActive('/')} font-medium`}>
                  Home
                </Link>
                <Link to="/collections" className={`block px-3 py-2 ${isActive('/collections')} font-medium`}>
                  Collections
                </Link>
                <Link to="/sunglasses" className={`block px-3 py-2 ${isActive('/sunglasses')} font-medium`}>
                  Sunglasses
                </Link>
                <Link to="/eyeglasses" className={`block px-3 py-2 ${isActive('/eyeglasses')} font-medium`}>
                  Eyeglasses
                </Link>
                <Link to="/about" className={`block px-3 py-2 ${isActive('/about')} font-medium`}>
                  About
                </Link>
                <Link to="/contact" className={`block px-3 py-2 ${isActive('/contact')} font-medium`}>
                  Contact
                </Link>
                <div className="flex items-center space-x-4 px-3 py-2">
                  <User className="h-6 w-6 text-gray-700" />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;