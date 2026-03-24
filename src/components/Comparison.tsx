type ComparisonFeature = {
  feature: string
  elsa: string
  duolingo: string
  shadowspeak: string
}

const features: ComparisonFeature[] = [
  { feature: 'Content source', elsa: 'Scripted exercises', duolingo: 'Gamified lessons', shadowspeak: 'Real podcast episodes' },
  { feature: 'What it measures', elsa: 'Pronunciation accuracy', duolingo: 'Grammar & vocabulary', shadowspeak: 'Pronunciation, chunking, stress, pitch' },
  { feature: 'Feedback type', elsa: 'Sound-level scoring', duolingo: 'Right/wrong answers', shadowspeak: 'Speaker-relative 4-axis analysis' },
  { feature: 'Practice mode', elsa: 'Repeat after prompt', duolingo: 'Tap & type', shadowspeak: 'Shadow along with real speakers' },
  { feature: 'Real speech coverage', elsa: 'Isolated sounds only', duolingo: 'None', shadowspeak: 'Full native delivery patterns' },
  { feature: 'Learning model', elsa: 'Drill repetition', duolingo: 'Streak-based gamification', shadowspeak: 'Progressive difficulty from real content' },
]

function Comparison() {
  return (
    <section className="wrapper section comparison-section">
      <div className="section-heading compact">
        <p className="eyebrow">A different category</p>
        <h2>What other apps miss</h2>
        <p className="section-intro">
          Most English apps measure pronunciation or grammar. None of them measure delivery — the stress, rhythm, and pitch patterns that decide whether people actually follow what you say.
        </p>
      </div>

      <div className="competitor-grid glass-card">
        <table>
          <thead>
            <tr className="competitor-head-row">
              <th scope="col" className="competitor-head"></th>
              <th scope="col" className="competitor-head"><span>ELSA</span><span className="competitor-sublabel">Pronunciation tool</span></th>
              <th scope="col" className="competitor-head"><span>Duolingo</span><span className="competitor-sublabel">General English</span></th>
              <th scope="col" className="competitor-head highlight"><span>ShadowSpeak</span><span className="competitor-sublabel">Delivery practice</span></th>
            </tr>
          </thead>
          <tbody>
            {features.map((row) => (
              <tr className="competitor-row" key={row.feature}>
                <th scope="row" className="competitor-cell feature-label">{row.feature}</th>
                <td className="competitor-cell">{row.elsa}</td>
                <td className="competitor-cell">{row.duolingo}</td>
                <td className="competitor-cell shadowspeak">{row.shadowspeak}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="competitor-summary-row">
              <td colSpan={4}>
                ShadowSpeak is the only app that measures how you deliver a sentence, not just how you pronounce it.
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}

export default Comparison
