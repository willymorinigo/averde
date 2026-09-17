import React from 'react';
import { FARM_CONTACT } from '../data/farmData';
import { Clock, Percent, Users, Award, Check, MessageCircle, Calendar, Home } from 'lucide-react';

export const QuinchoEvents: React.FC = () => {
  return (
    <section id="eventos" className="py-20 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching flyer 2 */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent-green/10 text-brand-accent-green text-xs font-bold uppercase tracking-wider">
            <Home className="w-3.5 h-3.5 text-brand-accent-green" />
            <span>Alquiler de Espacio & Eventos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary tracking-tight">
            Un lugar único para tus <br />
            <span className="text-brand-accent-green italic font-serif">eventos más especiales</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-neutral-gray">
            Alquilá nuestro espacio para eventos particulares en un entorno natural, tranquilo y lleno de vida. Conectá con la naturaleza, celebrá con los tuyos.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="/assets/images/quincho_eventos_1789659111936.jpg"
                alt="Quincho rústico de Aula Verde para eventos privados"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Badge: +80 Personas */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold text-brand-primary shadow-md flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-brand-accent-green" />
                <span>Quincho para +80 personas</span>
              </div>

              {/* Schedule Badge from Flyer: DE 11 A 18 HS. */}
              <div className="absolute bottom-4 right-4 bg-brand-primary text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-black shadow-lg flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-accent-green" />
                <span>HORARIO: DE 11 A 18 HS.</span>
              </div>
            </div>

            {/* Sub-quote */}
            <p className="text-center text-xs sm:text-sm text-brand-neutral-gray italic">
              "Conectá con la naturaleza, celebrá con los tuyos."
            </p>
          </div>

          {/* Details & Promo Los Ceibos Card */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* 30% Promo Banner from Flyer */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-accent-green text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl" />
              
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase">
                  <Award className="w-3.5 h-3.5" />
                  <span>Beneficio Exclusivo</span>
                </div>

                <div className="text-sm font-semibold tracking-wider text-[#FAF8F5] uppercase">
                  Por ser Familia de Los Ceibos
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-black tracking-tight text-[#FAF8F5]">
                    30%
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#FAF8F5] uppercase leading-none">
                    DE DESCUENTO
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#FAF8F5]/90">
                  Descuento directo en el alquiler de la jornada completa del quincho y predio de 11 a 18 hs.
                </p>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white p-6 rounded-3xl border border-brand-primary/10 shadow-md space-y-4">
              <h3 className="text-lg font-bold text-brand-primary">
                ¿Qué incluye el alquiler para eventos particulares?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-brand-neutral-gray">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Quincho techado y cerrado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Mesas y bancos rústicos (+80 pers)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Sector de parrillas y asador</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Batería de sanitarios completos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Acceso libre al parque y corrales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-accent-green shrink-0" />
                  <span>Estacionamiento interno sobre asfalto</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-[#F0EBE1]">
                <a
                  id="eventos-whatsapp-btn"
                  href={`${FARM_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hola Aula Verde! Quería consultar disponibilidad y presupuesto para un evento privado en el quincho (11 a 18 hs).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consultar Fecha para Evento por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
