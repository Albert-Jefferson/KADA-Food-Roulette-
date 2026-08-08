import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckInCompleteRewards: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const colors = ['#b52330', '#ffab69', '#55a37a', '#FFC107', '#ffdad8'];
    const fragments: HTMLDivElement[] = [];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.top = '0';
      confetti.style.opacity = '0';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animation = `fall 3s ease-in-out infinite`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
      
      confetti.style.left = `${Math.random() * 100}vw`;
      
      if (Math.random() > 0.5) {
        confetti.style.borderRadius = '50%';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
      } else {
        confetti.style.width = '10px';
        confetti.style.height = '20px';
      }
      
      container.appendChild(confetti);
      fragments.push(confetti);
    }
    
    const timer = setTimeout(() => {
      if (container) {
        container.innerHTML = '';
      }
    }, 6000);

    return () => {
      clearTimeout(timer);
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container relative overflow-hidden flex flex-col items-center justify-start pt-8 pb-32">
      <style>{`
        @keyframes fall {
            0% { opacity: 1; top: -10%; transform: translateX(0) rotate(0deg); }
            100% { opacity: 0; top: 100%; transform: translateX(20px) rotate(360deg); }
        }
      `}</style>
      
      {/* Confetti Effect Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="confetti-container"></div>
      
      {/* Main Content Canvas */}
      <main className="w-full max-w-md mx-auto px-margin-mobile relative z-10 flex flex-col gap-stack-lg">
        {/* Header Celebration */}
        <header className="text-center flex flex-col items-center gap-stack-sm mt-8">
          <div className="w-24 h-24 bg-surface-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-4">
            <span className="material-symbols-outlined text-6xl text-status-open" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">Bạn đã giữ lời hứa!</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Check-in thành công. Tuyệt vời!</p>
        </header>

        {/* Commitment Summary */}
        <section className="bg-surface-white rounded-xl p-gutter border border-subtle-gray shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex flex-col gap-stack-md relative overflow-hidden">
          <div className="flex justify-between items-center pb-stack-md border-b border-subtle-gray">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              <span className="font-label-strong text-label-strong text-on-surface">Cọc đã hoàn trả</span>
            </div>
            <span className="font-headline-md text-headline-md text-primary">+5,000đ</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
              <span className="font-body-md text-body-md text-on-surface-variant">Người làm chứng</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
                <img className="w-full h-full object-cover" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFlo1YECqkLALfUjP9Cci_tWg7QnFGEVSfNI0F7bjtvs3Lugs4Zk5mhxRXveUsCLfLLhA6ydGQ_KNgibuOQgeF_PUCLV4dRq6t8C_oWFkc65YvyGOFRmUZe4W7dqrKCA7eAkOv5Vvt58H4HIIkh3EYgFfH_9n_jYORotZ-V_tTEN3Nu9aKqDWbztKsadykMfNbIYsFkMEVJaCtVfp_m45P_zZHxWsDX_i4TuQiblVSu9-lWSuwZlCyHw" />
              </div>
              <span className="font-label-strong text-label-strong text-on-surface">@tuan_foodie</span>
            </div>
          </div>
        </section>

        {/* Rewards Bento Grid */}
        <section className="grid grid-cols-2 gap-stack-md">
          {/* Streak */}
          <div className="bg-surface-white rounded-xl p-stack-md border border-subtle-gray flex flex-col items-center justify-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-streak-gold text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-on-surface">8 Ngày</p>
              <p className="font-caption text-caption text-on-surface-variant">Streak (+1)</p>
            </div>
          </div>
          {/* Garden */}
          <div className="bg-surface-white rounded-xl p-stack-md border border-subtle-gray flex flex-col items-center justify-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary-container text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-on-surface">1 Hạt</p>
              <p className="font-caption text-caption text-on-surface-variant">Khu vườn (+1)</p>
            </div>
          </div>
          {/* XP */}
          <div className="col-span-2 bg-surface-white rounded-xl p-stack-md border border-subtle-gray flex flex-row items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-stack-md">
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-on-surface">+150 XP</p>
                <p className="font-caption text-caption text-on-surface-variant">Kinh nghiệm nhận được</p>
              </div>
            </div>
            <div className="w-1/3 bg-surface-container h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-3/4 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Lucky Spin Teaser */}
        <div className="bg-surface-container-high rounded-xl p-stack-md border border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>casino</span>
            <span className="font-label-strong text-label-strong text-secondary">Vòng quay may mắn đang đợi!</span>
          </div>
          <button onClick={() => navigate('/spin')} className="font-label-strong text-label-strong text-primary hover:underline">Quay ngay</button>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col gap-stack-md mt-4">
          <button className="btn-squish w-full bg-primary text-on-primary font-label-strong text-label-strong py-4 rounded-xl shadow-[0_4px_0_#92001b] transition-transform flex items-center justify-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>edit_document</span>
            Viết Review (+25 XP)
          </button>
          <button className="btn-squish w-full bg-surface-white text-on-surface font-label-strong text-label-strong py-4 rounded-xl border border-subtle-gray shadow-[0_4px_0_#E5E7EB] transition-transform flex items-center justify-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
            Tạo Locket kỉ niệm
          </button>
          <button 
            onClick={() => navigate('/')}
            className="font-label-strong text-label-strong text-on-surface-variant mt-2 text-center hover:text-on-surface transition-colors"
          >
            Trở về trang chủ
          </button>
        </div>
      </main>
    </div>
  );
};

export default CheckInCompleteRewards;
