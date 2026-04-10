import { ProjectCard } from "../../works/ProjectCard";
import { projects } from "../../../data/projects";
import "./Works.css";

const Works = () => {
  return (
    <section id="works" className="works">
      <h2>Works</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;