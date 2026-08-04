import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

export default function HomeScreen() {
  const navigate = useNavigate()
  const wheelRef = useRef<HTMLDivElement>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)

  const handleSpin = () => {
    if (isSpinning) return
    setIsSpinning(true)
    const randomDeg = Math.floor(Math.random() * 360) + (360 * (Math.floor(Math.random() * 3) + 3))
    const newRotation = rotation + randomDeg
    setRotation(newRotation)
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)'
      wheelRef.current.style.transform = `rotate(${newRotation}deg)`
    }
    setTimeout(() => { setIsSpinning(false); navigate('/spin-result') }, 3000)
  }

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen pb-24">
      <header className="w-full top-0 sticky z-40 bg-background">
        <div className="flex justify-between items-center px-margin-mobile py-base w-full max-w-7xl mx-auto md:px-margin-desktop">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>local_fire_department</span>
            <span className="font-display-hero text-headline-md tracking-tight">Food Roulette</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-label-strong rounded-full px-3 py-1 cursor-pointer">
              <span className="text-on-background">1,250</span><span>🪙</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-primary font-bold font-label-strong hover:bg-surface-container-low transition-colors px-3 py-2 rounded-lg flex items-center gap-2" href="#">
                <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>restaurant</span>Home
              </a>
              <a className="text-on-surface-variant font-label-strong hover:bg-surface-container-low transition-colors px-3 py-2 rounded-lg flex items-center gap-2" href="#" onClick={e=>{e.preventDefault();navigate('/locket')}}>
                <span className="material-symbols-outlined">photo_library</span>Locket
              </a>
              <a className="text-on-surface-variant font-label-strong hover:bg-surface-container-low transition-colors px-3 py-2 rounded-lg flex items-center gap-2" href="#" onClick={e=>{e.preventDefault();navigate('/profile')}}>
                <span className="material-symbols-outlined">person</span>Profile
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col items-center">
        {/* Gamification Bar */}
        <div className="w-full max-w-md flex justify-between items-center bg-surface-white rounded-xl p-4 mb-stack-lg md:hidden" style={{boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
          <div className="flex flex-col items-start">
            <span className="font-label-strong text-on-surface-variant text-caption">Current Streak</span>
            <div className="flex items-center gap-1 text-streak-gold">
              <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>local_fire_department</span>
              <span className="font-headline-md">7 Days</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-label-strong text-on-surface-variant text-caption">Seed Progress</span>
            <div className="flex gap-1 mt-1">
              {[1,2,3].map(i=><div key={i} className="w-3 h-4 bg-tertiary rounded-sm"/>)}
              {[4,5].map(i=><div key={i} className="w-3 h-4 bg-tertiary-fixed rounded-sm"/>)}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="w-full max-w-md mb-stack-lg flex flex-col gap-4">
          {[
            {label:'Mức giá', opts:['$','$$','$$$','$$$$'], active:'$'},
            {label:'Khoảng cách', opts:['Gần (<2km)','Trung bình (2-5km)','Xa (>5km)'], active:'Trung bình (2-5km)'},
            {label:'Gu ẩm thực', opts:['Ăn no','Ăn nhanh','Cơm','Đồ nước'], active:'Cơm'},
            {label:'Khẩu vị', opts:['Chua','Cay','Mặn','Ngọt'], active:'Cay'},
          ].map(f=>(
            <div key={f.label} className="flex flex-col gap-2">
              <span className="font-label-strong text-on-surface-variant text-caption px-2">{f.label}</span>
              <div className="flex gap-2 overflow-x-auto pb-1 px-2 no-scrollbar">
                {f.opts.map(o=>(
                  <button key={o} className={`px-4 py-1.5 rounded-full font-label-strong text-sm whitespace-nowrap ${o===f.active?'bg-primary text-on-primary':'bg-surface-container border border-subtle-gray text-on-surface-variant'}`}>{o}</button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Wheel */}
        <section className="relative w-full max-w-md aspect-square mb-stack-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-primary-fixed opacity-50 rounded-full blur-3xl -z-10 transform scale-90"/>
          <div ref={wheelRef} className="relative w-full h-full rounded-full border-8 border-surface-white overflow-hidden bg-surface-container-low cursor-pointer" style={{boxShadow:'0 20px 60px rgba(0,0,0,0.15)'}} onClick={handleSpin}>
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <path d="M 50 50 L 100 50 A 50 50 0 0 1 85.36 85.36 Z" fill="#ff5a5f"/>
              <path d="M 50 50 L 85.36 85.36 A 50 50 0 0 1 50 100 Z" fill="#ffdad8"/>
              <path d="M 50 50 L 50 100 A 50 50 0 0 1 14.64 85.36 Z" fill="#ffb780"/>
              <path d="M 50 50 L 14.64 85.36 A 50 50 0 0 1 0 50 Z" fill="#ffdcc4"/>
              <path d="M 50 50 L 0 50 A 50 50 0 0 1 14.64 14.64 Z" fill="#55a37a"/>
              <path d="M 50 50 L 14.64 14.64 A 50 50 0 0 1 50 0 Z" fill="#a3f4c5"/>
              <path d="M 50 50 L 50 0 A 50 50 0 0 1 85.36 14.64 Z" fill="#FFC107"/>
              <path d="M 50 50 L 85.36 14.64 A 50 50 0 0 1 100 50 Z" fill="#efe7d9"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-surface-white rounded-full shadow-md border-4 border-subtle-gray flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings:"'FILL' 1"}}>restaurant</span>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <span className="material-symbols-outlined absolute top-1/4 right-1/4 text-on-primary-container" style={{fontVariationSettings:"'FILL' 1"}}>local_pizza</span>
              <span className="material-symbols-outlined absolute bottom-1/4 right-1/4 text-on-surface" style={{fontVariationSettings:"'FILL' 1"}}>ramen_dining</span>
              <span className="material-symbols-outlined absolute bottom-1/4 left-1/4 text-on-surface" style={{fontVariationSettings:"'FILL' 1"}}>lunch_dining</span>
              <span className="material-symbols-outlined absolute top-1/4 left-1/4 text-on-tertiary-container" style={{fontVariationSettings:"'FILL' 1"}}>icecream</span>
            </div>
          </div>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <span className="material-symbols-outlined text-primary text-4xl transform rotate-180 drop-shadow-md" style={{fontVariationSettings:"'FILL' 1"}}>change_history</span>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="w-full max-w-md grid grid-cols-2 gap-stack-md mb-stack-lg">
          <button className="col-span-2 bg-primary text-on-primary font-headline-md py-4 rounded-xl squishy-button flex items-center justify-center gap-2" onClick={handleSpin} disabled={isSpinning}>
            <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>casino</span>
            {isSpinning?'Đang quay...':'Solo Spin'}
          </button>
          <button className="bg-surface-white border-2 border-subtle-gray text-on-surface font-label-strong py-3 rounded-xl hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2" onClick={()=>navigate('/group-spin')}>
            <span className="material-symbols-outlined">group</span>Group Spin
          </button>
          <button className="bg-surface-white border-2 border-subtle-gray text-on-surface font-label-strong py-3 rounded-xl hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2" onClick={()=>navigate('/locket')}>
            <span className="material-symbols-outlined">photo_library</span>Locket Feed
          </button>
        </div>

        {/* Recent Discovery */}
        <div className="w-full max-w-2xl text-left">
          <h3 className="font-headline-md text-on-surface mb-stack-md px-2">Recent Discovery</h3>
          <div className="bg-surface-white rounded-xl overflow-hidden flex flex-col sm:flex-row" style={{boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
            <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto sm:min-h-[200px]">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcawci1qIGgoudRL8ZWJaPNu6jXXckUuYagsjQMXrqBfGBR8mg8n7_tw9HaS5XF8wS1Iy_4JqTxCH0OgG-rVad79IgBJ5CXwHeqqBP3d8rBRpQDISYhZJrSQWrBV5OGsnCJJPhOQp_5k9gDv-hkzJII2MQR19GuJJqnNgnwsYeexbJqOBnB9a77o4DeM_lBV4Ni_Nv0fAUGvCFVcYi7zAc999dYvdN2mGSGHey3h_8IaqP6u50Id19KQ" alt="food"/>
              <div className="absolute bottom-3 left-3"><div className="bg-surface-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1"><span className="material-symbols-outlined text-streak-gold text-sm" style={{fontVariationSettings:"'FILL' 1"}}>star</span><span className="font-label-strong text-caption text-on-surface">4.8</span></div></div>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-headline-md text-on-surface">Umami Noodle Bar</h4>
                  <span className="material-symbols-outlined text-subtle-gray hover:text-primary cursor-pointer transition-colors">favorite</span>
                </div>
                <p className="font-body-md text-on-surface-variant text-sm mb-3">Japanese • Ramen • $$</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-surface-container-low border border-subtle-gray px-2 py-1 rounded-md font-caption text-on-surface-variant">Spicy</span>
                  <span className="bg-surface-container-low border border-subtle-gray px-2 py-1 rounded-md font-caption text-on-surface-variant">Vegetarian</span>
                </div>
              </div>
              <button className="text-primary font-label-strong flex items-center gap-1 self-start hover:underline" onClick={()=>navigate('/spin-result')}>
                View Details<span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe border-t border-subtle-gray bg-surface-white rounded-t-xl shadow-md">
        <a className="flex flex-col items-center bg-primary-container text-on-primary-container rounded-xl px-4 py-2 scale-90" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>restaurant</span>
          <span className="font-label-strong text-caption mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center text-on-surface-variant px-4 py-2" href="#" onClick={e=>{e.preventDefault();navigate('/locket')}}>
          <span className="material-symbols-outlined">photo_library</span>
          <span className="font-label-strong text-caption mt-1">Locket</span>
        </a>
        <a className="flex flex-col items-center text-on-surface-variant px-4 py-2" href="#" onClick={e=>{e.preventDefault();navigate('/profile')}}>
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-strong text-caption mt-1">Profile</span>
        </a>
      </nav>
    </div>
  )
}
