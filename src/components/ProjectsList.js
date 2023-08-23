import PersonalProject from "./PersonalProject";

const ProjectsList = ({ projects }) => {
  return (
    <div className="projectsContainer">
      <h1>My Recent Work</h1>
      <div className="projectsList">
        {projects.map((project) => (
          <PersonalProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
