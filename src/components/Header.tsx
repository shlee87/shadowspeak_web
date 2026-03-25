function Header() {
  return (
    <header className="topbar wrapper">
      <div className="brand-mark">
        <div className="brand-orb" />
        <div>
          <p className="brand-name">ShadowSpeak</p>
          <p className="brand-sub">Podcast delivery practice</p>
        </div>
      </div>
      <nav className="header-nav">
        <a className="header-link" href="/blog">Blog</a>
        <a className="header-cta" href="#early-access">Early access</a>
      </nav>
    </header>
  )
}

export default Header
