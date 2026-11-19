import { useEffect, useRef } from "react"
import Icon from "./Icon"

function getFocusable(container) {
  return container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  )
}

export default function Modal({ open, onClose, title, children }) {
  const cardRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose()
        return
      }
      if (event.key === "Tab" && cardRef.current) {
        const focusable = [...getFocusable(cardRef.current)]
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", onKey)
    document.body.classList.add("modal-open")
    const previous = document.activeElement
    closeRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.classList.remove("modal-open")
      previous?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={cardRef}
      >
        <div className="modal-head">
          <h3>{title}</h3>
          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label="Close dialog"
            ref={closeRef}
          >
            <Icon name="x" size={18} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
