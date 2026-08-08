import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewSubmitted: React.FC = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const colors = ['#b52330', '#16A34A', '#FFC107', '#ffab69'];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      gravity: number;
      life: number;
      decay: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        if (!canvas) throw new Error("Canvas is null");
        this.x = canvas.width / 2;
        this.y = canvas.height / 3;
        this.vx = (Math.random() - 0.5) * 15;
        this.vy = (Math.random() - 1) * 15;
        this.size = Math.random() * 8 + 4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.gravity = 0.5;
        this.life = 1;
        this.decay = Math.random() * 0.01 + 0.005;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 10;
      }
      update() {
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.rotation += this.rotationSpeed;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
      }
    }

    for(let i=0; i<50; i++) {
        particles.push(new Particle());
    }

    let animationId: number;

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
          p.update();
          p.draw(ctx);
          if(p.life <= 0) particles.splice(index, 1);
      });
      if(particles.length > 0) {
        animationId = requestAnimationFrame(animate);
      }
    }

    animate();
    
    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center p-margin-mobile md:p-margin-desktop overflow-hidden relative">
      <style>{`
        @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            70% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes floatUpDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-pop-in {
            animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-float {
            animation: floatUpDown 3s ease-in-out infinite;
        }
        .btn-tactile {
            transition: all 0.1s ease;
            box-shadow: 0 4px 0 var(--tw-shadow-color);
            position: relative;
            top: 0;
        }
        .btn-tactile:active {
            box-shadow: 0 0px 0 var(--tw-shadow-color);
            top: 4px;
        }
      `}</style>

      {/* Confetti Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
      
      {/* Main Content Container */}
      <main className="w-full max-w-[400px] z-10 flex flex-col items-center animate-pop-in">
        {/* Celebration Icon */}
        <div className="relative w-32 h-32 mb-stack-lg flex items-center justify-center animate-float">
          <div className="absolute inset-0 bg-status-open/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div className="absolute inset-4 bg-status-open/40 rounded-full"></div>
          <div className="relative z-10 w-24 h-24 bg-status-open text-surface-white rounded-full flex items-center justify-center shadow-lg shadow-status-open/30">
            <span className="material-symbols-outlined text-[64px]" style={{ fontSize: '64px', fontVariationSettings: "'FILL' 1" }}>check</span>
          </div>
          <span className="material-symbols-outlined text-streak-gold absolute top-0 -left-4 rotate-[-15deg] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="material-symbols-outlined text-primary absolute bottom-4 -right-2 rotate-[15deg] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
        </div>

        {/* Headers */}
        <div className="text-center mb-stack-lg flex flex-col gap-stack-sm">
          <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero text-primary tracking-tight">Review Posted!</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant flex flex-wrap items-center justify-center gap-2">
            <span className="text-streak-gold font-bold bg-streak-gold/10 px-2 py-0.5 rounded-md flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>social_leaderboard</span>
              +25 XP
            </span>
            earned. Your feedback helps the community.
          </p>
        </div>

        {/* Gamification Reward Card */}
        <div className="w-full bg-surface-white border border-subtle-gray rounded-xl p-margin-mobile shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-stack-lg flex flex-col gap-stack-md relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary-container/20 rounded-full blur-2xl group-hover:bg-secondary-container/30 transition-colors"></div>
          <div className="flex items-start gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            </div>
            <div>
              <h3 className="font-label-strong text-label-strong text-on-background mb-1">Food Critic Badge</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Write 5 more reviews this month to earn the "Food Critic" badge.</p>
            </div>
          </div>
          <div className="flex gap-1 h-3 w-full mt-2 relative z-10">
            <div className="h-full flex-1 bg-streak-gold rounded-l-sm rounded-r-sm"></div>
            <div className="h-full flex-1 bg-surface-variant rounded-sm"></div>
            <div className="h-full flex-1 bg-surface-variant rounded-sm"></div>
            <div className="h-full flex-1 bg-surface-variant rounded-sm"></div>
            <div className="h-full flex-1 bg-surface-variant rounded-sm"></div>
            <div className="h-full flex-1 bg-surface-variant rounded-l-sm rounded-r-sm"></div>
          </div>
          <div className="text-right w-full flex justify-end">
            <span className="font-caption text-caption text-on-surface-variant font-bold">1 / 6</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-stack-md">
          <button 
            onClick={() => navigate('/spin')}
            className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-strong text-label-strong flex items-center justify-center gap-2 btn-tactile" 
            style={{ '--tw-shadow-color': '#61000e' } as any}
          >
            <span className="material-symbols-outlined">restaurant</span>
            Back to Restaurant
          </button>
          <button className="w-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors py-3 rounded-xl font-label-strong text-label-strong border border-subtle-gray flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">visibility</span>
            View Review
          </button>
          <button 
            onClick={() => navigate('/')}
            className="w-full text-on-surface-variant hover:text-primary transition-colors py-2 mt-2 font-label-strong text-label-strong"
          >
            Go Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default ReviewSubmitted;
