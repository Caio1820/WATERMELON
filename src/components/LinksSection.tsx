import React from 'react';
import { ExternalLink, Star, MapPin, MessageCircle, ChevronRight } from 'lucide-react';
import { BioLink } from '../types.ts';

// Custom high-fidelity brand SVGs for exact brand recognition
const IFoodIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v4zm-.5-6.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4.5 6.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v6zm-8 0c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v3z" />
  </svg>
);

const NinetyNineIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
    <circle cx="8" cy="12" r="4.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M11 12v5a2 2 0 0 1-2 2H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="12" r="4.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M19 12v5a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.49V8.82a8.28 8.28 0 0 0 4.84 1.57V6.98a4.85 4.85 0 0 1-1.03-.29z" />
  </svg>
);

export const links: BioLink[] = [
  {
    id: 'ifood',
    title: 'Peça pelo iFood',
    subtitle: 'Entrega rápida e segura direto na sua porta',
    url: 'https://tr.ee/6Dgh4Cftes',
    type: 'ifood',
    highlight: true,
    accentColor: '#FF4D6D',
    badge: 'Destaque 🛵',
    iconBg: 'bg-[#FF4D6D] text-white',
  },
  {
    id: '99',
    title: 'Peça pela 99',
    subtitle: 'Peça no 99Food com agilidade e praticidade',
    url: 'https://tr.ee/1leVke22Jj',
    type: '99',
    highlight: true,
    accentColor: '#2E9E5B',
    badge: 'Popular 🚗',
    iconBg: 'bg-[#2E9E5B] text-white',
  },
  {
    id: 'whatsapp',
    title: 'Fale no WhatsApp',
    subtitle: '(96) 98420-3827 • Pedidos & atendimento direto',
    url: 'https://wa.me/5596984203827?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Watermelon%20e%20gostaria%20de%20fazer%20um%20pedido%20%F0%9F%8D%89',
    type: 'whatsapp',
    accentColor: '#25D366',
    iconBg: 'bg-[#25D366] text-white',
  },
  {
    id: 'maps',
    title: 'Como chegar / Localização',
    subtitle: 'Abra no GPS e venha nos visitar e saborear',
    url: 'https://tr.ee/Ohai4rUFwP',
    type: 'maps',
    accentColor: '#FF758F',
    iconBg: 'bg-[#FF758F] text-white',
  },
  {
    id: 'google',
    title: 'Avalie a gente no Google',
    subtitle: 'Sua avaliação ajuda muito a nossa sorveteria!',
    url: 'https://tr.ee/nPzNQl6mo',
    type: 'google',
    accentColor: '#FBBC05',
    iconBg: 'bg-[#FFB703] text-white',
  },
  {
    id: 'instagram',
    title: 'Instagram @br.watermelon',
    subtitle: 'Fotos apetitosas, lançamentos e bastidores',
    url: 'https://www.instagram.com/br.watermelon',
    type: 'instagram',
    accentColor: '#E1306C',
    iconBg: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white',
  },
  {
    id: 'tiktok',
    title: 'TikTok @br.watermelon',
    subtitle: 'Vídeos curtinhos, novidades e preparos refrescantes',
    url: 'https://www.tiktok.com/@br.watermelon',
    type: 'tiktok',
    accentColor: '#000000',
    iconBg: 'bg-black text-white',
  },
];

export const LinksSection: React.FC = () => {
  const getIcon = (type: BioLink['type']) => {
    switch (type) {
      case 'ifood':
        return (
          <span className="text-xl" role="img" aria-label="iFood">
            🛵
          </span>
        );
      case '99':
        return (
          <span className="text-xl" role="img" aria-label="99">
            🚗
          </span>
        );
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 text-white stroke-[2.2]" />;
      case 'maps':
        return <MapPin className="w-5 h-5 text-white stroke-[2.2]" />;
      case 'google':
        return <Star className="w-5 h-5 text-white fill-white stroke-[2]" />;
      case 'instagram':
        return <InstagramIcon />;
      case 'tiktok':
        return <TikTokIcon />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <nav aria-label="Links principais de pedidos e atendimento" className="w-full max-w-xl mx-auto px-4 flex flex-col gap-3.5 my-3">
      {links.map((link, index) => {
        const isIFood = link.type === 'ifood';
        const is99 = link.type === '99';

        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.title} - ${link.subtitle}`}
            style={{
              animationDelay: `${index * 60}ms`,
            }}
            className={`
              group relative w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl
              transition-all duration-200 transform-gpu
              hover:-translate-y-0.5 active:scale-[0.98]
              focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FF4D6D]
              ${
                isIFood
                  ? 'bg-gradient-to-r from-[#FF4D6D] to-[#E01E5A] text-white shadow-lg shadow-[#FF4D6D]/30 border border-[#FF758F]/50 shimmer-button hover:shadow-xl hover:shadow-[#FF4D6D]/40'
                  : is99
                  ? 'bg-gradient-to-r from-[#2E9E5B] to-[#1E824C] text-white shadow-md shadow-[#2E9E5B]/25 border border-[#52B788]/50 shimmer-button hover:shadow-lg hover:shadow-[#2E9E5B]/35'
                  : 'bg-white/90 backdrop-blur-md text-[#2D1217] shadow-sm hover:shadow-md border border-white hover:border-[#FFCCD5]/80 hover:bg-white'
              }
            `}
          >
            {/* Left Content Area: Icon + Labels */}
            <div className="flex items-center gap-3.5 min-w-0 pr-2">
              {/* Icon Container */}
              <div
                className={`
                  w-12 h-12 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center
                  shadow-inner transition-transform duration-200 group-hover:scale-105
                  ${isIFood ? 'bg-white/20 text-white' : is99 ? 'bg-white/20 text-white' : link.iconBg}
                `}
              >
                {getIcon(link.type)}
              </div>

              {/* Text Information */}
              <div className="flex flex-col text-left min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`
                      font-display font-bold text-[15px] sm:text-base leading-snug truncate
                      ${isIFood || is99 ? 'text-white' : 'text-[#2D1217] group-hover:text-[#FF4D6D]'}
                    `}
                  >
                    {link.title}
                  </span>
                  {link.badge && (
                    <span
                      className={`
                        text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 tracking-wide uppercase
                        ${
                          isIFood
                            ? 'bg-white/25 text-white border border-white/40'
                            : 'bg-white/25 text-white border border-white/40'
                        }
                      `}
                    >
                      {link.badge}
                    </span>
                  )}
                </div>
                <span
                  className={`
                    text-xs sm:text-[13px] leading-tight truncate mt-0.5 font-medium
                    ${isIFood || is99 ? 'text-white/90' : 'text-[#7D535A]'}
                  `}
                >
                  {link.subtitle}
                </span>
              </div>
            </div>

            {/* Right Action Affordance (Chevron / Arrow) */}
            <div
              className={`
                w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-transform duration-200
                group-hover:translate-x-0.5
                ${
                  isIFood || is99
                    ? 'bg-white/20 text-white'
                    : 'bg-[#FFF0F3] text-[#FF4D6D] group-hover:bg-[#FF4D6D] group-hover:text-white'
                }
              `}
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>
        );
      })}
    </nav>
  );
};
