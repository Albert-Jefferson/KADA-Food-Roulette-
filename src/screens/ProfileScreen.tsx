import { useNavigate } from 'react-router-dom'
import { useLocketPhotos } from '../hooks/useLocketPhotos'

export default function ProfileScreen() {
  const navigate = useNavigate()
  const { photos } = useLocketPhotos()

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen pb-[90px]">
      <header className="w-full top-0 sticky bg-background z-40 px-margin-mobile py-base pt-safe flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="font-headline-md text-primary tracking-tight">Food Roulette</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-white border border-subtle-gray hover:bg-surface-container-low transition-colors shadow-sm">
          <span className="material-symbols-outlined text-on-surface-variant">settings</span>
        </button>
      </header>

      <main className="w-full max-w-lg mx-auto px-margin-mobile space-y-stack-lg pb-stack-lg">
        {/* Profile section */}
        <section className="flex flex-col items-center mt-4">
          <div className="relative mb-stack-md">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface-white shadow-md">
              <img alt="Avatar" className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzdpLQwbET5oIrmx2HMR1agserG2CL_KEaDkKAKrZQ4bwvgqQBRvGZWQtc_o8tuee-kgx95PW6wPPag1Zq2uwUVnVuw9JbCqz_A9wD7n0DHER6rpgUgj-Pl9SG3adVWE-IVhwikrN1xFki09DLu0ukA4J7ode5PTSdZuFBo1mmC6_NI_MLf8jzdD6d5jPN16hz0_7d6hEsT2aZ7i6PALsf8g1Mgrf9LuoAkEPA5awpT0WtUgOytqVycg"/>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-surface-white rounded-full flex items-center justify-center shadow-sm border border-subtle-gray">
              <span className="material-symbols-outlined text-streak-gold text-lg" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
            </div>
          </div>
          <h2 className="font-headline-lg-mobile text-on-background">Linh Nguyễn</h2>
          <p className="font-body-md text-on-surface-variant">@linh_foodie</p>
        </section>

        {/* Stats Bar */}
        <section className="grid grid-cols-3 gap-3 bg-surface-white rounded-xl p-4 border border-subtle-gray shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          {[
            {icon:'photo_library',val:'24',label:'Locket'},
            {icon:'location_on',val:'48',label:'Check-in'},
            {icon:'local_fire_department',val:'7',label:'Ngày streak',gold:true},
          ].map((s,i)=>(
            <div key={i} className={`flex flex-col items-center text-center ${i<2?'border-r border-subtle-gray':''}`}>
              <div className={`w-10 h-10 ${s.gold?'bg-[#fff8e1] text-streak-gold':'bg-surface-container-low text-primary'} rounded-full flex items-center justify-center mb-2`}>
                <span className="material-symbols-outlined" style={s.gold?{fontVariationSettings:"'FILL' 1"}:{}}>{s.icon}</span>
              </div>
              <span className="font-headline-md text-on-background">{s.val}</span>
              <span className="font-caption text-caption text-on-surface-variant">{s.label}</span>
            </div>
          ))}
        </section>

        {/* Taste Profile Radar */}
        <section className="bg-surface-white rounded-xl p-6 border border-subtle-gray shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <h3 className="font-headline-md text-on-background mb-4">Gu ẩm thực của bạn</h3>
          <div className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center mb-2">
            <div className="absolute inset-0 m-auto w-full h-full border border-subtle-gray rounded-full opacity-30"/>
            <div className="absolute inset-0 m-auto w-3/4 h-3/4 border border-subtle-gray rounded-full opacity-50"/>
            <div className="absolute inset-0 m-auto w-2/4 h-2/4 border border-subtle-gray rounded-full opacity-70"/>
            <div className="absolute inset-0 m-auto w-full h-[1px] bg-subtle-gray rotate-0"/>
            <div className="absolute inset-0 m-auto w-full h-[1px] bg-subtle-gray rotate-[72deg]"/>
            <div className="absolute inset-0 m-auto w-full h-[1px] bg-subtle-gray rotate-[144deg]"/>
            <svg className="absolute w-[85%] h-[85%] z-10 drop-shadow-md" viewBox="0 0 100 100">
              <path d="M 50 15 L 85 40 L 75 80 L 20 70 L 15 35 Z" fill="rgba(255,90,95,0.2)" stroke="#b52330" strokeLinejoin="round" strokeWidth="2"/>
              {[[50,15],[85,40],[75,80],[20,70],[15,35]].map(([cx,cy],i)=>(
                <circle key={i} cx={cx} cy={cy} r={3} fill="#b52330"/>
              ))}
            </svg>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 font-label-strong text-caption text-on-surface-variant">Spicy</div>
            <div className="absolute top-1/4 right-0 translate-x-4 font-label-strong text-caption text-on-surface-variant">Sweet</div>
            <div className="absolute bottom-4 right-4 translate-x-4 translate-y-4 font-label-strong text-caption text-on-surface-variant">Healthy</div>
            <div className="absolute bottom-4 left-4 -translate-x-4 translate-y-4 font-label-strong text-caption text-on-surface-variant">Savory</div>
            <div className="absolute top-1/4 left-0 -translate-x-4 font-label-strong text-caption text-on-surface-variant">Sour</div>
          </div>
          <p className="text-center font-body-md text-caption text-on-surface-variant mt-4">
            Bạn là tín đồ của vị <span className="font-label-strong text-primary">Cay</span> và <span className="font-label-strong text-primary">Ngọt</span>!
          </p>
        </section>

        {/* Allergy settings */}
        <section className="bg-surface-white rounded-xl p-6 border border-subtle-gray shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <h3 className="font-headline-md text-on-background mb-2">Thiết lập Dị ứng</h3>
          <p className="font-body-md text-caption text-on-surface-variant mb-4">Các lựa chọn này sẽ loại trừ các nhà hàng tương ứng khỏi kết quả quay.</p>
          <div className="space-y-3">
            {[{icon:'set_meal',label:'Hải sản'},{icon:'nutrition',label:'Đậu phộng'},{icon:'water_drop',label:'Sữa'},{icon:'bakery_dining',label:'Gluten'},{icon:'egg',label:'Trứng'}].map(a=>(
              <div key={a.label} className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl border border-transparent hover:border-subtle-gray transition-all">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">{a.icon}</span>
                  <span className="font-label-strong text-on-background">{a.label}</span>
                </div>
                <button className="w-10 h-6 bg-subtle-gray rounded-full relative transition-colors">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"/>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Content tabs */}
        <section className="mt-stack-lg">
          <div className="flex border-b border-subtle-gray mb-stack-md">
            <button className="flex-1 pb-3 text-center border-b-2 border-primary font-label-strong text-primary">Locket của tôi</button>
            <button className="flex-1 pb-3 text-center border-b-2 border-transparent font-label-strong text-on-surface-variant hover:text-on-background">Thành tích</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 relative aspect-[2/1] rounded-xl overflow-hidden shadow-sm">
              <img alt="Spicy Ramen" className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Xx5qXA1RVI0BLVvOfuaiYjKPQMPZqlh1eayun6WRA2lu0hAsjj86vbPh0oMJeag5zDwjPE6yQa68H-90hxkp5h6_F2E_dKZ3KVV9KJ8SL4EqcyGmvio9Z-HM03RUGisW4ALhXaeP3bTVdFUI0VEpB0yd84XuFZSS9W4E7xIn-YeSDYnyqosmeNJpgK9PR94VBbwTPNPgrHyETF4mlyUVf2gQIGKhf_vJtTkAm3Z7xIJN438u6H1gZQ"/>
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-surface-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-white" style={{fontVariationSettings:"'FILL' 1"}}>restaurant</span>
                  </span>
                  <span className="font-label-strong text-caption text-white">Mì Cay Sasin</span>
                </div>
              </div>
            </div>
            {photos.length > 0 ? (
              photos.slice(0, 4).map((p, i) => (
                <div key={p.id} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                  <img alt="locket" className="w-full h-full object-cover" src={p.dataUrl}/>
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-primary" style={i===0?{fontVariationSettings:"'FILL' 1"}:{}}>favorite</span>
                  </div>
                </div>
              ))
            ) : (
              [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAvytG0FXxSjsRcadn9ZEhYUSfa-ZJ19vIIzvM7TZpD-HqbdtqBfyuE8P06SeT28j8RXSx32MKeV3EA3MjcnQOFqGBqw8hG13vbiQiPI1zCy760-YvYRg4kplGjFBM5iaGIKwX8hLo9QADgN2TFpc4HlaErv0w1guN0oGH79DAIXMukdjUMexDvIHtTtDSPbiqUUybWoqjh8WUSwpbUF8qRK8Ub_u6A8w2zE2FojhTgCVaGDg6BiHI0ow',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuC5xM8VugMzaTBHDVutxOO_sAm9mQ9s-JbO-P09MSPK5zkcz719fPoo7c4_jpGE-s9hotq5yLnHBqFjbZnL0tujgLsBKJmwDoXTftJUze1SkoQYdcAfY1vyd6FZb5YOXNl0PCsuPKi93CTh0avfXp71c-tNW72tLvmBieJ_eP6YzS5j8g4p_46dTiIxWJcHMTQiqjimPBHsCnHNGC7zq4hC0Ql36l3kLVHrvFxYPN1ckU2B7i4IMFdJlQ'
              ].map((src,i)=>(
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                  <img alt="locket" className="w-full h-full object-cover" src={src}/>
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-primary" style={i===0?{fontVariationSettings:"'FILL' 1"}:{}}>favorite</span>
                  </div>
                </div>
              ))
            )}
          </div>
          <button className="w-full mt-4 py-3 bg-surface-container-low border border-subtle-gray rounded-xl font-label-strong text-on-background hover:bg-surface-container-high transition-colors">Xem tất cả locket</button>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe border-t border-subtle-gray bg-surface-white shadow-md rounded-t-xl md:hidden">
        <button className="flex flex-col items-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-all rounded-xl" onClick={()=>navigate('/')}>
          <span className="material-symbols-outlined mb-1">restaurant</span>
          <span className="font-label-strong text-caption">Home</span>
        </button>
        <button className="flex flex-col items-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-all rounded-xl" onClick={()=>navigate('/locket')}>
          <span className="material-symbols-outlined mb-1">photo_library</span>
          <span className="font-label-strong text-caption">Locket</span>
        </button>
        <button className="flex flex-col items-center bg-primary-container text-on-primary-container rounded-xl px-4 py-2 scale-90">
          <span className="material-symbols-outlined mb-1" style={{fontVariationSettings:"'FILL' 1"}}>person</span>
          <span className="font-label-strong text-caption">Profile</span>
        </button>
      </nav>
    </div>
  )
}
