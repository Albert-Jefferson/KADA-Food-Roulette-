import React from 'react';
import { useNavigate } from 'react-router-dom';

const NearbyRestaurantsLeaderboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md pb-24">
      <style>{`
        .squishy-shadow {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .squishy-btn {
            border-bottom-width: 2px;
            border-color: #92001b;
            transition: transform 0.1s, border-bottom-width 0.1s;
        }
        .squishy-btn:active {
            transform: translateY(2px);
            border-bottom-width: 0px;
            margin-bottom: 2px;
        }
      `}</style>
      
      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-background dark:bg-background z-40">
        <div className="flex justify-between items-center px-margin-mobile py-base w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <h1 className="font-display-hero text-headline-md-mobile text-primary dark:text-primary-fixed-dim tracking-tight">Food Roulette</h1>
          </div>
          <div className="flex items-center">
            <button className="font-label-strong text-caption text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low transition-colors px-4 py-2 rounded-full">
              1,250 🪙
            </button>
          </div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-margin-mobile pt-stack-md flex flex-col gap-stack-lg">
        <div className="flex items-center gap-1 px-2 py-1 bg-surface-container-low rounded-full w-fit mx-auto mt-2 border border-subtle-gray">
          <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
          <span className="text-caption font-label-strong text-on-surface-variant">Vị trí của bạn: Hoàn Kiếm, Hà Nội</span>
        </div>

        {/* Header & Tabs */}
        <div className="flex flex-col gap-stack-md items-center text-center mt-4">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg text-on-background">Quán Ăn Gần Bạn</h2>
          <div className="flex bg-surface-white rounded-full p-1 border border-subtle-gray squishy-shadow">
            <button className="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-label-strong text-label-strong">Trending</button>
            <button className="px-6 py-2 rounded-full text-on-surface-variant font-label-strong text-label-strong hover:bg-surface-container-low transition-colors">All Time</button>
          </div>
        </div>

        {/* Top 3 Podium */}
        <section className="mt-stack-lg">
          <div className="flex items-end justify-center gap-4 md:gap-8 h-64">
            {/* Rank 2 */}
            <div className="w-1/3 max-w-[150px] flex flex-col items-center relative group">
              <div className="absolute -top-6 bg-surface-white border border-subtle-gray rounded-full w-10 h-10 flex items-center justify-center font-headline-md text-headline-md text-secondary z-10 squishy-shadow">2</div>
              <div className="bg-surface-white rounded-t-xl rounded-b-lg border border-subtle-gray w-full h-32 flex flex-col justify-end p-2 pb-4 items-center relative overflow-hidden squishy-shadow transition-transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEHcUPEZDGHnDYv94CcLnsnV1_6CNfxgMazMXkO-cnbINBkDeLxgNIAGaVK21llvyGq3as2idRhq3CQRQcxl3kJG2BMwPgIyfKpfbBKun_GA3ZtLPHDwbfReOEs1tCNzsDAfaiou0oyYG2-5lsHrahm5LRm8-IQolWd6CHcsv6p5CtlODrfPoqgqUleqCdV0uWwRLVByEQkpiQNWq_XqDEemJ0Oi4gSHBi_sieeC52Ih2b648vv4AyOA')" }}></div>
                <div className="relative z-10 text-center flex flex-col gap-1 items-center w-full bg-surface-white/80 backdrop-blur-sm p-1 rounded-lg">
                  <span className="font-label-strong text-caption text-on-background truncate w-full">Phở Thìn</span>
                  <span className="text-[10px] font-bold text-status-open flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">trending_up</span>+12%
                  </span>
                </div>
              </div>
            </div>
            {/* Rank 1 */}
            <div className="w-1/3 max-w-[180px] flex flex-col items-center relative group">
              <div className="absolute -top-8 bg-streak-gold rounded-full w-14 h-14 flex items-center justify-center font-headline-lg-mobile text-headline-lg-mobile text-on-secondary-container z-10 squishy-shadow border-2 border-surface-white">1</div>
              <div className="bg-surface-white rounded-t-xl rounded-b-lg border border-subtle-gray w-full h-44 flex flex-col justify-end p-3 pb-4 items-center relative overflow-hidden squishy-shadow transition-transform hover:-translate-y-2 border-primary-container">
                <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8ee58JQHPTDkoLxyAfQDiJ5bhhCxHxqsXT6Hmdv5WRxDQtWAMLIsTP4Urb3bihCmVhPl0_GBhdy-RxQbmk60N9arTc0M2SzKtbKhPJOcjvcYzE_4kx97o2MFBCg3wHItNIfKCcuMxpTrYnfXJLfmc4TsYO_AJueuIboJiuZMypHw7hlZN3fS2vX5reyvkN9bkA_K8uve2Dh0d8S4wq-q36l8sXfaEjV_N2rN1WMlz4RyI0Fy6LwTFeQ')" }}></div>
                <div className="relative z-10 text-center flex flex-col gap-1 items-center w-full bg-surface-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  <span className="font-headline-md text-body-md md:text-headline-md text-on-background truncate w-full">Bún Chả Đắc Kim</span>
                  <span className="text-[12px] font-bold text-status-open flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">local_fire_department</span>+25% heat
                  </span>
                </div>
              </div>
            </div>
            {/* Rank 3 */}
            <div className="w-1/3 max-w-[150px] flex flex-col items-center relative group">
              <div className="absolute -top-6 bg-surface-white border border-subtle-gray rounded-full w-10 h-10 flex items-center justify-center font-headline-md text-headline-md text-[#cd7f32] z-10 squishy-shadow">3</div>
              <div className="bg-surface-white rounded-t-xl rounded-b-lg border border-subtle-gray w-full h-28 flex flex-col justify-end p-2 pb-3 items-center relative overflow-hidden squishy-shadow transition-transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAry_Z7lW-FZYSa475MnemqqBBZlPCQO3-xAvgCaP8iXfS8PWgk9FSvY2kf1FhY8CKgbpFa_uEIxGnN_Kpef8ag6Idysd3d5ugBv0RXFvCmpR1R3mNQA6VYgf3oLbiGQ_PHwyQVfNMuFM2XlN9uZkvMAkvL4kMTyYdrr-Wda0ng-Z_V_qJgIFNEnr4r-f3HScjl8Hk3gEPmJc4X0KxK541Cu5245KLbBjEBStHeIURQz1Hi52gznRt1ug')" }}></div>
                <div className="relative z-10 text-center flex flex-col gap-1 items-center w-full bg-surface-white/80 backdrop-blur-sm p-1 rounded-lg">
                  <span className="font-label-strong text-caption text-on-background truncate w-full">Bánh Mì 25</span>
                  <span className="text-[10px] font-bold text-status-open flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">trending_up</span>+8%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* List View */}
        <section className="mt-stack-lg flex flex-col gap-stack-md">
          <div className="bg-surface-white border border-subtle-gray rounded-xl p-3 flex items-center gap-4 squishy-shadow hover:bg-surface-container-lowest transition-colors group">
            <span className="font-headline-md text-headline-md text-on-surface-variant w-6 text-center">4</span>
            <img className="w-16 h-16 rounded-lg object-cover" alt="Xôi Yến" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzKDEUlQShLQtB8wEKw7i3uf1i0UJJkdbo2GndapzyWnnatEXJ8iRauQ4v1bgRA_NsMFvSWDHsjlcW_SwFmKJdrkj8WYE7va7pDphbVBo2DHOWy0SxLJKr6oISNMzxaQeVOxhBrg6PHUIDuuOSBZPbWFmbpJEK7qJEI5rnO_2Pw6U-9_3RCXlpx664RvlJCO9eXzrhoGekPZ0Wq50OCUC6n01lkr6iF-wwEMDBfKh-6JgbnENQXroifQ" />
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-headline-md text-body-md text-on-background line-clamp-1">Xôi Yến</h3>
              <p className="font-body-md text-caption text-on-surface-variant">Street Food • <span className="text-primary font-bold">1.2km</span></p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center text-streak-gold text-[12px]">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.8
                </div>
                <span className="text-[10px] text-tertiary-container flex items-center bg-tertiary-fixed/30 px-1.5 py-0.5 rounded-sm">
                  <span className="material-symbols-outlined text-[12px] mr-0.5">local_fire_department</span>32 spins today
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface-white border border-subtle-gray rounded-xl p-3 flex items-center gap-4 squishy-shadow hover:bg-surface-container-lowest transition-colors group">
            <span className="font-headline-md text-headline-md text-on-surface-variant w-6 text-center">5</span>
            <img className="w-16 h-16 rounded-lg object-cover" alt="Bún Đậu Hàng Khay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsRlrYqCX9pTTtfHpM4Rp8j7Pz_h1Q77o7Hca7H0Udaw9IDRD-usYetZtE5HSQftNiAJBawlELSI_Z3-YWIxwzTaJTt-76NNQx9HZbITiNLtcL_tqpsMqzs4ApIa-BtooLz1wgiMJFR2PECUaW32u2eTETmX3U9W3qpl24Tb5nA9EiyTd7y9KHVEumQGmvoSBYP5tV9wdfKoyvmnNvJQNjKmqq4jmhxoTt7a2pjsPvc4J5H41FoAqP8Q" />
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-headline-md text-body-md text-on-background line-clamp-1">Bún Đậu Hàng Khay</h3>
              <p className="font-body-md text-caption text-on-surface-variant">Vietnamese • <span className="text-primary font-bold">2.5km</span></p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center text-streak-gold text-[12px]">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.5
                </div>
                <span className="text-[10px] text-tertiary-container flex items-center bg-tertiary-fixed/30 px-1.5 py-0.5 rounded-sm">
                  <span className="material-symbols-outlined text-[12px] mr-0.5">local_fire_department</span>28 spins today
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface-white border border-subtle-gray rounded-xl p-3 flex items-center gap-4 squishy-shadow hover:bg-surface-container-lowest transition-colors group">
            <span className="font-headline-md text-headline-md text-on-surface-variant w-6 text-center">6</span>
            <img className="w-16 h-16 rounded-lg object-cover" alt="Cafe Giảng" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH7AG9x6PFIuC8SC9kvWwQU9QcAIOnVTivm0pE-_lqquuYd-Zq1aTH6-_4_8Gv314QY4eRwUrXHL9UBjKd_6JqqWlOTyhAEoSbTw23xlmQivKCs6LcCLh6aPX7jM-UhWeuNdG6K9oP_L6H6ki2C0jIkACTKdEeC02580nlqfxpVPWLFq5m4tOQBnznF2itFMzeq4J0z_0ZOZYpv1NycvTM4rdbNRWdK3R3kUytX14S1Y4F6CLPqjQA8Q" />
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-headline-md text-body-md text-on-background line-clamp-1">Cafe Giảng</h3>
              <p className="font-body-md text-caption text-on-surface-variant">Cafe • <span className="text-primary font-bold">0.8km</span></p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center text-streak-gold text-[12px]">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.9
                </div>
                <span className="text-[10px] text-tertiary-container flex items-center bg-tertiary-fixed/30 px-1.5 py-0.5 rounded-sm">
                  <span className="material-symbols-outlined text-[12px] mr-0.5">local_fire_department</span>15 spins today
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NearbyRestaurantsLeaderboard;
