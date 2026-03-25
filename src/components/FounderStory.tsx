import { useReveal } from '../useReveal'

function FounderStory() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section className="founder-section reveal" ref={sectionRef}>
      <div className="wrapper founder-inner">
        <blockquote className="founder-quote">
          <p className="founder-headline">
            &ldquo;I moved to the US at 30. My grammar was perfect. After 8 years, people still asked me to repeat myself.&rdquo;
          </p>
        </blockquote>
        <div className="founder-body">
          <p>
            I tried every pronunciation app and YouTube course available. They graded my sounds, but people still couldn&apos;t follow me. The problem was never pronunciation — it was <strong>delivery</strong>: the stress, rhythm, and pitch patterns that native speakers use without thinking.
          </p>
          <p>
            Linguistics research confirmed it. Studies show that stress, pausing, and pitch predict comprehensibility more strongly than pronunciation accuracy — accounting for half of how listeners judge whether you&apos;re easy to understand. No app was measuring these.
          </p>
          <p>
            Podcasts felt closest to what I needed. Real people, real speech, topics I cared about. But they weren&apos;t built for practice. So I built the tool that was missing.
          </p>
          <p className="founder-sign">
            — Seonghoon, founder of ShadowSpeak
          </p>
        </div>
      </div>
    </section>
  )
}

export default FounderStory
