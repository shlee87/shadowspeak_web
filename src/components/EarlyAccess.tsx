import { useCallback, useMemo, useState } from 'react'
import { useReveal } from '../useReveal'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [podcast, setPodcast] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [wasUpdated, setWasUpdated] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)

  const isValid = useMemo(() => EMAIL_RE.test(email), [email])

  const emailHint = useMemo(() => {
    if (!emailTouched || email.length === 0) return null
    if (!email.includes('@')) return 'Add an @ to finish your email address.'
    if (!EMAIL_RE.test(email)) return 'This doesn\u2019t look like a complete email.'
    return null
  }, [email, emailTouched])

  const handleEmailBlur = useCallback(() => {
    if (email.length > 0) setEmailTouched(true)
  }, [email])

  const onSubmit: React.ComponentProps<'form'>['onSubmit'] = (event) => {
    event.preventDefault()
    setEmailTouched(true)
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
          if (response.status === 400) {
            setSubmitError(payload.error ?? 'Check your email and try again.')
          } else if (response.status === 429) {
            setSubmitError('Too many requests. Wait a moment and try again.')
          } else {
            setSubmitError(payload.error ?? 'Something went wrong on our end. Please try again.')
          }
          return
        }

        setSubmitted(true)
        if (payload.updated) {
          setWasUpdated(true)
        }
        setEmail('')
        setPodcast('')
        setEmailTouched(false)
      } catch {
        setSubmitError('Could not connect. Check your internet and try again.')
      } finally {
        setIsSubmitting(false)
      }
    })()
  }

  const ctaRef = useReveal<HTMLDivElement>()

  return (
    <section className="wrapper section cta-section" id="early-access">
      <div className="cta-shell wrapper reveal" ref={ctaRef}>
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
            <h3>{wasUpdated ? 'Preference updated' : 'You\u2019re on the list'}</h3>
            <p>{wasUpdated
              ? 'Already registered — we updated your podcast preference.'
              : 'We\u2019ll email you when your spot opens. Check your inbox for a confirmation.'}</p>
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
                onBlur={handleEmailBlur}
                aria-invalid={emailHint ? true : undefined}
                aria-describedby={emailHint ? 'email-hint' : undefined}
              />
              {emailHint && (
                <p className="form-hint form-error" id="email-hint">{emailHint}</p>
              )}
            </label>

            <label>
              <span>Favorite podcast <span className="optional-label">(optional)</span></span>
              <textarea
                placeholder="e.g. Acquired, The Daily, Pivot, All-In Podcast"
                value={podcast}
                onChange={(event) => setPodcast(event.target.value)}
                rows={2}
                maxLength={500}
              />
              <p className="field-benefit">We&apos;ll onboard your content first.</p>
            </label>

            <button className="primary-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                'Join early access'
              )}
            </button>

            {submitError && (
              <p className="form-hint form-error" role="alert">
                {submitError}
              </p>
            )}
          </form>
        )}

        <div className="social-proof">
          <p className="efficacy-line">
            Free during early access. Limited spots.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EarlyAccess
