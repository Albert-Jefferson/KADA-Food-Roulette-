import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GroupCheckInCompleteRewards: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const colors = ['#b52330', '#ff5a5f', '#FFC107', '#16A34A', '#88d7aa'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100 + 'vw';
        const animationDuration = (Math.random() * 3 + 2) + 's';
        const animationDelay = Math.random() * 5 + 's';
        
        confetti.style.backgroundColor = color;
        confetti.style.left = left;
        confetti.style.animationDuration = animationDuration;
        confetti.style.animationDelay = animationDelay;
        
        if(Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
        }

        container.appendChild(confetti);
    }

    const timer = setTimeout(() => {
      if (container) container.innerHTML = '';
    }, 8000);

    return () => {
      clearTimeout(timer);
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden relative min-h-screen pb-24 font-body-md">
      <style>{`
        .confetti-piece {
            position: absolute;
            width: 10px;
            height: 20px;
            opacity: 0;
            animation: fall linear infinite;
        }
        @keyframes fall {
            0% { opacity: 1; transform: translateY(-100vh) rotate(0deg); }
            100% { opacity: 0; transform: translateY(100vh) rotate(360deg); }
        }
        .bento-card {
            background-color: #FFFFFF;
            border: 1px solid #E5E7EB;
            border-radius: 1rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .bento-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.08);
        }
        .primary-btn {
            background-color: #b52330;
            color: #ffffff;
            border-bottom: 3px solid #93000a;
            border-radius: 0.75rem;
            transition: all 0.15s ease;
        }
        .primary-btn:active {
            transform: translateY(2px);
            border-bottom: 1px solid #93000a;
        }
        .secondary-btn {
            background-color: #ffffff;
            color: #b52330;
            border: 2px solid #b52330;
            border-radius: 0.75rem;
            transition: all 0.15s ease;
        }
        .secondary-btn:active {
            transform: translateY(2px);
            background-color: #fff8ef;
        }
        .avatar-glow {
            box-shadow: 0 0 15px rgba(22, 163, 74, 0.4);
        }
      `}</style>

      {/* Confetti Container */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" id="confetti-container"></div>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg md:py-12 flex flex-col items-center">
        {/* Header Section */}
        <header className="text-center mb-stack-lg flex flex-col items-center mt-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-tertiary-container rounded-full mb-4 shadow-lg animate-[bounce_2s_infinite]">
            <span className="material-symbols-outlined text-[48px] text-surface-white" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
          </div>
          <h1 className="font-display-hero text-display-hero md:text-display-hero text-primary mb-stack-sm tracking-tight text-center">
            KHẾ ƯỚC HOÀN THÀNH!
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
            Tuyệt vời! Các bạn đã cùng nhau giữ lời hứa và hoàn thành xuất sắc bữa ăn hôm nay.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full max-w-4xl mx-auto mb-stack-lg">
          {/* Group Success Card */}
          <div className="bento-card col-span-1 md:col-span-12 p-gutter md:p-stack-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary-fixed/30 to-transparent pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-status-open text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Tất cả thành viên đã check-in thành công</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">Một bữa ăn ngon miệng cùng những người bạn tuyệt vời.</p>
              
              <div className="flex flex-row justify-center items-center -space-x-4">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOj8xR2Zzz1vezLzLc63H5bmOO4sA6dG1cdxq7HcaWfICiZ6YCApzZkBVuLMfZv5kBn2RBcksIx85o18zBrhoXyTAJQYwuVXXgkRaPpFgwbzr3TqXy2ggJfdgYKI26Z-QvVhQfLa3pt_qeoV4ZsyyE0Fbh4kBQmtVfbMhqMsUjb7QNYlfE6eDCgGemqvBzPa9U47KXjSs7vi9sox5C6BcwGvZtXM1wCEIxDswW6yYCUmLvvhY4_jgmCw",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBEgqSiJZvI3ZtgQmujd8q_bmVsLWolyk2Bxo2R4h48dK1fl2KlmO8VndlL2MsILw_6YuYIb4GhRISXk2oUWxuEb2UiE2E1aDPdRBvOKv576HaW1olEqqP13j-mfGzv1OcNVEc2YheuFPB3DzR0r8AjygGyD2yaxu3XuJTVTtSN5tT7vPwVKB17k5Av5pRMDM1JEVW1MFv1Qv9VBLqT8xlv8Zv-5Sz0YaXwVP0oqLABYqtqFUXIXoChEA",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBBX07kf2fsKQA95PCnNymCZxCHTsf9l62ZXzSh6UpIBggDEys33eYgpZweiiJywXx1JGrGe6zkhGHO3e4F1982JTUUWKdapR7jsqo9DSc1QJ7or_sDmkgch-8o72kUhgX0xSbtlobxHagTsnayMFGz2mb1mvJnp938_c_fgeaAC379wbtuA8b4jSg8GcNUNanT2Dg-0vzzTihGqO-0aWHNCSMuYvwvpXZf1814x3nHYBGLJs9YENbkpA",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDNgfAi2t44WkriFeR4EbqztGqZS7wcTySYFSxdWdwNyn7VDRVHUUK_LtZoZh3aE3gMldc9_L2Y43IG2HMEeQcVL6epQm5VoHxORFX0V60blNOD2LQ8LSL-WN8szvCFJo5E3iI4QRB0s1MHcrewip7FUrvjzsZB6z6AvzWvcbojhdx8hGB6p-m5JchQnfHFx4wRz9FKZUf4Kshye4jU8I5gh4czGho18WkgpZGkH8bicseGYyuRlrDUSQ"
                ].map((src, i) => (
                  <div key={i} className={`relative z-${40 - i * 10}`}>
                    <img className="w-16 h-16 rounded-full border-4 border-surface-white object-cover avatar-glow relative" alt={`Member ${i}`} src={src} />
                    <div className={`absolute -bottom-1 -right-1 bg-status-open rounded-full p-0.5 border-2 border-surface-white z-${50 - i * 10}`}>
                      <span className="material-symbols-outlined text-[14px] text-surface-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="bento-card col-span-1 md:col-span-12 p-gutter md:p-stack-lg flex flex-col justify-center">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-gutter text-center">Phần Thưởng Của Bạn</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              <div className="bg-surface-container rounded-xl p-stack-md flex flex-col items-center text-center justify-center border border-subtle-gray transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-stack-sm">
                  <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                </div>
                <span className="font-headline-md text-headline-md text-primary">+300 XP</span>
                <span className="font-caption text-caption text-on-surface-variant">Thưởng Nhóm!</span>
              </div>
              <div className="bg-surface-container rounded-xl p-stack-md flex flex-col items-center text-center justify-center border border-subtle-gray transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center mb-stack-sm">
                  <span className="material-symbols-outlined text-tertiary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>potted_plant</span>
                </div>
                <span className="font-headline-md text-headline-md text-tertiary">+2 Hạt Giống</span>
                <span className="font-caption text-caption text-on-surface-variant">Cho khu vườn</span>
              </div>
              <div className="bg-surface-container rounded-xl p-stack-md flex flex-col items-center text-center justify-center border border-subtle-gray transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-[#FFF3E0] flex items-center justify-center mb-stack-sm">
                  <span className="material-symbols-outlined text-streak-gold text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                </div>
                <span className="font-headline-md text-headline-md text-streak-gold">7 Ngày</span>
                <span className="font-caption text-caption text-on-surface-variant">Chuỗi Streak</span>
              </div>
              <div className="bg-surface-container rounded-xl p-stack-md flex flex-col items-center text-center justify-center border border-status-open/30 bg-status-open/5 transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-status-open/20 flex items-center justify-center mb-stack-sm">
                  <span className="material-symbols-outlined text-status-open text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                </div>
                <span className="font-headline-md text-headline-md text-status-open">10.000đ</span>
                <span className="font-caption text-caption text-on-surface-variant">Hoàn tiền cược</span>
              </div>
            </div>
          </div>

          {/* Food Picture Placeholder */}
          <div className="bento-card col-span-1 md:col-span-12 overflow-hidden h-48 md:h-64 relative">
            <div className="bg-cover bg-center w-full h-full relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFF4v-au5HZlBXN33QlMDQm91K_GJiGryFRynqewrRZmRcZtkVpCOp3I-XcWoJ98DmJe9g5oNUXc4YPeV9v8ilOkMJ_L2Ebdt3fqEjdW_M5G_JjXayUibmnAg-2MzZ3DcspSER1nCOHJZ-VV_hcHv2EPPG2bz4Wrz2qkDYFueJtgurDhjFt_YxjJ--9mOE8vUsHd3QUNOF9jftgL7kGq56EXyTavFF_adqcrdV1W-Y99y5z_7UZfTBTw')" }}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4 text-surface-white">
                <p className="font-label-strong text-label-strong text-white/90 drop-shadow-md">Kỷ niệm hôm nay tại</p>
                <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg drop-shadow-lg">Bún Chả Hương Liên</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-gutter w-full max-w-md mx-auto mb-stack-lg">
          <button onClick={() => navigate('/locket')} className="primary-btn w-full py-3 px-6 flex items-center justify-center gap-2 font-label-strong text-label-strong">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
            Tạo Locket Nhóm
          </button>
          <button className="secondary-btn w-full py-3 px-6 flex items-center justify-center gap-2 font-label-strong text-label-strong">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>casino</span>
            Lucky Spin Nhóm
          </button>
        </div>
      </main>
    </div>
  );
};

export default GroupCheckInCompleteRewards;
