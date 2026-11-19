import { useState } from "react"
import { FAQS } from "../data"
import Icon from "./Icon"

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-wrap">
          <div className="faq-aside reveal">
            <span className="section-eyebrow">
              <Icon name="sparkles" size={14} />
              <span>FAQ</span>
            </span>
            <h2 className="section-title">
              Questions, <span className="grad-text">answered</span>
            </h2>
            <p className="section-lede">
              Quick answers about who I am, what I&apos;m learning and how to reach me. Every answer
              is editable in src/data.js.
            </p>
            <div className="faq-note">
              Still curious? The contact section below is the fastest way to reach me — I&apos;m
              happy to talk about projects, learning and collaboration.
            </div>
          </div>

          <div className="faq-list">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div className={`faq-item reveal ${isOpen ? "is-open" : ""}`} key={item.question}>
                  <h3>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        <Icon name="chevronDown" size={17} />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq-answer"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
