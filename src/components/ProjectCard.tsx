type Props = {
  title: string
  description: string
  url: string
}

export const ProjectCard = ({ title, description, url }: Props) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank">
        View Project
      </a>
    </div>
  )
}