function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span>{skill}</span>

            <div className="progress-line">
              <div className="progress-fill"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;