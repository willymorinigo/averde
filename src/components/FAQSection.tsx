import React, { useState } from 'react';
import { FAQS } from '../data/farmData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FARM_CONTACT } from '../data/farmData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'colegios' | 'eventos' | 'general'>('all');

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-accent-green/10 text-brand-accent-green text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-brand-primary tracking-tight">
            Respuestas para Docentes, Directivos y Familias
          </h2>

          <p className="text-base text-brand-neutral-gray">
            Todo lo que necesitás saber antes de tu visita o reserva en Aula Verde.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'Todas las preguntas' },
              { id: 'colegios', label: 'Colegios y Jardines' },
              { id: 'eventos', label: 'Eventos Privados' },
              { id: 'general', label: 'Acceso y Logística' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                    : 'bg-white text-brand-neutral-gray border-brand-primary/15 hover:bg-[#F3EDE2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-primary/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-[#FAF8F5]/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-brand-primary">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-[#FAF8F5] text-brand-neutral-gray'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-brand-neutral-gray leading-relaxed border-t border-[#F0EBE1]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-3xl bg-[#EAE4D7]/70 border border-brand-primary/10 text-center space-y-3">
          <h3 className="text-lg font-bold text-brand-primary">
            ¿Tenés alguna otra consulta o proyecto escolar especial?
          </h3>
          <p className="text-xs sm:text-sm text-brand-neutral-gray">
            Podés escribirnos por privado o WhatsApp para armar un itinerario a la medida de tu institución.
          </p>
          <a
            href={`${FARM_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hola Aula Verde! Tengo una consulta sobre una visita con nuestro colegio.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar por WhatsApp ({FARM_CONTACT.phoneFormatted})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
