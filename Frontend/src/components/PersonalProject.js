import { Card, Button } from "react-bootstrap";
const PersonalProject = ({ project }) => {
    
  const style = {
    backgroundImage: `url('../assets/${project.imageSrc}')`,
    backgroundSize: "100% auto",

  }
  return (
    <Card className="card" style = {style}>
      
      <Card.Body className="card-container">
        <div className="cardContent">
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.short}</Card.Text>
        </div>
        <div>
          <a
            href={project.git}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button className="card-button" variant="outline-dark">
              Go →
            </Button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonalProject;
