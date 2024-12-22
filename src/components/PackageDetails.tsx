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
          {/* Hero Section */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
            <img
              src={pkg.places[0]?.image || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:rotate-90 z-10"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                {pkg.title}
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-4 max-w-3xl leading-relaxed">
                {pkg.description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>{pkg.days}</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>{pkg.stay}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 space-y-8 sm:space-y-12">
            {/* Itinerary Section */}
            <section>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 mr-2 sm:mr-3" />
                Daily Itinerary
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="flex gap-4 sm:gap-6">
                    <div className="relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold relative z-10">
                        {index + 1}
                      </div>
                      {index !== pkg.itinerary.length - 1 && (
                        <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-100" />
                      )}
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 sm:p-6 rounded-xl">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{day}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 mr-2 sm:mr-3" />
                Pricing Plans
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {Object.entries(pkg.prices).map(([key, price], index) => (
                  <div
                    key={key}
                    className="border-2 rounded-xl p-4 sm:p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      <span className="font-semibold text-gray-700">{price.people}</span>
                    </div>
                    <p className="text-3xl sm:text-4xl font-bold text-blue-600">
                      ₹{price.price.toLocaleString()}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">Per package</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Package Details Section */}
            <section className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Package Details</h3>
              
              <div className="space-y-8">
                {/* Inclusions */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Package Inclusions</h4>
                  <p className="text-gray-600 mb-4">Our trips are all-inclusive except for food and activities.</p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">Pick-up & Drop:</span>
                        <span className="text-gray-600"> From Vizag Railway Station/Bus Stand.</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">Local Transportation:</span>
                        <span className="text-gray-600"> Private Tempo Traveler/SUV/Sedan for the entire trip. (Private travel ,Only for your group)</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">Accommodation:</span>
                        <ul className="text-gray-600 list-disc ml-5 mt-2">
                          <li>Quad Occupancy (4 Pax sharing 1 Room) at Family Homestays.</li>
                          <li>Rooms with 3-5 capacity or Tents (Campfire/musical night) with 3+ capacity based on availability.</li>
                          <li>Fresh-up rooms, if required.</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">Transfers & Sightseeing:</span>
                        <span className="text-gray-600"> By an individual cab as per the itinerary (A/C will not be used in hilly areas).</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">Taxes & Expenditures:</span>
                        <span className="text-gray-600"> Includes Parking, Toll Tax, Luxury Tax, Green Tax, Fuel Expenses, and Driver Allowance.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Exclusions */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Package Exclusions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Airfare/Train Fare</li>
                    <li>• Monument Entrance Fee/Camera Fee</li>
                    <li>• Lunch (Stops at restaurants will be provided during sightseeing)</li>
                    <li>• Adventure activities, Jeep rides, watersports, shopping, or other personal expenses</li>
                    <li>• Rates may vary during festive seasons</li>
                    <li>• Similar hotels will be provided if the selected one is unavailable</li>
                  </ul>
                </div>

                {/* Policies */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Rescheduling Policy</h4>
                    <p className="text-gray-600">Unlimited rescheduling options are available. You can reschedule your trip to any date from the booking date.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Cancellation Charges Policy</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 100% refund if canceled 7+ days in advance</li>
                      <li>• 50% refund if canceled 3-7 days in advance</li>
                      <li>• No refund if canceled within 0-3 days of the trip</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Refund Policy</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Refunds will be added to your credit shell by default for future bookings</li>
                      <li>• Cash refunds can be withdrawn within 10-15 working days</li>
                    </ul>
                  </div>
                </div>

                {/* Important Notes */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Important Notes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Event Hosts/Organizers reserve the right to modify trip details based on situations or climate conditions</li>
                    <li>• This is a budget trip, but all efforts will be made to ensure your safety and an unforgettable experience</li>
                    <li>• If you prefer a specific stay, please provide details for applicable extra charges</li>
                    <li>• Assistance will be provided for booking train or bus tickets</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Destinations Section */}
            <section>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Navigation className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 mr-2 sm:mr-3" />
                Featured Destinations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {pkg.places.map((place, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                    <div className="relative h-48 sm:h-56">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h4 className="text-lg sm:text-xl font-bold mb-2">{place.name}</h4>
                        <p className="text-sm text-white/90">{place.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <div className="flex justify-center pt-4 sm:pt-8">
              <a
                href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                className="flex items-center gap-3 bg-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Book Your Adventure</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}