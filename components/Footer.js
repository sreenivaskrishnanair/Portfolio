import PropTypes from "prop-types";
import SocialLinks from "./SocialLinks"

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
       <ul className="icons">
            <li><a href="https://www.linkedin.com/in/sreenivaskrishnanair">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a></li>
            <li><a href="https://www.instagram.com/sreenivaskrishnanair/">
            <i className="fab fa-instagram-square" aria-hidden="true"></i>
            </a></li>
            <li><a href="https://github.com/sreenivaskrishnanair">
            <i className="fab fa-github" aria-hidden="true"></i>
            </a></li>
          </ul>
    </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
