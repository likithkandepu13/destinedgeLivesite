import { useState, useEffect } from 'react';
import { Star, X, Users, Bed, Bath, ChevronLeft, ChevronRight, Share2, Copy, Check as CheckIcon } from 'lucide-react';
import bed from '../data/hl/bed.jpg';
import bedroom from '../data/hl/bedroom2.jpg';
import ter from '../data/hl/terrace.jpg';
import pic4 from '../data/hl/IMG-20241210-WA0010.jpg';
import pic2 from '../data/hl/IMG-20241210-WA0009.jpg';
import pic3 from '../data/hl/IMG-20241210-WA0013.jpg';


interface Amenity {
  icon: string;
  name: string;
}

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

interface HomestayImage {
  url: string;
  alt: string;
}

interface Homestay {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: HomestayImage[];
  amenities: Amenity[];
  reviews: Review[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  link: string;
}

const homestays: Homestay[] = [
  {
    id: '1',
    name: 'Padmavathi Guest House- DestinEdge',
    location: 'BS Layout, Seethammadara, Visakhapatnam',
    description: 'Experience comfort and convenience in the heart of Vizag. Our guest house offers modern amenities with traditional hospitality, perfect for both business and leisure travelers.',
    price: 1500,
    rating: 4.8,
    reviewCount: 124,
    images: [
      { url: pic4, alt: 'Guest House Exterior' },
      { url: pic2, alt: 'Bedroom' },
      { url: pic3, alt: 'Bathroom' }
    ],
    amenities: [
      { icon: 'wifi', name: 'Free WiFi' },
      { icon: 'parking', name: 'Free Parking' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'tv', name: 'Smart TV' },
      { icon: 'food', name: 'Room Service' }
    ],
    link: "https://www.booking.com/hotel/in/destinedge-homestay.en-gb.html?aid=2276381&label=msn-abFjVSjo8SxdEDCmbCzKlg-80058379202040%3Atikwd-80058571336270%3Aloc-90%3Aneo%3Amtb%3Alp155275%3Adec%3Aqspadmavathi%20guest%20house%20booking.com&sid=771d92b34dbea694c24d4eae78c6fd31&dest_id=-2114520&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&hpos=3&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1733465110&srpvid=e86a2ac714350128&type=total&ucfs=1&",
    reviews: [
      {
        id: 'r1',
        author: 'Rahul Sharma',
        rating: 5,
        comment: 'Excellent location and very clean rooms. The staff was very helpful and courteous.',
        date: '2024-02-15',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36'
      }
    ],
    maxGuests: 4,
    bedrooms: 9,
    bathrooms: 9
  },
  {
    id: '2',
    name: 'Harbour Lights Sea-View Homestay',
    location: 'Beach Road, Visakhapatnam',
    description: 'Wake up to stunning ocean views in this beachfront property. Modern amenities meet coastal charm in this perfect vacation rental.',
    price: 2500,
    rating: 4.9,
    reviewCount: 89,
    images: [
      { url: bed, alt: 'Ocean View Room' },
      { url: ter, alt: 'Living Area' },
      { url: bedroom, alt: 'Balcony View' }
    ],
    link: "https://www.booking.com/hotel/in/edge-homestay.en-gb.html?label=gen173nr-1BCAsobEINZWRnZS1ob21lc3RheUgzWARobIgBAZgBCbgBGMgBDNgBAegBAYgCAagCBLgCkuyzwAbAAgHSAiQ1MzNmMmFmZi00ZjcyLTRmMzctODU5ZC0wN2Y5OGUzYTA4MzjYAgXgAgE&sid=41eb84cb5d438d414d966ebf18c49fe1&dist=0&keep_landing=1&sb_price_type=total&type=total&",
    amenities: [
      { icon: 'wifi', name: 'Free WiFi' },
      { icon: 'beach', name: 'Beach Access' },
      { icon: 'ac', name: 'Air Conditioning' },
      { icon: 'kitchen', name: 'Kitchen' },
      { icon: 'parking', name: 'Parking' }
    ],
    reviews: [
      {
        id: 'r2',
        author: 'Priya Patel',
        rating: 5,
        comment: 'Amazing sea view and perfect location. The homestay was clean and well-maintained.',
        date: '2024-02-20',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      }
    ],
    maxGuests: 4,
    bedrooms: 5,
    bathrooms: 5
  }
];

export default function Homestays() {
  const [selectedHomestay, setSelectedHomestay] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const selectedHomestayData = homestays.find(h => h.id === selectedHomestay);

  // Load homestay from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const homestayId = params.get('homestay');
    
    if (homestayId) {
      const homestay = homestays.find(h => h.id === homestayId);
      if (homestay) {
        setSelectedHomestay(homestayId);
      }
    }
  }, []);

  // Update URL when homestay is selected
  const handleHomestaySelect = (id: string) => {
    setSelectedHomestay(id);
    const params = new URLSearchParams(window.location.search);
    params.set('homestay', id);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  // Clear homestay from URL when closed
  const handleHomestayClose = () => {
    setSelectedHomestay(null);
    setActiveImage(0);
    setShowShareMenu(false);
    const params = new URLSearchParams(window.location.search);
    params.delete('homestay');
    const newUrl = params.toString() 
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  };

  const shareUrl = selectedHomestayData ? `${window.location.origin}${window.location.pathname}?homestay=${selectedHomestayData.id}` : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareClick = async () => {
    if (navigator.share && selectedHomestayData) {
      try {
        await navigator.share({
          title: selectedHomestayData.name,
          text: `Check out this amazing homestay: ${selectedHomestayData.name}`,
          url: shareUrl
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  // Auto-advance images
  useEffect(() => {
    if (selectedHomestayData) {
      const timer = setInterval(() => {
        setActiveImage((current) => 
          current === selectedHomestayData.images.length - 1 ? 0 : current + 1
        );
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(timer);
    }
  }, [selectedHomestayData]);

  const nextImage = () => {
    if (selectedHomestayData) {
      setActiveImage((current) =>
        current === selectedHomestayData.images.length - 1 ? 0 : current + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedHomestayData) {
      setActiveImage((current) =>
        current === 0 ? selectedHomestayData.images.length - 1 : current - 1
      );
    }
  };

  return (
    <section id="homestays" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Featured Homestays
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience authentic Vizag hospitality in our carefully selected homestays. Comfort meets convenience in every location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homestays.map((homestay) => (
            <div 
              key={homestay.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleHomestaySelect(homestay.id)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${homestay.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleHomestaySelect(homestay.id);
                }
              }}
            >
              <div className="relative h-64">
                <img
                  src={homestay.images[0].url}
                  alt={homestay.images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow">
                  <span className="flex items-center text-sm font-semibold">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {homestay.rating}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{homestay.name}</h3>
                <p className="text-gray-600 mb-4">{homestay.location}</p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm">{homestay.maxGuests} guests</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Bed className="h-4 w-4 mr-1" />
                    <span className="text-sm">{homestay.bedrooms} Rooms</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="text-sm">{homestay.bathrooms} baths</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹{homestay.price}</span>
                    <span className="text-gray-600">/night</span>
                  </div>
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="View details"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View Modal */}
        {selectedHomestayData && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <button
                    onClick={handleShareClick}
                    aria-label="Share homestay"
                    title="Share"
                    className="bg-white/90 shadow-md rounded-full p-2.5 hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    <Share2 className="h-5 w-5 text-gray-700" />
                  </button>

                  {/* Share Menu */}
                  {showShareMenu && (
                    <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-2 min-w-max border border-gray-200">
                      <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700 transition-colors text-sm"
                      >
                        {copied ? (
                          <>
                            <CheckIcon className="h-4 w-4 text-green-600" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy Link
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  <button
                    onClick={handleHomestayClose}
                    className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="relative h-96">
                  {selectedHomestayData.images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === activeImage ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden={index !== activeImage}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      previousImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedHomestayData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImage(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeImage === index ? 'bg-white w-4' : 'bg-white/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                        aria-current={activeImage === index}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedHomestayData.name}
                      </h2>
                      <p className="text-gray-600">{selectedHomestayData.location}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="font-semibold">{selectedHomestayData.rating}</span>
                      <span className="text-gray-600 ml-1">({selectedHomestayData.reviewCount} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{selectedHomestayData.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{selectedHomestayData.bedrooms} bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{selectedHomestayData.bathrooms} bathrooms</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Description</h3>
                    <p className="text-gray-600">{selectedHomestayData.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedHomestayData.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-gray-600">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Reviews</h3>
                    <div className="space-y-4">
                      {selectedHomestayData.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4">
                          <div className="flex items-center mb-2">
                            <img
                              src={review.avatar}
                              alt={review.author}
                              className="w-10 h-10 rounded-full mr-3"
                            />
                            <div>
                              <p className="font-semibold">{review.author}</p>
                              <p className="text-sm text-gray-600">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold">₹{selectedHomestayData.price}</span>
                      <span className="text-gray-600">/night</span>
                    </div>
                    <button
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => window.location.href = selectedHomestayData.link}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}