import { Link } from "react-router-dom"
import { BLOG_POSTS } from "../data"
import Icon from "./Icon"
import SectionHeading from "./SectionHeading"

export function formatPostDate(date) {
  if (!date) return "Date not set"
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return "Date not set"
  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function PostMedia({ post, className }) {
  if (post.image) {
    return (
      <img
        src={post.image}
        alt={`${post.title} cover`}
        width="640"
        height="360"
        loading="lazy"
        decoding="async"
      />
    )
  }
  return <Icon name="bookOpen" size={44} className={`blog-media-mark ${className || ""}`} />
}

export default function Blog() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <section className="section section--tint" id="blog">
      <div className="container">
        <SectionHeading
          eyebrow="Blog"
          title={
            <>
              Latest <span className="grad-text">writing</span>
            </>
          }
          lede="Notes from my learning — digital marketing, SEO, web development, content and AI tools."
        />

        {featured ? (
          <div className="blog-featured reveal">
            <div className="featured-media">
              <PostMedia post={featured} />
            </div>
            <div className="featured-copy">
              <div className="blog-meta">
                <span className="chip chip--accent">{featured.category}</span>
                <span>
                  <Icon name="calendar" size={14} />
                  {formatPostDate(featured.date)}
                </span>
                <span>
                  <Icon name="clock" size={14} />
                  {featured.readTime}
                </span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <Link className="btn btn-primary btn-sm" to={`/blog/${featured.slug}`}>
                <span>Read More</span>
                <Icon name="arrowRight" size={15} />
              </Link>
            </div>
          </div>
        ) : null}

        <div className="blog-grid">
          {rest.map((post, index) => (
            <article className="blog-card reveal" key={post.slug} style={{ "--index": index }}>
              <div className="blog-media">
                <PostMedia post={post} />
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="chip chip--muted">{post.category}</span>
                  <span>
                    <Icon name="calendar" size={14} />
                    {formatPostDate(post.date)}
                  </span>
                  <span>
                    <Icon name="clock" size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="read-more" to={`/blog/${post.slug}`}>
                  Read More
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
