const projects = [
  {
    number: "01",
    type: "WEB APPLICATION · COURSE PROJECT",
    title: "Event management platform",
    description:
      "A platform concept for managing events, user accounts and ticket bookings. Add a short explanation of the features you implemented.",
    stack: ["PHP", "MySQL", "JavaScript"],
    link: "#contact",
    linkLabel: "Ask me about this project",
  },
  {
    number: "02",
    type: "BACK-END · PRACTICE PROJECT",
    title: "Content management with PHP",
    description:
      "A small CRUD application focused on database connections, prepared statements and managing content through a simple interface.",
    stack: ["PHP", "PDO", "MySQL"],
    link: "#contact",
    linkLabel: "Ask me about this project",
  },
  {
    number: "03",
    type: "PERSONAL · PORTFOLIO",
    title: "Personal portfolio",
    description:
      "A space to bring together my work, document what I’m learning and share the projects I’m building.",
    stack: ["Next.js", "React", "TypeScript"],
    link: "#top",
    linkLabel: "You are here",
  },
];

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-heading">
        <div>
          <span className="eyebrow">SELECTED WORK</span>
          <h2>Things I&apos;ve <span className="text-gradient">made.</span></h2>
        </div>
        <p className="section-intro">
          A selection of projects, experiments and things I&apos;ve enjoyed
          building along the way.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="panel project-card" key={project.number}>
            <div className={`project-art project-art-${project.number}`}>
              <span className="project-art-number">{project.number}</span>
              <div className="project-art-shape" />
              <span className="project-art-caption">SELECTED PROJECT</span>
            </div>
            <div className="project-content">
              <span className="eyebrow project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p className="muted">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="text-link" href={project.link}>
                {project.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="content-note">
        Project descriptions and links are starter content. Replace them with
        your final screenshots, repository links and live demos.
      </p>
    </section>
  );
}
