import { Head } from 'vite-react-ssg'
import ContentLayout from '../components/ContentLayout'
import BlogCard from '../components/BlogCard'
import EntityDefinition from '../components/EntityDefinition'

type PostMeta = {
  title: string
  description: string
  date: string
  slug: string
  readTime: string
}

const modules = import.meta.glob<{ frontmatter: PostMeta }>(
  '../../content/blog/*.mdx',
  { eager: true },
)

const posts = Object.values(modules)
  .map(mod => mod.frontmatter)
  .filter((fm): fm is PostMeta => fm != null && typeof fm.title === 'string')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

function BlogListing() {
  return (
    <ContentLayout>
      <Head>
        <title>Blog | ShadowSpeak</title>
        <meta name="description" content="Articles about English delivery, pronunciation, and podcast-based learning." />
        <meta property="og:title" content="Blog | ShadowSpeak" />
        <meta property="og:description" content="Articles about English delivery, pronunciation, and podcast-based learning." />
        <link rel="canonical" href="https://shadowspeak-marketing.vercel.app/blog" />
      </Head>
      <section className="blog-listing">
        <h1>Blog</h1>
        <div className="blog-grid">
          {posts.map(post => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
            />
          ))}
        </div>
      </section>
      <EntityDefinition />
    </ContentLayout>
  )
}

export const Component = BlogListing
