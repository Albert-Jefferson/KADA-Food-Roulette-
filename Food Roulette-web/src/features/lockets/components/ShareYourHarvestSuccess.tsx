import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShareYourHarvestSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col items-center justify-center p-4">
      <style>{`
        .material-symbols-outlined[data-weight="fill"] {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .squishy-btn {
            border-bottom: 3px solid rgba(0,0,0,0.2);
            transition: transform 0.1s, border-bottom 0.1s;
        }
        .squishy-btn:active {
            transform: translateY(2px);
            border-bottom: 1px solid rgba(0,0,0,0.2);
        }
      `}</style>

      {/* Top App Bar (Hidden on this screen) */}
      <header className="hidden w-full top-0 sticky bg-surface dark:bg-surface-dim shadow-sm flex items-center justify-between px-margin-mobile py-4 z-50">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors active:scale-95 duration-200" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">close</span>
          </button>
          <h1 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim">Share Harvest</h1>
        </div>
      </header>

      <main className="w-full max-w-md mx-auto flex flex-col items-center gap-stack-lg animate-[fadeIn_0.5s_ease-out]">
        {/* Header Text */}
        <div className="text-center space-y-stack-sm w-full">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg text-primary">Incredible!</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">You've mastered the garden. Show it off to the world.</p>
        </div>

        {/* The Share Card */}
        <div className="relative w-full aspect-[4/5] bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,0.1)] border border-subtle-gray transform transition-transform hover:scale-[1.02] duration-300">
          <div className="absolute inset-0 bg-cover bg-center z-0 opacity-90" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzPZhm_ugbWoR86wHJrtAjk4U_HHW6RVv4H9q8Znt83m87NC6CZRj_6iHbC81OjgW3c7APT8jf-vQJl6P5M7HXamnSpQe2-ByKXqF6olFaba4j1kVu6PFhKGzWb6StZr2BQz-lOzF2i3w7pKFO3FqsTbQecqYDe5nqf6df5ODLYuk1hPBm3HGCAg5ha2r1o3alwCoU4nUeb4aAl8LeQ9T4ARncjje3iF5Eghb9NE7v_Ygf-tocMH-aIQ')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
          
          <div className="relative z-20 h-full flex flex-col justify-between p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 bg-surface-container/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-subtle-gray/50">
                <span className="material-symbols-outlined text-primary" data-weight="fill">restaurant</span>
                <span className="font-label-strong text-label-strong text-on-surface">Food Roulette</span>
              </div>
              <div className="flex flex-col items-end">
                <div className="bg-primary/90 backdrop-blur-sm text-on-primary font-label-strong text-label-strong px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]" data-weight="fill">local_fire_department</span>
                  7 Day Streak
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-center"></div>

            <div className="space-y-4 text-on-secondary">
              <div>
                <h3 className="font-display-hero text-display-hero drop-shadow-md text-surface-white">Master Harvest</h3>
                <p className="font-body-lg text-body-lg text-surface-white/90 drop-shadow-sm">Completed by Alex</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-container-highest/80 backdrop-blur-md p-3 rounded-lg border border-surface-white/20">
                  <div className="font-caption text-caption text-on-surface uppercase tracking-wider mb-1">Garden Progress</div>
                  <div className="font-headline-md text-headline-md text-primary flex items-end gap-1">
                    30<span className="font-body-md text-body-md text-on-surface-variant pb-1">/30</span>
                  </div>
                  <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-primary h-full w-full rounded-full"></div>
                  </div>
                </div>
                <div className="bg-surface-container-highest/80 backdrop-blur-md p-3 rounded-lg border border-surface-white/20 flex flex-col justify-between">
                  <div className="font-caption text-caption text-on-surface uppercase tracking-wider mb-1">Reward Won</div>
                  <div className="font-label-strong text-label-strong text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-streak-gold" data-weight="fill">redeem</span>
                    Mystery Box
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-stack-md mt-4">
          <button className="w-full bg-primary text-on-primary font-label-strong text-label-strong py-4 rounded-xl squishy-btn flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">download</span>
            Lưu ảnh
          </button>
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-surface-white border border-subtle-gray text-on-surface font-caption text-caption py-3 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-surface-container-low transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[#1877F2]" data-weight="fill">thumb_up</span>
              Facebook
            </button>
            <button className="bg-surface-white border border-subtle-gray text-on-surface font-caption text-caption py-3 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-surface-container-low transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[#0068FF]" data-weight="fill">chat</span>
              Zalo
            </button>
            <button className="bg-surface-white border border-subtle-gray text-on-surface font-caption text-caption py-3 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-surface-container-low transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[#E1306C]" data-weight="fill">photo_camera</span>
              IG Story
            </button>
          </div>
          <button className="w-full text-center text-on-surface-variant font-body-md text-body-md py-2 hover:text-primary transition-colors mt-2" onClick={() => navigate('/')}>
            Maybe later
          </button>
        </div>
      </main>
    </div>
  );
};

export default ShareYourHarvestSuccess;
