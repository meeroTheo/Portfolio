import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const PersonalProject = ({ project }) => {
    
  const style = {
    backgroundImage: `url('../assets/${project.imageSrc}')`,
    backgroundSize: "100% auto",
    elevation: 0,
  }
  return (
    <Card className="card fade-card" style = {style}>
      
      <Card.Body className="card-container">
        <div className="cardContent">
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.short}</Card.Text>
        </div>
        <div>
        {project.id === 1 ? (
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button className="card-button" variant="outline-dark">
                Request
              </Button>
            </Link>
          ) : (
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
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonalProject;
