import { useReveal } from '../useReveal'

const faqs = [
  {
    question: 'What podcasts can I practice with?',
    answer: 'Any podcast you already listen to. Tell us your favorite when you sign up and we will prioritize onboarding that content first.',
  },
  {
    question: 'What does a 0.82 speaker match mean?',
    answer: 'It means your delivery is 82% similar to how the original speaker said that exact line — measured across stress, chunking, pitch, and pronunciation. Most learners start around 0.65 and reach 0.85+ within a few sessions.',
  },
  {
    question: 'Is this a pronunciation app?',
    answer: 'No. Pronunciation is only one of four axes we measure. Stress, chunking, and pitch account for over 80% of how well listeners understand you — and those are the areas most apps ignore.',
  },
  {
    question: 'Do I need to lose my accent?',
    answer: 'Never. Your accent is part of who you are. ShadowSpeak helps you improve delivery — the rhythm and emphasis patterns that make you easier to understand — without changing your identity.',
  },
]

function Faq() {
  const headingRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>(0.1)

  return (
    <section className="wrapper section faq-section">
      <div className="section-heading compact reveal" ref={headingRef}>
        <p className="eyebrow">Common questions</p>
        <h2>Before you sign up</h2>
      </div>

      <dl className="faq-list reveal-stagger" ref={listRef}>
        {faqs.map((faq) => (
          <div className="faq-item glass-card" key={faq.question}>
            <dt className="faq-question">{faq.question}</dt>
            <dd className="faq-answer">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Faq
