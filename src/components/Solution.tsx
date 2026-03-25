import { useReveal } from '../useReveal'

function Solution() {
  const copyRef = useReveal<HTMLDivElement>()
  const axesRef = useReveal<HTMLDivElement>(0.1)
  const visualRef = useReveal<HTMLDivElement>(0.15)

  return (
    <section className="wrapper section solution-section">
      <div className="solution-copy">
        <div className="reveal" ref={copyRef}>
          <p className="eyebrow">Why ShadowSpeak exists</p>
          <h2>You can only fix what you can see</h2>
          <p className="solution-quote">
            ShadowSpeak shows you exactly where your delivery is different from the speaker — one line, one gap, one better attempt at a time.
          </p>
        </div>

        <div className="axes-grid reveal-stagger" ref={axesRef}>
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
          <div className="axis-card glass-card">
            <span className="axis-icon">🎙</span>
            <strong>Pronunciation</strong>
            <span>How accurately you produce each sound</span>
          </div>
        </div>
      </div>

      <div className="solution-visual glass-card reveal" ref={visualRef}>
        <div className="difference-row">
          <span className="difference-label">Your current line</span>
          <div className="difference-bar muted" />
        </div>
        <div className="difference-row">
          <span className="difference-label">Speaker target</span>
          <div className="difference-bar strong" />
        </div>
        <div className="difference-callout">
          <p>Your gap, visualized</p>
          <strong>Your emphasis peaks at different points, your pauses land in different places, and your pitch contour follows a different shape.</strong>
          <span>
            Not a score that tells you &quot;wrong.&quot; A mirror that shows you exactly how far you are from the speaker you chose.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Solution
