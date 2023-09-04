import Skills from "./Skills";
const About = ({ skills, para }) => {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <h2>About Me</h2>
        
        <p className='aboutPara'>{para}</p>
      </div>
      <div className="skillsContainer">
        <Skills skills={skills} />
      </div>
    </div>
  );
};
export default About;
