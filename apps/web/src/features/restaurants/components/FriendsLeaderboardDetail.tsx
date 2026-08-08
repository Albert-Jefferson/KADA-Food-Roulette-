import React from 'react';
import { useNavigate } from 'react-router-dom';

const FriendsLeaderboardDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col items-center pb-24 md:pb-0">
      <style>{`
        .press-effect:active {
            transform: scale(0.95);
        }
        .squishy-shadow {
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>
      
      {/* Top App Bar */}
      <header className="w-full relative bg-background dark:bg-background">
        <div className="flex justify-between items-center px-margin-mobile py-base w-full max-w-7xl mx-auto md:hidden">
          <button onClick={() => navigate(-1)} className="text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low transition-colors rounded-full p-2 press-effect flex items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
          </button>
          <h1 className="font-display-hero text-headline-md-mobile text-primary dark:text-primary-fixed-dim tracking-tight">Food Roulette</h1>
          <div className="text-primary dark:text-primary-fixed-dim font-headline-md text-headline-md-mobile dark:text-headline-md">
            1,250 🪙
          </div>
        </div>


      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg pb-32">
        {/* Header & Tabs */}
        <div className="mb-stack-lg">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-on-background mb-stack-md text-center">Bảng Xếp Hạng</h1>
          <div className="flex justify-center">
            <div className="bg-surface-container-highest p-1 rounded-full flex w-full max-w-sm">
              <button className="flex-1 py-2 px-4 rounded-full bg-surface-white text-primary font-label-strong shadow-sm squishy-shadow transition-all press-effect">Friends</button>
              <button className="flex-1 py-2 px-4 rounded-full text-on-surface-variant font-label-strong transition-all hover:bg-surface-white/50 press-effect">Global</button>
            </div>
          </div>
        </div>

        {/* Your Rank Card */}
        <div className="bg-surface-white border border-subtle-gray rounded-xl p-gutter mb-stack-lg flex items-center justify-between squishy-shadow">
          <div className="flex items-center gap-gutter">
            <div className="font-headline-md text-on-surface-variant">#4</div>
            <div className="relative">
              <img className="w-12 h-12 rounded-full object-cover border-2 border-surface-white shadow-sm" alt="You" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxRt1TmpLa3sXtbiuTQ1qwGSYvlVmtbZUASI1M3Ik3KGNqwt-T_xrBSOQ5rI7TrxAHHzyaMiF04aPJZgGRyakVzCzbYQM6aMdOH-urOIKcQHb96_l-w32l6jivcGUjwy5G0moWcy-H_Nqe67muVbarTrTUHlf-ZzRaPidbePrSm5M_ngjxYXG_KsyquGPrgpmO2MMaJfF-ZN9mflpYIf8QoXTKbraTKACsWABrg1SdRyc4G6h2z7vMhQ" />
              <div className="absolute -bottom-1 -right-1 bg-surface-white rounded-full p-0.5">
                <span className="material-symbols-outlined text-streak-gold text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              </div>
            </div>
            <div>
              <div className="font-label-strong text-on-background">You</div>
              <div className="font-caption text-on-surface-variant">7 days streak</div>
            </div>
          </div>
          <div className="font-label-strong text-primary bg-primary-container/20 px-3 py-1 rounded-full">
            850 XP
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="flex justify-center items-end gap-2 sm:gap-gutter mb-stack-lg h-48 px-2">
          {/* #2 */}
          <div className="flex flex-col items-center relative w-1/3 max-w-[120px]">
            <div className="mb-2 relative">
              <img className="w-14 h-14 rounded-full object-cover border-4 border-surface-container-highest z-10 relative" alt="Linh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUQkvdD_yIQEOEhyoR5kM6Fuq9mPwWzYUEXLH9s9LFDiLSyQwPn3XHrAomqDXBIgs0K9vBDO2iCD3fxE3fz6eRuL5kC5OvSYZJKVAXMhWUW0h_2aKMlv4Nt3KQYvrPwbB46PBxzqmqb1mdhJ14CghCD1PvgLwrOLnNEMTnlyawPhtoy7uFmd4OpfC6gy6V7MCcdFBV_6N2GyDhpcosbnyZObVkEk9YE2vCrFAF7AuMTvL69ipnZjjlmg" />
              <span className="material-symbols-outlined absolute -top-4 -right-2 text-surface-variant text-3xl z-20" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <div className="font-label-strong text-on-background truncate w-full text-center">Linh</div>
            <div className="font-caption text-on-surface-variant mb-2">1.2k XP</div>
            <div className="w-full bg-surface-container-highest h-20 rounded-t-lg border border-subtle-gray border-b-0 flex items-center justify-center font-headline-md text-on-surface-variant">2</div>
          </div>
          {/* #1 */}
          <div className="flex flex-col items-center relative w-1/3 max-w-[140px] z-10">
            <div className="mb-2 relative">
              <img className="w-20 h-20 rounded-full object-cover border-4 border-streak-gold z-10 relative shadow-md" alt="Minh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh0JZjcOdFYmPSsoh2TvSeLkK5k4d4nWYetCkdLnFd68CUZ1SUXZztN2jg8Gpa25VXxrcreMFaWrcrqnvLYZ3ToMhpP3VaydwoCxbxhnWfpS43o4zKWGEk39err7wil19yqxuqH46T36jJZlqZsyC-Gyi6T6cKiEX3oZQBHPC_8RMQq6D3DfDXfPtwXqriwm7HLbB7zW5EH-1zsOrvPzjYFr7Kae6IOIRvgDG8U8yxhR3Pvu3T57GYcA" />
              <span className="material-symbols-outlined absolute -top-6 left-1/2 -translate-x-1/2 text-streak-gold text-4xl z-20" style={{ fontVariationSettings: "'FILL' 1" }}>crown</span>
            </div>
            <div className="font-label-strong text-on-background truncate w-full text-center">Minh</div>
            <div className="font-caption text-primary font-bold mb-2">15 days 🔥</div>
            <div className="w-full bg-surface-container-low h-28 rounded-t-lg border border-streak-gold/50 border-b-0 flex items-center justify-center font-headline-lg-mobile text-streak-gold shadow-[0_-4px_12px_rgba(255,193,7,0.2)]">1</div>
          </div>
          {/* #3 */}
          <div className="flex flex-col items-center relative w-1/3 max-w-[120px]">
            <div className="mb-2 relative">
              <img className="w-14 h-14 rounded-full object-cover border-4 border-[#CD7F32] z-10 relative" alt="Hoa" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq7wimQH0si8PgLjJAIEmwLv9jPouWtlvHg0flcIHdr8Eeqm9zEXALz4uoDogrgOHXodg4gCa3KLcQD9twiR5_H-fuaWWuTslfEgohv_AbQdVZvh4sByvb7Tjqr6zG4uWVLgwKifjxaT7-DG8kxVr4zx6pY1Wehdu0znW2XjlviXXkdyVeF_eJsp-nxGTC3j6t2WSptkHr5ycbO3S__RbJShPrz-w0a-GnW7teSU2qKWF7biBHRbVcVA" />
              <span className="material-symbols-outlined absolute -top-4 -left-2 text-[#CD7F32] text-3xl z-20" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <div className="font-label-strong text-on-background truncate w-full text-center">Hoa</div>
            <div className="font-caption text-on-surface-variant mb-2">980 XP</div>
            <div className="w-full bg-surface-container-highest h-16 rounded-t-lg border border-subtle-gray border-b-0 flex items-center justify-center font-headline-md text-on-surface-variant">3</div>
          </div>
        </div>

        {/* Friends List */}
        <div className="bg-surface-white border border-subtle-gray rounded-xl overflow-hidden mb-stack-lg">
          <div className="flex items-center justify-between p-gutter border-b border-surface-container last:border-0 bg-primary/5">
            <div className="flex items-center gap-stack-md w-2/3">
              <div className="font-label-strong text-on-surface-variant w-6 text-center">4</div>
              <div className="relative flex-shrink-0">
                <img className="w-10 h-10 rounded-full object-cover" alt="You" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsZi-lRRaNL3Lhg-Ei2R-emIUIhvAPLKR_JJcCMKMc7YhNQdbgpi2RQbZeA2tvb8cXMCuUCZzLjcrTZ2q9BiRXFhL26h-u8nbFl7gEDuL-wd9v0Ql7hWWK3y_zw2ZucvoEjfQk1r_k9huPBtnwW2754NPsYzkZsg8mcRnGyqQIXrIrziuSTTdjgEoSu0quVL-2hhi2Lougxgr9oNyXGSX6Fisws12BbP8oyG_ONLNNFEoj-uIShGOq-A" />
                <div className="absolute -bottom-1 -right-1 bg-surface-white rounded-full p-0.5">
                  <span className="material-symbols-outlined text-streak-gold text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                </div>
              </div>
              <div className="truncate">
                <div className="font-label-strong text-on-background truncate">You</div>
                <div className="font-caption text-on-surface-variant truncate">7 ngày</div>
              </div>
            </div>
            <div className="font-label-strong text-on-background">850 XP</div>
          </div>

          <div className="flex items-center justify-between p-gutter border-b border-surface-container last:border-0">
            <div className="flex items-center gap-stack-md w-2/3">
              <div className="font-label-strong text-on-surface-variant w-6 text-center">5</div>
              <div className="relative flex-shrink-0">
                <img className="w-10 h-10 rounded-full object-cover" alt="Tuan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktceANoEUXUWbRfGrvUsCnv3UxVxh2awW98POYQV91LyCQqqRWmF5IBwGc76SxpsF2W86RTyvKjLDSp7faf338ryrkFj7Q116SzpoAsow8NdnCe2_3JkEoV5EpFduNijnp-otiisgZqXG8i5GquhPrmjZEcgbP2NQorXzg3t7XyklxXxJSuCO5b0hyieIaK4dxEDydv04IPva6PvyIgKn28GIWUJI2HLyKA189SBxk-f6qJ_OXTVV8A" />
              </div>
              <div className="truncate">
                <div className="font-label-strong text-on-background truncate">Tuan <span className="text-on-surface-variant font-normal">@tuan_eats</span></div>
                <div className="font-caption text-on-surface-variant truncate">3 ngày</div>
              </div>
            </div>
            <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-background font-label-strong px-4 py-1.5 rounded-full transition-colors press-effect text-sm flex items-center gap-1 border border-subtle-gray">
              <span className="material-symbols-outlined text-sm">front_hand</span> Poke
            </button>
          </div>

          <div className="flex items-center justify-between p-gutter border-b border-surface-container last:border-0">
            <div className="flex items-center gap-stack-md w-2/3">
              <div className="font-label-strong text-on-surface-variant w-6 text-center">6</div>
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-headline-md">
                  K
                </div>
              </div>
              <div className="truncate">
                <div className="font-label-strong text-on-background truncate">Kien <span className="text-on-surface-variant font-normal">@kien_d</span></div>
                <div className="font-caption text-error truncate">Lost streak</div>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-on-primary font-label-strong px-4 py-1.5 rounded-full transition-colors press-effect text-sm border-b-2 border-on-primary-container">
              Invite
            </button>
          </div>
        </div>

        {/* Add Friends */}
        <div>
          <h2 className="font-headline-md text-on-background mb-stack-md">Find Foodies</h2>
          <div className="relative mb-stack-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full bg-surface-white border border-subtle-gray rounded-lg pl-10 pr-4 py-3 font-body-md text-on-background placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Search friends or usernames" type="text" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <div className="bg-surface-white border border-subtle-gray rounded-xl p-gutter flex items-center justify-between">
              <div className="flex items-center gap-stack-md">
                <img className="w-12 h-12 rounded-full object-cover" alt="Mai Anh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRFqv9CiP5oTw0wtCbUnSmLFNOmCfspzNHZV32NoSGbbNqmeyVf5HSZxwIMMXbO58bcdK23ZjwmueX8aSLpeCz98Xml2MydYzJ1eEWeII9-v2roaVRt-8BVZbm879_xhcpWi7FmrQNSCkTmiYnPF4I4qBOxzb3ja7lLckn2q2tV1IeBwMw2uPKUnC22Wl2m1m59D4BmhBgXVZC9oqRCL1TdaJxO0YZinLLUX8mi4l_yafHHGlRm8N8lA" />
                <div>
                  <div className="font-label-strong text-on-background">Mai Anh</div>
                  <div className="font-caption text-tertiary-container flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">favorite</span> 90% Taste Match
                  </div>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-background hover:bg-primary hover:text-on-primary transition-colors press-effect">
                <span className="material-symbols-outlined text-sm">person_add</span>
              </button>
            </div>

            <div className="bg-surface-white border border-subtle-gray rounded-xl p-gutter flex items-center justify-between">
              <div className="flex items-center gap-stack-md">
                <img className="w-12 h-12 rounded-full object-cover" alt="Duc Vo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj-_q6qVd7ovB5LHu26qS2ZbcKQC1761x65W_WpcxH-8bWHRuxWEXbAWYCZS22iZ6WKp-b3hrRp9LmITIVm7xLomM5qtEcEg27oxRSioJVLGOlATPdHO6LrRUGES--EFQKlOY3iDAUgjcJ67sluGW5tPBz5FfBfusq52orW9usDlRk9-ZkUK3EFL9WGHlfiunmB5U2-ASNhxMuTPY-LA0LHxNPITBLRhaSUPZIoxjOX056EQD9criKnw" />
                <div>
                  <div className="font-label-strong text-on-background">Duc Vo</div>
                  <div className="font-caption text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">group</span> 3 mutual friends
                  </div>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-background hover:bg-primary hover:text-on-primary transition-colors press-effect">
                <span className="material-symbols-outlined text-sm">person_add</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FriendsLeaderboardDetail;
