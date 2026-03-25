type Props = {
  image: string
  title: string
  description: string
  tech: string[]
  ingenuity: string[]
  demoUrl: string
  githubUrl: string
}

export const ProjectCard = ({
  image,
  title,
  description,
  tech,
  ingenuity,
  demoUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="project-card">
      
      {/* 左 */}
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <p className="project-card__description">{description}</p>

        <div className="project-card__tech">
          {tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <ul className="project-card__ingenuity">
          {ingenuity.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="project-card__links">
          <a href={demoUrl} className="project-card__demo">Demo</a>
          <a href={githubUrl} className="project-card__github">GitHub</a>
        </div>
      </div>

      {/* 右 */}
      <div className="project-card__image">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}