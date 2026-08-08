import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeasonGarden: React.FC = () => {
  const navigate = useNavigate();
  const totalSpots = 30;
  const currentProgress = 18;

  const [gardenItems, setGardenItems] = useState<{ icon: string; color: string; isFilled: number; delay: string }[]>([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < totalSpots; i++) {
      let iconName = 'psychiatry'; // default dirt/empty
      let iconColor = 'text-surface-variant';
      let isFilled = 0;

      if (i < currentProgress) {
        if (i < 6) { iconName = 'potted_plant'; iconColor = 'text-primary'; isFilled = 1; }
        else if (i < 12) { iconName = 'local_florist'; iconColor = 'text-tertiary-container'; isFilled = 1; }
        else if (i < 18) { iconName = 'grass'; iconColor = 'text-tertiary-container'; isFilled = 1; }
      } else {
        iconName = 'radio_button_unchecked'; // empty spot
      }

      items.push({ icon: iconName, color: iconColor, isFilled, delay: `${i * 0.03}s` });
    }
    setGardenItems(items);
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md overflow-x-hidden pb-24">
      <style>{`
        .progress-segment {
            transition: all 0.5s ease-out;
        }
        .garden-item {
            animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            opacity: 0;
            transform: scale(0.8);
        }
        @keyframes popIn {
            to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* TopAppBar */}
      <header className="bg-background dark:bg-background text-primary dark:text-primary-fixed-dim w-full top-0 sticky z-40 flex justify-between items-center px-margin-mobile py-base max-w-7xl mx-auto pt-safe">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors active:scale-95 text-on-surface-variant">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
        </button>
        <h1 className="font-headline-md text-headline-md-mobile text-primary font-bold tracking-tight">My Foodie Garden</h1>
        <div className="w-10 h-10"></div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-margin-mobile flex flex-col gap-stack-lg mt-4">
        
        {/* Progress Section */}
        <section className="bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray p-4 flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-headline-md text-headline-md-mobile text-on-surface">18/30 Seeds Planted</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Next Harvest: 12 more check-ins</p>
            </div>
            <div className="text-right">
              <span className="font-label-strong text-label-strong text-tertiary-container">60%</span>
            </div>
          </div>
          
          {/* Segmented Progress Bar */}
          <div className="w-full h-4 flex gap-1 rounded-full overflow-hidden bg-surface-container">
            <div className="h-full w-1/5 bg-tertiary-container progress-segment"></div>
            <div className="h-full w-1/5 bg-tertiary-container progress-segment"></div>
            <div className="h-full w-1/5 bg-tertiary-container progress-segment"></div>
            <div className="h-full w-1/5 bg-surface-variant progress-segment"></div>
            <div className="h-full w-1/5 bg-surface-variant progress-segment"></div>
          </div>
          <p className="font-caption text-caption text-on-surface-variant text-right">Est. Harvest: Oct 15</p>
        </section>

        {/* Streak Bonus Callout */}
        <section className="bg-surface-container-low rounded-xl border border-streak-gold p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-streak-gold/20 flex items-center justify-center text-streak-gold flex-shrink-0">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
          </div>
          <div>
            <h3 className="font-label-strong text-label-strong text-on-surface">Weekly Streak Bonus Active!</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Complete this week for <span className="text-primary font-semibold">+20% seeds</span></p>
          </div>
        </section>

        {/* The Garden Visualization */}
        <section className="flex flex-col gap-stack-md">
          <h2 className="font-headline-md text-headline-md-mobile text-on-surface">Your Garden</h2>
          <div className="bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray p-4">
            <div className="grid grid-cols-5 gap-2">
              {gardenItems.map((item, index) => (
                <div key={index} className="garden-item aspect-square rounded-lg bg-surface-container-low flex items-center justify-center border border-surface-variant/30" style={{ animationDelay: item.delay }}>
                  <span className={`material-symbols-outlined ${item.color}`} style={{ fontVariationSettings: `'FILL' ${item.isFilled}` }}>{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Harvest Rewards */}
        <section className="flex flex-col gap-stack-md">
          <h2 className="font-headline-md text-headline-md-mobile text-on-surface">Upcoming Harvest Rewards</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            {/* Reward Card 1 */}
            <div className="snap-start flex-shrink-0 w-64 bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray overflow-hidden">
              <div className="h-32 bg-primary-container/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5fRTmleQhGbRHweGFMooEqMzN94ibs-Lz0KF9KacqwXaSUP4tTvNq9bcrNLw-n1paCgYZJhTE6BjvxY4C7Fsy7rmWfLrkV-Vllg7vOXclwbe8rCEIdin2oJ9EyH7dMs-SBoT3yjThIsncqVqfuj1VrZyIiYKT2m_1R0VrmXa5mk6ywvPmtNqYxNHepNAHxiLYJfZGpE-UOqC4mip283CiiFo173ZbMuI1EWhL4i-0-BnWM3O17H6XLg')" }}></div>
                <span className="material-symbols-outlined text-[48px] text-primary relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-label-strong text-label-strong text-on-surface">15% Off Voucher</h3>
                <p className="font-caption text-caption text-on-surface-variant">Valid at selected partner restaurants.</p>
              </div>
            </div>
            
            {/* Reward Card 2 */}
            <div className="snap-start flex-shrink-0 w-64 bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray overflow-hidden">
              <div className="h-32 bg-tertiary-container/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCa1Z1oXN8XQwnPCTX4pEUSikXkPDbwu1C9iUAwjzwEqe3-Wi1aGRLsMJ9qWftRyGgkRoRfbLikKZYzQFaGEI5MUPycNPL5nn4dcQ_BTz9j__nsqFrz6TIgd6PJTKv1Tul01jVTNPamW1vJkhfZNuNHNPetlaT8NAYfY_HoGZ6SBOEINmoD0Q3oIrNkNzAlXDSMSDqsC-OG3dP-5_8PK_H6cNU7BlkHCWlFPOBYkObw2One3qFzxWh6cQ')" }}></div>
                <span className="material-symbols-outlined text-[48px] text-tertiary-container relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>redeem</span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-label-strong text-label-strong text-on-surface">Mystery Box</h3>
                <p className="font-caption text-caption text-on-surface-variant">Contains random high-value perks.</p>
              </div>
            </div>

            {/* Reward Card 3 */}
            <div className="snap-start flex-shrink-0 w-64 bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray overflow-hidden">
              <div className="h-32 bg-secondary-container/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAq1i2RByVzmBuAVEvgrSwOiAJjqwDVn7FsaaZBIZGhas9Vqm5ikge3qsaFpkei18bkwm5tLLfC7Bp0kMUQvWED9z1KbMmvSGjnF_8EnJkZJAuQYL0h1kCvpBhKkSM3t4fYAv3zvLBdLO-dFslcDjSh53qjJRMq6m41GNmrQdcqAe-rIGt7jbM0_gquc_vsNs_U2gfraSiLwTD9bctt7e_1qiUlF18L0vQsXDDn4aVkS1tteRx6dYf-rg')" }}></div>
                <span className="material-symbols-outlined text-[48px] text-secondary-container relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-label-strong text-label-strong text-on-surface">Send Flowers</h3>
                <p className="font-caption text-caption text-on-surface-variant">Gift a virtual bouquet to a friend.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SeasonGarden;
