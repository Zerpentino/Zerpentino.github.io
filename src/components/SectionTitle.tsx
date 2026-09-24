type Props = { eyebrow: string; title: string; description?: string }
export function SectionTitle({ eyebrow, title, description }: Props) { return <header className="section-title"><p>{eyebrow}</p><h2>{title}</h2>{description && <span>{description}</span>}</header> }
