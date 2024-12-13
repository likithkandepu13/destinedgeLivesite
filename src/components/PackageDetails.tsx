import { X, Calendar, MapPin, Check, Phone, Users, ArrowRight, Star, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package } from '../types/package';

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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-5xl my-4 sm:my-8 overflow-hidden shadow-2xl relative"
        >
          {/* Hero Section with Parallax Effect */}
          <motion.div 
            className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden"
            whileHover="hover"
          >
            <motion.img
              src={pkg.places[0]?.image || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'}
              alt={pkg.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:rotate-90"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white"
              variants={fadeInUp}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">
                {pkg.title}
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <motion.div 
                  className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>{pkg.days}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>{pkg.stay}</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <div className="p-4 sm:p-6 md:p-8 space-y-8 sm:space-y-12">
            {/* Itinerary Section with Timeline */}
            <motion.section
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 mr-2 sm:mr-3" />
                Daily Itinerary
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 sm:gap-6 group"
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        {index + 1}
                      </motion.div>
                      {index !== pkg.itinerary.length - 1 && (
                        <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-100 group-hover:bg-blue-200 transition-colors" />
                      )}
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 sm:p-6 rounded-xl group-hover:bg-blue-50 transition-all duration-300 transform group-hover:-translate-y-1 hover:shadow-lg">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{day}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Destinations Section with Card Grid */}
            <motion.section
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Navigation className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 mr-2 sm:mr-3" />
                Featured Destinations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {pkg.places.map((place, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-48 sm:h-56">
                      <motion.img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300">
                        <h4 className="text-lg sm:text-xl font-bold mb-2">{place.name}</h4>
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          whileHover={{ opacity: 1, height: 'auto' }}
                          className="text-sm text-white/90 line-clamp-2 group-hover:line-clamp-none"
                        >
                          {place.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Inclusions Section with Grid */}
            <motion.section
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Star className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 mr-2 sm:mr-3" />
                Package Inclusions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {pkg.includes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 sm:gap-4 bg-green-50/50 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300 hover:shadow-md"
                  >
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Pricing Section with Cards */}
            <motion.section
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 mr-2 sm:mr-3" />
                Pricing Plans
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {Object.entries(pkg.prices).map(([key, price], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="border-2 rounded-xl p-4 sm:p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      <span className="font-semibold text-gray-700">{price.people}</span>
                    </div>
                    <p className="text-3xl sm:text-4xl font-bold text-blue-600 transition-transform duration-300">
                      ₹{price.price.toLocaleString()}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">Per package</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div 
              className="flex justify-center pt-4 sm:pt-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.a
                href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Book Your Adventure</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}