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
    const lowerName = name.toLowerCase();
    if (lowerName.includes('beach')) return <Tent className="h-5 w-5 text-blue-500" />;
    if (lowerName.includes('museum')) return <Camera className="h-5 w-5 text-amber-600" />;
    if (lowerName.includes('coffee')) return <Coffee className="h-5 w-5 text-brown-600" />;
    if (lowerName.includes('mountain') || lowerName.includes('hill') || lowerName.includes('view point'))
      return <Mountain className="h-5 w-5 text-emerald-700" />;
    return <Navigation className="h-5 w-5 text-indigo-500" />;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto p-4"
        onClick={handleBackdropClick}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
<<<<<<< HEAD
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white w-[99vw] max-w-4xl my-2 overflow-hidden shadow-2xl relative rounded-2xl max-h-[98vh] overflow-y-auto border border-blue-100"
=======
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white w-full max-w-5xl my-6 overflow-hidden shadow-xl rounded-2xl max-h-[92vh] overflow-y-auto border border-gray-100"
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button - simple and clean */}
          <motion.button
            onClick={onClose}
<<<<<<< HEAD
            aria-label="Close details modal"
            className="absolute top-3 right-3 z-50 bg-white/90 shadow-lg backdrop-blur-md rounded-full p-3 md:p-2 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors w-12 h-12 flex items-center justify-center md:w-10 md:h-10"
=======
            aria-label="Close modal"
            title="Close"
            className="absolute top-4 right-4 z-50 bg-white/90 shadow-md rounded-full p-2.5 hover:bg-gray-100 transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="h-7 w-7 text-gray-700 md:h-5 md:w-5" />
          </motion.button>

          {/* Swipe Indicator for Mobile */}
<<<<<<< HEAD
          <div className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
            <div className="w-14 h-1.5 bg-gray-300/60 rounded-full mb-1" />
            <span className="text-xs text-gray-400">Swipe down to close</span>
          </div>

          {/* Hero Section */}
          <div className="relative h-[260px] xs:h-[320px] sm:h-[380px] md:h-[450px] overflow-hidden rounded-b-3xl shadow-2xl">
            {/* Parallax hero image */}
            <motion.img
              src={pkg.places[0]?.image || pkg.thumbnail}
              alt={pkg.title}
              className="w-full h-full object-cover object-center scale-105 will-change-transform"
              initial={{ scale: 1.1, y: 0 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -10 }}
              transition={{ duration: 0.8 }}
            />
            {/* Glassmorphism overlay with animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-blue-900/40 to-transparent glass-hero animate-gradient-x" />
            {/* Animated floating shapes */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="floating-shape shape1" />
              <div className="floating-shape shape2" />
              <div className="floating-shape shape3" />
            </div>
            {/* Dynamic badge (show only if special) */}
            {pkg.isBestSeller && (
              <div className="absolute top-5 left-5 z-20">
                <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-4 py-1 rounded-full font-bold shadow-lg text-xs animate-bounce animate-glow">Best Seller</span>
              </div>
            )}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white drop-shadow-xl"
              initial={{ y: 20, opacity: 0 }}
=======
          <div className="md:hidden absolute top-3 left-1/2 -translate-x-1/2 z-50">
            <div className="w-16 h-1 bg-white/40 rounded-full" />
          </div>

          {/* Hero Section */}
          <div className="relative h-[280px] md:h-[400px] overflow-hidden">
            <motion.img
              src={pkg.places[0]?.image || pkg.thumbnail}
              alt={pkg.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white"
              initial={{ y: 30, opacity: 0 }}
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
<<<<<<< HEAD
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm shadow" title="Duration">
=======
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                  <Calendar className="h-4 w-4 mr-2" />
                  {pkg.days}
                </div>
<<<<<<< HEAD
                <div className="flex items-center bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm shadow" title="Destinations">
=======
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                  <MapPin className="h-4 w-4 mr-2" />
                  {pkg.places.length} Destinations
                </div>
<<<<<<< HEAD
                <div className="flex items-center bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm shadow" title="Rating">
=======
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                  <Star className="h-4 w-4 mr-2" />
                  4.8/5 Rating
                </div>
              </div>
<<<<<<< HEAD
              <h1 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4 drop-shadow-lg">
                {pkg.title}
              </h1>
              <p className="text-white/90 text-base md:text-lg max-w-3xl leading-relaxed line-clamp-3 font-medium">
                Experience the beauty of {pkg.title.split(',')[0]} with our exclusive package. Explore iconic landmarks, immerse in local culture, and create lasting memories.
=======
              <h1 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">
                {pkg.title}
              </h1>
              <p className="text-white/90 text-base md:text-lg max-w-3xl leading-relaxed line-clamp-2">
                Discover {pkg.title.split(',')[0]} with our curated package, blending iconic landmarks and immersive cultural experiences.
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
              </p>
            </motion.div>
          </div>

          {/* Navigation Tabs */}
<<<<<<< HEAD
          <div className="sticky top-0 z-50 bg-white/80 shadow-lg rounded-b-xl border-b border-blue-100 glass-tabs">
            <nav aria-label="Section navigation" className="flex px-4 overflow-x-auto hide-scrollbar relative">
=======
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
            <div className="flex px-6 overflow-x-auto hide-scrollbar">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
              {[
                { id: 'itinerary', label: 'Itinerary', icon: Calendar },
                { id: 'pricing', label: 'Pricing', icon: Wallet },
                { id: 'details', label: 'Details', icon: Info },
                { id: 'destinations', label: 'Places', icon: Navigation },
              ].map(({ id, label, icon: Icon }, idx) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
<<<<<<< HEAD
                  className={`flex items-center gap-1.5 py-3 px-6 font-semibold text-base whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full mx-2 relative ${
                    activeSection === id 
                      ? 'text-blue-800 bg-white shadow-lg scale-105' 
                      : 'text-gray-600 hover:text-blue-700 bg-transparent'
=======
                  className={`flex items-center gap-2 py-4 px-5 font-medium text-sm transition-all duration-300 ${
                    activeSection === id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-300'
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                  }`}
                  aria-current={activeSection === id ? 'page' : undefined}
                  tabIndex={0}
                  title={label}
                >
                  <motion.span animate={activeSection === id ? { scale: 1.2, rotate: 8 } : { scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  {label}
                  {activeSection === id && (
                    <motion.div layoutId="tab-indicator" className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-400 to-blue-700 animate-tab-indicator" />
                  )}
                </button>
              ))}
            </nav>
          </div>

<<<<<<< HEAD
          <div className="p-4 sm:p-6 md:p-10 space-y-14">
            {/* Itinerary Section */}
            <section id="itinerary" className="scroll-mt-20">
              <div className="flex items-center justify-between mb-7">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Daily Itinerary
                </h2>
                <div className="flex items-center gap-1.5 text-base text-gray-500 bg-blue-50 px-3 py-1 rounded-full font-semibold">
=======
          <div className="p-6 md:p-8 space-y-12">
            {/* Itinerary Section */}
            <section id="itinerary" className="scroll-mt-20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Daily Itinerary
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                  <Clock className="h-4 w-4" />
                  {pkg.days}
                </div>
              </div>
<<<<<<< HEAD
              
              <div className="space-y-5">
=======
              <div className="space-y-6">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                {pkg.itinerary.map((day, index) => (
                  <motion.div
                    key={index}
<<<<<<< HEAD
                    className="flex gap-4 group items-start"
                    initial={{ opacity: 0, y: 10 }}
=======
                    className="flex gap-4 group"
                    initial={{ opacity: 0, y: 15 }}
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
<<<<<<< HEAD
                    <div className="relative flex flex-col items-center">
                      <motion.div 
                        className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-200 to-blue-500 flex items-center justify-center text-white font-bold text-lg relative z-10 group-hover:scale-110 group-hover:shadow-xl transition-all border-4 border-white"
=======
                    <div className="relative">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold group-hover:bg-blue-600 group-hover:text-white transition-colors"
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <Calendar className="h-5 w-5" />
                      </motion.div>
                      {index !== pkg.itinerary.length - 1 && (
<<<<<<< HEAD
                        <div className="w-1 h-8 bg-gradient-to-b from-blue-200 to-blue-400" />
                      )}
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl group-hover:bg-blue-50 transition-colors border border-blue-100 shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-2 text-lg">Day {index + 1}</h4>
                      <p className="text-gray-700 leading-relaxed text-base">{day}</p>
=======
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-100 group-hover:bg-blue-200" />
                      )}
                    </div>
                    <div className="flex-1 bg-white p-5 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-blue-200 transition-all">
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Day {index + 1}</h4>
                      <p className="text-gray-600 leading-relaxed">{day}</p>
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="scroll-mt-20">
<<<<<<< HEAD
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-7 flex items-center gap-2">
=======
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                <Wallet className="h-6 w-6 text-blue-600" />
                Pricing Plans
              </h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {Object.entries(pkg.prices).map(([key, price], index) => (
                   <div
                     key={key}
                     className={`relative bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg ${
                       index === 0 ? 'border-2 border-blue-600 ring-1 ring-blue-100' : 'border border-gray-200'
                     }`}
                   >
                     {index === 0 && (
                       <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                         Most Popular
                       </div>
                     )}
                     <div className="flex items-center gap-3 mb-4">
                       <Users className="h-5 w-5 text-blue-600" />
                       <span className="font-semibold text-gray-900">{price.people}</span>
                     </div>
                     <div className="mb-5">
                       <p className="text-3xl font-bold text-blue-700">
                         ₹{price.price.toLocaleString()}
                       </p>
                       <p className="text-sm text-gray-500 mt-1">Per package</p>
                     </div>
                     <a
                       href={`tel:+91 8885525886`}
                       className={`block w-full text-center py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                         index === 0
                           ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200'
                           : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                       }`}
                     >
                       Book Now
                     </a>
                   </div>
                 ))}
                 
                 {/* 9+ People Custom Option */}
                 <div className="relative bg-white rounded-xl p-6 shadow-md transition-all duration-300 border border-gray-200">
                   <div className="flex items-center gap-3 mb-4">
                     <Users className="h-5 w-5 text-blue-600" />
                     <span className="font-semibold text-gray-900">9+ People</span>
                   </div>
                   <div className="mb-5">
                     <p className="text-3xl font-bold text-blue-600">
                       Custom
                     </p>
                     <p className="text-sm text-gray-500 mt-1">Contact for pricing</p>
                   </div>
                   <a
                     href={`tel:+91 8885525886`}
                     className="block w-full text-center py-3 rounded-lg font-semibold text-sm transition-colors bg-blue-50 text-blue-600 hover:bg-blue-100"
                   >
                     Customize & Book Now
                   </a>
                 </div>
               </div>
              
<<<<<<< HEAD
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {Object.entries(pkg.prices).map(([key, price], index) => (
                  <motion.div
                    key={key}
                    className={`relative bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl p-7 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 ${
                      index === 0 ? 'border-4 border-gradient-animated shadow-xl animate-border-glow' : 'border border-blue-100'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {index === 0 && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        Recommended
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-5 w-5 text-blue-700" />
                      <span className="font-semibold text-gray-800 text-base">{price.people}</span>
                    </div>
                    <div className="mb-5">
                      <p className="text-3xl font-extrabold text-blue-700">
                        ₹{Number(price.price.replace(/,/g, "")).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Per package</p>
                    </div>
                    <motion.a
                      href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                      className={`block w-full text-center py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${
                        index === 0 
                          ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 animate-glow' 
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                      }`}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Book this package by phone"
                      onClick={() => { /* triggerConfetti() */ }}
                    >
                      <Phone className="h-4 w-4 inline mr-2" />Book Now
                    </motion.a>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-5 text-base text-blue-900 flex items-start gap-4 shadow-sm">
                <div className="mt-1 flex-shrink-0">
                  <Info className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold mb-1">Looking for a custom package?</p>
                  <p>Call us at <a href="tel:+918885525886" className="underline hover:text-blue-700">+91 8885525886</a> for personalized planning and special group discounts.</p>
=======
              
              {/* Vehicle Customization Section */}
              <div className="mt-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-5 border border-green-200">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Navigation className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Customize Your Travel Experience</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• <strong>Vehicle Upgrade:</strong> You can change the vehicle based on your comfort level (may cost extra)</p>
                      <p>• <strong>Travel Options:</strong> Customize your travel preferences and requirements</p>
                      <p>• <strong>Special Requests:</strong> We accommodate special needs and preferences</p>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <Phone className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-gray-900">Call us: +91 8885525886</span>
                    </div>
                  </div>
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                </div>
              </div>
            </section>

            {/* Details Section */}
            <section id="details" className="scroll-mt-20">
<<<<<<< HEAD
              <div className="bg-gray-50 rounded-2xl p-7 md:p-10 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-7 flex items-center gap-2">
                  <Info className="h-6 w-6 text-blue-600" />
                  Package Details
                </h2>
                
                <div className="space-y-10">
=======
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Info className="h-6 w-6 text-blue-600" />
                  Package Details
                </h2>
                <div className="space-y-8">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                  {/* Inclusions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
<<<<<<< HEAD
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      Package Inclusions
                    </h3>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <p className="text-gray-600 mb-5">Our trips are all-inclusive except for food and activities.</p>
                      <div className="grid gap-4">
=======
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      Package Inclusions
                    </h3>
                    <div className="bg-gray-50 rounded-xl p-5">
                      <p className="text-gray-600 mb-4">All-inclusive package except for food and activities.</p>
                      <div className="grid gap-3">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                        {[
                          {
                            title: 'Pick-up & Drop',
                            description: 'From Vizag Railway Station/Bus Stand.',
                          },
                          {
                            title: 'Private Transportation',
                            description: 'Private Tempo Traveler (add-on) /SUV (5/7/9 Seater) /Sedan for the entire trip (exclusive for your group).',
                          },
                          {
                            title: 'Accommodation',
                            description: [
                              'Quad Occupancy (4 Pax sharing 1 Room) at Family Homestays.',
                              'Rooms with 3-5 capacity or Tents (Campfire/musical night) based on availability.',
                              'Fresh-up rooms, if required.',
                            ],
                          },
                          {
                            title: 'All Taxes & Expenditures',
                            description: 'Includes Parking, Toll Tax, Luxury Tax, Green Tax, Fuel Expenses, and Driver Allowance.',
                          },
                        ].map((item, index) => (
<<<<<<< HEAD
                          <motion.div 
                            key={index} 
                            className="flex gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
=======
                          <motion.div
                            key={index}
                            className="flex gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-semibold text-gray-900">{item.title}</h5>
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
<<<<<<< HEAD
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      Package Exclusions
                    </h3>
                    <div className="bg-white rounded-xl p-6 shadow-md">
=======
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      Package Exclusions
                    </h3>
                    <div className="bg-gray-50 rounded-xl p-5">
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          'Airfare/Train Fare',
                          'Monument Entrance Fee/Camera Fee',
                          'Meals (Stops at restaurants will be provided during sightseeing)',
                          'Adventure activities, Jeep rides, watersports',
                          'Personal expenses and shopping',
                          'Additional charges during festive seasons',
                        ].map((item, index) => (
<<<<<<< HEAD
                          <motion.div 
                            key={index} 
                            className="flex items-start gap-2 p-3 rounded-lg hover:bg-red-50 transition-colors"
=======
                          <motion.div
                            key={index}
                            className="flex items-start gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors"
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
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
                  <div className="grid sm:grid-cols-3 gap-5">
                    {[
                      {
                        title: 'Rescheduling',
                        content: 'Unlimited free rescheduling available before 7 days of departure.',
                      },
                      {
                        title: 'Cancellation',
                        content: [
                          '100% refund if canceled 7+ days in advance',
                          '50% refund if canceled 3-7 days in advance',
                          'No refund if canceled within 3 days',
                        ],
                      },
                      {
                        title: 'Refund Process',
                        content: [
                          'Refunds added to credit shell for future bookings',
                          'Cash refunds processed within 10-15 working days',
                        ],
                      },
                    ].map((policy, index) => (
<<<<<<< HEAD
                      <motion.div 
                        key={index} 
                        className="bg-white rounded-xl p-6 shadow-md"
=======
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-5 shadow-sm"
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="font-semibold text-gray-900 mb-3">{policy.title}</h4>
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
            <section id="destinations" className="scroll-mt-20">
<<<<<<< HEAD
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-7 flex items-center gap-2">
                <Navigation className="h-6 w-6 text-blue-600" />
                Featured Destinations
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {pkg.places.map((place, index) => (
                  <motion.div 
                    key={index} 
                    className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: Math.min(index * 0.05, 1.5) }}
                    whileHover={{ y: -5 }}
=======
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Navigation className="h-6 w-6 text-blue-600" />
                Featured Destinations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pkg.places.map((place, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 bg-white"
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
<<<<<<< HEAD
                        className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 will-change-transform"
                        whileHover={{ scale: 1.12, y: -8 }}
                        transition={{ duration: 0.4 }}
=======
                        className="w-full h-full object-cover"
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="mt-auto mb-2 px-4 py-2 bg-white/80 text-blue-800 font-bold rounded-full shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label={`View more about ${place.name}`}>View More</button>
                      </div>
                    </div>
<<<<<<< HEAD
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                          {getPlaceIcon(place.name)}
                        </div>
                        <span className="text-xs text-white/80 font-medium">{place.description}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white drop-shadow-lg">{place.name}</h3>
=======
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5">
                      <div className="flex items-center gap-2 mb-2">
                        {getPlaceIcon(place.name)}
                        <span className="text-sm text-white/90">{place.description}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{place.name}</h3>
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
<<<<<<< HEAD
            <motion.div 
              className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-7 text-white text-center shadow-xl mt-10 border-4 border-transparent animate-cta-glow"
=======
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 md:p-8 text-white text-center shadow-lg"
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h3 className="text-2xl font-extrabold mb-3">Ready to book your adventure?</h3>
              <p className="text-blue-100 mb-5 text-lg font-medium">Secure your spot now for this amazing journey through {pkg.title.split(',')[0]}</p>
              <motion.a
                href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                className="inline-flex items-center gap-2 bg-white text-blue-800 px-7 py-3 rounded-full font-bold shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors animate-pulse animate-glow"
                whileHover={{ scale: 1.08 }}
=======
              <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Ready for Your Adventure?</h3>
              <p className="text-blue-100 mb-5 text-base">Secure your spot for an unforgettable journey through {pkg.title.split(',')[0]}.</p>
              <motion.a
                href={`tel:+91 8885525886`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
                whileTap={{ scale: 0.98 }}
                aria-label="Call to book this package"
                onClick={() => { /* triggerConfetti() */ }}
              >
                <Phone className="h-5 w-5" />
                Call to Book Now
              </motion.a>
            </motion.div>
          </div>
<<<<<<< HEAD

          {/* Floating CTA for Mobile */}
          <motion.div
            className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg z-[100] flex justify-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
              className="block w-full max-w-md bg-blue-700 text-white py-4 rounded-xl text-center font-bold text-lg shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              aria-label="Book this package by phone"
            >
              <Phone className="h-5 w-5 inline mr-2" />Book Now
            </a>
          </motion.div>
=======
>>>>>>> c939e13a19f5db9515f873912fde22a5d952e0a1
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}