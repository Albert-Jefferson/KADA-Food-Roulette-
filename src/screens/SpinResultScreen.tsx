import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function spawnConfetti(containerId: string) {
  const container = document.getElementById(containerId)
  if (!container) return
  const colors = ['#ff5a5f','#FFC107','#55a37a','#ffb780']
  for (let i = 0; i < 50; i++) {
    const el = document.createElement('div')
    el.classList.add('confetti')
    el.style.left = Math.random() * 100 + 'vw'
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    el.style.animationDuration = (Math.random() * 2 + 1.5) + 's'
    el.style.animationDelay = (Math.random() * 1) + 's'
    if (Math.random() > 0.5) { el.style.width = (Math.random() * 5 + 5) + 'px'; el.style.height = (Math.random() * 15 + 5) + 'px' }
    container.appendChild(el)
  }
  setTimeout(() => { container.innerHTML = '' }, 5000)
}

export default function SpinResultScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Custom dish passed from GroupSpinScreen
  const customDish = location.state?.customDish
  
  useEffect(() => { spawnConfetti('confetti-container') }, [])

  return (
    <div className="bg-background text-on-background antialiased min-h-screen pb-[80px]">
      <header className="w-full top-0 sticky bg-background z-40 hidden md:flex justify-between items-center px-margin-desktop py-base max-w-7xl mx-auto shadow-sm">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-2xl">local_fire_department</span>
          <span className="font-display-hero text-headline-md tracking-tight">Food Roulette</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-label-strong text-on-surface-variant">1,250 🪙</span>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" onClick={()=>navigate('/')}>close</button>
        </div>
      </header>

      <main className="w-full max-w-md mx-auto md:max-w-3xl md:mt-8 relative overflow-hidden bg-surface-white md:rounded-3xl md:shadow-lg md:border md:border-subtle-gray pb-8">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-50 overflow-hidden" id="confetti-container"/>

        {/* Hero Image */}
        <div className={`relative w-full h-[50vh] md:h-[60vh] ${customDish ? 'bg-primary-container flex items-center justify-center' : ''}`}>
          {!customDish ? (
            <img alt="Bún Bò Bà Luân" className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPXkp_PqwHdeonWUy3cMkUvQLu0I6vRU2kzzfUP4Ni8SabeF7Cq5dl3DyJCibawkf_uUpTQdYEfyAoSNbTq49ri9QImqQ0KfkTvZTuYUz6qZBJWbHakxaJFSQ-e7sbekjgT2_-VyiccCC1q3A7vrNR2cjByhNlNbQhXuqD1QIUIB-MpLFLY-xIpwTH5H2jBVSo5a4nzxfa5hqSdJJKbz_zqpqUx8is_ZzYOYnevY8LPAUsR7S75qjNhQ"/>
          ) : (
            <span className="material-symbols-outlined text-[120px] text-primary opacity-20 absolute" style={{fontVariationSettings:"'FILL' 1"}}>restaurant</span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>
          <div className="absolute top-0 left-0 w-full p-margin-mobile flex justify-between items-center z-10 md:hidden">
            <button className="bg-surface-white/20 backdrop-blur-md p-2 rounded-full text-surface-white hover:bg-surface-white/40 transition-colors" onClick={()=>navigate('/')}>
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <div className="bg-surface-white/90 px-3 py-1 rounded-full text-primary font-label-strong text-caption shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">local_fire_department</span> 1,250 🪙
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-margin-mobile flex flex-col gap-stack-sm z-10">
            <div className="flex gap-2 mb-1">
              <span className="bg-primary px-2 py-1 rounded-full text-on-primary font-label-strong text-[10px] uppercase tracking-wider">It's a Match!</span>
              {customDish ? (
                <span className="bg-surface-white/20 backdrop-blur-md px-2 py-1 rounded-full text-surface-white font-label-strong text-[10px] uppercase tracking-wider border border-surface-white/30">Custom</span>
              ) : (
                <span className="bg-surface-white/20 backdrop-blur-md px-2 py-1 rounded-full text-surface-white font-label-strong text-[10px] uppercase tracking-wider border border-surface-white/30">Vietnamese</span>
              )}
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-surface-white drop-shadow-md">
              {customDish ? customDish.name : 'Bún Bò Bà Luân'}
            </h1>
            {!customDish && (
              <div className="flex items-center gap-4 text-surface-white/90 font-body-md text-caption">
                <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-surface-white/20">
                  <span className="material-symbols-outlined text-streak-gold text-[16px]">star</span>
                  <span className="font-label-strong">4.5</span><span className="opacity-75">(128)</span>
                </div>
                <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-surface-white/20">
                  <span className="material-symbols-outlined text-[16px]">directions_walk</span>
                  <span className="font-label-strong">400m</span>
                </div>
                <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-surface-white/20">
                  <span className="material-symbols-outlined text-[16px]">payments</span>
                  <span className="font-label-strong">$$</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-margin-mobile py-stack-lg md:px-margin-desktop bg-surface-white flex flex-col gap-stack-lg relative -mt-4 rounded-t-3xl z-20">
          <div className="bg-surface-container-low p-4 rounded-xl border border-subtle-gray">
            <p className="font-body-md text-body-md text-on-surface-variant italic text-center">"Known for their rich, spicy broth and generous portions. A local favorite!"</p>
          </div>

          <div className="flex flex-col gap-stack-md mt-2">
            <button className="squishy-button w-full bg-primary border-primary-container text-on-primary py-4 rounded-xl font-headline-md flex items-center justify-center gap-2 shadow-sm hover:brightness-110"
              onClick={()=>navigate('/commitment')}>
              <span className="material-symbols-outlined">restaurant</span>Let's Eat Here!
            </button>
            <div className="flex gap-stack-md w-full">
              <button className="squishy-button flex-1 bg-surface-container border-subtle-gray text-on-surface py-3 rounded-xl font-label-strong flex items-center justify-center gap-2 shadow-sm hover:bg-surface-container-high" onClick={()=>navigate('/')}>
                <span className="material-symbols-outlined">refresh</span>Spin Again
              </button>
              <button className="squishy-button flex-1 bg-tertiary-container border-tertiary text-on-primary py-3 rounded-xl font-label-strong flex items-center justify-center gap-2 shadow-sm hover:brightness-110">
                <span className="material-symbols-outlined">directions</span>Directions
              </button>
            </div>
          </div>

          <hr className="border-t border-subtle-gray w-full my-2"/>
          <div className="flex justify-center gap-stack-lg">
            {[{icon:'bookmark',label:'Save to Locket'},{icon:'share',label:'Share Group'}].map(a=>(
              <button key={a.icon} className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-surface-container-low border border-subtle-gray flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors shadow-sm">
                  <span className="material-symbols-outlined">{a.icon}</span>
                </div>
                <span className="font-label-strong text-caption text-on-surface-variant">{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
