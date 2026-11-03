export default function Contact() {
  return (
    <section className="section container contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-orb" />
        <div className="contact-content">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let&apos;s make something <span className="text-gradient">meaningful.</span></h2>
          <p>
            I&apos;m always happy to connect, talk about ideas or hear about
            interesting opportunities.
          </p>
          {/* Replace this address with your professional email. */}
          <a className="button button-primary" href="mailto:hello@example.com">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-links">
          {/* Replace the # links with your actual profiles. */}
          <a href="#" aria-label="GitHub profile">GitHub <span>↗</span></a>
          <a href="#" aria-label="LinkedIn profile">LinkedIn <span>↗</span></a>
          <a href="mailto:hello@example.com">Email <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}
