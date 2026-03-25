function Header() {
  return (
    <header className="topbar wrapper">
      <a href="/" className="brand-mark">
        <div className="brand-orb" />
        <p className="brand-name">ShadowSpeak</p>
      </a>
      <nav className="header-nav">
        <a className="header-link" href="/blog">Blog</a>
        <a className="header-cta" href="#early-access">Early access</a>
      </nav>
    </header>
  )
}

export default Header
