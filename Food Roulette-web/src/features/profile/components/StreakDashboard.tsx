import React from 'react';
import { useNavigate } from 'react-router-dom';

const StreakDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background antialiased pb-24 md:pb-0 font-body-md min-h-screen">
      <style>{`
        .squishy-shadow {
            box-shadow: 0 4px 12px rgba(181, 35, 48, 0.1);
        }
        .squishy-shadow-active {
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }
        .button-press-effect {
            border-bottom: 2px solid #92001b;
            transition: transform 0.1s, border-width 0.1s, margin-top 0.1s;
        }
        .button-press-effect:active {
            transform: translateY(2px);
            border-bottom-width: 0px;
            margin-top: 2px;
        }
        .circular-progress {
            transform: rotate(-90deg);
        }
        .circular-progress circle {
            transition: stroke-dashoffset 0.5s ease-in-out;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-background dark:bg-background z-40">
        <div className="flex justify-between items-center px-margin-mobile py-base w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary dark:text-primary-fixed-dim font-bold tracking-tight">Thành tích & Thử thách</h1>
          </div>
          <div>
            <span className="font-label-strong text-label-strong text-primary dark:text-primary-fixed-dim">1,250 🪙</span>
          </div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop space-y-stack-lg pt-stack-md">
        
        {/* Hero Section: Streak */}
        <section className="bg-surface-white rounded-xl squishy-shadow border border-subtle-gray p-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(181,35,48,0.05)] pointer-events-none"></div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary text-center mb-2 z-10">7 Ngày</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-center z-10">Chuỗi ngày ăn ngon liên tiếp!</p>
          <div className="relative w-48 h-48 flex items-center justify-center z-10">
            <svg className="circular-progress absolute w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" r="45" stroke="#fbf3e4" strokeWidth="8"></circle>
              <circle cx="50" cy="50" fill="none" r="45" stroke="#ff5a5f" strokeDasharray="282.7" strokeDashoffset="84.81" strokeLinecap="round" strokeWidth="8"></circle>
            </svg>
            <div className="flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-[64px] text-streak-gold mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              <span className="font-label-strong text-label-strong text-on-surface-variant">Mục tiêu: 10 Ngày</span>
            </div>
          </div>
        </section>

        {/* Calendar View */}
        <section className="bg-surface-white rounded-xl squishy-shadow border border-subtle-gray p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-background">Tháng Này</h3>
            <span className="font-caption text-caption text-on-surface-variant">14/30 Ngày</span>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day) => (
              <div key={day} className="font-caption text-caption text-on-surface-variant">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            <div className="h-8 rounded-full"></div>
            <div className="h-8 rounded-full"></div>
            {[...Array(3)].map((_, i) => (
              <div key={`completed-early-${i}`} className="h-8 w-8 mx-auto rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              </div>
            ))}
            <div className="h-8 w-8 mx-auto rounded-full bg-surface-variant flex items-center justify-center font-label-strong text-caption text-on-surface-variant">4</div>
            {[...Array(4)].map((_, i) => (
              <div key={`completed-streak-${i}`} className="h-8 w-8 mx-auto rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              </div>
            ))}
            <div className="h-8 w-8 mx-auto rounded-full bg-primary-container text-on-primary flex items-center justify-center ring-2 ring-streak-gold ring-offset-2">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            </div>
            {[10, 11, 12, 13, 14].map((date) => (
              <div key={`future-${date}`} className="h-8 w-8 mx-auto rounded-full flex items-center justify-center font-label-strong text-caption text-on-surface-variant opacity-50">{date}</div>
            ))}
          </div>
        </section>

        {/* Milestones Section */}
        <section>
          <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-background mb-4">Cột mốc sắp tới</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
            <div className="min-w-[200px] bg-surface-white rounded-xl border border-subtle-gray p-4 flex flex-col items-center justify-center squishy-shadow shrink-0 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-1 bg-streak-gold w-[70%]"></div>
              <span className="material-symbols-outlined text-4xl text-streak-gold mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <h4 className="font-label-strong text-label-strong text-on-background">10 Ngày</h4>
              <p className="font-caption text-caption text-primary-container">+50 XP</p>
            </div>
            <div className="min-w-[200px] bg-surface-white rounded-xl border border-subtle-gray p-4 flex flex-col items-center justify-center opacity-70 shrink-0">
              <span className="material-symbols-outlined text-4xl text-subtle-gray mb-2">military_tech</span>
              <h4 className="font-label-strong text-label-strong text-on-surface-variant">30 Ngày</h4>
              <p className="font-caption text-caption text-on-surface-variant">Huy hiệu Bạc</p>
            </div>
            <div className="min-w-[200px] bg-surface-white rounded-xl border border-subtle-gray p-4 flex flex-col items-center justify-center opacity-50 shrink-0">
              <span className="material-symbols-outlined text-4xl text-subtle-gray mb-2">workspace_premium</span>
              <h4 className="font-label-strong text-label-strong text-on-surface-variant">100 Ngày</h4>
              <p className="font-caption text-caption text-on-surface-variant">Vé Vàng</p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section>
          <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-background mb-4">Thử thách của bạn</h3>
          <div className="space-y-4">
            {/* Challenge 1 */}
            <div className="bg-surface-white rounded-xl border border-subtle-gray p-4 flex gap-4 items-center squishy-shadow">
              <div className="h-12 w-12 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
              </div>
              <div className="flex-1">
                <h4 className="font-label-strong text-label-strong text-on-background mb-1">Thử thách cuối tuần</h4>
                <p className="font-caption text-caption text-on-surface-variant mb-2">Check-in 2 quán (1/2)</p>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden flex gap-1">
                  <div className="h-full flex-1 bg-primary-container rounded-l-full"></div>
                  <div className="h-full flex-1 bg-transparent rounded-r-full"></div>
                </div>
              </div>
            </div>
            {/* Challenge 2 */}
            <div className="bg-surface-white rounded-xl border border-subtle-gray p-4 flex gap-4 items-center squishy-shadow">
              <div className="h-12 w-12 rounded-full bg-tertiary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>local_cafe</span>
              </div>
              <div className="flex-1">
                <h4 className="font-label-strong text-label-strong text-on-background mb-1">Cú đêm</h4>
                <p className="font-caption text-caption text-on-surface-variant mb-2">Ăn đêm 3 lần tuần này (3/3)</p>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden flex gap-1">
                  <div className="h-full flex-1 bg-tertiary rounded-l-full"></div>
                  <div className="h-full flex-1 bg-tertiary"></div>
                  <div className="h-full flex-1 bg-tertiary rounded-r-full"></div>
                </div>
              </div>
              <button onClick={() => window.alert('Đã nhận thưởng +50XP!')} className="bg-primary text-on-primary px-3 py-1.5 rounded-lg font-label-strong text-caption button-press-effect shrink-0">Nhận thưởng</button>
            </div>
          </div>
        </section>

        {/* Leaderboard Preview */}
        <section className="bg-surface-white rounded-xl border border-subtle-gray p-4 squishy-shadow mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-streak-gold" style={{ fontVariationSettings: "'FILL' 1" }}>social_leaderboard</span>
              <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-background">Hội Bạn Thân (Top 3)</h3>
            </div>
            <button onClick={() => navigate('/leaderboard')} className="text-primary font-label-strong text-caption hover:underline">Xem tất cả</button>
          </div>
          <div className="flex justify-around items-end pt-4 pb-2">
            <div className="flex flex-col items-center gap-2 relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#C0C0C0] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA61py9dVukuGp1TDoAhoRG1DSmIxNjf_JZGYY46h9JUK2bconR4UkOk9DKiaJIZx5G5KlXn-BWskJqb1qISoICzXYGXVDkXhdnKxUX6DwlC5S1UKn43YrJvQoKXqM92_BLnlspzsuWtW_bDE3eN0-t_XogA8W55KtE2tIxAne_mN5rGe3CRuu1cZ1gNB59CupawKTUs-6W1r0Yke6v2VxCOu6EFIQj0sRbdk9VWQTzSR75nIOHoaHQVw')" }}></div>
              <div className="absolute -top-3 bg-[#C0C0C0] text-white text-xs font-bold px-2 py-0.5 rounded-full border border-white">2</div>
              <span className="font-label-strong text-caption text-on-background">Mai</span>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-streak-gold" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <span className="font-label-strong text-caption text-on-surface-variant">5</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 relative -translate-y-4">
              <div className="w-16 h-16 rounded-full border-4 border-streak-gold overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCudOAvCHG3c7uJfieaqWKWrkmgj2LQ0AHyVWGWchcLQhkpwqMLPg2TVvXfRl4Bd9tPcOJbVzEu1SWfqcfGl-8VhxTryqVWs_CV_Jkhe_3rf-_vBfLf_TIXigX7UIDFks_oMAhOgepjwXlH8MswfPh5uetJ2rd7gkyVW_10yFzwtb11D2tNDIayjeHNlKYeAMjQPmzCy1f3gP13729kH3VbvuDoyGpAtVKIZ3FtfvR_2jzkjof9fUPb3g')" }}></div>
              <div className="absolute -top-3 bg-streak-gold text-white text-xs font-bold px-2 py-0.5 rounded-full border border-white">1</div>
              <span className="font-label-strong text-caption text-on-background font-bold text-primary">Bạn</span>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-streak-gold" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <span className="font-label-strong text-caption text-on-surface-variant font-bold text-primary">7</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#cd7f32] overflow-hidden bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-subtle-gray text-2xl">person</span>
              </div>
              <div className="absolute -top-3 bg-[#cd7f32] text-white text-xs font-bold px-2 py-0.5 rounded-full border border-white">3</div>
              <span className="font-label-strong text-caption text-on-background">Tuấn</span>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-streak-gold" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <span className="font-label-strong text-caption text-on-surface-variant">2</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StreakDashboard;
