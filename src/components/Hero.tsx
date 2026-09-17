import React from 'react';
import { FARM_CONTACT } from '../data/farmData';
import { Tag, Compass, Bus, Users, ArrowRight, MessageCircle, MapPin, Sprout, Map, Home } from 'lucide-react';
import heroVideo from '../assets/videos/hero.mp4';
import heroPoster from '../assets/images/galeria_aula_verde1.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-16">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${heroPoster})` }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Soft, premium gradient overlay for maximum video visibility and perfect typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#024e21]/75 via-black/30 to-[#024e21]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        {/* Centered Cinematic Text Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/25 text-white text-xs sm:text-sm font-bold backdrop-blur-md">
            <Sprout className="w-4 h-4 text-brand-accent-green" />
            <span>Granja Educativa e Interactiva • Nuevo Espacio Rural</span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]"
            style={{ textShadow: '0 4px 24px rgba(0, 0, 0, 0.75), 0 2px 4px rgba(0, 0, 0, 0.4)' }}
          >
            Un aula <span className="text-brand-accent-green">sin paredes</span> en plena naturaleza
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#FAF8F5]/90 font-normal leading-relaxed max-w-3xl mx-auto">
            Un espacio educativo para que <strong className="font-semibold text-white">jardines, colegios y grupos escolares</strong> vivan la experiencia transformadora de conectar con el campo, los animales y la tierra.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex justify-center">
            <a
              id="hero-primary-cta"
              href="#cotizador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-accent-green hover:bg-[#1c6a23] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Organizar Visita Escolar</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Location Hint */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#FAF8F5]/85 pt-4">
            <MapPin className="w-4 h-4 text-brand-accent-green shrink-0" />
            <span>Ruta 11 Km 22, Magdalena • <strong>A solo 20 min de La Plata</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
