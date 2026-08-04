import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LuckySpinWheel: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate();

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    const extraSpins = (Math.floor(Math.random() * 4) + 3) * 360;
    const randomSegment = Math.floor(Math.random() * 360);
    const newRotation = rotation + extraSpins + randomSegment;
    setRotation(newRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      // createConfetti();
      // Navigate to result after spin
      navigate('/spin/result');
    }, 3000);
  };

  return (
    <main className="flex-grow flex flex-col items-center px-margin-mobile py-stack-lg max-w-7xl mx-auto w-full pb-[100px] md:pb-stack-lg overflow-x-hidden">
      {/* Page Title Context */}
      <div className="text-center mb-stack-lg">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-stack-sm">Vòng Quay May Mắn!</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Thử vận may sau khi check-in thành công!</p>
      </div>

      {/* Wheel Component */}
      <div className="relative w-full max-w-md mx-auto mb-stack-lg">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
          {/* Wheel Pointer */}
          <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-primary z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)]"></div>
          
          {/* Wheel */}
          <div 
            className="w-full h-full rounded-full border-8 border-surface-white shadow-[0_12px_24px_rgba(0,0,0,0.1)] relative"
            style={{
              background: `conic-gradient(
                #ff5a5f 0 72deg,
                #ffab69 72deg 144deg,
                #55a37a 144deg 216deg,
                #FFC107 216deg 288deg,
                #b52330 288deg 360deg
              )`,
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning ? 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
            }}
          >
            {/* Segment labels */}
            <div className="absolute top-1/2 left-1/2 origin-top-left text-white font-bold text-[14px] md:text-[16px] drop-shadow-md pointer-events-none w-[120px] md:w-[170px] text-right pr-[20px]" style={{ transform: 'rotate(-54deg) translateY(-50%)' }}>Voucher 10%</div>
            <div className="absolute top-1/2 left-1/2 origin-top-left text-white font-bold text-[14px] md:text-[16px] drop-shadow-md pointer-events-none w-[120px] md:w-[170px] text-right pr-[20px]" style={{ transform: 'rotate(18deg) translateY(-50%)' }}>Credit 5k</div>
            <div className="absolute top-1/2 left-1/2 origin-top-left text-white font-bold text-[14px] md:text-[16px] drop-shadow-md pointer-events-none w-[120px] md:w-[170px] text-right pr-[20px]" style={{ transform: 'rotate(90deg) translateY(-50%)' }}>Món Tặng Kèm</div>
            <div className="absolute top-1/2 left-1/2 origin-top-left text-white font-bold text-[14px] md:text-[16px] drop-shadow-md pointer-events-none w-[120px] md:w-[170px] text-right pr-[20px]" style={{ transform: 'rotate(162deg) translateY(-50%)' }}>Nước Miễn Phí</div>
            <div className="absolute top-1/2 left-1/2 origin-top-left text-white font-bold text-[14px] md:text-[16px] drop-shadow-md pointer-events-none w-[120px] md:w-[170px] text-right pr-[20px]" style={{ transform: 'rotate(234deg) translateY(-50%)' }}>Lượt Quay Thêm</div>
          </div>
          
          {/* Wheel Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-surface-white rounded-full border-4 border-surface-container-low shadow-inner z-10"></div>
        </div>
      </div>

      {/* Spin Action */}
      <button 
        className={`bg-primary-container text-on-primary-container font-headline-md text-headline-md-mobile px-8 py-4 rounded-full shadow-md btn-squish mb-stack-lg hover:bg-surface-tint hover:text-on-primary transition-colors flex items-center justify-center gap-2 ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleSpin}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
        QUAY NGAY!
      </button>

      {/* Rewards Inventory (Bento-style Cards) */}
      <div className="w-full max-w-2xl mt-margin-desktop">
        <h3 className="font-headline-md text-headline-md text-on-background mb-stack-md flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-container">inventory_2</span>
          Voucher của bạn
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
          {/* Reward Card 1 */}
          <div className="bg-surface-white border border-subtle-gray rounded-xl p-stack-md shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-stack-sm text-primary">
              <span className="material-symbols-outlined">high_res</span>
            </div>
            <span className="font-label-strong text-label-strong text-on-surface">Giảm 10%</span>
            <span className="font-caption text-caption text-on-surface-variant">HSD: 3 ngày</span>
          </div>
          {/* Reward Card 2 */}
          <div className="bg-surface-white border border-subtle-gray rounded-xl p-stack-md shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center mb-stack-sm text-tertiary">
              <span className="material-symbols-outlined">local_cafe</span>
            </div>
            <span className="font-label-strong text-label-strong text-on-surface">Trà đá Free</span>
            <span className="font-caption text-caption text-on-surface-variant">HSD: Hôm nay</span>
          </div>
          {/* Empty State Card */}
          <div className="bg-surface-variant rounded-xl p-stack-md flex flex-col items-center text-center justify-center border border-dashed border-outline-variant opacity-70">
            <span className="material-symbols-outlined text-on-surface-variant mb-stack-sm">hourglass_empty</span>
            <span className="font-caption text-caption text-on-surface-variant">Quay để nhận thêm</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LuckySpinWheel;
