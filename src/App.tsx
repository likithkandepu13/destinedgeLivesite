import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCard from './components/PackageCard';
import PackageDetails from './components/PackageDetails';
import PackageFilters from './components/PackageFilters';
import { packages } from './data/packages';
import type { Package } from './types/package';
import { Mail, Phone, MapPin, Clock, Send, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Maximize2, X, Linkedin, Instagram, Facebook, ExternalLink, Heart } from 'lucide-react';
import araku from './data/araku dnadia1.jpg';
import kailasagiri from './data/kailasagiri.jpg';
import sai from './data/millennial-group-young-businesspeople.jpg';
import temples from './data/temples.jpg';
import Homestays from './components/Homestays';
import BikeRentals from './components/BikeRentals';
import blur from './data/Blue Spain Tour And Travel Agent Instagram Post.jpg';
import white from './data/White Blue Travel And Tour A4.jpg';
import val from './data/val.png';
import adv from './data/advertisement.png';
import PopupAd from './components/PopupAd';

const sliderImages = [
  {
    url: blur,
    title: "Special Summer Package",
    description: "Explore the beauty of Araku Valley with 20% off!"
  },
  {
    url: white,
    title: "Weekend Getaways",
    description: "Perfect short trips for busy professionals"
  },
  {
    url: val,
    title: "Family Adventures",
    description: "Create memories that last a lifetime"
  },
  {
    url: adv,
    title: "Luxury Experience",
    description: "Premium tours with exclusive amenities"
  }
];

function App() {
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(packages);
  const [filters, setFilters] = useState<{ destinations: string[]; durations: string[] }>({ destinations: [], durations: [] });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // Helper to extract canonical destinations from a package title
  const getPackageDestinations = (title: string) => {
    const lower = title.toLowerCase();
    const tags: string[] = [];
    if (lower.includes('vizag')) tags.push('Vizag');
    if (lower.includes('araku')) tags.push('Araku');
    if (lower.includes('yarada')) tags.push('Yarada');
    if (lower.includes('madagada')) tags.push('Madagada');
    if (lower.includes('lambasingi')) tags.push('Lambasingi');
    if (lower.includes('vanajangi')) tags.push('Vanajangi');
    return tags;
  };

  const handleFilterChange = (destinations: string[], durations: string[]) => {
    setFilters({ destinations, durations });
    let filtered = packages;
    // Filter by destinations
    if (destinations.length > 0) {
      filtered = filtered.filter(pkg => {
        const tags = getPackageDestinations(pkg.title);
        return destinations.some(dest => tags.includes(dest));
      });
    }
    // Filter by durations
    if (durations.length > 0) {
      filtered = filtered.filter(pkg => durations.includes(pkg.days));
    }
    // Ensure uniqueness by package id
    const uniqueMap = new Map();
    filtered.forEach(pkg => uniqueMap.set(pkg.id, pkg));
    setFilteredPackages(Array.from(uniqueMap.values()));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80",
      title: "Temples near Vizag",
    },
    {
      id: 2,
      url: `${araku}`,
      title: "Tribal Dance in Araku Valley",
    },
    {
      id: 3,
      url: `${kailasagiri}`,
      title: "KailasaGiri Hill",
    },
    {
      id: 4,
      url: `${sai}`,
      title: "Vanajangi Viewpoint",
    },
    {
      id: 5,
      url: `${temples}`,
      title: "Simhachalam Temple",
    },
    {
      id: 6,
      url: "https://i.imgur.com/RlIeLSF.jpeg",
      title: "Happy Customers",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PopupAd />
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 py-12 mt-16">
        {/* Enhanced Image Slider Section */}
        <section className="mb-16 md:hidden">
          <div 
            className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative h-[600px]">
              {/* Main Slider */}
              <div 
                className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {sliderImages.map((slide, index) => (
                  <div 
                    key={index} 
                    className="relative w-full h-full flex-shrink-0 cursor-pointer"
                    onClick={() => setSelectedSlide(index)}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={slide.url}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center"
                        style={{
                          aspectRatio: '16/9',
                          objectPosition: '50% 50%'
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-12">
                        <div 
                          className={`max-w-7xl mx-auto transform transition-all duration-700 ${
                            currentSlide === index 
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-10 opacity-0'
                          }`}
                        >
                          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                            {slide.title}
                          </h2>
                          <p className="text-2xl text-white/90 drop-shadow-md max-w-2xl">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 3000);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-300 shadow-lg z-10 group transform hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8 text-gray-800 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 3000);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-300 shadow-lg z-10 group transform hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8 text-gray-800 group-hover:text-blue-600 transition-colors" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-10">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(index);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 3000);
                    }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 transform ${
                      currentSlide === index 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                <div
                  className="h-full bg-white/80 transition-all duration-300 ease-out"
                  style={{
                    width: `${(currentSlide + 1) * (100 / sliderImages.length)}%`
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Tour Packages
          </h2>
          
          <PackageFilters 
            packages={packages}
            onFilterChange={handleFilterChange as (destinations: string[], durations: string[]) => void}
          />

          <div id="packages-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onClick={setSelectedPackage}
              />
            ))}
          </div>
        </section>
        
        {/* Scroll Up to Filters Indicator */}
        <div className="flex flex-col items-center my-8">
          <button
            onClick={() => {
              const filterSection = document.querySelector('#packages');
              if (filterSection) {
                filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group flex flex-col items-center focus:outline-none"
            aria-label="Back to Filters"
          >
            <span className="animate-bounce text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </span>
            <span className="mt-2 text-blue-700 font-semibold text-sm md:text-base group-hover:underline">Back to Filters</span>
          </button>
        </div>

        <Homestays />
        <BikeRentals />

        <section id="gallery" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Capture the Moments
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our collection of breathtaking destinations and unforgettable experiences
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="relative group overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(image.id)}
                      className="p-2 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <Maximize2 className="h-6 w-6 text-gray-900" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="h-8 w-8" />
                </button>
                <img
                  src={galleryImages.find(img => img.id === selectedImage)?.url}
                  alt="Enlarged view"
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </div>
            )}
          </div>
        </section>

        <section id="about" className="mt-24 scroll-mt-20">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 text-center">About DestinEdge Tours</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to <span className="font-semibold text-blue-600">DestinEdge Tours</span>, your trusted travel partner in unveiling the wonders of Vizag and its neighboring regions. Our passion is to provide curated travel experiences that capture the beauty, culture, and soul of this stunning coastal paradise.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether it's the golden sands of Vizag's serene beaches, the lush green valleys of Araku, or the hidden treasures of Madagada's scenic viewpoints and Vanajangi's coffee plantations, we offer tour packages tailored to adventurers, families, and wanderers alike. Let us guide you to the most picturesque destinations and create memories that last a lifetime.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 shadow-inner">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Personalized tour packages for every type of traveler.</li>
                <li>Experienced local guides ensuring authentic experiences.</li>
                <li>Seamless booking and exceptional customer support.</li>
                <li>Affordable pricing without compromising on quality.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 shadow-xl max-w-4xl mx-auto mt-8">
              <p className="text-lg mb-6 text-center">
                DestinEdge is a passionate startup founded by Likith Kandepu, driven by the vision to provide personalized travel experiences that make every journey unforgettable.
              </p>
              <div className="space-y-8">
                <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl font-semibold text-blue-600">👤 Co-Founder: Likith Kandepu</h4>
                  <p className="text-lg text-gray-700 mt-4">
                    As the founder of DestinEdge, Likith has dedicated himself to building a brand that stands for customer-centric travel experiences. With a keen eye for hospitality and a passion for creating memorable moments, he oversees the overall direction and growth of the startup, aiming to redefine travel for each and every guest.
                  </p>
                  <ul className="text-lg text-gray-700 mt-4 space-y-2">
                    <li>
                      📧 Email: <a href="mailto:withlikith@gmail.com" className="underline hover:text-blue-400">withlikith@gmail.com</a>
                    </li>
                    <li>
                      📞 Phone: <a href="tel:+919014327494" className="underline hover:text-blue-400">+91 9014327494</a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl font-semibold text-blue-600">👤 Proprietor: KSR Prasad</h4>
                  <p className="text-lg text-gray-700 mt-4">
                    KSR as Proprietor of DestinEdge, who brings a wealth of expertise in the hospitality industry. With a shared vision for creating unforgettable travel experiences, they play an essential role in the day-to-day operations and long-term strategy of the startup.
                  </p>
                  <ul className="text-lg text-gray-700 mt-4 space-y-2">
                    <li>
                      📧 Email: <a href="mailto:ksr@destinedge.com" className="underline hover:text-blue-400">ksr@destinedge.com</a>
                    </li>
                    <li>
                      📞 Phone: <a href="tel:+918885525886" className="underline hover:text-blue-400">+91 8885525886</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our tours? We're here to help! Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-indigo-600 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600">+91 8885525886</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">withlikith@gmail.com</p>
                        <p className="text-gray-600">destinedgetours.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                        <p className="text-gray-600">
                          BS Layout, Seethammadara <br />
                          Visakhapatnam, AP 530017
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-indigo-600 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                        <p className="text-gray-600">Monday - Saturday: 8:00 AM - 10:00 PM [Avoid contact between 2:00 PM - 4:00 PM]</p>
                        <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-12">
              <div className="bg-white rounded-lg shadow-lg p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0426326273346!2d83.30318957436609!3d17.742630283206378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394371e12cfc03%3A0x495e78234ca03afa!2sPadmavathi%20Guest%20House%20-%20DestinEdge!5e0!3m2!1sen!2sin!4v1733461757683!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="DestinEdge Tours Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-blue-600 pb-2">DestinEdge Tours</h3>
              <p className="text-gray-300">
                Your trusted partner for unforgettable travel experiences in Vizag and beyond.
              </p>
              <div className="flex items-center space-x-3 mt-6">
                <a 
                  href="https://www.linkedin.com/company/destinedge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/destinedge.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/destinedgetours" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-blue-600 pb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#packages" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="mr-2">→</span> Our Packages
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="mr-2">→</span> Gallery
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="mr-2">→</span> About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="mr-2">→</span> Contact
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="mr-2">→</span> Careers 
                    <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-blue-600 pb-2">Contact Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-blue-300" />
                  <span>+91 8885525886<br />+91 9014327494</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-blue-300" />
                  <span>withlikith@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-300" />
                  <span>BS Layout, Seethammadara<br/>Visakhapatnam, AP 530017</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-blue-600 pb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest offers and travel tips.</p>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border border-blue-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                  type="submit" 
                  className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded-lg px-4 py-2 text-white font-medium flex items-center justify-center"
                >
                  Subscribe <Send className="h-4 w-4 ml-2" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} DestinEdge Tours. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
                <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Sitemap</a>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-6 flex items-center justify-center">
              Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> in Visakhapatnam, India
            </p>
          </div>
        </div>
      </footer>

      {selectedPackage && (
        <PackageDetails
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
}

export default App;