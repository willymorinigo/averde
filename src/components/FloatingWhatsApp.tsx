import React, { useState } from 'react';
import { FARM_CONTACT } from '../data/farmData';
import { MessageCircle, X, Send, Users, Calendar, GraduationCap, PartyPopper, Award } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const quickOptions = [
    {
      title: 'Visita Escolar / Promo $25.000',
      subtitle: 'Para jardines, primarias y secundarias',
      icon: <GraduationCap className="w-4 h-4 text-brand-accent-green shrink-0" />,
      text: '¡Hola Aula Verde! Me gustaría consultar por la Promo Apertura de $25.000 por alumno con desayuno para una visita escolar.',
    },
    {
      title: 'Evento Privado / Cumpleaños',
      subtitle: 'Alquiler de quincho para +80 personas (11 a 18 hs)',
      icon: <PartyPopper className="w-4 h-4 text-brand-accent-green shrink-0" />,
      text: '¡Hola Aula Verde! Quisiera consultar por el alquiler del espacio para un evento privado en el quincho de 11 a 18 hs.',
    },
    {
      title: 'Beneficio Familia De Los Ceibos',
      subtitle: 'Consultar por el 30% de descuento especial',
      icon: <Award className="w-4 h-4 text-brand-accent-green shrink-0" />,
      text: '¡Hola Aula Verde! Soy familia de Los Ceibos y quería consultar para reservar con el 30% de descuento.',
    },
  ];

  const handleOpenChat = (customText?: string) => {
    const textToSend = customText || '¡Hola Aula Verde! Me gustaría coordinar una visita a la granja educativa.';
    const url = `${FARM_CONTACT.whatsappUrl}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
      
      {/* Quick Interactive Popup Drawer */}
      {isOpen && (
        <div
          id="whatsapp-quick-modal"
          className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-brand-primary/20 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-brand-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-sm leading-tight">Aula Verde Granja</h4>
                <p className="text-[11px] text-brand-accent-green">Responde en pocos minutos • 221 436-9212</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#D8E2DC] hover:text-white rounded-full hover:bg-white/10 cursor-pointer"
              aria-label="Cerrar ventana de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF8F5] space-y-3 text-left">
            <p className="text-xs text-brand-neutral-gray font-medium leading-relaxed">
              ¡Hola! ¿En qué podemos ayudarte hoy? Elegí una opción rápida o escribinos tu consulta directa:
            </p>

            <div className="space-y-2">
              {quickOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOpenChat(opt.text)}
                  className="w-full text-left p-3 rounded-xl bg-white hover:bg-brand-accent-green/10 border border-brand-primary/15 hover:border-brand-primary transition-all shadow-sm group cursor-pointer"
                >
                  <div className="text-xs font-bold text-brand-primary group-hover:text-brand-accent-green flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      {opt.icon}
                      {opt.title}
                    </span>
                    <Send className="w-3 h-3 text-brand-neutral-gray group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </div>
                  <div className="text-[11px] text-brand-neutral-gray mt-0.5 pl-6">
                    {opt.subtitle}
                  </div>
                </button>
              ))}
            </div>

            {/* Direct Open Button */}
            <button
              onClick={() => handleOpenChat()}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Abrir chat general de WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Pill Tooltip */}
      {!isOpen && showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 bg-white text-brand-primary px-3.5 py-1.5 rounded-full shadow-lg border border-brand-primary/15 text-xs font-bold animate-bounce">
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
          <span>¿Organizamos tu visita? ¡Escribinos!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-gray-600 ml-1 cursor-pointer"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Button with Pulse Effect */}
      <button
        id="floating-whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-all transform hover:scale-105 active:scale-95 focus:outline-none ring-4 ring-white/70 cursor-pointer"
        aria-label="Abrir WhatsApp para organizar visitas"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 group-hover:opacity-60 animate-ping pointer-events-none" />
        
        {isOpen ? (
          <X className="w-7 h-7 fill-white" />
        ) : (
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
        )}
      </button>

    </div>
  );
};
