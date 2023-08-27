import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = ({ email, socials }) => {
  return (
    <div className="contactContainer">
      <div className="socialsContainer">
        <a href={`mailto:${email}`}>
          <EmailIcon sx={{ fontSize: "2rem" }} />
        </a>
        <a href={socials[0].url}>
          <GitHubIcon sx={{ fontSize: "2rem" }} />
        </a>

        <a href={socials[1].url}>
          <LinkedInIcon sx={{ fontSize: "2rem" }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
