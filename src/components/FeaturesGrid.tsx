import React from 'react';
import { Sparkles } from 'lucide-react';
import { FeatureCardItem } from '../types.ts';

const features: FeatureCardItem[] = [
  {
    icon: '🍓',
    title: 'Frutas Fresquinhas',
    description: 'Frutas selecionadas diariamente com todo o cuidado para garantir frescor e doçura.',
    color: '#FF4D6D',
    bgColor: 'bg-[#FFF0F3]',
  },
  {
    icon: '🍨',
    title: 'Sorvetes Cremosos',
    description: 'Textura aveludada, sabor marcante e opções refrescantes para transformar seu dia.',
    color: '#2E9E5B',
    bgColor: 'bg-[#E8F5E9]',
  },
  {
    icon: '🛵',
    title: 'Delivery Prático',
    description: 'Embalagem pensada com carinho para chegar na sua casa com o frescor ideal.',
    color: '#FF758F',
    bgColor: 'bg-[#FFF5EB]',
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section aria-labelledby="why-watermelon-title" className="w-full max-w-xl mx-auto px-4 mt-6 mb-4">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-2 mb-3.5 text-center">
        <Sparkles className="w-4 h-4 text-[#FF4D6D]" />
        <h2 id="why-watermelon-title" className="font-display font-bold text-lg sm:text-xl text-[#2D1217]">
          Por que pedir na Watermelon?
        </h2>
        <Sparkles className="w-4 h-4 text-[#2E9E5B]" />
      </div>

      {/* 3 Mini-cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-3.5 sm:p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-0.5 duration-200"
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-2.5 shadow-inner ${feature.bgColor}`}
            >
              <span role="img" aria-label={feature.title}>
                {feature.icon}
              </span>
            </div>
            <h3 className="font-display font-bold text-sm text-[#2D1217] mb-1">
              {feature.title}
            </h3>
            <p className="text-xs text-[#6A4E53] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
