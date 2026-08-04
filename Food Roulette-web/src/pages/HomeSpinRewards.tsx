import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomeSpinRewards: React.FC = () => {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  // State for filters
  const [selectedPrice, setSelectedPrice] = useState<string>('$$');
  const [selectedDistance, setSelectedDistance] = useState<string>('Trung bình (2-5km)');
  const [selectedStyle, setSelectedStyle] = useState<string>('Cơm');
  const [selectedTaste, setSelectedTaste] = useState<string>('Cay');
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);

  const toggleAllergy = (a: string) => {
    setSelectedAllergies(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);
  };

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    // Random rotation between 3 and 6 full spins plus random extra degrees
    const randomDeg = Math.floor(Math.random() * 360) + (360 * (Math.floor(Math.random() * 3) + 3));
    const newRotation = rotation + randomDeg;
    setRotation(newRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      navigate('/spin/result');
    }, 3000);
  };

  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col items-center">
      {/* Gamification Status Bar (Mobile primarily) */}
      <div className="w-full max-w-md flex justify-between items-center bg-surface-white rounded-xl p-4 squishy-card mb-stack-lg md:hidden">
        <div className="flex flex-col items-start">
          <span className="font-label-strong text-on-surface-variant text-caption">Current Streak</span>
          <div className="flex items-center gap-1 text-streak-gold font-headline-md-mobile">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <span className="">7 Days</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-label-strong text-on-surface-variant text-caption">Seed Progress</span>
          <div className="flex gap-1 mt-1">
            <div className="w-3 h-4 bg-tertiary rounded-sm"></div>
            <div className="w-3 h-4 bg-tertiary rounded-sm"></div>
            <div className="w-3 h-4 bg-tertiary rounded-sm"></div>
            <div className="w-3 h-4 bg-tertiary-fixed rounded-sm"></div>
            <div className="w-3 h-4 bg-tertiary-fixed rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* The Roulette Wheel Section */}
      <div className="w-full max-w-md mb-stack-lg flex flex-col gap-4">
        {/* Filters */}
        <div className="flex flex-col gap-2">
          <span className="font-label-strong text-on-surface-variant text-caption px-2">Mức giá</span>
          <div className="flex gap-2 overflow-x-auto pb-1 px-2 no-scrollbar">
            {['$', '$$', '$$$', '$$$$'].map(p => (
              <button key={p} onClick={() => setSelectedPrice(p)} className={`px-4 py-1.5 rounded-full font-label-strong text-sm whitespace-nowrap ${selectedPrice === p ? 'bg-primary text-on-primary' : 'bg-surface-container border border-subtle-gray text-on-surface-variant'}`}>{p}</button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-label-strong text-on-surface-variant text-caption px-2">Khoảng cách</span>
          <div className="flex gap-2 overflow-x-auto pb-1 px-2 no-scrollbar">
            {['Gần (<2km)', 'Trung bình (2-5km)', 'Xa (>5km)'].map(d => (
              <button key={d} onClick={() => setSelectedDistance(d)} className={`px-4 py-1.5 rounded-full font-label-strong text-sm whitespace-nowrap ${selectedDistance === d ? 'bg-primary text-on-primary' : 'bg-surface-container border border-subtle-gray text-on-surface-variant'}`}>{d}</button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="font-label-strong text-on-surface-variant text-caption px-2">Gu ẩm thực</span>
          <div className="flex gap-2 overflow-x-auto pb-1 px-2 no-scrollbar">
            {['Ăn no', 'Ăn nhanh', 'Cơm', 'Đồ nước'].map(s => (
              <button key={s} onClick={() => setSelectedStyle(s)} className={`px-4 py-1.5 rounded-full font-label-strong text-sm whitespace-nowrap ${selectedStyle === s ? 'bg-primary text-on-primary' : 'bg-surface-container border border-subtle-gray text-on-surface-variant'}`}>{s}</button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-label-strong text-on-surface-variant text-caption px-2">Khẩu vị</span>
          <div className="flex gap-2 overflow-x-auto pb-1 px-2 no-scrollbar">
            {['Chua', 'Cay', 'Mặn', 'Ngọt'].map(t => (
              <button key={t} onClick={() => setSelectedTaste(t)} className={`px-4 py-1.5 rounded-full font-label-strong text-sm whitespace-nowrap ${selectedTaste === t ? 'bg-primary text-on-primary' : 'bg-surface-container border border-subtle-gray text-on-surface-variant'}`}>{t}</button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="font-label-strong text-on-surface-variant text-caption px-2">Dị ứng</span>
          <div className="flex gap-2 overflow-x-auto pb-1 px-2 no-scrollbar">
            {['Hải sản', 'Đậu phộng', 'Sữa', 'Gluten', 'Trứng'].map(a => (
              <button key={a} onClick={() => toggleAllergy(a)} className={`px-4 py-1.5 rounded-full font-label-strong text-sm whitespace-nowrap ${selectedAllergies.includes(a) ? 'bg-primary text-on-primary' : 'bg-surface-container border border-subtle-gray text-on-surface-variant'}`}>{a}</button>
            ))}
          </div>
        </div>
      </div>

      <section className="relative w-full max-w-md aspect-square mb-stack-lg flex items-center justify-center">
        {/* Decorative background blob */}
        <div className="absolute inset-0 bg-primary-fixed opacity-50 rounded-full blur-3xl -z-10 transform scale-90"></div>
        {/* Wheel Container */}
        <div 
          ref={wheelRef}
          className="relative w-full h-full rounded-full border-8 border-surface-white shadow-xl overflow-hidden bg-surface-container-low cursor-pointer"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
          }}
          onClick={handleSpin}
        >
          {/* SVG Wheel Representation */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Slices */}
            <path d="M 50 50 L 100 50 A 50 50 0 0 1 85.35533905932738 85.35533905932738 Z" fill="#ff5a5f"></path>
            <path d="M 50 50 L 85.35533905932738 85.35533905932738 A 50 50 0 0 1 50 100 Z" fill="#ffdad8"></path>
            <path d="M 50 50 L 50 100 A 50 50 0 0 1 14.644660940672622 85.35533905932738 Z" fill="#ffb780"></path>
            <path d="M 50 50 L 14.644660940672622 85.35533905932738 A 50 50 0 0 1 0 50 Z" fill="#ffdcc4"></path>
            <path d="M 50 50 L 0 50 A 50 50 0 0 1 14.644660940672622 14.644660940672622 Z" fill="#55a37a"></path>
            <path d="M 50 50 L 14.644660940672622 14.644660940672622 A 50 50 0 0 1 50 0 Z" fill="#a3f4c5"></path>
            <path d="M 50 50 L 50 0 A 50 50 0 0 1 85.35533905932738 14.644660940672622 Z" fill="#FFC107"></path>
            <path d="M 50 50 L 85.35533905932738 14.644660940672622 A 50 50 0 0 1 100 50 Z" fill="#efe7d9"></path>
          </svg>
          {/* Center Pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-surface-white rounded-full shadow-md border-4 border-subtle-gray flex items-center justify-center z-10" style={{ transform: `rotate(${-rotation}deg)`, transition: isSpinning ? 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
            </div>
          </div>
          {/* Icons for slices */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="material-symbols-outlined absolute top-1/4 right-1/4 text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>local_pizza</span>
            <span className="material-symbols-outlined absolute bottom-1/4 right-1/4 text-on-surface" style={{ fontVariationSettings: "'FILL' 1" }}>ramen_dining</span>
            <span className="material-symbols-outlined absolute bottom-1/4 left-1/4 text-on-surface" style={{ fontVariationSettings: "'FILL' 1" }}>lunch_dining</span>
            <span className="material-symbols-outlined absolute top-1/4 left-1/4 text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>icecream</span>
          </div>
        </div>
        {/* Pointer */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <span className="material-symbols-outlined text-primary text-4xl transform rotate-180 drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>change_history</span>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="w-full max-w-md grid grid-cols-1 md:grid-cols-2 gap-stack-md mb-stack-lg">
        {/* Primary Action */}
        <button 
          className="w-full col-span-1 md:col-span-2 bg-primary text-on-primary font-headline-md-mobile py-4 rounded-xl squishy-button flex items-center justify-center gap-2 active:scale-95" 
          onClick={handleSpin}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>casino</span>
          Solo Spin
        </button>
        {/* Secondary Actions */}
        <Link to="/group-spin/who-spins" className="w-full bg-surface-white border-2 border-subtle-gray text-on-surface font-label-strong py-3 rounded-xl hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">group</span>
          Group Spin
        </Link>
        <Link to="/locket" className="w-full bg-surface-white border-2 border-subtle-gray text-on-surface font-label-strong py-3 rounded-xl hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">photo_library</span>
          Locket Feed
        </Link>
      </div>

      {/* Recent Discovery Card */}
      <div className="w-full max-w-2xl text-left">
        <h3 className="font-headline-md-mobile md:font-headline-md text-on-surface mb-stack-md px-2">Recent Discovery</h3>
        <div className="bg-surface-white rounded-xl overflow-hidden squishy-card flex flex-col sm:flex-row">
          {/* Image Side */}
          <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:min-h-[200px]">
            <img 
              className="w-full h-full object-cover" 
              alt="Ramen"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcawci1qIGgoudRL8ZWJaPNu6jXXckUuYagsjQMXrqBfGBR8mg8n7_tw9HaS5XF8wS1Iy_4JqTxCH0OgG-rVad79IgBJ5CXwHeqqBP3d8rBRpQDISYhZJrSQWrBV5OGsnCJJPhOQp_5k9gDv-hkzJII2MQR19GuJJqnNgnwsYeexbJqOBnB9a77o4DeM_lBV4Ni_Nv0fAUGvCFVcYi7zAc999dYvdN2mGSGHey3h_8IaqP6u50Id19KQ" 
            />
            {/* Status Indicator overlay */}
            <div className="absolute bottom-3 left-3 flex gap-2">
              <div className="bg-surface-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-streak-gold text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="font-label-strong text-caption text-on-surface">4.8</span>
              </div>
            </div>
          </div>
          {/* Content Side */}
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-headline-md-mobile text-on-surface">Umami Noodle Bar</h4>
                <span className="material-symbols-outlined text-subtle-gray hover:text-primary cursor-pointer transition-colors">favorite</span>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm mb-3">Japanese • Ramen • $$</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-surface-container-low border border-subtle-gray px-2 py-1 rounded-md font-caption text-on-surface-variant">Spicy</span>
                <span className="bg-surface-container-low border border-subtle-gray px-2 py-1 rounded-md font-caption text-on-surface-variant">Vegetarian Options</span>
              </div>
            </div>
            <button className="text-primary font-label-strong flex items-center gap-1 self-start hover:underline">
              View Details
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSpinRewards;
