import { useReveal } from '../useReveal'

function Problem() {
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>(0.1)

  return (
    <section className="wrapper section problem-section" id="problem">
      <div className="section-heading reveal" ref={headingRef}>
        <p className="eyebrow">The friction you already know</p>
        <h2>You speak English every day. People still ask you to repeat.</h2>
        <p className="section-intro">
          You know English. The problem is delivery — the stress, rhythm, and pitch patterns that real speakers use without thinking. Most tools never show you these.
        </p>
      </div>

      <div className="problem-grid reveal-stagger" ref={gridRef}>
        <article className="problem-card surface-card intense">
          <span className="problem-index">01</span>
          <h3>The waste of replaying podcasts 10 seconds at a time</h3>
          <p>
            You open a podcast to learn real English, then end up fighting the player because it was never built for sentence-level practice.
          </p>
        </article>

        <article className="problem-card surface-card">
          <span className="problem-index">02</span>
          <h3>Podcasts are great input. But input alone does not fix output.</h3>
          <p>
            You can listen to hundreds of hours and still not close the gap between how you speak and how they speak.
            Without a way to compare your delivery to theirs line by line, listening stays passive.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Problem
