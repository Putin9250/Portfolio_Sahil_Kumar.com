import React from "react";
import "./Experience.css";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experienceData = [
  {
    role: "Field Associate Intern",
    company: "Parahittech",
    duration: "Dec 2024 – Feb 2025",
    location: "Delhi, India",
    certificateImg: "Parrahit.jpg",
    tasks: [
      "Collected and analyzed ground-level feedback on government campaigns.",
      "Communicated policies clearly to the public.",
      "Collect data and create daily reports.",
      "Coordinate with party workers for the execution of ground campaigns.",
      "Coordinated field workers and daily reporting.",
    ],
  },
  {
    role: "AWS Practitioner Essential Intern)",
    company: "SourceFuse",
    duration: "Mar 2024 – Aug 2024",
    location: "ITI Pusa, Delhi",
    certificateImg: "Cloud.jpg",
    tasks: [
      "Completed internship training focused on AWS core services: EC2, S3, RDS, IAM.",
      "Built scalable cloud architecture and understood infrastructure deployment models.",
      "Gained hands-on experience with AWS security, billing, and best practices.",
    ],
  },
  {
    role: "Skill Saksham Trainee (Microsoft)",
    company: "Edunet Foundation",
    duration: "Oct 2023 – Dec 2023",
    location: "ITI Pusa, Delhi",
    certificateImg: "MS SKILL.jpg",
    tasks: [
      "Mastered communication and teamwork essentials.",
      "Refined problem-solving for real-world tasks.",
      "Gained confidence for professional environments.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="exp-section" id="experience">
      <div className="exp-container paddings innerWidth">
        <h2 className="exp-heading primaryText">Professional Journey</h2>
        <div className="exp-timeline">
          {experienceData.map((item, index) => (
            <div className="exp-card" key={index}>
              <div className="exp-dot" />
              <div className="exp-content">
                <div>
                  <h3 className="exp-role">{item.role}</h3>
                  <span className="exp-company">@ {item.company}</span>
                  <div className="exp-meta">
                    <span>
                      <FaCalendarAlt /> {item.duration}
                    </span>
                    <span>
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                  </div>

                  <ul className="exp-tasks">
                    {item.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div className="exp-certificate">
                  {item.certificateImg && (
                    <a
                      href={item.certificateImg}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.certificateImg} alt="Certificate" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
