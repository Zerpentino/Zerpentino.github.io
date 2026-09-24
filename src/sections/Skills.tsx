import { SectionTitle } from '../components/SectionTitle'
import { TechnologyBadge } from '../components/TechnologyBadge'
import { skillGroups } from '../data/skills'
export function Skills() { return <section className="section skills-section" id="tecnologias"><SectionTitle eyebrow="02 / STACK" title="Herramientas para construir de extremo a extremo." description="Tecnologías utilizadas en soluciones móviles, web y backend." /><div className="skills-grid">{skillGroups.map((group) => <article key={group.title} className="skill-group"><h3>{group.title}</h3><div className="badge-list">{group.items.map((item) => <TechnologyBadge key={item}>{item}</TechnologyBadge>)}</div></article>)}</div></section> }
