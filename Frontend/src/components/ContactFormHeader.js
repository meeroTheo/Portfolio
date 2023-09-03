import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
const ContactFormHeader = () => {
  return (
    <div className="contactHeaderContainer">
      <div className="closeButton">
        <Link to="/">
          <CloseRoundedIcon />
          <a href={`/`}></a>
        </Link>
      </div>
      <hr />
      <div className="contactHeaderMessage">
        <h1>
          Thanks for taking the time to reach out. How can I help you today?
        </h1>
      </div>
    </div>
  );
};
export default ContactFormHeader;
