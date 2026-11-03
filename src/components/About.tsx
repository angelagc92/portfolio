import Image from "next/image";

const softSkills = [
  "Creative thinking",
  "Visual communication",
  "Attention to detail",
  "Adaptability",
  "Problem-solving",
  "Curiosity & continuous learning",
];


const hardSkills = [
  { name: "HTML5", icon: "html5/html5-original.svg" },
  { name: "CSS3", icon: "css3/css3-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  { name: "PHP", icon: "php/php-original.svg" },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "git/git-original.svg" },
  { name: "GitHub", icon: "github/github-original.svg" },
];

export default function About() {
  return (
    <section className="section container about-section" id="about">

      <div className="about-layout">
        <div className="about-copy">
          <span className="eyebrow">ABOUT ME</span>

          <h2>
            Hello! I'm <span className="text-gradient">Angela</span>
            <span className="about-title-sparkle">✦</span>
          </h2>

          <p className="muted about-body">
            I've spent most of my time exploring different disciplines
            to figure out how I want to create and connect with others.
            That journey has taken me through audiovisual production,
            English studies, and photography—different ways of shaping
            images, words, and ideas to communicate something beyond
            the surface.
          </p>

          <p className="muted about-body">
            At first glance, these fields might seem unrelated to
            software engineering. But to me, they share a common thread:
            finding a meaningful way to tell a story, evoke a feeling,
            or craft a shared experience.
          </p>

          <p className="muted about-body">
            As someone with a soft spot for analogue mediums and a
            healthy dose of Millennial nostalgia, I'm constantly
            looking for ways to bridge the tactile warmth of the past
            with the functionality of the modern web.
          </p>

          <p className="muted about-body">
            Today, I bring that same obsession with detail, visual
            storytelling, and human-centered design into web
            development—building digital environments that feel
            structured, functional, and full of character.
          </p>
        </div>
        <div className="about-photo-wrap">
          <div className="about-photo">
            <Image
              src="/about.jpg"
              alt="Angela Garcia"
              fill
              priority
              sizes="(max-width: 680px) 100vw, 330px"
              className="about-photo-image"
            />
          </div>
          
          <span className="about-photo-frame" aria-hidden="true" />

          <span className="about-photo-caption">
            ANGELA GARCIA · WEB DEVELOPER
          </span>
        </div>

        <div className="skills-section">
          <div className="skills-group">
            <h3>Soft skills</h3>
            <div className="about-skill-list">
              {softSkills.map((skill) => (
                <span className="about-skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>Hard skills</h3>

            <div className="hard-skills-list">
              {hardSkills.map((skill) => (
                <div
                  className="hard-skill-item"
                  key={skill.name}
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                    alt={skill.name}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
