
export default function Resume() {
  return (
    <section className="section container" id="resume">
      <div className="section-heading">
        <div>
          <span className="eyebrow">RESUME</span>
          <h2>
            Get to know <span className="text-gradient">my background</span>
            {/*<span className="about-title-sparkle">✦</span>*/}
          </h2>
        </div>
        <p className="section-intro">A path built on continuous learning, adaptability, and a strong work ethic across different environments.</p>
      </div>

      <div className="resume-grid">
        {/* EXPERIENCE */}
        <article className="panel resume-panel">
          <div className="panel-heading">
            <h3>Experience</h3>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2021 — 2025</span>
              <div>
                <h4>Retail Assistant & Locksmithing Operator</h4>
                <p className="timeline-place">
                  Ferreteria Santa Anna · Blanes, Spain
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2019 — 2021</span>
              <div>
                <h4>English Teacher</h4>
                <p className="timeline-place">
                  Kids & Us · Blanes, Spain
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2013 — 2014</span>
              <div>
                <h4>Production Assistant</h4>
                <p className="timeline-place">
                  betevé · Barcelona, Spain
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2010 — 2018</span>
              <div>
                <h4>Retail Experience</h4>
                <p className="timeline-place">
                  Various companies · Spain
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* EDUCATION */}
        <article className="panel skills-panel">
          <div className="panel-heading">
            <h3>Education</h3>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2025 — PRESENT</span>
              <div>
                <h4>Web Application Development (DAW)</h4>
                <p className="timeline-place">
                  Institut Sa Palomera · Blanes, Spain
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2015 — 2022</span>
              <div>
                <h4>English Studies</h4>
                <p className="timeline-place">
                  University of Barcelona · Barcelona, Spain
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2011 — 2014</span>
              <div>
                <h4>Audiovisual, Radio & Entertainment Production</h4>
                <p className="timeline-place">
                  EMAV · Barcelona, Spain
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="resume-cta">
        <p className="muted">Take a closer look</p>
        <a href="/cv" className="resume-cta-link">
          View my full CV <span aria-hidden="true">↗</span>
        </a>
      </div>
      
    </section>
  );
}
