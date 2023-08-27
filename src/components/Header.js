import Weather from "./Weather";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <Weather />
      <Link to="/contact">
        <Button variant="outline-dark">Say Hello</Button>
      </Link>
    </div>
  );
};
export default Header;
