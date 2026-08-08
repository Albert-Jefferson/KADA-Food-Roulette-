import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GroupCheckInVerification: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59);

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
    <div className="bg-background text-on-background min-h-screen font-body-md pb-safe">
      <style>{`
        .btn-press:active {
            transform: translateY(2px);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }
        .btn-3d {
            border-bottom: 2px solid #92001b; /* on-primary-fixed-variant */
        }
        .btn-3d:active {
            border-bottom-width: 0px;
            transform: translateY(2px);
        }
      `}</style>
      
      {/* Top Navigation (Mobile) */}
      <header className="w-full top-0 sticky z-40 bg-background md:hidden">
        <div className="flex justify-between items-center px-margin-mobile py-base w-full">
          <button onClick={() => navigate(-1)} aria-label="Go Back" className="text-on-surface-variant p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md-mobile text-on-surface">Group Check-in</h1>
          <div className="w-10"></div>
        </div>
      </header>

      {/* TopAppBar Web */}
      <header className="hidden md:flex w-full top-0 sticky bg-background z-40">
        <div className="flex justify-between items-center px-margin-desktop py-base w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-stack-sm text-primary">
            <span className="material-symbols-outlined text-3xl">local_fire_department</span>
            <span className="font-display-hero text-headline-md tracking-tight">Food Roulette</span>
          </div>
          <button className="bg-surface-container-low text-on-surface font-label-strong text-label-strong px-4 py-2 rounded-lg hover:bg-surface-container-highest transition-colors flex items-center gap-2">
            1,250 🪙
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg md:py-8 pb-32">
        <div className="max-w-2xl mx-auto w-full space-y-stack-lg">
          
          {/* Status Section */}
          <section className="bg-surface-white rounded-xl p-stack-lg shadow-sm border border-subtle-gray flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1 bg-surface-container-low text-secondary font-label-strong text-caption px-3 py-1 rounded-full mb-3">
              <span className="material-symbols-outlined text-sm">hourglass_empty</span>
              <span>{formatTime(timeLeft)}</span> Left
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface mb-1">Almost there!</h2>
            <p className="font-body-md text-on-surface-variant">Checking in at <strong className="text-on-surface">Bún Bò Bà Luân</strong></p>
          </section>

          {/* Group Presence Bento Grid */}
          <section className="space-y-stack-sm">
            <h3 className="font-label-strong text-label-strong text-on-surface-variant px-1">Group Arrival Status</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-sm">
              {/* Member 1: At Restaurant */}
              <div className="bg-surface-white rounded-xl p-stack-md border border-subtle-gray flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-status-open animate-pulse"></div>
                <img className="w-16 h-16 rounded-full object-cover border-2 border-surface-white shadow-sm mb-2" alt="Linh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbXo-hmReyyVqwKnEetoJtCjQNfFqZbv1-F4h6tHo_vy8aMEXDHvA5sVFv60fwaM9tHQ30INudPjOBHbHNnMWAPZuTofH35Loj_TvsUNrFP8mX-FVi_TVd1KgrRQBs0cLR81586DWi4x_Wt1R6HTmH81W53LA72cqShwiZucXWkgeGPiWZGXIl4cSl_U7KpSGwQDbCooWZTA8pKlDdE9CC827b4Y784vDmqThfH7x15aKQSFzWlhTrRg" />
                <p className="font-label-strong text-label-strong text-on-surface truncate w-full">Linh T.</p>
                <div className="flex items-center gap-1 text-status-open mt-1 bg-surface-container-lowest px-2 py-0.5 rounded-full border border-subtle-gray">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span className="font-caption text-[10px]">At Table</span>
                </div>
              </div>
              
              {/* Member 2: You (At Restaurant) */}
              <div className="bg-surface-container-low rounded-xl p-stack-md border border-primary-fixed-dim flex flex-col items-center text-center relative">
                <img className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-sm mb-2" alt="You" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC29A2ggn782M8_xfJQKQkJWBEDujH7Ts37Ky5npuJtHyoPFgOYgnVOp-Oqn0zhOdFvyrl1G49VGiH0jw5hKtgJpjnPJBAAtF7K4RQKfFsX_KiOrQlTOwtCQK_o4uB31GeU2OfajtHZVjNgJvHWEjVq8neuhm6aelJuLba50dNq7TYOkoG7d9s_o6-gpfCaVjiG7_mki7aKvmeR1ci7LVXbnKzTOyax1CX5mcBxAv03OHHXTMmGOe9SVw" />
                <p className="font-label-strong text-label-strong text-primary truncate w-full">You</p>
                <div className="flex items-center gap-1 text-primary mt-1 bg-surface-white px-2 py-0.5 rounded-full border border-primary-fixed-dim">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span className="font-caption text-[10px]">Here</span>
                </div>
              </div>
              
              {/* Member 3: Nearby */}
              <div className="bg-surface-white rounded-xl p-stack-md border border-subtle-gray flex flex-col items-center text-center">
                <img className="w-16 h-16 rounded-full object-cover border-2 border-surface-white shadow-sm mb-2 opacity-80" alt="Mai" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQxsGS6ZozdibvVWrskm8EN_cHRpt_iarERGo8Srid34DIl-XYtz9cyDfBu3IgA_SgVYzauU8iE21iXEnCkD4YrM9Bf7O-IzF_9BwpJRdLMmEYW_0VLIjvpUTLHBmRyG_rrM_Mg52jn08CgADIHlD3Q703vehpU0TWAwac7Vuiua66JBcRMcBLxX9lEdneCt9Pb8VQWyH45WuBEAX3FofAm2C_o3R-NttVUlAhMnaYbawZDBmIntgYBA" />
                <p className="font-label-strong text-label-strong text-on-surface truncate w-full">Mai H.</p>
                <div className="flex items-center gap-1 text-secondary mt-1 bg-surface-container-low px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">directions_walk</span>
                  <span className="font-caption text-[10px]">150m away</span>
                </div>
              </div>
              
              {/* Member 4: On the way */}
              <div className="bg-surface-white rounded-xl p-stack-md border border-subtle-gray flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center border-2 border-surface-white border-dashed mb-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-3xl">directions_car</span>
                </div>
                <p className="font-label-strong text-label-strong text-on-surface truncate w-full">Khoa D.</p>
                <div className="flex items-center gap-1 text-on-surface-variant mt-1">
                  <span className="font-caption text-[10px]">On the way</span>
                </div>
              </div>
            </div>
          </section>

          {/* Verification Action */}
          <section className="bg-surface-white rounded-xl border border-subtle-gray shadow-sm overflow-hidden flex flex-col">
            <div className="p-stack-md border-b border-subtle-gray bg-surface-container-lowest flex justify-between items-center">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="font-label-strong text-caption">Photo Verification</span>
              </div>
              <span className="bg-secondary-container text-on-secondary-container font-caption text-[10px] px-2 py-0.5 rounded-full">Required for +500🪙</span>
            </div>
            
            <div 
              className="relative w-full aspect-[4/3] bg-inverse-surface group cursor-pointer overflow-hidden flex items-center justify-center"
              onClick={() => navigate('/group-check-in/rewards')}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-300" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNSGbaWfcYAU9sZSk8Oqnpf3BNBQUVzrpn0Z8vS_lZBskR0sQGac4HNYLoTb--1CtS8A8uyOcM54ifGAF4mDjVoVPGhlXgQ4X6ynkKCs5QmiN951h8jjV9XwB61lktJjU5r64DjAHE7ChKijQgdYS0eSLIbR-d4yE93WH5dHlJ3MI_TWmRN8ns3Rw12axOdX9-tb6CpXOikwOV-Ozuap169ubXuw298eCjFXUTu0WtuElT9JTWzYhPuQ')" }}
              ></div>
              <div className="absolute inset-8 border-2 border-surface-white border-dashed opacity-50 rounded-lg pointer-events-none"></div>
              <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-surface-white rounded-tl-lg pointer-events-none"></div>
              <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-surface-white rounded-tr-lg pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-surface-white rounded-bl-lg pointer-events-none"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-surface-white rounded-br-lg pointer-events-none"></div>
              
              <button className="relative z-10 bg-primary text-on-primary font-label-strong text-label-strong px-8 py-4 rounded-full btn-3d hover:bg-surface-tint transition-colors flex items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined">photo_camera</span>
                Take Group Photo
              </button>
              
              <div className="absolute bottom-2 left-2 flex gap-2">
                <span className="bg-inverse-surface/80 text-surface-white backdrop-blur-sm px-2 py-1 rounded font-caption text-[10px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">location_on</span> Bún Bò Bà Luân
                </span>
                <span className="bg-inverse-surface/80 text-surface-white backdrop-blur-sm px-2 py-1 rounded font-caption text-[10px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">schedule</span> 19:24
                </span>
              </div>
            </div>
            <div className="p-stack-md bg-surface-container-lowest text-center">
              <p className="font-caption text-on-surface-variant text-xs">GPS and timestamps are automatically added to prevent cheating.</p>
            </div>
          </section>

          {/* Secondary Action */}
          <div className="text-center pt-stack-sm pb-stack-lg">
            <button className="text-on-surface-variant font-label-strong text-caption underline underline-offset-4 hover:text-on-surface transition-colors">
              Check-in without photo
            </button>
            <p className="font-caption text-error text-xs mt-1">Note: Skipping photo forfeits Lucky Spin rewards.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GroupCheckInVerification;
