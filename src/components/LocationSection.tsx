import React from 'react';
import { FARM_CONTACT } from '../data/farmData';
import { MapPin, Navigation, Bus, Car, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=-35.053581,-57.639012`;
  const wazeUrl = `https://waze.com/ul?ll=-35.053581,-57.639012&navigate=yes`;

  return (
    <section id="ubicacion" className="py-20 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-accent-green/10 text-brand-accent-green text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>¿Dónde estamos?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary tracking-tight">
            Ruta 11 Km 22, Magdalena
          </h2>

          <p className="text-base sm:text-lg text-brand-neutral-gray">
            A solo <strong className="font-semibold text-brand-primary">20 minutos de La Plata</strong>, en un entorno de paz absoluta con <strong className="font-semibold text-brand-primary">acceso 100% asfaltado</strong> para cualquier transporte.
          </p>
        </div>

        {/* Two Columns: Travel Times & Details + Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between text-left">
            
            {/* Asphalt Access Notice (Highlighted requirement from user) */}
            <div className="bg-white p-5 rounded-2xl border-2 border-brand-accent-green/40 shadow-sm space-y-2">
              <div className="flex items-center gap-2.5 text-brand-primary font-bold text-sm sm:text-base">
                <div className="w-9 h-9 rounded-xl bg-brand-accent-green/20 flex items-center justify-center">
                  <Bus className="w-5 h-5 text-brand-accent-green" />
                </div>
                <span>Acceso simple y directo por asfalto</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-neutral-gray leading-relaxed">
                El predio cuenta con entrada directa sobre asfalto sin caminos de tierra ni barro. Apto para el ingreso seguro de <strong className="text-brand-primary">micros de larga distancia, charters escolares, combis y autos particulares</strong>.
              </p>
            </div>

            {/* Travel Times Breakdown */}
            <div className="bg-white p-5 rounded-2xl border border-brand-primary/10 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-neutral-gray">
                <Clock className="w-4 h-4 text-brand-accent-green" />
                <span>Tiempos de viaje estimados</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5]">
                  <span className="font-semibold text-brand-primary">Desde La Plata (Centro):</span>
                  <span className="font-extrabold text-brand-accent-green">~20 minutos</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5]">
                  <span className="font-semibold text-brand-primary">Desde Berisso / Ensenada:</span>
                  <span className="font-extrabold text-brand-accent-green">~25 - 30 min</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5]">
                  <span className="font-semibold text-brand-primary">Desde Berazategui / Quilmes:</span>
                  <span className="font-extrabold text-brand-accent-green">~50 minutos</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5]">
                  <span className="font-semibold text-brand-primary">Desde CABA (Capital Federal):</span>
                  <span className="font-extrabold text-brand-accent-green">~1h 15 min</span>
                </div>
              </div>
            </div>

            {/* Map Open Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white hover:bg-[#FAF8F5] border border-brand-primary/20 text-brand-primary font-bold text-xs shadow-sm hover:shadow transition-all"
              >
                <Navigation className="w-4 h-4 text-brand-accent-green" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-brand-neutral-gray" />
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white hover:bg-[#FAF8F5] border border-brand-primary/20 text-brand-primary font-bold text-xs shadow-sm hover:shadow transition-all"
              >
                <Car className="w-4 h-4 text-brand-accent-green" />
                <span>Abrir en Waze</span>
                <ExternalLink className="w-3 h-3 text-brand-neutral-gray" />
              </a>
            </div>

          </div>

          {/* Right Map Canvas / Visual Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-primary/10 flex flex-col">
            <div className="p-4 bg-brand-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                <MapPin className="w-4 h-4 text-brand-accent-green" />
                <span>Ubicación Estratégica: Ruta 11 Km 22, Magdalena</span>
              </div>
              <span className="text-[11px] bg-brand-accent-green/25 text-brand-accent-green px-2.5 py-0.5 rounded-full font-semibold">
                Acceso Asfalto
              </span>
            </div>

            {/* Map Embed or Route Visualizer */}
            <div className="flex-1 min-h-[350px] relative bg-[#EAE4D7]">
              <iframe
                title="Mapa de Aula Verde Granja Educativa en Magdalena"
                src="https://maps.google.com/maps?q=-35.053581,-57.639012&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-[#FAF8F5] border-t border-[#F0EBE1] flex flex-col sm:flex-row items-center justify-between text-xs text-brand-neutral-gray gap-2">
              <span>📍 Coordenadas: -35.053581, -57.639012 (Ruta 11 Km 22, Magdalena)</span>
              <span className="font-semibold text-brand-primary">Dársena de maniobra para micros incluida</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
