import "./Skill.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiAmazonaws,
  SiPowerbi,
  SiVisualstudio,
  SiPython,
  SiFramer,
  SiGoogle,
  SiOpenai,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { GiDolphin } from "react-icons/gi";
import Marquee from "react-fast-marquee";

function Skills() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "AWS", icon: <SiAmazonaws /> },
    { name: "Power BI", icon: <SiPowerbi /> },
    { name: "VS Code", icon: <SiVisualstudio /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "EmailJS", icon: <MdEmail /> },
    { name: "Google Workspace", icon: <SiGoogle /> },
    { name: "ChatGPT", icon: <SiOpenai /> },
  ];

  return (
    <section className="paddings skills-section">
      <h2 className="primaryText">Skills</h2>
      <p className="secondaryText m-top">
        Tools and technologies. I’ve worked with in my journey.
      </p>

      <Marquee speed={50} pauseOnHover gradient={false}>
        {skills.map((skill, index) => (
          <div className="skill-card m-top" key={index} id="skills">
            <div className="icon">{skill.icon}</div>
            <span id="Projects">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default Skills;
