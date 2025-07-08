function CoreValueCard({ icon, title, description }) {
  return (
    <div
      className="flex flex-col items-center rounded-2xl shadow-2xl p-6 w-full transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105 relative group"
      style={{
        boxShadow:
          '0 2px 12px 0 rgba(30,58,138,0.18), 0 1px 8px 0 rgba(136,19,55,0.13), 0 1px 6px 0 rgba(202,138,4,0.10), 0 1px 4px 0 rgba(6,78,59,0.10), inset 0 2px 16px 0 rgba(255,255,255,0.13), inset 0 0 12px 2px rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.07)',
        background: 'rgba(17,24,39,0.85)', // Tailwind bg-gray-900 with opacity
        border: '1.5px solid rgba(255,255,255,0.35)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        boxSizing: 'border-box',
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0"
        style={{
          boxShadow:
            '0 0 24px 8px rgba(236,72,153,0.28), 0 0 32px 12px rgba(59,130,246,0.28), 0 0 40px 16px rgba(139,92,246,0.28)',
        }}
      />
      <div className="text-4xl mb-2 z-10">{icon}</div>
      <h3 className="text-lg font-semibold text-blue-400 mb-2 z-10">{title}</h3>
      <p className="text-gray-200 text-center z-10">{description}</p>
    </div>
  );
}

export default CoreValueCard;
