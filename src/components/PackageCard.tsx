import { Package } from '../types/package';
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';

interface PackageCardProps {
  pkg: Package;
  onClick: (pkg: Package) => void;
}

export default function PackageCard({ pkg, onClick }: PackageCardProps) {
  const lowestPrice = Object.values(pkg.prices).reduce((min, price) => {
    const current = parseInt(price.price.replace(/,/g, ''));
    return current < min ? current : min;
  }, Infinity);

  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
      onClick={() => onClick(pkg)}
    >
      {/* Image Container with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={pkg.thumbnail} 
          alt={pkg.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title with Line Clamp */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 min-h-[3.5rem]">
          {pkg.title}
        </h3>

        {/* Package Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600 group/item">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 group-hover/item:bg-blue-100 transition-colors">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <span className="font-medium">{pkg.days}</span>
          </div>

          <div className="flex items-center text-gray-600 group/item">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 group-hover/item:bg-blue-100 transition-colors">
              <MapPin className="h-4 w-4 text-blue-600" />
            </div>
            <span className="font-medium">{pkg.places.length} Destinations</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500 font-medium">Total trip Starting from</p>
            <p className="text-2xl font-bold text-blue-600">
              ₹{lowestPrice.toLocaleString()}
            </p>
          </div>

          <button
            className="group/btn flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
          >
            <span className="font-medium">View Details</span>
            <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}