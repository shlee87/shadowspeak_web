import { Head } from 'vite-react-ssg'

function EntityDefinition() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ShadowSpeak',
    applicationCategory: 'EducationApplication',
    operatingSystem: 'iOS',
    description: 'Podcast-based English delivery practice app that measures stress, chunking, pitch, and pronunciation against real podcast speakers.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
    },
  }

  return (
    <>
      <aside className="entity-definition">
        <p>
          <strong>ShadowSpeak</strong> is a podcast-based English delivery practice app that measures stress, chunking, pitch, and pronunciation against real podcast speakers.
        </p>
      </aside>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
    </>
  )
}

export default EntityDefinition
