import { X, Calendar, MapPin, Check, Phone, Users, ArrowRight, Star, Navigation, Info, Clock, AlertCircle, CreditCard, Wallet, Camera, Coffee, Mountain, Tent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Package } from '../types/package';

interface PackageDetailsProps {
  pkg: Package;
  onClose: () => void;
}

export default function PackageDetails({ pkg, onClose }: PackageDetailsProps) {
  const [activeSection, setActiveSection] = useState('itinerary');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({
    itinerary: null,
    pricing: null,
    details: null,
    destinations: null,
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    // If swipe distance is greater than 100px, close the modal
    if (Math.abs(diff) > 100) {
      onClose();
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -300px 0px' }
    );

    Object.keys(sectionsRef.current).forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionsRef.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      Object.values(sectionsRef.current).forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionId);
  };

  const getPlaceIcon = (name: string) => {
    if (name.toLowerCase().includes('beach')) return <div className="text-blue-500"><Tent /></div>;
    if (name.toLowerCase().includes('museum')) return <div className="text-amber-600"><Camera /></div>;
    if (name.toLowerCase().includes('coffee')) return <div className="text-brown-600"><Coffee /></div>;
    if (name.toLowerCase().includes('mountain') || name.toLowerCase().includes('hill') || name.toLowerCase().includes('view point')) 
      return <div className="text-emerald-700"><Mountain /></div>;
    return <div className="text-indigo-500"><Navigation /></div>;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto"
        onClick={handleBackdropClick}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white w-[95%] max-w-4xl my-4 overflow-hidden shadow-2xl relative rounded-2xl max-h-[90vh] overflow-y-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-white/90 shadow-md backdrop-blur-sm rounded-full p-2 hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="h-5 w-5 text-gray-700" />
          </motion.button>

          {/* Swipe Indicator for Mobile */}
          <div className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 z-50">
            <div className="w-12 h-1 bg-white/30 rounded-full" />
          </div>

          {/* Hero Section */}
          <div className="relative h-[300px] md:h-[450px] overflow-hidden">
            <motion.img
              src={pkg.places[0]?.image || pkg.thumbnail}
              alt={pkg.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{pkg.days}</span>
                </div>
                <div className="flex items-center bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{pkg.places.length} Destinations</span>
                </div>
                <div className="flex items-center bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                  <Star className="h-4 w-4 mr-2" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                {pkg.title}
              </h1>
              
              <p className="text-white/90 text-base md:text-lg max-w-3xl leading-relaxed line-clamp-3">
                Experience the beauty of {pkg.title.split(',')[0]} with our exclusive package. Explore iconic landmarks, immerse in local culture, and create lasting memories.
              </p>
            </motion.div>
          </div>

          {/* Navigation Tabs */}
          <div className="sticky top-0 z-30 bg-white shadow-sm">
            <div className="flex px-4 overflow-x-auto hide-scrollbar">
              {[
                { id: 'itinerary', label: 'Itinerary', icon: Calendar },
                { id: 'pricing', label: 'Pricing', icon: Wallet },
                { id: 'details', label: 'Details', icon: Info },
                { id: 'destinations', label: 'Places', icon: Navigation },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center gap-1.5 py-4 px-4 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeSection === id 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 space-y-12">
            {/* Itinerary Section */}
            <section id="itinerary" className="scroll-mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Daily Itinerary
                </h2>
                <div className="flex items-center gap-1.5 text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span>{pkg.days}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {pkg.itinerary.map((day, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4 group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {index + 1}
                      </motion.div>
                      {index !== pkg.itinerary.length - 1 && (
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-100" />
                      )}
                    </div>
                    <div className="flex-1 bg-gray-50 p-5 rounded-xl group-hover:bg-blue-50 transition-colors border border-gray-100">
                      <h4 className="font-semibold text-gray-800 mb-2">Day {index + 1}</h4>
                      <p className="text-gray-600 leading-relaxed">{day}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="scroll-mt-16">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Wallet className="h-6 w-6 text-blue-600" />
                Pricing Plans
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.entries(pkg.prices).map(([key, price], index) => (
                  <motion.div
                    key={key}
                    className={`relative bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 ${
                      index === 0 ? 'border-2 border-blue-600' : 'border border-gray-200'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {index === 0 && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-800">{price.people}</span>
                    </div>
                    <div className="mb-5">
                      <p className="text-3xl font-bold text-blue-700">
                        ₹{price.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Per package</p>
                    </div>
                    <motion.a
                      href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                      className={`block w-full text-center py-3 rounded-lg font-medium ${
                        index === 0 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.a>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 rounded-lg p-4 text-sm text-blue-800 flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Info className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Looking for a custom package?</p>
                  <p>Call us at +91 8885525886 for personalized planning and special group discounts.</p>
                </div>
              </div>
            </section>

            {/* Details Section */}
            <section id="details" className="scroll-mt-16">
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Info className="h-6 w-6 text-blue-600" />
                  Package Details
                </h2>
                
                <div className="space-y-8">
                  {/* Inclusions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      Package Inclusions
                    </h3>
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <p className="text-gray-600 mb-5">Our trips are all-inclusive except for food and activities.</p>
                      <div className="grid gap-4">
                        {[
                          {
                            title: "Pick-up & Drop",
                            description: "From Vizag Railway Station/Bus Stand."
                          },
                          {
                            title: "Private Transportation",
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
                            title: "All Taxes & Expenditures",
                            description: "Includes Parking, Toll Tax, Luxury Tax, Green Tax, Fuel Expenses, and Driver Allowance."
                          }
                        ].map((item, index) => (
                          <motion.div 
                            key={index} 
                            className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-semibold text-gray-800">{item.title}</h5>
                              {Array.isArray(item.description) ? (
                                <ul className="mt-2 space-y-2">
                                  {item.description.map((desc, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-gray-400 mt-1 text-xs">•</span>
                                      <span className="text-gray-600">{desc}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-600 mt-1">{item.description}</p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Exclusions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      Package Exclusions
                    </h3>
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Airfare/Train Fare",
                          "Monument Entrance Fee/Camera Fee",
                          "Meals (Stops at restaurants will be provided during sightseeing)",
                          "Adventure activities, Jeep rides, watersports",
                          "Personal expenses and shopping",
                          "Additional charges during festive seasons"
                        ].map((item, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-start gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <span className="text-red-500 mt-1 text-xs">•</span>
                            <span className="text-gray-600">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Policies */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Rescheduling",
                        content: "Unlimited free rescheduling available before 7 days of departure."
                      },
                      {
                        title: "Cancellation",
                        content: [
                          "100% refund if canceled 7+ days in advance",
                          "50% refund if canceled 3-7 days in advance",
                          "No refund if canceled within 3 days"
                        ]
                      },
                      {
                        title: "Refund Process",
                        content: [
                          "Refunds added to credit shell for future bookings",
                          "Cash refunds processed within 10-15 working days"
                        ]
                      }
                    ].map((policy, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-white rounded-xl p-5 shadow-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="font-semibold text-gray-800 mb-3">{policy.title}</h4>
                        {Array.isArray(policy.content) ? (
                          <ul className="space-y-2">
                            {policy.content.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-gray-400 mt-1 text-xs">•</span>
                                <span className="text-gray-600 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600 text-sm">{policy.content}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Destinations Section */}
            <section id="destinations" className="scroll-mt-16">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Navigation className="h-6 w-6 text-blue-600" />
                Featured Destinations
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pkg.places.map((place, index) => (
                  <motion.div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: Math.min(index * 0.05, 1.5) }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          {getPlaceIcon(place.name)}
                        </div>
                        <span className="text-xs text-white/80">{place.description}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{place.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Ready to book your adventure?</h3>
              <p className="text-blue-100 mb-5">Secure your spot now for this amazing journey through {pkg.title.split(',')[0]}</p>
              <motion.a
                href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-4 w-4" />
                Call to Book Now
              </motion.a>
            </motion.div>
          </div>

          {/* Floating CTA for Mobile
          <motion.div 
            className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
              className="block w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold"
            >
              Book Now
            </a>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}