export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  features: string[];
  inStock: boolean;
}

export const sunglassesProducts: Product[] = [
  {
    id: 1,
    name: "Ray-Ban Aviator Classic",
    price: 8999,
    originalPrice: 12999,
    image: "https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Iconic aviator sunglasses with premium UV protection and timeless style",
    category: "Designer Sunglasses",
    features: ["100% UV Protection", "Polarized Lenses", "Metal Frame", "Adjustable Nose Pads"],
    inStock: true
  },
  {
    id: 2,
    name: "Oakley Holbrook",
    price: 11999,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Modern square frame sunglasses perfect for active lifestyle",
    category: "Sports Sunglasses",
    features: ["Impact Resistant", "Lightweight", "Non-Slip Grip", "UV400 Protection"],
    inStock: true
  },
  {
    id: 3,
    name: "Gucci Round Frame",
    price: 24999,
    image: "https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Luxury round frame sunglasses with signature Gucci styling",
    category: "Luxury Sunglasses",
    features: ["Italian Craftsmanship", "Premium Materials", "Signature Design", "UV Protection"],
    inStock: true
  },
  {
    id: 4,
    name: "Police Vintage Collection",
    price: 6999,
    originalPrice: 9999,
    image: "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Retro-inspired sunglasses with modern lens technology",
    category: "Vintage Sunglasses",
    features: ["Retro Design", "Modern Lenses", "Comfortable Fit", "Scratch Resistant"],
    inStock: true
  },
  {
    id: 5,
    name: "Prada Cat Eye",
    price: 19999,
    image: "https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elegant cat-eye sunglasses for sophisticated style",
    category: "Designer Sunglasses",
    features: ["Cat Eye Design", "Premium Acetate", "Gradient Lenses", "Italian Made"],
    inStock: true
  },
  {
    id: 6,
    name: "Fastrack Sporty",
    price: 2999,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Affordable sporty sunglasses for everyday wear",
    category: "Sports Sunglasses",
    features: ["Sporty Design", "Durable Frame", "UV Protection", "Affordable Price"],
    inStock: true
  }
];

export const eyeglassesProducts: Product[] = [
  {
    id: 7,
    name: "Tom Ford Classic",
    price: 15999,
    image: "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Sophisticated prescription frames with timeless appeal",
    category: "Designer Frames",
    features: ["Premium Acetate", "Adjustable Temples", "Anti-Reflective Coating", "Blue Light Filter"],
    inStock: true
  },
  {
    id: 8,
    name: "Titan Computer Glasses",
    price: 3999,
    originalPrice: 5999,
    image: "https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Blue light blocking glasses for digital eye strain relief",
    category: "Computer Glasses",
    features: ["Blue Light Filter", "Anti-Glare", "Lightweight", "Comfortable Fit"],
    inStock: true
  },
  {
    id: 9,
    name: "Lenskart Reading Glasses",
    price: 1999,
    image: "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Comfortable reading glasses with multiple power options",
    category: "Reading Glasses",
    features: ["Multiple Powers", "Lightweight Frame", "Scratch Resistant", "Affordable"],
    inStock: true
  },
  {
    id: 10,
    name: "Vincent Chase Vintage",
    price: 4999,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Vintage-inspired prescription frames with modern comfort",
    category: "Vintage Frames",
    features: ["Vintage Design", "Modern Comfort", "Durable Build", "Prescription Ready"],
    inStock: true
  },
  {
    id: 11,
    name: "John Jacobs Premium",
    price: 7999,
    image: "https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Premium eyeglasses with superior build quality",
    category: "Premium Frames",
    features: ["Premium Materials", "Superior Build", "Comfortable Fit", "Stylish Design"],
    inStock: true
  },
  {
    id: 12,
    name: "Coolwinks Trendy",
    price: 2499,
    image: "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Trendy and affordable eyeglasses for young professionals",
    category: "Trendy Frames",
    features: ["Trendy Design", "Affordable Price", "Lightweight", "Multiple Colors"],
    inStock: true
  }
];

export const allProducts = [...sunglassesProducts, ...eyeglassesProducts];