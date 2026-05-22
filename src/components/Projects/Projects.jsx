function Projects() {

  const projects = [

    {
      title: "EdTech Platform",
      tech: "React • Django • MySQL",
      desc: "Multi-role learning platform with Admin, Teacher and Student modules."
    },

    {
      title: "Student Management",
      tech: "Java • Spring Boot • MySQL",
      desc: "Attendance tracking, marks management and reporting dashboard."
    },

    {
      title: "E-Commerce Platform",
      tech: "React • MongoDB • Docker",
      desc: "Modern shopping platform with secure authentication and payments."
    }

  ];

  return (

    <section className="projects" id="projects">

      <h2>Projects</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-top">

              <span className="project-number">
                0{index + 1}
              </span>

            </div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="project-tech">
              {project.tech}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;