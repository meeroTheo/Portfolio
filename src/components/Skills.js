import SkillBox from "./SkillBox";

const Skills = ({ skills }) => {
  return (
    <div className="skillContainer">
      <div className="skillList">
        {skills.map((skill) => (
          <SkillBox key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
