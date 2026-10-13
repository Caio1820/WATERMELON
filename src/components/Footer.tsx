import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-xl mx-auto px-4 pt-6 pb-20 text-center text-xs text-[#7A525A] flex flex-col items-center gap-1.5 border-t border-[#FFCCD5]/40 mt-6">
      <div className="flex items-center justify-center gap-1.5 font-medium">
        <span>© {currentYear} Watermelon</span>
        <span aria-hidden="true">·</span>
        <span>Salada de Frutas e Sorveteria</span>
      </div>

      <div className="text-[11px] text-[#9A7078] flex items-center gap-1">
        <span>Site criado por</span>
        <a
          href="https://www.instagram.com/tapzoomm"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#FF4D6D] hover:underline"
          aria-label="Instagram do criador @tapzoomm"
        >
          @tapzoomm
        </a>
      </div>
    </footer>
  );
};
