import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCard from './components/PackageCard';
import PackageDetails from './components/PackageDetails';
import PackageFilters from './components/PackageFilters';
import { packages } from './data/packages';
import type { Package } from './types/package';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Maximize2, X } from 'lucide-react';
import araku from './data/araku dnadia1.jpg';
import kailasagiri from './data/kailasagiri.jpg';
import sai from './data/millennial-group-young-businesspeople.jpg';
import temples from './data/temples.jpg';
import Homestays from './components/Homestays';
import BikeRentals from './components/BikeRentals';


function App() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(packages);
  const [filters, setFilters] = useState({ destination: '', duration: '' });

  const handleFilterChange = (destination: string, duration: string) => {
    const newFilters = {
      destination: destination || filters.destination,
      duration: duration || filters.duration
    };
    setFilters(newFilters);

    let filtered = packages;

    if (newFilters.destination) {
      filtered = filtered.filter(pkg => 
        pkg.title.toLowerCase().includes(newFilters.destination.toLowerCase())
      );
    }

    if (newFilters.duration) {
      filtered = filtered.filter(pkg => pkg.days === newFilters.duration);
    }

    setFilteredPackages(filtered);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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
      title: "KailasaGiri Hill ",
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
      url: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80",
      title: "Vizag Beach Road",
    },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 py-12 mt-16">
        <section id="packages" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Tour Packages
          </h2>
          
          <PackageFilters 
            packages={packages}
            onFilterChange={handleFilterChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onClick={setSelectedPackage}
              />
            ))}
          </div>
        </section>
        
        <Homestays/>
        <BikeRentals/>
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
      Whether it’s the golden sands of Vizag's serene beaches, the lush green valleys of Araku, or the hidden treasures of Madagada's scenic viewpoints and Vanajangi's coffee plantations, we offer tour packages tailored to adventurers, families, and wanderers alike. Let us guide you to the most picturesque destinations and create memories that last a lifetime.
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
  {/* <h3 className="text-3xl font-bold mb-6 text-center">Founder and Co-Founder Details</h3> */}
  <p className="text-lg mb-6 text-center">
    DestinEdge is a passionate startup founded by Likith Kandepu , driven by the vision to provide personalized travel experiences that make every journey unforgettable.
  </p>
  <div className="space-y-8">
    <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-2xl font-semibold text-blue-600">👤 Co-Founder: Likith Kandepu</h4>
      <p className="text-lg text-gray-700 mt-4">
        As the founder of DestinEdge, Likith has dedicated himself to building a brand that stands for customer-centric travel experiences. With a keen eye for hospitality and a passion for creating memorable moments, he oversees the overall direction and growth of the startup, aiming to redefine travel for each and every guest.
      </p>
      <ul className="text-lg text-gray-700 mt-4 space-y-2">
        <li>
          📧 Email: <a href="mailto:likithkandepu@destinedge.com" className="underline hover:text-blue-400">likithkandepu@destinedge.com</a>
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
          📞 Phone: <a href="tel:+91 8885525886" className="underline hover:text-blue-400">+91 </a>
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
                    <p className="text-gray-600"></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">likithkandepu@destinedge.com</p>
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