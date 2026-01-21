import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  X, Calendar, MapPin, Check, Phone, Users, Star, Navigation, Info, Clock, AlertCircle, Wallet, Camera, Coffee, Mountain, Tent
} from 'lucide-react';
import { Package } from '../types/package';

interface PackageDetailsModalProps {
  open: boolean;
  onClose: () => void;
  pkg: Package;
}

function getPlaceIcon(name: string) {
  if (name.toLowerCase().includes('beach')) return <Tent className="text-blue-500" />;
  if (name.toLowerCase().includes('museum')) return <Camera className="text-amber-600" />;
  if (name.toLowerCase().includes('coffee')) return <Coffee className="text-amber-900" />;
  if (name.toLowerCase().includes('mountain') || name.toLowerCase().includes('hill') || name.toLowerCase().includes('view point')) return <Mountain className="text-emerald-700" />;
  return <Navigation className="text-indigo-500" />;
}

export default function PackageDetailsModal({ open, onClose, pkg }: PackageDetailsModalProps) {
  const dialogRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose} initialFocus={dialogRef}>
        <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-indigo-900/80 to-blue-700/80 backdrop-blur-[8px] transition-opacity" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          <div className="flex min-h-full items-center justify-center p-0 sm:p-8 text-center w-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                ref={dialogRef}
                className="relative w-full max-w-4xl bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-200 overflow-hidden text-left flex flex-col max-h-[98vh]"
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  aria-label="Close details modal"
                  className="fixed top-6 right-6 z-50 bg-white/90 shadow-lg backdrop-blur-md rounded-full p-3 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors w-12 h-12 flex items-center justify-center"
                >
                  <X className="h-7 w-7 text-gray-700" />
                </button>
                {/* Hero Image with Glass Overlay and Floating Info */}
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden">
                  <motion.img
                    src={pkg.places[0]?.image || pkg.thumbnail}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-4 mb-2">
                      <div className="flex items-center bg-white/30 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold text-blue-900 shadow">
                        <Calendar className="h-5 w-5 mr-2" />
                        {pkg.days}
                      </div>
                      <div className="flex items-center bg-white/30 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold text-blue-900 shadow">
                        <MapPin className="h-5 w-5 mr-2" />
                        {pkg.places.length} Destinations
                      </div>
                      <div className="flex items-center bg-white/30 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold text-blue-900 shadow">
                        <Star className="h-5 w-5 mr-2" />
                        4.8/5 Rating
                      </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">
                      {pkg.title}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed font-medium drop-shadow">
                      Experience the beauty of {pkg.title.split(',')[0]} with our exclusive package. Explore iconic landmarks, immerse in local culture, and create lasting memories.
                    </p>
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 overflow-y-auto px-0 sm:px-10 md:px-16 py-12 space-y-16 bg-gradient-to-br from-white/90 to-blue-50/60">
                  {/* Itinerary Timeline */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 flex items-center gap-3 mb-8">
                      <Calendar className="h-8 w-8 text-blue-600" />
                      Daily Itinerary
                    </h2>
                    <div className="space-y-8">
                      {pkg.itinerary.map((day, index) => (
                        <div key={index} className="flex gap-7 items-start">
                          <div className="flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-200 to-blue-500 flex items-center justify-center text-white font-bold text-2xl border-4 border-white shadow-lg">
                              {index + 1}
                            </div>
                            {index !== pkg.itinerary.length - 1 && (
                              <div className="w-1 h-12 bg-gradient-to-b from-blue-200 to-blue-400" />
                            )}
                          </div>
                          <div className="flex-1 bg-white/90 p-8 rounded-3xl border border-blue-100 shadow-md">
                            <h4 className="font-semibold text-blue-800 mb-2 text-xl">Day {index + 1}</h4>
                            <p className="text-gray-700 leading-relaxed text-lg">{day}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  {/* Pricing Cards */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 flex items-center gap-3 mb-8">
                      <Wallet className="h-8 w-8 text-blue-600" />
                      Pricing Plans
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      {Object.entries(pkg.prices).map(([key, price], index) => (
                        <div
                          key={key}
                          className={`relative bg-white/95 rounded-3xl p-8 shadow-2xl border-2 ${index === 0 ? 'border-yellow-400' : 'border-blue-100'}`}
                        >
                          {index === 0 && (
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse border-2 border-white">
                              Most Popular
                            </div>
                          )}
                          <div className="flex items-center gap-4 mb-3">
                            <Users className="h-6 w-6 text-blue-700" />
                            <span className="font-semibold text-blue-900 text-lg">{price.people}</span>
                          </div>
                          <div className="mb-3">
                            <p className="text-4xl font-extrabold text-blue-700">
                              ₹{Number(price.price.replace(/,/g, "")).toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">Per package</p>
                          </div>
                          <a
                            href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                            className="block w-full text-center py-4 rounded-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 text-white hover:from-blue-800 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors text-lg mt-2 shadow-lg"
                            aria-label="Book this package by phone"
                          >
                            <Phone className="h-6 w-6 inline mr-2" />Book Now
                          </a>
                        </div>
                      ))}
                    </div>
                  </section>
                  {/* Inclusions & Exclusions */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 flex items-center gap-3 mb-8">
                      <Info className="h-8 w-8 text-blue-600" />
                      Package Details
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="bg-white/95 rounded-3xl p-8 shadow-xl border border-blue-100">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                          <Check className="h-6 w-6 text-green-500" /> Inclusions
                        </h3>
                        <ul className="space-y-3 text-gray-700 text-lg">
                          <li>Pick-up & Drop: From Vizag Railway Station/Bus Stand.</li>
                          <li>Private Transportation: Tempo Traveler/SUV/Sedan for the entire trip.</li>
                          <li>Accommodation: Quad Occupancy at Family Homestays or Tents.</li>
                          <li>All Taxes & Expenditures included.</li>
                        </ul>
                      </div>
                      <div className="bg-white/95 rounded-3xl p-8 shadow-xl border border-blue-100">
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-4 flex items-center gap-2">
                          <AlertCircle className="h-6 w-6 text-yellow-500" /> Exclusions
                        </h3>
                        <ul className="space-y-3 text-gray-700 text-lg">
                          <li>Airfare/Train Fare</li>
                          <li>Campfire and Auto/Jeep to vanajnagi and lambasingi are paid by customer</li>
                          <li>Food to the Driver</li>
                          <li>Monument Entrance Fee/Camera Fee</li>
                          <li>Meals (Stops at restaurants will be provided during sightseeing)</li>
                          <li>Adventure activities, Jeep rides, watersports</li>
                          <li>Personal expenses and shopping</li>
                          <li>Additional charges during festive seasons ( 1000rs - 3000rs based on package</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  {/* Destinations Gallery */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 flex items-center gap-3 mb-8">
                      <Navigation className="h-8 w-8 text-blue-600" />
                      Featured Destinations
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      {pkg.places.map((place, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-3xl shadow-2xl border border-blue-100 bg-white/95"
                        >
                          <div className="aspect-[4/3] overflow-hidden rounded-t-3xl">
                            <img
                              src={place.image}
                              alt={place.name}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 flex flex-col gap-2">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                {getPlaceIcon(place.name)}
                              </span>
                              <span className="text-base text-gray-500">{place.description}</span>
                            </div>
                            <h3 className="text-xl font-bold text-blue-900">{place.name}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  {/* CTA at the end */}
                  <section className="flex justify-center mt-12">
                    <a
                      href={`tel:${pkg.contactNumber || '+91 8885525886'}`}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-10 py-5 rounded-2xl font-extrabold text-2xl shadow-2xl hover:from-yellow-500 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all border-4 border-white"
                      aria-label="Book this package by phone"
                    >
                      <Phone className="h-8 w-8" />
                      Book Your Adventure Now
                    </a>
                  </section>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 