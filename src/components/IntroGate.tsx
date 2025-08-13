import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = { onDone: () => void }

export default function IntroGate({ onDone }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Accessibility: skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onDone()
      return
    }

    // Lock scroll while intro plays
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    ref.current?.play().catch(() => {
      // If autoplay is blocked, just continue after a short delay
      setTimeout(onDone, 1200)
    })

    return () => { document.body.style.overflow = prev }
  }, [onDone])

  const finish = () => {
    try { localStorage.setItem('ccc_intro_seen', String(Date.now())) } catch {}
    onDone()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="fixed inset-0 z-[9999] bg-black"
      >
        <video
          ref={ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={finish}
          poster="/video/poster.jpg"
        >
          <source src="/video/intro.webm" type="video/webm" />
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>

        {/* Skip button */}
        <button
          onClick={finish}
          className="absolute bottom-8 right-8 bg-white/10 hover:bg-white/20 text-white rounded-full px-5 py-2 backdrop-blur"
        >
          Skip
        </button>

        {/* Optional caption/logo */}
        <div className="absolute left-8 bottom-8 text-zinc-400 text-sm">
          Cafe Cinque Cento
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
