import { useCallback, useEffect, useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="topbar wrapper">
      <a href="/" className="brand-mark">
        <div className="brand-orb" />
        <p className="brand-name">ShadowSpeak</p>
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={`menu-icon ${menuOpen ? 'open' : ''}`} />
      </button>

      <nav className={`header-nav ${menuOpen ? 'nav-open' : ''}`}>
        <a className="header-link section-link" href="#problem" onClick={closeMenu}>Problem</a>
        <a className="header-link section-link" href="#how-it-works" onClick={closeMenu}>How it works</a>
        <a className="header-link section-link" href="#faq" onClick={closeMenu}>FAQ</a>
        <a className="header-link" href="/blog" onClick={closeMenu}>Blog</a>
        <a className="header-cta" href="#early-access" onClick={closeMenu}>Early access</a>
      </nav>
    </header>
  )
}

export default Header
