import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
            <Eye className="h-4 w-4 text-gray-700" />
          </button>
        </div>
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            SALE
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-amber-600 font-semibold uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-lg">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mb-4">
          <ul className="text-xs text-gray-500 space-y-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-1 h-1 bg-amber-600 rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-amber-600 font-bold text-xl">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors flex items-center space-x-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}