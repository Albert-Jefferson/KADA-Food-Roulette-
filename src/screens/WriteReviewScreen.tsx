import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function WriteReviewScreen() {
  const navigate = useNavigate()
  const [rating, setRating] = useState(4)
  const [text, setText] = useState('Nước dùng thơm đậm đà, mì vừa dai vừa mềm. Phục vụ nhanh, giá cả hợp lý. Sẽ quay lại lần sau!')
  const tags = ['Ngon miệng','Giá tốt','Phục vụ nhanh','Chỗ ngồi thoáng','View đẹp']
  const [selectedTags, setSelectedTags] = useState<string[]>(['Ngon miệng','Giá tốt'])

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen pb-24">
      <header className="md:hidden flex justify-between items-center px-margin-mobile py-base w-full bg-background sticky top-0 z-50 border-b border-subtle-gray/30">
        <button className="text-on-surface-variant p-2" onClick={()=>navigate('/check-in-complete')}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="font-headline-md">Viết Review</span>
        <div className="w-10"/>
      </header>

      <main className="max-w-2xl mx-auto px-margin-mobile py-stack-lg flex flex-col gap-stack-lg">
        {/* Restaurant info */}
        <div className="flex items-center gap-4 bg-surface-white rounded-xl p-4 border border-subtle-gray shadow-sm">
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <img className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPXkp_PqwHdeonWUy3cMkUvQLu0I6vRU2kzzfUP4Ni8SabeF7Cq5dl3DyJCibawkf_uUpTQdYEfyAoSNbTq49ri9QImqQ0KfkTvZTuYUz6qZBJWbHakxaJFSQ-e7sbekjgT2_-VyiccCC1q3A7vrNR2cjByhNlNbQhXuqD1QIUIB-MpLFLY-xIpwTH5H2jBVSo5a4nzxfa5hqSdJJKbz_zqpqUx8is_ZzYOYnevY8LPAUsR7S75qjNhQ"
              alt="restaurant"/>
          </div>
          <div>
            <h2 className="font-headline-md text-on-surface">Bún Bò Bà Luân</h2>
            <p className="font-body-md text-caption text-on-surface-variant">Vietnamese • 400m</p>
          </div>
        </div>

        {/* Star rating */}
        <div className="flex flex-col items-center gap-3 bg-surface-white rounded-xl p-6 border border-subtle-gray shadow-sm">
          <p className="font-label-strong text-on-surface-variant">Đánh giá tổng thể</p>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(s=>(
              <button key={s} onClick={()=>setRating(s)} className="transition-transform hover:scale-110">
                <span className={`material-symbols-outlined text-4xl ${s<=rating?'text-streak-gold':'text-subtle-gray'}`} style={{fontVariationSettings:s<=rating?"'FILL' 1":"'FILL' 0"}}>star</span>
              </button>
            ))}
          </div>
          <p className="font-label-strong text-primary">{['','Tệ','Không tốt','Bình thường','Khá ngon','Tuyệt vời!'][rating]}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-3">
          <p className="font-label-strong text-on-surface">Điểm nổi bật</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(t=>(
              <button key={t}
                className={`px-4 py-2 rounded-full font-label-strong text-sm transition-all ${selectedTags.includes(t)?'bg-primary text-on-primary':'bg-surface-white border border-subtle-gray text-on-surface-variant hover:border-primary/50'}`}
                onClick={()=>setSelectedTags(prev=>prev.includes(t)?prev.filter(x=>x!==t):[...prev,t])}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Text review */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="font-label-strong text-on-surface">Chia sẻ trải nghiệm</p>
            <button className="flex items-center gap-1 text-primary font-label-strong text-caption hover:underline">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>AI Suggest
            </button>
          </div>
          <textarea
            className="w-full bg-surface-white border border-subtle-gray rounded-xl p-4 font-body-md text-on-surface resize-none focus:outline-none focus:border-primary transition-colors"
            rows={5} value={text} onChange={e=>setText(e.target.value)}
            placeholder="Chia sẻ cảm nhận của bạn về quán..."/>
          <p className="font-caption text-caption text-on-surface-variant text-right">{text.length}/500</p>
        </div>

        {/* Photo upload */}
        <div className="flex flex-col gap-3">
          <p className="font-label-strong text-on-surface">Thêm ảnh</p>
          <div className="flex gap-3">
            <button className="w-20 h-20 rounded-xl border-2 border-dashed border-subtle-gray flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors gap-1">
              <span className="material-symbols-outlined">add_photo_alternate</span>
              <span className="font-caption text-caption">Thêm</span>
            </button>
          </div>
        </div>

        {/* Submit */}
        <button className="w-full bg-primary text-on-primary font-headline-md py-4 rounded-xl squishy-btn flex items-center justify-center gap-2"
          onClick={()=>navigate('/')}>
          <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>send</span>
          Gửi Review (+25 XP)
        </button>
        <button className="font-label-strong text-on-surface-variant text-center hover:text-on-surface" onClick={()=>navigate('/')}>Bỏ qua</button>
      </main>
    </div>
  )
}
