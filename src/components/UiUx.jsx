import React from 'react';

export default function UiUx() {
  return (
    <div className="justify-center items-center min-h-screen">
      <img
        src="/Assets/ui-ux-assets/main bg.png"
        alt="Main BG"
        className="w-full block"
      />

      {/* Animated Border for UX */}
      <div className="absolute top-12 left-7 h-26 w-26 overflow-hidden">
        <span className="absolute top-0 left-0 w-full h-full border-2 border-[#00aaff] rounded-lg box-border animate-draw-border pointer-events-none" />
        <img
          src="/Assets/ui-ux-assets/ux audit.png"
          alt="UX Audit"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Animated Border for UI */}
      <div className="absolute bottom-31 left-7 h-26 w-26 overflow-hidden">
        <span className="absolute top-0 left-0 w-full h-full border-2 border-[#00aaff] rounded-lg box-border animate-draw-border pointer-events-none" />
        <img
          src="/Assets/ui-ux-assets/ui concept.png"
          alt="UI Concept"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Pulsing Stack */}
      <div className="absolute bottom-30 right-12 flex flex-col gap-2 animate-pulse-stack">
        {[...Array(3)].map((_, i) => (
          <img
            key={i}
            src="/Assets/ui-ux-assets/three cards of right side.png"
            alt="Stacked"
            className="w-[100px] rounded-xl"
          />
        ))}
      </div>

      {/* Tailwind custom animations */}
      <style>{`
        @keyframes draw-border {
          0% { clip-path: inset(0 100% 100% 0); }
          25% { clip-path: inset(0 0 100% 0); }
          50% { clip-path: inset(0 0 0 0); }
          75% { clip-path: inset(100% 0 0 0); }
          100% { clip-path: inset(0 100% 100% 0); }
        }
        .animate-draw-border {
          animation: draw-border 2s linear infinite;
        }
        @keyframes pulse-stack {
          0%, 100% { transform: scale(0.85); }
          50% { transform: scale(0.95); }
        }
        .animate-pulse-stack {
          animation: pulse-stack 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
