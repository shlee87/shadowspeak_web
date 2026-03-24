import { useParams } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { MDXProvider } from '@mdx-js/react'
import ContentLayout from '../components/ContentLayout'
import EntityDefinition from '../components/EntityDefinition'
import FaqSchema from '../components/FaqSchema'
import BlogCta from '../components/BlogCta'

type ComparisonModule = {
  default: React.ComponentType
  frontmatter: {
    title: string
    description: string
    slug: string
    date: string
    faq?: Array<{ question: string, answer: string }>
  }
}

const comparisonModules = import.meta.glob<ComparisonModule>(
  '../../content/comparison/*.mdx',
  { eager: true },
)

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="blog-h1" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="blog-h2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="blog-h3" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="blog-p" {...props} />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="comparison-table glass-card"><table {...props} /></div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => <th scope="col" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="blog-link" {...props} />,
}

function ComparisonPage() {
  const { competitor } = useParams<{ competitor: string }>()

  const entry = Object.entries(comparisonModules).find(
    ([, mod]) => mod.frontmatter?.slug === competitor,
  )

  if (!entry) {
    return (
      <ContentLayout>
        <div className="blog-post">
          <h1>Page not found</h1>
          <p>This comparison may have been moved. <a href="/blog">Browse all posts.</a></p>
        </div>
      </ContentLayout>
    )
  }

  const [, { default: Content, frontmatter }] = entry

  return (
    <MDXProvider components={mdxComponents}>
      <ContentLayout>
        <Head>
          <title>{frontmatter.title} | ShadowSpeak</title>
          <meta name="description" content={frontmatter.description} />
          <meta property="og:title" content={frontmatter.title} />
          <meta property="og:description" content={frontmatter.description} />
          <link rel="canonical" href={`https://shadowspeak-marketing.vercel.app/vs/${competitor}`} />
        </Head>
        <article className="comparison-page">
          <Content />
          {frontmatter.faq && <FaqSchema items={frontmatter.faq} />}
          <EntityDefinition />
          <BlogCta />
        </article>
      </ContentLayout>
    </MDXProvider>
  )
}

export const Component = ComparisonPage
