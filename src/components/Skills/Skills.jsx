function Skills() {

  const skills = [

    {
      title: "Frontend",
      items: ["React JS" ,"HTML", "CSS ", "JavaScript."]
    },

    {
      title: "Backend",
      items: [" Java " , " Spring Boot", " Python ", " Django. "]
    },

    {
      title: "Database",
      items: [" MySQL ", " MongoDB", " REST APIs. "]
    },

    {
      title: "Tools",
      items: [" Git ", " GitHub ", " Docker", " VS Code. "]
    }

  ];

  return (

    <section className="skills" id="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <h3>{skill.title}</h3>

            <div className="skill-tags">

              {skill.items.map((item, i) => (

                <span key={i}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;