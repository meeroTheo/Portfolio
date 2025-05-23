import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSpotify,
  FaEnvelope,
} from 'react-icons/fa';


const SocialIcons = () => {
  const socialLinks = [
    { id: 'gmail', href: 'mailto:meertb@hotmail.com', Icon: FaEnvelope, label: 'Gmail', sizeClass: 'size-7 sm:size-6' },
    { id: 'github', href: 'https://github.com/meeroTheo', Icon: FaGithub, label: 'GitHub', sizeClass: 'size-6' },
    { id: 'linkedin', href: 'https://www.linkedin.com/in/meertbaloch/', Icon: FaLinkedin, label: 'LinkedIn', sizeClass: 'size-7 sm:size-6' },
    { id: 'instagram', href: 'https://www.instagram.com/meer_tb', Icon: FaInstagram, label: 'Instagram', sizeClass: 'size-7 sm:size-6' },
    { id: 'spotify', href: 'https://open.spotify.com/playlist/0S0GR4pTfYv0rMlPHP4zLE?si=b2kGwPfwRZ-wUTjCBfxiOg', Icon: FaSpotify, label: 'Spotify', sizeClass: 'size-6' },
  ];

  return (
    <div id="contact-bar-main" className="h-10 w-full xs:w-[80%] sm:w-[50%] lg:w-[320px] mx-auto mt-8 xs:mt-0 sm:m-0 flex justify-start gap-x-4 items-center">
      {socialLinks.map(({ id, href, Icon, label, sizeClass }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} link`}
          className="text-black hover:opacity-70 transition-opacity"
        >
          <Icon className={sizeClass} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;