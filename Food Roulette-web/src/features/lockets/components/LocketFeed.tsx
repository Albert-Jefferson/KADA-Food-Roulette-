import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LocketFeed: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'friends' | 'discover'>('discover');

  return (
    <div className="flex flex-col min-h-screen pb-[80px]">
      {/* Local Tab Bar (under TopAppBar, we can just put it at the top of this component) */}
      <div className="sticky top-[72px] z-30 flex justify-center border-b border-subtle-gray/50 bg-background pt-2 px-margin-mobile w-full max-w-7xl mx-auto">
        <button 
          onClick={() => setActiveTab('friends')}
          className={`flex-1 pb-3 text-center border-b-2 font-label-strong text-label-strong transition-colors ${
            activeTab === 'friends' 
              ? 'border-primary text-primary' 
              : 'border-transparent text-on-surface-variant hover:text-on-surface'
          }`}
        >
          Bạn bè
        </button>
        <button 
          onClick={() => setActiveTab('discover')}
          className={`flex-1 pb-3 text-center border-b-2 font-label-strong text-label-strong transition-colors ${
            activeTab === 'discover' 
              ? 'border-primary text-primary' 
              : 'border-transparent text-on-surface-variant hover:text-on-surface'
          }`}
        >
          Khám phá
        </button>
      </div>

      <main className="max-w-xl mx-auto w-full px-margin-mobile pt-stack-lg flex flex-col gap-stack-lg">
        
        {activeTab === 'discover' && (
          <>
            {/* Search Bar */}
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full pl-12 pr-4 py-3 bg-surface-white border border-subtle-gray rounded-xl font-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Tìm kiếm nhà hàng hoặc món ăn..." type="text" />
            </div>
            
            {/* Trending Categories */}
            <div className="flex flex-col gap-3">
              <h2 className="font-label-strong text-label-strong text-on-surface px-1">Xu hướng tìm kiếm</h2>
              <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                <button className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">local_fire_department</span>
                  </div>
                  <span className="text-caption font-medium">Món Cay</span>
                </button>
                <button className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">coffee</span>
                  </div>
                  <span className="text-caption font-medium">Cà phê</span>
                </button>
                <button className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className="w-14 h-14 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">ramen_dining</span>
                  </div>
                  <span className="text-caption font-medium">Vỉa hè</span>
                </button>
                <button className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">favorite</span>
                  </div>
                  <span className="text-caption font-medium">Hẹn hò</span>
                </button>
                <button className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">bakery_dining</span>
                  </div>
                  <span className="text-caption font-medium">Bánh ngọt</span>
                </button>
              </div>
            </div>
          </>
        )}

        <div className="flex items-center justify-between px-1 mt-2">
          <h2 className="font-headline-md text-on-surface">{activeTab === 'discover' ? 'Gợi ý cho bạn' : 'Cập nhật từ bạn bè'}</h2>
          {activeTab === 'discover' && <button className="text-primary text-caption font-semibold" onClick={() => navigate('/leaderboard/restaurants')}>Xem tất cả</button>}
        </div>

        {/* Locket Card 1 */}
        <article className="bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full object-cover" alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7q5-JQJsYi_G8jPbrd9yur4eFH3rxMjfeaT_O_yVghaM3FGFTbS8Ya6alNAKKj0R1jRB0C3qYNJC0w7epEm5k7fAl_SRljqN733fEObA3E8ZutMhQYlU_fgNKxMR6IZ4xwI7nolcaYiJLMFGUsa_9shFeOvuqSlVyDBBvopDJX0NNFCXaZPGfKlDDL4MgI2NgTw9ZtWtZJxlAV1u1umjeoOkEKmjjXLrQtlxmetrtJ3bBqvrjYWiXog" />
              <div>
                <h3 className="font-label-strong text-label-strong text-on-surface">Linh Nguyễn</h3>
                <p className="font-caption text-caption text-on-surface-variant">2 giờ trước</p>
              </div>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <img className="w-full h-full object-cover" alt="Food Photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDExc8M88Zl76UR0lKzmNf1AG81kcO5hJ4gSCJKx4jGydF5rKTvS3GJraV86eJms1A3M9W0S7-huERSBdFMc3xlzbnuvUCdCsJUnW_mLTUqk1uWqsjGg3OgaA9obKPk5iwbsKEph7PSDpMN42T01yrR-qIgNpWuoKwzhc85R00l-CtBk7G23YKKPlwt3N8azadBhPb77P1bp7-776ibYcUk54vZ2Wh7QW002yTYS5jyN50qyOSPUXMhzw" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <div className="bg-surface-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-status-open">verified</span>
                  <span className="font-caption text-caption text-on-surface">Đã xác minh GPS</span>
                </div>
              </div>
              <div className="bg-surface-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-streak-gold">star</span>
                <span className="font-caption text-caption text-on-surface font-semibold">4.8</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-headline-md text-headline-md-mobile text-on-surface">Phở Thìn Lò Đúc</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Món này ngon tuyệt, rất đáng thử! Nước dùng béo ngậy đúng điệu.</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 pt-3 border-t border-subtle-gray/50">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                  <span className="font-label-strong text-caption">24</span>
                </button>
                <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <span className="font-label-strong text-caption">5</span>
                </button>
              </div>
              <button onClick={() => navigate('/leaderboard/restaurants')} className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-strong text-label-strong border-b-2 border-[#931924] active:border-b-0 active:translate-y-[2px] transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">casino</span>
                Muốn ăn thử!
              </button>
            </div>
          </div>
        </article>

        {/* Locket Card 2 */}
        <article className="bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full object-cover" alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcD_DXsOTYLSImxLl_v2tFbli52qugSeQBlqGNh4kRV42jiLBui0YofBT7K2PvseyybjlMGxR4mp3q-FqOEyYPjEhfHGuqYPuV-JZaO-u2AmZVLzPOiTiOaQr5qHGR_PLlF8UbmKMCY056qeqyNG8fgKHP6jluqDSqRih7qyyhhYlV2DqTC8ls6FMt-Bc5yrMgwCo2rozWdA23LTQzitmbSv8S5p5h2eqttvfPUDxWOXhQllsjJK3MLA" />
              <div>
                <h3 className="font-label-strong text-label-strong text-on-surface">Minh Tuấn</h3>
                <p className="font-caption text-caption text-on-surface-variant">5 giờ trước</p>
              </div>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <img className="w-full h-full object-cover" alt="Food Photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwLSXPZgX2tGBks_EK9fpyUgB-rW_bmHEpJpaDOK_3uzbwIVRrTkPn1xo9Jtz-zO9FbUjCFG92i0Fqhj3RvWcDPeXjtuTVPNn30EdGRe3cz6UEM_DD_yQAS3RuiHw5BFPiKLTUZFKOoLW1-6GmkgAG-Rv2I5OTyliAby_P8QPS1I4G8dvc7SzYVQeJyiUmESqTcHBNIoTmdybbPPLUBngh0mhS5EsnpexSWODvwJC0-ehVn1lALdMGQQ" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <div className="bg-surface-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-status-open">verified</span>
                  <span className="font-caption text-caption text-on-surface">Đã xác minh GPS</span>
                </div>
              </div>
              <div className="bg-surface-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-streak-gold">star</span>
                <span className="font-caption text-caption text-on-surface font-semibold">4.5</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-headline-md text-headline-md-mobile text-on-surface">Mì Cay Sasin</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Cấp độ 7 cay xé lưỡi nhưng vị rất đậm đà. Thích hợp cho ngày mưa.</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 pt-3 border-t border-subtle-gray/50">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-primary transition-colors">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <span className="font-label-strong text-caption text-primary">128</span>
                </button>
                <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <span className="font-label-strong text-caption">12</span>
                </button>
              </div>
              <button onClick={() => navigate('/leaderboard/restaurants')} className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-strong text-label-strong border-b-2 border-[#931924] active:border-b-0 active:translate-y-[2px] transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">casino</span>
                Muốn ăn thử!
              </button>
            </div>
          </div>
        </article>

        {/* Locket Card 3 (Added Mock Data) */}
        <article className="bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full object-cover" alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzuS_Zoee4obVDRjy2FcR9ZGoaO7ZGOOEl7eW-QblB_TNeGRzz9OxLPk_PTOfRHHUGvd8bmPXRdGsCsiapabCTsssJ_jw-4EjxgfwOQiqloyGsEpN0GI5EY8hhQ67unSWC77LzZqBoE35zBydwIlDU63ZoxG3jwfzqL1HX9yqGREuZ9Q9nvuI_BBv-lOe1okvTaFA6LMuOTDCR_gLog7t3CM3UOH8UBhTLHqiKmnZAu0OPwFvQdCCClQ" />
              <div>
                <h3 className="font-label-strong text-label-strong text-on-surface">Tuấn Đạt</h3>
                <p className="font-caption text-caption text-on-surface-variant">10 giờ trước</p>
              </div>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <img className="w-full h-full object-cover" alt="Food Photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUu21Z8w24UqO-o4N5F1gJ6aR4wU3cKV_b_D5P8hDIfH9-b6Xo1bY1O75T2GQQm91zP53G7R81s2hH7uB_5I2pQ7YyP4qK5jKk31Xw6tQ4LhHq1pB1a0qTfP1p6R5D5H4O14I4T83fP3I9O-4Z8K3vP8kG5n2L2H2h3p3h2k2H6h3k" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <div className="bg-surface-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-status-open">verified</span>
                  <span className="font-caption text-caption text-on-surface">Đã xác minh GPS</span>
                </div>
              </div>
              <div className="bg-surface-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-streak-gold">star</span>
                <span className="font-caption text-caption text-on-surface font-semibold">5.0</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-headline-md text-headline-md-mobile text-on-surface">Bánh Mì Huỳnh Hoa</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Nhiều thịt dã man, ăn một ổ no tới chiều! Ổ đầy đủ siêu chất lượng.</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 pt-3 border-t border-subtle-gray/50">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                  <span className="font-label-strong text-caption">89</span>
                </button>
                <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <span className="font-label-strong text-caption">23</span>
                </button>
              </div>
              <button onClick={() => navigate('/leaderboard/restaurants')} className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-strong text-label-strong border-b-2 border-[#931924] active:border-b-0 active:translate-y-[2px] transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">casino</span>
                Muốn ăn thử!
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default LocketFeed;
