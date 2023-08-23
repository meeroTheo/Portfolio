import Home from "./Home";
import ProjectsList from "./ProjectsList";
import Header from "./Header";
import data from "../userdata";

import Contact from "./Contact";

const Landing = () => {
  return (
    <div className="App">
      <div className="fullPage">
        <Header />
        <Home name={data.landingName} paragraph={data.landingPara} />
      </div>
      <ProjectsList projects={data.projects} />

      <Contact email={data.emailContact} socials={data.socials} />
    </div>
  );
};
export default Landing;
