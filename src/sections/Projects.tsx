import { useState } from 'react'
import { CaseStudyModal } from '../components/CaseStudyModal'
import { ProjectCard } from '../components/ProjectCard'
import { SectionTitle } from '../components/SectionTitle'
import { projects, type Project } from '../data/projects'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [returnFocusTo, setReturnFocusTo] = useState<HTMLButtonElement | null>(null)
  const openCaseStudy = (project: Project, trigger: HTMLButtonElement) => { setReturnFocusTo(trigger); setSelectedProject(project) }
  const closeCaseStudy = () => { setSelectedProject(null); setReturnFocusTo(null) }
  return <section className="section projects-section" id="proyectos"><SectionTitle eyebrow="03 / PROYECTOS" title="Productos pensados para la operación diaria." description="Cada proyecto se presenta como case study para respetar la confidencialidad del código y la información." /><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={openCaseStudy} />)}</div>{selectedProject && <CaseStudyModal project={selectedProject} returnFocusTo={returnFocusTo} onClose={closeCaseStudy} />}</section>
}
