import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCard from './components/PackageCard';
import PackageDetails from './components/PackageDetails';
import PackageFilters from './components/PackageFilters';
import { packages } from './data/packages';
import type { Package } from './types/package';

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
    <div className="bg-blue-600 text-white rounded-lg p-6 shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
      <p className="text-lg">
        Have questions or ready to book your next adventure? We're here to help!
      </p>
      <ul className="mt-4 space-y-2 text-lg">
        <li>
          📞 Phone: <a href="tel:+918885525886" className="underline hover:text-blue-300">+91 88855 25886</a>
        </li>
        <li>
          📧 Email: <a href="mailto:info@destinedge.com" className="underline hover:text-blue-300">info@destinedge.com</a>
        </li>
        <li>
          📍 Address: Beach Road, Vizag, Andhra Pradesh, India.
        </li>
      </ul>
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