import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import './styles/portfolio.css'

function App() { return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Navbar /><main id="contenido"><Hero /><About /><Skills /><Projects /><Experience /><Education /><Contact /></main><footer><span>Salvador Arevalo Navarro</span><span>Full Stack Developer Jr.</span><span>© {new Date().getFullYear()}</span></footer></> }
export default App
