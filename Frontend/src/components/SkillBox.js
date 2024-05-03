import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const SkillBox = ({ skill }) => {
  let sub = "";
  switch (skill.id) {
    case 1:
      sub = "Dev Tools";
      break;
    case 2:
      sub = "Dev Tools";
      break;
    case 3:
      sub = "3D Animation";
      break;
    default:
      sub = "";
      break;
  }
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
      <br />
      <p style={{ color: "#4B21E0" }}>{sub}</p>
      {skill.tools.map((tool, index) => (
        <div key={index} className="toolItem">
          {tool}
        </div>
      ))}
    </div>
  );
};
export default SkillBox;
