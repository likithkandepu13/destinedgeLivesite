import { useState } from 'react';
import { Bike, Calendar, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import type { Bike as BikeType } from '../types/bike';

const bikes: BikeType[] = [
  {
    id: '1',
    model: 'Royal Enfield Classic 350',
    image: 'https://img.indianautosblog.com/2020/05/16/bs6-royal-enfield-classic-350-gunmetal-grey-9f0e.png',
    pricePerDay: 1800,
    maxKmPerDay: 150,
    features: [
      'Fuel Efficient',
      'Perfect for Long Rides',
      'Comfortable Seating',
      'Helmet Included'
    ],
    availability: true,
    engineCC: 350,
    mileage: '35-40 kmpl'
  },
  {
    id: '2',
    model: 'Honda Aviator 6G',
    image: 'https://www.surfindia.com/automobile/images/automobile/haviator.jpg',
    pricePerDay: 500,
    maxKmPerDay: 120,
    features: [
      'Best for City Rides',
      'Storage Space',
      'Fuel Efficient',
      'Easy to Handle'
    ],
    availability: true,
    engineCC: 110,
    mileage: '48-55 kmpl'
  },
  {
    id: '3',
    model: 'Ather 450x (electric)',
    image: 'https://cdn.motor1.com/images/mgl/1xoVw/s1/ather-450x-india-s-premium-electric-scooter.jpg',
    pricePerDay: 650,
    maxKmPerDay: 100,
    features: [
      'Sporty Design',
      'Powerful Performance',
      'ABS Equipped',
      'Electric '
    ],
    availability: true,
    engineCC: 450,
    mileage: '85Km per charge'
  }
];

export default function BikeRentals() {
  const [selectedBike, setSelectedBike] = useState<BikeType | null>(null);

  return (
    <section id="bikerentals" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Bike Rentals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore Vizag on two wheels with our reliable and well-maintained rental bikes. Perfect for both city commutes and long rides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={bike.image}
                  alt={bike.model}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {bike.availability ? (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Booked
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{bike.model}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Bike className="h-5 w-5 mr-2" />
                    <span>{bike.engineCC} CC</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Max {bike.maxKmPerDay} km/day</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{bike.mileage} Mileage</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">₹{bike.pricePerDay}</span>
                      <span className="text-gray-600">/day</span>
                    </div>
                    <button
  onClick={() => (window.location.href = "tel:+919246625886")}
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
>
  Book Now
  <ArrowRight className="h-4 w-4" />
</button>

                  </div>

                  <div className="text-sm text-gray-500">
                    * Security deposit and valid ID required
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rental Terms */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Rental Terms & Conditions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900">Requirements</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Valid Driver's License</li>
                <li>Age 18 years or above</li>
                <li>Security deposit (refundable)</li>
                <li>Valid ID proof</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900">Additional Information</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fuel charges extra</li>
                <li>Extra km charges applicable</li>
                <li>Helmets provided</li>
                <li>24/7 roadside assistance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-center">
  <p className="text-gray-600 mb-4">For bookings and inquiries:</p>
  <a
    href="tel:+919246625886"
    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
  >
    <Phone className="h-5 w-5" />
    <span>Call Us Now</span>
  </a>
</div>

      </div>

      {/* Booking Modal */}
      {selectedBike && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Book {selectedBike.model}</h3>
              <button
                onClick={() => setSelectedBike(null)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-gray-600">
                <span>Rate per day:</span>
                <span className="font-semibold">₹{selectedBike.pricePerDay}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span>Max distance/day:</span>
                <span className="font-semibold">{selectedBike.maxKmPerDay} km</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span>Security deposit:</span>
                <span className="font-semibold">₹2000</span>
              </div>

              <div className="pt-4">
                <a
                  href="tel:+918885525886"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call to Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}