function ProjectCard({ title, tech, description }) {
  return (
    <div className="project-card">
      <div className="status">
        <span className="dot"></span>
        
      </div>

      <h3>{title}</h3>

      <div className="tags">
        {tech.map((item, index) => (
          <span key={index}>
            {item}
          </span>
        ))}
      </div>

      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;