import { useReveal } from '../useReveal'

type Step = {
  index: string
  title: string
  copy: string
}

const steps: Step[] = [
  {
    index: '01',
    title: 'Choose a podcast you already care about',
    copy: 'Start with an episode you actually want to understand instead of forced study material.',
  },
  {
    index: '02',
    title: 'Replay any sentence instantly, at any speed',
    copy: 'Slow it down to 0.7x or speed it up. Built for learning, not endless tapping to go back 10 seconds.',
  },
  {
    index: '03',
    title: 'See where your delivery is different',
    copy: 'Check pronunciation, stress, chunking, and pitch differences in one focused screen.',
  },
]

function HowItWorks() {
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLOListElement>(0.1)

  return (
    <section className="wrapper section steps-section" id="how-it-works">
      <div className="section-heading compact reveal" ref={headingRef}>
        <p className="eyebrow">How it works</p>
        <h2>Three steps from listening to speaking</h2>
          <p className="section-intro">
          The flow stays simple on purpose: choose a line you care about, shadow it, and get exact feedback before the next attempt so momentum stays intact.
        </p>
      </div>

      <ol className="steps-list reveal-stagger" ref={gridRef}>
        {steps.map((step) => (
          <li key={step.index} className="step-item">
            <span className="step-index">{step.index}</span>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default HowItWorks
