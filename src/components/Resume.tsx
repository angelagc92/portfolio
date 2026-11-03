const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "PHP", "MySQL", "Git",
];

export default function Resume() {
  return (
    <section className="section container" id="resume">
      <div className="section-heading">
        <div>
          <span className="eyebrow">THE BACKGROUND</span>
          <h2>A little more <span className="text-gradient">about my journey.</span></h2>
        </div>
        <p className="section-intro">
          What I&apos;m learning, what I&apos;ve worked on and the tools I use
          to turn ideas into working products.
        </p>
      </div>

      <div className="resume-grid">
        <article className="panel resume-panel">
          <div className="panel-heading">
            <span className="panel-icon">⌁</span>
            <h3>Education & experience</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">CURRENT</span>
              <div>
                <h4>Web Application Development (DAW)</h4>
                <p className="timeline-place">Vocational training · Spain</p>
                <p className="muted">
                  Learning to design, develop and maintain web applications,
                  working across front-end and back-end technologies.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">NEXT</span>
              <div>
                <h4>What comes next</h4>
                <p className="timeline-place">Open to opportunities</p>
                <p className="muted">
                  Looking forward to applying what I learn to real projects
                  and growing as a developer.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="panel skills-panel">
          <div className="panel-heading">
            <span className="panel-icon">⌘</span>
            <h3>Tools & technologies</h3>
          </div>
          <p className="muted skills-description">
            Technologies I&apos;ve been learning and using in my projects.
          </p>
          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill-tag" key={skill}>{skill}</span>
            ))}
          </div>
          <div className="learning-note">
            <span className="learning-indicator" />
            Always learning, always building.
          </div>
        </article>
      </div>
    </section>
  );
}
