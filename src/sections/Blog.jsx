import { useState } from "react";
import { BLOG_POSTS } from "../data/site";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import Modal from "../components/Modal";

export default function Blog() {
  const [selected, setSelected] = useState(null);
  const post = BLOG_POSTS.find((item) => item.slug === selected);

  return (
    <section className="section section--tint" id="blog">
      <div className="container">
        <SectionHeading
          eyebrow="Blog"
          title={
            <>
              Notes from the <span className="grad-text">journey</span>
            </>
          }
          lede="Short, honest write-ups about learning, building and creating along the way."
        />

        <div className="blog-grid">
          {BLOG_POSTS.map((item) => (
            <article className="post-card glass reveal" key={item.slug}>
              <div className="post-media">
                <span className="post-meta">
                  {item.category} · {item.readTime}
                </span>
                <Icon name="penTool" size={44} />
              </div>

              <div className="post-body">
                <h3 className="post-title">{item.title}</h3>
                <p className="post-excerpt">{item.excerpt}</p>

                <div className="post-footer">
                  <span className="post-meta">{item.date ? item.date : "Date not set"}</span>
                  <button type="button" className="read-more" onClick={() => setSelected(item.slug)}>
                    Read More
                    <Icon name="arrowRight" size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)} title={post?.title ?? "Article"}>
        {post ? (
          <>
            <div className="modal-media">
              <Icon name="penTool" size={44} />
            </div>
            <h4>{post.category}</h4>
            <p>{post.excerpt}</p>
            {post.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="modal-actions">
              <button type="button" className="btn btn-ghost" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </>
        ) : null}
      </Modal>
    </section>
  );
}
