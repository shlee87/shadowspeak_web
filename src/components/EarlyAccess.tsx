import { useMemo, useState } from 'react'

function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [podcast, setPodcast] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [wasUpdated, setWasUpdated] = useState(false)

  const isValid = useMemo(() => {
    return email.includes('@')
  }, [email])

  const onSubmit: React.ComponentProps<'form'>['onSubmit'] = (event) => {
    event.preventDefault()
    if (!isValid || isSubmitting) return

    void (async () => {
      try {
        setIsSubmitting(true)
        setSubmitError(null)
        setSubmitted(false)
        setWasUpdated(false)

        const response = await fetch('/api/early-access', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, podcast }),
        })

        const payload = (await response.json()) as { error?: string, updated?: boolean }

        if (!response.ok) {
          setSubmitError(payload.error ?? 'Something went wrong. Please try again.')
          return
        }

        setSubmitted(true)
        if (payload.updated) {
          setWasUpdated(true)
        }
        setEmail('')
        setPodcast('')
      } catch {
        setSubmitError('Something went wrong. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    })()
  }

  return (
    <section className="wrapper section cta-section" id="early-access">
      <div className="cta-shell glass-card">
        <div className="cta-copy">
          <p className="eyebrow">Early access</p>
          <h2>Sound more natural and be understood the first time</h2>
          <p>
            You already know the gap is real. Get in early and start closing it.
          </p>
        </div>

        {submitted ? (
          <div className="success-state">
            <div className="success-icon">&#10003;</div>
            <h3>{wasUpdated ? 'Preference updated' : 'You are in'}</h3>
            <p>{wasUpdated
              ? 'Already registered — we updated your podcast preference.'
              : 'We will reach out when your spot is ready. Your podcast choice helps us prioritize.'}</p>
          </div>
        ) : (
          <form className="signup-form" onSubmit={onSubmit}>
            <label>
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label>
              <span>What podcast do you listen to most? <span className="optional-label">(optional)</span></span>
              <textarea
                placeholder="For example: Acquired, The Daily, Pivot, All-In Podcast"
                value={podcast}
                onChange={(event) => setPodcast(event.target.value)}
                rows={2}
              />
              <p className="field-benefit">We&apos;ll prioritize onboarding your content first.</p>
            </label>

            <button className="primary-button" type="submit" disabled={!isValid}>
              {isSubmitting ? 'Sending...' : 'Join early access'}
            </button>

            <p className="form-hint">
              {submitError ?? 'Share your email to get early access.'}
            </p>
          </form>
        )}

        <div className="social-proof">
          <p className="founder-line">
            Built by an immigrant who spent years hearing &quot;can you say that again?&quot; &mdash;
            and realized the problem was never pronunciation. It was delivery.
          </p>
          <p className="efficacy-line">
            Most users reach a 0.85+ speaker match within 3 attempts.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EarlyAccess
