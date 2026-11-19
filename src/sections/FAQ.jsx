import { useState } from "react";
import { FAQS } from "../data/site";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <span className="grad-text">questions</span>
            </>
          }
          lede="Quick answers about my skills, projects and learning path."
        />

        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item glass ${isOpen ? "is-open" : ""}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    <Icon name="chevronDown" size={16} />
                  </span>
                </button>

                {isOpen ? (
                  <div className="faq-panel">
                    <div className="faq-panel-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
