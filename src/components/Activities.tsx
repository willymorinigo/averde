import React, { useState } from 'react';
import { ACTIVITIES } from '../data/farmData';
import { Compass, HeartHandshake, Sprout, UtensilsCrossed, Smile, Check, ArrowRight, BookOpen } from 'lucide-react';

const ICON_MAP: Record<string, (className?: string) => React.ReactNode> = {
  Compass: (cls = "w-6 h-6 text-brand-accent-green") => <Compass className={cls} />,
  HeartHandshake: (cls = "w-6 h-6 text-brand-accent-green") => <HeartHandshake className={cls} />,
  Sprout: (cls = "w-6 h-6 text-brand-accent-green") => <Sprout className={cls} />,
  UtensilsCrossed: (cls = "w-6 h-6 text-brand-accent-green") => <UtensilsCrossed className={cls} />,
  Smile: (cls = "w-6 h-6 text-brand-accent-green") => <Smile className={cls} />,
};

export const Activities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(ACTIVITIES[0].id);

  const selectedActivity = ACTIVITIES.find((a) => a.id === activeTab) || ACTIVITIES[0];

  return (
    <section id="actividades" className="py-20 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with "un aula SIN PAREDES" aesthetic */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-accent-green/10 text-brand-accent-green text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-brand-accent-green" />
            <span>Propuesta Pedagógica y Vivencial</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary tracking-tight">
            Un aula <span className="text-brand-accent-green uppercase">SIN PAREDES</span>
          </h2>
          
          <p className="text-base sm:text-lg text-brand-neutral-gray font-normal">
            ¿Qué van a hacer los chicos? Diseñamos cada momento del día para estimular la curiosidad, el respeto ambiental y el aprendizaje práctico en el campo.
          </p>
        </div>

        {/* Desktop / Tablet Interactive Activity Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {ACTIVITIES.map((activity) => {
              const isSelected = activity.id === activeTab;
              const renderIcon = ICON_MAP[activity.icon] || ((cls) => <Sprout className={cls} />);
              return (
                <button
                  key={activity.id}
                  id={`activity-tab-${activity.id}`}
                  onClick={() => setActiveTab(activity.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center gap-4 border ${
                    isSelected
                      ? 'bg-white border-brand-primary shadow-lg translate-x-1 sm:translate-x-2 ring-1 ring-brand-primary/20'
                      : 'bg-white/60 hover:bg-white border-transparent hover:border-black/5 text-brand-neutral-gray hover:shadow'
                  }`}
                >
                  {/* Flat contextual icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-brand-accent-green/20' : 'bg-[#EAE4D7]'
                  }`}>
                    {renderIcon("w-5 h-5 text-brand-accent-green")}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-base sm:text-lg font-bold truncate ${
                        isSelected ? 'text-brand-primary' : 'text-brand-neutral-gray'
                      }`}>
                        {activity.title}
                      </span>
                      {isSelected && (
                        <span className="text-xs font-semibold text-brand-accent-green bg-brand-accent-green/15 px-2.5 py-0.5 rounded-full hidden sm:inline-block">
                          Ver detalle
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-brand-neutral-gray truncate mt-0.5">
                      {activity.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Highlight Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-brand-primary/10 shadow-xl text-left space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent-green/15 flex items-center justify-center">
                  {(ICON_MAP[selectedActivity.icon] || ((cls) => <Sprout className={cls} />))("w-6 h-6 text-brand-accent-green")}
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-accent-green">
                    {selectedActivity.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-primary">
                    {selectedActivity.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-brand-neutral-gray leading-relaxed">
              {selectedActivity.description}
            </p>

            {/* Bullet Highlights */}
            <div className="pt-2 border-t border-[#F0EBE1] space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-neutral-gray">
                Lo que aprenderán y vivirán:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedActivity.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-brand-primary font-medium bg-[#FAF8F5] p-2.5 rounded-xl border border-brand-primary/5">
                    <Check className="w-4 h-4 text-brand-accent-green shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action to Book this activity */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF8F5] p-4 rounded-2xl border border-brand-primary/10">
              <div className="text-xs text-brand-neutral-gray">
                Todas las actividades están coordinadas por guías y educadores de Aula Verde.
              </div>
              <a
                href="#cotizador"
                className="inline-flex items-center gap-2 text-xs font-bold bg-brand-primary hover:bg-brand-accent-green text-white px-4 py-2.5 rounded-xl transition-colors shrink-0"
              >
                <span>Consultar para mi grupo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
