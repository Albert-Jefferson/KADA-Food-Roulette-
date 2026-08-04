import { useNavigate } from 'react-router-dom'
import { useGroupSpin } from '../hooks/useGroupSpin'

function DynamicWheel({ dishes, rotation }: { dishes: {name:string}[], rotation: number }) {
  const colors = ['#ff5a5f','#ffdad8','#ffb780','#ffdcc4','#55a37a','#a3f4c5','#FFC107','#efe7d9'];
  const n = dishes.length;
  const sliceAngle = 360 / n;
  
  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent) * 50;
    const y = Math.sin(2 * Math.PI * percent) * 50;
    return [50 + x, 50 + y];
  };

  return (
    <div 
      className="relative w-full h-full rounded-full border-8 border-surface-white overflow-hidden bg-surface-container-low" 
      style={{
        boxShadow:'0 20px 60px rgba(0,0,0,0.15)',
        transform: `rotate(${rotation}deg)`,
        transition: rotation > 0 ? 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
      }}
    >
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {dishes.map((d, i) => {
          const startPercent = i / n;
          const endPercent = (i + 1) / n;
          const midPercent = (startPercent + endPercent) / 2;
          const midAngle = midPercent * 360;
          
          const [startX, startY] = getCoordinatesForPercent(startPercent);
          const [endX, endY] = getCoordinatesForPercent(endPercent);
          const largeArcFlag = n === 1 ? 1 : sliceAngle > 180 ? 1 : 0;
          const pathData = `M 50 50 L ${startX} ${startY} A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
          
          return (
            <g key={i}>
              <path d={pathData} fill={colors[i % colors.length]} />
              <text 
                x="75" 
                y="50" 
                fill="#ffffff" 
                fontSize="5" 
                fontWeight="bold" 
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${midAngle}, 50, 50)`}
                style={{ textShadow: '0px 1px 2px rgba(0,0,0,0.5)' }}
              >
                {d.name.length > 9 ? d.name.substring(0, 8) + '...' : d.name}
              </text>
            </g>
          );
        })}
      </svg>
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-surface-white rounded-full shadow-md border-4 border-subtle-gray flex items-center justify-center z-10">
          <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings:"'FILL' 1"}}>restaurant</span>
        </div>
      </div>
    </div>
  );
}

export default function GroupSpinScreen() {
  const navigate = useNavigate()
  const { inputValue, setInputValue, dishes, addDish, removeDish, handleSpin, isSpinning, rotation } = useGroupSpin()

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
          <h1 className="font-headline-lg-mobile text-on-surface mb-stack-sm">Tạo Vòng Quay</h1>
          <p className="font-body-md text-on-surface-variant">Thêm các món ăn bạn muốn vào vòng quay</p>
        </div>

        {/* Input Add Dish */}
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Nhập tên món ăn..." 
            className="flex-1 bg-surface-white border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addDish()}
          />
          <button 
            className="bg-primary text-on-primary rounded-xl px-4 py-3 flex items-center justify-center disabled:opacity-50"
            onClick={addDish}
            disabled={!inputValue.trim()}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>

        <div className="bg-surface-white rounded-xl border border-subtle-gray shadow-sm overflow-hidden">
          {dishes.length === 0 ? (
             <div className="p-6 text-center text-on-surface-variant font-body-md">
                Chưa có món ăn nào. Hãy thêm vài món để bắt đầu quay!
             </div>
          ) : (
            dishes.map((d, i) => (
              <div key={d.id} className={`flex items-center gap-4 px-4 py-3 ${i < dishes.length - 1 ? 'border-b border-subtle-gray' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-headline-md text-on-primary-container">
                  <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings:"'FILL' 1"}}>restaurant</span>
                </div>
                <span className="flex-1 font-label-strong text-on-surface">{d.name}</span>
                <button className="text-on-surface-variant hover:text-error p-2" onClick={() => removeDish(d.id)}>
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>
            ))
          )}
        </div>

        {dishes.length > 0 && (
          <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">info</span>
            <p className="font-body-md text-on-surface-variant text-sm">Đã thêm {dishes.length} món ăn. Cần ít nhất 2 món để quay.</p>
          </div>
        )}

        <button 
          className="w-full bg-primary text-on-primary font-headline-md py-4 rounded-xl squishy-btn flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={dishes.length < 2 || isSpinning}
          onClick={handleSpin}
        >
          <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>casino</span>
          Quay ngay!
        </button>
        <button className="font-label-strong text-on-surface-variant text-center hover:text-on-surface" onClick={()=>navigate('/')}>Hủy</button>
      </main>

      {/* Spinning Overlay */}
      <div className={`fixed inset-0 bg-background/90 backdrop-blur-sm z-[100] flex flex-col items-center justify-center px-4 transition-opacity duration-300 ${isSpinning ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <h2 className="font-headline-lg text-primary drop-shadow-md mb-8 animate-pulse">Đang quay...</h2>
        <div className="relative w-full max-w-sm aspect-square">
           <div className="absolute inset-0 bg-primary-fixed opacity-50 rounded-full blur-3xl -z-10 transform scale-90"/>
           <DynamicWheel dishes={dishes} rotation={rotation} />
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
             <span className="material-symbols-outlined text-primary text-4xl transform rotate-180 drop-shadow-md" style={{fontVariationSettings:"'FILL' 1"}}>change_history</span>
           </div>
        </div>
      </div>
    </div>
  )
}
