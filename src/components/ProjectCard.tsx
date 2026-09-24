import type { Project } from '../data/projects'
import { TechnologyBadge } from './TechnologyBadge'

type ProjectCardProps = {
  project: Project
  index: number
  onOpen: (project: Project, trigger: HTMLButtonElement) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return <article className="project-card">
    <div className="project-card__topline"><span className="project-number">0{index + 1}</span><button className="case-study" type="button" onClick={(event) => onOpen(project, event.currentTarget)} aria-label={`Ver case study de ${project.name}`}>Ver case study</button></div>
    <p className="project-category">{project.category}</p><h3>{project.name}</h3><p className="project-summary">{project.summary}</p>
    <div className="badge-list" aria-label={`Tecnologías de ${project.name}`}>{project.stack.map((item) => <TechnologyBadge key={item}>{item}</TechnologyBadge>)}</div>
    <ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><span className="project-private">Proyecto privado · Case Study disponible</span>
  </article>
}
