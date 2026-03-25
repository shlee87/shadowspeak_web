const differentiators = [
  {
    claim: 'Real podcasts, not scripted drills',
    detail: 'Practice with episodes you already listen to \u2014 not artificial exercises.',
  },
  {
    claim: 'Your chosen speaker is the standard',
    detail: 'No abstract "correct" pronunciation. Your score means how close you are to the speaker you picked.',
  },
  {
    claim: 'See the full picture, not just sounds',
    detail: 'Stress, chunking, pitch, and pronunciation \u2014 all four axes compared to the speaker.',
  },
  {
    claim: 'A mirror, not a judge',
    detail: 'We don\u2019t mark you wrong. We show the gap between your delivery and your target.',
  },
  {
    claim: 'Your accent stays yours',
    detail: 'We never ask you to erase who you are. We help you be understood clearly while sounding like you.',
  },
]

function Comparison() {
  return (
    <section className="wrapper section comparison-section">
      <div className="section-heading compact">
        <p className="eyebrow">A different category</p>
        <h2>What other apps miss</h2>
        <p className="section-intro">
          Most English apps measure pronunciation or grammar. None of them measure delivery &mdash; the stress, rhythm, and pitch patterns that decide whether people actually follow what you say.
        </p>
      </div>

      <ul className="differentiator-list">
        {differentiators.map((item) => (
          <li className="differentiator-item surface-card" key={item.claim}>
            <span className="differentiator-check" aria-hidden="true">&#10003;</span>
            <div>
              <strong className="differentiator-claim">{item.claim}</strong>
              <span className="differentiator-detail">{item.detail}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="differentiator-summary">
        ShadowSpeak is the only app that compares your voice to the speaker you chose &mdash; not to a textbook.
      </p>
    </section>
  )
}

export default Comparison
