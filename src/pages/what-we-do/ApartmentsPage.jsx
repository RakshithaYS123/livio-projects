import React from 'react';

const ApartmentsImageGallery = () => {
  // Replace these with your actual image paths
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200',
      title: 'Modern Architecture',
      description: 'Structural Excellence'
    },
    {
      url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800',
      title: 'Quality Construction',
      description: 'Premium Materials'
    },
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      title: 'Urban Living',
      description: 'Smart Design'
    },
    {
      url: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800',
      title: 'Luxury Spaces',
      description: 'Elegant Interiors'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="w-20 h-1 mx-auto mb-4" style={{backgroundColor: '#B84A2B'}} />
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Apartment Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of exceptional residential developments
            </p>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Large Featured Image - Left */}
          <div className="lg:row-span-2 relative rounded-3xl overflow-hidden group shadow-2xl">
            <div className="relative h-full min-h-[600px]">
              <img
                src={images[0].url}
                alt={images[0].title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20" style={{backgroundColor: '#B84A2B', clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}} />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                <div className="w-16 h-1 mb-4 transition-all duration-500 group-hover:w-24" style={{backgroundColor: '#B84A2B'}} />
                <h3 className="text-3xl font-bold text-white mb-2">
                  {images[0].title}
                </h3>
                <p className="text-gray-200 text-lg mb-4">
                  {images[0].description}
                </p>
                <button 
                  className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{backgroundColor: '#B84A2B'}}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Top Right Image */}
          <div className="relative rounded-3xl overflow-hidden group shadow-xl">
            <div className="relative h-64 lg:h-full">
              <img
                src={images[1].url}
                alt={images[1].title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-95">
                <div className="w-12 h-1 mb-3" style={{backgroundColor: '#B84A2B'}} />
                <h4 className="text-2xl font-bold mb-2">{images[1].title}</h4>
                <p className="text-gray-200">{images[1].description}</p>
              </div>

              {/* Bottom Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h4 className="text-xl font-bold text-white">{images[1].title}</h4>
              </div>
            </div>
          </div>

          {/* Bottom Right - Two Images Side by Side */}
          <div className="grid grid-cols-2 gap-8">
            {images.slice(2).map((img, idx) => (
              <div key={idx} className="relative rounded-3xl overflow-hidden group shadow-xl">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col items-center justify-center text-white"
                    style={{backgroundColor: '#B84A2B'}}
                  >
                    <div className="text-center px-4">
                      <div className="w-8 h-0.5 bg-white mx-auto mb-3" />
                      <h4 className="text-lg font-bold mb-1">{img.title}</h4>
                      <p className="text-sm text-white/90">{img.description}</p>
                      <div className="mt-4 w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                        <span className="text-xl">+</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-0 rotate-180" style={{backgroundColor: '#B84A2B'}}>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t-2 border-gray-200">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{color: '#B84A2B'}}>50+</div>
            <div className="text-gray-600 font-medium">Completed Projects</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{color: '#B84A2B'}}>15+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{color: '#B84A2B'}}>100%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentsImageGallery;