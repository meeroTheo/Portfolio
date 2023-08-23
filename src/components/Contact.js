import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = ({ email, socials }) => {
  return (
    <div className="contactContainer">
      <div className="socialsContainer">
        <ul>
          <li>
            <a href={`mailto:${email}`}>
              <EmailIcon />
            </a>
          </li>
          <li>
            <a href={socials[0].url}>
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href={socials[1].url}>
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;
