import { useNavigate } from 'react-router-dom'

const LOCKETS = [
  {
    user:'Linh Nguyễn', time:'2 giờ trước', likes:24, comments:5,
    img:'https://lh3.googleusercontent.com/aida-public/AB6AXuDExc8M88Zl76UR0lKzmNf1AG81kcO5hJ4gSCJKx4jGydF5rKTvS3GJraV86eJms1A3M9W0S7-huERSBdFMc3xlzbnuvUCdCsJUnW_mLTUqk1uWqsjGg3OgaA9obKPk5iwbsKEph7PSDpMN42T01yrR-qIgNpWuoKwzhc85R00l-CtBk7G23YKKPlwt3N8azadBhPb77P1bp7-776ibYcUk54vZ2Wh7QW002yTYS5jyN50qyOSPUXMhzw',
    avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuD7q5-JQJsYi_G8jPbrd9yur4eFH3rxMjfeaT_O_yVghaM3FGFTbS8Ya6alNAKKj0R1jRB0C3qYNJC0w7epEm5k7fAl_SRljqN733fEObA3E8ZutMhQYlU_fgNKxMR6IZ4xwI7nolcaYiJLMFGUsa_9shFeOvuqSlVyDBBvopDJX0NNFCXaZPGfKlDDL4MgI2NgTw9ZtWtZJxlAV1u1umjeoOkEKmjjXLrQtlxmetrtJ3bBqvrjYWiXog',
    restaurant:'Phở Thìn Lò Đúc', caption:'Món này ngon tuyệt, rất đáng thử! Nước dùng béo ngậy đúng điệu.', rating:'4.8', liked:false
  },
  {
    user:'Minh Tuấn', time:'5 giờ trước', likes:128, comments:12,
    img:'https://lh3.googleusercontent.com/aida-public/AB6AXuBwLSXPZgX2tGBks_EK9fpyUgB-rW_bmHEpJpaDOK_3uzbwIVRrTkPn1xo9Jtz-zO9FbUjCFG92i0Fqhj3RvWcDPeXjtuTVPNn30EdGRe3cz6UEM_DD_yQAS3RuiHw5BFPiKLTUZFKOoLW1-6GmkgAG-Rv2I5OTyliAby_P8QPS1I4G8dvc7SzYVQeJyiUmESqTcHBNIoTmdybbPPLUBngh0mhS5EsnpexSWODvwJC0-ehVn1lALdMGQQ',
    avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuAcD_DXsOTYLSImxLl_v2tFbli52qugSeQBlqGNh4kRV42jiLBui0YofBT7K2PvseyybjlMGxR4mp3q-FqOEyYPjEhfHGuqYPuV-JZaO-u2AmZVLzPOiTiOaQr5qHGR_PLlF8UbmKMCY056qeqyNG8fgKHP6jluqDSqRih7qyyhhYlV2DqTC8ls6FMt-Bc5yrMgwCo2rozWdA23LTQzitmbSv8S5p5h2eqttvfPUDxWOXhQllsjJK3MLA',
    restaurant:'Mì Cay Sasin', caption:'Cấp độ 7 cay xé lưỡi nhưng vị rất đậm đà. Thích hợp cho ngày mưa.', rating:'4.5', liked:true
  },
]

export default function LocketFeedScreen() {
  const navigate = useNavigate()
  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen pb-[80px]">
      <header className="w-full top-0 sticky z-40 bg-background">
        <div className="flex justify-between items-center px-margin-mobile py-base w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[28px]" style={{fontVariationSettings:"'FILL' 1"}}>local_fire_department</span>
            <h1 className="font-display-hero text-headline-md text-primary tracking-tight">Food Roulette</h1>
          </div>
          <div className="flex items-center gap-1 bg-surface-white px-3 py-1.5 rounded-full shadow-sm border border-subtle-gray">
            <span className="font-label-strong text-primary">1,250 🪙</span>
          </div>
        </div>
        <div className="flex justify-center border-b border-subtle-gray/50 bg-background pt-2 px-margin-mobile w-full max-w-7xl mx-auto">
          <button className="flex-1 pb-3 text-center border-b-2 border-primary text-primary font-label-strong">Bạn bè</button>
          <button className="flex-1 pb-3 text-center border-b-2 border-transparent text-on-surface-variant font-label-strong hover:text-on-surface transition-colors">Khám phá</button>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-margin-mobile pt-stack-lg flex flex-col gap-stack-lg">
        {LOCKETS.map((l,i)=>(
          <article key={i} className="bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" src={l.avatar} alt={l.user}/>
                <div>
                  <h3 className="font-label-strong text-on-surface">{l.user}</h3>
                  <p className="font-caption text-caption text-on-surface-variant">{l.time}</p>
                </div>
              </div>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <img className="w-full h-full object-cover" src={l.img} alt={l.restaurant}/>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="flex flex-col gap-2">
                  <div className="bg-surface-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-status-open">verified</span>
                    <span className="font-caption text-caption text-on-surface">Đã xác minh GPS</span>
                  </div>
                </div>
                <div className="bg-surface-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-streak-gold">star</span>
                  <span className="font-caption text-caption text-on-surface font-semibold">{l.rating}</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div>
                <h4 className="font-headline-md text-on-surface">{l.restaurant}</h4>
                <p className="font-body-md text-on-surface-variant mt-1">{l.caption}</p>
              </div>
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-subtle-gray/50">
                <div className="flex items-center gap-4">
                  <button className={`flex items-center gap-1.5 transition-colors ${l.liked?'text-primary':'text-on-surface-variant hover:text-primary'}`}>
                    <span className="material-symbols-outlined" style={l.liked?{fontVariationSettings:"'FILL' 1"}:{}}>favorite</span>
                    <span className="font-label-strong text-caption">{l.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">chat_bubble</span>
                    <span className="font-label-strong text-caption">{l.comments}</span>
                  </button>
                </div>
                <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-strong border-b-2 border-[#931924] active:border-b-0 active:translate-y-[2px] transition-all flex items-center gap-2"
                  onClick={()=>navigate('/')}>
                  <span className="material-symbols-outlined text-[18px]">casino</span>Muốn ăn thử!
                </button>
              </div>
            </div>
          </article>
        ))}
      </main>

      <nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-surface-white border-t border-subtle-gray shadow-md">
        <div className="flex justify-around items-center px-4 py-2 pb-safe max-w-xl mx-auto">
          <button className="flex flex-col items-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-all rounded-xl" onClick={()=>navigate('/')}>
            <span className="material-symbols-outlined text-xl mb-1">restaurant</span>
            <span className="font-label-strong text-caption">Home</span>
          </button>
          <button className="flex flex-col items-center bg-primary-container text-on-primary-container rounded-xl px-4 py-2 scale-90">
            <span className="material-symbols-outlined text-xl mb-1">photo_library</span>
            <span className="font-label-strong text-caption">Locket</span>
          </button>
          <button className="flex flex-col items-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-all rounded-xl" onClick={()=>navigate('/profile')}>
            <span className="material-symbols-outlined text-xl mb-1">person</span>
            <span className="font-label-strong text-caption">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
