import React, { useState, useEffect } from 'react';
import { X, Check, Copy, Share2 } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Watermelon | Salada de Frutas e Sorveteria',
          text: 'Frescor, fruta e sorvete que refrescam seu dia 🍉🍨 Peça pelo iFood, 99 ou WhatsApp!',
          url: currentUrl || window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopy();
    }
  };

  // Generate a public QR Code image via Google Charts API or quick SVG
  // Encoded URL:
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&color=2D1217&bgcolor=FFFFFF&data=${encodeURIComponent(
    currentUrl || 'https://ais-dev-gmv5dwud4g7qjvgu4ztxti-775482141295.us-east1.run.app'
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-[#FFCCD5] text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela de compartilhamento"
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF4D6D] to-[#FFA5BA] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
          <span className="text-2xl">🍉</span>
        </div>
        <h3 id="share-modal-title" className="font-display font-bold text-xl text-[#2D1217]">
          Compartilhe a Watermelon
        </h3>
        <p className="text-xs text-[#6A4E53] mt-1 mb-4">
          Aponte a câmera para escanear ou copie o link para enviar para amigos!
        </p>

        {/* QR Code Frame */}
        <div className="p-3 bg-[#FFF8F3] rounded-2xl border border-[#FFCCD5] inline-block shadow-inner mb-4">
          <img
            src={qrApiUrl}
            alt="QR Code do biosite Watermelon"
            className="w-44 h-44 rounded-xl mx-auto object-contain bg-white p-1"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF4D6D] to-[#E01E5A] text-white shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Link Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-white" />
                <span>Copiar Link do Site</span>
              </>
            )}
          </button>

          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm bg-[#FFF0F3] text-[#FF4D6D] hover:bg-[#FFE3E8] active:scale-95 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#FF4D6D]" />
              <span>Compartilhar via Celular</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
