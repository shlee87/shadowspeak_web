function PrivacyPolicy() {
  return (
    <div className="privacy-page wrapper">
      <h1>Privacy Policy</h1>
      <p className="privacy-updated">Last updated: March 2026</p>

      <section>
        <h2>What We Collect</h2>
        <p>When you sign up for early access, we collect:</p>
        <ul>
          <li>Your email address</li>
          <li>Your podcast preference</li>
        </ul>
        <p>That&apos;s it. We do not collect any other personal information.</p>
      </section>

      <section>
        <h2>How We Use Your Data</h2>
        <p>
          We use your email address to send early access invitations and product updates about ShadowSpeak. Your podcast preference helps us prioritize which podcasts to support first.
        </p>
        <p>We never sell, rent, or share your information with third parties.</p>
      </section>

      <section>
        <h2>Where Your Data Is Stored</h2>
        <p>
          Your data is stored in Supabase, a hosted PostgreSQL database with encryption at rest. Our infrastructure is designed to keep your information secure.
        </p>
      </section>

      <section>
        <h2>What We Don&apos;t Do</h2>
        <ul>
          <li>No tracking or analytics</li>
          <li>No cookies</li>
          <li>No third-party data sharing</li>
          <li>No advertising</li>
        </ul>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          You can request deletion of your data at any time. Once deleted, your information is permanently removed from our database.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Questions about your data? Reach out through our early access form on the home page.</p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
