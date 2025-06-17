import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = ({ onExploreClick }) => {
  return (
    <>
      <section className="hero-wrapper" id="Home">
        <div className=" paddings innerWidth flexCenter hero-container">
          <div className="flexColStart innereWidth hero-left">
            <h1>Sahil Kumar</h1>
            <h2 className="subtitle">
              Frontend Developer & Creative Technologist
            </h2>
            <p>
              I turn imagination into interactive design — breathing life into
              pixels through elegant code. From clean user interfaces to
              responsive layouts, I craft experiences that connect and inspire.
            </p>
            <p>
              Web Developer || MMA Practitioner || Lifelong Learner ||
              Geopolitical Analyst
            </p>
            <div className=" innerWidth flexStart button">
              <span>
                <a href="#contact">
                  <button>Hire Me!</button>
                </a>
              </span>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Putin9250"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub /> ______
              </a>
              <a
                href="https://github.com/Putin9250"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaLinkedin /> ______
              </a>
            </div>
          </div>
          <div className="innereWidth hero-right">
            <img src="./rocket.png" alt="" loading="lazy" />
          </div>
        </div>
        <div className="extra" id="Value"></div>
      </section>
    </>
  );
};

export default Hero;
