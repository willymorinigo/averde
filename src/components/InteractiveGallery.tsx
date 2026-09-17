import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Maximize2 } from 'lucide-react';

// Import all 8 uploaded gallery images via Vite imports
import galeria1 from '../assets/images/galeria_aula_verde1.jpg';
import galeria2 from '../assets/images/galeria_aula_verde2.jpg';
import galeria3 from '../assets/images/galeria_aula_verde3.jpg';
import galeria4 from '../assets/images/galeria_aula_verde4.jpg';
import galeria5 from '../assets/images/galeria_aula_verde5.jpg';
import galeria6 from '../assets/images/galeria_aula_verde6.jpg';
import galeria7 from '../assets/images/galeria_aula_verde7.jpg';
import galeria8 from '../assets/images/galeria_aula_verde8.jpg';

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

export const InteractiveGallery: React.FC = () => {
  const images: GalleryItem[] = [
    {
      image: galeria1,
      title: 'Aventura al Aire Libre',
      description: 'Más de 14 hectáreas pensadas para el aprendizaje y la diversión de los chicos.',
    },
    {
      image: galeria2,
      title: 'Conexión Directa con la Naturaleza',
      description: 'Un entorno ideal para que los chicos interactúen con animales de granja.',
    },
    {
      image: galeria3,
      title: 'Actividades y Talleres Didácticos',
      description: 'Amasado de pan casero, huerta orgánica y dinámicas diseñadas por educadores.',
    },
    {
      image: galeria4,
      title: 'Quincho de Campo Espacioso',
      description: 'Instalaciones cubiertas preparadas para recibir cómodamente a más de 80 alumnos.',
    },
    {
      image: galeria5,
      title: 'Animales de Granja en Libertad',
      description: 'Caballos, ciervos, cerdos y aves en un ecosistema seguro y cuidado.',
    },
    {
      image: galeria6,
      title: 'Experiencias que Dejan Huella',
      description: 'Fomentando el compañerismo, el respeto y el cuidado de nuestro medio ambiente.',
    },
    {
      image: galeria7,
      title: 'Acceso Totalmente Pavimentado',
      description: 'Ingreso directo desde la ruta asfaltada sin caminos de tierra, ideal para micros.',
    },
    {
      image: galeria8,
      title: 'Espacios Seguros de Recreación',
      description: 'Todo pensado para que docentes y alumnos disfruten de una jornada inolvidable.',
    },
  ];

  // Double the array for a seamless infinite marquee loop
  const marqueeImages = [...images, ...images];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    // Map the duplicated marquee index back to the original index (0-7)
    setLightboxIndex(index % images.length);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
    }
  };

  const prevLightboxImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
    }
  };

  return (
    <section id="galeria" className="py-20 bg-white relative overflow-hidden">
      {/* Dynamic Marquee CSS Injected Safely */}
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-accent-green/10 text-brand-accent-green text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-brand-accent-green" />
            <span>Galería de Momentos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary tracking-tight">
            Nuestra granja en fotos
          </h2>

          <p className="text-base sm:text-lg text-brand-neutral-gray">
            Pasá por encima de las fotos para pausar el recorrido. Hace clic en cualquiera de ellas para verlas en detalle y ampliarlas.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Photo Strip container */}
      <div className="relative w-full overflow-hidden py-4 bg-[#FAF8F5] border-y border-[#F0EBE1]">
        {/* Gradient overlays to fade edges on large screens */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-smooth flex gap-5 px-4">
          {marqueeImages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative w-[280px] sm:w-[360px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl border-2 border-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-brand-primary/10 shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              {/* Overlay with details on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left text-white">
                <h4 className="text-base font-bold tracking-tight">{item.title}</h4>
                <p className="text-xs text-gray-200 mt-1 line-clamp-2">{item.description}</p>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-1.5 rounded-lg border border-white/10">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white w-full max-w-7xl mx-auto pt-2">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-accent-green">
              Visualización Ampliada ({lightboxIndex + 1} / {images.length})
            </span>
            <button 
              onClick={closeLightbox}
              className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 text-white transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Active Image and Navigation Controls */}
          <div className="flex-1 flex items-center justify-center relative w-full max-w-5xl mx-auto my-4">
            
            {/* Left Control Arrow */}
            <button 
              onClick={prevLightboxImage}
              className="absolute left-2 sm:left-4 z-10 p-2.5 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all active:scale-95 cursor-pointer flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Active Image */}
            <div 
              className="relative max-h-[65vh] sm:max-h-[75vh] max-w-full aspect-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <img 
                src={images[lightboxIndex].image} 
                alt={images[lightboxIndex].title}
                className="max-h-[65vh] sm:max-h-[75vh] w-auto h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Control Arrow */}
            <button 
              onClick={nextLightboxImage}
              className="absolute right-2 sm:right-4 z-10 p-2.5 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all active:scale-95 cursor-pointer flex items-center justify-center"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

          </div>

          {/* Bottom Caption details */}
          <div 
            className="w-full max-w-3xl mx-auto text-center text-white pb-4 space-y-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
              {images[lightboxIndex].title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
              {images[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
