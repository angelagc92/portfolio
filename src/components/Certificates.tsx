const certificates = [
  {
    title: "Database Administration with MySQL",
    issuer: "Oracle Academy",
    detail: "2026 · 87 hours",
    mark: "01",
    href: "/documents/mysql_certificate.pdf",
  },
  {
    title: "Object-Oriented Programming in Java",
    issuer: "Oracle Academy",
    detail: "2026 · 48 hours",
    mark: "02",
    href: "/documents/java_certificate.pdf",
  },
  {
    title: "C1 Advanced – Grade A",
    issuer: "Cambridge English",
    detail: "2026 · CEFR Level C2",
    mark: "03",
    href: "/documents/StatementOfResult_C1.pdf",
  },
];

export default function Certificates() {
  return (
    <section className="section container" id="certificates">
      <div className="section-heading">
        <div>
          <span className="eyebrow">CERTIFICATES</span>
          <h2>
            Building <span className="text-gradient">knowledge</span>
          </h2>
        </div>
        <p className="section-intro">
          Formal certifications tracking my academic progress, technical skills, and language proficiency.
        </p>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <a
            className="panel certificate-card"
            key={certificate.mark}
            href={certificate.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="certificate-top">
              <span className="certificate-mark">{certificate.mark}</span>
              <span className="certificate-icon" aria-hidden="true">↗</span>
            </div>

            <div>
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <p className="muted certificate-detail">{certificate.detail}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="certificates-cta">
        <p className="muted">Additional certificates and diplomas</p>
        <a
          href="https://drive.google.com/drive/folders/1ioRtYWxNHzrVxmB8EjcTPt3ugH1C3fQN?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="certificates-cta-link"
        >
          View all certificates ↗
        </a>
      </div>
    </section>
  );
}