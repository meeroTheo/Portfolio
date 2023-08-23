import Weather from "./Weather";
import { Button } from "react-bootstrap";
const Header = () => {
  return (
    <div className="headerContainer">
      <Weather />
      <Button variant="outline-dark">Say Hello</Button>
    </div>
  );
};
export default Header;
