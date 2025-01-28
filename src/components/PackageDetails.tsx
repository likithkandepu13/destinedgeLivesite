import { X, Calendar, MapPin, Check, Phone, Users, ArrowRight, Star, Navigation, Info, Clock, AlertCircle, CreditCard, Wallet } from 'lucide-react';
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
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-start justify-center overflow-y-auto"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="bg-white w-full max-w-5xl my-4 overflow-hidden shadow-2xl relative mb-4 md:rounded-2xl"
        >
          {/* Fixed Close Button */}
          <div className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Sticky Navigation Bar */}
          <div className="sticky top-0 z-30 flex flex-col bg-white/95 backdrop-blur-md border-b border-gray-200">
            {/* Top Bar */}
            <div className="px-3 pl-14 sm:px-4 py-3 flex items-center justify-between">
              <h2 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-1">{pkg.title}</h2>
              <div className="hidden md:flex items-center gap-3">
                <a
                  href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Book Now</span>
                </a>
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="md:hidden px-3 pb-3 flex gap-2">
              <a
                href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 flex items-center justify-center gap-1.5 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
              >
                <CreditCard className="h-4 w-4" />
                <span>Book Now</span>
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden">
            <img
              src={pkg.places[0]?.image || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs sm:text-sm">
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5" />
                  <span>{pkg.days} Days</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs sm:text-sm">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5" />
                  <span>{pkg.stay}</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs sm:text-sm">
                  <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                {pkg.title}
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed line-clamp-2 sm:line-clamp-none">
                {pkg.description}
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="sticky top-[113px] md:top-[57px] z-20 bg-white border-b border-gray-200 overflow-x-auto scrollbar-hide">
            <div className="flex px-4 space-x-6">
              {[
                { id: 'itinerary', label: 'Itinerary', icon: Calendar },
                { id: 'pricing', label: 'Pricing', icon: Wallet },
                { id: 'details', label: 'Details', icon: Info },
                { id: 'destinations', label: 'Places', icon: Navigation },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 py-3 text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors whitespace-nowrap text-xs sm:text-sm font-medium"
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 space-y-8 sm:space-y-12">
            {/* Itinerary Section */}
            <section id="itinerary">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600" />
                  Daily Itinerary
                </h3>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>{pkg.days} Days</span>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <div 
                    key={index}
                    className="flex gap-3 sm:gap-6 group"
                  >
                    <div className="relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors text-sm sm:text-base">
                        {index + 1}
                      </div>
                      {index !== pkg.itinerary.length - 1 && (
                        <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-100" />
                      )}
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 sm:p-6 rounded-xl group-hover:bg-blue-50 transition-colors">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Day {index + 1}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{day}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="scroll-mt-32">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Wallet className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600" />
                Pricing Plans
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {Object.entries(pkg.prices).map(([key, price], index) => (
                  <div
                    key={key}
                    className="relative bg-white border-2 rounded-xl p-4 sm:p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                  >
                    {index === 0 && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">{price.people}</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                        ₹{price.price.toLocaleString()}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Per package</p>
                    </div>
                    <a
                      href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                      className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
                    >
                      Book Now
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Package Details Section */}
            <section id="details" className="scroll-mt-32">
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                  <Info className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600" />
                  Package Details
                </h3>
                
                <div className="space-y-8 sm:space-y-10">
                  {/* Inclusions */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                      Package Inclusions
                    </h4>
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Our trips are all-inclusive except for food and activities.</p>
                      <div className="grid gap-4 sm:gap-6">
                        {[
                          {
                            title: "Pick-up & Drop",
                            description: "From Vizag Railway Station/Bus Stand."
                          },
                          {
                            title: "Local Transportation",
                            description: "Private Tempo Traveler/SUV/Sedan for the entire trip. (Private travel, Only for your group)"
                          },
                          {
                            title: "Accommodation",
                            description: [
                              "Quad Occupancy (4 Pax sharing 1 Room) at Family Homestays.",
                              "Rooms with 3-5 capacity or Tents (Campfire/musical night) with 3+ capacity based on availability.",
                              "Fresh-up rooms, if required."
                            ]
                          },
                          {
                            title: "Transfers & Sightseeing",
                            description: "By an individual cab as per the itinerary (A/C will not be used in hilly areas)."
                          },
                          {
                            title: "Taxes & Expenditures",
                            description: "Includes Parking, Toll Tax, Luxury Tax, Green Tax, Fuel Expenses, and Driver Allowance."
                          }
                        ].map((item, index) => (
                          <div key={index} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-semibold text-gray-800 text-sm sm:text-base">{item.title}</h5>
                              {Array.isArray(item.description) ? (
                                <ul className="mt-2 space-y-2">
                                  {item.description.map((desc, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-gray-400 mt-1 text-xs">•</span>
                                      <span className="text-sm sm:text-base text-gray-600">{desc}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-sm sm:text-base text-gray-600 mt-1">{item.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Exclusions */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                      Package Exclusions
                    </h4>
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <div className="grid gap-3 sm:gap-4">
                        {[
                          "Airfare/Train Fare",
                          "Monument Entrance Fee/Camera Fee",
                          "Lunch (Stops at restaurants will be provided during sightseeing)",
                          "Adventure activities, Jeep rides, watersports, shopping, or other personal expenses",
                          "Rates may vary during festive seasons",
                          "Similar hotels will be provided if the selected one is unavailable"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <span className="text-red-500 mt-1 text-xs">•</span>
                            <span className="text-sm sm:text-base text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Policies */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        title: "Rescheduling Policy",
                        content: "Unlimited rescheduling options are available. You can reschedule your trip to any date from the booking date."
                      },
                      {
                        title: "Cancellation Policy",
                        content: [
                          "100% refund if canceled 7+ days in advance",
                          "50% refund if canceled 3-7 days in advance",
                          "No refund if canceled within 0-3 days of the trip"
                        ]
                      },
                      {
                        title: "Refund Policy",
                        content: [
                          "Refunds will be added to your credit shell by default for future bookings",
                          "Cash refunds can be withdrawn within 10-15 working days"
                        ]
                      }
                    ].map((policy, index) => (
                      <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                        <h5 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">{policy.title}</h5>
                        {Array.isArray(policy.content) ? (
                          <ul className="space-y-2">
                            {policy.content.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-gray-400 mt-1 text-xs">•</span>
                                <span className="text-sm sm:text-base text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm sm:text-base text-gray-600">{policy.content}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Important Notes */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                      Important Notes
                    </h4>
                    <div className="bg-yellow-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <div className="grid gap-3 sm:gap-4">
                        {[
                          "Event Hosts/Organizers reserve the right to modify trip details based on situations or climate conditions",
                          "This is a budget trip, but all efforts will be made to ensure your safety and an unforgettable experience",
                          "If you prefer a specific stay, please provide details for applicable extra charges",
                          "Assistance will be provided for booking train or bus tickets"
                        ].map((note, index) => (
                          <div key={index} className="flex items-start gap-2 sm:gap-3">
                            <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm sm:text-base text-gray-700">{note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Destinations Section */}
            <section id="destinations" className="scroll-mt-32">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Navigation className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600" />
                Featured Destinations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {pkg.places.map((place, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">{place.name}</h4>
                      <p className="text-sm sm:text-base text-white/90">{place.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}