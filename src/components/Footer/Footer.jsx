import {
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <p>
        © 2026 Prasanth | Full Stack Developer
      </p>

      <div className="footer-links">

        <a
          href="https://linkedin.com/in/prasanth-o-a7lalb322"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:prasanth4584@gmail.com"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

      </div>

    </footer>
  );
}

export default Footer;