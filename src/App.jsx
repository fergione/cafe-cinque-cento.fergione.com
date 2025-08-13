import { useLayoutEffect } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import './App.css'

/** Set the global background image via CSS var.
 *  We read from public/ using BASE_URL so it works on GitHub Pages.
 */
function useGlobalBackground() {
  useLayoutEffect(() => {
    const bg = `${import.meta.env.BASE_URL}img/menu_background.png`
    document.documentElement.style.setProperty('--app-bg-image', `url("${bg}")`)
  }, [])
}

/** Keep scroll at the top on route changes */
function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/* ---------------------------
   Banner (paper-style header)
--------------------------- */
function Banner() {
  const linkBase =
    'px-4 py-2 text-sm md:text-base transition-colors'
  const linkIdle =
    'text-[var(--ink)]/75 hover:text-[var(--ink)]'
  const linkActive =
    'text-[var(--ink)] underline underline-offset-4 decoration-[rgba(42,30,12,.35)]'

  return (
    <header className="banner">
      <div className="banner__inner">
        <div className="brand">Cafe Cinque Cento</div>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [linkBase, isActive ? linkActive : linkIdle].join(' ')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              [linkBase, isActive ? linkActive : linkIdle].join(' ')
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              [linkBase, isActive ? linkActive : linkIdle].join(' ')
            }
          >
            Team
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              [linkBase, isActive ? linkActive : linkIdle].join(' ')
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

/* ---------------------------
   Pages (simple placeholders)
--------------------------- */
function PageShell({ title, children }) {
  return (
    <main className="page">
      <div className="page__inner">
        <section className="paper hero">
          <h1 className="page__title">{title}</h1>
          {children}
        </section>
      </div>
    </main>
  )
}

function Home() {
  return (
    <PageShell title="Welcome">
      <p className="lede">
        Small-batch espresso, seasonal pastries, and a rotating menu inspired by Italian cafés.
        Settle in, sip slow, and stay awhile.
      </p>
    </PageShell>
  )
}

function Menu() {
  return (
    <PageShell title="Menu">
      <p className="lede">Espresso, matcha, and bakery—see what’s fresh today.</p>
    </PageShell>
  )
}

function Team() {
  return (
    <PageShell title="Team">
      <p className="lede">Meet the crew behind the bar.</p>
    </PageShell>
  )
}

function Contact() {
  return (
    <PageShell title="Contact">
      <p className="lede">Hours, location, and inquiries.</p>
    </PageShell>
  )
}

/* ---------------------------
   App
--------------------------- */
export default function App() {
  useGlobalBackground()

  return (
    <>
      <ScrollToTop />
      <Banner />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
