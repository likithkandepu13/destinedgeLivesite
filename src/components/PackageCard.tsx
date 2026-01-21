import React from 'react';
import { Package } from '../types/package';
import { MapPin, Calendar, Users, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface PackageCardProps {
  pkg: Package;
  onClick: (pkg: Package) => void;
  onFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

export default function PackageCard({ 
  pkg, 
  onClick, 
  onFavorite, 
  isFavorite = false 
}: PackageCardProps) {
  const getLowestPrice = () => {
    return Object.values(pkg.prices).reduce((min, price) => {
      const current = typeof price.price === 'string' 
        ? parseInt(price.price.replace(/,/g, '')) 
        : price.price;
      return current < min ? current : min;
    }, Infinity);
  };

  const lowestPrice = getLowestPrice();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onFavorite) onFavorite(pkg.id);
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 overflow-hidden transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3 } }}
    >
      <div className="flex flex-col h-full cursor-pointer" onClick={() => onClick(pkg)}>
        {/* Image Container */}
        <div className="relative overflow-hidden h-72 group">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={pkg.thumbnail} 
              alt={pkg.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Title and Description */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                {pkg.title}
              </h3>
              <p className="text-white/90 text-sm line-clamp-2">
                {pkg.includes[0]}
              </p>
            </motion.div>
          </div>
          {/* Top Badges */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
            {/* Duration Badge */}
            <motion.div 
              className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Calendar className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-semibold text-gray-800">{pkg.days}</span>
            </motion.div>
            <div className="flex items-center gap-3">
              {/* Favorite Button */}
              {onFavorite && (
                <motion.button
                  onClick={handleFavorite}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg 
                    ${isFavorite ? 'bg-red-50' : 'bg-white/95 backdrop-blur-sm'}`}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Heart 
                    className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} 
                  />
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-7 flex flex-col flex-grow bg-white">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-blue-600 font-medium">Group size</p>
                <p className="text-sm text-gray-900 font-semibold">Flexible</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-blue-600 font-medium">Destinations</p>
                <p className="text-sm text-gray-900 font-semibold">{pkg.places.length}</p>
              </div>
            </div>
          </div>
          {/* Price and CTA */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 font-medium">Starting from</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-2xl font-bold text-blue-700">
                    ₹{lowestPrice.toLocaleString()}
                  </p>
                  <span className="text-sm text-gray-500">per package</span>
                </div>
              </div>
              <motion.button
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg shadow-blue-100 transition-all duration-300 hover:scale-105 focus:outline-none"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <span>View</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
