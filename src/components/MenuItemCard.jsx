// src/components/MenuItemCard.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MenuItemCard({ item, accent = 'neutral' }) {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((v) => !v)
  const price =
    typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price ?? ''

  return (
    <div
      className="menu-card card p-4 sm:p-5"
      data-accent={accent}
    >
      {/* Header button */}
      <button
        onClick={toggle}
        className="w-full text-left flex items-center gap-4 focus:outline-none"
        aria-expanded={open}
        aria-controls={`panel-${item.id}`}
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl shadow"
          width={96}
          height={96}
          loading="lazy"
        />

        {/* Title + meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold truncate">{item.name}</h3>
            {price && <span className="shrink-0 text-base opacity-75">{price}</span>}
          </div>
          {item.notes && (
            <p className="text-sm opacity-60 mt-1 line-clamp-1">{item.notes}</p>
          )}
        </div>

        {/* Chevron */}
        <svg
          className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          width="22" height="22" viewBox="0 0 24 24" fill="none"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Expandable panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`panel-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
            className="mt-3"
          >
            <div className="pt-3 border-t border-black/10">
              {item.ingredients && item.ingredients.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 text-sm opacity-80">
                  {item.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              )}
              {item.description && (
                <p className="text-sm opacity-80 mt-3">{item.description}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
