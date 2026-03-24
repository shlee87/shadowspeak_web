function Solution() {
  return (
    <section className="wrapper section solution-section">
      <div className="solution-copy">
        <p className="eyebrow">Why ShadowSpeak exists</p>
        <h2>You can only fix what you can see</h2>
        <p className="solution-quote">
          ShadowSpeak shows you exactly where your delivery is different from the speaker.
        </p>

        <div className="solution-points">
          <div>
            <strong>One line at a time</strong>
            <span>Work on the exact line you want to sound more natural in.</span>
          </div>
          <div>
            <strong>One gap at a time</strong>
            <span>See where your stress, chunking, and pitch break away from the speaker.</span>
          </div>
          <div>
            <strong>One better attempt next</strong>
            <span>Get feedback clear enough to improve your next recording, not vague advice.</span>
          </div>
        </div>

        <div className="axes-grid">
          <div className="axis-card glass-card">
            <span className="axis-icon">🎙</span>
            <strong>Pronunciation</strong>
            <span>How accurately you produce each sound</span>
          </div>
          <div className="axis-card glass-card">
            <span className="axis-icon">⏸</span>
            <strong>Chunking</strong>
            <span>Where you pause between phrase groups</span>
          </div>
          <div className="axis-card glass-card">
            <span className="axis-icon">🔊</span>
            <strong>Stress</strong>
            <span>Which syllables and words you emphasize</span>
          </div>
          <div className="axis-card glass-card">
            <span className="axis-icon">〰️</span>
            <strong>Pitch</strong>
            <span>How your voice rises and falls across a sentence</span>
          </div>
        </div>
      </div>

      <div className="solution-visual glass-card">
        <div className="difference-row">
          <span className="difference-label">Your current line</span>
          <div className="difference-bar muted" />
        </div>
        <div className="difference-row">
          <span className="difference-label">Speaker target</span>
          <div className="difference-bar strong" />
        </div>
        <div className="difference-callout">
          <p>Direct feedback</p>
          <strong>Your emphasis lands on the wrong words, your pauses break in the wrong places, and your voice drops too early.</strong>
          <span>
            Not vague advice like &quot;sound more natural.&quot; Feedback you can use right away.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Solution
