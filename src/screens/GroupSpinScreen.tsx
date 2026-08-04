import { useNavigate } from 'react-router-dom'

export default function GroupSpinScreen() {
  const navigate = useNavigate()
  const members = [
    { name:'Linh T.', avatar:'L', ready:true },
    { name:'Minh H.', avatar:'M', ready:true },
    { name:'Trang N.', avatar:'T', ready:false },
    { name:'Bạn', avatar:'B', ready:true },
  ]
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen pb-24">
      <header className="md:hidden flex justify-between items-center px-margin-mobile py-base w-full bg-background sticky top-0 z-50 border-b border-subtle-gray/30">
        <button className="text-on-surface-variant p-2" onClick={()=>navigate('/')}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="font-headline-md">Group Spin</span>
        <div className="w-10"/>
      </header>

      <main className="max-w-md mx-auto px-margin-mobile py-stack-lg flex flex-col gap-stack-lg">
        <div className="text-center">
          <h1 className="font-headline-lg-mobile text-on-surface mb-stack-sm">Ai sẽ quay?</h1>
          <p className="font-body-md text-on-surface-variant">Tất cả thành viên sẵn sàng chưa?</p>
        </div>

        <div className="bg-surface-white rounded-xl border border-subtle-gray shadow-sm overflow-hidden">
          {members.map((m,i)=>(
            <div key={i} className={`flex items-center gap-4 px-4 py-3 ${i<members.length-1?'border-b border-subtle-gray':''}`}>
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-headline-md text-on-primary-container">{m.avatar}</div>
              <span className="flex-1 font-label-strong text-on-surface">{m.name}</span>
              <span className={`font-caption flex items-center gap-1 ${m.ready?'text-status-open':'text-on-surface-variant'}`}>
                <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings:m.ready?"'FILL' 1":"'FILL' 0"}}>{m.ready?'check_circle':'radio_button_unchecked'}</span>
                {m.ready?'Sẵn sàng':'Chờ...'}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary">group</span>
          <p className="font-body-md text-on-surface-variant text-sm">3/4 thành viên sẵn sàng. Đợi Trang N. xác nhận...</p>
        </div>

        <button className="w-full bg-primary text-on-primary font-headline-md py-4 rounded-xl squishy-btn flex items-center justify-center gap-2"
          onClick={()=>navigate('/spin-result')}>
          <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>casino</span>
          Quay ngay!
        </button>
        <button className="font-label-strong text-on-surface-variant text-center hover:text-on-surface" onClick={()=>navigate('/')}>Hủy</button>
      </main>
    </div>
  )
}
