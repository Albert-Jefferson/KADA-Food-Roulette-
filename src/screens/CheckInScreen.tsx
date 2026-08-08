import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function CheckInScreen() {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59)

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(p => Math.max(0, p - 1)), 1000)
    return () => clearInterval(t)
  }, [])

  const fmt = (s: number) => `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`

  return (
    <div className="bg-background text-on-surface h-full flex flex-col items-center justify-center relative overflow-hidden min-h-screen">
      <main className="w-full max-w-md mx-auto px-margin-mobile flex flex-col items-center justify-center relative z-10 space-y-stack-lg py-12">
        <div className="text-center w-full">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-stack-sm">Verify Arrival</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Confirming location for Burger Joint Supreme</p>
        </div>

        {/* Radar */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-status-open/20 animate-ping" style={{animationDuration:'3s'}}/>
          <div className="absolute inset-4 rounded-full border-2 border-status-open/40 animate-ping" style={{animationDuration:'2s',animationDelay:'1s'}}/>
          <div className="absolute inset-8 rounded-full border border-status-open/60"/>
          <div className="z-10 bg-surface-white rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] border-2 border-status-open">
            <span className="material-symbols-outlined text-status-open mb-1" style={{fontSize:'32px',fontVariationSettings:"'FILL' 1"}}>my_location</span>
            <span className="font-display-hero text-headline-lg-mobile text-status-open">32m</span>
            <span className="font-label-strong text-caption text-on-surface-variant uppercase tracking-widest mt-1">Away</span>
          </div>
        </div>

        {/* Timer card */}
        <div className="w-full bg-surface-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-subtle-gray p-4 flex flex-col gap-stack-md">
          <div className="flex items-center justify-between border-b border-subtle-gray pb-3">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>timer</span>
              <span className="font-label-strong">Commitment Expires in</span>
            </div>
            <div className="font-headline-md text-primary">{fmt(timeLeft)}</div>
          </div>
          <div className="flex items-start gap-3 mt-1">
            <span className="material-symbols-outlined text-on-surface-variant mt-0.5">verified_user</span>
            <div>
              <p className="font-label-strong text-on-surface">Secure GPS Tagging</p>
              <p className="font-caption text-caption text-on-surface-variant mt-1">Your photo will be automatically tagged with verified GPS coordinates and a secure timestamp to confirm your arrival.</p>
            </div>
          </div>
        </div>

        {/* Camera button */}
        <div className="w-full pt-stack-md flex justify-center">
          <button className="relative group bg-primary text-on-primary w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg border-b-4 border-[#8B1A24] active:border-b-0 active:translate-y-1 transition-all"
            onClick={()=>navigate('/check-in-complete')}>
            <div className="absolute inset-2 border-2 border-white/30 rounded-full"/>
            <span className="material-symbols-outlined mb-1" style={{fontSize:'36px',fontVariationSettings:"'FILL' 1"}}>photo_camera</span>
          </button>
        </div>
        <p className="font-label-strong text-caption text-on-surface-variant text-center -mt-2">Tap to Capture Verification Photo</p>
        <button className="font-label-strong text-label-strong text-on-surface-variant underline mt-stack-md p-2" onClick={()=>navigate('/commitment')}>Cancel Check-in</button>
      </main>
    </div>
  )
}
