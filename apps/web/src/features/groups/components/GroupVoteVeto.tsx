import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GroupVoteVeto: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(9 * 60 + 42);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-background text-on-background min-h-screen pb-safe antialiased flex flex-col">
      <style>{`
        .btn-pressable {
            transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-pressable:active {
            transform: translateY(2px);
            box-shadow: 0 0px 0 0 transparent;
        }
        .timer-pulse {
            animation: pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-border {
            0%, 100% { border-color: rgba(186, 26, 26, 0.2); }
            50% { border-color: rgba(186, 26, 26, 0.8); }
        }
      `}</style>
      
      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-background dark:bg-background z-40">
        <div className="flex justify-between items-center px-margin-mobile py-base w-full max-w-7xl mx-auto">
          <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-white border border-subtle-gray hover:bg-surface-container-low transition-colors btn-pressable shadow-[0_2px_0_0_#E5E7EB] active:shadow-none">
            <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md-mobile text-primary tracking-tight">Group Vote</h1>
          <div className="flex items-center gap-1 bg-surface-container-high px-3 py-1.5 rounded-full font-label-strong text-caption text-primary">
            <span>1,250</span>
            <span>🪙</span>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 px-margin-mobile pt-stack-sm pb-36 flex flex-col gap-stack-lg relative z-10 max-w-lg mx-auto w-full">
        {/* Timer Notice */}
        <div className="flex items-center justify-center gap-2 bg-error-container/30 border border-error/30 text-on-error-container rounded-lg py-2 px-4 timer-pulse">
          <span className="material-symbols-outlined text-error" style={{ fontSize: '18px' }}>timer</span>
          <span className="font-label-strong text-caption">Tự động khóa trong <span className="font-headline-md text-body-md text-error">{formatTime(timeLeft)}</span></span>
        </div>

        {/* Result Card */}
        <div className="bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray overflow-hidden flex flex-col">
          <div className="h-32 w-full relative">
            <img className="w-full h-full object-cover" alt="Bún Bò Bà Luân" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT5YQUKM3ty0VSwuQ6FHjNtWrtaMjYeMithaHiD0LwtEka5oneYCbYVBHU3yDjek7ess2iSZL37pip_m25BKBswOfWukvY600VmKnR9J0Kd9mNqe5wTJZ0yvphduywy08zl0iqkSKBBaFtl5X7PssdGvJyc6Av-skHBGxG4CA--XR5BIuLFU4Wyz3oyyQdN1UQkTRiaS52RD7NAeL-_ugnvzgQQlpa28S4tk3KthbqeOqzGIoBqYrI_Q" />
            <div className="absolute bottom-2 left-2 flex gap-2">
              <div className="bg-surface-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-streak-gold text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="font-label-strong text-caption text-on-surface">4.8</span>
              </div>
              <div className="bg-surface-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-tertiary text-[14px]">location_on</span>
                <span className="font-label-strong text-caption text-on-surface">1.2 km</span>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-primary text-on-primary font-label-strong text-caption px-2 py-1 rounded-full shadow-sm">
              Result
            </div>
          </div>
          <div className="p-gutter flex justify-between items-start">
            <div>
              <h2 className="font-headline-md text-headline-md-mobile text-on-surface mb-1">Bún Bò Bà Luân</h2>
              <p className="font-body-md text-caption text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">storefront</span>
                Vietnamese • Noodles • $$
              </p>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low text-primary hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-[20px]">info</span>
            </button>
          </div>
        </div>

        {/* Progress Section */}
        <div className="flex flex-col gap-stack-sm">
          <div className="flex justify-between items-end mb-1">
            <h3 className="font-label-strong text-caption text-on-surface uppercase tracking-wider">Voting Progress</h3>
            <span className="font-label-strong text-caption text-primary">1/3 Voted</span>
          </div>
          <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden flex shadow-inner">
            <div className="h-full bg-primary w-1/3 transition-all duration-500 ease-out border-r border-background"></div>
            <div className="h-full bg-transparent w-2/3 flex">
              <div className="w-1/2 h-full border-r border-surface-dim/30"></div>
            </div>
          </div>
          <p className="font-body-md text-caption text-on-surface-variant text-center mt-1">
            Cần &gt;50% (2 người) chấp nhận để chốt đơn
          </p>
        </div>

        {/* Group Members List */}
        <div className="flex flex-col gap-3">
          <h3 className="font-label-strong text-caption text-on-surface uppercase tracking-wider mb-1">Squad Status</h3>
          {/* Member 1: Voted Accept */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface-white border border-status-open/20 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-status-open"></div>
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full object-cover border border-subtle-gray" alt="Linh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCit4oIgmF9ajxoAMF4l_NKQTX6AGodBQJh3IzFJwPgQdH3rUktucijCFxOqH1XKkjUaLDFuttu-xEvGvLHwwRJw9us3SsvSA4dgorJoPZDVDhal0lhjE144strMs9Vgyq9q4eb80LKeP0KHreecyAJc2Q5EUXCLphV5Fi-Wapge7jI-tS15nog5pY23diX09cIhXrTRdoA9Xez4jb0AnWU7H6mwBEKnTh5mwo4WcNq6UtgIw84o9SqHw" />
              <div>
                <span className="block font-label-strong text-body-md text-on-surface">Linh (You)</span>
                <span className="block font-body-md text-caption text-status-open flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Chấp nhận
                </span>
              </div>
            </div>
          </div>
          {/* Member 2: Pending */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface-white border border-subtle-gray shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-variant"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-subtle-gray text-on-surface-variant font-headline-md text-body-md">
                H
              </div>
              <div>
                <span className="block font-label-strong text-body-md text-on-surface">Hoàng</span>
                <span className="block font-body-md text-caption text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">hourglass_empty</span>
                  Chưa vote
                </span>
              </div>
            </div>
          </div>
          {/* Member 3: Pending */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface-white border border-subtle-gray shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-variant"></div>
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full object-cover border border-subtle-gray" alt="Minh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU-yGcpbNeSTMdlKqzlckEz8NtvdgQlnlVlg3ZAA4RHFQJF7-OWzNJKg3siktpvH76MlsOHGmLhIvd37aqySxPGDayRjpoudtUp_MbGMZrlfc_0r5-04ZCSadzi2H83uMNs8lKmKbGP9wGNyw0xyYxbaYYjHim00eCZtm1BES8mtB4od_J6o8DkBy5RxHQR1B5XPVC49IFDcJxoVVCiXSbll40Lh5OIDx-HyQZHBbc0Kho_2lOBqwULw" />
              <div>
                <span className="block font-label-strong text-body-md text-on-surface">Minh</span>
                <span className="block font-body-md text-caption text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">hourglass_empty</span>
                  Chưa vote
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Veto Status */}
        <div className="flex items-center justify-center gap-2 py-2">
          <span className="font-body-md text-caption text-on-surface-variant">Veto Tokens:</span>
          <div className="flex gap-1">
            <span className="material-symbols-outlined text-error text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
            <span className="material-symbols-outlined text-error text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
            <span className="material-symbols-outlined text-error text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
          </div>
          <span className="font-label-strong text-caption text-on-surface ml-1">3/3</span>
        </div>
      </main>

      {/* Bottom Action Area */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-white/95 backdrop-blur-md border-t border-subtle-gray p-margin-mobile pb-safe flex flex-col gap-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-lg mx-auto w-full flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-pressable flex items-center justify-center gap-2 bg-surface-white text-on-surface border border-subtle-gray py-3 px-4 rounded-xl font-label-strong text-body-md shadow-[0_3px_0_0_#E5E7EB]">
              <span className="material-symbols-outlined text-[20px]">replay</span>
              QUAY LẠI
            </button>
            <button onClick={() => navigate('/group-spin/result')} className="btn-pressable flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-4 rounded-xl font-label-strong text-body-md shadow-[0_3px_0_0_#92001b]">
              <span className="material-symbols-outlined text-[20px]">check</span>
              CHẤP NHẬN
            </button>
          </div>
          <button className="btn-pressable flex items-center justify-center gap-2 bg-error-container text-on-error-container py-3 px-4 rounded-xl font-label-strong text-body-md border border-error/20 shadow-[0_2px_0_0_rgba(186,26,26,0.2)]">
            <span className="material-symbols-outlined text-[20px]">block</span>
            DÙNG VETO
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupVoteVeto;
