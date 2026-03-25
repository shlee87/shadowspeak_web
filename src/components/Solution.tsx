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

        <div className="axes-strip reveal" ref={axesRef}>
          <p className="axes-label">Four axes we measure:</p>
          <dl className="axes-grid">
            <div className="axis-item">
              <dt className="axis-tag">Chunking</dt>
              <dd className="axis-def">Where you pause between phrases</dd>
            </div>
            <div className="axis-item">
              <dt className="axis-tag">Stress</dt>
              <dd className="axis-def">Which words you emphasize</dd>
            </div>
            <div className="axis-item">
              <dt className="axis-tag">Pitch</dt>
              <dd className="axis-def">How your voice rises and falls</dd>
            </div>
            <div className="axis-item">
              <dt className="axis-tag">Pronunciation</dt>
              <dd className="axis-def">How closely sounds match</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="solution-visual surface-card reveal" ref={visualRef}>
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
          <strong>Different stress. Different pauses. Different pitch shape.</strong>
          <span>
            Not a score that says &quot;wrong&quot; — a mirror that shows exactly where you differ from the speaker you chose.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Solution
