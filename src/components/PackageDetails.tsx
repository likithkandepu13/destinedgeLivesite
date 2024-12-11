import { Package } from '../types/package';
import { X, Calendar, MapPin, Check, Phone, Users, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface PackageDetailsProps {
  pkg: Package;
  onClose: () => void;
}

export default function PackageDetails({ pkg, onClose }: PackageDetailsProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
      >
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src={pkg.places[0]?.image || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{pkg.title}</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{pkg.days}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{pkg.stay}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-12">
          {/* Itinerary */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Calendar className="h-7 w-7 text-blue-600 mr-3" />
              Daily Itinerary
            </h3>
            <div className="space-y-6">
              {pkg.itinerary.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-6 group"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {index + 1}
                    </div>
                    {index !== pkg.itinerary.length - 1 && (
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-100 group-hover:bg-blue-200 transition-colors" />
                    )}
                  </div>
                  <div className="flex-1 bg-gray-50 p-6 rounded-xl group-hover:bg-blue-50 transition-all duration-300 transform group-hover:-translate-y-1">
                    <p className="text-gray-700 leading-relaxed">{day}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Places */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <MapPin className="h-7 w-7 text-blue-600 mr-3" />
              Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pkg.places.map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-xl font-bold mb-2">{place.name}</h4>
                      <p className="text-sm text-white/90">{place.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Inclusions */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Star className="h-7 w-7 text-blue-600 mr-3" />
              Package Inclusions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.includes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 bg-green-50/50 p-5 rounded-xl hover:bg-green-50 transition-colors duration-300"
                >
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="h-7 w-7 text-blue-600 mr-3" />
              Pricing Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(pkg.prices).map(([key, price], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-2 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold text-gray-700">{price.people}</span>
                  </div>
                  <p className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    ₹{price.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">For total people</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <motion.a
              href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              <span>Book Your Adventure</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}