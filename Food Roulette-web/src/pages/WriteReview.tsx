import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(4);
  const [tags, setTags] = useState<string[]>(['vị_ngon', 'giá_ok', 'gần_trường']);

  const toggleTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const availableTags = ['vị_ngon', 'giá_ok', 'view', 'gần_trường', 'đông'];

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background pt-8 pb-4 px-margin-mobile flex items-center justify-between">
        <button onClick={() => navigate(-1)} aria-label="Go back" className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
        </button>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background tracking-tight">Write Review</h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </header>

      <main className="px-margin-mobile max-w-lg mx-auto">
        {/* Restaurant / Dish Info */}
        <section className="mb-stack-lg">
          <div className="bg-surface-white border border-subtle-gray rounded-xl p-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-surface-container-low overflow-hidden flex-shrink-0">
              <img className="w-full h-full object-cover" alt="Dish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACN3M7_oleYUSionHZU81rBFKOc8sHyzfmFSF_-y-E-m1eHZfRH9NFj8HDX8GGNZy76GGLKt1yp8UzpE94k0DD8mOyn3PVydaT_kso-r4Ol3FOc4l5QG0BeBvXM7mVRmCon9dBTLJHgwCUoHl_X092ZMlzNqAghYnomaQHssnRZPKyR9og9LzpVozJ5vGDZje8RcqBbeCFDhOkCgiqwM3FmQSelkelnxNOwWDymm9elsPugPKFhXmLPA" />
            </div>
            <div>
              <p className="font-label-strong text-label-strong text-on-surface-variant uppercase tracking-wider mb-1">Ordered Dish</p>
              <h2 className="font-headline-md text-headline-md text-on-background">Bún Bò Huế</h2>
            </div>
          </div>
        </section>

        {/* Rating */}
        <section className="mb-stack-lg flex flex-col items-center">
          <p className="font-label-strong text-label-strong text-on-surface-variant mb-2">How was your meal?</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)} className="p-1 hover:scale-110 transition-transform">
                <span className={`material-symbols-outlined text-4xl ${star <= rating ? 'text-streak-gold' : 'text-outline-variant'}`} style={{ fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0" }}>star</span>
              </button>
            ))}
          </div>
        </section>

        {/* Photo Upload */}
        <section className="mb-stack-lg">
          <div className="flex items-center justify-between mb-stack-sm">
            <h3 className="font-label-strong text-label-strong text-on-background">Photos from Locket</h3>
            <span className="font-caption text-caption text-on-surface-variant">3 selected</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-margin-mobile px-margin-mobile snap-x no-scrollbar">
            <div className="w-24 h-24 flex-shrink-0 snap-start relative group rounded-xl overflow-hidden shadow-sm">
              <img className="w-full h-full object-cover" alt="Photo 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdRAC2hAq5QcvfhsU_UK7KqM7etQPeur-JraSLxn8q7t0FsB_sn_AdfvwfSwghEzrTjytsIGw1tgjsbEQlZPEriccAA4aaLDBTH4RFkKCuOifS4igxlpK7ojyTDntxXOCabtrzCywISTCu_gfHj9lOgAjs_exEnWUMY5FhhbrURUuduExRNiZqFO2WpWDAeEWNC-f-XjGWSnt1Hhd8GV27IImmelb8ZPqLDfVWz-Oh39M8suc0cZ0yIQ" />
              <button className="absolute top-1 right-1 bg-on-background/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-surface-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
              </button>
            </div>
            <div className="w-24 h-24 flex-shrink-0 snap-start relative group rounded-xl overflow-hidden shadow-sm">
              <img className="w-full h-full object-cover" alt="Photo 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjgoPzZNoLHUoQna68JuHBC3pZRehZts4HkiQMCPYrKeOD3OpbIGt6yzbN1Y4GTPcu29MnuqrKGIaPg3Jncoqekh46L8WqVcVe3Teua3lJW5KKh7_9GUV3cJO5dD_A-MPrWkzHOHZ5ymVWhU-TJGPLUxm5gdqKnmnmIohNUty4uER35bZAGAsqjZvAaP6wHonxAHvW_7IeoZ2qbphDpgPaw1CC2c5WI4zgBTh1UKS4Eb2_GA8fl3X4OA" />
              <button className="absolute top-1 right-1 bg-on-background/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-surface-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
              </button>
            </div>
            <div className="w-24 h-24 flex-shrink-0 snap-start relative group rounded-xl overflow-hidden shadow-sm">
              <img className="w-full h-full object-cover" alt="Photo 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8qTR0Gl-XDq4L2ci7JQYtrFE-KCZq3s0SoFYrmKJL677sIBT18rIwoN8iXK-vdAP8O3bfuLW92Rvawg22y0nl426h9-eTIlMZiUYK3AsTfIJeHpdrMs9sGduErF3cfBAAOCE4vKqLlfn8c50_0vVCsjL2SmLhVePRC2gyuoBZTZa-pE5IT1BWFdHUMgynjFoZK5erl847uxIGSCa_caCAmLFcKu9n4Gu-6czj7G0aWhVcf1eIz-RY-A" />
              <button className="absolute top-1 right-1 bg-on-background/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-surface-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
              </button>
            </div>
            <button className="w-24 h-24 flex-shrink-0 snap-start rounded-xl border-2 border-dashed border-outline-variant bg-surface-white flex flex-col items-center justify-center text-primary hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-3xl mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>add_photo_alternate</span>
              <span className="font-caption text-caption">Add</span>
            </button>
          </div>
        </section>

        {/* AI Assisted Fields */}
        <section className="mb-stack-lg space-y-stack-md">
          {/* Title */}
          <div>
            <label className="flex items-center gap-1 font-label-strong text-label-strong text-on-background mb-stack-sm" htmlFor="review-title">
              Title
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </label>
            <input 
              className="w-full bg-surface-white border border-subtle-gray rounded-lg px-4 py-3 font-body-md text-body-md text-on-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" 
              id="review-title" 
              type="text" 
              defaultValue="Món Bún Bò Huế ở đây ngon tuyệt!" 
            />
          </div>
          {/* Comment */}
          <div>
            <label className="flex items-center gap-1 font-label-strong text-label-strong text-on-background mb-stack-sm" htmlFor="review-comment">
              Review
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </label>
            <textarea 
              className="w-full bg-surface-white border border-subtle-gray rounded-lg px-4 py-3 font-body-md text-body-md text-on-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none" 
              id="review-comment" 
              rows={4} 
              defaultValue="Quán này nằm gần trường ĐH, đi bộ 5 phút là tới. Nước dùng đậm đà, thịt mềm..." 
            />
          </div>
        </section>

        {/* Tags */}
        <section className="mb-stack-lg">
          <h3 className="font-label-strong text-label-strong text-on-background mb-stack-sm">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button 
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full border border-subtle-gray font-label-strong text-label-strong transition-colors shadow-sm ${tags.includes(tag) ? 'bg-primary text-surface-white' : 'bg-surface-white text-on-surface-variant hover:bg-surface-container-low'}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background via-background to-transparent pointer-events-none">
        <div className="max-w-lg mx-auto pointer-events-auto">
          <button 
            onClick={() => navigate('/review/submitted')}
            className="w-full bg-primary text-on-primary font-headline-md text-headline-md-mobile py-4 rounded-xl shadow-[0_4px_0_0_#92001b] hover:translate-y-1 hover:shadow-[0_2px_0_0_#92001b] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <span>POST REVIEW</span>
            <span className="bg-surface-white/20 px-2 py-1 rounded-lg text-sm">+25 XP</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
