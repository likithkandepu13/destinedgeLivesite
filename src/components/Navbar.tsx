import { useState, useEffect } from 'react';
import logo2 from './logo2.png';
import { Phone, Compass, Home, Bike, Info, Camera, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <img
                src={logo2}
                alt="DestinEdge Tours"
                className="h-12 w-auto"
              />
              <span
                className={`text-xl font-bold ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } transition-colors duration-300`}
              >
                DestinEdge Tours
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#packages" isScrolled={isScrolled}>
                <Compass className="h-4 w-4 mr-2" />
                Packages
              </NavLink>
              <NavLink href="#homestays" isScrolled={isScrolled}>
                <Home className="h-4 w-4 mr-2" />
                HomeStay
              </NavLink>
              <NavLink href="#bikerentals" isScrolled={isScrolled}>
                <Bike className="h-4 w-4 mr-2" />
                Bike Rentals
              </NavLink>
              <NavLink href="#about" isScrolled={isScrolled}>
                <Info className="h-4 w-4 mr-2" />
                About
              </NavLink>
              <NavLink href="#gallery" isScrolled={isScrolled}>
                <Camera className="h-4 w-4 mr-2" />
                Gallery
              </NavLink>
              <NavLink href="#contact" isScrolled={isScrolled}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact
              </NavLink>
              <a
                href="tel:+918885525886"
                className="flex items-center bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
        <div className="grid grid-cols-6 gap-1 px-2 py-3">
          <MobileNavLink href="#packages" icon={<Compass />} label="Packages" />
          <MobileNavLink href="#homestays" icon={<Home />} label="HomeStay" />
          <MobileNavLink href="#bikerentals" icon={<Bike />} label="Rentals" />
          <MobileNavLink href="#about" icon={<Info />} label="About" />
          <MobileNavLink href="#gallery" icon={<Camera />} label="Gallery" />
          <MobileNavLink href="#contact" icon={<MessageSquare />} label="Contact" />
        </div>
        {/* Floating Book Now Button */}
        <a
          href="tel:+918885525886"
          className="fixed bottom-20 right-4 flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          <Phone className="h-4 w-4 mr-2" />
          <span className="font-medium">Book Now</span>
        </a>
      </nav>
    </>
  );
}

function NavLink({ href, children, isScrolled }) {
  return (
    <a
      href={href}
      className={`flex items-center font-medium transition-colors duration-300 hover:text-blue-600 ${
        isScrolled ? 'text-gray-700' : 'text-white'
      } relative group`}
    >
      {children}
      <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MobileNavLink({ href, icon, label }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
    >
      <div className="h-6 w-6">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </a>
  );
}