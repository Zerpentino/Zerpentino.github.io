import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'
import { CaseStudySection } from './CaseStudySection'
import { TechnologyBadge } from './TechnologyBadge'

type CaseStudyModalProps = {
  project: Project
  returnFocusTo: HTMLButtonElement | null
  onClose: () => void
}

export function CaseStudyModal({ project, returnFocusTo, onClose }: CaseStudyModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return }
      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', handleKeyDown); returnFocusTo?.focus() }
  }, [onClose, returnFocusTo])

  const detail = project.caseStudy
  return <div className="case-study-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) { event.preventDefault(); onClose() } }}>
    <div className="case-study-modal" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={`case-study-title-${project.id}`} aria-describedby={`case-study-summary-${project.id}`}>
      <header className="case-study-modal__header"><div><p className="eyebrow">{project.category} / Proyecto privado</p><h2 id={`case-study-title-${project.id}`}>{project.name}</h2></div><button className="case-study-close" ref={closeButtonRef} type="button" onClick={onClose} aria-label={`Cerrar case study de ${project.name}`}>Cerrar <span aria-hidden="true">×</span></button></header>
      <div className="case-study-modal__body">
        <p className="case-study-status">Estado: Proyecto privado · Case Study</p><p className="case-study-summary" id={`case-study-summary-${project.id}`}>{project.summary}</p>
        <CaseStudySection title="El reto / necesidad"><p>{detail.challenge}</p></CaseStudySection>
        <CaseStudySection title="Solución implementada"><p>{detail.solution}</p></CaseStudySection>
        <CaseStudySection title="Alcance técnico"><ul>{detail.scope.map((item) => <li key={item}>{item}</li>)}</ul></CaseStudySection>
        <CaseStudySection title="Arquitectura / cómo funciona"><ul>{detail.architecture.map((item) => <li key={item}>{item}</li>)}</ul></CaseStudySection>
        <CaseStudySection title="Tecnologías"><div className="badge-list" aria-label={`Tecnologías de ${project.name}`}>{project.stack.map((item) => <TechnologyBadge key={item}>{item}</TechnologyBadge>)}</div></CaseStudySection>
        <CaseStudySection title="Funcionalidades destacadas"><ul>{detail.features.map((item) => <li key={item}>{item}</li>)}</ul></CaseStudySection>
        <CaseStudySection title="Seguridad / integraciones"><ul>{detail.security.map((item) => <li key={item}>{item}</li>)}</ul></CaseStudySection>
        <CaseStudySection title="Aspectos técnicos documentados"><ul>{detail.technicalNotes.map((item) => <li key={item}>{item}</li>)}</ul></CaseStudySection>
      </div>
    </div>
  </div>
}
