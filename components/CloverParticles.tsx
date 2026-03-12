import React, { useEffect, useRef } from 'react';

const CloverParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let clovers: Clover[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      glowColor: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5 + 0.2;
        this.speedX = (Math.random() - 0.5) * 1.5; // High Speed Gold Burst
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.opacity = Math.random() * 0.6;
        
        const isDark = Math.random() > 0.7;
        if (isDark) {
          this.color = `rgba(139, 101, 8, ${this.opacity})`; 
          this.glowColor = 'rgba(101, 67, 33, 0.1)';
        } else {
          this.color = `rgba(255, 215, 0, ${this.opacity})`; 
          this.glowColor = 'rgba(255, 215, 0, 0.3)';
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class Clover {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      color: string;
      isHero: boolean;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.isHero = Math.random() > 0.85;
        this.size = this.isHero ? (Math.random() * 25 + 35) : (Math.random() * 10 + 8);
        this.speedY = this.isHero ? (Math.random() * 1.5 + 0.8) : (Math.random() * 0.8 + 0.4);
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.06;
        this.opacity = this.isHero ? (Math.random() * 0.2 + 0.15) : (Math.random() * 0.1 + 0.05);
        
        if (this.isHero) {
          this.color = '#4ade80'; // Luminous Lighter Green
        } else {
          const isDark = Math.random() > 0.5;
          this.color = isDark ? '#064e3b' : '#17cf17'; // Deep Moss or Primary
        }
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y < -this.size * 2) {
          this.y = canvas!.height + this.size * 2;
          this.x = Math.random() * canvas!.width;
        }
        if (this.x < -this.size * 2) this.x = canvas!.width + this.size * 2;
        if (this.x > canvas!.width + this.size * 2) this.x = -this.size * 2;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        if (this.isHero) {
          ctx.shadowBlur = 25;
          ctx.shadowColor = this.color;
        }
        for (let i = 0; i < 4; i++) {
          ctx.rotate(Math.PI / 2);
          ctx.beginPath();
          ctx.arc(0, -this.size / 2.5, this.size / 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(this.size/4, this.size/2, 0, this.size);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size / 10;
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      particles = [];
      clovers = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 7000);
      const cloverCount = 35;
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
      for (let i = 0; i < cloverCount; i++) clovers.push(new Clover());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      clovers.forEach(c => { c.update(); c.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => { resize(); init(); });
    resize(); init(); animate();
    return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[15]" />;
};

export default CloverParticles;
