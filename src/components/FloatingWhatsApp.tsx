import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    'https://wa.me/5596984203827?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Watermelon%20e%20gostaria%20de%20fazer%20um%20pedido%20%F0%9F%8D%89';

  return (
    <aside aria-label="Atendimento rápido via WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Friendly Chat Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg border border-[#B7E4C7] text-xs font-bold text-[#1B4332] animate-fade-in">
          <span>Peça no Whats! 🍉</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            aria-label="Fechar balão do WhatsApp"
            className="text-gray-400 hover:text-gray-600 ml-1 p-0.5 rounded-full"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp da Watermelon"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] active:scale-95 transition-all duration-200 animate-whatsapp-pulse cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 stroke-[2.4] fill-white/10 group-hover:scale-110 transition-transform" />
        
        {/* Active badge ping */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D6D] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FF4D6D] border-2 border-white"></span>
        </span>
      </a>
    </aside>
  );
};
