function Timeline() {

  const education = [

    {
      title: "B.Sc Computer Science",
      year: "2021 - 2024",
      desc: "Focused on full stack development, databases and software engineering."
    },

    {
      title: "Python Full Stack Development",
      year: "Certification",
      desc: "Learned React, Django, REST APIs, backend systems and deployment."
    },

    {
      title: "Frontend Development",
      year: "Self Learning",
      desc: "Built responsive UI/UX projects using React, JavaScript and modern CSS."
    },

    {
      title: "Backend Development",
      year: "Practice Projects",
      desc: "Worked with Java, Spring Boot, MySQL and scalable backend architecture."
    }

  ];

  return (

    <section className="timeline" id="education">

      <h2>
        Education
      </h2>

      <div className="education-grid">

        {education.map((item, index) => (

          <div
            className="education-card"
            key={index}
          >

            <span className="education-year">
              {item.year}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;