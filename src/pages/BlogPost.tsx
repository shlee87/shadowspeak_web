import { useParams } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { MDXProvider } from '@mdx-js/react'
import ContentLayout from '../components/ContentLayout'
import EntityDefinition from '../components/EntityDefinition'
import BlogCta from '../components/BlogCta'

type PostModule = {
  default: React.ComponentType
  frontmatter: {
    title: string
    description: string
    date: string
    slug: string
    readTime: string
    og_image?: string
  }
}

const contentModules = import.meta.glob<PostModule>(
  '../../content/blog/*.mdx',
  { eager: true },
)

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="blog-h1" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="blog-h2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="blog-h3" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="blog-p" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => <blockquote className="blog-blockquote" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="blog-link" {...props} />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="blog-table-wrapper"><table className="blog-table" {...props} /></div>
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img className="blog-img" {...props} />,
  code: (props: React.HTMLAttributes<HTMLElement>) => <code className="blog-code" {...props} />,
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre className="blog-pre" {...props} />,
}

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  const entry = Object.entries(contentModules).find(
    ([, mod]) => mod.frontmatter?.slug === slug,
  )

  if (!entry) {
    return (
      <ContentLayout>
        <div className="blog-post">
          <h1>Post not found</h1>
          <p>This article may have been moved. <a href="/blog">Browse all posts.</a></p>
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
          <meta property="og:type" content="article" />
          {frontmatter.og_image && <meta property="og:image" content={frontmatter.og_image} />}
          <link rel="canonical" href={`https://shadowspeak-marketing.vercel.app/blog/${slug}`} />
        </Head>
        <article className="blog-post">
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <time>{frontmatter.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{frontmatter.readTime}</span>
            </div>
          </header>
          <Content />
          <EntityDefinition />
          <BlogCta />
        </article>
      </ContentLayout>
    </MDXProvider>
  )
}

export const Component = BlogPost
