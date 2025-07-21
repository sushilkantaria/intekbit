import React, { useRef, useEffect } from 'react';
import './particle-bg.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = [];
    const numParticles = Math.floor((width * height) / 6000);
    const maxDistance = 120;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: 2 + Math.random() * 2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.save();
            ctx.globalAlpha = 1 - dist / maxDistance;
            ctx.strokeStyle = '#a21caf';
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = '#2563eb';
        ctx.beginPath();
        ctx.arc(
          particles[i].x,
          particles[i].y,
          particles[i].radius,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      }
    }

    function update() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;
        if (particles[i].x < 0 || particles[i].x > width) particles[i].vx *= -1;
        if (particles[i].y < 0 || particles[i].y > height)
          particles[i].vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      requestAnimationFrame(animate);
    }
    animate();

    // Handle resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-bg-canvas" />;
};

export default ParticleBackground;
