import { Link } from 'react-router-dom'

type BlogCardProps = {
  title: string
  description: string
  date: string
  readTime: string
  slug: string
}

function BlogCard({ title, description, date, readTime, slug }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="glass-card blog-card">
      <h2 className="blog-card-title">{title}</h2>
      <p className="blog-card-excerpt">{description}</p>
      <div className="blog-card-meta">
        <time>{date}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{readTime}</span>
      </div>
    </Link>
  )
}

export default BlogCard
