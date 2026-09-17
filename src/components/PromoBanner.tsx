import React from 'react';
import { FARM_CONTACT } from '../data/farmData';
import { Sprout, Coffee, Utensils, Heart, CheckCircle2, MessageCircle, GraduationCap, Phone } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  return (
    <section id="promo" className="py-12 bg-brand-primary text-[#FAF8F5] relative overflow-hidden">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-10 w-48 h-48 rounded-full border-4 border-white/20" />
        <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full border-4 border-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#035926] to-[#013c19] rounded-3xl p-6 sm:p-10 border-2 border-brand-accent-green/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Promo Banner Badge & Big Price */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-accent-red text-white font-extrabold text-xs tracking-wider uppercase shadow-md">
                <Sprout className="w-3.5 h-3.5" />
                <span>¡Nuevo Espacio Rural!</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                PROMO APERTURA <br />
                <span className="text-brand-accent-green text-2xl sm:text-3xl font-semibold">
                  Vení a disfrutar de la naturaleza
                </span>
              </h2>

              {/* Price Highlight matching flyer */}
              <div className="inline-block p-4 sm:p-5 rounded-2xl bg-[#0F2018]/60 border border-brand-accent-green/40">
                <div className="text-xs uppercase tracking-widest text-brand-accent-green font-bold">
                  Por solo
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                    $25.000
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#D8E2DC]">
                    / por alumno
                  </span>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-accent-green/20 text-brand-accent-green text-xs font-bold">
                  <Coffee className="w-4 h-4" />
                  <span>DESAYUNO COMPLETO INCLUIDO</span>
                </div>
              </div>

              {/* Included items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#E0E7E3]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Recorrido guiado de 14 hectáreas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Interacción con todos los animales</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Talleres de huerta y cocina rústica</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Juegos recreativos y quincho techado</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Docentes y acompañantes sin cargo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Estacionamiento asfaltado para micros</span>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Booking Card */}
            <div className="lg:col-span-5 bg-white text-brand-primary p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-accent-green/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-brand-accent-green" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-primary">
                  Reservá tu fecha para el colegio
                </h3>
                <p className="text-xs text-brand-neutral-gray mt-1">
                  Cupos limitados por jornada para garantizar una atención cálida y personalizada.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-brand-primary/10 text-left space-y-1.5 text-xs text-[#37493D]">
                <div className="flex justify-between">
                  <span className="font-semibold">Destinado a:</span>
                  <span>Jardines, Primaria, Secundaria</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Capacidad quincho:</span>
                  <span className="font-bold text-brand-accent-green">+80 personas</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Desayuno:</span>
                  <span>Infusiones + Pan casero</span>
                </div>
              </div>

              <a
                id="promo-whatsapp-btn"
                href={`${FARM_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hola! Quisiera consultar disponibilidad para aprovechar la PROMO APERTURA de $25.000 por alumno en Aula Verde con mi grupo escolar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Consultar Disponibilidad por WhatsApp</span>
              </a>

              <p className="text-[11px] text-brand-neutral-gray flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5 text-brand-accent-green shrink-0" />
                <span>Escribinos al <strong>{FARM_CONTACT.phoneFormatted}</strong> para congelar el valor de la visita</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
