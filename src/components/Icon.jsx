import { ICONS } from "../icons"

export default function Icon({ name, size = 20, className = "", strokeWidth = 1.8, ...props }) {
  const Cmp = ICONS[name] || ICONS.sparkles
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} {...props} />
}
