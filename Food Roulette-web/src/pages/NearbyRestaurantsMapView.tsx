import React from 'react';
import { useNavigate } from 'react-router-dom';

const NearbyRestaurantsMapView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full min-h-screen flex flex-col font-body-md text-on-surface overflow-hidden relative">
      <style>{`
        body {
          background-color: #FDF5E6;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .map-bg {
          background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZs3qng12E0Ez0kB0HF2fcL1G92J7X6DvcbLq_iS0sXVVn-JxfVzBmgNJxQuAv8iP5JgCxmtKAhvdjAxxo8F2UHZ1L1ROAmPtoZryE18msJjqJadEembQeY3gQtYwGoZRimd32xhoeJjUs59uNEx_bXf56F25Sm0Pbi7Ft3GQsoW1lQ8AKPcW4UfOrZaIP1wUmSEHhxzbDLWokjYej2_EEW9b-2XvfaUyQZ_jrODYhd7cO0YY4gSAiKA');
          background-size: cover;
          background-position: center;
        }
      `}</style>

      {/* TopAppBar */}
      <header className="bg-background dark:bg-background w-full top-0 sticky z-20 hidden md:block">
        <div className="flex justify-between items-center px-margin-mobile py-base w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <h1 className="font-display-hero text-headline-md-mobile text-primary dark:text-primary-fixed-dim tracking-tight">Food Roulette</h1>
          </div>
          <div className="flex items-center">
            <span className="font-headline-md text-headline-md-mobile text-primary dark:text-primary-fixed-dim">1,250 🪙</span>
          </div>
        </div>
      </header>

      {/* Map Area */}
      <main className="flex-grow relative h-full w-full">
        <div className="absolute inset-0 map-bg w-full h-full"></div>

        {/* Filters & Location Overlay */}
        <div className="absolute top-0 left-0 w-full z-10 p-4 space-y-4 pt-10 md:pt-4">
          <div className="bg-surface-white/90 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-xl p-3 flex items-center justify-between border border-subtle-gray cursor-pointer" onClick={() => navigate(-1)}>
            <div className="flex items-center gap-3">
              <div className="bg-primary-container/10 p-2 rounded-full">
                <span className="material-symbols-outlined text-primary">my_location</span>
              </div>
              <div>
                <p className="font-caption text-caption text-on-surface-variant">Current Location</p>
                <p className="font-label-strong text-label-strong text-on-surface">Hoàn Kiếm, Hà Nội</p>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            <button className="shrink-0 bg-primary text-surface-white font-label-strong text-label-strong px-4 py-2 rounded-xl shadow-sm border border-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
              Gần nhất
            </button>
            <button className="shrink-0 bg-surface-white text-on-surface font-label-strong text-label-strong px-4 py-2 rounded-xl shadow-sm border border-subtle-gray hover:bg-surface-container-low transition-colors">
              Đánh giá cao
            </button>
            <button className="shrink-0 bg-surface-white text-on-surface font-label-strong text-label-strong px-4 py-2 rounded-xl shadow-sm border border-subtle-gray hover:bg-surface-container-low transition-colors">
              Món Cay
            </button>
            <button className="shrink-0 bg-surface-white text-on-surface font-label-strong text-label-strong px-4 py-2 rounded-xl shadow-sm border border-subtle-gray hover:bg-surface-container-low transition-colors">
              Cà phê
            </button>
          </div>
        </div>

        {/* Map Markers */}
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center group cursor-pointer">
          <div className="bg-primary text-surface-white px-2 py-1 rounded-lg font-label-strong text-caption shadow-md mb-1 opacity-100 transition-opacity whitespace-nowrap">
            Phở Gia Truyền
          </div>
          <div className="bg-primary rounded-full p-2 shadow-lg border-2 border-surface-white flex items-center justify-center relative">
            <span className="material-symbols-outlined text-surface-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
            <div className="absolute -top-2 -right-2 bg-streak-gold text-on-surface font-label-strong text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-surface-white">1</div>
          </div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary -mt-1"></div>
        </div>

        <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center group cursor-pointer">
          <div className="bg-surface-white rounded-full p-2 shadow-lg border-2 border-subtle-gray flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>coffee</span>
          </div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-surface-white -mt-1"></div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute right-4 bottom-[45%] flex flex-col gap-3 z-10">
          <button className="bg-surface-white p-3 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-subtle-gray hover:bg-surface-container-low transition-colors flex items-center justify-center text-on-surface">
            <span className="material-symbols-outlined">layers</span>
          </button>
          <button className="bg-surface-white p-3 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-subtle-gray hover:bg-surface-container-low transition-colors flex items-center justify-center text-on-surface">
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </div>

        {/* Restaurant Preview Card */}
        <div className="absolute bottom-[20px] md:bottom-[40px] left-0 w-full px-4 z-20">
          <div className="bg-surface-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-subtle-gray overflow-hidden">
            <div className="flex p-4 gap-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
                <img className="w-full h-full object-cover" alt="Phở Gia Truyền" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGiQR3nWf3k1N3rKKoCDTsIWc7rjqVXoUQbquc_7juLuz-CoHGAh6ptalAdj1U3vWCjzAhkmBRW5jU8uhWLOP1ZRGJ9PEF76EUrvdMYRhxmITCySbZfmktVnlL0hu9aG-GnlcWIYOZ2RWYcMb2ta7nrMqz6SkVWxenO7_tha6P_rd8Oe35wvoIVe3Arz25SwL-tMsNs4o5t35rGIaUTFo7tRVwhg1_xtG4oLjFJKry7yUZZ8rGredmYw" />
                <div className="absolute bottom-1 left-1 bg-surface-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-streak-gold text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-caption text-caption text-on-surface font-bold">4.8</span>
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-headline-md text-body-lg text-on-surface font-bold leading-tight">Phở Gia Truyền Bát Đàn</h3>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                    </button>
                  </div>
                  <p className="font-body-md text-caption text-on-surface-variant mb-2">Authentic Northern Vietnamese Pho</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[14px]">directions_walk</span>
                    <span className="font-caption text-caption">12 min (800m)</span>
                  </div>
                  <span className="font-caption text-caption text-tertiary font-bold bg-tertiary-fixed/30 px-2 py-1 rounded-lg">$$</span>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full bg-primary text-surface-white font-label-strong text-label-strong py-3 rounded-xl shadow-sm border-b-2 border-on-primary-fixed-variant active:border-b-0 active:translate-y-[2px] transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">directions</span>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NearbyRestaurantsMapView;
