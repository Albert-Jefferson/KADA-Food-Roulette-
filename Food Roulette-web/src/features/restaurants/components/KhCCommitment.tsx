import React from 'react';
import { useNavigate } from 'react-router-dom';

const KhCCommitment: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24 md:pb-0 font-body-md">
      <style>{`
        .material-symbols-outlined.filled {
            font-variation-settings: 'FILL' 1;
        }
        .squishy-btn {
            box-shadow: 0 4px 0 0 #92001b; /* on-primary-fixed-variant */
            transition: transform 0.1s, box-shadow 0.1s;
        }
        .squishy-btn:active {
            transform: translateY(4px);
            box-shadow: 0 0px 0 0 #92001b;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(229, 231, 235, 0.5); /* subtle-gray */
        }
        .stake-card-selected {
            border: 2px solid #b52330; /* primary */
            background-color: #fff8ef; /* surface */
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
      
      {/* Mobile Top App Bar */}
      <header className="md:hidden flex justify-between items-center px-margin-mobile py-base w-full bg-background border-b border-subtle-gray/30 relative">
        <button aria-label="Go back" className="text-on-surface-variant p-2 cursor-pointer" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="font-headline-md-mobile text-headline-md-mobile">Khế Ước</span>
        <div className="w-10"></div>
      </header>



      <main className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        {/* Header Section */}
        <div className="text-center mb-stack-lg">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-sm">Commitment Required</h1>
          <p className="text-on-surface-variant font-body-md text-body-md">Lock in your choice to earn rewards.</p>
        </div>

        {/* Selected Restaurant Card */}
        <section className="glass-card rounded-xl p-4 mb-stack-lg flex flex-col md:flex-row gap-4 shadow-sm relative overflow-hidden group">
          <div className="w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden relative">
            <div className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhoynzM4wF0hOi8FxHQLLChIl6-paWr8IkNzFXsirX_iojSFX5D5JVV-g5_uGYfvRHkE_QbUqw0ItrLmG8MQzroMDBJxK85kQx0s6gGe-oJqLKE1pxKl8lo0JPWA_KGlqumQieg5ZvcT1kaL3nVPYfQ0B1QpHAPu9wojGz5PpgqFpxH-HBtpIR0EgqwxO58zZeYsNSmsdQy2p4JMyrLsFk3o5jBgB_QQflEC7ZQ7OA44VTxSQTeewV1g')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-2 left-2 flex items-center gap-2">
              <div className="bg-surface-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 font-caption text-caption text-on-surface">
                <span className="material-symbols-outlined filled text-streak-gold text-[16px]">star</span>
                4.8
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md">Burger Joint Supreme</h2>
              <span className="material-symbols-outlined text-primary bg-primary-fixed/30 p-2 rounded-full">restaurant</span>
            </div>
            <p className="text-on-surface-variant font-body-sm text-body-sm mb-4">123 Foodie Lane, District 1 • 2.5km away</p>
            <div className="bg-surface-container p-3 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary">timer</span>
              <div>
                <p className="font-label-strong text-label-strong">Time to Arrive</p>
                <p className="font-caption text-caption text-on-surface-variant">60 Minutes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stake Levels */}
        <section className="mb-stack-lg">
          <h3 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md mb-stack-md">Select Your Stake</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Level 1 */}
            <div className="bg-surface-white border border-subtle-gray rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-colors flex flex-col items-center text-center relative overflow-hidden group">
              <div className="bg-surface-container-low p-3 rounded-full mb-3 group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[32px]">sentiment_satisfied</span>
              </div>
              <h4 className="font-label-strong text-label-strong mb-1">Just Spin</h4>
              <p className="font-headline-md-mobile text-headline-md-mobile text-primary mb-2">0đ</p>
              <p className="font-caption text-caption text-on-surface-variant">No risk, standard rewards.</p>
            </div>
            {/* Level 2 (Selected) */}
            <div className="stake-card-selected rounded-xl p-4 cursor-pointer flex flex-col items-center text-center relative shadow-sm">
              <div className="absolute top-2 right-2">
                <span className="material-symbols-outlined filled text-primary">check_circle</span>
              </div>
              <div className="bg-primary-fixed p-3 rounded-full mb-3">
                <span className="material-symbols-outlined text-primary text-[32px]">gavel</span>
              </div>
              <h4 className="font-label-strong text-label-strong mb-1">Commit</h4>
              <p className="font-headline-md-mobile text-headline-md-mobile text-primary mb-2">5,000đ</p>
              <p className="font-caption text-caption text-on-surface-variant">2x Rewards if you arrive.</p>
            </div>
            {/* Level 3 */}
            <div className="bg-surface-white border border-subtle-gray rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-colors flex flex-col items-center text-center relative overflow-hidden group">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-streak-gold/20 rounded-full blur-xl group-hover:bg-streak-gold/40 transition-colors"></div>
              <div className="bg-surface-container-highest p-3 rounded-full mb-3 group-hover:bg-streak-gold/20 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-streak-gold transition-colors text-[32px]">diamond</span>
              </div>
              <h4 className="font-label-strong text-label-strong mb-1">Confident</h4>
              <p className="font-headline-md-mobile text-headline-md-mobile text-primary mb-2">10,000đ</p>
              <p className="font-caption text-caption text-on-surface-variant">5x Rewards & Golden Badge.</p>
            </div>
          </div>
        </section>

        {/* Witness Selection */}
        <section className="mb-stack-lg">
          <div className="flex justify-between items-center mb-stack-md">
            <h3 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md">Choose a Witness</h3>
            <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-full">Optional</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
            <div className="flex-shrink-0 w-20 flex flex-col items-center gap-2 snap-start">
              <button className="w-16 h-16 rounded-full border-2 border-dashed border-subtle-gray flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors bg-surface-container-lowest">
                <span className="material-symbols-outlined">add</span>
              </button>
              <span className="font-caption text-caption text-center">Add New</span>
            </div>
            {/* Friend 1 */}
            <div className="flex-shrink-0 w-20 flex flex-col items-center gap-2 snap-start relative">
              <div className="absolute -top-1 -right-1 bg-surface-white rounded-full z-10">
                <span className="material-symbols-outlined filled text-status-open text-[18px]">check_circle</span>
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-status-open p-0.5 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center rounded-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeboVmLbEp1SGhQODrh644Mw2uC6DJ-mVxsngIx9L5If31sz31qf8aVXW14HGttMUPxJCUbs6m-VMJ23x2wwm2zrrBY4BF4JMIxRV-ag2597JZILUtDR93HTYBogZdm3mnf_JY6Qmlr3HDljMkBWvFpC0D4qf4pSUgcFLdF1tYOmIxMMNmIpBhdihyKK1FhNWb2uZzkNOztKieGCjV9bn-Nx_WINTzZIZZLND_jyG2kuAOTEhi0tuGeg')" }}></div>
              </div>
              <span className="font-caption text-caption text-center font-semibold text-status-open">Linh T.</span>
            </div>
            {/* Friend 2 */}
            <div className="flex-shrink-0 w-20 flex flex-col items-center gap-2 snap-start opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center rounded-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrWI3MwTOc_2zc17gk1VCQ_7D8mJ5OhtpX_WPeBNuLmffCYbqJnzmkGRtZxFQhusk4J0hWXx4MhgBkqoYS3jFc5oago8-kybsENUA0IEvYgTCLhkTbV508nRfO3ikcCOCYPge9Bp6e74tnXLS2WQBXb3Yc5Z8njrhHeTcUWt57u2eqJM1Wj6ZQSIDqYoCxGIk0lg0PvOnTOtiUhbP1BZ0x3CimEqBIu2CUjFCZub4baEM9v7vEDMexTg')" }}></div>
              </div>
              <span className="font-caption text-caption text-center">Minh H.</span>
            </div>
            {/* Friend 3 */}
            <div className="flex-shrink-0 w-20 flex flex-col items-center gap-2 snap-start opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-high flex items-center justify-center text-headline-md-mobile font-headline-md-mobile text-on-surface-variant">
                T
              </div>
              <span className="font-caption text-caption text-center">Trang N.</span>
            </div>
          </div>
          <p className="font-caption text-caption text-on-surface-variant mt-2 text-center md:text-left">Witnesses can verify your arrival if geolocation fails.</p>
        </section>

        {/* CTA Section */}
        <section className="mt-stack-lg pt-stack-lg border-t border-subtle-gray/50 flex flex-col items-center">
          <button className="w-full md:w-auto min-w-[280px] bg-primary text-on-primary font-headline-md-mobile text-headline-md-mobile py-4 px-8 rounded-xl squishy-btn flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">lock</span>
            TẠO KHẾ ƯỚC
          </button>
          <p className="font-caption text-caption text-on-surface-variant mt-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">info</span>
            Stakes are deducted immediately and held in escrow.
          </p>
        </section>
      </main>
    </div>
  );
};

export default KhCCommitment;
