import React, { useState } from 'react';
import { QrCode, Share2, Sparkles } from 'lucide-react';

interface BrandHeaderProps {
  onOpenShareModal: () => void;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({ onOpenShareModal }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <header className="relative pt-6 pb-4 flex flex-col items-center text-center px-4 max-w-xl mx-auto">
      {/* Quick Action bar: Share & QR Code */}
      <div className="w-full flex justify-end mb-2">
        <button
          onClick={onOpenShareModal}
          aria-label="Compartilhar ou ver QR Code da página"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#590D22] bg-white/70 hover:bg-white active:scale-95 transition-all shadow-sm border border-[#FFCCD5]/60 backdrop-blur-sm cursor-pointer"
        >
          <QrCode className="w-3.5 h-3.5 text-[#FF4D6D]" />
          <span>QR Code</span>
          <Share2 className="w-3 h-3 text-[#2E9E5B] ml-0.5" />
        </button>
      </div>

      {/* Circular Logo with Pink/Green Gradient Ring and Soft Glow */}
      <div className="relative group mb-4">
        {/* Ambient glow behind logo */}
        <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FF4D6D] via-[#B7E4C7] to-[#2E9E5B] rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Outer gradient border ring */}
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#FF4D6D] via-[#FFA5BA] to-[#2E9E5B] shadow-lg">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-white p-0.5 flex items-center justify-center">
            {!imgError ? (
              <img
                src="https://i.postimg.cc/htxsr73Y/watermemlon.jpg"
                alt="Logo Watermelon Salada de Frutas e Sorveteria"
                className="w-full h-full object-cover rounded-full select-none"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
            ) : (
              /* High-fidelity CSS/SVG fallback if external host is ever unreachable */
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFF0F3] to-[#E8F5E9] flex flex-col items-center justify-center text-center p-2">
                <span className="text-3xl">🍉</span>
                <span className="font-display font-bold text-xs text-[#FF4D6D] tracking-wider mt-1">WATERMELON</span>
              </div>
            )}
          </div>
        </div>

        {/* Small floating tropical fruit badge */}
        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md border border-[#FFCCD5] flex items-center justify-center animate-bounce duration-1000">
          <span className="text-lg leading-none" role="img" aria-label="Melancia">🍉</span>
        </div>
      </div>

      {/* Store Brand Name */}
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2D1217] flex items-center justify-center gap-2">
        <span className="bg-gradient-to-r from-[#FF4D6D] via-[#E01E5A] to-[#2E9E5B] bg-clip-text text-transparent">
          Watermelon
        </span>
      </h1>

      {/* Subtitle */}
      <p className="font-display text-base sm:text-lg font-semibold text-[#6A2E35] mt-1 tracking-wide">
        Salada de Frutas & Sorveteria
      </p>

      {/* Appetizing Slogan */}
      <p className="text-sm sm:text-[15px] text-[#553037] mt-2 max-w-sm leading-relaxed font-medium">
        Frescor, fruta e sorvete que refrescam seu dia <span className="inline-block" aria-hidden="true">🍉🍨</span>
      </p>

      {/* Delivery Available Badge */}
      <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#B7E4C7] shadow-sm backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-[#2E9E5B] ring-2 ring-[#B7E4C7]" />
        <span className="text-xs font-bold text-[#1B4332] tracking-wide flex items-center gap-1.5">
          <span>🛵 Delivery disponível</span>
          <Sparkles className="w-3 h-3 text-[#FF4D6D]" />
        </span>
      </div>
    </header>
  );
};
