import { useReveal } from '../useReveal'

function FounderStory() {
  const sectionRef = useReveal<HTMLDivElement>()

  return (
    <section className="wrapper section founder-section">
      <div className="founder-shell glass-card reveal" ref={sectionRef}>
        <div className="founder-content">
          <p className="eyebrow">Why I built this</p>
          <h2 className="founder-headline">
            &ldquo;I moved to the US at 30. My grammar was perfect. After 8 years, people still asked me to repeat myself.&rdquo;
          </h2>
          <div className="founder-body">
            <p>
              I tried every pronunciation app and YouTube course available. They graded my sounds, but people still couldn&apos;t follow me. The problem was never pronunciation — it was <strong>delivery</strong>: the stress, rhythm, and pitch patterns that native speakers use without thinking.
            </p>
            <p>
              Linguistics research confirmed it. Sound errors cause only about 16% of misunderstandings. The other 84% comes from stress, chunking, and pitch — elements no app was measuring.
            </p>
            <p>
              Podcasts felt closest to what I needed. Real people, real speech, topics I cared about. But they weren&apos;t built for practice. So I built the tool that was missing.
            </p>
          </div>
          <p className="founder-sign">
            — Seonghoon, founder of ShadowSpeak
          </p>
        </div>
      </div>
    </section>
  )
}

export default FounderStory
