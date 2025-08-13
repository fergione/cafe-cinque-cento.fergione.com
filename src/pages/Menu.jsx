// src/pages/Menu.jsx
import { MENU } from '../config/menu'
import DishCard from '../components/DishCard'

export default function Menu() {
  return (
    <main className="menu-page">
      <div className="menu-page__inner space-y-10">
        {Array.isArray(MENU) && MENU.length > 0 ? (
          MENU.map((section) => (
            <section
              key={section.id}
              className="menu-section"
              data-accent={section.accent} // drives watercolor hue in CSS
            >
              <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items?.map((item) => (
                  <DishCard key={item.id} item={item} accent={section.accent} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <section className="menu-section">
            <h2 className="text-2xl font-semibold mb-2">Menu</h2>
            <p className="opacity-70">Menu coming soon.</p>
          </section>
        )}
      </div>
    </main>
  )
}
