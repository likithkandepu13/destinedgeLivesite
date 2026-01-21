import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import aa from './happycust/aa.jpeg';
import af from './happycust/af.jpeg';
import er from './happycust/er.jpeg';
import ff from './happycust/ff.jpeg';
import gc from './happycust/gc.jpeg';
import jb from './happycust/jb.jpeg';
import qw from './happycust/qw.jpeg';
import vc from './happycust/vc.jpeg';

const galleryImages = [
  { id: 1, url: aa },
  { id: 2, url: af },
  { id: 3, url: er },
  { id: 4, url: ff },
  { id: 5, url: gc },
  { id: 6, url: jb },
  { id: 7, url: qw },
  { id: 8, url: vc },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Happy Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the smiling faces of travelers who've experienced unforgettable adventures with us. Your next adventure awaits!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64"
            >
              <img
                src={image.url}
                alt="Happy customer"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedImage(image.id)}
                  className="p-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg hover:bg-gray-100"
                >
                  <Maximize2 className="h-6 w-6 text-gray-900" />
                </button>
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
  );
}