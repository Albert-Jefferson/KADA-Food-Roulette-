import React from 'react';
import { useNavigate } from 'react-router-dom';

const MysteryBoxReveal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-body-md">
      <style>{`
        .reveal-animation {
            animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .glow-effect {
            box-shadow: 0 0 40px rgba(255, 193, 7, 0.5);
            animation: pulseGlow 2s infinite alternate;
        }
        @keyframes pulseGlow {
            from { box-shadow: 0 0 30px rgba(255, 193, 7, 0.4); }
            to { box-shadow: 0 0 60px rgba(255, 193, 7, 0.8); }
        }
        .sparkle {
            animation: sparkleAnim 1.5s infinite linear;
        }
        @keyframes sparkleAnim {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1) rotate(180deg); opacity: 1; }
            100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        @keyframes shimmer {
            100% { translate: 150% 0; }
        }
      `}</style>
      
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-secondary-container/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-primary-container/20 rounded-full blur-[100px]"></div>
        {/* Sparkles */}
        <span className="material-symbols-outlined absolute top-[20%] left-[15%] text-streak-gold text-4xl sparkle" style={{ animationDelay: '0s' }}>auto_awesome</span>
        <span className="material-symbols-outlined absolute top-[15%] right-[20%] text-secondary text-2xl sparkle" style={{ animationDelay: '0.5s' }}>auto_awesome</span>
        <span className="material-symbols-outlined absolute bottom-[30%] left-[25%] text-primary text-3xl sparkle" style={{ animationDelay: '0.2s' }}>auto_awesome</span>
        <span className="material-symbols-outlined absolute top-[40%] right-[10%] text-streak-gold text-5xl sparkle" style={{ animationDelay: '0.8s' }}>auto_awesome</span>
      </div>

      <main className="w-full max-w-md mx-auto px-margin-mobile py-stack-lg flex flex-col items-center relative z-10 text-center">
        {/* Mystery Box Graphic */}
        <div className="relative w-64 h-64 mb-stack-lg reveal-animation">
          <div className="absolute inset-0 glow-effect rounded-full opacity-50 bg-streak-gold/20 blur-xl"></div>
          <img 
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl" 
            alt="Mystery Box" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC_uTVAx-xQ9ziSj6dVjzUwrZTlcn3WAdQpsTMjUmr-FKgPHUxNMHui-ylCHaolvNHT0V2DR96bv4QqFmrW6AVchXJ_IAN7iPQt3xv1IAnjc4GRHot8Kd7ULIRXFCky_CbLbDwm7p-j97joeZ7uw75zj2ecatDrrSr6l0mSw27jggPwPNFXt_n5KeZFWgMF8AfE7h6bLY5APxIFN10LZF8i6hJZWugOJ-Q9YUOUz1AOZPepBIUTX1NyA" 
          />
        </div>
        
        {/* Headline */}
        <div className="mb-stack-md reveal-animation" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <p className="font-label-strong text-label-strong text-secondary uppercase tracking-widest mb-stack-sm">Phần Thưởng Của Bạn</p>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary md:font-headline-lg md:text-headline-lg mb-stack-sm">BẠN ĐÃ NHẬN ĐƯỢC...</h1>
        </div>
        
        {/* Reward Card */}
        <div className="w-full bg-surface-white rounded-xl border border-subtle-gray p-4 mb-stack-lg shadow-[0_8px_24px_rgba(181,35,48,0.12)] reveal-animation relative overflow-hidden" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 skew-x-[-20deg] translate-x-[-150%] animate-[shimmer_2s_infinite]"></div>
          <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
            <img 
              className="w-full h-full object-cover" 
              alt="Food" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHfnVn0kr8Xs462wxs4AlRBFr3clMSNskdWFjInLv7n5Y-P52uQQe64lz6mt8ZV09jN3jZTU_oYyCT-juE23JSYSViuC0cVT2rz269zHSzETV0htyY9NsqjkwjiTLXY2HWIU17XIOINV4vYnAzsxelIDUt42kV_uFSzfJFJryKj3aIucm-xMDL04Fph1hcMrG26RR252xDgeRaSFU4MpCra5S9CDds1LeLN92_nQuheWzFc-hRcUzm6w" 
            />
            <div className="absolute top-2 right-2 bg-surface-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-subtle-gray">
              <span className="font-label-strong text-label-strong text-primary">50% OFF</span>
            </div>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Voucher 50% - Bún Bò Bà Luân</h2>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            Đã thêm vào ví của bạn
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-stack-md reveal-animation" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-primary text-on-primary font-label-strong text-label-strong py-4 px-6 rounded-lg shadow-[0_4px_0_#92001b] hover:translate-y-[2px] hover:shadow-[0_2px_0_#92001b] active:translate-y-[4px] active:shadow-none transition-all duration-150 flex items-center justify-center gap-2"
          >
            NHẬN NGAY
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>redeem</span>
          </button>
          <button onClick={() => window.alert('Đã tạo liên kết chia sẻ phần thưởng!')} className="w-full bg-surface-container text-primary font-label-strong text-label-strong py-4 px-6 rounded-lg border border-outline-variant hover:bg-surface-container-high active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2">
            Chia sẻ kết quả
            <span className="material-symbols-outlined">share</span>
          </button>
          <button 
            onClick={() => navigate('/')}
            className="mt-stack-sm text-on-surface-variant font-body-md text-body-md underline hover:text-on-surface transition-colors"
          >
            Quay lại Khu Vườn
          </button>
        </div>
      </main>
    </div>
  );
};

export default MysteryBoxReveal;
