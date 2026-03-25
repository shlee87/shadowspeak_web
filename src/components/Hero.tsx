function Hero() {
  return (
    <section className="hero wrapper section">
      <div className="hero-copy">
        <p className="eyebrow">For immigrants learning real spoken English</p>
        <h1>Sound like the speakers you already listen to</h1>
        <p className="hero-lead">
          Shadow real speakers line by line. See exactly where your delivery differs from theirs.
        </p>
        <p className="hero-support">
          Not pronunciation drills. Real delivery practice with real conversations.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#early-access">
            Join early access
          </a>
          <p className="micro-copy">
            Takes 10 seconds.
          </p>
        </div>
      </div>

      <div className="hero-panel">
        <div className="device-frame">
          <div className="device-bar">
            <span>9:41</span>
          </div>

          <div className="practice-screen">
            <div className="practice-header">
              <div>
                <p className="practice-meta">Interview-style delivery demo</p>
                <h3>Shadowing guide</h3>
              </div>
              <span className="practice-card-index">5 / 30</span>
            </div>

            <div className="sentence-card">
              <p className="sentence-label">Readable sentence</p>
              <p className="sentence-text">I mean, this is the part that&apos;s really working.</p>
            </div>

            <div className="chart-card app-guide-card">
              <div className="guide-toolbar">
                <button className="play-pill" type="button">&#9654; Play reference</button>
                <div className="speed-group" aria-label="Reference speed options">
                  <span className="speed-chip">0.7x</span>
                  <span className="speed-chip active">1.0x</span>
                  <span className="speed-chip">1.2x</span>
                </div>
              </div>

              <svg viewBox="0 0 500 220" className="pitch-svg pitch-animate" aria-hidden="true">
                <defs>
                  <linearGradient id="referenceLine" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                  <linearGradient id="userLine" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#FB7185" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
                <path
                  className="reference-stroke"
                  d="M12 156 C 38 148, 78 78, 132 88 S 210 154, 266 118 S 346 58, 398 76 S 444 150, 488 126"
                />
                <path
                  className="user-stroke"
                  d="M12 164 C 36 156, 78 102, 132 108 S 208 166, 264 134 S 346 84, 398 96 S 444 162, 488 146"
                />
                <line x1="302" y1="26" x2="302" y2="196" className="guide-line" />
                <circle cx="302" cy="112" r="9" className="glow-dot outer" />
                <circle cx="302" cy="112" r="4.5" className="glow-dot inner" />
              </svg>

              <div className="timing-row">
                <span className="timed-word word-short">I</span>
                <span className="timed-word word-medium">mean,</span>
                <span className="chunk-divider" />
                <span className="timed-word word-short">this</span>
                <span className="timed-word word-short">is</span>
                <span className="timed-word word-short">the</span>
                <span className="timed-word word-medium">part</span>
                <span className="timed-word word-short">that&apos;s</span>
                <span className="timed-word word-medium stress-word">really</span>
                <span className="timed-word word-wide stress-word">working.</span>
              </div>

              <div className="legend-row">
                <span><i className="legend-dot cyan" /> Reference</span>
                <span><i className="legend-dot red" /> You</span>
                <span><i className="legend-dot marker" /> Stress</span>
              </div>

            </div>

            <div className="result-strip">
              <div className="score-pill">
                <span>Speaker-relative match</span>
                <strong>0.82</strong>
              </div>
              <p className="score-note">Your delivery is 82% similar to how this speaker said this exact line.</p>
            </div>

            <article className="glass-subcard correction-card">
              <div className="subcard-header">
                <p>Correction</p>
                <button className="explain-button" type="button">Explain more</button>
              </div>
              <strong>Let the pitch fall later on &quot;working.&quot;</strong>
              <span>Right now the sentence closes too early, so the line sounds flatter and less speaker-like.</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
