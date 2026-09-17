import React from 'react';
import { Compass, BookOpen, Utensils, Heart, Bus, ArrowRight } from 'lucide-react';
import { FARM_CONTACT } from '../data/farmData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#FAF8F5] relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-40">
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-brand-accent-green/10 blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-brand-accent-red/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header containing the user's welcoming words */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-accent-green/10 text-brand-accent-green text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-brand-accent-green" />
            <span>Una experiencia educativa única</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary tracking-tight">
            ¿Están listos para una <br className="hidden sm:inline" />
            <span className="text-brand-accent-green">aventura escolar inolvidable?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-brand-neutral-gray font-medium leading-relaxed">
            Bienvenidos a un aula sin paredes donde la naturaleza y el aprendizaje se encuentran.
          </p>
        </div>

        {/* Grid split: Narrative and Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Beautiful Narrative Storytelling */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-primary">
                Un lugar perfecto donde los chicos aprenden, juegan y conectan con la vida rural.
              </h3>
              
              <p className="text-sm sm:text-base text-brand-neutral-gray leading-relaxed">
                Diseñamos cada rincón de nuestras <strong className="font-semibold text-brand-primary">14 hectáreas</strong> para inspirar asombro y pertenencia. En Aula Verde, los alumnos no son meros observadores: tocan la tierra, interactúan con los animales con respeto y comparten momentos que recordarán para siempre.
              </p>

              <div 
                className="px-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 space-y-3"
                style={{ paddingTop: '40px', paddingBottom: '41px', marginTop: '0px' }}
              >
                <p 
                  className="text-brand-primary"
                  style={{ fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '33.75px' }}
                >
                  "Buscamos que cada visita escolar sea mucho más que una salida recreativa; es una vivencia pedagógica donde la curiosidad guía el aprendizaje."
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-6 h-1 bg-brand-accent-green rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-green">Equipo Aula Verde</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Rich Feature Bento Panels */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Panel 1: Cocineros & Quincho */}
            <div className="bg-white p-6 rounded-3xl border border-brand-primary/10 shadow-sm flex flex-col justify-between text-left space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent-green/10 flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-brand-accent-green" />
                </div>
                <h4 className="text-lg font-bold text-brand-primary">Quincho & Pequeños Cocineros</h4>
                <p className="text-xs sm:text-sm text-brand-neutral-gray leading-relaxed">
                  Contamos con un quincho súper amplio y cocina equipada. Un espacio ideal donde los chicos van a disfrutar de un rico desayuno o merienda, e incluso convertirse en pequeños cocineros listos para amasar su propio pan casero.
                </p>
              </div>
              <div className="text-xs font-bold text-brand-accent-green bg-brand-accent-green/10 py-1.5 px-3 rounded-lg inline-block w-fit">
                Cocina Rústica y Amasado
              </div>
            </div>

            {/* Panel 2: Conexión Animal */}
            <div className="bg-white p-6 rounded-3xl border border-brand-primary/10 shadow-sm flex flex-col justify-between text-left space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent-red/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-brand-accent-red" />
                </div>
                <h4 className="text-lg font-bold text-brand-primary">Gran Diversidad de Animales</h4>
                <p className="text-xs sm:text-sm text-brand-neutral-gray leading-relaxed">
                  Pero lo mejor son ellos. Vení a conocer y conectar con nuestros animales: caballos, cerdos, una increíble variedad de aves, ciervos y nuestros guardianes de cuatro patas más amigables que acompañan todo el recorrido.
                </p>
              </div>
              <div className="text-xs font-bold text-brand-accent-red bg-brand-accent-red/10 py-1.5 px-3 rounded-lg inline-block w-fit">
                Interacción de Cariño y Respeto
              </div>
            </div>

            {/* Panel 3: Acceso Directo y Asfaltado - Full width inside grid row if spans 2 cols */}
            <div className="sm:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
              <div className="space-y-3 max-w-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Bus className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-primary">Acceso 100% Asfaltado y Seguro</h4>
                </div>
                <p className="text-xs sm:text-sm text-brand-neutral-gray leading-relaxed">
                  A sólo 20 minutos de La Plata, con acceso directo desde la ruta y todo asfaltado. Garantizamos un viaje cómodo, rápido y seguro para los micros escolares, charters y combis directos al predio sin caminos de tierra.
                </p>
              </div>
              <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-brand-primary/5 shrink-0 w-full sm:w-auto text-center sm:text-left">
                <div className="text-[11px] text-brand-neutral-gray uppercase tracking-wider font-bold">Ubicación Estratégica</div>
                <div className="text-lg font-extrabold text-brand-primary mt-0.5">20 min de La Plata</div>
                <div className="text-xs text-brand-accent-green font-bold">Ruta 11 Km 22</div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom invitation line */}
        <div className="mt-16 text-center">
          <p className="text-base sm:text-lg font-semibold text-brand-primary">
            Reservá la próxima salida de tu institución. <span className="text-brand-accent-green uppercase tracking-wide font-black">Los estamos esperando.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
