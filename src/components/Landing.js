import Home from "./Home";
import ProjectsList from "./ProjectsList";
import Header from "./Header";
import About from "./About";
import data from "../userdata";

import Contact from "./Contact";

const Landing = () => {
  return (
    <div className="App">
      <div className="fullPage">
        <Header />
        <Home name={data.landingName} paragraph={data.landingPara} />
      </div>
      <div className="fullWidth">
        <About skills={data.skills} para={data.landingPara} />
      </div>
      <div className="fullPage">
        <ProjectsList projects={data.projects} />
        <Contact email={data.emailContact} socials={data.socials} />
      </div>
    </div>
  );
};
export default Landing;
