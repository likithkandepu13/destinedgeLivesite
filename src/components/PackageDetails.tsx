import { Package } from '../types/package';
import { X, Calendar, MapPin, Check, Phone, Users, ArrowRight } from 'lucide-react';

interface PackageDetailsProps {
  pkg: Package;
  onClose: () => void;
}

export default function PackageDetails({ pkg, onClose }: PackageDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm p-6 border-b z-10 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{pkg.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 space-y-10">
          {/* Quick Info */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center text-gray-700 bg-blue-50 px-4 py-2 rounded-full">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-medium">{pkg.days}</span>
            </div>
            <div className="flex items-center text-gray-700 bg-blue-50 px-4 py-2 rounded-full">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-medium">{pkg.stay}</span>
            </div>
          </div>

          {/* Itinerary */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Itinerary
            </h3>
            <div className="space-y-4">
              {pkg.itinerary.map((day, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    {index !== pkg.itinerary.length - 1 && (
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-100" />
                    )}
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 rounded-lg group-hover:bg-blue-50 transition-colors">
                    <p className="text-gray-700">{day}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Places */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Places Covered
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pkg.places.map((place, index) => (
                <div 
                  key={index} 
                  className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h4 className="absolute bottom-4 left-4 text-white font-semibold">{place.name}</h4>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-600">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Check className="h-6 w-6 text-blue-600" />
              Package Includes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.includes.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-green-50 p-4 rounded-lg group hover:bg-green-100 transition-colors"
                >
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-600" />
              Pricing Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(pkg.prices).map(([key, price]) => (
                <div 
                  key={key} 
                  className="border rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-700">{price.people}</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">₹{price.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-6">
            <a
              href="tel:+91 8885525886"
              className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span>Book Now</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
