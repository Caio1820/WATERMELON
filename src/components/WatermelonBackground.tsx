import React from 'react';

export const WatermelonBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Soft atmospheric gradient backdrops */}
      <div className="absolute top-[-10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#FF4D6D]/15 to-[#FFA5BA]/5 blur-3xl" />
      <div className="absolute top-[40%] right-[-20%] w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[#2E9E5B]/10 to-[#B7E4C7]/15 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FF758F]/10 to-[#D8F3DC]/15 blur-3xl" />

      {/* Floating Watermelon Slice 1 (Top Left) */}
      <div className="absolute top-12 left-3 md:left-24 animate-float opacity-75 md:opacity-90">
        <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Watermelon wedge path */}
          <path
            d="M10 20C10 20 40 10 65 35C90 60 80 90 80 90C80 90 50 85 28 63C6 41 10 20 10 20Z"
            fill="#2E9E5B"
          />
          <path
            d="M14 24C14 24 38 16 59 37C80 58 72 82 72 82C72 82 48 76 30 58C12 40 14 24 14 24Z"
            fill="#D8F3DC"
          />
          <path
            d="M18 28C18 28 36 22 53 39C70 56 64 74 64 74C64 74 44 68 28 52C14 38 18 28 18 28Z"
            fill="#FF4D6D"
          />
          {/* Seeds */}
          <ellipse cx="32" cy="42" rx="2" ry="3.5" transform="rotate(-30 32 42)" fill="#3B1217" />
          <ellipse cx="45" cy="48" rx="2" ry="3.5" transform="rotate(-40 45 48)" fill="#3B1217" />
          <ellipse cx="40" cy="35" rx="2" ry="3.5" transform="rotate(-25 40 35)" fill="#3B1217" />
        </svg>
      </div>

      {/* Floating Watermelon Slice 2 (Mid Right) */}
      <div className="absolute top-[42%] right-2 md:right-28 animate-float-reverse opacity-70 md:opacity-85">
        <svg width="56" height="56" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M60 15C60 15 35 8 15 28C-5 48 2 72 2 72C2 72 26 68 44 50C62 32 60 15 60 15Z"
            fill="#2E9E5B"
          />
          <path
            d="M56 18C56 18 36 12 19 29C2 46 8 66 8 66C8 66 28 62 43 47C58 32 56 18 56 18Z"
            fill="#D8F3DC"
          />
          <path
            d="M52 21C52 21 35 16 21 30C7 44 12 60 12 60C12 60 29 56 41 44C53 32 52 21 52 21Z"
            fill="#FF4D6D"
          />
          <ellipse cx="32" cy="36" rx="1.8" ry="3" transform="rotate(25 32 36)" fill="#3B1217" />
          <ellipse cx="26" cy="44" rx="1.8" ry="3" transform="rotate(35 26 44)" fill="#3B1217" />
        </svg>
      </div>

      {/* Tropical Green Leaf SVG (Bottom Left) */}
      <div className="absolute bottom-28 left-4 md:left-20 animate-float opacity-65">
        <svg width="44" height="44" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 45C5 45 10 20 30 10C50 0 45 35 45 35C45 35 30 45 5 45Z"
            fill="#2E9E5B"
            fillOpacity="0.8"
          />
          <path
            d="M5 45C18 34 28 25 38 18"
            stroke="#B7E4C7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Fresh Drop / Bubble SVG (Top Right) */}
      <div className="absolute top-24 right-8 md:right-36 animate-float opacity-60">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#B7E4C7" fillOpacity="0.5" />
          <circle cx="9" cy="9" r="3" fill="#FFFFFF" fillOpacity="0.8" />
        </svg>
      </div>

      {/* Fresh Bubble SVG 2 (Near Center) */}
      <div className="absolute top-[68%] left-6 md:left-32 animate-float-reverse opacity-50">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" fill="#FFB3C1" fillOpacity="0.45" />
          <circle cx="7" cy="7" r="2.5" fill="#FFFFFF" fillOpacity="0.8" />
        </svg>
      </div>

      {/* Subtle organic pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#FF4D6D 1px, transparent 1px), radial-gradient(#2E9E5B 1px, #FFF8F3 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />
    </div>
  );
};
