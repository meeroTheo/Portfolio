import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const SkillBox = ({ skill }) => {
  return (
    <div className="skillBoxContainer">
      {skill.id === 1 && <TerminalIcon style={{ fontSize: "3rem" }} />}
      {skill.id === 2 && <CodeIcon style={{ fontSize: "3rem" }} />}
      {skill.id === 3 && <CameraAltIcon style={{ fontSize: "3rem" }} />}

      <div className="skillBoxHeader">
        <h4 style={{ fontWeight: "600" }}>{skill.title}</h4>
      </div>
      <div className="skillBoxPara">
        <p>{skill.info}</p>
      </div>
      <div className="skillBoxSub">{skill.subheader}</div>
      <p>Dev Tools: </p>
      {skill.tools.map((tool, index) => (
        <div key={index} className="toolItem">
          {tool}
        </div>
      ))}
    </div>
  );
};
export default SkillBox;
