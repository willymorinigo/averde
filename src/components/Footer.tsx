import React from 'react';
import { FARM_CONTACT } from '../data/farmData';
import { MessageCircle, Instagram, MapPin, Phone, Mail, Compass, Heart, Sprout } from 'lucide-react';
import logoBlanco from '../assets/icons/logo_blanco.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-[#FAF8F5] pt-16 pb-12 border-t border-brand-accent-green/20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <img src={logoBlanco} className="h-12 w-auto" alt="Aula Verde" />
            </div>

            <p className="text-sm text-[#D8E2DC] leading-relaxed">
              Un aula sin paredes en plena naturaleza. 14 hectáreas pensadas para que colegios, jardines y familias vivan la experiencia enriquecora de conectar con el campo.
            </p>

            {/* Social & Contact Badges */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={FARM_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-accent-red text-white flex items-center justify-center transition-all"
                aria-label="Instagram de Aula Verde"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={FARM_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp de Aula Verde"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${FARM_CONTACT.phone}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-accent-green text-white flex items-center justify-center transition-all"
                aria-label="Teléfono de Aula Verde"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-accent-green">
              Secciones
            </h4>
            <ul className="space-y-2 text-sm text-[#D8E2DC]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#actividades" className="hover:text-white transition-colors">
                  Actividades ("Un aula sin paredes")
                </a>
              </li>
              <li>
                <a href="#animales" className="hover:text-white transition-colors">
                  Nuestros Animales
                </a>
              </li>
              <li>
                <a href="#promo" className="hover:text-white transition-colors">
                  Promo Apertura ($25.000)
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-white transition-colors">
                  Eventos Privados & Quincho
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-white transition-colors">
                  Cotizador de Visitas
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">
                  Ubicación & Cómo Llegar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-accent-green">
              Contacto & Reservas
            </h4>
            
            <div className="space-y-3 text-sm text-[#D8E2DC]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Ruta 11 Km 22, Magdalena</strong>
                  <span className="block text-xs text-brand-accent-green">A solo 20 min de La Plata • Acceso por asfalto</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <div>
                  <a
                    href={`${FARM_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hola Aula Verde! Quiero hacer una consulta.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-white font-semibold"
                  >
                    WhatsApp: {FARM_CONTACT.phoneFormatted}
                  </a>
                  <span className="block text-xs text-brand-accent-green">Escribinos por privado para reservas</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-brand-accent-red shrink-0" />
                <div>
                  <a
                    href={FARM_CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-white font-semibold"
                  >
                    Instagram: @{FARM_CONTACT.instagram}
                  </a>
                  <span className="block text-xs text-brand-accent-green">Fotos, novedades y videos del predio</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-accent-green/80 gap-3">
          <div>
            © {new Date().getFullYear()} Aula Verde Granja Interactiva. Todos los derechos reservados. Magdalena, Prov. de Buenos Aires.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Conectá con la naturaleza, celebrá con los tuyos</span>
            <Sprout className="w-3.5 h-3.5 text-brand-accent-green inline shrink-0" />
          </div>
        </div>
      </div>
    </footer>
  );
};
