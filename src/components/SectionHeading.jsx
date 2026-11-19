import Icon from "./Icon"

export default function SectionHeading({ eyebrow, title, lede, align = "center" }) {
  return (
    <div className={`section-head reveal ${align === "center" ? "is-center" : "is-left"}`}>
      {eyebrow ? (
        <span className="section-eyebrow">
          <Icon name="sparkles" size={14} />
          <span>{eyebrow}</span>
        </span>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {lede ? <p className="section-lede">{lede}</p> : null}
    </div>
  )
}
