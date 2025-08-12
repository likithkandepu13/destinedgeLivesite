import hero from '../data/hero.jpg';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-3000"
        style={{
          backgroundImage: `url(${hero})`, // Use the imported hero image
        }}
      >
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative text-center text-white z-10 px-6 md:px-8 max-w-4xl mx-auto animate-fadeIn">
        {/* Decorative Elements */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-slideUp">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Discover Paradise
          </span>
          <span className="block mt-2 text-white text-3xl md:text-5xl">
            With DESTINEDGE
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 md:mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slideUp delay-200">
        "Affordable Journeys, Priceless Memories – Travel Smart with DestinEdge Tours!"
        </p>
        <p className="text-lg md:text-xl mb-8 md:mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slideUp delay-200">
          Vizag | Araku | Vanajangi | Lammasingi | Yarada | Madagada
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp delay-300">
          <a 
            href="#packages"
            className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-base md:text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            <span className="relative z-10">View Packages</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          
          <a 
            href="#contact"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-white rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
