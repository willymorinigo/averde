import React, { useState } from 'react';
import { FARM_CONTACT } from '../data/farmData';
import { VisitFormData } from '../types';
import { Calculator, MessageCircle, School, Users, Calendar, Clock, Check, Coffee, Sprout, BookOpen, GraduationCap, PartyPopper } from 'lucide-react';

export const VisitCalculator: React.FC = () => {
  const [formData, setFormData] = useState<VisitFormData>({
    institutionName: '',
    contactName: '',
    groupType: 'primaria',
    estimatedStudents: 35,
    accompanyingAdults: 4,
    preferredShift: 'manana',
    preferredDate: '',
    notes: '',
    isLosCeibosFamily: false,
  });

  const [copied, setCopied] = useState(false);

  // Pricing calculations
  const pricePerStudent = FARM_CONTACT.promoPrice; // 25.000
  const isPrivateEvent = formData.groupType === 'evento_privado';
  const totalStudentsCost = formData.estimatedStudents * pricePerStudent;

  // Format currency
  const formatPesos = (val: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const groupTypeLabels: Record<string, string> = {
    jardin: 'Jardín de Infantes (Nivel Inicial)',
    primaria: 'Escuela Primaria',
    secundaria: 'Colegio Secundario',
    especial: 'Educación Especial / Grupo Recreativo',
    evento_privado: 'Evento Privado / Cumpleaños Campestre',
  };

  const shiftLabels: Record<string, string> = {
    manana: 'Turno Mañana (09:00 a 13:00 hs)',
    tarde: 'Turno Tarde (13:30 a 17:30 hs)',
    jornada_completa: 'Jornada Completa Escolar',
    evento_privado: 'Jornada de Evento (11:00 a 18:00 hs)',
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    let msg = `*CONSULTA DE RESERVA - AULA VERDE*\n\n`;
    if (formData.institutionName) {
      msg += `• *Institución / Organización:* ${formData.institutionName}\n`;
    }
    if (formData.contactName) {
      msg += `• *Contacto:* ${formData.contactName}\n`;
    }
    msg += `• *Tipo de Grupo:* ${groupTypeLabels[formData.groupType]}\n`;
    
    if (isPrivateEvent) {
      msg += `• *Invitados estimados:* ${formData.estimatedStudents} personas\n`;
      msg += `• *Horario:* De 11:00 a 18:00 hs\n`;
      if (formData.isLosCeibosFamily) {
        msg += `• *Beneficio:* Familia de Los Ceibos (30% OFF)\n`;
      }
    } else {
      msg += `• *Cantidad de alumnos:* ${formData.estimatedStudents}\n`;
      msg += `• *Acompañantes/Docentes:* ${formData.accompanyingAdults} (sin costo)\n`;
      msg += `• *Promo Apertura:* $25.000 por alumno (Desayuno incluido)\n`;
      msg += `• *Turno preferido:* ${shiftLabels[formData.preferredShift]}\n`;
      msg += `• *Presupuesto estimado alumnos:* ${formatPesos(totalStudentsCost)}\n`;
    }

    if (formData.preferredDate) {
      msg += `• *Fecha tentativa:* ${formData.preferredDate}\n`;
    }
    if (formData.notes) {
      msg += `• *Observaciones:* ${formData.notes}\n`;
    }
    msg += `\n¡Hola! Quería consultar disponibilidad para esta fecha y coordinar los detalles. Muchas gracias!`;
    return msg;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const url = `${FARM_CONTACT.whatsappUrl}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-accent-green/10 text-brand-accent-green text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Planificador Interactivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary tracking-tight">
            Organizar una visita es muy fácil
          </h2>

          <p className="text-base sm:text-lg text-brand-neutral-gray">
            Configurá la cantidad estimada de alumnos o invitados para calcular el presupuesto con la Promo Apertura y enviarnos la consulta directa a nuestro WhatsApp.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-brand-primary/10 shadow-2xl">
          <form onSubmit={handleSendWhatsApp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Fields (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Type of Visit Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
                  1. ¿Qué tipo de grupo o actividad es?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'jardin', label: 'Jardín de Infantes', icon: <Sprout className="w-4 h-4 text-brand-accent-green" /> },
                    { id: 'primaria', label: 'Escuela Primaria', icon: <BookOpen className="w-4 h-4 text-brand-accent-green" /> },
                    { id: 'secundaria', label: 'Colegio Secundario', icon: <GraduationCap className="w-4 h-4 text-brand-accent-green" /> },
                    { id: 'evento_privado', label: 'Evento Privado / Cumple', icon: <PartyPopper className="w-4 h-4 text-brand-accent-green" /> },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setFormData({ ...formData, groupType: item.id as any })}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                        formData.groupType === item.id
                          ? 'border-brand-primary bg-brand-accent-green/15 text-brand-primary font-bold shadow-sm'
                          : 'border-[#F0EBE1] hover:border-brand-primary/30 bg-[#FAF8F5] text-brand-neutral-gray'
                      }`}
                    >
                      <span className="w-7 h-7 rounded-lg bg-white/80 border border-brand-primary/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </span>
                      <span className="text-xs sm:text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Institution and Contact Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-1.5">
                    {isPrivateEvent ? 'Nombre de la familia / Homenajeado' : 'Colegio o Institución'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isPrivateEvent ? 'Ej: Familia Rodríguez' : 'Ej: Escuela N° 12 / Instituto Belgrano'}
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2C5] focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-1.5">
                    Nombre de contacto / Docente
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Lic. Mariana Gomez"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2C5] focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm bg-[#FAF8F5]"
                  />
                </div>
              </div>

              {/* Students / Guests Count Slider */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-brand-primary/10 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    {isPrivateEvent ? '2. Cantidad de invitados estimada:' : '2. Cantidad estimada de alumnos:'}
                  </label>
                  <span className="text-xl font-extrabold text-brand-accent-green bg-white px-3 py-1 rounded-lg border border-brand-primary/20">
                    {formData.estimatedStudents} {isPrivateEvent ? 'personas' : 'alumnos'}
                  </span>
                </div>

                <input
                  type="range"
                  min={isPrivateEvent ? 10 : 15}
                  max={isPrivateEvent ? 90 : 150}
                  step={5}
                  value={formData.estimatedStudents}
                  onChange={(e) => setFormData({ ...formData, estimatedStudents: Number(e.target.value) })}
                  className="w-full accent-brand-primary cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-brand-neutral-gray">
                  <span>{isPrivateEvent ? '10 personas' : '15 alumnos (mín.)'}</span>
                  <span>{isPrivateEvent ? '90 personas máx.' : '150 alumnos'}</span>
                </div>

                {!isPrivateEvent && (
                  <div className="flex items-center gap-2 pt-1 text-xs text-brand-accent-green font-semibold">
                    <Check className="w-4 h-4" />
                    <span>Docentes y acompañantes sin cargo (sugerido: {Math.ceil(formData.estimatedStudents / 10)} adultos)</span>
                  </div>
                )}
              </div>

              {/* Date & Shift */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-1.5">
                    Fecha tentativa:
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2C5] focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-1.5">
                    Turno deseado:
                  </label>
                  <select
                    value={formData.preferredShift}
                    onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2C5] focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm bg-[#FAF8F5]"
                  >
                    <option value="manana">Turno Mañana (9 a 13 hs)</option>
                    <option value="tarde">Turno Tarde (13:30 a 17:30 hs)</option>
                    <option value="jornada_completa">Jornada Completa Escolar</option>
                    <option value="evento_privado">Horario Evento (11 a 18 hs)</option>
                  </select>
                </div>
              </div>

              {/* Family De Los Ceibos Checkbox */}
              {isPrivateEvent && (
                <div className="p-3.5 rounded-xl bg-brand-accent-green/15 border border-brand-primary/20 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="ceibos-check"
                    checked={formData.isLosCeibosFamily}
                    onChange={(e) => setFormData({ ...formData, isLosCeibosFamily: e.target.checked })}
                    className="w-4 h-4 accent-brand-primary rounded cursor-pointer"
                  />
                  <label htmlFor="ceibos-check" className="text-xs font-bold text-brand-primary cursor-pointer">
                    ¿Sos Familia de Los Ceibos? Aplicar 30% de Descuento Especial
                  </label>
                </div>
              )}

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-1.5">
                  Consultas o requerimientos adicionales (opcional):
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej: Necesitamos menú apto celíacos, vienen en 2 micros, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-[#D8D2C5] focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm bg-[#FAF8F5]"
                />
              </div>

            </div>

            {/* Quote Summary & WhatsApp CTA (Right 5 cols) */}
            <div className="lg:col-span-5 bg-brand-primary text-white p-6 sm:p-7 rounded-3xl shadow-xl space-y-5 text-left">
              <div className="flex items-center justify-between border-b border-brand-accent-green/20 pb-4">
                <span className="text-xs uppercase tracking-widest font-extrabold text-brand-accent-green">
                  Resumen de tu Visita
                </span>
                <span className="text-xs bg-brand-accent-green/20 text-brand-accent-green px-2.5 py-0.5 rounded-full font-bold">
                  {isPrivateEvent ? 'Evento Privado' : 'Promo Apertura'}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#E0E7E3]">
                <div className="flex justify-between">
                  <span className="text-[#D8E2DC]">Grupo:</span>
                  <span className="font-semibold text-white truncate max-w-[180px]">
                    {formData.institutionName || 'A definir'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#D8E2DC]">{isPrivateEvent ? 'Invitados:' : 'Alumnos:'}</span>
                  <span className="font-bold text-white">
                    {formData.estimatedStudents} {isPrivateEvent ? 'personas' : 'alumnos'}
                  </span>
                </div>

                {!isPrivateEvent && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-[#D8E2DC]">Valor unitario promo:</span>
                      <span className="font-bold text-brand-accent-green">$25.000 / alumno</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#D8E2DC]">Desayuno de campo:</span>
                      <span className="font-bold text-brand-accent-green">INCLUIDO ✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#D8E2DC]">Docentes/Acompañantes:</span>
                      <span className="font-bold text-brand-accent-green">Sin cargo ✓</span>
                    </div>
                  </>
                )}

                {isPrivateEvent && (
                  <div className="flex justify-between">
                    <span className="text-[#D8E2DC]">Horario quincho:</span>
                    <span className="font-bold text-white">11:00 a 18:00 hs</span>
                  </div>
                )}
              </div>

              {/* Total Calculation Display */}
              <div className="p-4 rounded-2xl bg-[#0F2018] border border-brand-accent-green/30">
                <div className="text-[11px] text-brand-accent-green uppercase tracking-wider font-bold">
                  {isPrivateEvent ? 'Presupuesto estimativo evento:' : 'Presupuesto estimado con Promo:'}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                  {isPrivateEvent ? 'A coordinar por WhatsApp' : formatPesos(totalStudentsCost)}
                </div>
                {!isPrivateEvent && (
                  <div className="text-[11px] text-brand-accent-green mt-1 flex items-center gap-1">
                    <Coffee className="w-3.5 h-3.5" />
                    <span>Con desayuno completo para todos los chicos</span>
                  </div>
                )}
              </div>

              {/* WhatsApp Action Button */}
              <button
                type="submit"
                id="calculator-submit-whatsapp"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Enviar Consulta por WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-brand-accent-green/80 flex items-center justify-center gap-1">
                <MessageCircle className="w-3.5 h-3.5 text-brand-accent-green shrink-0" />
                <span>Se abrirá WhatsApp con el mensaje prearmado listo para enviar a <strong>{FARM_CONTACT.phoneFormatted}</strong></span>
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
