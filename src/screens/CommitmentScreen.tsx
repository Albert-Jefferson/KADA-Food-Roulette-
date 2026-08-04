import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function CommitmentScreen() {
  const navigate = useNavigate()
  const [selectedStake, setSelectedStake] = useState(1)
  const [selectedWitness, setSelectedWitness] = useState(0)

  const stakes = [
    { icon: 'sentiment_satisfied', label: 'Just Spin', price: '0đ', desc: 'No risk, standard rewards.' },
    { icon: 'gavel', label: 'Commit', price: '5,000đ', desc: '2x Rewards if you arrive.' },
    { icon: 'diamond', label: 'Confident', price: '10,000đ', desc: '5x Rewards & Golden Badge.' },
  ]
  const witnesses = ['Linh T.', 'Minh H.', 'Trang N.']

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24 md:pb-0 font-body-md">
      {/* Desktop header */}
      <header className="hidden md:flex justify-between items-center px-margin-desktop py-base w-full max-w-7xl mx-auto bg-background sticky top-0 z-50">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings:"'FILL' 1"}}>local_fire_department</span>
          <span className="font-display-hero text-headline-md tracking-tight">Food Roulette</span>
        </div>
        <nav className="flex gap-8">
          {['Home','Locket','Profile'].map(n=>(
            <a key={n} className="text-on-surface-variant font-label-strong hover:bg-surface-container-low px-4 py-2 rounded-lg transition-colors" href="#" onClick={e=>{e.preventDefault();n==='Home'&&navigate('/')}}>{n}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 font-label-strong bg-surface-container-low px-4 py-2 rounded-full cursor-pointer">1,250 🪙</div>
      </header>

      {/* Mobile header */}
      <header className="md:hidden flex justify-between items-center px-margin-mobile py-base w-full bg-background sticky top-0 z-50 border-b border-subtle-gray/30">
        <button className="text-on-surface-variant p-2" onClick={()=>navigate('/spin-result')}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="font-headline-md">Khế Ước</span>
        <div className="w-10"/>
      </header>

      <main className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="text-center mb-stack-lg">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-sm">Commitment Required</h1>
          <p className="text-on-surface-variant font-body-md">Lock in your choice to earn rewards.</p>
        </div>

        {/* Restaurant card */}
        <section className="glass-card rounded-xl p-4 mb-stack-lg flex flex-col md:flex-row gap-4 shadow-sm relative overflow-hidden group">
          <div className="w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden relative">
            <div className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{backgroundImage:"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhoynzM4wF0hOi8FxHQLLChIl6-paWr8IkNzFXsirX_iojSFX5D5JVV-g5_uGYfvRHkE_QbUqw0ItrLmG8MQzroMDBJxK85kQx0s6gGe-oJqLKE1pxKl8lo0JPWA_KGlqumQieg5ZvcT1kaL3nVPYfQ0B1QpHAPu9wojGz5PpgqFpxH-HBtpIR0EgqwxO58zZeYsNSmsdQy2p4JMyrLsFk3o5jBgB_QQflEC7ZQ7OA44VTxSQTeewV1g')"}}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
            <div className="absolute bottom-2 left-2 flex items-center gap-2">
              <div className="bg-surface-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 font-caption text-caption text-on-surface">
                <span className="material-symbols-outlined text-streak-gold text-[16px]" style={{fontVariationSettings:"'FILL' 1"}}>star</span>4.8
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-headline-md">Burger Joint Supreme</h2>
              <span className="material-symbols-outlined text-primary bg-primary-fixed/30 p-2 rounded-full">restaurant</span>
            </div>
            <p className="text-on-surface-variant font-body-md text-sm mb-4">123 Foodie Lane, District 1 • 2.5km away</p>
            <div className="bg-surface-container p-3 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary">timer</span>
              <div>
                <p className="font-label-strong">Time to Arrive</p>
                <p className="font-caption text-caption text-on-surface-variant">60 Minutes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stake Selection */}
        <section className="mb-stack-lg">
          <h3 className="font-headline-md mb-stack-md">Select Your Stake</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stakes.map((s,i)=>(
              <div key={i} className={`rounded-xl p-4 cursor-pointer flex flex-col items-center text-center relative transition-all ${selectedStake===i?'stake-card-selected shadow-sm':'bg-surface-white border border-subtle-gray hover:border-primary/50'}`}
                onClick={()=>setSelectedStake(i)}>
                {selectedStake===i&&<div className="absolute top-2 right-2"><span className="material-symbols-outlined text-primary" style={{fontVariationSettings:"'FILL' 1"}}>check_circle</span></div>}
                <div className={`p-3 rounded-full mb-3 ${selectedStake===i?'bg-primary-fixed':'bg-surface-container-low'}`}>
                  <span className="material-symbols-outlined text-primary text-[32px]">{s.icon}</span>
                </div>
                <h4 className="font-label-strong mb-1">{s.label}</h4>
                <p className="font-headline-md text-primary mb-2">{s.price}</p>
                <p className="font-caption text-caption text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Witness Selection */}
        <section className="mb-stack-lg">
          <div className="flex justify-between items-center mb-stack-md">
            <h3 className="font-headline-md">Choose a Witness</h3>
            <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-full">Optional</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
            <div className="flex-shrink-0 w-20 flex flex-col items-center gap-2 snap-start">
              <button className="w-16 h-16 rounded-full border-2 border-dashed border-subtle-gray flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors bg-surface-container-lowest">
                <span className="material-symbols-outlined">add</span>
              </button>
              <span className="font-caption text-caption text-center">Add New</span>
            </div>
            {witnesses.map((w,i)=>(
              <div key={i} className={`flex-shrink-0 w-20 flex flex-col items-center gap-2 snap-start cursor-pointer relative ${selectedWitness===i?'opacity-100':'opacity-70 hover:opacity-100 transition-opacity'}`}
                onClick={()=>setSelectedWitness(i)}>
                {selectedWitness===i&&<div className="absolute -top-1 -right-1 bg-surface-white rounded-full z-10"><span className="material-symbols-outlined text-status-open text-[18px]" style={{fontVariationSettings:"'FILL' 1"}}>check_circle</span></div>}
                <div className={`w-16 h-16 rounded-full overflow-hidden ${selectedWitness===i?'border-2 border-status-open p-0.5':''}`}>
                  <div className="w-full h-full bg-surface-container-high rounded-full flex items-center justify-center font-headline-md text-on-surface-variant">{w[0]}</div>
                </div>
                <span className={`font-caption text-caption text-center ${selectedWitness===i?'font-semibold text-status-open':''}`}>{w}</span>
              </div>
            ))}
          </div>
          <p className="font-caption text-caption text-on-surface-variant mt-2 text-center md:text-left">Witnesses can verify your arrival if geolocation fails.</p>
        </section>

        {/* CTA */}
        <section className="mt-stack-lg pt-stack-lg border-t border-subtle-gray/50 flex flex-col items-center">
          <button className="w-full md:w-auto min-w-[280px] bg-primary text-on-primary font-headline-md py-4 px-8 rounded-xl squishy-btn flex items-center justify-center gap-2"
            onClick={()=>navigate('/check-in')}>
            <span className="material-symbols-outlined">lock</span>TẠO KHẾ ƯỚC
          </button>
          <p className="font-caption text-caption text-on-surface-variant mt-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">info</span>Stakes are deducted immediately and held in escrow.
          </p>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface-white border-t border-subtle-gray rounded-t-xl shadow-md">
        {[{icon:'restaurant',label:'Home',path:'/'},{icon:'photo_library',label:'Locket',path:'/locket'},{icon:'person',label:'Profile',path:'/profile'}].map(n=>(
          <a key={n.label} className="flex flex-col items-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-all rounded-xl" href="#" onClick={e=>{e.preventDefault();navigate(n.path)}}>
            <span className="material-symbols-outlined">{n.icon}</span>
            <span className="font-label-strong text-caption mt-1">{n.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
