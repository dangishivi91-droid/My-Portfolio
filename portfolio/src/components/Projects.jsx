const projects = [
  {
    number: "01",
    title: "Learning Management System",
    category: "Full Stack Web Application",
    description:
      "A learning platform built with Python and Django. This project helped me apply full stack development concepts while creating a web application for online learning.",
    technologies: ["Python", "Django"],
    label: "LMS",
  },
  {
    number: "02",
    title: "E-commerce Website",
    category: "Frontend Web Application",
    description:
      "An e-commerce website built with React. I used this project to practise creating reusable components and building a clear, engaging shopping experience.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    label: "SHOP",
  },
  {
    number: "03",
    title: "Weather App",
    category: "API-based JavaScript Project",
    description:
      "A weather application built with JavaScript and a weather API. It gave me practical experience working with API data and presenting information in a web interface.",
    technologies: ["JavaScript", "Weather API", "HTML", "CSS"],
    label: "WEATHER",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">
        <div className="projects-heading">
          <p className="projects-label">
            What I’ve been building
          </p>

          <h2>
            My Projects
          </h2>

          <p>
            A selection of projects where I’ve practised full stack development,
            React, and working with APIs. Each one has helped me keep learning
            and turn ideas into working web applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-card${project.number === "03" ? " weather-card" : ""}`}
            >
              <div className="project-card-top">
                <span className="project-label">
                  {project.label}
                </span>
                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="projects-contact">
          Interested in my work?{" "}
          <a
            href="#contact"
          >
            Get in touch
          </a>
          .
        </p>
      </div>
    </section>
  );
}
