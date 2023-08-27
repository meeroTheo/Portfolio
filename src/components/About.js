import Skills from "./Skills";
const About = ({ skills, para }) => {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <h2>About Me</h2>
        <p>{para}</p>
      </div>
      <div className="skillsContainer">
        <Skills skills={skills} />
      </div>
    </div>
  );
};
export default About;
