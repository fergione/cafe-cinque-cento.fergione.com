import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DishCard({ item, accent = 'neutral' }) {
  const [open, setOpen] = useState(false)
  const [imgOk, setImgOk] = useState(true)

  const price =
    typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price ?? ''

  return (
    <div data-accent={accent} className="dish card">
      {/* BG image/illustration */}
      {item.image && imgOk && (
        <img
          src={item.image}
          alt=""
          width={800}
          height={800}
          loading="lazy"
          className="dish-img"
          draggable="false"
          onError={() => setImgOk(false)}   // hide if path is wrong
        />
      )}

      {/* Overlay panel */}
      <button
        type="button"
        onMouseUp={(e) => e.currentTarget.blur()}     // avoid sticky rainbow ring
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="dish-btn nav-button w-full text-left"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold truncate">{item.name}</h3>
            {item.notes && <p className="text-sm opacity-65 mt-0.5 truncate">{item.notes}</p>}
          </div>
          <div className="shrink-0 flex items-center gap-2">
            {price && <span className="text-base opacity-75">{price}</span>}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                 className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
              className="pt-3 mt-3 border-t border-black/10"
            >
              {item.ingredients?.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 text-sm opacity-85">
                  {item.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
              )}
              {item.description && <p className="text-sm opacity-85 mt-3">{item.description}</p>}
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
