import React, { useState } from 'react';
import { ANIMALS } from '../data/farmData';
import { Lightbulb, Heart, Info, Apple, Footprints } from 'lucide-react';

export const AnimalsGallery: React.FC = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(ANIMALS[0]);

  return (
    <section id="animales" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-accent-red/15 text-brand-accent-red text-xs font-bold uppercase tracking-wider">
            <Footprints className="w-3.5 h-3.5 text-brand-accent-red" />
            <span>Amigos de la Granja</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary tracking-tight">
            Conocé a los habitantes de Aula Verde
          </h2>

          <p className="text-base sm:text-lg text-brand-neutral-gray">
            Van a conocer patos, ovejas, gallinas, ciervos, pavos reales, conejos, chanchos, caballos y muchos amigos más en un ambiente de cariño y respeto mutuo.
          </p>
        </div>

        {/* Feature Banner: Generated Animals Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-12 border-4 border-white aspect-[16/7] sm:aspect-[21/9]">
          <img
            src="/assets/images/farm_animals_1789659096960.jpg"
            alt="Animales de la granja interactiva Aula Verde"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-white">
                Interacción Directa & Respeto Animal
              </span>
              <h3 className="text-xl sm:text-3xl font-bold mt-1">
                Aprender acariciando, cuidando y alimentando
              </h3>
            </div>
          </div>
        </div>

        {/* Animal Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
          {ANIMALS.map((animal) => {
            const isSelected = animal.id === selectedAnimal.id;
            return (
              <button
                key={animal.id}
                id={`animal-select-${animal.id}`}
                onClick={() => setSelectedAnimal(animal)}
                className={`p-3.5 rounded-2xl flex flex-col items-center text-center transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg scale-105 ring-2 ring-brand-accent-green/40'
                    : 'bg-white hover:bg-[#F3EDE2] text-brand-primary border-brand-primary/10 hover:border-brand-primary/30 shadow-sm'
                }`}
              >
                <span className="text-3xl mb-1.5" role="img" aria-label={animal.name}>
                  {animal.emoji}
                </span>
                <span className="text-xs font-bold truncate w-full">
                  {animal.name.split(' ')[0]}
                </span>
                <span className={`text-[10px] mt-0.5 truncate w-full ${isSelected ? 'text-brand-accent-green' : 'text-brand-neutral-gray'}`}>
                  {animal.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight of Selected Animal */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-primary/10 shadow-xl text-left max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F0EBE1]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-brand-accent-green/20 flex items-center justify-center text-4xl shadow-inner">
                {selectedAnimal.emoji}
              </div>
              <div>
                <span className="text-xs font-bold text-brand-neutral-gray italic">
                  {selectedAnimal.species}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-primary">
                  {selectedAnimal.name}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-red/15 text-brand-accent-red text-xs font-bold">
              <Heart className="w-3.5 h-3.5 fill-brand-accent-red" />
              <span>{selectedAnimal.tag}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-neutral-gray mb-1">
                  <Info className="w-3.5 h-3.5 text-brand-accent-green" />
                  <span>En la granja</span>
                </div>
                <p className="text-sm sm:text-base text-brand-primary leading-relaxed">
                  {selectedAnimal.fact}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-brand-primary/10">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent-red mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-brand-accent-red" />
                  <span>¿Sabías qué?</span>
                </div>
                <p className="text-xs sm:text-sm text-brand-neutral-gray italic">
                  "{selectedAnimal.curiosity}"
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-neutral-gray mb-1">
                  <Apple className="w-3.5 h-3.5 text-brand-accent-green" />
                  <span>Alimentación y cuidados</span>
                </div>
                <p className="text-sm text-brand-neutral-gray leading-relaxed">
                  {selectedAnimal.diet}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-xs text-brand-primary">
                <strong>Vivencia guiada:</strong> En cada corral los alumnos aprenden bajo supervisión cómo acercarse con serenidad y dar de comer a los animales con palmas abiertas.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
