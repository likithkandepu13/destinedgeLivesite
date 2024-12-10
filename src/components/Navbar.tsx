import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img 
              src="/src/components/logo.png" 
              alt="DestinEdge Tours" 
              className="h-12 w-auto"
            />
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            } hidden sm:block transition-colors duration-300`}>
              DestinEdge Tours
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#packages" isScrolled={isScrolled}>Packages</NavLink>
            <NavLink href="#homestays" isScrolled={isScrolled}>HomeStay</NavLink>
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#gallery" isScrolled={isScrolled}>Gallery</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
            <a 
              href="tel:+918885525886" 
              className="flex items-center bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 visible mt-4' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-white rounded-lg shadow-xl p-4 space-y-4">
            <MobileNavLink href="#packages" onClick={() => setIsMobileMenuOpen(false)}>
              Packages
            </MobileNavLink>
            <MobileNavLink href="#homestays" onClick={() => setIsMobileMenuOpen(false)}>
              HomeStay
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <a 
              href="tel:+918885525886"
              className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <div className="flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Book Now</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, isScrolled }: { 
  href: string; 
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  return (
    <a 
      href={href}
      className={`relative font-medium transition-colors duration-300 hover:text-blue-600 ${
        isScrolled ? 'text-gray-700' : 'text-white'
      } after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-300"
    >
      {children}
    </a>
  );
}