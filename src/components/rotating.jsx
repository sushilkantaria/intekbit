import React, { useEffect, useRef } from 'react';

const iconList = [
  '/Assets/rotatingicons/react.png',
  '/Assets/rotatingicons/vue.png',
  '/Assets/rotatingicons/angular.png',
  '/Assets/rotatingicons/php.png',
  '/Assets/rotatingicons/django.png',
  '/Assets/rotatingicons/nodejs.png',
  '/Assets/rotatingicons/html.png',
  '/Assets/rotatingicons/shopify.png',
];

const RotatingIcons = () => {
  // Inline orbit animation CSS
  const orbitKeyframes = `@keyframes orbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .animate-orbit { animation: orbit 12s linear infinite; }`;
  const iconRefs = useRef([]);
  // Fine-tuned to match the dotted line in bg.png
  const center = 150;
  const radius = 130; // Increased radius for a bigger round

  useEffect(() => {
    let angle = 0;
    const total = iconList.length;
    let lastTimestamp = null;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Adjust speed: ultra-high smooth animation (480fps)
      angle += 0.001 * (delta / 2.08); // 2.08ms ~ 480fps

      iconRefs.current.forEach((el, i) => {
        const slice = (2 * Math.PI) / total;
        const iconAngle = angle + slice * i;
        const x = center + radius * Math.cos(iconAngle);
        const y = center + radius * Math.sin(iconAngle);
        if (el) {
          el.style.left = `${x - el.offsetWidth / 2}px`;
          el.style.top = `${y - el.offsetHeight / 2}px`;
          el.style.transform = 'rotate(0deg)';
        }
      });
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <style>{orbitKeyframes}</style>
      <div className="relative mx-auto my-10 h-100 w-100">
        {/* Background Image */}
        <div
          className="w-100 h-100"
          style={{
            backgroundImage: 'url(Assets/rotatingicons/bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        {/* Rotating Icons */}
        <div className="absolute top-19 left-13.5 w-100 h-100">
          {iconList.map((icon, i) => (
            <img
              key={i}
              src={icon}
              alt={`icon-${i}`}
              ref={(el) => (iconRefs.current[i] = el)}
              className="h-50 w-50 absolute rounded-full"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RotatingIcons;
