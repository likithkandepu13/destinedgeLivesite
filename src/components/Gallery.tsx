import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import cut1 from  './cust11.JPG'

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80",
    title: "Araku Valley",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80",
    title: "Lambasingi Sunrise",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80",
    title: "Yarada Beach",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80",
    title: "Vanajangi Viewpoint",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80",
    title: "Madagada Sunset",
  },
  {
    id: 6,
    url: `${cut1}`,
    title: "Happy Customers",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
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
  );
}