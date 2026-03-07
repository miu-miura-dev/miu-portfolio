import { ProjectCard } from "./components/ProjectCard"
import { projects } from "./data/projects"

function App() {
  return (
    <div className="container">
      <h1>Miu Portfolio</h1>

      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default App