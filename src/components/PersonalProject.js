import { Card, Button } from "react-bootstrap";

const PersonalProject = ({ project }) => {
  return (
    <Card className="card" style={{ width: "25rem", height: "20rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.short}</Card.Text>
        <div className="card-container">
          <Button className="card-button" variant="outline-dark">
            Go →
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonalProject;
