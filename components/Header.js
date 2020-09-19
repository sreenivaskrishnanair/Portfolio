import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGem from "@fortawesome/fontawesome-free-regular/faGem";
import { FaGem } from "react-icons/fa";

const Header = (props) => {
  console.log("resume", props.resume);
  return (
    <header id="header" style={props.timeout ? { display: "none" } : {}}>
      <div className="logo">
        <img className="logo" src="./images/logo.png" alt="Italiany "></img>
      </div>
      <div className="content">
        <div className="inner">
          <h1>sreenivas krishna nair</h1>
          <p>Student at <a href="https://www.wisc.edu">UW - Madison</a> majoring in Computer science and
                computer engineering.  <br />Excited to explore oppurtunites in full stack development and Deep learning.</p>
        </div>
      </div>
      <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('skills') }}>skills</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('projects') }}>projects</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
                <li><a href="https://github.com/sreenivaskrishnanair/Resume/blob/master/resume.pdf">resume</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('certifications') }}>certifications </a></li>
            </ul>
        </nav>
    </header>
  );
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
