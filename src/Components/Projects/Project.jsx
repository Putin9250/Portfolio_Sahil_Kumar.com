import "./Project.css";

function Project() {
  const projectsData = [
    {
      id: 1,
      title: "Orange Fanta",
      image: "Project3.png",
      description:
        "Designed and developed a vibrant, fully responsive landing page for a Fanta-inspired beverage brand. The site reflects a fizzy, colorful user experience that mirrors the bold flavor and lively spirit of the drink.",
      role: "Frontend Developer",
      technologies: ["React.JS", "Tailwind CSS", "Netlify"],
      impact:
        "Learned responsive design with Tailwind, smooth animations with Framer Motion, and deployed my product-themed React site using Netlify.",
      liveLink: "https://splendorous-malasada-67f087.netlify.app/",
      githubLink: "https://github.com/Putin9250/Fanta.com",
      testimonial:
        "A vibrant site that feels as fresh as the drink itself — smooth, colorful, and delightfully interactive. Great execution!",
    },
    {
      id: 2,
      title: "Martial Arts Academy (Freelancing)",
      image: "Project1.png",
      description:
        "Crafted a responsive and engaging website for Final Round Fight Club, A Professional MMA Academy.",
      role: "Frontend Developer",
      technologies: ["React.JS", "Swiper.JS", "Framer Motion"],
      impact:
        "Improved students understanding about Academy and digital presence.",
      liveLink: "https://putin9250.github.io/FinalRoundFightClub/",
      githubLink:
        "https://github.com/Putin9250/FinalRoundFightClub/tree/master",
      testimonial:
        "Delivered with precision. The new site brought us real engagement. Highly appreciated!",
    },
    {
      id: 3,
      title: "University Portfolio Website",
      image: "Project2.jpeg",
      description:
        "A clean and structured personal website created as a frontend practice project, showcasing academic and extracurricular details.",
      role: "Frontend Developer",
      technologies: ["GitHub", "CSS", "JavaScript"],
      impact:
        "Helped strengthen fundamentals in layout, responsiveness, and semantic structure.",
      liveLink: "https://putin9250.github.io/University/",
      githubLink: "https://github.com/Putin9250/University",
      testimonial:
        "Simple, clear, and thoughtfully crafted — a solid foundation project.",
    },
  ];

  return (
    <section className="paddings flexColCenter P-Wrapper">
      <h2 className="primaryText">Projects</h2>
      <p className="secondaryText m-top value-quote">
        Code is not just syntax—it’s soul. These projects are my chapters, each
        written in logic and light.
      </p>

      <div key={projectsData.id} className="project-wrapper">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} loading="lazy"/>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Role:</strong> {project.role}
            </p>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <p>
              <strong>Impact:</strong> {project.impact}
            </p>
            <div className="links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            {project.testimonial && (
              <blockquote>"{project.testimonial}"</blockquote>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
