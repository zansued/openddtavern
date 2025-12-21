import { Skill } from "../types/characterSheet";

const SkillsList = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="card">
      <h3 className="section-title">Perícias</h3>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skills-item">
            <span className="skills-name">
              {skill.proficient ? "●" : "○"} {skill.name}
            </span>
            <span className="skills-ability">{skill.ability}</span>
            <span className="skills-bonus">{skill.bonus >= 0 ? `+${skill.bonus}` : skill.bonus}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
