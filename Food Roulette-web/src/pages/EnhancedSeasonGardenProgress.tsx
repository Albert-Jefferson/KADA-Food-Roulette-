import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnhancedSeasonGardenProgress: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md pb-24 md:pb-0">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-surface dark:bg-surface-dim shadow-sm z-50">
        <div className="flex items-center justify-between px-margin-mobile py-4 w-full md:max-w-[1200px] md:mx-auto">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>energy_savings_leaf</span>
            <h1 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim font-bold">Food Roulette</h1>
          </div>
          <button className="md:hidden">
            <span className="material-symbols-outlined text-on-surface">menu</span>
          </button>
        </div>
      </header>

      <main className="w-full md:max-w-[1200px] md:mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-stack-sm pt-4">
          <h2 className="font-display-hero text-headline-lg-mobile md:text-display-hero text-on-background">My Foodie Garden</h2>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-md">Grow your garden by exploring new restaurants and completing food challenges.</p>
        </div>

        {/* Progress Section */}
        <div className="bg-surface-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray flex flex-col gap-6 relative overflow-hidden">
          <div className="flex justify-between items-end relative z-10">
            <div className="flex flex-col">
              <span className="font-label-strong text-label-strong text-on-surface-variant uppercase tracking-wider">Path to Grand Harvest</span>
              <span className="font-headline-md text-headline-md text-primary">18 / 30 Days Bloomed</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-label-strong text-label-strong text-tertiary flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">eco</span> 60% Grown
              </span>
              <span className="text-caption text-on-surface-variant">12 more to Grand Harvest</span>
            </div>
          </div>
          <div className="relative h-6 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:10px_10px]"></div>
            <div className="h-full bg-gradient-to-r from-tertiary-container to-primary transition-all duration-1000 ease-out w-[60%] rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] flex items-center justify-end px-2">
              <span className="material-symbols-outlined text-white text-sm animate-pulse">sparkles</span>
            </div>
          </div>
          <div className="flex justify-between px-1">
            <span className="text-caption text-on-surface-variant">Seedling</span>
            <span className="text-caption text-primary font-bold">Grand Harvest</span>
          </div>
        </div>

        {/* Visual Garden Area */}
        <div className="bg-surface-container rounded-xl p-6 md:p-8 flex flex-col gap-6" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}>
          <div className="flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md text-on-background">Your Daily Garden</h3>
            <div className="flex items-center gap-2 bg-surface-white px-3 py-1 rounded-full border border-outline-variant shadow-sm">
              <span className="material-symbols-outlined text-primary text-sm">workspace_premium</span>
              <span className="text-caption font-bold">Master Gardener Level 4</span>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6">
            <div className="flex flex-col items-center gap-2 group">
              <div className="aspect-square w-full bg-surface-white rounded-2xl border border-subtle-gray flex items-center justify-center shadow-sm relative overflow-hidden transition-transform group-hover:scale-105">
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-tertiary/10 to-transparent"></div>
                <span className="material-symbols-outlined text-5xl text-primary z-10" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
              </div>
              <span className="text-caption font-bold">Rose</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="aspect-square w-full bg-surface-white rounded-2xl border border-subtle-gray flex items-center justify-center shadow-sm relative overflow-hidden transition-transform group-hover:scale-105">
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-tertiary/10 to-transparent"></div>
                <span className="material-symbols-outlined text-5xl text-streak-gold z-10" style={{ fontVariationSettings: "'FILL' 1" }}>sunflower</span>
              </div>
              <span className="text-caption font-bold">Sunflower</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="aspect-square w-full bg-surface-white rounded-2xl border border-subtle-gray flex items-center justify-center shadow-sm relative overflow-hidden transition-transform group-hover:scale-105">
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-tertiary/10 to-transparent"></div>
                <span className="material-symbols-outlined text-5xl text-tertiary z-10" style={{ fontVariationSettings: "'FILL' 1" }}>potted_plant</span>
              </div>
              <span className="text-caption font-bold">Succulent</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="aspect-square w-full bg-surface-white rounded-2xl border border-subtle-gray flex items-center justify-center shadow-sm relative overflow-hidden transition-transform group-hover:scale-105">
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-tertiary/10 to-transparent"></div>
                <span className="material-symbols-outlined text-5xl text-tertiary-container z-10" style={{ fontVariationSettings: "'FILL' 1" }}>psychiatry</span>
              </div>
              <span className="text-caption font-bold">Lavender</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="aspect-square w-full bg-surface-container-high rounded-2xl border-2 border-dashed border-outline-variant flex items-center justify-center hover:bg-surface-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-outline-variant text-3xl">add_circle</span>
              </div>
              <span className="text-caption text-on-surface-variant">Next Plot</span>
            </div>
          </div>
          <div className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-surface-white border border-primary/20 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary">rewarded_ads</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-label-strong text-on-surface">Grand Harvest Preview</h4>
              <p className="text-caption text-on-surface-variant">Reach 30 seeds to unlock the <strong>Golden Master Pot</strong> and a permanent garden boost!</p>
            </div>
          </div>
        </div>

        {/* Milestone Tracker */}
        <div className="flex flex-col gap-3 overflow-hidden">
          <h3 className="font-headline-md text-headline-md text-on-background px-1">Growth Stages</h3>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 px-1 snap-x">
            <div className="snap-start flex flex-col items-center gap-2 min-w-[80px] opacity-50">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">radio_button_unchecked</span>
              </div>
              <span className="font-caption text-caption text-on-surface-variant">Seed</span>
            </div>
            <div className="snap-start flex flex-col items-center gap-2 min-w-[80px] opacity-50">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary-container">psychiatry</span>
              </div>
              <span className="font-caption text-caption text-on-surface-variant">Sprout</span>
            </div>
            <div className="snap-start flex flex-col items-center gap-2 min-w-[80px]">
              <div className="w-14 h-14 rounded-full bg-primary-container shadow-[0_0_15px_rgba(255,90,95,0.4)] flex items-center justify-center ring-4 ring-primary-fixed">
                <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>energy_savings_leaf</span>
              </div>
              <span className="font-label-strong text-label-strong text-primary">Leaf</span>
            </div>
            <div className="snap-start flex flex-col items-center gap-2 min-w-[80px] opacity-50 grayscale">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border border-dashed border-outline-variant">
                <span className="material-symbols-outlined text-on-surface-variant">potted_plant</span>
              </div>
              <span className="font-caption text-caption text-on-surface-variant">Bush</span>
            </div>
            <div className="snap-start flex flex-col items-center gap-2 min-w-[80px] opacity-50 grayscale">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border border-dashed border-outline-variant">
                <span className="material-symbols-outlined text-on-surface-variant">park</span>
              </div>
              <span className="font-caption text-caption text-on-surface-variant">Tree</span>
            </div>
          </div>
        </div>

        {/* Streak Bonus */}
        <div className="bg-gradient-to-br from-secondary-fixed to-primary-fixed rounded-xl p-5 flex items-center gap-4 border border-secondary-fixed-dim shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-20">
            <span className="material-symbols-outlined text-4xl">auto_awesome</span>
          </div>
          <div className="bg-surface-white rounded-full p-3 shadow-lg ring-4 ring-white/50">
            <span className="material-symbols-outlined text-streak-gold text-3xl animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>magic_button</span>
          </div>
          <div className="flex flex-col gap-1 relative z-10">
            <h4 className="font-label-strong text-headline-md text-on-secondary-fixed-variant flex items-center gap-2">
              Magical Growth Active!
            </h4>
            <p className="font-body-md text-body-md text-on-secondary-fixed">Your garden is enchanted! Complete this week's streak for a <span className="font-bold text-primary">+20% Seed Surge</span>.</p>
          </div>
        </div>

        {/* Rewards Preview */}
        <div className="flex flex-col gap-6">
          <h3 className="font-headline-md text-headline-md text-on-background flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">card_giftcard</span>
            Harvest Rewards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-surface-white border border-subtle-gray rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
              </div>
              <div>
                <h4 className="font-label-strong text-on-surface text-lg">Gourmet Voucher</h4>
                <p className="font-caption text-on-surface-variant mt-1">A 15% discount on your next restaurant discovery. <span className="text-primary font-bold">Unlock at 30 seeds.</span></p>
              </div>
            </div>
            <div className="bg-surface-white border border-subtle-gray rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center group-hover:bg-tertiary transition-colors">
                <span className="material-symbols-outlined text-tertiary group-hover:text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
              </div>
              <div>
                <h4 className="font-label-strong text-on-surface text-lg">Epic Mystery Box</h4>
                <p className="font-caption text-on-surface-variant mt-1">Contains rare seeds and exclusive garden decor. <span className="text-tertiary font-bold">Unlock at 50 seeds.</span></p>
              </div>
            </div>
            <div className="bg-surface-white border border-subtle-gray rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
              </div>
              <div>
                <h4 className="font-label-strong text-on-surface text-lg">Send Real Flowers</h4>
                <p className="font-caption text-on-surface-variant mt-1">Surprise a friend with a real bouquet delivered to them! <span className="text-secondary font-bold">Unlock at 100 seeds.</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-4">
          <button onClick={() => navigate('/streak')} className="px-6 py-3 rounded-full bg-surface-white border border-primary text-primary font-label-strong text-label-strong hover:bg-primary-fixed transition-colors shadow-sm flex items-center gap-2 active:scale-95 duration-200">
            <span>View Streak Dashboard</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default EnhancedSeasonGardenProgress;
