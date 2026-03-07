import { ProjectCard } from "./components/ProjectCard"
import { projects } from "./data/projects"

function App() {
  return (
    <div className="container">
      <h1>Miu Portfolio</h1>

      <p>
  GitHub: 
  <a href="https://github.com/miu-miura-dev" target="_blank">
    https://github.com/miu-miura-dev
  </a>
</p>

      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default App