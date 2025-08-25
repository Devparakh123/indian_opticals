import React from 'react';
import { Eye, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sunglassesProducts, eyeglassesProducts } from '../data/products';

export default function Home() {
  const featuredProducts = [
    ...sunglassesProducts.slice(0, 2),
    ...eyeglassesProducts.slice(0, 2)
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Indian Opticals
                <span className="block text-amber-600">Premium Eyewear Collection</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover our exquisite collection of premium eyewear, crafted with precision and designed for the modern Indian lifestyle. From classic frames to contemporary styles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/collections" className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-center">
                  Shop Collections
                </Link>
                <Link to="/contact" className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors text-center">
                  Book Eye Test
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Premium Eyewear Collection" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked selection of our bestselling eyewear
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/collections" className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600">
              Explore our carefully curated selection of premium eyewear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sunglasses Card */}
            <Link to="/sunglasses" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 h-64 flex items-center justify-center mb-4 group-hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Premium Sunglasses</h3>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Designer Sunglasses</h3>
              <p className="text-gray-600">UV protection with style and elegance</p>
            </Link>

            {/* Eyeglasses Card */}
            <Link to="/eyeglasses" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-64 flex items-center justify-center mb-4 group-hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Reading Glasses</h3>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prescription Eyewear</h3>
              <p className="text-gray-600">Clear vision with contemporary frames</p>
            </Link>

            {/* All Collections Card */}
            <Link to="/collections" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 h-64 flex items-center justify-center mb-4 group-hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">All Collections</h3>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Range</h3>
              <p className="text-gray-600">Browse our entire eyewear collection</p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Indian Opticals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over two decades of experience in the eyewear industry, Indian Opticals has been serving customers with premium quality glasses and exceptional service. We combine traditional craftsmanship with modern technology to deliver eyewear that's both stylish and functional.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Premium quality frames and lenses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Expert eye examination services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Personalized fitting and consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Warranty and after-sales support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Eye examination at Indian Opticals" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl flex items-end">
                <div className="text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">20+ Years</h3>
                  <p className="text-white/90">of Excellence in Eyecare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}